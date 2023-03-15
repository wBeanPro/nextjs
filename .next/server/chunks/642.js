"use strict";
exports.id = 642;
exports.ids = [642];
exports.modules = {

/***/ 6642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bd": () => (/* binding */ getTopEarning),
/* harmony export */   "SD": () => (/* binding */ requestReward),
/* harmony export */   "ge": () => (/* binding */ walletLogin),
/* harmony export */   "vD": () => (/* binding */ setTrackInfo),
/* harmony export */   "x4": () => (/* binding */ login),
/* harmony export */   "xZ": () => (/* binding */ getVisitors)
/* harmony export */ });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9394);
 // const baseUrl = "https://gamifly.co:3001";

const baseUrl = "https://app.gamifly.co:3001";
const ajax = new _utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(baseUrl); // 使用钱包登陆

const walletLogin = {
  fetcher: params => ajax.post("/auth/walletLogin", params),
  key: "/auth/walletLogin"
}; // 第三方登录后调用自家登陆

const login = {
  fetcher: params => ajax.post("/auth/login", params),
  key: "/auth/login"
}; // 用户登录后，每十分钟调用一次

const requestReward = {
  fetcher: params => ajax.post("/api/requestReward", params),
  key: "/api/requestReward"
}; // 记录用户在项目中的停留时间

const setTrackInfo = {
  fetcher: params => ajax.post("/api/setTrackInfo", params),
  key: "/api/setTrackInfo"
}; // 获取Top earning

const getTopEarning = {
  fetcher: () => ajax.get("/api/getTopearning"),
  key: "/api/getTopearning"
}; // 获取Visitors

const getVisitors = {
  fetcher: () => ajax.get("/api/getVisitors"),
  key: "/api/getVisitors"
};

/***/ })

};
;