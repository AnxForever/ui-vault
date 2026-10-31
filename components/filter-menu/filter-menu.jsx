/*
 * affectUI · filter-menu
 * Implementation recovered from public bundle asset: component-CuOxVraS.js
 * Styles inlined in the module -> filter-menu.css (0 block(s))
 * Demo usage: filter-menu.demo.jsx
 * Minified identifiers kept; formatting by prettier.
 */

import { t as e } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
var n = e(),
  r = t();
function i({
  groups: e,
  value: t,
  defaultValue: i = {},
  onChange: s,
  defaultOpen: c,
  title: l = `Filters`,
  hints: u = !0,
  className: d,
}) {
  let f = (Array.isArray(e) ? e : [])
      .filter((e) => !!e && typeof e == `object`)
      .map((e) => ({
        ...e,
        label: String(e.label ?? ``),
        options: (Array.isArray(e.options) ? e.options : [])
          .filter((e) => !!e && typeof e == `object`)
          .map((e) => ({ ...e, label: String(e.label ?? ``) })),
      })),
    p = (0, n.useId)(),
    [m, h] = (0, n.useState)(i),
    g = t ?? m,
    [_, v] = (0, n.useState)(() => new Set(c ?? f.slice(0, 1).map((e) => e.id))),
    [y, b] = (0, n.useState)(null),
    x = (0, n.useRef)(null),
    S = (0, n.useRef)(null),
    C = a(S),
    w = (e) => {
      (t === void 0 && h(e), s?.(e));
    },
    T = (e) => (Array.isArray(g[e]) ? g[e] : []),
    E = (e, t) => T(e).includes(t),
    D = (e, t) => {
      let n = T(e);
      w({ ...g, [e]: n.includes(t) ? n.filter((e) => e !== t) : [...n, t] });
    },
    O = (e) =>
      v((t) => {
        let n = new Set(t);
        return (n.has(e) ? n.delete(e) : n.add(e), n);
      }),
    k = new Set(),
    A = f.flatMap((e) =>
      e.options
        .filter((t) => E(e.id, t.id) && !k.has(`${e.id}\u0000${t.id}`) && !!k.add(`${e.id}\u0000${t.id}`))
        .map((t) => ({ group: e, option: t, label: `${e.chipPrefix ?? ``}${t.label}` })),
    ),
    j = f.flatMap((e, t) => [
      { kind: `group`, group: e, gi: t },
      ...(_.has(e.id)
        ? e.options.map((n, r) => ({ kind: `option`, group: e, option: n, gi: t, oi: r }))
        : []),
    ]),
    M = (e) => (e.kind === `group` ? `g:${e.gi}` : `o:${e.gi}:${e.oi}`),
    N = (e) => {
      (b(e), x.current?.querySelector(`[data-key="${CSS.escape(e)}"]`)?.focus());
    };
  return (0, r.jsxs)(`div`, {
    className: [`ui-fm`, d].filter(Boolean).join(` `),
    children: [
      (0, r.jsx)(`style`, { href: `ui-filter-menu`, precedence: `default`, children: o }),
      (0, r.jsxs)(`div`, {
        className: `ui-fm__card`,
        children: [
          (0, r.jsxs)(`div`, {
            className: `ui-fm__head`,
            children: [
              (0, r.jsx)(`span`, { className: `ui-fm__title`, dir: `auto`, title: l, children: l }),
              (0, r.jsx)(`button`, {
                type: `button`,
                className: `ui-fm__clear`,
                disabled: A.length === 0,
                onClick: () => w({}),
                children: `Clear all`,
              }),
            ],
          }),
          (0, r.jsx)(`div`, {
            className: `ui-fm__chips-outer`,
            ref: C,
            children: (0, r.jsx)(`div`, {
              className: `ui-fm__chips`,
              ref: S,
              "aria-live": `polite`,
              children: A.map((e, t) =>
                (0, r.jsxs)(
                  `span`,
                  {
                    className: `ui-fm__chip`,
                    children: [
                      (0, r.jsx)(`span`, {
                        className: `ui-fm__chip-label`,
                        dir: `auto`,
                        title: e.label,
                        children: e.label,
                      }),
                      (0, r.jsx)(`button`, {
                        type: `button`,
                        "aria-label": `Remove ${e.label}`,
                        onClick: () => D(e.group.id, e.option.id),
                        children: (0, r.jsx)(`svg`, {
                          viewBox: `0 0 24 24`,
                          "aria-hidden": `true`,
                          children: (0, r.jsx)(`path`, { d: `M6.5 6.5l11 11M17.5 6.5l-11 11` }),
                        }),
                      }),
                    ],
                  },
                  t,
                ),
              ),
            }),
          }),
          (0, r.jsx)(`div`, {
            className: `ui-fm__groups`,
            ref: x,
            onKeyDown: (e) => {
              let t = j.findIndex((e) => M(e) === y),
                n = j[t];
              if (e.key === `ArrowDown` || e.key === `ArrowUp`) {
                e.preventDefault();
                let n = j[Math.max(0, Math.min(j.length - 1, t + (e.key === `ArrowDown` ? 1 : -1)))] ?? j[0];
                N(M(n));
              } else if (e.key === `Home` || e.key === `End`)
                (e.preventDefault(), N(M(j[e.key === `Home` ? 0 : j.length - 1])));
              else if (n && (e.key === `ArrowRight` || e.key === `ArrowLeft`)) {
                e.preventDefault();
                let t = n.group.id;
                (e.key === `ArrowRight` && !_.has(t) && O(t),
                  e.key === `ArrowLeft` && (_.has(t) && O(t), N(`g:${n.gi}`)));
              } else
                n &&
                  (e.key === `Enter` || e.key === ` `) &&
                  (e.preventDefault(), n.kind === `group` ? O(n.group.id) : D(n.group.id, n.option.id));
            },
            children: f.map((e, t) => {
              let n = _.has(e.id),
                i = new Set(T(e.id).filter((t) => e.options.some((e) => e.id === t))).size,
                a = `g:${t}`;
              return (0, r.jsxs)(
                `section`,
                {
                  className: `ui-fm__group`,
                  "data-open": n ? `` : void 0,
                  children: [
                    (0, r.jsxs)(`button`, {
                      type: `button`,
                      className: `ui-fm__group-head`,
                      "data-key": a,
                      tabIndex: y === a || (y === null && t === 0) ? 0 : -1,
                      "aria-expanded": n,
                      "aria-controls": `${p}-${t}`,
                      onFocus: () => b(a),
                      onClick: () => O(e.id),
                      children: [
                        (0, r.jsx)(`svg`, {
                          className: `ui-fm__chevron`,
                          viewBox: `0 0 24 24`,
                          "aria-hidden": `true`,
                          children: (0, r.jsx)(`path`, { d: `M6.5 9.5 12 15l5.5-5.5` }),
                        }),
                        (0, r.jsx)(`span`, {
                          className: `ui-fm__group-label`,
                          dir: `auto`,
                          title: e.label,
                          children: e.label,
                        }),
                        (0, r.jsx)(`span`, {
                          className: `ui-fm__group-count`,
                          children: e.options.length.toLocaleString(`en-US`),
                        }),
                        (0, r.jsx)(`span`, {
                          className: `ui-fm__group-picked`,
                          "aria-live": `polite`,
                          children: i > 0 ? `${i} filter${i === 1 ? `` : `s`}` : ``,
                        }),
                      ],
                    }),
                    (0, r.jsx)(`div`, {
                      className: `ui-fm__panel`,
                      id: `${p}-${t}`,
                      role: `group`,
                      "aria-label": e.label,
                      children: (0, r.jsx)(`div`, {
                        className: `ui-fm__panel-inner`,
                        children: e.options.map((i, a) => {
                          let o = `o:${t}:${a}`,
                            s = E(e.id, i.id);
                          return (0, r.jsxs)(
                            `button`,
                            {
                              type: `button`,
                              role: `checkbox`,
                              "aria-checked": s,
                              className: `ui-fm__option`,
                              "data-key": o,
                              tabIndex: n && y === o ? 0 : -1,
                              onFocus: () => b(o),
                              onClick: () => D(e.id, i.id),
                              children: [
                                (0, r.jsx)(`span`, {
                                  className: `ui-fm__box`,
                                  "aria-hidden": `true`,
                                  children: (0, r.jsx)(`svg`, {
                                    viewBox: `0 0 24 24`,
                                    children: (0, r.jsx)(`path`, { d: `m6 12.5 4 4 8-9` }),
                                  }),
                                }),
                                (0, r.jsx)(`span`, {
                                  className: `ui-fm__option-label`,
                                  dir: `auto`,
                                  title: i.label,
                                  children: i.label,
                                }),
                              ],
                            },
                            `${i.id}#${a}`,
                          );
                        }),
                      }),
                    }),
                  ],
                },
                `${e.id}#${t}`,
              );
            }),
          }),
        ],
      }),
      u &&
        (0, r.jsxs)(`div`, {
          className: `ui-fm__hints`,
          "aria-hidden": `true`,
          children: [
            (0, r.jsxs)(`span`, {
              className: `ui-fm__hint`,
              children: [
                (0, r.jsx)(`kbd`, {
                  children: (0, r.jsx)(`svg`, {
                    viewBox: `0 0 24 24`,
                    children: (0, r.jsx)(`path`, { d: `M12 5v14m0 0-5-5m5 5 5-5` }),
                  }),
                }),
                (0, r.jsx)(`kbd`, {
                  children: (0, r.jsx)(`svg`, {
                    viewBox: `0 0 24 24`,
                    children: (0, r.jsx)(`path`, { d: `M12 19V5m0 0-5 5m5-5 5 5` }),
                  }),
                }),
                `To navigate`,
              ],
            }),
            (0, r.jsxs)(`span`, {
              className: `ui-fm__hint`,
              children: [
                (0, r.jsx)(`kbd`, {
                  children: (0, r.jsx)(`svg`, {
                    viewBox: `0 0 24 24`,
                    children: (0, r.jsx)(`path`, {
                      d: `M18 6v6.5a2 2 0 0 1-2 2H7m0 0 3.5-3.5M7 14.5 10.5 18`,
                    }),
                  }),
                }),
                `To select`,
              ],
            }),
          ],
        }),
    ],
  });
}
function a(e) {
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
var o = `
.ui-fm {
  --ui-fm-tray: #f0f0f0;
  --ui-fm-card: #ffffff;
  --ui-fm-card-line: #e5e5e5;
  --ui-fm-ink: #171717;
  --ui-fm-text: #404040;
  --ui-fm-muted: #8f8f8f;
  --ui-fm-chip: #f3f3f3;
  --ui-fm-chip-hover: #ebebeb;
  --ui-fm-box: #f0f0f0;
  --ui-fm-box-line: #e3e3e3;
  --ui-fm-check: #ffffff;
  --ui-fm-row-hover: #f7f7f7;
  --ui-fm-kbd: #ffffff;
  --ui-fm-focus: #2f6bff;
  --ui-fm-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
  --ui-fm-ease: cubic-bezier(0.22, 1, 0.36, 1);
  width: 100%;
  max-width: 420px;
  padding: 6px;
  border-radius: 24px;
  background: var(--ui-fm-tray);
  font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  color: var(--ui-fm-ink);
  -webkit-font-smoothing: antialiased;
}
.ui-fm *, .ui-fm *::before, .ui-fm *::after { box-sizing: border-box; }
.ui-fm button { font: inherit; color: inherit; margin: 0; cursor: pointer; -webkit-tap-highlight-color: transparent; }
.ui-fm button:focus-visible { outline: 2px solid var(--ui-fm-focus); outline-offset: 2px; }

.ui-fm__card {
  padding: 16px 16px 10px;
  border: 1px solid var(--ui-fm-card-line);
  border-radius: 20px;
  background: var(--ui-fm-card);
  box-shadow: var(--ui-fm-shadow);
}

/* ---------- Header ---------- */

.ui-fm__head { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 0 2px; }
.ui-fm__title { min-width: 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; text-align: start; font-size: 15px; font-weight: 600; letter-spacing: -0.01em; }
.ui-fm__clear {
  flex: none;
  padding: 4px 6px;
  margin-right: -6px !important;
  border: 0;
  border-radius: 8px;
  background: none;
  font-size: 13px;
  color: var(--ui-fm-muted) !important;
  transition: color 160ms ease, background-color 160ms ease, opacity 200ms ease;
}
.ui-fm__clear:hover:not(:disabled) { color: var(--ui-fm-ink) !important; background: var(--ui-fm-row-hover); }
.ui-fm__clear:disabled { opacity: 0.45; cursor: default; }

/* ---------- Chips ---------- */

.ui-fm__chips-outer { overflow: hidden; }
.ui-fm__chips-outer[data-smooth] { transition: height 320ms var(--ui-fm-ease); }
.ui-fm__chips { display: flex; flex-wrap: wrap; gap: 6px; padding-top: 12px; }
.ui-fm__chips:empty { padding-top: 0; }
.ui-fm__chip {
  display: inline-flex;
  min-width: 0;
  max-width: 100%;
  align-items: center;
  gap: 2px;
  height: 30px;
  padding: 0 4px 0 11px;
  border-radius: 10px;
  background: var(--ui-fm-chip);
  font-size: 13px;
  color: var(--ui-fm-text);
  white-space: nowrap;
  animation: ui-fm-chip-in 260ms var(--ui-fm-ease) both;
}
.ui-fm__chip-label { min-width: 0; overflow: hidden; text-overflow: ellipsis; }
.ui-fm__chip button {
  display: grid;
  flex: none;
  place-items: center;
  width: 22px;
  height: 22px;
  padding: 0;
  border: 0;
  border-radius: 6px;
  background: none;
  color: var(--ui-fm-muted);
  transition: background-color 160ms ease, color 160ms ease;
}
.ui-fm__chip button:hover { background: var(--ui-fm-chip-hover); color: var(--ui-fm-ink); }
.ui-fm__chip svg { width: 14px; height: 14px; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; }

/* ---------- Groups ---------- */

.ui-fm__groups { display: grid; grid-template-columns: minmax(0, 1fr); padding-top: 6px; }
.ui-fm__group-head {
  display: flex;
  align-items: center;
  gap: 7px;
  width: calc(100% + 12px);
  height: 36px;
  margin: 2px -6px 0 !important;
  padding: 0 8px 0 6px;
  border: 0;
  border-radius: 10px;
  background: none;
  text-align: left;
  transition: background-color 160ms ease;
}
.ui-fm__group-head:hover { background: var(--ui-fm-row-hover); }
.ui-fm__chevron {
  width: 16px;
  height: 16px;
  flex: none;
  fill: none;
  stroke: var(--ui-fm-text);
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
  transform: rotate(-90deg);
  transition: transform 260ms var(--ui-fm-ease);
}
.ui-fm__group[data-open] .ui-fm__chevron { transform: none; }
.ui-fm__group-label { min-width: 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; text-align: start; font-size: 14px; font-weight: 500; }
.ui-fm__group-count { flex: none; font-size: 12.5px; color: var(--ui-fm-muted); font-variant-numeric: tabular-nums; }
.ui-fm__group-picked { flex: none; margin-left: auto; white-space: nowrap; font-size: 12.5px; color: var(--ui-fm-muted); }

.ui-fm__panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 320ms var(--ui-fm-ease);
}
.ui-fm__group[data-open] .ui-fm__panel { grid-template-rows: 1fr; }
.ui-fm__panel-inner {
  min-height: 0;
  overflow: hidden;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1px;
  padding: 0 0 0;
  opacity: 0;
  transition: opacity 220ms ease, padding 320ms var(--ui-fm-ease);
}
.ui-fm__group[data-open] .ui-fm__panel-inner { opacity: 1; padding: 2px 0 6px; }
/* A long list scrolls inside the open group, so the card keeps a sane height */
.ui-fm__group[data-open] .ui-fm__panel-inner { max-height: 340px; overflow-x: hidden; overflow-y: auto; overscroll-behavior: contain; }

.ui-fm__option {
  display: flex;
  align-items: center;
  gap: 12px;
  width: calc(100% + 12px);
  height: 34px;
  margin: 0 -6px !important;
  padding: 0 6px;
  border: 0;
  border-radius: 10px;
  background: none;
  font-size: 14px;
  color: var(--ui-fm-text) !important;
  text-align: left;
  transition: background-color 160ms ease;
}
.ui-fm__option-label { min-width: 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; text-align: start; }
.ui-fm__option:hover { background: var(--ui-fm-row-hover); }
.ui-fm__option:focus-visible { outline-offset: -2px; }
.ui-fm__box {
  display: grid;
  place-items: center;
  width: 20px;
  height: 20px;
  flex: none;
  border-radius: 6px;
  background: var(--ui-fm-box);
  box-shadow: inset 0 0 0 1px var(--ui-fm-box-line);
  transition: background-color 180ms ease, box-shadow 180ms ease;
}
.ui-fm__box svg {
  width: 14px;
  height: 14px;
  fill: none;
  stroke: var(--ui-fm-check);
  stroke-width: 2.2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 20;
  stroke-dashoffset: 20;
  transition: stroke-dashoffset 260ms var(--ui-fm-ease);
}
.ui-fm__option[aria-checked="true"] .ui-fm__box { background: var(--ui-fm-ink); box-shadow: inset 0 0 0 1px var(--ui-fm-ink); }
.ui-fm__option[aria-checked="true"] .ui-fm__box svg { stroke-dashoffset: 0; }

/* ---------- Keyboard hints on the tray ---------- */

.ui-fm__hints { display: flex; justify-content: space-between; gap: 12px; padding: 10px 8px 4px; }
.ui-fm__hint { display: inline-flex; align-items: center; gap: 5px; font-size: 12.5px; color: var(--ui-fm-text); }
.ui-fm__hint kbd {
  display: grid;
  place-items: center;
  width: 22px;
  height: 22px;
  border-radius: 6px;
  background: var(--ui-fm-kbd);
  box-shadow: 0 0 0 1px var(--ui-fm-card-line), 0 1px 1px rgba(0, 0, 0, 0.04);
}
.ui-fm__hint kbd:last-of-type { margin-right: 4px; }
.ui-fm__hint svg { width: 13px; height: 13px; fill: none; stroke: var(--ui-fm-text); stroke-width: 1.9; stroke-linecap: round; stroke-linejoin: round; }

@keyframes ui-fm-chip-in { from { opacity: 0; transform: scale(0.9); } }

@media (prefers-reduced-motion: reduce) {
  .ui-fm__chips-outer[data-smooth], .ui-fm__panel, .ui-fm__panel-inner, .ui-fm__chevron, .ui-fm__box svg { transition: none; }
  .ui-fm__chip { animation: none; }
}

/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-fm {
  --ui-fm-tray: #161618;
  --ui-fm-card: #232326;
  --ui-fm-card-line: rgba(255, 255, 255, 0.08);
  --ui-fm-ink: #ededed;
  --ui-fm-text: #c4c4c4;
  --ui-fm-muted: #8f8f8f;
  --ui-fm-chip: #2a2a2d;
  --ui-fm-chip-hover: #313135;
  --ui-fm-box: #2a2a2d;
  --ui-fm-box-line: rgba(255, 255, 255, 0.1);
  --ui-fm-check: #121213;
  --ui-fm-row-hover: rgba(255, 255, 255, 0.05);
  --ui-fm-kbd: #232326;
  --ui-fm-focus: #6b95ff;
  --ui-fm-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
}
`;
