"use strict";
const common_vendor = require("../../common/vendor.js");
const api_rabbit = require("../../api/rabbit.js");
if (!Array) {
  const _easycom_List_component2 = common_vendor.resolveComponent("List-component");
  _easycom_List_component2();
}
const _easycom_List_component = () => "../../components/List-component/List-component.js";
if (!Math) {
  _easycom_List_component();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const login = async () => {
      const res = await api_rabbit.AipGetLogin();
      console.log(res.result.token);
      common_vendor.index.setStorageSync("token", res.result.token);
    };
    login();
    const bannerList = common_vendor.ref([]);
    const geibanner = async () => {
      const res = await api_rabbit.AipGetBanner();
      bannerList.value = res.result;
    };
    geibanner();
    const fresh = common_vendor.ref([]);
    const getfresh = async () => {
      const res = await api_rabbit.AipGetFresh();
      fresh.value = res.result;
    };
    getfresh();
    const brand = common_vendor.ref([]);
    const getbrand = async () => {
      const res = await api_rabbit.AipGetbrand();
      brand.value = res.result;
    };
    getbrand();
    const hot = common_vendor.ref([]);
    const gethot = async () => {
      const res = await api_rabbit.AipGethot();
      hot.value = res.result;
    };
    gethot();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(bannerList.value, (item, k0, i0) => {
          return {
            a: item.imgUrl,
            b: item.id
          };
        }),
        b: common_vendor.p({
          fresh: fresh.value
        }),
        c: common_vendor.p({
          fresh: brand.value
        }),
        d: common_vendor.p({
          fresh: hot.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "D:/uniapp/vue3-rabbit/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
