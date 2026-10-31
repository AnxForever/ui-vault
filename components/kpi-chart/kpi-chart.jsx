import { t as e } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
var n = e(),
  r = t(),
  i = (e) => typeof e == `number` && Number.isFinite(e),
  a = (e) => {
    try {
      let t = String(e(1));
      return !/%\s*$/.test(t) || !/%\s*$/.test(String(e(50)))
        ? 0
        : Math.abs(parseFloat(t.replace(/[^\d.]/g, ``)) - 100) < 1e-6
          ? 1
          : 100;
    } catch {
      return 0;
    }
  },
  o = (e) => {
    let t = Math.abs(e);
    return t >= 1e9
      ? `${+(e / 1e9).toFixed(t >= 1e10 ? 0 : 1)}B`
      : t >= 1e6
        ? `${+(e / 1e6).toFixed(t >= 1e7 ? 0 : 1)}M`
        : t >= 1e3
          ? `${+(e / 1e3).toFixed(t >= 1e4 ? 0 : 1)}k`
          : t > 0 && t < 1
            ? `${+e.toPrecision(2)}`
            : `${Math.round(e)}`;
  };
function s(e) {
  (!i(e) || e < 0) && (e = 0);
  let t = e / 2 || 1,
    n = 10 ** Math.floor(Math.log10(t));
  return ([1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10].find((e) => e * n >= t) ?? 10) * n * 2;
}
function c({
  title: e,
  value: t,
  delta: c,
  labels: u = [],
  tooltipLabels: d,
  series: f = [],
  format: p = o,
  footer: m,
  defaultIndex: h,
  emptyText: g = `No data yet`,
  className: _,
}) {
  let v = u.length,
    y = (e) => (e == null || !i(e) || v === 0 ? null : Math.min(v - 1, Math.max(0, Math.round(e)))),
    [b, x] = (0, n.useState)(null),
    S = (0, n.useMemo)(
      () => f.map((e) => (e.values ?? []).slice(0, v).map((e) => (i(e) ? e : null))),
      [f, v],
    ),
    C = S.flat().filter(i),
    w = a(p),
    T = C.length === 0 || (!w && C.every((e) => e === 0)),
    E = T ? null : (b ?? y(h)),
    [D, O] = (0, n.useState)(E ?? 0);
  E !== null && E !== D && O(E);
  let k = Math.min(D, Math.max(0, v - 1)),
    A = Math.max(0, ...C),
    j = w ? (A === 0 ? w : s(Math.max(A, w / 10))) : s(A),
    M = Math.min(0, ...C),
    N = M < 0 ? -s(-M) : 0,
    P = (e) => (v > 1 ? (e / (v - 1)) * 100 : 50),
    F = (e) => ((j - e) / (j - N)) * 100,
    I = (0, n.useMemo)(
      () =>
        S.map((e) => {
          let t = ``;
          return (
            e.forEach((n, r) => {
              n !== null && (t += `${t && e[r - 1] !== null ? `L` : `M`}${P(r)},${F(n)}`);
            }),
            t
          );
        }),
      [S, j, N, v],
    ),
    L = S.flatMap((e, t) =>
      e.flatMap((n, r) =>
        n !== null && (e[r - 1] ?? null) === null && (e[r + 1] ?? null) === null
          ? [{ k: t, i: r, v: n }]
          : [],
      ),
    ),
    R = (e) => {
      let t = e.currentTarget.getBoundingClientRect(),
        n = Math.min(1, Math.max(0, (e.clientX - t.left) / t.width));
      return y(n * (v - 1));
    },
    z = (e) => {
      if (v === 0 || T) return;
      let t = E ?? (e.key === `ArrowLeft` ? v : -1);
      if (e.key === `ArrowRight`) x(Math.min(v - 1, t + 1));
      else if (e.key === `ArrowLeft`) x(Math.max(0, t - 1));
      else if (e.key === `Escape`) x(null);
      else return;
      e.preventDefault();
    },
    B = f
      .map((e, t) => ({ ...e, key: t, value: S[t][k] ?? null }))
      .sort((e, t) => (t.value ?? -1 / 0) - (e.value ?? -1 / 0)),
    V = P(k) > 50,
    H = (0, n.useRef)(null),
    U = (0, n.useRef)(null),
    W = (0, n.useRef)(null),
    [G, K] = (0, n.useState)(0);
  (0, n.useLayoutEffect)(() => {
    let e = H.current,
      t = U.current,
      n = W.current;
    if (!e || !t || !n) return;
    let r = e.getBoundingClientRect(),
      i = t.getBoundingClientRect(),
      a = n.offsetWidth,
      o = i.left + (P(k) / 100) * i.width,
      s = V ? o - 14 - a : o + 14,
      c = r.left + 8,
      l = r.right - 8 - a;
    K(Math.round(s < c ? c - s : s > l ? Math.max(c, l) - s : 0));
  });
  let q = [0, Math.round(v / 2 - 0.5), v - 1].filter((e, t, n) => n.indexOf(e) === t);
  return (0, r.jsxs)(r.Fragment, {
    children: [
      (0, r.jsx)(`style`, { href: `ui-kpi-chart`, precedence: `default`, children: l }),
      (0, r.jsxs)(`section`, {
        className: [`ui-kpi`, _].filter(Boolean).join(` `),
        ref: H,
        children: [
          (0, r.jsx)(`h3`, { className: `ui-kpi__title`, title: e, dir: `auto`, children: e }),
          (0, r.jsxs)(`p`, {
            className: `ui-kpi__value`,
            children: [
              (0, r.jsx)(`span`, { className: `ui-kpi__amount`, children: t }),
              i(c) &&
                c !== 0 &&
                (0, r.jsxs)(`span`, {
                  className: `ui-kpi__delta`,
                  "data-trend": c > 0 ? `up` : `down`,
                  children: [c > 0 ? `+` : `−`, p(Math.abs(c))],
                }),
            ],
          }),
          (0, r.jsxs)(`div`, {
            className: `ui-kpi__chart`,
            children: [
              (0, r.jsx)(`div`, {
                className: `ui-kpi__yaxis`,
                "aria-hidden": `true`,
                children:
                  !T &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(`span`, { children: p(j) }),
                      (0, r.jsx)(`span`, { children: p((j + N) / 2) }),
                      (0, r.jsx)(`span`, { children: p(N) }),
                    ],
                  }),
              }),
              (0, r.jsxs)(`div`, {
                className: `ui-kpi__plot`,
                tabIndex: T ? void 0 : 0,
                role: `group`,
                "aria-label": T
                  ? `${e} chart – ${g}`
                  : `${e} chart – use the arrow keys to read the values per day`,
                "data-empty": T || void 0,
                ref: U,
                onPointerMove: (e) => x(R(e)),
                onPointerDown: (e) => x(R(e)),
                onPointerLeave: () => x(null),
                onBlur: () => x(null),
                onKeyDown: z,
                children: [
                  (0, r.jsx)(`span`, { className: `ui-kpi__grid`, style: { top: `0%` } }),
                  (0, r.jsx)(`span`, { className: `ui-kpi__grid`, style: { top: `50%` } }),
                  (0, r.jsx)(`span`, { className: `ui-kpi__grid`, style: { top: `100%` } }),
                  T && (0, r.jsx)(`p`, { className: `ui-kpi__empty`, title: g, children: g }),
                  (0, r.jsx)(`svg`, {
                    className: `ui-kpi__lines`,
                    viewBox: `0 0 100 100`,
                    preserveAspectRatio: `none`,
                    "aria-hidden": `true`,
                    children: f.map((e, t) =>
                      (0, r.jsx)(`path`, { d: I[t], stroke: e.color, vectorEffect: `non-scaling-stroke` }, t),
                    ),
                  }),
                  L.map((e) =>
                    (0, r.jsx)(
                      `span`,
                      {
                        className: `ui-kpi__point`,
                        style: { left: `${P(e.i)}%`, top: `${F(e.v)}%`, background: f[e.k].color },
                        "aria-hidden": `true`,
                      },
                      `${e.k}-${e.i}`,
                    ),
                  ),
                  (0, r.jsxs)(`div`, {
                    className: `ui-kpi__marker`,
                    "data-open": E !== null || void 0,
                    "aria-hidden": `true`,
                    children: [
                      (0, r.jsx)(`span`, { className: `ui-kpi__guide`, style: { left: `${P(k)}%` } }),
                      f.map((e, t) =>
                        S[t][k] === null
                          ? null
                          : (0, r.jsx)(
                              `span`,
                              {
                                className: `ui-kpi__dot`,
                                style: { left: `${P(k)}%`, top: `${F(S[t][k] ?? 0)}%`, background: e.color },
                              },
                              t,
                            ),
                      ),
                    ],
                  }),
                  (0, r.jsxs)(`div`, {
                    className: `ui-kpi__tooltip`,
                    "data-open": E !== null || void 0,
                    "data-side": V ? `left` : `right`,
                    ref: W,
                    style: { left: `${P(k)}%`, "--ui-kpi-nudge": `${G}px` },
                    role: `status`,
                    "aria-live": `polite`,
                    children: [
                      (0, r.jsx)(`p`, { className: `ui-kpi__date`, children: (d ?? u)[k] }),
                      (0, r.jsx)(`ul`, {
                        children: B.map((e) =>
                          (0, r.jsxs)(
                            `li`,
                            {
                              children: [
                                (0, r.jsx)(`span`, {
                                  className: `ui-kpi__swatch`,
                                  style: { background: e.color },
                                }),
                                (0, r.jsx)(`span`, {
                                  className: `ui-kpi__label`,
                                  dir: `auto`,
                                  children: e.label,
                                }),
                                (0, r.jsx)(`span`, {
                                  className: `ui-kpi__num`,
                                  children: e.value === null ? `—` : p(e.value),
                                }),
                              ],
                            },
                            e.key,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)(`div`, {
                className: `ui-kpi__xaxis`,
                "aria-hidden": `true`,
                children: q.map((e) =>
                  (0, r.jsx)(
                    `span`,
                    {
                      style: { left: `${P(e)}%` },
                      "data-edge": e === 0 ? `start` : e === v - 1 ? `end` : void 0,
                      children: u[e],
                    },
                    e,
                  ),
                ),
              }),
            ],
          }),
          m && (0, r.jsx)(`p`, { className: `ui-kpi__footer`, dir: `auto`, children: m }),
        ],
      }),
    ],
  });
}
var l = `.ui-kpi{--ui-kpi-card: #ffffff;--ui-kpi-line: #ebebeb;--ui-kpi-grid: #f0f0f0;--ui-kpi-ink: #171717;--ui-kpi-muted: #8f8f8f;--ui-kpi-up: #1f8a4c;--ui-kpi-down: #e5484d;--ui-kpi-guide: #d9d9d9;--ui-kpi-label: #525252;--ui-kpi-ring-gap: #fff;--ui-kpi-ring: rgba(23, 23, 23, 0.25);--ui-kpi-shadow: 0 1px 2px rgba(0, 0, 0, 0.03), 0 8px 24px rgba(0, 0, 0, 0.035);--ui-kpi-tip-shadow: 0 8px 24px -6px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.04);--ui-kpi-ease: cubic-bezier(0.22, 1, 0.36, 1);box-sizing: border-box;container-type: inline-size;width: 100%;max-width: 460px;padding: 20px 20px 18px;background: var(--ui-kpi-card);border: 1px solid var(--ui-kpi-line);border-radius: 20px;box-shadow: var(--ui-kpi-shadow);font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;color: var(--ui-kpi-ink);-webkit-font-smoothing: antialiased;font-variant-numeric: tabular-nums}.ui-kpi *, .ui-kpi *::before, .ui-kpi *::after{box-sizing: border-box}.ui-kpi__title{margin: 0;overflow-wrap: anywhere;font-size: 14px;font-weight: 400;line-height: 20px;color: var(--ui-kpi-muted)}.ui-kpi__value{display: flex;flex-wrap: wrap;align-items: baseline;gap: 10px;margin: 8px 0 0;font-size: 28px;font-weight: 500;line-height: 34px;letter-spacing: -0.02em}.ui-kpi__delta{flex: none;white-space: nowrap;font-size: 14px;font-weight: 450;letter-spacing: 0}.ui-kpi__amount{min-width: 0;overflow-wrap: anywhere}.ui-kpi__delta[data-trend="up"]{color: var(--ui-kpi-up)}.ui-kpi__delta[data-trend="down"]{color: var(--ui-kpi-down)}.ui-kpi__chart{display: grid;grid-template-columns: auto 1fr;grid-template-rows: 116px 20px;column-gap: 12px;row-gap: 8px;margin-top: 24px}.ui-kpi__yaxis{display: flex;flex-direction: column;justify-content: space-between;margin: -9px 0;font-size: 12px;line-height: 18px;text-align: right;color: var(--ui-kpi-muted)}.ui-kpi__plot{position: relative;touch-action: pan-y;outline: none;cursor: crosshair}.ui-kpi__plot:focus-visible{border-radius: 4px;box-shadow: 0 0 0 4px var(--ui-kpi-ring-gap), 0 0 0 6px var(--ui-kpi-ring)}.ui-kpi__grid{position: absolute;left: 0;right: 0;height: 1px;background: var(--ui-kpi-grid)}.ui-kpi__lines{position: absolute;inset: 0;width: 100%;height: 100%;overflow: visible;animation: ui-kpi-draw 1100ms var(--ui-kpi-ease) both}.ui-kpi__lines path{fill: none;stroke-width: 2;stroke-linecap: round;stroke-linejoin: round}.ui-kpi__marker{position: absolute;inset: 0;pointer-events: none;opacity: 0;transition: opacity 160ms ease}.ui-kpi__marker[data-open]{opacity: 1}.ui-kpi__guide, .ui-kpi__dot{position: absolute;transition: left 220ms var(--ui-kpi-ease), top 220ms var(--ui-kpi-ease)}.ui-kpi__guide{top: -4px;bottom: 0;width: 1px;margin-left: -0.5px;background: var(--ui-kpi-guide)}.ui-kpi__dot{width: 10px;height: 10px;margin: -5px 0 0 -5px;border-radius: 50%;box-shadow: 0 0 0 2px var(--ui-kpi-card)}.ui-kpi__point{position: absolute;width: 8px;height: 8px;margin: -4px 0 0 -4px;border-radius: 50%;box-shadow: 0 0 0 2px var(--ui-kpi-card);pointer-events: none;animation: ui-kpi-pop 400ms var(--ui-kpi-ease) both}.ui-kpi__plot[data-empty]{cursor: default}.ui-kpi__plot[data-empty] > :not(.ui-kpi__grid, .ui-kpi__empty){display: none}.ui-kpi__empty{position: absolute;top: 50%;left: 50%;max-width: 100%;margin: 0;padding: 0 10px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;background: var(--ui-kpi-card);transform: translate(-50%, -50%);font-size: 13px;line-height: 18px;text-align: center;color: var(--ui-kpi-muted)}.ui-kpi__tooltip{position: absolute;top: -12px;z-index: 2;min-width: 176px;max-width: calc(100cqw - 16px);padding: 10px 12px 12px;background: var(--ui-kpi-card);border: 1px solid var(--ui-kpi-line);border-radius: 12px;box-shadow: var(--ui-kpi-tip-shadow);pointer-events: none;opacity: 0;transform: translateX(calc(var(--ui-kpi-shift) + var(--ui-kpi-nudge, 0px))) scale(0.97);transition: left 220ms var(--ui-kpi-ease), opacity 160ms ease, transform 220ms var(--ui-kpi-ease)}.ui-kpi__tooltip[data-side="right"]{--ui-kpi-shift: 14px;transform-origin: left top}.ui-kpi__tooltip[data-side="left"]{--ui-kpi-shift: calc(-100% - 14px);transform-origin: right top}.ui-kpi__tooltip[data-open]{opacity: 1;transform: translateX(calc(var(--ui-kpi-shift) + var(--ui-kpi-nudge, 0px)))}.ui-kpi__date{overflow: hidden;text-overflow: ellipsis;white-space: nowrap;margin: 0 0 6px;font-size: 12px;line-height: 18px;color: var(--ui-kpi-muted)}.ui-kpi__tooltip ul{display: grid;grid-template-columns: minmax(0, 1fr);gap: 4px;margin: 0;padding: 0;list-style: none}.ui-kpi__tooltip li{display: flex;align-items: center;gap: 8px;font-size: 13px;line-height: 20px}.ui-kpi__swatch{flex: none;width: 10px;height: 2px;border-radius: 1px}.ui-kpi__label{flex: 1;min-width: 0;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;color: var(--ui-kpi-label)}.ui-kpi__num{flex: none;padding-left: 16px;font-weight: 500}.ui-kpi__xaxis{position: relative;grid-column: 2;font-size: 12px;line-height: 20px;color: var(--ui-kpi-muted)}.ui-kpi__xaxis span{position: absolute;top: 0;max-width: 34%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;transform: translateX(-50%)}.ui-kpi__xaxis span[data-edge="start"]{transform: none}.ui-kpi__xaxis span[data-edge="end"]{transform: translateX(-100%)}.ui-kpi__footer{overflow-wrap: anywhere;margin: 16px 0 0;font-size: 13px;line-height: 18px;color: var(--ui-kpi-muted)}@keyframes ui-kpi-draw{from{clip-path: inset(-10% 100% -10% 0)}to{clip-path: inset(-10% -2% -10% 0)}}@keyframes ui-kpi-pop{from{opacity: 0;transform: scale(0.4)}}@media (prefers-reduced-motion: reduce){.ui-kpi__lines, .ui-kpi__point{animation: none}.ui-kpi__marker, .ui-kpi__guide, .ui-kpi__dot, .ui-kpi__tooltip{transition: none}}:where(.dark, [data-theme="dark"]) .ui-kpi{--ui-kpi-card: #232326;--ui-kpi-line: rgba(255, 255, 255, 0.08);--ui-kpi-grid: rgba(255, 255, 255, 0.06);--ui-kpi-ink: #ededed;--ui-kpi-muted: #8f8f8f;--ui-kpi-up: #3dd68c;--ui-kpi-down: #ff6369;--ui-kpi-guide: rgba(255, 255, 255, 0.2);--ui-kpi-label: #c4c4c4;--ui-kpi-ring-gap: #232326;--ui-kpi-ring: rgba(237, 237, 237, 0.35);--ui-kpi-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 8px 24px rgba(0, 0, 0, 0.35);--ui-kpi-tip-shadow: 0 8px 24px -6px rgba(0, 0, 0, 0.5), 0 2px 6px rgba(0, 0, 0, 0.35), 0 0 0 0.5px rgba(255, 255, 255, 0.04)}:where(.dark, [data-theme="dark"]) .ui-kpi__tooltip{background: #2a2a2d;border-color: rgba(255, 255, 255, 0.1)}`;
