/*
 * affectUI · parallel-attempts (Pro)
 * Implementation recovered from public bundle asset: demo-DNq6dj3m.js
 * Styles inlined in the module -> parallel-attempts.css (1 block(s))
 * Demo usage: parallel-attempts.demo.jsx
 * Minified identifiers kept; formatting by prettier.
 */

import { t as e } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
/* empty css             */ var n = e(),
  r = t(),
  i = 1e3,
  a = (e) =>
    e < 0
      ? `-${a(-e)}`
      : e === 0
        ? `$0`
        : e < 0.001
          ? `<$0.001`
          : e < 0.01
            ? `$${e.toFixed(3)}`
            : e < 100
              ? `$${e.toFixed(2)}`
              : `$${Math.round(e).toLocaleString(`en-US`)}`,
  o = (e) => String(e).padStart(2, `0`),
  s = (e) => {
    if (e < i) return `${Math.max(0, Math.round(e))}ms`;
    if (e < 10 * i) return `${(e / i).toFixed(1)}s`;
    let t = Math.round(e / i);
    if (t < 60) return `${t}s`;
    let n = Math.floor(t / 60);
    if (n < 60) return `${n}m ${o(t % 60)}s`;
    let r = Math.floor(n / 60);
    return r < 24 ? `${r}h ${o(n % 60)}m` : `${Math.floor(r / 24)}d ${r % 24}h`;
  },
  c = (e) => (e !== void 0 && Number.isFinite(e) ? e : void 0),
  l = new Intl.NumberFormat(`en`),
  u = (e) => (e.match(/[\p{L}\p{N}]/u)?.[0] ?? ``).toUpperCase(),
  d = { running: `Running`, done: `Done`, failed: `Failed` },
  f = () =>
    (0, r.jsxs)(`svg`, {
      width: `16`,
      height: `16`,
      viewBox: `0 0 16 16`,
      fill: `none`,
      "aria-hidden": `true`,
      children: [
        (0, r.jsx)(`rect`, {
          x: `1.5`,
          y: `2.5`,
          width: `9`,
          height: `2.4`,
          rx: `1.2`,
          fill: `currentColor`,
        }),
        (0, r.jsx)(`rect`, {
          x: `1.5`,
          y: `6.8`,
          width: `12`,
          height: `2.4`,
          rx: `1.2`,
          fill: `currentColor`,
          opacity: `0.55`,
        }),
        (0, r.jsx)(`rect`, {
          x: `1.5`,
          y: `11.1`,
          width: `6`,
          height: `2.4`,
          rx: `1.2`,
          fill: `currentColor`,
          opacity: `0.3`,
        }),
      ],
    }),
  p = () =>
    (0, r.jsx)(`svg`, {
      width: `12`,
      height: `12`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, {
        d: `M5 14L8.5 17.5L19 6.5`,
        stroke: `currentColor`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
        strokeWidth: `2.4`,
      }),
    });
