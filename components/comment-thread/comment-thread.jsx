/*
 * affectUI · comment-thread
 * Implementation recovered from public bundle asset: demo-ElZs8qP_.js
 * Styles inlined in the module -> comment-thread.css (0 block(s))
 * Demo usage: comment-thread.demo.jsx
 * Minified identifiers kept; formatting by prettier.
 */

import { t as e } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
/* empty css             */ var n = e(),
  r = t();
function i(e, t) {
  let n = Math.max(0, Math.round((t - e) / 1e3));
  if (n < 45) return `just now`;
  let r = Math.round(n / 60);
  if (r < 60) return `${r}min ago`;
  let i = Math.round(r / 60);
  if (i < 24) return `${i}h ago`;
  let a = Math.round(i / 24);
  return a < 30 ? `${a}d ago` : a < 365 ? `${Math.round(a / 30)}mo ago` : `${Math.round(a / 365)}y ago`;
}
var a = new Intl.NumberFormat(`en`),
  o = (e) =>
    e
      .split(/\s+/)
      .map((e) => Array.from(e).find((e) => /[\p{L}\p{N}]/u.test(e)))
      .filter(Boolean)
      .slice(0, 2)
      .join(``)
      .toUpperCase();
function s({
  title: e = `Comment`,
  messages: t,
  currentUser: o,
  assistant: s,
  onReply: l,
  onClose: p,
  className: m,
}) {
  let [h, g] = (0, n.useState)(t),
    [_] = (0, n.useState)(() => new Set(t.filter((e) => e.author.assistant).map((e) => e.id))),
    [v, y] = (0, n.useState)(new Set()),
    [b, x] = (0, n.useState)(``),
    [S, C] = (0, n.useState)(!1),
    [w, T] = (0, n.useState)(() => Date.now()),
    E = (0, n.useRef)(null),
    D = d(E);
  ((0, n.useEffect)(() => {
    let e = window.setInterval(() => T(Date.now()), 3e4);
    return () => window.clearInterval(e);
  }, []),
    (0, n.useEffect)(() => {
      E.current?.scrollTo({ top: E.current.scrollHeight, behavior: `smooth` });
    }, [h.length, S]));
  let O = async () => {
      let e = b.trim();
      if (!e || S) return;
      (x(``),
        T(Date.now()),
        k(!0),
        g((t) => [...t, { id: `m-${Date.now()}`, author: o, createdAt: Date.now(), text: e }]));
      let t = l?.(e);
      if (t) {
        C(!0);
        try {
          let e = await t;
          e && g((t) => [...t, { ...e, createdAt: Date.now() }]);
        } finally {
          (C(!1), T(Date.now()));
        }
      }
    },
    k = (e) => {
      let t = E.current;
      t && (t.style.maxHeight = e ? `${t.offsetHeight}px` : ``);
    },
    A = (e) => {
      (k(!1),
        y((t) => {
          let n = new Set(t);
          return (n.has(e) ? n.delete(e) : n.add(e), n);
        }));
    };
  return (0, r.jsxs)(r.Fragment, {
    children: [
      (0, r.jsx)(`style`, { href: `ui-comment-thread`, precedence: `default`, children: f }),
      (0, r.jsxs)(`section`, {
        className: [`ui-ct`, m].filter(Boolean).join(` `),
        "aria-label": e,
        children: [
          (0, r.jsxs)(`header`, {
            className: `ui-ct__head`,
            children: [
              (0, r.jsx)(`h3`, { className: `ui-ct__title`, title: e, dir: `auto`, children: e }),
              (0, r.jsxs)(`span`, {
                className: `ui-ct__count`,
                children: [a.format(h.length), ` `, h.length === 1 ? `message` : `messages`],
              }),
              p &&
                (0, r.jsx)(`button`, {
                  type: `button`,
                  className: `ui-ct__icon-btn`,
                  "aria-label": `Close comment`,
                  onClick: p,
                  children: (0, r.jsx)(u, { d: `m4 4 8 8M12 4l-8 8` }),
                }),
            ],
          }),
          (0, r.jsx)(`div`, {
            className: `ui-ct__card ui-ct__morph`,
            ref: D,
            children: (0, r.jsxs)(`div`, {
              className: `ui-ct__scroll`,
              ref: E,
              "aria-live": `polite`,
              children: [
                h.map((e) => {
                  let t = v.has(e.id),
                    n = /^\/edit\b/i.test(e.text.trim());
                  return (0, r.jsxs)(
                    `article`,
                    {
                      className: `ui-ct__msg`,
                      "data-delayed": _.has(e.id) || void 0,
                      children: [
                        (0, r.jsxs)(`div`, {
                          className: `ui-ct__meta`,
                          children: [
                            (0, r.jsx)(c, { author: e.author }),
                            (0, r.jsx)(`span`, {
                              className: `ui-ct__name`,
                              title: e.author.name,
                              dir: `auto`,
                              children: e.author.name,
                            }),
                            (0, r.jsx)(`time`, {
                              className: `ui-ct__time`,
                              dateTime: new Date(e.createdAt).toISOString(),
                              children: i(+e.createdAt, w),
                            }),
                          ],
                        }),
                        e.text &&
                          (0, r.jsx)(`p`, {
                            className: `ui-ct__text`,
                            dir: `auto`,
                            children: n
                              ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                    (0, r.jsx)(`span`, { className: `ui-ct__command`, children: `/Edit` }),
                                    ` `,
                                    e.text.trim().replace(/^\/edit\s*/i, ``),
                                  ],
                                })
                              : e.text,
                          }),
                        e.status &&
                          (0, r.jsxs)(`div`, {
                            className: `ui-ct__status`,
                            children: [
                              (0, r.jsxs)(`button`, {
                                type: `button`,
                                className: `ui-ct__status-btn`,
                                "aria-expanded": t,
                                disabled: !e.details?.length,
                                onClick: () => A(e.id),
                                children: [
                                  (0, r.jsx)(`span`, {
                                    className: `ui-ct__check`,
                                    children: (0, r.jsx)(u, { d: `m4 8.3 2.6 2.6L12 5.4`, size: 12 }),
                                  }),
                                  (0, r.jsx)(`span`, {
                                    className: `ui-ct__status-text`,
                                    title: e.status,
                                    dir: `auto`,
                                    children: e.status,
                                  }),
                                  !!e.details?.length &&
                                    (0, r.jsx)(`span`, {
                                      className: `ui-ct__chevron`,
                                      children: (0, r.jsx)(u, { d: `m4.5 6.25 3.5 3.5 3.5-3.5`, size: 14 }),
                                    }),
                                ],
                              }),
                              !!e.details?.length &&
                                (0, r.jsx)(`div`, {
                                  className: `ui-ct__details`,
                                  "data-open": t || void 0,
                                  inert: !t,
                                  children: (0, r.jsx)(`ul`, {
                                    children: e.details.map((e, t) =>
                                      (0, r.jsx)(`li`, { dir: `auto`, style: { "--i": t }, children: e }, t),
                                    ),
                                  }),
                                }),
                            ],
                          }),
                      ],
                    },
                    e.id,
                  );
                }),
                S &&
                  s &&
                  (0, r.jsxs)(`article`, {
                    className: `ui-ct__msg`,
                    "aria-label": `${s.name} is thinking`,
                    children: [
                      (0, r.jsxs)(`div`, {
                        className: `ui-ct__meta`,
                        children: [
                          (0, r.jsx)(c, { author: s }),
                          (0, r.jsx)(`span`, { className: `ui-ct__name`, children: s.name }),
                        ],
                      }),
                      (0, r.jsx)(`p`, { className: `ui-ct__thinking`, children: `Thinking…` }),
                    ],
                  }),
              ],
            }),
          }),
          (0, r.jsxs)(`form`, {
            className: `ui-ct__composer`,
            onSubmit: (e) => {
              (e.preventDefault(), O());
            },
            children: [
              (0, r.jsx)(`input`, {
                className: `ui-ct__input`,
                value: b,
                onChange: (e) => x(e.target.value),
                placeholder: s ? `Reply, or ask @${s.name}…` : `Add comment…`,
                "aria-label": `Reply`,
              }),
              (0, r.jsx)(`button`, {
                type: `submit`,
                className: `ui-ct__send`,
                "aria-label": `Send reply`,
                disabled: !b.trim() || S,
                children: (0, r.jsx)(u, { d: `M8 13V3M3.5 7.5 8 3l4.5 4.5`, size: 14 }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function c({ author: e }) {
  let [t, i] = (0, n.useState)(!1);
  return e.avatar && typeof e.avatar != `string`
    ? (0, r.jsx)(`span`, { className: `ui-ct__avatar`, children: e.avatar })
    : typeof e.avatar == `string` && !t
      ? (0, r.jsx)(`img`, {
          className: `ui-ct__avatar`,
          src: e.avatar,
          alt: ``,
          width: 24,
          height: 24,
          loading: `lazy`,
          onError: () => i(!0),
        })
      : (0, r.jsx)(`span`, {
          className: `ui-ct__avatar ui-ct__avatar--initials`,
          "aria-hidden": `true`,
          children: o(e.name),
        });
}
function l() {
  let e = (0, n.useId)();
  return (0, r.jsxs)(`svg`, {
    viewBox: `0 0 24 24`,
    width: `24`,
    height: `24`,
    "aria-hidden": `true`,
    children: [
      (0, r.jsx)(`defs`, {
        children: (0, r.jsxs)(`linearGradient`, {
          id: `${e}-fill`,
          x1: `3`,
          y1: `3`,
          x2: `21`,
          y2: `21`,
          gradientUnits: `userSpaceOnUse`,
          children: [
            (0, r.jsx)(`stop`, { offset: `0`, stopColor: `#5b9dff` }),
            (0, r.jsx)(`stop`, { offset: `0.5`, stopColor: `#2f6bff` }),
            (0, r.jsx)(`stop`, { offset: `1`, stopColor: `#8b5cf6` }),
          ],
        }),
      }),
      (0, r.jsx)(`circle`, { cx: `12`, cy: `12`, r: `12`, fill: `url(#${e}-fill)` }),
    ],
  });
}
var u = ({ d: e, size: t = 16 }) =>
  (0, r.jsx)(`svg`, {
    viewBox: `0 0 16 16`,
    width: t,
    height: t,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: `1.5`,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
    "aria-hidden": `true`,
    children: (0, r.jsx)(`path`, { d: e }),
  });
function d(e) {
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
var f = `
.ui-ct {
  --ui-ct-tray: #f0f0f0;
  --ui-ct-card: #ffffff;
  --ui-ct-ink: #171717;
  --ui-ct-text: #404040;
  --ui-ct-muted: #8f8f8f;
  --ui-ct-accent: #2f6bff;
  --ui-ct-ok: #1f8a4c;
  --ui-ct-accent-text: #2f6bff;
  --ui-ct-border: #e5e5e5;
  --ui-ct-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
  --ui-ct-hover: rgba(0, 0, 0, 0.05);
  --ui-ct-row-hover: #f5f5f5;
  --ui-ct-initials: #eef3ff;
  --ui-ct-dot: #d4d4d4;
  --ui-ct-subtle: #a3a3a3;
  --ui-ct-avatar-ring: rgba(0, 0, 0, 0.06);
  --ui-ct-ease: cubic-bezier(0.22, 1, 0.36, 1);
  box-sizing: border-box;
  width: 100%;
  max-width: 420px;
  /* Like the Chat Composer: a gray tray with heading and reply field, the white card sits on top of it */
  background: var(--ui-ct-tray);
  /* The gray tray frames the white card on every side */
  padding: 6px;
  border-radius: 22px;
  font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  color: var(--ui-ct-ink);
  -webkit-font-smoothing: antialiased;
}
.ui-ct *, .ui-ct *::before, .ui-ct *::after { box-sizing: border-box; }
.ui-ct button { margin: 0; font: inherit; color: inherit; cursor: pointer; }
.ui-ct button:focus-visible { outline: 2px solid var(--ui-ct-accent); outline-offset: 2px; }

.ui-ct__head {
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 46px;
  padding: 6px 10px 6px 18px;
}
/* A long title takes two lines at most – the count and close stay in place */
.ui-ct__title { display: -webkit-box; min-width: 0; overflow: hidden; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow-wrap: anywhere; margin: 0; font-size: 15px; font-weight: 500; line-height: 22px; }
.ui-ct__count { flex: none; margin-right: auto; white-space: nowrap; font-size: 12.5px; color: var(--ui-ct-muted); }
.ui-ct__icon-btn {
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  padding: 0;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: var(--ui-ct-muted) !important;
  transition: background-color 140ms ease, color 140ms ease;
}
.ui-ct__icon-btn:hover { background: var(--ui-ct-hover); color: var(--ui-ct-ink) !important; }

.ui-ct__card {
  background: var(--ui-ct-card);
  border: 1px solid var(--ui-ct-border);
  border-radius: 16px;
  box-shadow: var(--ui-ct-shadow);
}
.ui-ct__scroll {
  display: grid;
  gap: 18px;
  align-content: start;
  min-height: var(--ui-ct-min-height, 0px);
  max-height: var(--ui-ct-max-height, 340px);
  padding: 16px 18px 18px;
  overflow-y: auto;
  scrollbar-width: thin;
}
/* Each message builds up piece by piece: name row, text, status – the assistant's first reply a beat later */
.ui-ct__msg { --ui-ct-d: 0ms; min-width: 0; }
.ui-ct__msg[data-delayed] { --ui-ct-d: 700ms; }
.ui-ct__msg > * { animation: ui-ct-in 420ms var(--ui-ct-ease) both; animation-delay: var(--ui-ct-d); }
.ui-ct__msg > :nth-child(2) { animation-delay: calc(var(--ui-ct-d) + 80ms); }
.ui-ct__msg > :nth-child(3) { animation-delay: calc(var(--ui-ct-d) + 160ms); }
.ui-ct__meta { display: flex; align-items: center; gap: 9px; min-width: 0; }
.ui-ct__avatar {
  display: grid;
  place-items: center;
  flex: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;
}
img.ui-ct__avatar { box-shadow: 0 0 0 1px var(--ui-ct-avatar-ring); }
.ui-ct__avatar svg { width: 100%; height: 100%; }
.ui-ct__avatar--initials { background: var(--ui-ct-initials); font-size: 9px; font-weight: 600; color: var(--ui-ct-accent-text); }
.ui-ct__name { min-width: 0; overflow: hidden; font-size: 14px; font-weight: 500; line-height: 20px; white-space: nowrap; text-overflow: ellipsis; }
.ui-ct__time { flex: none; margin-left: auto; white-space: nowrap; font-size: 12.5px; color: var(--ui-ct-muted); font-variant-numeric: tabular-nums; }
.ui-ct__text { margin: 8px 0 0; font-size: 14px; line-height: 21px; overflow-wrap: anywhere; white-space: pre-line; text-align: start; color: var(--ui-ct-text); }
.ui-ct__command { color: var(--ui-ct-muted); }

.ui-ct__status { margin-top: 8px; }
.ui-ct__status-btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  max-width: 100%;
  height: 26px;
  padding: 0 6px 0 8px;
  border: 0;
  border-radius: 8px;
  background: transparent;
  font-size: 14px !important;
  transition: background-color 140ms ease;
}
/* The global button reset sets margin: 0 – shift the row so the check icon sits centered under the avatars */
.ui-ct .ui-ct__status-btn { margin-left: -4px; }
.ui-ct__status-btn:hover:not(:disabled) { background: var(--ui-ct-row-hover); }
.ui-ct__status-btn:disabled { cursor: default; }
.ui-ct__status-text { min-width: 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.ui-ct__check, .ui-ct__chevron { flex: none; }
.ui-ct__check {
  display: grid;
  place-items: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--ui-ct-ok);
  color: #fff;
}
.ui-ct__chevron { display: grid; color: var(--ui-ct-muted); transition: transform 260ms var(--ui-ct-ease); }
.ui-ct__status-btn[aria-expanded="true"] .ui-ct__chevron { transform: rotate(180deg); }
.ui-ct__details {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 320ms var(--ui-ct-ease);
}
.ui-ct__details[data-open] { grid-template-rows: 1fr; }
.ui-ct__details ul {
  min-height: 0;
  overflow: hidden;
  margin: 0;
  padding: 0 0 0 28px;
  list-style: none;
}
.ui-ct__details li {
  position: relative;
  margin-top: 6px;
  font-size: 13px;
  line-height: 19px;
  overflow-wrap: anywhere;
  text-align: start;
  color: var(--ui-ct-muted);
  /* Closing: lines fade out quickly while the box folds */
  opacity: 0;
  transform: translateY(-4px);
  transition: opacity 160ms ease, transform 220ms var(--ui-ct-ease);
}
/* Opening: lines come in one after another */
.ui-ct__details[data-open] li {
  opacity: 1;
  transform: none;
  transition-duration: 320ms, 420ms;
  transition-delay: calc(60ms + var(--i, 0) * 60ms);
}
/* Tree lines instead of dots: each line gets its own corner – down on the axis of the check icon, then a rounded turn right */
.ui-ct__details li:first-child { margin-top: 5px; }
.ui-ct__details li::before {
  content: "";
  position: absolute;
  left: -16.625px;
  top: -3px;
  width: 10.5px;
  height: 13px;
  border-left: 1.25px solid var(--ui-ct-dot);
  border-bottom: 1.25px solid var(--ui-ct-dot);
  border-bottom-left-radius: 5px;
}
/* The first branch starts with a small gap under the check icon */
.ui-ct__details li:first-child::before {
  top: -5px;
  height: 15px;
}

.ui-ct__thinking {
  display: inline-block;
  margin: 8px 0 0;
  font-size: 14px;
  background: linear-gradient(90deg, var(--ui-ct-subtle) 0%, var(--ui-ct-subtle) 35%, rgba(255, 255, 255, 0.9) 50%, var(--ui-ct-subtle) 65%, var(--ui-ct-subtle) 100%);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ui-ct-shine 1.6s linear infinite;
}

.ui-ct__composer {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 9px 9px 18px;
}
.ui-ct__input {
  flex: 1;
  min-width: 0;
  height: 32px;
  border: 0;
  outline: none;
  background: transparent;
  font: inherit;
  font-size: 14px;
  color: var(--ui-ct-ink);
}
.ui-ct__input::placeholder { color: var(--ui-ct-subtle); }
.ui-ct__send {
  display: grid;
  place-items: center;
  flex: none;
  width: 30px;
  height: 30px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: linear-gradient(#323137, #201e25);
  box-shadow: 0 0 0 1px #0d0d0d, 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #fff !important;
  transition: opacity 160ms ease, transform 160ms ease;
}
.ui-ct__send:disabled { opacity: 0.3; cursor: default; }
.ui-ct__send:not(:disabled):active { transform: scale(0.94); }

@keyframes ui-ct-in { from { opacity: 0; transform: translateY(4px); } }
@keyframes ui-ct-shine { from { background-position: 100% 0; } to { background-position: 0% 0; } }
@media (prefers-reduced-motion: reduce) {
  .ui-ct__msg > *, .ui-ct__thinking { animation: none; }
  .ui-ct__details, .ui-ct__details li, .ui-ct__chevron { transition: none; }
}

/* Height changes glide instead of jumping */
.ui-ct__morph { overflow: hidden; }
.ui-ct__morph[data-smooth] { transition: height 380ms cubic-bezier(0.22, 1, 0.36, 1); }
@media (prefers-reduced-motion: reduce) { .ui-ct__morph[data-smooth] { transition: none; } }


/* Text fields: no focus box while typing – also against global :focus-visible rules of the host page */
.ui-ct input:not([type="checkbox"]):not([type="radio"]):focus-visible,
.ui-ct textarea:focus-visible,
.ui-ct [contenteditable]:focus-visible { outline: none; }
/* Dark mode: follows a .dark class or data-theme="dark" on any ancestor, e.g. <html> */
:where(.dark, [data-theme="dark"]) .ui-ct {
  --ui-ct-tray: #161618;
  --ui-ct-card: #232326;
  --ui-ct-ink: #ededed;
  --ui-ct-text: #c4c4c4;
  --ui-ct-muted: #8f8f8f;
  --ui-ct-ok: #2a9d5c;
  --ui-ct-accent-text: #6b95ff;
  --ui-ct-border: rgba(255, 255, 255, 0.08);
  --ui-ct-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  --ui-ct-hover: rgba(255, 255, 255, 0.06);
  --ui-ct-row-hover: rgba(255, 255, 255, 0.06);
  --ui-ct-initials: rgba(47, 107, 255, 0.16);
  --ui-ct-dot: rgba(255, 255, 255, 0.14);
  --ui-ct-subtle: #6b6b70;
  --ui-ct-avatar-ring: rgba(255, 255, 255, 0.08);
}
:where(.dark, [data-theme="dark"]) .ui-ct__send {
  background: linear-gradient(#f4f4f5, #e4e4e7);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.6), 0 2px 4px rgba(0, 0, 0, 0.35), inset 0 1px 0 #ffffff;
  color: #121213 !important;
}
`,
  p = { name: `Atlas`, avatar: (0, r.jsx)(l, {}), assistant: !0 },
  m = (e) => Date.now() - e * 6e4,
  h = [
    {
      id: `1`,
      author: { name: `Lena Lindqvist`, avatar: `/avatars/lena.jpg` },
      createdAt: m(3),
      text: `/edit Rename every “customers” to “members” on the pricing page.`,
    },
    {
      id: `2`,
      author: p,
      createdAt: m(1),
      text: ``,
      status: `Edit completed`,
      details: [
        `Renamed 12 mentions in 3 sections`,
        `Kept “customer support” as it is`,
        `Left the legal pages untouched`,
      ],
    },
  ],
  g = [
    `Done – I also updated the meta description.`,
    `Good catch. I'll leave a note for the copy review.`,
    `On it. You'll see the change in a minute.`,
  ],
  _ = 0;
function v() {
  return (0, r.jsx)(`div`, {
    className: `thread-demo`,
    children: (0, r.jsx)(s, {
      messages: h,
      currentUser: { name: `Sofia Marin`, avatar: `/avatars/sofia.jpg` },
      assistant: p,
      onClose: () => {},
      onReply: (e) => {
        if (!/@atlas/i.test(e)) return;
        let t = g[_++ % g.length];
        return new Promise((e) =>
          setTimeout(() => e({ id: `a-${Date.now()}`, author: p, createdAt: Date.now(), text: t }), 1400),
        );
      },
    }),
  });
}
