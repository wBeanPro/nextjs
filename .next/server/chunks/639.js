"use strict";
exports.id = 639;
exports.ids = [639];
exports.modules = {

/***/ 1639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cz": () => (/* binding */ setReferral),
/* harmony export */   "D0": () => (/* binding */ getReferralCount),
/* harmony export */   "O$": () => (/* binding */ getGamiflyWalletTransactions),
/* harmony export */   "Wg": () => (/* binding */ getWithdrawableAmount),
/* harmony export */   "bG": () => (/* binding */ getUserInfo),
/* harmony export */   "hq": () => (/* binding */ getMyNFTs),
/* harmony export */   "no": () => (/* binding */ getGamiflyWalletBalance),
/* harmony export */   "pS": () => (/* binding */ getRewardAmount),
/* harmony export */   "py": () => (/* binding */ getReferralCode)
/* harmony export */ });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9394);
 // const baseUrl = "https://gamifly.co:3001";

const baseUrl = "https://app.gamifly.co:3001";
const ajax = new _utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(baseUrl); // 获取用户详情

const getUserInfo = {
  fetcher: params => ajax.get(`/api/getUserInfo/${params}`),
  key: "/api/getUserInfo"
}; // 获取钱包余额

const getGamiflyWalletBalance = {
  fetcher: params => ajax.get(`/api/getGamiflyWalletBalance/${params}`),
  key: "/api/getGamiflyWalletBalance"
}; // 获取我的转账记录

const getGamiflyWalletTransactions = {
  fetcher: params => ajax.get(`/api/getGamiflyWalletTransactions/${params}`),
  key: "/api/getGamiflyWalletTransactions"
}; // 获取我的NFTs

const getMyNFTs = {
  fetcher: params => ajax.get(`/api/getMyNFTs/${params}`),
  key: "/api/getMyNFTs"
}; // 获取邀请码

const getReferralCode = {
  fetcher: params => ajax.get(`/api/getReferralCode/${params}`),
  key: "/api/getReferralCode"
}; // 设置邀请码

const setReferral = {
  fetcher: params => ajax.post("/api/setReferral", params),
  key: "/api/getReferralCode"
}; // 获取邀请记录

const getReferralCount = {
  fetcher: params => ajax.get(`/api/getReferralCount/${params}`),
  key: "/api/getReferralCount"
}; // 获取奖励余额

const getRewardAmount = {
  fetcher: params => ajax.get(`/api/getRewardAmount/${params}`),
  key: "/api/getRewardAmount"
};
const getWithdrawableAmount = {
  fetcher: params => ajax.get(`/api/getWithdrawableAmount/${params}`),
  key: "/api/getWithdrawableAmount"
};

/***/ })

};
;