function m({ attempts: e, task: t, picked: i, onPick: o, formatCost: m = a, title: g, className: _ }) {
  let [v, y] = (0, n.useState)(null),
    b = (0, n.useId)(),
    x = e.filter((e) => e.status !== `running`),
    S = e
      .filter((e) => e.status === `done`)
      .reduce((e, t) => (e === void 0 || (c(t.score) ?? 0) > (c(e.score) ?? 0) ? t : e), void 0),
    C = x.length === e.length && e.length > 0,
    w = i === void 0 ? (v ?? (C ? (S?.id ?? null) : null)) : i,
    T = e.reduce((e, t) => e + (c(t.cost) ?? 0), 0),
    E = (e) => {
      (y(e.id), o?.(e));
    };
  return (0, r.jsxs)(`div`, {
    className: [`ui-pa`, _].filter(Boolean).join(` `),
    children: [
      (0, r.jsx)(`style`, { href: `ui-parallel-attempts`, precedence: `default`, children: h }),
      (0, r.jsxs)(`header`, {
        className: `ui-pa__bar`,
        children: [
          (0, r.jsx)(`span`, { className: `ui-pa__mark`, children: (0, r.jsx)(f, {}) }),
          (0, r.jsx)(`span`, {
            className: `ui-pa__title`,
            id: b,
            dir: `auto`,
            title: g,
            children: g ?? `Best of ${l.format(e.length)}`,
          }),
          t && (0, r.jsx)(`span`, { className: `ui-pa__task`, dir: `auto`, title: t, children: t }),
          (0, r.jsxs)(`span`, {
            className: `ui-pa__sum`,
            children: [
              (0, r.jsxs)(`span`, {
                children: [
                  (0, r.jsx)(`b`, { children: l.format(x.length) }),
                  ` of `,
                  l.format(e.length),
                  ` done`,
                ],
              }),
              (0, r.jsx)(`span`, { children: (0, r.jsx)(`b`, { children: m(T) }) }),
            ],
          }),
        ],
      }),
      (0, r.jsx)(`div`, {
        className: `ui-pa__panel`,
        role: `radiogroup`,
        "aria-labelledby": b,
        children: e.map((e, t) => {
          let n = C && e.id === S?.id,
            i = e.id === w,
            a = e.status === `running` ? (e.step ?? `Working…`) : (e.note ?? d[e.status]),
            o = e.status === `done` ? 1 : Math.max(0.03, Math.min(1, c(e.progress) ?? 0)),
            l = c(e.score),
            f = [c(e.took) === void 0 ? void 0 : s(e.took), c(e.cost) === void 0 ? void 0 : m(e.cost)]
              .filter(Boolean)
              .join(` · `);
          return (0, r.jsxs)(
            `div`,
            {
              className: `ui-pa__row`,
              "data-status": e.status,
              "data-best": n ? `` : void 0,
              "data-picked": i ? `` : void 0,
              "data-quiet": C && w && !i ? `` : void 0,
              style: { "--i": t, "--p": o },
              children: [
                (0, r.jsx)(`span`, {
                  className: `ui-pa__icon`,
                  "aria-hidden": `true`,
                  children: e.icon ?? u(e.name),
                }),
                (0, r.jsxs)(`div`, {
                  className: `ui-pa__who`,
                  children: [
                    (0, r.jsxs)(`span`, {
                      className: `ui-pa__name`,
                      title: [e.name, e.model, e.approach].filter(Boolean).join(` · `),
                      children: [
                        (0, r.jsx)(`span`, { className: `ui-pa__name-text`, dir: `auto`, children: e.name }),
                        e.model && (0, r.jsx)(`span`, { className: `ui-pa__model`, children: e.model }),
                        e.approach &&
                          (0, r.jsx)(`span`, {
                            className: `ui-pa__approach`,
                            dir: `auto`,
                            children: e.approach,
                          }),
                      ],
                    }),
                    (0, r.jsx)(
                      `span`,
                      { className: `ui-pa__line`, dir: `auto`, title: a, children: a },
                      e.status,
                    ),
                  ],
                }),
                (0, r.jsx)(`div`, {
                  className: `ui-pa__lane`,
                  "aria-hidden": `true`,
                  children: (0, r.jsx)(`span`, { className: `ui-pa__fill` }),
                }),
                (0, r.jsxs)(`div`, {
                  className: `ui-pa__end`,
                  children: [
                    (0, r.jsx)(
                      `span`,
                      {
                        className: `ui-pa__score`,
                        children:
                          e.status === `running`
                            ? (0, r.jsxs)(`span`, {
                                className: `ui-pa__pct`,
                                children: [Math.round(o * 100), `%`],
                              })
                            : e.status === `failed`
                              ? (0, r.jsx)(`span`, { className: `ui-pa__failed`, children: `Failed` })
                              : (0, r.jsxs)(r.Fragment, {
                                  children: [
                                    n && (0, r.jsx)(`span`, { className: `ui-pa__best`, children: `Best` }),
                                    l === void 0 ? d.done : Math.round(l),
                                  ],
                                }),
                      },
                      e.status,
                    ),
                    (0, r.jsxs)(`span`, {
                      className: `ui-pa__meta-slot`,
                      children: [
                        (0, r.jsx)(`span`, {
                          className: `ui-pa__meta`,
                          "data-hide": e.status === `done` && (i || C) ? `` : void 0,
                          children: f,
                        }),
                        e.status === `done` &&
                          C &&
                          (0, r.jsx)(`button`, {
                            type: `button`,
                            role: `radio`,
                            "aria-checked": i,
                            className: `ui-pa__use`,
                            "data-on": i ? `` : void 0,
                            onClick: () => E(e),
                            "aria-label": `${i ? `Using` : `Use`} ${e.name}${l === void 0 ? `` : `, score ${Math.round(l)}`}`,
                            children: i
                              ? (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(p, {}), `In use`] })
                              : `Use this one`,
                          }),
                      ],
                    }),
                  ],
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
var h = `.ui-pa{--ui-pa-tray: #f0f0f0;--ui-pa-panel: #ffffff;--ui-pa-card: #ffffff;--ui-pa-strong: #171717;--ui-pa-ink: #171717;--ui-pa-text: #6b6b6b;--ui-pa-muted: #8a8a8a;--ui-pa-faint: #c2c2c2;--ui-pa-line: #ececec;--ui-pa-fill: rgba(0, 0, 0, 0.05);--ui-pa-track: #f2f2f2;--ui-pa-accent: #2f6bff;--ui-pa-focus: rgba(23, 23, 23, 0.22);--ui-pa-running-bg: #e3ecff;--ui-pa-running-edge: #a9c2ff;--ui-pa-running-ink: #2456d6;--ui-pa-done-bg: #dcf3e4;--ui-pa-done-edge: #9fd9b4;--ui-pa-done-ink: #1a7f45;--ui-pa-failed-bg: #fde3df;--ui-pa-failed-edge: #f1a397;--ui-pa-failed-ink: #c2331f;--ui-pa-best-bg: #c4ebd1;--ui-pa-best-edge: #6fc590;--ui-pa-shine: rgba(255, 255, 255, 0.9);--ui-pa-wash: #f3fbf6;--ui-pa-shadow: 0 0 0 1px #ececec, 0 1px 2px rgba(0, 0, 0, 0.04);--ui-pa-ease: cubic-bezier(0.22, 1, 0.36, 1);position: relative;box-sizing: border-box;width: 100%;min-width: 0;padding: 4px;border-radius: 20px;background: var(--ui-pa-tray);container: ui-pa / inline-size;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 14px;font-weight: 400;line-height: 20px;letter-spacing: -0.006em;color: var(--ui-pa-text);text-align: left;-webkit-font-smoothing: antialiased}.ui-pa *, .ui-pa *::before, .ui-pa *::after{box-sizing: border-box}:where(.ui-pa) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;letter-spacing: inherit;text-align: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}.ui-pa button:focus-visible{outline: 2px solid var(--ui-pa-focus);outline-offset: 1px}.ui-pa svg{display: block;flex: none}.ui-pa__bar{display: flex;flex-wrap: wrap;align-items: center;gap: 4px 8px;min-width: 0;padding: 8px 12px 12px}.ui-pa__mark{display: grid;flex: none;place-items: center;width: 16px;color: var(--ui-pa-accent)}.ui-pa__title{flex: 0 1 auto;min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;font-weight: 600;color: var(--ui-pa-strong)}.ui-pa__task{min-width: 0;overflow: hidden;font-size: 13px;color: var(--ui-pa-muted);white-space: nowrap;text-overflow: ellipsis}.ui-pa__sum{display: flex;align-items: center;gap: 14px;margin-left: auto;font-size: 13px;line-height: 18px;color: var(--ui-pa-muted);font-variant-numeric: tabular-nums;white-space: nowrap}.ui-pa__sum b{font-weight: 600;color: var(--ui-pa-ink)}.ui-pa__panel{display: grid;gap: 4px}.ui-pa__row{position: relative;display: grid;grid-template-columns: 32px minmax(0, 1fr) minmax(120px, 36%) minmax(100px, auto);align-items: center;column-gap: 14px;padding: 14px 18px 14px 14px;border-radius: 16px;background: var(--ui-pa-panel);box-shadow: var(--ui-pa-shadow);transition: opacity 320ms ease, background-color 500ms ease, box-shadow 300ms ease;animation: ui-pa-in 420ms var(--ui-pa-ease) calc(min(var(--i, 0), 12) * 70ms) backwards}.ui-pa__row > .ui-pa__lane{margin-left: 6px}.ui-pa__icon{display: grid;place-items: center;width: 32px;height: 32px;border-radius: 9px;background: var(--ui-pa-card);box-shadow: var(--ui-pa-shadow);font-size: 13px;font-weight: 600;color: var(--ui-pa-text)}.ui-pa__icon > svg{width: 16px;height: 16px}.ui-pa__row[data-picked]{background: var(--ui-pa-wash);box-shadow: 0 0 0 1px var(--ui-pa-done-edge), 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-pa__row[data-quiet]{opacity: 0.55}.ui-pa__row[data-quiet]:hover, .ui-pa__row[data-quiet]:focus-within{opacity: 1}.ui-pa__who{display: grid;min-width: 0}.ui-pa__name{display: flex;align-items: baseline;gap: 6px;min-width: 0;font-weight: 600;line-height: 20px;color: var(--ui-pa-ink);white-space: nowrap}.ui-pa__model{flex: 0 10 auto;min-width: 0;overflow: hidden;text-overflow: ellipsis;font-weight: 400;color: var(--ui-pa-muted)}.ui-pa__name-text{min-width: 0;overflow: hidden;text-overflow: ellipsis}.ui-pa__approach{flex: 0 100 auto;min-width: 0;overflow: hidden;font-weight: 400;color: var(--ui-pa-muted);text-overflow: ellipsis}.ui-pa__approach::before{content: "·";margin-right: 6px;color: var(--ui-pa-faint)}.ui-pa__line{overflow: hidden;font-size: 13px;line-height: 19px;color: var(--ui-pa-text);white-space: nowrap;text-overflow: ellipsis;animation: ui-pa-fade 320ms ease both}.ui-pa__row[data-status="running"] .ui-pa__line{color: var(--k-ink)}.ui-pa__row[data-status="failed"] .ui-pa__line{color: var(--ui-pa-failed-ink)}.ui-pa__lane{position: relative;height: 10px;border-radius: 5px;background: var(--ui-pa-track)}.ui-pa__fill{position: absolute;inset: 0 auto 0 0;width: calc(var(--p) * 100%);border-radius: 5px;background: var(--k-bg);box-shadow: inset 0 0 0 1px var(--k-edge);overflow: hidden;transition: width 600ms var(--ui-pa-ease), background-color 400ms ease, box-shadow 400ms ease}.ui-pa__row[data-status="running"] .ui-pa__fill::before{content: "";position: absolute;inset: 0 auto 0 0;width: 60px;background: linear-gradient(90deg, transparent, var(--ui-pa-shine), transparent);opacity: 0.85;animation: ui-pa-sweep 1500ms linear infinite}.ui-pa__row[data-status="running"] .ui-pa__fill::after{content: "";position: absolute;top: 0;right: 0;bottom: 0;width: 24px;background: linear-gradient(90deg, transparent, var(--k-edge));animation: ui-pa-glow 1100ms ease-in-out infinite alternate}.ui-pa__row[data-best] .ui-pa__fill{background: var(--ui-pa-best-bg);box-shadow: inset 0 0 0 1px var(--ui-pa-best-edge)}.ui-pa__end{display: grid;justify-items: end;min-width: 0;text-align: right}.ui-pa__score{display: inline-flex;align-items: center;gap: 6px;font-size: 14px;font-weight: 600;line-height: 20px;color: var(--ui-pa-ink);font-variant-numeric: tabular-nums;animation: ui-pa-fade 320ms ease both}.ui-pa__pct{font-weight: 400;color: var(--ui-pa-muted)}.ui-pa__failed{font-weight: 500;color: var(--ui-pa-failed-ink)}.ui-pa__best{height: 20px;padding: 0 8px;border-radius: 999px;background: var(--ui-pa-done-bg);font-size: 12px;font-weight: 500;line-height: 20px;color: var(--ui-pa-done-ink);animation: ui-pa-pop 420ms var(--ui-pa-ease) both}.ui-pa__meta-slot{position: relative;display: grid;justify-items: end;height: 19px}.ui-pa__meta{font-size: 13px;line-height: 19px;color: var(--ui-pa-muted);font-variant-numeric: tabular-nums;white-space: nowrap;transition: opacity 160ms ease}.ui-pa__use{position: absolute;top: -4px;right: -8px;display: inline-flex;align-items: center;gap: 4px;height: 26px;padding: 0 9px;border-radius: 999px;font-size: 13px;font-weight: 500;color: var(--ui-pa-text);white-space: nowrap;opacity: 0;transition: opacity 160ms ease, background-color 160ms ease, color 160ms ease}.ui-pa__row:hover .ui-pa__meta[data-hide], .ui-pa__row:focus-within .ui-pa__meta[data-hide], .ui-pa__row[data-picked] .ui-pa__meta[data-hide]{opacity: 0}.ui-pa__row:hover .ui-pa__use, .ui-pa__use:focus-visible, .ui-pa__use[data-on]{opacity: 1}.ui-pa__use:hover{background: var(--ui-pa-fill);color: var(--ui-pa-ink)}.ui-pa__use[data-on]{color: var(--ui-pa-done-ink);cursor: default}.ui-pa__use[data-on]:hover{background: none}.ui-pa [data-status="running"]{--k-bg: var(--ui-pa-running-bg);--k-edge: var(--ui-pa-running-edge);--k-ink: var(--ui-pa-running-ink)}.ui-pa [data-status="done"]{--k-bg: var(--ui-pa-done-bg);--k-edge: var(--ui-pa-done-edge);--k-ink: var(--ui-pa-done-ink)}.ui-pa [data-status="failed"]{--k-bg: var(--ui-pa-failed-bg);--k-edge: var(--ui-pa-failed-edge);--k-ink: var(--ui-pa-failed-ink)}@container ui-pa (max-width: 560px){.ui-pa__sum{flex-basis: 100%;justify-content: space-between;margin-left: 0}.ui-pa__row{grid-template-columns: 32px minmax(0, 1fr) minmax(88px, auto);grid-template-areas: "icon who end" "lane lane lane";row-gap: 12px;column-gap: 12px;padding: 14px 16px 16px 14px}.ui-pa__icon{grid-area: icon}.ui-pa__who{grid-area: who}.ui-pa__end{grid-area: end}.ui-pa__row > .ui-pa__lane{grid-area: lane;margin-left: 0}.ui-pa__approach{display: none}.ui-pa__line{display: -webkit-box;min-height: 38px;white-space: normal;-webkit-box-orient: vertical;-webkit-line-clamp: 2}}@keyframes ui-pa-in{from{opacity: 0;transform: translateY(4px)}}@keyframes ui-pa-fade{from{opacity: 0}}@keyframes ui-pa-pop{0%{opacity: 0;transform: scale(0.8)}60%{opacity: 1;transform: scale(1.06)}100%{transform: scale(1)}}@keyframes ui-pa-sweep{from{transform: translateX(-60px)}to{transform: translateX(900px)}}@keyframes ui-pa-glow{from{opacity: 0.45}to{opacity: 1}}@media (hover: none){.ui-pa__use{opacity: 1}.ui-pa__meta[data-hide]{opacity: 0}}@media (prefers-reduced-motion: reduce){.ui-pa *, .ui-pa *::before, .ui-pa *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-pa{--ui-pa-tray: #1a1a1c;--ui-pa-panel: #232326;--ui-pa-card: #2a2a2e;--ui-pa-strong: #f5f5f5;--ui-pa-ink: #f0f0f0;--ui-pa-text: #a1a1a1;--ui-pa-muted: #8a8a8a;--ui-pa-faint: #5c5c5c;--ui-pa-line: #2e2e31;--ui-pa-fill: rgba(255, 255, 255, 0.06);--ui-pa-track: #2b2b2f;--ui-pa-accent: #6d93ff;--ui-pa-focus: rgba(255, 255, 255, 0.3);--ui-pa-running-bg: #1d2b4d;--ui-pa-running-edge: #3c5fb3;--ui-pa-running-ink: #8aaeff;--ui-pa-done-bg: #15321f;--ui-pa-done-edge: #2f7a4b;--ui-pa-done-ink: #55d68c;--ui-pa-failed-bg: #3d1a16;--ui-pa-failed-edge: #8f3a2e;--ui-pa-failed-ink: #ff8a76;--ui-pa-best-bg: #1d4a2d;--ui-pa-best-edge: #3f9a62;--ui-pa-shine: rgba(255, 255, 255, 0.28);--ui-pa-wash: #1c2b22;--ui-pa-shadow: 0 0 0 1px #2e2e31, 0 1px 2px rgba(0, 0, 0, 0.4)}`,
  g = [
    {
      id: `a`,
      name: `Opus 5.5`,
      icon: () =>
        (0, r.jsx)(`svg`, {
          viewBox: `0 0 1200 1200`,
          "aria-hidden": `true`,
          children: (0, r.jsx)(`path`, {
            fill: `#D97757`,
            d: `M 233.959793 800.214905 L 468.644287 668.536987 L 472.590637 657.100647 L 468.644287 650.738403 L 457.208069 650.738403 L 417.986633 648.322144 L 283.892639 644.69812 L 167.597321 639.865845 L 54.926208 633.825623 L 26.577238 627.785339 L 3.3e-05 592.751709 L 2.73832 575.27533 L 26.577238 559.248352 L 60.724873 562.228149 L 136.187973 567.382629 L 249.422867 575.194763 L 331.570496 580.026978 L 453.261841 592.671082 L 472.590637 592.671082 L 475.328857 584.859009 L 468.724915 580.026978 L 463.570557 575.194763 L 346.389313 495.785217 L 219.543671 411.865906 L 153.100723 363.543762 L 117.181267 339.060425 L 99.060455 316.107361 L 91.248367 266.01355 L 123.865784 230.093994 L 167.677887 233.073853 L 178.872513 236.053772 L 223.248367 270.201477 L 318.040283 343.570496 L 441.825592 434.738342 L 459.946411 449.798706 L 467.194672 444.64447 L 468.080597 441.020203 L 459.946411 427.409485 L 392.617493 305.718323 L 320.778564 181.932983 L 288.80542 130.630859 L 280.348999 99.865845 C 277.369171 87.221436 275.194641 76.590698 275.194641 63.624268 L 312.322174 13.20813 L 332.8591 6.604126 L 382.389313 13.20813 L 403.248352 31.328979 L 434.013519 101.71814 L 483.865753 212.537048 L 561.181274 363.221497 L 583.812134 407.919434 L 595.892639 449.315491 L 600.40271 461.959839 L 608.214783 461.959839 L 608.214783 454.711609 L 614.577271 369.825623 L 626.335632 265.61084 L 637.771851 131.516846 L 641.718201 93.745117 L 660.402832 48.483276 L 697.530334 24.000122 L 726.52356 37.852417 L 750.362549 72 L 747.060486 94.067139 L 732.886047 186.201416 L 705.100708 330.52356 L 686.979919 427.167847 L 697.530334 427.167847 L 709.61084 415.087341 L 758.496704 350.174561 L 840.644348 247.490051 L 876.885925 206.738342 L 919.167847 161.71814 L 946.308838 140.29541 L 997.61084 140.29541 L 1035.38269 196.429626 L 1018.469849 254.416199 L 965.637634 321.422852 L 921.825562 378.201538 L 859.006714 462.765259 L 819.785278 530.41626 L 823.409424 535.812073 L 832.75177 534.92627 L 974.657776 504.724915 L 1051.328979 490.872559 L 1142.818848 475.167786 L 1184.214844 494.496582 L 1188.724854 514.147644 L 1172.456421 554.335693 L 1074.604126 578.496765 L 959.838989 601.449829 L 788.939636 641.879272 L 786.845764 643.409485 L 789.261841 646.389343 L 866.255127 653.637634 L 899.194702 655.409424 L 979.812134 655.409424 L 1129.932861 666.604187 L 1169.154419 692.537109 L 1192.671265 724.268677 L 1188.724854 748.429688 L 1128.322144 779.194641 L 1046.818848 759.865845 L 856.590759 714.604126 L 791.355774 698.335754 L 782.335693 698.335754 L 782.335693 703.731567 L 836.69812 756.885986 L 936.322205 846.845581 L 1061.073975 962.81897 L 1067.436279 991.490112 L 1051.409424 1014.120911 L 1034.496704 1011.704712 L 924.885986 929.234924 L 882.604126 892.107544 L 786.845764 811.48999 L 780.483276 811.48999 L 780.483276 819.946289 L 802.550415 852.241699 L 919.087341 1027.409424 L 925.127625 1081.127686 L 916.671204 1098.604126 L 886.469849 1109.154419 L 853.288696 1103.114136 L 785.073914 1007.355835 L 714.684631 899.516785 L 657.906067 802.872498 L 650.979858 806.81897 L 617.476624 1167.704834 L 601.771851 1186.147705 L 565.530212 1200 L 535.328857 1177.046997 L 519.302124 1139.919556 L 535.328857 1066.550537 L 554.657776 970.792053 L 570.362488 894.68457 L 584.536926 800.134277 L 592.993347 768.724976 L 592.429626 766.630859 L 585.503479 767.516968 L 514.22821 865.369263 L 405.825531 1011.865906 L 320.053711 1103.677979 L 299.516815 1111.812256 L 263.919525 1093.369263 L 267.221497 1060.429688 L 287.114136 1031.114136 L 405.825531 880.107361 L 477.422913 786.52356 L 523.651062 732.483276 L 523.328918 724.671265 L 520.590698 724.671265 L 205.288605 929.395935 L 149.154434 936.644409 L 124.993355 914.01355 L 127.973183 876.885986 L 139.409409 864.80542 L 234.201385 799.570435 L 233.879227 799.8927 Z`,
          }),
        }),
      approach: `Add a retry with backoff`,
      ends: 9.2,
      score: 78,
      steps: [
        [0, `Reading checkout.spec.ts`],
        [2, `Writing the retry`],
        [4.4, `Running tests`],
      ],
      note: `20/20 runs green · adds 1.4s per test`,
      cost: 0.31,
    },
    {
      id: `b`,
      name: `GPT-6 Sol`,
      icon: () =>
        (0, r.jsx)(`svg`, {
          viewBox: `0 0 24 24`,
          fill: `currentColor`,
          "aria-hidden": `true`,
          style: { color: `var(--ui-pac-strong, var(--ui-pa-ink, #000))` },
          children: (0, r.jsx)(`path`, {
            d: `M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z`,
          }),
        }),
      approach: `Mock the payment API`,
      ends: 7.4,
      score: 94,
      steps: [
        [0, `Reading payment.ts`],
        [1.6, `Writing the mock`],
        [3.6, `Running tests`],
      ],
      note: `20/20 runs green · suite 30% faster`,
      cost: 0.27,
    },
    {
      id: `c`,
      name: `Gemini 3.8 Pro`,
      icon: () => {
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
      approach: `Wait for the network to settle`,
      ends: 6.1,
      fails: 6.1,
      steps: [
        [0, `Reading checkout.spec.ts`],
        [1.8, `Adding the waits`],
        [3.4, `Running tests`],
      ],
      note: `Still flaky – 3 of 20 runs failed`,
      cost: 0.18,
    },
  ],
  _ = 15,
  v = 17,
  y = (e) =>
    g.map((t) => {
      let n = t.icon,
        i = { id: t.id, name: t.name, icon: (0, r.jsx)(n, {}), approach: t.approach };
      if (e < t.ends) {
        let n = [...t.steps].reverse().find(([t]) => e >= t)?.[1] ?? t.steps[0][1],
          r = n === `Running tests`,
          a = t.steps[t.steps.length - 1][0],
          o = Math.min(20, Math.max(1, Math.floor(((e - a) / (t.ends - a)) * 20) + 1));
        return {
          ...i,
          status: `running`,
          progress: e / (t.fails ? t.ends / 0.62 : t.ends),
          step: r ? `Running tests ${o}/20` : n,
          cost: t.cost * (e / t.ends),
        };
      }
      return t.fails
        ? { ...i, status: `failed`, progress: 0.62, note: t.note, took: t.ends * v * 1e3, cost: t.cost }
        : { ...i, status: `done`, score: t.score, note: t.note, took: t.ends * v * 1e3, cost: t.cost };
    });
function b() {
  let [e, t] = (0, n.useState)(0),
    [i, a] = (0, n.useState)(0),
    o = (0, n.useRef)(performance.now());
  return (
    (0, n.useEffect)(() => {
      let e = window.setInterval(() => {
        let e = (performance.now() - o.current) / 1e3;
        if (e > _) {
          ((o.current = performance.now()), a((e) => e + 1), t(0));
          return;
        }
        t(e);
      }, 100);
      return () => window.clearInterval(e);
    }, []),
    (0, r.jsx)(`div`, {
      className: `pa-demo`,
      children: (0, r.jsx)(m, { attempts: y(e), task: `Fix the flaky checkout test` }, i),
    })
  );
}
