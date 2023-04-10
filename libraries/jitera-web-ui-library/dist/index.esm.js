import { jsx as aP, jsxs as aQ, Fragment as aR } from "react/jsx-runtime";
import a, {
  useMemo as aS,
  useState as aT,
  Children as aU,
  useRef as aV,
  useCallback as aW,
  useEffect as aX,
  Suspense as aY,
  createContext as k,
  useContext as aZ,
} from "react";
import a$ from "clsx";
import {
  Button as a_,
  Col as a0,
  Input as a1,
  Menu as l,
  Row as a2,
  List as a3,
  Radio as a4,
  Space as a5,
  Checkbox as a6,
  Upload as a7,
  DatePicker as a8,
  Drawer as m,
  Tabs as i,
  Pagination as a9,
  Modal as ba,
  ConfigProvider as bb,
} from "antd";
import * as bc from "react-icons/ai";
import * as bd from "react-icons/bs";
import * as be from "react-icons/fa";
import * as bf from "react-icons/fi";
import * as bg from "react-icons/md";
import b from "styled-components";
import bh, { Content as bi, Header as bj } from "antd/lib/layout/layout";
import bk from "antd/lib/menu/SubMenu";
import bl from "antd/lib/layout/Sider";
import bm, { components as bn } from "react-select";
import bo from "moment";
import bp from "react-slick";
import { LexicalComposer as bq } from "@lexical/react/LexicalComposer";
import { CodeNode as n, CodeHighlightNode as o } from "@lexical/code";
import { AutoLinkNode as p, LinkNode as q } from "@lexical/link";
import { ListNode as r, ListItemNode as s } from "@lexical/list";
import { MarkNode as t } from "@lexical/mark";
import { OverflowNode as u } from "@lexical/overflow";
import { HorizontalRuleNode as v } from "@lexical/react/LexicalHorizontalRuleNode";
import { HeadingNode as w, QuoteNode as x } from "@lexical/rich-text";
import { TableNode as y, TableCellNode as z, TableRowNode as A } from "@lexical/table";
import { useLexicalComposerContext as br } from "@lexical/react/LexicalComposerContext";
import { useLexicalNodeSelection as bs } from "@lexical/react/useLexicalNodeSelection";
import { mergeRegister as bt } from "@lexical/utils";
import {
  DecoratorNode as B,
  createEditor as bu,
  $isNodeSelection as bv,
  $getSelection as bw,
  $getNodeByKey as bx,
  CLICK_COMMAND as by,
  COMMAND_PRIORITY_LOW as bz,
  KEY_DELETE_COMMAND as bA,
  KEY_BACKSPACE_COMMAND as bB,
} from "lexical";
import { RichTextPlugin as bC } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable as bD } from "@lexical/react/LexicalContentEditable";
import {
  useReactTable as bE,
  getCoreRowModel as bF,
  flexRender as bG,
} from "@tanstack/react-table";
export { createColumnHelper } from "@tanstack/react-table";
import {
  sortableKeyboardCoordinates as bH,
  SortableContext as bI,
  horizontalListSortingStrategy as bJ,
  verticalListSortingStrategy as bK,
  useSortable as bL,
} from "@dnd-kit/sortable";
export { arrayMove } from "@dnd-kit/sortable";
import {
  useSensors as bM,
  useSensor as bN,
  PointerSensor as bO,
  MouseSensor as bP,
  TouchSensor as bQ,
  KeyboardSensor as bR,
  DndContext as bS,
  closestCenter as bT,
} from "@dnd-kit/core";
import {
  restrictToFirstScrollableAncestor as bU,
  restrictToHorizontalAxis as bV,
  restrictToParentElement as bW,
  restrictToVerticalAxis as bX,
} from "@dnd-kit/modifiers";
import { CSS as bY } from "@dnd-kit/utilities";
import { render as bZ } from "rc-util/lib/React/render";
import { ToastContainer as b$ } from "react-toastify";
export { toast as Toast, ToastContainer } from "react-toastify";
import b_ from "react-otp-input";
function b0({ className: b = "", responsiveVisibility: a = [] }) {
  return {
    classNames: a$(
      b,
      3 === a.length
        ? ""
        : null == a
        ? void 0
        : a.map((a) => ("string" == typeof a ? `show-${a}` : `show-${a.value}`)).join(" ")
    ),
  };
}
let C = a.forwardRef((a, b) => {
  let { children: c, responsiveVisibility: d, className: e, ...f } = a,
    { classNames: g } = b0({ className: e, responsiveVisibility: d });
  return aP("div", { ...f, className: g, ref: b, children: c });
});
function D(b, c = {}) {
  return a.createElement(
    b in bc ? bc[b] : b in bd ? bd[b] : b in bf ? bf[b] : b in be ? be[b] : b in bg ? bg[b] : "",
    c
  );
}
function E(a) {
  throw Error(`Should not reach with ${a}`);
}
function F(a) {
  switch (a) {
    case ah.Antd:
      return Object.entries(bc);
    case ah.Bootstrap:
      return Object.entries(bd);
    case ah.Feather:
      return Object.entries(bf);
    case ah.FontAwesome:
      return Object.entries(be);
    case ah.Material:
      return Object.entries(bg);
    case ah.All:
      return [
        ...Object.entries(bc),
        ...Object.entries(bd),
        ...Object.entries(bf),
        ...Object.entries(be),
        ...Object.entries(bg),
      ];
    default:
      return E(a);
  }
}
!(function (a) {
  (a.All = "all"),
    (a.Antd = "antd"),
    (a.Bootstrap = "bootstrap"),
    (a.Feather = "feather"),
    (a.FontAwesome = "font-awesome"),
    (a.Material = "material");
})(ah || (ah = {}));
let G = a.forwardRef((a, b) => {
    let { className: c, style: d, iconName: e, color: f, size: g, responsiveVisibility: h } = a,
      { classNames: i } = b0({ className: c, responsiveVisibility: h });
    return aP("span", {
      style: { display: "inline-block", verticalAlign: "middle", ...d },
      className: i,
      ref: b,
      children: D(e, { color: f, size: g }),
    });
  }),
  b1 = b.span`
  margin-left: ${(a) => a.hasIcon && "8px"};
`,
  H = a.forwardRef((b, c) => {
    let {
        buttonType: d = "primary",
        responsiveVisibility: e,
        iconProps: f,
        className: g,
        children: h,
        ...i
      } = b,
      a = aS(() => {
        if (f) return aP(G, { ...f });
      }, [f]),
      { classNames: j } = b0({ className: g, responsiveVisibility: e });
    return aP(a_, {
      type: d,
      icon: a,
      ...i,
      className: j,
      ref: c,
      children: aP(b1, { hasIcon: !!a, children: h }),
    });
  }),
  I = a.forwardRef((a, b) => {
    let { children: c, responsiveVisibility: d, className: e, ...f } = a,
      { classNames: g } = b0({ className: e, responsiveVisibility: d });
    return aP(a0, { ...f, className: g, ref: b, children: c });
  }),
  J = a.forwardRef((a, b) => {
    let { children: c, responsiveVisibility: d, className: e, ...f } = a,
      { classNames: g } = b0({ className: e, responsiveVisibility: d });
    return aP(bi, { ...f, className: g, prefixCls: "jitera-layout-content", ref: b, children: c });
  }),
  K = a.forwardRef((a, b) => {
    let { children: c, style: d, responsiveVisibility: e, className: f, ...g } = a,
      { classNames: h } = b0({ className: f, responsiveVisibility: e });
    return aP("footer", { ...g, className: h, style: d, ref: b, children: c });
  }),
  L = a.forwardRef((a, b) => {
    let { children: c, responsiveVisibility: d, className: e, ...f } = a,
      { classNames: g } = b0({ className: e, responsiveVisibility: d });
    return aP("div", { ...f, className: g, ref: b, children: c });
  }),
  M = L,
  N = a.forwardRef((a, b) => {
    let { children: c, responsiveVisibility: d, className: e, ...f } = a,
      { classNames: g } = b0({ className: e, responsiveVisibility: d });
    return aP(bj, { ...f, prefixCls: "jitera-layout-header", className: g, ref: b, children: c });
  }),
  O = a.forwardRef((a, b) => {
    let { source: c, alt: d = "", responsiveVisibility: e, className: f, ...g } = a,
      { classNames: h } = b0({ className: f, responsiveVisibility: e });
    return aP("img", { ref: b, src: c, className: h, ...g, alt: d });
  });
!(function (a) {
  (a.Link = "Link"),
    (a.Text = "Text"),
    (a.H1 = "H1"),
    (a.H2 = "H2"),
    (a.H3 = "H3"),
    (a.H4 = "H4"),
    (a.H5 = "H5"),
    (a.H6 = "H6"),
    (a.B = "B"),
    (a.I = "I"),
    (a.Em = "Em"),
    (a.U = "U"),
    (a.S = "S"),
    (a.Del = "Del"),
    (a.Pre = "Pre"),
    (a.Code = "Code"),
    (a.Blockquote = "Blockquote"),
    (a.Figcaption = "Figcaption"),
    (a.Cite = "Cite");
})(ai || (ai = {}));
let P = a.forwardRef(({ children: a, ...b }, c) => aP("div", { ...b, ref: c, children: a })),
  Q = a.forwardRef(({ children: a, ...b }, c) => aP("a", { ...b, ref: c, children: a })),
  R = a.forwardRef(({ children: a, ...b }, c) => aP("h1", { ...b, ref: c, children: a })),
  S = a.forwardRef(({ children: a, ...b }, c) => aP("h2", { ...b, ref: c, children: a })),
  T = a.forwardRef(({ children: a, ...b }, c) => aP("h3", { ...b, ref: c, children: a })),
  U = a.forwardRef(({ children: a, ...b }, c) => aP("h4", { ...b, ref: c, children: a })),
  V = a.forwardRef(({ children: a, ...b }, c) => aP("h5", { ...b, ref: c, children: a })),
  W = a.forwardRef(({ children: a, ...b }, c) => aP("h6", { ...b, ref: c, children: a })),
  X = a.forwardRef(({ children: a, ...b }, c) => aP("b", { ...b, ref: c, children: a })),
  Y = a.forwardRef(({ children: a, ...b }, c) => aP("i", { ...b, ref: c, children: a })),
  Z = a.forwardRef(({ children: a, ...b }, c) => aP("em", { ...b, ref: c, children: a })),
  $ = a.forwardRef(({ children: a, ...b }, c) => aP("u", { ...b, ref: c, children: a })),
  _ = a.forwardRef(({ children: a, ...b }, c) => aP("s", { ...b, ref: c, children: a })),
  aa = a.forwardRef(({ children: a, ...b }, c) => aP("del", { ...b, ref: c, children: a })),
  ab = a.forwardRef(({ children: a, ...b }, c) => aP("pre", { ...b, ref: c, children: a })),
  ac = a.forwardRef(({ children: a, ...b }, c) => aP("code", { ...b, ref: c, children: a })),
  ad = a.forwardRef(({ children: a, ...b }, c) => aP("blockquote", { ...b, ref: c, children: a })),
  ae = a.forwardRef(({ children: a, ...b }, c) => aP("figcaption", { ...b, ref: c, children: a })),
  af = a.forwardRef(({ children: a, ...b }, c) => aP("cite", { ...b, ref: c, children: a })),
  b2 = {
    [ai.Text]: P,
    [ai.Link]: Q,
    [ai.H1]: R,
    [ai.H2]: S,
    [ai.H3]: T,
    [ai.H4]: U,
    [ai.H5]: V,
    [ai.H6]: W,
    [ai.B]: X,
    [ai.I]: Y,
    [ai.Em]: Z,
    [ai.U]: $,
    [ai.S]: _,
    [ai.Del]: aa,
    [ai.Pre]: ab,
    [ai.Code]: ac,
    [ai.Blockquote]: ad,
    [ai.Figcaption]: ae,
    [ai.Cite]: af,
  },
  ag = a.forwardRef((a, b) => {
    let { textType: c = ai.Text, responsiveVisibility: d, className: e, ...f } = a,
      g = b2[c],
      { classNames: h } = b0({ className: e, responsiveVisibility: d });
    return aP(g, { ...f, className: h, ref: b });
  }),
  b3 = (a) => "object" == typeof a,
  b4 = (...a) => a.filter((a) => !b3(a)).join(" "),
  b5 = "mccb30e4f2_input";
var ah,
  ai,
  c,
  d,
  e,
  f,
  g,
  h,
  b6 = { input: "mccb30e4f2_input" };
