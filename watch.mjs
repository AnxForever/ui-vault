#!/usr/bin/env node
// affectUI watcher — keeps this mirror current.
//
//   node watch.mjs --check     report drift only, no writes
//   node watch.mjs             fetch new/changed items and regenerate registry
//
// Drift signals, in order of reliability:
//   1. the versioned entry bundle name (assets/index-<hash>.js) in /components
//   2. sitemap.xml component list
//   3. per-item demo/component chunk names inside __vite__mapDeps
//
// State lives in .state.json. Anything it reports as new is fetched from the
// public static asset paths and restored the same way the initial mirror was.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("./", import.meta.url));
const ORIGIN = "https://www.affectui.com";
const ASSETS = path.join(ROOT, "assets");
const COMP = path.join(ROOT, "components");
const REG = path.join(ROOT, "registry");
const STATE = path.join(ROOT, ".state.json");

const argv = new Set(process.argv.slice(2));
const CHECK_ONLY = argv.has("--check");

const UA = { "User-Agent": "Mozilla/5.0 (compatible; affectui-mirror/1.0)" };

let prettier = null;
try {
  prettier = (await import("../tools/node_modules/prettier/index.mjs")).default;
} catch {
  try {
    prettier = (await import(path.join(ROOT, "tools", "node_modules", "prettier", "index.mjs"))).default;
  } catch {
    /* formatting is optional */
  }
}

const get = async (url, as = "text") => {
  const r = await fetch(url, { headers: UA });
  if (!r.ok) throw new Error(`${r.status} ${url}`);
  return as === "buffer" ? Buffer.from(await r.arrayBuffer()) : r.text();
};

function loadState() {
  try {
    return JSON.parse(fs.readFileSync(STATE, "utf8"));
  } catch {
    return { bundle: null, slugs: [], checkedAt: null, items: {} };
  }
}

async function readBundleName() {
  const html = await get(`${ORIGIN}/components`);
  const m = html.match(/\/assets\/(index-[A-Za-z0-9_\-]+\.js)/);
  return m ? m[1] : null;
}

async function readSitemapSlugs() {
  const xml = await get(`${ORIGIN}/sitemap.xml`);
  return [...xml.matchAll(/\/components\/([a-z0-9\-]+)<\/loc>/g)].map((m) => m[1]).sort();
}

async function readViteDeps(bundleName) {
  const src = await get(`${ORIGIN}/assets/${bundleName}`);
  const s = src.indexOf("m.f=[");
  if (s < 0) return { src, deps: [] };
  const e = src.indexOf("]", s);
  return { src, deps: JSON.parse(src.slice(s + 4, e + 1)) };
}

// slug -> { pro, main: [...asset paths], clean: [...] }
function parseItems(src, deps, knownSlugs) {
  const slugSet = new Set(knownSlugs);
  const hits = [];
  const re = /slug:`([a-z0-9\-]+)`/g;
  let m;
  while ((m = re.exec(src))) hits.push({ slug: m[1], at: m.index });
  const out = new Map();
  for (let i = 0; i < hits.length; i++) {
    const { slug, at } = hits[i];
    if (!slugSet.has(slug)) continue;
    const seg = src.slice(at, i + 1 < hits.length ? hits[i + 1].at : at + 5000);
    const groups = [...seg.matchAll(/__vite__mapDeps\(\[([0-9,\s]+)\]\)/g)].map((g) =>
      g[1].split(",").map((v) => +v.trim()).filter((n) => Number.isFinite(n))
    );
    const pick = (g) => (g || []).map((k) => deps[k]).filter(Boolean);
    const prev = out.get(slug);
    if (prev) continue;
    out.set(slug, { slug, pro: /pro:!0/.test(seg) ? 1 : 0, main: pick(groups[0]), clean: pick(groups[1]) });
  }
  return out;
}

