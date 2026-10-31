/*
 * affectUI · task-board (Pro)
 * Implementation recovered from public bundle asset: component-oa1F6huF.js
 * Styles inlined in the module -> task-board.css (1 block(s))
 * Demo usage: task-board.demo.jsx
 * Minified identifiers kept; formatting by prettier.
 */

import { t as e } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
var n = e(),
  r = t(),
  i = [`#2f6bff`, `#8b5cf6`, `#ec4899`, `#7aa2ff`, `#c4b5fd`, `#a3a3a3`, `#f9a8d4`];
function a(e) {
  if (e <= 0) return 5;
  let t = e / 5,
    n = 10 ** Math.floor(Math.log10(t));
  return [1, 2, 2.5, 5, 10].find((e) => e * n >= t) * n * 5;
}
var o = new Intl.NumberFormat(`en-US`, { maximumFractionDigits: 1 }),
  s = new Intl.NumberFormat(`en-US`, { notation: `compact`, maximumFractionDigits: 1 }),
  c = (e) => (e > 0 && e < 0.05 ? `<0.1` : o.format(e)),
  l = (e) => s.format(e),
  u = (e) => {
    let t = Number(e);
    return Number.isFinite(t) ? t : 0;
  };
function d({
  records: e,
  dimensions: t,
  measures: o,
  title: s = `Workload`,
  defaultMeasure: d,
  defaultSlice: p,
  defaultSegment: m,
  className: h,
}) {
  let [v, y] = (0, n.useState)(d ?? o[0]?.key ?? ``),
    [b, x] = (0, n.useState)(p ?? t[0]?.key ?? ``),
    [S, C] = (0, n.useState)(m ?? t[1]?.key ?? `none`),
    [w, T] = (0, n.useState)(new Set()),
    [E, D] = (0, n.useState)(null),
    O = (0, n.useRef)(null),
    k = g(O),
    A = (0, n.useRef)(null),
    j = (0, n.useRef)(null),
    M = o.find((e) => e.key === v) ?? o[0],
    N = t.find((e) => e.key === b) ?? t[0],
    P = S === `none` ? null : (t.find((e) => e.key === S && e.key !== N?.key) ?? null),
    F = P ? P.values : [`All`],
    I = (e, t) => P?.colors?.[e] ?? (P ? i[t % i.length] : `#2f6bff`);
  (0, n.useEffect)(() => T(new Set()), [S]);
  let L = (0, n.useMemo)(
      () =>
        !N || !M
          ? []
          : N.values.map((t) => {
              let n = {};
              for (let e of F) n[e] = 0;
              for (let r of e) {
                if (String(r[N.key]) !== t) continue;
                let e = P ? String(r[P.key]) : `All`;
                e in n && (n[e] += M.field ? u(r[M.field]) : 1);
              }
              return { value: t, cells: n, total: F.reduce((e, t) => e + (w.has(t) ? 0 : n[t]), 0) };
            }),
      [e, N, P, F, M, w],
    ),
    R = L.reduce((e, t) => e + t.total, 0),
    z = a(Math.max(0, ...L.map((e) => e.total))),
    B = [5, 4, 3, 2, 1, 0].map((e) => (z / 5) * e),
    V = L.find((e) => e.value === E) ?? null,
    H = V ? L.indexOf(V) : -1;
  (0, n.useLayoutEffect)(() => {
    let e = A.current,
      t = j.current;
    if (!e || H < 0) return;
    let n = (e.closest(`.ui-bc__card`) ?? e.closest(`section`)).getBoundingClientRect(),
      r = e.getBoundingClientRect(),
      i = ((H + 0.5) / L.length) * r.width;
    if (t) {
      let e = t.offsetWidth,
        a = (H + 0.5) / L.length > 0.5 ? i - 22 - e : i + 22;
      t.style.left = `${Math.max(n.left - r.left + 4, Math.min(a, n.right - r.left - 4 - e))}px`;
    }
    let a = e.parentElement?.querySelector(`.ui-bc__xlabel[data-active] .ui-bc__pill`);
    if (a) {
      let e = a.offsetWidth / 2,
        t = r.left + i,
        o = Math.max(n.left + 4 + e - t, Math.min(0, n.right - 4 - e - t));
      a.style.marginLeft = `${o}px`;
    }
  });
  let U = (e) =>
      T((t) => {
        let n = new Set(t);
        return (n.has(e) ? n.delete(e) : n.size < F.length - 1 && n.add(e), n);
      }),
    W = t.map((e) => ({ value: e.key, label: e.label }));
  return !M || !N
    ? null
    : (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)(`style`, { href: `ui-breakdown-chart`, precedence: `default`, children: _ }),
          (0, r.jsxs)(`section`, {
            className: [`ui-bc`, h].filter(Boolean).join(` `),
            "aria-label": s,
            children: [
              (0, r.jsxs)(`header`, {
                className: `ui-bc__head`,
                children: [
                  (0, r.jsx)(`span`, { className: `ui-bc__title`, dir: `auto`, title: s, children: s }),
                  (0, r.jsxs)(`span`, {
                    className: `ui-bc__total`,
                    children: [(0, r.jsx)(`strong`, { children: c(R) }), ` `, M.unit],
                  }),
                ],
              }),
              (0, r.jsxs)(`div`, {
                className: `ui-bc__card`,
                children: [
                  (0, r.jsxs)(`div`, {
                    className: `ui-bc__controls`,
                    children: [
                      (0, r.jsx)(f, {
                        label: `Measure`,
                        value: M.key,
                        onChange: y,
                        options: o.map((e) => ({ value: e.key, label: e.label })),
                      }),
                      (0, r.jsx)(f, {
                        label: `Slice`,
                        value: N.key,
                        onChange: (e) => {
                          (x(e), e === S && C(`none`));
                        },
                        options: W,
                      }),
                      (0, r.jsx)(f, {
                        label: `Segment`,
                        value: P?.key ?? `none`,
                        onChange: C,
                        options: [{ value: `none`, label: `None` }, ...W.filter((e) => e.value !== b)],
                      }),
                    ],
                  }),
                  (0, r.jsxs)(`div`, {
                    className: `ui-bc__chart`,
                    onPointerLeave: () => D(null),
                    children: [
                      (0, r.jsxs)(`div`, {
                        className: `ui-bc__plot`,
                        ref: A,
                        children: [
                          B.map((e) =>
                            (0, r.jsx)(
                              `span`,
                              {
                                className: `ui-bc__grid`,
                                style: { bottom: `${(e / z) * 100}%` },
                                "data-zero": e === 0 || void 0,
                                children: (0, r.jsx)(`span`, { className: `ui-bc__tick`, children: l(e) }),
                              },
                              e,
                            ),
                          ),
                          (0, r.jsx)(`div`, {
                            className: `ui-bc__bars`,
                            style: { gridTemplateColumns: `repeat(${L.length}, minmax(0, 1fr))` },
                            children: L.map((e, t) =>
                              (0, r.jsxs)(
                                `button`,
                                {
                                  type: `button`,
                                  className: `ui-bc__col`,
                                  "data-dim": (E && E !== e.value) || void 0,
                                  "data-active": E === e.value || void 0,
                                  "aria-label": `${e.value}: ${c(e.total)} ${M.unit}`,
                                  onPointerEnter: () => D(e.value),
                                  onFocus: () => D(e.value),
                                  onBlur: () => D(null),
                                  children: [
                                    (0, r.jsx)(`span`, {
                                      className: `ui-bc__rest`,
                                      style: { bottom: `${(Math.max(0, e.total) / z) * 100}%` },
                                    }),
                                    (0, r.jsx)(`span`, {
                                      className: `ui-bc__bar`,
                                      style: { height: `${(Math.max(0, e.total) / z) * 100}%` },
                                      children: F.map((t, n) =>
                                        w.has(t) || !(e.cells[t] > 0)
                                          ? null
                                          : (0, r.jsx)(
                                              `span`,
                                              {
                                                className: `ui-bc__seg`,
                                                style: { flexGrow: e.cells[t], background: I(t, n) },
                                              },
                                              n,
                                            ),
                                      ),
                                    }),
                                  ],
                                },
                                t,
                              ),
                            ),
                          }),
                          V &&
                            (0, r.jsxs)(`div`, {
                              ref: j,
                              className: `ui-bc__tooltip`,
                              role: `status`,
                              "data-side": (H + 0.5) / L.length > 0.5 ? `left` : `right`,
                              children: [
                                (0, r.jsxs)(`p`, {
                                  className: `ui-bc__tip-head`,
                                  children: [
                                    (0, r.jsxs)(`span`, {
                                      className: `ui-bc__tip-label`,
                                      children: [
                                        N.icons?.[V.value],
                                        (0, r.jsx)(`span`, { dir: `auto`, children: V.value }),
                                      ],
                                    }),
                                    (0, r.jsx)(`strong`, { children: c(V.total) }),
                                  ],
                                }),
                                P &&
                                  (0, r.jsx)(`ul`, {
                                    children: F.map((e, t) => ({ seg: e, i: t, v: V.cells[e] }))
                                      .filter((e) => e.v && !w.has(e.seg))
                                      .sort((e, t) => t.v - e.v)
                                      .map((e) =>
                                        (0, r.jsxs)(
                                          `li`,
                                          {
                                            children: [
                                              (0, r.jsx)(`span`, {
                                                className: `ui-bc__swatch`,
                                                style: { background: I(e.seg, e.i) },
                                              }),
                                              (0, r.jsx)(`span`, {
                                                className: `ui-bc__tip-seg`,
                                                dir: `auto`,
                                                children: e.seg,
                                              }),
                                              (0, r.jsx)(`span`, { children: c(e.v) }),
                                            ],
                                          },
                                          e.i,
                                        ),
                                      ),
                                  }),
                              ],
                            }),
                        ],
                      }),
                      (0, r.jsx)(`div`, {
                        className: `ui-bc__xaxis`,
                        style: { gridTemplateColumns: `repeat(${L.length}, minmax(0, 1fr))` },
                        children: L.map((e, t) =>
                          (0, r.jsx)(
                            `span`,
                            {
                              className: `ui-bc__xlabel`,
                              "data-active": E === e.value || void 0,
                              title: e.value,
                              children:
                                E === e.value
                                  ? (0, r.jsxs)(`span`, {
                                      className: `ui-bc__pill`,
                                      children: [
                                        N.icons?.[e.value],
                                        (0, r.jsx)(`span`, { dir: `auto`, children: e.value }),
                                      ],
                                    })
                                  : (N.icons?.[e.value] ??
                                    (0, r.jsx)(`span`, {
                                      className: `ui-bc__xtext`,
                                      dir: `auto`,
                                      children: e.value,
                                    })),
                            },
                            t,
                          ),
                        ),
                      }),
                    ],
                  }),
                  (0, r.jsx)(`div`, {
                    className: `ui-bc__morph`,
                    ref: k,
                    children: (0, r.jsx)(`div`, {
                      className: `ui-bc__table-wrap`,
                      ref: O,
                      children: (0, r.jsxs)(`table`, {
                        className: `ui-bc__table`,
                        children: [
                          (0, r.jsx)(`thead`, {
                            children: (0, r.jsxs)(`tr`, {
                              children: [
                                (0, r.jsx)(`th`, { scope: `col`, children: N.label }),
                                (0, r.jsx)(`th`, { scope: `col`, "data-num": !0, children: M.label }),
                                P &&
                                  F.map((e, t) =>
                                    (0, r.jsx)(
                                      `th`,
                                      {
                                        scope: `col`,
                                        "data-num": !0,
                                        "data-hidden": w.has(e) || void 0,
                                        children: (0, r.jsxs)(`span`, {
                                          className: `ui-bc__th-seg`,
                                          title: e,
                                          children: [
                                            (0, r.jsx)(`span`, {
                                              className: `ui-bc__swatch`,
                                              style: { background: I(e, t) },
                                            }),
                                            (0, r.jsx)(`span`, { dir: `auto`, children: e }),
                                          ],
                                        }),
                                      },
                                      t,
                                    ),
                                  ),
                              ],
                            }),
                          }),
                          (0, r.jsx)(`tbody`, {
                            children: L.map((e, t) =>
                              (0, r.jsxs)(
                                `tr`,
                                {
                                  "data-active": E === e.value || void 0,
                                  onPointerEnter: () => D(e.value),
                                  onPointerLeave: () => D(null),
                                  children: [
                                    (0, r.jsx)(`th`, {
                                      scope: `row`,
                                      children: (0, r.jsxs)(`span`, {
                                        className: `ui-bc__row-label`,
                                        title: e.value,
                                        children: [
                                          N.icons?.[e.value],
                                          (0, r.jsx)(`span`, { dir: `auto`, children: e.value }),
                                        ],
                                      }),
                                    }),
                                    (0, r.jsx)(`td`, { "data-num": !0, children: c(e.total) }),
                                    P &&
                                      F.map((t, n) =>
                                        (0, r.jsx)(
                                          `td`,
                                          {
                                            "data-num": !0,
                                            "data-hidden": w.has(t) || void 0,
                                            children: c(e.cells[t]),
                                          },
                                          n,
                                        ),
                                      ),
                                  ],
                                },
                                t,
                              ),
                            ),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
              (0, r.jsxs)(`footer`, {
                className: `ui-bc__foot`,
                children: [
                  P
                    ? (0, r.jsx)(`div`, {
                        className: `ui-bc__legend`,
                        role: `group`,
                        "aria-label": `${P.label} – click to show or hide`,
                        children: F.map((e, t) =>
                          (0, r.jsxs)(
                            `button`,
                            {
                              type: `button`,
                              className: `ui-bc__chip`,
                              "aria-pressed": !w.has(e),
                              title: e,
                              onClick: () => U(e),
                              children: [
                                (0, r.jsx)(`span`, {
                                  className: `ui-bc__swatch`,
                                  style: { background: I(e, t) },
                                }),
                                (0, r.jsx)(`span`, { dir: `auto`, children: e }),
                              ],
                            },
                            t,
                          ),
                        ),
                      })
                    : (0, r.jsx)(`span`, {
                        className: `ui-bc__hint`,
                        children: `Pick a segment to split the bars`,
                      }),
                  w.size > 0 &&
                    (0, r.jsx)(`button`, {
                      type: `button`,
                      className: `ui-bc__reset`,
                      onClick: () => T(new Set()),
                      children: `Show all`,
                    }),
                ],
              }),
            ],
          }),
        ],
      });
}
function f({ label: e, value: t, options: i, onChange: a }) {
  let [o, s] = (0, n.useState)(!1),
    c = (0, n.useRef)(null),
    l = (0, n.useId)();
  (0, n.useEffect)(() => {
    if (!o) return;
    let e = (e) => !c.current?.contains(e.target) && s(!1),
      t = (e) => e.key === `Escape` && s(!1);
    return (
      window.addEventListener(`pointerdown`, e),
      window.addEventListener(`keydown`, t),
      () => {
        (window.removeEventListener(`pointerdown`, e), window.removeEventListener(`keydown`, t));
      }
    );
  }, [o]);
  let u = i.find((e) => e.value === t)?.label ?? t;
  return (0, r.jsxs)(`div`, {
    className: `ui-bc__select`,
    ref: c,
    children: [
      (0, r.jsx)(`span`, { className: `ui-bc__select-label`, id: l, children: e }),
      (0, r.jsxs)(`button`, {
        type: `button`,
        className: `ui-bc__select-btn`,
        "aria-haspopup": `listbox`,
        "aria-expanded": o,
        "aria-labelledby": l,
        title: u,
        onClick: () => s((e) => !e),
        children: [(0, r.jsx)(`span`, { dir: `auto`, children: u }), (0, r.jsx)(p, {})],
      }),
      o &&
        (0, r.jsx)(`div`, {
          className: `ui-bc__menu`,
          role: `listbox`,
          "aria-labelledby": l,
          children: i.map((e) =>
            (0, r.jsxs)(
              `button`,
              {
                type: `button`,
                role: `option`,
                "aria-selected": e.value === t,
                className: `ui-bc__option`,
                autoFocus: e.value === t,
                onClick: () => {
                  (a(e.value), s(!1));
                },
                onKeyDown: (e) => {
                  let t = [...(e.currentTarget.parentElement?.querySelectorAll(`button`) ?? [])],
                    n = t.indexOf(e.currentTarget);
                  (e.key === `ArrowDown` && t[Math.min(t.length - 1, n + 1)]?.focus(),
                    e.key === `ArrowUp` && t[Math.max(0, n - 1)]?.focus(),
                    e.key.startsWith(`Arrow`) && e.preventDefault());
                },
                children: [
                  (0, r.jsx)(`span`, { dir: `auto`, title: e.label, children: e.label }),
                  e.value === t && (0, r.jsx)(m, {}),
                ],
              },
              e.value,
            ),
          ),
        }),
    ],
  });
}
var p = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 16 16`,
      width: `14`,
      height: `14`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.5`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, { d: `m4.5 6.25 3.5 3.5 3.5-3.5` }),
    }),
  m = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 16 16`,
      width: `14`,
      height: `14`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.5`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, { d: `m3.5 8.5 3 3 6-7` }),
    }),
  h = ({ kind: e, color: t = `currentColor` }) =>
    (0, r.jsxs)(`svg`, {
      viewBox: `0 0 16 16`,
      width: `15`,
      height: `15`,
      fill: `none`,
      stroke: t,
      strokeWidth: `1.4`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      "aria-hidden": `true`,
      children: [
        e === `backlog` &&
          (0, r.jsx)(`path`, { d: `M2.5 9.5 4 3.5h8l1.5 6M2.5 9.5v3h11v-3M2.5 9.5H6l.8 1.5h2.4l.8-1.5h3.5` }),
        e === `todo` && (0, r.jsx)(`rect`, { x: `3`, y: `3`, width: `10`, height: `10`, rx: `2.5` }),
        e === `progress` &&
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(`circle`, { cx: `8`, cy: `8`, r: `5.5` }),
              (0, r.jsx)(`path`, { d: `M8 5v3l2 1.5` }),
            ],
          }),
        e === `review` &&
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(`path`, { d: `M1.8 8S4 3.8 8 3.8 14.2 8 14.2 8 12 12.2 8 12.2 1.8 8 1.8 8Z` }),
              (0, r.jsx)(`circle`, { cx: `8`, cy: `8`, r: `1.8` }),
            ],
          }),
        e === `done` &&
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(`rect`, {
                x: `2.5`,
                y: `2.5`,
                width: `11`,
                height: `11`,
                rx: `3`,
                fill: t,
                stroke: `none`,
              }),
              (0, r.jsx)(`path`, { d: `m5.5 8.2 1.8 1.8 3.3-3.6`, stroke: `#fff`, strokeWidth: `1.5` }),
            ],
          }),
        e === `canceled` &&
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(`circle`, { cx: `8`, cy: `8`, r: `5.5` }),
              (0, r.jsx)(`path`, { d: `m4.2 11.8 7.6-7.6` }),
            ],
          }),
      ],
    });