let aj = a.forwardRef((c, d) => {
    let {
        style: e = {},
        inputStyle: f = {},
        errorMessage: a,
        isPasswordField: g,
        responsiveVisibility: h,
        isPreview: i,
        className: b,
        prefixIconProps: j,
        suffixIconProps: k,
        ...l
      } = c,
      m = aS(() => (g ? a1.Password : a1), [g]),
      n = aS(
        () => (b3(f) ? { style: f, className: b6.input } : { className: b4(b6.input, f) }),
        [f]
      ),
      o = aS(() => {
        if (j) return aP(G, { ...j });
      }, [j]),
      p = aS(() => {
        if (k) return aP(G, { ...k });
      }, [k]),
      { classNames: q } = b0({ className: b, responsiveVisibility: h });
    return aQ("div", {
      style: e,
      className: a$(b4(b6.container, b || ""), q),
      ref: d,
      children: [
        aP(m, { ...n, disabled: i, prefix: o, suffix: p, ...l }),
        !!a && aP(ag, { type: "danger", children: a }),
      ],
    });
  }),
  ak = a.forwardRef((a, b) => {
    let { children: c, responsiveVisibility: d, className: e, ...f } = a,
      { classNames: g } = b0({ className: e, responsiveVisibility: d });
    return aP(bh, { ...f, prefixCls: "jitera-layout", className: g, ref: b, children: c });
  }),
  b7 = b.div`
  .jitera-menu-item-disabled,
  .jitera-menu-submenu-disabled {
    ${(a) => (a.isPreview ? "color: unset !important; cursor: unset;" : "")}
  }
`,
  b8 = b.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,
  b9 = b.div`
  width: 100%;
`,
  ca = b.div`
  display: flex;
`,
  cb = b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1;
`,
  al = a.forwardRef((b, c) => {
    let { isPreview: a, className: d, responsiveVisibility: e, ...f } = b,
      { classNames: g } = b0({ className: d, responsiveVisibility: e });
    return aP(b7, {
      isPreview: a,
      className: g,
      ref: c,
      children: aP(l, { disabled: a, ...f, prefixCls: "jitera-menu" }),
    });
  });
!(function (a) {
  (a.Left = "left"), (a.Right = "right"), (a.Top = "top"), (a.Bottom = "bottom");
})(c || (c = {}));
let { Item: cc } = l,
  am = a.forwardRef(
    (
      {
        label: a,
        iconProps: b,
        iconPosition: c,
        spaceBetween: d,
        responsiveVisibility: e,
        className: f,
        ...g
      },
      h
    ) => {
      let { classNames: i } = b0({ className: f, responsiveVisibility: e });
      return aP(b8, {
        className: i,
        ref: h,
        children: aP(b9, {
          children: aP(cc, { ...g, children: b && c && d ? cd(b, c, d, a) : a }),
        }),
      });
    }
  );
function cd(a, e, b, d) {
  switch (e) {
    case c.Left:
      return aQ(ca, { style: { gap: b }, children: [aP(G, { ...a }), d] });
    case c.Right:
      return aQ(ca, { style: { gap: b }, children: [d, aP(G, { ...a })] });
    case c.Top:
      return aQ(cb, { style: { gap: b }, children: [aP(G, { ...a }), d] });
    case c.Bottom:
      return aQ(cb, { style: { gap: b }, children: [d, aP(G, { ...a })] });
    default:
      return E(e);
  }
}
let an = a.forwardRef((a, b) => aP("ul", { ref: b, children: aP(bk, { ...a }) })),
  ce = b.div`
  width: 100%;
  ${(a) => `min-height: ${a.minHeight};`}
  background-color: #fff;
  ${(a) => (a.isPreview ? "position: relative" : void 0)}
`,
  ao = a.forwardRef(({ ...b }, c) => {
    let { children: d, isPreview: a, responsiveVisibility: e, className: f, ...g } = b,
      h = a ? "100%" : "100vh",
      { classNames: i } = b0({ className: f, responsiveVisibility: e });
    return aP(ce, {
      className: a$(a ? "preview-page" : void 0, i),
      minHeight: h,
      isPreview: a,
      ...g,
      ref: c,
      children: d,
    });
  }),
  ap = a.forwardRef((a, b) => {
    let { children: c, responsiveVisibility: d, className: e, ...f } = a,
      { classNames: g } = b0({ className: e, responsiveVisibility: d });
    return aP(a2, { ...f, className: g, ref: b, children: c });
  }),
  aq = a.forwardRef((a, b) => {
    let { children: c, responsiveVisibility: d, className: e, ...f } = a,
      { classNames: g } = b0({ className: e, responsiveVisibility: d });
    return aP(bl, { ...f, className: g, prefixCls: "jitera-layout-sider", ref: b, children: c });
  }),
  cf = (b, a, c) =>
    b && a ? (c ? a.filter((a) => b.includes(a.value)) : a.find((a) => a.value === b)) : void 0,
  ar = a.forwardRef((d, e) => {
    let {
        isPreview: f,
        responsiveVisibility: g,
        className: h,
        styles: i,
        data: a,
        placeholderStyle: j,
        containerStyle: k,
        dropdownStyle: l,
        optionStyle: m,
        iconProps: n,
        defaultValue: o,
        value: p,
        isMulti: b = !1,
        onChange: v,
        ...c
      } = d,
      q = aS(() => {
        let a = i || {};
        return (
          j && (a.placeholder = (a) => ({ ...a, ...j })),
          k && (a.control = (a) => ({ ...a, ...k })),
          l && (a.menu = (a) => ({ ...a, ...l })),
          m && (a.option = (a) => ({ ...a, ...m })),
          a
        );
      }, [i, j, k, l, m]),
      r = aS(() => {
        if (n)
          return {
            DropdownIndicator: (a) => aP(bn.DropdownIndicator, { ...a, children: aP(G, { ...n }) }),
          };
      }, [n]),
      { classNames: s } = b0({ className: h, responsiveVisibility: g }),
      t = aS(() => cf(o, a, b), [o, a, b]),
      u = aS(() => cf(p, a, b), [p, a, b]);
    return aP(bm, {
      isMulti: b,
      className: s,
      components: r,
      menuIsOpen: !f && (null == c ? void 0 : c.menuIsOpen),
      styles: q,
      options: a,
      defaultValue: t,
      value: u,
      onChange(a) {
        v && (b ? v(null == a ? void 0 : a.map((a) => a.value)) : v(null == a ? void 0 : a.value));
      },
      ...c,
      ref: e,
    });
  }),
  cg = "mc6f30f899_inner";
var ch = { inner: "mc6f30f899_inner" };
let as = a.forwardRef((a, b) => {
  let { style: c, responsiveVisibility: d, className: e, ...f } = a,
    { classNames: g } = b0({ className: e, responsiveVisibility: d });
  return aP("div", {
    style: c,
    className: g,
    ref: b,
    children: aP(a3, { className: ch.inner, ...f }),
  });
});
function ci(a) {
  return ("string" == typeof a && ["wrap", "wrap-reverse"].includes(a)) || !0 === a;
}
let cj = b.div`
  .jitera-radio-inner {
    border-color: ${(a) => a.inactiveColor || a.theme.primaryColor};
  }
  .jitera-radio-wrapper:hover .jitera-radio,
  .jitera-radio:hover .jitera-radio-inner,
  .jitera-radio-input:focus + .jitera-radio-inner {
    border-color: ${(a) => a.activeColor || a.theme.primaryColor};
  }
  .jitera-radio-checked::after {
    border-color: ${(a) => a.activeColor || a.theme.primaryColor};
  }
  .jitera-radio-checked .jitera-radio-inner {
    border-color: ${(a) => a.activeColor || a.theme.primaryColor};
  }
  .jitera-radio-inner::after {
    background-color: ${(a) => a.activeColor || a.theme.primaryColor};
  }
  .jitera-radio-wrapper span:last-child {
    ${(a) => a.labelStyle}
  }
`,
  at = a.forwardRef((b, c) => {
    let {
        data: a,
        spaceProps: d,
        isPreview: e,
        responsiveVisibility: f,
        className: g,
        activeColor: h,
        inactiveColor: i,
        labelStyle: j,
        direction: k,
        containerStyle: l = {},
        wrap: m = "wrap",
        ...n
      } = b,
      o = aS(() => ({ ...d, wrap: ci(m) }), [m, d]),
      p = aS(() => (b3(l) ? { style: l } : { className: b4(l) }), [l]),
      { classNames: q } = b0({ className: g, responsiveVisibility: f });
    return aP(cj, {
      className: q,
      activeColor: h,
      inactiveColor: i,
      labelStyle: j,
      ...p,
      children: aP(a4.Group, {
        disabled: e,
        ...n,
        ref: c,
        children: aP(a5, {
          direction: k,
          ...o,
          children:
            null == a
              ? void 0
              : a.map((a) => aP(a4, { value: a.value, ...a, children: a.label }, a.value)),
        }),
      }),
    });
  }),
  ck = "mc68e5c85d_textarea";
var cl = { textarea: "mc68e5c85d_textarea" };
let au = a.forwardRef((c, d) => {
    let {
        style: e = {},
        inputStyle: f = {},
        errorMessage: a,
        responsiveVisibility: g,
        isPreview: h,
        className: b,
        ...i
      } = c,
      j = aS(
        () => (b3(f) ? { style: f, className: cl.textarea } : { className: b4(cl.textarea, f) }),
        [f]
      ),
      { classNames: k } = b0({ className: b, responsiveVisibility: g });
    return aQ("div", {
      style: e,
      className: a$(b4(cl.container, b || ""), k),
      ref: d,
      children: [
        aP(a1.TextArea, { ...j, disabled: h, ...i }),
        !!a && aP(ag, { type: "danger", children: a }),
      ],
    });
  }),
  cm = b.div`
  && {
    .jitera-checkbox-inner {
      border-color: ${(a) => a.inactiveColor || a.theme.primaryColor};
    }
    .jitera-checkbox-wrapper:hover .jitera-checkbox,
    .jitera-checkbox:hover .jitera-checkbox-inner,
    .jitera-checkbox-input:focus + .jitera-checkbox-inner {
      border-color: ${(a) => a.activeColor || a.theme.primaryColor};
    }
    .jitera-checkbox-checked::after {
      border-color: ${(a) => a.activeColor || a.theme.primaryColor};
    }
    .jitera-checkbox-checked .jitera-checkbox-inner {
      border-color: ${(a) => a.activeColor || a.theme.primaryColor};
      background-color: ${(a) => a.activeColor || a.theme.primaryColor};
    }
    .jitera-checkbox-inner::after {
      background-color: ${(a) => a.activeColor || a.theme.primaryColor};
      border-color: ${(a) => a.checkColor || "#fff"};
    }
    .jitera-checkbox-wrapper span:last-child {
      ${(a) => a.labelStyle}
    }
  }
