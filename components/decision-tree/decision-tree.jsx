import { t as e } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
/* empty css             */ var n = e(),
  r = t(),
  i = { high: `High risk`, medium: `Medium risk`, low: `Low risk` },
  a = (e) => (e.match(/[\p{L}\p{N}]/u)?.[0] ?? ``).toUpperCase() || `AI`,
  o = new Intl.NumberFormat(`en-US`),
  s = 1500,
  c = 2600,
  l = 280,
  u = (e) => (e === void 0 ? [] : typeof e == `string` ? [e] : e),
  d = () => typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,
  f = () =>
    (0, r.jsx)(`svg`, {
      width: `16`,
      height: `16`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, {
        d: `M5 14L8.5 17.5L19 6.5`,
        stroke: `currentColor`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
        strokeWidth: `1.8`,
      }),
    }),
  p = () =>
    (0, r.jsxs)(`svg`, {
      width: `14`,
      height: `14`,
      viewBox: `0 0 24 24`,
      fill: `none`,
      "aria-hidden": `true`,
      children: [
        (0, r.jsx)(`path`, {
          d: `M13.9248 21H10.0752C5.44476 21 3.12955 21 2.27636 19.4939C1.42317 17.9879 2.60736 15.9914 4.97574 11.9985L6.90057 8.75333C9.17559 4.91778 10.3131 3 12 3C13.6869 3 14.8244 4.91777 17.0994 8.75332L19.0243 11.9985C21.3926 15.9914 22.5768 17.9879 21.7236 19.4939C20.8704 21 18.5552 21 13.9248 21Z`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.8`,
        }),
        (0, r.jsx)(`path`, {
          d: `M12 9V13`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `2`,
        }),
        (0, r.jsx)(`path`, {
          d: `M12 16.8V17`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `2.4`,
        }),
      ],
    }),
  m = () =>
    (0, r.jsxs)(`svg`, {
      width: `16`,
      height: `16`,
      viewBox: `0 0 16 16`,
      fill: `none`,
      "aria-hidden": `true`,
      children: [
        (0, r.jsx)(`circle`, { cx: `3.5`, cy: `8`, r: `2`, stroke: `currentColor`, strokeWidth: `1.4` }),
        (0, r.jsx)(`circle`, { cx: `12.5`, cy: `3.5`, r: `2`, stroke: `currentColor`, strokeWidth: `1.4` }),
        (0, r.jsx)(`circle`, { cx: `12.5`, cy: `12.5`, r: `2`, stroke: `currentColor`, strokeWidth: `1.4` }),
        (0, r.jsx)(`path`, {
          d: `M5.5 8H7.5C8.3 8 8.5 7.6 8.5 6.8V5C8.5 4 9 3.5 10 3.5H10.5M8.5 8.2V11C8.5 12 9 12.5 10 12.5H10.5`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeWidth: `1.4`,
        }),
      ],
    }),
  ee = ({ size: e = 16 }) =>
    (0, r.jsxs)(`svg`, {
      width: e,
      height: e,
      viewBox: `0 0 24 24`,
      fill: `none`,
      "aria-hidden": `true`,
      children: [
        (0, r.jsx)(`path`, {
          d: `M18.9905 19H19M18.9905 19C18.3678 19.6175 17.2393 19.4637 16.4479 19.4637C15.4765 19.4637 15.0087 19.6537 14.3154 20.347C13.7251 20.9374 12.9337 22 12 22C11.0663 22 10.2749 20.9374 9.68457 20.347C8.99128 19.6537 8.52349 19.4637 7.55206 19.4637C6.76068 19.4637 5.63218 19.6175 5.00949 19C4.38181 18.3776 4.53628 17.2444 4.53628 16.4479C4.53628 15.4414 4.31616 14.9786 3.59938 14.2618C2.53314 13.1956 2.00002 12.6624 2 12C2.00001 11.3375 2.53312 10.8044 3.59935 9.73817C4.2392 9.09832 4.53628 8.46428 4.53628 7.55206C4.53628 6.76065 4.38249 5.63214 5 5.00944C5.62243 4.38178 6.7556 4.53626 7.55208 4.53626C8.46427 4.53626 9.09832 4.2392 9.73815 3.59937C10.8044 2.53312 11.3375 2 12 2C12.6625 2 13.1956 2.53312 14.2618 3.59937C14.9015 4.23907 15.5355 4.53626 16.4479 4.53626C17.2393 4.53626 18.3679 4.38247 18.9906 5C19.6182 5.62243 19.4637 6.75559 19.4637 7.55206C19.4637 8.55858 19.6839 9.02137 20.4006 9.73817C21.4669 10.8044 22 11.3375 22 12C22 12.6624 21.4669 13.1956 20.4006 14.2618C19.6838 14.9786 19.4637 15.4414 19.4637 16.4479C19.4637 17.2444 19.6182 18.3776 18.9905 19Z`,
          stroke: `currentColor`,
          strokeWidth: `1.6`,
        }),
        (0, r.jsx)(`path`, {
          d: `M9 12.8929C9 12.8929 10.2 13.5447 10.8 14.5C10.8 14.5 12.6 10.75 15 9.5`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.6`,
        }),
      ],
    });
