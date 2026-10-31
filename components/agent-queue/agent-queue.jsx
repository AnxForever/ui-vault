/*
 * affectUI · agent-queue (Pro)
 * Implementation recovered from public bundle asset: demo-CRKNaMKk.js
 * Styles inlined in the module -> agent-queue.css (0 block(s))
 * Demo usage: agent-queue.demo.jsx
 * Minified identifiers kept; formatting by prettier.
 */

import { t as e } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
/* empty css             */ var n = e(),
  r = t(),
  i = { llm: `LLM call`, tool: `Tool call`, agent: `Sub-agent`, human: `Human review` },
  a = { queued: `Waiting`, running: `Running`, done: `Done`, failed: `Failed` },
  o = { high: 0, normal: 1, low: 2 },
  s = 560,
  c = 1100,
  l = 1500,
  u = 520,
  d = 200,
  f = 520,
  p = 6e4,
  ee = [
    4, 6, 8, 10, 12, 16, 20, 24, 30, 40, 50, 60, 80, 100, 120, 160, 200, 300, 400, 500, 600, 800, 1e3, 1500,
    2e3,
  ],
  m = (e) => {
    let t = Math.max(0, e);
    if (t < 1e4) return `${(t / 1e3).toFixed(1)}s`;
    let n = Math.round(t / 1e3);
    if (n < 60) return `${n}s`;
    let r = Math.floor(n / 60);
    if (r < 60) return `${r}m ${String(n % 60).padStart(2, `0`)}s`;
    let i = Math.floor(r / 60);
    return i < 24 ? `${i}h ${String(r % 60).padStart(2, `0`)}m` : `${Math.floor(i / 24)}d ${i % 24}h`;
  },
  h = (e) => Math.round(e).toLocaleString(`en-US`),
  te = new Intl.NumberFormat(`en-US`, { notation: `compact`, maximumFractionDigits: 1 }),
  ne = (e) => (Math.round(e) < 1e5 ? h(e) : te.format(Math.round(e))),
  re = (e, t) => {
    if (!e.length) return 0;
    let n = [...e].sort((e, t) => e - t);
    return n[Math.min(n.length - 1, Math.floor(t * n.length))];
  },
  ie = (e, t, n) => Math.max(t, Math.min(n, e)),
  ae = (e) => {
    let t = e
      .trim()
      .split(/\s+/)
      .filter((e) => /^[\p{L}\p{N}]/u.test(e))
      .slice(0, 2)
      .map((e) => Array.from(e)[0]);
    return (t.length ? t.join(``) : (Array.from(e.trim())[0] ?? ``)).toUpperCase();
  },
  oe = () => typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,
  g = (e) => Math.round(e * 100) / 100,
  se = (e) => {
    let t = e.length;
    if (t < 2) return ``;
    let n = [],
      r = [];
    for (let i = 0; i < t - 1; i++)
      ((n[i] = e[i + 1][0] - e[i][0] || 1e-6), (r[i] = (e[i + 1][1] - e[i][1]) / n[i]));
    let i = [r[0]];
    for (let e = 1; e < t - 1; e++)
      i[e] =
        r[e - 1] * r[e] <= 0
          ? 0
          : (3 * (n[e - 1] + n[e])) / ((2 * n[e] + n[e - 1]) / r[e - 1] + (n[e] + 2 * n[e - 1]) / r[e]);
    i[t - 1] = r[t - 2];
    let a = `M${g(e[0][0])},${g(e[0][1])}`;
    for (let r = 0; r < t - 1; r++) {
      let t = n[r] / 3;
      a += `C${g(e[r][0] + t)},${g(e[r][1] + i[r] * t)} ${g(e[r + 1][0] - t)},${g(e[r + 1][1] - i[r + 1] * t)} ${g(e[r + 1][0])},${g(e[r + 1][1])}`;
    }
    return a;
  },
  _ = 12,
  v = 16,
  y = 28,
  b = 40,
  ce = 6,
  le = 10,
  ue = 26,
  de = (e, t) => {
    let n = Math.max(2, Math.floor((e.w - 20 + v - _) / v)),
      r = t * v - 4;
    return { x: e.x + le, y: e.y + (e.h - r) / 2, cols: n, rows: t, step: (e.w - 20 - _) / (n - 1) };
  },
  fe = (e, t) => {
    let n = e < 600,
      r = Math.max(1, t),
      i = r * b + (r - 1) * ce;
    if (!n) {
      let r = ie(Math.round(e * 0.26), 188, 236),
        a = Math.max(i, 178),
        o = 16 + r + 24,
        s = e - 32 - r - 92 - 48,
        c = e - 16 - 92,
        l = [0, 1, 2].map((e) => ({ x: 16, y: 40 + e * 32, w: r, h: y })),
        u = Math.max(1, Math.floor((40 + a - 138 - 20 + v - _) / v)),
        d = { x: 16, y: 138, w: r, h: 40 + a - 138 },
        f = ie(Math.round(s * 0.4), 112, 164),
        p = (a - 8) / 2;
      return {
        narrow: n,
        height: 40 + a + 18,
        pad: 16,
        heads: { queue: { x: 16, y: 14, w: r, h: 16 }, workers: { x: o, y: 14, w: s, h: 16 } },
        chips: l,
        well: d,
        grid: de(d, u),
        slots: Array.from({ length: t }, (e, t) => ({ x: o, y: 40 + t * 46, w: s, h: b })),
        rail: { x: f, y: 6, w: s - f - 6, h: y },
        done: { x: c, y: 40, w: 92, h: p },
        failed: { x: c, y: 40 + p + 8, w: 92, h: p },
      };
    }
    let a = e - 24,
      o = 12,
      s = { x: 12, y: o, w: a, h: 16 };
    o += 24;
    let c = [0, 1].map((e) => ({ x: 12, y: o + e * 32, w: a, h: y })),
      l = o + 64 + 2,
      u = { x: 12, y: l, w: a, h: 48 };
    ((o = l + u.h), (o += 18));
    let d = { x: 12, y: o, w: a, h: 16 };
    o += 24;
    let f = o;
    ((o += i), (o += 12));
    let p = (a - 8) / 2;
    return {
      narrow: n,
      height: o + 40 + 12,
      pad: 12,
      heads: { queue: s, workers: d },
      chips: c,
      well: u,
      grid: de(u, 2),
      slots: Array.from({ length: t }, (e, t) => ({ x: 12, y: f + t * 46, w: a, h: b })),
      rail: { x: 40, y: 6, w: a - 40 - 6, h: y },
      done: { x: 12, y: o, w: p, h: 40 },
      failed: { x: 12 + p + 8, y: o, w: p, h: 40 },
    };
  },
  x = (e) =>
    (0, r.jsx)(`svg`, {
      width: e.size ?? 14,
      height: e.size ?? 14,
      viewBox: `0 0 24 24`,
      fill: `none`,
      "aria-hidden": `true`,
      children: e.children,
    }),
  pe = () =>
    (0, r.jsxs)(x, {
      size: 16,
      children: [
        (0, r.jsx)(`path`, {
          d: `M18 18H6C5.05719 18 4.58579 18 4.29289 17.7071C4 17.4142 4 16.9428 4 16C4 15.0572 4 14.5858 4.29289 14.2929C4.58579 14 5.05719 14 6 14H18C18.9428 14 19.4142 14 19.7071 14.2929C20 14.5858 20 15.0572 20 16C20 16.9428 20 17.4142 19.7071 17.7071C19.4142 18 18.9428 18 18 18Z`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.8`,
        }),
        (0, r.jsx)(`path`, {
          d: `M4 10H20`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.8`,
        }),
        (0, r.jsx)(`path`, {
          d: `M4 6H20`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.8`,
        }),
      ],
    }),
  me = () =>
    (0, r.jsxs)(x, {
      children: [
        (0, r.jsx)(`path`, {
          d: `M4 7C4 5.58579 4 4.87868 4.43934 4.43934C4.87868 4 5.58579 4 7 4C8.41421 4 9.12132 4 9.56066 4.43934C10 4.87868 10 5.58579 10 7V17C10 18.4142 10 19.1213 9.56066 19.5607C9.12132 20 8.41421 20 7 20C5.58579 20 4.87868 20 4.43934 19.5607C4 19.1213 4 18.4142 4 17V7Z`,
          stroke: `currentColor`,
          strokeWidth: `1.8`,
        }),
        (0, r.jsx)(`path`, {
          d: `M14 7C14 5.58579 14 4.87868 14.4393 4.43934C14.8787 4 15.5858 4 17 4C18.4142 4 19.1213 4 19.5607 4.43934C20 4.87868 20 5.58579 20 7V17C20 18.4142 20 19.1213 19.5607 19.5607C19.1213 20 18.4142 20 17 20C15.5858 20 14.8787 20 14.4393 19.5607C14 19.1213 14 18.4142 14 17V7Z`,
          stroke: `currentColor`,
          strokeWidth: `1.8`,
        }),
      ],
    }),
  he = () =>
    (0, r.jsx)(x, {
      children: (0, r.jsx)(`path`, {
        d: `M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z`,
        stroke: `currentColor`,
        strokeLinejoin: `round`,
        strokeWidth: `1.8`,
      }),
    }),
  ge = () =>
    (0, r.jsx)(x, {
      children: (0, r.jsx)(`path`, {
        d: `M12 4V20M20 12H4`,
        stroke: `currentColor`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
        strokeWidth: `1.8`,
      }),
    }),
  _e = () =>
    (0, r.jsx)(x, {
      children: (0, r.jsx)(`path`, {
        d: `M20 12L4 12`,
        stroke: `currentColor`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
        strokeWidth: `1.8`,
      }),
    }),
  ve = () =>
    (0, r.jsx)(x, {
      size: 12,
      children: (0, r.jsx)(`path`, {
        d: `M5 14L8.5 17.5L19 6.5`,
        stroke: `currentColor`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
        strokeWidth: `2.4`,
      }),
    }),
  ye = ({ size: e = 12, w: t = 2.4 }) =>
    (0, r.jsx)(x, {
      size: e,
      children: (0, r.jsx)(`path`, {
        d: `M18 6L6.00081 17.9992M17.9992 18L6 6.00085`,
        stroke: `currentColor`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
        strokeWidth: t,
      }),
    }),
  be = () =>
    (0, r.jsxs)(x, {
      size: 12,
      children: [
        (0, r.jsx)(`path`, {
          d: `M13.9248 21H10.0752C5.44476 21 3.12955 21 2.27636 19.4939C1.42317 17.9879 2.60736 15.9914 4.97574 11.9985L6.90057 8.75333C9.17559 4.91778 10.3131 3 12 3C13.6869 3 14.8244 4.91777 17.0994 8.75332L19.0243 11.9985C21.3926 15.9914 22.5768 17.9879 21.7236 19.4939C20.8704 21 18.5552 21 13.9248 21Z`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `2`,
        }),
        (0, r.jsx)(`path`, {
          d: `M12 9V13`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `2.2`,
        }),
        (0, r.jsx)(`path`, {
          d: `M12 16.8V17`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `2.6`,
        }),
      ],
    }),
  xe = () =>
    (0, r.jsxs)(x, {
      size: 10,
      children: [
        (0, r.jsx)(`path`, {
          d: `M20.4879 15C19.2524 18.4956 15.9187 21 12 21C7.02943 21 3 16.9706 3 12C3 7.02943 7.02943 3 12 3C15.7292 3 18.9286 5.26806 20.2941 8.5`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `2.6`,
        }),
        (0, r.jsx)(`path`, {
          d: `M15 9H18C19.4142 9 20.1213 9 20.5607 8.56066C21 8.12132 21 7.41421 21 6V3`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `2.6`,
        }),
      ],
    }),
  Se = () =>
    (0, r.jsxs)(x, {
      size: 10,
      children: [
        (0, r.jsx)(`path`, {
          d: `M12 5.5V19`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `2.8`,
        }),
        (0, r.jsx)(`path`, {
          d: `M18 11C18 11 13.5811 5.00001 12 5C10.4188 4.99999 6 11 6 11`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `2.8`,
        }),
      ],
    }),
  Ce = ({ kind: e }) =>
    e === `llm`
      ? (0, r.jsxs)(x, {
          size: 12,
          children: [
            (0, r.jsx)(`path`, {
              d: `M15 2L15.5387 4.39157C15.9957 6.42015 17.5798 8.00431 19.6084 8.46127L22 9L19.6084 9.53873C17.5798 9.99569 15.9957 11.5798 15.5387 13.6084L15 16L14.4613 13.6084C14.0043 11.5798 12.4202 9.99569 10.3916 9.53873L8 9L10.3916 8.46127C12.4201 8.00431 14.0043 6.42015 14.4613 4.39158L15 2Z`,
              stroke: `currentColor`,
              strokeLinejoin: `round`,
              strokeWidth: `2`,
            }),
            (0, r.jsx)(`path`, {
              d: `M7 12L7.38481 13.7083C7.71121 15.1572 8.84275 16.2888 10.2917 16.6152L12 17L10.2917 17.3848C8.84275 17.7112 7.71121 18.8427 7.38481 20.2917L7 22L6.61519 20.2917C6.28879 18.8427 5.15725 17.7112 3.70827 17.3848L2 17L3.70827 16.6152C5.15725 16.2888 6.28879 15.1573 6.61519 13.7083L7 12Z`,
              stroke: `currentColor`,
              strokeLinejoin: `round`,
              strokeWidth: `2`,
            }),
          ],
        })
      : e === `tool`
        ? (0, r.jsxs)(x, {
            size: 12,
            children: [
              (0, r.jsx)(`path`, {
                d: `M20.3584 13.3567C19.1689 14.546 16.9308 14.4998 13.4992 14.4998C11.2914 14.4998 9.50138 12.7071 9.50024 10.4993C9.50024 7.07001 9.454 4.83065 10.6435 3.64138C11.8329 2.45212 12.3583 2.50027 17.6274 2.50027C18.1366 2.49809 18.3929 3.11389 18.0329 3.47394L15.3199 6.18714C14.6313 6.87582 14.6294 7.99233 15.3181 8.68092C16.0068 9.36952 17.1234 9.36959 17.8122 8.68109L20.5259 5.96855C20.886 5.60859 21.5019 5.86483 21.4997 6.37395C21.4997 11.6422 21.5479 12.1675 20.3584 13.3567Z`,
                stroke: `currentColor`,
                strokeWidth: `2`,
              }),
              (0, r.jsx)(`path`, {
                d: `M13.5 14.5L7.32842 20.6716C6.22386 21.7761 4.433 21.7761 3.32843 20.6716C2.22386 19.567 2.22386 17.7761 3.32843 16.6716L9.5 10.5`,
                stroke: `currentColor`,
                strokeLinecap: `round`,
                strokeWidth: `2`,
              }),
            ],
          })
        : e === `agent`
          ? (0, r.jsxs)(x, {
              size: 12,
              children: [
                (0, r.jsx)(`path`, {
                  d: `M13 7H11C8.19108 7 6.78661 7 5.77772 7.67412C5.34096 7.96596 4.96596 8.34096 4.67412 8.77772C4 9.78661 4 11.1911 4 14C4 16.8089 4 18.2134 4.67412 19.2223C4.96596 19.659 5.34096 20.034 5.77772 20.3259C6.78661 21 8.19108 21 11 21H13C15.8089 21 17.2134 21 18.2223 20.3259C18.659 20.034 19.034 19.659 19.3259 19.2223C20 18.2134 20 16.8089 20 14C20 11.1911 20 9.78661 19.3259 8.77772C19.034 8.34096 18.659 7.96596 18.2223 7.67412C17.2134 7 15.8089 7 13 7Z`,
                  stroke: `currentColor`,
                  strokeLinecap: `round`,
                  strokeLinejoin: `round`,
                  strokeWidth: `2`,
                }),
                (0, r.jsx)(`path`, {
                  d: `M15 11V13M9 11V13M10 17H14`,
                  stroke: `currentColor`,
                  strokeLinecap: `round`,
                  strokeLinejoin: `round`,
                  strokeWidth: `2`,
                }),
                (0, r.jsx)(`path`, {
                  d: `M12 7C12 5.11438 12 4.17157 11.4142 3.58579C10.8284 3 9.88562 3 8 3`,
                  stroke: `currentColor`,
                  strokeLinecap: `round`,
                  strokeLinejoin: `round`,
                  strokeWidth: `2`,
                }),
              ],
            })
          : (0, r.jsxs)(x, {
              size: 12,
              children: [
                (0, r.jsx)(`path`, {
                  d: `M20 21.0001C19.713 17.269 16.7289 14.3151 12.995 14.0662L12 13.9999C11.6446 14.0096 11.3134 14.0225 11.0008 14.0378C7.3 14.2192 4.28417 17.3057 4 21.0001`,
                  stroke: `currentColor`,
                  strokeLinecap: `round`,
                  strokeLinejoin: `round`,
                  strokeWidth: `2`,
                }),
                (0, r.jsx)(`circle`, {
                  cx: `12`,
                  cy: `6.99988`,
                  r: `4`,
                  stroke: `currentColor`,
                  strokeLinecap: `round`,
                  strokeLinejoin: `round`,
                  strokeWidth: `2`,
                }),
              ],
            });
function S({
  jobs: e,
  workers: t,
  now: s,
  rateLimits: te = [],
  paused: y = !1,
  onPausedChange: b,
  onConcurrencyChange: ce,
  minConcurrency: le = 1,
  maxConcurrency: de = 8,
  backpressure: x,
  window: S = 2 * p,
  totals: Te,
  openId: Ee,
  defaultOpenId: De = null,
  onOpenChange: Oe,
  onPromote: C,
  onCancel: ke,
  title: Ae = `Queue`,
  name: je,
  className: Me,
}) {
  let w = (0, n.useRef)(null),
    Ne = (0, n.useRef)(null),
    T = (0, n.useRef)(null),
    E = (0, n.useRef)(new Map()),
    Pe = `ui-agq-` + (0, n.useId)().replace(/[^a-zA-Z0-9_-]/g, ``),
    [Fe, Ie] = (0, n.useState)(0);
  (0, n.useLayoutEffect)(() => {
    let e = Ne.current;
    if (!e) return;
    Ie(e.clientWidth);
    let t = new ResizeObserver(() => Ie(e.clientWidth));
    return (t.observe(e), () => t.disconnect());
  }, []);
  let D = Fe || 812,
    [Le, Re] = (0, n.useState)(() => Date.now()),
    O = s ?? Le,
    k = te.find((e) => e.from <= O && O < e.until),
    A = !!k,
    j = e.filter((e) => e.status === `queued`),
    M = e.filter((e) => e.status === `running`),
    ze = s === void 0 && (j.length > 0 || M.length > 0 || A),
    N = (0, n.useRef)({
      seen: new Map(),
      gone: new Map(),
      flash: new Map(),
      limited: !1,
      over: !1,
      msg: ``,
      msgAt: 0,
      mounted: !1,
    }),
    P = typeof performance < `u` ? performance.now() : 0;
  {
    let t = N.current,
      n = (e) => {
        ((t.msg = e), (t.msgAt = P));
      };
    for (let r of e) {
      let e = r.attempt ?? 1,
        i = t.seen.get(r.id);
      if (!i) {
        t.seen.set(r.id, { status: r.status, attempt: e, first: P, fresh: t.mounted, worker: r.worker });
        continue;
      }
      if (
        (r.status === `running` && r.worker && (i.worker = r.worker),
        i.status === r.status && i.attempt === e)
      )
        continue;
      let a = i.status === `running` || i.status === `queued`;
      ((r.status === `done` || r.status === `failed`) && a && t.gone.set(r.id, P),
        r.status === `failed` && a && n(`${r.name} failed${r.error ? `: ${r.error}` : ``}`),
        r.status === `queued` &&
          i.status === `running` &&
          (t.flash.set(r.id, P),
          e > i.attempt &&
            n(`${r.name} failed – retrying, attempt ${e}${r.maxAttempts ? ` of ${r.maxAttempts}` : ``}`)),
        (i.status = r.status),
        (i.attempt = e));
    }
    A !== t.limited &&
      (t.mounted &&
        n(
          A
            ? `Rate limited – workers paused for ${Math.ceil((k.until - O) / 1e3)} seconds`
            : `Rate limit lifted – workers resumed`,
        ),
      (t.limited = A));
    let r = x !== void 0 && j.length > x;
    r !== t.over &&
      (r && t.mounted && n(`${h(j.length)} jobs waiting – above the backpressure line of ${x}`),
      (t.over = r));
    for (let [e, n] of t.gone) P - n > c && t.gone.delete(e);
    for (let [e, n] of t.flash) P - n > l && t.flash.delete(e);
    if (t.seen.size > e.length + 64) {
      let n = new Set(e.map((e) => e.id));
      for (let e of t.seen.keys()) n.has(e) || t.seen.delete(e);
    }
  }
  let [Be, Ve] = (0, n.useState)(``);
  (0, n.useEffect)(() => {
    ((N.current.mounted = !0), N.current.msg && N.current.msg !== Be && Ve(N.current.msg));
  });
  let F = fe(D, t.length),
    He = (e) => {
      let t = o[e.priority ?? `normal`],
        n = N.current.seen.get(e.id);
      return t === 0 && n?.fresh && P - n.first < u ? 1 : t;
    },
    I = [...j].sort((e, t) => He(e) - He(t) || e.enqueuedAt - t.enqueuedAt || (e.id < t.id ? -1 : 1)),
    L = F.chips.length,
    Ue = F.grid.cols * F.grid.rows,
    We = I.length > L + Ue,
    Ge = We ? Ue - 3 : Ue,
    Ke = Math.max(0, I.length - L - Ge),
    R = new Map(t.map((e, t) => [e.id, t])),
    z = [],
    qe = (e) => ({ x: e.x + F.rail.x, y: e.y + F.rail.y, w: F.rail.w, h: F.rail.h }),
    Je = (e, t, n) => {
      if (t === void 0 || P - t >= n) return;
      let r = N.current.seen.get(e.id)?.worker ?? e.worker,
        i = r === void 0 ? void 0 : R.get(r);
      return i === void 0 ? void 0 : F.slots[i];
    },
    Ye = 0;
  I.forEach((e) => {
    let t = N.current.flash.has(e.id),
      n = Je(e, N.current.flash.get(e.id), f);
    if (n) {
      z.push({ job: e, shape: `bar`, box: qe(n), flash: !0, p: 1 });
      return;
    }
    let r = Ye++;
    if (r < L) z.push({ job: e, shape: `chip`, box: F.chips[r], index: r, flash: t });
    else if (r < L + Ge) {
      let n = r - L;
      z.push({
        job: e,
        shape: `square`,
        box: {
          x: F.grid.x + (n % F.grid.cols) * F.grid.step,
          y: F.grid.y + Math.floor(n / F.grid.cols) * v,
          w: _,
          h: _,
        },
        index: r,
        flash: t,
      });
    }
  });
  for (let e of M) {
    let t = e.worker === void 0 ? void 0 : R.get(e.worker);
    t !== void 0 && z.push({ job: e, shape: `bar`, box: qe(F.slots[t]), flash: !1 });
  }
  for (let t of e) {
    if (!N.current.gone.has(t.id) || (t.status !== `done` && t.status !== `failed`)) continue;
    let e = Je(t, N.current.gone.get(t.id), t.status === `done` ? d : f);
    if (e) {
      z.push({ job: t, shape: `bar`, box: qe(e), flash: !1, p: 1 });
      continue;
    }
    let n = t.status === `done` ? F.done : F.failed;
    z.push({
      job: t,
      shape: `gone`,
      box: { x: n.x + 17, y: n.y + (F.narrow ? 15 : 17), w: 10, h: 10 },
      flash: !1,
    });
  }
  z.sort((e, t) => (e.job.id < t.job.id ? -1 : 1));
  let Xe = Te?.done ?? e.filter((e) => e.status === `done`).length,
    Ze = Te?.failed ?? e.filter((e) => e.status === `failed`).length,
    Qe = e.filter(
      (e) => e.status === `done` && e.endedAt !== void 0 && e.endedAt > O - p && e.endedAt <= O,
    ).length,
    $e = re(
      [
        ...e
          .filter((e) => e.startedAt !== void 0 && e.status !== `queued` && e.startedAt > O - p)
          .map((e) => e.startedAt - e.enqueuedAt),
        ...j.map((e) => O - e.enqueuedAt),
      ],
      0.95,
    ),
    et = x !== void 0 && j.length > x,
    B = A ? `limited` : y ? `paused` : j.length || M.length ? `live` : `idle`,
    V = O - S,
    tt = S / 96,
    { starts: nt, ends: rt } = (0, n.useMemo)(() => {
      let t = [],
        n = [];
      for (let r of e) {
        let e = r.status === `queued` ? 1 / 0 : (r.startedAt ?? r.endedAt ?? 1 / 0);
        (t.push(r.enqueuedAt), n.push(Math.max(r.enqueuedAt, e)));
      }
      return (t.sort((e, t) => e - t), n.sort((e, t) => e - t), { starts: t, ends: n });
    }, [e]),
    it = 0,
    at = 0,
    ot = (e) => {
      for (; it < nt.length && nt[it] <= e;) it++;
      for (; at < rt.length && rt[at] <= e;) at++;
      return it - at;
    },
    H = [[V, ot(V)]];
  for (let e = Math.ceil(V / tt) * tt; e < O - tt * 0.25; e += tt) H.push([e, ot(e)]);
  H.push([O, j.length]);
  let st = Math.max(0, ...H.map((e) => e[1])),
    ct = Math.max(st * 1.15, (x ?? 0) * 1.2, 4),
    U = ee.find((e) => e >= ct) ?? Math.ceil(ct / 500) * 500,
    lt = Math.max(ue, 10 + h(U).length * 7),
    W = Math.max(40, D - 2 * F.pad - lt),
    G = F.narrow ? 88 : 112,
    ut = (e) => ((e - V) / S) * W,
    dt = se(H.map(([e, t]) => [ut(e), t])),
    ft = dt ? `${dt}L${g(W)},0L0,0Z` : ``,
    pt = H.reduce((e, t) => e + t[1], 0) / H.length,
    mt = te
      .filter((e) => e.until > V && e.from < O)
      .map((e) => ({ l: e, x1: ut(Math.max(e.from, V)), x2: ut(Math.min(e.until, O)) })),
    K = S / p,
    ht =
      K >= 2880
        ? `${+(K / 1440).toFixed(1)} days`
        : K >= 120
          ? `${+(K / 60).toFixed(1)} h`
          : K >= 2
            ? `${+K.toFixed(1)} min`
            : `${Math.round(S / 1e3)}s`,
    gt = `Queue depth over the last ${ht}: ${j.length} waiting now, peak ${st}, average ${pt.toFixed(1)}${x === void 0 ? `` : `, backpressure line at ${x}`}${mt.length ? `, rate limited ${mt.length === 1 ? `once` : `${mt.length} times`}` : ``}${Ze ? `, ${Ze} failed in all` : ``}.`,
    _t = (0, n.useRef)(new Map()),
    q = (e, t, n) => {
      let i = _t.current.get(e);
      (i || ((i = { el: null, shown: t, target: t, fmt: n }), _t.current.set(e, i)),
        (i.target = t),
        (i.fmt = n));
      let a = i;
      return (0, r.jsx)(`span`, {
        className: `ui-agq__num`,
        ref: (e) => {
          ((a.el = e), e && !e.textContent && (e.textContent = a.fmt(a.shown)));
        },
      });
    },
    J = (0, n.useRef)({ needClock: ze, ymax: U });
  J.current = { needClock: ze, ymax: U };
  let vt = (0, n.useRef)(() => {});
  ((0, n.useEffect)(() => {
    let e = 0,
      t = !0,
      n = performance.now(),
      r = 0,
      i = J.current.ymax;
    w.current?.style.setProperty(`--ui-agq-ymax`, String(i));
    let a = (o) => {
        e = 0;
        let s = Math.min(64, o - n);
        n = o;
        let c = oe(),
          l = 1 - Math.exp(-s / 110),
          u = !1;
        for (let e of _t.current.values()) {
          if (e.shown === e.target) continue;
          let t = e.target - e.shown;
          ((e.shown =
            c || Math.abs(t) < 0.02 * Math.max(1, Math.abs(e.target)) * 0.05 + 0.004
              ? e.target
              : e.shown + t * l),
            e.el && (e.el.textContent = e.fmt(e.shown)),
            (u = !0));
        }
        let d = J.current.ymax;
        if (i !== d) {
          let e = d - i;
          ((i = c || Math.abs(e) < 0.01 ? d : i + e * (1 - Math.exp(-s / 160))),
            w.current?.style.setProperty(`--ui-agq-ymax`, String(i)),
            (u = !0));
        }
        (J.current.needClock && ((u = !0), o - r > 33 && ((r = o), Re(Date.now()))),
          u && t && !document.hidden && (e = requestAnimationFrame(a)));
      },
      o = () => {
        e || !t || document.hidden || ((n = performance.now()), (e = requestAnimationFrame(a)));
      };
    vt.current = o;
    let s = new IntersectionObserver(([e]) => {
      ((t = e.isIntersecting), t && o());
    });
    return (
      w.current && s.observe(w.current),
      document.addEventListener(`visibilitychange`, o),
      o(),
      () => {
        (cancelAnimationFrame(e), s.disconnect(), document.removeEventListener(`visibilitychange`, o));
      }
    );
  }, []),
    (0, n.useEffect)(() => vt.current()),
    (0, n.useLayoutEffect)(() => {
      w.current?.style.setProperty(`--ui-agq-ymax`, String(J.current.ymax));
    }, []));
  let [, yt] = (0, n.useState)(0),
    bt =
      N.current.gone.size > 0 ||
      N.current.flash.size > 0 ||
      j.some((e) => e.priority === `high` && P - (N.current.seen.get(e.id)?.first ?? 0) < u);
  (0, n.useEffect)(() => {
    if (!bt) return;
    let e = window.setTimeout(() => yt((e) => e + 1), 120);
    return () => window.clearTimeout(e);
  });
  let [xt, St] = (0, n.useState)(De),
    Y = Ee === void 0 ? xt : Ee,
    X = (t) => {
      (St(t), Oe?.(t, t ? e.find((e) => e.id === t) : void 0));
    },
    [Ct, wt] = (0, n.useState)(null),
    Tt = z.filter((e) => e.shape !== `gone`),
    Et = Y ? Tt.find((e) => e.job.id === Y) : void 0,
    Dt = !Et && Ct ? Tt.find((e) => e.job.id === Ct) : void 0,
    Ot = Et ?? Dt;
  ((0, n.useEffect)(() => {
    Y && !Et && X(null);
  }),
    (0, n.useEffect)(() => {
      if (!Et) return;
      let e = (e) => {
        let t = e.target;
        T.current?.contains(t) || [...E.current.values()].some((e) => e.contains(t)) || X(null);
      };
      return (
        document.addEventListener(`pointerdown`, e),
        () => document.removeEventListener(`pointerdown`, e)
      );
    }));
  let [kt, At] = (0, n.useState)(120);
  (0, n.useLayoutEffect)(() => {
    let e = T.current?.offsetHeight;
    e && Math.abs(e - kt) > 1 && At(e);
  });
  let Z = [
      ...M.filter((e) => e.worker !== void 0 && R.has(e.worker)).sort(
        (e, t) => R.get(e.worker) - R.get(t.worker),
      ),
      ...I.slice(0, L + Ge),
    ],
    [jt, Mt] = (0, n.useState)(null),
    Nt = jt && Z.some((e) => e.id === jt) ? jt : Z[0]?.id,
    Q = (e) => {
      e && (Mt(e.id), E.current.get(e.id)?.focus());
    },
    Pt = (e, t) => {
      let n = Z.findIndex((e) => e.id === t.id),
        r = {
          ArrowDown: () => Q(Z[n + 1]),
          ArrowRight: () => Q(Z[n + 1]),
          ArrowUp: () => Q(Z[n - 1]),
          ArrowLeft: () => Q(Z[n - 1]),
          Home: () => Q(Z[0]),
          End: () => Q(Z[Z.length - 1]),
          Escape: () => Y && X(null),
        };
      r[e.key] && (e.preventDefault(), r[e.key]());
    },
    Ft = (e) =>
      e.status === `done` || e.status === `failed`
        ? 1
        : e.status === `running`
          ? ie(
              e.progress ?? (e.startedAt !== void 0 && e.estimate ? (O - e.startedAt) / e.estimate : 0.5),
              0.015,
              1,
            )
          : 0,
    It = (e) => {
      let t = e.job,
        n = [t.name, i[t.kind]];
      return (
        t.status === `queued` &&
          n.push(`waiting ${m(O - t.enqueuedAt)}`, `position ${h((e.index ?? 0) + 1)} of ${h(I.length)}`),
        t.status === `running` &&
          n.push(
            A
              ? `paused by the rate limit`
              : `running ${m(O - (t.startedAt ?? O))}, ${Math.round(Ft(t) * 100)}%`,
          ),
        t.priority === `high` && n.push(`high priority`),
        t.priority === `low` && n.push(`low priority`),
        (t.attempt ?? 1) > 1 && n.push(`attempt ${t.attempt}${t.maxAttempts ? ` of ${t.maxAttempts}` : ``}`),
        n.join(`, `)
      );
    },
    Lt = (e) => {
      let t = e.job,
        n = e.shape === `gone`,
        i = t.attempt ?? 1,
        a = t.status === `running` && A,
        o =
          t.status === `queued`
            ? m(O - t.enqueuedAt)
            : t.status === `running`
              ? a
                ? `Paused`
                : m(O - (t.startedAt ?? O))
              : t.status === `done`
                ? `Done`
                : `Failed`,
        s = N.current.seen.get(t.id),
        c = s && !s.fresh ? Math.min(420, (e.index ?? 0) * 22) : 0;
      return (0, r.jsxs)(
        `button`,
        {
          ref: (e) => {
            e ? E.current.set(t.id, e) : E.current.delete(t.id);
          },
          type: `button`,
          className: `ui-agq__job`,
          "data-shape": e.shape,
          "data-kind": t.kind,
          "data-status": t.status,
          "data-flash": e.flash ? `` : void 0,
          "data-halted": a ? `` : void 0,
          "data-priority": t.priority && t.priority !== `normal` ? t.priority : void 0,
          "data-open": Y === t.id ? `` : void 0,
          tabIndex: !n && Nt === t.id ? 0 : -1,
          "aria-hidden": n || void 0,
          "aria-label": It(e),
          "aria-haspopup": `dialog`,
          "aria-expanded": Y === t.id,
          style: {
            translate: `${e.box.x}px ${e.box.y}px`,
            width: e.box.w,
            height: e.box.h,
            "--p": e.p ?? Ft(t),
            animationDelay: `${c}ms`,
          },
          onPointerEnter: () => !n && wt(t.id),
          onPointerLeave: () => wt((e) => (e === t.id ? null : e)),
          onFocus: () => Mt(t.id),
          onClick: () => {
            n || (Mt(t.id), X(Y === t.id ? null : t.id));
          },
          onKeyDown: (e) => Pt(e, t),
          children: [
            (0, r.jsx)(`span`, { className: `ui-agq__fill`, "aria-hidden": `true` }),
            (0, r.jsxs)(`span`, {
              className: `ui-agq__job-in`,
              "aria-hidden": `true`,
              children: [
                (0, r.jsx)(`span`, {
                  className: `ui-agq__job-icon`,
                  "data-logo": t.icon ? `` : void 0,
                  children: t.icon ?? (0, r.jsx)(Ce, { kind: t.kind }),
                }),
                (0, r.jsx)(`span`, { className: `ui-agq__job-name`, dir: `auto`, children: t.name }),
                t.priority === `high` &&
                  (0, r.jsx)(`span`, {
                    className: `ui-agq__badge`,
                    "data-kind": `high`,
                    title: `High priority`,
                    children: (0, r.jsx)(Se, {}),
                  }),
                i > 1 &&
                  (0, r.jsxs)(`span`, {
                    className: `ui-agq__badge`,
                    "data-kind": `retry`,
                    title: `Attempt ${i}`,
                    children: [(0, r.jsx)(xe, {}), i],
                  }),
                (0, r.jsx)(`span`, { className: `ui-agq__job-meta`, children: o }),
              ],
            }),
          ],
        },
        t.id,
      );
    },
    Rt = (e) => {
      let n = e.job,
        o = !!Et,
        s = n.attempt ?? 1,
        c = n.worker ? t.find((e) => e.id === n.worker) : void 0,
        l = [
          n.status === `queued`
            ? [`Waiting`, m(O - n.enqueuedAt)]
            : [`Waited`, m((n.startedAt ?? O) - n.enqueuedAt)],
          ...(n.status === `running` ? [[`Running`, m(O - (n.startedAt ?? O))]] : []),
          ...(n.status === `queued` ? [[`Position`, `${h((e.index ?? 0) + 1)} of ${h(I.length)}`]] : []),
          ...(n.status === `running` && c ? [[`Worker`, c.name]] : []),
          [`Priority`, n.priority === `high` ? `High` : n.priority === `low` ? `Low` : `Normal`],
          [`Attempt`, `${s}${n.maxAttempts ? ` of ${n.maxAttempts}` : ``}`],
        ],
        u = Math.min(F.narrow ? D - 2 * F.pad : 280, D - 16),
        d = e.box.y + e.box.h + 6,
        f = d + kt > F.height + 120 && e.box.y - kt - 6 > 0 ? e.box.y - kt - 6 : d,
        p = ie(e.box.x, 8, D - u - 8),
        ee = n.status === `running` && A,
        te = ee ? `Paused` : a[n.status];
      return (0, r.jsxs)(
        `div`,
        {
          ref: T,
          className: `ui-agq__pop`,
          role: o ? `dialog` : `tooltip`,
          "aria-label": `${n.name} details`,
          "data-pinned": o ? `` : void 0,
          "data-kind": n.kind,
          "data-status": ee ? `halted` : n.status,
          style: { translate: `${p}px ${f}px`, width: u },
          onKeyDown: (e) => {
            e.key === `Escape` && (e.stopPropagation(), X(null), E.current.get(n.id)?.focus());
          },
          children: [
            (0, r.jsxs)(`div`, {
              className: `ui-agq__pop-head`,
              children: [
                (0, r.jsx)(`span`, {
                  className: `ui-agq__pop-icon`,
                  "data-logo": n.icon ? `` : void 0,
                  children: n.icon ?? (0, r.jsx)(Ce, { kind: n.kind }),
                }),
                (0, r.jsxs)(`span`, {
                  className: `ui-agq__pop-who`,
                  children: [
                    (0, r.jsx)(`span`, { className: `ui-agq__pop-name`, dir: `auto`, children: n.name }),
                    (0, r.jsxs)(`span`, {
                      className: `ui-agq__pop-kind`,
                      dir: `auto`,
                      children: [i[n.kind], n.detail ? ` · ${n.detail}` : ``],
                    }),
                  ],
                }),
                (0, r.jsx)(`span`, {
                  className: `ui-agq__pill`,
                  "data-status": ee ? `halted` : n.status,
                  children: te,
                }),
                o &&
                  (0, r.jsx)(`button`, {
                    type: `button`,
                    className: `ui-agq__close`,
                    "aria-label": `Close details`,
                    onClick: () => {
                      (X(null), E.current.get(n.id)?.focus());
                    },
                    children: (0, r.jsx)(ye, { size: 14, w: 1.8 }),
                  }),
              ],
            }),
            (0, r.jsx)(`dl`, {
              className: `ui-agq__pop-stats`,
              children: l.map(([e, t]) =>
                (0, r.jsxs)(
                  `div`,
                  { children: [(0, r.jsx)(`dt`, { children: e }), (0, r.jsx)(`dd`, { children: t })] },
                  e,
                ),
              ),
            }),
            n.error &&
              (0, r.jsxs)(`p`, {
                className: `ui-agq__pop-error`,
                children: [(0, r.jsx)(be, {}), (0, r.jsx)(`span`, { dir: `auto`, children: n.error })],
              }),
            o &&
              (C || ke) &&
              (n.status === `queued` || n.status === `running`) &&
              (0, r.jsxs)(`div`, {
                className: `ui-agq__pop-actions`,
                children: [
                  C &&
                    n.status === `queued` &&
                    (e.index ?? 0) > 0 &&
                    (0, r.jsxs)(`button`, {
                      type: `button`,
                      className: `ui-agq__btn`,
                      onClick: () => C(n),
                      children: [(0, r.jsx)(Se, {}), `Move to front`],
                    }),
                  ke &&
                    (0, r.jsxs)(`button`, {
                      type: `button`,
                      className: `ui-agq__btn`,
                      "data-kind": `danger`,
                      onClick: () => {
                        (ke(n), X(null));
                      },
                      children: [(0, r.jsx)(ye, { size: 10 }), `Cancel`],
                    }),
                ],
              }),
          ],
        },
        n.id,
      );
    },
    $ = (e) => ({ translate: `${e.x}px ${e.y}px`, width: e.w, height: e.h }),
    zt = M.filter((e) => e.worker !== void 0 && R.has(e.worker)).length,
    Bt = [
      { label: `Waiting`, value: q(`waiting`, j.length, h), kind: et ? `warn` : void 0 },
      {
        label: `Running`,
        value: (0, r.jsxs)(r.Fragment, {
          children: [
            q(`running`, zt, h),
            (0, r.jsxs)(`span`, { className: `ui-agq__of`, children: [`/`, t.length] }),
          ],
        }),
      },
      {
        label: `Throughput`,
        value: (0, r.jsxs)(r.Fragment, {
          children: [q(`rate`, Qe, h), (0, r.jsx)(`span`, { className: `ui-agq__of`, children: `/min` })],
        }),
      },
      { label: `Wait p95`, value: q(`p95`, $e, m) },
    ],
    Vt = k ? Math.max(0, Math.ceil((k.until - O) / 1e3)) : 0,
    Ht = B === `paused` ? `Paused` : B === `live` ? `Live` : `Idle`,
    Ut = t.length > le,
    Wt = t.length < de;
  return (0, r.jsxs)(`div`, {
    ref: w,
    className: [`ui-agq`, Me].filter(Boolean).join(` `),
    "data-state": B,
    children: [
      (0, r.jsx)(`style`, { href: `ui-agent-queue`, precedence: `default`, children: we }),
      (0, r.jsxs)(`header`, {
        className: `ui-agq__head`,
        children: [
          (0, r.jsx)(`span`, { className: `ui-agq__mark`, children: (0, r.jsx)(pe, {}) }),
          (0, r.jsx)(`span`, { className: `ui-agq__title`, title: Ae, children: Ae }),
          je && (0, r.jsx)(`span`, { className: `ui-agq__name`, children: je }),
          (0, r.jsxs)(`span`, {
            className: `ui-agq__pill`,
            "data-status": B,
            role: B === `limited` ? `status` : void 0,
            title: B === `limited` ? k?.label : void 0,
            children: [
              (B === `live` || B === `limited`) &&
                (0, r.jsx)(`span`, { className: `ui-agq__pulse`, "aria-hidden": `true` }),
              B === `limited`
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      `Rate limited · `,
                      (0, r.jsx)(`span`, {
                        className: `ui-agq__num`,
                        children: Vt < 100 ? `${Vt}s` : m(Vt * 1e3),
                      }),
                    ],
                  })
                : Ht,
            ],
          }),
          (0, r.jsxs)(`span`, {
            className: `ui-agq__tools`,
            children: [
              b &&
                (0, r.jsxs)(`button`, {
                  type: `button`,
                  className: `ui-agq__btn`,
                  "aria-pressed": y,
                  "aria-label": y ? `Resume the queue` : `Pause the queue`,
                  onClick: () => b(!y),
                  children: [
                    y ? (0, r.jsx)(he, {}) : (0, r.jsx)(me, {}),
                    (0, r.jsx)(`span`, { className: `ui-agq__btn-text`, children: y ? `Resume` : `Pause` }),
                  ],
                }),
              ce &&
                (0, r.jsxs)(`span`, {
                  className: `ui-agq__stepper`,
                  role: `group`,
                  "aria-label": `Workers`,
                  children: [
                    (0, r.jsx)(`button`, {
                      type: `button`,
                      "aria-label": `One worker less`,
                      disabled: !Ut,
                      onClick: () => Ut && ce(t.length - 1),
                      children: (0, r.jsx)(_e, {}),
                    }),
                    (0, r.jsx)(`output`, {
                      className: `ui-agq__stepper-value`,
                      "aria-live": `polite`,
                      "aria-label": `${t.length} workers`,
                      children: t.length,
                    }),
                    (0, r.jsx)(`button`, {
                      type: `button`,
                      "aria-label": `One worker more`,
                      disabled: !Wt,
                      onClick: () => Wt && ce(t.length + 1),
                      children: (0, r.jsx)(ge, {}),
                    }),
                  ],
                }),
            ],
          }),
        ],
      }),
      (0, r.jsxs)(`div`, {
        ref: Ne,
        className: `ui-agq__card`,
        children: [
          (0, r.jsx)(`dl`, {
            className: `ui-agq__stats`,
            children: Bt.map((e) =>
              (0, r.jsxs)(
                `div`,
                {
                  className: `ui-agq__stat`,
                  "data-kind": e.kind,
                  children: [
                    (0, r.jsx)(`dt`, { children: e.label }),
                    (0, r.jsx)(`dd`, { children: e.value }),
                  ],
                },
                e.label,
              ),
            ),
          }),
          (0, r.jsxs)(`div`, {
            className: `ui-agq__flow`,
            style: { height: F.height },
            "data-narrow": F.narrow ? `` : void 0,
            children: [
              (0, r.jsxs)(`span`, {
                className: `ui-agq__col-head`,
                style: $(F.heads.queue),
                children: [
                  (0, r.jsx)(`span`, { children: `Queue` }),
                  (0, r.jsx)(`b`, { children: q(`depth`, j.length, h) }),
                  Ke > 0 &&
                    F.narrow &&
                    (0, r.jsxs)(`span`, { className: `ui-agq__col-more`, children: [`+`, h(Ke), ` more`] }),
                ],
              }),
              (0, r.jsxs)(`span`, {
                className: `ui-agq__col-head`,
                style: $(F.heads.workers),
                children: [
                  (0, r.jsx)(`span`, { children: `Workers` }),
                  (0, r.jsxs)(`b`, { children: [zt, `/`, t.length] }),
                ],
              }),
              (0, r.jsx)(`span`, {
                className: `ui-agq__well`,
                "aria-hidden": `true`,
                "data-empty": I.length <= L ? `` : void 0,
                style: $(F.well),
              }),
              I.length === 0 &&
                (0, r.jsx)(`span`, {
                  className: `ui-agq__empty`,
                  style: $({
                    x: F.chips[0].x,
                    y: F.chips[0].y,
                    w: F.chips[0].w,
                    h: F.well.y + F.well.h - F.chips[0].y,
                  }),
                  children: `Nothing waiting`,
                }),
              We &&
                (0, r.jsxs)(`span`, {
                  className: `ui-agq__more`,
                  "aria-hidden": `true`,
                  style: $({
                    x: F.grid.x + ((Ue - 3) % F.grid.cols) * F.grid.step,
                    y: F.grid.y + Math.floor((Ue - 3) / F.grid.cols) * v,
                    w: 2 * F.grid.step + _,
                    h: _,
                  }),
                  children: [`+`, ne(Ke)],
                }),
              t.map((e, t) => {
                let n = F.slots[t],
                  i = M.some((t) => t.worker === e.id);
                return (0, r.jsxs)(
                  `div`,
                  {
                    className: `ui-agq__slot`,
                    "data-busy": i ? `` : void 0,
                    "data-limited": A ? `` : void 0,
                    style: $(n),
                    children: [
                      (0, r.jsxs)(`span`, {
                        className: `ui-agq__who`,
                        style: { width: F.rail.x - 16 },
                        children: [
                          (0, r.jsx)(`span`, {
                            className: `ui-agq__logo`,
                            "data-logo": e.icon ? `` : void 0,
                            children: e.icon ?? ae(e.name),
                          }),
                          (0, r.jsx)(`span`, {
                            className: `ui-agq__who-text`,
                            children: (0, r.jsx)(`span`, { className: `ui-agq__who-name`, children: e.name }),
                          }),
                        ],
                      }),
                      (0, r.jsx)(`span`, {
                        className: `ui-agq__rail`,
                        style: { left: F.rail.x, top: F.rail.y, width: F.rail.w, height: F.rail.h },
                        children: !i && (0, r.jsx)(`span`, { children: A || y ? `Paused` : `Idle` }),
                      }),
                    ],
                  },
                  e.id,
                );
              }),
              [`done`, `failed`].map((e) => {
                let t = e === `done` ? Xe : Ze;
                return (0, r.jsxs)(
                  `div`,
                  {
                    className: `ui-agq__bin`,
                    "data-kind": e,
                    style: $(e === `done` ? F.done : F.failed),
                    children: [
                      (0, r.jsx)(`span`, {
                        className: `ui-agq__bin-icon`,
                        children: e === `done` ? (0, r.jsx)(ve, {}) : (0, r.jsx)(ye, {}),
                      }),
                      (0, r.jsx)(`span`, {
                        className: `ui-agq__bin-label`,
                        children: e === `done` ? `Done` : `Failed`,
                      }),
                      (0, r.jsx)(`span`, {
                        className: `ui-agq__bin-count`,
                        title: h(t),
                        children: q(`bin-${e}`, t, ne),
                      }),
                      (0, r.jsx)(`span`, { className: `ui-agq__bin-hit`, "aria-hidden": `true` }, t),
                    ],
                  },
                  e,
                );
              }),
              (0, r.jsx)(`div`, {
                className: `ui-agq__jobs`,
                role: `group`,
                "aria-label": `Jobs: ${zt} running, ${I.length} waiting`,
                children: z.map(Lt),
              }),
              Ot && Rt(Ot),
            ],
          }),
          (0, r.jsxs)(`div`, {
            className: `ui-agq__chart`,
            style: { "--ui-agq-gutter": `${lt}px` },
            children: [
              (0, r.jsx)(`div`, {
                className: `ui-agq__chart-head`,
                children: (0, r.jsx)(`span`, { className: `ui-agq__chart-title`, children: `Queue depth` }),
              }),
              (0, r.jsxs)(`div`, {
                className: `ui-agq__plot`,
                role: `img`,
                "aria-label": gt,
                style: { height: G },
                children: [
                  [0, U].map((e) =>
                    (0, r.jsx)(
                      `span`,
                      {
                        className: `ui-agq__grid`,
                        "data-zero": e === 0 ? `` : void 0,
                        style: { "--v": e },
                        "aria-hidden": `true`,
                        children:
                          (x === void 0 || Math.abs(e - x) > U * 0.1) &&
                          (0, r.jsx)(`span`, { children: h(e) }),
                      },
                      e,
                    ),
                  ),
                  (0, r.jsxs)(`svg`, {
                    className: `ui-agq__svg`,
                    width: W,
                    height: G,
                    viewBox: `0 0 ${W} ${G}`,
                    "aria-hidden": `true`,
                    children: [
                      (0, r.jsx)(`defs`, {
                        children: (0, r.jsxs)(`linearGradient`, {
                          id: Pe,
                          x1: `0`,
                          y1: `1`,
                          x2: `0`,
                          y2: `0`,
                          children: [
                            (0, r.jsx)(`stop`, { offset: `0`, className: `ui-agq__stop`, "data-at": `top` }),
                            (0, r.jsx)(`stop`, {
                              offset: `1`,
                              className: `ui-agq__stop`,
                              "data-at": `bottom`,
                            }),
                          ],
                        }),
                      }),
                      mt.map(({ l: e, x1: t, x2: n }) =>
                        (0, r.jsx)(
                          `g`,
                          {
                            className: `ui-agq__band`,
                            children: (0, r.jsx)(`rect`, {
                              x: t,
                              y: 0,
                              width: Math.max(1, n - t),
                              height: G,
                            }),
                          },
                          e.from,
                        ),
                      ),
                      (0, r.jsxs)(`g`, {
                        className: `ui-agq__scaled`,
                        style: { "--h": G },
                        children: [
                          (0, r.jsx)(`path`, { className: `ui-agq__area`, d: ft, fill: `url(#${Pe})` }),
                          (0, r.jsx)(`path`, { className: `ui-agq__line`, d: dt }),
                          x !== void 0 &&
                            (0, r.jsx)(`line`, { className: `ui-agq__bp`, x1: 0, x2: W, y1: x, y2: x }),
                        ],
                      }),
                    ],
                  }),
                  x !== void 0 &&
                    (0, r.jsx)(`span`, {
                      className: `ui-agq__bp-label`,
                      style: { "--v": x },
                      "aria-hidden": `true`,
                      children: x,
                    }),
                  (0, r.jsx)(`span`, {
                    className: `ui-agq__dot`,
                    style: { "--v": j.length },
                    "aria-hidden": `true`,
                  }),
                ],
              }),
              (0, r.jsxs)(`div`, {
                className: `ui-agq__axis`,
                "aria-hidden": `true`,
                children: [
                  (0, r.jsxs)(`span`, { children: [ht, ` ago`] }),
                  (0, r.jsx)(`span`, { children: `now` }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, r.jsx)(`div`, { className: `ui-agq__sr`, "aria-live": `polite`, children: Be }),
    ],
  });
}
var we = `@property --ui-agq-ymax{syntax: "<number>";inherits: true;initial-value: 10}.ui-agq{--ui-agq-tray: #f0f0f0;--ui-agq-card: #ffffff;--ui-agq-strong: #171717;--ui-agq-ink: #171717;--ui-agq-text: #6b6b6b;--ui-agq-muted: #8a8a8a;--ui-agq-faint: #b8b8b8;--ui-agq-line: #ececec;--ui-agq-grid: #f1f1f1;--ui-agq-chip: #f5f5f5;--ui-agq-wash: #f7f7f7;--ui-agq-well: #fafafa;--ui-agq-accent: #2f6bff;--ui-agq-depth: #5a45d4;--ui-agq-depth-fill: rgba(90, 69, 212, 0.16);--ui-agq-depth-fade: rgba(90, 69, 212, 0);--ui-agq-agent-bg: #eef0f3;--ui-agq-agent-edge: #d3d8e0;--ui-agq-agent-ink: #4b5363;--ui-agq-agent-sq: #d9dde4;--ui-agq-llm-bg: #efecff;--ui-agq-llm-edge: #cbc2fb;--ui-agq-llm-ink: #5a45d4;--ui-agq-llm-sq: #d4ccfb;--ui-agq-tool-bg: #e4f5f1;--ui-agq-tool-edge: #a9ddd1;--ui-agq-tool-ink: #0e7a67;--ui-agq-tool-sq: #bfe6dc;--ui-agq-human-bg: #eaf1ff;--ui-agq-human-edge: #bcd0fb;--ui-agq-human-ink: #2456d6;--ui-agq-human-sq: #cddcfd;--ui-agq-error-bg: #fde8e5;--ui-agq-error-edge: #f1a397;--ui-agq-error-ink: #c2331f;--ui-agq-ok-bg: #e6f6ec;--ui-agq-ok-edge: #a6dcb9;--ui-agq-ok-fg: #1a7f45;--ui-agq-warn: #e08a00;--ui-agq-warn-bg: #fff3e0;--ui-agq-warn-edge: #f5cf94;--ui-agq-warn-fg: #b85c00;--ui-agq-brand-fg: #2456d6;--ui-agq-ring: rgba(23, 23, 23, 0.22);--ui-agq-shadow: 0 0 0 1px #ececec, 0 1px 2px rgba(0, 0, 0, 0.04);--ui-agq-lift: 0 0 0 1px #e8e8e8, 0 1px 2px rgba(0, 0, 0, 0.05), 0 2px 6px -2px rgba(0, 0, 0, 0.06);--ui-agq-pop: 0 0 0 1px #ececec, 0 16px 36px -12px rgba(0, 0, 0, 0.22);--ui-agq-ease: cubic-bezier(0.22, 1, 0.36, 1);position: relative;box-sizing: border-box;width: 100%;padding: 4px;border-radius: 20px;background: var(--ui-agq-tray);container: ui-agq / inline-size;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 14px;font-weight: 400;line-height: 20px;letter-spacing: -0.006em;color: var(--ui-agq-text);text-align: left;-webkit-font-smoothing: antialiased}.ui-agq *, .ui-agq *::before, .ui-agq *::after{box-sizing: border-box}:where(.ui-agq) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;text-align: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}.ui-agq button:focus-visible{outline: 2px solid var(--ui-agq-ring);outline-offset: 1px}.ui-agq :is(p, dl, dd){margin: 0}.ui-agq svg{display: block;flex: none}.ui-agq__num{font-variant-numeric: tabular-nums}.ui-agq__head{display: flex;align-items: center;gap: 8px;min-width: 0;min-height: 44px;padding: 4px 4px 8px 12px}.ui-agq__mark{display: grid;flex: none;place-items: center;width: 16px;color: var(--ui-agq-accent)}.ui-agq__title{flex: 0 1 auto;min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;font-weight: 600;color: var(--ui-agq-strong)}.ui-agq__name{flex: 0 1000 auto;min-width: 0;overflow: hidden;font-size: 13px;color: var(--ui-agq-muted);white-space: nowrap;text-overflow: ellipsis}.ui-agq__pill{display: inline-flex;flex: none;align-items: center;gap: 6px;height: 22px;padding: 0 9px;border-radius: 999px;background: var(--ui-agq-chip);font-size: 12px;font-weight: 500;line-height: 16px;color: var(--ui-agq-text);white-space: nowrap}.ui-agq__head .ui-agq__pill{background: var(--ui-agq-card);box-shadow: var(--ui-agq-shadow)}.ui-agq__pill[data-status="live"]{color: var(--ui-agq-brand-fg)}.ui-agq__pill[data-status="limited"]{color: var(--ui-agq-warn-fg)}.ui-agq__head .ui-agq__pill[data-status="limited"]{background: var(--ui-agq-warn-bg);box-shadow: inset 0 0 0 1px var(--ui-agq-warn-edge)}.ui-agq__pill[data-status="running"]{color: var(--ui-agq-brand-fg)}.ui-agq__pill[data-status="done"]{color: var(--ui-agq-ok-fg)}.ui-agq__pill[data-status="failed"]{color: var(--ui-agq-error-ink)}.ui-agq__pop .ui-agq__pill[data-status="running"]{background: #eaf1ff}.ui-agq__pulse{width: 6px;height: 6px;border-radius: 50%;background: currentColor;animation: ui-agq-pulse 1400ms ease-in-out infinite}.ui-agq__tools{display: flex;flex: none;align-items: center;gap: 6px;margin-left: auto}.ui-agq__btn{display: inline-flex;align-items: center;gap: 6px;height: 28px;padding: 0 11px 0 9px;border-radius: 9px;background: var(--ui-agq-card);box-shadow: var(--ui-agq-shadow);font-size: 13px;font-weight: 500;color: var(--ui-agq-ink);white-space: nowrap;transition: box-shadow 140ms ease, background-color 140ms ease}.ui-agq__btn:hover{box-shadow: 0 0 0 1px #dedede, 0 1px 3px rgba(0, 0, 0, 0.08)}.ui-agq__btn[aria-pressed="true"]{color: var(--ui-agq-brand-fg)}.ui-agq__btn[data-kind="danger"]{color: var(--ui-agq-error-ink)}.ui-agq__stepper{display: inline-flex;align-items: center;height: 28px;padding: 0 2px 0 10px;border-radius: 9px;background: var(--ui-agq-card);box-shadow: var(--ui-agq-shadow)}.ui-agq__stepper button{display: grid;place-items: center;width: 24px;height: 24px;border-radius: 7px;color: var(--ui-agq-text);transition: background-color 140ms ease, color 140ms ease}.ui-agq__stepper button:hover:not(:disabled){background: var(--ui-agq-chip);color: var(--ui-agq-ink)}.ui-agq__stepper button:disabled{opacity: 0.35;cursor: default}.ui-agq__stepper-value{min-width: 18px;font-size: 13px;font-weight: 600;color: var(--ui-agq-ink);text-align: center;font-variant-numeric: tabular-nums}.ui-agq__card{position: relative;border-radius: 16px;background: var(--ui-agq-card);box-shadow: var(--ui-agq-shadow)}.ui-agq__stats{display: grid;grid-template-columns: repeat(4, minmax(0, 1fr));padding: 14px 0;border-bottom: 1px solid var(--ui-agq-line)}.ui-agq__stat{display: grid;gap: 2px;min-width: 0;padding: 0 16px}.ui-agq__stat:first-child{padding-left: 22px}.ui-agq__stat:last-child{padding-right: 10px}.ui-agq__stat + .ui-agq__stat{border-left: 1px solid var(--ui-agq-line)}.ui-agq__stat dt{overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-agq-muted);white-space: nowrap;text-overflow: ellipsis}.ui-agq__stat dd{overflow: hidden;font-size: 16px;font-weight: 600;line-height: 22px;letter-spacing: -0.01em;color: var(--ui-agq-ink);white-space: nowrap;font-variant-numeric: tabular-nums;transition: color 240ms ease}.ui-agq__of{margin-left: 1px;font-size: 13px;font-weight: 500;color: var(--ui-agq-muted)}.ui-agq__stat[data-kind="warn"] dd{color: var(--ui-agq-warn-fg)}.ui-agq__stat[data-kind="failed"] dd{color: var(--ui-agq-error-ink)}.ui-agq__flow{position: relative;border-bottom: 1px solid var(--ui-agq-line);transition: height 360ms var(--ui-agq-ease)}.ui-agq__flow > *, .ui-agq__jobs > *{position: absolute;top: 0;left: 0}.ui-agq__col-head{display: flex;align-items: center;gap: 6px;font-size: 12px;line-height: 16px;color: var(--ui-agq-muted);white-space: nowrap}.ui-agq__col-head > b{font-weight: 600;color: var(--ui-agq-ink);font-variant-numeric: tabular-nums}.ui-agq__col-head > .ui-agq__col-more{margin-left: auto;font-weight: 400}.ui-agq__well{border-radius: 8px;background: var(--ui-agq-well);box-shadow: inset 0 0 0 1px var(--ui-agq-grid)}.ui-agq__empty{display: grid;place-items: center;color: var(--ui-agq-faint);animation: ui-agq-calm 300ms var(--ui-agq-ease) both}.ui-agq__well{transition: opacity 300ms var(--ui-agq-ease)}.ui-agq__well[data-empty]{opacity: 0}@keyframes ui-agq-calm{from{opacity: 0}}.ui-agq__more{display: grid;place-items: center;border-radius: 3px;background: var(--ui-agq-chip);font-size: 10px;font-weight: 600;line-height: 12px;color: var(--ui-agq-text);font-variant-numeric: tabular-nums}.ui-agq__slot{border-radius: 12px;background: var(--ui-agq-wash);transition: translate ${s}ms var(--ui-agq-ease), width ${s}ms var(--ui-agq-ease), background-color 300ms ease;animation: ui-agq-slot 420ms var(--ui-agq-ease) both}.ui-agq__who{position: absolute;top: 0;bottom: 0;left: 8px;display: flex;align-items: center;gap: 8px;min-width: 0}.ui-agq__logo{display: grid;flex: none;place-items: center;width: 24px;height: 24px;border-radius: 7px;background: var(--ui-agq-card);box-shadow: var(--ui-agq-shadow);font-size: 10px;font-weight: 600;color: var(--ui-agq-text)}.ui-agq__logo > svg{width: 14px;height: 14px}.ui-agq__who-text{display: grid;min-width: 0}.ui-agq__who-name{overflow: hidden;font-size: 13px;font-weight: 500;line-height: 16px;color: var(--ui-agq-ink);white-space: nowrap;text-overflow: ellipsis}.ui-agq__rail{position: absolute;display: flex;align-items: center;padding-left: 10px;border-radius: 8px;box-shadow: inset 0 0 0 1px var(--ui-agq-line);background-image: repeating-linear-gradient(-45deg, transparent 0 6px, rgba(0, 0, 0, 0.018) 6px 7px);font-size: 12px;color: var(--ui-agq-faint)}.ui-agq__bin{z-index: 1;padding: 12px;border-radius: 12px;background: var(--ui-agq-wash)}.ui-agq__bin-icon{position: absolute;top: 12px;left: 12px;display: grid;place-items: center;width: 20px;height: 20px;border-radius: 6px}.ui-agq__bin[data-kind="done"] .ui-agq__bin-icon{background: var(--ui-agq-ok-bg);box-shadow: inset 0 0 0 1px var(--ui-agq-ok-edge);color: var(--ui-agq-ok-fg)}.ui-agq__bin[data-kind="failed"] .ui-agq__bin-icon{background: var(--ui-agq-error-bg);box-shadow: inset 0 0 0 1px var(--ui-agq-error-edge);color: var(--ui-agq-error-ink)}.ui-agq__bin-label{position: absolute;top: 14px;left: 40px;font-size: 12px;line-height: 16px;color: var(--ui-agq-muted)}.ui-agq__bin-count{position: absolute;left: 12px;bottom: 10px;font-size: 20px;font-weight: 600;line-height: 26px;letter-spacing: -0.02em;color: var(--ui-agq-ink)}.ui-agq__bin[data-kind="failed"] .ui-agq__bin-count{color: var(--ui-agq-error-ink)}.ui-agq__bin-hit{position: absolute;top: 12px;left: 12px;width: 20px;height: 20px;border-radius: 6px;opacity: 0;pointer-events: none;animation: ui-agq-hit 700ms ease-out 380ms}.ui-agq__bin[data-kind="done"] .ui-agq__bin-hit{box-shadow: 0 0 0 1px var(--ui-agq-ok-fg)}.ui-agq__bin[data-kind="failed"] .ui-agq__bin-hit{box-shadow: 0 0 0 1px var(--ui-agq-error-ink)}.ui-agq__flow[data-narrow] .ui-agq__who-text{display: none}.ui-agq__flow[data-narrow] .ui-agq__bin{display: flex;align-items: center;gap: 6px;padding: 0 10px}.ui-agq__flow[data-narrow] :is(.ui-agq__bin-icon, .ui-agq__bin-label, .ui-agq__bin-count){position: static}.ui-agq__flow[data-narrow] .ui-agq__bin-icon{flex: none}.ui-agq__flow[data-narrow] .ui-agq__bin-count{order: 1;font-size: 16px;line-height: 22px}.ui-agq__flow[data-narrow] .ui-agq__bin-label{order: 2;min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-agq__flow[data-narrow] .ui-agq__bin-hit{top: 10px}.ui-agq [data-kind]{--k-bg: var(--ui-agq-agent-bg);--k-edge: var(--ui-agq-agent-edge);--k-ink: var(--ui-agq-agent-ink);--k-sq: var(--ui-agq-agent-sq)}.ui-agq [data-kind="llm"]{--k-bg: var(--ui-agq-llm-bg);--k-edge: var(--ui-agq-llm-edge);--k-ink: var(--ui-agq-llm-ink);--k-sq: var(--ui-agq-llm-sq)}.ui-agq [data-kind="tool"]{--k-bg: var(--ui-agq-tool-bg);--k-edge: var(--ui-agq-tool-edge);--k-ink: var(--ui-agq-tool-ink);--k-sq: var(--ui-agq-tool-sq)}.ui-agq [data-kind="human"]{--k-bg: var(--ui-agq-human-bg);--k-edge: var(--ui-agq-human-edge);--k-ink: var(--ui-agq-human-ink);--k-sq: var(--ui-agq-human-sq)}.ui-agq .ui-agq__job:is([data-status="failed"], [data-flash]){--k-bg: var(--ui-agq-error-bg);--k-edge: var(--ui-agq-error-edge);--k-ink: var(--ui-agq-error-ink);--k-sq: var(--ui-agq-error-edge)}.ui-agq .ui-agq__job[data-status="done"]{--k-bg: var(--ui-agq-ok-bg);--k-edge: var(--ui-agq-ok-edge);--k-ink: var(--ui-agq-ok-fg);--k-sq: var(--ui-agq-ok-edge)}.ui-agq__jobs{position: absolute;inset: 0;pointer-events: none}.ui-agq__job{z-index: 1;display: block;overflow: hidden;border-radius: 8px;background: var(--ui-agq-card);box-shadow: var(--ui-agq-lift);pointer-events: auto;transition: translate ${s}ms var(--ui-agq-ease), width ${s}ms var(--ui-agq-ease), height ${s}ms var(--ui-agq-ease), border-radius ${s}ms var(--ui-agq-ease), background-color 320ms ease, box-shadow 320ms ease, opacity 240ms ease;animation: ui-agq-drop 520ms var(--ui-agq-ease) backwards}.ui-agq__job:hover, .ui-agq__job[data-open]{z-index: 2;box-shadow: 0 0 0 1px var(--k-edge), 0 2px 8px -2px rgba(0, 0, 0, 0.12)}.ui-agq__job:focus-visible{z-index: 2;outline: 2px solid var(--ui-agq-ring);outline-offset: 1px}.ui-agq__job[data-flash]{background: var(--k-bg);box-shadow: 0 0 0 1px var(--k-edge);animation: ui-agq-drop 520ms var(--ui-agq-ease) backwards, ui-agq-shake 420ms ease}.ui-agq__job[data-shape="square"]{border-radius: 3px;background: var(--k-sq);box-shadow: inset 0 0 0 1px var(--k-edge)}.ui-agq__job[data-shape="square"][data-priority="high"]{box-shadow: inset 0 0 0 1.5px var(--ui-agq-warn)}.ui-agq__job[data-shape="square"]:hover{box-shadow: inset 0 0 0 1.5px var(--k-ink)}.ui-agq__job[data-shape="bar"]{box-shadow: var(--ui-agq-shadow)}.ui-agq__job[data-shape="gone"]{z-index: 0;border-radius: 3px;background: var(--k-sq);box-shadow: none;opacity: 0;pointer-events: none;transition: translate 480ms var(--ui-agq-ease), width 480ms var(--ui-agq-ease), height 480ms var(--ui-agq-ease), border-radius 480ms ease, background-color 200ms ease, opacity 200ms ease 220ms}.ui-agq__job-in{position: absolute;inset: 0;display: flex;align-items: center;gap: 6px;padding: 0 9px 0 6px;white-space: nowrap;opacity: 1;transition: opacity 200ms ease 160ms}.ui-agq__job:is([data-shape="square"], [data-shape="gone"]) .ui-agq__job-in{opacity: 0;transition: opacity 120ms ease}.ui-agq__job-icon{display: grid;flex: none;place-items: center;width: 18px;height: 18px;border-radius: 5px;background: var(--k-bg);color: var(--k-ink)}.ui-agq__job-icon[data-logo]{background: var(--ui-agq-card);box-shadow: 0 0 0 1px var(--ui-agq-line)}.ui-agq__job-icon > svg{width: 11px;height: 11px}.ui-agq__job-name{flex: 1;min-width: 0;overflow: hidden;font-size: 12.5px;line-height: 16px;color: var(--ui-agq-ink);text-overflow: ellipsis}.ui-agq__badge{display: inline-flex;flex: none;align-items: center;gap: 2px;height: 16px;padding: 0 4px;border-radius: 999px;font-size: 10.5px;font-weight: 600;line-height: 16px;font-variant-numeric: tabular-nums}.ui-agq__badge[data-kind="high"]{width: 16px;padding: 0;justify-content: center;background: var(--ui-agq-warn-bg);color: var(--ui-agq-warn-fg)}.ui-agq__badge[data-kind="retry"]{background: var(--ui-agq-error-bg);color: var(--ui-agq-error-ink)}.ui-agq__job-meta{flex: none;font-size: 11.5px;line-height: 16px;color: var(--ui-agq-muted);font-variant-numeric: tabular-nums}.ui-agq__job[data-status="running"] .ui-agq__job-meta{color: var(--k-ink)}.ui-agq__job[data-flash] :is(.ui-agq__job-name, .ui-agq__job-meta){color: var(--ui-agq-error-ink)}.ui-agq__fill{position: absolute;inset: 0;border-radius: inherit;background: var(--k-bg);box-shadow: inset 0 0 0 1px var(--k-edge);clip-path: inset(0 calc((1 - var(--p)) * 100%) 0 0 round 8px);opacity: 0;transition: clip-path 260ms linear, opacity 300ms var(--ui-agq-ease), background-color 300ms ease, box-shadow 300ms ease}.ui-agq__job[data-shape="bar"] .ui-agq__fill{opacity: 1;animation: ui-agq-grow 560ms var(--ui-agq-ease) backwards}.ui-agq__job[data-shape="bar"] .ui-agq__fill::before{transition: opacity 300ms var(--ui-agq-ease);content: "";position: absolute;inset: 0;background: linear-gradient(90deg, transparent, var(--ui-agq-card), transparent) -60px 0 / 60px 100% no-repeat;opacity: 0.7;animation: ui-agq-sweep 1500ms linear infinite}.ui-agq__job[data-shape="bar"] .ui-agq__fill::after{transition: opacity 300ms var(--ui-agq-ease);content: "";position: absolute;top: 0;bottom: 0;left: calc(var(--p) * 100% - 28px);width: 28px;background: linear-gradient(90deg, transparent, var(--k-edge));animation: ui-agq-glow 1100ms ease-in-out infinite alternate}.ui-agq__job[data-shape="gone"] .ui-agq__fill{opacity: 0}.ui-agq__pop{z-index: 5;display: grid;grid-template-columns: minmax(0, 1fr);gap: 10px;padding: 12px;border-radius: 16px;background: var(--ui-agq-card);box-shadow: var(--ui-agq-pop);pointer-events: none;transition: translate ${s}ms var(--ui-agq-ease);animation: ui-agq-open 200ms var(--ui-agq-ease) both}.ui-agq__pop[data-pinned]{pointer-events: auto}.ui-agq__pop-head{display: flex;align-items: center;min-width: 0}.ui-agq__pop-icon{display: grid;flex: none;place-items: center;width: 28px;height: 28px;margin-right: 10px;border-radius: 8px;background: var(--k-bg);box-shadow: inset 0 0 0 1px var(--k-edge);color: var(--k-ink)}.ui-agq__pop-icon[data-logo]{background: var(--ui-agq-card);box-shadow: var(--ui-agq-shadow)}.ui-agq__pop-icon > svg{width: 15px;height: 15px}.ui-agq__pop-who{display: grid;flex: 1;min-width: 0}.ui-agq__pop-name{font-size: 13.5px;font-weight: 600;line-height: 18px;color: var(--ui-agq-strong);overflow-wrap: anywhere}.ui-agq__pop-kind{display: -webkit-box;overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-agq-muted);overflow-wrap: anywhere;-webkit-line-clamp: 2;-webkit-box-orient: vertical}.ui-agq__pop-head .ui-agq__pill{height: 20px;margin-left: 8px;padding: 0 7px;font-size: 11px}.ui-agq__close{display: grid;flex: none;place-items: center;width: 28px;height: 28px;margin: -2px -4px 0 4px;border-radius: 8px;color: var(--ui-agq-muted);transition: background-color 140ms ease, color 140ms ease}.ui-agq__close:hover{background: var(--ui-agq-chip);color: var(--ui-agq-ink)}.ui-agq__pop-stats{display: grid;grid-template-columns: repeat(2, minmax(0, 1fr));gap: 8px 12px;padding: 10px 12px;border-radius: 10px;background: var(--ui-agq-wash)}.ui-agq__pop-stats dt{font-size: 11px;line-height: 14px;color: var(--ui-agq-muted)}.ui-agq__pop-stats dd{overflow: hidden;font-size: 13px;font-weight: 600;line-height: 18px;color: var(--ui-agq-ink);white-space: nowrap;text-overflow: ellipsis;font-variant-numeric: tabular-nums}.ui-agq__pop-error{display: flex;gap: 8px;min-width: 0;overflow-wrap: anywhere;padding: 8px 10px;border-radius: 10px;background: var(--ui-agq-error-bg);font-size: 12.5px;line-height: 17px;color: var(--ui-agq-error-ink)}.ui-agq__pop-error > svg{margin-top: 2.5px}.ui-agq__pop-actions{display: flex;gap: 6px}.ui-agq__pop-actions .ui-agq__btn{height: 26px;padding: 0 10px 0 8px;font-size: 12.5px}.ui-agq__chart{padding: 14px 16px 12px}.ui-agq__chart-head{display: flex;align-items: center;gap: 8px;margin-bottom: 10px;font-size: 12px;line-height: 16px;white-space: nowrap}.ui-agq__chart-title{font-weight: 500;color: var(--ui-agq-ink)}.ui-agq__plot{position: relative;margin-left: var(--ui-agq-gutter, ${ue}px)}.ui-agq__grid{position: absolute;left: -6px;right: 0;bottom: calc(var(--v) / var(--ui-agq-ymax) * 100%);height: 1px;background: var(--ui-agq-grid)}.ui-agq__grid[data-zero]{background: var(--ui-agq-line)}.ui-agq__grid > span{position: absolute;right: calc(100% + 8px);top: -7px;font-size: 11px;line-height: 14px;color: var(--ui-agq-muted);font-variant-numeric: tabular-nums}.ui-agq__svg{position: absolute;inset: 0;overflow: hidden}.ui-agq__scaled{transform: translateY(calc(var(--h) * 1px)) scaleY(calc(-1 * var(--h) / var(--ui-agq-ymax)))}.ui-agq__stop[data-at="top"]{stop-color: var(--ui-agq-depth-fade)}.ui-agq__stop[data-at="bottom"]{stop-color: var(--ui-agq-depth-fill)}.ui-agq__line{fill: none;stroke: var(--ui-agq-depth);stroke-width: 1.5;stroke-linejoin: round;vector-effect: non-scaling-stroke}.ui-agq__bp{stroke: var(--ui-agq-faint);stroke-width: 1;stroke-dasharray: 4 4;vector-effect: non-scaling-stroke;opacity: 0.8}.ui-agq__band rect{fill: var(--ui-agq-warn);opacity: 0.07}.ui-agq__bp-label{position: absolute;right: calc(100% + 8px);bottom: calc(var(--v) / var(--ui-agq-ymax) * 100% - 7px);font-size: 11px;font-weight: 500;line-height: 14px;color: var(--ui-agq-muted);font-variant-numeric: tabular-nums}.ui-agq__dot{position: absolute;right: -3.5px;bottom: calc(var(--v) / var(--ui-agq-ymax) * 100% - 3.5px);width: 7px;height: 7px;border-radius: 50%;background: var(--ui-agq-depth);box-shadow: 0 0 0 3px var(--ui-agq-card)}.ui-agq[data-state="live"] .ui-agq__dot::after, .ui-agq[data-state="limited"] .ui-agq__dot::after{content: "";position: absolute;inset: 0;border-radius: 50%;background: var(--ui-agq-depth);animation: ui-agq-ping 1600ms ease-out infinite}.ui-agq__axis{display: flex;justify-content: space-between;margin: 6px 0 0 var(--ui-agq-gutter, ${ue}px);font-size: 11px;line-height: 14px;color: var(--ui-agq-muted);font-variant-numeric: tabular-nums}.ui-agq__sr{position: absolute;width: 1px;height: 1px;margin: -1px;padding: 0;overflow: hidden;clip: rect(0 0 0 0);white-space: nowrap;border: 0}@container ui-agq (max-width: 560px){.ui-agq__head{flex-wrap: wrap;row-gap: 6px;padding: 4px 4px 8px 10px}.ui-agq__name{display: none}.ui-agq__stats{grid-template-columns: repeat(2, minmax(0, 1fr));row-gap: 12px;padding: 12px 0}.ui-agq__stat{padding: 0 12px}.ui-agq__stat:nth-child(odd){padding-left: 16px;border-left: 0}.ui-agq__stat dd{font-size: 15px}.ui-agq__stat:nth-child(3){border-left: 0}.ui-agq__chart{padding: 12px 12px 10px}}@container ui-agq (max-width: 440px){.ui-agq__tools{flex-basis: 100%;justify-content: space-between;margin-left: 0}.ui-agq__head{padding-right: 8px}}.ui-agq__job[data-halted] .ui-agq__fill{opacity: 0.55}.ui-agq__job[data-halted] .ui-agq__fill::before, .ui-agq__job[data-halted] .ui-agq__fill::after{opacity: 0;animation-play-state: paused}.ui-agq__job[data-halted] .ui-agq__job-meta{color: var(--ui-agq-muted)}@keyframes ui-agq-drop{from{opacity: 0;transform: translateY(-10px) scale(0.6)}}@keyframes ui-agq-slot{from{opacity: 0;transform: translateX(-8px)}}@keyframes ui-agq-grow{from{clip-path: inset(0 100% 0 0 round 8px)}}@keyframes ui-agq-sweep{to{background-position: calc(100% + 60px) 0}}@keyframes ui-agq-glow{from{filter: opacity(0.45)}to{filter: opacity(1)}}@keyframes ui-agq-pulse{50%{opacity: 0.35}}@keyframes ui-agq-pop{from{opacity: 0;transform: scale(0.9)}}@keyframes ui-agq-open{from{opacity: 0;transform: translateY(-4px) scale(0.97)}}@keyframes ui-agq-hit{0%{opacity: 0.45;transform: scale(1)}100%{opacity: 0;transform: scale(1.45)}}@keyframes ui-agq-ping{0%{opacity: 0.5;transform: scale(1)}100%{opacity: 0;transform: scale(2.8)}}@keyframes ui-agq-flow{0%, 100%{opacity: 0.35}40%{opacity: 1}}@keyframes ui-agq-shake{20%{transform: translateX(-3px)}40%{transform: translateX(3px)}60%{transform: translateX(-2px)}80%{transform: translateX(1px)}}@media (prefers-reduced-motion: reduce){.ui-agq *, .ui-agq *::before, .ui-agq *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-agq{--ui-agq-tray: #19191c;--ui-agq-card: #232326;--ui-agq-strong: #ededed;--ui-agq-ink: #ededed;--ui-agq-text: #a1a1a6;--ui-agq-muted: #7c7c82;--ui-agq-faint: #55555b;--ui-agq-line: #2e2e33;--ui-agq-grid: #2a2a2e;--ui-agq-chip: #2c2c30;--ui-agq-wash: #1d1d20;--ui-agq-well: #1f1f22;--ui-agq-accent: #5b9aff;--ui-agq-depth: #a395ff;--ui-agq-depth-fill: rgba(141, 124, 240, 0.26);--ui-agq-depth-fade: rgba(141, 124, 240, 0);--ui-agq-agent-bg: #2c2f35;--ui-agq-agent-edge: #41464f;--ui-agq-agent-ink: #b8c0cc;--ui-agq-agent-sq: #3a3e46;--ui-agq-llm-bg: #2a2545;--ui-agq-llm-edge: #4c3fa0;--ui-agq-llm-ink: #b6a9ff;--ui-agq-llm-sq: #3b3270;--ui-agq-tool-bg: #16302b;--ui-agq-tool-edge: #285f54;--ui-agq-tool-ink: #62d5bb;--ui-agq-tool-sq: #1f4a41;--ui-agq-human-bg: #16243f;--ui-agq-human-edge: #2c4a85;--ui-agq-human-ink: #8ab4ff;--ui-agq-human-sq: #223a66;--ui-agq-error-bg: #3b1714;--ui-agq-error-edge: #74302a;--ui-agq-error-ink: #ff977d;--ui-agq-ok-bg: #12301f;--ui-agq-ok-edge: #22603d;--ui-agq-ok-fg: #3dd68c;--ui-agq-warn: #ffa057;--ui-agq-warn-bg: #3a2410;--ui-agq-warn-edge: #6e4318;--ui-agq-warn-fg: #ffa057;--ui-agq-brand-fg: #8ab4ff;--ui-agq-ring: rgba(237, 237, 237, 0.3);--ui-agq-shadow: 0 0 0 1px #2e2e33, 0 1px 2px rgba(0, 0, 0, 0.3);--ui-agq-lift: 0 0 0 1px #36363c, 0 1px 2px rgba(0, 0, 0, 0.35), 0 2px 6px -2px rgba(0, 0, 0, 0.4);--ui-agq-pop: 0 0 0 1px #34343a, 0 16px 36px -12px rgba(0, 0, 0, 0.6)}:where(.dark, [data-theme="dark"]) .ui-agq__pop .ui-agq__pill[data-status="running"]{background: #16243f}:where(.dark, [data-theme="dark"]) .ui-agq__rail{background-image: repeating-linear-gradient(-45deg, transparent 0 6px, rgba(255, 255, 255, 0.02) 6px 7px)}:where(.dark, [data-theme="dark"]) .ui-agq__btn:hover{box-shadow: 0 0 0 1px #3a3a40, 0 1px 3px rgba(0, 0, 0, 0.4)}`,
  Te = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 1200 1200`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, {
        fill: `#D97757`,
        d: `M 233.959793 800.214905 L 468.644287 668.536987 L 472.590637 657.100647 L 468.644287 650.738403 L 457.208069 650.738403 L 417.986633 648.322144 L 283.892639 644.69812 L 167.597321 639.865845 L 54.926208 633.825623 L 26.577238 627.785339 L 3.3e-05 592.751709 L 2.73832 575.27533 L 26.577238 559.248352 L 60.724873 562.228149 L 136.187973 567.382629 L 249.422867 575.194763 L 331.570496 580.026978 L 453.261841 592.671082 L 472.590637 592.671082 L 475.328857 584.859009 L 468.724915 580.026978 L 463.570557 575.194763 L 346.389313 495.785217 L 219.543671 411.865906 L 153.100723 363.543762 L 117.181267 339.060425 L 99.060455 316.107361 L 91.248367 266.01355 L 123.865784 230.093994 L 167.677887 233.073853 L 178.872513 236.053772 L 223.248367 270.201477 L 318.040283 343.570496 L 441.825592 434.738342 L 459.946411 449.798706 L 467.194672 444.64447 L 468.080597 441.020203 L 459.946411 427.409485 L 392.617493 305.718323 L 320.778564 181.932983 L 288.80542 130.630859 L 280.348999 99.865845 C 277.369171 87.221436 275.194641 76.590698 275.194641 63.624268 L 312.322174 13.20813 L 332.8591 6.604126 L 382.389313 13.20813 L 403.248352 31.328979 L 434.013519 101.71814 L 483.865753 212.537048 L 561.181274 363.221497 L 583.812134 407.919434 L 595.892639 449.315491 L 600.40271 461.959839 L 608.214783 461.959839 L 608.214783 454.711609 L 614.577271 369.825623 L 626.335632 265.61084 L 637.771851 131.516846 L 641.718201 93.745117 L 660.402832 48.483276 L 697.530334 24.000122 L 726.52356 37.852417 L 750.362549 72 L 747.060486 94.067139 L 732.886047 186.201416 L 705.100708 330.52356 L 686.979919 427.167847 L 697.530334 427.167847 L 709.61084 415.087341 L 758.496704 350.174561 L 840.644348 247.490051 L 876.885925 206.738342 L 919.167847 161.71814 L 946.308838 140.29541 L 997.61084 140.29541 L 1035.38269 196.429626 L 1018.469849 254.416199 L 965.637634 321.422852 L 921.825562 378.201538 L 859.006714 462.765259 L 819.785278 530.41626 L 823.409424 535.812073 L 832.75177 534.92627 L 974.657776 504.724915 L 1051.328979 490.872559 L 1142.818848 475.167786 L 1184.214844 494.496582 L 1188.724854 514.147644 L 1172.456421 554.335693 L 1074.604126 578.496765 L 959.838989 601.449829 L 788.939636 641.879272 L 786.845764 643.409485 L 789.261841 646.389343 L 866.255127 653.637634 L 899.194702 655.409424 L 979.812134 655.409424 L 1129.932861 666.604187 L 1169.154419 692.537109 L 1192.671265 724.268677 L 1188.724854 748.429688 L 1128.322144 779.194641 L 1046.818848 759.865845 L 856.590759 714.604126 L 791.355774 698.335754 L 782.335693 698.335754 L 782.335693 703.731567 L 836.69812 756.885986 L 936.322205 846.845581 L 1061.073975 962.81897 L 1067.436279 991.490112 L 1051.409424 1014.120911 L 1034.496704 1011.704712 L 924.885986 929.234924 L 882.604126 892.107544 L 786.845764 811.48999 L 780.483276 811.48999 L 780.483276 819.946289 L 802.550415 852.241699 L 919.087341 1027.409424 L 925.127625 1081.127686 L 916.671204 1098.604126 L 886.469849 1109.154419 L 853.288696 1103.114136 L 785.073914 1007.355835 L 714.684631 899.516785 L 657.906067 802.872498 L 650.979858 806.81897 L 617.476624 1167.704834 L 601.771851 1186.147705 L 565.530212 1200 L 535.328857 1177.046997 L 519.302124 1139.919556 L 535.328857 1066.550537 L 554.657776 970.792053 L 570.362488 894.68457 L 584.536926 800.134277 L 592.993347 768.724976 L 592.429626 766.630859 L 585.503479 767.516968 L 514.22821 865.369263 L 405.825531 1011.865906 L 320.053711 1103.677979 L 299.516815 1111.812256 L 263.919525 1093.369263 L 267.221497 1060.429688 L 287.114136 1031.114136 L 405.825531 880.107361 L 477.422913 786.52356 L 523.651062 732.483276 L 523.328918 724.671265 L 520.590698 724.671265 L 205.288605 929.395935 L 149.154434 936.644409 L 124.993355 914.01355 L 127.973183 876.885986 L 139.409409 864.80542 L 234.201385 799.570435 L 233.879227 799.8927 Z`,
      }),
    }),
  Ee = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `currentColor`,
      "aria-hidden": `true`,
      style: { color: `var(--ui-agqc-strong, var(--ui-agq-ink, #000))` },
      children: (0, r.jsx)(`path`, {
        d: `M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z`,
      }),
    }),
  De = () => {
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
  },
  Oe = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `currentColor`,
      "aria-hidden": `true`,
      style: { color: `var(--ui-agqc-strong, var(--ui-agq-ink, #000))` },
      children: (0, r.jsx)(`path`, {
        d: `M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z`,
      }),
    }),
  C = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `currentColor`,
      "aria-hidden": `true`,
      style: { color: `var(--ui-agqc-strong, var(--ui-agq-ink, #181717))` },
      children: (0, r.jsx)(`path`, {
        d: `M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12`,
      }),
    }),
  ke = () =>
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
  Ae = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `#FF7A59`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, {
        d: `M18.164 7.93V5.084a2.198 2.198 0 001.267-1.978v-.067A2.2 2.2 0 0017.238.845h-.067a2.2 2.2 0 00-2.193 2.193v.067a2.196 2.196 0 001.252 1.973l.013.006v2.852a6.22 6.22 0 00-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 104.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 00-1.038 3.446c0 1.343.425 2.588 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 00-.58-.095h-.002a2.033 2.033 0 102.033 2.033 1.978 1.978 0 00-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 104.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 113.215-3.207v.002a3.206 3.206 0 01-3.207 3.207z`,
      }),
    }),
  je = () =>
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
  Me = () =>
    (0, r.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      "aria-hidden": `true`,
      style: { color: `#3f8f7f` },
      children: [
        (0, r.jsx)(`circle`, { cx: `11`, cy: `11`, r: `6.5`, stroke: `currentColor`, strokeWidth: `2.2` }),
        (0, r.jsx)(`path`, {
          d: `M16 16L20 20`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeWidth: `2.2`,
        }),
      ],
    }),
  w = () =>
    (0, r.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      "aria-hidden": `true`,
      style: { color: `#336791` },
      children: [
        (0, r.jsx)(`ellipse`, {
          cx: `12`,
          cy: `6`,
          rx: `7.5`,
          ry: `3`,
          stroke: `currentColor`,
          strokeWidth: `2`,
        }),
        (0, r.jsx)(`path`, {
          d: `M4.5 6V18C4.5 19.66 7.86 21 12 21C16.14 21 19.5 19.66 19.5 18V6`,
          stroke: `currentColor`,
          strokeWidth: `2`,
        }),
        (0, r.jsx)(`path`, {
          d: `M4.5 12C4.5 13.66 7.86 15 12 15C16.14 15 19.5 13.66 19.5 12`,
          stroke: `currentColor`,
          strokeWidth: `2`,
        }),
      ],
    }),
  Ne = () =>
    (0, r.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      "aria-hidden": `true`,
      style: { color: `#2f6bff` },
      children: [
        (0, r.jsx)(`circle`, { cx: `12`, cy: `12`, r: `8.5`, stroke: `currentColor`, strokeWidth: `2` }),
        (0, r.jsx)(`path`, {
          d: `M3.5 12H20.5M12 3.5C14.2 6 15.3 8.9 15.3 12C15.3 15.1 14.2 18 12 20.5C9.8 18 8.7 15.1 8.7 12C8.7 8.9 9.8 6 12 3.5Z`,
          stroke: `currentColor`,
          strokeLinejoin: `round`,
          strokeWidth: `2`,
        }),
      ],
    }),
  T = [
    { id: `w1`, name: `Sonnet 5.5`, detail: `Worker 1`, icon: (0, r.jsx)(Te, {}) },
    { id: `w2`, name: `GPT-6 Sol`, detail: `Worker 2`, icon: (0, r.jsx)(Ee, {}) },
    { id: `w3`, name: `Gemini 3.8 Flash`, detail: `Worker 3`, icon: (0, r.jsx)(De, {}) },
    { id: `w4`, name: `Haiku 5`, detail: `Worker 4`, icon: (0, r.jsx)(Te, {}) },
    { id: `w5`, name: `GPT-6 mini`, detail: `Worker 5`, icon: (0, r.jsx)(Ee, {}) },
    { id: `w6`, name: `Gemini 3.8 Pro`, detail: `Worker 6`, icon: (0, r.jsx)(De, {}) },
  ],
  E = [
    { name: (e) => `Summarize ticket #${4821 + e}`, kind: `llm`, detail: `Zendesk`, min: 1.6, max: 3 },
    {
      name: (e) => `Draft reply – ${[`Acme`, `Globex`, `Initech`, `Umbrella`, `Hooli`][e % 5]}`,
      kind: `llm`,
      detail: `Support inbox`,
      min: 1.8,
      max: 3.2,
    },
    { name: () => `Classify 12 support emails`, kind: `llm`, detail: `Gmail`, min: 1.6, max: 2.6 },
    { name: () => `Translate release notes`, kind: `llm`, detail: `DE, FR, JA`, min: 2, max: 3.2 },
    {
      name: (e) => `Write PR description #${470 + (e % 30)}`,
      kind: `llm`,
      detail: `GitHub`,
      min: 1.6,
      max: 2.6,
    },
    {
      name: (e) => `Extract invoice fields #${2190 + (e % 40)}`,
      kind: `llm`,
      detail: `PDF`,
      min: 1.6,
      max: 2.8,
    },
    {
      name: (e) => `Score lead – ${[`Northwind`, `Contoso`, `Fabrikam`, `Tailspin`][e % 4]}`,
      kind: `llm`,
      detail: `HubSpot`,
      min: 1.6,
      max: 2.4,
    },
  ],
  Pe = [
    {
      name: () => `Scrape pricing page`,
      kind: `tool`,
      detail: `acme.com/pricing`,
      icon: (0, r.jsx)(Ne, {}),
      min: 0.8,
      max: 1.6,
    },
    {
      name: () => `Embed 240 docs`,
      kind: `tool`,
      detail: `pgvector`,
      icon: (0, r.jsx)(w, {}),
      min: 1.2,
      max: 1.6,
    },
    {
      name: () => `Sync HubSpot deals`,
      kind: `tool`,
      detail: `HubSpot`,
      icon: (0, r.jsx)(Ae, {}),
      min: 0.7,
      max: 1.4,
    },
    {
      name: () => `Post digest to #support`,
      kind: `tool`,
      detail: `Slack`,
      icon: (0, r.jsx)(ke, {}),
      min: 0.7,
      max: 1.1,
    },
    {
      name: (e) => `Open PR #${482 + (e % 20)}`,
      kind: `tool`,
      detail: `GitHub`,
      icon: (0, r.jsx)(C, {}),
      min: 0.8,
      max: 1.4,
    },
    {
      name: () => `Update roadmap page`,
      kind: `tool`,
      detail: `Notion`,
      icon: (0, r.jsx)(Oe, {}),
      min: 0.7,
      max: 1.2,
    },
    {
      name: () => `Search docs: refunds`,
      kind: `tool`,
      detail: `Docs`,
      icon: (0, r.jsx)(Me, {}),
      min: 0.7,
      max: 1.1,
    },
  ],
  Fe = [
    { name: () => `Run eval suite`, kind: `agent`, detail: `214 cases`, min: 3.2, max: 4.6 },
    { name: () => `Research competitor pricing`, kind: `agent`, detail: `Researcher`, min: 3.4, max: 4.8 },
    {
      name: () => `Triage new GitHub issues`,
      kind: `agent`,
      detail: `Triage agent`,
      icon: (0, r.jsx)(C, {}),
      min: 3.2,
      max: 4.4,
    },
  ],
  Ie = 34e3,
  D = 7e3,
  Le = 9e3,
  Re = 96e3,
  O = 106e3,
  k = 300,
  A = (e) => () => {
    e = (e + 1831565813) | 0;
    let t = Math.imul(e ^ (e >>> 15), 1 | e);
    return ((t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t), ((t ^ (t >>> 14)) >>> 0) / 4294967296);
  },
  j = (e, t, n = {}) => {
    let r = ++e.seq,
      i = (t.min + e.rng() * (t.max - t.min)) * 1e3;
    e.jobs.push({
      id: `j${r}`,
      name: t.name(r),
      kind: t.kind,
      detail: t.detail,
      icon: t.icon,
      status: `queued`,
      enqueuedAt: e.t,
      estimate: i,
      dur: i,
      prog: 0,
      attempt: 1,
      maxAttempts: 3,
      ...n,
    });
  },
  M = (e) => {
    let t = e.rng(),
      n = t < 0.45 ? E : t < 0.86 ? Pe : Fe;
    return n[Math.floor(e.rng() * n.length)];
  },
  ze = (e) => (e.priority === `high` ? 0 : e.priority === `low` ? 2 : 1),
  N = (e, t) => {
    e.t += t;
    let n = e.t % Ie,
      i = Math.floor(e.t / Ie),
      a = (t, r, a) => {
        n < r || e.fired.has(`${i}:${t}`) || (e.fired.add(`${i}:${t}`), a());
      };
    (a(`batch`, 1e3, () => {
      for (let t = 1; t <= 5; t++) j(e, { ...Pe[1], name: () => `Embed 240 docs · ${t}/5` });
    }),
      a(`vip`, 3500, () =>
        j(
          e,
          { ...E[1], name: () => `Draft reply – Acme VIP`, detail: `Enterprise SLA` },
          { priority: `high` },
        ),
      ),
      a(`limit`, D, () => e.limits.push({ from: e.t, until: e.t + Le, label: `Token limit 2M/min` })),
      a(`fanout`, 10500, () => {
        for (let t = 1; t <= 6; t++) j(e, { ...E[2], name: () => `Classify support emails · ${t}/6` });
      }),
      a(`flaky`, 19e3, () => j(e, Pe[0], { flaky: !0 })),
      a(`refund`, 25e3, () =>
        j(
          e,
          {
            name: () => `Refund order #1193`,
            kind: `tool`,
            detail: `Stripe`,
            icon: (0, r.jsx)(je, {}),
            min: 1,
            max: 1.3,
          },
          { fails: !0, maxAttempts: 1 },
        ),
      ));
    let o = n < 16e3 ? 1.25 : 0.62;
    for (; e.t >= e.next;) (j(e, M(e)), (e.next += ((0.3 + e.rng() * 1.4) * 1e3) / o));
    if (!e.limits.some((t) => t.from <= e.t && e.t < t.until)) {
      for (let n of e.jobs) {
        if (
          n.status !== `running` ||
          ((n.prog = Math.min(1, n.prog + t / n.dur)), (n.progress = n.prog), n.prog < 1)
        )
          continue;
        let r = n.worker;
        n.flaky && n.attempt === 1
          ? (Object.assign(n, {
              status: `queued`,
              attempt: 2,
              enqueuedAt: e.t,
              startedAt: void 0,
              worker: void 0,
              prog: 0,
              progress: 0,
              error: `Attempt 1: 504 Gateway Timeout from acme.com`,
            }),
            e.free.set(r, e.t + 400))
          : n.fails
            ? (Object.assign(n, {
                status: `failed`,
                endedAt: e.t,
                error: `The card issuer declined the refund – payments are never retried`,
              }),
              e.failed++,
              e.free.set(r, e.t + 400))
            : (Object.assign(n, { status: `done`, endedAt: e.t, error: void 0 }),
              e.done++,
              e.free.set(r, e.t));
      }
      if (!e.paused) {
        let t = e.jobs
          .filter((e) => e.status === `queued`)
          .sort((e, t) => ze(e) - ze(t) || e.enqueuedAt - t.enqueuedAt);
        for (let n of e.workers) {
          if (
            e.jobs.some((e) => e.status === `running` && e.worker === n.id) ||
            e.t - (e.free.get(n.id) ?? 0) < k
          )
            continue;
          let r = t.shift();
          if (!r) break;
          Object.assign(r, { status: `running`, worker: n.id, startedAt: e.t, prog: 0, progress: 0 });
        }
      }
    }
    (e.jobs.length > 40 &&
      e.seq % 8 == 0 &&
      (e.jobs = e.jobs.filter((t) => t.endedAt === void 0 || t.endedAt > e.t - Re - 4e3)),
      (e.limits = e.limits.filter((t) => t.until > e.t - Re - 4e3)));
  },
  P = () => {
    let e = {
      t: 0,
      jobs: [],
      workers: T.slice(0, 4),
      free: new Map(),
      limits: [],
      paused: !1,
      done: 0,
      failed: 0,
      next: 400,
      seq: 0,
      rng: A(7),
      fired: new Set(),
    };
    for (let t = 0; t < O; t += 50) N(e, 50);
    return e;
  };