`,
  av = a.forwardRef((b, c) => {
    let {
        data: a,
        wrap: d = "wrap",
        spaceProps: e,
        isPreview: f,
        responsiveVisibility: g,
        containerStyle: h = {},
        activeColor: i,
        inactiveColor: j,
        checkColor: k,
        labelStyle: l,
        direction: m,
        className: n,
        ...o
      } = b,
      p = aS(() => ({ ...e, wrap: ci(d) }), [d, e]),
      q = aS(() => (b3(h) ? { style: h } : { className: b4(h) }), [h]),
      { classNames: r } = b0({ className: n, responsiveVisibility: g });
    return aP(cm, {
      activeColor: i,
      inactiveColor: j,
      checkColor: k,
      labelStyle: l,
      ...q,
      className: r,
      children: aP(a6.Group, {
        disabled: f,
        ...o,
        ref: c,
        children: aP(a5, {
          direction: m,
          ...p,
          children: null == a ? void 0 : a.map((a) => aP(a6, { ...a, children: a.label })),
        }),
      }),
    });
  }),
  aw = a.forwardRef((b, c) => {
    let {
        children: d,
        isPreview: e,
        responsiveVisibility: f,
        errorMessage: a,
        className: g,
        multiple: j,
        onChange: k,
        ...h
      } = b,
      { classNames: i } = b0({ className: g, responsiveVisibility: f });
    return aQ("div", {
      className: i,
      ref: c,
      children: [
        aP(a7, {
          disabled: e,
          listType: "picture",
          onChange(a) {
            let b = j ? a.fileList.map((a) => a.originFileObj).filter(Boolean) : a.file;
            k(b);
          },
          ...h,
          children: d,
        }),
        !!a && aP(ag, { type: "danger", children: a }),
      ],
    });
  });
!(function (a) {
  (a.TIME = "time"), (a.DATE = "date"), (a.WEEK = "week"), (a.MONTH = "month");
})(d || (d = {}));
let ax = a.forwardRef((b, c) => {
    let {
        isPreview: d,
        defaultValue: e,
        responsiveVisibility: f,
        picker: g = "date",
        errorMessage: a,
        className: h,
        value: i,
        ...j
      } = b,
      { classNames: k } = b0({ className: h, responsiveVisibility: f }),
      l = aS(() => ("string" == typeof e ? bo(e) : e), [e]),
      m = aS(() => (i ? ("string" == typeof i ? bo(i) : i) : void 0), [i]);
    return aQ("div", {
      className: k,
      ref: c,
      children: [
        aP(a8, {
          disabled: d,
          picker: g,
          defaultValue: l,
          prefixCls: "jitera-picker",
          value: m,
          ...j,
        }),
        !!a && aP(ag, { type: "danger", style: { display: "block" }, children: a }),
      ],
    });
  }),
  cn = "mca48d82cd_Wrapper";
var co = { Wrapper: "mca48d82cd_Wrapper" };
!(function (a) {
  (a.TOP = "top"), (a.RIGHT = "right"), (a.BOTTOM = "bottom"), (a.LEFT = "left");
})(e || (e = {}));
let ay = a.forwardRef((a, b) => {
    let {
        isPreview: c,
        responsiveVisibility: d,
        buttonProps: e,
        buttonStyle: f,
        drawerTitle: g,
        drawerProps: h,
        headerStyle: i,
        bodyStyle: j,
        iconProps: k,
        children: l,
        className: n,
      } = a,
      [o, x] = aT(!1),
      { headerVisible: p, closable: q, ...r } = h || {},
      s = () => {
        x(!0);
      },
      t = () => {
        x(!1);
      },
      u = c
        ? {
            destroyOnClose: !0,
            getContainer: ".preview-page",
            style: { position: "absolute" },
            afterVisibleChange(b) {
              let a = document.querySelector(".jitera-drawer-content");
              a && (a.style.backgroundColor = b ? "#fff" : "transparent");
            },
          }
        : {},
      v = p ? { title: g, closable: q } : { title: void 0, closable: !1 },
      { classNames: w } = b0({ className: n, responsiveVisibility: d });
    return aQ("div", {
      className: a$(co.Wrapper, w),
      ref: b,
      children: [
        aP(H, { onClick: s, style: f, ...e, children: aP(G, { iconName: "MdMenu", ...k }) }),
        aP(m, {
          ...u,
          ...v,
          visible: o,
          onClose: t,
          headerStyle: i,
          bodyStyle: j,
          ...r,
          children: l,
        }),
      ],
    });
  }),
  az = a.forwardRef((a, b) => {
    let { children: c, responsiveVisibility: d, className: e, ...f } = a,
      { classNames: g } = b0({ className: e, responsiveVisibility: d });
    return aP("div", { ...f, className: g, ref: b, children: c });
  }),
  cp = { MOBILE: 480, TABLET: 768, DESKTOP: 4e3 },
  aA = a.forwardRef((b, c) => {
    let {
        style: d,
        children: e,
        responsiveVisibility: f,
        dataSource: g,
        renderItem: h,
        setting: i,
        arrows: j = !1,
        slidesToShow: k = 4,
        variableWidth: a = !1,
        infinite: l = !1,
        adaptiveHeight: m = !0,
        focusOnSelect: n = !1,
        xlResponsive: o,
        mdResponsive: p,
        xsResponsive: q,
        className: r,
      } = b,
      { classNames: s } = b0({ className: r, responsiveVisibility: f }),
      t = aS(() => {
        let b = [];
        return (
          "object" == typeof o &&
            (null == o ? void 0 : o.slidesToShow) &&
            b.push({ breakpoint: cp.DESKTOP, settings: o }),
          "object" == typeof p &&
            (null == p ? void 0 : p.slidesToShow) &&
            b.push({ breakpoint: cp.TABLET, settings: p }),
          "object" == typeof q &&
            (null == q ? void 0 : q.slidesToShow) &&
            b.push({ breakpoint: cp.MOBILE, settings: q }),
          {
            dots: !1,
            arrows: j,
            infinite: l,
            slidesToShow: k,
            swipeToSlide: !0,
            variableWidth: a,
            adaptiveHeight: m,
            focusOnSelect: n,
            responsive: b,
            ...i,
          }
        );
      }, [i, j, l, k, a, m, n, o, p, q]),
      u = aS(
        () =>
          e && a
            ? e
            : e
            ? aU.map(e, (a) => aP("div", { children: a }))
            : (null == g ? void 0 : g.length) && h
            ? g.map((b, c) => (a ? h(b, c) : aP("div", { children: h(b, c) }, `${b.id}_${c}`)))
            : void 0,
        [e, a, g, h]
      );
    return aP("div", { style: d, className: s, ref: c, children: aP(bp, { ...t, children: u }) });
  }),
  cq = b(i)`
  .jitera-tabs-ink-bar {
    ${(a) => ((null == a ? void 0 : a.activeColor) ? `background-color: ${a.activeColor}` : "")}
  }
  .jitera-tabs-tab.jitera-tabs-tab-active .jitera-tabs-tab-btn {
    ${(a) => ((null == a ? void 0 : a.activeColor) ? `color: ${a.activeColor}` : "")}
  }
  .jitera-tabs-tab {
    ${(a) => {
      var b;
      return (
        null === (b = null == a ? void 0 : a.tabLabelStyle) || void 0 === b ? void 0 : b.color
      )
        ? `color: ${a.tabLabelStyle.color};`
        : "";
    }}
    ${(a) => {
      var b;
      return (
        null === (b = null == a ? void 0 : a.tabLabelStyle) || void 0 === b ? void 0 : b.fontSize
      )
        ? `font-size: ${a.tabLabelStyle.fontSize};`
        : "";
    }}
    ${(a) => {
      var b;
      return (
        null === (b = null == a ? void 0 : a.tabLabelStyle) || void 0 === b ? void 0 : b.fontWeight
      )
        ? `font-weight: ${a.tabLabelStyle.fontWeight};`
        : "";
    }}
    ${(a) => {
      var b;
      return (
        null === (b = null == a ? void 0 : a.tabLabelStyle) || void 0 === b ? void 0 : b.fontFamily
      )
        ? `font-family: ${a.tabLabelStyle.fontFamily};`
        : "";
    }}
  }
`,
  { TabPane: cr } = i,
  aB = a.forwardRef((a, b) => {
    let {
        style: c,
        tabType: d,
        tabs: e,
        children: f,
        className: g,
        responsiveVisibility: h,
        ...i
      } = a,
      { classNames: j } = b0({ className: g, responsiveVisibility: h }),
      k = aS(() => {
        if (f)
          return aU.map(f, (d, a) => {
            let b = (null == e ? void 0 : e[a]) || (null == e ? void 0 : e[`${a}`]),
              c = (null == b ? void 0 : b.title) || `Tab ${a}`;
            return aP(cr, { tab: c, children: d }, (null == b ? void 0 : b.key) || `${c}_${a}`);
          });
      }, [f, e]);
    return aP("div", {
      style: c,
      className: j,
      ref: b,
      children: aP(cq, { type: d, ...i, children: k }),
    });
  }),
  cs = new Set();
function ct(a) {
  if (!cs.has(a))
    throw new Promise((c) => {
      let b = new Image();
      (b.src = a),
        b.addEventListener("load", () => {
          cs.add(a), c(null);
        });
    });
}
function cu(a) {
  if (a instanceof HTMLImageElement) {
    let { alt: b, src: c } = a,
      d = cx({ altText: b, src: c });
    return { node: d };
  }
  return null;
}
function cv({ altText: b, className: c, imageRef: d, src: a, width: e, height: f, maxWidth: g }) {
  return (
    ct(a),
    aP("img", {
      className: c || void 0,
      src: a,
      alt: b,
      ref: d,
      style: { height: f, maxWidth: g, width: e },
      draggable: "false",
    })
  );
}
function cw({ src: e, altText: f, nodeKey: b, width: g, height: h, maxWidth: i }) {
  let j = aV(null),
    [a, c, k] = bs(b),
    [l] = br(),
    [d, p] = aT(null),
    m = aW(
      (e) => {
        if (a && bv(bw())) {
          let f = e;
          f.preventDefault();
          let d = bx(b);
          cy(d) && d.remove(), c(!1);
        }
        return !1;
      },
      [a, b, c]
    );
  aX(
    () =>
      bt(
        l.registerUpdateListener(({ editorState: a }) => {
          p(a.read(() => bw()));
        }),
        l.registerCommand(
          by,
          (d) => {
            let b = d;
            return b.target === j.current && (b.shiftKey || k(), c(!a), !0);
          },
          bz
        ),
        l.registerCommand(bA, m, bz),
        l.registerCommand(bB, m, bz)
      ),
    [k, l, a, b, m, c]
  );
  let n = a && bv(d),
    o = bv(d) && a;
  return aP(aY, {
    fallback: null,
    children: aP("div", {
      draggable: n,
      children: aP(cv, {
        className: o ? "focused" : null,
        src: e,
        altText: f,
        imageRef: j,
        width: g,
        height: h,
        maxWidth: i,
      }),
    }),
  });
}
class aC extends B {
  constructor(a, b, c, d, e, f, g, h) {
    super(h),
      (this.__src = a),
      (this.__altText = b),
      (this.__maxWidth = c),
      (this.__width = d || "inherit"),
      (this.__height = e || "inherit"),
      (this.__showCaption = f || !1),
      (this.__caption = g || bu());
  }
  static getType() {
    return "image";
  }
  static clone(a) {
    return new aC(
      a.__src,
      a.__altText,
      a.__maxWidth,
      a.__width,
      a.__height,
      a.__showCaption,
      a.__caption,
      a.__key
    );
  }
  static importJSON(d) {
    let { altText: e, height: f, width: g, maxWidth: h, caption: i, src: j, showCaption: k } = d,
      a = cx({ altText: e, height: f, maxWidth: h, showCaption: k, src: j, width: g }),
      b = a.__caption,
      c = b.parseEditorState(i.editorState);
    return c.isEmpty() || b.setEditorState(c), a;
  }
  exportDOM() {
    let a = document.createElement("img");
    return a.setAttribute("src", this.__src), a.setAttribute("alt", this.__altText), { element: a };
  }
  static importDOM() {
    return { img: () => ({ conversion: cu, priority: 0 }) };
  }
  exportJSON() {
    return {
      altText: this.getAltText(),
      caption: this.__caption.toJSON(),
      height: "inherit" === this.__height ? 0 : this.__height,
      maxWidth: this.__maxWidth,
      showCaption: this.__showCaption,
      src: this.getSrc(),
      type: "image",
      version: 1,
      width: "inherit" === this.__width ? 0 : this.__width,
    };
  }
  setWidthAndHeight(b, c) {
    let a = this.getWritable();
    (a.__width = b), (a.__height = c);
  }
  setShowCaption(a) {
    let b = this.getWritable();
    b.__showCaption = a;
  }
  createDOM(c) {
    let a = document.createElement("span"),
      { theme: d } = c,
      b = d.image;
    return void 0 !== b && (a.className = b), a;
  }
  updateDOM() {
    return !1;
  }
  getSrc() {
    return this.__src;
  }
  getAltText() {
    return this.__altText;
  }
  decorate() {
    return aP(cw, {
      src: this.__src,
      altText: this.__altText,
      width: this.__width,
      height: this.__height,
      maxWidth: this.__maxWidth,
      nodeKey: this.getKey(),
    });
  }
}
function cx({
  altText: a,
  height: b,
  maxWidth: c = 500,
  src: d,
  width: e,
  showCaption: f,
  caption: g,
  key: h,
}) {
  return new aC(d, a, c, e, b, f, g, h);
}
function cy(a) {
  return a instanceof aC;
}
let aD = [w, r, s, x, n, y, z, A, o, p, q, u, aC, v, t];
var cz = aD;
let aE = {
  characterLimit: "JiteraRichText__characterLimit",
  code: "JiteraRichText__code",
  codeHighlight: {
    atrule: "JiteraRichText__tokenAttr",
    attr: "JiteraRichText__tokenAttr",
    boolean: "JiteraRichText__tokenProperty",
    builtin: "JiteraRichText__tokenSelector",
    cdata: "JiteraRichText__tokenComment",
    char: "JiteraRichText__tokenSelector",
    class: "JiteraRichText__tokenFunction",
    "class-name": "JiteraRichText__tokenFunction",
    comment: "JiteraRichText__tokenComment",
    constant: "JiteraRichText__tokenProperty",
    deleted: "JiteraRichText__tokenProperty",
    doctype: "JiteraRichText__tokenComment",
    entity: "JiteraRichText__tokenOperator",
    function: "JiteraRichText__tokenFunction",
    important: "JiteraRichText__tokenVariable",
    inserted: "JiteraRichText__tokenSelector",
    keyword: "JiteraRichText__tokenAttr",
    namespace: "JiteraRichText__tokenVariable",
    number: "JiteraRichText__tokenProperty",
    operator: "JiteraRichText__tokenOperator",
    prolog: "JiteraRichText__tokenComment",
    property: "JiteraRichText__tokenProperty",
    punctuation: "JiteraRichText__tokenPunctuation",
    regex: "JiteraRichText__tokenVariable",
    selector: "JiteraRichText__tokenSelector",
    string: "JiteraRichText__tokenSelector",
    symbol: "JiteraRichText__tokenProperty",
    tag: "JiteraRichText__tokenProperty",
    url: "JiteraRichText__tokenOperator",
    variable: "JiteraRichText__tokenVariable",
  },
  embedBlock: { base: "JiteraRichText__embedBlock", focus: "JiteraRichText__embedBlockFocus" },
  hashtag: "JiteraRichText__hashtag",
  heading: {
    h1: "JiteraRichText__h1",
    h2: "JiteraRichText__h2",
    h3: "JiteraRichText__h3",
    h4: "JiteraRichText__h4",
    h5: "JiteraRichText__h5",
    h6: "JiteraRichText__h6",
  },
  image: "editor-image",
  link: "JiteraRichText__link",
  list: {
    listitem: "JiteraRichText__listItem",
    listitemChecked: "JiteraRichText__listItemChecked",
    listitemUnchecked: "JiteraRichText__listItemUnchecked",
    nested: { listitem: "JiteraRichText__nestedListItem" },
    olDepth: [
      "JiteraRichText__ol1",
      "JiteraRichText__ol2",
      "JiteraRichText__ol3",
      "JiteraRichText__ol4",
      "JiteraRichText__ol5",
    ],
    ul: "JiteraRichText__ul",
  },
  ltr: "JiteraRichText__ltr",
  mark: "JiteraRichText__mark",
  markOverlap: "JiteraRichText__markOverlap",
  paragraph: "JiteraRichText__paragraph",
  quote: "JiteraRichText__quote",
  rtl: "JiteraRichText__rtl",
  table: "JiteraRichText__table",
  tableCell: "JiteraRichText__tableCell",
  tableCellHeader: "JiteraRichText__tableCellHeader",
  text: {
    bold: "JiteraRichText__textBold",
    code: "JiteraRichText__textCode",
    italic: "JiteraRichText__textItalic",
    strikethrough: "JiteraRichText__textStrikethrough",
    subscript: "JiteraRichText__textSubscript",
    superscript: "JiteraRichText__textSuperscript",
    underline: "JiteraRichText__textUnderline",
    underlineStrikethrough: "JiteraRichText__textUnderlineStrikethrough",
  },
};
var cA = aE;
let cB =
    '{"root":{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":null,"format":"","indent":0,"type":"root","version":1}}',
  cC = ({ data: a }) => {
    let [c] = br(),
      b = aS(
        () =>
          a ||
          '{"root":{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":null,"format":"","indent":0,"type":"root","version":1}}',
        [a]
      );
    return (
      aX(() => {
        c.update(() => {
          let a = c.parseEditorState(b);
          c.setEditorState(a);
        });
      }, [b]),
      aX(() => {
        c.update(() => {
          c.setReadOnly(!0);
        });
      }, []),
      aP(bC, {
        contentEditable: aP(bD, {}),
        placeholder: aP("div", {}),
        initialEditorState: void 0,
      })
    );
  },
  aF = a.forwardRef(({ style: a, data: b }, c) => {
    let d = {
      editorState: void 0,
      namespace: "Playground",
      nodes: [...cz],
      onError(a) {
        throw a;
      },
      theme: cA,
    };
    return aP("div", {
      ref: c,
      style: a,
      children: aP(bq, { initialConfig: d, children: aP(cC, { data: b }) }),
    });
  }),
  cD = b.div`
  && {
    width: fit-content;
    ${(a) => a.customStyle}
  }
