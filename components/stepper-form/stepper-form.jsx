/*
 * affectUI · stepper-form (Pro)
 * Implementation recovered from public bundle asset: demo-DnMvqnaQ.js
 * Styles inlined in the module -> stepper-form.css (1 block(s))
 * Demo usage: stepper-form.demo.jsx
 * Minified identifiers kept; formatting by prettier.
 */

import { t as e } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
/* empty css             */ var n = e(),
  r = t(),
  i = (...e) => e.filter(Boolean).join(` `),
  a = (e) => !!e && Object.values(e).some(Boolean),
  o = (e) => (e == null ? `` : String(e)),
  s = (e) => e.toLocaleString(`en-US`),
  c = (e) => e.replace(/\p{Lu}\p{Ll}+/gu, (e) => e.toLowerCase()),
  l = () => typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
function u(e) {
  e &&
    !l() &&
    e.animate &&
    e.animate(
      [
        { transform: `none` },
        { transform: `translateX(-4px)` },
        { transform: `translateX(4px)` },
        { transform: `translateX(-2px)` },
        { transform: `none` },
      ],
      { duration: 340, easing: `ease-out` },
    );
}
function d(e, t, n) {
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
var f = ({ d: e, className: t }) =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      className: i(`ui-sf__glyph`, t),
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, { d: e }),
    }),
  p = { check: `M5.5 12.5l4 4L18.5 8`, close: `M7 7l10 10M17 7 7 17`, back: `M14.5 6l-6 6 6 6` },
  m = ({ className: e }) =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      className: i(`ui-sf__draw`, e),
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, { d: p.check, pathLength: 1 }),
    }),
  h = (0, n.createContext)({ errors: {}, shake: 0, report: () => {} }),
  g = (0, n.createContext)(null);
