/*
 * affectUI · agent-cursors (Pro)
 * Implementation recovered from public bundle asset: demo-T2vp62ci.js
 * Styles inlined in the module -> agent-cursors.css (1 block(s))
 * Demo usage: agent-cursors.demo.jsx
 * Minified identifiers kept; formatting by prettier.
 */

import { t as e } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
/* empty css             */ var n = e(),
  r = t();
function i(e, t, n) {
  let r = t.find((e) => e.id === n);
  if (!r) return { blocks: e, suggestions: t };
  let i = r.remove ?? 0,
    a = r.insert ?? ``,
    o = a.length - i;
  return {
    blocks: e.map(function e(t) {
      return t.id === r.block
        ? { ...t, text: (t.text ?? ``).slice(0, r.at) + a + (t.text ?? ``).slice(r.at + i) }
        : t.rows
          ? { ...t, rows: t.rows.map((t) => t.map(e)) }
          : t;
    }),
    suggestions: t
      .filter((e) => e.id !== n)
      .map((e) => (e.block === r.block && e.at >= r.at + i ? { ...e, at: e.at + o } : e)),
  };
}
var a = (e) => {
  let t = e?.firstChild;
  return t && t.nodeType === 3 ? t : null;
};
function o(e, t, n) {
  if (n) {
    let r = e.querySelector(`[data-ins="${CSS.escape(n)}"]`);
    if (r) {
      let e = a(r);
      if (e) return [e, Math.max(0, Math.min(t, e.length))];
      let n = r.previousElementSibling;
      n?.tagName === `WBR` && (n = n.previousElementSibling);
      let i = a(n);
      if (i) return [i, i.length];
      let o = a(r.nextElementSibling);
      if (o) return [o, 0];
    }
  }
  let r = null;
  for (let n of e.querySelectorAll(`[data-from]`)) {
    let e = a(n);
    if (!e) continue;
    let i = Number(n.dataset.from);
    if (t >= i && t <= i + e.length && ((r = [e, t - i]), t < i + e.length)) break;
  }
  return r;
}
function s(e, t) {
  let n = document.createRange();
  if (!e.length) return null;
  if (t < e.length) return (n.setStart(e, t), n.setEnd(e, t + 1), n.getClientRects()[0] ?? null);
  (n.setStart(e, t - 1), n.setEnd(e, t));
  let r = n.getClientRects(),
    i = r[r.length - 1];
  return i ? new DOMRect(i.right, i.top, 0, i.height) : null;
}
var c = (e) => (e.match(/[\p{L}\p{N}]/u)?.[0] ?? `?`).toUpperCase(),
  l = new Intl.NumberFormat(`en-US`, { style: `currency`, currency: `USD` }),
  u = (e) => (e !== 0 && Math.abs(e) < 0.005 ? `${e < 0 ? `-` : ``}<$0.01` : l.format(e)),
  d = (e) => (typeof e == `number` && Number.isFinite(e) ? e : void 0),
  f = 6,
  p = `​`;
