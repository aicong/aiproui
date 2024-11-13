"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("./style/index.css");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{ name: "ProButton" },
  __name: "button",
  props: {
    type: {}
  },
  setup(__props) {
    const buttonProps = __props;
    const buttonStyle = vue.computed(() => {
      return { [`pro-button--${buttonProps.type}`]: buttonProps.type };
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("button", {
        class: vue.normalizeClass(["pro-button", buttonStyle.value])
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.createTextVNode("默认按钮")
        ])
      ], 2);
    };
  }
});
exports.default = _sfc_main;
