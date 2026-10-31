/*
 * affectUI · experiment-card (Pro)
 * Implementation recovered from public bundle asset: demo-DBtQYhoC.js
 * Styles inlined in the module -> experiment-card.css (1 block(s))
 * Demo usage: experiment-card.demo.jsx
 * Minified identifiers kept; formatting by prettier.
 */

import { t as e } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
/* empty css             */ var n = e(),
  r = t(),
  i = [`var(--ui-xc-c1)`, `var(--ui-xc-c2)`, `var(--ui-xc-c3)`, `var(--ui-xc-c4)`],
  a = (e) => new Intl.NumberFormat(`en-US`, { maximumFractionDigits: 1 }).format(e),
  o = (e) => new Intl.NumberFormat(`en-US`, { maximumFractionDigits: 0 }).format(e),
  s = new Intl.NumberFormat(`en-US`, { minimumFractionDigits: 1, maximumFractionDigits: 1 }),
  c = (e) => typeof e == `number` && Number.isFinite(e),
  l = (e) => 1 - (1 - e) ** 4,
  u = () => typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
function d(e, t) {
  let [r, i] = (0, n.useState)(e),
    a = (0, n.useRef)(e),
    o = JSON.stringify(e);
  return (
    (0, n.useEffect)(() => {
      let e = JSON.parse(o),
        n = { ...a.current };
      if (u() || Object.keys(e).every((t) => n[t] === e[t])) {
        ((a.current = e), i(e));
        return;
      }
      let r = performance.now(),
        s = 0,
        c = (o) => {
          let u = Math.min(1, (o - r) / t),
            d = l(u),
            f = {};
          for (let t in e) f[t] = (n[t] ?? e[t]) + (e[t] - (n[t] ?? e[t])) * d;
          ((a.current = f), i(f), u < 1 && (s = requestAnimationFrame(c)));
        };
      return ((s = requestAnimationFrame(c)), () => cancelAnimationFrame(s));
    }, [o, t]),
    r
  );
}
var f = { stroke: `currentColor`, strokeWidth: 1.5, strokeLinecap: `round`, strokeLinejoin: `round` },
  ee = () =>
    (0, r.jsx)(`svg`, {
      width: `10`,
      height: `10`,
      viewBox: `0 0 10 10`,
      fill: `none`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, { d: `m2.2 5.2 1.9 1.9 3.7-4.1`, ...f, strokeWidth: 1.7 }),
    }),
  te = () =>
    (0, r.jsx)(`svg`, {
      width: `12`,
      height: `12`,
      viewBox: `0 0 12 12`,
      fill: `none`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, { d: `M2.5 6h7M6.5 3l3 3-3 3`, ...f, strokeWidth: 1.4 }),
    }),
  ne = ({ down: e }) =>
    (0, r.jsx)(`svg`, {
      width: `10`,
      height: `10`,
      viewBox: `0 0 10 10`,
      fill: `none`,
      "aria-hidden": `true`,
      style: e ? { transform: `scaleY(-1)` } : void 0,
      children: (0, r.jsx)(`path`, { d: `M1.5 7 4 4.5l1.6 1.6L8.5 3M6.2 3h2.3v2.3`, ...f, strokeWidth: 1.4 }),
    }),
  re = () =>
    (0, r.jsxs)(`svg`, {
      width: `12`,
      height: `12`,
      viewBox: `0 0 12 12`,
      fill: `none`,
      "aria-hidden": `true`,
      children: [
        (0, r.jsx)(`circle`, { cx: `6`, cy: `6`, r: `4.25`, ...f }),
        (0, r.jsx)(`circle`, { cx: `6`, cy: `6`, r: `1.5`, fill: `currentColor` }),
      ],
    });