function m({
  agents: e,
  blocks: t,
  suggestions: i = [],
  comments: a = [],
  onResolveComment: l,
  onReply: m,
  cursors: g,
  onAccept: _,
  onReject: v,
  onAcceptAll: y,
  following: b,
  onFollowingChange: ee,
  height: x,
  tabs: S,
  tab: C,
  onTabChange: w,
  formatCost: T = u,
  title: E = `Untitled`,
  className: te,
}) {
  let D = (0, n.useRef)(null),
    O = (0, n.useRef)(null),
    [k, ne] = (0, n.useState)({}),
    [re, ie] = (0, n.useState)({}),
    [A, j] = (0, n.useState)({}),
    [ae, oe] = (0, n.useState)({}),
    [se, M] = (0, n.useState)({}),
    [N, P] = (0, n.useState)(null),
    [F, I] = (0, n.useState)(``),
    L = (0, n.useRef)(0),
    [R, ce] = (0, n.useState)(0),
    [le, ue] = (0, n.useState)(0),
    [de, fe] = (0, n.useState)(0),
    [pe, me] = (0, n.useState)(1 / 0),
    z = (0, n.useRef)(new Map()),
    [he, ge] = (0, n.useState)({}),
    [_e, ve] = (0, n.useState)(null),
    B = b === void 0 ? _e : b,
    ye = (e) => {
      (b === void 0 && ve(e), ee?.(e));
    },
    [V, H] = (0, n.useState)(null),
    U = (0, n.useRef)(0),
    be = () => {
      let t = D.current;
      if (!t) return;
      let n = t.getBoundingClientRect(),
        r = t.offsetWidth ? n.width / t.offsetWidth : 1,
        i = (e) => ({ x: (e.left - n.left) / r, y: (e.top - n.top) / r, w: e.width / r, h: e.height / r }),
        c = (e) => Math.round(e * 10) / 10,
        l = {},
        u = {};
      for (let n of e) {
        let e = g[n.id];
        if (!e) continue;
        let r = t.querySelector(`[data-block="${CSS.escape(e.block)}"]`);
        if (!r) continue;
        let a = r.dataset.kind === `image` ? r.querySelector(`.ui-agc__img`) : null;
        if (a) {
          let r = i(a.getBoundingClientRect()),
            o =
              e.point === `corner`
                ? { x: c(r.x + r.w), y: c(r.y + r.h), h: 0, free: !0 }
                : { x: c(r.x + r.w * 0.55), y: c(r.y + r.h * 0.5), h: 0, free: !0 };
          if (((l[n.id] = o), e.point === `corner` && e.select)) {
            let e = t.querySelector(`[data-agent="${CSS.escape(n.id)}"]`);
            e && (e.style.transform = `translate(${o.x}px, ${o.y}px)`);
          }
          continue;
        }
        let d = o(r, e.at ?? 0, e.in),
          f = d ? s(...d) : null;
        if (f) {
          let e = i(f);
          l[n.id] = { x: c(e.x), y: c(e.y), h: c(e.h) };
        }
        if (e.select && !e.in) {
          let t = o(r, e.at ?? 0),
            a = o(r, (e.at ?? 0) + e.select);
          if (t && a) {
            let e = document.createRange();
            (e.setStart(...t), e.setEnd(...a));
            let r = [];
            for (let t of e.getClientRects()) {
              if (t.width < 0.5) continue;
              let e = i(t),
                n = r.find((t) => Math.abs(t.y - e.y) < 3);
              if (n) {
                let t = Math.max(n.x + n.w, e.x + e.w);
                ((n.x = Math.min(n.x, e.x)), (n.w = t - n.x));
              } else r.push({ ...e });
            }
            u[n.id] = r.map((e) => ({
              x: Math.round(e.x),
              y: Math.round(e.y),
              w: Math.round(e.w),
              h: Math.round(e.h),
            }));
          }
        }
      }
      let d = O.current ? i(O.current.getBoundingClientRect()) : { x: 0, w: t.offsetWidth },
        f = {};
      for (let e of a) {
        let n = t.querySelector(`[data-block="${CSS.escape(e.block)}"]`);
        if (!n) continue;
        let r = e.at === void 0 ? null : o(n, e.at),
          a = r ? s(...r) : null;
        if (a) {
          let t = i(a);
          f[e.id] = { x: Math.round(t.x), y: Math.round(t.y + 3 + (e.y ?? 0)) };
          continue;
        }
        let c = i(n.getBoundingClientRect());
        f[e.id] = {
          x: Math.round(d.x + d.w * Math.max(0, Math.min(1, e.x ?? 0.9))),
          y: Math.round(c.y + (e.y ?? 0)),
        };
      }
      let p = {};
      for (let e of t.querySelectorAll(`figure[data-fit]`)) {
        if (getComputedStyle(e).float === `none`) continue;
        let t = e.nextElementSibling;
        if (t) {
          let n = document.createRange();
          n.selectNodeContents(t);
          let r = n.getClientRects()[0];
          if (r && r.top >= e.getBoundingClientRect().bottom - 1) continue;
        }
        t &&
          e.dataset.block &&
          (p[e.dataset.block] = {
            w: Math.round(e.offsetWidth),
            h: Math.max(48, Math.round(t.offsetHeight)),
          });
      }
      let m = {};
      for (let e of a) {
        let n = t.querySelector(`[data-comment="${CSS.escape(e.id)}"] .ui-agc__pin-body`);
        n && (m[e.id] = n.offsetHeight);
      }
      let h = (e, t) => (JSON.stringify(e) === JSON.stringify(t) ? e : t);
      (ne((e) => h(e, l)),
        ie((e) => h(e, u)),
        j((e) => h(e, f)),
        oe((e) => h(e, m)),
        M((e) => h(e, p)),
        ce(t.offsetWidth),
        ue(O.current?.offsetWidth ?? t.offsetWidth),
        fe(t.offsetHeight));
      let _ = t.parentElement;
      for (; _ && _ !== document.body && getComputedStyle(_).overflowX === `visible`;) _ = _.parentElement;
      let v = _ && _ !== document.body ? _.getBoundingClientRect().right : window.innerWidth;
      me(Math.round((v - n.left) / r));
      let y = {};
      for (let [e, t] of z.current) y[e] = t.offsetWidth;
      ge((e) => (JSON.stringify(e) === JSON.stringify(y) ? e : y));
    },
    W = (0, n.useRef)(be);
  ((W.current = be),
    (0, n.useLayoutEffect)(() => {
      for (let e of D.current?.querySelectorAll(`.ui-agc__table-card`) ?? []) {
        let t = e.firstElementChild;
        if (!t) continue;
        let n = `${t.offsetHeight}px`;
        e.style.height !== n &&
          (e.style.height
            ? (e.style.height = n)
            : ((e.style.transition = `none`),
              (e.style.height = n),
              e.offsetHeight,
              (e.style.transition = ``)));
      }
    }),
    (0, n.useLayoutEffect)(() => W.current()),
    (0, n.useEffect)(() => {
      let e = D.current;
      if (!e) return;
      let t = new ResizeObserver(() => W.current());
      (t.observe(e), document.fonts?.ready.then(() => W.current()));
      let n = 0,
        r = 0,
        i = () => {
          (W.current(), (n = performance.now() < r ? requestAnimationFrame(i) : 0));
        },
        a = (e) => {
          let t = e.target;
          (t.classList?.contains(`ui-agc__figure`) || t.classList?.contains(`ui-agc__table-card`)) &&
            ((r = performance.now() + 900), (n ||= requestAnimationFrame(i)));
        };
      return (
        e.addEventListener(`transitionrun`, a),
        () => {
          (t.disconnect(), cancelAnimationFrame(n), e.removeEventListener(`transitionrun`, a));
        }
      );
    }, []));
  let xe = e.filter((e) => g[e.id] && k[e.id]).map((e) => e.id),
    G = (0, n.useRef)(new Set()),
    [, Se] = (0, n.useState)(0),
    K = xe.filter((e) => !G.current.has(e));
  (0, n.useEffect)(() => {
    if (!K.length) {
      for (let e of [...G.current]) xe.includes(e) || G.current.delete(e);
      return;
    }
    let e = window.setTimeout(() => {
      (K.forEach((e) => G.current.add(e)), Se((e) => e + 1));
    }, 40);
    return () => window.clearTimeout(e);
  });
  let Ce = (0, n.useRef)({});
  Object.assign(Ce.current, k);
  let [we, Te] = (0, n.useState)(``),
    q = (0, n.useRef)(null);
  (0, n.useEffect)(() => {
    let t = new Set([...i.map((e) => e.id), ...a.map((e) => e.id)]);
    if (q.current) {
      let t = i.find((e) => !q.current.has(e.id)),
        n = a.find((e) => !q.current.has(e.id)),
        r = (t) => e.find((e) => e.id === t)?.name;
      t && r(t.agent)
        ? Te(`${r(t.agent)} suggests a change${t.note ? `: ${t.note}` : ``}`)
        : n && r(n.agent) && Te(`${r(n.agent)} is writing a comment`);
    }
    q.current = t;
  }, [i, a, e]);
  let Ee = (e, t) => {
      window.clearTimeout(U.current);
      let n = D.current;
      if (!n) return;
      let r = n.getBoundingClientRect(),
        i = n.offsetWidth ? r.width / n.offsetWidth : 1,
        a = t.getClientRects(),
        o = a[a.length - 1] ?? t.getBoundingClientRect();
      H({
        id: e,
        box: { x: (o.left - r.left) / i, y: (o.top - r.top) / i, w: o.width / i, h: o.height / i },
      });
    },
    J = () => {
      (window.clearTimeout(U.current), (U.current = window.setTimeout(() => H(null), 140)));
    },
    Y = V ? i.find((e) => e.id === V.id) : void 0,
    De = le > 0 ? Math.min(260, le) : 260;
  ((0, n.useEffect)(() => {
    if (!V) return;
    let e = (e) => e.key === `Escape` && H(null);
    return (document.addEventListener(`keydown`, e), () => document.removeEventListener(`keydown`, e));
  }, [V]),
    (0, n.useEffect)(
      () => () => {
        (window.clearTimeout(U.current), window.clearTimeout(L.current));
      },
      [],
    ));
  let X = (t) => e.find((e) => e.id === t),
    Oe = (e) => X(e)?.color,
    Z = (e) => X(e)?.name ?? `Agent`,
    ke = (e) =>
      e?.avatar ?? (0, r.jsx)(`span`, { className: `ui-agc__face-initial`, children: c(e?.name ?? `?`) }),
    Q = (e) => {
      let t = e.text ?? ``,
        n = i.filter((t) => t.block === e.id).sort((e, t) => e.at - t.at),
        a = [],
        o = 0;
      for (let e of n) {
        let n = Math.max(o, Math.min(e.at, t.length));
        n > o && a.push((0, r.jsx)(`span`, { "data-from": o, children: t.slice(o, n) }, `t${o}`));
        let i = Math.min(e.remove ?? 0, t.length - n),
          s = { "--ui-agc-c": Oe(e.agent) },
          c = {
            tabIndex: 0,
            onMouseEnter: (t) => Ee(e.id, t.currentTarget),
            onMouseLeave: J,
            onFocus: (t) => Ee(e.id, t.currentTarget),
            onBlur: J,
            "data-open": V?.id === e.id ? `` : void 0,
          };
        (i &&
          a.push(
            (0, r.jsx)(
              `del`,
              {
                className: `ui-agc__del`,
                "data-from": n,
                "data-sug": e.id,
                style: s,
                ...c,
                "aria-label": `${Z(e.agent)} suggests removing: ${t.slice(n, n + i)}`,
                children: t.slice(n, n + i),
              },
              `d${e.id}`,
            ),
          ),
          i && e.insert !== void 0 && a.push((0, r.jsx)(`wbr`, {}, `b${e.id}`)),
          e.insert !== void 0 &&
            a.push(
              (0, r.jsx)(
                `ins`,
                {
                  className: `ui-agc__ins`,
                  "data-ins": e.id,
                  "data-sug": e.id,
                  style: s,
                  ...c,
                  "aria-label": `${Z(e.agent)} suggests adding: ${e.insert}`,
                  children: e.insert,
                },
                `i${e.id}`,
              ),
            ),
          (o = n + i));
      }
      return (
        (o < t.length || !a.length) &&
          a.push((0, r.jsx)(`span`, { "data-from": o, children: t.slice(o) || p }, `t${o}`)),
        a
      );
    },
    Ae = (t) => e.find((e) => g[e.id]?.block === t && g[e.id]?.select),
    je = (t) => {
      let n = t.kind ?? `paragraph`;
      if (n === `image`) {
        let e = Math.max(0.2, Math.min(1, d(t.width) ?? 1)),
          n = d(t.ratio),
          i = n && n > 0 ? n : 16 / 9,
          a = !!t.float && !(n && n > 0),
          o = a ? se[t.id] : void 0,
          s = Ae(t.id);
        return (0, r.jsxs)(
          `figure`,
          {
            className: `ui-agc__figure`,
            "data-block": t.id,
            "data-kind": `image`,
            "data-float": t.float,
            "data-fit": a ? `` : void 0,
            style: { width: `${e * 100}%` },
            children: [
              (0, r.jsxs)(`div`, {
                className: `ui-agc__img`,
                "data-loading": t.loading ? `` : void 0,
                "data-held": s ? `` : void 0,
                style: { ...(a && o ? { height: o.h } : { aspectRatio: String(i) }), "--ui-agc-c": s?.color },
                role: `img`,
                "aria-label": t.loading ? `Image loading` : t.alt || t.text || `Image`,
                children: [
                  t.loading || !t.src
                    ? (0, r.jsx)(`span`, { className: `ui-agc__shimmer`, "aria-hidden": `true` })
                    : (0, r.jsx)(`img`, { src: t.src, alt: ``, draggable: !1 }),
                  s &&
                    (0, r.jsxs)(r.Fragment, {
                      children: [
                        [`tl`, `tr`, `bl`, `br`].map((e) =>
                          (0, r.jsx)(
                            `span`,
                            { className: `ui-agc__handle`, "data-at": e, "aria-hidden": `true` },
                            e,
                          ),
                        ),
                        (0, r.jsx)(`span`, {
                          className: `ui-agc__size`,
                          "aria-hidden": `true`,
                          children: o
                            ? `${o.w * 2} × ${o.h * 2}`
                            : `${Math.round(1200 * e)} × ${Math.round((1200 * e) / i)}`,
                        }),
                      ],
                    }),
                ],
              }),
              t.text &&
                (0, r.jsx)(`figcaption`, { className: `ui-agc__caption`, dir: `auto`, children: t.text }),
            ],
          },
          t.id,
        );
      }
      if (n === `table`) {
        let [n, ...i] = t.rows ?? [],
          a = (e) =>
            e.tone
              ? (0, r.jsx)(`span`, {
                  className: `ui-agc__pill`,
                  "data-tone": e.tone,
                  "data-block": e.id,
                  children: Q(e),
                })
              : (0, r.jsx)(`span`, { className: `ui-agc__cell`, "data-block": e.id, children: Q(e) });
        return (0, r.jsx)(
          `div`,
          {
            className: `ui-agc__table-card`,
            children: (0, r.jsxs)(`table`, {
              className: `ui-agc__table`,
              children: [
                n &&
                  (0, r.jsx)(`thead`, {
                    children: (0, r.jsx)(`tr`, {
                      children: n.map((e) =>
                        (0, r.jsx)(`th`, { title: e.text || void 0, children: a(e) }, e.id),
                      ),
                    }),
                  }),
                (0, r.jsx)(`tbody`, {
                  children: i.map((e, t) =>
                    (0, r.jsx)(
                      `tr`,
                      {
                        children: e.map((e) =>
                          (0, r.jsx)(`td`, { title: e.text || void 0, children: a(e) }, e.id),
                        ),
                      },
                      e[0]?.id ?? t,
                    ),
                  ),
                }),
                t.addRow &&
                  (0, r.jsx)(`tfoot`, {
                    children: (0, r.jsx)(`tr`, {
                      children: (0, r.jsx)(`td`, {
                        colSpan: n?.length ?? 1,
                        children: (0, r.jsxs)(`span`, {
                          className: `ui-agc__add`,
                          "data-block": `${t.id}:add`,
                          "data-hover": e.some((e) => g[e.id]?.block === `${t.id}:add`) ? `` : void 0,
                          "data-pressed": e.some((e) => g[e.id]?.block === `${t.id}:add` && g[e.id]?.press)
                            ? ``
                            : void 0,
                          children: [
                            (0, r.jsx)(`svg`, {
                              width: `14`,
                              height: `14`,
                              viewBox: `0 0 24 24`,
                              fill: `none`,
                              stroke: `currentColor`,
                              strokeWidth: `2`,
                              strokeLinecap: `round`,
                              "aria-hidden": `true`,
                              children: (0, r.jsx)(`path`, { d: `M12 5v14M5 12h14` }),
                            }),
                            (0, r.jsx)(`span`, { "data-from": 0, children: `Add row` }),
                          ],
                        }),
                      }),
                    }),
                  }),
              ],
            }),
          },
          t.id,
        );
      }
      return n === `code`
        ? (0, r.jsx)(
            `pre`,
            {
              className: `ui-agc__code`,
              "data-block": t.id,
              children: (0, r.jsx)(`code`, { children: Q(t) }),
            },
            t.id,
          )
        : (0, r.jsx)(
            n === `title` ? `h2` : n === `heading` ? `h3` : n === `item` ? `li` : `p`,
            {
              className: `ui-agc__block ui-agc__block--${n}`,
              "data-block": t.id,
              dir: `auto`,
              children: Q(t),
            },
            t.id,
          );
    },
    Me = [];
  for (let e = 0; e < t.length; e++)
    if (t[e].kind === `item`) {
      let n = [];
      for (; e < t.length && t[e].kind === `item`;) n.push(t[e++]);
      (e--, Me.push((0, r.jsx)(`ul`, { className: `ui-agc__list`, children: n.map(je) }, `l${n[0].id}`)));
    } else Me.push(je(t[e]));
  let Ne = e.filter((e) => g[e.id]),
    Pe = e.some((e) => d(e.cost) !== void 0) ? e.reduce((e, t) => e + (d(t.cost) ?? 0), 0) : null,
    Fe = R > 0 && R < 480 ? 3 : f,
    Ie = e.slice(0, Fe - 1),
    Le =
      e.length <= Fe
        ? e
        : B && !Ie.some((e) => e.id === B)
          ? [...Ie.slice(0, -1), ...e.filter((e) => e.id === B)]
          : Ie,
    $ = e.filter((e) => !Le.includes(e)),
    Re = new Set(a.map((e) => e.id)),
    ze = Ne.filter((e) => g[e.id]?.typing).length;
  return (0, r.jsxs)(`div`, {
    className: [`ui-agc`, te].filter(Boolean).join(` `),
    "data-following": B ?? void 0,
    "data-fade": x ? `` : void 0,
    style: x ? { "--ui-agc-height": `${x}px` } : void 0,
    children: [
      (0, r.jsx)(`style`, { href: `ui-agent-cursors`, precedence: `default`, children: h }),
      S &&
        S.length > 0 &&
        (0, r.jsx)(`div`, {
          className: `ui-agc__tabs`,
          role: `tablist`,
          "aria-label": `Views`,
          children: S.map((e) =>
            (0, r.jsx)(
              `button`,
              {
                type: `button`,
                role: `tab`,
                className: `ui-agc__tab`,
                "aria-selected": e.id === (C ?? S[0].id),
                onClick: () => w?.(e.id),
                children: e.label,
              },
              e.id,
            ),
          ),
        }),
      (0, r.jsxs)(`div`, {
        className: `ui-agc__stage`,
        ref: D,
        children: [
          (0, r.jsx)(`div`, {
            className: `ui-agc__shade`,
            "aria-hidden": `true`,
            children: (0, r.jsx)(`span`, {}),
          }),
          (0, r.jsxs)(`div`, {
            className: `ui-agc__sheet`,
            ref: O,
            children: [
              (0, r.jsxs)(`header`, {
                className: `ui-agc__bar`,
                children: [
                  (0, r.jsx)(`span`, {
                    className: `ui-agc__doc`,
                    "aria-hidden": `true`,
                    children: (0, r.jsxs)(`svg`, {
                      width: `16`,
                      height: `16`,
                      viewBox: `0 0 24 24`,
                      fill: `none`,
                      stroke: `currentColor`,
                      strokeWidth: `1.8`,
                      strokeLinecap: `round`,
                      strokeLinejoin: `round`,
                      children: [
                        (0, r.jsx)(`path`, {
                          d: `M14 2.5H7.5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V7z`,
                        }),
                        (0, r.jsx)(`path`, { d: `M14 2.5V7h4.5M9 12.5h6M9 16h4` }),
                      ],
                    }),
                  }),
                  (0, r.jsx)(`span`, { className: `ui-agc__title`, title: E, children: E }),
                  (0, r.jsxs)(`div`, {
                    className: `ui-agc__people`,
                    role: `group`,
                    "aria-label": `Agents in this document`,
                    children: [
                      Le.map((e) => {
                        let t = g[e.id],
                          n = B === e.id;
                        return (0, r.jsxs)(
                          `button`,
                          {
                            type: `button`,
                            className: `ui-agc__face`,
                            "data-here": t ? `` : void 0,
                            "data-typing": t?.typing ? `` : void 0,
                            "aria-pressed": n,
                            "aria-label": `${n ? `Stop following` : `Follow`} ${e.name}${t?.doing ? ` – ${t.doing}` : t ? `` : ` (not in the document)`}`,
                            style: { "--ui-agc-c": e.color, "--ui-agc-tint": e.tint },
                            onClick: () => ye(n ? null : e.id),
                            children: [
                              (0, r.jsx)(`span`, { className: `ui-agc__face-mark`, children: ke(e) }),
                              (0, r.jsxs)(`span`, {
                                className: `ui-agc__face-tip`,
                                "aria-hidden": `true`,
                                children: [
                                  (0, r.jsx)(`b`, { children: e.name }),
                                  (0, r.jsx)(`span`, {
                                    children: t?.doing ?? (t ? `In the document` : `Away`),
                                  }),
                                ],
                              }),
                            ],
                          },
                          e.id,
                        );
                      }),
                      $.length > 0 &&
                        (0, r.jsxs)(`span`, {
                          className: `ui-agc__face ui-agc__face-more`,
                          title: $.map((e) => e.name).join(`, `),
                          "aria-label": `${$.length} more: ${$.map((e) => e.name).join(`, `)}`,
                          children: [`+`, $.length.toLocaleString(`en-US`)],
                        }),
                    ],
                  }),
                  (0, r.jsxs)(`span`, {
                    className: `ui-agc__sum`,
                    children: [
                      i.length > 0
                        ? `${i.length.toLocaleString(`en-US`)} suggestion${i.length === 1 ? `` : `s`}`
                        : ze
                          ? `${ze.toLocaleString(`en-US`)} typing`
                          : `${Ne.length.toLocaleString(`en-US`)} here`,
                      Pe !== null &&
                        (0, r.jsx)(`b`, {
                          className: `ui-agc__spent`,
                          "data-zero": Pe === 0 ? `` : void 0,
                          children: T(Pe),
                        }),
                    ],
                  }),
                  y &&
                    (0, r.jsx)(`button`, {
                      type: `button`,
                      className: `ui-agc__all`,
                      disabled: i.length === 0,
                      onClick: y,
                      children: `Accept all`,
                    }),
                ],
              }),
              (0, r.jsx)(`div`, { className: `ui-agc__paper`, "aria-hidden": `true` }),
              (0, r.jsx)(`div`, {
                className: `ui-agc__marks`,
                "aria-hidden": `true`,
                children: e.map((e) =>
                  (re[e.id] ?? []).map((t, n) =>
                    (0, r.jsx)(
                      `span`,
                      {
                        className: `ui-agc__mark`,
                        "data-dim": B && B !== e.id ? `` : void 0,
                        style: {
                          left: t.x - 1,
                          top: t.y,
                          width: t.w + 2,
                          height: t.h,
                          "--ui-agc-c": e.color,
                        },
                      },
                      `${e.id}-${n}`,
                    ),
                  ),
                ),
              }),
              (0, r.jsx)(`div`, { className: `ui-agc__text`, children: Me }, C),
            ],
          }),
          (0, r.jsx)(`div`, {
            className: `ui-agc__notes`,
            children: a.map((e) => {
              let t = X(e.agent),
                n = A[e.id];
              if (!n) return null;
              let i = !!e.open || N === e.id,
                a = Math.min(248, Math.max(160, R - 16)),
                o = i ? Math.max(8 - n.x, Math.min(0, R - 8 - (n.x + a))) : 0,
                s = de > 0 && n.y + 190 > de,
                c = () => window.clearTimeout(L.current),
                u = () => {
                  (window.clearTimeout(L.current),
                    (L.current = window.setTimeout(() => P((t) => (t === e.id ? null : t)), 160)));
                };
              return (0, r.jsx)(
                `div`,
                {
                  className: `ui-agc__pin`,
                  "data-comment": e.id,
                  "data-open": i ? `` : void 0,
                  "data-up": s ? `` : void 0,
                  style: {
                    left: n.x,
                    top: n.y,
                    "--ui-agc-c": t?.color,
                    "--ui-agc-pin-h": `${ae[e.id] ?? 120}px`,
                    "--ui-agc-pin-w": `${a}px`,
                    "--ui-agc-pin-x": `${o}px`,
                  },
                  onMouseEnter: () => {
                    (c(), P(e.id));
                  },
                  onMouseLeave: u,
                  onFocus: () => {
                    (c(), P(e.id));
                  },
                  onBlur: (e) => !e.currentTarget.contains(e.relatedTarget) && u(),
                  children: (0, r.jsxs)(`div`, {
                    className: `ui-agc__pin-box`,
                    children: [
                      (0, r.jsx)(`span`, { className: `ui-agc__pin-mark`, children: ke(t) }),
                      (0, r.jsx)(`button`, {
                        type: `button`,
                        className: `ui-agc__pin-hit`,
                        "aria-expanded": i,
                        "aria-label": `Comment from ${t?.name ?? `an agent`}: ${e.text}`,
                        tabIndex: i ? -1 : 0,
                      }),
                      (0, r.jsxs)(`div`, {
                        className: `ui-agc__pin-body`,
                        role: `group`,
                        "aria-label": `Comment from ${t?.name ?? `an agent`}`,
                        "aria-hidden": !i,
                        children: [
                          (0, r.jsxs)(`div`, {
                            className: `ui-agc__note-head`,
                            children: [
                              (0, r.jsx)(`b`, { title: t?.name, children: t?.name }),
                              (0, r.jsx)(`span`, { children: `now` }),
                            ],
                          }),
                          (0, r.jsx)(`p`, {
                            className: `ui-agc__note-text`,
                            "data-block": e.id,
                            dir: `auto`,
                            children: (0, r.jsx)(`span`, { "data-from": 0, children: e.text || p }),
                          }),
                          (m || l) &&
                            (0, r.jsxs)(`div`, {
                              className: `ui-agc__pin-actions`,
                              children: [
                                m
                                  ? (0, r.jsx)(`input`, {
                                      className: `ui-agc__reply`,
                                      value: N === e.id ? F : ``,
                                      placeholder: `Reply`,
                                      "aria-label": `Reply to ${t?.name ?? `the agent`}`,
                                      tabIndex: i ? 0 : -1,
                                      onChange: (e) => I(e.target.value),
                                      onKeyDown: (t) => {
                                        (t.key === `Enter` && F.trim() && (m(e, F.trim()), I(``)),
                                          t.key === `Escape` && P(null));
                                      },
                                    })
                                  : (0, r.jsx)(`span`, { className: `ui-agc__reply`, "aria-hidden": `true` }),
                                l &&
                                  (0, r.jsx)(`button`, {
                                    type: `button`,
                                    className: `ui-agc__resolve`,
                                    "aria-label": `Resolve`,
                                    title: `Resolve`,
                                    tabIndex: i ? 0 : -1,
                                    onClick: () => {
                                      (P(null), l(e));
                                    },
                                    children: (0, r.jsx)(`svg`, {
                                      width: `14`,
                                      height: `14`,
                                      viewBox: `0 0 24 24`,
                                      fill: `none`,
                                      stroke: `currentColor`,
                                      strokeWidth: `2.6`,
                                      strokeLinecap: `round`,
                                      strokeLinejoin: `round`,
                                      children: (0, r.jsx)(`path`, { d: `M5 12.5l4.5 4.5L19 7.5` }),
                                    }),
                                  }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                },
                e.id,
              );
            }),
          }),
          (0, r.jsx)(`div`, {
            className: `ui-agc__cursors`,
            "aria-hidden": `true`,
            children: e.map((e) => {
              let t = g[e.id],
                n = (t && k[e.id]) || Ce.current[e.id];
              if (!n) return null;
              let i = !t || !k[e.id],
                a = d(e.cost),
                o = a === void 0 ? [] : [T(a)],
                s = Math.max(Math.min(0, 8 - (n.x + 16)), Math.min(0, pe - 8 - (n.x + 16 + (he[e.id] ?? 0)))),
                c = x ? Math.max(0, Math.min(1, (x * 0.97 - n.y) / (x * 0.47))) : 1;
              return (0, r.jsx)(
                `div`,
                {
                  className: `ui-agc__cursor`,
                  "data-agent": e.id,
                  "data-gone": i ? `` : void 0,
                  "data-arrive": !i && K.includes(e.id) ? `` : void 0,
                  "data-typing": t?.typing ? `` : void 0,
                  "data-free": n.free ? `` : void 0,
                  "data-in-note": t && Re.has(t.block) ? `` : void 0,
                  "data-press": t?.press ? `` : void 0,
                  "data-drag": t?.point === `corner` && t.select ? `` : void 0,
                  "data-dim": B && B !== e.id ? `` : void 0,
                  style: {
                    transform: `translate(${n.x}px, ${n.y}px)`,
                    "--ui-agc-c": e.color,
                    "--ui-agc-h": `${n.h}px`,
                    "--ui-agc-shift": `${s}px`,
                  },
                  children: (0, r.jsxs)(`div`, {
                    className: `ui-agc__cursor-in`,
                    style: c < 1 ? { opacity: c } : void 0,
                    children: [
                      (0, r.jsx)(`span`, { className: `ui-agc__caret` }),
                      (0, r.jsx)(`svg`, {
                        className: `ui-agc__arrow`,
                        viewBox: `-2.186 -0.256 18.514 22.277`,
                        children: (0, r.jsx)(`path`, {
                          transform: `rotate(21.37)`,
                          d: `M13.92 4.07c1.69.66 3.03 1.18 3.94 1.68.46.25.87.53 1.16.86.31.35.51.79.48 1.29-.03.51-.27.92-.62 1.23-.33.3-.77.53-1.25.74-.96.4-2.36.78-4.12 1.26-.56.15-.98.27-1.26.37-.26.1-.38.18-.47.27-.09.09-.17.21-.27.47-.1.28-.22.7-.37 1.26-.48 1.76-.86 3.16-1.26 4.12-.2.49-.44.93-.74 1.25-.32.35-.72.6-1.23.62-.51.03-.94-.17-1.29-.48-.33-.29-.61-.7-.86-1.16-.5-.91-1.02-2.25-1.68-3.94L1.66 7.76C.96 5.99.41 4.59.16 3.51-.09 2.44-.12 1.39.63.63 1.39-.12 2.44-.09 3.51.16c1.08.25 2.48.8 4.25 1.5l6.16 2.41Z`,
                        }),
                      }),
                      (0, r.jsxs)(`span`, {
                        className: `ui-agc__flag`,
                        ref: (t) => {
                          t ? z.current.set(e.id, t) : z.current.delete(e.id);
                        },
                        children: [
                          (0, r.jsxs)(`span`, {
                            className: `ui-agc__flag-row`,
                            children: [
                              (0, r.jsx)(`span`, {
                                className: `ui-agc__flag-name`,
                                dir: `auto`,
                                children: e.name,
                              }),
                              o.length > 0 &&
                                (0, r.jsx)(`span`, {
                                  className: `ui-agc__flag-tags`,
                                  children: o.map((e, t) =>
                                    (0, r.jsx)(`span`, { className: `ui-agc__flag-tag`, children: e }, t),
                                  ),
                                }),
                            ],
                          }),
                          (0, r.jsx)(`span`, {
                            className: `ui-agc__flag-doing`,
                            "data-on": t?.doing ? `` : void 0,
                            children: (0, r.jsx)(`span`, { children: t?.doing ?? `` }),
                          }),
                        ],
                      }),
                    ],
                  }),
                },
                e.id,
              );
            }),
          }),
          V &&
            Y &&
            (0, r.jsxs)(`div`, {
              className: `ui-agc__pop`,
              role: `dialog`,
              "aria-label": `Suggestion from ${Z(Y.agent)}`,
              style: {
                left: Math.max(0, Math.min(V.box.x, le - De)),
                top: V.box.y + V.box.h + 6,
                width: De,
                "--ui-agc-c": Oe(Y.agent),
              },
              onMouseEnter: () => window.clearTimeout(U.current),
              onMouseLeave: J,
              onFocus: () => window.clearTimeout(U.current),
              onBlur: J,
              children: [
                (0, r.jsxs)(`div`, {
                  className: `ui-agc__pop-head`,
                  children: [
                    (0, r.jsx)(`span`, { className: `ui-agc__pop-mark`, children: ke(X(Y.agent)) }),
                    (0, r.jsx)(`b`, { title: Z(Y.agent), children: Z(Y.agent) }),
                    (0, r.jsx)(`span`, {
                      children:
                        Y.remove && Y.insert
                          ? `suggests a rewrite`
                          : Y.remove
                            ? `suggests removing`
                            : `suggests adding`,
                    }),
                  ],
                }),
                Y.note && (0, r.jsx)(`p`, { className: `ui-agc__pop-note`, dir: `auto`, children: Y.note }),
                (0, r.jsxs)(`div`, {
                  className: `ui-agc__pop-actions`,
                  children: [
                    v &&
                      (0, r.jsx)(`button`, {
                        type: `button`,
                        className: `ui-agc__btn`,
                        onClick: () => {
                          (H(null), v(Y));
                        },
                        children: `Reject`,
                      }),
                    _ &&
                      (0, r.jsx)(`button`, {
                        type: `button`,
                        className: `ui-agc__btn ui-agc__btn--primary`,
                        onClick: () => {
                          (H(null), _(Y));
                        },
                        children: `Accept`,
                      }),
                  ],
                }),
              ],
            }),
        ],
      }),
      (0, r.jsx)(`span`, { className: `ui-agc__live`, role: `status`, "aria-live": `polite`, children: we }),
    ],
  });
}
var h = `.ui-agc{--ui-agc-card: #ffffff;--ui-agc-tray: #f0f0f0;--ui-agc-ink: #171717;--ui-agc-text: #3d3d3d;--ui-agc-muted: #8a8a8a;--ui-agc-line: #ececec;--ui-agc-grid: #f0f0f0;--ui-agc-stroke: #efefef;--ui-agc-gap: 18px;--ui-agc-chip: #f5f5f5;--ui-agc-shimmer: #f0f0f0;--ui-agc-shine: #fafafa;--ui-agc-code: rgba(0, 0, 0, 0.035);--ui-agc-ring: rgba(23, 23, 23, 0.22);--ui-agc-agent: #1f1f22;--ui-agc-flag: #141416;--ui-agc-flag-ink: #ffffff;--ui-agc-flag-soft: rgba(255, 255, 255, 0.14);--ui-agc-edge: linear-gradient(90deg, #ff4fa3, #8b6bff 55%, #3b8bff);--ui-agc-c: var(--ui-agc-agent);--ui-agc-glide: 560ms;--ui-agc-ease: cubic-bezier(0.22, 1, 0.36, 1);position: relative;box-sizing: border-box;width: 100%;font-family: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;font-size: 14px;line-height: 20px;letter-spacing: -0.006em;color: var(--ui-agc-text);text-align: left;-webkit-font-smoothing: antialiased}.ui-agc *, .ui-agc *::before, .ui-agc *::after{box-sizing: border-box}:where(.ui-agc) button{margin: 0;padding: 0;border: 0;background: none;font: inherit;color: inherit;text-align: inherit;cursor: pointer;-webkit-tap-highlight-color: transparent}.ui-agc button:focus-visible{outline: 2px solid var(--ui-agc-ring);outline-offset: 2px}.ui-agc svg{display: block;flex: none}.ui-agc__stage{position: relative}.ui-agc{container: agc / inline-size}.ui-agc__tabs{display: flex;gap: 6px;margin: 0 0 6px}.ui-agc__tab{height: 30px;padding: 0 12px;border-radius: 9px;background: rgba(0, 0, 0, 0.05);font-size: 13px;font-weight: 500;color: var(--ui-agc-muted);transition: background-color 160ms ease, color 160ms ease, box-shadow 160ms ease}.ui-agc__tab:hover{color: var(--ui-agc-ink)}.ui-agc__tab[aria-selected="true"]{background: var(--ui-agc-card);box-shadow: inset 0 0 0 1px var(--ui-agc-stroke), 0 1px 2px rgba(0, 0, 0, 0.05);color: var(--ui-agc-ink)}:where(.dark, [data-theme="dark"]) .ui-agc__tab{background: rgba(255, 255, 255, 0.06)}.ui-agc__text{animation: ui-agc-view 380ms var(--ui-agc-ease) both}@keyframes ui-agc-view{from{opacity: 0;filter: blur(2px);transform: translateY(4px)}}.ui-agc__table-card{overflow: hidden;border-radius: 12px;box-shadow: inset 0 0 0 1px var(--ui-agc-line), 0 1px 2px rgba(0, 0, 0, 0.04);transition: height 420ms var(--ui-agc-ease)}.ui-agc__table{width: 100%;border-collapse: collapse;table-layout: fixed;font-size: 13.5px;line-height: 20px}.ui-agc__table :is(th, td){height: 40px;padding: 0 12px;border-top: 1px solid var(--ui-agc-grid);border-left: 1px solid var(--ui-agc-grid);text-align: left;vertical-align: middle;white-space: nowrap;overflow: hidden;text-overflow: ellipsis}.ui-agc__table :is(th, td):first-child{border-left: 0}.ui-agc__table th:first-child{width: 38%}.ui-agc__table th{border-top: 0;font-size: 12.5px;font-weight: 500;color: var(--ui-agc-muted)}.ui-agc__table td{color: var(--ui-agc-ink)}.ui-agc__table tfoot td{height: 44px;padding: 0 6px}.ui-agc__add{display: inline-flex;align-items: center;gap: 8px;height: 30px;padding: 0 10px;border-radius: 8px;font-size: 13.5px;font-weight: 500;color: var(--ui-agc-muted);transition: background-color 140ms ease, color 140ms ease, transform 140ms ease}.ui-agc__add[data-hover]{background: rgba(0, 0, 0, 0.04);color: var(--ui-agc-ink)}.ui-agc__add[data-pressed]{background: rgba(0, 0, 0, 0.08);transform: scale(0.97)}:where(.dark, [data-theme="dark"]) .ui-agc__add[data-hover]{background: rgba(255, 255, 255, 0.06)}:where(.dark, [data-theme="dark"]) .ui-agc__add[data-pressed]{background: rgba(255, 255, 255, 0.1)}.ui-agc__table tbody tr{animation: ui-agc-row 420ms var(--ui-agc-ease) both}@keyframes ui-agc-row{from{opacity: 0;transform: translateY(-6px)}}.ui-agc__pill{display: inline-flex;align-items: center;height: 22px;padding: 0 8px;border-radius: 999px;background: var(--ui-agc-pill-bg);font-size: 12px;font-weight: 500;color: var(--ui-agc-pill-fg)}.ui-agc__pill[data-tone="gray"]{--ui-agc-pill-bg: rgba(0, 0, 0, 0.05);--ui-agc-pill-fg: #6b6b6b}.ui-agc__pill[data-tone="blue"]{--ui-agc-pill-bg: #eaf1ff;--ui-agc-pill-fg: #2456d6}.ui-agc__pill[data-tone="green"]{--ui-agc-pill-bg: #e6f6ec;--ui-agc-pill-fg: #1a7f45}.ui-agc__pill[data-tone="amber"]{--ui-agc-pill-bg: #fff3e0;--ui-agc-pill-fg: #b85c00}:where(.dark, [data-theme="dark"]) .ui-agc__pill[data-tone="gray"]{--ui-agc-pill-bg: rgba(255, 255, 255, 0.08);--ui-agc-pill-fg: #a1a1a6}:where(.dark, [data-theme="dark"]) .ui-agc__pill[data-tone="blue"]{--ui-agc-pill-bg: #16243f;--ui-agc-pill-fg: #8ab4ff}:where(.dark, [data-theme="dark"]) .ui-agc__pill[data-tone="green"]{--ui-agc-pill-bg: #12301f;--ui-agc-pill-fg: #3dd68c}:where(.dark, [data-theme="dark"]) .ui-agc__pill[data-tone="amber"]{--ui-agc-pill-bg: #3a2410;--ui-agc-pill-fg: #ffa057}.ui-agc__sheet{position: relative;overflow: hidden;border-radius: 20px;background: var(--ui-agc-tray)}.ui-agc__paper{position: absolute;inset: 48px 4px 4px;z-index: 0;border-radius: 16px;background: var(--ui-agc-card);box-shadow: 0 0 0 1px var(--ui-agc-line), 0 1px 2px rgba(0, 0, 0, 0.04)}.ui-agc[data-fade] .ui-agc__sheet{height: var(--ui-agc-height)}.ui-agc__shade{position: absolute;inset: -40px;pointer-events: none}.ui-agc__shade > span{position: absolute;inset: 40px;border-radius: 20px;box-shadow: 0 0 0 1px var(--ui-agc-stroke), 0 1px 2px rgba(0, 0, 0, 0.05), 0 2px 10px rgba(0, 0, 0, 0.055)}.ui-agc[data-fade] .ui-agc__shade{bottom: auto;height: calc(var(--ui-agc-height) + 80px)}.ui-agc[data-fade] .ui-agc__sheet{-webkit-mask: linear-gradient(#000 0, #000 calc(var(--ui-agc-height) * 0.5), transparent calc(var(--ui-agc-height) * 0.97));mask: linear-gradient(#000 0, #000 calc(var(--ui-agc-height) * 0.5), transparent calc(var(--ui-agc-height) * 0.97))}.ui-agc[data-fade] .ui-agc__shade{-webkit-mask: linear-gradient(#000 0, #000 calc(40px + var(--ui-agc-height) * 0.5), transparent calc(40px + var(--ui-agc-height) * 0.97));mask: linear-gradient(#000 0, #000 calc(40px + var(--ui-agc-height) * 0.5), transparent calc(40px + var(--ui-agc-height) * 0.97))}.ui-agc__bar{position: relative;z-index: 3;display: flex;align-items: center;gap: 8px;min-width: 0;height: 48px;padding: 0 12px 0 16px}.ui-agc__doc{display: grid;flex: none;place-items: center;color: var(--ui-agc-muted)}.ui-agc__title{flex: 1;min-width: 0;overflow: hidden;font-size: 13.5px;font-weight: 500;color: var(--ui-agc-muted);white-space: nowrap;text-overflow: ellipsis}.ui-agc__sum{flex: none;font-size: 12.5px;color: var(--ui-agc-muted);font-variant-numeric: tabular-nums}.ui-agc__spent{margin-left: 8px;font-weight: 600;color: var(--ui-agc-ink);transition: opacity 200ms ease}.ui-agc__spent[data-zero]{opacity: 0.35}.ui-agc__all{flex: none;height: 28px;padding: 0 11px;border-radius: 9px;background: var(--ui-agc-ink);font-size: 12.5px;font-weight: 500;color: var(--ui-agc-card);transition: opacity 160ms ease}.ui-agc__all:hover:not(:disabled){opacity: 0.86}.ui-agc__all:disabled{opacity: 0.2;cursor: default}.ui-agc__people{display: flex;flex: none;align-items: center}.ui-agc__face:first-child{margin-left: 0}.ui-agc__face{position: relative;display: grid;place-items: center;width: 28px;height: 28px;margin-left: 4px;border-radius: 50%;background: var(--ui-agc-card);box-shadow: 0 0 0 2px var(--ui-agc-tray), inset 0 0 0 1.5px var(--ui-agc-line);transition: transform 220ms var(--ui-agc-ease), opacity 220ms ease, box-shadow 220ms ease}.ui-agc__face:not([data-here]){opacity: 0.4}.ui-agc__face[data-here]::before{content: "";position: absolute;inset: 0;border-radius: 50%;background: conic-gradient(from 0deg, transparent 0deg, transparent 60deg, var(--ui-agc-c) 360deg);-webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1.5px));mask: radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1.5px));animation: ui-agc-spin 850ms linear infinite}.ui-agc__face:hover, .ui-agc__face[aria-pressed="true"]{z-index: 1;transform: translateY(-1px)}.ui-agc__face[aria-pressed="true"]{background: var(--ui-agc-tint, color-mix(in srgb, var(--ui-agc-c) 16%, var(--ui-agc-card)))}.ui-agc__face-mark, .ui-agc__note-mark{display: grid;place-items: center;width: 14px;height: 14px}.ui-agc__face-mark svg, .ui-agc__note-mark svg{width: 14px;height: 14px}.ui-agc__face-initial{font-size: 11px;font-weight: 600;line-height: 1;color: var(--ui-agc-c)}.ui-agc__face-tip{position: absolute;top: calc(100% + 8px);right: -6px;z-index: 4;padding: 5px 9px;border-radius: 8px;background: var(--ui-agc-ink);font-size: 12px;line-height: 16px;color: var(--ui-agc-card);white-space: nowrap;opacity: 0;transform: translateY(-2px);pointer-events: none;transition: opacity 140ms ease, transform 140ms ease}.ui-agc__face-tip{display: grid;gap: 1px;text-align: left}.ui-agc__face-tip b{font-weight: 600}.ui-agc__face-tip > span{opacity: 0.75}.ui-agc__face:hover .ui-agc__face-tip, .ui-agc__face:focus-visible .ui-agc__face-tip{opacity: 1;transform: none}.ui-agc__text{position: relative;z-index: 1;padding: 36px 48px 48px;font-size: 14px;line-height: 23px;color: var(--ui-agc-text)}.ui-agc__block{margin: 0}.ui-agc__text > * + *{margin-top: var(--ui-agc-gap)}.ui-agc__block--title{font-size: 22px;font-weight: 650;line-height: 28px;letter-spacing: -0.022em;color: var(--ui-agc-ink)}.ui-agc__text > .ui-agc__block--title + *{margin-top: 12px}.ui-agc__block--heading{font-size: 15.5px;font-weight: 600;line-height: 24px;letter-spacing: -0.012em;color: var(--ui-agc-ink)}.ui-agc__text > .ui-agc__block--heading:not(:first-child){margin-top: calc(var(--ui-agc-gap) + 10px)}.ui-agc__text > .ui-agc__block--heading + *{margin-top: 8px}.ui-agc__list{margin: 0;padding: 0 0 0 20px}.ui-agc__list .ui-agc__block + .ui-agc__block{margin-top: 4px}.ui-agc__block--item::marker{color: var(--ui-agc-muted)}.ui-agc__code{margin: 0;padding: 14px 16px;overflow: hidden;border-radius: 12px;background: var(--ui-agc-code);box-shadow: inset 0 0 0 1px var(--ui-agc-line);font-family: ui-monospace, "SF Mono", "JetBrains Mono", Menlo, Consolas, monospace;font-size: 12.5px;line-height: 20px;letter-spacing: 0;color: var(--ui-agc-ink);white-space: pre-wrap}.ui-agc__code code{font: inherit}.ui-agc__figure{margin: 0}.ui-agc__text::after{content: "";display: block;clear: both}.ui-agc__figure{max-width: 100%;transition: width 620ms var(--ui-agc-ease)}.ui-agc__figure[data-float="left"]{float: left;margin: var(--ui-agc-gap) 24px 8px 0}.ui-agc__figure[data-float="right"]{float: right;margin: var(--ui-agc-gap) 0 8px 24px}.ui-agc__text > .ui-agc__figure[data-float]{margin-top: var(--ui-agc-gap)}.ui-agc__text > :is(.ui-agc__block--heading, .ui-agc__code, .ui-agc__list){clear: both}.ui-agc__sheet{container-type: inline-size}@container (max-width: 480px){.ui-agc__figure[data-float]{float: none;margin: 0 0 12px}}.ui-agc__img{position: relative;display: grid;width: 100%;border-radius: 12px;background: var(--ui-agc-shimmer);transition: box-shadow 200ms ease}.ui-agc__img > img{width: 100%;height: 100%;border-radius: inherit;object-fit: cover;animation: ui-agc-fade 500ms ease both}.ui-agc__shimmer{display: block;width: 100%;height: 100%;border-radius: inherit;background: linear-gradient(100deg, var(--ui-agc-shimmer) 35%, var(--ui-agc-shine) 50%, var(--ui-agc-shimmer) 65%) 0 0 / 300% 100%;animation: ui-agc-shimmer 1600ms linear infinite}.ui-agc__img[data-held]{box-shadow: 0 0 0 2px var(--ui-agc-c)}.ui-agc__handle{position: absolute;width: 10px;height: 10px;border-radius: 3px;background: #ffffff;box-shadow: 0 0 0 1.5px var(--ui-agc-c), 0 1px 3px rgba(0, 0, 0, 0.18);animation: ui-agc-fade 160ms ease both}.ui-agc__handle[data-at="tl"]{top: -5px;left: -5px}.ui-agc__handle[data-at="tr"]{top: -5px;right: -5px}.ui-agc__handle[data-at="bl"]{bottom: -5px;left: -5px}.ui-agc__handle[data-at="br"]{right: -5px;bottom: -5px}.ui-agc__size{position: absolute;bottom: 10px;left: 50%;translate: -50% 0;padding: 0 7px;border-radius: 6px;background: var(--ui-agc-c);font-size: 11.5px;font-weight: 600;line-height: 20px;color: #ffffff;white-space: nowrap;font-variant-numeric: tabular-nums;animation: ui-agc-fade 160ms ease both}.ui-agc__caption{margin-top: 8px;font-size: 12.5px;line-height: 18px;color: var(--ui-agc-muted)}.ui-agc__ins, .ui-agc__del{border-radius: 3px;outline: none;cursor: pointer;transition: background-color 160ms ease;-webkit-box-decoration-break: clone;box-decoration-break: clone}.ui-agc__ins{padding: 1px 0;background: color-mix(in srgb, var(--ui-agc-c) 12%, transparent);color: var(--ui-agc-ink);text-decoration: underline 1.5px var(--ui-agc-c);text-underline-offset: 4px;animation: ui-agc-in 300ms ease both}.ui-agc__del{color: var(--ui-agc-muted);text-decoration: line-through 1.5px var(--ui-agc-c)}.ui-agc__ins:hover, .ui-agc__ins[data-open], .ui-agc__ins:focus-visible{background: color-mix(in srgb, var(--ui-agc-c) 22%, transparent)}.ui-agc__del:hover, .ui-agc__del[data-open], .ui-agc__del:focus-visible{background: color-mix(in srgb, var(--ui-agc-c) 10%, transparent)}.ui-agc__marks{position: absolute;inset: 0;z-index: 0;pointer-events: none}.ui-agc__mark{position: absolute;border-radius: 3px;background: color-mix(in srgb, var(--ui-agc-c) 20%, transparent);animation: ui-agc-fade 220ms ease both;transition: opacity 220ms ease}.ui-agc__mark[data-dim]{opacity: 0.25}.ui-agc__notes{position: absolute;inset: 0;z-index: 4;pointer-events: none}.ui-agc__pin{position: absolute;width: 0;height: 0;pointer-events: auto;animation: ui-agc-fade 260ms ease both}.ui-agc__pin{--ui-agc-pin: 30px}.ui-agc__pin-box{position: absolute;top: calc(var(--ui-agc-pin) * -1);left: var(--ui-agc-pin-x, 0px);width: var(--ui-agc-pin);height: var(--ui-agc-pin);overflow: hidden;border-radius: 15px 15px 15px 3px;background: var(--ui-agc-flag);color: var(--ui-agc-flag-ink);box-shadow: 0 0 0 1px var(--ui-agc-flag-soft), 0 8px 20px -8px rgba(0, 0, 0, 0.45);transition: left 340ms var(--ui-agc-ease), width 340ms var(--ui-agc-ease), height 340ms var(--ui-agc-ease), border-radius 340ms var(--ui-agc-ease), box-shadow 340ms ease}.ui-agc__pin[data-up] .ui-agc__pin-box{top: auto;bottom: 0}.ui-agc__pin[data-open]{z-index: 1}.ui-agc__pin[data-open] .ui-agc__pin-box{width: var(--ui-agc-pin-w, 248px);height: var(--ui-agc-pin-h);border-radius: 14px;box-shadow: 0 0 0 1px var(--ui-agc-flag-soft), 0 16px 32px -14px rgba(0, 0, 0, 0.4)}.ui-agc__pin-mark{--ui-agc-ink: var(--ui-agc-flag-ink)}.ui-agc__pin-mark{position: absolute;z-index: 1;top: 7px;left: 7px;display: grid;place-items: center;width: 16px;height: 16px;transition: top 340ms var(--ui-agc-ease), left 340ms var(--ui-agc-ease), width 340ms var(--ui-agc-ease), height 340ms var(--ui-agc-ease);pointer-events: none}.ui-agc__pin-mark svg{width: 100%;height: 100%}.ui-agc__pin[data-open] .ui-agc__pin-mark{top: 11px;left: 12px;width: 14px;height: 14px}.ui-agc__pin-hit{position: absolute;inset: 0;z-index: 2;border-radius: inherit}.ui-agc__pin[data-open] .ui-agc__pin-hit{pointer-events: none}.ui-agc__pin-body{position: absolute;top: 0;left: 0;display: grid;gap: 4px;width: var(--ui-agc-pin-w, 248px);padding: 10px 10px 10px 12px;opacity: 0;transition: opacity 120ms ease}.ui-agc__pin[data-up] .ui-agc__pin-body{top: auto;bottom: 0}.ui-agc__pin[data-open] .ui-agc__pin-body{opacity: 1;transition: opacity 200ms ease 140ms}.ui-agc__pin-body .ui-agc__note-head{padding-left: 22px;color: color-mix(in srgb, var(--ui-agc-flag-ink) 50%, transparent)}.ui-agc__pin-body .ui-agc__note-head b{color: var(--ui-agc-flag-ink)}.ui-agc__pin-body .ui-agc__note-text{color: color-mix(in srgb, var(--ui-agc-flag-ink) 86%, transparent)}.ui-agc__note-head{display: flex;align-items: center;gap: 6px;font-size: 12px;line-height: 16px;color: var(--ui-agc-muted)}.ui-agc__note-head b{font-weight: 600;color: var(--ui-agc-ink)}.ui-agc__note-head > span:last-child{margin-left: auto}.ui-agc__note-text{margin: 0;font-size: 13px;line-height: 19px;color: var(--ui-agc-text)}.ui-agc__pin-actions{display: flex;gap: 6px;margin-top: 6px}.ui-agc__reply{flex: 1;min-width: 0;height: 30px;padding: 0 10px;border: 0;border-radius: 9px;background: var(--ui-agc-flag-soft);box-shadow: inset 0 0 0 1px var(--ui-agc-flag-soft);font: inherit;font-size: 13px;color: var(--ui-agc-flag-ink);outline: none}.ui-agc__reply::placeholder{color: color-mix(in srgb, var(--ui-agc-flag-ink) 45%, transparent)}.ui-agc__reply:focus-visible{box-shadow: 0 0 0 1px var(--ui-agc-ring), 0 0 0 3px color-mix(in srgb, var(--ui-agc-ring) 40%, transparent)}.ui-agc__resolve{display: grid;flex: none;place-items: center;width: 30px;height: 30px;border-radius: 9px;background: var(--ui-agc-flag-ink);color: var(--ui-agc-flag);transition: opacity 160ms ease}.ui-agc__resolve:hover{opacity: 0.86}.ui-agc__cursors{position: absolute;inset: 0;z-index: 3;pointer-events: none}.ui-agc__cursor-in{transition: opacity 260ms ease}.ui-agc__cursor{position: absolute;top: 0;left: 0;transition: transform var(--ui-agc-glide) var(--ui-agc-ease), opacity 260ms ease;will-change: transform}.ui-agc__cursor[data-typing]{transition: transform 110ms linear, opacity 260ms ease}.ui-agc__cursor[data-drag]{transition: opacity 260ms ease}.ui-agc__cursor[data-arrive]{transition: none;opacity: 0}.ui-agc__cursor:not([data-arrive]):not([data-gone]){animation: ui-agc-pop 300ms var(--ui-agc-ease) both}.ui-agc__cursor[data-gone]{opacity: 0}.ui-agc__cursor[data-dim]{opacity: 0.22}.ui-agc__cursor[data-gone][data-dim]{opacity: 0}.ui-agc__caret{position: absolute;top: 0;left: -1px;width: 2px;height: var(--ui-agc-h, 18px);border-radius: 1px;background: var(--ui-agc-c);animation: ui-agc-blink 1100ms steps(1, end) infinite}.ui-agc__cursor[data-typing] .ui-agc__caret{animation: none}.ui-agc__cursor[data-free] .ui-agc__caret{display: none}.ui-agc__arrow{position: absolute;z-index: 1;top: calc(var(--ui-agc-h, 18px) - 6px);left: 0;width: 19px;height: 23px;overflow: visible;filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.22))}.ui-agc__cursor[data-free] .ui-agc__arrow{top: -0.6px;left: -2.3px}.ui-agc__arrow{transform-origin: 2px 1px;transition: transform 140ms ease}.ui-agc__cursor[data-press] .ui-agc__arrow{transform: scale(0.82)}.ui-agc__arrow path{fill: var(--ui-agc-c);stroke: #ffffff;stroke-width: 1.4;paint-order: stroke}.ui-agc__flag{position: absolute;top: calc(var(--ui-agc-h, 18px) + 15px);left: calc(16px + var(--ui-agc-shift, 0px));display: grid;width: max-content;padding: 6px 10px 6px;border-bottom: 1px solid transparent;border-radius: 10px;background: linear-gradient(var(--ui-agc-flag), var(--ui-agc-flag)) padding-box, var(--ui-agc-edge) border-box;box-shadow: 0 8px 18px -8px rgba(255, 79, 163, 0.5), 6px 8px 18px -8px rgba(59, 139, 255, 0.5), 0 2px 6px -2px rgba(0, 0, 0, 0.3);font-size: 12px;font-weight: 600;line-height: 16px;color: var(--ui-agc-flag-ink);white-space: nowrap}.ui-agc__cursor[data-in-note] .ui-agc__flag{opacity: 0}.ui-agc__cursor[data-free] .ui-agc__flag{top: 21px;left: calc(14px + var(--ui-agc-shift, 0px))}.ui-agc__flag-row{display: flex;align-items: center;gap: 12px}.ui-agc__flag-tags{display: flex;gap: 4px;margin-left: auto}.ui-agc__flag-tag{padding: 0 5px;border-radius: 5px;background: var(--ui-agc-flag-soft);font-size: 10.5px;font-weight: 600;line-height: 16px;font-variant-numeric: tabular-nums}.ui-agc__flag-doing{display: block;max-height: 0;overflow: hidden;opacity: 0;transition: max-height 320ms var(--ui-agc-ease), opacity 200ms ease, margin-top 320ms var(--ui-agc-ease)}.ui-agc__flag-doing > span{display: block;width: max-content;font-size: 11.5px;font-weight: 500;white-space: nowrap}.ui-agc__flag-doing[data-on]{max-height: 18px;margin-top: 1px;opacity: 0.9}.ui-agc__cursor[data-dim] .ui-agc__flag-doing{max-height: 0;opacity: 0}.ui-agc__pop{position: absolute;z-index: 5;display: grid;gap: 6px;width: 260px;padding: 10px;border-radius: 14px;background: var(--ui-agc-card);box-shadow: 0 0 0 1px var(--ui-agc-line), 0 16px 32px -12px rgba(0, 0, 0, 0.22);animation: ui-agc-rise 180ms var(--ui-agc-ease) both}.ui-agc__pop-head{display: flex;align-items: center;gap: 6px;font-size: 12.5px;line-height: 18px;color: var(--ui-agc-muted)}.ui-agc__pop-head b{font-weight: 600;color: var(--ui-agc-ink)}.ui-agc__pop-mark{display: grid;flex: none;place-items: center;width: 14px;height: 14px}.ui-agc__pop-mark svg{width: 100%;height: 100%}.ui-agc__pop-note{margin: 0;font-size: 12.5px;line-height: 18px;color: var(--ui-agc-text)}.ui-agc__pop-actions{display: flex;justify-content: flex-end;gap: 6px;margin-top: 2px}.ui-agc__btn{display: inline-flex;align-items: center;height: 30px;padding: 0 12px;border-radius: 9px;background: var(--ui-agc-card);box-shadow: 0 0 0 1px var(--ui-agc-line), 0 1px 2px rgba(0, 0, 0, 0.04);font-size: 13px;font-weight: 500;color: var(--ui-agc-ink);transition: background-color 160ms ease, opacity 160ms ease}.ui-agc__btn:hover{background: var(--ui-agc-chip)}.ui-agc__btn--primary{background: var(--ui-agc-ink);box-shadow: none;color: var(--ui-agc-card)}.ui-agc__btn--primary:hover{background: var(--ui-agc-ink);opacity: 0.86}.ui-agc__live{position: absolute;width: 1px;height: 1px;overflow: hidden;clip: rect(0 0 0 0);white-space: nowrap}@keyframes ui-agc-blink{0%, 55%{opacity: 1}56%, 100%{opacity: 0}}@keyframes ui-agc-pop{from{opacity: 0;scale: 0.85}}@keyframes ui-agc-fade{from{opacity: 0}}@keyframes ui-agc-in{from{background-color: transparent}}@keyframes ui-agc-rise{from{opacity: 0;transform: translateY(-4px) scale(0.98)}}@keyframes ui-agc-spin{to{transform: rotate(360deg)}}@keyframes ui-agc-shimmer{from{background-position: 100% 0}to{background-position: 0 0}}@media (max-width: 520px){.ui-agc__text{padding: 26px 22px 36px;font-size: 14px;line-height: 23px}.ui-agc__block--title{font-size: 20px;line-height: 26px}.ui-agc__sum{display: none}}@container agc (max-width: 480px){.ui-agc__bar{gap: 6px;padding: 0 8px 0 12px}.ui-agc__title{display: none}.ui-agc__doc{margin-right: auto}.ui-agc__face{width: 26px;height: 26px;margin-left: 2px}.ui-agc__all{padding: 0 9px;font-size: 12px}.ui-agc__text{padding: 24px 20px 32px}.ui-agc__flag{padding: 4px 8px 4px;border-radius: 8px;font-size: 11px;line-height: 14px}.ui-agc__flag-tag{padding: 0 4px;font-size: 10px;line-height: 14px}.ui-agc__flag-doing > span{font-size: 10.5px}.ui-agc__flag-row{gap: 8px}.ui-agc__table{font-size: 11.5px;line-height: 16px}.ui-agc__table :is(th, td){height: auto;padding: 8px 5px;white-space: normal;text-overflow: clip}.ui-agc__table :is(th, td):first-child{padding-left: 9px}.ui-agc__table th{font-size: 11px}.ui-agc__table th:first-child{width: 30%}.ui-agc__pill{display: inline-block;height: auto;min-height: 18px;padding: 1px 6px;font-size: 10.5px;line-height: 16px;white-space: normal}}@container agc (max-width: 340px){.ui-agc__text{padding-right: 12px;padding-left: 12px}.ui-agc__table{font-size: 11px}.ui-agc__table th:first-child{width: 28%}}@media (pointer: coarse){.ui-agc__face{width: 32px;height: 32px}.ui-agc__btn{height: 36px;padding: 0 14px}}@media (prefers-reduced-motion: reduce){.ui-agc *, .ui-agc *::before, .ui-agc *::after{animation: none !important;transition: none !important}}:where(.dark, [data-theme="dark"]) .ui-agc{--ui-agc-card: #1f1f22;--ui-agc-tray: #161618;--ui-agc-ink: #ededed;--ui-agc-text: #c4c4c8;--ui-agc-muted: #7c7c82;--ui-agc-line: #2e2e33;--ui-agc-grid: #29292d;--ui-agc-stroke: #2c2c31;--ui-agc-chip: #2a2a2e;--ui-agc-shimmer: #29292d;--ui-agc-shine: #36363b;--ui-agc-code: rgba(255, 255, 255, 0.04);--ui-agc-ring: rgba(237, 237, 237, 0.3);--ui-agc-agent: #e4e4e7;--ui-agc-flag: #f4f4f5;--ui-agc-flag-ink: #141416;--ui-agc-flag-soft: rgba(0, 0, 0, 0.08)}:where(.dark, [data-theme="dark"]) .ui-agc__arrow path{stroke: #1f1f22}:where(.dark, [data-theme="dark"]) .ui-agc__handle{background: #1f1f22}.ui-agc__text, .ui-agc__code, .ui-agc__note-text, .ui-agc__pop-note{overflow-wrap: anywhere}.ui-agc__block, .ui-agc__caption, .ui-agc__note-text, .ui-agc__pop-note{text-align: start}.ui-agc__block, .ui-agc__note-text{white-space: pre-line}.ui-agc__tabs{flex-wrap: wrap}.ui-agc__tab{max-width: 100%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-agc__face-more{flex: none;width: auto;min-width: 24px;padding: 0 5px;border-radius: 999px;font-size: 10.5px;font-weight: 600;line-height: 1;color: var(--ui-agc-muted);font-variant-numeric: tabular-nums;cursor: default}.ui-agc__face-tip{grid-template-columns: minmax(0, 1fr);max-width: 240px}.ui-agc__face-tip > *{overflow: hidden;text-overflow: ellipsis}.ui-agc__pin-body{grid-template-columns: minmax(0, 1fr)}.ui-agc__note-head b, .ui-agc__pop-head b{min-width: 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis}.ui-agc__note-head > span, .ui-agc__pop-head > span{flex: none}.ui-agc__flag{grid-template-columns: minmax(0, 1fr);max-width: min(260px, calc(100cqw - 16px))}.ui-agc__flag-row{min-width: 0}.ui-agc__flag-name{min-width: 0;overflow: hidden;text-overflow: ellipsis}.ui-agc__flag-tags{flex: none}.ui-agc__flag-doing > span{max-width: 100%;overflow: hidden;text-overflow: ellipsis}`,
  g = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 1200 1200`,
      "aria-hidden": `true`,
      children: (0, r.jsx)(`path`, {
        fill: `#D97757`,
        d: `M 233.959793 800.214905 L 468.644287 668.536987 L 472.590637 657.100647 L 468.644287 650.738403 L 457.208069 650.738403 L 417.986633 648.322144 L 283.892639 644.69812 L 167.597321 639.865845 L 54.926208 633.825623 L 26.577238 627.785339 L 3.3e-05 592.751709 L 2.73832 575.27533 L 26.577238 559.248352 L 60.724873 562.228149 L 136.187973 567.382629 L 249.422867 575.194763 L 331.570496 580.026978 L 453.261841 592.671082 L 472.590637 592.671082 L 475.328857 584.859009 L 468.724915 580.026978 L 463.570557 575.194763 L 346.389313 495.785217 L 219.543671 411.865906 L 153.100723 363.543762 L 117.181267 339.060425 L 99.060455 316.107361 L 91.248367 266.01355 L 123.865784 230.093994 L 167.677887 233.073853 L 178.872513 236.053772 L 223.248367 270.201477 L 318.040283 343.570496 L 441.825592 434.738342 L 459.946411 449.798706 L 467.194672 444.64447 L 468.080597 441.020203 L 459.946411 427.409485 L 392.617493 305.718323 L 320.778564 181.932983 L 288.80542 130.630859 L 280.348999 99.865845 C 277.369171 87.221436 275.194641 76.590698 275.194641 63.624268 L 312.322174 13.20813 L 332.8591 6.604126 L 382.389313 13.20813 L 403.248352 31.328979 L 434.013519 101.71814 L 483.865753 212.537048 L 561.181274 363.221497 L 583.812134 407.919434 L 595.892639 449.315491 L 600.40271 461.959839 L 608.214783 461.959839 L 608.214783 454.711609 L 614.577271 369.825623 L 626.335632 265.61084 L 637.771851 131.516846 L 641.718201 93.745117 L 660.402832 48.483276 L 697.530334 24.000122 L 726.52356 37.852417 L 750.362549 72 L 747.060486 94.067139 L 732.886047 186.201416 L 705.100708 330.52356 L 686.979919 427.167847 L 697.530334 427.167847 L 709.61084 415.087341 L 758.496704 350.174561 L 840.644348 247.490051 L 876.885925 206.738342 L 919.167847 161.71814 L 946.308838 140.29541 L 997.61084 140.29541 L 1035.38269 196.429626 L 1018.469849 254.416199 L 965.637634 321.422852 L 921.825562 378.201538 L 859.006714 462.765259 L 819.785278 530.41626 L 823.409424 535.812073 L 832.75177 534.92627 L 974.657776 504.724915 L 1051.328979 490.872559 L 1142.818848 475.167786 L 1184.214844 494.496582 L 1188.724854 514.147644 L 1172.456421 554.335693 L 1074.604126 578.496765 L 959.838989 601.449829 L 788.939636 641.879272 L 786.845764 643.409485 L 789.261841 646.389343 L 866.255127 653.637634 L 899.194702 655.409424 L 979.812134 655.409424 L 1129.932861 666.604187 L 1169.154419 692.537109 L 1192.671265 724.268677 L 1188.724854 748.429688 L 1128.322144 779.194641 L 1046.818848 759.865845 L 856.590759 714.604126 L 791.355774 698.335754 L 782.335693 698.335754 L 782.335693 703.731567 L 836.69812 756.885986 L 936.322205 846.845581 L 1061.073975 962.81897 L 1067.436279 991.490112 L 1051.409424 1014.120911 L 1034.496704 1011.704712 L 924.885986 929.234924 L 882.604126 892.107544 L 786.845764 811.48999 L 780.483276 811.48999 L 780.483276 819.946289 L 802.550415 852.241699 L 919.087341 1027.409424 L 925.127625 1081.127686 L 916.671204 1098.604126 L 886.469849 1109.154419 L 853.288696 1103.114136 L 785.073914 1007.355835 L 714.684631 899.516785 L 657.906067 802.872498 L 650.979858 806.81897 L 617.476624 1167.704834 L 601.771851 1186.147705 L 565.530212 1200 L 535.328857 1177.046997 L 519.302124 1139.919556 L 535.328857 1066.550537 L 554.657776 970.792053 L 570.362488 894.68457 L 584.536926 800.134277 L 592.993347 768.724976 L 592.429626 766.630859 L 585.503479 767.516968 L 514.22821 865.369263 L 405.825531 1011.865906 L 320.053711 1103.677979 L 299.516815 1111.812256 L 263.919525 1093.369263 L 267.221497 1060.429688 L 287.114136 1031.114136 L 405.825531 880.107361 L 477.422913 786.52356 L 523.651062 732.483276 L 523.328918 724.671265 L 520.590698 724.671265 L 205.288605 929.395935 L 149.154434 936.644409 L 124.993355 914.01355 L 127.973183 876.885986 L 139.409409 864.80542 L 234.201385 799.570435 L 233.879227 799.8927 Z`,
      }),
    }),
  _ = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `currentColor`,
      "aria-hidden": `true`,
      style: { color: `var(--ui-agc-ink, #000)` },
      children: (0, r.jsx)(`path`, {
        d: `M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z`,
      }),
    }),
  v = () => {
    let e = `gm` + (0, n.useId)().replace(/[^a-zA-Z0-9_-]/g, ``);
    return (0, r.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      "aria-hidden": `true`,
      children: [
        (0, r.jsx)(`defs`, {
          children: (0, r.jsxs)(`linearGradient`, {
            id: e,
            x1: `0`,
            y1: `24`,
            x2: `24`,
            y2: `0`,
            gradientUnits: `userSpaceOnUse`,
            children: [
              (0, r.jsx)(`stop`, { stopColor: `#1C7DFF` }),
              (0, r.jsx)(`stop`, { offset: `0.52`, stopColor: `#1C69FF` }),
              (0, r.jsx)(`stop`, { offset: `1`, stopColor: `#B04DFF` }),
            ],
          }),
        }),
        (0, r.jsx)(`path`, {
          fill: `url(#${e})`,
          d: `M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81`,
        }),
      ],
    });
  },
  y = () =>
    (0, r.jsx)(`svg`, {
      viewBox: `-2 -2 29 29`,
      "aria-hidden": `true`,
      children: [
        [[0, 4], `#FFD800`],
        [[0, 1, 3, 4], `#FFAF00`],
        [[0, 1, 2, 3, 4], `#FF8205`],
        [[0, 2, 4], `#FA500F`],
        [[0, 4], `#E10500`],
      ].flatMap(([e, t], n) =>
        e.map((e) =>
          (0, r.jsx)(`rect`, { x: e * 5, y: n * 5, width: `5`, height: `5`, fill: t }, `${e}-${n}`),
        ),
      ),
    }),
  b = [
    { id: `research`, name: `Researcher`, avatar: (0, r.jsx)(g, {}) },
    { id: `designer`, name: `Designer`, avatar: (0, r.jsx)(v, {}) },
    { id: `coder`, name: `Coder`, avatar: (0, r.jsx)(y, {}) },
    { id: `writer`, name: `Writer`, avatar: (0, r.jsx)(_, {}) },
  ],
  ee = [
    { id: `title`, kind: `title`, text: `Pulse 2.0 – launch brief` },
    {
      id: `why`,
      text: `Teams lose about 40% of their week to status updates. Pulse turns that work into a short daily brief, so nobody has to write one.`,
    },
    { id: `hero`, kind: `image`, loading: !0, width: 0.5, float: `left`, alt: `Hero image, still rendering` },
    {
      id: `beside`,
      text: `The hero is the brief itself: one calm screen a team lead reads on Monday morning. Short, current and written from the work, so the week starts without a status meeting.`,
    },
    { id: `h-roll`, kind: `heading`, text: `Rollout` },
    {
      id: `code`,
      kind: `code`,
      text: `const rollout = {
  waitlist: "Nov 3",
  everyone: "second week of November",
};`,
    },
    { id: `ship`, text: `Launch week: one short post, a demo video and an email to the waitlist.` },
    { id: `h-what`, kind: `heading`, text: `What ships` },
    { id: `i1`, kind: `item`, text: `Daily briefs for every project, written from the work itself` },
    { id: `i2`, kind: `item`, text: `Nudges when a task has been quiet for too long` },
  ],
  x = {
    research: 0.011,
    designer: 0.016,
    coder: 0.008,
    writer: 0.006,
    planner: 0.012,
    analyst: 0.009,
    ops: 0.007,
    reviewer: 0.005,
  },
  S = {
    blocks: ee,
    suggestions: [],
    comments: [
      {
        id: `n0`,
        agent: `coder`,
        block: `code`,
        x: 0.025,
        y: 12,
        text: `Should waitlist and everyone share one date format? I'd use "Nov 3" everywhere.`,
      },
    ],
    cursors: {},
  },
  C = (e, t) => ee.find((t) => t.id === e).text.indexOf(t),
  w = (e, t) => (n) => ({ ...n, cursors: { ...n.cursors, [e]: t } }),
  T = (e, t) => (n) => ({ ...n, blocks: n.blocks.map((n) => (n.id === e ? { ...n, ...t } : n)) }),
  E = (e, t, n, r, i, a) => [
    [
      e,
      (e) => ({
        ...e,
        suggestions: [...e.suggestions, { ...n, agent: t, insert: `` }],
        cursors: { ...e.cursors, [t]: { block: n.block, at: 0, in: n.id, doing: i, typing: !0 } },
      }),
    ],
    ...[...r].map((o, s) => [
      e + 260 + s * a,
      (e) =>
        e.suggestions.some((e) => e.id === n.id)
          ? {
              ...e,
              suggestions: e.suggestions.map((e) =>
                e.id === n.id ? { ...e, insert: r.slice(0, s + 1) } : e,
              ),
              cursors: { ...e.cursors, [t]: { block: n.block, at: s + 1, in: n.id, doing: i, typing: !0 } },
            }
          : e,
    ]),
  ],
  te = (e, t, n, r, i, a, o) => [
    [
      e,
      (e) => ({
        ...e,
        comments: [...e.comments, { id: n, agent: t, ...r, text: ``, open: !0 }],
        cursors: { ...e.cursors, [t]: { block: n, at: 0, doing: a, typing: !0 } },
      }),
    ],
    ...[...i].map((r, s) => [
      e + 360 + s * o,
      (e) => ({
        ...e,
        comments: e.comments.map((e) => (e.id === n ? { ...e, text: i.slice(0, s + 1) } : e)),
        cursors: { ...e.cursors, [t]: { block: n, at: s + 1, doing: a, typing: !0 } },
      }),
    ]),
  ],
  D = `second week of November`,
  O = `Q3 survey of 1,240 teams: 38%, not 40%.`,
  k = [
    [400, w(`research`, { block: `why`, at: C(`why`, `about 40%`), doing: `Checking the numbers` })],
    [650, w(`designer`, { block: `hero`, doing: `Waiting for the render` })],
    [900, w(`coder`, { block: `code`, at: C(`code`, D), doing: `Reading the config` })],
    [1150, w(`writer`, { block: `title`, at: C(`title`, `brief`), doing: `Reading the brief` })],
    [
      1600,
      w(`research`, { block: `why`, at: C(`why`, `about 40%`), select: 9, doing: `Checking the numbers` }),
    ],
    [2e3, w(`coder`, { block: `code`, at: C(`code`, D), select: 23, doing: `Fixing the date` })],
    [2700, w(`designer`, { block: `hero`, point: `corner`, doing: `Resizing the hero` })],
    [3200, w(`designer`, { block: `hero`, point: `corner`, select: 1, doing: `Resizing the hero` })],
    [3550, T(`hero`, { width: 0.36 })],
    [4300, w(`designer`, { block: `hero`, doing: `Looks right` })],
    ...E(
      2600,
      `research`,
      { id: `r1`, block: `why`, at: C(`why`, `about 40%`), remove: 9, note: `Q3 survey of 1,240 teams` },
      `38%`,
      `Fixing the number`,
      170,
    ),
    ...E(
      3300,
      `coder`,
      { id: `c1`, block: `code`, at: C(`code`, D), remove: 23, note: `Matches the launch calendar` },
      `Nov 10`,
      `Fixing the date`,
      120,
    ),
    [
      2400,
      w(`writer`, { block: `title`, at: C(`title`, `brief`), select: 5, doing: `Finding a sharper title` }),
    ],
    ...E(
      4200,
      `writer`,
      {
        id: `w1`,
        block: `title`,
        at: C(`title`, `brief`),
        remove: 5,
        note: `It's a plan with dates now, not a brief`,
      },
      `plan`,
      `Renaming`,
      120,
    ),
    ...te(5400, `research`, `n1`, { block: `why`, x: 0.025, y: 12 }, O, `Adding the source`, 36),
    [8064, (e) => ({ ...e, comments: e.comments.map((e) => (e.id === `n1` ? { ...e, open: !1 } : e)) })],
    [5600, w(`designer`, null)],
    [6300, w(`coder`, { block: `code`, at: C(`code`, `waitlist`), doing: `Checking the rest` })],
    [8300, w(`research`, { block: `why`, at: C(`why`, `daily brief`), doing: `Done` })],
    [8600, w(`coder`, null)],
    [9600, w(`research`, null)],
    [5150, w(`writer`, null)],
  ],
  ne = 7600,
  re = 12800,
  ie = 1600,
  A = [
    { id: `planner`, name: `Planner`, avatar: (0, r.jsx)(v, {}) },
    { id: `analyst`, name: `Analyst`, avatar: (0, r.jsx)(g, {}) },
    { id: `ops`, name: `Ops`, avatar: (0, r.jsx)(y, {}) },
    { id: `reviewer`, name: `Reviewer`, avatar: (0, r.jsx)(_, {}) },
  ],
  j = (e, t) =>
    t.map((t, n) =>
      typeof t == `string` ? { id: `t-${e}-${n}`, text: t } : { id: `t-${e}-${n}`, text: t[0], tone: t[1] },
    ),
  ae = [
    { id: `t-title`, kind: `title`, text: `Pulse 2.0 – launch tasks` },
    {
      id: `tasks`,
      kind: `table`,
      addRow: !0,
      rows: [
        j(0, [`Task`, `Owner`, `Due`, `Status`]),
        j(1, [`Write the launch post`, `Writer`, `Nov 3`, [`Doing`, `blue`]]),
        j(2, [`Record the demo video`, `Designer`, `Nov 5`, [`To do`, `gray`]]),
        j(3, [`Email the waitlist`, `Ops`, `Nov 12`, [`To do`, `gray`]]),
        j(4, [`Live Q&A`, `—`, `Nov 14`, [`Idea`, `amber`]]),
      ],
    },
  ],
  oe = (e, t) => (n) => ({
    ...n,
    blocks: n.blocks.map((n) =>
      n.id === `tasks`
        ? { ...n, rows: [...(n.rows ?? []), t.map((t, n) => ({ id: `t-${e}-${n}`, text: ``, tone: t }))] }
        : n,
    ),
  }),
  se = (e, t) => (n) => ({
    ...n,
    blocks: n.blocks.map((n) =>
      n.rows ? { ...n, rows: n.rows.map((n) => n.map((n) => (n.id === e ? { ...n, text: t } : n))) } : n,
    ),
  }),
  M = (e, t, n, r, i) => {
    let a = (e) => w(t, { block: `tasks:add`, at: 0, doing: `Adding a task`, press: e || void 0 }),
      o = [
        [e, a(!1)],
        [e + 650, a(!0)],
        [e + 800, (e) => oe(n, [void 0, void 0, void 0, `gray`])(a(!1)(e))],
      ],
      s = e + 1300;
    return (
      r.forEach((e, r) => {
        let a = `t-${n}-${r}`;
        (o.push([s, w(t, { block: a, at: 0, doing: `Adding a task`, typing: !0 })]),
          [...e].forEach((n, r) =>
            o.push([
              s + 120 + r * i,
              (n) => ({
                ...se(a, e.slice(0, r + 1))(n),
                cursors: { ...n.cursors, [t]: { block: a, at: r + 1, doing: `Adding a task`, typing: !0 } },
              }),
            ]),
          ),
          (s += 120 + e.length * i + 260));
      }),
      o.push([s, w(t, { block: `t-${n}-0`, at: 0, doing: `Done` })]),
      o
    );
  },
  N = { blocks: ae, suggestions: [], comments: [], cursors: {} },
  P = [
    [400, w(`planner`, { block: `t-3-2`, at: 0, doing: `Checking the dates` })],
    [650, w(`analyst`, { block: `t-4-1`, at: 0, doing: `Finding an owner` })],
    [900, w(`ops`, { block: `t-2-3`, at: 0, doing: `Updating the status` })],
    [1150, w(`reviewer`, { block: `t-1-0`, at: 6, doing: `Reading the tasks` })],
    [1600, w(`planner`, { block: `t-3-2`, at: 0, select: 6, doing: `Fixing the date` })],
    [1900, w(`analyst`, { block: `t-4-1`, at: 0, select: 1, doing: `Finding an owner` })],
    [2200, w(`ops`, { block: `t-2-3`, at: 0, select: 5, doing: `Updating the status` })],
    ...E(
      2500,
      `planner`,
      { id: `p1`, block: `t-3-2`, at: 0, remove: 6, note: `Matches the rollout config` },
      `Nov 10`,
      `Fixing the date`,
      120,
    ),
    ...E(
      3e3,
      `analyst`,
      { id: `a1`, block: `t-4-1`, at: 0, remove: 1, note: `Maya ran the last two` },
      `Maya`,
      `Assigning`,
      110,
    ),
    ...E(
      3500,
      `ops`,
      { id: `o1`, block: `t-2-3`, at: 0, remove: 5, note: `The shoot is booked for Tuesday` },
      `Doing`,
      `Updating the status`,
      110,
    ),
    ...te(
      3600,
      `reviewer`,
      `q1`,
      { block: `t-1-0`, at: 6 },
      `Draft is in – ready for review today.`,
      `Leaving a note`,
      38,
    ),
    [6304, (e) => ({ ...e, comments: e.comments.map((e) => (e.id === `q1` ? { ...e, open: !1 } : e)) })],
    ...M(4900, `analyst`, 5, [`Press kit`, `Designer`, `Nov 8`, `To do`], 55),
    [6300, w(`planner`, { block: `t-4-2`, at: 0, doing: `Checking the Q&A date` })],
    ...M(7200, `planner`, 6, [`Partner email`, `Ops`, `Nov 11`, `To do`], 50),
    [7e3, w(`ops`, null)],
    [6200, w(`reviewer`, { block: `t-2-0`, at: 7, doing: `Reading on` })],
    [9e3, w(`reviewer`, null)],
    [10200, w(`analyst`, null)],
    [12200, w(`planner`, null)],
  ],
  F = {
    doc: { agents: b, start: S, script: k, accept: `r1` },
    table: { agents: A, start: N, script: P, accept: `p1` },
  },
  I = [
    { id: `doc`, label: `Doc` },
    { id: `table`, label: `Table` },
  ];
function L() {
  let [e, t] = (0, n.useState)(`doc`),
    a = F[e],
    [o, s] = (0, n.useState)(S),
    [c, l] = (0, n.useState)(0),
    u = (0, n.useRef)(!1),
    [d, f] = (0, n.useState)({}),
    p = (0, n.useRef)(o.cursors);
  ((p.current = o.cursors),
    (0, n.useEffect)(() => {
      let e = window.setInterval(() => {
        f((e) => {
          let t = { ...e };
          for (let e of [...b, ...A]) {
            let n = p.current[e.id];
            if (!n) continue;
            let r = t[e.id] ?? { cost: 0.04 + Math.random() * 0.1 };
            t[e.id] = { cost: r.cost + x[e.id] * (n.typing ? 1.8 : 1) };
          }
          return t;
        });
      }, 500);
      return () => window.clearInterval(e);
    }, []),
    (0, n.useEffect)(() => {
      let { script: t, accept: n, start: r } = F[e],
        a = t.map(([e, t]) => window.setTimeout(() => s((e) => t(e)), e));
      return (
        a.push(
          window.setTimeout(() => {
            u.current ||
              s((e) =>
                e.suggestions.some((e) => e.id === n) ? { ...e, ...i(e.blocks, e.suggestions, n) } : e,
              );
          }, ne),
          window.setTimeout(() => {
            u.current ||
              (s((e) => ({ ...e, cursors: {} })),
              a.push(
                window.setTimeout(() => {
                  (s(r), f({}), l((e) => e + 1));
                }, ie),
              ));
          }, re),
        ),
        () => a.forEach((e) => window.clearTimeout(e))
      );
    }, [c, e]));
  let h = (n) => {
      n !== e && n in F && ((u.current = !1), s(F[n].start), f({}), t(n));
    },
    g = (e, t) => {
      ((u.current = !0),
        s((n) =>
          t
            ? { ...n, ...i(n.blocks, n.suggestions, e.id) }
            : { ...n, suggestions: n.suggestions.filter((t) => t.id !== e.id) },
        ));
    };
  return (0, r.jsx)(`div`, {
    className: `agc-demo`,
    children: (0, r.jsx)(m, {
      title: `Product / Launches`,
      tabs: I,
      tab: e,
      onTabChange: h,
      agents: a.agents.map((e) => ({ ...e, ...d[e.id] })),
      blocks: o.blocks,
      suggestions: o.suggestions,
      comments: o.comments,
      cursors: o.cursors,
      height: 620,
      onResolveComment: (e) => {
        ((u.current = !0), s((t) => ({ ...t, comments: t.comments.filter((t) => t.id !== e.id) })));
      },
      onReply: () => {
        u.current = !0;
      },
      onAccept: (e) => g(e, !0),
      onReject: (e) => g(e, !1),
      onAcceptAll: () => {
        ((u.current = !0),
          s((e) => e.suggestions.reduce((e, t) => ({ ...e, ...i(e.blocks, e.suggestions, t.id) }), e)));
      },
    }),
  });
}
