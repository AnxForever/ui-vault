/*
 * affectUI · metrics-dashboard (Pro)
 * Implementation recovered from public bundle asset: demo-Coprs2Jd.js
 * Styles inlined in the module -> metrics-dashboard.css (1 block(s))
 * Demo usage: metrics-dashboard.demo.jsx
 * Minified identifiers kept; formatting by prettier.
 */

import { t as e } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
var n = e(),
  r = t(),
  i = [
    { key: `7d`, label: `Week`, days: 7 },
    { key: `30d`, label: `Month`, days: 30 },
    { key: `90d`, label: `Quarter`, days: 90 },
  ],
  a = [
    { key: `revenue`, label: `Revenue`, kind: `money`, zoom: !1, goodWhen: `up` },
    { key: `orders`, label: `Orders`, kind: `count`, zoom: !1, goodWhen: `up` },
    { key: `aov`, label: `Avg. order`, kind: `money`, zoom: !0, goodWhen: `up` },
    { key: `refunds`, label: `Refund rate`, kind: `rate`, zoom: !0, goodWhen: `down` },
  ],
  o = [
    { name: `Linen overshirt`, share: 0.22 },
    { name: `Everyday tote`, share: 0.16 },
    { name: `Merino crew`, share: 0.13 },
    { name: `Canvas sneaker`, share: 0.09 },
    { name: `Wool beanie`, share: 0.06 },
  ],
  s = [
    { name: `Online store`, share: 0.46 },
    { name: `Instagram`, share: 0.21 },
    { name: `Marketplace`, share: 0.14 },
    { name: `Wholesale`, share: 0.11 },
    { name: `Pop-up`, share: 0.05 },
  ];
