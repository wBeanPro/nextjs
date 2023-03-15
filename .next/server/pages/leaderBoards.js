"use strict";
(() => {
var exports = {};
exports.id = 276;
exports.ids = [276];
exports.modules = {

/***/ 3269:
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
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5444);
/* harmony import */ var _components_VIP__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1229);
/* harmony import */ var _components_TopReferrals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6596);
/* harmony import */ var _utils_px2vw__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6483);
/* harmony import */ var _assets_imgs_arrows_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5658);
/* harmony import */ var _assets_imgs_arrows_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_arrows_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5941);
/* harmony import */ var _apis_leaderBoards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2300);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_3__]);
swr__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














function Index() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    0: vipList,
    1: setVipList
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: topList,
    1: setTopList
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    data: getTopPlayersData
  } = (0,swr__WEBPACK_IMPORTED_MODULE_3__["default"])(_apis_leaderBoards__WEBPACK_IMPORTED_MODULE_5__/* .getTopPlayers.key */ .j.key, () => _apis_leaderBoards__WEBPACK_IMPORTED_MODULE_5__/* .getTopPlayers.fetcher */ .j.fetcher(), {
    revalidateOnFocus: false
  });
  const {
    data: getTopReferralsData
  } = (0,swr__WEBPACK_IMPORTED_MODULE_3__["default"])(_apis_leaderBoards__WEBPACK_IMPORTED_MODULE_5__/* .getTopReferrals.key */ .o.key, () => _apis_leaderBoards__WEBPACK_IMPORTED_MODULE_5__/* .getTopReferrals.fetcher */ .o.fetcher(), {
    revalidateOnFocus: false
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (getTopPlayersData) {
      setVipList(getTopPlayersData.map((item, index) => {
        return _objectSpread(_objectSpread({}, item), {}, {
          place: index + 1
        });
      }));
    }
  }, [getTopPlayersData]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (getTopReferralsData) {
      setTopList(getTopReferralsData.map((item, index) => {
        return _objectSpread(_objectSpread({}, item), {}, {
          place: index + 1
        });
      }));
    }
  }, [getTopReferralsData]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    w: "full",
    flexDir: {
      base: "column",
      lg: "row"
    },
    justifyContent: "space-between",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      display: {
        base: "none",
        lg: "flex"
      },
      w: {
        base: "full",
        lg: "60%"
      },
      borderRadius: "6px",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_VIP__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        list: vipList
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      display: {
        base: "none",
        lg: "flex"
      },
      w: {
        base: "full",
        lg: "calc(40% - 20px)"
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_TopReferrals__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        list: topList
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      display: {
        base: "flex",
        lg: "none"
      },
      flexDir: "column",
      fontFamily: "Nunito",
      fontWeight: "600",
      textStyle: "16",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        justifyContent: "space-between",
        bgColor: "black.600",
        w: "full",
        h: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(55),
        mb: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(5),
        px: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(20),
        lineHeight: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(55),
        onClick: () => router.push("/vipPage"),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          color: "yellow.100",
          children: "VIP"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
          my: "auto",
          transform: "rotate(180deg)",
          src: (_assets_imgs_arrows_png__WEBPACK_IMPORTED_MODULE_9___default()),
          w: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(12.5),
          h: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(21.33)
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        justifyContent: "space-between",
        bgColor: "black.600",
        w: "full",
        h: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(55),
        lineHeight: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(55),
        px: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(20),
        onClick: () => router.push("/topReferralsPage"),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          children: "Credit"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
          my: "auto",
          transform: "rotate(180deg)",
          src: (_assets_imgs_arrows_png__WEBPACK_IMPORTED_MODULE_9___default()),
          w: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(12.5),
          h: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(21.33)
        })]
      })]
    })]
  });
}

const getServerSideProps = async ctx => {
  return {
    props: _objectSpread({}, await (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_10__/* .getI18nSSRProps */ .q)(ctx, ["home"]))
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);
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

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [78,444,25,627,596], () => (__webpack_exec__(3269)));
module.exports = __webpack_exports__;

})();