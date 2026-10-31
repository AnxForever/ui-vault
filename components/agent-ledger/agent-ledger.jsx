/*
 * affectUI · agent-ledger (Pro)
 * Implementation recovered from public bundle asset: demo-CGzh0xx5.js
 * Styles inlined in the module -> agent-ledger.css (1 block(s))
 * Demo usage: agent-ledger.demo.jsx
 * Minified identifiers kept; formatting by prettier.
 */

import { t as e } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
/* empty css             */ var n = e(),
  r = t(),
  i = (e) => {
    let t = Math.max(0, Math.round(e / 1e3));
    if (t < 10) return `just now`;
    if (t < 60) return `${t}s ago`;
    let n = Math.floor(t / 60);
    if (n < 60) return `${n}m ago`;
    let r = Math.floor(n / 60);
    return r < 24 ? `${r}h ago` : `${Math.floor(r / 24)}d ago`;
  },
  a = (e, t) => {
    let n = t - e;
    if (n > -6e4 && n < 2592e6) return i(n);
    let r = new Date(e).getFullYear() === new Date(t).getFullYear();
    return new Intl.DateTimeFormat(`en`, {
      month: `short`,
      day: `numeric`,
      year: r ? void 0 : `numeric`,
    }).format(e);
  },
  o = (e) => (e.match(/[\p{L}\p{N}]/u)?.[0] ?? `·`).toUpperCase(),
  s = (e) => {
    let t = new Map();
    for (let n of e) for (let e of n.dependsOn ?? []) t.set(e, [...(t.get(e) ?? []), n]);
    return t;
  },
  c = (e, t) => {
    let n = [],
      r = new Set([e]),
      i = [e];
    for (let e = 0; e < i.length; e++)
      for (let a of t.get(i[e]) ?? []) r.has(a.id) || (r.add(a.id), n.push(a), i.push(a.id));
    return n;
  },
  l = () =>
    (0, r.jsxs)(`svg`, {
      width: `16`,
      height: `16`,
      viewBox: `0 0 16 16`,
      fill: `none`,
      "aria-hidden": `true`,
      children: [
        (0, r.jsx)(`rect`, {
          x: `2`,
          y: `1.8`,
          width: `12`,
          height: `12.4`,
          rx: `2.6`,
          stroke: `currentColor`,
          strokeWidth: `1.3`,
        }),
        (0, r.jsx)(`path`, {
          d: `M5 5.4h6M5 8h6M5 10.6h3.6`,
          stroke: `currentColor`,
          strokeWidth: `1.3`,
          strokeLinecap: `round`,
        }),
      ],
    }),
  u = () =>
    (0, r.jsxs)(`svg`, {
      width: `13`,
      height: `13`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      "aria-hidden": `true`,
      children: [
        (0, r.jsx)(`path`, {
          d: `M4 7H15C18.3137 7 21 9.68629 21 13C21 16.3137 18.3137 19 15 19H8`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.8`,
        }),
        (0, r.jsx)(`path`, {
          d: `M8 3L4 7L8 11`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.8`,
        }),
      ],
    }),
  d = () =>
    (0, r.jsxs)(`svg`, {
      width: `13`,
      height: `13`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      "aria-hidden": `true`,
      children: [
        (0, r.jsx)(`path`, {
          d: `M20 7H9C5.68629 7 3 9.68629 3 13C3 16.3137 5.68629 19 9 19H16`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.8`,
        }),
        (0, r.jsx)(`path`, {
          d: `M16 3L20 7L16 11`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.8`,
        }),
      ],
    }),
  f = () =>
    (0, r.jsxs)(`svg`, {
      width: `12`,
      height: `12`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      "aria-hidden": `true`,
      children: [
        (0, r.jsx)(`path`, {
          d: `M4.26781 18.8447C4.49269 20.515 5.87613 21.8235 7.55966 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.879 17.7547 20 16.6376 20 15.5C20 14.3624 19.879 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55966 9.09909C5.87613 9.17649 4.49269 10.485 4.26781 12.1553C4.12104 13.2453 4 14.3624 4 15.5C4 16.6376 4.12104 17.7547 4.26781 18.8447Z`,
          stroke: `currentColor`,
          strokeWidth: `1.8`,
        }),
        (0, r.jsx)(`path`, {
          d: `M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5V9`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.8`,
        }),
      ],
    });
function p({
  entries: e,
  agent: t,
  now: i,
  undone: p,
  defaultUndone: h = [],
  onUndo: g,
  onRedo: _,
  pointAt: v = null,
  title: y = `Ledger`,
  className: b,
}) {
  let x = (0, n.useId)(),
    S = (0, n.useRef)(null);
  S.current === null && (S.current = new Set(e.map((e) => e.id)));
  let [C, w] = (0, n.useState)(h),
    T = new Set(p ?? C),
    [E, D] = (0, n.useState)(null),
    [O, k] = (0, n.useState)({}),
    A = (0, n.useRef)(p ?? []);
  (0, n.useEffect)(() => {
    if (!p) return;
    let e = p.filter((e) => !A.current.includes(e));
    ((A.current = p), e.length && k(Object.fromEntries(e.map((e, t) => [e, t]))));
  }, [p]);
  let [j, M] = (0, n.useState)(() => Date.now());
  (0, n.useEffect)(() => {
    if (i !== void 0) return;
    let e = window.setInterval(() => M(Date.now()), 15e3);
    return () => window.clearInterval(e);
  }, [i]);
  let N = i ?? j,
    P = [...e].sort((e, t) => t.at - e.at),
    F = (0, n.useMemo)(() => s(e), [e]),
    I = (e) => c(e, F).filter((e) => !T.has(e.id)),
    L = E ?? v,
    R = L ? I(L) : [],
    z = new Map(R.map((e) => [e.id, e.reversible === !1 ? `kept` : `also`])),
    B = (e) => {
      let t = [
        e.id,
        ...I(e.id)
          .filter((e) => e.reversible !== !1)
          .map((e) => e.id),
      ];
      (k(Object.fromEntries(t.map((e, t) => [e, t]))),
        w((e) => [...e, ...t.filter((t) => !e.includes(t))]),
        D(null),
        g?.(t));
    },
    V = (e) => {
      let t = [
        e.id,
        ...c(e.id, F)
          .filter((e) => T.has(e.id))
          .map((e) => e.id),
      ];
      (k({}), w((e) => e.filter((e) => !t.includes(e))), _?.(t));
    },
    H = e.length,
    U = e.filter((e) => T.has(e.id)).length;
  return (0, r.jsxs)(`div`, {
    className: [`ui-al`, b].filter(Boolean).join(` `),
    children: [
      (0, r.jsx)(`style`, { href: `ui-agent-ledger`, precedence: `default`, children: m }),
      (0, r.jsxs)(`header`, {
        className: `ui-al__bar`,
        children: [
          (0, r.jsx)(`span`, { className: `ui-al__mark`, children: (0, r.jsx)(l, {}) }),
          (0, r.jsx)(`span`, { className: `ui-al__title`, id: x, children: y }),
          t && (0, r.jsx)(`span`, { className: `ui-al__agent`, children: t }),
          (0, r.jsxs)(`span`, {
            className: `ui-al__sum`,
            children: [
              (0, r.jsxs)(`span`, {
                children: [
                  (0, r.jsx)(`b`, { children: H.toLocaleString(`en-US`) }),
                  ` `,
                  H === 1 ? `change` : `changes`,
                ],
              }),
              U > 0 &&
                (0, r.jsxs)(`span`, {
                  className: `ui-al__sum-undone`,
                  children: [(0, r.jsx)(`b`, { children: U.toLocaleString(`en-US`) }), ` undone`],
                }),
            ],
          }),
        ],
      }),
      (0, r.jsx)(`ol`, {
        className: `ui-al__panel`,
        "aria-labelledby": x,
        children: P.map((e) => {
          let t = T.has(e.id),
            n = z.get(e.id),
            i = e.reversible === !1,
            s = t || i ? 0 : I(e.id).length,
            c = e.change && (e.change[0].trim() || e.change[1].trim()) ? e.change : void 0;
          return (0, r.jsxs)(
            `li`,
            {
              className: `ui-al__row`,
              "data-undone": t ? `` : void 0,
              "data-initial": S.current?.has(e.id) ? `` : void 0,
              "data-preview": L === e.id ? `` : void 0,
              "data-chain": n,
              style: { "--o": O[e.id] ?? 0 },
              children: [
                (0, r.jsx)(`span`, {
                  className: `ui-al__icon`,
                  "aria-hidden": `true`,
                  children: e.icon ?? o(e.system),
                }),
                (0, r.jsxs)(`div`, {
                  className: `ui-al__main`,
                  children: [
                    (0, r.jsxs)(`span`, {
                      className: `ui-al__what`,
                      title: e.target ? `${e.action} ${e.target}` : e.action,
                      children: [
                        (0, r.jsx)(`span`, { className: `ui-al__action`, dir: `auto`, children: e.action }),
                        e.target &&
                          (0, r.jsx)(`span`, { className: `ui-al__target`, dir: `auto`, children: e.target }),
                        (0, r.jsx)(`span`, { className: `ui-al__strike`, "aria-hidden": `true` }),
                      ],
                    }),
                    (0, r.jsx)(`span`, {
                      className: `ui-al__change`,
                      title: c ? `${c[0]} → ${c[1]}` : e.detail,
                      children: c
                        ? (0, r.jsxs)(r.Fragment, {
                            children: [
                              (0, r.jsx)(`span`, { className: `ui-al__before`, dir: `auto`, children: c[0] }),
                              (0, r.jsx)(`span`, {
                                className: `ui-al__arrow`,
                                "aria-label": `to`,
                                children: `→`,
                              }),
                              (0, r.jsx)(`span`, { className: `ui-al__after`, dir: `auto`, children: c[1] }),
                            ],
                          })
                        : (0, r.jsx)(`span`, { className: `ui-al__detail`, dir: `auto`, children: e.detail }),
                    }),
                  ],
                }),
                (0, r.jsx)(`div`, {
                  className: `ui-al__end`,
                  children: n
                    ? (0, r.jsx)(`span`, {
                        className: `ui-al__flag`,
                        "data-kind": n,
                        children:
                          n === `also`
                            ? `Also undone`
                            : (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(f, {}), `Can't undo`] }),
                      })
                    : (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)(`span`, {
                            className: `ui-al__time`,
                            "data-hide": t || !i ? `` : void 0,
                            children: t
                              ? `Undone`
                              : (0, r.jsxs)(r.Fragment, {
                                  children: [
                                    a(e.at, N),
                                    (0, r.jsxs)(`span`, {
                                      className: `ui-al__sys`,
                                      children: [` · `, e.system],
                                    }),
                                  ],
                                }),
                          }),
                          t
                            ? (0, r.jsxs)(`button`, {
                                type: `button`,
                                className: `ui-al__act`,
                                onClick: () => V(e),
                                "aria-label": `Redo: ${e.action}${e.target ? ` ${e.target}` : ``}`,
                                children: [
                                  (0, r.jsx)(d, {}),
                                  (0, r.jsx)(`span`, { className: `ui-al__act-label`, children: `Redo` }),
                                ],
                              })
                            : i
                              ? null
                              : (0, r.jsxs)(`button`, {
                                  type: `button`,
                                  className: `ui-al__act`,
                                  onMouseEnter: () => D(e.id),
                                  onMouseLeave: () => D((t) => (t === e.id ? null : t)),
                                  onFocus: () => D(e.id),
                                  onBlur: () => D((t) => (t === e.id ? null : t)),
                                  onClick: () => B(e),
                                  "aria-label": `Undo: ${e.action}${e.target ? ` ${e.target}` : ``}${s ? ` – and ${s} that build on it` : ``}`,
                                  children: [
                                    (0, r.jsx)(u, {}),
                                    (0, r.jsx)(`span`, { className: `ui-al__act-label`, children: `Undo` }),
                                  ],
                                }),
                        ],
                      }),
                }),
              ],
            },
            e.id,
          );
        }),
      }),
    ],
  });
}
var m = `.ui-al{--ui-al-tray: #f0f0f0;--ui-al-panel: #ffffff;--ui-al-card: #ffffff;--ui-al-strong: #171717;--ui-al-ink: #171717;--ui-al-text: #6b6b6b;--ui-al-muted: #8a8a8a;--ui-al-faint: #c2c2c2;--ui-al-line: #f0f0f0;--ui-al-fill: rgba(0, 0, 0, 0.05);--ui-al-accent: #2f6bff;--ui-al-focus: rgba(23, 23, 23, 0.22);--ui-al-undo-bg: #f2f6ff;--ui-al-also-bg: #f5f8ff;--ui-al-also-chip: #e3ecff;--ui-al-also-fg: #2456d6;--ui-al-kept-bg: #fff8ee;--ui-al-kept-chip: #ffefd6;--ui-al-kept-fg: #b85c00;--ui-al-strike: #8a8a8a;--ui-al-shadow: 0 0 0 1px #ececec, 0 1px 2px rgba(0, 0, 0, 0.04);--ui-al-ease: cubic-bezier(0.22, 1, 0.36, 1);--ui-al-row: 62px;position: relative;box-sizing: border-box;width: 100%;min-width: 0;padding: 4px;border-radius: 20px;background: var(--ui-al-tray);container: ui-al / inline-size;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 14px;font-weight: 400;line-height: 20px;letter-spacing: -0.006em;color: var(--ui-al-text);text-align: left;-webkit-font-smoothing: antialiased}.ui-al *, .ui-al *::before, .ui-al *::after{box-sizing: border-box}:where(.ui-al) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;letter-spacing: inherit;text-align: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}.ui-al button:focus-visible{outline: 2px solid var(--ui-al-focus);outline-offset: 1px}.ui-al svg{display: block;flex: none}.ui-al__bar{display: flex;flex-wrap: wrap;align-items: center;gap: 4px 8px;min-width: 0;padding: 8px 12px 12px}.ui-al__mark{display: grid;flex: none;place-items: center;width: 16px;color: var(--ui-al-accent)}.ui-al__title{min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;font-weight: 600;color: var(--ui-al-strong)}.ui-al__agent{min-width: 0;overflow: hidden;font-size: 13px;color: var(--ui-al-muted);white-space: nowrap;text-overflow: ellipsis}.ui-al__sum{display: flex;align-items: center;gap: 14px;margin-left: auto;font-size: 13px;line-height: 18px;color: var(--ui-al-muted);font-variant-numeric: tabular-nums;white-space: nowrap}.ui-al__sum b{font-weight: 600;color: var(--ui-al-ink)}.ui-al__sum-undone{animation: ui-al-fade 240ms ease both}.ui-al__panel{display: grid;margin: 0;padding: 6px;overflow: hidden;border-radius: 16px;background: var(--ui-al-panel);box-shadow: var(--ui-al-shadow);list-style: none}.ui-al__row{position: relative;display: grid;grid-template-columns: 32px minmax(0, 1fr) auto;align-items: center;column-gap: 12px;height: var(--ui-al-row);padding: 10px 12px 10px 10px;border-radius: 11px;transition: background-color 200ms ease;animation: ui-al-grow 520ms var(--ui-al-ease) backwards}.ui-al__row > *{animation: ui-al-in 420ms var(--ui-al-ease) 140ms backwards}.ui-al__row[data-initial], .ui-al__row[data-initial] > *{animation: none}.ui-al__row + .ui-al__row::before{content: "";position: absolute;top: 0;right: 12px;left: 54px;height: 1px;background: var(--ui-al-line)}.ui-al__row:hover{background: #fafafa}.ui-al__row[data-preview]{background: var(--ui-al-undo-bg)}.ui-al__row[data-chain="also"]{background: var(--ui-al-also-bg)}.ui-al__row[data-chain="kept"]{background: var(--ui-al-kept-bg)}.ui-al__row:is([data-preview], [data-chain]) + .ui-al__row::before, .ui-al__row:is([data-preview], [data-chain])::before{opacity: 0}.ui-al__icon{display: grid;place-items: center;width: 32px;height: 32px;border-radius: 9px;background: var(--ui-al-card);box-shadow: var(--ui-al-shadow);font-size: 13px;font-weight: 600;color: var(--ui-al-text);transition: opacity 300ms ease, filter 300ms ease}.ui-al__icon > svg{width: 16px;height: 16px}.ui-al__main{position: relative;display: grid;min-width: 0}.ui-al__what{position: relative;display: flex;align-items: baseline;gap: 6px;justify-self: start;min-width: 0;max-width: 100%;white-space: nowrap}.ui-al__action{flex: 0 1 auto;min-width: 0;overflow: hidden;text-overflow: ellipsis;font-weight: 600;color: var(--ui-al-ink);transition: color 300ms ease}.ui-al__target{flex: 0 100 auto;min-width: 0;overflow: hidden;color: var(--ui-al-text);text-overflow: ellipsis;transition: color 300ms ease}.ui-al__change{display: flex;align-items: baseline;gap: 6px;min-width: 0;overflow: hidden;font-size: 13px;line-height: 19px;color: var(--ui-al-muted);white-space: nowrap}.ui-al__before{flex: 0 100 auto;min-width: 0;overflow: hidden;text-overflow: ellipsis;text-decoration: line-through;text-decoration-color: var(--ui-al-faint)}.ui-al__arrow{flex: none;color: var(--ui-al-faint)}.ui-al__detail{min-width: 0;overflow: hidden;text-overflow: ellipsis}.ui-al__after{flex: 0 1 auto;min-width: 0;overflow: hidden;color: var(--ui-al-text);text-overflow: ellipsis}.ui-al__strike{position: absolute;top: 50%;left: -2px;width: calc(100% + 4px);height: 1.5px;border-radius: 1px;background: var(--ui-al-strike);transform: scaleX(0);transform-origin: left;pointer-events: none;transition: transform 380ms var(--ui-al-ease) calc(var(--o, 0) * 110ms)}.ui-al__row[data-undone] .ui-al__strike{transform: scaleX(1)}.ui-al__row[data-undone] :is(.ui-al__action, .ui-al__target, .ui-al__after){color: var(--ui-al-muted);transition-delay: calc(var(--o, 0) * 110ms)}.ui-al__row[data-undone] .ui-al__icon{opacity: 0.5;filter: grayscale(1);transition-delay: calc(var(--o, 0) * 110ms)}.ui-al__end{position: relative;display: grid;justify-items: end;align-items: center;min-width: 120px;height: 28px}.ui-al__time{grid-area: 1 / 1;pointer-events: none;font-size: 13px;line-height: 18px;color: var(--ui-al-muted);white-space: nowrap;font-variant-numeric: tabular-nums;transition: opacity 140ms ease}.ui-al__row[data-undone] .ui-al__time{color: var(--ui-al-faint)}.ui-al__act{position: relative;z-index: 1;grid-area: 1 / 1;display: inline-flex;align-items: center;gap: 6px;height: 28px;margin-right: -4px;padding: 0 11px 0 9px;border-radius: 999px;background: var(--ui-al-card);box-shadow: var(--ui-al-shadow);font-size: 13px;font-weight: 500;color: var(--ui-al-ink);white-space: nowrap;opacity: 0;transition: opacity 140ms ease, box-shadow 140ms ease}.ui-al__row:is(:hover, :focus-within, [data-preview]) .ui-al__act{opacity: 1}.ui-al__row:is(:hover, :focus-within) .ui-al__time[data-hide], .ui-al__row[data-preview] .ui-al__time[data-hide]{opacity: 0}.ui-al__act:hover{box-shadow: 0 0 0 1px #e2e2e2, 0 2px 6px rgba(0, 0, 0, 0.08)}.ui-al__row[data-preview] .ui-al__act{color: var(--ui-al-also-fg)}.ui-al__flag{grid-area: 1 / 1;display: inline-flex;align-items: center;gap: 5px;height: 24px;padding: 0 10px;border-radius: 999px;font-size: 12.5px;font-weight: 500;line-height: 24px;white-space: nowrap;animation: ui-al-fade 160ms ease both}.ui-al__flag[data-kind="also"]{background: var(--ui-al-also-chip);color: var(--ui-al-also-fg)}.ui-al__flag[data-kind="kept"]{background: var(--ui-al-kept-chip);color: var(--ui-al-kept-fg)}@container ui-al (max-width: 480px){.ui-al__sum{flex-basis: 100%;justify-content: space-between;margin-left: 0}.ui-al__row{column-gap: 10px;padding: 10px 8px 10px 8px}.ui-al__row + .ui-al__row::before{left: 50px;right: 8px}.ui-al__end{min-width: 76px}.ui-al__sys{display: none}.ui-al__act{width: 28px;justify-content: center;padding: 0}.ui-al__act-label{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}}@media (hover: none){.ui-al__act{opacity: 1}.ui-al__time[data-hide]{opacity: 0}}@keyframes ui-al-grow{from{height: 0;padding-top: 0;padding-bottom: 0}}@keyframes ui-al-in{from{opacity: 0;transform: translateY(-4px)}}@keyframes ui-al-fade{from{opacity: 0}}@media (prefers-reduced-motion: reduce){.ui-al *, .ui-al *::before, .ui-al *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-al{--ui-al-tray: #1a1a1c;--ui-al-panel: #232326;--ui-al-card: #2a2a2e;--ui-al-strong: #f5f5f5;--ui-al-ink: #f0f0f0;--ui-al-text: #a1a1a1;--ui-al-muted: #8a8a8a;--ui-al-faint: #5c5c5c;--ui-al-line: #2e2e31;--ui-al-fill: rgba(255, 255, 255, 0.06);--ui-al-accent: #6d93ff;--ui-al-focus: rgba(255, 255, 255, 0.3);--ui-al-undo-bg: #1d2436;--ui-al-also-bg: #1c2232;--ui-al-also-chip: #1d2b4d;--ui-al-also-fg: #8aaeff;--ui-al-kept-bg: #2a2219;--ui-al-kept-chip: #3a2a12;--ui-al-kept-fg: #ffb357;--ui-al-strike: #8a8a8a;--ui-al-shadow: 0 0 0 1px #2e2e31, 0 1px 2px rgba(0, 0, 0, 0.4)}`,
  h = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `currentColor`,
      "aria-hidden": `true`,
      style: { color: `var(--ui-alc-strong, var(--ui-al-ink, #181717))` },
      children: (0, r.jsx)(`path`, {
        d: `M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12`,
      }),
    }),
  g = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `currentColor`,
      "aria-hidden": `true`,
      style: { color: `var(--ui-alc-strong, var(--ui-al-ink, #000))` },
      children: (0, r.jsx)(`path`, { d: `M24 22.525H0l12-21.05 12 21.05z` }),
    }),
  _ = () =>
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
  v = () =>
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
  y = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `currentColor`,
      "aria-hidden": `true`,
      style: { color: `var(--ui-alc-strong, var(--ui-al-ink, #000))` },
      children: (0, r.jsx)(`path`, {
        d: `M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z`,
      }),
    }),
  b = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `#FF7A59`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, {
        d: `M18.164 7.93V5.084a2.198 2.198 0 001.267-1.978v-.067A2.2 2.2 0 0017.238.845h-.067a2.2 2.2 0 00-2.193 2.193v.067a2.196 2.196 0 001.252 1.973l.013.006v2.852a6.22 6.22 0 00-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 104.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 00-1.038 3.446c0 1.343.425 2.588 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 00-.58-.095h-.002a2.033 2.033 0 102.033 2.033 1.978 1.978 0 00-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 104.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 113.215-3.207v.002a3.206 3.206 0 01-3.207 3.207z`,
      }),
    }),
  x = [
    {
      t: 0,
      id: `pr`,
      action: `Merged PR #482`,
      target: `Pricing page v2`,
      system: `GitHub`,
      icon: (0, r.jsx)(h, {}),
      change: [`pricing-v2`, `main`],
    },
    {
      t: 1.5,
      id: `deploy`,
      action: `Deployed`,
      target: `affectui.com`,
      system: `Vercel`,
      icon: (0, r.jsx)(g, {}),
      change: [`#481`, `#483 in production`],
      dependsOn: [`pr`],
    },
    {
      t: 2.6,
      id: `price`,
      action: `Changed price`,
      target: `Pro plan`,
      system: `Stripe`,
      icon: (0, r.jsx)(v, {}),
      change: [`$29 / month`, `$34 / month`],
    },
    {
      t: 3.7,
      id: `coupon`,
      action: `Created coupon`,
      target: `LAUNCH20`,
      system: `Stripe`,
      icon: (0, r.jsx)(v, {}),
      detail: `20% off the first year · ends in 7 days`,
    },
    {
      t: 4.8,
      id: `faq`,
      action: `Updated page`,
      target: `Pricing FAQ`,
      system: `Notion`,
      icon: (0, r.jsx)(y, {}),
      change: [`3 answers`, `3 answers rewritten`],
    },
    {
      t: 5.9,
      id: `deals`,
      action: `Updated 212 deals`,
      target: `Renewals in Q4`,
      system: `HubSpot`,
      icon: (0, r.jsx)(b, {}),
      change: [`$29 per seat`, `$34 per seat`],
      dependsOn: [`price`],
    },
    {
      t: 7,
      id: `post`,
      action: `Posted in #launch`,
      target: `New pricing is live`,
      system: `Slack`,
      icon: (0, r.jsx)(_, {}),
      detail: `With a link to the pricing page`,
      dependsOn: [`deploy`],
    },
    {
      t: 8.1,
      id: `email`,
      action: `Sent email`,
      target: `3,812 customers`,
      system: `HubSpot`,
      icon: (0, r.jsx)(b, {}),
      detail: `New price and the code LAUNCH20`,
      dependsOn: [`price`, `coupon`],
      reversible: !1,
    },
  ],
  S = 10,
  C = 12.2,
  w = 24,
  T = 22;
