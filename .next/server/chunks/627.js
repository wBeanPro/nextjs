exports.id = 627;
exports.ids = [627];
exports.modules = {

/***/ 2300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ getTopPlayers),
/* harmony export */   "o": () => (/* binding */ getTopReferrals)
/* harmony export */ });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9394);
 // const baseUrl = "https://gamifly.co:3001";

const baseUrl = "https://app.gamifly.co:3001";
const ajax = new _utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(baseUrl);
const getTopPlayers = {
  fetcher: () => ajax.get("/api/getTopPlayers"),
  key: "/api/getTopPlayers"
};
const getTopReferrals = {
  fetcher: () => ajax.get("/api/getTopReferrals"),
  key: "/api/getTopReferrals"
};

/***/ }),

/***/ 1229:
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
/* harmony import */ var _assets_imgs_userProfile_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25);
/* harmony import */ var _assets_imgs_userProfile_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_userProfile_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["list"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








function Index(_ref) {
  let {
    list
  } = _ref,
      prop = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, _objectSpread(_objectSpread({
    flexDir: "column",
    w: "full",
    borderRadius: "6px",
    overflow: "hidden"
  }, prop), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      h: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(20),
        lg: "20px"
      },
      px: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(20),
        lg: "20px"
      },
      w: "full",
      alignItems: "center",
      boxSizing: "border-box",
      fontFamily: "Orbitron",
      fontWeight: "700",
      textStyle: "14",
      bgColor: "yellow.100",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
        children: "VIP"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      w: "full",
      overflowX: "auto",
      flexDir: "column",
      display: list.length > 0 ? "flex" : "none",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        w: {
          base: "max-content",
          lg: "full"
        },
        alignItems: "center",
        fontFamily: "Nunito",
        fontWeight: "700",
        textStyle: "14",
        color: "white.300",
        h: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(50),
          lg: "50px"
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          w: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(130),
            lg: "130px"
          },
          h: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(50),
            lg: "50px"
          },
          px: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(20),
            lg: "20px"
          },
          alignItems: "center",
          boxSizing: "border-box",
          bgColor: "black.700",
          children: "Place"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          w: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(262),
            lg: "262px"
          },
          h: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(50),
            lg: "50px"
          },
          px: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(20),
            lg: "20px"
          },
          alignItems: "center",
          boxSizing: "border-box",
          bgColor: "black.700",
          children: "User Name"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          w: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(176),
            lg: "176px"
          },
          h: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(50),
            lg: "50px"
          },
          justifyContent: "center",
          alignItems: "center",
          color: "yellow.100",
          bgColor: "black.500",
          children: "gamilfy tokens"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          w: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(130),
            lg: "calc(100% - 568px)"
          },
          h: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(50),
            lg: "50px"
          },
          px: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(20),
            lg: "20px"
          },
          justifyContent: "flex-end",
          alignItems: "center",
          boxSizing: "border-box",
          bgColor: "black.700",
          children: "NFT"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        w: {
          base: "max-content",
          lg: "full"
        },
        flexDir: "column",
        children: list.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          w: "full",
          alignItems: "center",
          fontFamily: "Nunito",
          fontWeight: "700",
          textStyle: "14",
          color: "white.100",
          h: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(50),
            lg: "50px"
          },
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            w: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(130),
              lg: "130px"
            },
            h: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(50),
              lg: "50px"
            },
            px: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(20),
              lg: "20px"
            },
            alignItems: "center",
            boxSizing: "border-box",
            bgColor: index % 2 === 0 ? "black.1500" : "black.600",
            children: item.place
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            w: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(262),
              lg: "262px"
            },
            h: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(50),
              lg: "50px"
            },
            px: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(20),
              lg: "20px"
            },
            alignItems: "center",
            boxSizing: "border-box",
            bgColor: index % 2 === 0 ? "black.1500" : "black.600",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
              borderRadius: "50%",
              src: item.avatar ? `${window.imgUrl.imageUrl}${item.avatar}` : (_assets_imgs_userProfile_png__WEBPACK_IMPORTED_MODULE_4___default()),
              w: {
                base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(30),
                lg: "30px"
              },
              h: {
                base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(30),
                lg: "30px"
              },
              mr: {
                base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(10),
                lg: "10px"
              }
            }), item.name]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            w: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(176),
              lg: "176px"
            },
            h: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(50),
              lg: "50px"
            },
            justifyContent: "center",
            alignItems: "center",
            color: "yellow.100",
            bgColor: index % 2 === 0 ? "black.1300" : "black.1400",
            children: item.amount
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            w: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(130),
              lg: "calc(100% - 568px)"
            },
            h: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(50),
              lg: "50px"
            },
            px: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(20),
              lg: "20px"
            },
            justifyContent: "flex-end",
            alignItems: "center",
            boxSizing: "border-box",
            bgColor: index % 2 === 0 ? "black.1500" : "black.600",
            children: item.nft_count
          })]
        }, index))
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      display: list.length > 0 ? "none" : "flex",
      justifyContent: "center",
      alignItems: "center",
      bgColor: "black.600",
      fontFamily: "Nunito",
      fontWeight: "700",
      textStyle: "14",
      color: "white.300",
      w: "full",
      h: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(100),
        lg: "100px"
      },
      children: "No information yet"
    })]
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Index));

/***/ }),

/***/ 5658:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAARCAYAAAAG/yacAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEHSURBVHgBlZMxTsNAEEX/DJYjpcoRwg0SOiAFNAh3gR7YG8ANAhcAcQJbQaJ1h0UaF0BaOEJugZBghrGlRIkTW5tpdnZn3/zdnVnA01yedd30ZVj47ANcfkyuJeRPAafFPGjOnnb+wnYMkuHyei3k3rIjYU6JtFONBZuya6s9EugNoBsTBmvZdyi2zV002OIhrqavDwbk5jYCpZLLJz1pSazQHjyNJRQ7DryBEmLWMxtnW0HJfjQbH5zuQvXOG5o748Po9le476O60kbPg5Mv/vnuQ/DYBFFd4OI9c8Q0QqUEdhWqbdinQZQw6bEVOkGlNWqV1lSJ72F9aErs9TVKVZY9gZwX83+eAFPFi1RNHwAAAABJRU5ErkJggg=="

/***/ })

};
;