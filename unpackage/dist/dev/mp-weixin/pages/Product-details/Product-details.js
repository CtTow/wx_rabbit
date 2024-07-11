"use strict";
const common_vendor = require("../../common/vendor.js");
const api_rabbit = require("../../api/rabbit.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_goods_nav2 = common_vendor.resolveComponent("uni-goods-nav");
  const _easycom_Specification_selection2 = common_vendor.resolveComponent("Specification-selection");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_goods_nav2 + _easycom_Specification_selection2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_goods_nav = () => "../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.js";
const _easycom_Specification_selection = () => "../../components/Specification-selection/Specification-selection.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_goods_nav + _easycom_Specification_selection + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "Product-details",
  setup(__props) {
    const options = common_vendor.ref([
      {
        icon: "headphones",
        text: "客服"
      },
      {
        icon: "cart",
        text: "购物车",
        info: 3
      }
    ]);
    const buttonGroup = common_vendor.ref([
      {
        text: "加入购物车",
        backgroundColor: "#ff0000",
        color: "#fff"
      },
      {
        text: "立即购买",
        backgroundColor: "#ffa200",
        color: "#fff"
      }
    ]);
    const onClick = (e) => {
    };
    const buttonClick = (e) => {
      console.log(e.content.text, e.index);
      open(e.content.text, e.index);
    };
    const GoodsList = common_vendor.ref([]);
    const getGoods = async (id) => {
      const res = await api_rabbit.AipGetGoods(id);
      console.log(res.result);
      GoodsList.value = res.result;
    };
    common_vendor.onLoad((e) => {
      console.log(e.id);
      getGoods(e.id);
    });
    const MaxImage = common_vendor.ref("");
    const MiniImage = (image) => {
      console.log(image);
      MaxImage.value = image;
    };
    const specifications = common_vendor.ref(null);
    const btn = common_vendor.ref("");
    const open = (btnName) => {
      btn.value = btnName;
      specifications.value.open("buttom");
    };
    const skuid = common_vendor.ref({});
    const Select = common_vendor.ref();
    const confirm = async (skuiId, btn2, SelecT) => {
      skuid.value = { skuId: skuiId, count: quantity.value };
      if (skuiId === "") {
        return common_vendor.index.showToast({
          title: "请选规格",
          icon: "none",
          duration: 2e3
        });
      }
      Select.value = SelecT;
      specifications.value.close();
      const res = await api_rabbit.AipGetcart(skuid.value);
      console.log(skuid.value);
      console.log(res);
    };
    const quantity = common_vendor.ref(1);
    const quantityPlus = () => {
      quantity.value++;
    };
    const quantityReduce = () => {
      if (quantity.value <= 1) {
        return;
      }
      quantity.value--;
    };
    return (_ctx, _cache) => {
      var _a;
      return common_vendor.e({
        a: GoodsList.value
      }, GoodsList.value ? {
        b: MaxImage.value || GoodsList.value.mainPictures[0],
        c: common_vendor.f(GoodsList.value.mainPictures, (item, k0, i0) => {
          return {
            a: item,
            b: common_vendor.o(($event) => MiniImage(item))
          };
        }),
        d: common_vendor.t(GoodsList.value.name),
        e: common_vendor.t(GoodsList.value.desc),
        f: common_vendor.t(GoodsList.value.price),
        g: common_vendor.t(GoodsList.value.oldPrice),
        h: common_vendor.o(($event) => open("确定")),
        i: common_vendor.p({
          type: "right",
          size: "15"
        }),
        j: common_vendor.f((_a = GoodsList.value.details) == null ? void 0 : _a.pictures, (item, k0, i0) => {
          return {
            a: item
          };
        }),
        k: common_vendor.o(onClick),
        l: common_vendor.o(buttonClick),
        m: common_vendor.p({
          fill: true,
          options: options.value,
          buttonGroup: buttonGroup.value
        }),
        n: common_vendor.p({
          close: confirm,
          sum: quantity.value,
          list: GoodsList.value,
          specs: GoodsList.value.specs,
          quantityPlus,
          quantityReduce,
          btn: btn.value,
          SelectContent: Select.value,
          skus: GoodsList.value.skus
        }),
        o: common_vendor.sr(specifications, "3283a354-2", {
          "k": "specifications"
        }),
        p: common_vendor.p({
          ["background-color"]: "#fff",
          type: "bottom",
          ["border-radius"]: "10px 10px 0 0"
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/uniapp/vue3-rabbit/pages/Product-details/Product-details.vue"]]);
wx.createPage(MiniProgramPage);