function extractCss(src) {
  const seen = new Set();
  const out = [];
  const re = /([`'"])(\.ui-[a-z0-9]+\s*\{[\s\S]{150,}?)\1/g;
  let m;
  while ((m = re.exec(src))) {
    const css = m[2];
    if (!/[a-z-]+\s*:/.test(css)) continue;
    const k = css.slice(0, 60);
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(css.replace(/\$\{([^}]+)\}/g, "var(--int-$1, 200ms)"));
  }
  return out;
}

const stripExport = (s) => s.replace(/export\s*\{[^}]*\}\s*;?\s*$/u, "");

async function fmt(src) {
  if (!prettier) return src;
  try {
    return await prettier.format(src, {
      parser: "babel",
      printWidth: 110,
      semi: true,
      singleQuote: false,
      arrowParens: "always",
    });
  } catch {
    return src;
  }
}

async function download(name) {
  const dst = path.join(ASSETS, name);
  if (fs.existsSync(dst) && fs.statSync(dst).size > 0) return dst;
  const buf = await get(`${ORIGIN}/assets/${name}`, "buffer");
  fs.mkdirSync(ASSETS, { recursive: true });
  fs.writeFileSync(dst, buf);
  return dst;
}

async function restore(slug, entry) {
  const demoJs = entry.main.find((a) => /demo[\w.]*-.*\.js$/.test(a));
  const compJs = entry.main.find((a) => /component-.*\.js$/.test(a));
  if (!demoJs) return { slug, skipped: "no demo chunk" };
  const demoName = path.basename(demoJs);
  const demoPath = await download(demoName);
  let implSrc = fs.readFileSync(demoPath, "utf8");
  let implFrom = demoName;
  if (compJs) {
    const cp = await download(path.basename(compJs)).catch(() => null);
    if (cp && fs.statSync(cp).size > 200) {
      implSrc = fs.readFileSync(cp, "utf8");
      implFrom = path.basename(compJs);
    }
  }
  const css = extractCss(implSrc);
  const dir = path.join(COMP, slug);
  fs.mkdirSync(dir, { recursive: true });
  const hdr = `/*\n * affectUI · ${slug}${entry.pro ? " (Pro)" : ""}\n * Recovered from public bundle asset: ${implFrom}\n * Styles inlined in the module -> ${slug}.css\n * Minified identifiers kept; formatting by prettier.\n */\n\n`;
  fs.writeFileSync(path.join(dir, `${slug}.jsx`), hdr + (await fmt(stripExport(implSrc))), "utf8");
  if (implFrom !== demoName) {
    fs.writeFileSync(
      path.join(dir, `${slug}.demo.jsx`),
      `/* Usage example (recovered from ${demoName}) */\n\n` + (await fmt(stripExport(fs.readFileSync(demoPath, "utf8")))),
      "utf8"
    );
  }
  if (css.length) fs.writeFileSync(path.join(dir, `${slug}.css`), css.join("\n\n"), "utf8");
  return { slug, impl: implFrom, cssBlocks: css.length };
}

function writeRegistryItem(slug, pro) {
  const dir = path.join(COMP, slug);
  if (!fs.existsSync(dir)) return false;
  const files = fs.readdirSync(dir);
  const src = files.find((f) => f === `${slug}.tsx`) || files.find((f) => f.endsWith(".jsx"));
  if (!src) return false;
  const content = fs.readFileSync(path.join(dir, src), "utf8");
  let title = slug;
  let description = `affectUI ${slug}`;
  const docP = path.join(dir, "docs.md");
  if (fs.existsSync(docP)) {
    const doc = fs.readFileSync(docP, "utf8");
    const tl = doc.split("\n").find((l) => l.trim().length > 2);
    if (tl) title = tl.replace(/^#+\s*/, "").replace(/\s*\((Pro|Free)\)\s*$/, "").trim();
    const dl = doc.split("\n").find((l) => /^[A-Z][^#\-|]{20,}/.test(l.trim()));
    if (dl) description = dl.trim();
  }
  const item = {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: slug,
    type: "registry:ui",
    title,
    description,
    dependencies: [],
    registryDependencies: [],
    files: [{ path: `${slug}.tsx`, type: "registry:ui", content }],
    meta: { affectui: { pro: !!pro, recoveredFrom: "site bundle", license: "affectUI commercial / MIT for free items" } },
  };
  fs.mkdirSync(REG, { recursive: true });
  fs.writeFileSync(path.join(REG, `${slug}.json`), JSON.stringify(item, null, 2), "utf8");
  return true;
}

function rebuildIndex() {
  if (!fs.existsSync(REG)) return 0;
  const items = fs
    .readdirSync(REG)
    .filter((f) => f !== "registry.json")
    .map((f) => JSON.parse(fs.readFileSync(path.join(REG, f), "utf8")))
    .map((j) => ({
      name: j.name,
      type: j.type,
      title: j.title,
      description: j.description,
      files: j.files.map((x) => ({ path: x.path, type: x.type })),
      meta: j.meta,
    }));
  fs.writeFileSync(
    path.join(REG, "registry.json"),
    JSON.stringify(
      { $schema: "https://ui.shadcn.com/schema/registry.json", name: "affectui-local", homepage: "http://127.0.0.1:8787", items },
      null,
      2
    ),
    "utf8"
  );
  return items.length;
}

const main = async () => {
  const state = loadState();
  const bundle = await readBundleName();
  const slugs = await readSitemapSlugs();
  const report = { at: new Date().toISOString(), bundleBefore: state.bundle, bundleAfter: bundle, newSlugs: [], changedItems: [], restored: [] };

  report.bundleChanged = !!state.bundle && state.bundle !== bundle;
  report.newSlugs = slugs.filter((s) => !state.slugs.includes(s));

  if (!CHECK_ONLY) {
    const { src, deps } = await readViteDeps(bundle);
    const items = parseItems(src, deps, slugs);
    for (const [slug, entry] of items) {
      const key = entry.main.filter((a) => /\.(js|css)$/.test(a)).join(",");
      const before = state.items?.[slug];
      if (before && before === key) continue;
      report.changedItems.push({ slug, before: before || null, now: key });
      const r = await restore(slug, entry);
      writeRegistryItem(slug, entry.pro);
      report.restored.push(r);
      state.items = { ...(state.items || {}), [slug]: key };
    }
    const n = rebuildIndex();
    report.registryItems = n;
    state.bundle = bundle;
    state.slugs = slugs;
    state.checkedAt = report.at;
    fs.writeFileSync(STATE, JSON.stringify(state, null, 1), "utf8");
    fs.appendFileSync(path.join(ROOT, "CHANGELOG.md"), `\n## ${report.at}\n\n- bundle: ${bundle}\n- new slugs: ${report.newSlugs.join(", ") || "none"}\n- refreshed: ${report.restored.map((r) => r.slug).join(", ") || "none"}\n`);
  } else {
    report.changedItems = slugs
      .map((s) => ({ slug: s, before: state.items?.[s] || null }))
      .filter((x) => !x.before);
  }

  console.log(JSON.stringify(report, null, 2));
};

main().catch((e) => {
  console.error("watch failed:", e.message);
  process.exit(1);
});
