/*
 * affectUI · agent-findings (Pro)
 * Implementation recovered from public bundle asset: demo-oWyfFMeM.js
 * Styles inlined in the module -> agent-findings.css (1 block(s))
 * Demo usage: agent-findings.demo.jsx
 * Minified identifiers kept; formatting by prettier.
 */

import { t as e } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
/* empty css             */ var n = e(),
  r = t(),
  i = (e) =>
    e instanceof Date ? e.getTime() : typeof e == `number` ? e : typeof e == `string` ? Date.parse(e) : NaN,
  a = (e, t) => {
    if (!Number.isFinite(e) || !Number.isFinite(t)) return ``;
    let n = Math.max(0, Math.round((t - e) / 1e3));
    return n < 5
      ? `now`
      : n < 60
        ? `${n}s`
        : n < 3600
          ? `${Math.floor(n / 60)}m`
          : n < 86400
            ? `${Math.floor(n / 3600)}h`
            : `${Math.floor(n / 86400)}d`;
  },
  o = (e) =>
    typeof Intl.Segmenter == `function`
      ? Array.from(new Intl.Segmenter().segment(e), (e) => e.segment)
      : Array.from(e),
  s = (e) => {
    let t = e.trim().split(/\s+/).filter(Boolean),
      n = t.filter((e) => /^[\p{L}\p{N}]/u.test(e));
    return n.length
      ? (n.length > 1 ? [n[0], n[n.length - 1]] : n)
          .map((e) => o(e)[0])
          .join(``)
          .toUpperCase()
      : t.length
        ? o(t[0])[0]
        : ``;
  },
  c = (e) => (typeof e == `number` && Number.isFinite(e) ? Math.max(0, Math.floor(e)) : 0),
  l = new Intl.NumberFormat(`en`),
  u = (e) => (e > 999 ? `999+` : l.format(e)),
  d = (e) => (e === `critical` || e === `warning` ? e : `note`),
  f = { critical: `Critical`, warning: `Warning`, note: `Note` },
  p = (e) => {
    let t = new Map();
    return (Array.isArray(e) ? e : [])
      .filter((e) => !!e && typeof e == `object`)
      .map((e) => {
        let n = String(e.id ?? ``),
          r = t.get(n) ?? 0;
        return (t.set(n, r + 1), { x: e, id: n, key: r ? `${n}#${r}` : n });
      });
  },
  m = 40,
  h = ({ severity: e }) => {
    let t = e === `critical` ? [1, 1, 1, 0.6] : e === `warning` ? [1, 0.6, 0.6, 0.3] : [0.6, 0.3, 0.3, 0.3];
    return (0, r.jsx)(`svg`, {
      className: `ui-af__mark`,
      "data-severity": e,
      width: `10`,
      height: `10`,
      viewBox: `0 0 10 10`,
      "aria-hidden": `true`,
      children: [
        [0, 0],
        [5.5, 0],
        [0, 5.5],
        [5.5, 5.5],
      ].map(([e, n], i) =>
        (0, r.jsx)(
          `rect`,
          { x: e, y: n, width: `4.5`, height: `4.5`, rx: `1`, fill: `currentColor`, opacity: t[i] },
          i,
        ),
      ),
    });
  },
  g = () =>
    (0, r.jsxs)(`svg`, {
      width: `14`,
      height: `14`,
      viewBox: `0 0 14 14`,
      "aria-hidden": `true`,
      children: [
        (0, r.jsx)(`path`, {
          d: `M7 1.2c.4 2.9 1.9 4.4 4.8 4.8-2.9.4-4.4 1.9-4.8 4.8C6.6 7.9 5.1 6.4 2.2 6 5.1 5.6 6.6 4.1 7 1.2Z`,
          fill: `currentColor`,
        }),
        (0, r.jsx)(`circle`, { cx: `11.6`, cy: `11.4`, r: `1.1`, fill: `currentColor`, opacity: `0.55` }),
      ],
    });
