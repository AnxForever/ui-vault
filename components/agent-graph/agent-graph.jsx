/*
 * affectUI · agent-graph (Pro)
 * Implementation recovered from public bundle asset: demo-BbHNVcxq.js
 * Styles inlined in the module -> agent-graph.css (1 block(s))
 * Demo usage: agent-graph.demo.jsx
 * Minified identifiers kept; formatting by prettier.
 */

import { t as e } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
/* empty css             */ var n = e(),
  r = t(),
  i = { idle: `Idle`, working: `Working`, waiting: `Needs you`, error: `Error`, done: `Done` },
  a = { agent: `agent`, tool: `tool`, user: `you` },
  o = (e) => (typeof e == `number` && Number.isFinite(e) ? e : void 0),
  s = (e) => {
    let t = Math.abs(e),
      n = t > 0 && t < 0.005 ? `<$0.01` : `$${t < 10 ? t.toFixed(2) : Math.round(t).toLocaleString(`en-US`)}`;
    return e < 0 && n !== `$0.00` ? `-${n}` : n;
  },
  c = (e) => String(e).padStart(2, `0`),
  l = (e) => {
    if (e < 1e3) return `${Math.round(e)}ms`;
    if (e < 6e4) return `${(e / 1e3).toFixed(1)}s`;
    let t = Math.floor(e / 6e4);
    if (t < 60) return `${t}m ${c(Math.floor(e / 1e3) % 60)}s`;
    let n = Math.floor(t / 60);
    return n < 24 ? `${n}h ${c(t % 60)}m` : `${Math.floor(n / 24)}d ${n % 24}h`;
  },
  u = (e) =>
    e
      .split(/\s+/)
      .map((e) => e.match(/[\p{L}\p{N}]/u)?.[0] ?? ``)
      .filter(Boolean)
      .slice(0, 2)
      .join(``)
      .toUpperCase(),
  d = (e, t) => (e < t ? `${e}|${t}` : `${t}|${e}`),
  f = (e, t, n) => Math.max(t, Math.min(n, e)),
  p = Math.PI * 2,
  m = (e) => {
    let t = 0,
      n = 0;
    for (let r of e) ((t += Math.sin(r * p)), (n += Math.cos(r * p)));
    return (((Math.atan2(t, n) / p) % 1) + 1) % 1;
  },
  h = (e, t, n, r) => {
    let i = [0],
      a = e,
      o = t - r;
    for (let s = 1; s <= 240; s++) {
      let c = -Math.PI / 2 + (s / 240) * p,
        l = e + n * Math.cos(c),
        u = t + r * Math.sin(c);
      (i.push(i[s - 1] + Math.hypot(l - a, u - o)), (a = l), (o = u));
    }
    let s = i[240] || 1;
    return (a) => {
      let o = (((a % 1) + 1) % 1) * s,
        c = 1;
      for (; c < 240 && i[c] < o;) c++;
      let l = (o - i[c - 1]) / (i[c] - i[c - 1] || 1),
        u = -Math.PI / 2 + ((c - 1 + l) / 240) * p;
      return { x: e + n * Math.cos(u), y: t + r * Math.sin(u) };
    };
  },
  g = {
    wide: { lead: 56, agent: 46, tool: 34, user: 34 },
    narrow: { lead: 42, agent: 34, tool: 28, user: 28 },
  },
  _ = (e, t, n, r) => {
    let i = n < 520,
      a = i ? g.narrow : g.wide,
      o = i ? 28 : 48,
      s = a.tool / 2,
      c = s + o,
      l = s + (i ? 40 : 46),
      u = s + (i ? 40 : 46),
      d = n / 2,
      f = Math.max(40, n / 2 - c),
      p = Math.max(40, (r - l - u) / 2),
      _ = l + p,
      v = 0.5,
      y = i ? 0.64 : 0.5,
      b = h(d, _, f, p),
      ee = h(d, _, f * v, p * y),
      x = e.filter((e) => e.kind === `agent`),
      S = (x.find((e) => e.lead) ?? x[0])?.id,
      te = x.filter((e) => e.id !== S),
      C = e.filter((e) => e.kind !== `agent`),
      w = new Map(),
      ne = new Map(),
      T = new Map(),
      E = new Map();
    S && (w.set(S, { x: d, y: _, ring: 0 }), T.set(S, 0), E.set(S, -1));
    let D = new Map();
    te.forEach((e, t) => {
      let n = te.length === 1 ? 0.5 : (t + 0.5) / te.length;
      (D.set(e.id, n),
        w.set(e.id, { ...ee(n), ring: 1 }),
        E.set(e.id, 140 + t * 90),
        T.set(e.id, 140 + t * 90 + 260));
    });
    let O = new Map();
    for (let [e, n] of t) (O.set(e, [...(O.get(e) ?? []), n]), O.set(n, [...(O.get(n) ?? []), e]));
    let k = C.map((e, t) => {
      let n = (O.get(e.id) ?? []).map((e) => D.get(e)).filter((e) => e !== void 0),
        r = n.length ? m(n) : e.kind === `user` ? 0 : (t + 0.5) / Math.max(1, C.length);
      return { id: e.id, pref: r, i: t };
    });
    k.sort((e, t) => e.pref - t.pref || e.i - t.i);
    let A = k.length;
    if (A) {
      let e = m(k.map((e, t) => e.pref - t / A));
      (k.forEach((t, n) => {
        let r = e + n / A;
        w.set(t.id, { ...b(r), ring: 2 });
      }),
        [...k]
          .sort((t, n) => ((e + k.indexOf(t) / A) % 1) - ((e + k.indexOf(n) / A) % 1))
          .forEach((e, t) => {
            (E.set(e.id, 620 + t * 70), T.set(e.id, 620 + t * 70 + 260));
          }));
    }
    for (let t of e) ne.set(t.id, t.id === S ? a.lead : a[t.kind]);
    let j = Math.min(96, n * 0.12),
      M = i ? { x: 64, y: 76 } : { x: 96, y: 84 },
      N = (e, t) =>
        [...w].every(
          ([n, r]) => n === e || Math.abs(r.x - t.x) > M.x * 0.8 || Math.abs(r.y - t.y) > M.y * 0.8,
        );
    for (let e of C) {
      let t = w.get(e.id);
      if (!t || N(e.id, t)) continue;
      let i = Math.atan2(t.y - _, t.x - d);
      search: for (let a = 8; a <= 120; a += 8)
        for (let o of [0, 0.5, -0.5, 1, -1, 1.6, -1.6]) {
          let s = { x: t.x + Math.cos(i + o) * a, y: t.y + Math.sin(i + o) * a };
          if (!(s.x < c || s.x > n - c || s.y < l || s.y > r - u || !N(e.id, s))) {
            ((t.x = s.x), (t.y = s.y));
            break search;
          }
        }
    }
    for (let e of C) {
      let t = w.get(e.id),
        n = (O.get(e.id) ?? []).map((e) => w.get(e)),
        r = n.find((e) => e?.ring === 1) ?? n.find((e) => e?.ring === 0);
      if (!t || !r) continue;
      let i = (t) =>
          [...w].every(([n, r]) => n === e.id || Math.abs(r.x - t.x) > M.x || Math.abs(r.y - t.y) > M.y),
        a = Math.abs(t.x - r.x),
        o = Math.abs(t.y - r.y);
      a < 8 || (a < j && i({ x: r.x, y: t.y }))
        ? (t.x = r.x)
        : (o < 8 || (o < j && i({ x: t.x, y: r.y }))) && (t.y = r.y);
    }
    return {
      w: n,
      h: r,
      narrow: i,
      cx: d,
      cy: _,
      rx: f,
      ry: p,
      ix: v,
      iy: y,
      lead: S,
      spots: w,
      size: ne,
      pop: T,
      draw: E,
    };
  },
  v = (e) => Math.round(e * 10) / 10,
  y = 8,
  b = (e, t, n) => {
    let r = t.x - e.x,
      i = t.y - e.y,
      a = Math.min(y, Math.abs(r), Math.abs(i));
    if (Math.abs(r) < 1 || Math.abs(i) < 1 || a < 0.5)
      return {
        d: `M${v(e.x)} ${v(e.y)}L${v(t.x)} ${v(t.y)}`,
        at: (t) => ({ x: e.x + r * t, y: e.y + i * t }),
      };
    let o = Math.sign(r),
      s = Math.sign(i),
      c = n === `vh` ? { x: e.x, y: t.y } : { x: t.x, y: e.y },
      l = n === `vh` ? { x: c.x, y: c.y - s * a } : { x: c.x - o * a, y: c.y },
      u = n === `vh` ? { x: c.x + o * a, y: c.y } : { x: c.x, y: c.y + s * a },
      d = `M${v(e.x)} ${v(e.y)}L${v(l.x)} ${v(l.y)}Q${v(c.x)} ${v(c.y)} ${v(u.x)} ${v(u.y)}L${v(t.x)} ${v(t.y)}`,
      p = [e, l];
    for (let e = 1; e <= 6; e++) {
      let t = e / 6,
        n = 1 - t;
      p.push({
        x: n * n * l.x + 2 * n * t * c.x + t * t * u.x,
        y: n * n * l.y + 2 * n * t * c.y + t * t * u.y,
      });
    }
    p.push(t);
    let m = [0];
    for (let e = 1; e < p.length; e++)
      m.push(m[e - 1] + Math.hypot(p[e].x - p[e - 1].x, p[e].y - p[e - 1].y));
    let h = m[m.length - 1] || 1;
    return {
      d,
      at: (e) => {
        let t = f(e, 0, 1) * h,
          n = 1;
        for (; n < p.length - 1 && m[n] < t;) n++;
        let r = (t - m[n - 1]) / (m[n] - m[n - 1] || 1);
        return { x: p[n - 1].x + (p[n].x - p[n - 1].x) * r, y: p[n - 1].y + (p[n].y - p[n - 1].y) * r };
      },
    };
  },
  ee = (e, t, n, r, i) => {
    let a = [],
      o = new Map(),
      s = (e, r) => {
        let i = 0;
        for (let [a, o] of t) {
          if (r.includes(a)) continue;
          let t = (n.get(a) ?? 34) / 2 + 6;
          for (let n = 1; n < e.length; n++) {
            let r = e[n - 1],
              a = e[n];
            Math.min(r.x, a.x) - t < o.x &&
              o.x < Math.max(r.x, a.x) + t &&
              Math.min(r.y, a.y) - t < o.y &&
              o.y < Math.max(r.y, a.y) + t &&
              i++;
          }
        }
        return i;
      },
      c = (e, t, n) => {
        let r = `${e}:${t}`;
        o.set(r, [...(o.get(r) ?? []), n]);
      };
    for (let n of e) {
      let [e, i] = n.split(`|`),
        o = t.get(e),
        l = t.get(i);
      if (!o || !l) continue;
      let u = o.ring < l.ring || (o.ring === l.ring && e < i),
        [d, f] = u ? [e, i] : [i, e],
        p = u ? o : l,
        m = u ? l : o,
        h;
      if (Math.abs(m.x - p.x) < 1) h = `v`;
      else if (Math.abs(m.y - p.y) < 1) h = `h`;
      else {
        let e = Math.sign(m.x - p.x) === Math.sign(p.x - r.x) || Math.abs(p.x - r.x) < 1,
          t = p.ring === 0 ? `vh` : p.ring === m.ring || e ? `hv` : `vh`,
          n = t === `vh` ? `hv` : `vh`,
          i = (e) => [p, e === `vh` ? { x: p.x, y: m.y } : { x: m.x, y: p.y }, m];
        h = s(i(t), [d, f]) > s(i(n), [d, f]) ? n : t;
      }
      let g = { key: n, p, q: m, turn: h, op: 0, oq: 0 };
      a.push(g);
      let _ = h === `v` || h === `vh`,
        v = h === `v` || h === `hv`,
        y = Math.abs(_ ? m.y - p.y : m.x - p.x),
        b = Math.abs(_ ? m.x - p.x : m.y - p.y),
        ee = h === `v` || h === `h` ? 0 : Math.sign(_ ? m.x - p.x : m.y - p.y),
        x = h === `v` || h === `h` ? 0 : Math.sign(v ? p.x - m.x : p.y - m.y);
      (c(d, _ ? (m.y > p.y ? `bottom` : `top`) : m.x > p.x ? `right` : `left`, {
        plan: g,
        end: `p`,
        order: ee * (1e5 - y),
      }),
        c(f, v ? (p.y > m.y ? `bottom` : `top`) : p.x > m.x ? `right` : `left`, {
          plan: g,
          end: `q`,
          order: x * (1e5 - b),
        }));
    }
    for (let [e, t] of o) {
      if (t.length < 2) continue;
      let r = n.get(e.slice(0, e.lastIndexOf(`:`))) ?? 34,
        a = Math.min(i, (r * 0.6) / (t.length - 1));
      (t.sort((e, t) => e.order - t.order),
        t.forEach((e, n) => {
          let r = (n - (t.length - 1) / 2) * a;
          e.end === `p` ? (e.plan.op = r) : (e.plan.oq = r);
        }));
    }
    let l = new Map();
    for (let { key: e, p: t, q: n, turn: r, op: i, oq: o } of a)
      if (r === `v`) {
        let r = t.x + (i || o);
        l.set(e, b({ x: r, y: t.y }, { x: r, y: n.y }, `vh`));
      } else if (r === `h`) {
        let r = t.y + (i || o);
        l.set(e, b({ x: t.x, y: r }, { x: n.x, y: r }, `hv`));
      } else
        r === `vh`
          ? l.set(e, b({ x: t.x + i, y: t.y }, { x: n.x, y: n.y + o }, `vh`))
          : l.set(e, b({ x: t.x, y: t.y + i }, { x: n.x + o, y: n.y }, `hv`));
    return l;
  },
  x = (e) => -(Math.cos(Math.PI * e) - 1) / 2,
  S = (e) => 1 - (1 - e) ** 3,
  te = () =>
    (0, r.jsxs)(`svg`, {
      width: `16`,
      height: `16`,
      viewBox: `0 0 16 16`,
      fill: `none`,
      "aria-hidden": `true`,
      children: [
        (0, r.jsx)(`path`, {
          d: `M8 8.4 3.2 4M8 8.4l5-4.2M8 8.4l4.4 4`,
          stroke: `currentColor`,
          strokeWidth: `1.2`,
          strokeLinecap: `round`,
          opacity: `0.5`,
        }),
        (0, r.jsx)(`circle`, { cx: `8`, cy: `8.4`, r: `2.4`, fill: `currentColor` }),
        (0, r.jsx)(`circle`, { cx: `3.2`, cy: `4`, r: `1.6`, fill: `currentColor` }),
        (0, r.jsx)(`circle`, { cx: `13`, cy: `4.2`, r: `1.6`, fill: `currentColor` }),
        (0, r.jsx)(`circle`, { cx: `12.4`, cy: `12.4`, r: `1.6`, fill: `currentColor` }),
      ],
    }),
  C = () =>
    (0, r.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      "aria-hidden": `true`,
      children: [
        (0, r.jsx)(`path`, {
          d: `M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z`,
          stroke: `currentColor`,
          strokeWidth: `1.8`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
        }),
        (0, r.jsx)(`path`, {
          d: `M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z`,
          stroke: `currentColor`,
          strokeWidth: `1.8`,
        }),
      ],
    }),
  w = () =>
    (0, r.jsx)(`svg`, {
      width: `14`,
      height: `14`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, {
        d: `M19 5L5 19M5 5L19 19`,
        stroke: `currentColor`,
        strokeWidth: `1.8`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
      }),
    }),
  ne = () =>
    (0, r.jsxs)(`svg`, {
      width: `12`,
      height: `12`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      "aria-hidden": `true`,
      children: [
        (0, r.jsx)(`path`, {
          d: `M20 12L4 12`,
          stroke: `currentColor`,
          strokeWidth: `2`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
        }),
        (0, r.jsx)(`path`, {
          d: `M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7`,
          stroke: `currentColor`,
          strokeWidth: `2`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
        }),
      ],
    }),
  T = () =>
    (0, r.jsxs)(`svg`, {
      width: `12`,
      height: `12`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      "aria-hidden": `true`,
      children: [
        (0, r.jsx)(`path`, {
          d: `M4 12L20 12`,
          stroke: `currentColor`,
          strokeWidth: `2`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
        }),
        (0, r.jsx)(`path`, {
          d: `M9 17C9 17 4 13.3176 4 12C4 10.6824 9 7 9 7`,
          stroke: `currentColor`,
          strokeWidth: `2`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
        }),
      ],
    }),
  E = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, {
        d: `M5 14L8.5 17.5L19 6.5`,
        stroke: `currentColor`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
        strokeWidth: `3`,
      }),
    }),
  D = () =>
    (0, r.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      "aria-hidden": `true`,
      children: [
        (0, r.jsx)(`path`, {
          d: `M12 7V13`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `3`,
        }),
        (0, r.jsx)(`path`, {
          d: `M12 17.5V17.6`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `3.4`,
        }),
      ],
    }),
  O = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, {
        d: `M12 6.5V12L15 14.5`,
        stroke: `currentColor`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
        strokeWidth: `2.8`,
      }),
    }),
  k = () =>
    (0, r.jsxs)(`svg`, {
      className: `ui-agg__spin`,
      width: `12`,
      height: `12`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      "aria-hidden": `true`,
      children: [
        (0, r.jsx)(`circle`, {
          cx: `12`,
          cy: `12`,
          r: `8.5`,
          stroke: `currentColor`,
          strokeOpacity: `0.25`,
          strokeWidth: `2.5`,
        }),
        (0, r.jsx)(`path`, {
          d: `M12 3.5A8.5 8.5 0 0 1 20.5 12`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeWidth: `2.5`,
        }),
      ],
    }),
  A = `http://www.w3.org/2000/svg`,
  j = 420,
  M = 720;
