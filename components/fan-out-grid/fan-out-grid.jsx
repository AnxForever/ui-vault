import { t as e } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
/* empty css             */ var n = e(),
  r = t(),
  i = [`done`, `running`, `retrying`, `failed`, `queued`],
  a = [`done`, `running`, `retrying`, `failed`],
  o = { queued: `Queued`, running: `Running`, retrying: `Retrying`, done: `Done`, failed: `Failed` },
  s = 1e3,
  c = (e) => (e !== void 0 && Number.isFinite(e) ? e : void 0),
  l = (e) =>
    e === 0
      ? `$0`
      : e < 0.001
        ? `<$0.001`
        : e < 0.01
          ? `$${e.toFixed(3)}`
          : e < 100
            ? `$${e.toFixed(2)}`
            : `$${Math.round(e).toLocaleString(`en-US`)}`,
  u = (e) => {
    let t = Number.isFinite(e) ? Math.max(0, e) : 0;
    if (t < s) return `${Math.round(t)}ms`;
    if (t < 10 * s) return `${(t / s).toFixed(1)}s`;
    let n = Math.round(t / s);
    if (n < 60) return `${n}s`;
    let r = Math.floor(n / 60);
    if (r < 60) return `${r}m ${String(n % 60).padStart(2, `0`)}s`;
    let i = Math.floor(r / 60);
    return i < 24 ? `${i}h ${String(r % 60).padStart(2, `0`)}m` : `${Math.floor(i / 24)}d ${i % 24}h`;
  },
  d = (e) => e.toLocaleString(`en-US`),
  f = (0, n.memo)(function ({ i: e, status: t, dim: n, on: i, pinned: a, setRef: o, onEnter: s, onPick: c }) {
    return (0, r.jsx)(`span`, {
      ref: (t) => o(e, t),
      className: `ui-fog__cell`,
      "data-status": t,
      "data-dim": n ? `` : void 0,
      "data-on": i ? `` : void 0,
      "data-pinned": a ? `` : void 0,
      style: { "--i": e, "--d": Math.min(e, 240) },
      onMouseEnter: () => s(e),
      onClick: () => c(e),
    });
  }),
  p = () =>
    (0, r.jsxs)(`svg`, {
      width: `16`,
      height: `16`,
      viewBox: `0 0 16 16`,
      fill: `none`,
      "aria-hidden": `true`,
      children: [
        (0, r.jsx)(`circle`, { cx: `3`, cy: `8`, r: `1.9`, fill: `currentColor` }),
        (0, r.jsx)(`rect`, {
          x: `10.2`,
          y: `1.6`,
          width: `3.6`,
          height: `3.6`,
          rx: `1`,
          fill: `currentColor`,
          opacity: `0.9`,
        }),
        (0, r.jsx)(`rect`, {
          x: `10.2`,
          y: `6.2`,
          width: `3.6`,
          height: `3.6`,
          rx: `1`,
          fill: `currentColor`,
          opacity: `0.6`,
        }),
        (0, r.jsx)(`rect`, {
          x: `10.2`,
          y: `10.8`,
          width: `3.6`,
          height: `3.6`,
          rx: `1`,
          fill: `currentColor`,
          opacity: `0.3`,
        }),
        (0, r.jsx)(`path`, {
          d: `M4.9 8H7c.6 0 .9-.3 1-.9l.4-2.4c.1-.6.4-.9 1-.9h.6M4.9 8h5.1M4.9 8H7c.6 0 .9.3 1 .9l.4 2.4c.1.6.4.9 1 .9h.6`,
          stroke: `currentColor`,
          strokeWidth: `1.1`,
          strokeLinecap: `round`,
        }),
      ],
    }),
  m = () =>
    (0, r.jsx)(`svg`, {
      width: `14`,
      height: `14`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, {
        d: `M20.0092 2V5.13219C20.0092 5.42605 19.6418 5.55908 19.4537 5.33333C17.6226 3.2875 14.9617 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12`,
        stroke: `currentColor`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
        strokeWidth: `1.8`,
      }),
    });