function _({ text: e }) {
  return (0, r.jsx)(`span`, { className: `ui-af__step`, dir: `auto`, title: e, children: e }, e);
}
function v({ avatar: e, name: t }) {
  let [i, a] = (0, n.useState)(!1),
    o = e != null && e !== !1 && !i;
  return (0, r.jsx)(`span`, {
    className: `ui-af__avatar`,
    "data-logo": o ? `` : void 0,
    onErrorCapture: () => a(!0),
    children: o ? e : s(t),
  });
}
function y({
  agents: e,
  findings: t,
  title: o = `Verification`,
  rows: s = 4,
  now: y,
  onOpen: x,
  className: S,
}) {
  let [C, w] = (0, n.useState)(() => Date.now()),
    [T, E] = (0, n.useState)(null);
  (0, n.useEffect)(() => {
    if (y !== void 0) return;
    let e = window.setInterval(() => w(Date.now()), 5e3);
    return () => window.clearInterval(e);
  }, [y]);
  let D = y ?? C,
    O = typeof s == `number` && Number.isFinite(s) && s >= 1 ? Math.floor(s) : 4,
    k = p(e).map(({ x: e, id: t, key: n }) => {
      let r = c(e.total),
        i = e.status === `running` || e.status === `done` || e.status === `failed` ? e.status : void 0;
      return {
        ...e,
        id: t,
        key: n,
        name: String(e.name ?? ``).trim() || t || `Agent`,
        total: r,
        done: Math.min(c(e.done), r),
        status: i,
      };
    }),
    A = p(t).map(({ x: e, id: t, key: n }) => ({
      ...e,
      id: t,
      key: n,
      src: e,
      agentId: String(e.agentId ?? ``),
      title: String(e.title ?? ``),
      severity: d(e.severity),
      at: i(e.at),
    })),
    j = k.reduce((e, t) => e + t.done, 0),
    M = k.reduce((e, t) => e + t.total, 0),
    N = (e, t) => A.filter((n) => n.severity === e && (!t || n.agentId === t)).length,
    P = N(`critical`),
    F = N(`warning`),
    I = Math.max(0, ...k.map((e) => `${l.format(e.done)}/${l.format(e.total)}`.length)),
    L = Math.max(1, ...k.map((e) => Math.max(u(N(`critical`, e.id)).length, u(N(`warning`, e.id)).length))),
    R = (e) => k.find((t) => t.id === e),
    z = T ? R(T) : void 0,
    B = z ? T : null,
    V = (e) => (Number.isFinite(e.at) ? e.at : -1 / 0),
    H = A.filter((e) => !B || e.agentId === B)
      .sort((e, t) => (V(e) === V(t) ? 0 : V(t) > V(e) ? 1 : -1))
      .slice(0, O + 1);
  return (0, r.jsxs)(`div`, {
    className: [`ui-af`, S].filter(Boolean).join(` `),
    style: { "--ui-af-rows": O, "--ui-af-count-w": `${I}ch`, "--ui-af-found-w": `calc(38px + ${L * 2}ch)` },
    children: [
      (0, r.jsx)(`style`, { href: `ui-agent-findings`, precedence: `default`, children: b }),
      (0, r.jsxs)(`header`, {
        className: `ui-af__bar`,
        children: [
          (0, r.jsx)(`span`, { className: `ui-af__spark`, children: (0, r.jsx)(g, {}) }),
          (0, r.jsx)(`span`, { className: `ui-af__title`, title: o, children: o }),
          (0, r.jsx)(`span`, {
            className: `ui-af__progress`,
            children: M > 0 && `${l.format(j)} of ${l.format(M)} ${M === 1 ? `check` : `checks`}`,
          }),
          (0, r.jsxs)(`span`, {
            className: `ui-af__totals`,
            "aria-label": `${l.format(P)} critical, ${l.format(F)} ${F === 1 ? `warning` : `warnings`}`,
            children: [
              (0, r.jsxs)(`span`, {
                "data-severity": `critical`,
                "data-zero": P === 0 || void 0,
                children: [(0, r.jsx)(`b`, { children: l.format(P) }, P), ` critical`],
              }),
              (0, r.jsxs)(`span`, {
                "data-severity": `warning`,
                "data-zero": F === 0 || void 0,
                children: [
                  (0, r.jsx)(`b`, { children: l.format(F) }, F),
                  ` `,
                  F === 1 ? `warning` : `warnings`,
                ],
              }),
            ],
          }),
        ],
      }),
      (0, r.jsx)(`div`, {
        className: `ui-af__card`,
        children: (0, r.jsxs)(`ul`, {
          className: `ui-af__agents`,
          "aria-label": `Agents`,
          children: [
            k.length === 0 && (0, r.jsx)(`li`, { className: `ui-af__none`, children: `No agents yet` }),
            k.map((e) => {
              let t = e.status ?? (e.done >= e.total ? `done` : `running`),
                n = e.total ? Math.min(100, (e.done / e.total) * 100) : 0,
                i = N(`critical`, e.id),
                a = N(`warning`, e.id),
                o = B === e.id,
                s = t === `done` ? `All checks done` : t === `failed` ? `Stopped` : e.step;
              return (0, r.jsx)(
                `li`,
                {
                  children: (0, r.jsxs)(`button`, {
                    type: `button`,
                    className: `ui-af__agent`,
                    "data-status": t,
                    "aria-pressed": o,
                    "data-dim": B && !o ? `` : void 0,
                    title: e.model ? `${e.name} · ${e.model}` : e.name,
                    onClick: () => E(o ? null : e.id),
                    children: [
                      (0, r.jsx)(v, { avatar: e.avatar, name: e.name }),
                      (0, r.jsxs)(`span`, {
                        className: `ui-af__who`,
                        children: [
                          (0, r.jsx)(`span`, { className: `ui-af__name`, dir: `auto`, children: e.name }),
                          (0, r.jsx)(_, { text: s }),
                        ],
                      }),
                      (0, r.jsx)(`span`, {
                        className: `ui-af__track`,
                        "aria-hidden": `true`,
                        children: (0, r.jsx)(`span`, { className: `ui-af__fill`, style: { width: `${n}%` } }),
                      }),
                      (0, r.jsxs)(`span`, {
                        className: `ui-af__count`,
                        children: [l.format(e.done), `/`, l.format(e.total)],
                      }),
                      (0, r.jsxs)(`span`, {
                        className: `ui-af__found`,
                        "aria-label": `${l.format(i)} critical, ${l.format(a)} ${a === 1 ? `warning` : `warnings`}`,
                        children: [
                          (0, r.jsxs)(`span`, {
                            "data-severity": `critical`,
                            "data-zero": i === 0 || void 0,
                            children: [
                              (0, r.jsx)(h, { severity: `critical` }),
                              (0, r.jsx)(`b`, { children: u(i) }, i),
                            ],
                          }),
                          (0, r.jsxs)(`span`, {
                            "data-severity": `warning`,
                            "data-zero": a === 0 || void 0,
                            children: [
                              (0, r.jsx)(h, { severity: `warning` }),
                              (0, r.jsx)(`b`, { children: u(a) }, a),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                },
                e.key,
              );
            }),
          ],
        }),
      }),
      (0, r.jsxs)(`div`, {
        className: `ui-af__feed-head`,
        children: [
          (0, r.jsx)(`span`, { className: `ui-af__label`, children: `Latest findings` }),
          z &&
            (0, r.jsxs)(`button`, {
              type: `button`,
              className: `ui-af__chip`,
              onClick: () => E(null),
              "aria-label": `Show all agents (now only ${z.name})`,
              title: z.name,
              children: [
                (0, r.jsx)(`span`, { className: `ui-af__chip-name`, children: z.name }),
                (0, r.jsx)(`svg`, {
                  width: `10`,
                  height: `10`,
                  viewBox: `0 0 10 10`,
                  "aria-hidden": `true`,
                  children: (0, r.jsx)(`path`, {
                    d: `M2.5 2.5l5 5M7.5 2.5l-5 5`,
                    stroke: `currentColor`,
                    strokeWidth: `1.4`,
                    strokeLinecap: `round`,
                  }),
                }),
              ],
            }),
        ],
      }),
      (0, r.jsx)(`div`, {
        className: `ui-af__card`,
        children: (0, r.jsxs)(`ol`, {
          className: `ui-af__feed`,
          "aria-live": `polite`,
          style: { "--ui-af-shown": Math.max(1, Math.min(H.length, O)) },
          children: [
            H.length === 0 && (0, r.jsx)(`li`, { className: `ui-af__empty`, children: `Nothing found yet` }),
            H.map((e, t) => {
              let n = R(e.agentId)?.name,
                i = e.location ? String(e.location) : ``;
              return (0, r.jsx)(
                `li`,
                {
                  className: `ui-af__slot`,
                  style: { transform: `translateY(${t * m}px)` },
                  "data-out": t >= O || void 0,
                  "aria-hidden": t >= O || void 0,
                  children: (0, r.jsx)(`button`, {
                    type: `button`,
                    className: `ui-af__finding`,
                    tabIndex: t >= O ? -1 : 0,
                    onClick: () => x?.(e.src),
                    children: (0, r.jsxs)(`span`, {
                      className: `ui-af__in`,
                      children: [
                        (0, r.jsx)(h, { severity: e.severity }),
                        (0, r.jsxs)(`span`, { className: `ui-af__sr`, children: [f[e.severity], `: `] }),
                        (0, r.jsx)(`span`, {
                          className: `ui-af__ftitle`,
                          dir: `auto`,
                          title: e.title,
                          children: e.title,
                        }),
                        (0, r.jsxs)(`span`, {
                          className: `ui-af__meta`,
                          title: [n, i].filter(Boolean).join(` · `) || void 0,
                          children: [
                            n && (0, r.jsx)(`span`, { className: `ui-af__who-name`, children: n }),
                            n && i && (0, r.jsx)(`span`, { className: `ui-af__dot`, children: `·` }),
                            i && (0, r.jsx)(`code`, { children: i }),
                          ],
                        }),
                        (0, r.jsx)(`span`, { className: `ui-af__time`, children: a(e.at, D) }),
                      ],
                    }),
                  }),
                },
                e.key,
              );
            }),
          ],
        }),
      }),
    ],
  });
}
var b = `.ui-af{--ui-af-tray: #f0f0f0;--ui-af-card: #ffffff;--ui-af-strong: #171717;--ui-af-ink: #171717;--ui-af-text: #6b6b6b;--ui-af-muted: #8a8a8a;--ui-af-faint: #b8b8b8;--ui-af-line: #ececec;--ui-af-fill: #ececec;--ui-af-hover: #f6f6f6;--ui-af-select: #f2f2f3;--ui-af-run-bg: rgba(47, 107, 255, 0.12);--ui-af-run-edge: rgba(47, 107, 255, 0.55);--ui-af-done-bg: #e4e4e6;--ui-af-done-edge: #d6d6d9;--ui-af-fail-bg: #fdecea;--ui-af-fail-edge: rgba(194, 51, 31, 0.45);--ui-af-crit: #c2331f;--ui-af-warn: #b85c00;--ui-af-note: #2f6bff;--ui-af-focus: rgba(23, 23, 23, 0.22);--ui-af-shadow: 0 0 0 1px #ececec, 0 1px 2px rgba(0, 0, 0, 0.04);--ui-af-ease: cubic-bezier(0.22, 1, 0.36, 1);--ui-af-row: ${m}px;position: relative;box-sizing: border-box;width: 100%;max-width: 640px;padding: 4px;border-radius: 20px;background: var(--ui-af-tray);container-type: inline-size;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 14px;font-weight: 400;line-height: 20px;letter-spacing: -0.006em;color: var(--ui-af-text);text-align: left;-webkit-font-smoothing: antialiased}.ui-af *, .ui-af *::before, .ui-af *::after{box-sizing: border-box}:where(.ui-af) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;text-align: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}.ui-af button:focus-visible{outline: 2px solid var(--ui-af-focus);outline-offset: 1px}.ui-af :is(ul, ol){margin: 0;padding: 0;list-style: none}.ui-af svg{display: block;flex: none}.ui-af b{font-weight: 500}.ui-af__sr{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}.ui-af__card{border-radius: 16px;background: var(--ui-af-card);box-shadow: var(--ui-af-shadow);overflow: hidden}.ui-af__bar{display: flex;align-items: center;gap: 10px;min-width: 0;padding: 10px 12px 12px 14px}.ui-af__spark{display: grid;flex: none;place-items: center;width: 16px;color: rgba(0, 96, 226, 0.765)}.ui-af__title{font-weight: 600;color: var(--ui-af-strong);white-space: nowrap;min-width: 0;overflow: hidden;text-overflow: ellipsis}.ui-af__progress{flex: 1 0 auto;min-width: 0;overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-af-muted);white-space: nowrap;text-overflow: ellipsis;font-variant-numeric: tabular-nums}.ui-af__totals{display: flex;flex: none;gap: 12px;font-size: 12px;line-height: 16px;white-space: nowrap}.ui-af__totals > span{display: inline-flex;align-items: center;gap: 6px;transition: color 300ms ease}.ui-af__totals > span::before{content: "";width: 6px;height: 6px;border-radius: 50%;background: currentColor}.ui-af__totals [data-severity="critical"]{color: var(--ui-af-crit)}.ui-af__totals [data-severity="warning"]{color: var(--ui-af-warn)}.ui-af__totals [data-zero]{color: var(--ui-af-faint)}.ui-af__totals b, .ui-af__found b{display: inline-block;font-variant-numeric: tabular-nums;animation: ui-af-roll 420ms var(--ui-af-ease)}.ui-af__agents{padding: 6px}.ui-af__agent{display: grid;grid-template-columns: 26px minmax(0, 1fr) 128px max(40px, var(--ui-af-count-w)) max(60px, var(--ui-af-found-w));align-items: center;gap: 12px;width: 100%;height: 52px;padding: 0 10px;border-radius: 12px;transition: background-color 160ms ease, opacity 220ms ease}.ui-af__agent:hover{background: var(--ui-af-hover)}.ui-af__agent[aria-pressed="true"]{background: var(--ui-af-select)}.ui-af__agent[data-dim]{opacity: 0.5}.ui-af__agent[data-dim]:hover{opacity: 0.8}.ui-af__avatar{display: grid;place-items: center;width: 26px;height: 26px;overflow: hidden;border-radius: 50%;background: var(--ui-af-fill);font-size: 10px;font-weight: 500;letter-spacing: 0.3px;color: var(--ui-af-text)}.ui-af__avatar[data-logo]{background: var(--ui-af-card);box-shadow: var(--ui-af-shadow)}.ui-af__avatar > svg{width: 14px;height: 14px}.ui-af__avatar > img{display: block;width: 100%;height: 100%;object-fit: cover}.ui-af__who{display: grid;min-width: 0}.ui-af__name{overflow: hidden;font-weight: 500;line-height: 19px;color: var(--ui-af-ink);white-space: nowrap;text-overflow: ellipsis}.ui-af__step{overflow: hidden;font-size: 12.5px;line-height: 17px;color: var(--ui-af-muted);white-space: nowrap;text-overflow: ellipsis;animation: ui-af-swap 360ms var(--ui-af-ease)}.ui-af__track{position: relative;height: 8px;border-radius: 4px;background: var(--ui-af-fill);overflow: hidden}.ui-af__fill{position: absolute;inset: 0 auto 0 0;overflow: hidden;border-radius: 4px;background: var(--ui-af-done-bg);box-shadow: inset 0 0 0 0.5px var(--ui-af-done-edge);transition: width 700ms var(--ui-af-ease), background-color 300ms ease}.ui-af__agent[data-status="running"] .ui-af__fill{background: var(--ui-af-run-bg);box-shadow: inset 0 0 0 0.5px var(--ui-af-run-edge)}.ui-af__agent[data-status="failed"] .ui-af__fill{background: var(--ui-af-fail-bg);box-shadow: inset 0 0 0 0.5px var(--ui-af-fail-edge)}.ui-af__agent[data-status="running"] .ui-af__fill::before{content: "";position: absolute;inset: 0 auto 0 0;width: 40px;background: linear-gradient(90deg, transparent, var(--ui-af-card), transparent);opacity: 0.7;animation: ui-af-sheen 1500ms linear infinite}.ui-af__agent[data-status="running"] .ui-af__fill::after{content: "";position: absolute;inset: 0 0 0 auto;width: 18px;background: linear-gradient(90deg, transparent, var(--ui-af-run-edge));animation: ui-af-breathe 1100ms ease-in-out infinite alternate}.ui-af__count{font-size: 12px;line-height: 16px;color: var(--ui-af-muted);text-align: right;font-variant-numeric: tabular-nums}.ui-af__found{display: flex;justify-content: flex-end;gap: 10px;font-size: 12px;line-height: 16px}.ui-af__found > span{display: inline-flex;align-items: center;gap: 4px;min-width: 22px}.ui-af__found [data-zero]{opacity: 0.28}.ui-af__found [data-zero] .ui-af__mark{color: var(--ui-af-faint)}.ui-af__found [data-severity="critical"] b{color: var(--ui-af-crit)}.ui-af__found [data-severity="warning"] b{color: var(--ui-af-warn)}.ui-af__found [data-zero] b{color: var(--ui-af-muted)}.ui-af__mark[data-severity="critical"]{color: var(--ui-af-crit)}.ui-af__mark[data-severity="warning"]{color: var(--ui-af-warn)}.ui-af__mark[data-severity="note"]{color: var(--ui-af-note)}.ui-af__feed-head{display: flex;align-items: center;gap: 8px;height: 40px;padding: 4px 14px 0}.ui-af__label{font-size: 13px;font-weight: 500;line-height: 18px;color: var(--ui-af-text)}.ui-af__chip{display: inline-flex;align-items: center;gap: 4px;height: 22px;padding: 0 6px 0 9px;border-radius: 999px;background: var(--ui-af-card);box-shadow: var(--ui-af-shadow);font-size: 12px;font-weight: 500;line-height: 16px;color: var(--ui-af-ink);animation: ui-af-swap 260ms var(--ui-af-ease)}.ui-af__chip{max-width: 60%}.ui-af__chip-name{min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-af__chip svg{color: var(--ui-af-muted)}.ui-af__feed{position: relative;height: calc(var(--ui-af-shown, var(--ui-af-rows)) * var(--ui-af-row) + 12px);transition: height 520ms var(--ui-af-ease);margin: 6px;overflow: hidden}.ui-af__slot{position: absolute;top: 0;right: 0;left: 0;height: var(--ui-af-row);transition: transform 520ms var(--ui-af-ease), opacity 320ms ease}.ui-af__slot[data-out]{opacity: 0;pointer-events: none}.ui-af__finding{display: block;width: 100%;height: 100%;border-radius: 12px;transition: background-color 160ms ease}.ui-af__finding:hover{background: var(--ui-af-hover)}.ui-af__in{display: flex;align-items: center;gap: 10px;height: 100%;min-width: 0;padding: 0 10px;animation: ui-af-in 560ms var(--ui-af-ease)}.ui-af__ftitle{flex: 0 1 auto;min-width: 0;overflow: hidden;color: var(--ui-af-ink);white-space: nowrap;text-overflow: ellipsis}.ui-af__meta{display: flex;flex: 1 1 0;align-items: center;gap: 6px;min-width: 0;overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-af-muted);white-space: nowrap}.ui-af__meta code{overflow: hidden;font-family: ui-monospace, "SF Mono", Menlo, monospace;font-size: 11.5px;text-overflow: ellipsis}.ui-af__who-name{flex: 0 1 auto;min-width: 0;overflow: hidden;text-overflow: ellipsis}.ui-af__meta code{flex: 0 1 auto;min-width: 0}.ui-af__dot{color: var(--ui-af-faint)}.ui-af__time{flex: none;min-width: 28px;font-size: 12px;line-height: 16px;color: var(--ui-af-faint);text-align: right;font-variant-numeric: tabular-nums}.ui-af__none{display: grid;place-items: center;height: 48px;font-size: 12px;color: var(--ui-af-muted)}.ui-af__empty{display: grid;place-items: center;height: var(--ui-af-row);font-size: 12px;color: var(--ui-af-muted)}@keyframes ui-af-in{from{opacity: 0;transform: translateY(-10px);filter: blur(2px)}}@keyframes ui-af-swap{from{opacity: 0;transform: translateY(3px)}}@keyframes ui-af-roll{from{opacity: 0;transform: translateY(-5px)}}@keyframes ui-af-sheen{from{transform: translateX(-40px)}to{transform: translateX(160px)}}@keyframes ui-af-breathe{from{opacity: 0.45}to{opacity: 1}}@container (max-width: 480px){.ui-af__agent{grid-template-columns: 26px minmax(0, 1fr) 64px max(52px, var(--ui-af-found-w));gap: 10px}.ui-af__count{display: none}.ui-af__progress{display: none}.ui-af__meta{display: none}.ui-af__ftitle{flex: 1}}@media (prefers-reduced-motion: reduce){.ui-af *, .ui-af *::before, .ui-af *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-af{--ui-af-tray: #111113;--ui-af-card: #19191b;--ui-af-strong: #ffffff;--ui-af-ink: rgba(255, 255, 255, 0.9);--ui-af-text: rgba(255, 255, 255, 0.62);--ui-af-muted: rgba(255, 255, 255, 0.45);--ui-af-faint: rgba(255, 255, 255, 0.28);--ui-af-line: rgba(255, 255, 255, 0.08);--ui-af-fill: rgba(255, 255, 255, 0.08);--ui-af-hover: rgba(255, 255, 255, 0.04);--ui-af-select: rgba(255, 255, 255, 0.06);--ui-af-run-bg: #0077ff3a;--ui-af-run-edge: rgba(112, 184, 255, 0.6);--ui-af-done-bg: rgba(255, 255, 255, 0.1);--ui-af-done-edge: rgba(255, 255, 255, 0.16);--ui-af-fail-bg: #ff35232b;--ui-af-fail-edge: rgba(255, 151, 125, 0.45);--ui-af-crit: #ff977d;--ui-af-warn: #ffa057;--ui-af-note: #70b8ff;--ui-af-focus: rgba(91, 154, 255, 0.45);--ui-af-shadow: 0 0 0 1px #2a2a2e, 0 1px 2px rgba(0, 0, 0, 0.3)}:where(.dark, [data-theme="dark"]) .ui-af__spark{color: #70b8ff}:where(.dark, [data-theme="dark"]) .ui-af__agent[data-status="running"] .ui-af__fill::before{background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.14), transparent)}`,
  x = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 1200 1200`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, {
        fill: `#D97757`,
        d: `M 233.959793 800.214905 L 468.644287 668.536987 L 472.590637 657.100647 L 468.644287 650.738403 L 457.208069 650.738403 L 417.986633 648.322144 L 283.892639 644.69812 L 167.597321 639.865845 L 54.926208 633.825623 L 26.577238 627.785339 L 3.3e-05 592.751709 L 2.73832 575.27533 L 26.577238 559.248352 L 60.724873 562.228149 L 136.187973 567.382629 L 249.422867 575.194763 L 331.570496 580.026978 L 453.261841 592.671082 L 472.590637 592.671082 L 475.328857 584.859009 L 468.724915 580.026978 L 463.570557 575.194763 L 346.389313 495.785217 L 219.543671 411.865906 L 153.100723 363.543762 L 117.181267 339.060425 L 99.060455 316.107361 L 91.248367 266.01355 L 123.865784 230.093994 L 167.677887 233.073853 L 178.872513 236.053772 L 223.248367 270.201477 L 318.040283 343.570496 L 441.825592 434.738342 L 459.946411 449.798706 L 467.194672 444.64447 L 468.080597 441.020203 L 459.946411 427.409485 L 392.617493 305.718323 L 320.778564 181.932983 L 288.80542 130.630859 L 280.348999 99.865845 C 277.369171 87.221436 275.194641 76.590698 275.194641 63.624268 L 312.322174 13.20813 L 332.8591 6.604126 L 382.389313 13.20813 L 403.248352 31.328979 L 434.013519 101.71814 L 483.865753 212.537048 L 561.181274 363.221497 L 583.812134 407.919434 L 595.892639 449.315491 L 600.40271 461.959839 L 608.214783 461.959839 L 608.214783 454.711609 L 614.577271 369.825623 L 626.335632 265.61084 L 637.771851 131.516846 L 641.718201 93.745117 L 660.402832 48.483276 L 697.530334 24.000122 L 726.52356 37.852417 L 750.362549 72 L 747.060486 94.067139 L 732.886047 186.201416 L 705.100708 330.52356 L 686.979919 427.167847 L 697.530334 427.167847 L 709.61084 415.087341 L 758.496704 350.174561 L 840.644348 247.490051 L 876.885925 206.738342 L 919.167847 161.71814 L 946.308838 140.29541 L 997.61084 140.29541 L 1035.38269 196.429626 L 1018.469849 254.416199 L 965.637634 321.422852 L 921.825562 378.201538 L 859.006714 462.765259 L 819.785278 530.41626 L 823.409424 535.812073 L 832.75177 534.92627 L 974.657776 504.724915 L 1051.328979 490.872559 L 1142.818848 475.167786 L 1184.214844 494.496582 L 1188.724854 514.147644 L 1172.456421 554.335693 L 1074.604126 578.496765 L 959.838989 601.449829 L 788.939636 641.879272 L 786.845764 643.409485 L 789.261841 646.389343 L 866.255127 653.637634 L 899.194702 655.409424 L 979.812134 655.409424 L 1129.932861 666.604187 L 1169.154419 692.537109 L 1192.671265 724.268677 L 1188.724854 748.429688 L 1128.322144 779.194641 L 1046.818848 759.865845 L 856.590759 714.604126 L 791.355774 698.335754 L 782.335693 698.335754 L 782.335693 703.731567 L 836.69812 756.885986 L 936.322205 846.845581 L 1061.073975 962.81897 L 1067.436279 991.490112 L 1051.409424 1014.120911 L 1034.496704 1011.704712 L 924.885986 929.234924 L 882.604126 892.107544 L 786.845764 811.48999 L 780.483276 811.48999 L 780.483276 819.946289 L 802.550415 852.241699 L 919.087341 1027.409424 L 925.127625 1081.127686 L 916.671204 1098.604126 L 886.469849 1109.154419 L 853.288696 1103.114136 L 785.073914 1007.355835 L 714.684631 899.516785 L 657.906067 802.872498 L 650.979858 806.81897 L 617.476624 1167.704834 L 601.771851 1186.147705 L 565.530212 1200 L 535.328857 1177.046997 L 519.302124 1139.919556 L 535.328857 1066.550537 L 554.657776 970.792053 L 570.362488 894.68457 L 584.536926 800.134277 L 592.993347 768.724976 L 592.429626 766.630859 L 585.503479 767.516968 L 514.22821 865.369263 L 405.825531 1011.865906 L 320.053711 1103.677979 L 299.516815 1111.812256 L 263.919525 1093.369263 L 267.221497 1060.429688 L 287.114136 1031.114136 L 405.825531 880.107361 L 477.422913 786.52356 L 523.651062 732.483276 L 523.328918 724.671265 L 520.590698 724.671265 L 205.288605 929.395935 L 149.154434 936.644409 L 124.993355 914.01355 L 127.973183 876.885986 L 139.409409 864.80542 L 234.201385 799.570435 L 233.879227 799.8927 Z`,
      }),
    }),
  S = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `currentColor`,
      "aria-hidden": `true`,
      style: { color: `var(--ui-afc-strong, var(--ui-af-ink, #000))` },
      children: (0, r.jsx)(`path`, {
        d: `M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z`,
      }),
    }),
  C = () => {
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
  w = 26,
  T = [
    {
      id: `auditor`,
      name: `Auditor`,
      model: `Opus 5.5`,
      avatar: x,
      total: 24,
      finish: 25,
      steps: [
        `Tracing calls in Vault.withdraw`,
        `Checking access control on mint`,
        `Reading upgrade paths`,
        `Comparing roles with the spec`,
      ],
    },
    {
      id: `fuzzer`,
      name: `Fuzzer`,
      model: `GPT-6`,
      avatar: S,
      total: 18,
      finish: 24,
      steps: [
        `Fuzzing transfer with 10k inputs`,
        `Replaying failed sequences`,
        `Shrinking a failing case`,
        `Fuzzing the oracle feed`,
      ],
    },
    {
      id: `prover`,
      name: `Prover`,
      model: `Gemini 3.8 Pro`,
      avatar: C,
      total: 12,
      finish: 26,
      steps: [`Proving totalSupply invariant`, `Checking balance conservation`, `Bounding loop iterations`],
    },
    {
      id: `gas`,
      name: `Gas review`,
      model: `Sonnet 5.5`,
      avatar: x,
      total: 10,
      finish: 17,
      steps: [`Profiling storage reads`, `Packing struct slots`, `Checking loop costs`],
    },
  ],
  E = [
    {
      t: -40,
      id: `f0`,
      agentId: `gas`,
      severity: `note`,
      title: `Constant could be immutable`,
      location: `Pool.sol:12`,
    },
    {
      t: 2,
      id: `f1`,
      agentId: `auditor`,
      severity: `critical`,
      title: `Reentrancy in withdraw()`,
      location: `Vault.sol:142`,
    },
    {
      t: 4.5,
      id: `f2`,
      agentId: `fuzzer`,
      severity: `warning`,
      title: `Return value of transfer not checked`,
      location: `Token.sol:88`,
    },
    {
      t: 7,
      id: `f3`,
      agentId: `gas`,
      severity: `note`,
      title: `Loop reads storage on every pass`,
      location: `Pool.sol:61`,
    },
    {
      t: 9.5,
      id: `f4`,
      agentId: `auditor`,
      severity: `warning`,
      title: `Owner can mint without a cap`,
      location: `Token.sol:31`,
    },
    {
      t: 12,
      id: `f5`,
      agentId: `prover`,
      severity: `critical`,
      title: `totalSupply can differ from the sum of balances`,
      location: `Token.sol:204`,
    },
    {
      t: 15,
      id: `f6`,
      agentId: `fuzzer`,
      severity: `warning`,
      title: `Price used without a staleness check`,
      location: `Oracle.sol:57`,
    },
    {
      t: 18.5,
      id: `f7`,
      agentId: `prover`,
      severity: `note`,
      title: `Loop bound depends on user input`,
      location: `Vault.sol:96`,
    },
  ];
function D() {
  let [e, t] = (0, n.useState)(() => Date.now()),
    [i, a] = (0, n.useState)(e);
  (0, n.useEffect)(() => {
    let n = window.setInterval(() => {
      let n = Date.now();
      ((n - e) / 1e3 > w && t(n), a(n));
    }, 250);
    return () => window.clearInterval(n);
  }, [e]);
  let o = Math.max(0, (i - e) / 1e3),
    s = T.map((e) => {
      let t = Math.min(1, o / e.finish),
        n = Math.floor(t * e.total),
        i = e.avatar;
      return {
        id: e.id,
        name: e.name,
        model: e.model,
        avatar: (0, r.jsx)(i, {}),
        total: e.total,
        done: n,
        step: e.steps[Math.min(e.steps.length - 1, Math.floor(t * e.steps.length))],
      };
    }),
    c = E.filter((e) => e.t <= o).map(({ t, ...n }) => ({ ...n, at: e + t * 1e3 }));
  return (0, r.jsx)(`div`, {
    className: `afc-demo`,
    children: (0, r.jsx)(y, { title: `Verification`, agents: s, findings: c, now: i }),
  });
}
