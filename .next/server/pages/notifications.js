"use strict";
(() => {
var exports = {};
exports.id = 769;
exports.ids = [769];
exports.modules = {

/***/ 1395:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5444);
/* harmony import */ var _components_MessageList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7084);
/* harmony import */ var _apis_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5937);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5941);
/* harmony import */ var _stores_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3294);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__, _stores_global__WEBPACK_IMPORTED_MODULE_4__, _components_MessageList__WEBPACK_IMPORTED_MODULE_6__]);
([swr__WEBPACK_IMPORTED_MODULE_2__, _stores_global__WEBPACK_IMPORTED_MODULE_4__, _components_MessageList__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function App() {
  const {
    userInfo
  } = (0,_stores_global__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
  const {
    0: newMessageList,
    1: setNewMessageList
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: previousMessageList,
    1: setPreviousMessageList
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    data: getNotificationsData
  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])(userInfo && userInfo !== null && userInfo !== void 0 && userInfo.id ? [_apis_notifications__WEBPACK_IMPORTED_MODULE_5__/* .getNotifications.key */ .T.key] : null, _ => _apis_notifications__WEBPACK_IMPORTED_MODULE_5__/* .getNotifications.fetcher */ .T.fetcher(userInfo === null || userInfo === void 0 ? void 0 : userInfo.id), {
    revalidateOnFocus: false
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (getNotificationsData && getNotificationsData.length > 0) {
      const noList = [];
      const list = [];
      getNotificationsData.map(item => {
        (item === null || item === void 0 ? void 0 : item.status) === 0 ? noList.push(item) : list.push(item);
      });
      setNewMessageList(noList);
      setPreviousMessageList(list);
    }
  }, [getNotificationsData]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
    w: "full",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      fontFamily: "Nunito",
      textStyle: "14",
      fontWeight: "400",
      color: "white.500",
      mb: "10px",
      children: "New"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_MessageList__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      messageList: newMessageList
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      fontFamily: "Nunito",
      textStyle: "14",
      fontWeight: "400",
      color: "white.500",
      my: "10px",
      children: "Previous"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_MessageList__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      messageList: previousMessageList
    })]
  });
}

const getServerSideProps = async ctx => {
  return {
    props: _objectSpread({}, await (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_7__/* .getI18nSSRProps */ .q)(ctx, ["home"]))
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3294:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6912);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__]);
zustand__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const globalStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__["default"])(() => ({
  userInfo: {},
  dataRadom: 0,
  globalAccount: "",
  showInviteFriend: false
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (globalStore);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 5460:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ }),

/***/ 6912:
/***/ ((module) => {

module.exports = import("zustand");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [78,444,84], () => (__webpack_exec__(1395)));
module.exports = __webpack_exports__;

})();