function N({
  nodes: e,
  calls: t = [],
  edges: c = [],
  now: p,
  heatWindow: m = 2e4,
  onSelect: h,
  height: g,
  formatCost: y = s,
  title: b = `Agent graph`,
  className: j,
}) {
  let N = (0, n.useRef)(null),
    P = (0, n.useRef)(null),
    F = (0, n.useRef)(null),
    I = (0, n.useId)(),
    [L, ie] = (0, n.useState)(0),
    [R, z] = (0, n.useState)(!1);
  (0, n.useLayoutEffect)(() => {
    let e = N.current;
    if (!e) return;
    ie(e.offsetWidth);
    let t = new ResizeObserver(() => ie(e.offsetWidth));
    t.observe(e);
    let n = window.matchMedia(`(prefers-reduced-motion: reduce)`);
    z(n.matches);
    let r = () => z(n.matches);
    return (
      n.addEventListener(`change`, r),
      () => {
        (t.disconnect(), n.removeEventListener(`change`, r));
      }
    );
  }, []);
  let [ae, oe] = (0, n.useState)(() => Date.now());
  (0, n.useEffect)(() => {
    if (p !== void 0) return;
    let e = window.setInterval(() => oe(Date.now()), 1e3);
    return () => window.clearInterval(e);
  }, [p]);
  let B = p ?? ae,
    se = (0, n.useRef)(new Map()),
    [ce, le] = (0, n.useState)([]),
    V = new Set(e.map((e) => e.id)),
    ue = ce.filter((e) => !V.has(e.id)),
    de = new Set(ue.map((e) => e.id));
  (0, n.useLayoutEffect)(() => {
    let t = [...se.current.values()].filter((e) => !V.has(e.id));
    if (((se.current = new Map(e.map((e) => [e.id, e]))), !t.length)) return;
    let n = new Set(t.map((e) => e.id));
    (le((e) => [...e.filter((e) => !n.has(e.id)), ...t]),
      window.setTimeout(() => le((e) => e.filter((e) => !n.has(e.id))), 460));
  });
  let fe = [...e, ...ue],
    H = new Map(fe.map((e) => [e.id, e])),
    pe = new Map(),
    me = (e, t) => {
      if (e === t || !H.has(e) || !H.has(t)) return;
      let n = d(e, t);
      pe.has(n) || pe.set(n, e < t ? [e, t] : [t, e]);
    };
  (c.forEach(([e, t]) => me(e, t)), t.forEach((e) => Number.isFinite(e.at) && me(e.from, e.to)));
  let U = [...pe.entries()],
    he = g ?? Math.round(L < 520 ? f(L * 1.7, 380, 640) : f(L * 0.6, 360, 520)) + 32,
    ge = JSON.stringify([
      L,
      he,
      e.map((e) => [e.id, e.kind, +!!e.lead]),
      U.filter(([, [e, t]]) => V.has(e) && V.has(t)).map(([e]) => e),
    ]),
    W = (0, n.useMemo)(
      () =>
        _(
          e,
          U.filter(([, [e, t]]) => V.has(e) && V.has(t)).map(([, e]) => e),
          L,
          he,
        ),
      [ge],
    ),
    _e = new Map(),
    ve = 0,
    ye = t.filter((e) => e.from !== e.to && H.has(e.from) && H.has(e.to) && Number.isFinite(e.at)),
    be = new Map(),
    xe = new Map(),
    Se = new Map();
  for (let e of ye) {
    if (e.at > B) continue;
    for (let t of [e.from, e.to]) {
      let n = be.get(t) ?? [];
      (n.push(e), n.length > 4 && n.shift(), be.set(t, n), e.at > B - 6e4 && xe.set(t, (xe.get(t) ?? 0) + 1));
    }
    if (e.at > B - 6e4) {
      let t = Se.get(e.from) ?? new Map();
      (t.set(e.to, (t.get(e.to) ?? 0) + 1), Se.set(e.from, t));
    }
    e.at > B - 6e4 && ve++;
    let t = d(e.from, e.to),
      n = _e.get(t) ?? { n: 0, last: 0 };
    (e.at > B - m && n.n++, (n.last = Math.max(n.last, e.at)), _e.set(t, n));
  }
  let Ce = Math.max(1, ...[..._e.values()].map((e) => e.n)),
    [we, Te] = (0, n.useState)(null),
    [G, Ee] = (0, n.useState)(null),
    De = G ? H.get(G) : void 0,
    K = we ?? (De ? G : null),
    q = new Set();
  if (K) {
    q.add(K);
    for (let [, [e, t]] of U) (e === K && q.add(t), t === K && q.add(e));
  }
  let J = (e) => {
    (Ee(e), h?.(e ? (H.get(e) ?? null) : null));
  };
  ((0, n.useEffect)(() => {
    if (!G) return;
    let e = (e) => {
      let t = e.target;
      F.current?.contains(t) || t.closest?.(`[data-agg-node]`) || J(null);
    };
    return (
      document.addEventListener(`pointerdown`, e),
      () => document.removeEventListener(`pointerdown`, e)
    );
  }),
    (0, n.useEffect)(() => {
      G && !H.has(G) && Ee(null);
    }));
  let Y = (0, n.useRef)(new Map()),
    X = (0, n.useRef)(new Map()),
    Z = (0, n.useRef)({
      bodies: new Map(),
      drawn: new Map(),
      rings: new Map(),
      pulses: [],
      ripples: [],
      flashes: [],
      arrived: new Set(),
      live: new Map(),
      readyAt: 0,
      routes: new Map(),
      routeSig: ``,
    }),
    Oe = (0, n.useRef)(W);
  Oe.current = W;
  let ke = (0, n.useRef)(U);
  ke.current = U;
  let Ae = (0, n.useRef)(R);
  Ae.current = R;
  for (let [e, t] of W.spots) Z.current.rings.set(e, t.ring);
  let je = (e, t) => {
      let n = Z.current,
        r = Oe.current;
      if (!r.w) return;
      n.readyAt ||= e;
      let i = Ae.current;
      for (let [a, o] of Y.current) {
        let s = r.spots.get(a),
          c = n.bodies.get(a);
        if (!c) {
          let t = s;
          if (e - n.readyAt > 200 && !i)
            for (let [, [e, r]] of ke.current) {
              let i = e === a ? r : r === a ? e : null,
                o = i ? n.drawn.get(i) : void 0;
              if (o) {
                t = o;
                break;
              }
            }
          if (!t) continue;
          ((c = { x: t.x, y: t.y, vx: 0, vy: 0 }), n.bodies.set(a, c));
        }
        s &&
          (i
            ? ((c.x = s.x), (c.y = s.y), (c.vx = c.vy = 0))
            : t > 0 &&
              ((c.vx += (49 * (s.x - c.x) - 14 * c.vx) * t),
              (c.vy += (49 * (s.y - c.y) - 14 * c.vy) * t),
              (c.x += c.vx * t),
              (c.y += c.vy * t)));
        let l = c.x,
          u = c.y;
        (n.drawn.set(a, { x: l, y: u, ring: n.rings.get(a) ?? 2 }),
          (o.style.transform = `translate3d(${v(l)}px, ${v(u)}px, 0)`));
      }
      for (let e of [...n.bodies.keys()]) Y.current.has(e) || (n.bodies.delete(e), n.drawn.delete(e));
      let a = { x: r.cx, y: r.cy },
        o = [...X.current.keys()],
        s = `${r.w}:${r.h}:${o.join(`,`)}`;
      for (let [e, t] of n.drawn) s += `|${e}:${v(t.x)},${v(t.y)}`;
      if (s !== n.routeSig) {
        ((n.routeSig = s), (n.routes = ee(o, n.drawn, r.size, a, r.narrow ? 6 : 8)));
        for (let [e, t] of X.current) {
          let r = n.routes.get(e);
          r && t.setAttribute(`d`, r.d);
        }
      }
      let c = n.routes,
        l = (e, t) => c.get(d(e, t)) ?? null,
        u = P.current,
        p = [];
      for (let t of n.pulses) {
        let r = n.drawn.get(t.from),
          i = n.drawn.get(t.to),
          a = d(t.from, t.to),
          o = X.current.get(a);
        if (!r || !i || !u || !o) {
          (t.el?.remove(), t.live && Me(a));
          continue;
        }
        t.dur ||= f((Math.hypot(i.x - r.x, i.y - r.y) * 1.15) / 0.3, 520, 1200);
        let s = (e - t.start) / t.dur;
        if (s < 0) {
          p.push(t);
          continue;
        }
        if (!t.el) {
          let e = document.createElementNS(A, `g`);
          (e.setAttribute(`class`, `ui-agg__pulse`), e.setAttribute(`data-kind`, t.kind));
          let r = t.kind === `res` || t.kind === `askres` || t.kind === `err`,
            i = document.createElementNS(A, `circle`);
          (i.setAttribute(`r`, `8`),
            i.setAttribute(`class`, `ui-agg__glow`),
            e.appendChild(i),
            (r ? [1.7, 1.3, 0.9] : [3, 2.4, 1.8, 1.2]).forEach((t, n) => {
              let i = document.createElementNS(A, `circle`);
              (i.setAttribute(`r`, String(t)),
                i.setAttribute(`class`, `ui-agg__tail`),
                (i.style.opacity = String((r ? [0.45, 0.28, 0.14] : [0.5, 0.34, 0.2, 0.1])[n])),
                e.appendChild(i));
            }));
          let s = document.createElementNS(A, `circle`);
          (s.setAttribute(`r`, r ? `3.4` : `3.8`),
            s.setAttribute(`class`, `ui-agg__head`),
            e.appendChild(s),
            u.appendChild(e),
            (t.el = e),
            (t.live = !0),
            n.live.set(a, (n.live.get(a) ?? 0) + 1),
            o.setAttribute(`data-live`, ``));
        }
        if (s >= 1) {
          (t.el.remove(), Me(a), Pe(t, e));
          continue;
        }
        let c = l(t.from, t.to),
          m = r.ring < i.ring || (r.ring === i.ring && t.from < t.to),
          h = x(s),
          g = t.el.children,
          _ = g.length - 1;
        for (let e = 0; e <= _; e++) {
          let t = f(h - (e === _ || e === 0 ? 0 : e * 0.03), 0, 1),
            n = c.at(m ? t : 1 - t);
          (g[e].setAttribute(`cx`, String(v(n.x))), g[e].setAttribute(`cy`, String(v(n.y))));
        }
        ((t.el.style.opacity = String(Math.min(1, s * 7, (1 - s) * 7))), p.push(t));
      }
      n.pulses = p;
      let m = [];
      for (let t of n.ripples) {
        let i = n.drawn.get(t.node),
          a = (e - t.start) / M;
        if (!i || a >= 1 || !u) {
          t.el?.remove();
          continue;
        }
        t.el ||
          ((t.el = document.createElementNS(A, `rect`)),
          t.el.setAttribute(`class`, `ui-agg__ripple`),
          t.el.setAttribute(`data-kind`, t.kind),
          u.appendChild(t.el));
        let o = (r.size.get(t.node) ?? 34) / 2,
          s = S(a);
        (t.el.setAttribute(`cx`, String(v(i.x))), t.el.setAttribute(`cy`, String(v(i.y))));
        let c = o + 1 + s * (r.narrow ? 9 : 13);
        (t.el.setAttribute(`r`, String(v(c))),
          t.el.tagName === `rect` &&
            (t.el.setAttribute(`x`, String(v(i.x - c))),
            t.el.setAttribute(`y`, String(v(i.y - c))),
            t.el.setAttribute(`width`, String(v(c * 2))),
            t.el.setAttribute(`height`, String(v(c * 2))),
            t.el.setAttribute(`rx`, String(v(o * 0.5 + 1 + s * 4)))),
          (t.el.style.opacity = String(0.55 * (1 - s))),
          m.push(t));
      }
      ((n.ripples = m),
        (n.flashes = n.flashes.filter((t) => e < t.until || (t.el.removeAttribute(t.attr), !1))));
    },
    Me = (e) => {
      let t = Z.current,
        n = (t.live.get(e) ?? 1) - 1;
      n > 0 ? t.live.set(e, n) : (t.live.delete(e), X.current.get(e)?.removeAttribute(`data-live`));
    },
    Ne = (e, t, n) => {
      e && (e.setAttribute(t, ``), Z.current.flashes.push({ el: e, attr: t, until: n }));
    },
    Pe = (e, t) => {
      let n = Z.current;
      (n.ripples.push({ node: e.to, kind: e.kind, start: t }),
        e.kind === `err` &&
          (Ne(X.current.get(d(e.from, e.to)), `data-error`, t + 1500),
          Ne(Y.current.get(e.to), `data-flash`, t + 1500)),
        (e.kind === `req` || e.kind === `ask`) &&
          (e.then
            ? Fe(e.call, e.to, e.from, e.then, t + 90)
            : (n.arrived.add(e.call),
              n.arrived.size > 400 && n.arrived.delete(n.arrived.values().next().value))));
    },
    Fe = (e, t, n, r, i) => {
      let a = Ie.current.get(t)?.kind === `user`;
      Z.current.pulses.push({
        call: e,
        from: t,
        to: n,
        kind: r === `error` ? `err` : a ? `askres` : `res`,
        start: i,
        dur: 0,
      });
    },
    Ie = (0, n.useRef)(H);
  Ie.current = H;
  let Le = (0, n.useRef)(je);
  ((Le.current = je),
    (0, n.useEffect)(() => {
      if (R) return;
      let e = 0,
        t = performance.now(),
        n = !0,
        r = (i) => {
          let a = Math.min(0.05, Math.max(0, (i - t) / 1e3));
          ((t = i), Le.current(i, a), (e = n && !document.hidden ? requestAnimationFrame(r) : 0));
        },
        i = () => {
          e || !n || document.hidden || ((t = performance.now()), (e = requestAnimationFrame(r)));
        },
        a = new IntersectionObserver(([e]) => {
          ((n = e.isIntersecting), i());
        });
      return (
        N.current && a.observe(N.current),
        document.addEventListener(`visibilitychange`, i),
        (e = requestAnimationFrame(r)),
        () => {
          (cancelAnimationFrame(e), a.disconnect(), document.removeEventListener(`visibilitychange`, i));
        }
      );
    }, [R]),
    (0, n.useLayoutEffect)(() => {
      Le.current(performance.now(), 0);
    }));
  let Re = (0, n.useRef)(null);
  ((0, n.useLayoutEffect)(() => {
    let e = Re.current === null;
    e && (Re.current = new Map());
    let n = Re.current,
      r = performance.now(),
      i = Z.current;
    for (let t of ye) {
      let a = t.status ?? `ok`,
        o = n.get(t.id);
      if (o === a || (!e && t.at > B + 1) || (n.set(t.id, a), e || (o === void 0 && t.at < B - 4e3)))
        continue;
      let s = d(t.from, t.to);
      if (R) {
        let e = X.current.get(s);
        (Ne(e, `data-live`, r + 900),
          a === `error` && Ne(e, `data-error`, r + 1500),
          window.setTimeout(() => Le.current(performance.now(), 0), 1600));
        continue;
      }
      if (o === void 0) {
        let e = H.get(t.to)?.kind === `user`;
        i.pulses.push({
          call: t.id,
          from: t.from,
          to: t.to,
          kind: e ? `ask` : `req`,
          start: r,
          dur: 0,
          then: a === `pending` ? void 0 : a,
        });
      } else {
        let e = i.pulses.find((e) => e.call === t.id && (e.kind === `req` || e.kind === `ask`));
        e ? (e.then = a) : Fe(t.id, t.to, t.from, a, r);
      }
    }
    if (n.size > t.length * 2 + 100) {
      let e = new Set(t.map((e) => e.id));
      for (let t of [...n.keys()]) e.has(t) || n.delete(t);
    }
  }, [t]),
    (0, n.useLayoutEffect)(() => {
      let e = F.current,
        t = G ? W.spots.get(G) : void 0;
      if (!e || !t || W.narrow) return;
      let n = (W.size.get(G) ?? 40) / 2,
        r = e.offsetWidth,
        i = e.offsetHeight,
        a = t.x < W.w / 2;
      ((e.style.left = `${f(a ? t.x + n + 18 : t.x - n - 18 - r, 8, W.w - r - 8)}px`),
        (e.style.top = `${f(t.y - i / 2, 8, W.h - i - 8)}px`));
    }));
  let ze = e.filter((e) => e.kind === `agent`),
    Be = e.filter((e) => e.kind === `tool`),
    Ve = e.reduce((e, t) => e + (o(t.cost) ?? 0), 0),
    Q = e.filter((e) => e.status === `waiting`),
    He = e.filter((e) => e.status === `error`),
    $ = (0, n.useRef)(new Map()),
    Ue = (0, n.useRef)(!1);
  if (L > 0) {
    for (let e of fe) $.current.has(e.id) || $.current.set(e.id, Ue.current ? 0 : (W.pop.get(e.id) ?? 0));
    for (let [e, [t, n]] of U)
      $.current.has(e) || $.current.set(e, Ue.current ? 0 : Math.max(W.draw.get(t) ?? 0, W.draw.get(n) ?? 0));
    for (let e of [...$.current.keys()]) !H.has(e) && !pe.has(e) && $.current.delete(e);
  }
  (0, n.useEffect)(() => {
    L && (Ue.current = !0);
  }, [L]);
  let We = (e) => [...(be.get(e) ?? [])].reverse(),
    Ge = (e) => xe.get(e) ?? 0,
    Ke = (e) => {
      let t = W.size.get(e.id) ?? 34,
        n = de.has(e.id),
        o = e.id === W.lead,
        s = W.narrow,
        c = s ? (e.short ?? e.name) : e.name,
        l = e.status ?? `idle`,
        d = e.kind !== `agent` || s ? void 0 : l === `waiting` || l === `error` ? i[l] : e.detail,
        f = $.current.get(e.id) ?? 0,
        p = Ge(e.id),
        m = W.spots.get(e.id),
        h = !!m && (e.kind === `agent` ? s && m.ring === 1 && m.y < W.cy : m.y < W.cy - W.ry * 0.45);
      return (0, r.jsx)(
        `div`,
        {
          className: `ui-agg__node`,
          "data-kind": e.kind,
          "data-lead": o ? `` : void 0,
          "data-status": l,
          "data-leaving": n ? `` : void 0,
          "data-dim": K && !q.has(e.id) ? `` : void 0,
          "data-open": G === e.id ? `` : void 0,
          style: { "--d": `${t}px`, zIndex: G === e.id || we === e.id ? 3 : o ? 2 : 1 },
          ref: (t) => {
            t ? Y.current.set(e.id, t) : Y.current.delete(e.id);
          },
          children: (0, r.jsxs)(`div`, {
            className: `ui-agg__body`,
            style: { animationDelay: `${f}ms` },
            children: [
              (0, r.jsx)(`span`, { className: `ui-agg__ring`, "aria-hidden": `true` }),
              (0, r.jsx)(`button`, {
                type: `button`,
                className: `ui-agg__disc`,
                "data-agg-node": ``,
                "data-logo": e.icon ? `` : void 0,
                title: [e.name, e.detail].filter(Boolean).join(` · `) || void 0,
                tabIndex: n ? -1 : void 0,
                "aria-label": `${e.name}, ${a[e.kind]}${e.status ? `, ${i[l].toLowerCase()}` : ``}${e.doing ? `: ${e.doing}` : ``}. ${p} ${p === 1 ? `call` : `calls`} in the last minute`,
                "aria-haspopup": `dialog`,
                "aria-expanded": G === e.id,
                "aria-controls": G === e.id ? I : void 0,
                onPointerEnter: (t) => t.pointerType === `mouse` && Te(e.id),
                onPointerLeave: () => Te((t) => (t === e.id ? null : t)),
                onFocus: () => Te(e.id),
                onBlur: () => Te((t) => (t === e.id ? null : t)),
                onClick: () => J(G === e.id ? null : e.id),
                children:
                  e.icon ??
                  (e.kind === `user`
                    ? (0, r.jsx)(C, {})
                    : (0, r.jsx)(`span`, { className: `ui-agg__initials`, children: u(e.name) })),
              }),
              (l === `waiting` || l === `error` || l === `done`) &&
                e.kind === `agent` &&
                (0, r.jsx)(`span`, {
                  className: `ui-agg__badge`,
                  "data-status": l,
                  "aria-hidden": `true`,
                  children:
                    l === `waiting`
                      ? (0, r.jsx)(O, {})
                      : l === `error`
                        ? (0, r.jsx)(D, {})
                        : (0, r.jsx)(E, {}),
                }),
              (c || d) &&
                (0, r.jsxs)(`span`, {
                  className: `ui-agg__label`,
                  "data-above": h ? `` : void 0,
                  "aria-hidden": `true`,
                  children: [
                    c && (0, r.jsx)(`span`, { className: `ui-agg__name`, dir: `auto`, children: c }),
                    d &&
                      (0, r.jsx)(`span`, {
                        className: `ui-agg__line`,
                        dir: `auto`,
                        "data-status": l === `waiting` || l === `error` ? l : void 0,
                        children: d,
                      }),
                  ],
                }),
            ],
          }),
        },
        e.id,
      );
    },
    qe = () => {
      if (!De) return null;
      let e = De,
        t = e.status ?? `idle`,
        n = We(e.id),
        a = Ge(e.id),
        s = U.filter(([, [t, n]]) => t === e.id || n === e.id).map(([, [t, n]]) => H.get(t === e.id ? n : t));
      return (0, r.jsxs)(`div`, {
        ref: F,
        id: I,
        className: `ui-agg__card`,
        role: `dialog`,
        "aria-label": e.name,
        onKeyDown: (t) => {
          if (t.key !== `Escape`) return;
          let n = e.id;
          (J(null), Y.current.get(n)?.querySelector(`button`)?.focus());
        },
        children: [
          (0, r.jsxs)(`div`, {
            className: `ui-agg__card-head`,
            children: [
              (0, r.jsx)(`span`, {
                className: `ui-agg__card-icon`,
                "data-kind": e.kind,
                children: e.icon ?? (e.kind === `user` ? (0, r.jsx)(C, {}) : u(e.name)),
              }),
              (0, r.jsxs)(`span`, {
                className: `ui-agg__card-who`,
                children: [
                  (0, r.jsx)(`span`, {
                    className: `ui-agg__card-name`,
                    dir: `auto`,
                    title: e.name,
                    children: e.name,
                  }),
                  e.detail &&
                    (0, r.jsx)(`span`, {
                      className: `ui-agg__card-detail`,
                      title: e.detail,
                      children: e.detail,
                    }),
                ],
              }),
              e.status && (0, r.jsx)(`span`, { className: `ui-agg__pill`, "data-status": t, children: i[t] }),
              (0, r.jsx)(`button`, {
                type: `button`,
                className: `ui-agg__close`,
                "aria-label": `Close`,
                autoFocus: !0,
                onClick: () => J(null),
                children: (0, r.jsx)(w, {}),
              }),
            ],
          }),
          e.doing
            ? (0, r.jsx)(`p`, { className: `ui-agg__doing`, dir: `auto`, children: e.doing })
            : s.length > 0 &&
              (0, r.jsxs)(`p`, {
                className: `ui-agg__doing`,
                children: [e.kind === `agent` ? `Works with ` : `Used by `, s.map((e) => e.name).join(`, `)],
              }),
          n.length > 0 &&
            (0, r.jsx)(`ul`, {
              className: `ui-agg__calls`,
              "aria-label": `Latest calls`,
              children: n.map((t) => {
                let n = t.from === e.id,
                  i = H.get(n ? t.to : t.from),
                  a = t.status ?? `ok`;
                return (0, r.jsxs)(
                  `li`,
                  {
                    className: `ui-agg__call`,
                    "data-status": a,
                    children: [
                      (0, r.jsxs)(`span`, {
                        className: `ui-agg__call-dir`,
                        children: [
                          n ? (0, r.jsx)(ne, {}) : (0, r.jsx)(T, {}),
                          (0, r.jsx)(`span`, { className: `ui-agg__sr`, children: n ? `To` : `From` }),
                        ],
                      }),
                      (0, r.jsx)(`span`, {
                        className: `ui-agg__call-icon`,
                        "aria-hidden": `true`,
                        children: i?.icon ?? (i?.kind === `user` ? (0, r.jsx)(C, {}) : u(i?.name ?? ``)),
                      }),
                      (0, r.jsxs)(`span`, {
                        className: `ui-agg__call-text`,
                        dir: `auto`,
                        title: `${i?.name ?? ``}${t.label ? ` · ${t.label}` : ``}`,
                        children: [
                          (0, r.jsx)(`span`, {
                            className: `ui-agg__call-who`,
                            children: i?.name ?? (n ? t.to : t.from),
                          }),
                          t.label &&
                            (0, r.jsxs)(`span`, {
                              className: `ui-agg__call-label`,
                              children: [` · `, t.label],
                            }),
                        ],
                      }),
                      (0, r.jsx)(`span`, {
                        className: `ui-agg__call-end`,
                        children:
                          a === `pending`
                            ? (0, r.jsx)(k, {})
                            : a === `error`
                              ? `Failed`
                              : o(t.ms) === void 0
                                ? `OK`
                                : l(Math.max(0, t.ms)),
                      }),
                    ],
                  },
                  t.id,
                );
              }),
            }),
          (0, r.jsxs)(`div`, {
            className: `ui-agg__card-foot`,
            children: [
              o(e.cost) !== void 0 &&
                (0, r.jsx)(`span`, { className: `ui-agg__card-cost`, children: y(e.cost) }),
              (0, r.jsxs)(`span`, { children: [a, ` `, a === 1 ? `call` : `calls`, ` in the last minute`] }),
            ],
          }),
        ],
      });
    },
    Je = L > 0,
    Ye = W.rx,
    Xe = W.ry;
  return (0, r.jsxs)(`div`, {
    className: [`ui-agg`, j].filter(Boolean).join(` `),
    "data-narrow": W.narrow ? `` : void 0,
    "data-focus": K ? `` : void 0,
    children: [
      (0, r.jsx)(`style`, { href: `ui-agent-graph`, precedence: `default`, children: re }),
      (0, r.jsxs)(`header`, {
        className: `ui-agg__bar`,
        children: [
          (0, r.jsx)(`span`, { className: `ui-agg__mark`, children: (0, r.jsx)(te, {}) }),
          (0, r.jsx)(`span`, { className: `ui-agg__title`, title: b, children: b }),
          (Q.length > 0 || He.length > 0) &&
            (0, r.jsxs)(`div`, {
              className: `ui-agg__alerts`,
              "aria-live": `polite`,
              children: [
                (W.narrow ? Q.slice(0, 1) : Q).map((e) =>
                  (0, r.jsxs)(
                    `button`,
                    {
                      type: `button`,
                      className: `ui-agg__chip`,
                      "data-kind": `waiting`,
                      onClick: () => J(e.id),
                      children: [
                        (0, r.jsx)(O, {}),
                        W.narrow
                          ? Q.length > 1
                            ? `${Q.length} need you`
                            : `Needs you`
                          : `${e.short ?? e.name} needs you`,
                      ],
                    },
                    e.id,
                  ),
                ),
                (W.narrow ? He.slice(0, 1) : He).map((e) =>
                  (0, r.jsxs)(
                    `button`,
                    {
                      type: `button`,
                      className: `ui-agg__chip`,
                      "data-kind": `error`,
                      onClick: () => J(e.id),
                      children: [(0, r.jsx)(D, {}), W.narrow ? `Failed` : `${e.short ?? e.name} failed`],
                    },
                    e.id,
                  ),
                ),
              ],
            }),
          (0, r.jsxs)(`span`, {
            className: `ui-agg__sum`,
            children: [
              (0, r.jsxs)(`span`, {
                children: [
                  (0, r.jsx)(`b`, { children: ze.length }),
                  ` `,
                  ze.length === 1 ? `agent` : `agents`,
                ],
              }),
              (0, r.jsxs)(`span`, {
                children: [(0, r.jsx)(`b`, { children: Be.length }), ` `, Be.length === 1 ? `tool` : `tools`],
              }),
              (0, r.jsxs)(`span`, {
                children: [(0, r.jsx)(`b`, { children: ve.toLocaleString(`en-US`) }), ` calls/min`],
              }),
              (0, r.jsx)(`span`, { className: `ui-agg__sum-cost`, children: y(Ve) }),
            ],
          }),
        ],
      }),
      (0, r.jsxs)(`div`, {
        className: `ui-agg__panel`,
        children: [
          (0, r.jsxs)(`div`, {
            ref: N,
            className: `ui-agg__stage`,
            style: { height: Je ? he : void 0 },
            role: `group`,
            "aria-label": `${b}: ${ze.length} agents and ${Be.length} tools`,
            children: [
              Je &&
                (0, r.jsxs)(`svg`, {
                  className: `ui-agg__svg`,
                  width: W.w,
                  height: W.h,
                  "aria-hidden": `true`,
                  children: [
                    (0, r.jsx)(`defs`, {
                      children: (0, r.jsxs)(`radialGradient`, {
                        id: `${I}-glow`,
                        children: [
                          (0, r.jsx)(`stop`, { offset: `0`, style: { stopColor: `var(--ui-agg-glow)` } }),
                          (0, r.jsx)(`stop`, {
                            offset: `1`,
                            style: { stopColor: `var(--ui-agg-glow)`, stopOpacity: 0 },
                          }),
                        ],
                      }),
                    }),
                    (0, r.jsx)(`ellipse`, {
                      className: `ui-agg__halo`,
                      cx: W.cx,
                      cy: W.cy,
                      rx: Ye * W.ix * 0.9,
                      ry: Xe * W.iy * 0.9,
                      fill: `url(#${I}-glow)`,
                    }),
                    (0, r.jsx)(`g`, {
                      children: U.map(([e, [t, n]]) => {
                        let i = _e.get(e),
                          a = i && i.n ? 1.25 + 2.75 * Math.sqrt(i.n / Ce) : 1.25,
                          o = !i || B - i.last > 6e3,
                          s = H.get(t),
                          c = H.get(n),
                          l =
                            (s?.status === `waiting` && c?.kind === `user`) ||
                            (c?.status === `waiting` && s?.kind === `user`),
                          u = de.has(t) || de.has(n),
                          d = $.current.get(e) ?? 0;
                        return (0, r.jsx)(
                          `path`,
                          {
                            ref: (t) => {
                              t
                                ? (X.current.has(e) || (Z.current.routeSig = ``), X.current.set(e, t))
                                : X.current.delete(e);
                            },
                            className: `ui-agg__edge`,
                            pathLength: 1,
                            "data-idle": o ? `` : void 0,
                            "data-ask": l ? `` : void 0,
                            "data-leaving": u ? `` : void 0,
                            "data-near": K && q.has(t) && q.has(n) && (t === K || n === K) ? `` : void 0,
                            style: { strokeWidth: a, animationDelay: `${d}ms` },
                          },
                          e,
                        );
                      }),
                    }),
                    (0, r.jsx)(`g`, { ref: P }),
                  ],
                }),
              Je && (0, r.jsx)(`div`, { className: `ui-agg__nodes`, children: fe.map(Ke) }),
              qe(),
            ],
          }),
          (0, r.jsxs)(`div`, {
            className: `ui-agg__legend`,
            "aria-hidden": `true`,
            children: [
              (0, r.jsxs)(`span`, {
                children: [
                  (0, r.jsxs)(`svg`, {
                    width: `22`,
                    height: `8`,
                    viewBox: `0 0 22 8`,
                    children: [
                      (0, r.jsx)(`circle`, {
                        cx: `4`,
                        cy: `4`,
                        r: `1.1`,
                        className: `ui-agg__legend-tail`,
                        opacity: `0.2`,
                      }),
                      (0, r.jsx)(`circle`, {
                        cx: `9`,
                        cy: `4`,
                        r: `1.8`,
                        className: `ui-agg__legend-tail`,
                        opacity: `0.4`,
                      }),
                      (0, r.jsx)(`circle`, { cx: `16`, cy: `4`, r: `3.2`, className: `ui-agg__legend-call` }),
                    ],
                  }),
                  `Call`,
                ],
              }),
              (0, r.jsxs)(`span`, {
                children: [
                  (0, r.jsx)(`svg`, {
                    width: `12`,
                    height: `8`,
                    viewBox: `0 0 12 8`,
                    children: (0, r.jsx)(`circle`, {
                      cx: `6`,
                      cy: `4`,
                      r: `3`,
                      className: `ui-agg__legend-reply`,
                    }),
                  }),
                  `Answer`,
                ],
              }),
              (0, r.jsxs)(`span`, {
                children: [
                  (0, r.jsx)(`svg`, {
                    width: `22`,
                    height: `8`,
                    viewBox: `0 0 22 8`,
                    children: (0, r.jsx)(`path`, {
                      d: `M1 4H21`,
                      className: `ui-agg__legend-line`,
                      strokeWidth: `3.5`,
                    }),
                  }),
                  `Busier link`,
                ],
              }),
              (0, r.jsxs)(`span`, {
                children: [
                  (0, r.jsx)(`svg`, {
                    width: `10`,
                    height: `8`,
                    viewBox: `0 0 10 8`,
                    children: (0, r.jsx)(`circle`, {
                      cx: `5`,
                      cy: `4`,
                      r: `3.5`,
                      className: `ui-agg__legend-wait`,
                    }),
                  }),
                  `Needs you`,
                ],
              }),
            ],
          }),
        ],
      }),
      (0, r.jsx)(`ul`, {
        className: `ui-agg__sr`,
        children: e.map((e) => {
          let t = new Map();
          for (let [n, r] of Se.get(e.id) ?? []) t.set(n, r);
          return (0, r.jsxs)(
            `li`,
            {
              children: [
                e.name,
                ` (`,
                a[e.kind],
                e.status ? `, ${i[e.status].toLowerCase()}` : ``,
                `)`,
                e.doing ? `: ${e.doing}` : ``,
                `.`,
                t.size > 0 &&
                  ` Calls in the last minute: ${[...t].map(([e, t]) => `${H.get(e)?.name ?? e} ${t}`).join(`, `)}.`,
                o(e.cost) !== void 0 && ` Cost ${y(e.cost)}.`,
              ],
            },
            e.id,
          );
        }),
      }),
    ],
  });
}
var re = `.ui-agg{--ui-agg-tray: #f0f0f0;--ui-agg-panel: #ffffff;--ui-agg-card: #ffffff;--ui-agg-ink: #171717;--ui-agg-text: #6b6b6b;--ui-agg-muted: #8a8a8a;--ui-agg-line: #ececec;--ui-agg-chip: #f5f5f5;--ui-agg-link: #82bcff;--ui-agg-pulse: #2f6bff;--ui-agg-glow: rgba(130, 188, 255, 0.2);--ui-agg-breath: rgba(47, 107, 255, 0.17);--ui-agg-breath-out: rgba(47, 107, 255, 0.03);--ui-agg-user-bg: #171717;--ui-agg-user-fg: #ffffff;--ui-agg-brand-bg: #eaf1ff;--ui-agg-brand-fg: #2456d6;--ui-agg-ok: #1fa35c;--ui-agg-ok-bg: #e6f6ec;--ui-agg-ok-fg: #1a7f45;--ui-agg-warn: #f59f0a;--ui-agg-warn-bg: #fff3e0;--ui-agg-warn-fg: #b85c00;--ui-agg-danger: #e5484d;--ui-agg-danger-bg: #fdecea;--ui-agg-danger-fg: #c2331f;--ui-agg-ring: rgba(23, 23, 23, 0.22);--ui-agg-ease: cubic-bezier(0.22, 1, 0.36, 1);position: relative;box-sizing: border-box;width: 100%;min-width: 0;padding: 4px;border-radius: 20px;background: var(--ui-agg-tray);font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 14px;line-height: 20px;letter-spacing: -0.006em;color: var(--ui-agg-text);text-align: left;-webkit-font-smoothing: antialiased}.ui-agg *, .ui-agg *::before, .ui-agg *::after{box-sizing: border-box}:where(.ui-agg) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;text-align: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}.ui-agg button:focus-visible{outline: 2px solid var(--ui-agg-ring);outline-offset: 2px}.ui-agg p, .ui-agg ul{margin: 0;padding: 0}.ui-agg svg{display: block;flex: none;overflow: visible}.ui-agg__bar{display: flex;flex-wrap: wrap;align-items: center;gap: 4px 8px;min-width: 0;padding: 7px 12px 9px 12px}.ui-agg__mark{display: grid;flex: none;place-items: center;width: 16px;color: var(--ui-agg-pulse)}.ui-agg__title{flex: 0 1 auto;min-width: 0;overflow: hidden;font-weight: 600;color: var(--ui-agg-ink);white-space: nowrap;text-overflow: ellipsis}.ui-agg__sum{display: flex;flex-wrap: wrap;justify-content: flex-end;align-items: center;gap: 2px 14px;margin-left: auto;font-size: 12.5px;line-height: 18px;color: var(--ui-agg-muted);font-variant-numeric: tabular-nums;white-space: nowrap}.ui-agg__sum b{font-weight: 600;color: var(--ui-agg-ink)}.ui-agg__sum-cost{min-width: 42px;font-weight: 600;color: var(--ui-agg-ink);text-align: right}.ui-agg[data-narrow] .ui-agg__bar{row-gap: 6px}.ui-agg[data-narrow] .ui-agg__title{line-height: 24px}.ui-agg[data-narrow] .ui-agg__sum{flex-basis: 100%;justify-content: space-between;gap: 2px 8px;margin-left: 0;font-size: 12px}.ui-agg__panel{position: relative;overflow: hidden;border-radius: 16px;background: var(--ui-agg-panel);box-shadow: 0 0 0 1px var(--ui-agg-line), 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-agg__stage{position: relative;width: 100%;min-height: 200px;container-type: inline-size}.ui-agg__svg{position: absolute;inset: 0;pointer-events: none}.ui-agg__halo{animation: ui-agg-fade-in 1200ms ease both}.ui-agg__edge{fill: none;stroke: var(--ui-agg-link);stroke-linecap: round;opacity: 0.75;stroke-dasharray: 1 1;stroke-dashoffset: 0;animation: ui-agg-draw 560ms var(--ui-agg-ease) backwards;transition: stroke-width 700ms var(--ui-agg-ease), opacity 320ms ease, stroke 300ms ease}.ui-agg__edge[data-idle]{opacity: 0.38}.ui-agg__edge[data-live]{opacity: 1;transition-duration: 700ms, 160ms, 300ms}.ui-agg__edge[data-ask]{stroke: var(--ui-agg-warn);opacity: 0.9}.ui-agg__edge[data-error]{stroke: var(--ui-agg-danger);opacity: 1;transition-duration: 700ms, 120ms, 120ms}.ui-agg__edge[data-leaving]{stroke-dashoffset: 0;animation: ui-agg-retract ${j}ms var(--ui-agg-ease) forwards}.ui-agg[data-focus] .ui-agg__edge:not([data-near]){opacity: 0.1}.ui-agg[data-focus] .ui-agg__edge[data-near]{opacity: 1}.ui-agg__pulse .ui-agg__head, .ui-agg__pulse .ui-agg__tail{fill: var(--ui-agg-pulse)}.ui-agg__pulse[data-kind="res"] .ui-agg__head, .ui-agg__pulse[data-kind="askres"] .ui-agg__head, .ui-agg__pulse[data-kind="err"] .ui-agg__head{fill: var(--ui-agg-panel);stroke: var(--ui-agg-pulse);stroke-width: 1.75}.ui-agg__pulse[data-kind="ask"] :is(.ui-agg__head, .ui-agg__tail), .ui-agg__pulse[data-kind="askres"] .ui-agg__tail{fill: var(--ui-agg-warn)}.ui-agg__pulse[data-kind="askres"] .ui-agg__head{stroke: var(--ui-agg-warn)}.ui-agg__pulse[data-kind="err"] .ui-agg__tail{fill: var(--ui-agg-danger)}.ui-agg__pulse[data-kind="err"] .ui-agg__head{stroke: var(--ui-agg-danger)}.ui-agg[data-focus] .ui-agg__pulse{opacity: 0.25}.ui-agg__glow{fill: var(--ui-agg-pulse);opacity: 0.16}.ui-agg__pulse:is([data-kind="ask"], [data-kind="askres"]) .ui-agg__glow{fill: var(--ui-agg-warn)}.ui-agg__pulse[data-kind="err"] .ui-agg__glow{fill: var(--ui-agg-danger)}.ui-agg__ripple{fill: none;stroke: var(--ui-agg-pulse);stroke-width: 1.25}.ui-agg__ripple:is([data-kind="ask"], [data-kind="askres"]){stroke: var(--ui-agg-warn)}.ui-agg__ripple[data-kind="err"]{stroke: var(--ui-agg-danger);stroke-width: 2}.ui-agg__nodes{position: absolute;inset: 0;pointer-events: none}.ui-agg__node{position: absolute;top: 0;left: 0;width: 0;height: 0;transition: opacity 320ms ease;will-change: transform}.ui-agg[data-focus] .ui-agg__node[data-dim]{opacity: 0.3}.ui-agg__body{position: absolute;top: 0;left: 0;transform-origin: 0 0;animation: ui-agg-pop 560ms var(--ui-agg-ease) both}.ui-agg__node[data-leaving] .ui-agg__body{animation: ui-agg-out ${j}ms var(--ui-agg-ease) forwards}.ui-agg__disc{position: absolute;top: calc(var(--d) / -2);left: calc(var(--d) / -2);display: grid;place-items: center;width: var(--d);height: var(--d);border-radius: 50%;background: var(--ui-agg-card);box-shadow: 0 0 0 1px var(--ui-agg-line), 0 2px 6px -2px rgba(0, 0, 0, 0.1);color: var(--ui-agg-text);pointer-events: auto;transition: width 300ms var(--ui-agg-ease), height 300ms var(--ui-agg-ease), top 300ms var(--ui-agg-ease), left 300ms var(--ui-agg-ease), box-shadow 240ms ease, transform 240ms var(--ui-agg-ease)}.ui-agg__disc::before{content: "";position: absolute;inset: -6px;border-radius: 50%}.ui-agg__disc:hover, .ui-agg__node[data-open] .ui-agg__disc{transform: scale(1.06)}.ui-agg__disc > svg{width: 48%;height: 48%}.ui-agg__initials{font-size: 11px;font-weight: 600;color: var(--ui-agg-text)}.ui-agg__node[data-kind="agent"] .ui-agg__disc{box-shadow: 0 0 0 4px var(--ui-agg-tray), 0 0 0 5px var(--ui-agg-line), 0 4px 12px -4px rgba(0, 0, 0, 0.14)}.ui-agg__node[data-kind="agent"] .ui-agg__disc > svg{width: 46%;height: 46%}.ui-agg__node[data-kind="user"] .ui-agg__disc{background: var(--ui-agg-user-bg);color: var(--ui-agg-user-fg);box-shadow: 0 2px 6px -2px rgba(0, 0, 0, 0.25)}.ui-agg__node[data-kind="user"] .ui-agg__disc > svg{width: 44%;height: 44%}.ui-agg__node[data-flash] .ui-agg__disc{animation: ui-agg-flash 500ms ease 3}.ui-agg__ring{position: absolute;top: calc(var(--d) / -2);left: calc(var(--d) / -2);width: var(--d);height: var(--d);border-radius: 50%;opacity: 0;transition: opacity 400ms ease}.ui-agg__node[data-status="working"] .ui-agg__ring{opacity: 1;animation: ui-agg-breathe 2600ms ease-in-out infinite}.ui-agg__node[data-status="waiting"] .ui-agg__ring{opacity: 1;--ui-agg-breath: rgba(245, 159, 10, 0.22);--ui-agg-breath-out: rgba(245, 159, 10, 0.04);animation: ui-agg-breathe 1500ms ease-in-out infinite}.ui-agg__node[data-status="error"] .ui-agg__ring{opacity: 1;box-shadow: 0 0 0 8px rgba(229, 72, 77, 0.16)}.ui-agg__node[data-status="waiting"] .ui-agg__disc{box-shadow: 0 0 0 4px var(--ui-agg-tray), 0 0 0 5.5px var(--ui-agg-warn), 0 4px 12px -4px rgba(0, 0, 0, 0.14)}.ui-agg__node[data-status="error"] .ui-agg__disc{box-shadow: 0 0 0 4px var(--ui-agg-tray), 0 0 0 5.5px var(--ui-agg-danger), 0 4px 12px -4px rgba(0, 0, 0, 0.14)}.ui-agg__badge{position: absolute;top: calc(var(--d) * -0.36 - 9px);left: calc(var(--d) * 0.36 - 7px);display: grid;place-items: center;width: 16px;height: 16px;border-radius: 50%;box-shadow: 0 0 0 2px var(--ui-agg-panel);color: #fff;pointer-events: none;animation: ui-agg-pop 360ms var(--ui-agg-ease) both}.ui-agg__badge > svg{width: 11px;height: 11px}.ui-agg__badge[data-status="waiting"]{background: var(--ui-agg-warn)}.ui-agg__badge[data-status="error"]{background: var(--ui-agg-danger)}.ui-agg__badge[data-status="done"]{background: var(--ui-agg-ok)}.ui-agg__label{position: absolute;top: calc(var(--d) / 2 + 5px);left: 0;display: grid;justify-items: center;padding: 1px 6px;border-radius: 7px;background: var(--ui-agg-panel);box-shadow: 0 0 6px 2px var(--ui-agg-panel);transform: translateX(-50%);white-space: nowrap;pointer-events: none}.ui-agg__label[data-above]{top: auto;bottom: calc(var(--d) / 2 + 5px)}.ui-agg__node[data-kind="agent"] .ui-agg__label{top: calc(var(--d) / 2 + 7px)}.ui-agg__node[data-kind="agent"] .ui-agg__label[data-above]{top: auto;bottom: calc(var(--d) / 2 + 7px)}.ui-agg__name, .ui-agg__line{width: max-content;max-width: 150px;overflow: hidden;text-overflow: ellipsis}.ui-agg[data-narrow] :is(.ui-agg__name, .ui-agg__line){max-width: 72px}.ui-agg__name{font-size: 12px;font-weight: 500;line-height: 15px;color: var(--ui-agg-text)}.ui-agg__node[data-kind="agent"] .ui-agg__name{font-size: 12.5px;font-weight: 600;color: var(--ui-agg-ink)}.ui-agg__line{font-size: 11px;line-height: 14px;color: var(--ui-agg-muted)}.ui-agg__line[data-status="waiting"]{font-weight: 500;color: var(--ui-agg-warn-fg)}.ui-agg__line[data-status="error"]{font-weight: 500;color: var(--ui-agg-danger-fg)}.ui-agg[data-narrow] .ui-agg__name{font-size: 11px;line-height: 14px}.ui-agg[data-narrow] .ui-agg__ring{--ui-agg-b1: 4px;--ui-agg-b2: 9px}.ui-agg[data-narrow] .ui-agg__label{padding: 0 4px}.ui-agg[data-narrow] .ui-agg__node[data-kind="agent"] .ui-agg__name{font-size: 11.5px}.ui-agg[data-narrow] .ui-agg__line{font-size: 10.5px;line-height: 13px}.ui-agg[data-narrow] .ui-agg__node[data-kind="agent"] .ui-agg__disc{box-shadow: 0 0 0 3px var(--ui-agg-tray), 0 0 0 4px var(--ui-agg-line), 0 3px 10px -4px rgba(0, 0, 0, 0.14)}.ui-agg__alerts{display: flex;flex-wrap: wrap;gap: 6px;min-width: 0}.ui-agg__chip{display: inline-flex;align-items: center;gap: 4px;height: 24px;margin: -3px 0;padding: 0 9px 0 6px;border-radius: 999px;font-size: 12px;font-weight: 500;white-space: nowrap;animation: ui-agg-rise 320ms var(--ui-agg-ease) both;transition: filter 160ms ease}.ui-agg__chip > svg{width: 14px;height: 14px}.ui-agg__chip[data-kind="waiting"]{background: var(--ui-agg-warn-bg);color: var(--ui-agg-warn-fg)}.ui-agg__chip[data-kind="error"]{background: var(--ui-agg-danger-bg);color: var(--ui-agg-danger-fg)}.ui-agg__chip:hover{filter: saturate(1.3) brightness(0.97)}.ui-agg__card{position: absolute;z-index: 5;display: grid;grid-template-columns: minmax(0, 1fr);gap: 10px;width: 264px;padding: 12px;border-radius: 16px;background: var(--ui-agg-card);box-shadow: 0 0 0 1px var(--ui-agg-line), 0 16px 32px -12px rgba(0, 0, 0, 0.2);animation: ui-agg-rise 220ms var(--ui-agg-ease) both}.ui-agg[data-narrow] .ui-agg__card{right: 8px;bottom: 8px;left: 8px;width: auto}.ui-agg__card-head{display: flex;align-items: center;gap: 9px;min-width: 0}.ui-agg__card-icon{display: grid;flex: none;place-items: center;width: 30px;height: 30px;border-radius: 50%;background: var(--ui-agg-card);box-shadow: 0 0 0 1px var(--ui-agg-line), 0 1px 2px rgba(0, 0, 0, 0.06);font-size: 10px;font-weight: 600;color: var(--ui-agg-text)}.ui-agg__card-icon > svg{width: 15px;height: 15px}.ui-agg__card-icon[data-kind="user"]{background: var(--ui-agg-user-bg);color: var(--ui-agg-user-fg);box-shadow: none}.ui-agg__card-who{display: grid;flex: 1;min-width: 0}.ui-agg__card-name{overflow: hidden;font-size: 13.5px;font-weight: 600;line-height: 17px;color: var(--ui-agg-ink);white-space: nowrap;text-overflow: ellipsis}.ui-agg__card-detail{overflow: hidden;font-size: 11.5px;line-height: 15px;color: var(--ui-agg-muted);white-space: nowrap;text-overflow: ellipsis}.ui-agg__pill{flex: none;height: 20px;padding: 0 7px;border-radius: 999px;background: var(--ui-agg-chip);font-size: 11px;font-weight: 500;line-height: 20px;color: var(--ui-agg-text);white-space: nowrap}.ui-agg__pill[data-status="working"]{background: var(--ui-agg-brand-bg);color: var(--ui-agg-brand-fg)}.ui-agg__pill[data-status="waiting"]{background: var(--ui-agg-warn-bg);color: var(--ui-agg-warn-fg)}.ui-agg__pill[data-status="error"]{background: var(--ui-agg-danger-bg);color: var(--ui-agg-danger-fg)}.ui-agg__pill[data-status="done"]{background: var(--ui-agg-ok-bg);color: var(--ui-agg-ok-fg)}.ui-agg__close{display: grid;flex: none;place-items: center;width: 24px;height: 24px;margin: -4px -4px -4px -2px;border-radius: 999px;color: var(--ui-agg-muted);transition: background-color 160ms ease, color 160ms ease}.ui-agg__close:hover{background: var(--ui-agg-chip);color: var(--ui-agg-ink)}.ui-agg__doing{font-size: 12.5px;line-height: 17px;color: var(--ui-agg-text);text-align: start;overflow-wrap: anywhere;white-space: pre-line}.ui-agg__calls{display: grid;gap: 2px;padding: 4px;border-radius: 12px;background: var(--ui-agg-tray);list-style: none}.ui-agg__call{display: flex;align-items: center;gap: 6px;min-width: 0;height: 26px;padding: 0 6px;border-radius: 8px;font-size: 12px;line-height: 16px;animation: ui-agg-rise 260ms var(--ui-agg-ease) both}.ui-agg__call:first-child{background: var(--ui-agg-card);box-shadow: 0 0 0 1px var(--ui-agg-line)}.ui-agg__call-dir{display: grid;flex: none;place-items: center;color: var(--ui-agg-muted)}.ui-agg__call-icon{display: grid;flex: none;place-items: center;width: 16px;height: 16px;font-size: 7.5px;font-weight: 600;color: var(--ui-agg-text)}.ui-agg__call-icon > svg{width: 13px;height: 13px}.ui-agg__call-text{flex: 1;min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;color: var(--ui-agg-muted)}.ui-agg__call-who{font-weight: 500;color: var(--ui-agg-ink)}.ui-agg__call-end{flex: none;font-size: 11.5px;color: var(--ui-agg-muted);font-variant-numeric: tabular-nums}.ui-agg__call[data-status="pending"] .ui-agg__call-end{color: var(--ui-agg-brand-fg)}.ui-agg__call[data-status="error"] .ui-agg__call-end{font-weight: 500;color: var(--ui-agg-danger-fg)}.ui-agg__spin{animation: ui-agg-spin 900ms linear infinite}.ui-agg__card-foot{display: flex;align-items: center;gap: 8px;padding: 0 2px;font-size: 12px;line-height: 16px;color: var(--ui-agg-muted);font-variant-numeric: tabular-nums}.ui-agg__card-cost{font-weight: 600;color: var(--ui-agg-ink)}.ui-agg__legend{display: flex;flex-wrap: wrap;justify-content: center;gap: 4px 16px;padding: 0 12px 12px;font-size: 11.5px;line-height: 16px;color: var(--ui-agg-muted)}.ui-agg__legend > span{display: inline-flex;align-items: center;gap: 6px}.ui-agg__legend-call, .ui-agg__legend-tail{fill: var(--ui-agg-pulse)}.ui-agg__legend-reply{fill: var(--ui-agg-panel);stroke: var(--ui-agg-pulse);stroke-width: 1.6}.ui-agg__legend-line{stroke: var(--ui-agg-link);stroke-linecap: round}.ui-agg__legend-wait{fill: var(--ui-agg-warn)}.ui-agg__sr{position: absolute;width: 1px;height: 1px;margin: -1px;padding: 0;overflow: hidden;clip: rect(0 0 0 0);white-space: nowrap;border: 0}@property --ui-agg-turn{syntax: "<angle>";inherits: false;initial-value: 0deg}.ui-agg .ui-agg__node{--ui-agg-r: calc(var(--d) * 0.27)}.ui-agg :is(.ui-agg__disc, .ui-agg__ring, .ui-agg__disc::after){border-radius: var(--ui-agg-r)}.ui-agg .ui-agg__disc::before{border-radius: calc(var(--ui-agg-r) + 6px)}.ui-agg .ui-agg__badge{top: calc(var(--d) / -2 - 6px);left: calc(var(--d) / 2 - 9px)}.ui-agg .ui-agg__card-icon{border-radius: 8px}.ui-agg .ui-agg__stroke{box-sizing: border-box;padding: 1px;border-radius: var(--ui-agg-r);background: conic-gradient(from var(--ui-agg-turn), transparent 0deg, transparent 40deg, var(--ui-agg-state) 360deg);-webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);-webkit-mask-composite: xor;mask: linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0);animation: ui-agg-turn 1200ms linear infinite}@keyframes ui-agg-turn{to{--ui-agg-turn: 360deg}}@keyframes ui-agg-draw{from{stroke-dashoffset: 1}}@keyframes ui-agg-retract{from{stroke-dashoffset: 0}to{stroke-dashoffset: 1;opacity: 0}}@keyframes ui-agg-pop{from{opacity: 0;transform: scale(0.4)}}@keyframes ui-agg-out{to{opacity: 0;transform: scale(0.5)}}@keyframes ui-agg-rise{from{opacity: 0;transform: translateY(4px) scale(0.98)}}@keyframes ui-agg-fade-in{from{opacity: 0}}@keyframes ui-agg-breathe{0%, 100%{box-shadow: 0 0 0 var(--ui-agg-b1, 6px) var(--ui-agg-breath)}50%{box-shadow: 0 0 0 var(--ui-agg-b2, 13px) var(--ui-agg-breath-out)}}@keyframes ui-agg-flash{50%{background: var(--ui-agg-danger-bg)}}@keyframes ui-agg-spin{to{transform: rotate(360deg)}}@media (prefers-reduced-motion: reduce){.ui-agg *, .ui-agg *::before, .ui-agg *::after{animation: none !important;transition: none !important}.ui-agg__edge{stroke-dasharray: none}}:where(.dark, [data-theme="dark"]) .ui-agg{--ui-agg-tray: #19191c;--ui-agg-panel: #1f1f22;--ui-agg-card: #2a2a2e;--ui-agg-ink: #ededed;--ui-agg-text: #a1a1a6;--ui-agg-muted: #7c7c82;--ui-agg-line: #303035;--ui-agg-chip: #2e2e33;--ui-agg-link: #4f8fdb;--ui-agg-pulse: #6ea8ff;--ui-agg-glow: rgba(79, 143, 219, 0.16);--ui-agg-breath: rgba(110, 168, 255, 0.16);--ui-agg-breath-out: rgba(110, 168, 255, 0.03);--ui-agg-user-bg: #ededed;--ui-agg-user-fg: #141416;--ui-agg-brand-bg: #16243f;--ui-agg-brand-fg: #8ab4ff;--ui-agg-ok: #2fbf71;--ui-agg-ok-bg: #12301f;--ui-agg-ok-fg: #3dd68c;--ui-agg-warn: #f5a524;--ui-agg-warn-bg: #3a2410;--ui-agg-warn-fg: #ffa057;--ui-agg-danger: #f2555a;--ui-agg-danger-bg: #3b1714;--ui-agg-danger-fg: #ff977d;--ui-agg-ring: rgba(237, 237, 237, 0.3)}:where(.dark, [data-theme="dark"]) .ui-agg__panel{box-shadow: 0 0 0 1px var(--ui-agg-line)}`,
  P = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 1200 1200`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, {
        fill: `#D97757`,
        d: `M 233.959793 800.214905 L 468.644287 668.536987 L 472.590637 657.100647 L 468.644287 650.738403 L 457.208069 650.738403 L 417.986633 648.322144 L 283.892639 644.69812 L 167.597321 639.865845 L 54.926208 633.825623 L 26.577238 627.785339 L 3.3e-05 592.751709 L 2.73832 575.27533 L 26.577238 559.248352 L 60.724873 562.228149 L 136.187973 567.382629 L 249.422867 575.194763 L 331.570496 580.026978 L 453.261841 592.671082 L 472.590637 592.671082 L 475.328857 584.859009 L 468.724915 580.026978 L 463.570557 575.194763 L 346.389313 495.785217 L 219.543671 411.865906 L 153.100723 363.543762 L 117.181267 339.060425 L 99.060455 316.107361 L 91.248367 266.01355 L 123.865784 230.093994 L 167.677887 233.073853 L 178.872513 236.053772 L 223.248367 270.201477 L 318.040283 343.570496 L 441.825592 434.738342 L 459.946411 449.798706 L 467.194672 444.64447 L 468.080597 441.020203 L 459.946411 427.409485 L 392.617493 305.718323 L 320.778564 181.932983 L 288.80542 130.630859 L 280.348999 99.865845 C 277.369171 87.221436 275.194641 76.590698 275.194641 63.624268 L 312.322174 13.20813 L 332.8591 6.604126 L 382.389313 13.20813 L 403.248352 31.328979 L 434.013519 101.71814 L 483.865753 212.537048 L 561.181274 363.221497 L 583.812134 407.919434 L 595.892639 449.315491 L 600.40271 461.959839 L 608.214783 461.959839 L 608.214783 454.711609 L 614.577271 369.825623 L 626.335632 265.61084 L 637.771851 131.516846 L 641.718201 93.745117 L 660.402832 48.483276 L 697.530334 24.000122 L 726.52356 37.852417 L 750.362549 72 L 747.060486 94.067139 L 732.886047 186.201416 L 705.100708 330.52356 L 686.979919 427.167847 L 697.530334 427.167847 L 709.61084 415.087341 L 758.496704 350.174561 L 840.644348 247.490051 L 876.885925 206.738342 L 919.167847 161.71814 L 946.308838 140.29541 L 997.61084 140.29541 L 1035.38269 196.429626 L 1018.469849 254.416199 L 965.637634 321.422852 L 921.825562 378.201538 L 859.006714 462.765259 L 819.785278 530.41626 L 823.409424 535.812073 L 832.75177 534.92627 L 974.657776 504.724915 L 1051.328979 490.872559 L 1142.818848 475.167786 L 1184.214844 494.496582 L 1188.724854 514.147644 L 1172.456421 554.335693 L 1074.604126 578.496765 L 959.838989 601.449829 L 788.939636 641.879272 L 786.845764 643.409485 L 789.261841 646.389343 L 866.255127 653.637634 L 899.194702 655.409424 L 979.812134 655.409424 L 1129.932861 666.604187 L 1169.154419 692.537109 L 1192.671265 724.268677 L 1188.724854 748.429688 L 1128.322144 779.194641 L 1046.818848 759.865845 L 856.590759 714.604126 L 791.355774 698.335754 L 782.335693 698.335754 L 782.335693 703.731567 L 836.69812 756.885986 L 936.322205 846.845581 L 1061.073975 962.81897 L 1067.436279 991.490112 L 1051.409424 1014.120911 L 1034.496704 1011.704712 L 924.885986 929.234924 L 882.604126 892.107544 L 786.845764 811.48999 L 780.483276 811.48999 L 780.483276 819.946289 L 802.550415 852.241699 L 919.087341 1027.409424 L 925.127625 1081.127686 L 916.671204 1098.604126 L 886.469849 1109.154419 L 853.288696 1103.114136 L 785.073914 1007.355835 L 714.684631 899.516785 L 657.906067 802.872498 L 650.979858 806.81897 L 617.476624 1167.704834 L 601.771851 1186.147705 L 565.530212 1200 L 535.328857 1177.046997 L 519.302124 1139.919556 L 535.328857 1066.550537 L 554.657776 970.792053 L 570.362488 894.68457 L 584.536926 800.134277 L 592.993347 768.724976 L 592.429626 766.630859 L 585.503479 767.516968 L 514.22821 865.369263 L 405.825531 1011.865906 L 320.053711 1103.677979 L 299.516815 1111.812256 L 263.919525 1093.369263 L 267.221497 1060.429688 L 287.114136 1031.114136 L 405.825531 880.107361 L 477.422913 786.52356 L 523.651062 732.483276 L 523.328918 724.671265 L 520.590698 724.671265 L 205.288605 929.395935 L 149.154434 936.644409 L 124.993355 914.01355 L 127.973183 876.885986 L 139.409409 864.80542 L 234.201385 799.570435 L 233.879227 799.8927 Z`,
      }),
    }),
  F = [
    {
      id: `lead`,
      kind: `agent`,
      name: `Orchestrator`,
      short: `Lead`,
      detail: `Opus 5.5`,
      icon: (0, r.jsx)(P, {}),
      lead: !0,
    },
    {
      id: `research`,
      kind: `agent`,
      name: `Researcher`,
      short: `Research`,
      detail: `Sonnet 5.5`,
      icon: (0, r.jsx)(P, {}),
    },
    {
      id: `analyst`,
      kind: `agent`,
      name: `Analyst`,
      detail: `Gemini 3.8 Pro`,
      icon: (0, r.jsx)(() => {
        let e = `gm` + (0, n.useId)().replace(/[^a-zA-Z0-9_-]/g, ``);
        return (0, r.jsxs)(`svg`, {
          viewBox: `0 0 24 24`,
          "aria-hidden": `true`,
          children: [
            (0, r.jsx)(`defs`, {
              children: (0, r.jsxs)(`linearGradient`, {
                id: e,
                x1: `0`,
                y1: `24`,
                x2: `24`,
                y2: `0`,
                gradientUnits: `userSpaceOnUse`,
                children: [
                  (0, r.jsx)(`stop`, { stopColor: `#1C7DFF` }),
                  (0, r.jsx)(`stop`, { offset: `0.52`, stopColor: `#1C69FF` }),
                  (0, r.jsx)(`stop`, { offset: `1`, stopColor: `#B04DFF` }),
                ],
              }),
            }),
            (0, r.jsx)(`path`, {
              fill: `url(#${e})`,
              d: `M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81`,
            }),
          ],
        });
      }, {}),
    },
    {
      id: `coder`,
      kind: `agent`,
      name: `Coder`,
      detail: `GPT-6 Sol`,
      icon: (0, r.jsx)(
        () =>
          (0, r.jsx)(`svg`, {
            viewBox: `0 0 24 24`,
            fill: `currentColor`,
            "aria-hidden": `true`,
            style: { color: `var(--ui-aggc-strong, var(--ui-agg-ink, #000))` },
            children: (0, r.jsx)(`path`, {
              d: `M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z`,
            }),
          }),
        {},
      ),
    },
    { id: `writer`, kind: `agent`, name: `Writer`, detail: `Sonnet 5.5`, icon: (0, r.jsx)(P, {}) },
    {
      id: `web`,
      kind: `tool`,
      name: `Web search`,
      short: `Search`,
      detail: `Search API`,
      icon: (0, r.jsx)(
        () =>
          (0, r.jsxs)(`svg`, {
            viewBox: `0 0 24 24`,
            fill: `none`,
            "aria-hidden": `true`,
            style: { color: `#2f6bff` },
            children: [
              (0, r.jsx)(`path`, {
                d: `M17.5 17.5L22 22`,
                stroke: `currentColor`,
                strokeWidth: `2`,
                strokeLinecap: `round`,
                strokeLinejoin: `round`,
              }),
              (0, r.jsx)(`path`, {
                d: `M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z`,
                stroke: `currentColor`,
                strokeWidth: `2`,
                strokeLinejoin: `round`,
              }),
            ],
          }),
        {},
      ),
    },
    {
      id: `notion`,
      kind: `tool`,
      name: `Notion`,
      detail: `Launch workspace`,
      icon: (0, r.jsx)(
        () =>
          (0, r.jsx)(`svg`, {
            viewBox: `0 0 24 24`,
            fill: `currentColor`,
            "aria-hidden": `true`,
            style: { color: `var(--ui-aggc-strong, var(--ui-agg-ink, #000))` },
            children: (0, r.jsx)(`path`, {
              d: `M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z`,
            }),
          }),
        {},
      ),
    },
    {
      id: `hubspot`,
      kind: `tool`,
      name: `HubSpot`,
      detail: `CRM`,
      icon: (0, r.jsx)(
        () =>
          (0, r.jsx)(`svg`, {
            viewBox: `0 0 24 24`,
            fill: `#FF7A59`,
            "aria-hidden": `true`,
            children: (0, r.jsx)(`path`, {
              d: `M18.164 7.93V5.084a2.198 2.198 0 001.267-1.978v-.067A2.2 2.2 0 0017.238.845h-.067a2.2 2.2 0 00-2.193 2.193v.067a2.196 2.196 0 001.252 1.973l.013.006v2.852a6.22 6.22 0 00-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 104.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 00-1.038 3.446c0 1.343.425 2.588 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 00-.58-.095h-.002a2.033 2.033 0 102.033 2.033 1.978 1.978 0 00-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 104.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 113.215-3.207v.002a3.206 3.206 0 01-3.207 3.207z`,
            }),
          }),
        {},
      ),
    },
    {
      id: `db`,
      kind: `tool`,
      name: `Database`,
      short: `DB`,
      detail: `Postgres, read-only`,
      icon: (0, r.jsx)(
        () =>
          (0, r.jsxs)(`svg`, {
            viewBox: `0 0 24 24`,
            fill: `none`,
            "aria-hidden": `true`,
            style: { color: `#0e9f8e` },
            children: [
              (0, r.jsx)(`ellipse`, {
                cx: `12`,
                cy: `5`,
                rx: `8`,
                ry: `3`,
                stroke: `currentColor`,
                strokeWidth: `2`,
              }),
              (0, r.jsx)(`path`, {
                d: `M20 12C20 13.6569 16.4183 15 12 15C7.58172 15 4 13.6569 4 12`,
                stroke: `currentColor`,
                strokeWidth: `2`,
              }),
              (0, r.jsx)(`path`, {
                d: `M20 5V19C20 20.6569 16.4183 22 12 22C7.58172 22 4 20.6569 4 19V5`,
                stroke: `currentColor`,
                strokeWidth: `2`,
              }),
            ],
          }),
        {},
      ),
    },
    {
      id: `github`,
      kind: `tool`,
      name: `GitHub`,
      detail: `acme/web`,
      icon: (0, r.jsx)(
        () =>
          (0, r.jsx)(`svg`, {
            viewBox: `0 0 24 24`,
            fill: `currentColor`,
            "aria-hidden": `true`,
            style: { color: `var(--ui-aggc-strong, var(--ui-agg-ink, #181717))` },
            children: (0, r.jsx)(`path`, {
              d: `M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12`,
            }),
          }),
        {},
      ),
    },
    {
      id: `stripe`,
      kind: `tool`,
      name: `Stripe`,
      detail: `Payments, test mode`,
      icon: (0, r.jsx)(
        () =>
          (0, r.jsxs)(`svg`, {
            viewBox: `0 0 24 24`,
            "aria-hidden": `true`,
            children: [
              (0, r.jsx)(`rect`, { width: `24`, height: `24`, rx: `6`, fill: `#635BFF` }),
              (0, r.jsx)(`path`, {
                fill: `#fff`,
                transform: `translate(5 5) scale(0.5833)`,
                d: `M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z`,
              }),
            ],
          }),
        {},
      ),
    },
    {
      id: `slack`,
      kind: `tool`,
      name: `Slack`,
      detail: `#launch`,
      icon: (0, r.jsx)(
        () =>
          (0, r.jsxs)(`svg`, {
            viewBox: `0 0 49.883 49.877`,
            fill: `none`,
            "aria-hidden": `true`,
            children: [
              (0, r.jsxs)(`g`, {
                transform: `translate(0 0)`,
                children: [
                  (0, r.jsx)(`path`, {
                    d: `M18.3549 10.4784C15.4713 10.4784 13.1157 8.12279 13.1157 5.2392C13.1157 2.35561 15.4713 0 18.3549 0C21.2385 0 23.5941 2.35561 23.5941 5.2392V10.4784H18.3549Z`,
                    fill: `#36C5F0`,
                  }),
                  (0, r.jsx)(`path`, {
                    d: `M18.3575 13.12C21.2411 13.12 23.5967 15.4756 23.5967 18.3592C23.5967 21.2428 21.2411 23.5984 18.3575 23.5984H5.2392C2.35561 23.5984 0 21.2428 0 18.3592C0 15.4756 2.35561 13.12 5.2392 13.12H18.3575Z`,
                    fill: `#36C5F0`,
                  }),
                ],
              }),
              (0, r.jsxs)(`g`, {
                transform: `translate(26.28 0)`,
                children: [
                  (0, r.jsx)(`path`, {
                    d: `M13.1244 18.3592C13.1244 15.4756 15.48 13.12 18.3636 13.12C21.2472 13.12 23.6028 15.4756 23.6028 18.3592C23.6028 21.2428 21.2472 23.5984 18.3636 23.5984H13.1244V18.3592Z`,
                    fill: `#2EB67D`,
                  }),
                  (0, r.jsx)(`path`, {
                    d: `M10.4785 18.3575C10.4785 21.2411 8.12286 23.5967 5.23927 23.5967C2.35568 23.5967 7.4362e-05 21.2411 7.4362e-05 18.3575V5.2392C7.4362e-05 2.35561 2.35568 0 5.23927 0C8.12286 0 10.4785 2.35561 10.4785 5.2392V18.3575Z`,
                    fill: `#2EB67D`,
                  }),
                ],
              }),
              (0, r.jsxs)(`g`, {
                transform: `translate(0 26.28)`,
                children: [
                  (0, r.jsx)(`path`, {
                    d: `M10.4784 5.2392C10.4784 8.12279 8.12279 10.4784 5.2392 10.4784C2.35561 10.4784 0 8.12279 0 5.2392C0 2.35561 2.35561 0 5.2392 0H10.4784V5.2392Z`,
                    fill: `#E01E5A`,
                  }),
                  (0, r.jsx)(`path`, {
                    d: `M13.1157 5.2392C13.1157 2.35561 15.4713 0 18.3549 0C21.2385 0 23.5941 2.35561 23.5941 5.2392V18.3575C23.5941 21.2411 21.2385 23.5967 18.3549 23.5967C15.4713 23.5967 13.1157 21.2411 13.1157 18.3575V5.2392Z`,
                    fill: `#E01E5A`,
                  }),
                ],
              }),
              (0, r.jsxs)(`g`, {
                transform: `translate(26.28 26.28)`,
                children: [
                  (0, r.jsx)(`path`, {
                    d: `M5.23927 13.1157C8.12286 13.1157 10.4785 15.4713 10.4785 18.3549C10.4785 21.2385 8.12286 23.5941 5.23927 23.5941C2.35568 23.5941 7.4362e-05 21.2385 7.4362e-05 18.3549V13.1157H5.23927Z`,
                    fill: `#ECB22E`,
                  }),
                  (0, r.jsx)(`path`, {
                    d: `M5.23927 10.4784C2.35568 10.4784 7.4362e-05 8.12279 7.4362e-05 5.2392C7.4362e-05 2.35561 2.35568 0 5.23927 0H18.3576C21.2412 0 23.5968 2.35561 23.5968 5.2392C23.5968 8.12279 21.2412 10.4784 18.3576 10.4784H5.23927Z`,
                    fill: `#ECB22E`,
                  }),
                ],
              }),
            ],
          }),
        {},
      ),
    },
    {
      id: `you`,
      kind: `user`,
      name: `You`,
      icon: (0, r.jsx)(
        () =>
          (0, r.jsx)(`svg`, {
            viewBox: `0 0 107 107`,
            fill: `currentColor`,
            "aria-hidden": `true`,
            style: { width: `38%`, height: `38%` },
            children: (0, r.jsx)(`path`, {
              d: `M106.447 67.3367C106.447 69.7104 104.523 71.6348 102.149 71.6348H75.928C73.5542 71.6348 71.6299 73.5591 71.6299 75.9329V102.16C71.6299 104.534 69.7056 106.458 67.3318 106.458H35.8198C35.8185 106.458 35.8174 106.459 35.8174 106.46C35.8174 106.462 35.8163 106.463 35.8149 106.463H4.29811C1.92433 106.463 0 104.539 0 102.165V39.1262C0 36.7525 1.92433 34.8281 4.29811 34.8281H30.5193C32.8931 34.8281 34.8174 32.9038 34.8174 30.53V4.29812C34.8174 1.92433 36.7417 0 39.1155 0H102.149C104.523 0 106.447 1.92433 106.447 4.29811V67.3367ZM35.8174 66.3425C35.8174 68.7163 37.7417 70.6406 40.1155 70.6406H66.3318C68.7056 70.6406 70.6299 68.7163 70.6299 66.3425V40.1155C70.6299 37.7417 68.7056 35.8174 66.3318 35.8174H40.1155C37.7417 35.8174 35.8174 37.7417 35.8174 40.1155V66.3425Z`,
            }),
          }),
        {},
      ),
      doing: `Asked for the pricing launch`,
    },
  ],
  I = [
    [`you`, `lead`],
    [`lead`, `research`],
    [`lead`, `analyst`],
    [`lead`, `coder`],
    [`lead`, `writer`],
    [`lead`, `slack`],
    [`research`, `web`],
    [`research`, `notion`],
    [`analyst`, `db`],
    [`analyst`, `hubspot`],
    [`coder`, `github`],
    [`coder`, `stripe`],
    [`writer`, `notion`],
    [`writer`, `slack`],
    [`writer`, `you`],
  ],
  L = [
    [`you`, `lead`, 0, 12.2, `Ship the new pricing page`],
    [`lead`, `research`, 0.5, 5.6, `Compare competitor pricing`],
    [`lead`, `coder`, 0.8, 10.4, `Build the page and checkout`],
    [`lead`, `analyst`, 1.1, 6, `Pull plan usage numbers`],
    [`lead`, `writer`, 1.4, 9.5, `Write and announce the copy`],
    [`research`, `web`, 1.2, 0.9, `pricing linear.app`],
    [`research`, `web`, 1.9, 0.8, `pricing notion.so`],
    [`research`, `web`, 2.6, 0.9, `pricing vercel.com`],
    [`research`, `web`, 3.3, 0.7, `G2 reviews about price`],
    [`research`, `web`, 4, 0.8, `pricing figma.com`],
    [`research`, `notion`, 4.8, 0.7, `Save the comparison`],
    [`research`, `notion`, 5.5, 0.6, `Add the sources`],
    [`analyst`, `db`, 1.7, 0.9, `Seats per plan`],
    [`analyst`, `hubspot`, 2.1, 0.9, `Deals lost on price`],
    [`analyst`, `db`, 2.6, 0.8, `Revenue per seat`],
    [`analyst`, `db`, 3.4, 1, `Churn by plan`],
    [`analyst`, `hubspot`, 4.1, 0.8, `Top objections`],
    [`analyst`, `db`, 4.7, 0.8, `Upgrades in 90 days`],
    [`analyst`, `hubspot`, 6.2, 0.7, `Tag the lost deals`],
    [`coder`, `github`, 1.5, 0.8, `Create branch pricing-v2`],
    [`coder`, `github`, 2.8, 1, `Read PricingTable.tsx`],
    [`coder`, `github`, 4, 0.9, `Commit the new layout`],
    [`coder`, `stripe`, 5.3, 0.8, `Create three prices`],
    [`coder`, `stripe`, 6.1, 0.7, `Create coupon LAUNCH20`],
    [`coder`, `stripe`, 7, 0.8, `Test a checkout session`],
    [`coder`, `github`, 8, 1, `Run the checkout tests`, !0],
    [`coder`, `github`, 9.5, 0.9, `Fix the coupon, run again`],
    [`coder`, `github`, 10.5, 0.7, `Open PR #482`],
    [`writer`, `notion`, 2.4, 0.7, `Read the brief`],
    [`writer`, `notion`, 3.6, 0.8, `Draft the plan copy`],
    [`writer`, `notion`, 5, 0.8, `Draft the announcement`],
    [`writer`, `notion`, 6.1, 0.7, `Add the Analyst's numbers`],
    [`writer`, `you`, 7, 2.2, `Post the announcement to #launch?`],
    [`writer`, `slack`, 9.6, 0.7, `Post to #launch`],
    [`writer`, `slack`, 10.4, 0.6, `Ping @design for the hero`],
    [`lead`, `slack`, 12.3, 0.6, `Summary to #team`],
    [`analyst`, `db`, 12.8, 0.8, `Refresh the dashboard`],
    [`research`, `web`, 13.2, 0.6, `Check annual discounts`],
  ],
  ie = {
    lead: [
      [0, `working`, `Splitting the launch into four jobs`],
      [2, `working`, `Waiting on four agents`],
      [12.4, `done`, `Sent you the summary`],
    ],
    research: [
      [0, `idle`, `Waiting for a job`],
      [1, `working`, `Reading the pricing pages of five competitors`],
      [4.7, `working`, `Saving the comparison to Notion`],
      [6.2, `done`, `The comparison is in Notion`],
    ],
    analyst: [
      [0, `idle`, `Waiting for a job`],
      [1.5, `working`, `Counting seats and upgrades per plan`],
      [4, `working`, `Reading lost deals in HubSpot`],
      [7, `done`, `Sent the usage summary to the Orchestrator`],
    ],
    coder: [
      [0, `idle`, `Waiting for a job`],
      [1.3, `working`, `Building the pricing page on a new branch`],
      [5, `working`, `Setting up prices and a coupon in Stripe`],
      [7.9, `working`, `Running the checkout tests`],
      [9, `error`, `2 of 14 checkout tests fail – the coupon isn't applied`],
      [9.5, `working`, `Fixing the coupon and running the tests again`],
      [11.3, `done`, `Opened PR #482`],
    ],
    writer: [
      [0, `idle`, `Waiting for a job`],
      [1.9, `working`, `Drafting the copy for the three plans`],
      [7, `waiting`, `Asks you: post the announcement to #launch?`],
      [9.2, `working`, `Posting the announcement`],
      [11, `done`, `The announcement is live in #launch`],
    ],
  },
  R = 14,
  z = [4.8, 13.4],
  ae = 1.5,
  oe = (e, t) => (e[0] === `you` ? 0 : e[0] === `lead` ? 0.021 : 0.004 + ((t * 37) % 7) * 0.001),
  B = new Map();