function g(e) {
  let t = (0, n.useRef)(null);
  return (
    (0, n.useLayoutEffect)(() => {
      let n = t.current,
        r = e.current;
      if (!n || !r) return;
      let i = () => {
        n.style.height = `${r.offsetHeight}px`;
      };
      i();
      let a = new ResizeObserver(i);
      a.observe(r);
      let o = requestAnimationFrame(() => n.setAttribute(`data-smooth`, ``));
      return () => {
        (a.disconnect(), cancelAnimationFrame(o));
      };
    }, [e]),
    t
  );
}
var _ = `.ui-bc{--ui-bc-tray: #f0f0f0;--ui-bc-card: #ffffff;--ui-bc-line: #ececec;--ui-bc-grid: #ebebeb;--ui-bc-ink: #171717;--ui-bc-text: #404040;--ui-bc-muted: #8f8f8f;--ui-bc-accent: #2f6bff;--ui-bc-accent-ink: #2f6bff;--ui-bc-border: #e5e5e5;--ui-bc-surface-hover: #f8f8f8;--ui-bc-option-hover: #f5f5f5;--ui-bc-zero: #dcdcdc;--ui-bc-rest: #f2f2f2;--ui-bc-head-bg: #fcfcfc;--ui-bc-row-active: #f6f6f6;--ui-bc-wash: rgba(0, 0, 0, 0.05);--ui-bc-accent-wash: rgba(47, 107, 255, 0.08);--ui-bc-card-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);--ui-bc-btn-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);--ui-bc-pop-shadow: 0 10px 28px -8px rgba(0, 0, 0, 0.18);--ui-bc-tip-shadow: 0 10px 26px -8px rgba(0, 0, 0, 0.18);--ui-bc-pill-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);--ui-bc-ease: cubic-bezier(0.22, 1, 0.36, 1);box-sizing: border-box;width: 100%;max-width: 560px;background: var(--ui-bc-tray);padding: 6px;border-radius: 22px;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;color: var(--ui-bc-ink);-webkit-font-smoothing: antialiased;font-variant-numeric: tabular-nums}.ui-bc *, .ui-bc *::before, .ui-bc *::after{box-sizing: border-box}.ui-bc button{margin: 0;font: inherit;color: inherit;cursor: pointer}.ui-bc button:focus-visible{outline: 2px solid var(--ui-bc-accent);outline-offset: 2px}.ui-bc__head{display: flex;align-items: baseline;justify-content: space-between;flex-wrap: wrap;gap: 2px 12px;padding: 11px 18px 10px;font-size: 14px;line-height: 20px}.ui-bc__title{flex: 1 1 0;min-width: min(120px, 100%);overflow: hidden;font-weight: 500;white-space: nowrap;text-overflow: ellipsis}.ui-bc__total{flex: none;max-width: 100%;color: var(--ui-bc-muted)}.ui-bc__total strong{white-space: nowrap;font-size: 15px;font-weight: 600;color: var(--ui-bc-ink)}.ui-bc__card{overflow: hidden;background: var(--ui-bc-card);border: 1px solid var(--ui-bc-border);border-radius: 16px;box-shadow: var(--ui-bc-card-shadow)}.ui-bc__controls{display: grid;grid-template-columns: repeat(3, minmax(0, 1fr));gap: 10px;padding: 16px 18px 4px}.ui-bc__select{position: relative;display: grid;grid-template-columns: minmax(0, 1fr);gap: 6px;min-width: 0}.ui-bc__select-label{font-size: 12px;line-height: 16px;color: var(--ui-bc-muted)}.ui-bc__select-btn{display: flex;align-items: center;justify-content: space-between;gap: 8px;height: 34px;padding: 0 10px 0 12px;border: 0;border-radius: 10px;background: var(--ui-bc-card);box-shadow: 0 0 0 1px var(--ui-bc-border), var(--ui-bc-btn-shadow);font-size: 13px !important;font-weight: 500;text-align: left;transition: background-color 140ms ease}.ui-bc__select-btn span{overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-bc__select-btn svg{flex: none;color: var(--ui-bc-muted);transition: transform 200ms var(--ui-bc-ease)}.ui-bc__select-btn[aria-expanded="true"] svg{transform: rotate(180deg)}.ui-bc__select-btn:hover{background: var(--ui-bc-surface-hover)}.ui-bc__menu{position: absolute;top: calc(100% + 6px);left: 0;right: 0;z-index: 6;display: grid;gap: 2px;padding: 4px;border-radius: 12px;background: var(--ui-bc-card);box-shadow: 0 0 0 1px var(--ui-bc-border), var(--ui-bc-pop-shadow);animation: ui-bc-drop 180ms var(--ui-bc-ease)}.ui-bc__option{display: flex;align-items: center;justify-content: space-between;height: 30px;padding: 0 10px;border: 0;border-radius: 8px;background: transparent;font-size: 13px !important;text-align: left}.ui-bc__option{gap: 8px}.ui-bc__option span{min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-bc__option svg{flex: none}.ui-bc__option:hover, .ui-bc__option:focus-visible{background: var(--ui-bc-option-hover);outline: none}.ui-bc__option[aria-selected="true"]{color: var(--ui-bc-accent-ink) !important;font-weight: 500}.ui-bc__chart{padding: 22px 18px 12px}.ui-bc__plot{position: relative;height: 200px;margin-right: 30px}.ui-bc__grid{position: absolute;left: 0;right: 0;height: 0;border-top: 1px dashed var(--ui-bc-grid)}.ui-bc__grid[data-zero]{border-top-style: solid;border-color: var(--ui-bc-zero)}.ui-bc__tick{position: absolute;right: -30px;top: -8px;width: 26px;font-size: 11px;line-height: 16px;text-align: right;color: var(--ui-bc-muted)}.ui-bc__bars{position: absolute;inset: 0;display: grid;gap: 4px}.ui-bc__col{position: relative;display: flex;align-items: flex-end;justify-content: center;height: 100%;padding: 0;border: 0;background: transparent;transition: opacity 200ms ease}.ui-bc__col:focus-visible{outline-offset: 4px}.ui-bc__col[data-dim]{opacity: 0.38}.ui-bc__rest{position: absolute;top: 0;left: 50%;width: min(10px, 100%);transform: translateX(-50%);background: var(--ui-bc-rest);opacity: 0;transition: opacity 180ms ease, bottom 520ms var(--ui-bc-ease)}.ui-bc__col[data-active] .ui-bc__rest{opacity: 1}.ui-bc__bar{position: relative;display: flex;flex-direction: column-reverse;gap: 1px;width: min(10px, 100%);min-height: 0;overflow: hidden;transition: height 520ms var(--ui-bc-ease)}.ui-bc__seg{flex-basis: 0;min-height: 2px;transition: flex-grow 520ms var(--ui-bc-ease), background-color 300ms ease}.ui-bc__tooltip{position: absolute;z-index: 4;min-width: 150px;padding: 9px 11px 10px;border-radius: 12px;background: var(--ui-bc-card);box-shadow: 0 0 0 1px var(--ui-bc-border), var(--ui-bc-tip-shadow);top: 0;pointer-events: none;max-width: min(260px, 100%);transition: left 200ms var(--ui-bc-ease);animation: ui-bc-pop 160ms var(--ui-bc-ease)}.ui-bc__tip-head{display: flex;align-items: center;justify-content: space-between;gap: 14px;margin: 0;font-size: 13px;font-weight: 500;line-height: 20px}.ui-bc__tip-head > strong{flex: none}.ui-bc__tip-label{display: inline-flex;align-items: center;gap: 6px;min-width: 0;white-space: nowrap}.ui-bc__tip-label > span, .ui-bc__tip-seg, .ui-bc__pill > span, .ui-bc__row-label > span, .ui-bc__th-seg > span:last-child, .ui-bc__chip > span:last-child{min-width: 0;overflow: hidden;text-overflow: ellipsis}.ui-bc__tooltip ul{display: grid;grid-template-columns: minmax(0, 1fr);gap: 2px;margin: 6px 0 0;padding: 6px 0 0;border-top: 1px solid var(--ui-bc-line);list-style: none}.ui-bc__tooltip li{display: flex;align-items: center;gap: 7px;font-size: 12px;line-height: 18px;color: var(--ui-bc-text)}.ui-bc__tip-seg{flex: 1;white-space: nowrap}.ui-bc__swatch{flex: none;width: 8px;height: 8px;border-radius: 2px}.ui-bc__xaxis{display: grid;gap: 4px;margin: 8px 30px 0 0}.ui-bc__xlabel{display: grid;place-items: center;height: 24px;min-width: 0;color: var(--ui-bc-muted)}.ui-bc__xlabel{position: relative;overflow: visible}.ui-bc__pill{position: absolute;top: 50%;left: 50%;z-index: 2;display: inline-flex;align-items: center;gap: 6px;height: 24px;padding: 0 10px 0 7px;border-radius: 999px;background: var(--ui-bc-card);box-shadow: 0 0 0 1px var(--ui-bc-border), var(--ui-bc-pill-shadow);font-size: 12px;font-weight: 500;max-width: min(220px, 80cqw);white-space: nowrap;color: var(--ui-bc-ink);transform: translate(-50%, -50%);animation: ui-bc-pill 200ms var(--ui-bc-ease)}.ui-bc__xtext{overflow: hidden;max-width: 100%;font-size: 11px;white-space: nowrap;text-overflow: ellipsis}.ui-bc__table-wrap{overflow-x: auto;border-top: 1px solid var(--ui-bc-line);scrollbar-width: thin}.ui-bc__table{width: 100%;border-collapse: collapse;font-size: 13px;line-height: 18px}.ui-bc__table th, .ui-bc__table td{height: 38px;padding: 0 14px;border-top: 1px solid var(--ui-bc-line);text-align: left;white-space: nowrap}.ui-bc__table thead th{border-top: 0;font-weight: 450;color: var(--ui-bc-muted);background: var(--ui-bc-head-bg)}.ui-bc__table [data-num]{text-align: right}.ui-bc__table tbody th{position: sticky;left: 0;z-index: 1;background: var(--ui-bc-card);font-weight: 450}.ui-bc__table tbody tr{transition: background-color 140ms ease}.ui-bc__table tbody tr[data-active] th, .ui-bc__table tbody tr[data-active] td{background: var(--ui-bc-row-active)}.ui-bc__table td{color: var(--ui-bc-text)}.ui-bc__table [data-hidden]{opacity: 0.35}.ui-bc__row-label, .ui-bc__th-seg{display: inline-flex;align-items: center;gap: 8px;max-width: 220px}.ui-bc__th-seg{max-width: 160px}.ui-bc__foot{display: flex;align-items: center;justify-content: space-between;gap: 10px;min-height: 44px;padding: 6px 10px 7px 10px}.ui-bc__legend{display: flex;flex-wrap: wrap;gap: 2px;min-width: 0}.ui-bc__chip{display: inline-flex;align-items: center;gap: 6px;max-width: 100%;height: 28px;white-space: nowrap;padding: 0 9px;border: 0;border-radius: 8px;background: transparent;font-size: 12.5px !important;color: var(--ui-bc-text) !important;transition: background-color 140ms ease, opacity 160ms ease}.ui-bc__chip:hover{background: var(--ui-bc-wash)}.ui-bc__chip[aria-pressed="false"]{opacity: 0.45;text-decoration: line-through}.ui-bc__hint{padding-left: 8px;font-size: 12.5px;color: var(--ui-bc-muted)}.ui-bc__reset{flex: none;height: 28px;padding: 0 10px;border: 0;border-radius: 8px;background: transparent;font-size: 12.5px !important;font-weight: 500;color: var(--ui-bc-accent-ink) !important}.ui-bc__reset:hover{background: var(--ui-bc-accent-wash)}@keyframes ui-bc-drop{from{opacity: 0;transform: translateY(-4px) scale(0.98)}}@keyframes ui-bc-pop{from{opacity: 0}}@keyframes ui-bc-pill{from{opacity: 0;transform: translate(-50%, -50%) scale(0.92)}}@media (prefers-reduced-motion: reduce){.ui-bc__bar, .ui-bc__seg, .ui-bc__tooltip, .ui-bc__col, .ui-bc__rest{transition: none}.ui-bc__menu, .ui-bc__tooltip, .ui-bc__pill{animation: none}}.ui-bc__morph{overflow: hidden}.ui-bc__morph[data-smooth]{transition: height 380ms cubic-bezier(0.22, 1, 0.36, 1)}@media (prefers-reduced-motion: reduce){.ui-bc__morph[data-smooth]{transition: none}}:where(.dark, [data-theme="dark"]) .ui-bc{--ui-bc-tray: #161618;--ui-bc-card: #232326;--ui-bc-line: rgba(255, 255, 255, 0.08);--ui-bc-grid: rgba(255, 255, 255, 0.09);--ui-bc-ink: #ededed;--ui-bc-text: #c4c4c4;--ui-bc-muted: #8f8f8f;--ui-bc-accent-ink: #6b95ff;--ui-bc-border: rgba(255, 255, 255, 0.08);--ui-bc-surface-hover: #2a2a2d;--ui-bc-option-hover: #313135;--ui-bc-zero: rgba(255, 255, 255, 0.16);--ui-bc-rest: rgba(255, 255, 255, 0.06);--ui-bc-head-bg: #262629;--ui-bc-row-active: #2a2a2d;--ui-bc-wash: rgba(255, 255, 255, 0.06);--ui-bc-accent-wash: rgba(47, 107, 255, 0.16);--ui-bc-card-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);--ui-bc-btn-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);--ui-bc-pop-shadow: 0 12px 30px -8px rgba(0, 0, 0, 0.5);--ui-bc-tip-shadow: 0 12px 28px -8px rgba(0, 0, 0, 0.5);--ui-bc-pill-shadow: 0 2px 6px rgba(0, 0, 0, 0.4)}:where(.dark, [data-theme="dark"]) .ui-bc__menu, :where(.dark, [data-theme="dark"]) .ui-bc__tooltip, :where(.dark, [data-theme="dark"]) .ui-bc__pill{background: #2a2a2d;box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), var(--ui-bc-pop-shadow)}:where(.dark, [data-theme="dark"]) .ui-bc__select-btn{background: #2a2a2d}:where(.dark, [data-theme="dark"]) .ui-bc__select-btn:hover{background: #313135}`;
