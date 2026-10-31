import { t as e } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
/* empty css             */ var n = e(),
  r = t(),
  i = `\0create`,
  a = `cubic-bezier(0.22, 1, 0.36, 1)`,
  o = () => typeof window < `u` && window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches,
  s = (e) => {
    let t = e
      .trim()
      .split(/\s+/)
      .map((e) => e.match(/[\p{L}\p{N}]/u)?.[0] ?? ``)
      .filter(Boolean);
    return ((t[0] ?? ``) + (t.length > 1 ? t[t.length - 1] : ``)).toUpperCase();
  },
  c = (e) => (e == null ? `` : String(e)),
  l = (e) => e.normalize(`NFD`).replace(/\p{M}/gu, ``).toLowerCase();
function u({ text: e, query: t }) {
  let n = l(e),
    i = l(t),
    a = i && n.length === e.length ? n.indexOf(i) : -1;
  return a < 0
    ? (0, r.jsx)(r.Fragment, { children: e })
    : (0, r.jsxs)(r.Fragment, {
        children: [
          e.slice(0, a),
          (0, r.jsx)(`mark`, { children: e.slice(a, a + i.length) }),
          e.slice(a + i.length),
        ],
      });
}
function ee({ option: e }) {
  let [t, i] = (0, n.useState)(!1);
  return e.icon
    ? (0, r.jsx)(`span`, { className: `ui-cbx__icon`, children: e.icon })
    : typeof e.avatar == `string` && !t
      ? (0, r.jsx)(`img`, { className: `ui-cbx__avatar`, src: e.avatar, alt: ``, onError: () => i(!0) })
      : e.avatar
        ? (0, r.jsx)(`span`, { className: `ui-cbx__avatar`, "aria-hidden": `true`, children: s(e.label) })
        : e.color
          ? (0, r.jsx)(`span`, {
              className: `ui-cbx__dot`,
              style: { background: e.color },
              "aria-hidden": `true`,
            })
          : null;
}
var d = ({ d: e, className: t }) =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      className: [`ui-cbx__glyph`, t].filter(Boolean).join(` `),
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, { d: e }),
    }),
  f = {
    close: `M7 7l10 10M17 7 7 17`,
    check: `M5.5 12.5l4 4L18.5 8`,
    chevron: `M8 10l4 4 4-4`,
    plus: `M12 6v12M6 12h12`,
  };