function h({
  tasks: e,
  job: t,
  workers: s,
  now: h = 0,
  onRetry: _,
  onSelect: v,
  formatCost: y = l,
  title: b = `Fan-out`,
  icon: x,
  className: S,
}) {
  let C = (0, n.useRef)(null),
    w = (0, n.useRef)(null),
    T = (0, n.useRef)(null),
    E = (0, n.useRef)([]),
    D = `${(0, n.useId)()}-tip`,
    [O, k] = (0, n.useState)(null),
    [A, j] = (0, n.useState)(null),
    [M, N] = (0, n.useState)(null),
    [P, F] = (0, n.useState)(null),
    I = Object.fromEntries(i.map((e) => [e, 0]));
  for (let t of e) I[t.status]++;
  let L = e.length,
    R = I.done + I.failed,
    z = e.reduce((e, t) => e + (c(t.cost) ?? 0), 0),
    B = L > 0 && R === L,
    V = e
      .filter((e) => e.status === `done` && c(e.start) !== void 0 && c(e.end) !== void 0)
      .map((e) => e.end - e.start),
    H = V.length ? V.reduce((e, t) => e + t, 0) / V.length : 0,
    U = I.running + I.retrying,
    W = L - R,
    G = Math.max(1, c(s) ?? U),
    K = V.length >= 3 && W > 0 ? (H * W) / G : null,
    q = B ? e.reduce((e, t) => Math.max(e, c(t.end) ?? 0), 0) : (c(h) ?? 0),
    J = A ? e.findIndex((e) => e.id === A) : -1,
    Y = J >= 0 ? J : (O ?? M),
    X = Y !== null && Y >= 0 ? e[Y] : void 0,
    Z = (t) => {
      let n = t === null ? void 0 : e[t],
        r = n && n.id !== A ? n.id : null;
      (j(r), v?.(r ? n : null));
    },
    Q = (0, n.useRef)(Z);
  Q.current = Z;
  let $ = (0, n.useCallback)((e) => Q.current(e), []),
    ee = (0, n.useCallback)((e, t) => {
      E.current[e] = t;
    }, []);
  (0, n.useLayoutEffect)(() => {
    let e = T.current,
      t = C.current,
      n = Y === null ? null : E.current[Y];
    if (!e || !t || !n) return;
    let r = t.getBoundingClientRect(),
      i = t.offsetWidth ? r.width / t.offsetWidth : 1,
      a = n.getBoundingClientRect(),
      o = (a.left + a.width / 2 - r.left) / i,
      s = (a.top - r.top) / i,
      c = (a.bottom - r.top) / i,
      l = e.offsetWidth,
      u = e.offsetHeight,
      d = s - u - 10 < 4,
      f = Math.max(8, Math.min(o - l / 2, t.offsetWidth - l - 8));
    ((e.style.left = `${f}px`),
      (e.style.top = `${d ? c + 10 : s - u - 10}px`),
      e.style.setProperty(`--x`, `${o - f}px`),
      (e.dataset.side = d ? `below` : `above`));
  });
  let te = () => {
      let e = E.current[0],
        t = w.current;
      if (!e || !t) return 1;
      let n = e.offsetTop,
        r = 0;
      for (let e of E.current) {
        if (!e || e.offsetTop !== n) break;
        r++;
      }
      return Math.max(1, r);
    },
    ne = (e) => {
      if (!L) return;
      let t = te(),
        n = M ?? 0,
        r = { ArrowRight: 1, ArrowLeft: -1, ArrowDown: t, ArrowUp: -t, Home: -n, End: L - 1 - n };
      if (e.key in r) {
        (e.preventDefault(), j(null), N(Math.max(0, Math.min(L - 1, M === null ? 0 : n + r[e.key]))));
        return;
      }
      e.key === `Enter` || e.key === ` `
        ? (e.preventDefault(), Z(n))
        : e.key === `Escape` && (j(null), N(null), v?.(null));
    },
    re = L ? Math.floor((R / L) * 10) : 0,
    ie = B
      ? `Finished: ${d(I.done)} done, ${d(I.failed)} failed, ${y(z)}.`
      : `${d(I.done)} of ${d(L)} done${I.failed ? `, ${d(I.failed)} failed` : ``}.`;
  return (0, r.jsxs)(`div`, {
    className: [`ui-fog`, S].filter(Boolean).join(` `),
    children: [
      (0, r.jsx)(`style`, { href: `ui-fan-out-grid`, precedence: `default`, children: g }),
      (0, r.jsxs)(`header`, {
        className: `ui-fog__bar`,
        children: [
          (0, r.jsx)(`span`, { className: `ui-fog__mark`, children: x ?? (0, r.jsx)(p, {}) }),
          (0, r.jsx)(`span`, { className: `ui-fog__title`, title: b, children: b }),
          t && (0, r.jsx)(`span`, { className: `ui-fog__job`, dir: `auto`, title: t, children: t }),
          (0, r.jsxs)(`span`, {
            className: `ui-fog__sum`,
            children: [
              (0, r.jsxs)(`span`, { children: [(0, r.jsx)(`b`, { children: d(I.done) }), ` / `, d(L)] }),
              (0, r.jsx)(`span`, { children: (0, r.jsx)(`b`, { children: y(z) }) }),
              (0, r.jsx)(`span`, {
                className: `ui-fog__time`,
                "data-done": B ? `` : void 0,
                children: B ? `Finished in ${u(q)}` : K === null ? `${u(q)} so far` : `~${u(K)} left`,
              }),
            ],
          }),
        ],
      }),
      (0, r.jsxs)(`div`, {
        ref: C,
        className: `ui-fog__panel`,
        children: [
          (0, r.jsx)(`div`, {
            ref: w,
            className: `ui-fog__grid`,
            role: `group`,
            "aria-label": `${d(L)} tasks – arrow keys move, Enter keeps the details`,
            "aria-describedby": X ? D : void 0,
            tabIndex: 0,
            onKeyDown: ne,
            onMouseLeave: () => k(null),
            onBlur: () => N(null),
            children: e.map((e, t) =>
              (0, r.jsx)(
                f,
                {
                  i: t,
                  status: e.status,
                  dim: !!P && P !== e.status,
                  on: Y === t,
                  pinned: A === e.id,
                  setRef: ee,
                  onEnter: k,
                  onPick: $,
                },
                e.id,
              ),
            ),
          }),
          X &&
            (0, r.jsxs)(
              `div`,
              {
                ref: T,
                id: D,
                role: `tooltip`,
                className: `ui-fog__tip`,
                "data-status": X.status,
                children: [
                  (0, r.jsxs)(`span`, {
                    className: `ui-fog__tip-head`,
                    children: [
                      (0, r.jsx)(`span`, { className: `ui-fog__tip-label`, dir: `auto`, children: X.label }),
                      (0, r.jsx)(`span`, {
                        className: `ui-fog__pill`,
                        "data-status": X.status,
                        children: o[X.status],
                      }),
                    ],
                  }),
                  (0, r.jsx)(`span`, {
                    className: `ui-fog__tip-meta`,
                    children:
                      [
                        X.worker,
                        c(X.start) === void 0
                          ? void 0
                          : u((c(X.end) ?? Math.max(c(h) ?? 0, X.start)) - X.start),
                        c(X.cost) ? y(X.cost) : void 0,
                        (c(X.attempts) ?? 1) > 1 ? `${d(X.attempts)} attempts` : void 0,
                      ]
                        .filter(Boolean)
                        .join(` · `) || `Waiting for a worker`,
                  }),
                  X.error &&
                    (X.status === `failed` || X.status === `retrying`) &&
                    (0, r.jsx)(`span`, { className: `ui-fog__tip-error`, dir: `auto`, children: X.error }),
                  X.result &&
                    X.status === `done` &&
                    (0, r.jsx)(`span`, { className: `ui-fog__tip-result`, dir: `auto`, children: X.result }),
                ],
              },
              X.id,
            ),
        ],
      }),
      (0, r.jsxs)(`div`, {
        className: `ui-fog__foot`,
        children: [
          (0, r.jsx)(`div`, {
            className: `ui-fog__legend`,
            role: `group`,
            "aria-label": `Show only`,
            children: a.map((e) =>
              (0, r.jsxs)(
                `button`,
                {
                  type: `button`,
                  className: `ui-fog__key`,
                  "data-status": e,
                  "aria-pressed": P === e,
                  "data-off": P && P !== e ? `` : void 0,
                  "data-zero": I[e] === 0 && e !== `done` ? `` : void 0,
                  onClick: () => F((t) => (t === e ? null : e)),
                  children: [
                    (0, r.jsx)(`span`, { className: `ui-fog__swatch`, "aria-hidden": `true` }),
                    (0, r.jsx)(`span`, { className: `ui-fog__n`, children: d(I[e]) }),
                    ` `,
                    o[e].toLowerCase(),
                  ],
                },
                e,
              ),
            ),
          }),
          _ &&
            I.failed > 0 &&
            (0, r.jsxs)(`button`, {
              type: `button`,
              className: `ui-fog__retry`,
              onClick: () => _(e.filter((e) => e.status === `failed`).map((e) => e.id)),
              children: [(0, r.jsx)(m, {}), `Retry failed`],
            }),
        ],
      }),
      (0, r.jsx)(`div`, {
        className: `ui-fog__sr`,
        "aria-live": `polite`,
        "aria-atomic": `true`,
        "data-step": re,
        children: ie,
      }),
    ],
  });
}
var g = `.ui-fog{--ui-fog-tray: #f0f0f0;--ui-fog-card: #ffffff;--ui-fog-panel: #ffffff;--ui-fog-strong: #171717;--ui-fog-ink: #171717;--ui-fog-text: #6b6b6b;--ui-fog-muted: #8a8a8a;--ui-fog-faint: #b8b8b8;--ui-fog-line: #ececec;--ui-fog-fill: rgba(0, 0, 0, 0.05);--ui-fog-accent: #2f6bff;--ui-fog-focus: rgba(23, 23, 23, 0.22);--ui-fog-queued-bg: #f3f3f3;--ui-fog-queued-edge: #e6e6e6;--ui-fog-running-bg: #e3ecff;--ui-fog-running-edge: #a9c2ff;--ui-fog-running-ink: #2456d6;--ui-fog-retrying-bg: #ffefd6;--ui-fog-retrying-edge: #f7c27a;--ui-fog-retrying-ink: #b85c00;--ui-fog-done-bg: #dcf3e4;--ui-fog-done-edge: #9fd9b4;--ui-fog-done-ink: #1a7f45;--ui-fog-failed-bg: #fde3df;--ui-fog-failed-edge: #f1a397;--ui-fog-failed-ink: #c2331f;--ui-fog-shine: rgba(255, 255, 255, 0.9);--ui-fog-shadow: 0 0 0 1px #ececec, 0 1px 2px rgba(0, 0, 0, 0.04);--ui-fog-pop: 0 0 0 1px #ececec, 0 16px 36px -12px rgba(0, 0, 0, 0.22);--ui-fog-cell: 12px;--ui-fog-gap: 4px;--ui-fog-ease: cubic-bezier(0.22, 1, 0.36, 1);position: relative;box-sizing: border-box;width: 100%;min-width: 0;padding: 4px;border-radius: 20px;background: var(--ui-fog-tray);container: ui-fog / inline-size;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 14px;font-weight: 400;line-height: 20px;letter-spacing: -0.006em;color: var(--ui-fog-text);text-align: left;-webkit-font-smoothing: antialiased}.ui-fog *, .ui-fog *::before, .ui-fog *::after{box-sizing: border-box}:where(.ui-fog) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;letter-spacing: inherit;text-align: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}.ui-fog button:focus-visible{outline: 2px solid var(--ui-fog-focus);outline-offset: 1px}.ui-fog svg{display: block;flex: none}.ui-fog__sr{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}.ui-fog__n{font-variant-numeric: tabular-nums}.ui-fog__bar{display: flex;flex-wrap: wrap;align-items: center;gap: 4px 8px;min-width: 0;padding: 8px 12px 12px}.ui-fog__mark{display: grid;flex: none;place-items: center;width: 16px;color: var(--ui-fog-accent)}.ui-fog__mark > svg{width: 16px;height: 16px}.ui-fog__title{flex: 0 1 auto;min-width: 0;overflow: hidden;font-weight: 600;color: var(--ui-fog-strong);white-space: nowrap;text-overflow: ellipsis}.ui-fog__job{min-width: 0;overflow: hidden;font-size: 13px;color: var(--ui-fog-muted);white-space: nowrap;text-overflow: ellipsis}.ui-fog__sum{display: flex;flex-wrap: wrap;align-items: center;gap: 2px 14px;margin-left: auto;font-size: 13px;line-height: 18px;color: var(--ui-fog-muted);font-variant-numeric: tabular-nums;white-space: nowrap}.ui-fog__sum b{font-weight: 600;color: var(--ui-fog-ink)}.ui-fog__time[data-done]{font-weight: 500;color: var(--ui-fog-done-ink)}.ui-fog__panel{position: relative;display: grid;padding: 18px;border-radius: 16px;background: var(--ui-fog-panel);box-shadow: var(--ui-fog-shadow)}.ui-fog__foot{display: flex;flex-wrap: wrap;align-items: center;gap: 4px 12px;min-width: 0;padding: 8px 6px 4px 8px}.ui-fog__legend{display: flex;flex-wrap: wrap;gap: 0 2px}.ui-fog__key{display: inline-flex;align-items: center;gap: 7px;height: 28px;padding: 0 9px;border-radius: 999px;font-size: 13px;line-height: 18px;color: var(--ui-fog-muted);transition: background-color 160ms ease, color 160ms ease, opacity 200ms ease, box-shadow 160ms ease}.ui-fog__key:hover{background: var(--ui-fog-fill);color: var(--ui-fog-ink)}.ui-fog__key[aria-pressed="true"]{background: var(--ui-fog-card);box-shadow: var(--ui-fog-shadow);color: var(--ui-fog-ink)}.ui-fog__key[data-zero]{display: none}.ui-fog__key[data-off]{opacity: 0.5}.ui-fog__key .ui-fog__n{font-weight: 600;color: var(--ui-fog-ink)}.ui-fog__swatch{width: 9px;height: 9px;border-radius: 3px;background: var(--k-bg);box-shadow: inset 0 0 0 1px var(--k-edge)}.ui-fog__retry{display: inline-flex;align-items: center;gap: 6px;height: 30px;margin-left: auto;padding: 0 12px 0 10px;border-radius: 999px;background: var(--ui-fog-card);box-shadow: var(--ui-fog-shadow);font-size: 13px;font-weight: 500;color: var(--ui-fog-failed-ink);animation: ui-fog-in 260ms var(--ui-fog-ease) both;transition: box-shadow 160ms ease}.ui-fog__retry:hover{box-shadow: var(--ui-fog-pop)}.ui-fog [data-status="queued"]{--k-bg: var(--ui-fog-queued-bg);--k-edge: var(--ui-fog-queued-edge);--k-ink: var(--ui-fog-muted)}.ui-fog [data-status="running"]{--k-bg: var(--ui-fog-running-bg);--k-edge: var(--ui-fog-running-edge);--k-ink: var(--ui-fog-running-ink)}.ui-fog [data-status="retrying"]{--k-bg: var(--ui-fog-retrying-bg);--k-edge: var(--ui-fog-retrying-edge);--k-ink: var(--ui-fog-retrying-ink)}.ui-fog [data-status="done"]{--k-bg: var(--ui-fog-done-bg);--k-edge: var(--ui-fog-done-edge);--k-ink: var(--ui-fog-done-ink)}.ui-fog [data-status="failed"]{--k-bg: var(--ui-fog-failed-bg);--k-edge: var(--ui-fog-failed-edge);--k-ink: var(--ui-fog-failed-ink)}.ui-fog__grid{display: grid;grid-template-columns: repeat(auto-fill, var(--ui-fog-cell));gap: var(--ui-fog-gap);justify-content: space-between;padding: 2px;margin: -2px;border-radius: 6px;outline: none}.ui-fog__grid:focus-visible{box-shadow: 0 0 0 2px var(--ui-fog-focus)}.ui-fog__cell{position: relative;width: var(--ui-fog-cell);height: var(--ui-fog-cell);border-radius: 3.5px;background: var(--k-bg);box-shadow: inset 0 0 0 1px var(--k-edge);overflow: hidden;cursor: pointer;transition: background-color 360ms ease, box-shadow 200ms ease, opacity 220ms ease, transform 160ms ease;animation: ui-fog-cell-in 420ms var(--ui-fog-ease) calc(var(--d, 0) * 2ms) backwards}.ui-fog__cell[data-status="running"]::before{content: "";position: absolute;inset: 0;background: linear-gradient(110deg, transparent 25%, var(--ui-fog-shine) 50%, transparent 75%) 0 0 / 300% 100%;opacity: 0.8;animation: ui-fog-cell-sweep 1300ms linear calc(var(--i, 0) * -97ms) infinite}.ui-fog__cell[data-status="retrying"]{animation: ui-fog-breathe 1100ms ease-in-out infinite alternate}.ui-fog__cell:is([data-status="done"], [data-status="failed"]){animation: ui-fog-pop 420ms var(--ui-fog-ease)}.ui-fog__cell:hover, .ui-fog__cell[data-on]{box-shadow: inset 0 0 0 1.5px var(--k-ink);transform: scale(1.3);z-index: 1}.ui-fog__cell[data-pinned]{box-shadow: inset 0 0 0 1.5px var(--k-ink), 0 0 0 2px var(--ui-fog-focus)}.ui-fog__cell[data-dim]{opacity: 0.2}.ui-fog__tip{position: absolute;top: 0;left: 0;z-index: 5;display: grid;gap: 3px;width: max-content;max-width: min(290px, calc(100% - 16px));padding: 10px 14px 11px;border-radius: 14px;background: var(--ui-fog-card);box-shadow: var(--ui-fog-pop);pointer-events: none;transform-origin: var(--x, 50%) bottom;animation: ui-fog-tip 160ms var(--ui-fog-ease) both}.ui-fog__tip[data-side="below"]{transform-origin: var(--x, 50%) top}.ui-fog__tip-head{display: flex;align-items: flex-start;gap: 8px;min-width: 0}.ui-fog__tip-label{display: -webkit-box;min-width: 0;overflow: hidden;font-weight: 600;color: var(--ui-fog-ink);text-align: start;overflow-wrap: anywhere;-webkit-line-clamp: 2;-webkit-box-orient: vertical}.ui-fog__pill{flex: none;height: 20px;margin-left: auto;padding: 0 8px;border-radius: 999px;background: var(--k-bg);font-size: 12px;font-weight: 500;line-height: 20px;color: var(--k-ink)}.ui-fog__tip-meta{font-size: 12.5px;line-height: 18px;color: var(--ui-fog-muted);font-variant-numeric: tabular-nums;overflow-wrap: anywhere}.ui-fog__tip-result{display: -webkit-box;overflow: hidden;font-size: 13px;line-height: 19px;color: var(--ui-fog-text);text-align: start;white-space: pre-line;overflow-wrap: anywhere;-webkit-line-clamp: 4;-webkit-box-orient: vertical}.ui-fog__tip-error{display: -webkit-box;overflow: hidden;font-size: 13px;line-height: 19px;color: var(--ui-fog-failed-ink);text-align: start;white-space: pre-line;overflow-wrap: anywhere;-webkit-line-clamp: 4;-webkit-box-orient: vertical}@container ui-fog (max-width: 520px){.ui-fog__panel{--ui-fog-cell: 10px;--ui-fog-gap: 3px;padding: 14px}.ui-fog__sum{flex-basis: 100%;justify-content: space-between;margin-left: 0}.ui-fog__foot{align-items: center}.ui-fog__legend{display: grid;grid-template-columns: repeat(2, max-content)}.ui-fog__key[data-zero]{display: inline-flex;opacity: 0.45}.ui-fog__retry{flex: none;margin-left: auto}}@keyframes ui-fog-cell-in{from{opacity: 0;transform: scale(0.6)}}@keyframes ui-fog-pop{0%{transform: scale(0.7)}55%{transform: scale(1.18)}100%{transform: scale(1)}}@keyframes ui-fog-cell-sweep{from{background-position: 100% 0}to{background-position: -50% 0}}@keyframes ui-fog-breathe{from{opacity: 0.55}to{opacity: 1}}@keyframes ui-fog-tip{from{opacity: 0;transform: translateY(3px) scale(0.97)}}@keyframes ui-fog-in{from{opacity: 0;transform: translateY(2px)}}@media (prefers-reduced-motion: reduce){.ui-fog *, .ui-fog *::before, .ui-fog *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-fog{--ui-fog-tray: #1a1a1c;--ui-fog-card: #232326;--ui-fog-panel: #232326;--ui-fog-strong: #f5f5f5;--ui-fog-ink: #f0f0f0;--ui-fog-text: #a1a1a1;--ui-fog-muted: #8a8a8a;--ui-fog-faint: #5c5c5c;--ui-fog-line: #2e2e31;--ui-fog-fill: rgba(255, 255, 255, 0.06);--ui-fog-accent: #6d93ff;--ui-fog-focus: rgba(255, 255, 255, 0.3);--ui-fog-queued-bg: #2b2b2f;--ui-fog-queued-edge: #36363b;--ui-fog-running-bg: #1d2b4d;--ui-fog-running-edge: #3c5fb3;--ui-fog-running-ink: #8aaeff;--ui-fog-retrying-bg: #3a2a12;--ui-fog-retrying-edge: #8a5a1c;--ui-fog-retrying-ink: #ffb357;--ui-fog-done-bg: #15321f;--ui-fog-done-edge: #2f7a4b;--ui-fog-done-ink: #55d68c;--ui-fog-failed-bg: #3d1a16;--ui-fog-failed-edge: #8f3a2e;--ui-fog-failed-ink: #ff8a76;--ui-fog-shine: rgba(255, 255, 255, 0.28);--ui-fog-shadow: 0 0 0 1px #2e2e31, 0 1px 2px rgba(0, 0, 0, 0.4);--ui-fog-pop: 0 0 0 1px #34343a, 0 16px 36px -12px rgba(0, 0, 0, 0.7)}`,
  _ = [
    `north`,
    `blue`,
    `bright`,
    `silver`,
    `cedar`,
    `lumen`,
    `vertex`,
    `harbor`,
    `pixel`,
    `orbit`,
    `maple`,
    `atlas`,
    `nimbus`,
    `quartz`,
    `river`,
    `summit`,
  ],
  v = [
    `wind`,
    `stack`,
    `labs`,
    `works`,
    `flow`,
    `forge`,
    `grid`,
    `scale`,
    `loop`,
    `field`,
    `line`,
    `base`,
    `path`,
    `sync`,
    `ware`,
  ],
  y = [`.io`, `.com`, `.ai`, `.co`],
  b = 240,
  x = 16,
  S = (e) => {
    let t = Math.sin(e * 9301 + 49297) * 233280;
    return t - Math.floor(t);
  },
  C = [
    `Series B · 214 people · CTO found`,
    `Seed · 18 people · founder email found`,
    `Public · 3,400 people · VP Eng found`,
    `Series A · 62 people · Head of Data found`,
    `Bootstrapped · 9 people · CEO found`,
    `Series C · 540 people · CIO found`,
  ],
  w = [
    `Rate limited by the enrichment API (429)`,
    `The website blocked the crawler`,
    `No company found for this domain`,
    `Timed out after 30s`,
  ],
  T = (() => {
    let e = Array(x).fill(0),
      t = [];
    for (let n = 0; n < b; n++) {
      let r = e.indexOf(Math.min(...e)),
        i = e[r] + 60,
        a = 650 + S(n) * 1300,
        o = S(n + 500) < 0.07,
        s = n === 61 || n === 143 || n === 208,
        c = o || s ? i + a * 0.55 : i + a,
        l = o || s ? c + 450 + a : c;
      ((e[r] = l),
        t.push({
          label: `${_[n % 16]}${v[Math.floor(n / 16) % 15]}${y[n % 4]}`,
          worker: `Researcher ${r + 1}`,
          start: i,
          first: c,
          end: l,
          retry: o || s,
          fails: s,
          cost: 0.006 + S(n + 900) * 0.014,
          result: C[n % C.length],
          error: w[(n * 7) % w.length],
        }));
    }
    return t;
  })(),
  E = Math.max(...T.map((e) => e.end)),
  D = 1800,
  O = 1400,
  k = 4500,
  A = (e, t) =>
    T.map((n, r) => {
      let i = { id: String(r), label: n.label, worker: n.worker, start: n.start, cost: n.cost };
      return e < n.start
        ? { ...i, status: `queued`, worker: void 0, start: void 0, cost: void 0 }
        : e < n.first
          ? { ...i, status: `running`, cost: n.cost * ((e - n.start) / (n.first - n.start)) }
          : n.retry && e < n.end
            ? { ...i, status: `retrying`, attempts: 2, error: n.error }
            : n.fails
              ? t === null || e < t
                ? { ...i, status: `failed`, end: n.end, attempts: 2, error: n.error }
                : e < t + O
                  ? { ...i, status: `running`, start: t, attempts: 3 }
                  : {
                      ...i,
                      status: `done`,
                      start: t,
                      end: t + O,
                      attempts: 3,
                      cost: n.cost * 1.5,
                      result: n.result,
                    }
              : { ...i, status: `done`, end: n.end, attempts: n.retry ? 2 : 1, result: n.result };
    });
function j() {
  let [e, t] = (0, n.useState)(0),
    [i, a] = (0, n.useState)(null),
    o = (0, n.useRef)(performance.now()),
    s = (0, n.useRef)(null);
  return (
    (s.current = i),
    (0, n.useEffect)(() => {
      let e = window.setInterval(() => {
        let e = performance.now() - o.current;
        if ((s.current === null && e > E + D && a(e), s.current !== null && e > s.current + O + k)) {
          ((o.current = performance.now()), a(null), t(0));
          return;
        }
        t(e);
      }, 100);
      return () => window.clearInterval(e);
    }, []),
    (0, r.jsx)(`div`, {
      className: `fog-demo`,
      children: (0, r.jsx)(h, {
        tasks: A(e, i),
        job: `Enrich 240 leads`,
        workers: x,
        now: e,
        onRetry: () => a(performance.now() - o.current),
      }),
    })
  );
}
