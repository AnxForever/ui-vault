import { t as e } from "./react-BkAXpnfr.js";
import { t } from "./jsx-runtime-CTsRTJUX.js";
import { d as n, f as r, r as i } from "./index-CFGVEsd9.js";
import { t as a } from "./component-fbzjv3kM.js";
import {
  _ as o,
  a as s,
  d as c,
  f as l,
  h as u,
  i as d,
  m as f,
  o as p,
  p as m,
  s as h,
  t as g,
  w as _,
} from "./component-90nTR1WK.js";
import { t as v } from "./UserMultiple02Icon-CmkUO2wo.js";
var y = [
    [
      `path`,
      {
        d: `M12 14.5V17.5M13 14.5C13 15.0523 12.5523 15.5 12 15.5C11.4477 15.5 11 15.0523 11 14.5C11 13.9477 11.4477 13.5 12 13.5C12.5523 13.5 13 13.9477 13 14.5Z`,
        stroke: `currentColor`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
        strokeWidth: `1.5`,
        key: `0`,
      },
    ],
    [
      `path`,
      {
        d: `M16.5 9V6.5C16.5 4.01472 14.4853 2 12 2C9.51471 2 7.49999 4.01472 7.49999 6.5V9`,
        stroke: `currentColor`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
        strokeWidth: `1.5`,
        key: `1`,
      },
    ],
    [
      `path`,
      {
        d: `M4.2678 18.8447C4.49268 20.515 5.87612 21.8235 7.55965 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.8789 17.7547 20 16.6376 20 15.5C20 14.3624 19.8789 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55965 9.09909C5.87612 9.17649 4.49268 10.485 4.2678 12.1553C4.12104 13.2453 3.99999 14.3624 3.99999 15.5C3.99999 16.6376 4.12104 17.7547 4.2678 18.8447Z`,
        stroke: `currentColor`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
        strokeWidth: `1.5`,
        key: `2`,
      },
    ],
  ],
  b = e(),
  x = t(),
  S = [
    {
      name: `Q3 Campaign`,
      access: `Shared`,
      files: [
        { name: `Campaign-Brief`, type: `DOC`, edited: `2 hours ago` },
        { name: `Launch-Plan`, type: `PDF`, edited: `Yesterday` },
        { name: `Media-Budget`, type: `XLS`, edited: `Yesterday` },
        { name: `Ad-Copy`, type: `DOC`, edited: `3 days ago` },
        { name: `Results-Q2`, type: `XLS`, edited: `Last week` },
      ],
    },
    {
      name: `Brand assets`,
      access: `Shared`,
      files: [
        { name: `Brand-Guidelines`, type: `PDF`, edited: `4 days ago` },
        { name: `Tone-of-Voice`, type: `DOC`, edited: `Last week` },
        { name: `Logo-Usage`, type: `PDF`, edited: `2 weeks ago` },
      ],
    },
    {
      name: `Hiring`,
      access: `Private`,
      files: [
        { name: `Job-Description`, type: `DOC`, edited: `Today` },
        { name: `Candidates`, type: `XLS`, edited: `Yesterday` },
        { name: `Interview-Guide`, type: `PDF`, edited: `5 days ago` },
        { name: `Offer-Template`, type: `DOC`, edited: `Last month` },
      ],
    },
    {
      name: `Research`,
      access: `Private`,
      files: [
        { name: `Market-Study`, type: `PDF`, edited: `3 days ago` },
        { name: `Survey-Results`, type: `XLS`, edited: `Last week` },
      ],
    },
  ],
  C = [
    { name: `Design-Book`, type: `DOC`, owner: `Alex Morgan` },
    { name: `Brand-Guidelines`, type: `PDF`, owner: `Jonas Weber`, shared: !0 },
    { name: `Campaign-Budget`, type: `XLS`, owner: `Jonas Weber`, shared: !0 },
    { name: `Weekly-Report`, type: `XLS`, owner: `Alex Morgan` },
  ],
  w = [
    {
      id: `type`,
      label: `Type`,
      options: [
        { id: `DOC`, label: `Document` },
        { id: `PDF`, label: `PDF` },
        { id: `XLS`, label: `Spreadsheet` },
      ],
    },
  ],
  T = (e) => (t, n) => (e === `asc` ? 1 : -1) * t.name.localeCompare(n.name),
  E = new Intl.NumberFormat(),
  D = (e, t) => e.toLowerCase().includes(t.trim().toLowerCase());
