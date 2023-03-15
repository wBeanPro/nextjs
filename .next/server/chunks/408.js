exports.id = 408;
exports.ids = [408];
exports.modules = {

/***/ 3408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_px2vw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6483);
/* harmony import */ var _assets_imgs_topSeller_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8047);
/* harmony import */ var _assets_imgs_topSeller_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_topSeller_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["img", "children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








function Index(_ref) {
  let {
    img,
    children
  } = _ref,
      prop = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, _objectSpread(_objectSpread({
    flexDir: {
      base: "column",
      lg: "row"
    },
    w: {
      base: "full",
      lg: "800px"
    },
    h: {
      base: "max-content",
      lg: "310px"
    },
    pt: {
      base: 0,
      lg: "6px"
    },
    px: {
      base: 0,
      lg: "6px"
    },
    pb: {
      base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(20),
      lg: "6px"
    },
    borderRadius: {
      base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(15),
      lg: "15px"
    },
    boxSizing: "border-box",
    bgColor: "green.1000"
  }, prop), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
      src: img || (_assets_imgs_topSeller_png__WEBPACK_IMPORTED_MODULE_4___default()),
      w: {
        base: "full",
        lg: "66.66%"
      },
      h: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(225),
        lg: "calc(100% - 10px)"
      },
      mr: {
        base: 0,
        lg: "27px"
      },
      mb: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(16),
        lg: 0
      },
      mt: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(-1),
        lg: 0
      }
    }), children]
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Index));

/***/ }),

/***/ 8047:
/***/ ((module) => {

module.exports = "/_next/static/images/topSeller-510518fe1031c48778d50589ea7faa73.png";

/***/ })

};
;