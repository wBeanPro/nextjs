(() => {
var exports = {};
exports.id = 530;
exports.ids = [530];
exports.modules = {

/***/ 9177:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_px2vw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6483);
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5444);
/* harmony import */ var _assets_imgs_downLoad_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4186);
/* harmony import */ var _assets_imgs_downLoad_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_downLoad_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function App() {
  const downFile = () => {
    const oa = document.createElement("a");
    oa.href = "https://app.gamifly.co/gamifly_server/server/assets/files/whitepaper.pdf";
    oa.setAttribute("target", "_blank");
    document.body.appendChild(oa);
    oa.click();
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    w: "full",
    flexDir: "column",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      display: {
        base: "none",
        lg: "block"
      },
      fontFamily: "Orbitron",
      fontWeight: "700",
      fontSize: "36px",
      mb: "25px",
      color: "white.100",
      children: "Gamifly info"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Center, {
      w: "full",
      h: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(175),
        lg: "233px"
      },
      bgColor: "black.300",
      borderRadius: "6px",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Center, {
        w: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(215),
          lg: "215px"
        },
        h: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(53),
          lg: "63px"
        },
        bgColor: "green.300",
        cursor: "pointer",
        onClick: () => downFile(),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
          my: "auto",
          src: (_assets_imgs_downLoad_png__WEBPACK_IMPORTED_MODULE_4___default()),
          w: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(18),
            lg: "18px"
          },
          h: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(23),
            lg: "23px"
          },
          mr: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(18),
            lg: "18px"
          }
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          color: "green.100",
          fontFamily: "Orbitron",
          fontWeight: "600",
          fontSize: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(14),
            lg: "14px"
          },
          lineHeight: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(53),
            lg: "63px"
          },
          children: "Whitepaper"
        })]
      })
    })]
  });
}

const getServerSideProps = async ctx => {
  return {
    props: _objectSpread({}, await (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_5__/* .getI18nSSRProps */ .q)(ctx, ["home"]))
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ 6483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ px2vw)
/* harmony export */ });
// 注意max限制， px 大于 unit 时的使用
function px2vw(px, unit = 375, ignoreMax = false) {
  if (!ignoreMax) {
    if (px > unit) {
      return "100vw";
    } else if (px < -1 * unit) {
      return "-100vw";
    }
  } // 100vw = ${unit}px


  return `${px / unit * 100}vw`;
}

/***/ }),

/***/ 4186:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAXCAYAAAAGAx/kAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGGSURBVHgB1ZVNTsJQEMdnRiJ+LOwROAIsiRjpxtAd7BHrCYwnsDcw3KCocWtclbgpRnGNN6g36I4Q6RvfUDBISj+W/pN+vTfvl/l4b4q2/2Rw+eCGGWxANiBdE5pNTdfshJsT2H33XCK8AFB9YAxTMSh2ECbBsPcxZERwB/XWJWTofDz0tW0z9ow7rmkFqzmSGyv+gmKqqjL6tu9V/oByC2E9nMo6rBhI8fPGyC+sBAV037Dc7psXEC3ytBADngqsEEj0cGKN9GO0+u6NPUfH3MwMzfZfqutJ3aZMj6JddStZ1jLT7Iol+1+BEnO0PAoVfQzMaDkmCZcy63p/3h232pDHo4jpWh9gQxbqNBsCjSFoEJOTtCYR9Ng4m8wZ4yohVPW9EkPQdPVcbtAKRsgCC+QiUrVtkFSQyK1bgcBof1qT9zTbzA2ZBcjlURHRor1yZq/eKsW6ECChMQ+A6ErvnaMd5tcikDlwVfq9tOoSfU8dVd4zEKitSP9JCkjvqRBU1MfDmfMDNbKYrXRXSj8AAAAASUVORK5CYII="

/***/ }),

/***/ 8930:
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 5460:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [444], () => (__webpack_exec__(9177)));
module.exports = __webpack_exports__;

})();