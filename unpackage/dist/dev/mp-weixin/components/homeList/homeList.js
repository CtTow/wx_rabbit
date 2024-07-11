"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "homeList",
  props: {
    homelist: {
      type: Object
      // default:
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.homelist.children, (item, k0, i0) => {
          return {
            a: item.picture,
            b: common_vendor.t(item.name),
            c: item.id
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-48997ede"], ["__file", "D:/uniapp/vue3-rabbit/components/homeList/homeList.vue"]]);
wx.createComponent(Component);