`,
  cE = b.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 5px;
  background: ${(a) => (a.isResizing ? "blue" : "rgba(0, 0, 0, 0.5)")};
  opacity: ${(a) => (a.isResizing ? "1" : "0")};
  cursor: col-resize;
  user-select: none;
  touch-action: none;
`,
  cF = b.table`
  border-collapse: collapse;
  width: fit-content;
  ${(a) => a.customStyle}
`,
  cG = b.thead`
  ${(a) => a.customStyle}
`,
  cH = b.tbody`
  ${(a) => a.customStyle}
`,
  cI = b.tfoot`
  ${(a) => a.customStyle}
`,
  cJ = b.tr`
  width: fit-content;
  ${(a) => a.customStyle}

  &.j-table__tbody-tr--dragging {
    opacity: 0.5;
  }

  .j-table__tbody-td.j-table__tbody-td--drag {
    cursor: row-resize;
  }
`,
  cK = b.th`
  cursor: ${(a) => (a.canSort ? "pointer" : null)};
  position: relative;
  ${(a) => a.customStyle}

  &.j-table__thead-th--dragging {
    opacity: 0.5;
  }

  .j-table__thead-th-drag-indicator {
    cursor: col-resize;
  }

  &:hover .j-table__resizer {
    opacity: 1;
  }
`,
  cL = b.td`
  ${(a) => (a.isSortColumn ? { textAlign: "center" } : void 0)}
  ${(a) => a.customStyle}
`,
  cM = b.div`
  display: flex;
  justify-content: ${(a) => a.paginationPosition};
  ${(a) => a.customStyle}
`,
  aG = { borderWidth: "1px", borderColor: "#000", borderStyle: "solid" },
  cN = ({
    header: a,
    isColumnResizeable: b,
    isColumnSortable: k,
    isDataSortable: d,
    ascendingIconProps: i,
    descendingIconProps: j,
    headerColumnStyle: e,
  }) => {
    var f, g;
    let {
        attributes: l,
        listeners: m,
        transform: c,
        isDragging: n,
        setNodeRef: o,
      } = bL({ id: a.id }),
      p = {
        transform: bY.Transform.toString({
          x: (null == c ? void 0 : c.x) || 0,
          y: (null == c ? void 0 : c.y) || 0,
          scaleX: 1,
          scaleY: 1,
        }),
      },
      h = aS(() => {
        var b;
        return k && !(null === (b = a.column.columnDef.meta) || void 0 === b ? void 0 : b.action);
      }, [null === (f = a.column.columnDef.meta) || void 0 === f ? void 0 : f.action, k]),
      q = h ? m : void 0,
      r = h ? l : void 0;
    return aQ(
      cK,
      {
        ref: o,
        className: `j-table__thead-th j-table__thead-th--${a.id} ${
          n ? "j-table__thead-th--dragging" : ""
        }`,
        colSpan: a.colSpan,
        canSort: d ? a.column.getCanSort() : void 0,
        customStyle: { ...e, ...p, width: b ? a.getSize() : null == e ? void 0 : e.width },
        onClick: d ? a.column.getToggleSortingHandler() : void 0,
        onMouseDown: b ? a.getResizeHandler() : void 0,
        onTouchStart: b ? a.getResizeHandler() : void 0,
        ...q,
        ...r,
        children: [
          bG(a.column.columnDef.header, a.getContext()),
          h
            ? aP(G, { className: "j-table__thead-th-drag-indicator", iconName: "MdDragIndicator" })
            : void 0,
          d
            ? null !==
                (g = {
                  asc: i ? aP(G, { ...i }) : " \u{1F53C}",
                  desc: j ? aP(G, { ...j }) : " \u{1F53D}",
                }[a.column.getIsSorted()]) && void 0 !== g
              ? g
              : null
            : void 0,
          b
            ? aP(cE, {
                className: "j-table__resizer",
                isResizing: a.column.getIsResizing(),
                onMouseDown: a.getResizeHandler(),
                onTouchStart: a.getResizeHandler(),
              })
            : void 0,
        ],
      },
      a.id
    );
  },
  cO = ({
    row: a,
    isRowSortable: c,
    isColumnResizeable: l,
    bodyRowStyle: d,
    bodyColumnStyle: e,
    sortColumnStyle: f,
  }) => {
    let {
        attributes: g,
        listeners: h,
        transform: b,
        isDragging: i,
        setNodeRef: j,
      } = bL({ id: a.id }),
      k = {
        transform: bY.Transform.toString({
          x: (null == b ? void 0 : b.x) || 0,
          y: (null == b ? void 0 : b.y) || 0,
          scaleX: 1,
          scaleY: 1,
        }),
      };
    return aQ(
      cJ,
      {
        ref: j,
        className: `j-table__tbody-tr j-table__tbody-tr--${a.id} ${
          i ? "j-table__tbody-tr--dragging" : ""
        }`,
        customStyle: { ...d, ...k },
        children: [
          c
            ? aP(cL, {
                isSortColumn: !0,
                customStyle: { ...e, ...f },
                className: "j-table__tbody-td j-table__tbody-td--drag",
                ...h,
                ...g,
                children: aP(G, { iconName: "MdDragIndicator" }),
              })
            : void 0,
          a
            .getVisibleCells()
            .map((a) =>
              aP(
                cL,
                {
                  className: `j-table__tbody-td j-table__tbody-td--${a.id}`,
                  customStyle: {
                    ...e,
                    width: l ? a.column.getSize() : null == e ? void 0 : e.width,
                  },
                  children: bG(a.column.columnDef.cell, a.getContext()),
                },
                a.id
              )
            ),
        ],
      },
      a.id
    );
  },
  aH = (
    {
      className: j,
      data: k = [],
      columns: l = [],
      actions: m = [],
      wrapperStyle: n,
      tableStyle: e,
      headerStyle: o,
      headerRowStyle: J,
      headerColumnStyle: K,
      bodyStyle: p,
      bodyRowStyle: L,
      bodyColumnStyle: M,
      sortColumnStyle: N,
      footerStyle: q,
      footerRowStyle: O,
      footerColumnStyle: P,
      paginationWrapperStyle: r,
      isColumnResizeable: g,
      isHeaderVisible: s,
      isFooterVisible: t,
      isColumnSortable: Q,
      onColumnSortingChange: R,
      isRowSortable: S,
      onRowSortingChange: T,
      isDataSortable: h,
      ascendingIconProps: U,
      descendingIconProps: V,
      onDataSortingChange: u,
      isPaginationEnabled: a,
      paginationPosition: v,
      pageSize: b,
      totalPage: d,
      paginationProps: w,
      paginationStyle: x,
      onPaginationChange: y,
    },
    z
  ) => {
    let A = aS(() => k, [k]),
      [i, B] = aT([]),
      [f, C] = aT({ pageIndex: 0, pageSize: b || 20 }),
      D = aS(
        () =>
          l.map((a) => ({
            accessorKey: a.path,
            header: a.name,
            footer: a.name,
            cell: a.renderColumn ? a.renderColumn : (a) => a.getValue() || "",
            enableSorting: a.sortable,
          })),
        [l]
      ),
      E = aS(
        () =>
          m.map((a, b) => ({
            id: String(b),
            meta: { action: !0 },
            header: a.name,
            footer: a.name,
            cell: a.renderColumn ? a.renderColumn : (a) => a.getValue() || "",
            enableSorting: !1,
          })),
        [m]
      ),
      F = aS(() => [...D, ...E], [D, E]),
      c = bE({
        data: A,
        columns: F,
        columnResizeMode: g ? "onChange" : void 0,
        pageCount: a ? d : void 0,
        state: { sorting: h ? i : void 0, pagination: a ? f : void 0 },
        manualPagination: a,
        manualSorting: !0,
        getCoreRowModel: bF(),
        onPaginationChange: a ? C : void 0,
        onSortingChange: h ? B : void 0,
      }),
      G = bM(bN(bO), bN(bP), bN(bQ), bN(bR, { coordinateGetter: bH }));
    aX(() => {
      if (a && !(Number.isInteger(b) && Number.isInteger(d)))
        throw Error("`pageSize` and `totalPage` should be required if pagination enabled");
    }, [a, b, d]),
      aX(() => {
        let a = null == i ? void 0 : i[0];
        u && a && u(a.id, a.desc ? "desc" : "asc");
      }, [u, i]),
      aX(() => {
        y && y(String(f.pageIndex + 1), String(f.pageSize));
      }, [y, f]);
    let H = (a, b) => {
        c.setPageIndex(a - 1), c.setPageSize(b);
      },
      W = ({ active: d, over: c }) => {
        var a, b;
        let e = null === (a = d.data.current) || void 0 === a ? void 0 : a.sortable.index,
          f =
            null === (b = null == c ? void 0 : c.data.current) || void 0 === b
              ? void 0
              : b.sortable.index;
        return { currentIndex: e, newIndex: f };
      },
      I = (a) => {
        let { currentIndex: b, newIndex: c } = W(a);
        T && T(b, c, a);
      },
      X = (a) => {
        let { currentIndex: b, newIndex: c } = W(a);
        R && R(b, c, a);
      };
    return aQ(cD, {
      ref: z,
      customStyle: n,
      className: j,
      children: [
        aQ(cF, {
          className: "j-table",
          customStyle: { ...e, width: g ? c.getCenterTotalSize() : null == e ? void 0 : e.width },
          children: [
            s
              ? aP(cG, {
                  className: "j-table__thead",
                  customStyle: o,
                  children: c
                    .getHeaderGroups()
                    .map((a) =>
                      aQ(
                        cJ,
                        {
                          className: `j-table__thead-tr j-table__thead-tr--${a.id}`,
                          customStyle: J,
                          children: [
                            S
                              ? aP(cK, {
                                  className: "j-table__thead-th j-table__thead-th--drag",
                                  customStyle: K,
                                })
                              : void 0,
                            aP(bS, {
                              sensors: G,
                              collisionDetection: bT,
                              modifiers: [bU, bV, bW],
                              onDragEnd: X,
                              children: aP(bI, {
                                items: a.headers,
                                strategy: bJ,
                                children: a.headers.map((a) =>
                                  aP(
                                    cN,
                                    {
                                      header: a,
                                      isColumnResizeable: g,
                                      isColumnSortable: Q,
                                      isDataSortable: h,
                                      ascendingIconProps: U,
                                      descendingIconProps: V,
                                      headerColumnStyle: K,
                                    },
                                    a.id
                                  )
                                ),
                              }),
                            }),
                          ],
                        },
                        a.id
                      )
                    ),
                })
              : void 0,
            aP(cH, {
              className: "j-table__tbody",
              customStyle: p,
              children: aP(bS, {
                sensors: G,
                collisionDetection: bT,
                modifiers: [bU, bX, bW],
                onDragEnd: I,
                children: aP(bI, {
                  items: c.getRowModel().rows,
                  strategy: bK,
                  children: c
                    .getRowModel()
                    .rows.map((a) =>
                      aP(
                        cO,
                        {
                          row: a,
                          isRowSortable: S,
                          bodyRowStyle: L,
                          bodyColumnStyle: M,
                          sortColumnStyle: N,
                        },
                        a.id
                      )
                    ),
                }),
              }),
            }),
            t
              ? aP(cI, {
                  className: "j-table__tfoot",
                  customStyle: q,
                  children: c
                    .getFooterGroups()
                    .map((a) =>
                      aQ(
                        cJ,
                        {
                          className: `j-table__tfoot-tr j-table__tfoot-tr--${a.id}`,
                          style: O,
                          children: [
                            S
                              ? aP(cK, {
                                  className: "j-table__tfooter-th j-table__tfooter-th--drag",
                                  customStyle: P,
                                })
                              : void 0,
                            a.headers.map((a) =>
                              aP(
                                cK,
                                {
                                  className: `j-table__tfoot-th j-table__tfoot-th--${a.id}`,
                                  colSpan: a.colSpan,
                                  customStyle: P,
                                  children: bG(a.column.columnDef.footer, a.getContext()),
                                },
                                a.id
                              )
                            ),
                          ],
                        },
                        a.id
                      )
                    ),
                })
              : void 0,
          ],
        }),
        a
          ? aP(cM, {
              paginationPosition: v || "left",
              customStyle: r,
              children: aP(a9, {
                ...w,
                style: x,
                current: f.pageIndex + 1,
                pageSize: b,
                total: Number.isInteger(b) && Number.isInteger(d) ? b * d : void 0,
                onChange: H,
              }),
            })
          : void 0,
      ],
    });
  },
  aI = a.forwardRef(aH),
  cP = "jitera",
  cQ = "jiteraicon",
  cR = null,
  cS = { modals: [] };
