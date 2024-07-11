"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "List-component",
  props: {
    fresh: {
      type: Array,
      default: []
    }
  },
  setup(__props) {
    const GOProduct = (id) => {
      common_vendor.index.navigateTo({
        url: "/pages/Product-details/Product-details?id=" + id
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.fresh, (item, k0, i0) => {
          return common_vendor.e({
            a: item.picture,
            b: item.name
          }, item.name ? common_vendor.e({
            c: common_vendor.t(item.name),
            d: item.price
          }, item.price ? {
            e: common_vendor.t(item.price)
          } : {}) : {
            f: common_vendor.t(item.name || item.title)
          }, {
            g: item.id,
            h: common_vendor.o(($event) => GOProduct(item.id), item.id)
          });
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-01a2deee"], ["__file", "D:/uniapp/vue3-rabbit/components/List-component/List-component.vue"]]);
wx.createComponent(Component);
