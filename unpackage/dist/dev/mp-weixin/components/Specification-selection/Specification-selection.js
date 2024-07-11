"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "Specification-selection",
  props: {
    close: Function,
    sum: Number,
    list: [Array, Object],
    specs: [Array, Object],
    quantityPlus: Function,
    quantityReduce: Function,
    btn: String,
    SelectContent: Object,
    skus: [Array, Object]
  },
  setup(__props) {
    const popos = __props;
    console.log(popos.specs);
    console.log(popos.skus);
    const Select = common_vendor.ref([""]);
    const commodity = common_vendor.ref("");
    const Sele = common_vendor.ref({});
    const getskuId = (name) => {
      const foundItems = popos.skus.filter((item) => item.specs.some((spec) => spec.valueName === name));
      const newData = foundItems.map((item) => ({
        ...item,
        specs: item.specs.filter((spec) => spec.valueName !== name)
      }));
      console.log(foundItems);
      Sele.value = newData;
      console.log(Sele.value, name);
    };
    return (_ctx, _cache) => {
      return {
        a: __props.list.mainPictures[0],
        b: common_vendor.t(__props.list.name),
        c: common_vendor.t(__props.list.price),
        d: common_vendor.t(__props.list.salesCount),
        e: common_vendor.f(__props.specs, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.f(item.values, (index, k1, i1) => {
              return {
                a: common_vendor.t(index.name),
                b: common_vendor.o(($event) => getskuId(index.name))
              };
            })
          };
        }),
        f: common_vendor.f(Sele.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.id),
            b: common_vendor.f(item.specs, (index, k1, i1) => {
              return {
                a: common_vendor.t(index.valueName),
                b: common_vendor.o(($event) => getskuId(index.name))
              };
            })
          };
        }),
        g: common_vendor.f(Select.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.title)
          };
        }),
        h: common_vendor.o((...args) => __props.quantityReduce && __props.quantityReduce(...args)),
        i: common_vendor.t(__props.sum),
        j: common_vendor.o((...args) => __props.quantityPlus && __props.quantityPlus(...args)),
        k: common_vendor.t(__props.btn),
        l: common_vendor.o(($event) => __props.close(commodity.value, __props.btn, Select.value))
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/uniapp/vue3-rabbit/components/Specification-selection/Specification-selection.vue"]]);
wx.createComponent(Component);
