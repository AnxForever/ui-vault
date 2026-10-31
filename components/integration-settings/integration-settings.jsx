import { t as e } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
/* empty css             */ var n = e(),
  r = t(),
  i = [
    `(GMT −08:00) Los Angeles`,
    `(GMT −05:00) New York`,
    `(GMT −03:00) São Paulo`,
    `(GMT +00:00) London`,
    `(GMT +01:00) Berlin`,
    `(GMT +01:00) Amsterdam`,
    `(GMT +01:00) Warsaw`,
    `(GMT +02:00) Athens`,
    `(GMT +04:00) Dubai`,
    `(GMT +05:30) Mumbai`,
    `(GMT +08:00) Singapore`,
    `(GMT +09:00) Tokyo`,
    `(GMT +10:00) Sydney`,
  ],
  a = /^(?!-)[\p{L}\p{N}-]+(\.[\p{L}\p{N}-]+)*\.\p{L}{2,}$/iu,
  o = (e) => e.match(/[\p{L}\p{N}]/u)?.[0]?.toUpperCase() ?? ``,
  s = (e) =>
    e
      .trim()
      .replace(/^https?:\/\//i, ``)
      .replace(/\/+$/, ``);
function c({
  name: e,
  logo: t,
  count: c,
  meta: d,
  defaultValues: m,
  siteHint: h = `Your store's primary domain, without https://`,
  timeZones: g = i,
  onGenerateKey: _,
  onSave: v,
  onToggle: y,
  className: b,
}) {
  let x = { enabled: !0, siteUrl: ``, timeZone: g[0], apiKey: null, ...m },
    [S, C] = (0, n.useState)(x),
    [w, T] = (0, n.useState)(x),
    [E, D] = (0, n.useState)(`idle`),
    [O, k] = (0, n.useState)(!1),
    [A, j] = (0, n.useState)(!1),
    [M, N] = (0, n.useState)(!1),
    [P, F] = (0, n.useState)(!1),
    I = (0, n.useId)(),
    L = (0, n.useId)(),
    R = s(w.siteUrl),
    z = R === `` || a.test(R),
    B = w.siteUrl !== S.siteUrl || w.timeZone !== S.timeZone || w.apiKey !== S.apiKey,
    V = (e) => T((t) => ({ ...t, ...e })),
    H = async () => {
      if (E !== `busy`) {
        D(`busy`);
        try {
          let e = await (_
            ? _()
            : new Promise((e) =>
                setTimeout(
                  () =>
                    e(
                      `sk_live_${Array.from(crypto.getRandomValues(new Uint8Array(16)), (e) => e.toString(16).padStart(2, `0`)).join(``)}`,
                    ),
                  700,
                ),
              ));
          (V({ apiKey: e }), k(!0));
        } finally {
          D(`idle`);
        }
      }
    },
    U = async () => {
      if (w.apiKey)
        try {
          (await navigator.clipboard.writeText(w.apiKey), j(!0), setTimeout(() => j(!1), 1400));
        } catch {}
    },
    W = async () => {
      if (!z || M) return;
      N(!0);
      let e = { ...w, siteUrl: R };
      try {
        (await v?.(e), T(e), C(e));
      } finally {
        N(!1);
      }
    },
    G = w.apiKey
      ? w.apiKey.length < 16
        ? `•`.repeat(14)
        : `${w.apiKey.slice(0, 8)}${`•`.repeat(14)}${w.apiKey.slice(-4)}`
      : ``;
  return (0, r.jsxs)(r.Fragment, {
    children: [
      (0, r.jsx)(`style`, { href: `ui-integration-settings`, precedence: `default`, children: p }),
      (0, r.jsxs)(`section`, {
        className: [`ui-is`, b].filter(Boolean).join(` `),
        "aria-label": `${e} settings`,
        "data-off": !w.enabled || void 0,
        children: [
          (0, r.jsxs)(`header`, {
            className: `ui-is__head`,
            children: [
              (0, r.jsx)(`span`, {
                className: `ui-is__logo`,
                onErrorCapture: () => F(!0),
                children:
                  t == null || t === !1 || P
                    ? (0, r.jsx)(`span`, { className: `ui-is__initial`, children: o(e) })
                    : t,
              }),
              (0, r.jsxs)(`span`, {
                className: `ui-is__who`,
                children: [
                  (0, r.jsxs)(`span`, {
                    className: `ui-is__name`,
                    children: [
                      (0, r.jsx)(`span`, { className: `ui-is__name-text`, dir: `auto`, children: e }),
                      c !== void 0 &&
                        Number.isFinite(c) &&
                        (0, r.jsx)(`span`, {
                          className: `ui-is__count`,
                          children: c.toLocaleString(`en-US`),
                        }),
                    ],
                  }),
                  (0, r.jsx)(`span`, {
                    className: `ui-is__meta`,
                    dir: `auto`,
                    title: w.enabled ? d : void 0,
                    children: w.enabled ? d : `Paused – no data is synced`,
                  }),
                ],
              }),
              (0, r.jsx)(`button`, {
                type: `button`,
                role: `switch`,
                "aria-checked": w.enabled,
                "aria-label": `${e} sync`,
                className: `ui-is__switch`,
                onClick: () => {
                  let e = !w.enabled;
                  (V({ enabled: e }), C((t) => ({ ...t, enabled: e })), y?.(e));
                },
                children: (0, r.jsx)(`span`, {}),
              }),
            ],
          }),
          (0, r.jsx)(`div`, {
            className: `ui-is__fold`,
            "data-open": w.enabled || void 0,
            inert: !w.enabled,
            children: (0, r.jsxs)(`div`, {
              className: `ui-is__fold-inner`,
              children: [
                (0, r.jsxs)(`div`, {
                  className: `ui-is__card`,
                  children: [
                    (0, r.jsxs)(`div`, {
                      className: `ui-is__section`,
                      children: [
                        w.apiKey
                          ? (0, r.jsxs)(`div`, {
                              className: `ui-is__key`,
                              "data-new": O || void 0,
                              children: [
                                (0, r.jsx)(`code`, { children: O ? w.apiKey : G }),
                                (0, r.jsx)(`button`, {
                                  type: `button`,
                                  className: `ui-is__mini`,
                                  "aria-label": O ? `Hide key` : `Show key`,
                                  onClick: () => k((e) => !e),
                                  children: (0, r.jsx)(f, {
                                    d: O
                                      ? `M2 8s2.2-4.5 6-4.5S14 8 14 8s-2.2 4.5-6 4.5S2 8 2 8ZM2.5 2.5l11 11`
                                      : `M2 8s2.2-4.5 6-4.5S14 8 14 8s-2.2 4.5-6 4.5S2 8 2 8ZM8 9.8a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z`,
                                    size: 15,
                                  }),
                                }),
                                (0, r.jsx)(`button`, {
                                  type: `button`,
                                  className: `ui-is__mini`,
                                  "aria-label": `Copy key`,
                                  onClick: U,
                                  children: (0, r.jsx)(f, {
                                    d: A
                                      ? `m3.5 8.5 3 3 6-7`
                                      : `M5.5 5.5V3.5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2M3.5 5.5h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1Z`,
                                    size: 15,
                                  }),
                                }),
                                (0, r.jsx)(`button`, {
                                  type: `button`,
                                  className: `ui-is__regen`,
                                  onClick: H,
                                  disabled: E === `busy`,
                                  children:
                                    E === `busy`
                                      ? (0, r.jsx)(`span`, {
                                          className: `ui-is__spinner`,
                                          "aria-hidden": `true`,
                                        })
                                      : `Regenerate`,
                                }),
                              ],
                            })
                          : (0, r.jsxs)(`button`, {
                              type: `button`,
                              className: `ui-is__generate`,
                              onClick: H,
                              disabled: E === `busy`,
                              children: [
                                (0, r.jsx)(`span`, {
                                  children: E === `busy` ? `Generating…` : `Generate a new API key`,
                                }),
                                E === `busy`
                                  ? (0, r.jsx)(`span`, { className: `ui-is__spinner`, "aria-hidden": `true` })
                                  : (0, r.jsx)(u, {}),
                              ],
                            }),
                        w.apiKey &&
                          O &&
                          (0, r.jsx)(`p`, {
                            className: `ui-is__note`,
                            role: `status`,
                            children: A
                              ? `Copied to the clipboard.`
                              : `Copy it now – it is shown in full only once.`,
                          }),
                      ],
                    }),
                    (0, r.jsxs)(`div`, {
                      className: `ui-is__section`,
                      children: [
                        (0, r.jsx)(`label`, {
                          className: `ui-is__label`,
                          htmlFor: I,
                          children: `Site address`,
                        }),
                        (0, r.jsxs)(`div`, {
                          className: `ui-is__field`,
                          "data-invalid": !z || void 0,
                          children: [
                            (0, r.jsx)(`span`, { className: `ui-is__prefix`, children: `https://` }),
                            (0, r.jsx)(`input`, {
                              id: I,
                              value: w.siteUrl,
                              onChange: (e) => V({ siteUrl: e.target.value.replace(/^https?:\/\//i, ``) }),
                              placeholder: `yourstore.com`,
                              inputMode: `url`,
                              autoComplete: `off`,
                              spellCheck: !1,
                              "aria-invalid": !z,
                              "aria-describedby": L,
                            }),
                            R &&
                              z &&
                              (0, r.jsx)(`span`, {
                                className: `ui-is__ok`,
                                "aria-hidden": `true`,
                                children: (0, r.jsx)(f, { d: `m3.5 8.5 3 3 6-7`, size: 14 }),
                              }),
                          ],
                        }),
                        (0, r.jsx)(`p`, {
                          className: `ui-is__hint`,
                          dir: `auto`,
                          id: L,
                          "data-error": !z || void 0,
                          children: z
                            ? h
                            : `That doesn't look like a domain – try something like yourstore.com`,
                        }),
                      ],
                    }),
                    (0, r.jsxs)(`div`, {
                      className: `ui-is__section`,
                      children: [
                        (0, r.jsx)(`span`, {
                          className: `ui-is__label`,
                          id: `${I}-tz`,
                          children: `Time zone`,
                        }),
                        (0, r.jsx)(l, {
                          zones: g,
                          value: w.timeZone,
                          onChange: (e) => V({ timeZone: e }),
                          labelledBy: `${I}-tz`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsx)(`div`, {
                  className: `ui-is__save`,
                  "data-open": B || void 0,
                  inert: !B,
                  children: (0, r.jsxs)(`div`, {
                    className: `ui-is__save-inner`,
                    children: [
                      (0, r.jsx)(`span`, { children: `Unsaved changes` }),
                      (0, r.jsxs)(`div`, {
                        className: `ui-is__save-actions`,
                        children: [
                          (0, r.jsx)(`button`, {
                            type: `button`,
                            className: `ui-is__btn`,
                            onClick: () => T(S),
                            children: `Discard`,
                          }),
                          (0, r.jsx)(`button`, {
                            type: `button`,
                            className: `ui-is__btn ui-is__btn--primary`,
                            onClick: W,
                            disabled: !z || M,
                            children: M ? `Saving…` : `Save`,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function l({ zones: e, value: t, onChange: i, labelledBy: a }) {
  let [o, s] = (0, n.useState)(!1),
    [c, l] = (0, n.useState)(``),
    u = (0, n.useRef)(null);
  (0, n.useEffect)(() => {
    if (!o) return;
    let e = (e) => !u.current?.contains(e.target) && s(!1),
      t = (e) => e.key === `Escape` && s(!1);
    return (
      window.addEventListener(`pointerdown`, e),
      window.addEventListener(`keydown`, t),
      () => {
        (window.removeEventListener(`pointerdown`, e), window.removeEventListener(`keydown`, t));
      }
    );
  }, [o]);
  let p = (0, n.useMemo)(() => e.filter((e) => e.toLowerCase().includes(c.trim().toLowerCase())), [e, c]);
  return (0, r.jsxs)(`div`, {
    className: `ui-is__zone`,
    ref: u,
    children: [
      (0, r.jsxs)(`button`, {
        type: `button`,
        className: `ui-is__field ui-is__zone-btn`,
        "aria-haspopup": `listbox`,
        "aria-expanded": o,
        "aria-labelledby": a,
        onClick: () => {
          (s((e) => !e), l(``));
        },
        children: [
          (0, r.jsx)(`span`, { className: `ui-is__zone-value`, dir: `auto`, title: t, children: t }),
          (0, r.jsx)(d, {}),
        ],
      }),
      o &&
        (0, r.jsxs)(`div`, {
          className: `ui-is__menu`,
          children: [
            (0, r.jsx)(`input`, {
              className: `ui-is__menu-search`,
              autoFocus: !0,
              value: c,
              onChange: (e) => l(e.target.value),
              placeholder: `Search city or offset`,
              "aria-label": `Search time zones`,
            }),
            (0, r.jsxs)(`div`, {
              className: `ui-is__menu-list`,
              role: `listbox`,
              "aria-labelledby": a,
              children: [
                p.length === 0 &&
                  (0, r.jsx)(`p`, { className: `ui-is__menu-empty`, children: `No time zone matches.` }),
                p.map((e, n) =>
                  (0, r.jsxs)(
                    `button`,
                    {
                      dir: `auto`,
                      type: `button`,
                      role: `option`,
                      "aria-selected": e === t,
                      className: `ui-is__option`,
                      onClick: () => {
                        (i(e), s(!1));
                      },
                      children: [e, e === t && (0, r.jsx)(f, { d: `m3.5 8.5 3 3 6-7`, size: 14 })],
                    },
                    `${n}-${e}`,
                  ),
                ),
              ],
            }),
          ],
        }),
    ],
  });
}
var u = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 16 16`,
      width: `16`,
      height: `16`,
      fill: `currentColor`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, {
        d: `M10.5 1.5a4 4 0 0 0-3.86 5.05L1.8 11.4a1 1 0 0 0-.3.7v1.9a.5.5 0 0 0 .5.5h1.9a.5.5 0 0 0 .5-.5V13h1v-1h1v-1l.95-.95A4 4 0 1 0 10.5 1.5Zm1 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z`,
      }),
    }),
  d = () =>
    (0, r.jsxs)(`svg`, {
      viewBox: `0 0 16 16`,
      width: `16`,
      height: `16`,
      "aria-hidden": `true`,
      children: [
        (0, r.jsx)(`circle`, { cx: `8`, cy: `8`, r: `6.5`, fill: `var(--ui-is-muted)` }),
        (0, r.jsx)(`path`, {
          d: `M8 4.5V8h3`,
          fill: `none`,
          stroke: `var(--ui-is-field)`,
          strokeWidth: `1.5`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
        }),
      ],
    }),
  f = ({ d: e, size: t = 16 }) =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 16 16`,
      width: t,
      height: t,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.4`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, { d: e }),
    }),
  p = `.ui-is{--ui-is-tray: #f0f0f0;--ui-is-card: #ffffff;--ui-is-line: #f0f0f0;--ui-is-ink: #171717;--ui-is-text: #404040;--ui-is-muted: #8f8f8f;--ui-is-accent: #2f6bff;--ui-is-ok: #1f8a4c;--ui-is-danger: #e5484d;--ui-is-accent-text: #2f6bff;--ui-is-border: #e5e5e5;--ui-is-ring: #e2e2e2;--ui-is-ring-strong: #d4d4d4;--ui-is-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);--ui-is-raised: #fff;--ui-is-raised-hover: #f7f7f7;--ui-is-well: #f5f5f5;--ui-is-well-hover: #efefef;--ui-is-field: #fff;--ui-is-hover: rgba(0, 0, 0, 0.05);--ui-is-switch-off: #d9d9d9;--ui-is-ok-soft: #f2fbf6;--ui-is-ok-ring: #cfeedd;--ui-is-track: #d4d4d4;--ui-is-placeholder: #b5b5b5;--ui-is-menu: #fff;--ui-is-menu-hover: #f5f5f5;--ui-is-menu-search: #f5f5f5;--ui-is-ease: cubic-bezier(0.22, 1, 0.36, 1);box-sizing: border-box;width: 100%;max-width: 560px;background: var(--ui-is-tray);padding: 6px;border-radius: 22px;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;color: var(--ui-is-ink);-webkit-font-smoothing: antialiased}.ui-is *, .ui-is *::before, .ui-is *::after{box-sizing: border-box}.ui-is button{margin: 0;font: inherit;color: inherit;cursor: pointer}.ui-is button:focus-visible{outline: 2px solid var(--ui-is-accent);outline-offset: 2px}.ui-is__head{display: flex;align-items: center;gap: 14px;padding: 14px 16px 14px 14px}.ui-is__logo{display: grid;place-items: center;flex: none;width: 40px;height: 40px;border-radius: 11px;background: var(--ui-is-raised);box-shadow: 0 0 0 1px var(--ui-is-border), 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-is__logo{overflow: hidden}.ui-is__logo svg{width: 22px;height: 22px}.ui-is__logo img{display: block;width: 22px;height: 22px;object-fit: contain}.ui-is__initial{font-size: 16px;font-weight: 600;color: var(--ui-is-text)}.ui-is__who{display: grid;flex: 1;min-width: 0}.ui-is__name{display: flex;align-items: center;gap: 8px;min-width: 0;font-size: 15px;font-weight: 500;line-height: 22px}.ui-is__name-text{min-width: 0;overflow-wrap: anywhere}.ui-is__count{flex: none;padding: 0 6px;border-radius: 6px;background: var(--ui-is-raised);box-shadow: inset 0 0 0 1px var(--ui-is-ring);font-size: 11.5px;font-weight: 500;line-height: 18px;font-variant-numeric: tabular-nums;color: var(--ui-is-text)}.ui-is__meta{overflow: hidden;font-size: 13px;line-height: 19px;white-space: nowrap;text-overflow: ellipsis;color: var(--ui-is-muted)}.ui-is__switch{position: relative;flex: none;width: 40px;height: 24px;padding: 0;border: 0;border-radius: 999px;background: var(--ui-is-switch-off);transition: background-color 220ms ease}.ui-is__switch span{position: absolute;top: 3px;left: 3px;width: 18px;height: 18px;border-radius: 50%;background: #fff;box-shadow: 0 1px 3px rgba(0, 0, 0, 0.18);transition: transform 280ms var(--ui-is-ease)}.ui-is__switch[aria-checked="true"]{background: var(--ui-is-accent)}.ui-is__switch[aria-checked="true"] span{transform: translateX(16px)}.ui-is__fold{display: grid;grid-template-columns: minmax(0, 1fr);grid-template-rows: 0fr;transition: grid-template-rows 420ms var(--ui-is-ease), opacity 260ms ease;opacity: 0}.ui-is__fold[data-open]{grid-template-rows: 1fr;opacity: 1}.ui-is__fold-inner{min-width: 0;min-height: 0;overflow: hidden}.ui-is__fold[data-open] .ui-is__fold-inner{overflow: visible}.ui-is__card{background: var(--ui-is-card);border: 1px solid var(--ui-is-border);border-radius: 16px;box-shadow: var(--ui-is-shadow)}.ui-is__section{padding: 16px 18px 18px}.ui-is__section + .ui-is__section{border-top: 1px solid var(--ui-is-line)}.ui-is__label{display: block;margin-bottom: 8px;font-size: 14px;font-weight: 500;line-height: 20px}.ui-is__generate{display: flex;align-items: center;justify-content: space-between;width: 100%;height: 42px;padding: 0 14px;border: 0;border-radius: 11px;background: var(--ui-is-well);font-size: 14px !important;color: var(--ui-is-muted) !important;text-align: left;transition: background-color 160ms ease, color 160ms ease}.ui-is__generate:hover:not(:disabled){background: var(--ui-is-well-hover);color: var(--ui-is-ink) !important}.ui-is__generate:disabled{cursor: progress}.ui-is__key{display: flex;align-items: center;gap: 4px;height: 42px;padding: 0 6px 0 14px;border-radius: 11px;background: var(--ui-is-well);animation: ui-is-in 320ms var(--ui-is-ease)}.ui-is__key[data-new]{background: var(--ui-is-ok-soft);box-shadow: inset 0 0 0 1px var(--ui-is-ok-ring)}.ui-is__key code{flex: 1;min-width: 0;overflow: hidden;font-family: ui-monospace, SFMono-Regular, Menlo, monospace;font-size: 12.5px;white-space: nowrap;text-overflow: ellipsis;color: var(--ui-is-text)}.ui-is__mini{display: grid;place-items: center;flex: none;width: 30px;height: 30px;padding: 0;border: 0;border-radius: 8px;background: transparent;color: var(--ui-is-muted) !important;transition: background-color 140ms ease, color 140ms ease}.ui-is__mini:hover{background: var(--ui-is-hover);color: var(--ui-is-ink) !important}.ui-is__regen{display: grid;place-items: center;min-width: 92px;height: 30px;margin-left: 2px;padding: 0 10px;border: 0;border-radius: 8px;background: var(--ui-is-raised);box-shadow: 0 0 0 1px var(--ui-is-border);font-size: 12.5px !important;font-weight: 500}.ui-is__regen:hover:not(:disabled){background: var(--ui-is-raised-hover)}.ui-is__note{margin: 8px 0 0;font-size: 12.5px;color: var(--ui-is-ok)}.ui-is__spinner{width: 14px;height: 14px;border: 1.5px solid var(--ui-is-track);border-top-color: var(--ui-is-ink);border-radius: 50%;animation: ui-is-spin 700ms linear infinite}.ui-is__field{display: flex;align-items: center;gap: 4px;width: 100%;height: 42px;padding: 0 14px;border: 0;border-radius: 11px;background: var(--ui-is-field);box-shadow: 0 0 0 1px var(--ui-is-ring), 0 1px 2px rgba(0, 0, 0, 0.03);transition: box-shadow 160ms ease}.ui-is__field:focus-within{box-shadow: 0 0 0 1px var(--ui-is-accent), 0 0 0 4px rgba(47, 107, 255, 0.12)}.ui-is__field[data-invalid]{box-shadow: 0 0 0 1px var(--ui-is-danger), 0 0 0 4px rgba(229, 72, 77, 0.1)}.ui-is__prefix{font-size: 14px;color: var(--ui-is-placeholder)}.ui-is__field input{flex: 1;min-width: 0;height: 100%;border: 0;outline: none;background: transparent;font: inherit;font-size: 14px;color: var(--ui-is-ink)}.ui-is__field input::placeholder{color: var(--ui-is-placeholder)}.ui-is__ok{display: grid;color: var(--ui-is-ok);animation: ui-is-in 240ms var(--ui-is-ease)}.ui-is__hint{overflow-wrap: anywhere;margin: 8px 0 0;font-size: 13px;line-height: 18px;color: var(--ui-is-muted)}.ui-is__hint[data-error]{color: var(--ui-is-danger)}.ui-is__zone{position: relative}.ui-is__zone-value{min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-is__zone-btn{justify-content: space-between;gap: 8px;font-size: 14px !important;text-align: left}.ui-is__zone-btn:hover{box-shadow: 0 0 0 1px var(--ui-is-ring-strong), 0 1px 2px rgba(0, 0, 0, 0.03)}.ui-is__menu{position: absolute;top: calc(100% + 6px);left: 0;right: 0;z-index: 10;padding: 6px;border-radius: 14px;background: var(--ui-is-menu);box-shadow: 0 0 0 1px var(--ui-is-border), 0 14px 36px -10px rgba(0, 0, 0, 0.22);animation: ui-is-drop 180ms var(--ui-is-ease)}.ui-is__menu-search{width: 100%;height: 34px;margin-bottom: 4px;padding: 0 10px;border: 0;border-radius: 9px;outline: none;background: var(--ui-is-menu-search);font: inherit;font-size: 13px}.ui-is__menu-list{display: grid;gap: 2px;max-height: 200px;overflow-y: auto;scrollbar-width: thin}.ui-is__option{display: flex;align-items: center;justify-content: space-between;min-height: 32px;padding: 0 10px;border: 0;border-radius: 8px;background: transparent;font-size: 13px !important;text-align: left}.ui-is__option:hover{background: var(--ui-is-menu-hover)}.ui-is__option[aria-selected="true"]{color: var(--ui-is-accent-text) !important;font-weight: 500}.ui-is__menu-empty{margin: 0;padding: 12px 10px;font-size: 13px;color: var(--ui-is-muted)}.ui-is__save{display: grid;grid-template-columns: minmax(0, 1fr);grid-template-rows: 0fr;transition: grid-template-rows 360ms var(--ui-is-ease)}.ui-is__save[data-open]{grid-template-rows: 1fr}.ui-is__save-inner{display: flex;align-items: center;justify-content: space-between;gap: 12px;min-height: 0;overflow: hidden;padding: 0 8px 0 18px;font-size: 13px;color: var(--ui-is-text)}.ui-is__save[data-open] .ui-is__save-inner{padding-top: 8px;padding-bottom: 8px}.ui-is__save-actions{display: flex;gap: 6px}.ui-is__btn{height: 32px;padding: 0 12px;border: 0;border-radius: 10px;background: var(--ui-is-raised);box-shadow: 0 0 0 1px var(--ui-is-border), 0 1px 2px rgba(0, 0, 0, 0.04);font-size: 13px !important;font-weight: 500}.ui-is__btn:hover{background: var(--ui-is-raised-hover)}.ui-is__btn--primary{background: linear-gradient(#323137, #201e25);box-shadow: 0 0 0 1px #0d0d0d, 0 2px 4px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.12);color: #fff !important}.ui-is__btn--primary:hover{background: linear-gradient(#3b3a41, #26242b)}.ui-is__btn--primary:disabled{opacity: 0.5;cursor: default}@keyframes ui-is-in{from{opacity: 0;transform: translateY(2px)}}@keyframes ui-is-drop{from{opacity: 0;transform: translateY(-4px) scale(0.98)}}@keyframes ui-is-spin{to{transform: rotate(360deg)}}@media (prefers-reduced-motion: reduce){.ui-is__fold, .ui-is__save, .ui-is__switch, .ui-is__switch span{transition: none}.ui-is__key, .ui-is__menu, .ui-is__ok{animation: none}}.ui-is input:not([type="checkbox"]):not([type="radio"]):focus-visible, .ui-is textarea:focus-visible, .ui-is [contenteditable]:focus-visible{outline: none}:where(.dark, [data-theme="dark"]) .ui-is{--ui-is-tray: #161618;--ui-is-card: #232326;--ui-is-line: rgba(255, 255, 255, 0.08);--ui-is-ink: #ededed;--ui-is-text: #c4c4c4;--ui-is-muted: #8f8f8f;--ui-is-ok: #3dbb6f;--ui-is-danger: #ff6369;--ui-is-accent-text: #6b95ff;--ui-is-border: rgba(255, 255, 255, 0.08);--ui-is-ring: rgba(255, 255, 255, 0.08);--ui-is-ring-strong: rgba(255, 255, 255, 0.14);--ui-is-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);--ui-is-raised: #2a2a2d;--ui-is-raised-hover: #313135;--ui-is-well: #2a2a2d;--ui-is-well-hover: #313135;--ui-is-field: #2a2a2d;--ui-is-hover: rgba(255, 255, 255, 0.06);--ui-is-switch-off: #3a3a3e;--ui-is-ok-soft: rgba(61, 187, 111, 0.14);--ui-is-ok-ring: rgba(61, 187, 111, 0.3);--ui-is-track: rgba(255, 255, 255, 0.14);--ui-is-placeholder: #6b6b70;--ui-is-menu: #2a2a2d;--ui-is-menu-hover: #313135;--ui-is-menu-search: #1f1f21}:where(.dark, [data-theme="dark"]) .ui-is__menu{box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 14px 36px -10px rgba(0, 0, 0, 0.55)}:where(.dark, [data-theme="dark"]) .ui-is__menu-search{color: var(--ui-is-ink)}:where(.dark, [data-theme="dark"]) .ui-is__menu-search::placeholder{color: var(--ui-is-placeholder)}:where(.dark, [data-theme="dark"]) .ui-is__switch span{box-shadow: 0 1px 3px rgba(0, 0, 0, 0.45)}:where(.dark, [data-theme="dark"]) .ui-is__field:focus-within{box-shadow: 0 0 0 1px var(--ui-is-accent), 0 0 0 4px rgba(47, 107, 255, 0.22)}:where(.dark, [data-theme="dark"]) .ui-is__field[data-invalid]{box-shadow: 0 0 0 1px var(--ui-is-danger), 0 0 0 4px rgba(255, 99, 105, 0.16)}:where(.dark, [data-theme="dark"]) .ui-is__btn--primary{background: linear-gradient(#f4f4f5, #e4e4e7);box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.6), 0 2px 4px rgba(0, 0, 0, 0.35), inset 0 1px 0 #ffffff;color: #121213 !important}:where(.dark, [data-theme="dark"]) .ui-is__btn--primary:hover{background: linear-gradient(#ffffff, #ececef)}`,
  m = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `#7AB55C`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, {
        d: `M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z`,
      }),
    });
function h() {
  return (0, r.jsx)(`div`, {
    className: `integration-demo`,
    children: (0, r.jsx)(c, {
      name: `Shopify store`,
      logo: (0, r.jsx)(m, {}),
      count: 128,
      meta: `Connected on March 4, 2026 at 09:12`,
      siteHint: `Your store's primary domain from Settings › Domains`,
      defaultValues: { siteUrl: `lumen-studio.com`, timeZone: `(GMT +01:00) Berlin` },
    }),
  });
}