function E() {
  let [e, t] = (0, n.useState)(0),
    [i, a] = (0, n.useState)(0),
    [o, s] = (0, n.useState)([]),
    [c] = (0, n.useState)(() => Date.now()),
    l = (0, n.useRef)(0),
    u = (0, n.useRef)(!1),
    d = (0, n.useRef)(!1);
  (0, n.useEffect)(() => {
    let e = performance.now(),
      n = window.setInterval(() => {
        let n = performance.now();
        (u.current || (l.current += (n - e) / 1e3),
          (e = n),
          l.current > w
            ? ((l.current = 0), (d.current = !1), s([]), a((e) => e + 1))
            : !d.current && l.current >= C && s((e) => (e.length ? e : [`price`, `deals`])),
          t(l.current));
      }, 100);
    return () => window.clearInterval(n);
  }, []);
  let f = x.filter((t) => e >= t.t).map(({ t: e, ...t }) => ({ ...t, at: c + e * T * 1e3 }));
  return (0, r.jsx)(`div`, {
    className: `al-demo`,
    onPointerEnter: (e) => e.pointerType === `mouse` && (u.current = !0),
    onPointerLeave: () => (u.current = !1),
    children: (0, r.jsx)(
      p,
      {
        entries: f,
        agent: `Launch agent`,
        now: c + e * T * 1e3,
        pointAt: !d.current && e >= S && e < C ? `price` : null,
        undone: o,
        onUndo: (e) => {
          ((d.current = !0), s((t) => [...t, ...e.filter((e) => !t.includes(e))]));
        },
        onRedo: (e) => {
          ((d.current = !0), s((t) => t.filter((t) => !e.includes(t))));
        },
      },
      i,
    ),
  });
}
