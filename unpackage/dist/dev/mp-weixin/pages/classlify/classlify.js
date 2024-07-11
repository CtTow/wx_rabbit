"use strict";
const common_vendor = require("../../common/vendor.js");
const api_rabbit = require("../../api/rabbit.js");
const utils_ArrObj = require("../../utils/ArrObj.js");
const _sfc_main = {
  __name: "classlify",
  setup(__props) {
    const ListId = common_vendor.ref("");
    const list = common_vendor.ref([]);
    common_vendor.onLoad((e) => {
      ListId.value = e.id;
      Getcategory(ListId.value);
    });
    const Getcategory = async (id) => {
      const res = await api_rabbit.AipGetcategory(id);
      list.value = utils_ArrObj.ArrPushObj(res.result.children);
    };
    const GOProduct = (id) => {
      common_vendor.index.navigateTo({
        url: "/pages/Product-details/Product-details?id=" + id
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(list.value, (item, k0, i0) => {
          return {
            a: item.picture,
            b: common_vendor.o(($event) => GOProduct(item.id)),
            c: common_vendor.t(item.name),
            d: common_vendor.t(item.price)
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/uniapp/vue3-rabbit/pages/classlify/classlify.vue"]]);
wx.createPage(MiniProgramPage);