function _({
  steps: e,
  initialValues: t,
  onComplete: l,
  initialStep: u = 0,
  step: d,
  onStepChange: g,
  submitLabel: _ = `Finish`,
  submittingLabel: v = `Creating…`,
  success: y,
  className: b,
}) {
  let x = e.length,
    S = (e) => (Number.isFinite(e) ? Math.max(0, Math.min(Math.max(x - 1, 0), Math.trunc(e))) : 0),
    [C, w] = (0, n.useState)(u),
    T = S(d ?? C),
    [E, D] = (0, n.useState)(t),
    O = (0, n.useRef)(E),
    [ne, k] = (0, n.useState)(T),
    A = Math.max(ne, T),
    [re, j] = (0, n.useState)({}),
    [M, ie] = (0, n.useState)(0),
    [N, P] = (0, n.useState)(null),
    [F, I] = (0, n.useState)(!1),
    [L, R] = (0, n.useState)(``),
    [z, ae] = (0, n.useState)(!1),
    [oe, B] = (0, n.useState)(``),
    V = (0, n.useRef)(null),
    H = (0, n.useRef)(null),
    U = (0, n.useRef)(null),
    W = (0, n.useRef)(null),
    G = (0, n.useRef)(!1),
    K = (0, n.useRef)(!1),
    q = (0, n.useRef)({}),
    se = (0, n.useCallback)((e, t) => {
      q.current = { ...q.current, [e]: t ?? void 0 };
    }, []),
    J = (0, n.useId)(),
    Y = z ? x : T,
    [X, ce] = (0, n.useState)({ index: Y, from: null, dir: 1 });
  (X.index !== Y && ce({ index: Y, from: X.index, dir: Y > X.index ? 1 : -1 }),
    (0, n.useEffect)(() => {
      if (X.from === null) return;
      let e = window.setTimeout(() => ce((e) => ({ ...e, from: null })), 420);
      return () => clearTimeout(e);
    }, [X.index, X.from]));
  let le = (0, n.useCallback)((e) => {
      ((O.current = { ...O.current, ...e }), D(O.current));
    }, []),
    Z = (t) => {
      let n = Math.max(0, Math.min(x - 1, t));
      n !== T &&
        ((G.current = !0),
        (K.current = !0),
        (q.current = {}),
        d === void 0 && w(n),
        g?.(n),
        k((e) => Math.max(e, n)),
        R(``),
        B(`Step ${s(n + 1)} of ${s(x)}: ${o(e[n].title)}`));
    },
    ue = () => {
      let t = { ...q.current, ...e[T].validate?.(O.current) };
      return a(t)
        ? (j((e) => ({ ...e, [T]: !0 })),
          ie((e) => e + 1),
          B(Object.values(t).find(Boolean) ?? `Check this step`),
          !1)
        : (j((e) => ({ ...e, [T]: !1 })), !0);
    },
    de = async (e) => {
      if ((e?.preventDefault(), !(F || z || !ue()))) {
        if (T < x - 1) {
          N !== null && N > T ? (P(null), Z(N)) : Z(T + 1);
          return;
        }
        (I(!0), R(``));
        try {
          (await l?.(O.current), (G.current = !0), (K.current = !0), ae(!0), B(`All done`));
        } catch (e) {
          let t = e instanceof Error && e.message ? e.message : `Something went wrong – try again`;
          (R(t), B(t));
        } finally {
          I(!1);
        }
      }
    },
    fe = () => {
      (P(null), Z(T - 1));
    },
    pe = (e) => {
      e < 0 || e >= x || e === T || (e > T && !ue()) || (P(e < T ? T : null), Z(e));
    },
    me = (t) => pe(e.findIndex((e) => e.id === t)),
    he = () => {
      ((O.current = t),
        D(t),
        j({}),
        P(null),
        k(S(u)),
        ae(!1),
        R(``),
        (G.current = !0),
        (K.current = !0),
        (q.current = {}),
        d === void 0 && w(S(u)),
        g?.(S(u)));
    };
  if (
    ((0, n.useEffect)(() => {
      if (!G.current) return;
      G.current = !1;
      let e = H.current?.querySelector(`[data-pane="current"]`);
      (
        e?.querySelector(`input:not([type="hidden"]):not(:disabled), textarea, select`) ??
        e?.querySelector(`.ui-sf__heading`)
      )?.focus({ preventScroll: !0 });
    }, [Y]),
    (0, n.useEffect)(() => {
      M &&
        H.current?.querySelector(`[data-pane="current"] [aria-invalid="true"]`)?.focus({ preventScroll: !0 });
    }, [M]),
    (0, n.useLayoutEffect)(() => {
      let e = H.current,
        t = e?.querySelector(`[data-pane="current"]`);
      if (!e || !t) return;
      let n = !e.dataset.ready,
        r = () => (e.style.height = `${t.offsetHeight}px`);
      (n && (e.style.transition = `none`),
        r(),
        n && ((e.dataset.ready = `1`), e.offsetWidth, (e.style.transition = ``)));
      let i = new ResizeObserver(r);
      return (i.observe(t), () => i.disconnect());
    }, [Y]),
    (0, n.useLayoutEffect)(() => {
      let e = U.current,
        t = W.current;
      if (!e || !t) return;
      let n = () => (e.style.width = `${t.offsetWidth}px`);
      n();
      let r = new ResizeObserver(n);
      return (r.observe(t), () => r.disconnect());
    }, []),
    !x)
  )
    return null;
  let Q = e[T],
    ge = re[T] ? (Q.validate?.(E) ?? {}) : {},
    _e = !a(Q.validate?.(E)),
    ve = T === x - 1,
    $ = F ? v : ve ? _ : N !== null && N > T ? `Back to ${c(o(e[N].title))}` : `Continue`,
    ye = { values: E, setValues: le, errors: ge, goTo: me, next: () => V.current?.requestSubmit() },
    be = (t) => {
      if (t >= x)
        return y
          ? y(E, he)
          : (0, r.jsx)(ee, {
              title: `All set`,
              description: `Everything is saved. You can change it any time.`,
            });
      let n = e[t],
        i = t === T ? ye : { ...ye, errors: {} };
      return (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)(`h2`, {
            className: `ui-sf__heading`,
            tabIndex: -1,
            id: `${J}-h${t}`,
            dir: `auto`,
            children: n.heading ?? n.title,
          }),
          n.description &&
            (0, r.jsx)(`p`, { className: `ui-sf__desc`, dir: `auto`, children: n.description }),
          (0, r.jsx)(`div`, { className: `ui-sf__body`, children: n.render(i) }),
        ],
      });
    },
    xe = X.from !== null && X.from !== X.index ? [X.from, X.index] : [X.index];
  return (0, r.jsxs)(`div`, {
    className: i(`ui-sf`, b),
    style: { "--ui-sf-n": x },
    children: [
      (0, r.jsx)(`style`, { href: `ui-stepper-form`, precedence: `default`, children: te }),
      (0, r.jsxs)(`div`, {
        className: `ui-sf__head`,
        children: [
          (0, r.jsx)(`div`, {
            className: `ui-sf__steps`,
            children: (0, r.jsx)(`ol`, {
              className: `ui-sf__list`,
              "aria-label": `Progress`,
              children: e.map((e, t) => {
                let n = z || (t < A && t !== T) ? `done` : t === T ? `current` : `upcoming`,
                  i = !z && !F && t !== T && t <= A,
                  a = (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(`span`, {
                        className: `ui-sf__mark`,
                        children:
                          n === `done`
                            ? (0, r.jsx)(m, {}, `check`)
                            : (0, r.jsxs)(`span`, { children: [t + 1, `.`] }, `num`),
                      }),
                      (0, r.jsx)(`span`, { className: `ui-sf__step-label`, dir: `auto`, children: e.title }),
                      (0, r.jsx)(`span`, {
                        className: `ui-sf__sr`,
                        children: n === `done` ? ` (done)` : n === `current` ? ` (current)` : ``,
                      }),
                    ],
                  });
                return (0, r.jsx)(
                  `li`,
                  {
                    className: `ui-sf__step`,
                    "data-state": n,
                    "aria-current": !z && t === T ? `step` : void 0,
                    children: i
                      ? (0, r.jsx)(`button`, {
                          type: `button`,
                          className: `ui-sf__step-btn`,
                          title: o(e.title) || void 0,
                          onClick: () => pe(t),
                          children: a,
                        })
                      : (0, r.jsx)(`span`, {
                          className: `ui-sf__step-btn`,
                          title: o(e.title) || void 0,
                          children: a,
                        }),
                  },
                  `${e.id}#${t}`,
                );
              }),
            }),
          }),
          (0, r.jsx)(`div`, {
            className: `ui-sf__compact`,
            "aria-hidden": `true`,
            children: (0, r.jsx)(
              `span`,
              {
                className: `ui-sf__compact-text`,
                children: z
                  ? (0, r.jsxs)(r.Fragment, { children: [`All `, s(x), ` steps done`] })
                  : (0, r.jsxs)(r.Fragment, {
                      children: [
                        `Step `,
                        s(T + 1),
                        ` of `,
                        s(x),
                        (0, r.jsx)(`span`, { className: `ui-sf__compact-dot`, children: `·` }),
                        (0, r.jsx)(`span`, {
                          className: `ui-sf__compact-title`,
                          dir: `auto`,
                          children: Q.title,
                        }),
                      ],
                    }),
              },
              z ? `done` : T,
            ),
          }),
        ],
      }),
      (0, r.jsxs)(`form`, {
        ref: V,
        className: `ui-sf__card`,
        noValidate: !0,
        onSubmit: de,
        "aria-labelledby": z ? void 0 : `${J}-h${T}`,
        children: [
          (0, r.jsx)(`div`, {
            ref: H,
            className: `ui-sf__viewport`,
            children: xe.map((e) => {
              let t = e === X.index;
              return (0, r.jsx)(
                `div`,
                {
                  className: `ui-sf__pane`,
                  "data-pane": t ? `current` : `leaving`,
                  "data-dir": X.dir,
                  "data-first": !K.current || void 0,
                  inert: !t,
                  "aria-hidden": !t || void 0,
                  children: (0, r.jsx)(h.Provider, {
                    value: { errors: t && e === T ? ge : {}, shake: t ? M : 0, report: se },
                    children: be(e),
                  }),
                },
                e,
              );
            }),
          }),
          (0, r.jsx)(`div`, {
            className: `ui-sf__foot-fold`,
            "data-hidden": z || void 0,
            children: (0, r.jsxs)(`div`, {
              className: `ui-sf__foot`,
              inert: z,
              children: [
                (0, r.jsxs)(`button`, {
                  type: `button`,
                  className: `ui-sf__btn ui-sf__btn-ghost`,
                  "data-hidden": T === 0 || void 0,
                  disabled: T === 0 || F,
                  onClick: fe,
                  children: [(0, r.jsx)(f, { d: p.back }), `Back`],
                }),
                L &&
                  (0, r.jsx)(`span`, {
                    className: `ui-sf__submit-error`,
                    role: `alert`,
                    dir: `auto`,
                    children: L,
                  }),
                (0, r.jsx)(`button`, {
                  ref: U,
                  type: `submit`,
                  className: `ui-sf__btn ui-sf__btn-primary`,
                  "aria-disabled": !_e || F || void 0,
                  "data-busy": F || void 0,
                  children: (0, r.jsxs)(`span`, {
                    ref: W,
                    className: `ui-sf__btn-inner`,
                    children: [
                      F && (0, r.jsx)(`span`, { className: `ui-sf__spinner`, "aria-hidden": `true` }),
                      (0, r.jsx)(`span`, { className: `ui-sf__btn-label`, title: $, children: $ }, $),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
      (0, r.jsx)(`span`, { className: `ui-sf__sr`, "aria-live": `polite`, children: oe }),
    ],
  });
}
function v({ name: e, label: t, hint: i, optional: a, children: o }) {
  let { errors: s, shake: c, report: l } = (0, n.useContext)(h),
    [d, f] = (0, n.useState)(null),
    [p, m] = (0, n.useState)(0),
    _ = (0, n.useId)(),
    v = (0, n.useRef)(null),
    y = s[e] ?? d ?? ``,
    b = (0, n.useRef)(y);
  y && (b.current = y);
  let x = !!y;
  ((0, n.useEffect)(() => {
    c && (s[e] || d) && u(v.current);
  }, [c]),
    (0, n.useEffect)(() => {
      p && u(v.current);
    }, [p]));
  let S = (0, n.useCallback)(
    (t) => {
      (f(t), l(e, t), t && m((e) => e + 1));
    },
    [e, l],
  );
  return (0, r.jsxs)(`div`, {
    className: `ui-sf__field`,
    "data-invalid": x || void 0,
    children: [
      (0, r.jsxs)(`label`, {
        className: `ui-sf__label`,
        htmlFor: _,
        dir: `auto`,
        children: [
          (0, r.jsx)(`span`, { className: `ui-sf__label-text`, children: t }),
          a && (0, r.jsx)(`span`, { className: `ui-sf__optional`, children: `Optional` }),
        ],
      }),
      (0, r.jsx)(`div`, {
        ref: v,
        className: `ui-sf__control`,
        children: (0, r.jsx)(g.Provider, {
          value: { id: _, invalid: x, describedBy: x ? `${_}-msg` : i ? `${_}-hint` : void 0, flag: S },
          children: o,
        }),
      }),
      (0, r.jsx)(`div`, {
        className: `ui-sf__fold`,
        "data-open": x || void 0,
        children: (0, r.jsx)(`div`, {
          children: (0, r.jsx)(
            `p`,
            { className: `ui-sf__msg`, id: `${_}-msg`, dir: `auto`, children: b.current },
            b.current,
          ),
        }),
      }),
      i &&
        (0, r.jsx)(`div`, {
          className: `ui-sf__fold`,
          "data-open": !x || void 0,
          children: (0, r.jsx)(`div`, {
            children: (0, r.jsx)(`p`, {
              className: `ui-sf__hint`,
              id: `${_}-hint`,
              dir: `auto`,
              children: i,
            }),
          }),
        }),
    ],
  });
}
function y({ prefix: e, className: t, ...a }) {
  let o = (0, n.useContext)(g);
  return (0, r.jsxs)(`div`, {
    className: i(`ui-sf__input`, t),
    "data-invalid": o?.invalid || void 0,
    children: [
      e && (0, r.jsx)(`span`, { className: `ui-sf__prefix`, "aria-hidden": `true`, title: e, children: e }),
      (0, r.jsx)(`input`, {
        id: o?.id,
        "aria-invalid": o?.invalid || void 0,
        "aria-describedby": o?.describedBy,
        autoComplete: `off`,
        spellCheck: !1,
        ...a,
      }),
    ],
  });
}
var b = /^[^\s@,;]+@[^\s@,;]+\.[^\s@,;]{2,}$/;
function x({
  value: e,
  onChange: t,
  placeholder: i = `name@company.com`,
  validate: a = (e, t) =>
    b.test(e) ? (t.includes(e) ? `Already on the list` : null) : `That doesn't look like an email address`,
  max: o,
}) {
  let s = (0, n.useContext)(g),
    [c, u] = (0, n.useState)(``),
    [d, m] = (0, n.useState)([]),
    h = (0, n.useRef)(null),
    _ = (0, n.useRef)(null),
    v = (0, n.useRef)(e);
  v.current = e;
  let y = (e) => {
      let n = e
        .split(/[\s,;]+/)
        .map((e) => e.trim().toLowerCase())
        .filter(Boolean);
      if (!n.length) return !0;
      let r = [...v.current],
        i = [],
        c = null;
      for (let e of n) {
        let t = o !== void 0 && r.length >= o ? `Up to ${o}` : a(e, r);
        t ? ((c ??= t), i.push(e)) : r.push(e);
      }
      return (r.length !== v.current.length && ((v.current = r), t(r)), u(i.join(`, `)), s?.flag(c), !c);
    },
    x = (e) => {
      if (d.includes(e)) return;
      m((t) => [...t, e]);
      let n = _.current?.querySelector(`[data-entry="${CSS.escape(e)}"]`),
        r = () => {
          (m((t) => t.filter((t) => t !== e)), t(v.current.filter((t) => t !== e)));
        };
      n && n.animate && !l()
        ? (n.animate(
            [
              { width: `${n.offsetWidth}px`, marginRight: `0px`, opacity: 1, transform: `none` },
              { width: `0px`, marginRight: `-6px`, opacity: 0, transform: `scale(0.85)` },
            ],
            { duration: 240, easing: `cubic-bezier(0.22, 1, 0.36, 1)`, fill: `forwards` },
          ).onfinish = r)
        : r();
    };
  return (0, r.jsxs)(`div`, {
    className: `ui-sf__tags`,
    "data-invalid": s?.invalid || void 0,
    onClick: (e) => e.target === e.currentTarget && h.current?.focus(),
    children: [
      e.length > 0 &&
        (0, r.jsx)(`ul`, {
          ref: _,
          className: `ui-sf__chips`,
          "aria-label": `Added`,
          children: e.map((e) =>
            (0, r.jsxs)(
              `li`,
              {
                className: `ui-sf__chip`,
                "data-entry": e,
                "data-leaving": d.includes(e) || void 0,
                children: [
                  (0, r.jsx)(`span`, { className: `ui-sf__chip-text`, title: e, children: e }),
                  (0, r.jsx)(`button`, {
                    type: `button`,
                    className: `ui-sf__chip-x`,
                    "aria-label": `Remove ${e}`,
                    onClick: () => x(e),
                    children: (0, r.jsx)(f, { d: p.close }),
                  }),
                ],
              },
              e,
            ),
          ),
        }),
      (0, r.jsx)(`input`, {
        ref: h,
        id: s?.id,
        type: `email`,
        inputMode: `email`,
        autoComplete: `off`,
        spellCheck: !1,
        className: `ui-sf__tags-input`,
        placeholder: e.length ? `Add another` : i,
        value: c,
        "aria-invalid": s?.invalid || void 0,
        "aria-describedby": s?.describedBy,
        onChange: (e) => {
          (u(e.target.value), s?.flag(null));
        },
        onKeyDown: (t) => {
          (t.key === `Enter` && c.trim()) || t.key === `,` || t.key === `;`
            ? (t.preventDefault(), y(c))
            : t.key === `Backspace` && !c && e.length && (t.preventDefault(), x(e[e.length - 1]));
        },
        onPaste: (e) => {
          let t = e.clipboardData.getData(`text`);
          /[\s,;]/.test(t.trim()) && (e.preventDefault(), y(`${c} ${t}`));
        },
        onBlur: () => c.trim() && y(c),
      }),
    ],
  });
}
function S({ value: e, onChange: t, options: i, label: a }) {
  let s = (0, n.useRef)(null),
    c = (0, n.useRef)(null);
  ((0, n.useLayoutEffect)(() => {
    d(s.current, c.current, `[aria-checked="true"]`);
  }),
    (0, n.useEffect)(() => {
      let e = s.current;
      if (!e) return;
      let t = new ResizeObserver(() => d(e, c.current, `[aria-checked="true"]`));
      return (t.observe(e), () => t.disconnect());
    }, []));
  let l = i.findIndex((t) => t.value === e);
  return (0, r.jsxs)(`div`, {
    ref: s,
    className: `ui-sf__choices`,
    role: `radiogroup`,
    "aria-label": a,
    onKeyDown: (e) => {
      if (!i.length) return;
      let n =
        e.key === `ArrowRight` || e.key === `ArrowDown`
          ? 1
          : e.key === `ArrowLeft` || e.key === `ArrowUp`
            ? -1
            : 0;
      if (n) {
        e.preventDefault();
        let r = (l + n + i.length) % i.length;
        (t(i[r].value), s.current?.querySelector(`[data-index="${r}"]`)?.focus());
      } else e.key === `Enter` && (e.preventDefault(), e.currentTarget.closest(`form`)?.requestSubmit());
    },
    children: [
      (0, r.jsx)(`span`, { ref: c, className: `ui-sf__ring`, "aria-hidden": `true` }),
      i.map((e, n) => {
        let i = n === l;
        return (0, r.jsxs)(
          `button`,
          {
            type: `button`,
            role: `radio`,
            "aria-checked": i,
            tabIndex: i ? 0 : -1,
            "data-value": e.value,
            "data-index": n,
            className: `ui-sf__choice`,
            onClick: () => t(e.value),
            children: [
              (0, r.jsxs)(`span`, {
                className: `ui-sf__choice-top`,
                children: [
                  (0, r.jsx)(`span`, {
                    className: `ui-sf__choice-title`,
                    dir: `auto`,
                    title: o(e.title),
                    children: e.title,
                  }),
                  e.badge &&
                    (0, r.jsx)(`span`, { className: `ui-sf__badge`, title: e.badge, children: e.badge }),
                  (0, r.jsx)(`span`, { className: `ui-sf__radio`, "aria-hidden": `true` }),
                ],
              }),
              e.aside && (0, r.jsx)(`span`, { className: `ui-sf__choice-aside`, children: e.aside }),
              e.description &&
                (0, r.jsx)(`span`, { className: `ui-sf__choice-desc`, dir: `auto`, children: e.description }),
            ],
          },
          `${e.value}#${n}`,
        );
      }),
    ],
  });
}
function C({ rows: e, onEdit: t }) {
  return (0, r.jsx)(`dl`, {
    className: `ui-sf__review`,
    children: e.map((e, n) =>
      (0, r.jsxs)(
        `div`,
        {
          className: `ui-sf__review-row`,
          children: [
            (0, r.jsx)(`dt`, { dir: `auto`, children: e.label }),
            (0, r.jsx)(`dd`, { dir: `auto`, children: e.value }),
            e.step &&
              t &&
              (0, r.jsx)(`button`, {
                type: `button`,
                className: `ui-sf__edit`,
                "aria-label": `Edit ${c(o(e.label))}`,
                onClick: () => t(e.step),
                children: `Edit`,
              }),
          ],
        },
        `${o(e.label)}#${n}`,
      ),
    ),
  });
}
function ee({ title: e, description: t, children: n }) {
  return (0, r.jsxs)(`div`, {
    className: `ui-sf__success`,
    children: [
      (0, r.jsx)(`span`, { className: `ui-sf__success-check`, children: (0, r.jsx)(m, {}) }),
      (0, r.jsx)(`h2`, { className: `ui-sf__heading`, tabIndex: -1, children: e }),
      t && (0, r.jsx)(`p`, { className: `ui-sf__desc`, children: t }),
      n && (0, r.jsx)(`div`, { className: `ui-sf__success-actions`, children: n }),
    ],
  });
}
var te = `.ui-sf{--ui-sf-tray: #f0f0f0;--ui-sf-card: #ffffff;--ui-sf-line: #ececec;--ui-sf-ink: #171717;--ui-sf-text: #404040;--ui-sf-muted: #8f8f8f;--ui-sf-faint: #b5b5b5;--ui-sf-edge: #dcdcdf;--ui-sf-field: #ffffff;--ui-sf-hover: #f2f2f3;--ui-sf-chip: #f2f2f3;--ui-sf-track: #e2e2e5;--ui-sf-accent: #2f6bff;--ui-sf-accent-soft: rgba(47, 107, 255, 0.05);--ui-sf-danger: #e5484d;--ui-sf-on-ink: #ffffff;--ui-sf-focus: rgba(23, 23, 23, 0.22);--ui-sf-ring: rgba(23, 23, 23, 0.08);--ui-sf-ease: cubic-bezier(0.22, 1, 0.36, 1);position: relative;box-sizing: border-box;container-type: inline-size;display: grid;grid-template-columns: minmax(0, 1fr);width: 100%;max-width: 520px;padding: 4px;border-radius: 20px;background: var(--ui-sf-tray);font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 13.5px;line-height: 1.45;color: var(--ui-sf-text);-webkit-font-smoothing: antialiased}.ui-sf *, .ui-sf *::before, .ui-sf *::after{box-sizing: border-box}:where(.ui-sf) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;cursor: pointer}:where(.ui-sf) svg{display: block;flex: none}:where(.ui-sf) :is(h2, p, dl, dd, ul, ol){margin: 0}.ui-sf button:focus-visible{outline: 2px solid var(--ui-sf-focus);outline-offset: 2px}.ui-sf__glyph{width: 16px;height: 16px;fill: none;stroke: currentColor;stroke-width: 1.8;stroke-linecap: round;stroke-linejoin: round}.ui-sf__sr{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}.ui-sf__draw{width: 14px;height: 14px;fill: none;stroke: currentColor;stroke-width: 2.6;stroke-linecap: round;stroke-linejoin: round}.ui-sf__draw path{stroke-dasharray: 1;stroke-dashoffset: 1;animation: ui-sf-draw 360ms var(--ui-sf-ease) 80ms forwards}.ui-sf__head{padding: 6px 6px 4px}.ui-sf__steps{position: relative}.ui-sf__list{display: grid;grid-template-columns: repeat(var(--ui-sf-n), minmax(0, 1fr));padding: 0;list-style: none}.ui-sf__step{position: relative;display: grid;justify-items: center;min-width: 0}.ui-sf__step-btn{display: inline-flex;align-items: center;gap: 5px;min-width: 0;max-width: 100%;height: 26px;padding: 0 6px;border-radius: 8px;line-height: 1;cursor: default;transition: background-color 200ms ease}button.ui-sf__step-btn{cursor: pointer}button.ui-sf__step-btn:hover{background: var(--ui-sf-ring)}.ui-sf__mark{display: inline-flex;flex: none;align-items: center;justify-content: center;min-width: 14px;font-size: 12.5px;line-height: 1;font-variant-numeric: tabular-nums;color: var(--ui-sf-faint);transition: color 260ms ease}.ui-sf__mark > span{line-height: 1;animation: ui-sf-in 260ms var(--ui-sf-ease) both}.ui-sf__mark .ui-sf__draw{width: 13px;height: 13px;stroke-width: 2.4}.ui-sf__step[data-state="current"] .ui-sf__mark{color: var(--ui-sf-ink)}.ui-sf__step[data-state="done"] .ui-sf__mark{color: var(--ui-sf-ink)}.ui-sf__step-label{overflow: hidden;max-width: 100%;font-size: 12.5px;white-space: nowrap;text-overflow: ellipsis;color: var(--ui-sf-muted);transition: color 260ms ease}.ui-sf__step[data-state="done"] .ui-sf__step-label{color: var(--ui-sf-text)}.ui-sf__step[data-state="current"] .ui-sf__step-label{color: var(--ui-sf-ink);font-weight: 500}button.ui-sf__step-btn:hover .ui-sf__step-label{color: var(--ui-sf-ink)}.ui-sf__compact{display: none;gap: 8px;padding: 0 6px}.ui-sf__compact-text{display: flex;align-items: baseline;min-width: 0;font-size: 12.5px;font-variant-numeric: tabular-nums;color: var(--ui-sf-muted);white-space: nowrap;animation: ui-sf-in 280ms var(--ui-sf-ease) both}.ui-sf__compact-dot{margin: 0 6px;color: var(--ui-sf-faint)}.ui-sf__compact-title{overflow: hidden;text-overflow: ellipsis;color: var(--ui-sf-ink);font-weight: 500}.ui-sf__card{display: grid;border-radius: 16px;background: var(--ui-sf-card);box-shadow: 0 0 0 1px var(--ui-sf-line), 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-sf__viewport{position: relative;overflow: hidden;transition: height 380ms var(--ui-sf-ease)}.ui-sf__pane{padding: 20px 20px 8px;animation: ui-sf-enter 380ms var(--ui-sf-ease) both}.ui-sf__pane[data-dir="-1"]{animation-name: ui-sf-enter-back}.ui-sf__pane[data-first]{animation: none}.ui-sf__pane[data-pane="leaving"]{position: absolute;top: 0;left: 0;right: 0;pointer-events: none;animation: ui-sf-leave 300ms var(--ui-sf-ease) both}.ui-sf__pane[data-pane="leaving"][data-dir="-1"]{animation-name: ui-sf-leave-back}.ui-sf__heading{font-size: 16px;font-weight: 600;line-height: 1.3;letter-spacing: -0.01em;color: var(--ui-sf-ink);outline: none;overflow-wrap: anywhere}.ui-sf__desc{margin-top: 4px;color: var(--ui-sf-muted);text-wrap: pretty;white-space: pre-line;overflow-wrap: anywhere}.ui-sf__body{display: grid;gap: 14px;margin-top: 18px}.ui-sf__field{display: grid;min-width: 0}.ui-sf__label{display: flex;align-items: baseline;justify-content: space-between;gap: 8px;margin-bottom: 6px;font-size: 12.5px;font-weight: 500;color: var(--ui-sf-ink)}.ui-sf__label-text{min-width: 0;overflow-wrap: anywhere}.ui-sf__optional{font-weight: 400;color: var(--ui-sf-muted)}.ui-sf__control{min-width: 0}.ui-sf__input, .ui-sf__tags{display: flex;align-items: center;min-width: 0;min-height: 38px;border-radius: 10px;background: var(--ui-sf-field);box-shadow: inset 0 0 0 1px var(--ui-sf-edge), 0 1px 2px rgba(0, 0, 0, 0.03);transition: box-shadow 180ms ease;cursor: text}.ui-sf__input:hover, .ui-sf__tags:hover{box-shadow: inset 0 0 0 1px var(--ui-sf-faint), 0 1px 2px rgba(0, 0, 0, 0.03)}.ui-sf__input:focus-within, .ui-sf__tags:focus-within{box-shadow: inset 0 0 0 1px var(--ui-sf-ink), 0 0 0 3px var(--ui-sf-ring)}.ui-sf__input[data-invalid], .ui-sf__tags[data-invalid]{box-shadow: inset 0 0 0 1px var(--ui-sf-danger)}.ui-sf__input[data-invalid]:focus-within, .ui-sf__tags[data-invalid]:focus-within{box-shadow: inset 0 0 0 1px var(--ui-sf-danger), 0 0 0 3px rgba(229, 72, 77, 0.12)}.ui-sf__input input, .ui-sf__tags-input{flex: 1;min-width: 0;height: 36px;padding: 0 12px;border: 0;outline: none;background: none;font: inherit;font-size: 14px;color: var(--ui-sf-ink)}.ui-sf__input input::placeholder, .ui-sf__tags-input::placeholder{color: var(--ui-sf-faint)}.ui-sf__prefix{flex: 0 1 auto;min-width: 0;max-width: 60%;overflow: hidden;padding-left: 12px;font-size: 14px;color: var(--ui-sf-muted);white-space: nowrap;text-overflow: ellipsis;user-select: none}.ui-sf__prefix + input{padding-left: 1px}.ui-sf__fold{display: grid;grid-template-rows: 0fr;opacity: 0;transition: grid-template-rows 260ms var(--ui-sf-ease), opacity 200ms ease}.ui-sf__fold[data-open]{grid-template-rows: 1fr;opacity: 1}.ui-sf__fold > div{min-height: 0;overflow: hidden}.ui-sf__msg, .ui-sf__hint{padding-top: 6px;font-size: 12.5px;text-wrap: pretty;overflow-wrap: anywhere}.ui-sf__msg{color: var(--ui-sf-danger);animation: ui-sf-in 240ms var(--ui-sf-ease) both}.ui-sf__hint{color: var(--ui-sf-muted)}.ui-sf__tags{flex-wrap: wrap;gap: 6px;padding: 5px}.ui-sf__chips{display: contents;padding: 0;list-style: none}.ui-sf__chip{display: inline-flex;align-items: center;gap: 2px;min-width: 0;max-width: 100%;height: 28px;padding: 0 2px 0 10px;overflow: hidden;border-radius: 8px;background: var(--ui-sf-chip);font-size: 13px;color: var(--ui-sf-ink);white-space: nowrap;animation: ui-sf-chip 300ms var(--ui-sf-ease) both}.ui-sf__chip[data-leaving]{pointer-events: none}.ui-sf__chip-text{overflow: hidden;text-overflow: ellipsis}.ui-sf__chip-x{display: grid;place-items: center;flex: none;width: 24px;height: 24px;border-radius: 6px;color: var(--ui-sf-muted);transition: background-color 140ms ease, color 140ms ease}.ui-sf__chip-x .ui-sf__glyph{width: 13px;height: 13px}.ui-sf__chip-x:hover{background: var(--ui-sf-track);color: var(--ui-sf-ink)}.ui-sf__chip[data-leaving] .ui-sf__chip-x{background: none}.ui-sf__tags-input{flex: 1 1 140px;height: 28px;padding: 0 7px}.ui-sf__choices{position: relative;display: grid;grid-auto-columns: minmax(0, 1fr);grid-auto-flow: column;gap: 8px}.ui-sf__ring{position: absolute;top: 0;left: 0;z-index: 2;border-radius: 12px;box-shadow: inset 0 0 0 1.5px var(--ui-sf-accent), 0 0 0 3px rgba(47, 107, 255, 0.1);opacity: 0;pointer-events: none;transition: transform 380ms var(--ui-sf-ease), width 380ms var(--ui-sf-ease), height 380ms var(--ui-sf-ease), opacity 200ms ease}.ui-sf__choice{position: relative;display: grid;align-content: start;gap: 2px;min-width: 0;padding: 12px;border-radius: 12px;background: var(--ui-sf-field);box-shadow: inset 0 0 0 1px var(--ui-sf-edge);text-align: left;transition: background-color 200ms ease, box-shadow 200ms ease}.ui-sf__choice:hover{box-shadow: inset 0 0 0 1px var(--ui-sf-faint)}.ui-sf__choice[aria-checked="true"]{background: var(--ui-sf-accent-soft);box-shadow: inset 0 0 0 1px transparent}.ui-sf__choice:focus-visible{outline-offset: 3px}.ui-sf__choice-top{display: flex;flex-wrap: wrap;align-items: center;gap: 2px 6px;min-width: 0}.ui-sf__choice-title{min-width: min(100%, 72px);overflow: hidden;font-weight: 600;color: var(--ui-sf-ink);white-space: nowrap;text-overflow: ellipsis}.ui-sf__badge{flex: 0 1 auto;min-width: 0;max-width: 50%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;padding: 1px 6px;border-radius: 6px;background: var(--ui-sf-chip);font-size: 11px;font-weight: 500;color: var(--ui-sf-text)}.ui-sf__radio{position: relative;flex: none;width: 16px;height: 16px;margin-left: auto;border-radius: 50%;box-shadow: inset 0 0 0 1.5px var(--ui-sf-edge);transition: box-shadow 220ms ease}.ui-sf__radio::after{content: "";position: absolute;inset: 4px;border-radius: 50%;background: var(--ui-sf-accent);transform: scale(0);transition: transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1)}.ui-sf__choice[aria-checked="true"] .ui-sf__radio{box-shadow: inset 0 0 0 1.5px var(--ui-sf-accent)}.ui-sf__choice[aria-checked="true"] .ui-sf__radio::after{transform: scale(1)}.ui-sf__choice-aside{font-size: 13px;font-variant-numeric: tabular-nums;color: var(--ui-sf-ink)}.ui-sf__choice-desc{margin-top: 4px;font-size: 12px;line-height: 1.4;color: var(--ui-sf-muted);text-wrap: pretty;overflow-wrap: anywhere}.ui-sf__review{display: grid;border-radius: 12px;box-shadow: inset 0 0 0 1px var(--ui-sf-line)}.ui-sf__review-row{display: grid;grid-template-columns: 96px minmax(0, 1fr) auto;align-items: baseline;gap: 12px;padding: 11px 8px 11px 14px}.ui-sf__review-row + .ui-sf__review-row{border-top: 1px solid var(--ui-sf-line)}.ui-sf__review dt{min-width: 0;font-size: 12.5px;color: var(--ui-sf-muted);overflow-wrap: anywhere}.ui-sf__review dd{min-width: 0;color: var(--ui-sf-ink);overflow-wrap: anywhere}.ui-sf__edit{height: 26px;margin: -4px 0;padding: 0 8px;border-radius: 7px;font-size: 12.5px;font-weight: 500;color: var(--ui-sf-text);transition: background-color 140ms ease, color 140ms ease}.ui-sf__edit:hover{background: var(--ui-sf-hover);color: var(--ui-sf-ink)}.ui-sf__success{display: grid;justify-items: center;padding: 20px 0 14px;text-align: center}.ui-sf__success-check{display: grid;place-items: center;width: 44px;height: 44px;margin-bottom: 14px;border-radius: 50%;background: var(--ui-sf-ink);color: var(--ui-sf-on-ink);box-shadow: 0 0 0 6px var(--ui-sf-ring);animation: ui-sf-pop 520ms cubic-bezier(0.34, 1.56, 0.64, 1) 120ms both}.ui-sf__success-check .ui-sf__draw{width: 20px;height: 20px}.ui-sf__success-check .ui-sf__draw path{animation-delay: 320ms}.ui-sf__success .ui-sf__heading{animation: ui-sf-in 340ms var(--ui-sf-ease) 220ms both}.ui-sf__success .ui-sf__desc{max-width: 40ch;text-wrap: balance;animation: ui-sf-in 340ms var(--ui-sf-ease) 290ms both}.ui-sf__success-actions{display: flex;flex-wrap: wrap;justify-content: center;gap: 8px;margin-top: 16px;animation: ui-sf-in 340ms var(--ui-sf-ease) 360ms both}.ui-sf__foot-fold{position: sticky;bottom: 0;z-index: 3;display: grid;grid-template-rows: 1fr;border-radius: 0 0 16px 16px;background: var(--ui-sf-card);transition: grid-template-rows 360ms var(--ui-sf-ease), opacity 220ms ease}.ui-sf__foot-fold[data-hidden]{grid-template-rows: 0fr;opacity: 0}.ui-sf__foot{display: flex;align-items: center;gap: 10px;min-height: 0;overflow: hidden;padding: 12px 16px 16px}.ui-sf__btn{display: inline-flex;align-items: center;justify-content: center;flex: none;height: 36px;border-radius: 10px;font-weight: 500;white-space: nowrap;transition: background-color 140ms ease, opacity 200ms ease, transform 140ms ease, width 320ms var(--ui-sf-ease), visibility 200ms}.ui-sf__btn-ghost{gap: 4px;padding: 0 12px 0 8px;color: var(--ui-sf-text)}.ui-sf__btn-ghost:hover{background: var(--ui-sf-hover);color: var(--ui-sf-ink)}.ui-sf__btn-ghost[data-hidden]{opacity: 0;visibility: hidden}.ui-sf__btn-primary{margin-left: auto;overflow: hidden;background: var(--ui-sf-ink);color: var(--ui-sf-on-ink)}.ui-sf__btn-primary:hover{opacity: 0.88}.ui-sf__btn-primary:active{transform: scale(0.97)}.ui-sf__btn-primary[aria-disabled="true"]{opacity: 0.4}.ui-sf__btn-primary[data-busy]{opacity: 0.75;cursor: progress}.ui-sf__btn-inner{display: inline-flex;flex: none;align-items: center;gap: 8px;max-width: calc(100cqw - 120px);padding: 0 15px}.ui-sf__btn-label{min-width: 0;overflow: hidden;text-overflow: ellipsis;animation: ui-sf-in 260ms var(--ui-sf-ease) both}.ui-sf__btn-secondary{padding: 0 14px;color: var(--ui-sf-text);box-shadow: inset 0 0 0 1px var(--ui-sf-edge)}.ui-sf__btn-secondary:hover{background: var(--ui-sf-hover);color: var(--ui-sf-ink)}.ui-sf__spinner{width: 13px;height: 13px;border-radius: 50%;border: 1.8px solid currentColor;border-right-color: transparent;animation: ui-sf-spin 700ms linear infinite}.ui-sf__submit-error{flex: 1 1 auto;min-width: 0;overflow-wrap: anywhere;font-size: 12.5px;color: var(--ui-sf-danger);animation: ui-sf-in 240ms var(--ui-sf-ease) both}@keyframes ui-sf-in{from{opacity: 0;transform: translateY(4px);filter: blur(2px)}to{opacity: 1;transform: none;filter: none}}@keyframes ui-sf-enter{from{opacity: 0;transform: translateX(28px)}to{opacity: 1;transform: none}}@keyframes ui-sf-enter-back{from{opacity: 0;transform: translateX(-28px)}to{opacity: 1;transform: none}}@keyframes ui-sf-leave{to{opacity: 0;transform: translateX(-28px)}}@keyframes ui-sf-leave-back{to{opacity: 0;transform: translateX(28px)}}@keyframes ui-sf-draw{to{stroke-dashoffset: 0}}@keyframes ui-sf-pop{0%{opacity: 0;transform: scale(0.4)}60%{opacity: 1;transform: scale(1.08)}100%{opacity: 1;transform: scale(1)}}@keyframes ui-sf-chip{from{opacity: 0;transform: scale(0.85)}to{opacity: 1;transform: none}}@keyframes ui-sf-spin{to{transform: rotate(360deg)}}@container (max-width: 420px){.ui-sf__head{padding: 12px 8px 12px}.ui-sf__steps{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%)}.ui-sf__compact{display: grid}.ui-sf__pane{padding: 18px 16px 6px}.ui-sf__foot{padding: 12px 12px 12px}.ui-sf__btn{height: 40px}.ui-sf__choices{grid-template-columns: minmax(0, 1fr);grid-auto-flow: row}.ui-sf__choice{grid-template-columns: minmax(0, 1fr) auto;column-gap: 10px}.ui-sf__choice-top{grid-column: 1}.ui-sf__choice-aside{grid-column: 2;grid-row: 1;align-self: center}.ui-sf__choice-desc{grid-column: 1 / -1;margin-top: 2px}.ui-sf__radio{order: -1;margin-left: 0;margin-right: 2px}.ui-sf__review-row{grid-template-columns: minmax(0, 1fr) auto;row-gap: 2px;padding-left: 12px}.ui-sf__review dt{grid-column: 1}.ui-sf__review dd{grid-column: 1;grid-row: 2}.ui-sf__edit{grid-column: 2;grid-row: 1 / span 2;align-self: center;margin: 0}}@media (hover: none) and (pointer: coarse){.ui-sf__input input, .ui-sf__tags-input, .ui-sf__prefix{font-size: 16px}.ui-sf__input, .ui-sf__tags{min-height: 44px}.ui-sf__input input{height: 42px}.ui-sf__chip{height: 32px}.ui-sf__chip-x{width: 30px;height: 30px}.ui-sf__btn{height: 42px}.ui-sf__edit{height: 36px;padding: 0 12px}.ui-sf__step-btn{padding: 4px;margin: -4px 0}}@media (prefers-reduced-motion: reduce){.ui-sf *, .ui-sf *::before, .ui-sf *::after{animation-duration: 1ms !important;animation-delay: 0ms !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-sf{--ui-sf-tray: #111113;--ui-sf-card: #19191b;--ui-sf-line: #2a2a2e;--ui-sf-ink: #ededed;--ui-sf-text: #c8c8cc;--ui-sf-muted: #8b8b92;--ui-sf-faint: #5c5c63;--ui-sf-edge: #34343a;--ui-sf-field: #1d1d20;--ui-sf-hover: #232326;--ui-sf-chip: #2a2a2e;--ui-sf-track: #2e2e33;--ui-sf-accent: #6d8bff;--ui-sf-accent-soft: rgba(109, 139, 255, 0.08);--ui-sf-danger: #ff6369;--ui-sf-on-ink: #111113;--ui-sf-focus: rgba(255, 255, 255, 0.3);--ui-sf-ring: rgba(255, 255, 255, 0.08)}`,
  w = (e) =>
    e
      .toLowerCase()
      .normalize(`NFKD`)
      .replace(/[̀-ͯ]/g, ``)
      .replace(/[^a-z0-9]+/g, `-`)
      .replace(/^-+|-+$/g, ``)
      .slice(0, 32),
  T = [
    { value: `free`, title: `Free`, aside: `$0`, description: `Up to 3 members and 5 projects` },
    {
      value: `pro`,
      title: `Pro`,
      aside: `$12\xA0/\xA0seat`,
      description: `Unlimited projects, guests and history`,
      badge: `Popular`,
    },
    {
      value: `business`,
      title: `Business`,
      aside: `$24\xA0/\xA0seat`,
      description: `SSO, audit log and priority support`,
    },
  ],
  E = `Northwind Studio`;
function D({ ctx: e, autoplay: t }) {
  let { values: i, setValues: a } = e,
    o = (0, n.useRef)(0),
    s = () => {
      (clearTimeout(o.current), (t.current = !1));
    },
    c = (e) => a({ name: e, ...(i.slugEdited ? {} : { slug: w(e) }) });
  return (
    (0, n.useEffect)(() => {
      if (!t.current) return;
      let e = 0,
        n = () => {
          ((e += 1),
            a({ name: E.slice(0, e), slug: w(E.slice(0, e)) }),
            e < 16 ? (o.current = window.setTimeout(n, 55 + Math.random() * 45)) : (t.current = !1));
        };
      return ((o.current = window.setTimeout(n, 650)), () => clearTimeout(o.current));
    }, []),
    (0, r.jsxs)(r.Fragment, {
      children: [
        (0, r.jsx)(v, {
          name: `name`,
          label: `Workspace name`,
          children: (0, r.jsx)(y, {
            value: i.name,
            placeholder: `Acme Inc.`,
            maxLength: 48,
            onFocus: s,
            onChange: (e) => c(e.target.value),
          }),
        }),
        (0, r.jsx)(v, {
          name: `slug`,
          label: `Workspace URL`,
          hint: `Lowercase letters, numbers and dashes`,
          children: (0, r.jsx)(y, {
            prefix: `affect.app/`,
            value: i.slug,
            placeholder: `acme`,
            maxLength: 32,
            onFocus: s,
            onChange: (e) =>
              a({ slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ``), slugEdited: !0 }),
          }),
        }),
      ],
    })
  );
}
function O() {
  let e = (0, n.useRef)(!0);
  return (0, r.jsx)(`div`, {
    className: `stepper-form-demo`,
    children: (0, r.jsx)(_, {
      steps: [
        {
          id: `workspace`,
          title: `Workspace`,
          heading: `Name your workspace`,
          description: `This is where your team's projects live.`,
          render: (t) => (0, r.jsx)(D, { ctx: t, autoplay: e }),
          validate: (e) => ({
            name: e.name.trim().length < 2 ? `Give your workspace a name` : void 0,
            slug: e.slug.length < 3 ? `Use at least 3 characters` : void 0,
          }),
        },
        {
          id: `team`,
          title: `Team`,
          heading: `Invite your teammates`,
          description: `They'll get an email with a link to join.`,
          render: ({ values: e, setValues: t }) =>
            (0, r.jsx)(v, {
              name: `invites`,
              label: `Email addresses`,
              hint: `Press Enter or comma to add`,
              optional: !0,
              children: (0, r.jsx)(x, { value: e.invites, max: 20, onChange: (e) => t({ invites: e }) }),
            }),
        },
        {
          id: `plan`,
          title: `Plan`,
          heading: `Pick a plan`,
          description: `Every plan starts with a 14‑day trial.`,
          render: ({ values: e, setValues: t }) =>
            (0, r.jsx)(S, { label: `Plan`, value: e.plan, options: T, onChange: (e) => t({ plan: e }) }),
        },
        {
          id: `review`,
          title: `Review`,
          heading: `Review and create`,
          description: `Everything can be changed later in settings.`,
          render: ({ values: e, goTo: t }) => {
            let n = T.find((t) => t.value === e.plan),
              i = e.invites.length;
            return (0, r.jsx)(C, {
              onEdit: t,
              rows: [
                {
                  label: `Workspace`,
                  value: (0, r.jsxs)(r.Fragment, {
                    children: [
                      e.name,
                      (0, r.jsxs)(`span`, { className: `sf-demo__sub`, children: [`affect.app/`, e.slug] }),
                    ],
                  }),
                  step: `workspace`,
                },
                {
                  label: `Teammates`,
                  value: i
                    ? (0, r.jsxs)(r.Fragment, {
                        children: [
                          i,
                          ` `,
                          i === 1 ? `invite` : `invites`,
                          (0, r.jsx)(`span`, { className: `sf-demo__sub`, children: e.invites.join(`, `) }),
                        ],
                      })
                    : `Just you for now`,
                  step: `team`,
                },
                {
                  label: `Plan`,
                  value: (0, r.jsxs)(r.Fragment, {
                    children: [
                      n.title,
                      (0, r.jsxs)(`span`, { className: `sf-demo__muted`, children: [` · `, n.aside] }),
                    ],
                  }),
                  step: `plan`,
                },
              ],
            });
          },
        },
      ],
      initialValues: {
        name: ``,
        slug: ``,
        slugEdited: !1,
        invites: [`maya@northwind.studio`, `leo@northwind.studio`],
        plan: `pro`,
      },
      submitLabel: `Create workspace`,
      onComplete: () => new Promise((e) => setTimeout(e, 1100)),
      success: (t, n) =>
        (0, r.jsx)(ee, {
          title: `${t.name} is ready`,
          description: t.invites.length
            ? `${t.invites.length} ${t.invites.length === 1 ? `invite is` : `invites are`} on the way. Your trial runs for 14\u00a0days.`
            : `Your trial runs for 14\xA0days.`,
          children: (0, r.jsx)(`button`, {
            type: `button`,
            className: `ui-sf__btn ui-sf__btn-secondary`,
            onClick: () => {
              ((e.current = !0), n());
            },
            children: `Start over`,
          }),
        }),
    }),
  });
}
