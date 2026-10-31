import { t as e } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
/* empty css             */ var n = e(),
  r = t(),
  i = [
    { id: `needs`, label: `Needs you` },
    { id: `running`, label: `Running` },
    { id: `done`, label: `Done` },
  ],
  a = (e) => (e === `waiting` || e === `failed` ? `needs` : e === `running` ? `running` : `done`),
  o = { waiting: `Waiting for you`, running: `Running`, done: `Done`, failed: `Failed` },
  s = (e) => e === `running` || e === `waiting`,
  c = (e) => (e === `waiting` || e === `done` || e === `failed` ? e : `running`),
  l = (e) =>
    e instanceof Date ? e.getTime() : typeof e == `number` ? e : typeof e == `string` ? Date.parse(e) : NaN,
  u = (e) => (typeof e == `number` && Number.isFinite(e) && e >= 0 ? e : void 0),
  d = (e) => String(e).padStart(2, `0`),
  f = (e) => {
    if (!Number.isFinite(e)) return `—`;
    let t = Math.max(0, Math.floor(e / 1e3));
    if (t < 60) return `${t}s`;
    let n = Math.floor(t / 60);
    if (n < 60) return `${n}m ${d(t % 60)}s`;
    let r = Math.floor(n / 60);
    return r < 24 ? `${r}h ${d(n % 60)}m` : `${Math.floor(r / 24)}d ${r % 24}h`;
  },
  p = new Intl.NumberFormat(`en`, { notation: `compact`, maximumFractionDigits: 1 }),
  m = new Intl.NumberFormat(`en`),
  h = { subs: new Set(), id: 0 },
  g = (e) => {
    let [t, r] = (0, n.useState)(() => Date.now());
    return (
      (0, n.useEffect)(() => {
        if (!e) return;
        let t = () => r(Date.now());
        return (
          t(),
          h.subs.add(t),
          (h.id ||= window.setInterval(() => h.subs.forEach((e) => e()), 1e3)),
          () => {
            (h.subs.delete(t), h.subs.size || (window.clearInterval(h.id), (h.id = 0)));
          }
        );
      }, [e]),
      t
    );
  },
  ee = ({ since: e, fixed: t }) => {
    let n = g(e !== void 0);
    return (0, r.jsx)(r.Fragment, { children: f(e === void 0 ? t : n - e) });
  },
  _ = () => typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,
  v = `cubic-bezier(0.32, 0.72, 0.24, 1)`,
  y = {
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 1.4,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  },
  b = () =>
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
    }),
  x = ({ status: e }) =>
    (0, r.jsxs)(`span`, {
      className: `ui-ai__state-icon`,
      "data-status": e,
      "aria-hidden": `true`,
      children: [
        e === `running` &&
          (0, r.jsxs)(`svg`, {
            width: `12`,
            height: `12`,
            viewBox: `0 0 12 12`,
            children: [
              (0, r.jsx)(`circle`, {
                cx: `6`,
                cy: `6`,
                r: `4.6`,
                fill: `none`,
                stroke: `currentColor`,
                strokeOpacity: `0.25`,
                strokeWidth: `1.6`,
              }),
              (0, r.jsx)(`path`, {
                d: `M6 1.4a4.6 4.6 0 0 1 4.6 4.6`,
                fill: `none`,
                stroke: `currentColor`,
                strokeWidth: `1.6`,
                strokeLinecap: `round`,
              }),
            ],
          }),
        e === `waiting` &&
          (0, r.jsx)(`svg`, {
            width: `12`,
            height: `12`,
            viewBox: `0 0 12 12`,
            children: (0, r.jsx)(`path`, { d: `M6 1.6 11 10.2H1L6 1.6Z`, fill: `currentColor` }),
          }),
        e === `done` &&
          (0, r.jsx)(`svg`, {
            width: `12`,
            height: `12`,
            viewBox: `0 0 12 12`,
            children: (0, r.jsx)(`circle`, { cx: `6`, cy: `6`, r: `3.4`, fill: `currentColor` }),
          }),
        e === `failed` &&
          (0, r.jsxs)(`svg`, {
            width: `12`,
            height: `12`,
            viewBox: `0 0 12 12`,
            children: [
              (0, r.jsx)(`circle`, { cx: `6`, cy: `6`, r: `4.8`, fill: `currentColor` }),
              (0, r.jsx)(`path`, {
                d: `M6 3.6v2.8M6 8.3v.1`,
                stroke: `#fff`,
                strokeWidth: `1.5`,
                strokeLinecap: `round`,
              }),
            ],
          }),
      ],
    }),
  S = () =>
    (0, r.jsx)(`svg`, {
      width: `12`,
      height: `12`,
      viewBox: `0 0 12 12`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, {
        d: `M7.6 1.6a2.6 2.6 0 0 0-2.4 3.5L1.7 8.6a1.1 1.1 0 0 0 1.6 1.6l3.5-3.5a2.6 2.6 0 0 0 3.5-2.4l-1.5 1.1-1.5-.4-.4-1.5 1.1-1.5c-.1 0-.3-.4-.4-.4Z`,
        ...y,
        strokeWidth: 1.2,
      }),
    }),
  C = () =>
    (0, r.jsxs)(`svg`, {
      width: `12`,
      height: `12`,
      viewBox: `0 0 12 12`,
      "aria-hidden": `true`,
      children: [
        (0, r.jsx)(`circle`, { cx: `5.2`, cy: `5.2`, r: `3.3`, ...y, strokeWidth: 1.2 }),
        (0, r.jsx)(`path`, { d: `m7.7 7.7 2.6 2.6`, ...y, strokeWidth: 1.2 }),
      ],
    }),
  w = () =>
    (0, r.jsxs)(`svg`, {
      width: `13`,
      height: `13`,
      viewBox: `0 0 14 14`,
      "aria-hidden": `true`,
      children: [
        (0, r.jsx)(`rect`, {
          x: `1.8`,
          y: `2.2`,
          width: `3.2`,
          height: `9.6`,
          rx: `1`,
          ...y,
          strokeWidth: 1.2,
        }),
        (0, r.jsx)(`rect`, {
          x: `8.9`,
          y: `2.2`,
          width: `3.2`,
          height: `6.4`,
          rx: `1`,
          ...y,
          strokeWidth: 1.2,
        }),
      ],
    }),
  T = () =>
    (0, r.jsx)(`svg`, {
      width: `13`,
      height: `13`,
      viewBox: `0 0 14 14`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, { d: `M2.2 3.6h9.6M2.2 7h9.6M2.2 10.4h9.6`, ...y, strokeWidth: 1.2 }),
    }),
  te = () =>
    (0, r.jsx)(`svg`, {
      width: `12`,
      height: `12`,
      viewBox: `0 0 12 12`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, { d: `M6 2.2v7.6M2.2 6h7.6`, ...y, strokeWidth: 1.5 }),
    });
