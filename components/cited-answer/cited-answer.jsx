/*
 * affectUI · cited-answer (Pro)
 * Implementation recovered from public bundle asset: demo-Dvsf4FXI.js
 * Styles inlined in the module -> cited-answer.css (1 block(s))
 * Demo usage: cited-answer.demo.jsx
 * Minified identifiers kept; formatting by prettier.
 */

import { t as e } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
/* empty css             */ var n = e(),
  r = t(),
  i = [`blue`, `violet`, `green`, `amber`, `gray`],
  a = (e) => i[[...e].reduce((e, t) => (e * 31 + t.charCodeAt(0)) % 997, 7) % i.length],
  o = (e) => {
    if (!e) return ``;
    try {
      return new URL(e).hostname.replace(/^www\./, ``);
    } catch {
      return e;
    }
  },
  s = new Intl.NumberFormat(`en`),
  c = (...e) => {
    for (let t of e) {
      let e = t.match(/[\p{L}\p{N}]/u);
      if (e) return e[0].toUpperCase();
    }
    return ``;
  },
  l = (e) => e.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`),
  u = new Set([
    `about`,
    `after`,
    `again`,
    `their`,
    `there`,
    `these`,
    `those`,
    `which`,
    `while`,
    `would`,
    `could`,
    `should`,
    `every`,
    `other`,
    `being`,
    `still`,
    `where`,
    `until`,
    `since`,
    `under`,
    `first`,
    `people`,
    `thing`,
    `things`,
  ]);
function d(e, t, n) {
  let i = null;
  if (t?.length) {
    let e = t.filter((e) => e.trim()).map(l);
    e.length && (i = RegExp(`(${e.join(`|`)})`, `gi`));
  } else {
    let e = [
      ...new Set(
        (n.toLowerCase().match(/[a-z0-9%]+/g) ?? []).filter(
          (e) => (e.length >= 5 || /\d/.test(e)) && !u.has(e),
        ),
      ),
    ];
    e.length && (i = RegExp(`\\b(${e.map(l).join(`|`)})\\b`, `gi`));
  }
  return i ? e.split(i).map((e, t) => (t % 2 ? (0, r.jsx)(`mark`, { children: e }, t) : e)) : e;
}
function f({ id: e, tone: t, children: i }) {
  let a = (0, n.useRef)({ id: e, tone: t, node: i }),
    [o, s] = (0, n.useState)(e),
    [c, l] = (0, n.useState)(null);
  return (
    o !== e && (s(e), l(a.current)),
    (a.current = { id: e, tone: t, node: i }),
    (0, n.useEffect)(() => {
      if (!c) return;
      let e = window.setTimeout(() => l(null), 260);
      return () => window.clearTimeout(e);
    }, [c]),
    (0, r.jsxs)(`span`, {
      className: `ui-ca__swap`,
      children: [
        c &&
          (0, r.jsx)(
            `span`,
            {
              className: `ui-ca__swap-item`,
              "data-out": ``,
              "data-tone": c.tone,
              "aria-hidden": `true`,
              children: c.node,
            },
            `out-${c.id}`,
          ),
        (0, r.jsx)(`span`, { className: `ui-ca__swap-item`, "data-tone": t, children: i }, e),
      ],
    })
  );
}
var p = { stroke: `currentColor`, strokeWidth: 1.4, strokeLinecap: `round`, strokeLinejoin: `round` },
  m = () =>
    (0, r.jsx)(`svg`, {
      width: `10`,
      height: `10`,
      viewBox: `0 0 10 10`,
      fill: `none`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, { d: `m2.5 2.5 5 5m0-5-5 5`, ...p }),
    }),
  h = () =>
    (0, r.jsx)(`svg`, {
      width: `12`,
      height: `12`,
      viewBox: `0 0 12 12`,
      fill: `none`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, { d: `M4.5 3h4.5v4.5M8.8 3.2 3 9`, ...p }),
    }),
  g = () =>
    (0, r.jsxs)(`svg`, {
      width: `12`,
      height: `12`,
      viewBox: `0 0 12 12`,
      fill: `none`,
      "aria-hidden": `true`,
      children: [
        (0, r.jsx)(`rect`, { x: `4.2`, y: `4.2`, width: `5.8`, height: `5.8`, rx: `1.4`, ...p }),
        (0, r.jsx)(`path`, {
          d: `M7.8 2.6A1.2 1.2 0 0 0 6.6 2H3.2A1.2 1.2 0 0 0 2 3.2v3.4a1.2 1.2 0 0 0 .6 1`,
          ...p,
        }),
      ],
    }),
  _ = () =>
    (0, r.jsx)(`svg`, {
      width: `12`,
      height: `12`,
      viewBox: `0 0 12 12`,
      fill: `none`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, { d: `m2.6 6.3 2.2 2.2 4.6-5`, ...p, strokeWidth: 1.6 }),
    }),
  ee = () =>
    (0, r.jsx)(`svg`, {
      width: `12`,
      height: `12`,
      viewBox: `0 0 12 12`,
      fill: `none`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, { d: `M2.5 6h7M6.5 3l3 3-3 3`, ...p }),
    });
function v({ source: e }) {
  let [t, i] = (0, n.useState)(!1);
  return (0, r.jsx)(`span`, {
    className: `ui-ca__glyph`,
    "data-tone": a(e.site),
    "aria-hidden": `true`,
    onErrorCapture: () => i(!0),
    children: e.icon && !t ? e.icon : c(e.site, e.title),
  });
}
var y = (0, n.memo)(function ({
  seg: e,
  index: t,
  marks: n,
  state: i,
  lit: a,
  openHere: o,
  previewId: c,
  api: l,
}) {
  let [, u, d, f] = e.text.match(/^(\s*)([\s\S]*?)(\s*)$/) ?? [``, ``, e.text, ``],
    p = n.length ? Math.max(0, d.search(/\S+$/)) : d.length,
    m = d.length - p > 24 ? d.length : p,
    h = (e) =>
      (0, r.jsx)(
        `button`,
        {
          type: `button`,
          className: `ui-ca__marker`,
          "data-source": e.id,
          "data-lit": a === e.id ? `` : void 0,
          "aria-expanded": o === e.id,
          "aria-controls": c,
          "aria-label": `Source ${e.n}: ${e.label}`,
          onPointerEnter: (n) => n.pointerType === `mouse` && l.current.setHot({ source: e.id, segment: t }),
          onPointerLeave: (e) => e.pointerType === `mouse` && l.current.setHot(null),
          onFocus: () => l.current.setHot({ source: e.id, segment: t }),
          onBlur: () => l.current.setHot(null),
          onClick: () => l.current.toggle(e.id),
          children: s.format(e.n),
        },
        e.id,
      );
  return (0, r.jsxs)(`span`, {
    children: [
      u,
      (0, r.jsxs)(`span`, {
        className: `ui-ca__seg`,
        "data-hl": i === `hl` ? `` : void 0,
        "data-dim": i === `dim` ? `` : void 0,
        children: [
          d.slice(0, m),
          (0, r.jsxs)(`span`, { className: `ui-ca__keep`, children: [d.slice(m), n.slice(0, 1).map(h)] }),
          n.slice(1).map(h),
        ],
      }),
      f,
    ],
  });
});
function b({
  segments: e,
  sources: t,
  pagesRead: i,
  defaultOpen: a,
  onOpenSource: c,
  onPreviewChange: l,
  action: u,
  className: p,
}) {
  let b = (0, n.useId)(),
    [S, C] = (0, n.useState)(null),
    [w, T] = (0, n.useState)(a && t.some((e) => e.id === a) ? a : null),
    E = (0, n.useRef)(w);
  w && (E.current = w);
  let [D, O] = (0, n.useState)(null),
    k = (0, n.useRef)(null),
    A = (0, n.useMemo)(() => new Map(t.map((e, t) => [e.id, t])), [t]),
    j = (e) => (A.get(e) ?? -1) + 1,
    M = (e) => (e != null && A.has(e) ? t[A.get(e)] : null),
    N = (e) => A.has(e),
    P = (0, n.useMemo)(
      () =>
        e.map((e) =>
          [...new Set(e.cite ?? [])]
            .filter((e) => A.has(e))
            .map((e) => {
              let n = t[A.get(e)];
              return { id: e, n: A.get(e) + 1, label: `${n.site} – ${n.title}` };
            }),
        ),
      [e, t, A],
    ),
    F = [];
  e.forEach((e, t) => {
    ((e.paragraph || F.length === 0) && F.push([]), F[F.length - 1].push({ seg: e, index: t }));
  });
  let I = e.filter((e) => e.text.trim()).length,
    L = e.filter((e) => e.text.trim() && e.cite?.some(N)).length,
    R = (t) => e.filter((e) => e.cite?.includes(t)),
    z = (e) => {
      let t = w === e ? null : e;
      (T(t), l?.(t));
    },
    B = (0, n.useRef)({ setHot: C, toggle: z });
  B.current = { setHot: C, toggle: z };
  let V = () => {
      if (!w) return;
      let e = w;
      (T(null),
        l?.(null),
        k.current?.querySelector(`[data-source="${CSS.escape(e)}"]`)?.focus({ preventScroll: !0 }));
    },
    H = (e) => {
      let t = `“${e.quote ?? e.title}” – ${e.title}, ${e.site}${e.url ? ` (${e.url})` : ``}`;
      (navigator.clipboard?.writeText(t).catch(() => {}), O({ id: Date.now(), source: e.id }));
    };
  (0, n.useEffect)(() => {
    if (!D) return;
    let e = window.setTimeout(() => O(null), 1800);
    return () => window.clearTimeout(e);
  }, [D]);
  let U = (e) => {
      e.key === `Escape` && w && (e.stopPropagation(), V());
    },
    W = (e, n) => {
      let r = t.length - 1,
        i =
          e.key === `ArrowRight`
            ? Math.min(r, n + 1)
            : e.key === `ArrowLeft`
              ? Math.max(0, n - 1)
              : e.key === `Home`
                ? 0
                : e.key === `End`
                  ? r
                  : null;
      i !== null && (e.preventDefault(), k.current?.querySelectorAll(`.ui-ca__chip`)[i]?.focus());
    },
    G = S?.source ?? null,
    K = (e, t) => {
      if (S)
        return S.segment === void 0
          ? e.cite?.includes(S.source)
            ? `hl`
            : `dim`
          : S.segment === t
            ? `hl`
            : void 0;
      if (w && e.cite?.includes(w)) return `hl`;
    },
    q = M(G),
    J = M(w),
    Y = (0, r.jsxs)(r.Fragment, {
      children: [
        (0, r.jsx)(`b`, { children: s.format(L) }),
        ` of `,
        s.format(I),
        ` `,
        I === 1 ? `sentence` : `sentences`,
        ` backed by a source`,
      ],
    }),
    X = `rest`,
    Z;
  if (D) ((Y = `Quote copied`), (X = `copied-${D.id}`), (Z = `ok`));
  else if (q && S?.segment !== void 0)
    ((Y = (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(`b`, { children: q.site }), ` · `, q.title] })),
      (X = `mark-${S.segment}-${q.id}`));
  else if (q) {
    let e = R(q.id).length;
    ((Y = e
      ? (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(`b`, { children: q.site }),
            ` · cited in `,
            s.format(e),
            ` `,
            e === 1 ? `sentence` : `sentences`,
          ],
        })
      : (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(`b`, { children: q.site }), ` · read, not cited`] })),
      (X = `src-${q.id}`));
  } else
    J &&
      ((Y = (0, r.jsxs)(r.Fragment, { children: [`Quote from `, (0, r.jsx)(`b`, { children: J.site })] })),
      (X = `open-${J.id}`));
  let Q = M(w ?? E.current),
    $ = `${b}-preview`,
    te = [
      `${s.format(t.length)} ${t.length === 1 ? `source` : `sources`}`,
      Number.isFinite(i) ? `${s.format(i)} ${i === 1 ? `page` : `pages`} read` : null,
    ]
      .filter(Boolean)
      .join(` · `);
  return (0, r.jsxs)(`div`, {
    className: [`ui-ca`, p].filter(Boolean).join(` `),
    role: `group`,
    "aria-label": `Answer with sources`,
    "data-hot": S ? (S.segment === void 0 ? `source` : `mark`) : void 0,
    onKeyDown: U,
    children: [
      (0, r.jsx)(`style`, { href: `ui-cited-answer`, precedence: `default`, children: x }),
      (0, r.jsxs)(`div`, {
        className: `ui-ca__card`,
        children: [
          (0, r.jsxs)(`div`, {
            className: `ui-ca__head`,
            children: [
              (0, r.jsx)(`span`, {
                className: `ui-ca__stack`,
                "aria-hidden": `true`,
                children: t.slice(0, 3).map((e) => (0, r.jsx)(v, { source: e }, e.id)),
              }),
              (0, r.jsx)(`span`, { className: `ui-ca__meta`, children: te }),
            ],
          }),
          (0, r.jsx)(`div`, {
            className: `ui-ca__text`,
            onPointerLeave: () => C(null),
            children: F.map((e, t) =>
              (0, r.jsx)(
                `p`,
                {
                  className: `ui-ca__p`,
                  dir: `auto`,
                  children: e.map(({ seg: e, index: t }) => {
                    let n = P[t],
                      i =
                        S && (S.segment === t || (S.segment === void 0 && n.some((e) => e.id === S.source)))
                          ? S.source
                          : void 0;
                    return (0, r.jsx)(
                      y,
                      {
                        seg: e,
                        index: t,
                        marks: n,
                        state: K(e, t),
                        lit: i,
                        openHere: w && n.some((e) => e.id === w) ? w : null,
                        previewId: $,
                        api: B,
                      },
                      t,
                    );
                  }),
                },
                t,
              ),
            ),
          }),
          (0, r.jsx)(`div`, {
            id: $,
            className: `ui-ca__fold`,
            "data-open": w ? `` : void 0,
            inert: !w,
            role: `region`,
            "aria-label": Q ? `Source ${j(Q.id)}: ${Q.site}` : `Source`,
            children: (0, r.jsx)(`div`, {
              className: `ui-ca__clip`,
              children:
                Q &&
                (0, r.jsxs)(
                  `div`,
                  {
                    className: `ui-ca__preview`,
                    children: [
                      (0, r.jsxs)(`div`, {
                        className: `ui-ca__pv-head`,
                        children: [
                          (0, r.jsx)(v, { source: Q }),
                          (0, r.jsxs)(`span`, {
                            className: `ui-ca__pv-meta`,
                            children: [
                              (0, r.jsx)(`span`, {
                                className: `ui-ca__pv-domain`,
                                title: Q.url || Q.site,
                                children: o(Q.url) || Q.site,
                              }),
                              Q.date &&
                                (0, r.jsxs)(`span`, {
                                  className: `ui-ca__pv-date`,
                                  children: [` · `, Q.date],
                                }),
                            ],
                          }),
                          (0, r.jsx)(`span`, { className: `ui-ca__pv-num`, children: s.format(j(Q.id)) }),
                          (0, r.jsx)(`button`, {
                            type: `button`,
                            className: `ui-ca__close`,
                            "aria-label": `Close source`,
                            onClick: V,
                            children: (0, r.jsx)(m, {}),
                          }),
                        ],
                      }),
                      (0, r.jsx)(`div`, {
                        className: `ui-ca__pv-title`,
                        dir: `auto`,
                        title: Q.title,
                        children: Q.title,
                      }),
                      Q.quote &&
                        (0, r.jsx)(`blockquote`, {
                          className: `ui-ca__quote`,
                          dir: `auto`,
                          children: d(
                            Q.quote,
                            Q.highlight,
                            R(Q.id)
                              .map((e) => e.text)
                              .join(` `),
                          ),
                        }),
                      (0, r.jsxs)(`div`, {
                        className: `ui-ca__pv-actions`,
                        children: [
                          Q.url
                            ? (0, r.jsxs)(`a`, {
                                className: `ui-ca__btn ui-ca__btn--main`,
                                href: Q.url,
                                target: `_blank`,
                                rel: `noreferrer noopener`,
                                onClick: (e) => {
                                  c && (e.preventDefault(), c(Q));
                                },
                                children: [`Open source`, (0, r.jsx)(h, {})],
                              })
                            : c &&
                              (0, r.jsxs)(`button`, {
                                type: `button`,
                                className: `ui-ca__btn ui-ca__btn--main`,
                                onClick: () => c(Q),
                                children: [`Open source`, (0, r.jsx)(h, {})],
                              }),
                          Q.quote &&
                            (0, r.jsxs)(`button`, {
                              type: `button`,
                              className: `ui-ca__btn`,
                              "data-done": D?.source === Q.id ? `` : void 0,
                              "aria-label": `Copy quote`,
                              onClick: () => H(Q),
                              children: [
                                (0, r.jsx)(
                                  `span`,
                                  {
                                    className: `ui-ca__btn-icon`,
                                    children: D?.source === Q.id ? (0, r.jsx)(_, {}) : (0, r.jsx)(g, {}),
                                  },
                                  D?.source === Q.id ? `done` : `idle`,
                                ),
                                (0, r.jsx)(`span`, {
                                  className: `ui-ca__btn-text`,
                                  children: D?.source === Q.id ? `Copied` : `Copy quote`,
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  },
                  Q.id,
                ),
            }),
          }),
        ],
      }),
      (0, r.jsx)(`div`, {
        className: `ui-ca__chips`,
        ref: k,
        role: `list`,
        "aria-label": `Sources`,
        onPointerLeave: () => C(null),
        children: t.map((e, t) => {
          let n = G === e.id;
          return (0, r.jsx)(
            `span`,
            {
              role: `listitem`,
              className: `ui-ca__chip-item`,
              children: (0, r.jsxs)(`button`, {
                type: `button`,
                className: `ui-ca__chip`,
                "data-source": e.id,
                "data-lit": n ? `` : void 0,
                "data-dim": G && !n ? `` : void 0,
                "aria-expanded": w === e.id,
                "aria-controls": $,
                "aria-label": `Source ${t + 1}: ${e.site} – ${e.title}`,
                onPointerEnter: (t) => t.pointerType === `mouse` && C({ source: e.id }),
                onFocus: () => C({ source: e.id }),
                onBlur: () => C(null),
                onKeyDown: (e) => W(e, t),
                onClick: () => z(e.id),
                children: [
                  (0, r.jsx)(v, { source: e }),
                  (0, r.jsx)(`span`, {
                    className: `ui-ca__chip-name`,
                    dir: `auto`,
                    title: e.site,
                    children: e.site,
                  }),
                  (0, r.jsx)(`span`, { className: `ui-ca__chip-num`, children: s.format(t + 1) }),
                ],
              }),
            },
            e.id,
          );
        }),
      }),
      (0, r.jsxs)(`div`, {
        className: `ui-ca__foot`,
        children: [
          (0, r.jsx)(`span`, {
            className: `ui-ca__caption`,
            "aria-live": `polite`,
            children: (0, r.jsx)(f, { id: X, tone: Z, children: Y }),
          }),
          u &&
            (0, r.jsxs)(`button`, {
              type: `button`,
              className: `ui-ca__action`,
              title: u.label,
              onClick: u.onClick,
              children: [
                (0, r.jsx)(`span`, { className: `ui-ca__action-label`, children: u.label }),
                (0, r.jsx)(ee, {}),
              ],
            }),
        ],
      }),
    ],
  });
}
var x = `.ui-ca{--ui-ca-tray: #f0f0f0;--ui-ca-card: #ffffff;--ui-ca-line: #ececec;--ui-ca-ink: #171717;--ui-ca-text: #404040;--ui-ca-muted: #8f8f8f;--ui-ca-faded: #b4b4b8;--ui-ca-well: #f4f4f5;--ui-ca-accent: #2f6bff;--ui-ca-hl: rgba(47, 107, 255, 0.1);--ui-ca-mark: rgba(47, 107, 255, 0.16);--ui-ca-ok: #18794e;--ui-ca-focus: rgba(23, 23, 23, 0.22);--ui-ca-ease: cubic-bezier(0.32, 0.72, 0.24, 1);box-sizing: border-box;width: 100%;max-width: 460px;min-width: 0;container-type: inline-size;padding: 4px;border-radius: 20px;background: var(--ui-ca-tray);font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 20px;color: var(--ui-ca-text);text-align: left;-webkit-font-smoothing: antialiased}.ui-ca *, .ui-ca *::before, .ui-ca *::after{box-sizing: border-box}:where(.ui-ca) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;text-align: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}.ui-ca :is(button, a):focus-visible{outline: 2px solid var(--ui-ca-focus);outline-offset: 2px}.ui-ca svg{display: block;flex: none}.ui-ca b{font-weight: 500;color: var(--ui-ca-ink)}.ui-ca [data-tone="blue"]{--ui-ca-g: #1f55d6;--ui-ca-g-bg: rgba(47, 107, 255, 0.12)}.ui-ca [data-tone="violet"]{--ui-ca-g: #6941c6;--ui-ca-g-bg: rgba(124, 92, 255, 0.13)}.ui-ca [data-tone="green"]{--ui-ca-g: #18794e;--ui-ca-g-bg: rgba(34, 160, 90, 0.13)}.ui-ca [data-tone="amber"]{--ui-ca-g: #96590a;--ui-ca-g-bg: rgba(240, 160, 32, 0.18)}.ui-ca [data-tone="gray"]{--ui-ca-g: #5f5f66;--ui-ca-g-bg: rgba(110, 110, 120, 0.12)}.ui-ca__glyph{display: grid;flex: none;place-items: center;width: 16px;height: 16px;overflow: hidden;border-radius: 5px;background: var(--ui-ca-g-bg);font-size: 9.5px;font-weight: 600;line-height: 1;color: var(--ui-ca-g)}.ui-ca__glyph > :is(img, svg){width: 100%;height: 100%;object-fit: cover}.ui-ca__card{padding: 12px 16px 14px;border-radius: 16px;background: var(--ui-ca-card);box-shadow: 0 0 0 1px var(--ui-ca-line), 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-ca__head{display: flex;align-items: center;gap: 8px;min-height: 22px}.ui-ca__stack{display: flex;flex: none}.ui-ca__stack .ui-ca__glyph{box-shadow: 0 0 0 1.5px var(--ui-ca-card)}.ui-ca__stack .ui-ca__glyph + .ui-ca__glyph{margin-left: -4px}.ui-ca__meta{min-width: 0;overflow: hidden;font-size: 12.5px;color: var(--ui-ca-muted);white-space: nowrap;text-overflow: ellipsis;font-variant-numeric: tabular-nums}.ui-ca__text{margin-top: 8px;color: var(--ui-ca-text)}.ui-ca__p{margin: 0;overflow-wrap: anywhere;white-space: pre-line;text-align: start;font-size: 13.5px;line-height: 23px}.ui-ca__p + .ui-ca__p{margin-top: 10px}.ui-ca__seg{margin: 0 -2px;padding: 2px 2px;border-radius: 5px;-webkit-box-decoration-break: clone;box-decoration-break: clone;transition: background-color 220ms ease, color 220ms ease}.ui-ca__seg[data-hl]{background: var(--ui-ca-hl);color: var(--ui-ca-ink)}.ui-ca__seg[data-dim]{color: var(--ui-ca-faded)}.ui-ca__keep{white-space: nowrap}.ui-ca[data-hot] .ui-ca__marker:not([data-lit]):not([aria-expanded="true"]){opacity: 0.5}.ui-ca__marker{position: relative;display: inline-grid;place-items: center;min-width: 16px;height: 16px;margin-left: 3px;padding: 0 4px;border-radius: 5px;background: var(--ui-ca-well);box-shadow: inset 0 0 0 1px var(--ui-ca-line);font-size: 10.5px;font-weight: 600;line-height: 16px;color: var(--ui-ca-text);vertical-align: 1px;font-variant-numeric: tabular-nums;transition: background-color 180ms ease, color 180ms ease, box-shadow 180ms ease, opacity 220ms ease}.ui-ca__marker + .ui-ca__marker{margin-left: 2px}.ui-ca__marker::after{content: "";position: absolute;inset: -4px -2px}.ui-ca__marker:hover, .ui-ca__marker[data-lit]{background: var(--ui-ca-accent);box-shadow: inset 0 0 0 1px var(--ui-ca-accent);color: #fff}.ui-ca__marker[aria-expanded="true"]{background: var(--ui-ca-ink);box-shadow: inset 0 0 0 1px var(--ui-ca-ink);color: var(--ui-ca-card)}.ui-ca__fold{display: grid;grid-template-rows: 0fr;opacity: 0;transition: grid-template-rows 420ms var(--ui-ca-ease), opacity 220ms ease}.ui-ca__fold[data-open]{grid-template-rows: 1fr;opacity: 1;transition: grid-template-rows 420ms var(--ui-ca-ease), opacity 320ms ease 80ms}.ui-ca__clip{min-height: 0;overflow: hidden}.ui-ca__preview{margin-top: 12px;padding: 10px 12px 12px;border-radius: 12px;background: var(--ui-ca-well);animation: ui-ca-swap-in 320ms ease both}.ui-ca__pv-head{display: flex;align-items: center;gap: 8px;height: 22px}.ui-ca__pv-meta{display: flex;flex: 1;min-width: 0;overflow: hidden;font-size: 12px;color: var(--ui-ca-muted);white-space: nowrap;text-overflow: ellipsis}.ui-ca__pv-date{flex: none;white-space: pre}.ui-ca__pv-domain{min-width: 0;overflow: hidden;text-overflow: ellipsis;color: var(--ui-ca-text)}.ui-ca__pv-num{display: grid;flex: none;place-items: center;min-width: 18px;height: 18px;padding: 0 5px;border-radius: 5px;background: var(--ui-ca-card);box-shadow: inset 0 0 0 1px var(--ui-ca-line);font-size: 10.5px;font-weight: 600;color: var(--ui-ca-text);font-variant-numeric: tabular-nums}.ui-ca__close{display: grid;flex: none;place-items: center;width: 22px;height: 22px;margin-right: -4px;border-radius: 7px;color: var(--ui-ca-muted);transition: background-color 160ms ease, color 160ms ease}.ui-ca__close:hover{background: var(--ui-ca-line);color: var(--ui-ca-ink)}.ui-ca__pv-title{display: -webkit-box;overflow-wrap: anywhere;text-align: start;margin-top: 6px;overflow: hidden;font-size: 13.5px;font-weight: 600;line-height: 20px;color: var(--ui-ca-ink);-webkit-line-clamp: 2;-webkit-box-orient: vertical}.ui-ca__quote{margin: 8px 0 0;max-height: 200px;overflow: auto;overscroll-behavior: contain;overflow-wrap: anywhere;white-space: pre-line;text-align: start;padding: 0 0 0 10px;border-left: 2px solid var(--ui-ca-line);font-size: 12.5px;line-height: 20px;color: var(--ui-ca-text)}.ui-ca__quote mark{margin: 0 -1px;padding: 1px 1px;border-radius: 3px;background: var(--ui-ca-mark);color: var(--ui-ca-ink);-webkit-box-decoration-break: clone;box-decoration-break: clone}.ui-ca__pv-actions{display: flex;flex-wrap: wrap;align-items: center;gap: 6px;margin-top: 12px}.ui-ca__btn{display: inline-flex;align-items: center;gap: 5px;height: 28px;padding: 0 9px;border-radius: 8px;font-size: 12.5px;font-weight: 500;color: var(--ui-ca-text);text-decoration: none;white-space: nowrap;transition: background-color 160ms ease, color 160ms ease}.ui-ca__btn:hover{background: var(--ui-ca-line);color: var(--ui-ca-ink)}.ui-ca__btn--main{padding: 0 8px 0 10px;background: var(--ui-ca-card);box-shadow: 0 0 0 1px var(--ui-ca-line), 0 1px 2px rgba(0, 0, 0, 0.04);color: var(--ui-ca-ink)}.ui-ca__btn--main:hover{background: var(--ui-ca-card)}.ui-ca__btn--main svg{transition: transform 220ms var(--ui-ca-ease)}.ui-ca__btn--main:hover svg{transform: translate(1px, -1px)}.ui-ca__btn[data-done]{color: var(--ui-ca-ok)}.ui-ca__btn-icon{display: grid;place-items: center;width: 12px;height: 12px;animation: ui-ca-swap-in 280ms ease both}.ui-ca__chips{display: flex;flex-wrap: wrap;gap: 4px;padding: 6px 4px 0}.ui-ca__chip-item{display: flex;min-width: 0;max-width: 100%}.ui-ca__chip{display: inline-flex;align-items: center;gap: 6px;min-width: 0;max-width: 100%;height: 28px;padding: 0 8px 0 6px;border-radius: 8px;font-size: 12.5px;color: var(--ui-ca-text);transition: background-color 160ms ease, box-shadow 160ms ease, opacity 220ms ease, color 160ms ease}.ui-ca__chip:hover, .ui-ca__chip[data-lit]{background: var(--ui-ca-card);box-shadow: 0 0 0 1px var(--ui-ca-line), 0 1px 2px rgba(0, 0, 0, 0.04);color: var(--ui-ca-ink)}.ui-ca__chip[aria-expanded="true"]{background: var(--ui-ca-card);box-shadow: 0 0 0 1px var(--ui-ca-line), 0 1px 2px rgba(0, 0, 0, 0.04), inset 0 0 0 1px color-mix(in srgb, var(--ui-ca-ink) 45%, transparent);color: var(--ui-ca-ink)}.ui-ca__chip[data-dim]{opacity: 0.45}.ui-ca__chip-name{min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-ca__chip-num{flex: none;font-size: 11.5px;color: var(--ui-ca-muted);font-variant-numeric: tabular-nums}.ui-ca__foot{display: flex;align-items: center;gap: 8px;min-height: 36px;padding: 2px 4px 0 10px}.ui-ca__caption{flex: 1;min-width: 0;overflow: hidden;font-size: 12.5px;color: var(--ui-ca-muted);white-space: nowrap;text-overflow: ellipsis;font-variant-numeric: tabular-nums}.ui-ca__swap{display: grid;min-width: 0}.ui-ca__swap-item{grid-area: 1 / 1;min-width: 0;overflow: hidden;text-overflow: ellipsis;animation: ui-ca-swap-in 320ms ease both}.ui-ca__swap-item[data-out]{animation: ui-ca-swap-out 220ms ease both}.ui-ca__swap-item[data-tone="ok"]{color: var(--ui-ca-ok)}.ui-ca__action{display: inline-flex;flex: 0 1 auto;min-width: 0;max-width: 60%;align-items: center;gap: 4px;height: 26px;padding: 0 6px 0 8px;border-radius: 10px;font-size: 12.5px;font-weight: 500;color: var(--ui-ca-text);white-space: nowrap;transition: background-color 160ms ease, color 160ms ease}.ui-ca__action-label{min-width: 0;overflow: hidden;text-overflow: ellipsis}.ui-ca__action:hover{background: var(--ui-ca-card);color: var(--ui-ca-ink)}.ui-ca__action svg{transition: transform 220ms var(--ui-ca-ease)}.ui-ca__action:hover svg{transform: translateX(2px)}@keyframes ui-ca-swap-in{from{opacity: 0;filter: blur(2px)}}@keyframes ui-ca-swap-out{from{opacity: 1}to{opacity: 0;filter: blur(2px)}}@container (max-width: 360px){.ui-ca__card{padding: 12px 14px 12px}.ui-ca__pv-num{display: none}}@container (max-width: 280px){.ui-ca__btn-text{display: none}}@media (pointer: coarse){.ui-ca__marker::after{inset: -8px -5px}.ui-ca__chip{height: 34px}.ui-ca__btn{height: 34px}.ui-ca__close{width: 30px;height: 30px;margin-right: -7px}.ui-ca__action{height: 30px}}@media (prefers-reduced-motion: reduce){.ui-ca *, .ui-ca *::before, .ui-ca *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-ca{--ui-ca-tray: #111113;--ui-ca-card: #19191b;--ui-ca-line: #2a2a2e;--ui-ca-ink: #ededed;--ui-ca-text: #c8c8cc;--ui-ca-muted: #8b8b92;--ui-ca-faded: #5c5c63;--ui-ca-well: #222225;--ui-ca-accent: #4f82ff;--ui-ca-hl: rgba(79, 130, 255, 0.16);--ui-ca-mark: rgba(79, 130, 255, 0.28);--ui-ca-ok: #6ee7a8;--ui-ca-focus: rgba(255, 255, 255, 0.3)}:where(.dark, [data-theme="dark"]) .ui-ca [data-tone="blue"]{--ui-ca-g: #9bb8ff;--ui-ca-g-bg: rgba(79, 130, 255, 0.2)}:where(.dark, [data-theme="dark"]) .ui-ca [data-tone="violet"]{--ui-ca-g: #c3b1ff;--ui-ca-g-bg: rgba(124, 92, 255, 0.22)}:where(.dark, [data-theme="dark"]) .ui-ca [data-tone="green"]{--ui-ca-g: #6ee7a8;--ui-ca-g-bg: rgba(34, 160, 90, 0.2)}:where(.dark, [data-theme="dark"]) .ui-ca [data-tone="amber"]{--ui-ca-g: #f5c264;--ui-ca-g-bg: rgba(240, 160, 32, 0.2)}:where(.dark, [data-theme="dark"]) .ui-ca [data-tone="gray"]{--ui-ca-g: #b4b4bb;--ui-ca-g-bg: rgba(110, 110, 120, 0.22)}`,
  S = [
    {
      id: `caching`,
      site: `Tokenwise`,
      title: `Prompt caching, explained: what gets stored and for how long`,
      url: `https://tokenwise.dev/blog/prompt-caching`,
      date: `Sep 18, 2026`,
      quote: `A cached prefix is read instead of recomputed. On prompts over 10,000 tokens this cut time to first token by up to 80% in our tests, and cached input is billed at a fraction of the normal rate.`,
      highlight: [`read instead of recomputed`, `cut time to first token by up to 80%`],
    },
    {
      id: `prompts`,
      site: `Latency Notes`,
      title: `Designing cache-friendly prompts`,
      url: `https://latencynotes.io/cache-friendly-prompts`,
      date: `Aug 2, 2026`,
      quote: `Keep the stable part – system prompt, tool definitions, long documents – at the very start, and put anything that changes per request after it. A single changed character early on invalidates everything behind it.`,
      highlight: [
        `at the very start`,
        `anything that changes per request after it`,
        `invalidates everything behind it`,
      ],
    },
    {
      id: `semantic`,
      site: `Inference Weekly`,
      title: `Semantic caching for LLM apps in production`,
      url: `https://inferenceweekly.com/semantic-caching`,
      date: `Jul 24, 2026`,
      quote: `For FAQ-style traffic, the semantic cache answered 31% of requests without calling the model at all, at a median of 40 ms. We only serve a stored answer above a similarity of 0.92.`,
      highlight: [`31% of requests`, `median of 40 ms`],
    },
  ],
  C = [
    {
      text: `The biggest win is prompt caching: the provider reuses the processed start of your prompt, so a long system prompt isn't recomputed on every call.`,
      cite: [`caching`],
    },
    { text: ` On prompts over 10K tokens that can cut time to first token by up to 80%.`, cite: [`caching`] },
    {
      text: ` It only works while that start stays identical, so put the system prompt, tools and long documents first and anything that changes per request last.`,
      cite: [`prompts`, `caching`],
    },
    {
      text: `For repeated questions, add a semantic cache in front of the model: close matches get a stored answer in about 40 ms,`,
      cite: [`semantic`],
      paragraph: !0,
    },
    {
      text: ` which covered nearly a third of FAQ-style traffic in one production setup.`,
      cite: [`semantic`],
    },
    { text: ` Stream the rest, so people see the first words while the answer is still being written.` },
  ];
function w() {
  let e = (0, n.useRef)(null),
    t = (0, n.useRef)(!1),
    i = (0, n.useRef)(!1);
  (0, n.useEffect)(() => {
    let n = (t) => e.current?.querySelector(t),
      r = (t, n) => {
        t &&
          ((i.current = !0),
          t.dispatchEvent(
            new PointerEvent(n, {
              bubbles: !0,
              pointerType: `mouse`,
              relatedTarget: n === `pointerout` ? e.current : null,
            }),
          ),
          (i.current = !1));
      },
      a = (e) => n(`.ui-ca__marker[data-source="${e}"]`),
      o = [
        [700, () => r(a(`caching`), `pointerover`)],
        [2600, () => r(a(`caching`), `pointerout`)],
        [500, () => a(`prompts`)?.click()],
        [3800, () => n(`.ui-ca__close`)?.click()],
        [1800, () => {}],
      ],
      s = 0,
      c = 0,
      l = () => {
        t.current ||
          (c = window.setTimeout(() => {
            t.current || (o[s][1](), (s = (s + 1) % o.length), l());
          }, o[s][0]));
      };
    return (l(), () => window.clearTimeout(c));
  }, []);
  let a = () => {
    i.current || (t.current = !0);
  };
  return (0, r.jsx)(`div`, {
    ref: e,
    className: `ca-demo`,
    onPointerEnter: a,
    onPointerDownCapture: a,
    onKeyDownCapture: a,
    onFocusCapture: a,
    children: (0, r.jsx)(b, {
      segments: C,
      sources: S,
      pagesRead: 12,
      onOpenSource: () => {},
      action: { label: `Follow up`, onClick: () => {} },
    }),
  });
}
