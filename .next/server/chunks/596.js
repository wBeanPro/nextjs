"use strict";
exports.id = 596;
exports.ids = [596];
exports.modules = {

/***/ 6596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
      bgColor: "blue.100",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
        children: "TOP REFERRALS"
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
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(80),
            lg: "105px"
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
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(160),
            lg: "212px"
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
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(103),
            lg: "calc(100% - 317px)"
          },
          h: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(50),
            lg: "50px"
          },
          pr: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(20),
            lg: "20px"
          },
          justifyContent: "flex-end",
          alignItems: "center",
          boxSizing: "border-box",
          bgColor: "black.800",
          color: "blue.100",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            w: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(50),
              lg: "auto"
            },
            children: "Invited friends"
          })
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
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(80),
              lg: "105px"
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
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(160),
              lg: "212px"
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
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(103),
              lg: "calc(100% - 317px)"
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
            color: "blue.100",
            bgColor: index % 2 === 0 ? "black.700" : "black.1200",
            children: item.referral_count
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

/***/ })

};
;