function c() {
  let e = 7,
    t = () => ((e = (e * 16807) % 2147483647), (e - 1) / 2147483646),
    n = new Date();
  return (
    n.setHours(12, 0, 0, 0),
    Array.from({ length: 180 }, (e, r) => {
      let i = new Date(n);
      i.setDate(n.getDate() - (179 - r));
      let a = 92 + r * 0.32,
        o = [1.22, 0.82, 0.86, 0.9, 0.96, 1.1, 1.3][i.getDay()],
        s = Math.round(a * o * (0.88 + t() * 0.24)),
        c = 61 + r * 0.03 + (t() - 0.5) * 8;
      return {
        date: i,
        revenue: Math.round(s * c),
        orders: s,
        refunded: Math.round(s * (0.026 - r * 3e-5 + (t() - 0.5) * 0.012)),
      };
    })
  );
}
var l = (e) => (Number.isFinite(e) ? e : 0);
function u(e, t) {
  let n = e.reduce((e, t) => e + l(t.revenue), 0),
    r = e.reduce((e, t) => e + l(t.orders), 0),
    i = e.reduce((e, t) => e + l(t.refunded), 0);
  return t === `revenue` ? n : t === `orders` ? r : t === `aov` ? (r ? n / r : 0) : r ? (i / r) * 100 : 0;
}
var d = (e) => e.toLocaleDateString(`en-US`, { month: `short`, day: `numeric` });
function f(e, t, n) {
  let r = e.slice(-t),
    i = e.slice(-t * 2, -t),
    a = t > 31 ? 7 : 1,
    o = [];
  for (let e = 0; e < r.length; e += a) {
    let t = r.slice(e, e + a),
      s = i.slice(e, e + a);
    o.push({ label: d(t[0].date), value: u(t, n), previous: u(s, n) });
  }
  return o;
}
var p = new Map();
function m(e) {
  let t = p.get(e);
  if (!t) {
    let n = (t) => {
      try {
        return new Intl.NumberFormat(`en-US`, { style: `currency`, currency: e, ...t });
      } catch {
        return new Intl.NumberFormat(`en-US`, { style: `currency`, currency: `USD`, ...t });
      }
    };
    ((t = {
      money: n({ maximumFractionDigits: 0, minimumFractionDigits: 0 }),
      cents: n({ minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      count: new Intl.NumberFormat(`en-US`, { maximumFractionDigits: 0 }),
      tick: new Intl.NumberFormat(`en-US`, { notation: `compact`, maximumFractionDigits: 1 }),
      moneyTick: n({ notation: `compact`, maximumFractionDigits: 1, minimumFractionDigits: 0 }),
    }),
      p.set(e, t));
  }
  return t;
}
var h = (e, t, n = `USD`) => {
    if (!Number.isFinite(t)) return `—`;
    let r = m(n);
    return e === `refunds`
      ? `${t.toFixed(1)}%`
      : e === `aov`
        ? r.cents.format(t)
        : e === `revenue`
          ? r.money.format(Math.round(t))
          : r.count.format(Math.round(t));
  },
  ee = (e, t, n = `USD`) => {
    let r = m(n),
      i = Math.abs(t) < 10 ? Math.round(t * 10) / 10 : Math.round(t);
    return e === `refunds`
      ? `${r.tick.format(i)}%`
      : e === `revenue` || e === `aov`
        ? r.moneyTick.format(i)
        : r.tick.format(i);
  };
function g(e) {
  if (!(e > 0)) return 4;
  let t = 10 ** Math.floor(Math.log10(e / 4));
  return ([1, 2, 2.5, 5, 10].map((e) => e * t).find((t) => t * 4 >= e * 1.08) ?? t * 10) * 4;
}
function te(e, t) {
  let n = g(t - e) / 4;
  for (let r = 0; r < 4; r++) {
    let r = Math.floor(e / n) * n;
    if (r + n * 4 >= t) return [r, r + n * 4];
    n *= 2;
  }
  return [e, t];
}
function _(e) {
  if (e.length < 2) return ``;
  let t = e.length,
    n = [],
    r = [];
  for (let r = 0; r < t - 1; r++) n.push((e[r + 1][1] - e[r][1]) / (e[r + 1][0] - e[r][0]));
  r.push(n[0]);
  for (let e = 1; e < t - 1; e++) r.push(n[e - 1] * n[e] <= 0 ? 0 : (n[e - 1] + n[e]) / 2);
  r.push(n[t - 2]);
  for (let e = 0; e < t - 1; e++) {
    if (n[e] === 0) {
      r[e] = r[e + 1] = 0;
      continue;
    }
    let t = r[e] / n[e],
      i = r[e + 1] / n[e],
      a = t * t + i * i;
    if (a > 9) {
      let o = 3 / Math.sqrt(a);
      ((r[e] = o * t * n[e]), (r[e + 1] = o * i * n[e]));
    }
  }
  let i = `M${e[0][0]},${e[0][1]}`;
  for (let n = 0; n < t - 1; n++) {
    let [t, a] = e[n],
      [o, s] = e[n + 1],
      c = (o - t) / 3;
    i += `C${t + c},${a + r[n] * c} ${o - c},${s - r[n + 1] * c} ${o},${s}`;
  }
  return i;
}
function v(e, t = 600) {
  let [r, i] = (0, n.useState)(e),
    a = (0, n.useRef)(e);
  return (
    (0, n.useEffect)(() => {
      if (window.matchMedia(`(prefers-reduced-motion: reduce)`).matches) {
        ((a.current = e), i(e));
        return;
      }
      let n = performance.now(),
        r = a.current,
        o = 0,
        s = (c) => {
          let l = Math.min(1, (c - n) / t),
            u = 1 - (1 - l) ** 3,
            d = r + (e - r) * u;
          ((a.current = d), i(d), l < 1 && (o = requestAnimationFrame(s)));
        };
      return ((o = requestAnimationFrame(s)), () => cancelAnimationFrame(o));
    }, [e, t]),
    r
  );
}
var y = 600,
  b = 200;
function x({
  title: e = `Sales`,
  site: t = `Northwind Store`,
  defaultRange: l = `30d`,
  defaultMetric: d = `revenue`,
  onExport: p,
  data: m,
  products: v = o,
  channels: x = s,
  currency: C = `USD`,
  className: w,
}) {
  let T = `ui-md` + (0, n.useId)().replace(/[^a-zA-Z0-9_-]/g, ``),
    ie = (0, n.useMemo)(c, []),
    E = m ?? ie,
    [D, ae] = (0, n.useState)(l),
    [O, oe] = (0, n.useState)(d),
    [k, se] = (0, n.useState)(!1),
    [A, j] = (0, n.useState)(`line`),
    [M, N] = (0, n.useState)(null),
    [P, F] = (0, n.useState)(!1),
    I = (0, n.useRef)(null),
    L = i.find((e) => e.key === D).days,
    R = E.slice(-L),
    z = E.slice(-L * 2, -L),
    B = (0, n.useMemo)(() => f(E, L, O), [E, L, O]),
    V = a.find((e) => e.key === O),
    H = B.flatMap((e) => (k ? [e.value, e.previous] : [e.value])),
    [U, W] = (() => {
      if (H.length === 0) return [0, 4];
      let e = Math.min(0, ...H);
      if (e < 0) return te(e, Math.max(0, ...H));
      if (!V.zoom || A === `bars`) return [0, g(Math.max(...H))];
      let t = Math.min(...H),
        n = Math.max(...H),
        r = Math.max((n - t) * 0.8, n * 0.02),
        i = (n + r - Math.max(0, t - r)) / 4,
        a = i >= 1 ? Math.ceil(i) : Math.ceil(i * 10) / 10,
        o = Math.max(0, Math.floor((t - r) / a) * a);
      return [o, o + a * 4];
    })(),
    G = (e) => (e - U) / (W - U),
    K = (e, t) => [B.length > 1 ? (e / (B.length - 1)) * y : y / 2, b - G(t) * b],
    q = _(B.map((e, t) => K(t, e.value))),
    ce = _(B.map((e, t) => K(t, e.previous))),
    le = q ? `${q}L${y},${b}L0,${b}Z` : ``,
    J = [0, 1, 2, 3, 4].map((e) => U + ((W - U) / 4) * e),
    ue = Math.ceil(B.length / 6),
    Y = M !== null && M < B.length ? M : null,
    X = u(R, `revenue`),
    Z = (e) => (B.length > 1 ? (e / (B.length - 1)) * 100 : 50),
    de = 100 / B.length,
    Q = (e) => (A === `bars` ? de * (e + 0.5) : Z(e));
  (0, n.useEffect)(() => N(null), [D, O, A]);
  let $ = (e) => {
      let t = I.current;
      if (!t) return;
      let n = t.getBoundingClientRect(),
        r = (e - n.left) / n.width,
        i = A === `bars` ? Math.floor(r * B.length) : Math.round(r * (B.length - 1));
      N(Math.max(0, Math.min(B.length - 1, i)));
    },
    fe = (e) => {
      let t = B.length - 1,
        n = M ?? t,
        r =
          e.key === `ArrowLeft`
            ? n - 1
            : e.key === `ArrowRight`
              ? n + 1
              : e.key === `Home`
                ? 0
                : e.key === `End`
                  ? t
                  : null;
      r !== null && (e.preventDefault(), N(Math.max(0, Math.min(t, r))));
    },
    pe = i.findIndex((e) => e.key === D);
  return (0, r.jsxs)(`div`, {
    className: [`ui-md`, w].filter(Boolean).join(` `),
    children: [
      (0, r.jsx)(`style`, { href: `ui-metrics-dashboard`, precedence: `default`, children: re }),
      (0, r.jsxs)(`div`, {
        className: `ui-md__bar`,
        children: [
          (0, r.jsxs)(`div`, {
            className: `ui-md__heading`,
            children: [
              (0, r.jsx)(`span`, { className: `ui-md__title`, title: e, children: e }),
              (0, r.jsxs)(`span`, {
                className: `ui-md__site`,
                title: t ? `${t} · Last ${L} days` : void 0,
                children: [t ? `${t} · ` : ``, `Last `, L, ` days`],
              }),
            ],
          }),
          (0, r.jsxs)(`div`, {
            className: `ui-md__actions`,
            children: [
              (0, r.jsxs)(`div`, {
                className: `ui-md__range`,
                role: `group`,
                "aria-label": `Period`,
                children: [
                  (0, r.jsx)(`span`, {
                    className: `ui-md__range-thumb`,
                    "aria-hidden": `true`,
                    style: { transform: `translateX(${pe * 100}%)` },
                  }),
                  i.map((e) =>
                    (0, r.jsx)(
                      `button`,
                      {
                        type: `button`,
                        "aria-pressed": D === e.key,
                        onClick: () => ae(e.key),
                        children: e.label,
                      },
                      e.key,
                    ),
                  ),
                ],
              }),
              (0, r.jsxs)(`button`, {
                type: `button`,
                className: `ui-md__export`,
                onClick: () => {
                  (p?.(D, O), F(!0), window.setTimeout(() => F(!1), 1600));
                },
                children: [
                  (0, r.jsx)(`svg`, {
                    viewBox: `0 0 24 24`,
                    "aria-hidden": `true`,
                    children: P
                      ? (0, r.jsx)(`path`, { d: `m5 12.5 4.5 4.5L19 7.5` })
                      : (0, r.jsx)(`path`, { d: `M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19.5h14` }),
                  }),
                  (0, r.jsx)(`span`, { "aria-live": `polite`, children: P ? `Exported` : `Export` }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, r.jsx)(`div`, {
        className: `ui-md__kpis`,
        role: `tablist`,
        "aria-label": `Metric`,
        children: a.map((e) =>
          (0, r.jsx)(
            ne,
            {
              meta: e,
              selected: O === e.key,
              value: u(R, e.key),
              before: z.length ? u(z, e.key) : null,
              currency: C,
              onSelect: () => oe(e.key),
            },
            e.key,
          ),
        ),
      }),
      (0, r.jsxs)(`div`, {
        className: `ui-md__card`,
        children: [
          (0, r.jsxs)(`div`, {
            className: `ui-md__chart`,
            children: [
              (0, r.jsxs)(`div`, {
                className: `ui-md__chart-head`,
                children: [
                  (0, r.jsxs)(`span`, {
                    className: `ui-md__legend`,
                    children: [(0, r.jsx)(`i`, { "aria-hidden": `true` }), V.label],
                  }),
                  (0, r.jsxs)(`div`, {
                    className: `ui-md__chart-tools`,
                    children: [
                      (0, r.jsxs)(`div`, {
                        className: `ui-md__kind`,
                        role: `group`,
                        "aria-label": `Chart type`,
                        children: [
                          (0, r.jsx)(`span`, {
                            className: `ui-md__kind-thumb`,
                            "aria-hidden": `true`,
                            style: { transform: A === `bars` ? `translateX(100%)` : void 0 },
                          }),
                          (0, r.jsx)(`button`, {
                            type: `button`,
                            "aria-pressed": A === `line`,
                            "aria-label": `Line chart`,
                            onClick: () => j(`line`),
                            children: (0, r.jsxs)(`svg`, {
                              viewBox: `0 0 24 24`,
                              "aria-hidden": `true`,
                              children: [
                                (0, r.jsx)(`path`, { d: `M3.5 16.5 9 11l4 3.5 7.5-8` }),
                                (0, r.jsx)(`circle`, { cx: `9`, cy: `11`, r: `1.6` }),
                                (0, r.jsx)(`circle`, { cx: `13`, cy: `14.5`, r: `1.6` }),
                              ],
                            }),
                          }),
                          (0, r.jsx)(`button`, {
                            type: `button`,
                            "aria-pressed": A === `bars`,
                            "aria-label": `Bar chart`,
                            onClick: () => j(`bars`),
                            children: (0, r.jsx)(`svg`, {
                              viewBox: `0 0 24 24`,
                              "aria-hidden": `true`,
                              children: (0, r.jsx)(`path`, {
                                d: `M5.5 19.5v-6M10 19.5V8M14.5 19.5v-9M19 19.5V5`,
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, r.jsxs)(`label`, {
                        className: `ui-md__compare`,
                        children: [
                          (0, r.jsx)(`input`, {
                            type: `checkbox`,
                            checked: k,
                            onChange: (e) => se(e.target.checked),
                          }),
                          (0, r.jsx)(`span`, { className: `ui-md__switch`, "aria-hidden": `true` }),
                          `Compare to previous period`,
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsxs)(`div`, {
                className: `ui-md__plot-wrap`,
                children: [
                  (0, r.jsx)(`div`, {
                    className: `ui-md__axis`,
                    "aria-hidden": `true`,
                    children: [...J].reverse().map((e) => (0, r.jsx)(`span`, { children: ee(O, e, C) }, e)),
                  }),
                  (0, r.jsxs)(`div`, {
                    ref: I,
                    className: `ui-md__plot`,
                    tabIndex: 0,
                    role: `img`,
                    "aria-label": B.length
                      ? `${V.label} over the last ${L} days, from ${h(O, B[0].value, C)} to ${h(O, B[B.length - 1].value, C)}. Use the arrow keys to inspect points.`
                      : `${V.label}: no data for the last ${L} days`,
                    onPointerMove: (e) => e.pointerType === `mouse` && $(e.clientX),
                    onPointerDown: (e) => $(e.clientX),
                    onPointerLeave: (e) => e.pointerType === `mouse` && N(null),
                    onKeyDown: fe,
                    onBlur: () => N(null),
                    children: [
                      (0, r.jsxs)(`svg`, {
                        viewBox: `0 0 ${y} ${b}`,
                        preserveAspectRatio: `none`,
                        "aria-hidden": `true`,
                        children: [
                          (0, r.jsx)(`defs`, {
                            children: (0, r.jsxs)(`linearGradient`, {
                              id: `${T}-area`,
                              x1: `0`,
                              y1: `0`,
                              x2: `0`,
                              y2: `1`,
                              children: [
                                (0, r.jsx)(`stop`, { offset: `0%`, className: `ui-md__area-a` }),
                                (0, r.jsx)(`stop`, { offset: `100%`, className: `ui-md__area-b` }),
                              ],
                            }),
                          }),
                          J.map((e) =>
                            (0, r.jsx)(
                              `line`,
                              {
                                className: e === U ? `ui-md__base` : `ui-md__grid`,
                                x1: `0`,
                                x2: y,
                                y1: b - G(e) * b,
                                y2: b - G(e) * b,
                              },
                              e,
                            ),
                          ),
                          A === `line` &&
                            (0, r.jsxs)(
                              `g`,
                              {
                                className: `ui-md__series`,
                                children: [
                                  (0, r.jsx)(`path`, {
                                    className: `ui-md__area`,
                                    d: le,
                                    fill: `url(#${T}-area)`,
                                  }),
                                  k && (0, r.jsx)(`path`, { className: `ui-md__prev`, d: ce }),
                                  (0, r.jsx)(`path`, { className: `ui-md__line`, d: q }),
                                ],
                              },
                              `${D}-${O}`,
                            ),
                          Y !== null &&
                            A === `line` &&
                            (0, r.jsx)(`line`, {
                              className: `ui-md__guide`,
                              x1: K(Y, 0)[0],
                              x2: K(Y, 0)[0],
                              y1: `0`,
                              y2: b,
                            }),
                        ],
                      }),
                      B.length === 0 &&
                        (0, r.jsx)(`span`, {
                          className: `ui-md__nodata`,
                          children: `No data for this period`,
                        }),
                      A === `line` &&
                        (0, r.jsx)(
                          `div`,
                          {
                            className: `ui-md__dots`,
                            "aria-hidden": `true`,
                            children: B.map((e, t) =>
                              (0, r.jsx)(
                                `span`,
                                {
                                  style: {
                                    left: `${Z(t)}%`,
                                    top: `${(1 - G(e.value)) * 100}%`,
                                    animationDelay: `${(t / B.length) * 700}ms`,
                                  },
                                },
                                t,
                              ),
                            ),
                          },
                          `dots-${D}-${O}`,
                        ),
                      A === `bars` &&
                        (0, r.jsx)(
                          `div`,
                          {
                            className: `ui-md__bars`,
                            "data-compare": k ? `` : void 0,
                            "aria-hidden": `true`,
                            children: B.map((e, t) =>
                              (0, r.jsxs)(
                                `div`,
                                {
                                  className: `ui-md__bar-slot`,
                                  "data-active": Y === t ? `` : void 0,
                                  style: { "--d": `${(t / B.length) * 400}ms` },
                                  children: [
                                    k &&
                                      (0, r.jsx)(`span`, {
                                        className: `ui-md__col ui-md__col--prev`,
                                        style: { height: `${G(e.previous) * 100}%` },
                                      }),
                                    (0, r.jsx)(`span`, {
                                      className: `ui-md__col`,
                                      style: { height: `${G(e.value) * 100}%` },
                                    }),
                                  ],
                                },
                                t,
                              ),
                            ),
                          },
                          `bars-${D}-${O}`,
                        ),
                      Y !== null &&
                        (0, r.jsxs)(r.Fragment, {
                          children: [
                            A === `line` &&
                              k &&
                              (0, r.jsx)(`span`, {
                                className: `ui-md__dot ui-md__dot--prev`,
                                style: { left: `${Z(Y)}%`, top: `${(1 - G(B[Y].previous)) * 100}%` },
                              }),
                            A === `line` &&
                              (0, r.jsx)(`span`, {
                                className: `ui-md__dot`,
                                style: { left: `${Z(Y)}%`, top: `${(1 - G(B[Y].value)) * 100}%` },
                              }),
                            (0, r.jsxs)(`div`, {
                              className: `ui-md__tip`,
                              role: `status`,
                              "data-side": Y > (B.length - 1) / 2 ? `left` : `right`,
                              style: { left: `${Q(Y)}%` },
                              children: [
                                (0, r.jsx)(`span`, {
                                  className: `ui-md__tip-date`,
                                  children: L > 31 ? `Week of ${B[Y].label}` : B[Y].label,
                                }),
                                (0, r.jsxs)(`span`, {
                                  className: `ui-md__tip-row`,
                                  children: [
                                    (0, r.jsx)(`i`, { "aria-hidden": `true` }),
                                    V.label,
                                    (0, r.jsx)(`b`, { children: h(O, B[Y].value, C) }),
                                  ],
                                }),
                                k &&
                                  (0, r.jsxs)(`span`, {
                                    className: `ui-md__tip-row ui-md__tip-row--prev`,
                                    children: [
                                      (0, r.jsx)(`i`, { "aria-hidden": `true` }),
                                      `Previous`,
                                      (0, r.jsx)(`b`, { children: h(O, B[Y].previous, C) }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, r.jsx)(`div`, {
                    className: `ui-md__dates`,
                    "aria-hidden": `true`,
                    children: B.map((e, t) =>
                      t % ue === 0
                        ? (0, r.jsx)(
                            `span`,
                            {
                              "data-start": A === `line` && t === 0 && B.length > 1 ? `` : void 0,
                              "data-end": Q(t) > 88 ? `` : void 0,
                              style: { left: `${Q(t)}%` },
                              children: e.label,
                            },
                            t,
                          )
                        : null,
                    ),
                  }),
                ],
              }),
            ],
          }),
          (0, r.jsxs)(`div`, {
            className: `ui-md__lists`,
            children: [
              (0, r.jsx)(S, {
                title: `Top products`,
                rows: v,
                total: X,
                currency: C,
                empty: `No products yet`,
              }),
              (0, r.jsx)(S, { title: `Channels`, rows: x, total: X, currency: C, empty: `No channels yet` }),
            ],
          }),
        ],
      }),
    ],
  });
}
function ne({ meta: e, selected: t, value: n, before: i, currency: a, onSelect: o }) {
  let s = v(n),
    c = e.kind === `rate`,
    l = i !== null && (c || i !== 0),
    u = l ? (c ? n - i : ((n - i) / i) * 100) : 0,
    d = u >= 0,
    f = (d ? `up` : `down`) === e.goodWhen,
    p = c ? `${Math.abs(u).toFixed(1)} pts` : `${Math.abs(u).toFixed(1)}%`;
  return (0, r.jsxs)(`button`, {
    type: `button`,
    role: `tab`,
    "aria-selected": t,
    className: `ui-md__kpi`,
    onClick: o,
    children: [
      (0, r.jsx)(`span`, { className: `ui-md__kpi-label`, children: e.label }),
      (0, r.jsx)(`span`, { className: `ui-md__kpi-value`, children: h(e.key, s, a) }),
      (0, r.jsxs)(`span`, {
        className: `ui-md__delta`,
        "data-good": f ? `` : void 0,
        "data-none": l ? void 0 : ``,
        "aria-hidden": !l || void 0,
        children: [
          (0, r.jsx)(`svg`, {
            viewBox: `0 0 24 24`,
            "aria-hidden": `true`,
            style: { transform: d ? void 0 : `rotate(180deg)` },
            children: (0, r.jsx)(`path`, { d: `M7 14.5 12 9.5l5 5` }),
          }),
          p,
          (0, r.jsxs)(`span`, {
            className: `ui-md__sr`,
            children: [` `, d ? `up` : `down`, ` versus the previous period`],
          }),
        ],
      }),
    ],
  });
}
function S({ title: e, rows: t, total: n, currency: i, empty: a }) {
  let o = Math.max(0, ...t.map((e) => l(e.share)));
  return (0, r.jsxs)(`div`, {
    className: `ui-md__list`,
    children: [
      (0, r.jsxs)(`div`, {
        className: `ui-md__list-head`,
        children: [(0, r.jsx)(`span`, { children: e }), (0, r.jsx)(`span`, { children: `Revenue` })],
      }),
      t.length === 0
        ? (0, r.jsx)(`p`, { className: `ui-md__empty`, children: a })
        : (0, r.jsx)(`ul`, {
            children: t.map(({ name: e, share: t }, a) =>
              (0, r.jsx)(
                C,
                {
                  name: e,
                  value: n * l(t),
                  width: o > 0 ? Math.min(100, Math.max(0, (l(t) / o) * 100)) : 0,
                  currency: i,
                },
                `${a}-${e}`,
              ),
            ),
          }),
    ],
  });
}
function C({ name: e, value: t, width: n, currency: i }) {
  let a = v(t);
  return (0, r.jsxs)(`li`, {
    className: `ui-md__row`,
    children: [
      (0, r.jsx)(`span`, { className: `ui-md__row-bar`, style: { width: `${n}%` }, "aria-hidden": `true` }),
      (0, r.jsx)(`span`, { className: `ui-md__row-name`, title: e, children: e }),
      (0, r.jsx)(`span`, { className: `ui-md__row-value`, children: h(`revenue`, a, i) }),
    ],
  });
}
var re = `.ui-md{--ui-md-tray: #f0f0f0;--ui-md-card: #ffffff;--ui-md-card-line: #e5e5e5;--ui-md-line: #ececec;--ui-md-ink: #171717;--ui-md-text: #404040;--ui-md-muted: #8f8f8f;--ui-md-accent: #2f6bff;--ui-md-area: rgba(47, 107, 255, 0.16);--ui-md-prev: #b5b5b5;--ui-md-good: #1f8a4c;--ui-md-good-bg: #e9f6ee;--ui-md-bad: #d92d5c;--ui-md-bad-bg: #fdecf1;--ui-md-bar: #f3f6ff;--ui-md-chip: #ffffff;--ui-md-thumb: #ffffff;--ui-md-hover: rgba(0, 0, 0, 0.04);--ui-md-tip: #171717;--ui-md-tip-text: #ffffff;--ui-md-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);--ui-md-ease: cubic-bezier(0.65, 0, 0.25, 1);--ui-md-spring: cubic-bezier(0.34, 1.3, 0.64, 1);container-type: inline-size;padding: 0 6px 6px;border-radius: 24px;background: var(--ui-md-tray);font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;color: var(--ui-md-ink);-webkit-font-smoothing: antialiased}.ui-md *, .ui-md *::before, .ui-md *::after{box-sizing: border-box}.ui-md button{font: inherit;color: inherit;margin: 0;cursor: pointer;-webkit-tap-highlight-color: transparent}.ui-md :focus-visible{outline: 2px solid var(--ui-md-accent);outline-offset: 2px}.ui-md__sr{position: absolute;width: 1px;height: 1px;overflow: hidden;clip: rect(0 0 0 0);white-space: nowrap}.ui-md__bar{display: flex;align-items: center;justify-content: space-between;gap: 12px;padding: 12px 8px 12px 14px}.ui-md__heading{display: flex;flex-direction: column;gap: 1px;min-width: 0}.ui-md__title, .ui-md__site{overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-md__title{font-size: 15px;font-weight: 600;letter-spacing: -0.01em}.ui-md__site{font-size: 12.5px;color: var(--ui-md-muted)}.ui-md__actions{display: flex;flex: none;align-items: center;gap: 8px}.ui-md__range{position: relative;display: grid;grid-template-columns: repeat(3, 64px);padding: 3px;border-radius: 10px;background: rgba(0, 0, 0, 0.05)}.ui-md__range-thumb{position: absolute;top: 3px;left: 3px;width: 64px;height: calc(100% - 6px);border-radius: 7px;background: var(--ui-md-thumb);box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04);transition: transform 420ms var(--ui-md-spring)}.ui-md__range button{position: relative;height: 28px;padding: 0;border: 0;border-radius: 7px;background: none;font-size: 12.5px;font-weight: 500;color: var(--ui-md-muted);transition: color 200ms ease}.ui-md__range button[aria-pressed="true"]{color: var(--ui-md-ink)}.ui-md__export{display: inline-flex;align-items: center;gap: 6px;height: 34px;padding: 0 12px 0 10px;border: 0;border-radius: 10px;background: var(--ui-md-chip);box-shadow: 0 0 0 1px var(--ui-md-card-line), var(--ui-md-shadow);font-size: 13px;font-weight: 500;transition: background-color 160ms ease}.ui-md__export:hover{background: color-mix(in srgb, var(--ui-md-chip) 92%, var(--ui-md-ink))}.ui-md__export svg{width: 16px;height: 16px;fill: none;stroke: currentColor;stroke-width: 1.8;stroke-linecap: round;stroke-linejoin: round}.ui-md__card{overflow: hidden;border: 1px solid var(--ui-md-card-line);border-radius: 20px;background: var(--ui-md-card);box-shadow: var(--ui-md-shadow)}.ui-md__kpis{display: grid;grid-template-columns: repeat(4, minmax(0, 1fr));gap: 6px;margin-bottom: 6px}.ui-md__kpi{display: flex;flex-direction: column;align-items: flex-start;gap: 4px;min-width: 0;padding: 14px 16px 13px;border: 1px solid var(--ui-md-card-line);border-radius: 16px;background: var(--ui-md-card);box-shadow: var(--ui-md-shadow);text-align: left;opacity: 0.5;filter: saturate(0.2);transition: opacity 260ms ease, filter 260ms ease, transform 260ms var(--ui-md-spring)}.ui-md__kpi:hover{opacity: 0.8}.ui-md__kpi[aria-selected="true"]{opacity: 1;filter: none}.ui-md__kpi:active{transform: scale(0.98)}.ui-md__kpi-label{font-size: 12.5px;color: var(--ui-md-text)}.ui-md__kpi-value{font-size: 24px;font-weight: 600;letter-spacing: -0.02em;line-height: 1.15;font-variant-numeric: tabular-nums}.ui-md__delta{display: inline-flex;align-items: center;gap: 2px;height: 20px;padding: 0 7px 0 4px;border-radius: 999px;background: var(--ui-md-bad-bg);font-size: 11.5px;font-weight: 500;font-variant-numeric: tabular-nums;color: var(--ui-md-bad)}.ui-md__delta[data-good]{background: var(--ui-md-good-bg);color: var(--ui-md-good)}.ui-md__delta[data-none]{visibility: hidden}.ui-md__delta svg{width: 14px;height: 14px;fill: none;stroke: currentColor;stroke-width: 2;stroke-linecap: round;stroke-linejoin: round}.ui-md__chart{padding: 16px 18px 12px;border-bottom: 1px solid var(--ui-md-line)}.ui-md__chart-head{display: flex;align-items: center;justify-content: space-between;gap: 12px;margin-bottom: 14px}.ui-md__legend{display: inline-flex;align-items: center;gap: 7px;font-size: 12.5px;font-weight: 500;color: var(--ui-md-text)}.ui-md__legend i{width: 14px;height: 2.5px;border-radius: 2px;background: var(--ui-md-accent)}.ui-md__chart-tools{display: flex;align-items: center;gap: 14px}.ui-md__kind{position: relative;display: grid;grid-template-columns: 30px 30px;padding: 2px;border-radius: 9px;background: rgba(0, 0, 0, 0.05)}.ui-md__kind-thumb{position: absolute;top: 2px;left: 2px;width: 30px;height: calc(100% - 4px);border-radius: 7px;background: var(--ui-md-thumb);box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04);transition: transform 380ms var(--ui-md-spring)}.ui-md__kind button{position: relative;display: grid;place-items: center;height: 24px;padding: 0;border: 0;background: none;color: var(--ui-md-muted);transition: color 200ms ease}.ui-md__kind button[aria-pressed="true"]{color: var(--ui-md-ink)}.ui-md__kind svg{width: 16px;height: 16px;fill: none;stroke: currentColor;stroke-width: 1.8;stroke-linecap: round;stroke-linejoin: round}.ui-md__kind circle{fill: var(--ui-md-thumb)}.ui-md__compare{display: inline-flex;align-items: center;gap: 8px;font-size: 12.5px;color: var(--ui-md-muted);cursor: pointer;user-select: none}.ui-md__compare input{position: absolute;opacity: 0;pointer-events: none}.ui-md__switch{position: relative;width: 28px;height: 16px;border-radius: 999px;background: #d9d9d9;transition: background-color 200ms ease}.ui-md__switch::after{content: "";position: absolute;top: 2px;left: 2px;width: 12px;height: 12px;border-radius: 50%;background: #fff;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);transition: transform 300ms var(--ui-md-spring)}.ui-md__compare input:checked + .ui-md__switch{background: var(--ui-md-accent)}.ui-md__compare input:checked + .ui-md__switch::after{transform: translateX(12px)}.ui-md__compare input:focus-visible + .ui-md__switch{outline: 2px solid var(--ui-md-accent);outline-offset: 2px}.ui-md__plot-wrap{display: grid;grid-template-columns: auto minmax(0, 1fr);grid-template-rows: 200px auto;column-gap: 10px}.ui-md__axis{display: flex;flex-direction: column;justify-content: space-between;margin: -7px 0;font-size: 11px;font-variant-numeric: tabular-nums;text-align: right;color: var(--ui-md-muted)}.ui-md__plot{position: relative;outline-offset: 4px;border-radius: 4px;touch-action: pan-y}.ui-md__plot svg{display: block;width: 100%;height: 100%;overflow: visible}.ui-md__grid{stroke: var(--ui-md-line);stroke-width: 1;stroke-dasharray: 3 4;vector-effect: non-scaling-stroke}.ui-md__base{stroke: var(--ui-md-line);stroke-width: 1;vector-effect: non-scaling-stroke}.ui-md__area-a{stop-color: var(--ui-md-area)}.ui-md__area-b{stop-color: var(--ui-md-area);stop-opacity: 0}.ui-md__series{animation: ui-md-reveal 900ms var(--ui-md-ease) both}.ui-md__line{fill: none;stroke: var(--ui-md-accent);stroke-width: 2;stroke-linejoin: round;stroke-linecap: round;vector-effect: non-scaling-stroke}.ui-md__prev{fill: none;stroke: var(--ui-md-prev);stroke-width: 1.5;stroke-dasharray: 4 4;vector-effect: non-scaling-stroke;animation: ui-md-fade 400ms ease both}.ui-md__dots{position: absolute;inset: 0;pointer-events: none}.ui-md__dots span{position: absolute;width: 7px;height: 7px;margin: -3.5px 0 0 -3.5px;border: 1.5px solid var(--ui-md-accent);border-radius: 50%;background: var(--ui-md-card);animation: ui-md-pop 360ms var(--ui-md-spring) both}.ui-md__bars{position: absolute;inset: 0;display: flex;align-items: flex-end;pointer-events: none}.ui-md__bar-slot{flex: 1;display: flex;align-items: flex-end;justify-content: center;gap: 2px;min-width: 0;height: 100%}.ui-md__col{width: 56%;max-width: 22px;border-radius: 5px 5px 2px 2px;background: linear-gradient(180deg, var(--ui-md-accent), color-mix(in srgb, var(--ui-md-accent) 55%, var(--ui-md-card)));transform-origin: bottom;animation: ui-md-grow 620ms var(--ui-md-ease) both;animation-delay: var(--d);transition: opacity 200ms ease}.ui-md__bars[data-compare] .ui-md__col{width: 34%;max-width: 12px}.ui-md__col--prev{background: var(--ui-md-prev);opacity: 0.55}.ui-md__bars:has([data-active]) .ui-md__bar-slot:not([data-active]) .ui-md__col{opacity: 0.45}.ui-md__guide{stroke: var(--ui-md-muted);stroke-width: 1;stroke-dasharray: 2 3;opacity: 0.6;vector-effect: non-scaling-stroke}.ui-md__dot{position: absolute;width: 10px;height: 10px;margin: -5px 0 0 -5px;border: 2px solid var(--ui-md-card);border-radius: 50%;background: var(--ui-md-accent);box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);pointer-events: none}.ui-md__dot--prev{background: var(--ui-md-prev)}.ui-md__tip{position: absolute;top: 6px;z-index: 2;display: grid;gap: 4px;min-width: 150px;padding: 9px 11px;border-radius: 10px;background: var(--ui-md-tip);box-shadow: 0 8px 24px rgba(0, 0, 0, 0.16);font-size: 12px;color: var(--ui-md-tip-text);pointer-events: none}.ui-md__tip[data-side="right"]{transform: translateX(14px)}.ui-md__tip[data-side="left"]{transform: translateX(calc(-100% - 14px))}.ui-md__tip-date{font-size: 11.5px;opacity: 0.6}.ui-md__tip-row{display: flex;align-items: center;gap: 7px}.ui-md__tip-row i{width: 8px;height: 8px;border-radius: 50%;background: var(--ui-md-accent)}.ui-md__tip-row--prev i{background: var(--ui-md-prev)}.ui-md__tip-row b{margin-left: auto;padding-left: 12px;font-weight: 600;font-variant-numeric: tabular-nums}.ui-md__dates{position: relative;grid-column: 2;height: 26px;font-size: 11px;color: var(--ui-md-muted)}.ui-md__dates span{position: absolute;top: 9px;transform: translateX(-50%);white-space: nowrap}.ui-md__dates span[data-start]{transform: none}.ui-md__dates span[data-end]{transform: translateX(-100%)}.ui-md__lists{display: grid;grid-template-columns: minmax(0, 1fr) minmax(0, 1fr)}.ui-md__list{min-width: 0;padding: 14px 12px 12px}.ui-md__list + .ui-md__list{border-left: 1px solid var(--ui-md-line)}.ui-md__list-head{display: flex;justify-content: space-between;padding: 0 8px 8px;font-size: 12.5px;font-weight: 500}.ui-md__list-head span + span{font-weight: 400;color: var(--ui-md-muted)}.ui-md__list ul{display: grid;grid-template-columns: minmax(0, 1fr);gap: 2px;margin: 0;padding: 0;list-style: none}.ui-md__row{position: relative;display: flex;align-items: center;justify-content: space-between;gap: 12px;height: 32px;padding: 0 8px;font-size: 13px}.ui-md__row-bar{position: absolute;inset: 0 auto 0 0;border-radius: 8px;background: var(--ui-md-bar);transition: width 600ms var(--ui-md-ease)}.ui-md__row-name{position: relative;min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;color: var(--ui-md-text)}.ui-md__row-value{position: relative;flex: none;font-variant-numeric: tabular-nums;color: var(--ui-md-ink)}.ui-md__empty{margin: 0;padding: 6px 8px 8px;font-size: 13px;color: var(--ui-md-muted)}.ui-md__nodata{position: absolute;inset: 0;display: grid;place-items: center;font-size: 13px;color: var(--ui-md-muted)}@keyframes ui-md-reveal{from{clip-path: inset(-10% 100% -10% 0)}to{clip-path: inset(-10% -1% -10% 0)}}@keyframes ui-md-fade{from{opacity: 0}}@keyframes ui-md-pop{from{transform: scale(0)}}@keyframes ui-md-grow{from{transform: scaleY(0)}}@container (max-width: 640px){.ui-md__kpis{grid-template-columns: 1fr 1fr}.ui-md__lists{grid-template-columns: minmax(0, 1fr)}.ui-md__list + .ui-md__list{border-left: 0;border-top: 1px solid var(--ui-md-line)}.ui-md__compare{font-size: 0;gap: 0}.ui-md__compare::after{content: "Compare";font-size: 12.5px;margin-left: 8px}}@container (max-width: 460px){.ui-md__bar{flex-wrap: wrap;padding: 12px 4px 12px 10px}.ui-md__actions{width: 100%}.ui-md__range{flex: 1;grid-template-columns: repeat(3, 1fr)}.ui-md__range-thumb{width: calc((100% - 6px) / 3)}.ui-md__kpi{padding: 12px 14px}.ui-md__kpi-value{font-size: 20px}.ui-md__chart{padding: 14px 12px 10px}.ui-md__plot-wrap{grid-template-rows: 168px auto}.ui-md__dates span:nth-child(even){display: none}}@media (prefers-reduced-motion: reduce){.ui-md__range-thumb, .ui-md__kind-thumb, .ui-md__kpi, .ui-md__row-bar, .ui-md__switch::after{transition: none}.ui-md__series, .ui-md__prev, .ui-md__dots span, .ui-md__col{animation: none}}.ui-md input:not([type="checkbox"]):not([type="radio"]):focus-visible, .ui-md textarea:focus-visible, .ui-md [contenteditable]:focus-visible{outline: none}:where(.dark, [data-theme="dark"]) .ui-md{--ui-md-tray: #161618;--ui-md-card: #232326;--ui-md-card-line: rgba(255, 255, 255, 0.08);--ui-md-line: rgba(255, 255, 255, 0.07);--ui-md-ink: #ededed;--ui-md-text: #c4c4c4;--ui-md-muted: #8f8f8f;--ui-md-accent: #4d82ff;--ui-md-area: rgba(77, 130, 255, 0.2);--ui-md-prev: #5c5c61;--ui-md-good: #3fbf74;--ui-md-good-bg: rgba(63, 191, 116, 0.14);--ui-md-bad: #f2777b;--ui-md-bad-bg: rgba(242, 119, 123, 0.14);--ui-md-bar: rgba(77, 130, 255, 0.12);--ui-md-chip: #2a2a2d;--ui-md-thumb: #313135;--ui-md-hover: rgba(255, 255, 255, 0.04);--ui-md-tip: #ededed;--ui-md-tip-text: #121213;--ui-md-shadow: 0 1px 2px rgba(0, 0, 0, 0.4)}:where(.dark, [data-theme="dark"]) .ui-md__range, :where(.dark, [data-theme="dark"]) .ui-md__kind{background: rgba(255, 255, 255, 0.06)}:where(.dark, [data-theme="dark"]) .ui-md__switch{background: #3a3a3e}`,
  w = 880;
function T() {
  let e = (0, n.useRef)(null),
    [t, i] = (0, n.useState)(null);
  return (
    (0, n.useLayoutEffect)(() => {
      let t = e.current,
        n = t?.closest(`.card__preview`),
        r = n ?? t?.closest(`.stage`);
      if (!t || !r) return;
      let a = () => {
        let e = r.clientWidth;
        if (n) return i({ scale: (e - 48) / w, card: !0 });
        if (e < 760) return i(null);
        i({ scale: Math.min(0.82, (e - 140) / w), card: !1 });
      };
      a();
      let o = new ResizeObserver(a);
      return (o.observe(r), () => o.disconnect());
    }, []),
    (0, r.jsx)(`div`, {
      ref: e,
      className: `metrics-demo`,
      "data-fit": t ? (t.card ? `card` : `stage`) : void 0,
      children: (0, r.jsx)(`div`, {
        className: `metrics-demo__frame`,
        style: t
          ? t.card
            ? { width: w, transform: `scale(${t.scale})` }
            : { width: w, zoom: t.scale }
          : void 0,
        children: (0, r.jsx)(x, {}),
      }),
    })
  );
}