function te({ animate: e, leaving: t, armed: i, plain: s, children: c }) {
  let l = (0, n.useRef)(null);
  return (
    (0, n.useLayoutEffect)(() => {
      let t = l.current;
      e &&
        t &&
        !o() &&
        (t.animate(
          [
            { gridTemplateColumns: `0fr`, marginRight: `0px` },
            { gridTemplateColumns: `1fr`, marginRight: `4px` },
          ],
          { duration: 260, easing: a },
        ),
        t.firstElementChild?.animate(
          [
            { opacity: 0, transform: `scale(0.6)` },
            { opacity: 1, transform: `scale(1.05)`, offset: 0.6 },
            { opacity: 1, transform: `none` },
          ],
          { duration: 340, easing: a },
        ));
    }, []),
    (0, r.jsx)(`li`, {
      ref: l,
      className: `ui-cbx__chip`,
      "data-leaving": t || void 0,
      "data-armed": i || void 0,
      "data-plain": s || void 0,
      children: c,
    })
  );
}
var ne = (0, n.memo)(function ({ option: e, id: t, on: n, active: i, query: a, events: o }) {
  return (0, r.jsxs)(`div`, {
    id: t,
    role: `option`,
    "aria-selected": n,
    "data-active": i || void 0,
    className: `ui-cbx__option`,
    onMouseDown: (e) => e.preventDefault(),
    onMouseMove: () => o.current.hover(e.value),
    onClick: () => o.current.choose(e),
    children: [
      (0, r.jsx)(ee, { option: e }),
      (0, r.jsxs)(`span`, {
        className: `ui-cbx__text`,
        children: [
          (0, r.jsx)(`span`, {
            className: `ui-cbx__name`,
            dir: `auto`,
            title: e.label,
            children: (0, r.jsx)(u, { text: e.label, query: a }),
          }),
          e.hint &&
            (0, r.jsx)(`span`, {
              className: `ui-cbx__hint`,
              dir: `auto`,
              title: e.hint,
              children: (0, r.jsx)(u, { text: e.hint, query: a }),
            }),
        ],
      }),
      (0, r.jsx)(d, { d: f.check, className: `ui-cbx__check` }),
    ],
  });
});
function re({
  options: e,
  multiple: t = !0,
  value: a,
  defaultValue: o,
  onChange: s,
  placeholder: u = `Search…`,
  creatable: re = !1,
  onCreate: ae,
  createLabel: p = (e) => `Create “${e}”`,
  maxVisibleTags: m,
  label: h,
  defaultOpen: oe = !1,
  emptyText: se = `No results`,
  className: ce,
}) {
  let g = `ui-cbx` + (0, n.useId)().replace(/[^a-zA-Z0-9_-]/g, ``),
    [le, ue] = (0, n.useState)(o ?? []),
    _ = [...new Set(a ?? le)],
    v = new Set(_),
    y = typeof m == `number` && Number.isFinite(m) ? Math.max(0, m) : void 0,
    [de, fe] = (0, n.useState)([]),
    [b, x] = (0, n.useState)(oe),
    [S, C] = (0, n.useState)(``),
    [w, T] = (0, n.useState)(null),
    [E, D] = (0, n.useState)(null),
    [pe, me] = (0, n.useState)(``),
    O = (0, n.useRef)(null),
    he = (0, n.useRef)(null),
    ge = (0, n.useRef)(null),
    k = (0, n.useRef)(null),
    A = (0, n.useRef)(null),
    _e = (0, n.useRef)(null),
    ve = (0, n.useRef)(null),
    j = (0, n.useRef)(!1),
    M = (0, n.useMemo)(() => {
      let t = new Set(),
        n = [];
      for (let r of e ?? []) {
        if (!r || r.value == null) continue;
        let e = String(r.value);
        t.has(e) ||
          (t.add(e),
          n.push({ ...r, value: e, label: c(r.label) || e, hint: r.hint == null ? void 0 : c(r.hint) }));
      }
      return n;
    }, [e]),
    N = (0, n.useMemo)(() => {
      let e = new Set(M.map((e) => e.value));
      return [...M, ...de.filter((t) => !e.has(t.value))];
    }, [M, de]),
    P = (0, n.useMemo)(
      () =>
        new Map(
          N.map((e) => [
            e.value,
            { label: l(e.label), hay: l(`${e.label} ${e.hint ?? ``} ${c(e.keywords)}`) },
          ]),
        ),
      [N],
    ),
    ye = (0, n.useMemo)(() => new Map(N.map((e) => [e.value, e])), [N]),
    F = (e) => ye.get(e) ?? { value: e, label: e },
    I = S.trim(),
    L = l(I),
    R = (0, n.useMemo)(() => {
      let e = [],
        t = new Map();
      for (let n of N) {
        if (L && !P.get(n.value).hay.includes(L)) continue;
        let r = c(n.group),
          i = t.get(r);
        (i || ((i = { name: r, options: [] }), t.set(r, i), e.push(i)), i.options.push(n));
      }
      return e;
    }, [N, P, L]),
    be = re && !!I && !N.some((e) => P.get(e.value).label === L),
    z = [...R.flatMap((e) => e.options.map((e) => e.value)), ...(be ? [i] : [])],
    B = new Map(z.map((e, t) => [e, t])),
    V = w !== null && B.has(w) ? w : z[0],
    H = (e) => `${g}-o${B.get(e)}`,
    [U, xe] = (0, n.useState)(() => _.map((e) => ({ value: e }))),
    Se = (0, n.useRef)(U);
  Se.current = U;
  let W = (0, n.useRef)(new Map()),
    Ce = (0, n.useRef)(!1),
    we = _.join(``);
  ((0, n.useEffect)(() => {
    let e = Se.current,
      t = !1,
      n = e.map((e) => {
        let n = v.has(e.value);
        return n && e.leaving
          ? ((t = !0),
            window.clearTimeout(W.current.get(e.value)),
            W.current.delete(e.value),
            { value: e.value })
          : !n && !e.leaving
            ? ((t = !0),
              W.current.set(
                e.value,
                window.setTimeout(() => {
                  (W.current.delete(e.value),
                    xe((t) => t.filter((t) => !(t.value === e.value && t.leaving))));
                }, 420),
              ),
              { value: e.value, leaving: !0 })
            : e;
      });
    for (let e of _) n.some((t) => t.value === e) || (n.push({ value: e }), (t = !0));
    t && xe(n);
  }, [we]),
    (0, n.useEffect)(() => {
      Ce.current = !0;
      let e = W.current;
      return () => e.forEach((e) => window.clearTimeout(e));
    }, []));
  let G = y ?? 1 / 0,
    Te = 0,
    K = U.filter((e) => (e.leaving ? Te < G : Te++ < G)),
    q = Math.max(0, U.filter((e) => !e.leaving).length - G),
    J = (0, n.useRef)(q),
    Ee = (0, n.useRef)(`up`);
  (q !== J.current && q > 0 && (Ee.current = q > J.current ? `up` : `down`), q > 0 && (J.current = q));
  let De = q || J.current,
    Oe = !!E && q > 0 && !K.some((e) => e.value === E),
    Y = (0, n.useRef)(_.length),
    ke = (0, n.useRef)(`up`);
  _.length !== Y.current && ((ke.current = _.length > Y.current ? `up` : `down`), (Y.current = _.length));
  let Ae = (e, t) => {
      (a === void 0 && ue(e),
        s?.(
          e,
          e.map((e) => (t?.value === e ? t : F(e))),
        ));
    },
    X = (e, n) => me(t ? `${e}. ${n} selected` : e),
    Z = (e) => {
      let n = v.has(e.value),
        r = t ? (n ? _.filter((t) => t !== e.value) : [..._, e.value]) : [e.value];
      (Ae(r, e),
        X(`${e.label} ${n && t ? `removed` : `selected`}`, r.length),
        D(null),
        S && C(``),
        t || x(!1));
    },
    je = () => {
      let e = ae?.(I) || { value: I, label: I };
      (fe((t) => [...t.filter((t) => t.value !== e.value), e]), T(e.value), Z(e));
    },
    Me = (e) => {
      let t = _.filter((t) => t !== e);
      (Ae(t), X(`${F(e).label} removed`, t.length), D(null));
    },
    Ne = (e) => {
      e === i ? je() : Z(F(e));
    };
  ((0, n.useLayoutEffect)(() => {
    let e = he.current,
      t = ge.current;
    if (!e || !t) return;
    let n = () => (e.style.height = `${t.offsetHeight}px`);
    n();
    let r = new ResizeObserver(n);
    return (r.observe(t), () => r.disconnect());
  }, []),
    (0, n.useLayoutEffect)(() => {
      let e = A.current,
        t = _e.current;
      if (!b || !e || !t) return;
      let n = () => {
        let n = getComputedStyle(e),
          r = parseFloat(n.paddingTop) + parseFloat(n.paddingBottom),
          i = parseFloat(n.maxHeight) || 1 / 0;
        e.style.height = `${Math.min(t.offsetHeight + r, i)}px`;
      };
      n();
      let r = new ResizeObserver(n);
      return (r.observe(t), () => r.disconnect());
    }, [b]),
    (0, n.useLayoutEffect)(() => {
      let e = A.current,
        t = ve.current;
      if (!b || !e || !t) return;
      let n = e.querySelector(`[data-active]`);
      if (!n) {
        t.style.opacity = `0`;
        return;
      }
      let r = !t.dataset.ready;
      if (
        (r && (t.style.transition = `none`),
        (t.style.opacity = `1`),
        (t.style.height = `${n.offsetHeight}px`),
        (t.style.transform = `translateY(${n.offsetTop}px)`),
        r && ((t.dataset.ready = `1`), t.offsetWidth, (t.style.transition = ``)),
        !j.current)
      )
        return;
      j.current = !1;
      let i = n.previousElementSibling,
        a = i?.classList.contains(`ui-cbx__group-label`) ? i.offsetHeight : 0,
        o = n.offsetTop - 6 - a,
        s = n.offsetTop + n.offsetHeight + 6;
      o < e.scrollTop
        ? (e.scrollTop = o)
        : s > e.scrollTop + e.clientHeight && (e.scrollTop = s - e.clientHeight);
    }),
    (0, n.useEffect)(() => {
      if (!b) return;
      let e = (e) => {
        O.current && !O.current.contains(e.target) && (x(!1), D(null));
      };
      return (
        document.addEventListener(`pointerdown`, e),
        () => document.removeEventListener(`pointerdown`, e)
      );
    }, [b]));
  let Pe = (e) => {
      if (!z.length) return;
      j.current = !0;
      let t = B.get(V) ?? 0;
      T(z[(t + e + z.length) % z.length]);
    },
    Fe = (e) => {
      if ((e.key !== `Backspace` && D(null), e.key === `ArrowDown` || e.key === `ArrowUp`)) {
        if ((e.preventDefault(), !b)) {
          x(!0);
          return;
        }
        Pe(e.key === `ArrowDown` ? 1 : -1);
      } else if (e.key === `Enter`) {
        if (!b || !V) return;
        (e.preventDefault(), Ne(V));
      } else if (e.key === `Escape`) b ? (e.preventDefault(), e.stopPropagation(), x(!1)) : S && C(``);
      else if (e.key === `Tab`) x(!1);
      else if (e.key === `Backspace` && !S && _.length) {
        e.preventDefault();
        let t = _[_.length - 1];
        E === t ? Me(t) : (D(t), me(`${F(t).label} – press Backspace again to remove`));
      }
    },
    Ie = (e) => {
      e.target.closest(`button`) ||
        (e.target !== k.current && e.preventDefault(), k.current?.focus(), D(null), x(!0));
    },
    Le = (e) => {
      O.current?.contains(e.relatedTarget) || (x(!1), D(null));
    },
    Q = (e) => e.preventDefault(),
    $ = (0, n.useRef)({ hover: () => {}, choose: () => {} });
  return (
    ($.current = {
      hover: (e) => {
        V !== e && T(e);
      },
      choose: (e) => {
        (T(e.value), Z(e));
      },
    }),
    (0, r.jsxs)(`div`, {
      ref: O,
      className: [`ui-cbx`, ce].filter(Boolean).join(` `),
      "data-open": b || void 0,
      onBlur: Le,
      children: [
        (0, r.jsx)(`style`, { href: `ui-combobox`, precedence: `default`, children: ie }),
        h &&
          (0, r.jsx)(`label`, {
            className: `ui-cbx__label`,
            id: `${g}-label`,
            htmlFor: `${g}-input`,
            children: h,
          }),
        (0, r.jsxs)(`div`, {
          ref: he,
          className: `ui-cbx__field`,
          onMouseDown: Ie,
          children: [
            (0, r.jsxs)(`div`, {
              ref: ge,
              className: `ui-cbx__field-inner`,
              children: [
                (K.length > 0 || y !== void 0) &&
                  (0, r.jsxs)(`ul`, {
                    className: `ui-cbx__chips`,
                    role: `list`,
                    "aria-label": `Selected`,
                    children: [
                      K.map((e) => {
                        let t = F(e.value),
                          n = !t.icon && !t.avatar && !t.color;
                        return (0, r.jsx)(
                          te,
                          {
                            animate: Ce.current,
                            leaving: e.leaving,
                            armed: E === e.value,
                            plain: n,
                            children: (0, r.jsxs)(`span`, {
                              className: `ui-cbx__chip-body`,
                              children: [
                                (0, r.jsx)(ee, { option: t }),
                                (0, r.jsx)(`span`, {
                                  className: `ui-cbx__chip-label`,
                                  dir: `auto`,
                                  title: t.label,
                                  children: t.label,
                                }),
                                (0, r.jsx)(`button`, {
                                  type: `button`,
                                  className: `ui-cbx__chip-x`,
                                  tabIndex: -1,
                                  "aria-label": `Remove ${t.label}`,
                                  onMouseDown: Q,
                                  onClick: () => Me(e.value),
                                  children: (0, r.jsx)(d, { d: f.close }),
                                }),
                              ],
                            }),
                          },
                          e.value,
                        );
                      }),
                      y !== void 0 &&
                        (0, r.jsx)(`li`, {
                          className: `ui-cbx__chip ui-cbx__more`,
                          "data-hidden": !q || void 0,
                          "data-armed": Oe || void 0,
                          "aria-hidden": !q || void 0,
                          children: (0, r.jsxs)(`span`, {
                            className: `ui-cbx__chip-body`,
                            children: [
                              `+`,
                              (0, r.jsx)(`span`, {
                                className: `ui-cbx__roll`,
                                children: (0, r.jsx)(
                                  `span`,
                                  { "data-dir": Ee.current, children: De.toLocaleString(`en-US`) },
                                  De,
                                ),
                              }),
                            ],
                          }),
                        }),
                    ],
                  }),
                (0, r.jsx)(`input`, {
                  ref: k,
                  id: `${g}-input`,
                  className: `ui-cbx__input`,
                  dir: `auto`,
                  value: S,
                  placeholder: _.length ? void 0 : u,
                  autoComplete: `off`,
                  spellCheck: !1,
                  role: `combobox`,
                  "aria-expanded": b,
                  "aria-controls": `${g}-list`,
                  "aria-autocomplete": `list`,
                  "aria-activedescendant": b && V ? H(V) : void 0,
                  "aria-label": h ? void 0 : u,
                  onChange: (e) => {
                    (C(e.target.value), T(null), D(null), x(!0));
                  },
                  onKeyDown: Fe,
                }),
              ],
            }),
            (0, r.jsx)(`button`, {
              type: `button`,
              className: `ui-cbx__toggle`,
              tabIndex: -1,
              "aria-label": b ? `Close list` : `Open list`,
              onMouseDown: Q,
              onClick: () => {
                (k.current?.focus(), x((e) => !e));
              },
              children: (0, r.jsx)(d, { d: f.chevron }),
            }),
          ],
        }),
        b &&
          (0, r.jsxs)(`div`, {
            className: `ui-cbx__pop`,
            onMouseDown: Q,
            children: [
              (0, r.jsx)(`div`, {
                className: `ui-cbx__card`,
                children: (0, r.jsxs)(`div`, {
                  ref: A,
                  id: `${g}-list`,
                  className: `ui-cbx__list`,
                  role: `listbox`,
                  "aria-multiselectable": t || void 0,
                  "aria-labelledby": h ? `${g}-label` : void 0,
                  "aria-label": h ? void 0 : `Options`,
                  children: [
                    (0, r.jsx)(`span`, { ref: ve, className: `ui-cbx__pill`, "aria-hidden": `true` }),
                    (0, r.jsxs)(`div`, {
                      ref: _e,
                      className: `ui-cbx__list-inner`,
                      children: [
                        R.map((e, t) =>
                          (0, r.jsxs)(
                            `div`,
                            {
                              role: `group`,
                              "aria-labelledby": e.name ? `${g}-g${t}` : void 0,
                              className: `ui-cbx__group`,
                              children: [
                                e.name &&
                                  (0, r.jsx)(`div`, {
                                    className: `ui-cbx__group-label`,
                                    dir: `auto`,
                                    id: `${g}-g${t}`,
                                    children: e.name,
                                  }),
                                e.options.map((e) =>
                                  (0, r.jsx)(
                                    ne,
                                    {
                                      option: e,
                                      id: H(e.value),
                                      on: v.has(e.value),
                                      active: V === e.value,
                                      query: I,
                                      events: $,
                                    },
                                    e.value,
                                  ),
                                ),
                              ],
                            },
                            e.name || `_`,
                          ),
                        ),
                        !R.length &&
                          (0, r.jsxs)(
                            `div`,
                            {
                              className: `ui-cbx__empty`,
                              children: [se, I && (0, r.jsxs)(r.Fragment, { children: [` for “`, I, `”`] })],
                            },
                            I,
                          ),
                        be &&
                          (0, r.jsxs)(`div`, {
                            id: H(i),
                            role: `option`,
                            "aria-selected": !1,
                            "data-active": V === i || void 0,
                            className: `ui-cbx__option ui-cbx__create`,
                            onMouseDown: Q,
                            onMouseMove: () => V !== i && T(i),
                            onClick: je,
                            children: [
                              (0, r.jsx)(`span`, {
                                className: `ui-cbx__plus`,
                                "aria-hidden": `true`,
                                children: (0, r.jsx)(d, { d: f.plus }),
                              }),
                              (0, r.jsx)(`span`, {
                                className: `ui-cbx__name`,
                                dir: `auto`,
                                title: p(I),
                                children: p(I),
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, r.jsxs)(`div`, {
                className: `ui-cbx__foot`,
                "aria-hidden": `true`,
                children: [
                  (0, r.jsxs)(`span`, {
                    className: `ui-cbx__count`,
                    children: [
                      (0, r.jsx)(`span`, {
                        className: `ui-cbx__roll`,
                        children: (0, r.jsx)(
                          `span`,
                          { "data-dir": ke.current, children: _.length.toLocaleString(`en-US`) },
                          _.length,
                        ),
                      }),
                      (t || _.length, `\xA0selected`),
                    ],
                  }),
                  (0, r.jsxs)(`span`, {
                    className: `ui-cbx__keys`,
                    children: [
                      (0, r.jsx)(`kbd`, { children: `↑` }),
                      (0, r.jsx)(`kbd`, { children: `↓` }),
                      (0, r.jsx)(`span`, { children: `to move` }),
                      (0, r.jsx)(`kbd`, { children: `↵` }),
                      (0, r.jsxs)(`span`, { children: [`to `, t ? `toggle` : `pick`] }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        (0, r.jsx)(`span`, { className: `ui-cbx__live`, "aria-live": `polite`, children: pe }),
      ],
    })
  );
}
var ie = `.ui-cbx{--ui-cbx-tray: #f0f0f0;--ui-cbx-card: #ffffff;--ui-cbx-line: #ececec;--ui-cbx-ink: #171717;--ui-cbx-text: #404040;--ui-cbx-muted: #8f8f8f;--ui-cbx-faint: #b5b5b5;--ui-cbx-edge: #d4d4d8;--ui-cbx-active: #f0f0f1;--ui-cbx-chip: #f4f4f5;--ui-cbx-chip-line: #e6e6e8;--ui-cbx-armed: #e4e4e7;--ui-cbx-flash: #d9d9dd;--ui-cbx-avatar: #e9e9ec;--ui-cbx-avatar-ink: #5b5b62;--ui-cbx-mark: rgba(47, 107, 255, 0.14);--ui-cbx-accent: #2f6bff;--ui-cbx-ring: rgba(23, 23, 23, 0.08);--ui-cbx-focus: rgba(23, 23, 23, 0.22);--ui-cbx-shadow: 0 0 0 1px rgba(0, 0, 0, 0.06), 0 18px 40px -12px rgba(0, 0, 0, 0.18), 0 4px 12px -4px rgba(0, 0, 0, 0.06);--ui-cbx-ease: cubic-bezier(0.22, 1, 0.36, 1);--ui-cbx-spring: cubic-bezier(0.34, 1.56, 0.64, 1);position: relative;display: block;width: 100%;max-width: 440px;container-type: inline-size;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13.5px;line-height: 1.4;color: var(--ui-cbx-text);-webkit-font-smoothing: antialiased}.ui-cbx *, .ui-cbx *::before, .ui-cbx *::after{box-sizing: border-box}:where(.ui-cbx) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer}:where(.ui-cbx) svg{display: block;flex: none}.ui-cbx__glyph{width: 16px;height: 16px;fill: none;stroke: currentColor;stroke-width: 1.8;stroke-linecap: round;stroke-linejoin: round}.ui-cbx__label{display: block;margin: 0 0 7px 2px;font-size: 13px;font-weight: 500;color: var(--ui-cbx-ink)}.ui-cbx__field{position: relative;overflow: hidden;border-radius: 12px;background: var(--ui-cbx-card);box-shadow: 0 0 0 1px var(--ui-cbx-line), 0 1px 2px rgba(0, 0, 0, 0.04);cursor: text;transition: height 300ms var(--ui-cbx-ease), box-shadow 160ms ease}.ui-cbx__field:hover{box-shadow: 0 0 0 1px var(--ui-cbx-edge), 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-cbx__field:focus-within{box-shadow: 0 0 0 1px var(--ui-cbx-edge), 0 0 0 4px var(--ui-cbx-ring)}.ui-cbx__field-inner{display: flex;flex-wrap: wrap;align-items: center;row-gap: 4px;min-height: 40px;padding: 6px 40px 6px 6px}.ui-cbx__field-inner{max-height: 140px;overflow-y: auto;overscroll-behavior: contain;scrollbar-width: thin}.ui-cbx__chips{display: contents;margin: 0;padding: 0;list-style: none}.ui-cbx__chip{display: grid;grid-template-columns: 1fr;min-width: 0;max-width: 100%;overflow: hidden;margin-right: 4px;transition: grid-template-columns 260ms var(--ui-cbx-ease) 160ms, margin-right 260ms var(--ui-cbx-ease) 160ms, opacity 200ms ease 140ms}.ui-cbx__chip[data-leaving]{grid-template-columns: 0fr;margin-right: 0;opacity: 0;pointer-events: none}.ui-cbx__chip-body{display: inline-flex;align-items: center;gap: 6px;min-width: 0;height: 28px;overflow: hidden;padding: 0 3px 0 5px;border-radius: 8px;background: var(--ui-cbx-chip);box-shadow: inset 0 0 0 1px var(--ui-cbx-chip-line);white-space: nowrap;color: var(--ui-cbx-ink);font-size: 13px;transition: background-color 160ms ease, box-shadow 160ms ease}.ui-cbx__chip[data-plain] .ui-cbx__chip-body{padding-left: 9px}.ui-cbx__chip[data-armed] .ui-cbx__chip-body{background: var(--ui-cbx-armed);box-shadow: inset 0 0 0 1px var(--ui-cbx-faint)}.ui-cbx__chip[data-leaving] .ui-cbx__chip-body{animation: ui-cbx-flash 300ms ease-out both}.ui-cbx__chip-label{min-width: 0;max-width: 168px;overflow: hidden;text-overflow: ellipsis}.ui-cbx__chip-x{display: grid;place-items: center;flex: none;width: 20px;height: 20px;border-radius: 6px;color: var(--ui-cbx-muted);transition: background-color 140ms ease, color 140ms ease}.ui-cbx__chip-x:hover{background: var(--ui-cbx-armed);color: var(--ui-cbx-ink)}.ui-cbx__chip-x .ui-cbx__glyph{width: 13px;height: 13px;stroke-width: 2}.ui-cbx__chip .ui-cbx__avatar{width: 18px;height: 18px;font-size: 8.5px}.ui-cbx__chip .ui-cbx__dot{margin: 0 2px}.ui-cbx__more .ui-cbx__chip-body{padding: 0 9px;color: var(--ui-cbx-text);font-variant-numeric: tabular-nums}.ui-cbx__more{transition-delay: 0ms}.ui-cbx__more[data-hidden]{grid-template-columns: 0fr;margin-right: 0;opacity: 0}.ui-cbx__roll{display: inline-grid;overflow: hidden}.ui-cbx__roll > span{animation: ui-cbx-roll-up 300ms var(--ui-cbx-ease) both}.ui-cbx__roll > span[data-dir="down"]{animation-name: ui-cbx-roll-down}.ui-cbx__input{flex: 1 0 72px;min-width: 72px;height: 28px;margin: 0;padding: 0 4px 0 6px;border: 0;background: transparent;font: inherit;color: var(--ui-cbx-ink);outline: none}.ui-cbx__input::placeholder{color: var(--ui-cbx-faint)}.ui-cbx__toggle{position: absolute;top: 6px;right: 6px;display: grid;place-items: center;width: 28px;height: 28px;border-radius: 8px;color: var(--ui-cbx-muted);transition: background-color 140ms ease, color 140ms ease}.ui-cbx__toggle:hover{background: var(--ui-cbx-active);color: var(--ui-cbx-ink)}.ui-cbx__toggle .ui-cbx__glyph{transition: transform 260ms var(--ui-cbx-ease)}.ui-cbx[data-open] .ui-cbx__toggle .ui-cbx__glyph{transform: rotate(180deg)}.ui-cbx__avatar{display: grid;place-items: center;flex: none;width: 24px;height: 24px;border-radius: 50%;object-fit: cover;background: var(--ui-cbx-avatar);color: var(--ui-cbx-avatar-ink);font-size: 9.5px;font-weight: 600;letter-spacing: 0.02em}.ui-cbx__dot{flex: none;width: 8px;height: 8px;margin: 0 4px;border-radius: 50%}.ui-cbx__icon{display: grid;place-items: center;flex: none;width: 18px;height: 18px;color: var(--ui-cbx-muted)}.ui-cbx__icon svg{width: 16px;height: 16px}.ui-cbx__icon{overflow: hidden}.ui-cbx__icon img{width: 16px;height: 16px;object-fit: contain}.ui-cbx__pop{position: absolute;z-index: 30;top: calc(100% + 6px);left: 0;right: 0;padding: 4px;border-radius: 18px;background: var(--ui-cbx-tray);box-shadow: var(--ui-cbx-shadow);transform-origin: top center;animation: ui-cbx-open 240ms var(--ui-cbx-ease) both}.ui-cbx__card{overflow: hidden;border-radius: 14px;background: var(--ui-cbx-card);box-shadow: 0 0 0 1px var(--ui-cbx-line)}.ui-cbx__list{position: relative;max-height: 300px;padding: 4px;overflow-y: auto;overscroll-behavior: contain;scrollbar-width: thin;transition: height 300ms var(--ui-cbx-ease)}.ui-cbx__pill{position: absolute;top: 0;left: 4px;right: 4px;border-radius: 9px;background: var(--ui-cbx-active);opacity: 0;pointer-events: none;transition: transform 220ms var(--ui-cbx-ease), height 220ms var(--ui-cbx-ease), opacity 160ms ease}.ui-cbx__group-label{padding: 9px 8px 4px;font-size: 11.5px;font-weight: 500;color: var(--ui-cbx-faint);overflow-wrap: anywhere}.ui-cbx__group:first-child .ui-cbx__group-label{padding-top: 5px}.ui-cbx__option{position: relative;display: flex;align-items: center;gap: 10px;height: 36px;padding: 0 8px;border-radius: 9px;cursor: pointer;user-select: none;-webkit-tap-highlight-color: transparent}.ui-cbx__text{display: flex;flex: 1;align-items: baseline;gap: 8px;min-width: 0}.ui-cbx__name{flex: 0 0 auto;max-width: 100%;min-width: 0;overflow: hidden;color: var(--ui-cbx-ink);white-space: nowrap;text-overflow: ellipsis}.ui-cbx__hint{flex: 0 100 auto;min-width: 0;overflow: hidden;font-size: 12.5px;color: var(--ui-cbx-muted);white-space: nowrap;text-overflow: ellipsis}.ui-cbx mark{border-radius: 3px;background: var(--ui-cbx-mark);color: inherit}.ui-cbx__check{width: 16px;height: 16px;margin-left: auto;color: var(--ui-cbx-ink);stroke-width: 2.2;opacity: 0;transform: scale(0.4);transition: opacity 120ms ease, transform 160ms ease}.ui-cbx__option[aria-selected="true"] .ui-cbx__check{opacity: 1;transform: none;transition: opacity 160ms ease, transform 380ms var(--ui-cbx-spring)}.ui-cbx__empty{padding: 14px 10px 10px;text-align: center;color: var(--ui-cbx-muted);animation: ui-cbx-in 240ms var(--ui-cbx-ease) both;overflow-wrap: anywhere}.ui-cbx__create{animation: ui-cbx-in 240ms var(--ui-cbx-ease) both}.ui-cbx__create .ui-cbx__name{flex: 0 1 auto}.ui-cbx__plus{display: grid;place-items: center;flex: none;width: 24px;height: 24px;border-radius: 50%;color: var(--ui-cbx-muted);box-shadow: inset 0 0 0 1px var(--ui-cbx-edge)}.ui-cbx__plus .ui-cbx__glyph{width: 13px;height: 13px;stroke-width: 2}.ui-cbx__foot{display: flex;align-items: center;justify-content: space-between;gap: 12px;height: 32px;padding: 0 10px;font-size: 12px;color: var(--ui-cbx-muted)}.ui-cbx__count{display: inline-flex;font-variant-numeric: tabular-nums}.ui-cbx__keys{display: inline-flex;align-items: center;gap: 3px;white-space: nowrap}.ui-cbx kbd{display: inline-grid;place-items: center;min-width: 18px;height: 18px;padding: 0 4px;border-radius: 5px;background: var(--ui-cbx-card);box-shadow: inset 0 0 0 1px var(--ui-cbx-line), 0 1px 0 var(--ui-cbx-line);font-family: inherit;font-size: 10.5px;font-weight: 500;color: var(--ui-cbx-muted)}.ui-cbx__keys > span{margin: 0 6px 0 2px}.ui-cbx__keys > span:last-child{margin-right: 0}.ui-cbx__live{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}@keyframes ui-cbx-open{from{opacity: 0;transform: translateY(-4px) scale(0.98)}to{opacity: 1;transform: none}}@keyframes ui-cbx-in{from{opacity: 0;transform: translateY(3px)}to{opacity: 1;transform: none}}@keyframes ui-cbx-flash{0%{background-color: var(--ui-cbx-chip)}35%{background-color: var(--ui-cbx-flash)}100%{background-color: var(--ui-cbx-flash);transform: scale(0.92)}}@keyframes ui-cbx-roll-up{from{opacity: 0;transform: translateY(70%)}to{opacity: 1;transform: none}}@keyframes ui-cbx-roll-down{from{opacity: 0;transform: translateY(-70%)}to{opacity: 1;transform: none}}@container (max-width: 380px){.ui-cbx__keys{display: none}.ui-cbx__chip-label{max-width: 132px}.ui-cbx__hint{font-size: 12px}.ui-cbx__input{flex-basis: 44px;min-width: 44px}}@media (hover: none) and (pointer: coarse){.ui-cbx__field-inner{min-height: 44px;padding-right: 44px}.ui-cbx__chip-body{height: 32px}.ui-cbx__chip-x{width: 26px;height: 26px}.ui-cbx__input{height: 32px;font-size: 16px}.ui-cbx__toggle{width: 32px;height: 32px}.ui-cbx__option{height: 44px}.ui-cbx__list{max-height: 340px}.ui-cbx__keys{display: none}}@media (prefers-reduced-motion: reduce){.ui-cbx *, .ui-cbx *::before, .ui-cbx *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-cbx{--ui-cbx-tray: #111113;--ui-cbx-card: #19191b;--ui-cbx-line: #2a2a2e;--ui-cbx-ink: #ededed;--ui-cbx-text: #c8c8cc;--ui-cbx-muted: #8b8b92;--ui-cbx-faint: #5c5c63;--ui-cbx-edge: #3a3a40;--ui-cbx-active: #26262a;--ui-cbx-chip: #232326;--ui-cbx-chip-line: #2f2f34;--ui-cbx-armed: #303035;--ui-cbx-flash: #3a3a40;--ui-cbx-avatar: #2c2c31;--ui-cbx-avatar-ink: #b4b4bb;--ui-cbx-mark: rgba(109, 139, 255, 0.24);--ui-cbx-accent: #6d8bff;--ui-cbx-ring: rgba(255, 255, 255, 0.07);--ui-cbx-focus: rgba(255, 255, 255, 0.3);--ui-cbx-shadow: 0 0 0 1px rgba(255, 255, 255, 0.06), 0 18px 40px -12px rgba(0, 0, 0, 0.6)}`,
  ae = [
    { value: `maya`, label: `Maya Chen`, hint: `Product Designer`, avatar: !0, group: `Design` },
    { value: `jonas`, label: `Jonas Weber`, hint: `Design Lead`, avatar: !0, group: `Design` },
    { value: `priya`, label: `Priya Raman`, hint: `Brand Designer`, avatar: !0, group: `Design` },
    { value: `sara`, label: `Sara Okafor`, hint: `Staff Engineer`, avatar: !0, group: `Engineering` },
    { value: `leo`, label: `Leo Martins`, hint: `Frontend`, avatar: !0, group: `Engineering` },
    { value: `nina`, label: `Nina Petrova`, hint: `Backend`, avatar: !0, group: `Engineering` },
    { value: `tom`, label: `Tom Becker`, hint: `iOS`, avatar: !0, group: `Engineering` },
    { value: `elif`, label: `Elif Yilmaz`, hint: `Head of Product`, avatar: !0, group: `Product` },
    { value: `daniel`, label: `Daniel Kim`, hint: `Product Manager`, avatar: !0, group: `Product` },
    { value: `lucas`, label: `Lucas Moreau`, hint: `Product Analyst`, avatar: !0, group: `Product` },
  ];
function p() {
  return (0, r.jsx)(`div`, {
    className: `combobox-demo`,
    children: (0, r.jsx)(re, {
      label: `Reviewers`,
      options: ae,
      defaultValue: [`maya`, `sara`],
      placeholder: `Add reviewers…`,
      maxVisibleTags: 4,
      creatable: !0,
      createLabel: (e) => `Invite “${e}”`,
      defaultOpen: !0,
    }),
  });
}