function O({ folders: e = S, templates: t = C, ...n }) {
  let r = n.user?.name ?? `Alex Morgan`,
    [O, A] = (0, b.useState)(e),
    [j, M] = (0, b.useState)(`All`),
    [N, P] = (0, b.useState)(`asc`),
    [F, I] = (0, b.useState)(`grid`),
    [L, R] = (0, b.useState)(``),
    z = O.filter((e) => j === `All` || e.access === j)
      .filter((e) => D(e.name, L))
      .sort(T(N)),
    B = () => {
      let e = new Set(O.map((e) => e.name)),
        t = `Untitled folder`;
      for (let n = 2; e.has(t); n++) t = `Untitled folder ${n}`;
      (A((e) => [...e, { name: t, access: `Private`, files: [] }]), M(`All`), R(``));
    },
    [V, H] = (0, b.useState)(t),
    [U, W] = (0, b.useState)(`All`),
    [G, K] = (0, b.useState)({}),
    [q, J] = (0, b.useState)(`asc`),
    [Y, X] = (0, b.useState)(``),
    Z = G.type ?? [],
    Q = V.filter((e) => U === `All` || (U === `Mine` ? e.owner === r : e.owner !== r))
      .filter((e) => !Z.length || Z.includes(e.type))
      .filter((e) => D(e.name, Y))
      .sort(T(q)),
    $ = () => {
      let e = new Set(V.map((e) => e.name)),
        t = `Untitled`;
      for (let n = 2; e.has(t); n++) t = `Untitled-${n}`;
      (H((e) => [...e, { name: t, type: `DOC`, owner: r }]), W(`All`), K({}), X(``));
    };
  return (0, x.jsxs)(g, {
    active: `Folders`,
    ...n,
    children: [
      (0, x.jsx)(`style`, { href: `ui-screen-files`, precedence: `default`, children: k }),
      (0, x.jsxs)(`div`, {
        className: `ui-as-page`,
        children: [
          (0, x.jsx)(`h1`, { className: `ui-as-page-title`, children: `Files` }),
          (0, x.jsxs)(`p`, {
            className: `ui-as-page-sub`,
            children: [
              `See files you recently used in chats and manage files saved in folders. `,
              (0, x.jsx)(`a`, { href: `#learn-more`, children: `Learn more` }),
            ],
          }),
          (0, x.jsx)(l, {
            title: `Folders`,
            left: (0, x.jsx)(f, { items: [`All`, `Shared`, `Private`], value: j, onChange: M }),
            right: (0, x.jsxs)(x.Fragment, {
              children: [
                (0, x.jsx)(m, { value: N, onChange: P }),
                (0, x.jsx)(u, { value: F, onChange: I }),
                (0, x.jsx)(c, { placeholder: `Search folders...`, width: 172, value: L, onChange: R }),
                (0, x.jsx)(a, {
                  size: `sm`,
                  icon: (0, x.jsx)(h, { icon: _, size: 15 }),
                  onClick: B,
                  children: `Create folder`,
                }),
              ],
            }),
          }),
          z.length
            ? (0, x.jsx)(
                `div`,
                {
                  className: `ui-as-folders`,
                  "data-view": F,
                  children: z.map((e, t) =>
                    (0, x.jsxs)(
                      `button`,
                      {
                        type: `button`,
                        className: `ui-as-folder-card ui-as-rise`,
                        style: { "--i": t },
                        onClick: () => n.onNavigate?.(e.name),
                        children: [
                          (0, x.jsx)(`span`, {
                            className: `ui-as-folder-card__icon`,
                            children: (0, x.jsx)(i, { label: `` }),
                          }),
                          (0, x.jsxs)(`span`, {
                            className: `ui-as-folder-card__text`,
                            children: [
                              (0, x.jsx)(`b`, { title: e.name, children: e.name }),
                              (0, x.jsxs)(`span`, {
                                className: `ui-as-meta`,
                                children: [
                                  (0, x.jsx)(h, { icon: e.access === `Shared` ? v : y, size: 12 }),
                                  e.access,
                                  ` · `,
                                  E.format(e.files.length),
                                  ` `,
                                  e.files.length === 1 ? `file` : `files`,
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      `${e.name}-${t}`,
                    ),
                  ),
                },
                `${j}|${N}|${F}|${L}`,
              )
            : (0, x.jsx)(`div`, {
                className: `ui-as-rise ui-as-files-empty`,
                children: (0, x.jsx)(d, {
                  title: `No folders found`,
                  text: L
                    ? `Nothing matches “${L}”.`
                    : j === `All`
                      ? `There are no folders yet.`
                      : `There are no ${j.toLowerCase()} folders yet.`,
                }),
              }),
          (0, x.jsx)(l, {
            title: `File templates`,
            left: (0, x.jsx)(f, { items: [`All`, `Mine`, `Shared with me`], value: U, onChange: W }),
            right: (0, x.jsxs)(x.Fragment, {
              children: [
                (0, x.jsx)(p, { label: `Type`, groups: w, value: G, onChange: K }),
                (0, x.jsx)(m, { value: q, onChange: J }),
                (0, x.jsx)(c, { placeholder: `Search templates...`, width: 172, value: Y, onChange: X }),
                (0, x.jsx)(a, {
                  size: `sm`,
                  variant: `secondary`,
                  icon: (0, x.jsx)(h, { icon: _, size: 15 }),
                  onClick: $,
                  children: `Add template`,
                }),
              ],
            }),
          }),
          Q.length
            ? (0, x.jsx)(
                `div`,
                {
                  className: `ui-as-templates ui-as-file-grid`,
                  children: Q.map((e, t) =>
                    (0, x.jsx)(
                      `div`,
                      {
                        className: `ui-as-rise`,
                        style: { "--i": t },
                        title: e.name,
                        children: (0, x.jsx)(s, {
                          file: e,
                          meta: (0, x.jsxs)(x.Fragment, {
                            children: [
                              (0, x.jsxs)(`span`, {
                                className: `ui-as-files-meta`,
                                children: [
                                  o[e.type],
                                  ` · `,
                                  e.owner?.trim() && (0, x.jsxs)(x.Fragment, { children: [e.owner, ` · `] }),
                                ],
                              }),
                              (0, x.jsx)(h, { icon: e.shared ? v : y, size: 12 }),
                              ` `,
                              e.shared ? `Shared` : `Private`,
                            ],
                          }),
                        }),
                      },
                      `${e.name}-${t}`,
                    ),
                  ),
                },
                `${U}|${Z.join()}|${q}|${Y}`,
              )
            : (0, x.jsx)(`div`, {
                className: `ui-as-rise ui-as-files-empty`,
                children: (0, x.jsx)(d, {
                  title: `No templates found`,
                  text: V.length ? `Try another tab, type or search.` : `There are no templates yet.`,
                }),
              }),
        ],
      }),
    ],
  });
}
var k = `.ui-as-folders{display: grid;grid-template-columns: repeat(4, minmax(0, 1fr));gap: 11px;margin-top: 16px}.ui-as-folder-card{display: flex;align-items: center;gap: 12px;height: 59px;padding: 0 14px 0 12px;border-radius: 12px;background: var(--card);box-shadow: 0 0 0 1px var(--line), var(--shadow);text-decoration: none;transition: box-shadow 160ms ease}.ui-as-folder-card:hover{box-shadow: 0 0 0 1px var(--line-strong), 0 2px 8px rgba(0, 0, 0, 0.05)}.ui-as-folder-card__text{display: grid;gap: 2px;min-width: 0}.ui-as-folder-card__text b{overflow: hidden;font-size: 13.5px;line-height: 18px;font-weight: 500;color: var(--ink);white-space: nowrap;text-overflow: ellipsis}.ui-as-templates{display: flex;flex-wrap: wrap;gap: 12px;margin-top: 16px}.ui-as-templates .ui-as-template__name{overflow: clip;overflow-clip-margin: 2px;white-space: nowrap;text-overflow: ellipsis}.ui-as-templates .ui-as-template{grid-template-columns: minmax(0, 1fr)}.ui-as-templates .ui-as-meta{max-width: 100%;white-space: nowrap}.ui-as-files-meta{overflow: hidden;min-width: 0;white-space: nowrap;text-overflow: ellipsis}.ui-as-files-empty{margin-top: 16px}.ui-as-folders[data-view="list"]{grid-template-columns: minmax(0, 1fr);gap: 6px}.ui-as-folders[data-view="list"] .ui-as-folder-card{height: 52px}@container ui-as-main (max-width: 760px){.ui-as-folders{grid-template-columns: repeat(2, minmax(0, 1fr))}}@container ui-as-main (max-width: 760px){.ui-as-folder-card{text-align: left}.ui-as-folder-card__text{flex: 1}}@container ui-as-main (max-width: 480px){.ui-as-folders{grid-template-columns: minmax(0, 1fr);gap: 8px}}`;
function A() {
  return (0, x.jsx)(n, { children: (0, x.jsx)(O, { onNavigate: r }) });
}
