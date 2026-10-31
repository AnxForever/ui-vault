/* affectUI · plan-vs-actual (Pro) — recovered from demo.clean-wzchKI2C.js */

import { t as e } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
var n = e(),
  r = t(),
  i = (e) => String(e).padStart(2, `0`),
  a = (e) =>
    e >= 86400
      ? `${Math.floor(e / 86400)}d ${Math.floor((e % 86400) / 3600)}h`
      : e >= 3600
        ? `${Math.floor(e / 3600)}:${i(Math.floor((e % 3600) / 60))}:${i(e % 60)}`
        : `${Math.floor(e / 60)}:${i(e % 60)}`,
  o = (e) => a(Math.max(0, Math.round(e / 1e3))),
  s = (e) => {
    let t = Math.round(Math.abs(e) / 1e3);
    return `${e < 0 ? `−` : `+`}${t < 60 ? `${t}s` : a(t)}`;
  },
  c = new Intl.NumberFormat(`en-US`, {
    style: `currency`,
    currency: `USD`,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }),
  l = (e) => (e !== 0 && Math.abs(e) < 0.005 ? `${e < 0 ? `-` : ``}<$0.01` : c.format(e)),
  u = 1500,
  d = [3e4, 6e4, 12e4, 3e5, 6e5, 9e5, 18e5, 36e5, 72e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5],
  f = (e) => (typeof e == `number` && Number.isFinite(e) ? e : void 0);
function p(e, t) {
  let n = new Map(e.map((e) => [e.id, e])),
    r = new Map(e.map((e, t) => [e, t])),
    i = new Map(),
    a = new Set(),
    o = (e, s) => {
      let c = i.get(e.id);
      if (c) return c;
      a.add(e.id);
      let l = (e.deps ?? [])
        .map((e) => n.get(e))
        .filter((e) => !!e && !a.has(e.id))
        .map((e) => o(e, r.get(e)));
      a.delete(e.id);
      let u = Math.max(0, ...l.map((e) => e.pe)),
        d = u + e.plan,
        f = e.end === void 0 ? (e.start === void 0 ? `waiting` : `running`) : `done`,
        p,
        m;
      f === `done`
        ? ((p = e.start ?? e.end - e.plan), (m = e.end))
        : f === `running`
          ? ((p = e.start), (m = Math.max(t, p + e.plan)))
          : ((p = Math.max(t, ...l.map((e) => e.ae))), (m = p + e.plan));
      let h = { step: e, index: s, status: f, ps: u, pe: d, as: p, ae: m };
      return (i.set(e.id, h), h);
    };
  return e.map((e, t) => o(e, t));
}
var m = () =>
    (0, r.jsxs)(`svg`, {
      width: `16`,
      height: `16`,
      viewBox: `0 0 16 16`,
      fill: `none`,
      "aria-hidden": `true`,
      children: [
        (0, r.jsx)(`rect`, { x: `1.5`, y: `2.5`, width: `7`, height: `3`, rx: `1.5`, fill: `currentColor` }),
        (0, r.jsx)(`rect`, {
          x: `5`,
          y: `6.5`,
          width: `8`,
          height: `3`,
          rx: `1.5`,
          fill: `currentColor`,
          opacity: `0.6`,
        }),
        (0, r.jsx)(`rect`, {
          x: `8.5`,
          y: `10.5`,
          width: `6`,
          height: `3`,
          rx: `1.5`,
          fill: `currentColor`,
          opacity: `0.32`,
        }),
      ],
    }),
  h = ({ status: e }) =>
    e === `done`
      ? (0, r.jsx)(`svg`, {
          width: `14`,
          height: `14`,
          viewBox: `0 0 14 14`,
          fill: `none`,
          "aria-hidden": `true`,
          children: (0, r.jsx)(`path`, {
            d: `M3 7.4 5.7 10 11 4.2`,
            stroke: `currentColor`,
            strokeWidth: `1.5`,
            strokeLinecap: `round`,
            strokeLinejoin: `round`,
          }),
        })
      : e === `running`
        ? (0, r.jsxs)(`svg`, {
            className: `ui-pvac__spin`,
            width: `14`,
            height: `14`,
            viewBox: `0 0 14 14`,
            fill: `none`,
            "aria-hidden": `true`,
            children: [
              (0, r.jsx)(`circle`, {
                cx: `7`,
                cy: `7`,
                r: `5`,
                stroke: `currentColor`,
                strokeOpacity: `0.22`,
                strokeWidth: `1.5`,
              }),
              (0, r.jsx)(`path`, {
                d: `M7 2a5 5 0 0 1 5 5`,
                stroke: `currentColor`,
                strokeWidth: `1.5`,
                strokeLinecap: `round`,
              }),
            ],
          })
        : (0, r.jsx)(`svg`, {
            width: `14`,
            height: `14`,
            viewBox: `0 0 14 14`,
            fill: `none`,
            "aria-hidden": `true`,
            children: (0, r.jsx)(`circle`, {
              cx: `7`,
              cy: `7`,
              r: `4.5`,
              stroke: `currentColor`,
              strokeWidth: `1.2`,
              strokeDasharray: `2 2`,
            }),
          }),
  g = (e, t) => ({ "--s": e, "--d": Math.max(0, t - e) });
