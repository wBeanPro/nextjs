"use strict";
exports.id = 116;
exports.ids = [116];
exports.modules = {

/***/ 1116:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_px2vw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6483);
/* harmony import */ var _BaseModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1803);
/* harmony import */ var _BaseButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5742);
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7384);
/* harmony import */ var _stores_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3294);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_global__WEBPACK_IMPORTED_MODULE_6__]);
_stores_global__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










function Index({
  logOut,
  setLogOut,
  confirmLogOut
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_BaseModal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    isShow: logOut,
    close: () => setLogOut(false),
    justifyContent: "center",
    alignItems: "center",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      flexDir: "column",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
        fontFamily: "Orbitron",
        fontWeight: "600",
        textAlign: "center",
        color: "white.100",
        fontSize: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(22),
          lg: "22px"
        },
        mb: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(50),
          lg: "100px"
        },
        children: "Log out?"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        justifyContent: "space-between",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_BaseButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          w: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(130),
            lg: "130px"
          },
          h: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(52),
            lg: "52px"
          },
          mr: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(50),
            lg: "50px"
          },
          fontFamily: "Nunito",
          fontSize: "16px",
          fontWeight: "600",
          onClick: () => setLogOut(false),
          children: "Cancel"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_BaseButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          w: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(130),
            lg: "130px"
          },
          h: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(52),
            lg: "52px"
          },
          fontFamily: "Nunito",
          fontSize: "16px",
          fontWeight: "600",
          bgColor: "transparent",
          border: "2px solid",
          borderColor: "blue.100",
          color: "blue.100",
          onClick: async () => {
            var _window$walletConnect;

            (_window$walletConnect = window.walletConnectProvider) === null || _window$walletConnect === void 0 ? void 0 : _window$walletConnect.disconnect();
            _stores_global__WEBPACK_IMPORTED_MODULE_6__/* ["default"].setState */ .Z.setState({
              userInfo: null
            });
            window.walletConnectProvider = null;
            setLogOut(false);
            (0,_utils_storage__WEBPACK_IMPORTED_MODULE_7__/* .deleteStore */ .Av)("userInfo");
            confirmLogOut === null || confirmLogOut === void 0 ? void 0 : confirmLogOut();
            (0,_utils_storage__WEBPACK_IMPORTED_MODULE_7__/* .deleteStore */ .Av)("referralCode");
            (0,_utils_storage__WEBPACK_IMPORTED_MODULE_7__/* .deleteStore */ .Av)("friendCode");
          },
          children: "Log out"
        })]
      })]
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Index));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;