import { t as e } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
/* empty css             */ var n = e(),
  r = t(),
  i = (e) => {
    let [t, n] = Array.isArray(e) ? e.map(Number) : [],
      r = Number.isFinite(t) ? t : n,
      i = Number.isFinite(n) ? n : t;
    return Number.isFinite(r) && Number.isFinite(i) ? [Math.min(r, i), Math.max(r, i)] : null;
  },
  a = (e) => {
    let t = new Set(),
      n = 1 / 0,
      r = -1 / 0;
    return (
      e.edits.forEach((i, a) =>
        e.edits.slice(a + 1).forEach((e) => {
          !i.span ||
            !e.span ||
            i.agentId === e.agentId ||
            i.span[0] > e.span[1] ||
            e.span[0] > i.span[1] ||
            (t.add(i.agentId).add(e.agentId),
            (n = Math.min(n, i.span[0], e.span[0])),
            (r = Math.max(r, i.span[1], e.span[1])));
        }),
      ),
      t.size ? { agents: [...t], from: n, to: r } : null
    );
  },
  o = (e) =>
    typeof Intl < `u` && `Segmenter` in Intl
      ? Array.from(new Intl.Segmenter().segment(e), (e) => e.segment)
      : Array.from(e),
  s = /^(jr|sr|ii|iii|iv)\.?$/i,
  c = (e) => {
    let t = e
      .trim()
      .split(/\s+/)
      .filter((e) => /^\p{L}/u.test(e) && !s.test(e));
    return (
      (t.length > 1 ? [t[0], t[t.length - 1]] : t)
        .map((e) => o(e)[0])
        .join(``)
        .toUpperCase() ||
      o(e.trim())[0] ||
      `?`
    );
  },
  l = { edit: `Changed`, conflict: `Conflict`, kept: `Kept`, lost: `Left out` },
  u = (e) => e.toLocaleString(`en-US`),
  d = (e, t, n = `${t}s`) => `${u(e)} ${e === 1 ? t : n}`,
  f = ([e, t]) => (e === t ? `line ${u(e)}` : `lines ${u(e)}–${u(t)}`),
  p = (e) => {
    let t = e.lastIndexOf(`/`) + 1;
    return [e.slice(0, t), e.slice(t)];
  },
  m = () =>
    (0, r.jsxs)(`svg`, {
      width: `16`,
      height: `16`,
      viewBox: `0 0 16 16`,
      fill: `none`,
      "aria-hidden": `true`,
      children: [
        (0, r.jsx)(`circle`, {
          cx: `8`,
          cy: `8`,
          r: `6.4`,
          stroke: `currentColor`,
          strokeWidth: `1.3`,
          opacity: `0.45`,
        }),
        (0, r.jsx)(`circle`, {
          cx: `8`,
          cy: `8`,
          r: `3.3`,
          stroke: `currentColor`,
          strokeWidth: `1.3`,
          opacity: `0.7`,
        }),
        (0, r.jsx)(`path`, {
          d: `M8 8 12.6 3.4`,
          stroke: `currentColor`,
          strokeWidth: `1.3`,
          strokeLinecap: `round`,
        }),
        (0, r.jsx)(`circle`, { cx: `11.2`, cy: `10.6`, r: `1.3`, fill: `currentColor` }),
      ],
    }),
  h = () =>
    (0, r.jsx)(`svg`, {
      width: `12`,
      height: `12`,
      viewBox: `0 0 12 12`,
      fill: `none`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, {
        d: `m2.8 6.3 2.1 2.1 4.3-4.6`,
        stroke: `currentColor`,
        strokeWidth: `1.5`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
      }),
    }),
  g = ({ place: e }) =>
    (0, r.jsx)(`span`, {
      className: `ui-cr__legend`,
      "data-place": e,
      "aria-hidden": `true`,
      children: [
        [`edit`, `Changed`],
        [`conflict`, `Conflict`],
        [`kept`, `Kept`],
      ].map(([e, t]) =>
        (0, r.jsxs)(
          `span`,
          {
            children: [(0, r.jsx)(`span`, { className: `ui-cr__bar-s`, "data-role": e, "data-key": `` }), t],
          },
          e,
        ),
      ),
    }),
  _ = ({ agent: e }) => {
    let [t, i] = (0, n.useState)(!1),
      a = e?.avatar && !t;
    return (0, r.jsx)(`span`, {
      className: `ui-cr__avatar`,
      "data-logo": a ? `` : void 0,
      onErrorCapture: () => i(!0),
      children: a ? e?.avatar : c(e?.name ?? `?`),
    });
  };