function p({
  title: e,
  variants: t,
  metrics: l,
  metric: u,
  defaultMetric: f,
  onMetricChange: p,
  winner: m,
  defaultWinner: h = null,
  onWinnerChange: g,
  status: _,
  note: v,
  action: y,
  hint: ae,
  trigger: oe = `hover`,
  open: se,
  defaultOpen: ce = !1,
  onOpenChange: le,
  className: ue,
}) {
  let b = (0, n.useId)(),
    [de, fe] = (0, n.useState)(ce),
    x = se ?? de,
    [pe, me] = (0, n.useState)(f ?? l[0]?.id),
    S = l.find((e) => e.id === (u ?? pe)) ?? l[0],
    [he, ge] = (0, n.useState)(h),
    C = m === void 0 ? he : m,
    [w, T] = (0, n.useState)(null),
    E = (0, n.useRef)(null),
    D = S?.format ?? a,
    _e = !!S?.lowerIsBetter,
    O = (e) => c(e.values[S?.id ?? ``]),
    k = (e) => (O(e) ? e.values[S?.id ?? ``] : 0),
    A = t.find((e) => e.control) ?? t[0],
    j = A && O(A) ? k(A) : 0,
    M = (e) => (O(e) && j ? ((k(e) - j) / Math.abs(j)) * 100 : null),
    N = (e) => {
      let t = M(e);
      return t === null ? null : t * (_e ? -1 : 1);
    },
    P = (e) => {
      let t = Math.round(e * 10) / 10;
      return `${t >= 0 ? `+` : `−`}${s.format(Math.abs(t))}%`;
    },
    F = t.reduce((e, t) => (!e || (N(t) ?? -1 / 0) > (N(e) ?? -1 / 0) ? t : e), void 0),
    I = t.filter(O).map(k),
    L = Math.max(...I, 1e-4),
    R = I.length ? Math.min(...I) : 0,
    ve = (e) => (O(e) ? (L > R ? 0.38 + 0.62 * ((k(e) - R) / (L - R)) : 0.7) : 0.1),
    z = (e) => e.color ?? (e === A ? `var(--ui-xc-c0)` : i[t.filter((e) => e !== A).indexOf(e) % i.length]),
    ye = d(Object.fromEntries(t.map((e) => [e.id, k(e)])), 620),
    B = (0, n.useRef)(0),
    V = (e) => {
      (window.clearTimeout(B.current), e !== x && (e || T(null), fe(e), le?.(e)));
    },
    H = (e, t) => {
      (window.clearTimeout(B.current), (B.current = window.setTimeout(() => V(e), t)));
    };
  (0, n.useEffect)(() => () => window.clearTimeout(B.current), []);
  let U = oe === `hover`,
    be = (e) => {
      U && e.pointerType === `mouse` && H(!0, 90);
    },
    xe = (e) => {
      U && e.pointerType === `mouse` && H(!1, 220);
    };
  (0, n.useEffect)(() => {
    if (!x) return;
    let e = (e) => {
      E.current?.contains(e.target) || V(!1);
    };
    return (
      document.addEventListener(`pointerdown`, e),
      () => document.removeEventListener(`pointerdown`, e)
    );
  });
  let Se = (e) => {
      e.key === `Escape` &&
        x &&
        (e.stopPropagation(),
        V(!1),
        E.current?.querySelector(`.ui-xc__toggle`)?.focus({ preventScroll: !0 }));
    },
    W = (0, n.useRef)(null),
    [G, Ce] = (0, n.useState)(null);
  (0, n.useLayoutEffect)(() => {
    let e = W.current?.querySelector(`[aria-checked="true"]`);
    if (!e) return;
    Ce({ left: e.offsetLeft, width: e.offsetWidth });
    let t = W.current;
    e.offsetLeft < t.scrollLeft
      ? (t.scrollLeft = e.offsetLeft)
      : e.offsetLeft + e.offsetWidth > t.scrollLeft + t.clientWidth &&
        (t.scrollLeft = e.offsetLeft + e.offsetWidth - t.clientWidth);
  }, [S?.id, l.length, x]);
  let K = (e) => {
      (me(e), p?.(e));
    },
    we = (e) => {
      let t = l.findIndex((e) => e.id === S?.id),
        n =
          e.key === `ArrowRight`
            ? t + 1
            : e.key === `ArrowLeft`
              ? t - 1
              : e.key === `Home`
                ? 0
                : e.key === `End`
                  ? l.length - 1
                  : null;
      if (n === null) return;
      e.preventDefault();
      let r = l[(n + l.length) % l.length];
      (K(r.id), requestAnimationFrame(() => W.current?.querySelector(`[aria-checked="true"]`)?.focus()));
    },
    q = (e) => {
      let t = C === e ? null : e;
      (ge(t), g?.(t));
    },
    J = F && F !== A && (N(F) ?? 0) > 0 ? F : null,
    Y = J ? (M(J) ?? 0) : 0,
    X = t.find((e) => e.id === C) ?? null,
    Z = t.find((e) => e.id === w) ?? null ?? null,
    Q = ae ?? (X ? null : `Pick a winner`),
    $ = `rest`;
  if (Z) {
    let e = Z.confidence?.[S?.id ?? ``];
    ((Q = (0, r.jsxs)(r.Fragment, {
      children: [
        (0, r.jsx)(`b`, { children: Z.key }),
        c(Z.visitors) &&
          (0, r.jsxs)(r.Fragment, {
            children: [` `, `· `, o(Z.visitors), ` `, Z.visitors === 1 ? `visitor` : `visitors`],
          }),
        Z === A
          ? (0, r.jsx)(r.Fragment, { children: ` · baseline` })
          : c(e) && (0, r.jsxs)(r.Fragment, { children: [` · `, o(e), `% confidence`] }),
      ],
    })),
      ($ = `hot-${Z.id}-${S?.id}`));
  } else
    X &&
      ((Q = (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(`b`, { children: X.name }), ` picked`] })),
      ($ = `picked-${X.id}`));
  let Te = X && y ? (typeof y.label == `function` ? y.label(X) : y.label) : null;
  return (0, r.jsxs)(`div`, {
    ref: E,
    className: [`ui-xc`, ue].filter(Boolean).join(` `),
    "data-open": x ? `` : void 0,
    onPointerEnter: be,
    onPointerLeave: xe,
    onKeyDown: Se,
    children: [
      (0, r.jsx)(`style`, { href: `ui-experiment-card`, precedence: `default`, children: ie }),
      (0, r.jsxs)(`div`, {
        className: `ui-xc__card`,
        children: [
          (0, r.jsxs)(`div`, {
            className: `ui-xc__head`,
            children: [
              (0, r.jsx)(`button`, {
                type: `button`,
                className: `ui-xc__toggle`,
                "aria-expanded": x,
                "aria-controls": `${b}-body`,
                "aria-label": `${e}${_ ? `, ${_.label}` : ``}${J ? `, ${J.name} is ahead by ${s.format(Math.abs(Y))} percent` : ``}`,
                onClick: () => V(!x),
              }),
              (0, r.jsx)(`span`, {
                className: `ui-xc__chart`,
                "aria-hidden": `true`,
                "data-many": t.length > 5 ? `` : void 0,
                onPointerLeave: () => T(null),
                children: t.map((e) =>
                  (0, r.jsx)(
                    `span`,
                    {
                      className: `ui-xc__col`,
                      "data-hot": w === e.id ? `` : void 0,
                      "data-dim": w && w !== e.id ? `` : void 0,
                      "data-picked": C === e.id ? `` : void 0,
                      "data-passed": C && C !== e.id ? `` : void 0,
                      style: { "--ui-xc-color": z(e), "--ui-xc-size": ve(e) },
                      onPointerEnter: (t) => t.pointerType === `mouse` && T(e.id),
                      onClick: () => q(e.id),
                    },
                    e.id,
                  ),
                ),
              }),
              (0, r.jsxs)(`span`, {
                className: `ui-xc__titles`,
                children: [
                  (0, r.jsx)(`span`, { className: `ui-xc__name`, dir: `auto`, title: e, children: e }),
                  (0, r.jsxs)(`span`, {
                    className: `ui-xc__sub`,
                    children: [
                      _ &&
                        (0, r.jsxs)(`span`, {
                          className: `ui-xc__tag`,
                          "data-tone": _.tone ?? `gray`,
                          title: _.label,
                          children: [
                            (0, r.jsx)(re, {}),
                            (0, r.jsx)(`span`, { className: `ui-xc__tag-text`, children: _.label }),
                          ],
                        }),
                      v &&
                        (0, r.jsx)(`span`, { className: `ui-xc__note`, dir: `auto`, title: v, children: v }),
                    ],
                  }),
                ],
              }),
              J
                ? (0, r.jsxs)(
                    `span`,
                    {
                      className: `ui-xc__lead`,
                      "data-tone": `green`,
                      children: [(0, r.jsx)(`b`, { children: J.key }), (0, r.jsx)(ne, { down: Y < 0 }), P(Y)],
                    },
                    `${J.id}-${S?.id}`,
                  )
                : (0, r.jsx)(
                    `span`,
                    { className: `ui-xc__lead`, "data-tone": `gray`, children: `No lift yet` },
                    `none-${S?.id}`,
                  ),
            ],
          }),
          (0, r.jsx)(`div`, {
            id: `${b}-body`,
            className: `ui-xc__fold`,
            inert: !x,
            children: (0, r.jsx)(`div`, {
              className: `ui-xc__clip`,
              children: (0, r.jsxs)(`div`, {
                className: `ui-xc__body`,
                children: [
                  l.length > 1 &&
                    (0, r.jsxs)(`div`, {
                      ref: W,
                      className: `ui-xc__switch`,
                      role: `radiogroup`,
                      "aria-label": `Metric`,
                      onKeyDown: we,
                      children: [
                        G &&
                          (0, r.jsx)(`span`, {
                            className: `ui-xc__thumb`,
                            style: { transform: `translateX(${G.left}px)`, width: G.width },
                          }),
                        l.map((e) =>
                          (0, r.jsx)(
                            `button`,
                            {
                              type: `button`,
                              role: `radio`,
                              "aria-checked": e.id === S?.id,
                              tabIndex: e.id === S?.id ? 0 : -1,
                              className: `ui-xc__metric`,
                              onClick: () => K(e.id),
                              children: e.label,
                            },
                            e.id,
                          ),
                        ),
                      ],
                    }),
                  (0, r.jsx)(`div`, {
                    className: `ui-xc__rows`,
                    role: `radiogroup`,
                    "aria-label": `Winner`,
                    onPointerLeave: () => T(null),
                    children: t.map((e) => {
                      let t = N(e),
                        n = M(e),
                        i = e === A;
                      return (0, r.jsxs)(
                        `button`,
                        {
                          type: `button`,
                          role: `radio`,
                          "aria-checked": C === e.id,
                          "aria-label": `${e.name}: ${O(e) ? D(k(e)) : `no value`}${i ? `, baseline` : n === null ? `` : `, ${n >= 0 ? `up` : `down`} ${s.format(Math.abs(n))} percent`}`,
                          className: `ui-xc__row`,
                          "data-hot": w === e.id ? `` : void 0,
                          "data-dim": w && w !== e.id ? `` : void 0,
                          style: { "--ui-xc-color": z(e) },
                          onPointerEnter: (t) => t.pointerType === `mouse` && T(e.id),
                          onFocus: () => T(e.id),
                          onBlur: () => T(null),
                          onClick: () => q(e.id),
                          children: [
                            (0, r.jsxs)(`span`, {
                              className: `ui-xc__badge`,
                              children: [
                                (0, r.jsx)(`span`, { title: e.key, children: e.key }),
                                (0, r.jsx)(ee, {}),
                              ],
                            }),
                            (0, r.jsx)(`span`, {
                              className: `ui-xc__label`,
                              dir: `auto`,
                              title: e.name,
                              children: e.name,
                            }),
                            (0, r.jsx)(`span`, {
                              className: `ui-xc__value`,
                              children: O(e) ? D(ye[e.id] ?? k(e)) : `—`,
                            }),
                            i
                              ? (0, r.jsx)(`span`, {
                                  className: `ui-xc__lift`,
                                  "data-tone": `gray`,
                                  children: `Base`,
                                })
                              : (0, r.jsx)(`span`, {
                                  className: `ui-xc__lift`,
                                  "data-tone":
                                    t === null ? `gray` : t > 0.05 ? `green` : t < -0.05 ? `red` : `gray`,
                                  children: n === null ? `—` : P(n),
                                }),
                            (0, r.jsx)(`span`, {
                              className: `ui-xc__track`,
                              children: (0, r.jsx)(`span`, {
                                className: `ui-xc__bar`,
                                style: { transform: `scaleX(${O(e) ? Math.max(0.02, k(e) / L) : 0.02})` },
                              }),
                            }),
                          ],
                        },
                        e.id,
                      );
                    }),
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
      (0, r.jsx)(`div`, {
        className: `ui-xc__fold`,
        inert: !x,
        children: (0, r.jsx)(`div`, {
          className: `ui-xc__clip`,
          children: (0, r.jsxs)(`div`, {
            className: `ui-xc__foot`,
            children: [
              (0, r.jsx)(`span`, {
                className: `ui-xc__caption`,
                "aria-live": `polite`,
                children: (0, r.jsx)(`span`, { children: Q }, $),
              }),
              X &&
                y &&
                (0, r.jsxs)(
                  `button`,
                  {
                    type: `button`,
                    className: `ui-xc__action`,
                    title: Te ?? void 0,
                    onClick: () => y.onClick(X),
                    children: [
                      (0, r.jsx)(`span`, { className: `ui-xc__action-text`, children: Te }),
                      (0, r.jsx)(te, {}),
                    ],
                  },
                  X.id,
                ),
            ],
          }),
        }),
      }),
    ],
  });
}
var ie = `.ui-xc{--ui-xc-tray: #f0f0f0;--ui-xc-card: #ffffff;--ui-xc-line: #ececec;--ui-xc-ink: #171717;--ui-xc-text: #404040;--ui-xc-muted: #8f8f8f;--ui-xc-well: #f4f4f5;--ui-xc-track: #ededf0;--ui-xc-c0: #b4b4ba;--ui-xc-c1: #2f6bff;--ui-xc-c2: #7c5cff;--ui-xc-c3: #f0a020;--ui-xc-c4: #22a05a;--ui-xc-focus: rgba(23, 23, 23, 0.22);--ui-xc-ease: cubic-bezier(0.32, 0.72, 0.24, 1);--ui-xc-time: 520ms;box-sizing: border-box;width: 100%;max-width: 340px;padding: 4px;border-radius: 20px;background: var(--ui-xc-tray);container-type: inline-size;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;color: var(--ui-xc-text);text-align: left;-webkit-font-smoothing: antialiased}.ui-xc *, .ui-xc *::before, .ui-xc *::after{box-sizing: border-box}:where(.ui-xc) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;text-align: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}.ui-xc button:focus-visible{outline: 2px solid var(--ui-xc-focus);outline-offset: 2px}.ui-xc svg{display: block;flex: none}.ui-xc b{font-weight: 600;color: var(--ui-xc-ink)}.ui-xc [data-tone="red"]{--ui-xc-tag: #b42318;--ui-xc-tag-bg: rgba(229, 72, 77, 0.1)}.ui-xc [data-tone="amber"]{--ui-xc-tag: #96590a;--ui-xc-tag-bg: rgba(240, 160, 32, 0.14)}.ui-xc [data-tone="green"]{--ui-xc-tag: #18794e;--ui-xc-tag-bg: rgba(34, 160, 90, 0.11)}.ui-xc [data-tone="blue"]{--ui-xc-tag: #1f55d6;--ui-xc-tag-bg: rgba(47, 107, 255, 0.09)}.ui-xc [data-tone="violet"]{--ui-xc-tag: #6941c6;--ui-xc-tag-bg: rgba(124, 92, 255, 0.1)}.ui-xc [data-tone="gray"]{--ui-xc-tag: #6b6b72;--ui-xc-tag-bg: rgba(110, 110, 120, 0.09)}.ui-xc__card{border-radius: 16px;background: var(--ui-xc-card);box-shadow: 0 0 0 1px var(--ui-xc-line), 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-xc__fold{display: grid;grid-template-rows: 0fr;opacity: 0;transition: grid-template-rows var(--ui-xc-time) var(--ui-xc-ease), opacity 260ms ease}.ui-xc__clip{min-height: 0;overflow: hidden}.ui-xc[data-open] > .ui-xc__fold, .ui-xc[data-open] > .ui-xc__card > .ui-xc__fold{grid-template-rows: 1fr;opacity: 1;transition: grid-template-rows var(--ui-xc-time) var(--ui-xc-ease), opacity 380ms ease 120ms}.ui-xc__head{position: relative;display: flex;align-items: center;gap: 10px;padding: 10px 12px}.ui-xc__toggle{position: absolute;inset: 0;border-radius: 16px}.ui-xc__head > :not(.ui-xc__toggle){position: relative;pointer-events: none}.ui-xc[data-open] .ui-xc__chart{pointer-events: auto}.ui-xc__chart{overflow: hidden}.ui-xc__chart[data-many]{gap: 1px}.ui-xc__chart{display: flex;flex: none;align-items: flex-end;justify-content: center;gap: 3px;width: 34px;height: 34px;padding: 6px 5px 5px;border-radius: 10px;background: var(--ui-xc-well);box-shadow: inset 0 0 0 1px var(--ui-xc-line)}.ui-xc__col{flex: 1;max-width: 7px;height: calc(var(--ui-xc-size) * 100%);border-radius: 2.5px;background: var(--ui-xc-color);cursor: pointer;transition: height 620ms var(--ui-xc-ease), opacity 220ms ease, transform 260ms var(--ui-xc-ease);transform-origin: 50% 100%}.ui-xc__col[data-hot]{transform: scaleX(1.25)}.ui-xc__col[data-dim]{opacity: 0.3}.ui-xc__col[data-passed]:not([data-hot]){opacity: 0.35}.ui-xc__titles{display: grid;grid-template-columns: minmax(0, 1fr);flex: 1;min-width: 0}.ui-xc__name{overflow: hidden;text-align: start;font-size: 13.5px;font-weight: 600;color: var(--ui-xc-ink);white-space: nowrap;text-overflow: ellipsis}.ui-xc__sub{display: flex;align-items: center;gap: 6px;min-width: 0;height: 20px;margin-top: 1px;overflow: hidden;font-size: 12px;line-height: 20px;color: var(--ui-xc-muted);white-space: nowrap}.ui-xc__tag{display: inline-flex;flex: none;max-width: 100%;min-width: 0;align-items: center;gap: 4px;height: 20px;padding: 0 7px 0 5px;border-radius: 5px;background: var(--ui-xc-tag-bg);font-weight: 500;color: var(--ui-xc-tag)}.ui-xc__tag-text{min-width: 0;overflow: hidden;text-overflow: ellipsis}.ui-xc__note{min-width: 0;overflow: hidden;text-align: start;text-overflow: ellipsis}.ui-xc__lead{display: inline-flex;flex: none;align-items: center;gap: 4px;height: 24px;padding: 0 8px;border-radius: 6px;background: var(--ui-xc-tag-bg);font-size: 12px;font-weight: 500;color: var(--ui-xc-tag);white-space: nowrap;font-variant-numeric: tabular-nums;animation: ui-xc-pop 360ms var(--ui-xc-ease) both}.ui-xc__lead b{color: inherit}.ui-xc__body{padding: 0 12px 10px}.ui-xc__switch{position: relative;display: grid;grid-auto-columns: 1fr;grid-auto-flow: column;padding: 2px;border-radius: 10px;background: var(--ui-xc-well);box-shadow: inset 0 0 0 1px var(--ui-xc-line)}.ui-xc__switch{overflow-x: auto;scrollbar-width: none}.ui-xc__switch::-webkit-scrollbar{display: none}.ui-xc .ui-xc__metric:focus-visible{outline-offset: -2px}.ui-xc__thumb{position: absolute;top: 2px;left: 0;height: calc(100% - 4px);border-radius: 8px;background: var(--ui-xc-card);box-shadow: 0 0 0 1px var(--ui-xc-line), 0 1px 2px rgba(0, 0, 0, 0.06);transition: transform 420ms var(--ui-xc-ease), width 420ms var(--ui-xc-ease)}.ui-xc__metric{position: relative;height: 26px;padding: 0 8px;border-radius: 8px;font-size: 12px;font-weight: 500;color: var(--ui-xc-muted);text-align: center;white-space: nowrap;transition: color 200ms ease}.ui-xc__metric:hover, .ui-xc__metric[aria-checked="true"]{color: var(--ui-xc-ink)}.ui-xc__rows{display: grid;gap: 2px;margin-top: 8px}.ui-xc__row{display: grid;grid-template-columns: auto minmax(0, 1fr) auto auto;align-items: center;column-gap: 9px;row-gap: 6px;width: calc(100% + 12px);margin: 0 -6px;padding: 7px 6px 8px;border-radius: 10px;transition: background-color 160ms ease, opacity 220ms ease, box-shadow 200ms ease}.ui-xc__row[data-hot]{background: var(--ui-xc-well)}.ui-xc__row[data-dim]{opacity: 0.5}.ui-xc__row[aria-checked="true"]{background: var(--ui-xc-well);box-shadow: inset 0 0 0 1px var(--ui-xc-line)}.ui-xc__badge{display: grid;place-items: center;min-width: 20px;max-width: 56px;padding: 0 4px;height: 20px;border-radius: 6px;background: color-mix(in srgb, var(--ui-xc-color) 16%, transparent);font-size: 11px;font-weight: 600;line-height: 1;color: color-mix(in srgb, var(--ui-xc-color) 72%, var(--ui-xc-ink));transition: background-color 220ms ease, color 220ms ease}.ui-xc__badge > *{grid-area: 1 / 1;transition: opacity 180ms ease, transform 260ms var(--ui-xc-ease)}.ui-xc__badge span{max-width: 100%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-xc__badge svg{opacity: 0;transform: scale(0.5)}.ui-xc__row[aria-checked="true"] .ui-xc__badge{background: var(--ui-xc-color);color: #fff}.ui-xc__row[aria-checked="true"] .ui-xc__badge span{opacity: 0;transform: scale(0.5)}.ui-xc__row[aria-checked="true"] .ui-xc__badge svg{opacity: 1;transform: none}.ui-xc__label{overflow: hidden;text-align: start;color: var(--ui-xc-text);white-space: nowrap;text-overflow: ellipsis}.ui-xc__value{font-weight: 500;color: var(--ui-xc-ink);font-variant-numeric: tabular-nums}.ui-xc__lift{min-width: 50px;height: 20px;padding: 0 6px;border-radius: 5px;background: var(--ui-xc-tag-bg);font-size: 11.5px;font-weight: 500;line-height: 20px;color: var(--ui-xc-tag);text-align: center;font-variant-numeric: tabular-nums;transition: background-color 240ms ease, color 240ms ease}.ui-xc__track{grid-column: 2 / -1;height: 4px;overflow: hidden;border-radius: 2px;background: var(--ui-xc-track)}.ui-xc__bar{display: block;width: 100%;height: 100%;border-radius: 2px;background: var(--ui-xc-color);transform-origin: 0 50%;transition: transform 620ms var(--ui-xc-ease)}.ui-xc__foot{display: flex;align-items: center;gap: 8px;height: 38px;padding: 4px 4px 0 10px}.ui-xc__caption{flex: 1;min-width: 0;overflow: hidden;font-size: 12.5px;color: var(--ui-xc-muted);white-space: nowrap;text-overflow: ellipsis;font-variant-numeric: tabular-nums}.ui-xc__caption > span{display: inline-block;max-width: 100%;overflow: hidden;text-overflow: ellipsis;vertical-align: top;animation: ui-xc-in 280ms var(--ui-xc-ease) both}.ui-xc__action{display: inline-flex;align-items: center;gap: 4px;flex: 0 1 auto;min-width: 0;max-width: 65%;height: 26px;padding: 0 7px 0 10px;border-radius: 10px;background: var(--ui-xc-ink);font-size: 12.5px;font-weight: 500;color: var(--ui-xc-card);white-space: nowrap;animation: ui-xc-pop 360ms var(--ui-xc-ease) both;transition: opacity 160ms ease}.ui-xc__action-text{min-width: 0;overflow: hidden;text-overflow: ellipsis}.ui-xc__action:hover{opacity: 0.88}.ui-xc__action svg{transition: transform 220ms var(--ui-xc-ease)}.ui-xc__action:hover svg{transform: translateX(2px)}@keyframes ui-xc-in{from{opacity: 0;transform: translateY(3px)}}@keyframes ui-xc-pop{from{opacity: 0;transform: scale(0.94)}}@container (max-width: 300px){.ui-xc__head{gap: 8px;padding: 10px}.ui-xc__chart{width: 30px;height: 30px;padding: 5px 4px 4px;gap: 2.5px}.ui-xc__note{display: none}.ui-xc__lead{gap: 3px;padding: 0 6px}.ui-xc__lead svg{display: none}.ui-xc__body{padding: 0 10px 10px}.ui-xc__metric{padding: 0 4px}.ui-xc__row{column-gap: 7px}.ui-xc__lift{min-width: 44px;padding: 0 4px}}@media (pointer: coarse){.ui-xc__metric{height: 32px}.ui-xc__row{padding: 10px 6px 11px}.ui-xc__action{height: 30px}}@media (prefers-reduced-motion: reduce){.ui-xc *, .ui-xc *::before, .ui-xc *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-xc{--ui-xc-tray: #111113;--ui-xc-card: #19191b;--ui-xc-line: #2a2a2e;--ui-xc-ink: #ededed;--ui-xc-text: #c8c8cc;--ui-xc-muted: #8b8b92;--ui-xc-well: #222225;--ui-xc-track: #2c2c31;--ui-xc-c0: #6e6e76;--ui-xc-c1: #5b8cff;--ui-xc-c2: #9b83ff;--ui-xc-focus: rgba(255, 255, 255, 0.3)}:where(.dark, [data-theme="dark"]) .ui-xc [data-tone="red"]{--ui-xc-tag: #ff9b93}:where(.dark, [data-theme="dark"]) .ui-xc [data-tone="amber"]{--ui-xc-tag: #f5c264}:where(.dark, [data-theme="dark"]) .ui-xc [data-tone="green"]{--ui-xc-tag: #6ee7a8}:where(.dark, [data-theme="dark"]) .ui-xc [data-tone="blue"]{--ui-xc-tag: #9bb8ff}:where(.dark, [data-theme="dark"]) .ui-xc [data-tone="violet"]{--ui-xc-tag: #c3b1ff}:where(.dark, [data-theme="dark"]) .ui-xc [data-tone="gray"]{--ui-xc-tag: #b4b4bb}:where(.dark, [data-theme="dark"]) .ui-xc__row[aria-checked="true"] .ui-xc__badge{color: #111113}`,
  m = [
    { id: `conversion`, label: `Conversion`, format: (e) => `${e.toFixed(1)}%` },
    { id: `revenue`, label: `Revenue`, format: (e) => `$${e.toFixed(2)}` },
    { id: `bounce`, label: `Bounce`, format: (e) => `${e.toFixed(1)}%`, lowerIsBetter: !0 },
  ],
  h = [
    {
      id: `a`,
      key: `A`,
      name: `Start free trial`,
      control: !0,
      visitors: 4790,
      values: { conversion: 4.2, revenue: 18.4, bounce: 41.3 },
    },
    {
      id: `b`,
      key: `B`,
      name: `Try it free`,
      visitors: 4812,
      values: { conversion: 4.7, revenue: 19.1, bounce: 38.2 },
      confidence: { conversion: 96, revenue: 81, bounce: 93 },
    },
    {
      id: `c`,
      key: `C`,
      name: `Get started – $0`,
      visitors: 4755,
      values: { conversion: 4, revenue: 21.6, bounce: 43.9 },
      confidence: { conversion: 62, revenue: 97, bounce: 71 },
    },
  ];
function g() {
  let [e, t] = (0, n.useState)(!1),
    [i, a] = (0, n.useState)(`conversion`),
    o = (0, n.useRef)(!1);
  (0, n.useEffect)(() => {
    let e = 0,
      n = () => {
        o.current ||
          ((e = (e + 1) % 5),
          e === 1
            ? t(!0)
            : e === 2
              ? a(`revenue`)
              : e === 3
                ? a(`bounce`)
                : e === 4
                  ? a(`conversion`)
                  : t(!1));
      },
      r = 0,
      i = window.setTimeout(() => {
        (n(), (r = window.setInterval(n, 2200)));
      }, 700);
    return () => {
      (window.clearTimeout(i), window.clearInterval(r));
    };
  }, []);
  let s = () => (o.current = !0);
  return (0, r.jsx)(`div`, {
    className: `xc-demo`,
    onPointerEnter: s,
    onPointerDownCapture: s,
    onKeyDownCapture: s,
    onFocusCapture: s,
    children: (0, r.jsx)(p, {
      title: `Signup button copy`,
      status: { label: `Running`, tone: `green` },
      note: `Day 9 of 14`,
      metrics: m,
      metric: i,
      onMetricChange: a,
      variants: h,
      action: { label: (e) => `Ship ${e.key}`, onClick: () => {} },
      open: e,
      onOpenChange: t,
    }),
  });
}
