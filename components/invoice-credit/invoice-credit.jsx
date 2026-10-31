import { t as e } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
var n = e(),
  r = t(),
  i = [
    { id: `plan`, name: `Growth plan`, qty: 1, rate: 1250, tax: 0.2 },
    { id: `seats`, name: `Extra seats`, qty: 12, rate: 40, tax: 0.2 },
    { id: `api`, name: `API calls (per 1k)`, qty: 18420, rate: 0.42, tax: 0.2, group: `Metered usage` },
  ];
function a({
  seller: e = {
    name: `Lumen Labs, Inc.`,
    lines: [`48 Harbour Street`, `Bristol`, `BS1 4RN`, `United Kingdom`],
  },
  buyer: t = {
    name: `Northwind Logistics GmbH`,
    lines: [`Speicherstraße 12`, `Hamburg`, `20457`, `Germany`],
  },
  invoiceNo: a = `INV-2041`,
  creditNo: f = `CN-0117`,
  invoiceDate: S = `1 Oct 2026`,
  dueDate: C = `31 Oct 2026`,
  period: w = `1 Sep – 30 Sep 2026`,
  lines: T = i,
  currency: E = `$`,
  onIssue: D,
  className: O,
}) {
  let [k, A] = (0, n.useState)(`invoice`),
    [j, M] = (0, n.useState)({}),
    [N, P] = (0, n.useState)({}),
    [F, I] = (0, n.useState)(!1),
    L = (e) => j[e.id] ?? !0,
    R = (e) => N[e.id] ?? c(e),
    z = p(E),
    B = (e, t = !1) =>
      Number.isFinite(e) ? `${(t ? e > 0 : e < 0) ? `-` : ``}${z.format(Math.abs(e))}` : `—`,
    V = T.reduce((e, t) => e + c(t), 0),
    H = T.reduce((e, t) => e + c(t) * s(t.tax), 0),
    U = V + H,
    W = T.reduce((e, t) => e + (L(t) ? R(t) : 0), 0),
    G = T.reduce((e, t) => e + (L(t) ? R(t) * s(t.tax) : 0), 0),
    K = W + G,
    q = () => {
      (I(!0), D?.(Object.fromEntries(T.filter(L).map((e) => [e.id, R(e)])), o(K)));
    },
    J = [...new Set(T.map((e) => e.group ?? ``))],
    Y = T.some((e) => B(e.rate).length + B(o(e.qty * e.rate)).length > 20);
  return (0, r.jsxs)(`section`, {
    className: [`ui-iv`, O].filter(Boolean).join(` `),
    "data-view": k,
    children: [
      (0, r.jsx)(`style`, { href: `ui-invoice-credit`, precedence: `default`, children: x }),
      (0, r.jsxs)(`div`, {
        className: `ui-iv__bar`,
        children: [
          (0, r.jsxs)(`div`, {
            className: `ui-iv__seg`,
            role: `tablist`,
            "aria-label": `Document`,
            children: [
              (0, r.jsx)(`span`, { className: `ui-iv__seg-thumb`, "aria-hidden": `true` }),
              (0, r.jsx)(`button`, {
                type: `button`,
                role: `tab`,
                "aria-selected": k === `invoice`,
                onClick: () => A(`invoice`),
                children: `Invoice`,
              }),
              (0, r.jsx)(`button`, {
                type: `button`,
                role: `tab`,
                "aria-selected": k === `credit`,
                onClick: () => A(`credit`),
                children: `Credit note`,
              }),
            ],
          }),
          (0, r.jsxs)(`div`, {
            className: `ui-iv__actions`,
            children: [
              (0, r.jsxs)(`button`, {
                type: `button`,
                className: `ui-iv__btn`,
                children: [(0, r.jsx)(m, { d: `M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19.5h14` }), `PDF`],
              }),
              k === `invoice` &&
                (0, r.jsxs)(`button`, {
                  type: `button`,
                  className: `ui-iv__btn`,
                  onClick: () => A(`credit`),
                  children: [
                    (0, r.jsx)(m, { d: `M9 14 4.5 9.5 9 5M4.5 9.5h10a5 5 0 0 1 0 10H12` }),
                    `Credit invoice`,
                  ],
                }),
            ],
          }),
        ],
      }),
      (0, r.jsxs)(`div`, {
        className: `ui-iv__stack`,
        children: [
          (0, r.jsxs)(`article`, {
            className: `ui-iv__sheet`,
            "data-doc": `invoice`,
            "aria-hidden": k !== `invoice`,
            inert: k !== `invoice` || void 0,
            children: [
              (0, r.jsxs)(`header`, {
                className: `ui-iv__head`,
                children: [
                  (0, r.jsxs)(`div`, {
                    children: [
                      (0, r.jsx)(`p`, { className: `ui-iv__big`, children: B(U) }),
                      (0, r.jsxs)(`p`, {
                        className: `ui-iv__due`,
                        children: [
                          C && (0, r.jsxs)(`span`, { children: [`Due `, C] }),
                          (0, r.jsx)(`a`, {
                            href: `#pay`,
                            onClick: (e) => e.preventDefault(),
                            children: `Pay online`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsx)(h, { name: e.name }),
                ],
              }),
              (l(e) || l(t)) &&
                (0, r.jsxs)(`div`, {
                  className: `ui-iv__parties`,
                  children: [
                    l(e) && (0, r.jsx)(g, { title: `From`, party: e }),
                    l(t) && (0, r.jsx)(g, { title: `To`, party: t }),
                  ],
                }),
              (0, r.jsx)(_, {
                rows: [
                  [`Invoice no`, (0, r.jsx)(`span`, { className: `ui-iv__ref`, children: a })],
                  [`Invoice date`, S],
                  [`Due date`, C],
                  [`Billing period`, w],
                ],
              }),
              (0, r.jsxs)(`table`, {
                className: `ui-iv__table`,
                "data-wide": Y ? `` : void 0,
                children: [
                  (0, r.jsx)(`thead`, {
                    children: (0, r.jsxs)(`tr`, {
                      children: [
                        (0, r.jsx)(`th`, { children: `Name` }),
                        (0, r.jsx)(`th`, { children: `Qty` }),
                        (0, r.jsx)(`th`, { className: `ui-iv__num`, children: `Rate` }),
                        (0, r.jsx)(`th`, { className: `ui-iv__num`, children: `Tax` }),
                        (0, r.jsx)(`th`, { className: `ui-iv__num`, children: `Price` }),
                      ],
                    }),
                  }),
                  (0, r.jsxs)(`tbody`, {
                    children: [
                      J.map((e) =>
                        (0, r.jsx)(
                          v,
                          {
                            title: e,
                            children: T.filter((t) => (t.group ?? ``) === e).map((t) =>
                              (0, r.jsxs)(
                                `tr`,
                                {
                                  "data-indent": e ? `` : void 0,
                                  children: [
                                    (0, r.jsx)(`td`, { className: `ui-iv__name`, children: t.name }),
                                    (0, r.jsx)(`td`, {
                                      children: Number.isFinite(t.qty) ? u.format(t.qty) : `—`,
                                    }),
                                    (0, r.jsx)(`td`, { className: `ui-iv__num`, children: B(t.rate) }),
                                    (0, r.jsx)(`td`, {
                                      className: `ui-iv__num`,
                                      children: Number.isFinite(t.tax) ? d.format(t.tax) : `—`,
                                    }),
                                    (0, r.jsx)(`td`, {
                                      className: `ui-iv__num`,
                                      children: B(o(t.qty * t.rate)),
                                    }),
                                  ],
                                },
                                t.id,
                              ),
                            ),
                          },
                          e || `base`,
                        ),
                      ),
                      T.length === 0 &&
                        (0, r.jsx)(`tr`, {
                          className: `ui-iv__empty`,
                          children: (0, r.jsx)(`td`, { colSpan: 5, children: `No lines on this invoice` }),
                        }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)(y, {
                rows: [
                  [`Subtotal`, B(V)],
                  [`Tax`, B(H)],
                ],
                total: [`Total`, B(U)],
              }),
            ],
          }),
          (0, r.jsxs)(`article`, {
            className: `ui-iv__sheet`,
            "data-doc": `credit`,
            "aria-hidden": k !== `credit`,
            inert: k !== `credit` || void 0,
            children: [
              (0, r.jsxs)(`header`, {
                className: `ui-iv__head`,
                children: [
                  (0, r.jsxs)(`div`, {
                    children: [
                      (0, r.jsx)(`p`, { className: `ui-iv__big`, children: `Credit note` }),
                      (0, r.jsxs)(`p`, {
                        className: `ui-iv__due`,
                        children: [
                          B(K),
                          ` credited`,
                          S ? ` on ${S}` : ``,
                          F && (0, r.jsx)(`span`, { className: `ui-iv__badge`, children: `Issued` }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsx)(h, { name: e.name }),
                ],
              }),
              (0, r.jsx)(_, {
                rows: [
                  [`Credit note no`, (0, r.jsx)(`span`, { className: `ui-iv__ref`, children: f })],
                  [
                    `Related invoice`,
                    (0, r.jsx)(`button`, {
                      type: `button`,
                      className: `ui-iv__ref`,
                      onClick: () => A(`invoice`),
                      children: a,
                    }),
                  ],
                  [`Billing period`, w],
                  [`Date of issue`, S],
                ],
              }),
              (0, r.jsxs)(`div`, {
                className: `ui-iv__tray`,
                children: [
                  (0, r.jsx)(`p`, { className: `ui-iv__tray-title`, children: `Lines to credit` }),
                  (0, r.jsxs)(`div`, {
                    className: `ui-iv__card`,
                    children: [
                      (0, r.jsxs)(`div`, {
                        className: `ui-iv__crow ui-iv__crow--head`,
                        children: [
                          (0, r.jsx)(`span`, {}),
                          (0, r.jsx)(`span`, { children: `Name` }),
                          (0, r.jsx)(`span`, { className: `ui-iv__num`, children: `Total` }),
                          (0, r.jsx)(`span`, { className: `ui-iv__num`, children: `Credit amount` }),
                        ],
                      }),
                      T.length === 0 &&
                        (0, r.jsx)(`p`, { className: `ui-iv__none`, children: `No lines to credit` }),
                      T.map((e) => {
                        let t = c(e),
                          n = L(e);
                        return (0, r.jsxs)(
                          `div`,
                          {
                            className: `ui-iv__crow`,
                            "data-off": n ? void 0 : ``,
                            children: [
                              (0, r.jsx)(`button`, {
                                type: `button`,
                                role: `checkbox`,
                                "aria-checked": n,
                                "aria-label": `Credit ${e.name}`,
                                className: `ui-iv__check`,
                                disabled: F,
                                onClick: () => M((t) => ({ ...t, [e.id]: !t[e.id] })),
                                children: (0, r.jsx)(`svg`, {
                                  viewBox: `0 0 24 24`,
                                  "aria-hidden": `true`,
                                  children: (0, r.jsx)(`path`, { d: `m6 12.5 4 4 8-9` }),
                                }),
                              }),
                              (0, r.jsx)(`span`, {
                                className: `ui-iv__cname`,
                                title: e.name,
                                children: e.name,
                              }),
                              (0, r.jsx)(`span`, { className: `ui-iv__num`, children: B(t) }),
                              (0, r.jsx)(`span`, {
                                className: `ui-iv__num`,
                                children: (0, r.jsx)(b, {
                                  value: R(e),
                                  max: t,
                                  symbol: z.symbol,
                                  disabled: !n || F,
                                  label: `Credit amount for ${e.name}`,
                                  onChange: (t) => P((n) => ({ ...n, [e.id]: t })),
                                }),
                              }),
                            ],
                          },
                          e.id,
                        );
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)(y, {
                rows: [
                  [`Subtotal`, B(W)],
                  [`Tax`, B(G)],
                ],
                total: [`Adjustment total`, B(K, !0)],
                note: [`Applied to invoice`, `${B(K, !0)}${z.code ? ` ${z.code}` : ``}`],
              }),
              (0, r.jsx)(`div`, {
                className: `ui-iv__issue`,
                children: F
                  ? (0, r.jsx)(`button`, {
                      type: `button`,
                      className: `ui-iv__btn`,
                      onClick: () => I(!1),
                      children: `Edit credit note`,
                    })
                  : (0, r.jsx)(`button`, {
                      type: `button`,
                      className: `ui-iv__primary`,
                      disabled: K <= 0,
                      onClick: q,
                      children: `Issue credit note`,
                    }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var o = (e) => Math.round(e * 100) / 100,
  s = (e) => (Number.isFinite(e) ? e : 0),
  c = (e) => s(o(e.qty * e.rate)),
  l = (e) => !!(e.name || e.lines.length),
  u = new Intl.NumberFormat(`en-US`, { maximumFractionDigits: 2 }),
  d = new Intl.NumberFormat(`en-US`, { style: `percent`, maximumFractionDigits: 2 }),
  f = new Intl.NumberFormat(`en-US`, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
function p(e) {
  if (/^[A-Z]{3}$/.test(e))
    try {
      let t = new Intl.NumberFormat(`en-US`, {
        style: `currency`,
        currency: e,
        currencyDisplay: `narrowSymbol`,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      return {
        format: (e) => t.format(e),
        symbol: t.formatToParts(0).find((e) => e.type === `currency`)?.value ?? e,
        code: e,
      };
    } catch {}
  return { format: (t) => `${e}${f.format(t)}`, symbol: e, code: e === `$` ? `USD` : `` };
}
var m = ({ d: e }) =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, { d: e }),
    }),
  h = ({ name: e }) =>
    (0, r.jsxs)(`span`, {
      className: `ui-iv__brand`,
      title: e || void 0,
      children: [
        (0, r.jsx)(`span`, { className: `ui-iv__logo`, "aria-hidden": `true` }),
        e && (0, r.jsx)(`span`, { className: `ui-iv__brand-name`, children: e }),
      ],
    }),
  g = ({ title: e, party: t }) =>
    (0, r.jsxs)(`div`, {
      className: `ui-iv__party`,
      children: [
        (0, r.jsx)(`p`, { className: `ui-iv__label`, children: e }),
        t.name && (0, r.jsx)(`p`, { children: t.name }),
        t.lines.map((e, t) => (0, r.jsx)(`p`, { children: e }, t)),
      ],
    }),
  _ = ({ rows: e }) =>
    (0, r.jsxs)(`div`, {
      className: `ui-iv__terms`,
      children: [
        (0, r.jsx)(`p`, { className: `ui-iv__label`, children: `Terms` }),
        (0, r.jsx)(`dl`, {
          children: e
            .filter(([, e]) => e !== `` && e != null)
            .map(([e, t]) =>
              (0, r.jsxs)(
                `div`,
                { children: [(0, r.jsx)(`dt`, { children: e }), (0, r.jsx)(`dd`, { children: t })] },
                e,
              ),
            ),
        }),
      ],
    }),
  v = ({ title: e, children: t }) =>
    (0, r.jsxs)(r.Fragment, {
      children: [
        e &&
          (0, r.jsx)(`tr`, {
            className: `ui-iv__group`,
            children: (0, r.jsx)(`td`, { colSpan: 5, children: e }),
          }),
        t,
      ],
    }),
  y = ({ rows: e, total: t, note: n }) =>
    (0, r.jsxs)(`div`, {
      className: `ui-iv__totals`,
      children: [
        e.map(([e, t]) =>
          (0, r.jsxs)(
            `div`,
            { children: [(0, r.jsx)(`span`, { children: e }), (0, r.jsx)(`span`, { children: t })] },
            e,
          ),
        ),
        (0, r.jsxs)(`div`, {
          className: `ui-iv__total`,
          children: [(0, r.jsx)(`span`, { children: t[0] }), (0, r.jsx)(`b`, { children: t[1] })],
        }),
        n &&
          (0, r.jsxs)(`div`, {
            className: `ui-iv__note`,
            children: [(0, r.jsx)(`span`, { children: n[0] }), (0, r.jsx)(`span`, { children: n[1] })],
          }),
      ],
    });
function b({ value: e, max: t, symbol: i, disabled: a, label: s, onChange: c }) {
  let [l, u] = (0, n.useState)(null),
    d = l ?? f.format(e);
  return (0, r.jsxs)(`label`, {
    className: `ui-iv__amount`,
    "data-disabled": a ? `` : void 0,
    style: { "--ui-iv-chars": Math.max(4, d.length) },
    children: [
      (0, r.jsx)(`span`, { children: i }),
      (0, r.jsx)(`input`, {
        inputMode: `decimal`,
        "aria-label": s,
        disabled: a,
        value: d,
        onFocus: () => u(String(e)),
        onChange: (e) => u(e.target.value.replace(/[^\d.-]/g, ``)),
        onBlur: () => {
          (c(Math.max(Math.min(0, t), Math.min(Math.max(0, t), o(parseFloat(l ?? ``) || 0)))), u(null));
        },
        onKeyDown: (e) => e.key === `Enter` && e.target.blur(),
      }),
    ],
  });
}
var x = `.ui-iv{--ui-iv-tray: #f0f0f0;--ui-iv-paper: #ffffff;--ui-iv-card-line: #e5e5e5;--ui-iv-line: #ececec;--ui-iv-inset: #f6f6f6;--ui-iv-ink: #171717;--ui-iv-text: #404040;--ui-iv-muted: #8f8f8f;--ui-iv-accent: #2f6bff;--ui-iv-check: #2f6bff;--ui-iv-ok: #2f7d32;--ui-iv-ok-bg: #e8f5e6;--ui-iv-hover: #f5f5f5;--ui-iv-btn-top: #323137;--ui-iv-btn-bottom: #201e25;--ui-iv-btn-ring: #0d0d0d;--ui-iv-btn-text: #ffffff;--ui-iv-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);--ui-iv-ease: cubic-bezier(0.65, 0, 0.25, 1);container-type: inline-size;width: 100%;max-width: 760px;padding: 6px;border-radius: 24px;background: var(--ui-iv-tray);font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;color: var(--ui-iv-ink);-webkit-font-smoothing: antialiased}.ui-iv *, .ui-iv *::before, .ui-iv *::after{box-sizing: border-box}.ui-iv button, .ui-iv input{font: inherit;color: inherit;margin: 0}.ui-iv button{cursor: pointer;-webkit-tap-highlight-color: transparent}.ui-iv :focus-visible{outline: 2px solid var(--ui-iv-accent);outline-offset: 2px}.ui-iv svg{width: 15px;height: 15px;flex: none;fill: none;stroke: currentColor;stroke-width: 1.8;stroke-linecap: round;stroke-linejoin: round}.ui-iv p{margin: 0}.ui-iv__bar{display: flex;align-items: center;justify-content: space-between;gap: 10px;padding: 6px 4px 12px 6px}.ui-iv__seg{position: relative;display: grid;grid-template-columns: 1fr 1fr;padding: 3px;border-radius: 10px;background: rgba(0, 0, 0, 0.05)}.ui-iv__seg-thumb{position: absolute;top: 3px;left: 3px;width: calc(50% - 3px);height: calc(100% - 6px);border-radius: 7px;background: var(--ui-iv-paper);box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04);transition: transform 420ms var(--ui-iv-ease)}.ui-iv[data-view="credit"] .ui-iv__seg-thumb{transform: translateX(100%)}.ui-iv__seg button{position: relative;height: 30px;padding: 0 16px;white-space: nowrap;border: 0;background: none;font-size: 13px;font-weight: 500;color: var(--ui-iv-muted);transition: color 200ms ease}.ui-iv__seg button[aria-selected="true"]{color: var(--ui-iv-ink)}.ui-iv__actions{display: flex;gap: 6px}.ui-iv__btn{display: inline-flex;align-items: center;gap: 7px;height: 34px;padding: 0 12px;border: 0;border-radius: 10px;background: var(--ui-iv-paper);box-shadow: inset 0 0 0 1px var(--ui-iv-card-line), 0 1px 1px rgba(0, 0, 0, 0.03);font-size: 13px;font-weight: 500;white-space: nowrap;animation: ui-iv-fade 240ms ease both;transition: background-color 160ms ease, transform 160ms ease}.ui-iv__btn:hover{background: var(--ui-iv-hover)}.ui-iv__btn:active{transform: scale(0.98)}.ui-iv__btn svg{color: var(--ui-iv-text)}.ui-iv__stack{position: relative;display: grid;padding-top: 14px}.ui-iv__sheet{grid-area: 1 / 1;min-width: 0;padding: 44px 48px 36px;border: 1px solid var(--ui-iv-card-line);border-radius: 20px;background: var(--ui-iv-paper);box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.03);transition: transform 620ms var(--ui-iv-ease), opacity 420ms ease, box-shadow 420ms ease}.ui-iv__sheet[aria-hidden="true"]{z-index: 0;transform: translateY(-14px) scale(0.96);transform-origin: top center;pointer-events: none}.ui-iv__sheet[aria-hidden="true"] > *{opacity: 0;transition: opacity 200ms ease}.ui-iv__sheet:not([aria-hidden="true"]){z-index: 1;box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.04)}.ui-iv__sheet:not([aria-hidden="true"]) > *{opacity: 1;transition: opacity 360ms ease 200ms}.ui-iv__head{display: flex;align-items: flex-start;justify-content: space-between;gap: 16px;margin-bottom: 40px}.ui-iv__big{font-size: 40px;font-weight: 500;letter-spacing: -0.035em;line-height: 1.1;font-variant-numeric: tabular-nums}.ui-iv__due{display: flex;align-items: center;gap: 28px;margin-top: 10px !important;font-size: 14px;color: var(--ui-iv-text)}.ui-iv__due a{color: var(--ui-iv-accent);text-decoration: none}.ui-iv__due a:hover{text-decoration: underline}.ui-iv__badge{margin-left: -16px;padding: 2px 8px;border-radius: 8px;background: var(--ui-iv-ok-bg);font-size: 12px;font-weight: 500;color: var(--ui-iv-ok)}.ui-iv__head > div:first-child{flex: none;max-width: 100%}.ui-iv__brand{display: inline-flex;align-items: center;gap: 9px;min-width: 0;max-width: 100%;padding-top: 8px;font-size: 15px;color: var(--ui-iv-text);white-space: nowrap}.ui-iv__brand-name{min-width: 0;overflow: hidden;text-overflow: ellipsis}.ui-iv__logo{flex: none;width: 24px;height: 24px;border-radius: 50%;background: conic-gradient(from 210deg, #2f6bff, #8fb0ff, #2f6bff);-webkit-mask: radial-gradient(circle, transparent 4px, #000 4.5px);mask: radial-gradient(circle, transparent 4px, #000 4.5px)}.ui-iv__label{margin-bottom: 8px !important;font-size: 14px;font-weight: 500;color: var(--ui-iv-ink)}.ui-iv__parties{display: grid;grid-template-columns: 1fr 1fr;gap: 24px;margin-bottom: 36px}.ui-iv__party{min-width: 0}.ui-iv__party p:not(.ui-iv__label){font-size: 14px;line-height: 1.6;color: var(--ui-iv-text);overflow-wrap: anywhere}.ui-iv__terms{margin-bottom: 36px}.ui-iv__terms dl{display: grid;gap: 7px;margin: 0}.ui-iv__terms dl > div{display: grid;grid-template-columns: 140px 1fr;font-size: 14px}.ui-iv__terms dt{color: var(--ui-iv-muted)}.ui-iv__terms dd{min-width: 0;margin: 0;color: var(--ui-iv-text);overflow-wrap: anywhere}.ui-iv__ref{padding: 0;border: 0;background: none;text-align: left;color: var(--ui-iv-accent) !important;font-variant-numeric: tabular-nums}button.ui-iv__ref:hover{text-decoration: underline}.ui-iv__table{width: 100%;border-collapse: collapse;font-size: 14px}.ui-iv__table th{padding: 0 0 12px;border-bottom: 1px solid var(--ui-iv-line);text-align: left;font-weight: 500;color: var(--ui-iv-ink)}.ui-iv__table td{padding: 14px 0;border-bottom: 1px solid var(--ui-iv-line);color: var(--ui-iv-text);font-variant-numeric: tabular-nums}.ui-iv__table tr[data-indent] td:first-child{padding-left: 24px}.ui-iv__group td{color: var(--ui-iv-ink)}.ui-iv__num{text-align: right !important;white-space: nowrap}.ui-iv__name, .ui-iv__group td{overflow-wrap: anywhere}.ui-iv__table td:nth-child(2){white-space: nowrap}@container (min-width: 561px){.ui-iv__table[data-wide] th + th, .ui-iv__table[data-wide] td + td{padding-left: 16px}}.ui-iv__empty td{color: var(--ui-iv-muted)}.ui-iv__none{padding: 18px 0;font-size: 14px;color: var(--ui-iv-muted)}.ui-iv__totals{display: grid;gap: 12px;width: min(100%, 300px);margin: 22px 0 0 auto;font-size: 14px}.ui-iv__totals > div{display: flex;justify-content: space-between;gap: 16px;color: var(--ui-iv-muted);font-variant-numeric: tabular-nums}.ui-iv__totals > div > :last-child{white-space: nowrap}.ui-iv__totals > div span:last-child{color: var(--ui-iv-text)}.ui-iv__total{margin-top: 4px;padding-top: 14px;border-top: 1px solid var(--ui-iv-text)}.ui-iv__total span{font-weight: 500;color: var(--ui-iv-text) !important}.ui-iv__total b{font-size: 16px;font-weight: 600;color: var(--ui-iv-ink)}.ui-iv__note{margin-top: -4px}.ui-iv__tray{padding: 0 6px 6px;border-radius: 18px;background: var(--ui-iv-inset);box-shadow: inset 0 0 0 1px var(--ui-iv-line)}.ui-iv__tray-title{padding: 14px 12px 12px;font-size: 15px;font-weight: 500;color: var(--ui-iv-text)}.ui-iv__card{padding: 4px 14px;border: 1px solid var(--ui-iv-card-line);border-radius: 14px;background: var(--ui-iv-paper);box-shadow: var(--ui-iv-shadow)}.ui-iv__crow{display: grid;grid-template-columns: 22px minmax(0, 1fr) auto minmax(min-content, 0.8fr);align-items: center;gap: 14px;min-height: 60px;border-bottom: 1px solid var(--ui-iv-line);font-size: 14.5px;transition: opacity 220ms ease}.ui-iv__crow:last-child{border-bottom: 0}.ui-iv__crow--head{min-height: 46px;font-size: 13.5px;color: var(--ui-iv-muted)}.ui-iv__crow[data-off] .ui-iv__cname, .ui-iv__crow[data-off] > .ui-iv__num:nth-child(3){opacity: 0.45}.ui-iv__crow > .ui-iv__num{font-variant-numeric: tabular-nums;color: var(--ui-iv-ink)}.ui-iv__cname{display: -webkit-box;min-width: 0;overflow: hidden;overflow-wrap: break-word;-webkit-box-orient: vertical;-webkit-line-clamp: 2;line-clamp: 2}.ui-iv__check{display: grid;place-items: center;width: 20px;height: 20px;padding: 0;border: 0;border-radius: 6px;background: var(--ui-iv-inset);box-shadow: inset 0 0 0 1px var(--ui-iv-card-line);color: #fff !important;transition: background-color 180ms ease, box-shadow 180ms ease}.ui-iv__check svg{width: 13px;height: 13px;stroke-width: 2.4;stroke-dasharray: 20;stroke-dashoffset: 20;transition: stroke-dashoffset 260ms ease}.ui-iv__check[aria-checked="true"]{background: var(--ui-iv-check);box-shadow: inset 0 0 0 1px var(--ui-iv-check)}.ui-iv__check[aria-checked="true"] svg{stroke-dashoffset: 0}.ui-iv__check:disabled{cursor: default}.ui-iv__amount{display: flex;align-items: center;gap: 8px;width: 100%;min-width: 150px;max-width: 220px;margin-left: auto;height: 44px;padding: 0 14px;border-radius: 12px;background: var(--ui-iv-paper);box-shadow: inset 0 0 0 1px var(--ui-iv-card-line);transition: box-shadow 160ms ease, opacity 200ms ease}.ui-iv__amount:focus-within{box-shadow: inset 0 0 0 1px var(--ui-iv-accent)}.ui-iv__amount span{flex: none;color: var(--ui-iv-muted)}.ui-iv__amount input{flex: 1;width: 0;min-width: calc(var(--ui-iv-chars, 4) * 1ch + 1px);border: 0;background: none;outline: none;text-align: right;font-size: 14.5px;font-variant-numeric: tabular-nums;color: var(--ui-iv-ink)}.ui-iv__amount[data-disabled]{opacity: 0.5}.ui-iv__issue{display: flex;justify-content: flex-end;margin-top: 24px}.ui-iv__primary{height: 38px;padding: 0 16px;border: 0;border-radius: 10px;background: linear-gradient(180deg, var(--ui-iv-btn-top), var(--ui-iv-btn-bottom));box-shadow: 0 0 0 1px var(--ui-iv-btn-ring), inset 0 1px 0 rgba(255, 255, 255, 0.12);font-size: 14px;font-weight: 500;color: var(--ui-iv-btn-text) !important;transition: filter 160ms ease, opacity 200ms ease, transform 160ms ease}.ui-iv__primary:hover:not(:disabled){filter: brightness(1.12)}.ui-iv__primary:active:not(:disabled){transform: scale(0.98)}.ui-iv__primary:disabled{opacity: 0.4;cursor: default}@keyframes ui-iv-fade{from{opacity: 0}}@container (max-width: 560px){.ui-iv__sheet{padding: 28px 20px 24px}.ui-iv__big{font-size: 30px}.ui-iv__head{flex-direction: column-reverse;margin-bottom: 28px}.ui-iv__parties{grid-template-columns: 1fr}.ui-iv__terms dl > div{grid-template-columns: 120px 1fr}.ui-iv__table th:nth-child(4), .ui-iv__table td:nth-child(4), .ui-iv__table th:nth-child(3), .ui-iv__table td:nth-child(3){display: none}.ui-iv__table th + th, .ui-iv__table td + td{padding-left: 12px}.ui-iv__crow{grid-template-columns: 22px minmax(0, 1fr) minmax(min-content, 0.9fr)}.ui-iv__amount{min-width: 110px}.ui-iv__crow > :nth-child(3){display: none}.ui-iv__actions .ui-iv__btn:first-child{display: none}.ui-iv__seg button{padding: 0 11px}.ui-iv__btn{padding: 0 10px}}@container (max-width: 400px){.ui-iv__sheet{padding: 24px 16px 20px}.ui-iv__card{padding: 4px 10px}.ui-iv__crow{gap: 10px}.ui-iv__amount{gap: 4px;padding: 0 10px}.ui-iv__terms dl > div{grid-template-columns: 112px 1fr}}@media (prefers-reduced-motion: reduce){.ui-iv__sheet, .ui-iv__sheet > *, .ui-iv__seg-thumb{transition: none !important}}.ui-iv input:not([type="checkbox"]):not([type="radio"]):focus-visible, .ui-iv textarea:focus-visible, .ui-iv [contenteditable]:focus-visible{outline: none}:where(.dark, [data-theme="dark"]) .ui-iv{--ui-iv-tray: #161618;--ui-iv-paper: #232326;--ui-iv-card-line: rgba(255, 255, 255, 0.08);--ui-iv-line: rgba(255, 255, 255, 0.07);--ui-iv-inset: #1c1c1f;--ui-iv-ink: #ededed;--ui-iv-text: #c4c4c4;--ui-iv-muted: #8f8f8f;--ui-iv-accent: #6b95ff;--ui-iv-check: #4d82ff;--ui-iv-ok: #6fd27a;--ui-iv-ok-bg: rgba(111, 210, 122, 0.14);--ui-iv-hover: rgba(255, 255, 255, 0.05);--ui-iv-btn-top: #f4f4f5;--ui-iv-btn-bottom: #e4e4e7;--ui-iv-btn-ring: rgba(0, 0, 0, 0.6);--ui-iv-btn-text: #121213;--ui-iv-shadow: 0 1px 2px rgba(0, 0, 0, 0.4)}:where(.dark, [data-theme="dark"]) .ui-iv__seg{background: rgba(255, 255, 255, 0.06)}:where(.dark, [data-theme="dark"]) .ui-iv__seg-thumb{background: #313135}`,
  S = 760;
function C() {
  let e = (0, n.useRef)(null),
    [t, i] = (0, n.useState)(null);
  return (
    (0, n.useLayoutEffect)(() => {
      let t = e.current,
        n = t?.closest(`.card__preview`),
        r = n ?? t?.closest(`.stage`);
      if (!t || !r) return;
      let a = () => {
        let e = r.clientWidth;
        if (n) return i({ scale: (e - 48) / S, card: !0 });
        if (e < 760) return i(null);
        i({ scale: Math.min(0.82, (e - 140) / S), card: !1 });
      };
      a();
      let o = new ResizeObserver(a);
      return (o.observe(r), () => o.disconnect());
    }, []),
    (0, r.jsx)(`div`, {
      ref: e,
      className: `invoice-demo`,
      "data-fit": t ? (t.card ? `card` : `stage`) : void 0,
      children: (0, r.jsx)(`div`, {
        className: `invoice-demo__frame`,
        style: t
          ? t.card
            ? { width: S, transform: `scale(${t.scale})` }
            : { width: S, zoom: t.scale }
          : void 0,
        children: (0, r.jsx)(a, {}),
      }),
    })
  );
}