L.forEach((e, t) => B.set(e[0], (B.get(e[0]) ?? 0) + oe(e, t)));
var se = (e, t) => {
  let n = Math.floor(e / R),
    r = e - n * R,
    i = r >= z[0] && r < z[1],
    a = F.filter((e) => e.id !== `stripe` || i).map((e) => {
      let t = ie[e.id],
        i = B.has(e.id)
          ? n * B.get(e.id) + L.reduce((t, n, i) => t + (n[0] === e.id && n[2] <= r ? oe(n, i) : 0), 0)
          : void 0;
      if (!t) return e.kind === `user` ? e : { ...e, cost: i };
      let [, a, o] = [...t].reverse().find(([e]) => r >= e) ?? t[0];
      return { ...e, status: a, doing: o, cost: i };
    }),
    o = new Set(a.map((e) => e.id)),
    s = [];
  for (let r = Math.max(0, n - 4); r <= n; r++)
    L.forEach(([n, i, a, c, l, u], d) => {
      let f = r * R + a;
      f > e ||
        !o.has(n) ||
        !o.has(i) ||
        s.push({
          id: `${r}:${d}`,
          from: n,
          to: i,
          label: l,
          at: t + f * 1e3,
          ms: c * 1e3,
          status: e >= f + c ? (u ? `error` : `ok`) : `pending`,
        });
    });
  return (
    s.sort((e, t) => e.at - t.at),
    { nodes: a, calls: s, edges: I.filter(([e, t]) => o.has(e) && o.has(t)) }
  );
};
function ce() {
  let [e, t] = (0, n.useState)(0),
    [i] = (0, n.useState)(() => Date.now()),
    a = (0, n.useRef)(performance.now());
  (0, n.useEffect)(() => {
    let e = window.setInterval(() => t(Math.max(0, (performance.now() - a.current) / 1e3 - ae)), 100);
    return () => window.clearInterval(e);
  }, []);
  let { nodes: o, calls: s, edges: c } = se(e, i);
  return (0, r.jsx)(`div`, {
    className: `agg-demo`,
    children: (0, r.jsx)(N, { nodes: o, calls: s, edges: c, now: i + e * 1e3 }),
  });
}