function Be() {
  let e = (0, n.useRef)(null);
  e.current ||= P();
  let t = (0, n.useRef)(null),
    [, i] = (0, n.useState)(0);
  (0, n.useEffect)(() => {
    let n = 0,
      r = performance.now(),
      a = !0,
      o = 0,
      s = (t) => {
        let a = e.current,
          c = Math.min(250, t - r);
        for (r = t; c > 0;) {
          let e = Math.min(50, c);
          (N(a, e), (c -= e));
        }
        (t - o >= 32 && ((o = t), i((e) => e + 1)), (n = requestAnimationFrame(s)));
      },
      c = () => {
        (cancelAnimationFrame(n),
          a && !document.hidden && ((r = performance.now()), (n = requestAnimationFrame(s))));
      },
      l = new IntersectionObserver(([e]) => {
        ((a = e.isIntersecting), c());
      });
    return (
      t.current && l.observe(t.current),
      document.addEventListener(`visibilitychange`, c),
      c(),
      () => {
        (cancelAnimationFrame(n), l.disconnect(), document.removeEventListener(`visibilitychange`, c));
      }
    );
  }, []);
  let a = e.current;
  return (0, r.jsx)(`div`, {
    ref: t,
    className: `agq-demo`,
    children: (0, r.jsx)(S, {
      jobs: a.jobs.map(({ dur: e, prog: t, flaky: n, fails: r, ...i }) => i),
      workers: a.workers,
      now: a.t,
      rateLimits: a.limits,
      paused: a.paused,
      onPausedChange: (e) => {
        ((a.paused = e), i((e) => e + 1));
      },
      onConcurrencyChange: (e) => {
        if (e > a.workers.length) a.workers = T.slice(0, e);
        else {
          let t = a.workers[a.workers.length - 1];
          for (let e of a.jobs)
            e.status === `running` &&
              e.worker === t.id &&
              Object.assign(e, { status: `queued`, worker: void 0, startedAt: void 0, prog: 0, progress: 0 });
          a.workers = a.workers.slice(0, e);
        }
        i((e) => e + 1);
      },
      maxConcurrency: T.length,
      onPromote: (e) => {
        let t = a.jobs.find((t) => t.id === e.id);
        t && (t.priority = `high`);
      },
      onCancel: (e) => {
        let t = a.jobs.find((t) => t.id === e.id);
        (t?.worker && a.free.set(t.worker, a.t), (a.jobs = a.jobs.filter((t) => t.id !== e.id)));
      },
      backpressure: 12,
      window: Re,
      totals: { done: a.done, failed: a.failed },
      name: `agent-jobs`,
    }),
  });
}