function _(e, t) {
  let r = (0, n.useRef)({}),
    i = (0, n.useRef)(new Set()),
    a = (0, n.useRef)(0),
    [, o] = (0, n.useState)(0),
    s = typeof performance > `u` ? 0 : performance.now(),
    c = a.current ? Math.min(64, s - a.current) : 0;
  a.current = s;
  let l = typeof window < `u` && window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches,
    u = {};
  for (let n in e) {
    let a = e[n],
      o = r.current[n],
      s = o === void 0 ? 0 : Math.abs(a - o);
    (s > t && i.current.add(n),
      l || o === void 0 || !i.current.has(n) || s < t * 0.04
        ? (i.current.delete(n), (u[n] = a))
        : (u[n] = o + (a - o) * (1 - Math.exp(-c / 110))));
  }
  r.current = u;
  let d = i.current.size > 0;
  return (
    (0, n.useEffect)(() => {
      if (!d) return;
      let e = requestAnimationFrame(() => o((e) => e + 1));
      return () => cancelAnimationFrame(e);
    }),
    u
  );
}
var v = (0, n.memo)(function ({
  p: e,
  now: t,
  wait: n,
  range: i,
  track: a,
  focused: o,
  lit: c,
  formatTime: l,
  formatCost: d,
  setFocus: f,
}) {
  let { step: p, status: m } = e,
    _ = p.plan,
    v = m === `done` ? e.ae - e.as : m === `running` ? t - e.as : 0,
    y = m !== `waiting` && v - _ >= u,
    b = m === `done` || y ? v - _ : 0,
    x = m === `running` ? t : e.ae,
    S = (m === `done` || y) && Math.abs(b) >= u,
    C = p.cost !== void 0 && o,
    w =
      (m === `waiting` ? l(_) : l(v) + (S ? s(b) : ``) + (C ? d(p.cost) : ``)).length * 7 +
      8 +
      (S ? 13 : 0) +
      (C ? 10 : 0),
    T = Math.min(e.as, e.ps),
    E = Math.max(e.ae, e.pe),
    D = E / i > 0.8 ? `before` : `after`;
  if (a > 0) {
    let e = a - (E / i) * a - 3,
      t = (T / i) * a - 3;
    D === `after` && w > e && t > e ? (D = `before`) : D === `before` && w > t && e > t && (D = `after`);
  }
  let O = p.id;
  return (0, r.jsxs)(`div`, {
    className: `ui-pvac__row`,
    role: `listitem`,
    tabIndex: 0,
    "data-status": m,
    "data-lit": c ? `` : void 0,
    "data-focus": o ? `` : void 0,
    onPointerEnter: () => f(() => O),
    onPointerLeave: () => f((e) => (e === O ? null : e)),
    onFocus: () => f(() => O),
    onBlur: () => f((e) => (e === O ? null : e)),
    "aria-label": `${p.title}: ${m === `done` ? `took ${l(v)}, planned ${l(_)}` : m === `running` ? `running for ${l(v)} of ${l(_)} planned` : `starts in about ${l(n * 1e3)}`}${p.cost === void 0 ? `` : `, ${d(p.cost)}`}`,
    children: [
      (0, r.jsxs)(`span`, {
        className: `ui-pvac__name`,
        children: [
          (0, r.jsx)(`span`, {
            className: `ui-pvac__state`,
            "data-status": m,
            children: (0, r.jsx)(h, { status: m }),
          }),
          p.icon && (0, r.jsx)(`span`, { className: `ui-pvac__icon`, children: p.icon }),
          (0, r.jsx)(`span`, { className: `ui-pvac__label`, dir: `auto`, title: p.title, children: p.title }),
        ],
      }),
      (0, r.jsxs)(`span`, {
        className: `ui-pvac__track`,
        children: [
          m === `waiting`
            ? (0, r.jsx)(`span`, { className: `ui-pvac__bar`, "data-kind": `forecast`, style: g(e.as, e.ae) })
            : (0, r.jsxs)(r.Fragment, {
                children: [
                  m === `running` &&
                    !y &&
                    (0, r.jsx)(`span`, {
                      className: `ui-pvac__bar`,
                      "data-kind": `forecast`,
                      "data-rest": ``,
                      style: g(t, e.ae),
                    }),
                  (0, r.jsx)(`span`, {
                    className: `ui-pvac__bar`,
                    "data-kind": `actual`,
                    "data-status": m,
                    "data-over": y ? `` : void 0,
                    style: g(e.as, x),
                  }),
                  y &&
                    (0, r.jsx)(`span`, {
                      className: `ui-pvac__bar`,
                      "data-kind": `over`,
                      "data-status": m,
                      style: g(e.as + _, x),
                    }),
                ],
              }),
          (0, r.jsx)(`span`, { className: `ui-pvac__ghost`, style: g(e.ps, e.pe) }),
          (0, r.jsxs)(`span`, {
            className: `ui-pvac__tag`,
            "data-side": D,
            "data-status": m,
            style: { "--s": D === `after` ? E : T, "--tw": w },
            children: [
              m === `waiting`
                ? l(_)
                : (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(`span`, { className: `ui-pvac__took`, children: l(v) }),
                      S &&
                        (0, r.jsx)(`span`, {
                          className: `ui-pvac__diff`,
                          "data-late": b > 0 ? `` : void 0,
                          children: s(b),
                        }),
                    ],
                  }),
              C && (0, r.jsx)(`span`, { className: `ui-pvac__cost`, children: d(p.cost) }),
            ],
          }),
        ],
      }),
    ],
  });
}, y);
function y(e, t) {
  let n = e.p,
    r = t.p;
  return (
    e.now === t.now &&
    e.wait === t.wait &&
    e.range === t.range &&
    e.track === t.track &&
    e.focused === t.focused &&
    e.lit === t.lit &&
    e.formatTime === t.formatTime &&
    e.formatCost === t.formatCost &&
    n.status === r.status &&
    n.as === r.as &&
    n.ae === r.ae &&
    n.ps === r.ps &&
    n.pe === r.pe &&
    n.step.id === r.step.id &&
    n.step.title === r.step.title &&
    n.step.icon === r.step.icon &&
    n.step.cost === r.step.cost &&
    n.step.plan === r.step.plan
  );
}
function b({
  steps: e,
  now: t,
  task: i,
  formatTime: a = o,
  formatCost: c = l,
  title: h = `Plan vs actual`,
  className: y,
}) {
  let b = (0, n.useId)(),
    [S, C] = (0, n.useState)(null),
    w = (0, n.useRef)(null),
    T = f(t) ?? 0,
    E = e.map((e) => ({
      ...e,
      plan: Math.max(0, f(e.plan) ?? 0),
      start: f(e.start),
      end: f(e.end),
      cost: f(e.cost),
      planCost: f(e.planCost),
    })),
    D = p(E, T),
    O = Math.max(0, ...D.map((e) => e.pe)),
    k = Math.max(0, ...D.map((e) => e.ae)),
    A = D.filter((e) => e.status === `done`).length === D.length,
    j = Math.max(O, k, T) * 1.22,
    M = Math.max(O, k) > 24e4 ? 6e4 : 3e4;
  for (let e of d) e > M && j / M > 10 && (M = e);
  let N = Math.ceil(j / M) * M || M,
    P = Array.from({ length: Math.floor(N / M) }, (e, t) => (t + 1) * M).filter((e) => e < N),
    [F, I] = (0, n.useState)(0);
  (0, n.useLayoutEffect)(() => {
    let e = w.current?.querySelector(`.ui-pvac__track`);
    if (!e) return;
    let t = () => I(e.getBoundingClientRect().width);
    t();
    let n = new ResizeObserver(t);
    return (n.observe(e), () => n.disconnect());
  }, [E.length > 0]);
  let L = { eta: k };
  for (let e of D) ((L[`${e.step.id}:s`] = e.as), (L[`${e.step.id}:e`] = e.ae));
  let R = _(L, N * 0.012),
    z = D.map((e) =>
      e.status === `waiting` ? { ...e, as: R[`${e.step.id}:s`], ae: R[`${e.step.id}:e`] } : e,
    ),
    B = new Map(z.map((e) => [e.step.id, e])),
    V = R.eta,
    H = k - O,
    U = E.some((e) => e.cost !== void 0 || e.planCost !== void 0),
    W = E.reduce((e, t) => e + (t.cost ?? 0), 0),
    G = E.reduce((e, t) => e + (t.planCost ?? 0), 0),
    K = S ? B.get(S) : void 0,
    q = K
      ? [
          ...(K.step.deps ?? []).flatMap((e) => (B.get(e) ? [[B.get(e), K]] : [])),
          ...z.filter((e) => e.step.deps?.includes(K.step.id)).map((e) => [K, e]),
        ]
      : [],
    J = new Set(q.flatMap(([e, t]) => [e.step.id, t.step.id])),
    Y = Math.abs(H) < u ? `on` : H > 0 ? `late` : `early`,
    X =
      Math.abs(H) < u
        ? `On plan`
        : H > 0
          ? `${s(H)} ${A ? `late` : `behind`}`
          : `${s(H).slice(1)} ${A ? `early` : `ahead`}`;
  return (0, r.jsxs)(`div`, {
    className: [`ui-pvac`, y].filter(Boolean).join(` `),
    style: { "--ui-pvac-range": N, "--ui-pvac-rows": z.length },
    children: [
      (0, r.jsx)(`style`, { href: `ui-plan-vs-actual-clean`, precedence: `default`, children: x }),
      (0, r.jsxs)(`header`, {
        className: `ui-pvac__head`,
        children: [
          (0, r.jsx)(`span`, { className: `ui-pvac__mark`, children: (0, r.jsx)(m, {}) }),
          (0, r.jsx)(`span`, { className: `ui-pvac__title`, id: b, dir: `auto`, title: h, children: h }),
          i && (0, r.jsx)(`span`, { className: `ui-pvac__task`, dir: `auto`, title: i, children: i }),
          (0, r.jsxs)(`dl`, {
            className: `ui-pvac__stats`,
            children: [
              (0, r.jsxs)(`div`, {
                className: `ui-pvac__stat`,
                "data-over": !A && T > O ? `` : void 0,
                children: [
                  (0, r.jsx)(`dt`, { children: `Time` }),
                  (0, r.jsxs)(`dd`, {
                    children: [
                      (0, r.jsx)(`b`, {
                        className: `ui-pvac__live`,
                        "data-live": A ? void 0 : ``,
                        children: a(A ? k : T),
                      }),
                      (0, r.jsxs)(`span`, { children: [` / `, a(O)] }),
                    ],
                  }),
                ],
              }),
              U &&
                (0, r.jsxs)(`div`, {
                  className: `ui-pvac__stat`,
                  "data-over": G > 0 && W > G ? `` : void 0,
                  children: [
                    (0, r.jsx)(`dt`, { children: `Cost` }),
                    (0, r.jsxs)(`dd`, {
                      children: [
                        (0, r.jsx)(`b`, {
                          className: `ui-pvac__live`,
                          "data-live": A ? void 0 : ``,
                          children: c(W),
                        }),
                        G > 0 && (0, r.jsxs)(`span`, { children: [` / `, c(G)] }),
                      ],
                    }),
                  ],
                }),
            ],
          }),
          (0, r.jsx)(`span`, { className: `ui-pvac__verdict`, "data-state": Y, children: X }),
        ],
      }),
      (0, r.jsxs)(`div`, {
        ref: w,
        className: `ui-pvac__body`,
        role: `list`,
        "aria-labelledby": b,
        "data-focus": S ? `` : void 0,
        children: [
          (0, r.jsxs)(`div`, {
            className: `ui-pvac__layer`,
            "aria-hidden": `true`,
            children: [
              P.map((e) =>
                (0, r.jsx)(
                  `span`,
                  {
                    className: `ui-pvac__tick`,
                    "data-flip": F > 0 && (e / N) * F + 6 + a(e).length * 7 > F ? `` : void 0,
                    style: { "--v": e },
                    children: (0, r.jsx)(`span`, { children: a(e) }),
                  },
                  e,
                ),
              ),
              Math.abs(H) >= u &&
                (0, r.jsx)(`span`, {
                  className: `ui-pvac__gap`,
                  "data-state": H > 0 ? `late` : `early`,
                  style: g(Math.min(O, V), Math.max(O, V)),
                }),
              (0, r.jsx)(`span`, {
                className: `ui-pvac__finish`,
                "data-kind": `plan`,
                "data-side": H < 0 ? `right` : `left`,
                style: { "--v": O },
                children: (0, r.jsxs)(`span`, { children: [`Plan `, a(O)] }),
              }),
              (0, r.jsx)(`span`, {
                className: `ui-pvac__finish`,
                "data-kind": `eta`,
                "data-side": H < 0 ? `left` : `right`,
                "data-state": Y,
                "data-hidden": Math.abs(H) < u ? `` : void 0,
                style: { "--v": V },
                children: (0, r.jsxs)(`span`, { children: [A ? `Done` : `ETA`, ` `, a(k)] }),
              }),
              !A && (0, r.jsx)(`span`, { className: `ui-pvac__now`, style: { "--v": T } }),
            ],
          }),
          (0, r.jsx)(`div`, { className: `ui-pvac__axis`, "aria-hidden": `true`, children: `Step` }),
          z.map((e) =>
            (0, r.jsx)(
              v,
              {
                p: e,
                now: e.status === `running` ? T : 0,
                wait: e.status === `waiting` ? Math.max(0, Math.round((e.as - T) / 1e3)) : 0,
                range: N,
                track: F,
                focused: S === e.step.id,
                lit: S === e.step.id || J.has(e.step.id),
                formatTime: a,
                formatCost: c,
                setFocus: C,
              },
              e.step.id,
            ),
          ),
          (0, r.jsx)(`div`, {
            className: `ui-pvac__links`,
            "aria-hidden": `true`,
            children: q.map(([e, t]) =>
              (0, r.jsx)(
                `span`,
                {
                  className: `ui-pvac__link`,
                  style: {
                    "--a0": e.as,
                    "--a1": e.ae,
                    "--b0": Math.max(e.ae, t.as),
                    "--from": e.index,
                    "--to": t.index,
                  },
                },
                `${e.step.id}-${t.step.id}`,
              ),
            ),
          }),
          (0, r.jsxs)(`div`, {
            className: `ui-pvac__foot`,
            "aria-hidden": `true`,
            children: [
              (0, r.jsx)(`span`, { className: `ui-pvac__key`, "data-kind": `plan`, children: `Plan` }),
              (0, r.jsx)(`span`, { className: `ui-pvac__key`, "data-kind": `actual`, children: `Actual` }),
              (0, r.jsx)(`span`, { className: `ui-pvac__key`, "data-kind": `over`, children: `Over plan` }),
            ],
          }),
        ],
      }),
    ],
  });
}
var x = `@property --ui-pvac-range{syntax: "<number>";inherits: true;initial-value: 60000}.ui-pvac{--ui-pvac-card: #ffffff;--ui-pvac-strong: #000000;--ui-pvac-ink: rgba(0, 0, 0, 0.88);--ui-pvac-text: rgba(0, 0, 0, 0.61);--ui-pvac-muted: rgba(0, 0, 0, 0.45);--ui-pvac-faint: rgba(0, 0, 0, 0.27);--ui-pvac-line: rgba(0, 0, 0, 0.06);--ui-pvac-grid: rgba(0, 0, 0, 0.04);--ui-pvac-hover: rgba(0, 0, 0, 0.018);--ui-pvac-accent: rgba(0, 96, 226, 0.765);--ui-pvac-now: rgba(0, 96, 226, 0.4);--ui-pvac-ghost: rgba(0, 0, 0, 0.26);--ui-pvac-link: rgba(0, 0, 0, 0.5);--ui-pvac-actual-bg: rgba(91, 91, 214, 0.1);--ui-pvac-actual-edge: rgba(91, 91, 214, 0.3);--ui-pvac-actual-mark: rgba(91, 91, 214, 0.72);--ui-pvac-over-bg: rgba(255, 140, 0, 0.15);--ui-pvac-over-edge: rgba(214, 102, 0, 0.42);--ui-pvac-over-ink: #c24a00;--ui-pvac-forecast-bg: rgba(0, 0, 0, 0.035);--ui-pvac-forecast-edge: rgba(0, 0, 0, 0.07);--ui-pvac-early-ink: #007d2ee0;--ui-pvac-early-fill: rgba(0, 164, 51, 0.1);--ui-pvac-shine: rgba(0, 0, 0, 0.1);--ui-pvac-late-bg: rgba(255, 140, 0, 0.07);--ui-pvac-early-bg: rgba(0, 164, 51, 0.06);--ui-pvac-focus: rgba(0, 96, 226, 0.35);--ui-pvac-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.06), 0 1px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.05);--ui-pvac-row: 32px;--ui-pvac-bar: 14px;--ui-pvac-axis: 30px;--ui-pvac-foot: 40px;--ui-pvac-name: 188px;--ui-pvac-pad: 16px;--ui-pvac-gap: 14px;--ui-pvac-end: 16px;--ui-pvac-ease: cubic-bezier(0.32, 0.72, 0.24, 1);position: relative;box-sizing: border-box;width: 100%;border-radius: 12px;background: var(--ui-pvac-card);box-shadow: var(--ui-pvac-shadow);container: ui-pvac / inline-size;font-family: "Inter", "InterVariable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;font-weight: 400;line-height: 20px;color: var(--ui-pvac-text);text-align: left;-webkit-font-smoothing: antialiased;transition: --ui-pvac-range 700ms var(--ui-pvac-ease)}.ui-pvac *, .ui-pvac *::before, .ui-pvac *::after{box-sizing: border-box}.ui-pvac svg{display: block;flex: none}.ui-pvac__head{display: flex;align-items: center;gap: 8px;min-width: 0;padding: 12px 14px 12px 16px;border-bottom: 0.5px solid var(--ui-pvac-line)}.ui-pvac__mark{display: grid;flex: none;place-items: center;width: 16px;color: var(--ui-pvac-accent)}.ui-pvac__title{flex: 0 1 auto;min-width: 0;overflow: hidden;font-weight: 500;color: var(--ui-pvac-strong);white-space: nowrap;text-overflow: ellipsis}.ui-pvac__task{flex: 1;min-width: 0;overflow: hidden;color: var(--ui-pvac-muted);white-space: nowrap;text-overflow: ellipsis}.ui-pvac__stats{display: flex;flex: none;align-items: center;gap: 14px;margin: 0 4px 0 0;font-size: 12px;line-height: 16px;font-variant-numeric: tabular-nums;white-space: nowrap}.ui-pvac__stat{display: flex;align-items: baseline;gap: 6px;white-space: nowrap}.ui-pvac__stat dt{color: var(--ui-pvac-muted)}.ui-pvac__stat dd{margin: 0;font-weight: 500;color: var(--ui-pvac-ink);transition: color 300ms ease}.ui-pvac__stat dd > span{font-weight: 400;color: var(--ui-pvac-muted)}.ui-pvac__stat[data-over] dd{color: var(--ui-pvac-over-ink)}.ui-pvac__live{font-weight: inherit}.ui-pvac__live[data-live]{background: linear-gradient(90deg, currentColor 0%, currentColor 38%, var(--ui-pvac-shine) 50%, currentColor 62%, currentColor 100%) 0 0 / 300% 100%;-webkit-background-clip: text;background-clip: text;-webkit-text-fill-color: transparent;animation: ui-pvac-shine 900ms linear infinite}.ui-pvac__verdict{flex: none;min-width: 92px;height: 22px;padding: 0 8px;border-radius: 6px;background: rgba(0, 0, 0, 0.045);font-size: 12px;font-weight: 500;line-height: 22px;color: var(--ui-pvac-text);text-align: center;font-variant-numeric: tabular-nums;white-space: nowrap;transition: background-color 300ms ease, color 300ms ease}.ui-pvac__verdict[data-state="late"]{background: var(--ui-pvac-over-bg);color: var(--ui-pvac-over-ink)}.ui-pvac__verdict[data-state="early"]{background: var(--ui-pvac-early-fill);color: var(--ui-pvac-early-ink)}.ui-pvac__body{position: relative;padding-bottom: 0}.ui-pvac__layer{position: absolute;top: 0;bottom: 0;left: calc(var(--ui-pvac-pad) + var(--ui-pvac-name) + var(--ui-pvac-gap));right: var(--ui-pvac-end);pointer-events: none}.ui-pvac__tick{position: absolute;top: 0;bottom: var(--ui-pvac-foot);left: calc(var(--v) * 100% / var(--ui-pvac-range));width: 0.5px;background: var(--ui-pvac-grid);animation: ui-pvac-fade 420ms ease both}.ui-pvac__tick[data-flip] > span{left: auto;right: 6px}.ui-pvac__tick > span{position: absolute;top: 7px;left: 6px;font-size: 12px;line-height: 16px;color: var(--ui-pvac-muted);white-space: nowrap;font-variant-numeric: tabular-nums}.ui-pvac__now{position: absolute;top: var(--ui-pvac-axis);bottom: var(--ui-pvac-foot);left: calc(var(--v) * 100% / var(--ui-pvac-range));width: 1px;background: var(--ui-pvac-now)}.ui-pvac__now::before{content: "";position: absolute;top: -2.5px;left: -2px;width: 5px;height: 5px;border-radius: 50%;background: var(--ui-pvac-accent);box-shadow: 0 0 0 3px var(--ui-pvac-card)}.ui-pvac__gap{position: absolute;top: var(--ui-pvac-axis);bottom: calc(var(--ui-pvac-foot) - 1px);left: calc(var(--s) * 100% / var(--ui-pvac-range));width: calc(var(--d) * 100% / var(--ui-pvac-range));background: var(--ui-pvac-late-bg);animation: ui-pvac-fade 300ms ease both}.ui-pvac__gap[data-state="early"]{background: var(--ui-pvac-early-bg)}.ui-pvac__finish{position: absolute;top: var(--ui-pvac-axis);bottom: calc(var(--ui-pvac-foot) - 6px);left: calc(var(--v) * 100% / var(--ui-pvac-range));width: 0;border-left: 1px dashed var(--ui-pvac-ghost)}.ui-pvac__finish[data-kind="eta"]{border-left: 1px solid var(--ui-pvac-over-edge)}.ui-pvac__finish[data-kind="eta"][data-state="early"]{border-left-color: rgba(0, 140, 50, 0.45)}.ui-pvac__finish[data-kind="eta"][data-hidden]{opacity: 0}.ui-pvac__finish > span{position: absolute;top: calc(100% + 2px);height: 20px;padding: 0 6px;border-radius: 5px;font-size: 12px;font-weight: 500;line-height: 20px;white-space: nowrap;font-variant-numeric: tabular-nums}.ui-pvac__finish[data-side="left"] > span{right: -1px;border-top-right-radius: 0}.ui-pvac__finish[data-side="right"] > span{left: -1px;border-top-left-radius: 0}.ui-pvac__finish[data-kind="plan"] > span{background: rgba(0, 0, 0, 0.045);color: var(--ui-pvac-text)}.ui-pvac__finish[data-kind="eta"] > span{background: var(--ui-pvac-over-bg);color: var(--ui-pvac-over-ink)}.ui-pvac__finish[data-kind="eta"][data-state="early"] > span{background: var(--ui-pvac-early-fill);color: var(--ui-pvac-early-ink)}.ui-pvac__finish[data-kind="plan"]:has(~ .ui-pvac__finish[data-hidden]) > span{right: auto;left: 50%;transform: translateX(-50%);border-radius: 5px}.ui-pvac__links{position: absolute;top: 0;bottom: 0;z-index: 1;left: calc(var(--ui-pvac-pad) + var(--ui-pvac-name) + var(--ui-pvac-gap));right: var(--ui-pvac-end);pointer-events: none}.ui-pvac__link{position: absolute;top: calc(var(--ui-pvac-axis) + var(--from) * var(--ui-pvac-row) + var(--ui-pvac-row) / 2 + var(--ui-pvac-bar) / 2);--x0: max(calc(var(--a0) * 100% / var(--ui-pvac-range) + 3px), min(calc(var(--a1) * 100% / var(--ui-pvac-range)), calc(var(--b0) * 100% / var(--ui-pvac-range) - 12px)));left: calc(var(--x0) - 0.5px);width: calc(var(--b0) * 100% / var(--ui-pvac-range) - var(--x0) + 0.5px);height: calc((var(--to) - var(--from)) * var(--ui-pvac-row) - var(--ui-pvac-bar) / 2);border-bottom-left-radius: 5px;border-left: 1px solid var(--ui-pvac-link);border-bottom: 1px solid var(--ui-pvac-link);animation: ui-pvac-draw 260ms var(--ui-pvac-ease) both}.ui-pvac__link::before, .ui-pvac__link::after{content: "";position: absolute;width: 5px;height: 5px;border: 1px solid var(--ui-pvac-link);border-radius: 1px;background: var(--ui-pvac-card)}.ui-pvac__link::before{top: -2.5px;left: -3px}.ui-pvac__link::after{right: -2.5px;bottom: -3px;background: var(--ui-pvac-link)}.ui-pvac__axis{display: flex;align-items: center;height: var(--ui-pvac-axis);padding-left: var(--ui-pvac-pad);border-bottom: 0.5px solid var(--ui-pvac-line);font-size: 10px;font-weight: 500;line-height: 16px;letter-spacing: 0.5px;text-transform: uppercase;color: var(--ui-pvac-muted)}.ui-pvac__row{position: relative;display: grid;grid-template-columns: var(--ui-pvac-name) minmax(0, 1fr);column-gap: var(--ui-pvac-gap);height: var(--ui-pvac-row);padding: 0 var(--ui-pvac-end) 0 var(--ui-pvac-pad);outline: none;transition: background-color 140ms ease, opacity 200ms ease}.ui-pvac__row:hover, .ui-pvac__row[data-focus]{background: var(--ui-pvac-hover)}.ui-pvac__row:focus-visible{box-shadow: inset 0 0 0 2px var(--ui-pvac-focus)}.ui-pvac__body[data-focus] .ui-pvac__row:not([data-lit]){opacity: 0.45}.ui-pvac__name{display: flex;align-items: center;gap: 8px;min-width: 0}.ui-pvac__state{display: grid;flex: none;place-items: center;width: 16px;color: var(--ui-pvac-faint);transition: color 240ms ease}.ui-pvac__state[data-status="running"]{color: var(--ui-pvac-accent)}.ui-pvac__state[data-status="done"]{color: var(--ui-pvac-muted)}.ui-pvac__state > svg{animation: ui-pvac-pop 240ms var(--ui-pvac-ease) both}.ui-pvac__spin{animation: ui-pvac-spin 900ms linear infinite !important}.ui-pvac__icon{display: grid;flex: none;place-items: center;width: 20px;height: 20px;border-radius: 5px;background: var(--ui-pvac-card);box-shadow: var(--ui-pvac-shadow)}.ui-pvac__icon > :is(svg, img){width: 12px;height: 12px;object-fit: contain}.ui-pvac__label{min-width: 0;overflow: hidden;color: var(--ui-pvac-ink);text-align: start;white-space: nowrap;text-overflow: ellipsis;transition: color 240ms ease}.ui-pvac__row[data-status="waiting"] .ui-pvac__label{color: var(--ui-pvac-text)}.ui-pvac__track{position: relative;min-width: 0;height: var(--ui-pvac-row)}.ui-pvac__bar, .ui-pvac__ghost{position: absolute;top: calc(50% - var(--ui-pvac-bar) / 2);left: calc(var(--s) * 100% / var(--ui-pvac-range));width: max(2px, calc(var(--d) * 100% / var(--ui-pvac-range)));height: var(--ui-pvac-bar);border-radius: 4px}.ui-pvac__bar{overflow: hidden;background: var(--k-bg);box-shadow: inset 0 0 0 0.5px var(--k-edge)}.ui-pvac__bar[data-kind="actual"]{--k-bg: var(--ui-pvac-actual-bg);--k-edge: var(--ui-pvac-actual-edge)}.ui-pvac__row:is(:hover, [data-focus]) .ui-pvac__bar[data-kind="actual"]{box-shadow: inset 0 0 0 1px var(--ui-pvac-actual-mark)}.ui-pvac__bar[data-kind="over"]{--k-bg: var(--ui-pvac-over-bg);--k-edge: var(--ui-pvac-over-edge);border-top-left-radius: 0;border-bottom-left-radius: 0;background: linear-gradient(var(--k-bg), var(--k-bg)), var(--ui-pvac-card);animation: ui-pvac-fade 200ms ease both}.ui-pvac__bar[data-kind="forecast"]{--k-bg: var(--ui-pvac-forecast-bg);--k-edge: var(--ui-pvac-forecast-edge);animation: ui-pvac-fade 320ms ease both}.ui-pvac__bar[data-rest]{border-top-left-radius: 0;border-bottom-left-radius: 0;animation: none}.ui-pvac__bar[data-status="running"]:not([data-over])::before, .ui-pvac__bar[data-kind="over"][data-status="running"]::before{content: "";position: absolute;inset: 0;background: linear-gradient(90deg, transparent, var(--ui-pvac-card), transparent) -60px 0 / 60px 100% no-repeat;opacity: 0.7;animation: ui-pvac-sweep 1500ms linear infinite}.ui-pvac__bar[data-status="running"]:not([data-over])::after, .ui-pvac__bar[data-kind="over"][data-status="running"]::after{content: "";position: absolute;top: 0;right: 0;bottom: 0;width: min(28px, 100%);background: linear-gradient(90deg, transparent, var(--k-edge));animation: ui-pvac-glow 1100ms ease-in-out infinite alternate}.ui-pvac__ghost{border: 1px dashed var(--ui-pvac-ghost);pointer-events: none}.ui-pvac__tag{position: absolute;top: calc(50% - 9px);display: flex;align-items: center;gap: 5px;height: 18px;padding: 0 4px;border-radius: 4px;background: var(--ui-pvac-card);font-size: 12px;line-height: 16px;color: var(--ui-pvac-text);white-space: nowrap;font-variant-numeric: tabular-nums;pointer-events: none}.ui-pvac__tag[data-side="after"]{left: max(0px, min(calc(var(--s) * 100% / var(--ui-pvac-range) + 3px), calc(100% - var(--tw) * 1px)))}.ui-pvac__tag[data-side="before"]{right: max(0px, min(calc(100% - var(--s) * 100% / var(--ui-pvac-range) + 3px), calc(100% - var(--tw) * 1px)))}.ui-pvac__tag[data-status="waiting"]{color: var(--ui-pvac-faint)}.ui-pvac__cost{color: var(--ui-pvac-text);animation: ui-pvac-pop 180ms var(--ui-pvac-ease) both}.ui-pvac__cost::before{content: "·";margin-right: 5px;color: var(--ui-pvac-faint)}.ui-pvac__row:is(:hover, [data-focus]) .ui-pvac__tag{background: none}.ui-pvac__took{color: var(--ui-pvac-ink)}.ui-pvac__diff{height: 16px;padding: 0 4px;border-radius: 4px;background: var(--ui-pvac-early-fill);font-weight: 500;line-height: 16px;color: var(--ui-pvac-early-ink);animation: ui-pvac-pop 220ms var(--ui-pvac-ease) both}.ui-pvac__diff[data-late]{background: var(--ui-pvac-over-bg);color: var(--ui-pvac-over-ink)}.ui-pvac__foot{display: flex;align-items: center;gap: 14px;height: var(--ui-pvac-foot);margin-top: 4px;padding-left: var(--ui-pvac-pad);border-top: 0.5px solid var(--ui-pvac-line);font-size: 12px;line-height: 16px;color: var(--ui-pvac-muted)}.ui-pvac__key{display: flex;align-items: center;gap: 6px}.ui-pvac__key::before{content: "";width: 14px;height: 8px;border-radius: 2.5px}.ui-pvac__key[data-kind="plan"]::before{border: 1px dashed var(--ui-pvac-ghost)}.ui-pvac__key[data-kind="actual"]::before{background: var(--ui-pvac-actual-bg);box-shadow: inset 0 0 0 0.5px var(--ui-pvac-actual-edge)}.ui-pvac__key[data-kind="over"]::before{background: var(--ui-pvac-over-bg);box-shadow: inset 0 0 0 0.5px var(--ui-pvac-over-edge)}@container ui-pvac (max-width: 560px){.ui-pvac__body{--ui-pvac-name: 120px;--ui-pvac-pad: 12px;--ui-pvac-gap: 10px;--ui-pvac-end: 12px;--ui-pvac-foot: 14px}.ui-pvac__finish > span, .ui-pvac__foot{visibility: hidden}.ui-pvac__head{padding: 10px 12px}.ui-pvac__task{display: none}.ui-pvac__head{flex-wrap: wrap;row-gap: 6px}.ui-pvac__verdict{margin-left: auto}.ui-pvac__stats{order: 3;flex-basis: 100%;flex-wrap: wrap;gap: 4px 16px;margin: 0}.ui-pvac__icon{display: none}.ui-pvac__foot .ui-pvac__key{display: none}.ui-pvac__tick:nth-child(even) > span{display: none}}@keyframes ui-pvac-fade{from{opacity: 0}}@keyframes ui-pvac-pop{from{opacity: 0;transform: scale(0.85)}}@keyframes ui-pvac-draw{from{opacity: 0;clip-path: inset(0 100% 0 0)}to{opacity: 1;clip-path: inset(-4px -4px -4px -4px)}}@keyframes ui-pvac-sweep{to{background-position: calc(100% + 60px) 0}}@keyframes ui-pvac-glow{from{opacity: 0.45}to{opacity: 1}}@keyframes ui-pvac-spin{to{transform: rotate(360deg)}}@keyframes ui-pvac-shine{from{background-position: 100% 0}to{background-position: 0 0}}@media (prefers-reduced-motion: reduce){.ui-pvac{transition: none}.ui-pvac *, .ui-pvac *::before, .ui-pvac *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-pvac{--ui-pvac-card: #1c1c1f;--ui-pvac-strong: #ffffff;--ui-pvac-ink: rgba(255, 255, 255, 0.9);--ui-pvac-text: rgba(255, 255, 255, 0.62);--ui-pvac-muted: rgba(255, 255, 255, 0.45);--ui-pvac-faint: rgba(255, 255, 255, 0.28);--ui-pvac-line: rgba(255, 255, 255, 0.08);--ui-pvac-grid: rgba(255, 255, 255, 0.05);--ui-pvac-hover: rgba(255, 255, 255, 0.025);--ui-pvac-accent: #5b9aff;--ui-pvac-now: rgba(91, 154, 255, 0.55);--ui-pvac-ghost: rgba(255, 255, 255, 0.3);--ui-pvac-link: rgba(255, 255, 255, 0.55);--ui-pvac-actual-bg: rgba(130, 130, 255, 0.16);--ui-pvac-actual-edge: rgba(130, 130, 255, 0.38);--ui-pvac-actual-mark: rgba(140, 140, 255, 0.8);--ui-pvac-over-bg: rgba(255, 140, 30, 0.18);--ui-pvac-over-edge: rgba(255, 150, 60, 0.45);--ui-pvac-over-ink: #ffa057;--ui-pvac-forecast-bg: rgba(255, 255, 255, 0.05);--ui-pvac-forecast-edge: rgba(255, 255, 255, 0.09);--ui-pvac-early-ink: #3dd68c;--ui-pvac-early-fill: rgba(40, 200, 110, 0.14);--ui-pvac-shine: rgba(255, 255, 255, 0.4);--ui-pvac-late-bg: rgba(255, 140, 30, 0.07);--ui-pvac-early-bg: rgba(40, 200, 110, 0.06);--ui-pvac-focus: rgba(91, 154, 255, 0.45);--ui-pvac-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.4)}:where(.dark, [data-theme="dark"]) .ui-pvac :is(.ui-pvac__verdict, .ui-pvac__finish[data-kind="plan"] > span){background: rgba(255, 255, 255, 0.07)}`,
  S = [
    { id: `brief`, title: `Read the brief`, plan: 2e4, planCost: 0.04, took: 16e3, spent: 0.03 },
    {
      id: `copy`,
      title: `Draft the copy`,
      plan: 4e4,
      planCost: 0.18,
      deps: [`brief`],
      took: 52e3,
      spent: 0.23,
    },
    {
      id: `layout`,
      title: `Build the layout`,
      plan: 6e4,
      planCost: 0.32,
      deps: [`brief`],
      took: 85e3,
      spent: 0.47,
    },
    {
      id: `tests`,
      title: `Write the tests`,
      plan: 3e4,
      planCost: 0.1,
      deps: [`copy`],
      took: 28e3,
      spent: 0.09,
    },
    {
      id: `stripe`,
      title: `Wire up Stripe`,
      plan: 45e3,
      planCost: 0.16,
      deps: [`layout`],
      took: 38e3,
      spent: 0.14,
    },
    {
      id: `run`,
      title: `Run tests and fix`,
      plan: 35e3,
      planCost: 0.2,
      deps: [`stripe`, `tests`],
      took: 55e3,
      spent: 0.31,
    },
    {
      id: `pr`,
      title: `Open the pull request`,
      plan: 15e3,
      planCost: 0.03,
      deps: [`run`],
      took: 14e3,
      spent: 0.03,
    },
  ],
  C = (() => {
    let e = new Map();
    return S.map((t) => {
      let n = Math.max(0, ...(t.deps ?? []).map((t) => e.get(t) + 1e3));
      return (e.set(t.id, n + t.took), { id: t.id, start: n, end: n + t.took });
    });
  })(),
  w = Math.max(...C.map((e) => e.end)),
  T = 10,
  E = 4e3;
function D() {
  let [e, t] = (0, n.useState)(0);
  (0, n.useEffect)(() => {
    let e = 0,
      n = performance.now(),
      r = 0,
      i = (a) => {
        if (((e = requestAnimationFrame(i)), a - r < 32)) return;
        r = a;
        let o = (a - n) * T;
        (o > w + E * T && (n = a), t(Math.min(w, Math.max(0, o))));
      };
    return ((e = requestAnimationFrame(i)), () => cancelAnimationFrame(e));
  }, []);
  let i = S.map(({ took: t, spent: n, ...r }, i) => {
    let a = C[i],
      o = a.start <= e;
    return {
      ...r,
      start: o ? a.start : void 0,
      end: a.end <= e ? a.end : void 0,
      cost: o ? n * Math.min(1, (e - a.start) / t) : void 0,
    };
  });
  return (0, r.jsx)(`div`, {
    className: `pva-demo`,
    children: (0, r.jsx)(b, { steps: i, now: e, task: `Ship the pricing page` }),
  });
}