!(function (a) {
  (a.DEFAULT = "default"), (a.TOP = "top"), (a.CENTER = "center");
})(f || (f = {}));
class aJ extends a.PureComponent {
  constructor(a) {
    super(a),
      (this.clearModal = (a) => {
        a &&
          this.setState((b) => {
            let c = b.modals.filter((b) => {
              var c, d;
              return (
                b.id === a &&
                  "function" ==
                    typeof (null === (c = b.options) || void 0 === c ? void 0 : c.afterClose) &&
                  (null === (d = b.options) || void 0 === d || d.afterClose()),
                b.id !== a
              );
            });
            return { ...b, modals: c };
          });
      }),
      (this.hide = (c) => {
        let { modals: a } = this.state,
          b = a;
        c
          ? (b = a.map((a) => (a.id === c ? { ...a, visible: !1 } : a)))
          : (null == a ? void 0 : a[a.length - 1]) && ((a[a.length - 1].visible = !1), (b = a)),
          this.setState({ modals: [...b] });
      }),
      (this.show = (b, c) => {
        let { modals: d } = this.state,
          a = `${Date.now()}`;
        return (
          this.setState({ modals: [...d, { component: b, options: c, visible: !0, id: a }] }), a
        );
      }),
      (this.state = cS);
  }
  componentDidMount() {
    cR = this;
  }
  componentWillUnmount() {
    cR = null;
  }
  render() {
    let { modals: a } = this.state;
    return aP(aR, {
      children: a.map((a) =>
        aP(
          ba,
          {
            visible: null == a ? void 0 : a.visible,
            closable: !1,
            onCancel: () => this.hide(a.id),
            mask: !0,
            maskClosable: !0,
            footer: null,
            afterClose: () => this.clearModal(a.id),
            modalRender: () => a.component,
            centered: a.options.position === f.CENTER,
            style: {
              pointerEvents: "auto",
              top: a.options.position === f.TOP ? "0px" : void 0,
              ...a.options.style,
            },
            ...a.options,
          },
          a.id
        )
      ),
    });
  }
}
let aK = {
    show: (a, b = {}) => (null == cR ? void 0 : cR.show(a, b)),
    hide(a) {
      null == cR || cR.hide(a);
    },
  },
  j = {
    blueBase: "#1890ff",
    blue1: "#e6f7ff",
    blue2: "#bae7ff",
    blue3: "#91d5ff",
    blue4: "#69c0ff",
    blue5: "#40a9ff",
    blue6: "#1890ff",
    blue7: "#096dd9",
    blue8: "#0050b3",
    blue9: "#003a8c",
    blue10: "#002766",
    purpleBase: "#722ed1",
    purple1: "#f9f0ff",
    purple2: "#efdbff",
    purple3: "#d3adf7",
    purple4: "#b37feb",
    purple5: "#9254de",
    purple6: "#722ed1",
    purple7: "#531dab",
    purple8: "#391085",
    purple9: "#22075e",
    purple10: "#120338",
    cyanBase: "#13c2c2",
    cyan1: "#e6fffb",
    cyan2: "#b5f5ec",
    cyan3: "#87e8de",
    cyan4: "#5cdbd3",
    cyan5: "#36cfc9",
    cyan6: "#13c2c2",
    cyan7: "#08979c",
    cyan8: "#006d75",
    cyan9: "#00474f",
    cyan10: "#002329",
    greenBase: "#52c41a",
    green1: "#f6ffed",
    green2: "#d9f7be",
    green3: "#b7eb8f",
    green4: "#95de64",
    green5: "#73d13d",
    green6: "#52c41a",
    green7: "#389e0d",
    green8: "#237804",
    green9: "#135200",
    green10: "#092b00",
    magentaBase: "#eb2f96",
    magenta1: "#fff0f6",
    magenta2: "#ffd6e7",
    magenta3: "#ffadd2",
    magenta4: "#ff85c0",
    magenta5: "#f759ab",
    magenta6: "#eb2f96",
    magenta7: "#c41d7f",
    magenta8: "#9e1068",
    magenta9: "#780650",
    magenta10: "#520339",
    pinkBase: "#eb2f96",
    pink1: "#fff0f6",
    pink2: "#ffd6e7",
    pink3: "#ffadd2",
    pink4: "#ff85c0",
    pink5: "#f759ab",
    pink6: "#eb2f96",
    pink7: "#c41d7f",
    pink8: "#9e1068",
    pink9: "#780650",
    pink10: "#520339",
    redBase: "#f5222d",
    red1: "#fff1f0",
    red2: "#ffccc7",
    red3: "#ffa39e",
    red4: "#ff7875",
    red5: "#ff4d4f",
    red6: "#f5222d",
    red7: "#cf1322",
    red8: "#a8071a",
    red9: "#820014",
    red10: "#5c0011",
    orangeBase: "#fa8c16",
    orange1: "#fff7e6",
    orange2: "#ffe7ba",
    orange3: "#ffd591",
    orange4: "#ffc069",
    orange5: "#ffa940",
    orange6: "#fa8c16",
    orange7: "#d46b08",
    orange8: "#ad4e00",
    orange9: "#873800",
    orange10: "#612500",
    yellowBase: "#fadb14",
    yellow1: "#feffe6",
    yellow2: "#ffffb8",
    yellow3: "#fffb8f",
    yellow4: "#fff566",
    yellow5: "#ffec3d",
    yellow6: "#fadb14",
    yellow7: "#d4b106",
    yellow8: "#ad8b00",
    yellow9: "#876800",
    yellow10: "#614700",
    volcanoBase: "#fa541c",
    volcano1: "#fff2e8",
    volcano2: "#ffd8bf",
    volcano3: "#ffbb96",
    volcano4: "#ff9c6e",
    volcano5: "#ff7a45",
    volcano6: "#fa541c",
    volcano7: "#d4380d",
    volcano8: "#ad2102",
    volcano9: "#871400",
    volcano10: "#610b00",
    geekblueBase: "#2f54eb",
    geekblue1: "#f0f5ff",
    geekblue2: "#d6e4ff",
    geekblue3: "#adc6ff",
    geekblue4: "#85a5ff",
    geekblue5: "#597ef7",
    geekblue6: "#2f54eb",
    geekblue7: "#1d39c4",
    geekblue8: "#10239e",
    geekblue9: "#061178",
    geekblue10: "#030852",
    limeBase: "#a0d911",
    lime1: "#fcffe6",
    lime2: "#f4ffb8",
    lime3: "#eaff8f",
    lime4: "#d3f261",
    lime5: "#bae637",
    lime6: "#a0d911",
    lime7: "#7cb305",
    lime8: "#5b8c00",
    lime9: "#3f6600",
    lime10: "#254000",
    goldBase: "#faad14",
    gold1: "#fffbe6",
    gold2: "#fff1b8",
    gold3: "#ffe58f",
    gold4: "#ffd666",
    gold5: "#ffc53d",
    gold6: "#faad14",
    gold7: "#d48806",
    gold8: "#ad6800",
    gold9: "#874d00",
    gold10: "#613400",
    presetColors:
      "pink, magenta, red, volcano, orange, yellow, gold, cyan, lime, green, blue, geekblue, purple",
    theme: "default",
    antPrefix: "ant",
    htmlSelector: "html",
    primaryColor: "#1890ff",
    primaryColorHover: "#40a9ff",
    primaryColorActive: "#096dd9",
    primaryColorOutline: "rgba(24, 144, 255, 0.2)",
    processingColor: "#1890ff",
    infoColor: "#1890ff",
    infoColorDeprecatedBg: "#e6f7ff",
    infoColorDeprecatedBorder: "#91d5ff",
    successColor: "#52c41a",
    successColorHover: "#73d13d",
    successColorActive: "#389e0d",
    successColorOutline: "rgba(82, 196, 26, 0.2)",
    successColorDeprecatedBg: "#f6ffed",
    successColorDeprecatedBorder: "#b7eb8f",
    warningColor: "#faad14",
    warningColorHover: "#ffc53d",
    warningColorActive: "#d48806",
    warningColorOutline: "rgba(250, 173, 20, 0.2)",
    warningColorDeprecatedBg: "#fffbe6",
    warningColorDeprecatedBorder: "#ffe58f",
    errorColor: "#ff4d4f",
    errorColorHover: "#ff7875",
    errorColorActive: "#d9363e",
    errorColorOutline: "rgba(255, 77, 79, 0.2)",
    errorColorDeprecatedBg: "#fff2f0",
    errorColorDeprecatedBorder: "#ffccc7",
    highlightColor: "#ff4d4f",
    normalColor: "#d9d9d9",
    white: "#fff",
    black: "#000",
    primary1: "#e6f7ff",
    primary2: "#bae7ff",
    primary3: "#91d5ff",
    primary4: "#69c0ff",
    primary5: "#40a9ff",
    primary6: "#1890ff",
    primary7: "#096dd9",
    primary8: "#0050b3",
    primary9: "#003a8c",
    primary10: "#002766",
    bodyBackground: "#fff",
    componentBackground: "#fff",
    popoverBackground: "#fff",
    popoverCustomizeBorderColor: "#f0f0f0",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    codeFamily: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
    textColor: "rgba(0, 0, 0, 0.85)",
    textColorSecondary: "rgba(0, 0, 0, 0.45)",
    textColorInverse: "#fff",
    iconColor: "inherit",
    iconColorHover: "rgba(0, 0, 0, 0.75)",
    headingColor: "rgba(0, 0, 0, 0.85)",
    textColorDark: "rgba(255, 255, 255, 0.85)",
    textColorSecondaryDark: "rgba(255, 255, 255, 0.65)",
    textSelectionBg: "#1890ff",
    fontVariantBase: "tabular-nums",
    fontFeatureSettingsBase: "'tnum'",
    fontSizeBase: "14px",
    fontSizeLg: "16px",
    fontSizeSm: "12px",
    heading1Size: "38px",
    heading2Size: "30px",
    heading3Size: "24px",
    heading4Size: "20px",
    heading5Size: "16px",
    lineHeightBase: "1.5715",
    borderRadiusBase: "2px",
    borderRadiusSm: "2px",
    paddingLg: "24px",
    paddingMd: "16px",
    paddingSm: "12px",
    paddingXs: "8px",
    paddingXss: "4px",
    controlPaddingHorizontal: "12px",
    controlPaddingHorizontalSm: "8px",
    marginLg: "24px",
    marginMd: "16px",
    marginSm: "12px",
    marginXs: "8px",
    marginXss: "4px",
    heightBase: "32px",
    heightLg: "40px",
    heightSm: "24px",
    itemActiveBg: "#e6f7ff",
    itemHoverBg: "#f5f5f5",
    iconfontCssPrefix: "anticon",
    linkColor: "#1890ff",
    linkHoverColor: "#40a9ff",
    linkActiveColor: "#096dd9",
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    linkFocusOutline: "0",
    easeBaseOut: "cubic-bezier(0.7, 0.3, 0.1, 1)",
    easeBaseIn: "cubic-bezier(0.9, 0, 0.3, 0.7)",
    easeOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
    easeIn: "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
    easeInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    easeOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
    easeInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
    easeInOutBack: "cubic-bezier(0.71, -0.46, 0.29, 1.46)",
    easeOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
    easeInCirc: "cubic-bezier(0.6, 0.04, 0.98, 0.34)",
    easeInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
    easeOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
    easeInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
    easeInOutQuint: "cubic-bezier(0.86, 0, 0.07, 1)",
    borderColorBase: "#d9d9d9",
    borderColorSplit: "#f0f0f0",
    borderColorInverse: "#fff",
    borderWidthBase: "1px",
    borderStyleBase: "solid",
    outlineBlurSize: "0",
    outlineWidth: "2px",
    outlineColor: "#1890ff",
    outlineFade: "20%",
    backgroundColorLight: "#fafafa",
    backgroundColorBase: "#f5f5f5",
    disabledColor: "rgba(0, 0, 0, 0.25)",
    disabledBg: "#f5f5f5",
    disabledActiveBg: "#e6e6e6",
    disabledColorDark: "rgba(255, 255, 255, 0.35)",
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowColorInverse: "#fff",
    boxShadowBase:
      "0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)",
    shadow1Up:
      "0 -6px 16px -8px rgba(0, 0, 0, 0.08), 0 -9px 28px 0 rgba(0, 0, 0, 0.05), 0 -12px 48px 16px rgba(0, 0, 0, 0.03)",
    shadow1Down:
      "0 6px 16px -8px rgba(0, 0, 0, 0.08), 0 9px 28px 0 rgba(0, 0, 0, 0.05), 0 12px 48px 16px rgba(0, 0, 0, 0.03)",
    shadow1Left:
      "-6px 0 16px -8px rgba(0, 0, 0, 0.08), -9px 0 28px 0 rgba(0, 0, 0, 0.05), -12px 0 48px 16px rgba(0, 0, 0, 0.03)",
    shadow1Right:
      "6px 0 16px -8px rgba(0, 0, 0, 0.08), 9px 0 28px 0 rgba(0, 0, 0, 0.05), 12px 0 48px 16px rgba(0, 0, 0, 0.03)",
    shadow2:
      "0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)",
    btnFontWeight: "400",
    btnBorderRadiusBase: "2px",
    btnBorderRadiusSm: "2px",
    btnBorderWidth: "1px",
    btnBorderStyle: "solid",
    btnShadow: "0 2px 0 rgba(0, 0, 0, 0.015)",
    btnPrimaryShadow: "0 2px 0 rgba(0, 0, 0, 0.045)",
    btnTextShadow: "0 -1px 0 rgba(0, 0, 0, 0.12)",
    btnPrimaryColor: "#fff",
    btnPrimaryBg: "#1890ff",
    btnDefaultColor: "rgba(0, 0, 0, 0.85)",
    btnDefaultBg: "#fff",
    btnDefaultBorder: "#d9d9d9",
    btnDangerColor: "#fff",
    btnDangerBg: "#ff4d4f",
    btnDangerBorder: "#ff4d4f",
    btnDisableColor: "rgba(0, 0, 0, 0.25)",
    btnDisableBg: "#f5f5f5",
    btnDisableBorder: "#d9d9d9",
    btnDefaultGhostColor: "#fff",
    btnDefaultGhostBg: "transparent",
    btnDefaultGhostBorder: "#fff",
    btnFontSizeLg: "16px",
    btnFontSizeSm: "14px",
    btnPaddingHorizontalBase: "15px",
    btnPaddingHorizontalLg: "15px",
    btnPaddingHorizontalSm: "7px",
    btnHeightBase: "32px",
    btnHeightLg: "40px",
    btnHeightSm: "24px",
    btnLineHeight: "1.5715",
    btnCircleSize: "32px",
    btnCircleSizeLg: "40px",
    btnCircleSizeSm: "24px",
    btnSquareSize: "32px",
    btnSquareSizeLg: "40px",
    btnSquareSizeSm: "24px",
    btnSquareOnlyIconSize: "16px",
    btnSquareOnlyIconSizeSm: "14px",
    btnSquareOnlyIconSizeLg: "18px",
    btnGroupBorder: "#40a9ff",
    btnLinkHoverBg: "transparent",
    btnTextHoverBg: "rgba(0, 0, 0, 0.018)",
    checkboxSize: "16px",
    checkboxColor: "#1890ff",
    checkboxCheckColor: "#fff",
    checkboxCheckBg: "#fff",
    checkboxBorderWidth: "1px",
    checkboxBorderRadius: "2px",
    checkboxGroupItemMarginRight: "8px",
    descriptionsBg: "#fafafa",
    descriptionsTitleMarginBottom: "20px",
    descriptionsDefaultPadding: "16px 24px",
    descriptionsMiddlePadding: "12px 24px",
    descriptionsSmallPadding: "8px 16px",
    descriptionsItemPaddingBottom: "16px",
    descriptionsItemTrailingColon: "true",
    descriptionsItemLabelColonMarginRight: "8px",
    descriptionsItemLabelColonMarginLeft: "2px",
    descriptionsExtraColor: "rgba(0, 0, 0, 0.85)",
    dividerTextPadding: "1em",
    dividerOrientationMargin: "5%",
    dividerColor: "rgba(0, 0, 0, 0.06)",
    dividerVerticalGutter: "8px",
    dropdownSelectedColor: "#1890ff",
    dropdownMenuSubmenuDisabledBg: "#fff",
    dropdownSelectedBg: "#e6f7ff",
    emptyFontSize: "14px",
    radioSize: "16px",
    radioTop: "0.2em",
    radioBorderWidth: "1px",
    radioDotSize: "8px",
    radioDotColor: "#1890ff",
    radioDotDisabledColor: "rgba(0, 0, 0, 0.2)",
    radioSolidCheckedColor: "#fff",
    radioButtonBg: "#fff",
    radioButtonCheckedBg: "#fff",
    radioButtonColor: "rgba(0, 0, 0, 0.85)",
    radioButtonHoverColor: "#40a9ff",
    radioButtonActiveColor: "#096dd9",
    radioButtonPaddingHorizontal: "15px",
    radioDisabledButtonCheckedBg: "#e6e6e6",
    radioDisabledButtonCheckedColor: "rgba(0, 0, 0, 0.25)",
    radioWrapperMarginRight: "8px",
    screenXs: "480px",
    screenXsMin: "480px",
    screenSm: "576px",
    screenSmMin: "576px",
    screenMd: "768px",
    screenMdMin: "768px",
    screenLg: "992px",
    screenLgMin: "992px",
    screenXl: "1200px",
    screenXlMin: "1200px",
    screenXxl: "1600px",
    screenXxlMin: "1600px",
    screenXsMax: "575px",
    screenSmMax: "767px",
    screenMdMax: "991px",
    screenLgMax: "1199px",
    screenXlMax: "1599px",
    gridColumns: "24",
    layoutBodyBackground: "#f0f2f5",
    layoutHeaderBackground: "#001529",
    layoutHeaderHeight: "64px",
    layoutHeaderPadding: "0 50px",
    layoutHeaderColor: "rgba(0, 0, 0, 0.85)",
    layoutFooterPadding: "24px 50px",
    layoutFooterBackground: "#f0f2f5",
    layoutSiderBackground: "#001529",
    layoutTriggerHeight: "48px",
    layoutTriggerBackground: "#002140",
    layoutTriggerColor: "#fff",
    layoutZeroTriggerWidth: "36px",
    layoutZeroTriggerHeight: "42px",
    layoutSiderBackgroundLight: "#fff",
    layoutTriggerBackgroundLight: "#fff",
    layoutTriggerColorLight: "rgba(0, 0, 0, 0.85)",
    zindexBadge: "auto",
    zindexTableFixed: "2",
    zindexAffix: "10",
    zindexBackTop: "10",
    zindexPickerPanel: "10",
    zindexPopupClose: "10",
    zindexModal: "1000",
    zindexModalMask: "1000",
    zindexMessage: "1010",
    zindexNotification: "1010",
    zindexPopover: "1030",
    zindexDropdown: "1050",
    zindexPicker: "1050",
    zindexPopoconfirm: "1060",
    zindexTooltip: "1070",
    zindexImage: "1080",
    animationDurationSlow: "0.3s",
    animationDurationBase: "0.2s",
    animationDurationFast: "0.1s",
    collapsePanelBorderRadius: "2px",
    dropdownMenuBg: "#fff",
    dropdownVerticalPadding: "5px",
    dropdownEdgeChildVerticalPadding: "4px",
    dropdownFontSize: "14px",
    dropdownLineHeight: "22px",
    labelRequiredColor: "#ff4d4f",
    labelColor: "rgba(0, 0, 0, 0.85)",
    formWarningInputBg: "#fff",
    formItemMarginBottom: "24px",
    formItemTrailingColon: "true",
    formVerticalLabelPadding: "0 0 8px",
    formVerticalLabelMargin: "0",
    formItemLabelFontSize: "14px",
    formItemLabelHeight: "32px",
    formItemLabelColonMarginRight: "8px",
    formItemLabelColonMarginLeft: "2px",
    formErrorInputBg: "#fff",
    inputHeightBase: "32px",
    inputHeightLg: "40px",
    inputHeightSm: "24px",
    inputPaddingHorizontal: "11px",
    inputPaddingHorizontalBase: "11px",
    inputPaddingHorizontalSm: "7px",
    inputPaddingHorizontalLg: "11px",
    inputPaddingVerticalBase: "4px",
    inputPaddingVerticalSm: "0px",
    inputPaddingVerticalLg: "6.5px",
    inputPlaceholderColor: "#bfbfbf",
    inputColor: "rgba(0, 0, 0, 0.85)",
    inputIconColor: "rgba(0, 0, 0, 0.85)",
    inputBorderColor: "#d9d9d9",
    inputBg: "#fff",
    inputNumberHoverBorderColor: "#40a9ff",
    inputNumberHandlerActiveBg: "#f4f4f4",
    inputNumberHandlerHoverBg: "#40a9ff",
    inputNumberHandlerBg: "#fff",
    inputNumberHandlerBorderColor: "#d9d9d9",
    inputAddonBg: "#fafafa",
    inputHoverBorderColor: "#40a9ff",
    inputDisabledBg: "#f5f5f5",
    inputOutlineOffset: "0 0",
    inputIconHoverColor: "rgba(0, 0, 0, 0.85)",
    inputDisabledColor: "rgba(0, 0, 0, 0.25)",
    mentionsDropdownBg: "#fff",
    mentionsDropdownMenuItemHoverBg: "#fff",
    selectBorderColor: "#d9d9d9",
    selectItemSelectedColor: "rgba(0, 0, 0, 0.85)",
    selectItemSelectedFontWeight: "600",
    selectDropdownBg: "#fff",
    selectItemSelectedBg: "#e6f7ff",
    selectItemActiveBg: "#f5f5f5",
    selectDropdownVerticalPadding: "5px",
    selectDropdownFontSize: "14px",
    selectDropdownLineHeight: "22px",
    selectDropdownHeight: "32px",
    selectBackground: "#fff",
    selectClearBackground: "#fff",
    selectSelectionItemBg: "#f5f5f5",
    selectSelectionItemBorderColor: "#f0f0f0",
    selectSingleItemHeightLg: "40px",
    selectMultipleItemHeight: "24px",
    selectMultipleItemHeightLg: "32px",
    selectMultipleItemSpacingHalf: "2px",
    selectMultipleDisabledBackground: "#f5f5f5",
    selectMultipleItemDisabledColor: "#bfbfbf",
    selectMultipleItemDisabledBorderColor: "#d9d9d9",
    cascaderBg: "#fff",
    cascaderItemSelectedBg: "#e6f7ff",
    cascaderMenuBg: "#fff",
    cascaderMenuBorderColorSplit: "#f0f0f0",
    cascaderDropdownVerticalPadding: "5px",
    cascaderDropdownEdgeChildVerticalPadding: "4px",
    cascaderDropdownFontSize: "14px",
    cascaderDropdownLineHeight: "22px",
    anchorBg: "transparent",
    anchorBorderColor: "#f0f0f0",
    anchorLinkTop: "7px",
    anchorLinkLeft: "16px",
    anchorLinkPadding: "7px 0 7px 16px",
    tooltipMaxWidth: "250px",
    tooltipColor: "#fff",
    tooltipBg: "rgba(0, 0, 0, 0.75)",
    tooltipArrowWidth: "11.3137085px",
    tooltipDistance: "14.3137085px",
    tooltipArrowColor: "rgba(0, 0, 0, 0.75)",
    popoverBg: "#fff",
    popoverColor: "rgba(0, 0, 0, 0.85)",
    popoverMinWidth: "177px",
    popoverMinHeight: "32px",
    popoverArrowWidth: "11.3137085px",
    popoverArrowColor: "#fff",
    popoverArrowOuterColor: "#fff",
    popoverDistance: "15.3137085px",
    popoverPaddingHorizontal: "16px",
    modalHeaderPaddingVertical: "16px",
    modalHeaderPaddingHorizontal: "24px",
    modalBodyPadding: "24px",
    modalHeaderBg: "#fff",
    modalHeaderPadding: "16px 24px",
    modalHeaderBorderWidth: "1px",
    modalHeaderBorderStyle: "solid",
    modalHeaderTitleLineHeight: "22px",
    modalHeaderTitleFontSize: "16px",
    modalHeaderBorderColorSplit: "#f0f0f0",
    modalHeaderCloseSize: "56px",
    modalContentBg: "#fff",
    modalHeadingColor: "rgba(0, 0, 0, 0.85)",
    modalCloseColor: "rgba(0, 0, 0, 0.45)",
    modalFooterBg: "transparent",
    modalFooterBorderColorSplit: "#f0f0f0",
    modalFooterBorderStyle: "solid",
    modalFooterPaddingVertical: "10px",
    modalFooterPaddingHorizontal: "16px",
    modalFooterBorderWidth: "1px",
    modalMaskBg: "rgba(0, 0, 0, 0.45)",
    modalConfirmBodyPadding: "32px 32px 24px",
    modalConfirmTitleFontSize: "16px",
    progressDefaultColor: "#1890ff",
    progressRemainingColor: "#f5f5f5",
    progressInfoTextColor: "rgba(0, 0, 0, 0.85)",
    progressRadius: "100px",
    progressStepsItemBg: "#f3f3f3",
    progressTextFontSize: "1em",
    progressTextColor: "rgba(0, 0, 0, 0.85)",
    progressCircleTextFontSize: "1em",
    menuInlineToplevelItemHeight: "40px",
    menuItemHeight: "40px",
    menuItemGroupHeight: "1.5715",
    menuCollapsedWidth: "80px",
    menuBg: "#fff",
    menuPopupBg: "#fff",
    menuItemColor: "rgba(0, 0, 0, 0.85)",
    menuInlineSubmenuBg: "#fafafa",
    menuHighlightColor: "#1890ff",
    menuHighlightDangerColor: "#ff4d4f",
    menuItemActiveBg: "#e6f7ff",
    menuItemActiveDangerBg: "#fff1f0",
    menuItemActiveBorderWidth: "3px",
    menuItemGroupTitleColor: "rgba(0, 0, 0, 0.45)",
    menuItemVerticalMargin: "4px",
    menuItemFontSize: "14px",
    menuItemBoundaryMargin: "8px",
    menuItemPaddingHorizontal: "20px",
    menuItemPadding: "0 20px",
    menuHorizontalLineHeight: "46px",
    menuIconMarginRight: "10px",
    menuIconSize: "14px",
    menuIconSizeLg: "16px",
    menuItemGroupTitleFontSize: "14px",
    menuDarkColor: "rgba(255, 255, 255, 0.65)",
    menuDarkDangerColor: "#ff4d4f",
    menuDarkBg: "#001529",
    menuDarkArrowColor: "#fff",
    menuDarkInlineSubmenuBg: "#000c17",
    menuDarkHighlightColor: "#fff",
    menuDarkItemActiveBg: "#1890ff",
    menuDarkItemActiveDangerBg: "#ff4d4f",
    menuDarkSelectedItemIconColor: "#fff",
    menuDarkSelectedItemTextColor: "#fff",
    menuDarkItemHoverBg: "transparent",
    spinDotSizeSm: "14px",
    spinDotSize: "20px",
    spinDotSizeLg: "32px",
    tableBg: "#fff",
    tableHeaderBg: "#fafafa",
    tableHeaderColor: "rgba(0, 0, 0, 0.85)",
    tableHeaderSortBg: "#f5f5f5",
    tableBodySortBg: "#fafafa",
    tableRowHoverBg: "#fafafa",
    tableSelectedRowColor: "inherit",
    tableSelectedRowBg: "#e6f7ff",
    tableBodySelectedSortBg: "#e6f7ff",
    tableSelectedRowHoverBg: "#dcf4ff",
    tableExpandedRowBg: "#fbfbfb",
    tablePaddingVertical: "16px",
    tablePaddingHorizontal: "16px",
    tablePaddingVerticalMd: "12px",
    tablePaddingHorizontalMd: "8px",
    tablePaddingVerticalSm: "8px",
    tablePaddingHorizontalSm: "8px",
    tableBorderColor: "#f0f0f0",
    tableBorderRadiusBase: "2px",
    tableFooterBg: "#fafafa",
    tableFooterColor: "rgba(0, 0, 0, 0.85)",
    tableHeaderBgSm: "#fafafa",
    tableFontSize: "14px",
    tableFontSizeMd: "14px",
    tableFontSizeSm: "14px",
    tableHeaderCellSplitColor: "rgba(0, 0, 0, 0.06)",
    tableHeaderSortActiveBg: "rgba(0, 0, 0, 0.04)",
    tableFixedHeaderSortActiveBg: "#f5f5f5",
    tableHeaderFilterActiveBg: "rgba(0, 0, 0, 0.04)",
    tableFilterBtnsBg: "inherit",
    tableFilterDropdownBg: "#fff",
    tableExpandIconBg: "#fff",
    tableSelectionColumnWidth: "32px",
    tableStickyScrollBarBg: "rgba(0, 0, 0, 0.35)",
    tableStickyScrollBarRadius: "4px",
    tagDefaultBg: "#fafafa",
    tagDefaultColor: "rgba(0, 0, 0, 0.85)",
    tagFontSize: "12px",
    tagLineHeight: "20px",
    pickerBg: "#fff",
    pickerBasicCellHoverColor: "#f5f5f5",
    pickerBasicCellActiveWithRangeColor: "#e6f7ff",
    pickerBasicCellHoverWithRangeColor: "#cbe6ff",
    pickerBasicCellDisabledBg: "rgba(0, 0, 0, 0.04)",
    pickerBorderColor: "#f0f0f0",
    pickerDateHoverRangeBorderColor: "#7ec1ff",
    pickerDateHoverRangeColor: "#cbe6ff",
    pickerTimePanelColumnWidth: "56px",
    pickerTimePanelColumnHeight: "224px",
    pickerTimePanelCellHeight: "28px",
    pickerPanelCellHeight: "24px",
    pickerPanelCellWidth: "36px",
    pickerTextHeight: "40px",
    pickerPanelWithoutTimeCellHeight: "66px",
    calendarBg: "#fff",
    calendarInputBg: "#fff",
    calendarBorderColor: "#fff",
    calendarItemActiveBg: "#e6f7ff",
    calendarColumnActiveBg: "rgba(230, 247, 255, 0.2)",
    calendarFullBg: "#fff",
    calendarFullPanelBg: "#fff",
    carouselDotWidth: "16px",
    carouselDotHeight: "3px",
    carouselDotActiveWidth: "24px",
    badgeHeight: "20px",
    badgeHeightSm: "14px",
    badgeDotSize: "6px",
    badgeFontSize: "12px",
    badgeFontSizeSm: "12px",
    badgeFontWeight: "normal",
    badgeStatusSize: "6px",
    badgeTextColor: "#fff",
    badgeColor: "#ff4d4f",
    rateStarColor: "#fadb14",
    rateStarBg: "#f0f0f0",
    rateStarSize: "20px",
    rateStarHoverScale: "scale(1.1)",
    cardHeadColor: "rgba(0, 0, 0, 0.85)",
    cardHeadBackground: "transparent",
    cardHeadFontSize: "16px",
    cardHeadFontSizeSm: "14px",
    cardHeadPadding: "16px",
    cardHeadPaddingSm: "8px",
    cardHeadHeight: "48px",
    cardHeadHeightSm: "36px",
    cardInnerHeadPadding: "12px",
    cardPaddingBase: "24px",
    cardPaddingBaseSm: "12px",
    cardActionsBackground: "#fff",
    cardActionsLiMargin: "12px 0",
    cardSkeletonBg: "#cfd8dc",
    cardBackground: "#fff",
    cardShadow:
      "0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09)",
    cardRadius: "2px",
    cardHeadTabsMarginBottom: "-17px",
    cardHeadExtraColor: "rgba(0, 0, 0, 0.85)",
    commentBg: "inherit",
    commentPaddingBase: "16px 0",
    commentNestIndent: "44px",
    commentFontSizeBase: "14px",
    commentFontSizeSm: "12px",
    commentAuthorNameColor: "rgba(0, 0, 0, 0.45)",
    commentAuthorTimeColor: "#ccc",
    commentActionColor: "rgba(0, 0, 0, 0.45)",
    commentActionHoverColor: "#595959",
    commentActionsMarginBottom: "inherit",
    commentActionsMarginTop: "12px",
    commentContentDetailPMarginBottom: "inherit",
    tabsCardHeadBackground: "#fafafa",
    tabsCardHeight: "40px",
    tabsCardActiveColor: "#1890ff",
    tabsCardHorizontalPadding: "8px 16px",
    tabsCardHorizontalPaddingSm: "6px 16px",
    tabsCardHorizontalPaddingLg: "7px 16px 6px",
    tabsTitleFontSize: "14px",
    tabsTitleFontSizeLg: "16px",
    tabsTitleFontSizeSm: "14px",
    tabsInkBarColor: "#1890ff",
    tabsBarMargin: "0 0 16px 0",
    tabsHorizontalGutter: "32px",
    tabsHorizontalMargin: "0 0 0 32px",
    tabsHorizontalMarginRtl: "0 0 0 32px",
    tabsHorizontalPadding: "12px 0",
    tabsHorizontalPaddingLg: "16px 0",
    tabsHorizontalPaddingSm: "8px 0",
    tabsVerticalPadding: "8px 24px",
    tabsVerticalMargin: "16px 0 0 0",
    tabsScrollingSize: "32px",
    tabsHighlightColor: "#1890ff",
    tabsHoverColor: "#40a9ff",
    tabsActiveColor: "#096dd9",
    tabsCardGutter: "2px",
    tabsCardTabActiveBorderTop: "2px solid transparent",
    backTopColor: "#fff",
    backTopBg: "rgba(0, 0, 0, 0.45)",
    backTopHoverBg: "rgba(0, 0, 0, 0.85)",
    avatarSizeBase: "32px",
    avatarSizeLg: "40px",
    avatarSizeSm: "24px",
    avatarFontSizeBase: "18px",
    avatarFontSizeLg: "24px",
    avatarFontSizeSm: "14px",
    avatarBg: "#ccc",
    avatarColor: "#fff",
    avatarBorderRadius: "2px",
    avatarGroupOverlapping: "-8px",
    avatarGroupSpace: "3px",
    avatarGroupBorderColor: "#fff",
    switchHeight: "22px",
    switchSmHeight: "16px",
    switchMinWidth: "44px",
    switchSmMinWidth: "28px",
    switchDisabledOpacity: "0.4",
    switchColor: "#1890ff",
    switchBg: "#fff",
    switchShadowColor: "rgba(0, 35, 11, 0.2)",
    switchPadding: "2px",
    switchInnerMarginMin: "7px",
    switchInnerMarginMax: "25px",
    switchSmInnerMarginMin: "5px",
    switchSmInnerMarginMax: "18px",
    paginationItemBg: "#fff",
    paginationItemSize: "32px",
    paginationItemSizeSm: "24px",
    paginationFontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    paginationFontWeightActive: "500",
    paginationItemBgActive: "#fff",
    paginationItemLinkBg: "#fff",
    paginationItemDisabledColorActive: "rgba(0, 0, 0, 0.25)",
    paginationItemDisabledBgActive: "#e6e6e6",
    paginationItemInputBg: "#fff",
    paginationMiniOptionsSizeChangerTop: "0px",
    pageHeaderPadding: "24px",
    pageHeaderPaddingVertical: "16px",
    pageHeaderPaddingBreadcrumb: "12px",
    pageHeaderContentPaddingVertical: "12px",
    pageHeaderBackColor: "#000",
    pageHeaderGhostBg: "inherit",
    pageHeaderHeadingTitle: "20px",
    pageHeaderHeadingSubTitle: "14px",
    pageHeaderTabsTabFontSize: "16px",
    breadcrumbBaseColor: "rgba(0, 0, 0, 0.45)",
    breadcrumbLastItemColor: "rgba(0, 0, 0, 0.85)",
    breadcrumbFontSize: "14px",
    breadcrumbIconFontSize: "14px",
    breadcrumbLinkColor: "rgba(0, 0, 0, 0.45)",
    breadcrumbLinkColorHover: "#40a9ff",
    breadcrumbSeparatorColor: "rgba(0, 0, 0, 0.45)",
    breadcrumbSeparatorMargin: "0 8px",
    sliderMargin: "10px 6px 10px",
    sliderRailBackgroundColor: "#f5f5f5",
    sliderRailBackgroundColorHover: "#e1e1e1",
    sliderTrackBackgroundColor: "#91d5ff",
    sliderTrackBackgroundColorHover: "#69c0ff",
    sliderHandleBorderWidth: "2px",
    sliderHandleBackgroundColor: "#fff",
    sliderHandleColor: "#91d5ff",
    sliderHandleColorHover: "#69c0ff",
    sliderHandleColorFocus: "#46a6ff",
    sliderHandleColorFocusShadow: "rgba(24, 144, 255, 0.12)",
    sliderHandleColorTooltipOpen: "#1890ff",
    sliderHandleSize: "14px",
    sliderHandleMarginTop: "-5px",
    sliderHandleShadow: "0",
    sliderDotBorderColor: "#f0f0f0",
    sliderDotBorderColorActive: "#8cc8ff",
    sliderDisabledColor: "rgba(0, 0, 0, 0.25)",
    sliderDisabledBackgroundColor: "#fff",
    treeBg: "#fff",
    treeTitleHeight: "24px",
    treeChildPadding: "18px",
    treeDirectorySelectedColor: "#fff",
    treeDirectorySelectedBg: "#1890ff",
    treeNodeHoverBg: "#f5f5f5",
    treeNodeSelectedBg: "#bae7ff",
    collapseHeaderPadding: "12px 16px",
    collapseHeaderPaddingExtra: "40px",
    collapseHeaderBg: "#fafafa",
    collapseContentPadding: "16px",
    collapseContentBg: "#fff",
    collapseHeaderArrowLeft: "16px",
    skeletonColor: "rgba(190, 190, 190, 0.2)",
    skeletonToColor: "rgba(129, 129, 129, 0.24)",
    skeletonParagraphMarginTop: "28px",
    skeletonParagraphLiMarginTop: "16px",
    skeletonParagraphLiHeight: "16px",
    skeletonTitleHeight: "16px",
    skeletonTitleParagraphMarginTop: "24px",
    transferHeaderHeight: "40px",
    transferItemHeight: "32px",
    transferDisabledBg: "#f5f5f5",
    transferListHeight: "200px",
    transferItemHoverBg: "#f5f5f5",
    transferItemSelectedHoverBg: "#dcf4ff",
    transferItemPaddingVertical: "6px",
    transferListSearchIconTop: "12px",
    messageNoticeContentPadding: "10px 16px",
    messageNoticeContentBg: "#fff",
    waveAnimationWidth: "6px",
    alertSuccessBorderColor: "#b7eb8f",
    alertSuccessBgColor: "#f6ffed",
    alertSuccessIconColor: "#52c41a",
    alertInfoBorderColor: "#91d5ff",
    alertInfoBgColor: "#e6f7ff",
    alertInfoIconColor: "#1890ff",
    alertWarningBorderColor: "#ffe58f",
    alertWarningBgColor: "#fffbe6",
    alertWarningIconColor: "#faad14",
    alertErrorBorderColor: "#ffccc7",
    alertErrorBgColor: "#fff2f0",
    alertErrorIconColor: "#ff4d4f",
    alertMessageColor: "rgba(0, 0, 0, 0.85)",
    alertTextColor: "rgba(0, 0, 0, 0.85)",
    alertCloseColor: "rgba(0, 0, 0, 0.45)",
    alertCloseHoverColor: "rgba(0, 0, 0, 0.75)",
    alertNoIconPaddingVertical: "8px",
    alertWithDescriptionNoIconPaddingVertical: "15px",
    alertWithDescriptionPaddingVertical: "15px",
    alertWithDescriptionPadding: "15px 15px 15px 24px",
    alertIconTop: "12.0005px",
    alertWithDescriptionIconSize: "24px",
    listHeaderBackground: "transparent",
    listFooterBackground: "transparent",
    listEmptyTextPadding: "16px",
    listItemPadding: "12px 0",
    listItemPaddingSm: "8px 16px",
    listItemPaddingLg: "16px 24px",
    listItemMetaMarginBottom: "16px",
    listItemMetaAvatarMarginRight: "16px",
    listItemMetaTitleMarginBottom: "12px",
    listCustomizeCardBg: "#fff",
    listItemMetaDescriptionFontSize: "14px",
    statisticTitleFontSize: "14px",
    statisticContentFontSize: "24px",
    statisticUnitFontSize: "24px",
    statisticFontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    drawerHeaderPadding: "16px 24px",
    drawerBodyPadding: "24px",
    drawerBg: "#fff",
    drawerFooterPaddingVertical: "10px",
    drawerFooterPaddingHorizontal: "16px",
    drawerHeaderCloseSize: "56px",
    drawerTitleFontSize: "16px",
    drawerTitleLineHeight: "22px",
    timelineWidth: "2px",
    timelineColor: "#f0f0f0",
    timelineDotBorderWidth: "2px",
    timelineDotColor: "#1890ff",
    timelineDotBg: "#fff",
    timelineItemPaddingBottom: "20px",
    typographyTitleFontWeight: "600",
    typographyTitleMarginTop: "1.2em",
    typographyTitleMarginBottom: "0.5em",
    uploadActionsColor: "rgba(0, 0, 0, 0.45)",
    processTailColor: "#f0f0f0",
    stepsNavArrowColor: "rgba(0, 0, 0, 0.25)",
    stepsBackground: "#fff",
    stepsIconSize: "32px",
    stepsIconCustomSize: "32px",
    stepsIconCustomTop: "0px",
    stepsIconCustomFontSize: "24px",
    stepsIconTop: "-0.5px",
    stepsIconFontSize: "16px",
    stepsIconMargin: "0 8px 0 0",
    stepsTitleLineHeight: "32px",
    stepsSmallIconSize: "24px",
    stepsSmallIconMargin: "0 8px 0 0",
    stepsDotSize: "8px",
    stepsDotTop: "2px",
    stepsCurrentDotSize: "10px",
    stepsDescriptionMaxWidth: "140px",
    stepsNavContentMaxWidth: "auto",
    stepsVerticalIconWidth: "16px",
    stepsVerticalTailWidth: "16px",
    stepsVerticalTailWidthSm: "12px",
    notificationBg: "#fff",
    notificationPaddingVertical: "16px",
    notificationPaddingHorizontal: "24px",
    resultTitleFontSize: "24px",
    resultSubtitleFontSize: "14px",
    resultIconFontSize: "72px",
    resultExtraMargin: "24px 0 0 0",
    imageSizeBase: "48px",
    imageFontSizeBase: "24px",
    imageBg: "#f5f5f5",
    imageColor: "#fff",
    imageMaskFontSize: "16px",
    imagePreviewOperationSize: "18px",
    imagePreviewOperationColor: "rgba(255, 255, 255, 0.85)",
    imagePreviewOperationDisabledColor: "rgba(255, 255, 255, 0.25)",
  },
  cT = k({ theme: j, toggleTheme(a) {} }),
  aL = () => aZ(cT),
  aM = ({ children: a, isPreview: b }) => {
    let [c, e] = aT(j),
      f = (b) => {
        let a = { ...j, ...b };
        bb.config({ theme: a, prefixCls: "jitera" }), e(a);
      },
      d = aS(() => ({ theme: c, toggleTheme: f }), [c]);
    return aP(bb, {
      prefixCls: "jitera",
      iconPrefixCls: "jiteraicon",
      children: aP(cT.Provider, {
        value: d,
        children: aQ(aR, { children: [a, aP(aJ, {}), b ? void 0 : aP(b$, {})] }),
      }),
    });
  },
  cU = b(m)`
  && {
    .jitera-drawer-content-wrapper {
      box-shadow: inherit;
    }
    .jitera-drawer-content {
      background-color: inherit;
    }
    .jitera-drawer-body {
      padding: inherit;
      font-size: inherit;
      line-height: inherit;
      word-wrap: inherit;
    }
  }
`;
!(function (a) {
  (a.TOP = "top"), (a.RIGHT = "right"), (a.BOTTOM = "bottom"), (a.LEFT = "left");
})(g || (g = {}));
let cV = [],
  aN = {
    show(b, { position: c, ...d } = {}) {
      let e = document.createDocumentFragment();
      function a(a = !0) {
        setTimeout(() => {
          bZ(
            aP(aM, {
              children: aP(cU, {
                visible: a,
                closable: !1,
                title: null,
                placement: c,
                ...d,
                children: b,
              }),
            }),
            e
          ),
            a
              ? setTimeout(() => {
                  var a;
                  let b = document.querySelectorAll(".jitera-drawer");
                  null === (a = Array.from(b).at(b.length - 1)) ||
                    void 0 === a ||
                    a.classList.add(`jitera-drawer-${cV.length}`);
                })
              : setTimeout(() => {
                  var a, b, c;
                  let d = document.querySelectorAll(".jitera-drawer");
                  null === (a = Array.from(d).at(d.length - 1)) ||
                    void 0 === a ||
                    a.classList.add(`jitera-drawer-${cV.length + 1}`),
                    null ===
                      (c =
                        null === (b = document.querySelector(`.jitera-drawer-${cV.length + 1}`)) ||
                        void 0 === b
                          ? void 0
                          : b.parentElement) ||
                      void 0 === c ||
                      c.remove();
                });
        });
      }
      cV.push(a), a();
    },
    hide() {
      var a;
      null === (a = cV.pop()) || void 0 === a || a(!1);
    },
    hideAll() {
      cV.forEach((a) => {
        a(!1);
      });
    },
  },
  cW = b.div`
  .otp-cell {
    margin-right: 16px;

    &:last-child {
      margin-right: 0;
    }
  }
`;
!(function (a) {
  (a.Box = "box"), (a.Underline = "underline");
})(h || (h = {}));
let aO = a.forwardRef((g, i) => {
  let {
      isPreview: j,
      responsiveVisibility: k,
      className: l,
      pinCount: m = 4,
      autoFocus: n,
      errorMessage: c,
      style: o = { justifyContent: "center" },
      cellTextStyle: a = {},
      cellStyle: b = {},
      otpInputType: p = "box",
      ...q
    } = g,
    { theme: d } = aL(),
    e = {};
  p === h.Underline && (e = { borderLeft: "unset", borderRight: "unset", borderTop: "unset" });
  let f = {
    ...e,
    width: "100%",
    height: "100%",
    fontSize: "1rem",
    borderRadius: 4,
    border: `${d.borderWidthBase} solid ${d.borderColorBase}`,
  };
  b3(b) && b3(a) && (f = { ...b, ...a });
  let { classNames: r } = b0({ className: l, responsiveVisibility: k });
  return aQ(cW, {
    className: r,
    ref: i,
    children: [
      aP(b_, {
        isDisabled: j,
        ...q,
        numInputs: m,
        shouldAutoFocus: n,
        containerStyle: o,
        inputStyle: f,
        className: b4("otp-cell", b, a),
      }),
      !!c && aP(ag, { type: "danger", children: c }),
    ],
  });
});
export {
  C as Box,
  H as Button,
  aA as Carousel,
  av as Checkbox,
  I as Col,
  J as Content,
  aG as DEFAULT_TABLE_BORDER_STYLES,
  ax as DateTimePicker,
  az as Divider,
  aN as Drawer,
  g as DrawerPositionEnum,
  K as Footer,
  M as Form,
  e as HamburgerDrawerPlacementEnum,
  ay as HamburgerMenu,
  N as Header,
  G as Icon,
  ah as IconSet,
  O as Image,
  aw as ImagePicker,
  aj as Input,
  ak as Layout,
  as as List,
  al as Menu,
  c as MenuIconPosition,
  am as MenuItem,
  aK as Modal,
  aJ as ModalComponent,
  f as ModalPositionEnum,
  aO as OTPInput,
  h as OTPInputType,
  ao as Page,
  d as PickerEnum,
  at as Radio,
  aF as RichText,
  ap as Row,
  ar as Select,
  aq as Sider,
  an as SubMenu,
  aB as Tab,
  aI as Table,
  ag as Text,
  au as TextArea,
  ai as TextTypeEnum,
  aM as ThemeProvider,
  E as assertUnreachable,
  j as defaultTheme,
  D as getIconComponent,
  F as getIconSet,
  aL as useTheme,
};
