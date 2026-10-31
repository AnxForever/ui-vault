import { t as e } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
/* empty css             */ var n = e(),
  r = t(),
  i = (e) => new Date(e.getFullYear(), e.getMonth(), e.getDate()),
  a = (e, t) => new Date(e.getFullYear(), e.getMonth(), e.getDate() + t),
  o = (e, t) => new Date(e.getFullYear(), e.getMonth() + t, 1),
  s = (e) => new Date(e.getFullYear(), e.getMonth(), 1),
  c = (e) => new Date(e.getFullYear(), e.getMonth() + 1, 0),
  l = (e, t) => !!e && !!t && e.getTime() === t.getTime(),
  u = (e) => Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()),
  ee = (e, t) => Math.round((u(t) - u(e)) / 864e5) + 1,
  d = (e, t, n) => (t && e < t ? t : n && e > n ? n : e),
  f = (e, t) => (e <= t ? { start: e, end: t } : { start: t, end: e }),
  p = (e) => e instanceof Date && !Number.isNaN(e.getTime()),
  te = (e, t) => (e && p(e.start) && p(e.end) ? f(i(e.start), i(e.end)) : t),
  ne = new Intl.NumberFormat(`en-US`),
  m = new Intl.DateTimeFormat(`en-US`, { month: `short`, day: `numeric` }),
  h = new Intl.DateTimeFormat(`en-US`, { month: `short`, day: `numeric`, year: `numeric` }),
  re = new Intl.DateTimeFormat(`en-US`, { month: `long`, year: `numeric` }),
  ie = new Intl.DateTimeFormat(`en-US`, { weekday: `long`, month: `long`, day: `numeric`, year: `numeric` });
function g({ start: e, end: t }) {
  return !p(e) || !p(t)
    ? `–`
    : l(e, t)
      ? h.format(e)
      : `${(e.getFullYear() === t.getFullYear() ? m : h).format(e)} – ${h.format(t)}`;
}
function _(e, t) {
  if (t === `previous`) {
    let t = ee(e.start, e.end);
    return { start: a(e.start, -t), end: a(e.start, -1) };
  }
  if (t === `year`) {
    let t = (e) =>
      new Date(
        e.getFullYear() - 1,
        e.getMonth(),
        Math.min(e.getDate(), c(new Date(e.getFullYear() - 1, e.getMonth(), 1)).getDate()),
      );
    return { start: t(e.start), end: t(e.end) };
  }
  return null;
}
var v = (e) => new Date(e.getFullYear(), Math.floor(e.getMonth() / 3) * 3, 1),
  ae = [
    { id: `today`, label: `Today`, range: (e) => ({ start: e, end: e }) },
    { id: `yesterday`, label: `Yesterday`, range: (e) => ({ start: a(e, -1), end: a(e, -1) }) },
    { id: `7d`, label: `Last 7 days`, range: (e) => ({ start: a(e, -6), end: e }) },
    { id: `30d`, label: `Last 30 days`, range: (e) => ({ start: a(e, -29), end: e }) },
    { id: `90d`, label: `Last 90 days`, range: (e) => ({ start: a(e, -89), end: e }) },
    { id: `month`, label: `This month`, range: (e) => ({ start: s(e), end: e }) },
    { id: `last-month`, label: `Last month`, range: (e) => ({ start: o(e, -1), end: c(o(e, -1)) }) },
    { id: `quarter`, label: `This quarter`, range: (e) => ({ start: v(e), end: e }) },
    { id: `ytd`, label: `Year to date`, range: (e) => ({ start: new Date(e.getFullYear(), 0, 1), end: e }) },
  ],
  oe = [
    { id: `off`, label: `Off` },
    { id: `previous`, label: `Previous period` },
    { id: `year`, label: `Previous year` },
  ],
  y = ({ d: e, className: t }) =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      className: [`ui-drp__glyph`, t].filter(Boolean).join(` `),
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, { d: e }),
    }),
  b = {
    calendar: `M7 3v3M17 3v3M4.5 9.5h15M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z`,
    chevron: `M8 10l4 4 4-4`,
    left: `M14.5 6l-6 6 6 6`,
    right: `M9.5 6l6 6-6 6`,
    arrow: `M5 12h14M13 6l6 6-6 6`,
  };