function E({
  tasks: e,
  onApprove: t,
  onReject: d,
  onRetry: f,
  onOpen: h,
  title: g = `Agent inbox`,
  action: y,
  view: E,
  defaultView: D = `board`,
  onViewChange: O,
  className: k,
}) {
  let A = (0, n.useId)(),
    j = (0, n.useRef)(null),
    [M, N] = (0, n.useState)(D),
    P = E ?? M,
    [F, I] = (0, n.useState)(null),
    [L, R] = (0, n.useState)({}),
    z = new Map(),
    B = (Array.isArray(e) ? e : [])
      .filter((e) => !!e && typeof e == `object`)
      .map((e) => {
        let t = String(e.id ?? ``),
          n = z.get(t) ?? 0;
        z.set(t, n + 1);
        let r = n ? `${t}#${n}` : t,
          i = L[r] ? { ...e, ...L[r] } : e,
          a = (Array.isArray(i.steps) ? i.steps : [])
            .filter((e) => !!e && typeof e == `object` && String(e.label ?? ``).trim() !== ``)
            .map((e) => ({ label: String(e.label), time: e.time ? String(e.time) : void 0 }));
        return {
          ...i,
          key: r,
          src: e,
          status: c(i.status),
          title: String(i.title ?? ``).trim() || `Untitled task`,
          steps: a,
        };
      }),
    V = (0, n.useRef)({});
  for (let e of B) V.current[e.key] ??= Date.now();
  let H = (e) => {
      if (!s(e.status)) return;
      let t = l(e.startedAt);
      return Number.isFinite(t) ? t : V.current[e.key] - (u(e.elapsed) ?? 0);
    },
    [U, W] = (0, n.useState)(() => Object.fromEntries(B.map((e) => [e.key, a(e.status)]))),
    G = B.map((e) => `${e.key}:${a(e.status)}`).join(`|`);
  (0, n.useEffect)(() => {
    if (!B.some((e) => U[e.key] !== a(e.status))) return;
    let e = window.setTimeout(() => W(Object.fromEntries(B.map((e) => [e.key, a(e.status)]))), _() ? 0 : 900);
    return () => window.clearTimeout(e);
  }, [G]);
  let K = (e) => U[e.key] ?? a(e.status),
    q = (0, n.useRef)(new Map()),
    J = (0, n.useRef)(new Map()),
    Y = JSON.stringify(U) + P,
    X = (0, n.useRef)(Y);
  (j.current &&
    X.current !== Y &&
    (J.current = new Map([...q.current].map(([e, t]) => [e, t.getBoundingClientRect()]))),
    (0, n.useLayoutEffect)(() => {
      if (X.current !== Y && ((X.current = Y), !_()))
        for (let [e, t] of q.current) {
          let n = J.current.get(e);
          if (!n) {
            t.animate(
              [
                { opacity: 0, transform: `translateY(6px)` },
                { opacity: 1, transform: `none` },
              ],
              { duration: 380, easing: v },
            );
            continue;
          }
          let r = t.getBoundingClientRect(),
            i = n.left - r.left,
            a = n.top - r.top;
          (Math.abs(i) < 1 && Math.abs(a) < 1) ||
            t.animate(
              [
                { transform: `translate(${i}px, ${a}px)`, zIndex: 2 },
                { transform: `none`, zIndex: 2 },
              ],
              { duration: 560, easing: v },
            );
        }
    }, [Y]));
  let Z = (e, t, n, r) => {
      if (r) return r(e.src);
      R((r) => ({
        ...r,
        [e.key]: { status: t, startedAt: Date.now(), steps: [...(e.steps ?? []), { label: n, time: `now` }] },
      }));
    },
    re = (e) => I((t) => (t === e ? null : e)),
    ie = (e) => {
      e.key === `Escape` &&
        F &&
        (e.stopPropagation(),
        q.current.get(F)?.querySelector(`.ui-ai__card-main`)?.focus({ preventScroll: !0 }),
        I(null));
    },
    ae = (e) => {
      (N(e), O?.(e));
    },
    oe = (e) => {
      let n = F === e.key,
        i = (e.steps ?? []).slice(-4),
        a = u(e.elapsed),
        s = e.status !== `failed` && (e.status !== `done` || a !== void 0),
        c = u(e.sources),
        l = u(e.tools),
        g = typeof e.description == `string` ? e.description.trim() : ``,
        _ = String(e.agent ?? ``).trim(),
        v = `${A}-${encodeURIComponent(e.key)}`,
        y =
          e.status === `done`
            ? s
              ? `Done in`
              : o.done
            : e.status === `failed`
              ? o.failed
              : `${o[e.status]} ·`;
      return (0, r.jsxs)(
        `li`,
        {
          "data-id": e.id,
          className: `ui-ai__card`,
          "data-status": e.status,
          "data-open": n ? `` : void 0,
          ref: (t) => {
            t ? q.current.set(e.key, t) : q.current.delete(e.key);
          },
          children: [
            (0, r.jsxs)(`button`, {
              type: `button`,
              className: `ui-ai__card-main`,
              "aria-expanded": n,
              "aria-controls": v,
              onClick: () => re(e.key),
              children: [
                (0, r.jsxs)(`span`, {
                  className: `ui-ai__title-row`,
                  children: [
                    (0, r.jsx)(`span`, { className: `ui-ai__spark`, children: (0, r.jsx)(b, {}) }),
                    (0, r.jsx)(`span`, {
                      className: `ui-ai__title`,
                      dir: `auto`,
                      title: e.title,
                      children: e.title,
                    }),
                  ],
                }),
                g && (0, r.jsx)(`span`, { className: `ui-ai__desc`, dir: `auto`, children: g }),
                (0, r.jsxs)(`span`, {
                  className: `ui-ai__foot`,
                  children: [
                    (0, r.jsxs)(`span`, {
                      className: `ui-ai__state`,
                      "data-status": e.status,
                      "data-bare": s ? void 0 : ``,
                      children: [
                        (0, r.jsx)(x, { status: e.status }),
                        (0, r.jsx)(`span`, { className: `ui-ai__state-word`, children: y }),
                        s &&
                          (0, r.jsx)(`span`, {
                            className: `ui-ai__time`,
                            children: (0, r.jsx)(ee, { since: H(e), fixed: a ?? 0 }),
                          }),
                      ],
                    }),
                    (0, r.jsxs)(`span`, {
                      className: `ui-ai__meta`,
                      children: [
                        c !== void 0 &&
                          (0, r.jsxs)(`span`, {
                            title: `Sources read: ${m.format(c)}`,
                            children: [(0, r.jsx)(C, {}), p.format(c)],
                          }),
                        l !== void 0 &&
                          (0, r.jsxs)(`span`, {
                            title: `Tool calls: ${m.format(l)}`,
                            children: [(0, r.jsx)(S, {}), p.format(l)],
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, r.jsx)(`div`, {
              id: v,
              className: `ui-ai__fold`,
              "data-open": n ? `` : void 0,
              inert: !n,
              children: (0, r.jsx)(`div`, {
                className: `ui-ai__clip`,
                children: (0, r.jsxs)(`div`, {
                  className: `ui-ai__more`,
                  children: [
                    _ && (0, r.jsx)(`div`, { className: `ui-ai__agent`, dir: `auto`, children: _ }),
                    i.length > 0 &&
                      (0, r.jsx)(`ol`, {
                        className: `ui-ai__steps`,
                        children: i.map((e, t) =>
                          (0, r.jsxs)(
                            `li`,
                            {
                              "data-last": t === i.length - 1 ? `` : void 0,
                              children: [
                                (0, r.jsx)(`span`, { dir: `auto`, children: e.label }),
                                e.time && (0, r.jsx)(`time`, { dir: `auto`, children: e.time }),
                              ],
                            },
                            t,
                          ),
                        ),
                      }),
                    (0, r.jsxs)(`div`, {
                      className: `ui-ai__actions`,
                      children: [
                        e.status === `waiting` &&
                          (0, r.jsxs)(r.Fragment, {
                            children: [
                              (0, r.jsx)(`button`, {
                                type: `button`,
                                className: `ui-ai__btn`,
                                onClick: () => Z(e, `failed`, `You rejected the request`, d),
                                children: `Reject`,
                              }),
                              (0, r.jsx)(`button`, {
                                type: `button`,
                                className: `ui-ai__btn ui-ai__btn--primary`,
                                onClick: () => Z(e, `running`, `You approved – continuing`, t),
                                children: `Approve`,
                              }),
                            ],
                          }),
                        e.status === `failed` &&
                          (0, r.jsx)(`button`, {
                            type: `button`,
                            className: `ui-ai__btn ui-ai__btn--primary`,
                            onClick: () => Z(e, `running`, `Retrying`, f),
                            children: `Retry`,
                          }),
                        (e.status === `running` || e.status === `done`) &&
                          h &&
                          (0, r.jsx)(`button`, {
                            type: `button`,
                            className: `ui-ai__btn`,
                            onClick: () => h(e),
                            children: `Open`,
                          }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          ],
        },
        e.key,
      );
    },
    se = (e) => (e > 999 ? `999+` : String(e)),
    Q = Object.fromEntries(i.map((e) => [e.id, B.filter((t) => K(t) === e.id).length])),
    $ = B.filter((e) => e.status === `waiting` || e.status === `failed`).length,
    ce = `${$} ${$ === 1 ? `needs` : `need`} you, ${B.filter((e) => e.status === `running`).length} running`;
  return (0, r.jsxs)(`div`, {
    ref: j,
    className: [`ui-ai`, k].filter(Boolean).join(` `),
    "data-view": P,
    onKeyDown: ie,
    children: [
      (0, r.jsx)(`style`, { href: `ui-agent-inbox`, precedence: `default`, children: ne }),
      (0, r.jsxs)(`div`, {
        className: `ui-ai__bar`,
        children: [
          (0, r.jsxs)(`span`, {
            className: `ui-ai__heading`,
            children: [
              (0, r.jsx)(`span`, { className: `ui-ai__crumb`, children: `Agents` }),
              (0, r.jsx)(`span`, { className: `ui-ai__slash`, "aria-hidden": `true`, children: `/` }),
              (0, r.jsx)(`span`, { className: `ui-ai__heading-title`, title: g, children: g }),
            ],
          }),
          (0, r.jsxs)(`div`, {
            className: `ui-ai__tools`,
            children: [
              y &&
                (0, r.jsxs)(`button`, {
                  type: `button`,
                  className: `ui-ai__action`,
                  "aria-label": y.label,
                  title: y.label,
                  onClick: y.onClick,
                  children: [
                    (0, r.jsx)(te, {}),
                    (0, r.jsx)(`span`, { className: `ui-ai__action-label`, children: y.label }),
                  ],
                }),
              (0, r.jsx)(`div`, {
                className: `ui-ai__views`,
                role: `radiogroup`,
                "aria-label": `Layout`,
                children: [`board`, `list`].map((e) =>
                  (0, r.jsxs)(
                    `button`,
                    {
                      type: `button`,
                      role: `radio`,
                      "aria-checked": P === e,
                      className: `ui-ai__view`,
                      onClick: () => ae(e),
                      children: [
                        e === `board` ? (0, r.jsx)(w, {}) : (0, r.jsx)(T, {}),
                        e === `board` ? `Board` : `List`,
                      ],
                    },
                    e,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
      (0, r.jsx)(`div`, {
        className: `ui-ai__lanes`,
        children: i.map((e) =>
          (0, r.jsxs)(
            `section`,
            {
              className: `ui-ai__lane`,
              "aria-label": e.label,
              children: [
                (0, r.jsxs)(`header`, {
                  className: `ui-ai__lane-head`,
                  children: [
                    (0, r.jsx)(`span`, {
                      className: `ui-ai__lane-spark`,
                      "aria-hidden": `true`,
                      children: (0, r.jsx)(b, {}),
                    }),
                    (0, r.jsx)(`span`, { className: `ui-ai__lane-name`, children: e.label }),
                    (0, r.jsx)(`span`, {
                      className: `ui-ai__count`,
                      title: Q[e.id] > 999 ? m.format(Q[e.id]) : void 0,
                      children: se(Q[e.id]),
                    }),
                  ],
                }),
                (0, r.jsxs)(`ul`, {
                  className: `ui-ai__cards`,
                  children: [
                    B.filter((t) => K(t) === e.id).map(oe),
                    Q[e.id] === 0 &&
                      (0, r.jsx)(`li`, { className: `ui-ai__empty`, children: `Nothing here` }),
                  ],
                }),
              ],
            },
            e.id,
          ),
        ),
      }),
      (0, r.jsx)(`span`, { className: `ui-ai__sr`, "aria-live": `polite`, children: ce }),
    ],
  });
}
var ne = `.ui-ai{--ui-ai-tray: #f0f0f0;--ui-ai-card: #ffffff;--ui-ai-line: #ececec;--ui-ai-chip: #f5f5f5;--ui-ai-track: #e6e6e6;--ui-ai-ink: #171717;--ui-ai-text: #6b6b6b;--ui-ai-muted: #8a8a8a;--ui-ai-faint: #b8b8b8;--ui-ai-blue: #2f6bff;--ui-ai-amber: #d98a00;--ui-ai-green: #1a9a52;--ui-ai-red: #e0453a;--ui-ai-brand-bg: #eaf1ff;--ui-ai-brand-fg: #2456d6;--ui-ai-warn-bg: #fff3e0;--ui-ai-warn-fg: #b85c00;--ui-ai-ok-bg: #e6f6ec;--ui-ai-ok-fg: #1a7f45;--ui-ai-danger-bg: #fdecea;--ui-ai-danger-fg: #c2331f;--ui-ai-ring: rgba(23, 23, 23, 0.22);--ui-ai-ease: cubic-bezier(0.22, 1, 0.36, 1);box-sizing: border-box;width: 100%;min-width: 0;padding: 4px;border-radius: 20px;background: var(--ui-ai-tray);container-type: inline-size;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 14px;line-height: 20px;letter-spacing: -0.006em;color: var(--ui-ai-text);text-align: left;-webkit-font-smoothing: antialiased}.ui-ai *, .ui-ai *::before, .ui-ai *::after{box-sizing: border-box}:where(.ui-ai) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;text-align: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}.ui-ai button:focus-visible{outline: 2px solid var(--ui-ai-ring);outline-offset: 2px}.ui-ai ul, .ui-ai ol{margin: 0;padding: 0;list-style: none}.ui-ai svg{display: block;flex: none}.ui-ai__sr{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}.ui-ai__bar{display: flex;align-items: center;justify-content: space-between;gap: 12px;padding: 8px 8px 10px 14px}.ui-ai__heading{display: flex;align-items: center;gap: 8px;min-width: 0;font-size: 14px;font-weight: 600;color: var(--ui-ai-ink);white-space: nowrap}.ui-ai__crumb{flex: none;color: var(--ui-ai-muted);font-weight: 500}.ui-ai__slash{flex: none;color: var(--ui-ai-faint);font-weight: 400}.ui-ai__heading-title{min-width: 0;overflow: hidden;text-overflow: ellipsis}.ui-ai__tools{display: flex;flex: none;align-items: center;gap: 8px}.ui-ai__action-label{max-width: 200px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-ai__action{display: inline-flex;align-items: center;gap: 6px;height: 30px;padding: 0 12px 0 10px;border-radius: 999px;font-size: 13px;font-weight: 500;color: var(--ui-ai-ink);transition: background-color 160ms ease}.ui-ai__action:hover{background: var(--ui-ai-track)}.ui-ai__views{display: flex;flex: none;padding: 3px;border-radius: 12px;background: var(--ui-ai-track)}.ui-ai__view{display: inline-flex;align-items: center;gap: 6px;height: 28px;padding: 0 12px;border-radius: 9px;font-size: 13px;font-weight: 500;color: var(--ui-ai-muted);transition: background-color 200ms ease, color 200ms ease, box-shadow 200ms ease}.ui-ai__view:hover{color: var(--ui-ai-ink)}.ui-ai__view[aria-checked="true"]{background: var(--ui-ai-card);color: var(--ui-ai-ink);box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04)}.ui-ai__lanes{display: grid;grid-template-columns: repeat(3, minmax(0, 1fr));gap: 4px;align-items: start}.ui-ai__lane{min-width: 0}.ui-ai__lane-head{display: flex;align-items: center;gap: 8px;height: 32px;padding: 0 10px}.ui-ai__lane-spark{display: grid;color: var(--ui-ai-blue)}.ui-ai__lane[aria-label="Needs you"] .ui-ai__lane-spark{color: var(--ui-ai-amber)}.ui-ai__lane[aria-label="Done"] .ui-ai__lane-spark{color: var(--ui-ai-green)}.ui-ai__lane-name{overflow: hidden;font-size: 13px;font-weight: 600;color: var(--ui-ai-ink);white-space: nowrap;text-overflow: ellipsis}.ui-ai__count{display: grid;place-items: center;min-width: 20px;height: 20px;padding: 0 6px;border-radius: 999px;background: var(--ui-ai-card);box-shadow: 0 0 0 1px var(--ui-ai-line);font-size: 11.5px;font-weight: 500;color: var(--ui-ai-text);font-variant-numeric: tabular-nums}.ui-ai__cards{display: grid;gap: 4px}.ui-ai__empty{padding: 18px 0 20px;border-radius: 16px;box-shadow: inset 0 0 0 1px var(--ui-ai-track);font-size: 13px;text-align: center;color: var(--ui-ai-muted)}.ui-ai__card{position: relative;border-radius: 16px;background: var(--ui-ai-card);box-shadow: 0 0 0 1px var(--ui-ai-line), 0 1px 2px rgba(0, 0, 0, 0.04);transition: box-shadow 200ms ease}.ui-ai__card:hover, .ui-ai__card[data-open]{box-shadow: 0 0 0 1px #e0e0e0, 0 6px 16px -8px rgba(0, 0, 0, 0.14)}.ui-ai__card-main{display: grid;gap: 6px;width: 100%;padding: 14px 14px 12px;border-radius: 16px;container: ai-card / inline-size}.ui-ai__title-row{display: flex;align-items: flex-start;gap: 10px;min-width: 0}.ui-ai__spark{display: grid;flex: none;place-items: center;width: 16px;height: 20px;color: var(--ui-ai-blue);transition: color 300ms ease}.ui-ai__card[data-status="waiting"] .ui-ai__spark{color: var(--ui-ai-amber)}.ui-ai__card[data-status="failed"] .ui-ai__spark{color: var(--ui-ai-red)}.ui-ai__card[data-status="done"] .ui-ai__spark{color: var(--ui-ai-green)}.ui-ai__title{min-width: 0;overflow: hidden;font-size: 14px;font-weight: 600;line-height: 20px;color: var(--ui-ai-ink);text-align: start;white-space: nowrap;text-overflow: ellipsis;overflow-wrap: anywhere}.ui-ai__desc{display: -webkit-box;padding-left: 26px;overflow: hidden;font-size: 13px;line-height: 19px;color: var(--ui-ai-text);text-align: start;overflow-wrap: anywhere;-webkit-line-clamp: 2;-webkit-box-orient: vertical}.ui-ai__card[data-open] .ui-ai__title{white-space: normal}.ui-ai__card[data-open] .ui-ai__desc{-webkit-line-clamp: unset}.ui-ai__foot{display: flex;align-items: center;justify-content: space-between;gap: 10px;min-width: 0;margin-top: 6px;padding-left: 26px}.ui-ai__state{display: inline-flex;align-items: center;gap: 6px;min-width: 0;height: 24px;padding: 0 10px 0 8px;border-radius: 999px;background: var(--ui-ai-brand-bg);font-size: 12.5px;font-weight: 500;color: var(--ui-ai-brand-fg);white-space: nowrap;font-variant-numeric: tabular-nums}.ui-ai__state[data-status="waiting"]{background: var(--ui-ai-warn-bg);color: var(--ui-ai-warn-fg)}.ui-ai__state[data-status="done"]{background: var(--ui-ai-ok-bg);color: var(--ui-ai-ok-fg)}.ui-ai__state[data-status="failed"]{background: var(--ui-ai-danger-bg);color: var(--ui-ai-danger-fg)}.ui-ai__state-word{min-width: 2.6em;overflow: hidden;text-overflow: ellipsis;white-space: pre;margin-right: calc(0.28em - 6px)}.ui-ai__time{flex: none}.ui-ai__state-icon{display: grid;flex: none;place-items: center;width: 12px;height: 12px;color: currentColor;animation: ui-ai-pop 360ms var(--ui-ai-ease) both}.ui-ai__state-icon[data-status="running"] svg{animation: ui-ai-spin 900ms linear infinite}.ui-ai__meta{display: inline-flex;flex: none;align-items: center;font-size: 12.5px;color: var(--ui-ai-muted);font-variant-numeric: tabular-nums}.ui-ai__meta > span{display: inline-flex;align-items: center;gap: 5px;padding: 0 9px}.ui-ai__meta > span + span{border-left: 1px solid var(--ui-ai-line)}.ui-ai__meta > span:last-child{padding-right: 0}.ui-ai__fold{display: grid;grid-template-rows: 0fr;opacity: 0;transition: grid-template-rows 460ms var(--ui-ai-ease), opacity 240ms ease}.ui-ai__fold[data-open]{grid-template-rows: 1fr;opacity: 1;transition: grid-template-rows 460ms var(--ui-ai-ease), opacity 320ms ease 100ms}.ui-ai__clip{min-height: 0;overflow: hidden}.ui-ai__more{margin: 0 14px;padding: 12px 0 14px;border-top: 1px solid var(--ui-ai-line)}.ui-ai__agent{font-size: 12.5px;font-weight: 500;color: var(--ui-ai-muted)}.ui-ai__steps{position: relative;display: grid;gap: 6px;margin-top: 8px !important;padding-left: 14px !important}.ui-ai__steps li{position: relative;display: flex;justify-content: space-between;gap: 10px;font-size: 13px;line-height: 18px;color: var(--ui-ai-text)}.ui-ai__steps li::before{content: "";position: absolute;top: 6px;left: -14px;width: 6px;height: 6px;border-radius: 50%;background: var(--ui-ai-faint)}.ui-ai__steps li:not(:last-child)::after{content: "";position: absolute;top: 15px;bottom: -9px;left: -11.5px;width: 1px;background: var(--ui-ai-line)}.ui-ai__steps li[data-last]::before{background: var(--ui-ai-ink)}.ui-ai__steps li > span{min-width: 0;text-align: start;overflow-wrap: anywhere;white-space: pre-line}.ui-ai__steps time{flex: none;max-width: 45%;color: var(--ui-ai-muted);text-align: end}.ui-ai__actions{display: flex;justify-content: flex-end;gap: 6px;margin-top: 12px}.ui-ai__actions:empty{display: none}.ui-ai__btn{display: inline-flex;align-items: center;height: 32px;padding: 0 14px;border-radius: 10px;background: var(--ui-ai-card);box-shadow: 0 0 0 1px var(--ui-ai-line), 0 1px 2px rgba(0, 0, 0, 0.04);font-size: 13.5px;font-weight: 500;color: var(--ui-ai-ink);transition: background-color 160ms ease, opacity 160ms ease}.ui-ai__btn:hover{background: var(--ui-ai-chip)}.ui-ai__btn--primary{background: var(--ui-ai-ink);box-shadow: none;color: var(--ui-ai-card)}.ui-ai__btn--primary:hover{background: var(--ui-ai-ink);opacity: 0.88}.ui-ai[data-view="list"] .ui-ai__lanes{grid-template-columns: minmax(0, 1fr);gap: 8px}.ui-ai__lanes{animation: ui-ai-in 320ms ease both}@keyframes ui-ai-spin{to{transform: rotate(360deg)}}@keyframes ui-ai-pop{from{opacity: 0;transform: scale(0.6)}}@keyframes ui-ai-in{from{opacity: 0.4}}@container (max-width: 620px){.ui-ai__views{display: none}.ui-ai__action{justify-content: center;width: 30px;padding: 0;background: var(--ui-ai-track)}.ui-ai__action-label{display: none}.ui-ai .ui-ai__lanes{grid-template-columns: minmax(0, 1fr);gap: 8px}}@container ai-card (max-width: 300px){.ui-ai__desc, .ui-ai__foot{padding-left: 0}.ui-ai__state:not([data-status="failed"]):not([data-bare]) .ui-ai__state-word{display: none}}@container (max-width: 360px){.ui-ai__desc, .ui-ai__foot{padding-left: 0}.ui-ai__title{white-space: normal}.ui-ai__card:not([data-open]) .ui-ai__title{display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical}}@media (pointer: coarse){.ui-ai__view{height: 34px}.ui-ai__btn{height: 40px;padding: 0 18px}}@media (prefers-reduced-motion: reduce){.ui-ai *, .ui-ai *::before, .ui-ai *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-ai{--ui-ai-tray: #111113;--ui-ai-card: #1c1c1f;--ui-ai-line: #2a2a2e;--ui-ai-chip: #26262a;--ui-ai-track: #1f1f22;--ui-ai-ink: #ededed;--ui-ai-text: #a1a1a6;--ui-ai-muted: #7c7c82;--ui-ai-faint: #4a4a50;--ui-ai-blue: #5b9aff;--ui-ai-amber: #f5b638;--ui-ai-green: #3ecf8e;--ui-ai-red: #ff6b66;--ui-ai-brand-bg: #16243f;--ui-ai-brand-fg: #8ab4ff;--ui-ai-warn-bg: #3a2410;--ui-ai-warn-fg: #ffa057;--ui-ai-ok-bg: #12301f;--ui-ai-ok-fg: #3dd68c;--ui-ai-danger-bg: #3b1714;--ui-ai-danger-fg: #ff977d;--ui-ai-ring: rgba(237, 237, 237, 0.3)}:where(.dark, [data-theme="dark"]) .ui-ai__card:hover, :where(.dark, [data-theme="dark"]) .ui-ai__card[data-open]{box-shadow: 0 0 0 1px #34343a, 0 6px 18px -8px rgba(0, 0, 0, 0.6)}:where(.dark, [data-theme="dark"]) .ui-ai__view[aria-checked="true"]{box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.06)}:where(.dark, [data-theme="dark"]) .ui-ai__state-icon[data-status="failed"] path{stroke: var(--ui-ai-danger-bg)}`,
  D = 6e4,
  O = () => {
    let e = Date.now();
    return [
      {
        id: `migrate`,
        title: `Migrate users table`,
        description: `Split users into accounts and profiles on Postgres 17. The dry run on staging passed.`,
        agent: `Opus 5.5`,
        status: `waiting`,
        startedAt: e - 6 * D - 12e3,
        tools: 14,
        sources: 9,
        steps: [
          { label: `Read schema and 14 migrations`, time: `6m ago` },
          { label: `Wrote migration 0042_split_users`, time: `4m ago` },
          { label: `Dry run on staging – no errors`, time: `2m ago` },
          { label: `Wants to run it on production`, time: `1m ago` },
        ],
      },
      {
        id: `crm`,
        title: `Clean up CRM contacts`,
        description: `Matched 1,312 likely duplicates, then the merge hit the API rate limit.`,
        agent: `Haiku 5.5`,
        status: `failed`,
        elapsed: 161e3,
        tools: 6,
        sources: 2,
        steps: [
          { label: `Loaded 18,240 contacts`, time: `9m ago` },
          { label: `Matched 1,312 likely duplicates`, time: `8m ago` },
          { label: `Merge stopped – API rate limit (429)`, time: `7m ago` },
        ],
      },
      {
        id: `review`,
        title: `Review PR #482`,
        description: `Billing webhooks: reading the diff and the test run, writing comments.`,
        agent: `Sonnet 5.5`,
        status: `running`,
        startedAt: e - 3 * D - 4e4,
        tools: 21,
        sources: 12,
        steps: [
          { label: `Read 12 changed files`, time: `2m ago` },
          { label: `Ran the test suite – 214 passed`, time: `1m ago` },
          { label: `Writing review comments`, time: `now` },
        ],
      },
      {
        id: `notes`,
        title: `Release notes v2.4`,
        description: `Grouping 23 merged pull requests into features and fixes.`,
        agent: `Sonnet 5.5`,
        status: `running`,
        startedAt: e - 1 * D - 18e3,
        tools: 5,
        sources: 23,
        steps: [
          { label: `Collected 23 merged pull requests`, time: `1m ago` },
          { label: `Drafting the highlights`, time: `now` },
        ],
      },
      {
        id: `digest`,
        title: `Weekly metrics digest`,
        description: `Pulled numbers from three dashboards and posted the summary to #metrics.`,
        agent: `Haiku 5.5`,
        status: `done`,
        elapsed: 252e3,
        tools: 8,
        sources: 3,
        steps: [
          { label: `Pulled numbers from 3 dashboards`, time: `22m ago` },
          { label: `Posted to #metrics`, time: `18m ago` },
        ],
      },
    ];
  };
function k() {
  let e = (0, n.useRef)(null),
    [t, i] = (0, n.useState)(0),
    [a, o] = (0, n.useState)(O),
    s = (0, n.useRef)(!1),
    c = (0, n.useRef)([]),
    l = (e, t, n) =>
      o((r) =>
        r.map((r) =>
          r.id === e
            ? { ...r, ...t, steps: n ? [...(r.steps ?? []), { label: n, time: `now` }] : r.steps }
            : r,
        ),
      ),
    u = (e, t) => c.current.push(window.setTimeout(e, t)),
    d = (e) => {
      (l(
        e.id,
        { status: `running`, startedAt: Date.now() - 6 * D },
        `Approved by you – running on production`,
      ),
        u(() => l(e.id, { status: `done`, elapsed: 408e3, tools: 17 }, `Migrated 48,210 rows`), 4200));
    },
    f = (e) => {
      (l(e.id, { status: `running`, startedAt: Date.now(), elapsed: void 0 }, `Retrying with a slower pace`),
        u(() => l(e.id, { status: `done`, elapsed: 4200 }, `Merged 1,312 duplicates`), 4200));
    },
    p = (e) => l(e.id, { status: `failed`, elapsed: 6 * D }, `Rejected by you`);
  ((0, n.useEffect)(() => () => c.current.forEach((e) => window.clearTimeout(e)), []),
    (0, n.useEffect)(() => {
      let t = (t) => () => e.current?.querySelector(t)?.click(),
        n = [
          [700, t(`.ui-ai__card[data-status='waiting'] .ui-ai__card-main`)],
          [2600, t(`.ui-ai__card[data-open] .ui-ai__btn--primary`)],
          [1400, t(`.ui-ai__card[data-open] .ui-ai__card-main`)],
          [
            7e3,
            () => {
              (c.current.forEach((e) => window.clearTimeout(e)), (c.current = []), o(O()), i((e) => e + 1));
            },
          ],
        ],
        r = 0,
        a = 0,
        l = () => {
          s.current ||
            r >= n.length ||
            (a = window.setTimeout(() => {
              s.current || (n[r][1](), r++, l());
            }, n[r][0]));
        };
      return (l(), () => window.clearTimeout(a));
    }, [t]));
  let m = () => (s.current = !0);
  return (0, r.jsx)(`div`, {
    ref: e,
    className: `aic-demo`,
    onPointerEnter: m,
    onPointerDownCapture: m,
    onKeyDownCapture: m,
    onFocusCapture: m,
    children: (0, r.jsx)(E, { tasks: a, onApprove: d, onReject: p, onRetry: f, onOpen: () => {} }, t),
  });
}
