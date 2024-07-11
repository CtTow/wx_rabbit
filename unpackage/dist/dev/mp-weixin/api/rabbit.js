"use strict";
const utils_request = require("../utils/request.js");
function AipGetLogin() {
  return utils_request.request({
    url: "/login",
    method: "POST",
    data: {
      "account": "xiaotuxian001",
      "password": "123456"
    }
  });
}
function AipGethead() {
  return utils_request.request({
    url: "/home/category/head"
  });
}
function AipGetGoods(id) {
  return utils_request.request({
    url: "/goods",
    data: {
      id
    }
  });
}
function AipGetBanner() {
  return utils_request.request({
    url: "/home/banner"
  });
}
function AipGetFresh() {
  return utils_request.request({
    url: "/home/new"
  });
}
function AipGetbrand() {
  return utils_request.request({
    url: "/home/brand",
    data: {
      limit: 4
    }
  });
}
function AipGethot() {
  return utils_request.request({
    url: "/home/hot"
  });
}
function AipGetcategory(id) {
  return utils_request.request({
    url: "/category",
    data: {
      id
    }
  });
}
function AipGetcart(data) {
  return utils_request.request({
    url: "/member/cart",
    method: "POST",
    data
  });
}
exports.AipGetBanner = AipGetBanner;
exports.AipGetFresh = AipGetFresh;
exports.AipGetGoods = AipGetGoods;
exports.AipGetLogin = AipGetLogin;
exports.AipGetbrand = AipGetbrand;
exports.AipGetcart = AipGetcart;
exports.AipGetcategory = AipGetcategory;
exports.AipGethead = AipGethead;
exports.AipGethot = AipGethot;