function se(e, t, n) {
  if (!e || !t) return;
  let r = e.querySelector(n);
  if (!r || !r.offsetWidth) {
    t.style.opacity = `0`;
    return;
  }
  let i = !t.dataset.ready;
  (i && (t.style.transition = `none`),
    (t.style.opacity = `1`),
    (t.style.width = `${r.offsetWidth}px`),
    (t.style.height = `${r.offsetHeight}px`),
    (t.style.transform = `translate(${r.offsetLeft}px, ${r.offsetTop}px)`),
    i && ((t.dataset.ready = `1`), t.offsetWidth, (t.style.transition = ``)));
}
function ce(e, t) {
  let n = (s(e).getDay() - t + 7) % 7,
    r = c(e).getDate(),
    i = [];
  for (let e = 0; e < n; e++) i.push(null);
  for (let t = 1; t <= r; t++) i.push(new Date(e.getFullYear(), e.getMonth(), t));
  for (; i.length % 7;) i.push(null);
  let a = [];
  for (let e = 0; e < i.length; e += 7) a.push(i.slice(e, e + 7));
  return a;
}
function le({
  value: e,
  defaultValue: t,
  onChange: s,
  presets: u = ae,
  compare: m = !0,
  defaultCompare: v = `previous`,
  weekStartsOn: le = 1,
  max: x,
  min: S,
  defaultOpen: de = !1,
  today: C,
  className: fe,
}) {
  let w = le === 0 ? 0 : 1,
    T = (0, n.useMemo)(() => i(p(C) ? C : new Date()), [C?.getTime()]),
    E = p(x) ? i(x) : T,
    D = p(S) && i(S) <= E ? i(S) : void 0,
    [pe, me] = (0, n.useState)(() => {
      let e = d(T, D, E);
      return te(t, { start: d(a(e, -29), D, E), end: e });
    }),
    O = e ? te(e, pe) : pe,
    [k, he] = (0, n.useState)(m && oe.some((e) => e.id === v) ? v : `off`),
    ge = m && k !== `off` ? _(O, k) : null,
    [A, j] = (0, n.useState)(de),
    [M, N] = (0, n.useState)(O),
    [P, F] = (0, n.useState)(null),
    [I, _e] = (0, n.useState)(k),
    [L, R] = (0, n.useState)(() => o(O.end, -1)),
    [ve, ye] = (0, n.useState)(1),
    [z, B] = (0, n.useState)(() => d(O.end, D, E)),
    V = (0, n.useRef)(null),
    be = (0, n.useRef)(null),
    xe = (0, n.useRef)(null),
    H = (0, n.useRef)(null),
    U = (0, n.useRef)(!1),
    Se = (0, n.useId)(),
    Ce = (0, n.useRef)(null),
    we = (0, n.useRef)(null),
    W = (0, n.useRef)(null),
    Te = (0, n.useRef)(null),
    Ee = (0, n.useRef)(null),
    De = (0, n.useRef)(null),
    G = (0, n.useRef)(null),
    Oe = () => {
      (N(O), _e(k), R(o(O.end, -1)), B(d(O.end, D, E)), F(null), j(!0));
    },
    K = (e = !0) => {
      (j(!1), e && H.current?.focus());
    };
  ((0, n.useEffect)(() => {
    if (!A) return;
    let e = (e) => {
      V.current && !V.current.contains(e.target) && j(!1);
    };
    return (
      document.addEventListener(`pointerdown`, e),
      () => document.removeEventListener(`pointerdown`, e)
    );
  }, [A]),
    (0, n.useLayoutEffect)(() => {
      A && U.current && xe.current?.querySelector(`[data-day="${z.getTime()}"]`)?.focus();
    }, [z, L, A]));
  let q = M.end ? f(M.start, M.end) : P ? f(M.start, P) : null,
    J = q ?? { start: M.start, end: M.start },
    Y = m && q ? _(q, I) : null,
    X = M.end
      ? u.findIndex((e) => {
          let t = e.range(T);
          return p(t?.start) && p(t?.end) && l(i(t.start), J.start) && l(i(t.end), J.end);
        })
      : -1,
    ke = u[X],
    Ae = (e) => {
      if (M.end) N({ start: e, end: null });
      else {
        let t = f(M.start, e);
        N(t);
      }
      (F(null), B(e));
    },
    je = (e) => {
      let t = e.range(T);
      if (!p(t?.start) || !p(t?.end)) return;
      let n = { start: d(i(t.start), D, E), end: d(i(t.end), D, E) };
      (N(n), F(null), B(n.end));
      let r = o(n.end, -1);
      r.getTime() !== L.getTime() && (ye(r > L ? 1 : -1), R(r));
    },
    Z = (e) => {
      (ye(e > 0 ? 1 : -1), R((t) => o(t, e)));
    },
    Me = () => {
      let t = M.end ? f(M.start, M.end) : { start: M.start, end: M.start };
      (e || me(t), he(I), s?.(t, m ? _(t, I) : null, I), K());
    },
    Ne = (e) => e > E || (!!D && e < D),
    Pe = (e) => {
      let t = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 },
        n = null;
      if (
        (e.key in t
          ? (n = a(z, t[e.key]))
          : e.key === `PageUp`
            ? (n = new Date(z.getFullYear(), z.getMonth() - 1, Math.min(z.getDate(), 28)))
            : e.key === `PageDown`
              ? (n = new Date(z.getFullYear(), z.getMonth() + 1, Math.min(z.getDate(), 28)))
              : e.key === `Home`
                ? (n = a(z, -((z.getDay() - w + 7) % 7)))
                : e.key === `End` && (n = a(z, 6 - ((z.getDay() - w + 7) % 7))),
        !n)
      )
        return;
      (e.preventDefault(), (U.current = !0), (n = d(n, D, E)), B(n), M.end || F(n));
      let r = c(o(L, 1));
      n < L ? Z(-1) : n > r && Z(1);
    },
    Fe = Array.from({ length: 7 }, (e, t) =>
      new Intl.DateTimeFormat(`en-US`, { weekday: `short` }).format(new Date(2026, 0, 4 + w + t)).slice(0, 2),
    ),
    Ie = [L, o(L, 1)],
    Le = Math.max(...Ie.map((e) => ce(e, w).length)),
    Q = ee(J.start, J.end),
    Re = (e, t) => !!t && e >= t.start && e <= t.end;
  (Y && (G.current = Y),
    (0, n.useLayoutEffect)(() => {
      (se(W.current, Te.current, `[aria-selected="true"], [data-active]`),
        se(Ee.current, De.current, `[aria-checked="true"]`));
    }));
  let $ = (0, n.useRef)(!1);
  return (
    (0, n.useEffect)(() => {
      if (!A) {
        $.current = !1;
        return;
      }
      let e = W.current,
        t = e?.querySelector(`[aria-selected="true"]`);
      if (!e || !t || e.scrollWidth <= e.clientWidth) return;
      let n = Math.max(0, t.offsetLeft - (e.clientWidth - t.offsetWidth) / 2);
      (e.scrollTo({ left: n, behavior: $.current ? `smooth` : `auto` }), ($.current = !0));
    }, [A, X]),
    (0, n.useLayoutEffect)(() => {
      let e = V.current?.querySelector(`[role="dialog"]`);
      if (!A || !e) return;
      e.style.left = ``;
      let t = e.getBoundingClientRect(),
        n = t.right - (document.documentElement.clientWidth - 8);
      n > 0 && (e.style.left = `${-Math.max(0, Math.min(n, t.left - 8))}px`);
    }, [A]),
    (0, n.useLayoutEffect)(() => {
      let e = be.current,
        t = Ce.current;
      if (!A || !e || !t) return;
      let n = () => (e.style.height = `${t.offsetHeight + 8}px`);
      n();
      let r = new ResizeObserver(n);
      return (r.observe(t), () => r.disconnect());
    }, [A]),
    (0, n.useLayoutEffect)(() => {
      let e = H.current,
        t = we.current;
      if (!e || !t) return;
      let n = () => (e.style.width = `${t.offsetWidth + 20}px`);
      n();
      let r = new ResizeObserver(n);
      return (r.observe(t), () => r.disconnect());
    }, []),
    (0, r.jsxs)(`div`, {
      ref: V,
      className: [`ui-drp`, fe].filter(Boolean).join(` `),
      "data-open": A || void 0,
      children: [
        (0, r.jsx)(`style`, { href: `ui-date-range-picker`, precedence: `default`, children: ue }),
        (0, r.jsx)(`button`, {
          ref: H,
          type: `button`,
          className: `ui-drp__trigger`,
          "aria-haspopup": `dialog`,
          "aria-expanded": A,
          "aria-controls": `${Se}-panel`,
          onClick: () => (A ? K() : Oe()),
          children: (0, r.jsxs)(`span`, {
            ref: we,
            className: `ui-drp__trigger-inner`,
            children: [
              (0, r.jsx)(y, { d: b.calendar }),
              (0, r.jsxs)(
                `span`,
                {
                  className: `ui-drp__trigger-text`,
                  children: [
                    (0, r.jsx)(`span`, { className: `ui-drp__trigger-range`, children: g(O) }),
                    ge &&
                      (0, r.jsxs)(`span`, {
                        className: `ui-drp__trigger-compare`,
                        children: [`vs. `, g(ge)],
                      }),
                  ],
                },
                `${g(O)}-${k}`,
              ),
              (0, r.jsx)(y, { d: b.chevron, className: `ui-drp__chevron` }),
            ],
          }),
        }),
        A &&
          (0, r.jsx)(`div`, {
            ref: be,
            id: `${Se}-panel`,
            role: `dialog`,
            "aria-label": `Choose a date range`,
            className: `ui-drp__panel`,
            onKeyDown: (e) => {
              e.key === `Escape` && (e.stopPropagation(), K());
            },
            children: (0, r.jsxs)(`div`, {
              ref: Ce,
              className: `ui-drp__panel-inner`,
              children: [
                (0, r.jsxs)(`div`, {
                  className: `ui-drp__body`,
                  children: [
                    (0, r.jsxs)(`div`, {
                      ref: W,
                      className: `ui-drp__presets`,
                      role: `listbox`,
                      "aria-label": `Presets`,
                      children: [
                        (0, r.jsx)(`span`, { ref: Te, className: `ui-drp__pill`, "aria-hidden": `true` }),
                        u.map((e, t) =>
                          (0, r.jsx)(
                            `button`,
                            {
                              type: `button`,
                              role: `option`,
                              title: e.label,
                              dir: `auto`,
                              "aria-selected": X === t,
                              className: `ui-drp__preset`,
                              onClick: () => je(e),
                              children: (0, r.jsx)(`span`, {
                                className: `ui-drp__preset-label`,
                                children: e.label,
                              }),
                            },
                            `${e.id}-${t}`,
                          ),
                        ),
                        (0, r.jsx)(`span`, {
                          className: `ui-drp__preset ui-drp__preset-custom`,
                          "aria-hidden": !!ke,
                          "data-active": !ke || void 0,
                          children: `Custom`,
                        }),
                      ],
                    }),
                    (0, r.jsxs)(`div`, {
                      className: `ui-drp__cal`,
                      children: [
                        (0, r.jsxs)(`div`, {
                          className: `ui-drp__nav`,
                          children: [
                            (0, r.jsx)(`button`, {
                              type: `button`,
                              className: `ui-drp__icon-btn`,
                              "aria-label": `Previous month`,
                              onClick: () => Z(-1),
                              children: (0, r.jsx)(y, { d: b.left }),
                            }),
                            (0, r.jsx)(`button`, {
                              type: `button`,
                              className: `ui-drp__icon-btn`,
                              "aria-label": `Next month`,
                              onClick: () => Z(1),
                              children: (0, r.jsx)(y, { d: b.right }),
                            }),
                          ],
                        }),
                        (0, r.jsx)(
                          `div`,
                          {
                            ref: xe,
                            className: `ui-drp__months`,
                            "data-dir": ve,
                            onKeyDown: Pe,
                            onPointerLeave: () => !M.end && F(null),
                            onPointerDown: () => (U.current = !1),
                            children: Ie.map((e, t) =>
                              (0, r.jsxs)(
                                `div`,
                                {
                                  className: `ui-drp__month`,
                                  "data-second": t === 1 || void 0,
                                  children: [
                                    (0, r.jsx)(`div`, {
                                      className: `ui-drp__month-name`,
                                      "aria-live": t === 0 ? `polite` : void 0,
                                      children: re.format(e),
                                    }),
                                    (0, r.jsxs)(`div`, {
                                      role: `grid`,
                                      "aria-label": re.format(e),
                                      className: `ui-drp__grid`,
                                      children: [
                                        (0, r.jsx)(`div`, {
                                          role: `row`,
                                          className: `ui-drp__weekdays`,
                                          children: Fe.map((e) =>
                                            (0, r.jsx)(
                                              `span`,
                                              {
                                                role: `columnheader`,
                                                className: `ui-drp__weekday`,
                                                children: e,
                                              },
                                              e,
                                            ),
                                          ),
                                        }),
                                        Array.from(
                                          { length: Le },
                                          (t, n) => ce(e, w)[n] ?? Array(7).fill(null),
                                        ).map((e, t) =>
                                          (0, r.jsx)(
                                            `div`,
                                            {
                                              role: `row`,
                                              className: `ui-drp__week`,
                                              children: e.map((e, t) => {
                                                if (!e)
                                                  return (0, r.jsx)(
                                                    `span`,
                                                    {
                                                      className: `ui-drp__day ui-drp__day-empty`,
                                                      role: `gridcell`,
                                                    },
                                                    t,
                                                  );
                                                let n = l(e, J.start),
                                                  i = l(e, J.end),
                                                  a = Re(e, q),
                                                  o = !a && Re(e, Y),
                                                  s = Ne(e);
                                                return (0, r.jsx)(
                                                  `span`,
                                                  {
                                                    role: `gridcell`,
                                                    "aria-selected": a || n || void 0,
                                                    className: `ui-drp__day`,
                                                    "data-range": a || void 0,
                                                    "data-start": n || void 0,
                                                    "data-end": i || void 0,
                                                    "data-preview": (!M.end && a) || void 0,
                                                    "data-compare": o || void 0,
                                                    "data-compare-start": (Y && l(e, Y.start)) || void 0,
                                                    "data-compare-end": (Y && l(e, Y.end)) || void 0,
                                                    "data-row-start": t === 0 || e.getDate() === 1 || void 0,
                                                    "data-row-end": t === 6 || l(e, c(e)) || void 0,
                                                    children: (0, r.jsx)(`button`, {
                                                      type: `button`,
                                                      "data-day": e.getTime(),
                                                      tabIndex: l(e, z) ? 0 : -1,
                                                      disabled: s,
                                                      "aria-label": ie.format(e),
                                                      "aria-current": l(e, T) ? `date` : void 0,
                                                      onClick: () => Ae(e),
                                                      onPointerEnter: () => !M.end && F(e),
                                                      onFocus: () => B(e),
                                                      children: e.getDate(),
                                                    }),
                                                  },
                                                  t,
                                                );
                                              }),
                                            },
                                            t,
                                          ),
                                        ),
                                      ],
                                    }),
                                  ],
                                },
                                e.getTime(),
                              ),
                            ),
                          },
                          L.getTime(),
                        ),
                      ],
                    }),
                  ],
                }),
                (0, r.jsxs)(`div`, {
                  className: `ui-drp__foot`,
                  children: [
                    (0, r.jsxs)(`div`, {
                      className: `ui-drp__summary`,
                      children: [
                        (0, r.jsxs)(`div`, {
                          className: `ui-drp__summary-range`,
                          children: [
                            (0, r.jsx)(
                              `span`,
                              { children: M.end || P ? g(J) : `${h.format(M.start)} – pick an end` },
                              `${J.start.getTime()}-${J.end.getTime()}`,
                            ),
                            (0, r.jsxs)(
                              `span`,
                              {
                                className: `ui-drp__count`,
                                children: [ne.format(Q), ` `, Q === 1 ? `day` : `days`],
                              },
                              Q,
                            ),
                          ],
                        }),
                        m &&
                          (0, r.jsxs)(`div`, {
                            className: `ui-drp__compare`,
                            children: [
                              (0, r.jsx)(`span`, { className: `ui-drp__compare-label`, children: `Compare` }),
                              (0, r.jsxs)(`div`, {
                                ref: Ee,
                                className: `ui-drp__segments`,
                                role: `radiogroup`,
                                "aria-label": `Compare to`,
                                children: [
                                  (0, r.jsx)(`span`, {
                                    ref: De,
                                    className: `ui-drp__pill`,
                                    "aria-hidden": `true`,
                                  }),
                                  oe.map((e) =>
                                    (0, r.jsx)(
                                      `button`,
                                      {
                                        type: `button`,
                                        role: `radio`,
                                        "aria-checked": I === e.id,
                                        className: `ui-drp__segment`,
                                        onClick: () => _e(e.id),
                                        children: e.label,
                                      },
                                      e.id,
                                    ),
                                  ),
                                ],
                              }),
                            ],
                          }),
                        m &&
                          (0, r.jsx)(`div`, {
                            className: `ui-drp__fold`,
                            "data-open": !!Y || void 0,
                            children: (0, r.jsx)(`div`, {
                              children:
                                G.current &&
                                (0, r.jsxs)(
                                  `div`,
                                  { className: `ui-drp__compare-range`, children: [`vs. `, g(G.current)] },
                                  `${G.current.start.getTime()}-${G.current.end.getTime()}`,
                                ),
                            }),
                          }),
                      ],
                    }),
                    (0, r.jsxs)(`div`, {
                      className: `ui-drp__buttons`,
                      children: [
                        (0, r.jsx)(`button`, {
                          type: `button`,
                          className: `ui-drp__btn`,
                          onClick: () => K(),
                          children: `Cancel`,
                        }),
                        (0, r.jsx)(`button`, {
                          type: `button`,
                          className: `ui-drp__btn ui-drp__btn-primary`,
                          disabled: !M.end,
                          onClick: Me,
                          children: `Apply`,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
      ],
    })
  );
}
var ue = `.ui-drp{--ui-drp-tray: #f0f0f0;--ui-drp-card: #ffffff;--ui-drp-line: #ececec;--ui-drp-ink: #171717;--ui-drp-text: #404040;--ui-drp-muted: #8f8f8f;--ui-drp-faint: #c4c4c7;--ui-drp-hover: #f2f2f3;--ui-drp-active: #ebebed;--ui-drp-band: rgba(47, 107, 255, 0.1);--ui-drp-band-preview: rgba(47, 107, 255, 0.06);--ui-drp-accent: #2f6bff;--ui-drp-on-accent: #ffffff;--ui-drp-compare: #ececee;--ui-drp-compare-edge: #b9b9be;--ui-drp-focus: rgba(23, 23, 23, 0.22);--ui-drp-shadow: 0 0 0 1px rgba(0, 0, 0, 0.06), 0 18px 40px -12px rgba(0, 0, 0, 0.18), 0 4px 12px -4px rgba(0, 0, 0, 0.06);--ui-drp-ease: cubic-bezier(0.22, 1, 0.36, 1);position: relative;display: inline-block;max-width: 100%;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13px;line-height: 1.4;color: var(--ui-drp-text);-webkit-font-smoothing: antialiased}.ui-drp *, .ui-drp *::before, .ui-drp *::after{box-sizing: border-box}:where(.ui-drp) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer}:where(.ui-drp) svg{display: block;flex: none}.ui-drp button:focus-visible{outline: 2px solid var(--ui-drp-focus);outline-offset: 2px}.ui-drp__glyph{width: 16px;height: 16px;fill: none;stroke: currentColor;stroke-width: 1.8;stroke-linecap: round;stroke-linejoin: round}.ui-drp__trigger{display: inline-flex;align-items: center;overflow: hidden;max-width: 100%;min-height: 38px;padding: 5px 9px 5px 11px;border-radius: 11px;background: var(--ui-drp-card);box-shadow: 0 0 0 1px var(--ui-drp-line), 0 1px 2px rgba(0, 0, 0, 0.04);text-align: left;transition: box-shadow 160ms ease, width 320ms var(--ui-drp-ease)}.ui-drp__trigger-inner{display: inline-flex;flex: none;align-items: center;gap: 10px;max-width: calc(100vw - 56px)}.ui-drp__trigger:hover{box-shadow: 0 0 0 1px var(--ui-drp-faint), 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-drp__trigger > .ui-drp__glyph{color: var(--ui-drp-muted)}.ui-drp__trigger-text{display: grid;min-width: 0;animation: ui-drp-in 280ms var(--ui-drp-ease) both}.ui-drp__trigger-range{overflow: hidden;color: var(--ui-drp-ink);font-weight: 500;white-space: nowrap;text-overflow: ellipsis}.ui-drp__trigger-compare{overflow: hidden;font-size: 12px;color: var(--ui-drp-muted);white-space: nowrap;text-overflow: ellipsis}.ui-drp__chevron{color: var(--ui-drp-muted);transition: transform 260ms var(--ui-drp-ease)}.ui-drp[data-open] .ui-drp__chevron{transform: rotate(180deg)}.ui-drp__panel{position: absolute;z-index: 30;top: calc(100% + 8px);left: 0;container-type: inline-size;width: var(--ui-drp-panel-width, min(652px, calc(100vw - 32px)));padding: 4px;border-radius: 20px;background: var(--ui-drp-tray);box-shadow: var(--ui-drp-shadow);overflow: hidden;transform-origin: top left;transition: height 320ms var(--ui-drp-ease);animation: ui-drp-open 260ms var(--ui-drp-ease) both}.ui-drp__pill{position: absolute;top: 0;left: 0;z-index: 0;border-radius: 8px;background: var(--ui-drp-active);opacity: 0;pointer-events: none;transition: transform 320ms var(--ui-drp-ease), width 320ms var(--ui-drp-ease), height 320ms var(--ui-drp-ease), opacity 200ms ease}.ui-drp__body{display: grid;grid-template-columns: 136px 1fr;border-radius: 16px;background: var(--ui-drp-card);box-shadow: 0 0 0 1px var(--ui-drp-line)}.ui-drp__presets{position: relative;display: flex;flex-direction: column;gap: 1px;padding: 6px;border-right: 1px solid var(--ui-drp-line)}.ui-drp__preset{display: flex;align-items: center;height: 30px;padding: 0 10px;border-radius: 8px;text-align: left;white-space: nowrap;color: var(--ui-drp-text);position: relative;z-index: 1;transition: background-color 140ms ease, color 200ms ease}.ui-drp__preset{max-width: 100%;min-width: 0}.ui-drp__preset-label{min-width: 0;overflow: hidden;text-overflow: ellipsis}button.ui-drp__preset:hover:not([aria-selected="true"]){background: var(--ui-drp-hover);color: var(--ui-drp-ink)}.ui-drp__preset[aria-selected="true"], .ui-drp__preset-custom[data-active]{color: var(--ui-drp-ink)}.ui-drp__preset-custom{margin-top: auto;color: var(--ui-drp-muted);cursor: default}.ui-drp__cal{position: relative;padding: 12px 14px 10px;overflow: hidden}.ui-drp__nav{position: absolute;top: 8px;left: 10px;right: 10px;z-index: 1;display: flex;justify-content: space-between;pointer-events: none}.ui-drp__nav > *{pointer-events: auto}.ui-drp__icon-btn{display: grid;place-items: center;width: 28px;height: 28px;border-radius: 8px;color: var(--ui-drp-muted);transition: background-color 140ms ease, color 140ms ease}.ui-drp__icon-btn:hover{background: var(--ui-drp-hover);color: var(--ui-drp-ink)}.ui-drp__months{display: grid;grid-template-columns: repeat(2, auto);justify-content: center;gap: 24px;animation: ui-drp-slide 320ms var(--ui-drp-ease) both}.ui-drp__months[data-dir="-1"]{animation-name: ui-drp-slide-back}.ui-drp__month-name{height: 22px;margin-bottom: 6px;font-weight: 600;text-align: center;color: var(--ui-drp-ink)}.ui-drp__grid{display: grid;gap: 2px}.ui-drp__weekdays, .ui-drp__week{display: grid;grid-template-columns: repeat(7, 32px)}.ui-drp__weekday{height: 26px;font-size: 11px;font-weight: 500;line-height: 26px;text-align: center;color: var(--ui-drp-muted)}.ui-drp__day{position: relative;display: grid;height: 32px}.ui-drp__day::before{content: "";position: absolute;inset: 2px 0;transition: background-color 220ms ease, border-radius 220ms var(--ui-drp-ease), left 220ms var(--ui-drp-ease), right 220ms var(--ui-drp-ease)}.ui-drp__day[data-range]::before{background: var(--ui-drp-band)}.ui-drp__day[data-preview]::before{background: var(--ui-drp-band-preview)}.ui-drp__day[data-compare]::before{background: var(--ui-drp-compare)}.ui-drp__day[data-start]::before, .ui-drp__day[data-compare-start]::before, .ui-drp__day[data-row-start]::before{left: 2px;border-top-left-radius: 9px;border-bottom-left-radius: 9px}.ui-drp__day[data-end]::before, .ui-drp__day[data-compare-end]::before, .ui-drp__day[data-row-end]::before{right: 2px;border-top-right-radius: 9px;border-bottom-right-radius: 9px}.ui-drp__day button{position: relative;border-radius: 9px;font-size: 12.5px;font-variant-numeric: tabular-nums;color: var(--ui-drp-ink);transition: background-color 200ms ease, color 200ms ease, box-shadow 200ms ease, transform 160ms var(--ui-drp-ease)}.ui-drp__day button:hover:not(:disabled){background: var(--ui-drp-hover)}.ui-drp__day[data-range] button:hover:not(:disabled){background: transparent;box-shadow: inset 0 0 0 1px var(--ui-drp-accent)}.ui-drp__day button:active:not(:disabled){transform: scale(0.94)}.ui-drp__day button:disabled{color: var(--ui-drp-faint);cursor: default}.ui-drp__day button[aria-current="date"]::after{content: "";position: absolute;left: 50%;bottom: 4px;width: 3px;height: 3px;margin-left: -1.5px;border-radius: 50%;background: currentColor;opacity: 0.55}.ui-drp__day[data-start] button, .ui-drp__day[data-end] button{background: var(--ui-drp-accent) !important;color: var(--ui-drp-on-accent);font-weight: 600;box-shadow: none !important;animation: ui-drp-pick 380ms cubic-bezier(0.34, 1.56, 0.64, 1)}.ui-drp__day[data-preview][data-end] button{animation: none}.ui-drp__day[data-compare-start] button, .ui-drp__day[data-compare-end] button{box-shadow: inset 0 0 0 1px var(--ui-drp-compare-edge)}.ui-drp__day-empty::before{display: none}.ui-drp__foot{display: flex;align-items: flex-end;justify-content: space-between;gap: 14px;padding: 10px 10px 6px 10px}.ui-drp__summary{display: grid;gap: 6px;min-width: 0}.ui-drp__summary-range{display: flex;align-items: baseline;gap: 8px;color: var(--ui-drp-ink);font-weight: 500}.ui-drp__summary-range > span:first-child{animation: ui-drp-in 280ms var(--ui-drp-ease) both}.ui-drp__count{font-size: 12px;font-weight: 400;font-variant-numeric: tabular-nums;color: var(--ui-drp-muted);animation: ui-drp-in 280ms var(--ui-drp-ease) both}.ui-drp__compare{display: flex;align-items: center;gap: 8px}.ui-drp__compare-label{font-size: 12px;color: var(--ui-drp-muted)}.ui-drp__segments{position: relative;display: inline-flex;padding: 2px;border-radius: 9px;background: var(--ui-drp-card);box-shadow: 0 0 0 1px var(--ui-drp-line)}.ui-drp__segment{position: relative;z-index: 1;height: 24px;padding: 0 8px;border-radius: 7px;font-size: 12px;white-space: nowrap;color: var(--ui-drp-muted);transition: color 200ms ease}.ui-drp__segment:hover{color: var(--ui-drp-ink)}.ui-drp__segment[aria-checked="true"]{color: var(--ui-drp-ink)}.ui-drp__segments .ui-drp__pill{border-radius: 7px}.ui-drp__fold{display: grid;grid-template-rows: 0fr;opacity: 0;margin-top: -6px;transition: grid-template-rows 300ms var(--ui-drp-ease), opacity 200ms ease, margin-top 300ms var(--ui-drp-ease)}.ui-drp__fold[data-open]{grid-template-rows: 1fr;opacity: 1;margin-top: 0}.ui-drp__fold > div{min-height: 0;overflow: hidden}.ui-drp__compare-range{display: flex;align-items: center;gap: 6px;font-size: 12px;color: var(--ui-drp-muted);animation: ui-drp-in 220ms var(--ui-drp-ease) both}.ui-drp__compare-range::before{content: "";width: 14px;height: 8px;border-radius: 3px;background: var(--ui-drp-compare);box-shadow: inset 0 0 0 1px var(--ui-drp-compare-edge)}.ui-drp__buttons{display: flex;flex: none;gap: 6px}.ui-drp__btn{height: 32px;padding: 0 13px;border-radius: 9px;font-weight: 500;color: var(--ui-drp-text);transition: background-color 140ms ease, opacity 140ms ease, transform 140ms ease}.ui-drp__btn:not(.ui-drp__btn-primary):hover{background: var(--ui-drp-active)}.ui-drp__btn-primary{background: var(--ui-drp-ink);color: var(--ui-drp-card)}.ui-drp__btn-primary:hover{opacity: 0.88}.ui-drp__btn-primary:active{transform: scale(0.97)}.ui-drp__btn-primary:disabled{opacity: 0.35;cursor: default}@keyframes ui-drp-open{from{opacity: 0;transform: translateY(-4px) scale(0.98)}to{opacity: 1;transform: none}}@keyframes ui-drp-slide{from{opacity: 0;transform: translateX(14px)}to{opacity: 1;transform: none}}@keyframes ui-drp-slide-back{from{opacity: 0;transform: translateX(-14px)}to{opacity: 1;transform: none}}@keyframes ui-drp-in{from{opacity: 0;transform: translateY(4px);filter: blur(2px)}to{opacity: 1;transform: none;filter: none}}@keyframes ui-drp-pick{0%{transform: scale(0.82)}60%{transform: scale(1.06)}100%{transform: scale(1)}}@container (max-width: 600px){.ui-drp__body{grid-template-columns: 1fr}.ui-drp__presets{flex-direction: row;gap: 6px;padding: 10px;overflow-x: auto;border-right: 0;border-bottom: 1px solid var(--ui-drp-line);scrollbar-width: none}.ui-drp__presets::-webkit-scrollbar{display: none}.ui-drp__preset{flex: none;height: 32px;padding: 0 12px;border-radius: 999px;box-shadow: inset 0 0 0 1px var(--ui-drp-line)}.ui-drp__presets .ui-drp__pill{border-radius: 999px}.ui-drp__preset-custom{display: none}.ui-drp__months{grid-template-columns: 1fr;justify-items: center}.ui-drp__month:not([data-second]){display: none}.ui-drp__foot{flex-direction: column;align-items: stretch}.ui-drp__buttons{justify-content: flex-end}.ui-drp__compare{flex-wrap: wrap}}@container (max-width: 340px){.ui-drp__weekdays, .ui-drp__week{grid-template-columns: repeat(7, 1fr)}.ui-drp__cal{padding: 14px 8px 10px}.ui-drp__months{justify-items: stretch}}@media (hover: none) and (pointer: coarse){.ui-drp__day{height: 38px}.ui-drp__weekdays, .ui-drp__week{grid-template-columns: repeat(7, minmax(0, 38px))}.ui-drp__icon-btn{width: 38px;height: 38px}.ui-drp__btn{height: 38px}.ui-drp__segment{height: 30px}}@media (prefers-reduced-motion: reduce){.ui-drp *, .ui-drp *::before, .ui-drp *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-drp{--ui-drp-tray: #111113;--ui-drp-card: #19191b;--ui-drp-line: #2a2a2e;--ui-drp-ink: #ededed;--ui-drp-text: #c8c8cc;--ui-drp-muted: #8b8b92;--ui-drp-faint: #4a4a50;--ui-drp-hover: #232326;--ui-drp-active: #2a2a2e;--ui-drp-band: rgba(109, 139, 255, 0.18);--ui-drp-band-preview: rgba(109, 139, 255, 0.1);--ui-drp-accent: #6d8bff;--ui-drp-on-accent: #0d0d10;--ui-drp-compare: #26262a;--ui-drp-compare-edge: #4a4a50;--ui-drp-focus: rgba(255, 255, 255, 0.3);--ui-drp-shadow: 0 0 0 1px rgba(255, 255, 255, 0.06), 0 18px 40px -12px rgba(0, 0, 0, 0.6)}`;
function x() {
  return (0, r.jsx)(`div`, { className: `drp-demo`, children: (0, r.jsx)(le, { defaultOpen: !0 }) });
}
