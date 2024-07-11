"use strict";
const common_vendor = require("../../common/vendor.js");
const api_rabbit = require("../../api/rabbit.js");
if (!Array) {
  const _easycom_homeList2 = common_vendor.resolveComponent("homeList");
  _easycom_homeList2();
}
const _easycom_homeList = () => "../../components/homeList/homeList.js";
if (!Math) {
  _easycom_homeList();
}
const _sfc_main = {
  __name: "classList",
  setup(__props) {
    const home = common_vendor.ref([]);
    const gethomeList = async () => {
      const res = await api_rabbit.AipGethead();
      home.value = res.result;
    };
    gethomeList();
    const goClasslify = (id) => {
      common_vendor.index.navigateTo({
        url: "/pages/classlify/classlify?id=" + id
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(home.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: "104357ab-0-" + i0,
            c: common_vendor.p({
              homelist: item
            }),
            d: item.id,
            e: common_vendor.o(($event) => goClasslify(item.id), item.id)
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-104357ab"], ["__file", "D:/uniapp/vue3-rabbit/pages/classList/classList.vue"]]);
wx.createPage(MiniProgramPage);
