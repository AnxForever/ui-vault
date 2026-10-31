// affectUI local registry server
// Drop-in replacement for https://www.affectui.com/r/<slug>.json (no auth).
//   node serve.mjs            -> http://127.0.0.1:8787
// Then in components.json:
//   "registries": { "@affectui": "http://127.0.0.1:8787/r/{name}.json" }
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { join, extname, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("./", import.meta.url));
const PORT = Number(process.env.PORT || 8787);
const HOST = process.env.HOST || "127.0.0.1";

const MIME = {
  ".json": "application/json; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".jsx": "application/javascript; charset=utf-8",
  ".tsx": "text/plain; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
};

async function send(res, code, body, type = "application/json; charset=utf-8") {
  res.writeHead(code, {
    "Content-Type": type,
    "Access-Control-Allow-Origin": "*",
    "Cache-Control": "no-store",
  });
  res.end(body);
}

async function readIfFile(p) {
  try {
    const s = await stat(p);
    if (!s.isFile()) return null;
    return await readFile(p);
  } catch {
    return null;
  }
}

const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || HOST}`);
  let p = decodeURIComponent(url.pathname);

  if (p === "/" || p === "/health") {
    const idx = await readIfFile(join(ROOT, "registry", "registry.json"));
    const n = idx ? JSON.parse(idx.toString()).items.length : 0;
    return send(res, 200, JSON.stringify({ ok: true, items: n, registry: `http://${HOST}:${PORT}/r/registry.json` }));
  }

  // shadcn-compatible route: /r/<name>.json and /r/<name>
  if (p.startsWith("/r/")) {
    const name = p.slice(3).replace(/\.json$/, "").replace(/\/+$/, "");
    if (!name || name.includes("..")) return send(res, 400, JSON.stringify({ error: "bad name" }));
    const f = await readIfFile(join(ROOT, "registry", `${name}.json`));
    if (!f) return send(res, 404, JSON.stringify({ error: `no item "${name}"` }));
    return send(res, 200, f);
  }

  // static passthrough for components/<slug>/<file>
  const rel = normalize(p).replace(/^(\.\.[/\\])+/, "").replace(/^[/\\]+/, "");
  const f = await readIfFile(join(ROOT, rel));
  if (f) return send(res, 200, f, MIME[extname(rel)] || "application/octet-stream");
  return send(res, 404, JSON.stringify({ error: "not found", path: p }));
});

server.listen(PORT, HOST, () => {
  console.log(`affectUI local registry: http://${HOST}:${PORT}/r/registry.json`);
});
