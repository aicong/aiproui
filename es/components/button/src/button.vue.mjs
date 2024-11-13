import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, renderSlot, createTextVNode } from "vue";
import "./style/index.css";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "ProButton" },
  __name: "button",
  props: {
    type: {}
  },
  setup(__props) {
    const buttonProps = __props;
    const buttonStyle = computed(() => {
      return { [`pro-button--${buttonProps.type}`]: buttonProps.type };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(["pro-button", buttonStyle.value])
      }, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          createTextVNode("默认按钮")
        ])
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