function h({ decisions: e, onChoose: t, allowOther: h = !0, title: g = `Decisions`, ref: _, className: v }) {
  let y = `${(0, n.useId)()}-tip`,
    b = (0, n.useRef)(null),
    x = (0, n.useRef)(null),
    S = (0, n.useRef)(null),
    C = (0, n.useRef)(null),
    w = (0, n.useRef)(null),
    ne = (0, n.useRef)(null),
    T = (0, n.useRef)(null),
    E = (0, n.useRef)(new Map()),
    D = (0, n.useRef)(new Map()),
    re = (0, n.useRef)([]),
    O = (e, t) => {
      re.current.push(window.setTimeout(e, t));
    };
  (0, n.useEffect)(() => () => re.current.forEach((e) => window.clearTimeout(e)), []);
  let k = (e) => (t) => {
      t ? E.current.set(e, t) : E.current.delete(e);
    },
    [ie, ae] = (0, n.useState)({}),
    [oe, se] = (0, n.useState)(null),
    [A, j] = (0, n.useState)(null),
    [M, N] = (0, n.useState)(null),
    [P, F] = (0, n.useState)(!1),
    [I, L] = (0, n.useState)(``),
    [ce, R] = (0, n.useState)(null),
    [le, z] = (0, n.useState)(null),
    [ue, de] = (0, n.useState)(null),
    [fe, B] = (0, n.useState)(``),
    [V, pe] = (0, n.useState)(!1),
    me = new Map(),
    he = new Map();
  for (let t of e) {
    let e = he.get(t.id) ?? 0;
    (he.set(t.id, e + 1), me.set(t, e ? `${t.id}#${e}` : t.id));
  }
  let H = (e) => me.get(e) ?? e.id,
    U = e.filter((e) => !ie[H(e)]),
    ge = (0, n.useRef)(0),
    _e = U.findIndex((e) => H(e) === oe),
    W = _e >= 0 ? _e : Math.min(ge.current, U.length - 1),
    G = W >= 0 ? U[W] : void 0,
    ve = e.length,
    ye = Object.keys(ie).length;
  ((0, n.useLayoutEffect)(() => {
    ((ge.current = Math.max(0, W)), G && H(G) !== oe && se(H(G)));
  }),
    (0, n.useLayoutEffect)(() => {
      (j(null), N(null), F(!1), L(``), R(null), z(null));
    }, [G && H(G)]),
    (0, n.useLayoutEffect)(() => {
      let e = b.current;
      if (!e) return;
      pe(e.clientWidth < 640);
      let t = new ResizeObserver(() => pe(e.clientWidth < 640));
      return (t.observe(e), () => t.disconnect());
    }, []));
  let K = (e) => {
      (de(e), O(() => de((t) => (t === e ? null : t)), 220));
    },
    be = (e, t) => {
      let n = d() ? 0 : l;
      (O(() => N((t) => (t && t.id === H(e) ? { ...t, leaving: !0 } : t)), t),
        O(() => {
          (ae((t) => ({ ...t, [H(e)]: !0 })),
            b.current?.contains(document.activeElement) &&
              requestAnimationFrame(() => b.current?.focus({ preventScroll: !0 })));
        }, t + n));
    },
    q = (e) => {
      if (!G || M) return;
      let n = G;
      if (h && e === n.options.length) {
        (K(`other`), F(!0), j(e), requestAnimationFrame(() => w.current?.focus({ preventScroll: !0 })));
        return;
      }
      let r = n.options[e];
      r &&
        (K(`opt:${e}`),
        j(null),
        R(null),
        N({ id: H(n), i: e }),
        B(`${r.label} – picked. ${n.agent.trim() || `The agent`} goes ahead.`),
        t?.(n, { index: e, option: r }),
        be(n, s));
    },
    xe = () => {
      let e = I.trim();
      if (!G || !e || M) return;
      let n = G;
      (K(`send`),
        N({ id: H(n), i: n.options.length, other: e }),
        B(`Sent to the ${(n.agent.trim() || `Agent`).toLowerCase()}: ${e}`),
        Promise.resolve(t?.(n, { other: e })).then((e) => {
          (O(() => {
            let t = e || `Got it – I'll take it from here.`;
            (N((e) => (e && e.id === H(n) ? { ...e, answer: t } : e)),
              B(`${n.agent.trim() || `Agent`}: ${t}`));
          }, 700),
            be(n, c));
        }));
    },
    J = (e) => {
      U.length < 2 || !G || M || se(H(U[(W + e + U.length) % U.length]));
    },
    Y = G
      ? G.options.flatMap((e) => (e.effects ?? []).flatMap((e) => u(e))).filter((e) => typeof e != `string`)
      : [],
    Se = () => Y.length && R((e) => (e === null ? 0 : e + 1 >= Y.length ? null : e + 1));
  (0, n.useImperativeHandle)(_, () => ({
    hover: (e) => !M && j(e),
    choose: q,
    setOther: (e) => {
      (P || F(!0), L(e));
    },
    send: xe,
    next: () => J(1),
    previous: () => J(-1),
    peek: (e) => R(e),
  }));
  let Ce = (e) => {
      if (
        e.defaultPrevented ||
        e.nativeEvent.isComposing ||
        !G ||
        e.target.closest(`textarea, input`) ||
        e.metaKey ||
        e.ctrlKey ||
        e.altKey
      )
        return;
      let t = (t) => {
          (e.preventDefault(), t());
        },
        n = Number(e.key);
      if (n >= 1 && n <= G.options.length + +!!h) return t(() => q(n - 1));
      let r = {
        arrowright: () => J(1),
        j: () => J(1),
        arrowleft: () => J(-1),
        k: () => J(-1),
        f: () => void Se(),
        escape: () => (ce === null ? F(!1) : R(null)),
      }[e.key.toLowerCase()];
      r && t(r);
    },
    [we, Te] = (0, n.useState)([]),
    [X, Ee] = (0, n.useState)({ w: 0, h: 0 });
  ((0, n.useLayoutEffect)(() => {
    let e = S.current;
    if (!e || !G) return;
    let t = () => {
      let t = (e) => {
          let t = 0,
            n = 0;
          for (let r = e; r; r = r.offsetParent) ((t += r.offsetLeft), (n += r.offsetTop));
          return { l: t, t: n };
        },
        n = t(e),
        r = (e) => {
          let r = E.current.get(e);
          if (!r) return null;
          let i = t(r),
            a = i.l - n.l,
            o = i.t - n.t;
          return { l: a, t: o, r: a + r.offsetWidth, b: o + r.offsetHeight, h: r.offsetHeight };
        },
        i = (e, t, n, r) => {
          let i = r - t;
          if (Math.abs(i) < 2) return `M${e} ${t}H${n}`;
          let a = Math.round(e + (n - e) / 2),
            o = Math.min(8, Math.abs(i) / 2, (n - e) / 2),
            s = Math.sign(i);
          return `M${e} ${t}H${a - o}Q${a} ${t} ${a} ${t + s * o}V${r - s * o}Q${a} ${r} ${a + o} ${r}H${n}`;
        },
        a = (e, t, n, r) => {
          if (n - e < 2) return `M${e} ${t}V${r}`;
          let i = Math.min(8, (r - t) / 2, (n - e) / 2);
          return `M${e} ${t}V${r - i}Q${e} ${r} ${e + i} ${r}H${n}`;
        },
        o = r(`root`);
      if (!o) return;
      let s = [],
        c = G.options.length + +!!h;
      for (let e = 0; e < c; e++) {
        let t = r(`opt:${e}`);
        if (!t) continue;
        let n = e === G.options.length ? t.t + 18 : t.t + t.h / 2;
        s.push({
          id: `b${e}`,
          b: e,
          kind: `branch`,
          d: V ? a(o.l + 18, o.b, t.l, t.t + Math.min(18, t.h / 2)) : i(o.r, o.t + o.h / 2, t.l, n),
        });
        let c = r(`leaf:${e}`);
        c &&
          s.push({
            id: `l${e}`,
            b: e,
            kind: `leaf`,
            d: V
              ? a(t.l + 16, t.b, c.l, c.t + Math.min(14, c.h / 2))
              : i(t.r, t.t + t.h / 2, c.l, c.t + c.h / 2),
          });
      }
      let l = E.current.get(`out`);
      if (l && M) {
        let t = r(`leaf:${M.i}`) ?? r(`opt:${M.i}`);
        if (t) {
          ((l.style.left = `${t.l + 24}px`),
            (l.style.maxWidth = `${Math.max(120, Math.min(280, e.clientWidth - (t.l + 24)))}px`),
            (l.style.top = `${t.b + 14}px`));
          let n = r(`out`);
          s.push({ id: `o`, b: M.i, kind: `out`, d: a(t.l + 12, t.b, n.l, n.t + Math.min(16, n.h / 2)) });
        }
      }
      let u = JSON.stringify(s);
      (Te((e) => (JSON.stringify(e) === u ? e : s)),
        Ee((t) =>
          t.w === e.scrollWidth && t.h === e.scrollHeight ? t : { w: e.scrollWidth, h: e.scrollHeight },
        ));
    };
    t();
    let n = new ResizeObserver(t);
    n.observe(e);
    for (let e of E.current.values()) n.observe(e);
    return () => n.disconnect();
  }),
    (0, n.useLayoutEffect)(() => {
      let e = ne.current,
        t = T.current,
        n = w.current;
      if (!e || !t || !n) return;
      let r = Math.min(Math.max(t.offsetHeight, 52), 72);
      (e.style.height || (e.style.height = `32px`),
        requestAnimationFrame(() => {
          e.style.height = `${r}px`;
        }));
      let i = t.offsetHeight > 72;
      ((n.style.overflowY = i ? `auto` : `hidden`), i && (n.scrollTop = n.scrollHeight));
    }));
  let Z = le ?? ce,
    Q = Z !== null && !M ? Y[Z] : void 0;
  (0, n.useLayoutEffect)(() => {
    let e = C.current,
      t = x.current,
      n = Z === null ? void 0 : D.current.get(Z);
    if (!e || !t || !n) return;
    let r = t.getBoundingClientRect(),
      i = t.offsetWidth ? r.width / t.offsetWidth : 1,
      a = n.getClientRects(),
      o = a[0] ?? n.getBoundingClientRect(),
      s = a[a.length - 1] ?? o,
      c = e.offsetWidth,
      l = e.offsetHeight,
      u = (o.top - r.top) / i,
      d = (s.bottom - r.top) / i,
      f = (o.left + o.width / 2 - r.left) / i,
      p = d + 8 + l > t.offsetHeight - 4 && u - l - 8 >= 4,
      m = Math.max(10, Math.min(f - c / 2, t.offsetWidth - c - 10));
    ((e.style.top = `${p ? u - l - 8 : d + 8}px`),
      (e.style.left = `${m}px`),
      e.style.setProperty(`--x`, `${f - m}px`),
      (e.dataset.side = p ? `above` : `below`));
  });
  let De = (e, t) =>
      u(e).map((e, n) => {
        if (typeof e == `string`) return (0, r.jsx)(`span`, { children: e }, n);
        let i = t.n++,
          a = Z === i && !M;
        return (0, r.jsx)(
          `mark`,
          {
            ref: (e) => {
              e ? D.current.set(i, e) : D.current.delete(i);
            },
            className: `ui-dct__flag`,
            "data-on": a ? `` : void 0,
            tabIndex: 0,
            "aria-label": `${e.text} – the agent is unsure`,
            "aria-describedby": a ? y : void 0,
            onMouseEnter: () => z(i),
            onMouseLeave: () => z((e) => (e === i ? null : e)),
            onFocus: () => R(i),
            onBlur: () => R((e) => (e === i ? null : e)),
            children: e.text,
          },
          n,
        );
      }),
    Oe = (e) => {
      let t = { n: 0 },
        n = M?.id === H(e) ? M : null,
        o = e.options.length,
        s = (e) => (n ? n.i !== e : A !== null && A !== e),
        c = (e) => (n ? n.i === e : A === e),
        l = (e, t, i) =>
          (0, r.jsxs)(
            `div`,
            {
              className: `ui-dct__row`,
              "data-dim": s(e) ? `` : void 0,
              style: { "--i": e },
              onMouseEnter: () => !n && j(e),
              onMouseLeave: () => !n && !P && j(null),
              children: [t, i],
            },
            e,
          );
      return (0, r.jsxs)(
        `div`,
        {
          ref: S,
          className: `ui-dct__tree`,
          "data-picked": n ? `` : void 0,
          "data-leaving": n?.leaving ? `` : void 0,
          children: [
            (0, r.jsx)(`svg`, {
              className: `ui-dct__links`,
              width: X.w,
              height: X.h,
              "aria-hidden": `true`,
              children: we.map((t) =>
                (0, r.jsx)(
                  `path`,
                  {
                    pathLength: 1,
                    d: t.d,
                    className: `ui-dct__link`,
                    "data-kind": t.kind,
                    "data-pick": e.options[t.b]?.pick ? `` : void 0,
                    "data-hot": c(t.b) ? `` : void 0,
                    "data-dim": s(t.b) ? `` : void 0,
                    style: { "--i": t.b },
                  },
                  t.id,
                ),
              ),
            }),
            (0, r.jsxs)(`div`, {
              ref: k(`root`),
              className: `ui-dct__root`,
              children: [
                (0, r.jsxs)(`div`, {
                  className: `ui-dct__who`,
                  children: [
                    (0, r.jsx)(`span`, {
                      className: `ui-dct__avatar`,
                      "aria-hidden": `true`,
                      children: e.icon ?? a(e.agent),
                    }),
                    (0, r.jsxs)(`span`, {
                      className: `ui-dct__meta`,
                      children: [
                        (0, r.jsxs)(`span`, {
                          className: `ui-dct__name`,
                          children: [
                            (0, r.jsx)(`span`, {
                              className: `ui-dct__agent`,
                              dir: `auto`,
                              title: e.agent,
                              children: e.agent,
                            }),
                            (e.risk === `high` || e.risk === `medium`) &&
                              (0, r.jsx)(`span`, {
                                className: `ui-dct__risk`,
                                "data-risk": e.risk,
                                children: i[e.risk],
                              }),
                          ],
                        }),
                        e.model &&
                          (0, r.jsx)(`span`, {
                            className: `ui-dct__model`,
                            title: e.model,
                            children: e.model,
                          }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsx)(`h3`, { className: `ui-dct__q`, dir: `auto`, children: e.question }),
                e.context &&
                  (0, r.jsx)(`p`, { className: `ui-dct__context`, dir: `auto`, children: e.context }),
              ],
            }),
            (0, r.jsxs)(`div`, {
              className: `ui-dct__branches`,
              role: `group`,
              "aria-label": `How should the agent go on?`,
              children: [
                e.options.map((e, i) =>
                  l(
                    i,
                    (0, r.jsxs)(`button`, {
                      ref: k(`opt:${i}`),
                      type: `button`,
                      className: `ui-dct__opt`,
                      "data-pick": e.pick ? `` : void 0,
                      "data-hot": c(i) ? `` : void 0,
                      "data-pressed": ue === `opt:${i}` ? `` : void 0,
                      disabled: !!n,
                      "aria-keyshortcuts": i < 9 ? String(i + 1) : void 0,
                      "aria-label": `${e.label}${e.pick ? ` – the agent's pick` : ``}`,
                      onClick: () => q(i),
                      children: [
                        (0, r.jsx)(`kbd`, {
                          className: `ui-dct__kbd`,
                          "data-off": i > 8 ? `` : void 0,
                          children: i + 1,
                        }),
                        (0, r.jsx)(`span`, { className: `ui-dct__label`, dir: `auto`, children: e.label }),
                        e.pick && (0, r.jsx)(`span`, { className: `ui-dct__pick`, children: `Agent's pick` }),
                      ],
                    }),
                    !!e.effects?.length &&
                      (0, r.jsx)(`div`, {
                        ref: k(`leaf:${i}`),
                        className: `ui-dct__leaf`,
                        children: e.effects.map((e, n) =>
                          (0, r.jsx)(
                            `span`,
                            { className: `ui-dct__effect`, dir: `auto`, children: De(e, t) },
                            n,
                          ),
                        ),
                      }),
                  ),
                ),
                h &&
                  l(
                    o,
                    (0, r.jsx)(`div`, {
                      ref: k(`opt:${o}`),
                      className: `ui-dct__opt`,
                      "data-other": ``,
                      "data-open": P || n?.other ? `` : void 0,
                      "data-hot": c(o) ? `` : void 0,
                      children: n?.other
                        ? (0, r.jsx)(`span`, { className: `ui-dct__said`, dir: `auto`, children: n.other })
                        : P
                          ? (0, r.jsxs)(`div`, {
                              ref: ne,
                              className: `ui-dct__grow`,
                              children: [
                                (0, r.jsxs)(`span`, {
                                  ref: T,
                                  className: `ui-dct__mirror`,
                                  "aria-hidden": `true`,
                                  children: [I || `Tell the agent what to do instead…`, `​`],
                                }),
                                (0, r.jsx)(`textarea`, {
                                  ref: w,
                                  className: `ui-dct__input`,
                                  value: I,
                                  rows: 2,
                                  placeholder: `Tell the agent what to do instead…`,
                                  "aria-label": `Your own instruction for the ${(e.agent.trim() || `Agent`).toLowerCase()} – Enter sends, Shift+Enter for a new line`,
                                  onChange: (e) => L(e.target.value),
                                  onKeyDown: (e) => {
                                    if (e.key === `Escape`) {
                                      (e.stopPropagation(),
                                        F(!1),
                                        j(null),
                                        b.current?.focus({ preventScroll: !0 }));
                                      return;
                                    }
                                    e.key !== `Enter` ||
                                      e.shiftKey ||
                                      e.nativeEvent.isComposing ||
                                      (e.preventDefault(), xe());
                                  },
                                }),
                              ],
                            })
                          : (0, r.jsxs)(`button`, {
                              type: `button`,
                              className: `ui-dct__other`,
                              "data-pressed": ue === `other` ? `` : void 0,
                              disabled: !!n,
                              "aria-keyshortcuts": o < 9 ? String(o + 1) : void 0,
                              onClick: () => q(o),
                              children: [
                                (0, r.jsx)(`kbd`, {
                                  className: `ui-dct__kbd`,
                                  "data-off": o > 8 ? `` : void 0,
                                  children: o + 1,
                                }),
                                (0, r.jsx)(`span`, { className: `ui-dct__label`, children: `Other…` }),
                              ],
                            }),
                    }),
                  ),
              ],
            }),
            n &&
              (0, r.jsx)(`div`, {
                ref: k(`out`),
                className: `ui-dct__out`,
                "data-kind": n.other === void 0 ? `approved` : `replied`,
                children:
                  n.other === void 0
                    ? (0, r.jsxs)(`span`, {
                        className: `ui-dct__out-head`,
                        children: [
                          (0, r.jsx)(f, {}),
                          `Approved `,
                          (0, r.jsx)(`span`, { className: `ui-dct__running`, children: `· running` }),
                        ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsxs)(`span`, {
                            className: `ui-dct__out-head`,
                            children: [
                              (0, r.jsx)(f, {}),
                              `Sent to the `,
                              (e.agent.trim() || `Agent`).toLowerCase(),
                            ],
                          }),
                          n.answer
                            ? (0, r.jsx)(`span`, { className: `ui-dct__answer`, children: n.answer })
                            : (0, r.jsxs)(`span`, {
                                className: `ui-dct__typing`,
                                "aria-label": `${e.agent} is typing`,
                                children: [
                                  (0, r.jsx)(`span`, {}),
                                  (0, r.jsx)(`span`, {}),
                                  (0, r.jsx)(`span`, {}),
                                ],
                              }),
                        ],
                      }),
              }),
          ],
        },
        H(e),
      );
    },
    $ = Math.max(0, Math.min(W - 3, U.length - 8));
  return (0, r.jsxs)(`div`, {
    ref: b,
    className: [`ui-dct`, v].filter(Boolean).join(` `),
    tabIndex: -1,
    onKeyDown: Ce,
    onMouseDown: (e) => {
      e.target.closest(`button, a, input, textarea, mark`) ||
        requestAnimationFrame(() => b.current?.focus({ preventScroll: !0 }));
    },
    children: [
      (0, r.jsx)(`style`, { href: `ui-decision-tree`, precedence: `default`, children: te }),
      (0, r.jsxs)(`header`, {
        className: `ui-dct__head`,
        children: [
          (0, r.jsx)(`span`, { className: `ui-dct__mark`, children: (0, r.jsx)(m, {}) }),
          (0, r.jsx)(`span`, { className: `ui-dct__heading`, title: g, children: g }),
          (0, r.jsx)(`span`, {
            className: `ui-dct__count`,
            children: U.length
              ? `${o.format(U.length)} waiting for you`
              : `${o.format(ye)} of ${o.format(ve)} decided`,
          }),
          G &&
            U.length > 1 &&
            (0, r.jsxs)(`span`, {
              className: `ui-dct__pager`,
              "aria-label": `Decision ${o.format(W + 1)} of ${o.format(U.length)}`,
              children: [
                (0, r.jsx)(`span`, {
                  className: `ui-dct__dots`,
                  "aria-hidden": `true`,
                  children: U.slice($, $ + 8).map((e, t) =>
                    (0, r.jsx)(`span`, { "data-on": $ + t === W ? `` : void 0 }, H(e)),
                  ),
                }),
                (0, r.jsxs)(`span`, {
                  className: `ui-dct__of`,
                  children: [o.format(W + 1), ` of `, o.format(U.length)],
                }),
              ],
            }),
        ],
      }),
      (0, r.jsxs)(`div`, {
        ref: x,
        className: `ui-dct__body`,
        "data-narrow": V ? `` : void 0,
        children: [
          G
            ? Oe(G)
            : (0, r.jsxs)(`div`, {
                className: `ui-dct__empty`,
                children: [
                  (0, r.jsx)(`span`, {
                    className: `ui-dct__empty-mark`,
                    children: (0, r.jsx)(ee, { size: 22 }),
                  }),
                  (0, r.jsx)(`b`, { children: `All decided` }),
                  (0, r.jsx)(`span`, { children: `New decisions from your agents show up here.` }),
                ],
              }),
          Q &&
            (0, r.jsxs)(
              `div`,
              {
                ref: C,
                id: y,
                role: `tooltip`,
                className: `ui-dct__tip`,
                children: [
                  (0, r.jsxs)(`span`, {
                    className: `ui-dct__tip-head`,
                    children: [(0, r.jsx)(p, {}), `Agent's note`],
                  }),
                  (0, r.jsx)(`p`, { children: Q.note }),
                  Q.source && (0, r.jsx)(`span`, { className: `ui-dct__tip-source`, children: Q.source }),
                ],
              },
              Z,
            ),
          G &&
            !M &&
            (0, r.jsxs)(`p`, {
              className: `ui-dct__hint`,
              "aria-hidden": `true`,
              children: [
                `Pick a branch `,
                (0, r.jsx)(`kbd`, { className: `ui-dct__kbd`, children: `1` }),
                `–`,
                (0, r.jsx)(`kbd`, {
                  className: `ui-dct__kbd`,
                  children: Math.min(9, G.options.length + +!!h),
                }),
                U.length > 1 &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(`span`, { children: `·` }),
                      ` next `,
                      (0, r.jsx)(`kbd`, { className: `ui-dct__kbd`, children: `→` }),
                    ],
                  }),
              ],
            }),
        ],
      }),
      (0, r.jsx)(`div`, {
        className: `ui-dct__sr`,
        "aria-live": `polite`,
        "aria-atomic": `true`,
        children: fe,
      }),
    ],
  });
}
var te = `.ui-dct{--ui-dct-tray: #f0f0f0;--ui-dct-card: #ffffff;--ui-dct-strong: #171717;--ui-dct-ink: #171717;--ui-dct-text: #5f5f5f;--ui-dct-muted: #8a8a8a;--ui-dct-faint: #b8b8b8;--ui-dct-line: #ececec;--ui-dct-line-strong: #dedede;--ui-dct-fill: #f3f3f3;--ui-dct-leaf-bg: #fafafa;--ui-dct-accent: #2f6bff;--ui-dct-focus: rgba(23, 23, 23, 0.22);--ui-dct-link: #d6d6d6;--ui-dct-link-pick: #a9bff5;--ui-dct-link-hot: #a3a3a3;--ui-dct-link-pick-hot: #7d9df0;--ui-dct-high-bg: #fde8e5;--ui-dct-high-fg: #c2331f;--ui-dct-mid-bg: #fff3e0;--ui-dct-mid-fg: #b85c00;--ui-dct-ok-bg: #e6f6ec;--ui-dct-ok-edge: #a9dcbc;--ui-dct-ok-fg: #1a7f45;--ui-dct-flag-bg: #fff2d4;--ui-dct-flag-edge: #f0b44c;--ui-dct-flag-hot: #ffe2a6;--ui-dct-flag-ink: #6e4300;--ui-dct-shadow: 0 0 0 1px #ececec, 0 1px 2px rgba(0, 0, 0, 0.04);--ui-dct-raised: 0 0 0 1px #e8e8e8, 0 1px 3px rgba(0, 0, 0, 0.07);--ui-dct-lift: 0 0 0 1px #ececec, 0 4px 12px -4px rgba(0, 0, 0, 0.14), 0 1px 2px rgba(0, 0, 0, 0.05);--ui-dct-lift-hot: 0 0 0 1px #e8e8e8, 0 8px 20px -6px rgba(0, 0, 0, 0.18), 0 1px 3px rgba(0, 0, 0, 0.06);--ui-dct-pick-lift: 0 0 0 1px rgba(0, 96, 226, 0.2), 0 3px 8px -4px rgba(0, 96, 226, 0.14), 0 1px 2px rgba(0, 60, 140, 0.05);--ui-dct-pick-lift-hot: 0 0 0 1px rgba(0, 96, 226, 0.36), 0 8px 22px -6px rgba(0, 96, 226, 0.34), 0 2px 4px -1px rgba(0, 96, 226, 0.16);--ui-dct-pop: 0 0 0 1px #ececec, 0 16px 36px -12px rgba(0, 0, 0, 0.22);--ui-dct-height: 400px;--ui-dct-ease: cubic-bezier(0.22, 1, 0.36, 1);position: relative;box-sizing: border-box;width: 100%;padding: 4px;border-radius: 20px;background: var(--ui-dct-tray);letter-spacing: -0.006em;outline: none;container: ui-dct / inline-size;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 14px;font-weight: 400;line-height: 20px;color: var(--ui-dct-text);text-align: left;-webkit-font-smoothing: antialiased}.ui-dct *, .ui-dct *::before, .ui-dct *::after{box-sizing: border-box}:where(.ui-dct) :is(button, textarea){margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;letter-spacing: inherit;text-align: inherit;-webkit-tap-highlight-color: transparent}:where(.ui-dct) button{cursor: pointer}:where(.ui-dct) button:disabled{cursor: default}.ui-dct :is(button, mark):focus-visible{outline: 2px solid var(--ui-dct-focus);outline-offset: 1px}:where(.ui-dct) :is(p, h3){margin: 0}.ui-dct svg{display: block;flex: none}.ui-dct__kbd{display: inline-grid;place-items: center;min-width: 18px;height: 18px;padding: 0 4px;border-radius: 5px;background: var(--ui-dct-fill);font-family: inherit;font-size: 10.5px;font-weight: 500;line-height: 1;color: var(--ui-dct-muted);letter-spacing: 0}.ui-dct__kbd[data-off]{visibility: hidden}.ui-dct__sr{position: absolute;width: 1px;height: 1px;overflow: hidden;clip-path: inset(50%);white-space: nowrap}.ui-dct__head{display: flex;align-items: center;gap: 8px;min-width: 0;padding: 8px 14px 12px 12px}.ui-dct__mark{display: grid;flex: none;place-items: center;width: 16px;color: var(--ui-dct-accent)}.ui-dct__heading{flex: 0 1 auto;min-width: 0;overflow: hidden;font-weight: 600;color: var(--ui-dct-strong);white-space: nowrap;text-overflow: ellipsis}.ui-dct__count{flex: 1;min-width: 0;overflow: hidden;font-size: 13px;color: var(--ui-dct-muted);white-space: nowrap;text-overflow: ellipsis;font-variant-numeric: tabular-nums}.ui-dct__pager{display: inline-flex;flex: none;align-items: center;gap: 10px;font-size: 12px;line-height: 16px;color: var(--ui-dct-muted);white-space: nowrap;font-variant-numeric: tabular-nums}.ui-dct__dots{display: flex;gap: 4px}.ui-dct__dots > span{width: 5px;height: 5px;border-radius: 50%;background: var(--ui-dct-line-strong);transition: background-color 240ms ease, transform 240ms var(--ui-dct-ease)}.ui-dct__dots > span[data-on]{background: var(--ui-dct-ink);transform: scale(1.15)}.ui-dct__body{position: relative;display: flex;align-items: center;justify-content: center;min-height: var(--ui-dct-height);padding: 44px 28px 56px;border-radius: 16px;background: var(--ui-dct-card);box-shadow: var(--ui-dct-shadow)}.ui-dct__tree{position: relative;isolation: isolate;display: grid;grid-template-columns: minmax(0, 210px) minmax(0, 1fr);align-items: center;column-gap: 44px;width: 100%;max-width: 860px;transition: opacity 260ms ease}.ui-dct__tree[data-leaving]{opacity: 0}.ui-dct__links{position: absolute;top: 0;left: 0;z-index: -1;overflow: visible;pointer-events: none}.ui-dct__link{fill: none;stroke: var(--ui-dct-link);stroke-width: 1px;stroke-linecap: round;stroke-dasharray: 1 1;animation: ui-dct-draw 460ms var(--ui-dct-ease) calc(180ms + var(--i, 0) * 80ms) both;transition: stroke 220ms ease, opacity 260ms ease, stroke-width 220ms ease}.ui-dct__link[data-kind="leaf"]{animation-delay: calc(360ms + var(--i, 0) * 80ms)}.ui-dct__link[data-kind="out"]{animation: ui-dct-draw 380ms var(--ui-dct-ease) 120ms both}.ui-dct__link[data-pick]{stroke: var(--ui-dct-link-pick)}.ui-dct__link[data-hot]{stroke: var(--ui-dct-link-hot);stroke-width: 1.5px}.ui-dct__link[data-pick][data-hot]{stroke: var(--ui-dct-link-pick-hot)}.ui-dct__link[data-dim]{opacity: 0.25}.ui-dct__tree[data-picked] .ui-dct__link[data-dim]{opacity: 0}.ui-dct__root{grid-template-columns: minmax(0, 1fr);display: grid;gap: 10px;padding: 14px 16px 15px;border-radius: 10px;background: var(--ui-dct-card);box-shadow: var(--ui-dct-shadow);animation: ui-dct-node 420ms var(--ui-dct-ease) 40ms backwards}.ui-dct__who{display: flex;align-items: flex-start;gap: 10px;min-width: 0}.ui-dct__avatar{display: grid;flex: none;place-items: center;width: 28px;height: 28px;border-radius: 7px;background: var(--ui-dct-card);box-shadow: 0 0 0 1px var(--ui-dct-line), 0 1px 2px rgba(0, 0, 0, 0.06);font-size: 12px;font-weight: 500;color: var(--ui-dct-text)}.ui-dct__avatar > :is(svg, img){width: 14px;height: 14px;object-fit: contain}.ui-dct__avatar{overflow: hidden}.ui-dct__meta{display: grid;flex: 1;gap: 1px;min-width: 0}.ui-dct__name{display: flex;flex-wrap: wrap;align-items: center;gap: 4px 8px;min-width: 0}.ui-dct__agent{min-width: 0;font-size: 13px;font-weight: 600;line-height: 18px;color: var(--ui-dct-ink);overflow-wrap: anywhere}.ui-dct__model{overflow: hidden;font-size: 12px;line-height: 16px;color: var(--ui-dct-muted);white-space: nowrap;text-overflow: ellipsis}.ui-dct__risk{display: inline-flex;flex: none;align-items: center;height: 20px;padding: 0 8px;border-radius: 999px;background: var(--k-bg);font-size: 11.5px;font-weight: 500;line-height: 16px;color: var(--k-fg);white-space: nowrap}.ui-dct [data-risk="high"]{--k-bg: var(--ui-dct-high-bg);--k-fg: var(--ui-dct-high-fg)}.ui-dct [data-risk="medium"]{--k-bg: var(--ui-dct-mid-bg);--k-fg: var(--ui-dct-mid-fg)}.ui-dct__q{font-size: 14px;font-weight: 600;line-height: 20px;color: var(--ui-dct-strong);text-wrap: pretty;overflow-wrap: anywhere}.ui-dct__context{margin-top: -4px;font-size: 12px;line-height: 17px;color: var(--ui-dct-muted);text-wrap: pretty;overflow-wrap: anywhere;white-space: pre-line}.ui-dct__branches{display: grid;gap: 14px}.ui-dct__row{display: grid;grid-template-columns: minmax(0, 200px) minmax(0, 1fr);align-items: center;column-gap: 32px;transition: opacity 280ms ease;animation: ui-dct-node 420ms var(--ui-dct-ease) calc(140ms + var(--i, 0) * 80ms) backwards}.ui-dct__row[data-dim]{opacity: 0.38}.ui-dct__tree[data-picked] .ui-dct__row[data-dim]{opacity: 0;pointer-events: none}.ui-dct__opt{display: grid;grid-template-columns: auto minmax(0, 1fr);align-items: center;gap: 2px 8px;min-width: 0;padding: 9px 12px;border-radius: 10px;background: var(--ui-dct-card);box-shadow: var(--ui-dct-shadow);text-align: left;transition: box-shadow 200ms ease, transform 140ms ease}button.ui-dct__opt:hover:not(:disabled), .ui-dct__opt[data-hot]{box-shadow: var(--ui-dct-lift-hot)}.ui-dct__opt[data-pick]{box-shadow: var(--ui-dct-pick-lift)}button.ui-dct__opt[data-pick]:hover:not(:disabled), .ui-dct__opt[data-pick][data-hot]{box-shadow: var(--ui-dct-pick-lift-hot)}.ui-dct__opt[data-pressed]{transform: scale(0.98)}.ui-dct__label{min-width: 0;font-size: 13px;font-weight: 500;line-height: 18px;color: var(--ui-dct-ink);overflow-wrap: anywhere}.ui-dct__pick{grid-column: 2;font-size: 11.5px;line-height: 14px;color: var(--ui-dct-accent)}.ui-dct__leaf{display: grid;gap: 3px;justify-self: start;min-width: 0;padding: 8px 12px;border-radius: 10px;background: var(--ui-dct-leaf-bg);box-shadow: inset 0 0 0 1px var(--ui-dct-line);animation: ui-dct-node 420ms var(--ui-dct-ease) calc(300ms + var(--i, 0) * 80ms) backwards}.ui-dct__effect{font-size: 12.5px;line-height: 18px;color: var(--ui-dct-text);overflow-wrap: anywhere;white-space: pre-line}.ui-dct__flag{padding: 1px 2px;margin: 0 -1px;border-radius: 4px;background: var(--ui-dct-flag-bg);box-shadow: inset 0 -1.5px 0 var(--ui-dct-flag-edge);color: var(--ui-dct-flag-ink);cursor: help;-webkit-box-decoration-break: clone;box-decoration-break: clone;transition: background-color 160ms ease, box-shadow 160ms ease}.ui-dct__flag:is(:hover, [data-on]){background: var(--ui-dct-flag-hot);box-shadow: inset 0 0 0 1px var(--ui-dct-flag-edge)}.ui-dct__opt[data-other]{padding: 0;background: transparent;box-shadow: inset 0 0 0 1px var(--ui-dct-line-strong)}.ui-dct__opt[data-other][data-open]{background: var(--ui-dct-card)}.ui-dct__opt[data-other][data-open]:focus-within{box-shadow: inset 0 0 0 1px var(--ui-dct-link-hot)}.ui-dct__other{display: flex;align-items: center;gap: 8px;width: 100%;padding: 9px 12px;border-radius: inherit;text-align: left}.ui-dct__other .ui-dct__label{font-weight: 400;color: var(--ui-dct-muted)}.ui-dct__grow{position: relative;height: 32px;overflow: hidden;transition: height 250ms var(--ui-dct-ease)}.ui-dct__mirror{position: absolute;top: 0;right: 0;left: 0;padding: 6px 12px;font-size: 13px;line-height: 20px;white-space: pre-wrap;overflow-wrap: anywhere;visibility: hidden;pointer-events: none}.ui-dct__input{display: block;width: 100%;height: 100%;padding: 6px 12px;font-size: 13px;line-height: 20px;color: var(--ui-dct-ink);resize: none;overflow-y: hidden;outline: none;scrollbar-width: thin}.ui-dct .ui-dct__input:focus-visible{outline: none}.ui-dct__input::placeholder{color: var(--ui-dct-muted)}.ui-dct__said{padding: 6px 12px;font-size: 13px;line-height: 20px;color: var(--ui-dct-ink);white-space: pre-wrap;overflow-wrap: anywhere}.ui-dct__out{position: absolute;z-index: 1;display: grid;gap: 6px;max-width: 280px;padding: 9px 12px;border-radius: 10px;background: var(--ui-dct-card);box-shadow: var(--ui-dct-raised), 0 0 0 1px var(--ui-dct-ok-edge);animation: ui-dct-node 360ms var(--ui-dct-ease) 320ms backwards}.ui-dct__out[data-kind="replied"]{box-shadow: var(--ui-dct-lift)}.ui-dct__out-head{display: inline-flex;align-items: center;gap: 6px;min-width: 0;font-size: 13px;font-weight: 500;color: var(--ui-dct-ink);overflow-wrap: anywhere}.ui-dct__out-head > svg{width: 15px;height: 15px;color: var(--ui-dct-ok-fg)}.ui-dct__running{font-weight: 400;color: var(--ui-dct-muted)}.ui-dct__answer{font-size: 12.5px;line-height: 18px;color: var(--ui-dct-text);animation: ui-dct-fade-up 280ms var(--ui-dct-ease) backwards;overflow-wrap: anywhere}.ui-dct__typing{display: inline-flex;gap: 4px;justify-self: start;padding: 6px 0 4px}.ui-dct__typing > span{width: 5px;height: 5px;border-radius: 50%;background: var(--ui-dct-muted);animation: ui-dct-dot 1100ms ease-in-out infinite}.ui-dct__typing > span:nth-child(2){animation-delay: 150ms}.ui-dct__typing > span:nth-child(3){animation-delay: 300ms}.ui-dct__hint{position: absolute;bottom: 16px;left: 24px;display: inline-flex;align-items: center;gap: 5px;font-size: 12px;color: var(--ui-dct-muted);pointer-events: none;animation: ui-dct-fade 300ms ease 600ms backwards}.ui-dct__hint > span{margin: 0 3px;color: var(--ui-dct-faint)}.ui-dct__tip{position: absolute;top: 0;left: 0;z-index: 6;display: grid;gap: 4px;width: min(300px, calc(100% - 20px));padding: 10px 12px 11px;border-radius: 12px;background: var(--ui-dct-card);box-shadow: var(--ui-dct-pop);pointer-events: none;transform-origin: var(--x, 50%) top;animation: ui-dct-tip 200ms var(--ui-dct-ease) both}.ui-dct__tip[data-side="above"]{transform-origin: var(--x, 50%) bottom}.ui-dct__tip-head{display: inline-flex;align-items: center;gap: 6px;font-size: 11.5px;font-weight: 600;line-height: 16px;color: var(--ui-dct-mid-fg)}.ui-dct__tip-head > svg{width: 12px;height: 12px}.ui-dct__tip p{font-size: 12.5px;line-height: 18px;color: var(--ui-dct-ink);text-wrap: pretty;overflow-wrap: anywhere}.ui-dct__tip-source{justify-self: start;margin-top: 2px;padding: 1px 7px;border-radius: 5px;background: var(--ui-dct-fill);font-size: 11.5px;line-height: 16px;color: var(--ui-dct-text);max-width: 100%;overflow-wrap: anywhere}.ui-dct__empty{display: grid;justify-items: center;gap: 4px;text-align: center;animation: ui-dct-fade-up 360ms var(--ui-dct-ease) both}.ui-dct__empty-mark{display: grid;place-items: center;width: 44px;height: 44px;margin-bottom: 8px;border-radius: 14px;background: var(--ui-dct-card);color: var(--ui-dct-ok-fg);box-shadow: var(--ui-dct-shadow), 0 0 0 4px var(--ui-dct-ok-bg)}.ui-dct__empty b{font-size: 15px;font-weight: 600;line-height: 22px;color: var(--ui-dct-strong)}.ui-dct__empty > span:last-child{font-size: 13px;color: var(--ui-dct-muted)}@container ui-dct (max-width: 639px){.ui-dct__body{min-height: 0;padding: 20px 16px 48px}.ui-dct__count{display: none}.ui-dct__tree{grid-template-columns: minmax(0, 1fr);row-gap: 18px}.ui-dct__branches{padding-left: 34px}.ui-dct__row{grid-template-columns: minmax(0, 1fr);row-gap: 8px}.ui-dct__leaf{margin-left: 26px}.ui-dct__hint{left: 16px;bottom: 14px}.ui-dct__hint kbd:last-of-type, .ui-dct__hint > span{display: none}}@container ui-dct (max-width: 380px){.ui-dct__of{display: none}.ui-dct__branches{padding-left: 26px}.ui-dct__leaf{margin-left: 18px}}@keyframes ui-dct-draw{from{stroke-dashoffset: 1}to{stroke-dashoffset: 0}}@keyframes ui-dct-node{from{opacity: 0;transform: translateX(-8px)}}@keyframes ui-dct-fade{from{opacity: 0}}@keyframes ui-dct-fade-up{from{opacity: 0;transform: translateY(6px)}}@keyframes ui-dct-tip{from{opacity: 0;transform: translateY(4px) scale(0.96)}}@keyframes ui-dct-dot{0%, 60%, 100%{opacity: 0.35}30%{opacity: 1}}@media (pointer: coarse){.ui-dct .ui-dct__kbd, .ui-dct__hint{display: none}}@media (prefers-reduced-motion: reduce){.ui-dct *, .ui-dct *::before, .ui-dct *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-dct{--ui-dct-tray: #19191c;--ui-dct-card: #232326;--ui-dct-strong: #ededed;--ui-dct-ink: #ededed;--ui-dct-text: #a8a8ad;--ui-dct-muted: #7c7c82;--ui-dct-faint: #55555b;--ui-dct-line: #2e2e33;--ui-dct-line-strong: #3a3a40;--ui-dct-fill: #2e2e32;--ui-dct-leaf-bg: #26262a;--ui-dct-accent: #5b9aff;--ui-dct-focus: rgba(237, 237, 237, 0.3);--ui-dct-link: #3a3a40;--ui-dct-link-pick: #36518f;--ui-dct-link-hot: #6a6a72;--ui-dct-link-pick-hot: #4d70c2;--ui-dct-high-bg: #3b1714;--ui-dct-high-fg: #ff977d;--ui-dct-mid-bg: #3a2610;--ui-dct-mid-fg: #ffb068;--ui-dct-ok-bg: #12301f;--ui-dct-ok-edge: #23593a;--ui-dct-ok-fg: #4fd890;--ui-dct-flag-bg: #3d2b0c;--ui-dct-flag-edge: #a8741f;--ui-dct-flag-hot: #54390c;--ui-dct-flag-ink: #ffd28a;--ui-dct-shadow: 0 0 0 1px #2e2e33, 0 1px 2px rgba(0, 0, 0, 0.3);--ui-dct-raised: 0 0 0 1px #38383e, 0 1px 3px rgba(0, 0, 0, 0.4);--ui-dct-lift: 0 0 0 1px #2e2e33, 0 6px 16px -4px rgba(0, 0, 0, 0.6), 0 1px 2px rgba(0, 0, 0, 0.3);--ui-dct-lift-hot: 0 0 0 1px #38383e, 0 10px 24px -6px rgba(0, 0, 0, 0.7), 0 1px 3px rgba(0, 0, 0, 0.4);--ui-dct-pick-lift: 0 0 0 1px rgba(91, 154, 255, 0.3), 0 4px 12px -4px rgba(40, 100, 220, 0.24), 0 1px 2px rgba(0, 0, 0, 0.3);--ui-dct-pick-lift-hot: 0 0 0 1px rgba(112, 170, 255, 0.5), 0 10px 26px -6px rgba(60, 130, 255, 0.5), 0 2px 5px -1px rgba(60, 130, 255, 0.25);--ui-dct-pop: 0 0 0 1px #34343a, 0 16px 36px -12px rgba(0, 0, 0, 0.6)}`,
  g = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 1200 1200`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, {
        fill: `#D97757`,
        d: `M 233.959793 800.214905 L 468.644287 668.536987 L 472.590637 657.100647 L 468.644287 650.738403 L 457.208069 650.738403 L 417.986633 648.322144 L 283.892639 644.69812 L 167.597321 639.865845 L 54.926208 633.825623 L 26.577238 627.785339 L 3.3e-05 592.751709 L 2.73832 575.27533 L 26.577238 559.248352 L 60.724873 562.228149 L 136.187973 567.382629 L 249.422867 575.194763 L 331.570496 580.026978 L 453.261841 592.671082 L 472.590637 592.671082 L 475.328857 584.859009 L 468.724915 580.026978 L 463.570557 575.194763 L 346.389313 495.785217 L 219.543671 411.865906 L 153.100723 363.543762 L 117.181267 339.060425 L 99.060455 316.107361 L 91.248367 266.01355 L 123.865784 230.093994 L 167.677887 233.073853 L 178.872513 236.053772 L 223.248367 270.201477 L 318.040283 343.570496 L 441.825592 434.738342 L 459.946411 449.798706 L 467.194672 444.64447 L 468.080597 441.020203 L 459.946411 427.409485 L 392.617493 305.718323 L 320.778564 181.932983 L 288.80542 130.630859 L 280.348999 99.865845 C 277.369171 87.221436 275.194641 76.590698 275.194641 63.624268 L 312.322174 13.20813 L 332.8591 6.604126 L 382.389313 13.20813 L 403.248352 31.328979 L 434.013519 101.71814 L 483.865753 212.537048 L 561.181274 363.221497 L 583.812134 407.919434 L 595.892639 449.315491 L 600.40271 461.959839 L 608.214783 461.959839 L 608.214783 454.711609 L 614.577271 369.825623 L 626.335632 265.61084 L 637.771851 131.516846 L 641.718201 93.745117 L 660.402832 48.483276 L 697.530334 24.000122 L 726.52356 37.852417 L 750.362549 72 L 747.060486 94.067139 L 732.886047 186.201416 L 705.100708 330.52356 L 686.979919 427.167847 L 697.530334 427.167847 L 709.61084 415.087341 L 758.496704 350.174561 L 840.644348 247.490051 L 876.885925 206.738342 L 919.167847 161.71814 L 946.308838 140.29541 L 997.61084 140.29541 L 1035.38269 196.429626 L 1018.469849 254.416199 L 965.637634 321.422852 L 921.825562 378.201538 L 859.006714 462.765259 L 819.785278 530.41626 L 823.409424 535.812073 L 832.75177 534.92627 L 974.657776 504.724915 L 1051.328979 490.872559 L 1142.818848 475.167786 L 1184.214844 494.496582 L 1188.724854 514.147644 L 1172.456421 554.335693 L 1074.604126 578.496765 L 959.838989 601.449829 L 788.939636 641.879272 L 786.845764 643.409485 L 789.261841 646.389343 L 866.255127 653.637634 L 899.194702 655.409424 L 979.812134 655.409424 L 1129.932861 666.604187 L 1169.154419 692.537109 L 1192.671265 724.268677 L 1188.724854 748.429688 L 1128.322144 779.194641 L 1046.818848 759.865845 L 856.590759 714.604126 L 791.355774 698.335754 L 782.335693 698.335754 L 782.335693 703.731567 L 836.69812 756.885986 L 936.322205 846.845581 L 1061.073975 962.81897 L 1067.436279 991.490112 L 1051.409424 1014.120911 L 1034.496704 1011.704712 L 924.885986 929.234924 L 882.604126 892.107544 L 786.845764 811.48999 L 780.483276 811.48999 L 780.483276 819.946289 L 802.550415 852.241699 L 919.087341 1027.409424 L 925.127625 1081.127686 L 916.671204 1098.604126 L 886.469849 1109.154419 L 853.288696 1103.114136 L 785.073914 1007.355835 L 714.684631 899.516785 L 657.906067 802.872498 L 650.979858 806.81897 L 617.476624 1167.704834 L 601.771851 1186.147705 L 565.530212 1200 L 535.328857 1177.046997 L 519.302124 1139.919556 L 535.328857 1066.550537 L 554.657776 970.792053 L 570.362488 894.68457 L 584.536926 800.134277 L 592.993347 768.724976 L 592.429626 766.630859 L 585.503479 767.516968 L 514.22821 865.369263 L 405.825531 1011.865906 L 320.053711 1103.677979 L 299.516815 1111.812256 L 263.919525 1093.369263 L 267.221497 1060.429688 L 287.114136 1031.114136 L 405.825531 880.107361 L 477.422913 786.52356 L 523.651062 732.483276 L 523.328918 724.671265 L 520.590698 724.671265 L 205.288605 929.395935 L 149.154434 936.644409 L 124.993355 914.01355 L 127.973183 876.885986 L 139.409409 864.80542 L 234.201385 799.570435 L 233.879227 799.8927 Z`,
      }),
    }),
  _ = [
    {
      id: `dupes`,
      question: `3 customers have two active subscriptions – how should I proceed?`,
      context: `All three signed up twice during the checkout outage on Tuesday.`,
      agent: `Billing agent`,
      model: `Sonnet 5.5`,
      icon: (0, r.jsx)(g, {}),
      risk: `high`,
      options: [
        {
          label: `Cancel the newer ones`,
          pick: !0,
          effects: [`Cancels 3 subscriptions · reversible for 30 days`, `Sends 3 emails`],
        },
        {
          label: `Refund the newer ones`,
          effects: [
            [
              `Refunds `,
              {
                text: `$147 · not reversible`,
                note: `One charge is two billing cycles old – Stripe needs a manual approval for it.`,
                source: `Stripe · refund rules`,
              },
            ],
            `Cancels 3 subscriptions`,
          ],
        },
        {
          label: `Ask the customers`,
          effects: [`Sends 3 emails · waits for answers`, `Tonight's billing runs as is`],
        },
      ],
    },
    {
      id: `contacts`,
      question: `214 contacts lost their email in the CRM import – what should I do with them?`,
      context: `The CSV had a broken column; the rest of the 9,400 rows imported fine.`,
      agent: `Data agent`,
      model: `Opus 5.5`,
      icon: (0, r.jsx)(g, {}),
      risk: `medium`,
      options: [
        {
          label: `Delete the 214 contacts`,
          effects: [
            [
              {
                text: `Deletes 214 rows · not reversible`,
                note: `38 of them have open deals in HubSpot – the deals would lose their contact.`,
                source: `HubSpot · deals`,
              },
            ],
          ],
        },
        { label: `Archive them`, pick: !0, effects: [`Moves 214 rows to the archive · reversible`] },
        { label: `Fill emails from HubSpot`, effects: [`Updates 176 rows`, `38 stay without an email`] },
      ],
    },
    {
      id: `rollout`,
      question: `The new Team price is ready – how fast should it roll out?`,
      context: `Team goes from $12 to $14 per seat; 3,812 customers are on it.`,
      agent: `Pricing agent`,
      model: `GPT-6 Sol`,
      icon: (0, r.jsx)(
        () =>
          (0, r.jsx)(`svg`, {
            viewBox: `0 0 24 24`,
            fill: `currentColor`,
            "aria-hidden": `true`,
            style: { color: `var(--ui-dctc-strong, var(--ui-dct-ink, #000))` },
            children: (0, r.jsx)(`path`, {
              d: `M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z`,
            }),
          }),
        {},
      ),
      risk: `high`,
      options: [
        {
          label: `Everyone today`,
          effects: [
            [
              {
                text: `3,812 customers · new invoices tonight`,
                note: `212 annual plans renew tonight – they'd pay the new price without notice.`,
                source: `Billing · renewals`,
              },
            ],
          ],
        },
        {
          label: `10% today, all on Monday`,
          pick: !0,
          effects: [`381 customers today`, `Watches churn over the weekend`],
        },
        { label: `Only new signups`, effects: [`Existing customers keep $12`] },
      ],
    },
    {
      id: `escalate`,
      question: `A customer threatens legal action over a late refund – how should I handle it?`,
      context: `Ticket #10412 – the refund was promised 14 days ago and never sent.`,
      agent: `Support agent`,
      model: `Sonnet 5.5`,
      icon: (0, r.jsx)(g, {}),
      risk: `high`,
      options: [
        {
          label: `Escalate to Legal`,
          pick: !0,
          effects: [`Assigns #10412 to Legal`, `Pauses automated replies`],
        },
        {
          label: `Refund now and apologize`,
          effects: [
            [
              {
                text: `Refunds $2,400 · not reversible`,
                note: `Legal asked to review every refund over $1,000 once a dispute is open.`,
                source: `Policy · disputes`,
              },
            ],
          ],
        },
        { label: `Reply with the policy`, effects: [`Sends the refund policy`] },
      ],
    },
  ],
  v = `EU first, after the notice – everyone else on Monday`,
  y = { rollout: `Got it – sending the notice to EU customers today, their new price starts in 30 days.` },
  b = [
    [3, (e) => e.hover(0)],
    [4, (e) => e.choose(0)],
    [7.6, (e) => e.peek(0)],
    [9.4, (e) => (e.peek(null), e.hover(2))],
    [10.4, (e) => e.choose(2)],
    [13.6, (e) => e.choose(3)],
    ...[...v].map((e, t) => [14.2 + t * 0.045, (e) => e.setOther(v.slice(0, t + 1))]),
    [17.2, (e) => e.send()],
    [22, (e) => e.hover(0)],
    [22.8, (e) => e.choose(0)],
  ],
  x = 28,
  S = 9e3;
function C() {
  let e = (0, n.useRef)(null),
    [t, i] = (0, n.useState)(0),
    [a, o] = (0, n.useState)(!1),
    s = (0, n.useRef)(0);
  ((0, n.useEffect)(() => {
    if (a) return;
    let t = b.map(([t, n]) => window.setTimeout(() => e.current && n(e.current), t * 1e3));
    return (
      t.push(window.setTimeout(() => i((e) => e + 1), x * 1e3)),
      () => t.forEach((e) => window.clearTimeout(e))
    );
  }, [t, a]),
    (0, n.useEffect)(() => () => window.clearTimeout(s.current), []));
  let c = () => {
    (o(!0),
      window.clearTimeout(s.current),
      (s.current = window.setTimeout(() => {
        (i((e) => e + 1), o(!1));
      }, S)));
  };
  return (0, r.jsx)(`div`, {
    className: `dct-demo`,
    onPointerDownCapture: c,
    onKeyDownCapture: c,
    children: (0, r.jsx)(
      h,
      { ref: e, decisions: _, onChoose: (e, t) => (`other` in t ? y[e.id] : void 0) },
      t,
    ),
  });
}