function v({
  agents: e,
  files: t,
  title: o = `Parallel work`,
  resolved: s,
  onResolve: c,
  onMerge: v,
  className: b,
}) {
  let x = [];
  for (let t of e ?? [])
    t && !x.some((e) => e.id === t.id) && x.push({ ...t, name: String(t.name ?? ``).trim() || String(t.id) });
  let S = [];
  for (let e of t ?? []) {
    if (!e) continue;
    let t = (e.edits ?? [])
        .filter((e) => e && x.some((t) => t.id === e.agentId))
        .map((e) => ({ ...e, span: i(e.lines) })),
      n = S.find((t) => t.path === e.path);
    n ? n.edits.push(...t) : S.push({ path: String(e.path ?? ``), edits: t });
  }
  let [C, w] = (0, n.useState)({}),
    T = s ?? C,
    [E, D] = (0, n.useState)(null),
    O = (0, n.useRef)(0);
  (0, n.useEffect)(() => () => window.clearTimeout(O.current), []);
  let k = S.map((e) => {
      let t = a(e),
        n = t && t.agents.includes(T[e.path]) ? T[e.path] : void 0;
      return { file: e, conflict: t, pick: n, state: t ? (n ? `settled` : `conflict`) : `clean` };
    }),
    A = k.filter((e) => e.state === `conflict`),
    j = k.filter((e) => e.conflict),
    M = k.find((e) => e.conflict && e.file.path === E) ?? A[0] ?? j[j.length - 1],
    N = (e) => x.find((t) => t.id === e),
    P = x.filter((e) => e.status !== `done`).length,
    F = x.filter((e) => S.some((t) => t.edits.some((t) => t.agentId === e.id))).length,
    I = A.length === 0 && P === 0 && F > 0,
    L = (e, t) => {
      (s === void 0 && w((n) => ({ ...n, [e]: t })),
        c?.(e, t),
        D(e),
        window.clearTimeout(O.current),
        (O.current = window.setTimeout(() => D(null), 700)));
    };
  return (0, r.jsxs)(`div`, {
    className: [`ui-cr`, b].filter(Boolean).join(` `),
    style: { "--ui-cr-n": x.length },
    children: [
      (0, r.jsx)(`style`, { href: `ui-conflict-radar`, precedence: `default`, children: y }),
      (0, r.jsxs)(`header`, {
        className: `ui-cr__bar`,
        children: [
          (0, r.jsx)(`span`, { className: `ui-cr__radar`, children: (0, r.jsx)(m, {}) }),
          (0, r.jsx)(`span`, { className: `ui-cr__title`, title: o, children: o }),
          (0, r.jsx)(`button`, {
            type: `button`,
            className: `ui-cr__merge`,
            "data-ready": I || void 0,
            disabled: !I,
            onClick: v,
            children: (0, r.jsx)(
              `span`,
              {
                children: A.length
                  ? `${d(A.length, `conflict`)} to settle`
                  : P
                    ? `Waiting for ${d(P, `agent`)}`
                    : F
                      ? `Merge ${d(F, `branch`, `branches`)}`
                      : `Nothing to merge`,
              },
              I ? `ready` : A.length ? `open${A.length}` : `wait`,
            ),
          }),
        ],
      }),
      (0, r.jsx)(`div`, {
        className: `ui-cr__card`,
        children: (0, r.jsxs)(`div`, {
          className: `ui-cr__grid`,
          role: `table`,
          "aria-label": `Files by agent`,
          children: [
            (0, r.jsxs)(`div`, {
              className: `ui-cr__row`,
              "data-head": ``,
              role: `row`,
              children: [
                (0, r.jsxs)(`span`, {
                  className: `ui-cr__file`,
                  role: `columnheader`,
                  children: [
                    (0, r.jsx)(`span`, { className: `ui-cr__sr`, children: `File` }),
                    (0, r.jsx)(g, { place: `head` }),
                  ],
                }),
                (0, r.jsx)(`span`, {
                  className: `ui-cr__cells`,
                  children: x.map((e, t) => {
                    let n = e.status !== `done`,
                      i = k.filter((t) => t.file.edits.some((t) => t.agentId === e.id)),
                      a = [
                        [`files`, i.length],
                        [
                          `conflicts`,
                          i.filter((t) => t.state === `conflict` && t.conflict.agents.includes(e.id)).length,
                        ],
                        [`kept`, i.filter((t) => t.pick === e.id).length],
                      ],
                      o = {
                        files: [`File`, `Files`],
                        conflicts: [`Conflict`, `Conflicts`],
                        kept: [`Kept`, `Kept`],
                      };
                    return (0, r.jsxs)(
                      `span`,
                      {
                        className: `ui-cr__head`,
                        role: `columnheader`,
                        "data-status": n ? `running` : `done`,
                        "data-last": t === x.length - 1 || void 0,
                        children: [
                          (0, r.jsx)(_, { agent: e }),
                          (0, r.jsx)(`span`, { className: `ui-cr__hname`, title: e.name, children: e.name }),
                          (0, r.jsx)(`span`, {
                            className: `ui-cr__sr`,
                            children: n ? `, working` : `, done`,
                          }),
                          (0, r.jsxs)(`span`, {
                            className: `ui-cr__kpi`,
                            "aria-hidden": `true`,
                            children: [
                              (0, r.jsxs)(`span`, {
                                className: `ui-cr__kpitop`,
                                children: [
                                  (0, r.jsx)(_, { agent: e }),
                                  (0, r.jsx)(`b`, { children: e.name }),
                                  (0, r.jsx)(`span`, {
                                    className: `ui-cr__kpistate`,
                                    children: n ? `Working` : `Done`,
                                  }),
                                ],
                              }),
                              e.model &&
                                (0, r.jsx)(`span`, { className: `ui-cr__kpimodel`, children: e.model }),
                              (0, r.jsx)(`span`, {
                                className: `ui-cr__kpis`,
                                children: a.map(([e, t]) =>
                                  (0, r.jsxs)(
                                    `span`,
                                    {
                                      "data-kpi": e,
                                      "data-zero": t === 0 || void 0,
                                      children: [(0, r.jsx)(`b`, { children: u(t) }), o[e][t === 1 ? 0 : 1]],
                                    },
                                    e,
                                  ),
                                ),
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
            }),
            k.map(({ file: e, conflict: t, pick: n, state: i }, a) => {
              let [o, s] = p(e.path),
                c = t ? t.agents.map((e) => x.findIndex((t) => t.id === e)).filter((e) => e >= 0) : [],
                u = (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsxs)(`span`, {
                      className: `ui-cr__file`,
                      role: `cell`,
                      children: [
                        (0, r.jsx)(`span`, {
                          className: `ui-cr__dot`,
                          "data-state": i,
                          "aria-hidden": `true`,
                        }),
                        (0, r.jsx)(`span`, {
                          className: `ui-cr__sr`,
                          children: i === `conflict` ? `Conflict: ` : i === `settled` ? `Settled: ` : ``,
                        }),
                        (0, r.jsxs)(`span`, {
                          className: `ui-cr__path`,
                          title: e.path,
                          children: [
                            (0, r.jsx)(`span`, { className: `ui-cr__dir`, children: o }),
                            (0, r.jsx)(`span`, { className: `ui-cr__fname`, children: s }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsxs)(`span`, {
                      className: `ui-cr__cells`,
                      children: [
                        c.length > 1 &&
                          (0, r.jsx)(
                            `span`,
                            {
                              className: `ui-cr__link`,
                              style: { "--a": Math.min(...c), "--b": Math.max(...c) },
                              "aria-hidden": `true`,
                            },
                            t.agents.join(),
                          ),
                        x.map((i, a) => {
                          let o = e.edits.find((e) => e.agentId === i.id),
                            s = t?.agents.includes(i.id),
                            c = o
                              ? n && s
                                ? n === i.id
                                  ? `kept`
                                  : `lost`
                                : s
                                  ? `conflict`
                                  : `edit`
                              : `none`,
                            u = o?.active && !n,
                            d = s && !n ? t.agents.filter((e) => e !== i.id).map((e) => N(e)?.name ?? e) : [];
                          return (0, r.jsxs)(
                            `span`,
                            {
                              className: `ui-cr__cell`,
                              role: `cell`,
                              "data-last": a === x.length - 1 || void 0,
                              children: [
                                (0, r.jsx)(`span`, {
                                  className: `ui-cr__bar-s`,
                                  "data-role": c,
                                  "data-active": u || void 0,
                                }),
                                o &&
                                  (0, r.jsxs)(`span`, {
                                    className: `ui-cr__tip`,
                                    "data-role": c,
                                    children: [
                                      (0, r.jsxs)(`span`, {
                                        className: `ui-cr__tiptop`,
                                        children: [
                                          (0, r.jsx)(`b`, { children: i.name }),
                                          (0, r.jsx)(`span`, {
                                            className: `ui-cr__tipstate`,
                                            children: u ? `Writing…` : l[c],
                                          }),
                                        ],
                                      }),
                                      (o.span || d.length > 0) &&
                                        (0, r.jsx)(`span`, {
                                          className: `ui-cr__tipmeta`,
                                          children: [
                                            o.span && f(o.span).replace(/^l/, `L`),
                                            d.length > 0 && `overlaps ${d.join(`, `)}`,
                                          ]
                                            .filter(Boolean)
                                            .join(` · `),
                                        }),
                                    ],
                                  }),
                              ],
                            },
                            i.id,
                          );
                        }),
                      ],
                    }),
                  ],
                });
              return t
                ? (0, r.jsx)(
                    `button`,
                    {
                      type: `button`,
                      role: `row`,
                      className: `ui-cr__row`,
                      "data-state": i,
                      "data-alt": a % 2 == 1 || void 0,
                      "aria-pressed": M?.file.path === e.path,
                      onClick: () => D(e.path),
                      children: u,
                    },
                    e.path,
                  )
                : (0, r.jsx)(
                    `div`,
                    {
                      role: `row`,
                      className: `ui-cr__row`,
                      "data-state": i,
                      "data-alt": a % 2 == 1 || void 0,
                      children: u,
                    },
                    e.path,
                  );
            }),
            (0, r.jsx)(g, { place: `foot` }),
          ],
        }),
      }),
      (0, r.jsx)(`div`, {
        className: `ui-cr__card`,
        children: (0, r.jsx)(`section`, {
          className: `ui-cr__pick`,
          "aria-live": `polite`,
          children: M?.conflict
            ? (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsxs)(
                    `div`,
                    {
                      className: `ui-cr__phead`,
                      children: [
                        (0, r.jsx)(`span`, {
                          className: `ui-cr__ptitle`,
                          children: M.state === `settled` ? `Settled` : `Pick a way`,
                        }),
                        (0, r.jsxs)(`span`, {
                          className: `ui-cr__where`,
                          title: `${M.file.path} · ${f([M.conflict.from, M.conflict.to])}`,
                          children: [p(M.file.path)[1], ` · `, f([M.conflict.from, M.conflict.to])],
                        }),
                      ],
                    },
                    M.file.path,
                  ),
                  (0, r.jsx)(
                    `div`,
                    {
                      className: `ui-cr__ways`,
                      role: `radiogroup`,
                      "aria-label": `Ways to settle ${M.file.path}`,
                      children: M.conflict.agents.map((e) => {
                        let t = N(e),
                          n = M.file.edits.find((t) => t.agentId === e),
                          i = M.pick === e;
                        return (0, r.jsxs)(
                          `button`,
                          {
                            type: `button`,
                            role: `radio`,
                            "aria-checked": i,
                            className: `ui-cr__way`,
                            "data-lost": (M.pick && !i) || void 0,
                            onClick: () => L(M.file.path, e),
                            children: [
                              (0, r.jsxs)(`span`, {
                                className: `ui-cr__wtop`,
                                children: [
                                  (0, r.jsx)(_, { agent: t }),
                                  (0, r.jsx)(`span`, {
                                    className: `ui-cr__wname`,
                                    title: t?.name ?? e,
                                    children: t?.name ?? e,
                                  }),
                                  i &&
                                    (0, r.jsxs)(`span`, {
                                      className: `ui-cr__kept`,
                                      children: [(0, r.jsx)(h, {}), ` Kept`],
                                    }),
                                ],
                              }),
                              (0, r.jsx)(`span`, {
                                className: `ui-cr__summary`,
                                title: n?.summary,
                                children:
                                  n?.summary || (n?.span ? `Changes ${f(n.span)}` : `Changes this file`),
                              }),
                            ],
                          },
                          e,
                        );
                      }),
                    },
                    `${M.file.path}-ways`,
                  ),
                ],
              })
            : (0, r.jsx)(`div`, {
                className: `ui-cr__calm`,
                children: P
                  ? `Watching ${d(P, `agent`)} for overlaps`
                  : F > 1
                    ? `No overlaps – the branches merge cleanly`
                    : F
                      ? `No overlaps – the branch merges cleanly`
                      : `No changes yet`,
              }),
        }),
      }),
    ],
  });
}
var y = `.ui-cr{--ui-cr-tray: #f0f0f0;--ui-cr-card: #ffffff;--ui-cr-strong: #171717;--ui-cr-ink: #171717;--ui-cr-text: #6b6b6b;--ui-cr-muted: #8a8a8a;--ui-cr-faint: #c2c2c2;--ui-cr-line: #ececec;--ui-cr-fill: rgba(0, 0, 0, 0.05);--ui-cr-hover: #fafafa;--ui-cr-select: #f5f5f5;--ui-cr-zebra: #fcfcfc;--ui-cr-pressed: #f2f2f2;--ui-cr-edit-bg: #e3ecff;--ui-cr-edit-edge: #a9c2ff;--ui-cr-edit-ink: #2456d6;--ui-cr-hit-bg: #fde3cf;--ui-cr-hit-edge: #f0a56d;--ui-cr-hit: #c2410c;--ui-cr-hit-row: #fff6ef;--ui-cr-ok-bg: #dcf3e4;--ui-cr-ok-edge: #9fd9b4;--ui-cr-ok: #1a7f45;--ui-cr-ok-tag: #1f9a55;--ui-cr-ok-tag-bg: #e6f6ec;--ui-cr-accent: #2f6bff;--ui-cr-focus: rgba(23, 23, 23, 0.22);--ui-cr-chip: #171717;--ui-cr-chip-ink: #ffffff;--ui-cr-shadow: 0 0 0 1px #ececec, 0 1px 2px rgba(0, 0, 0, 0.04);--ui-cr-pop: 0 0 0 1px #ececec, 0 8px 24px -6px rgba(0, 0, 0, 0.16);--ui-cr-ease: cubic-bezier(0.22, 1, 0.36, 1);position: relative;box-sizing: border-box;width: 100%;max-width: 560px;padding: 4px;border-radius: 20px;background: var(--ui-cr-tray);container: ui-cr / inline-size;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 14px;font-weight: 400;line-height: 20px;letter-spacing: -0.006em;color: var(--ui-cr-text);text-align: left;-webkit-font-smoothing: antialiased}.ui-cr *, .ui-cr *::before, .ui-cr *::after{box-sizing: border-box}:where(.ui-cr) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;letter-spacing: inherit;text-align: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}.ui-cr button:focus-visible{outline: 2px solid var(--ui-cr-focus);outline-offset: -2px}.ui-cr svg{display: block;flex: none}.ui-cr__sr{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}.ui-cr__card{--ui-cr-col: 104px;--ui-cr-file: 216px;border-radius: 16px;background: var(--ui-cr-card);box-shadow: var(--ui-cr-shadow);overflow: hidden}.ui-cr__card + .ui-cr__card{margin-top: 4px}.ui-cr__card:has(> .ui-cr__grid){position: relative;z-index: 1;overflow: visible}.ui-cr__grid > :first-child{border-radius: 16px 16px 0 0}.ui-cr__grid > .ui-cr__row:nth-last-child(2){border-radius: 0 0 16px 16px}.ui-cr__bar{display: flex;align-items: center;gap: 10px;min-width: 0;height: 44px;padding: 0 8px 4px 14px}.ui-cr__radar{display: grid;flex: none;place-items: center;width: 16px;color: var(--ui-cr-accent)}.ui-cr__title{flex: 1;min-width: 0;overflow: hidden;font-weight: 600;color: var(--ui-cr-strong);white-space: nowrap;text-overflow: ellipsis}.ui-cr__merge{flex: none;height: 26px;padding: 0 10px;border-radius: 9px;font-size: 13px;line-height: 18px;background: var(--ui-cr-card);box-shadow: var(--ui-cr-shadow);font-weight: 600;color: var(--ui-cr-muted);white-space: nowrap;transition: background-color 240ms ease, color 240ms ease, box-shadow 240ms ease}.ui-cr__merge > span{display: block;animation: ui-cr-swap 320ms var(--ui-cr-ease)}.ui-cr__merge:disabled{cursor: default}.ui-cr__merge[data-ready]{background: var(--ui-cr-chip);box-shadow: none;color: var(--ui-cr-chip-ink)}.ui-cr__merge[data-ready]:hover{opacity: 0.9}.ui-cr__grid{display: grid}.ui-cr__row{display: grid;grid-template-columns: minmax(var(--ui-cr-file), 1fr) minmax(0, calc(var(--ui-cr-n) * var(--ui-cr-col)));align-items: center;width: 100%;height: 36px;border-top: 1px solid var(--ui-cr-line);transition: background-color 160ms ease}.ui-cr__row[data-head]{height: 32px;border-top: 0}.ui-cr__row[data-alt]{background: var(--ui-cr-zebra)}button.ui-cr__row:hover{background: var(--ui-cr-select)}button.ui-cr__row[aria-pressed="true"]{background: var(--ui-cr-pressed)}button.ui-cr__row[aria-pressed="true"][data-state="conflict"]{background: var(--ui-cr-hit-row)}.ui-cr__file{display: flex;align-items: center;gap: 10px;min-width: 0;height: 100%;padding: 0 12px 0 16px}.ui-cr__dot{flex: none;width: 6px;height: 6px;border-radius: 50%;background: var(--ui-cr-fill);transition: background-color 300ms ease}.ui-cr__dot[data-state="conflict"]{background: var(--ui-cr-hit)}.ui-cr__dot[data-state="settled"]{background: var(--ui-cr-ok)}.ui-cr__path{display: flex;min-width: 0;color: var(--ui-cr-ink);white-space: nowrap}.ui-cr__dir, .ui-cr__fname{min-width: 0;overflow: hidden;text-overflow: ellipsis}.ui-cr__dir{flex: 0 1000 auto}.ui-cr__fname{flex: 0 1 auto}.ui-cr__dir{color: var(--ui-cr-faint)}.ui-cr__row[data-state="clean"] .ui-cr__path{color: var(--ui-cr-text)}.ui-cr__cells{position: relative;display: grid;grid-template-columns: repeat(var(--ui-cr-n), minmax(0, 1fr));align-items: center;height: 100%}.ui-cr__cells > :is(.ui-cr__head, .ui-cr__cell){height: 100%;border-left: 1px solid var(--ui-cr-line)}.ui-cr__head{display: flex;align-items: center;justify-content: center;gap: 6px;min-width: 0;padding: 0 12px}.ui-cr__hname{min-width: 0;overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-cr-muted);white-space: nowrap;text-overflow: ellipsis}.ui-cr__head{position: relative;cursor: default}.ui-cr__row[data-head] .ui-cr__head{container: ui-cr-head / inline-size}@container ui-cr-head (max-width: 72px){.ui-cr__hname{display: none}}.ui-cr__head:hover{z-index: 4}.ui-cr__kpi{position: absolute;top: calc(100% - 2px);left: 50%;display: grid;gap: 2px;width: 232px;padding: 10px 12px 12px;border-radius: 10px;background: var(--ui-cr-card);box-shadow: var(--ui-cr-pop);text-align: left;opacity: 0;transform: translate(-50%, -3px);pointer-events: none;transition: opacity 140ms ease, transform 180ms var(--ui-cr-ease)}.ui-cr__head[data-last] .ui-cr__kpi{left: auto;right: 6px;transform: translateY(-3px)}.ui-cr__head:hover .ui-cr__kpi{opacity: 1;transform: translate(-50%, 0);transition-delay: 80ms}.ui-cr__head[data-last]:hover .ui-cr__kpi{transform: none}.ui-cr__kpitop{display: flex;align-items: flex-start;gap: 8px;min-width: 0;font-size: 13px;line-height: 20px;color: var(--ui-cr-ink);white-space: nowrap}.ui-cr__kpitop b{flex: 1;min-width: 0;font-weight: 600;white-space: normal;overflow-wrap: anywhere}.ui-cr__kpistate{flex: none;height: 18px;padding: 0 6px;border-radius: 5px;background: var(--ui-cr-edit-bg);font-size: 11px;font-weight: 600;line-height: 18px;color: var(--ui-cr-edit-ink)}.ui-cr__head[data-status="done"] .ui-cr__kpistate{background: var(--ui-cr-fill);color: var(--ui-cr-text)}.ui-cr__kpimodel{overflow: hidden;padding-left: 26px;font-size: 11px;line-height: 16px;color: var(--ui-cr-muted);white-space: nowrap;text-overflow: ellipsis}.ui-cr__kpis{display: flex;gap: 6px;margin-top: 8px}.ui-cr__kpis > span{display: flex;flex: 1 1 auto;align-items: baseline;justify-content: center;gap: 4px;height: 24px;padding: 0 6px;border-radius: 6px;background: var(--ui-cr-hover);box-shadow: inset 0 0 0 1px var(--ui-cr-line);font-size: 11px;line-height: 24px;color: var(--ui-cr-muted);white-space: nowrap}.ui-cr__kpis b{font-size: 12px;font-weight: 600;color: var(--ui-cr-ink);font-variant-numeric: tabular-nums}.ui-cr__kpis [data-kpi="conflicts"]:not([data-zero]) b{color: var(--ui-cr-hit)}.ui-cr__kpis [data-kpi="kept"]:not([data-zero]) b{color: var(--ui-cr-ok-tag)}.ui-cr__head[data-status="running"] > .ui-cr__avatar{animation: ui-cr-breathe 1400ms ease-in-out infinite alternate}.ui-cr__avatar{display: grid;flex: none;place-items: center;width: 18px;height: 18px;overflow: hidden;border-radius: 5px;background: var(--ui-cr-fill);font-size: 9px;font-weight: 600;letter-spacing: 0.3px;color: var(--ui-cr-text)}.ui-cr__avatar[data-logo]{background: var(--ui-cr-card);box-shadow: var(--ui-cr-shadow)}.ui-cr__avatar > svg{width: 11px;height: 11px}.ui-cr__avatar > img{width: 100%;height: 100%;object-fit: cover}.ui-cr__cell{position: relative;z-index: 1;display: grid;place-items: center;height: 100%}.ui-cr__bar-s{position: relative;width: 32px;height: 8px;overflow: hidden;border-radius: 4px;background: linear-gradient(var(--ui-cr-tint), var(--ui-cr-tint)) var(--ui-cr-card);box-shadow: inset 0 0 0 0.5px var(--ui-cr-edge);--ui-cr-tint: var(--ui-cr-edit-bg);--ui-cr-edge: var(--ui-cr-edit-edge);animation: ui-cr-grow 520ms var(--ui-cr-ease) both;transition: box-shadow 300ms ease, width 300ms var(--ui-cr-ease)}.ui-cr__bar-s[data-role="none"]{width: 4px;height: 4px;border-radius: 50%;--ui-cr-tint: var(--ui-cr-fill);--ui-cr-edge: transparent;animation: none}.ui-cr__bar-s[data-role="conflict"]{--ui-cr-tint: var(--ui-cr-hit-bg);--ui-cr-edge: var(--ui-cr-hit-edge)}.ui-cr__bar-s[data-role="kept"]{--ui-cr-tint: var(--ui-cr-ok-bg);--ui-cr-edge: var(--ui-cr-ok-edge)}.ui-cr__bar-s[data-role="lost"]{width: 12px;--ui-cr-tint: var(--ui-cr-fill);--ui-cr-edge: transparent}.ui-cr__bar-s[data-active]::after{content: "";position: absolute;inset: 0 auto 0 0;width: 14px;background: linear-gradient(90deg, transparent, var(--ui-cr-card), transparent);opacity: 0.8;animation: ui-cr-sheen 1300ms linear infinite}.ui-cr__cell:hover{z-index: 3}.ui-cr__tip{position: absolute;bottom: calc(50% + 10px);left: 50%;display: grid;gap: 3px;width: max-content;max-width: 240px;padding: 7px 10px 8px;border-radius: 8px;background: var(--ui-cr-card);box-shadow: var(--ui-cr-pop);text-align: left;opacity: 0;transform: translate(-50%, 3px);pointer-events: none;transition: opacity 140ms ease, transform 180ms var(--ui-cr-ease)}.ui-cr__cell[data-last] .ui-cr__tip{left: auto;right: 8px;transform: translateY(3px)}.ui-cr__cell:hover .ui-cr__tip{opacity: 1;transform: translate(-50%, 0);transition-delay: 80ms}.ui-cr__cell[data-last]:hover .ui-cr__tip{transform: none}.ui-cr__tiptop{display: flex;align-items: center;gap: 8px;font-size: 12px;line-height: 16px;color: var(--ui-cr-ink);white-space: nowrap}.ui-cr__tiptop b{min-width: 0;overflow: hidden;font-weight: 600;text-overflow: ellipsis}.ui-cr__tipstate{flex: none}.ui-cr__tipstate{height: 18px;margin-right: -3px;padding: 0 6px;border-radius: 5px;background: var(--ui-cr-edit-bg);font-size: 11px;font-weight: 600;line-height: 18px;color: var(--ui-cr-edit-ink)}.ui-cr__tip[data-role="conflict"] .ui-cr__tipstate{background: var(--ui-cr-hit-bg);color: var(--ui-cr-hit)}.ui-cr__tip[data-role="kept"] .ui-cr__tipstate{background: var(--ui-cr-ok-tag-bg);color: var(--ui-cr-ok-tag)}.ui-cr__tip[data-role="lost"] .ui-cr__tipstate{background: var(--ui-cr-fill);color: var(--ui-cr-text)}.ui-cr__tipmeta{font-size: 11px;line-height: 16px;color: var(--ui-cr-muted);overflow-wrap: anywhere}.ui-cr__legend{display: flex;align-items: center;gap: 12px;min-width: 0;overflow: hidden;font-size: 11px;line-height: 16px;color: var(--ui-cr-muted);white-space: nowrap}.ui-cr__legend > span{display: inline-flex;align-items: center;gap: 5px}.ui-cr__bar-s[data-key]{width: 12px;height: 6px;border-radius: 3px;animation: none}.ui-cr__legend[data-place="foot"]{display: none}.ui-cr__link{position: absolute;top: 50%;left: calc((var(--a) + 0.5) * 100% / var(--ui-cr-n));width: calc((var(--b) - var(--a)) * 100% / var(--ui-cr-n));height: 1.5px;margin-top: -0.75px;overflow: hidden;background: var(--ui-cr-hit-edge);animation: ui-cr-draw 560ms var(--ui-cr-ease) both;transition: opacity 300ms ease}.ui-cr__link::after{content: "";position: absolute;inset: 0 auto 0 0;width: 32px;background: linear-gradient(90deg, transparent, var(--ui-cr-hit), transparent);animation: ui-cr-run 1600ms ease-in-out infinite alternate}.ui-cr__row[data-state="settled"] .ui-cr__link{opacity: 0}.ui-cr__pick{height: 168px}.ui-cr__phead{display: flex;align-items: baseline;gap: 8px;min-width: 0;padding: 14px 16px 8px;animation: ui-cr-swap 320ms var(--ui-cr-ease)}.ui-cr__ptitle{flex: none;font-weight: 600;color: var(--ui-cr-ink)}.ui-cr__where{min-width: 0;overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-cr-muted);white-space: nowrap;text-overflow: ellipsis}.ui-cr__pick{display: flex;flex-direction: column}.ui-cr__ways{display: grid;flex: 1;grid-auto-columns: minmax(120px, 1fr);grid-auto-flow: column;gap: 8px;min-height: 0;padding: 2px 12px 12px;overflow: auto;scrollbar-width: thin;animation: ui-cr-swap 360ms var(--ui-cr-ease)}.ui-cr__way{display: flex;flex-direction: column;gap: 8px;min-width: 0;height: 104px;padding: 12px;border-radius: 12px;background: linear-gradient(var(--ui-cr-hover), var(--ui-cr-hover)) var(--ui-cr-card);box-shadow: var(--ui-cr-shadow);transition: box-shadow 200ms ease, opacity 300ms ease, background-color 160ms ease}.ui-cr__way:hover{background: linear-gradient(var(--ui-cr-select), var(--ui-cr-select)) var(--ui-cr-card)}.ui-cr__way[aria-checked="true"]{background: var(--ui-cr-card);cursor: default}.ui-cr__way[data-lost]{opacity: 0.5}.ui-cr__way[data-lost]:hover{opacity: 0.8}.ui-cr__wtop{display: flex;align-items: center;gap: 8px;min-width: 0}.ui-cr__wname{flex: 1;min-width: 0;overflow: hidden;font-weight: 600;color: var(--ui-cr-ink);white-space: nowrap;text-overflow: ellipsis}.ui-cr__summary{display: -webkit-box;overflow: hidden;font-size: 12px;line-height: 18px;color: var(--ui-cr-text);overflow-wrap: anywhere;-webkit-box-orient: vertical;-webkit-line-clamp: 3}.ui-cr__kept{display: inline-flex;flex: none;align-items: center;gap: 3px;height: 18px;margin-right: -3px;padding: 0 6px 0 4px;border-radius: 5px;background: var(--ui-cr-ok-tag-bg);font-size: 11px;font-weight: 600;line-height: 18px;color: var(--ui-cr-ok-tag);animation: ui-cr-rise 380ms var(--ui-cr-ease) both}.ui-cr__calm{display: grid;place-items: center;height: 100%;font-size: 12px;color: var(--ui-cr-muted);animation: ui-cr-swap 320ms var(--ui-cr-ease)}@keyframes ui-cr-grow{from{clip-path: inset(0 100% 0 0 round 4px)}to{clip-path: inset(0 0 0 0 round 4px)}}@keyframes ui-cr-draw{from{clip-path: inset(0 50% 0 50%)}to{clip-path: inset(0 0 0 0)}}@keyframes ui-cr-run{from{transform: translateX(-32px)}to{transform: translateX(calc(var(--ui-cr-col) * 2))}}@keyframes ui-cr-sheen{from{transform: translateX(-14px)}to{transform: translateX(40px)}}@keyframes ui-cr-breathe{from{opacity: 0.5}to{opacity: 1}}@keyframes ui-cr-swap{from{opacity: 0;transform: translateY(3px)}}@keyframes ui-cr-rise{from{opacity: 0;transform: translateY(6px)}}@container ui-cr (max-width: 440px){.ui-cr__card{--ui-cr-col: 44px;--ui-cr-file: 96px}.ui-cr__head{padding: 0 4px}.ui-cr__hname, .ui-cr__dir, .ui-cr__legend[data-place="head"]{display: none}.ui-cr__legend[data-place="foot"]{display: flex;height: 32px;padding: 0 16px;border-top: 1px solid var(--ui-cr-line)}.ui-cr__grid > .ui-cr__row:nth-last-child(2){border-radius: 0}.ui-cr__bar-s{width: 22px}.ui-cr__pick{height: 242px}.ui-cr__ways{grid-template-columns: minmax(0, 1fr);grid-auto-columns: auto;grid-auto-flow: row;gap: 6px}.ui-cr__way{flex: none}.ui-cr__way{gap: 2px;height: 56px;padding: 10px 12px}.ui-cr__summary{margin-left: 26px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;-webkit-line-clamp: 1;line-height: 16px;display: block}}@media (prefers-reduced-motion: reduce){.ui-cr *, .ui-cr *::before, .ui-cr *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-cr{--ui-cr-tray: #1a1a1c;--ui-cr-card: #232326;--ui-cr-strong: #f5f5f5;--ui-cr-ink: #f0f0f0;--ui-cr-text: #a1a1a1;--ui-cr-muted: #8a8a8a;--ui-cr-faint: #5c5c5c;--ui-cr-line: #2e2e31;--ui-cr-fill: rgba(255, 255, 255, 0.07);--ui-cr-hover: #28282b;--ui-cr-select: #2c2c30;--ui-cr-zebra: #252528;--ui-cr-pressed: #2f2f33;--ui-cr-edit-bg: #1d2b4d;--ui-cr-edit-edge: #3c5fb3;--ui-cr-edit-ink: #8aaeff;--ui-cr-hit-bg: #432614;--ui-cr-hit-edge: #b06a35;--ui-cr-hit: #ffa057;--ui-cr-hit-row: #2d241e;--ui-cr-ok-bg: #15321f;--ui-cr-ok-edge: #2f7a4b;--ui-cr-ok: #55d68c;--ui-cr-ok-tag: #6fe3a0;--ui-cr-ok-tag-bg: #183524;--ui-cr-accent: #6d93ff;--ui-cr-focus: rgba(255, 255, 255, 0.3);--ui-cr-chip: #f5f5f5;--ui-cr-chip-ink: #171717;--ui-cr-shadow: 0 0 0 1px #2e2e31, 0 1px 2px rgba(0, 0, 0, 0.4);--ui-cr-pop: 0 0 0 1px #2e2e31, 0 10px 28px -6px rgba(0, 0, 0, 0.6)}:where(.dark, [data-theme="dark"]) .ui-cr__bar-s[data-active]::after{background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)}`,
  b = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 1200 1200`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, {
        fill: `#D97757`,
        d: `M 233.959793 800.214905 L 468.644287 668.536987 L 472.590637 657.100647 L 468.644287 650.738403 L 457.208069 650.738403 L 417.986633 648.322144 L 283.892639 644.69812 L 167.597321 639.865845 L 54.926208 633.825623 L 26.577238 627.785339 L 3.3e-05 592.751709 L 2.73832 575.27533 L 26.577238 559.248352 L 60.724873 562.228149 L 136.187973 567.382629 L 249.422867 575.194763 L 331.570496 580.026978 L 453.261841 592.671082 L 472.590637 592.671082 L 475.328857 584.859009 L 468.724915 580.026978 L 463.570557 575.194763 L 346.389313 495.785217 L 219.543671 411.865906 L 153.100723 363.543762 L 117.181267 339.060425 L 99.060455 316.107361 L 91.248367 266.01355 L 123.865784 230.093994 L 167.677887 233.073853 L 178.872513 236.053772 L 223.248367 270.201477 L 318.040283 343.570496 L 441.825592 434.738342 L 459.946411 449.798706 L 467.194672 444.64447 L 468.080597 441.020203 L 459.946411 427.409485 L 392.617493 305.718323 L 320.778564 181.932983 L 288.80542 130.630859 L 280.348999 99.865845 C 277.369171 87.221436 275.194641 76.590698 275.194641 63.624268 L 312.322174 13.20813 L 332.8591 6.604126 L 382.389313 13.20813 L 403.248352 31.328979 L 434.013519 101.71814 L 483.865753 212.537048 L 561.181274 363.221497 L 583.812134 407.919434 L 595.892639 449.315491 L 600.40271 461.959839 L 608.214783 461.959839 L 608.214783 454.711609 L 614.577271 369.825623 L 626.335632 265.61084 L 637.771851 131.516846 L 641.718201 93.745117 L 660.402832 48.483276 L 697.530334 24.000122 L 726.52356 37.852417 L 750.362549 72 L 747.060486 94.067139 L 732.886047 186.201416 L 705.100708 330.52356 L 686.979919 427.167847 L 697.530334 427.167847 L 709.61084 415.087341 L 758.496704 350.174561 L 840.644348 247.490051 L 876.885925 206.738342 L 919.167847 161.71814 L 946.308838 140.29541 L 997.61084 140.29541 L 1035.38269 196.429626 L 1018.469849 254.416199 L 965.637634 321.422852 L 921.825562 378.201538 L 859.006714 462.765259 L 819.785278 530.41626 L 823.409424 535.812073 L 832.75177 534.92627 L 974.657776 504.724915 L 1051.328979 490.872559 L 1142.818848 475.167786 L 1184.214844 494.496582 L 1188.724854 514.147644 L 1172.456421 554.335693 L 1074.604126 578.496765 L 959.838989 601.449829 L 788.939636 641.879272 L 786.845764 643.409485 L 789.261841 646.389343 L 866.255127 653.637634 L 899.194702 655.409424 L 979.812134 655.409424 L 1129.932861 666.604187 L 1169.154419 692.537109 L 1192.671265 724.268677 L 1188.724854 748.429688 L 1128.322144 779.194641 L 1046.818848 759.865845 L 856.590759 714.604126 L 791.355774 698.335754 L 782.335693 698.335754 L 782.335693 703.731567 L 836.69812 756.885986 L 936.322205 846.845581 L 1061.073975 962.81897 L 1067.436279 991.490112 L 1051.409424 1014.120911 L 1034.496704 1011.704712 L 924.885986 929.234924 L 882.604126 892.107544 L 786.845764 811.48999 L 780.483276 811.48999 L 780.483276 819.946289 L 802.550415 852.241699 L 919.087341 1027.409424 L 925.127625 1081.127686 L 916.671204 1098.604126 L 886.469849 1109.154419 L 853.288696 1103.114136 L 785.073914 1007.355835 L 714.684631 899.516785 L 657.906067 802.872498 L 650.979858 806.81897 L 617.476624 1167.704834 L 601.771851 1186.147705 L 565.530212 1200 L 535.328857 1177.046997 L 519.302124 1139.919556 L 535.328857 1066.550537 L 554.657776 970.792053 L 570.362488 894.68457 L 584.536926 800.134277 L 592.993347 768.724976 L 592.429626 766.630859 L 585.503479 767.516968 L 514.22821 865.369263 L 405.825531 1011.865906 L 320.053711 1103.677979 L 299.516815 1111.812256 L 263.919525 1093.369263 L 267.221497 1060.429688 L 287.114136 1031.114136 L 405.825531 880.107361 L 477.422913 786.52356 L 523.651062 732.483276 L 523.328918 724.671265 L 520.590698 724.671265 L 205.288605 929.395935 L 149.154434 936.644409 L 124.993355 914.01355 L 127.973183 876.885986 L 139.409409 864.80542 L 234.201385 799.570435 L 233.879227 799.8927 Z`,
      }),
    }),
  x = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `currentColor`,
      "aria-hidden": `true`,
      style: { color: `var(--ui-cr-strong, #000)` },
      children: (0, r.jsx)(`path`, {
        d: `M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z`,
      }),
    }),
  S = () =>
    (0, r.jsxs)(`svg`, {
      viewBox: `0 0 33.4 32`,
      fill: `currentColor`,
      "aria-hidden": `true`,
      style: { color: `var(--ui-cr-strong, #000)` },
      children: [
        (0, r.jsx)(`path`, {
          d: `M12.8734 20.5407L23.9549 12.3506C24.4982 11.9491 25.2747 12.1057 25.5336 12.7294C26.896 16.0185 26.2873 19.9712 23.5766 22.6851C20.866 25.3989 17.0944 25.9941 13.6471 24.6386L9.88123 26.3843C15.2826 30.0806 21.8416 29.1665 25.9403 25.0601C29.1914 21.8051 30.1983 17.3683 29.2568 13.3673L29.2653 13.3758C27.9 7.49809 29.601 5.14871 33.0853 0.344576C33.1677 0.230667 33.2502 0.116757 33.3327 0L28.7476 4.59055V4.57631L12.8706 20.5436`,
        }),
        (0, r.jsx)(`path`, {
          d: `M10.5867 22.5312C6.70979 18.8234 7.37821 13.0852 10.6862 9.77618C13.1323 7.3271 17.14 6.32755 20.6385 7.79698L24.3959 6.05986C23.719 5.57005 22.8514 5.04322 21.8559 4.67301C17.3562 2.81914 11.969 3.7418 8.31115 7.40114C4.79271 10.9238 3.68626 16.3402 5.58628 20.9621C7.0056 24.4164 4.67893 26.8597 2.3352 29.3259C1.50465 30.2001 0.67126 31.0744 0 31.9999L10.5838 22.534`,
        }),
      ],
    }),
  C = 26,
  w = [
    { path: `src/lib/stripe.ts`, agentId: `stripe`, lines: [1, 120], from: 0.6, to: 5 },
    { path: `src/checkout/receipt.tsx`, agentId: `fix`, lines: [12, 30], from: 1, to: 3.5 },
    { path: `src/lib/retry.ts`, agentId: `retry`, lines: [1, 48], from: 1.5, to: 6 },
    { path: `package.json`, agentId: `stripe`, lines: [18, 18], from: 2, to: 2.8 },
    {
      path: `src/checkout/payment.ts`,
      agentId: `fix`,
      lines: [40, 68],
      from: 3,
      to: 7,
      summary: `Waits for the charge to settle before the receipt renders`,
    },
    {
      path: `src/checkout/payment.ts`,
      agentId: `stripe`,
      lines: [52, 80],
      from: 5.5,
      to: 11,
      summary: `Moves to PaymentIntents.confirm with an idempotency key`,
    },
    {
      path: `tests/checkout.spec.ts`,
      agentId: `fix`,
      lines: [20, 44],
      from: 6.5,
      to: 10,
      summary: `Waits for the payment before it looks for the receipt`,
    },
    {
      path: `src/checkout/payment.ts`,
      agentId: `retry`,
      lines: [44, 58],
      from: 7.5,
      to: 12,
      summary: `Wraps the charge in three retries with backoff`,
    },
    {
      path: `tests/checkout.spec.ts`,
      agentId: `retry`,
      lines: [30, 52],
      from: 9,
      to: 13,
      summary: `Adds a case where the first two charges fail`,
    },
    { path: `src/checkout/receipt.tsx`, agentId: `retry`, lines: [90, 104], from: 12, to: 13.5 },
  ],
  T = [
    `src/checkout/payment.ts`,
    `src/checkout/receipt.tsx`,
    `tests/checkout.spec.ts`,
    `src/lib/stripe.ts`,
    `src/lib/retry.ts`,
    `package.json`,
  ],
  E = { fix: 10.5, stripe: 11.5, retry: 14 },
  D = [
    [16.5, `src/checkout/payment.ts`, `stripe`],
    [19.5, `tests/checkout.spec.ts`, `retry`],
  ],
  O = [
    { id: `fix`, name: `Checkout`, model: `Opus 5.5 · fix/flaky-checkout`, Logo: b },
    { id: `stripe`, name: `Stripe v2`, model: `GPT-5 · chore/stripe-v2`, Logo: x },
    { id: `retry`, name: `Retries`, model: `Grok 4 · feat/payment-retry`, Logo: S },
  ];
function k() {
  let [e, t] = (0, n.useState)(() => Date.now()),
    [i, a] = (0, n.useState)(e),
    [o, s] = (0, n.useState)(null);
  (0, n.useEffect)(() => {
    let n = window.setInterval(() => {
      let n = Date.now();
      ((n - e) / 1e3 > C && (t(n), s(null)), a(n));
    }, 200);
    return () => window.clearInterval(n);
  }, [e]);
  let c = Math.max(0, (i - e) / 1e3),
    l = O.map(({ Logo: e, ...t }) => ({
      ...t,
      avatar: (0, r.jsx)(e, {}),
      status: c >= E[t.id] ? `done` : `running`,
    })),
    u = T.map((e) => ({
      path: e,
      edits: w
        .filter((t) => t.path === e && c >= t.from)
        .map(({ path: e, from: t, to: n, ...r }) => ({ ...r, active: c < n })),
    })),
    d = Object.fromEntries(D.filter(([e]) => c >= e).map(([, e, t]) => [e, t]));
  return (0, r.jsx)(`div`, {
    className: `crc-demo`,
    children: (0, r.jsx)(v, {
      title: `Parallel work`,
      agents: l,
      files: u,
      resolved: o ?? d,
      onResolve: (e, t) => s((n) => ({ ...(n ?? d), [e]: t })),
    }),
  });
}
