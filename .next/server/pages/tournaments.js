"use strict";
(() => {
var exports = {};
exports.id = 80;
exports.ids = [80];
exports.modules = {

/***/ 3:
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
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5444);
/* harmony import */ var _components_TournamentsItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7609);
/* harmony import */ var _apis_tournaments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1278);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5941);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__]);
swr__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function App() {
  const {
    0: tournamentsList,
    1: setTournamentsList
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    data: getTournamentsData
  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])(_apis_tournaments__WEBPACK_IMPORTED_MODULE_4__/* .getTournaments.key */ .G.key, () => _apis_tournaments__WEBPACK_IMPORTED_MODULE_4__/* .getTournaments.fetcher */ .G.fetcher(), {
    revalidateOnFocus: false
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (getTournamentsData) {
      const list = getTournamentsData.map(item => {
        const date = new Date(item === null || item === void 0 ? void 0 : item.start_date);
        const year = date.getFullYear();
        const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
        const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
        const rankList = item === null || item === void 0 ? void 0 : item.rank.map((ite, ind) => {
          return _objectSpread(_objectSpread({}, ite), {}, {
            rank: ind + 1
          });
        });
        return _objectSpread(_objectSpread({}, item), {}, {
          time: `${day}.${month}.${year}`,
          rank: rankList
        });
      });
      setTournamentsList(list);
    }
  }, [getTournamentsData]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    w: "full",
    flexDir: "column",
    pt: {
      base: 0,
      lg: "150px"
    },
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      display: {
        base: "none",
        lg: "block"
      },
      fontFamily: "Orbitron",
      fontWeight: "700",
      fontSize: "36px",
      lineHeight: "36px",
      mb: "25px",
      color: "white.100",
      children: "Tournaments"
    }), tournamentsList.map((item, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_TournamentsItem__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      item: item
    }, index))]
  });
}

const getServerSideProps = async ctx => {
  return {
    props: _objectSpread({}, await (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_6__/* .getI18nSSRProps */ .q)(ctx, ["home"]))
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);
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
var __webpack_exports__ = __webpack_require__.X(0, [78,444,742,25,379], () => (__webpack_exec__(3)));
module.exports = __webpack_exports__;

})();