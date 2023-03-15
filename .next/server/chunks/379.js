exports.id = 379;
exports.ids = [379];
exports.modules = {

/***/ 1278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ getTournaments)
/* harmony export */ });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9394);
 // const baseUrl = "https://gamifly.co:3001";

const baseUrl = "https://app.gamifly.co:3001";
const ajax = new _utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(baseUrl); // 获取活动列表

const getTournaments = {
  fetcher: () => ajax.get(`/api/getTournaments`),
  key: "/api/getTournaments"
};

/***/ }),

/***/ 7609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_px2vw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6483);
/* harmony import */ var _assets_imgs_tournamentLine_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3744);
/* harmony import */ var _assets_imgs_tournamentLine_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_tournamentLine_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_imgs_tournamentTime_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8818);
/* harmony import */ var _assets_imgs_tournamentTime_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_tournamentTime_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_imgs_userProfile_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(25);
/* harmony import */ var _assets_imgs_userProfile_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_userProfile_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _BaseButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5742);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
const _excluded = ["item", "isDetail"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












function Index(_ref) {
  let {
    item,
    isDetail
  } = _ref,
      prop = _objectWithoutProperties(_ref, _excluded);

  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, _objectSpread(_objectSpread({
    w: "full",
    h: "max-content",
    bgColor: "black.600",
    flexDir: {
      base: "column",
      lg: "row"
    },
    mb: {
      base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(20),
      lg: "20px"
    },
    borderRadius: "6px"
  }, prop), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      flexDir: "column",
      w: {
        base: "full",
        lg: "75%"
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        px: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(20),
          lg: "20px"
        },
        h: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(20),
          lg: "20px"
        },
        w: "full",
        alignItems: "center",
        boxSizing: "border-box",
        fontFamily: "Orbitron",
        fontWeight: "700",
        textStyle: "14",
        bgColor: "green.100",
        borderTopLeftRadius: "6px",
        children: "TOURNAMENT"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        flexDir: {
          base: "column",
          lg: "row"
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          pos: "relative",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
            src: `${window.imgUrl.gameUrl}${item.image}`,
            w: {
              base: "full",
              lg: "240px"
            },
            h: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(190),
              lg: "310px"
            },
            mr: {
              base: 0,
              lg: "2px"
            },
            borderBottomLeftRadius: "6px"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
            src: (_assets_imgs_tournamentLine_png__WEBPACK_IMPORTED_MODULE_5___default()),
            w: "2px",
            pos: "absolute",
            left: {
              base: "44.7%",
              lg: "240px"
            },
            top: {
              base: "18%",
              lg: "-1px"
            },
            transform: {
              base: "rotate(-90deg)",
              lg: "none"
            },
            h: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(310),
              lg: "310px"
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          w: {
            base: "full",
            lg: "calc(100% - 242px)"
          },
          h: isDetail ? "max-content" : {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(310),
            lg: "310px"
          },
          p: {
            base: `${(0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(15)}`,
            lg: "20px 30px"
          },
          flexDir: "column",
          boxSizing: "border-box",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            fontFamily: "Orbitron",
            fontWeight: "700",
            textStyle: {
              base: "18",
              lg: "22"
            },
            mb: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(10),
              lg: "15px"
            },
            children: item.title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            alignItems: "flex-end",
            mb: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(20),
              lg: "25px"
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
              src: (_assets_imgs_tournamentTime_png__WEBPACK_IMPORTED_MODULE_6___default()),
              w: {
                base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(12.36),
                lg: "12.36px"
              },
              h: {
                base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(19),
                lg: "19px"
              },
              mr: {
                base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(5),
                lg: "5px"
              }
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
              fontFamily: "Orbitron",
              fontWeight: "700",
              textStyle: {
                base: "14",
                lg: "16"
              },
              color: "green.100",
              children: item.time
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            fontFamily: "Nunito",
            fontWeight: "400",
            textStyle: "16",
            color: "white.500",
            overflowY: isDetail ? "visible" : {
              base: "hidden",
              lg: "auto"
            },
            lineHeight: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(22),
              lg: "22px"
            },
            mb: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(20),
              lg: "40px"
            },
            maxW: {
              base: "full",
              lg: "542px"
            },
            h: isDetail ? "max-content" : {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(132),
              lg: "88px"
            },
            dangerouslySetInnerHTML: {
              __html: item.content
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            display: isDetail ? "none" : "flex",
            justifyContent: "space-between",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_BaseButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
              w: {
                base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(150),
                lg: "195px"
              },
              onClick: () => window.open(item === null || item === void 0 ? void 0 : item.link),
              children: "Go"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_BaseButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
              w: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(150),
              display: {
                base: "block",
                lg: "none"
              },
              border: "1px solid",
              borderColor: "blue.100",
              color: "blue.100",
              bgColor: "transparent",
              boxShadow: "none",
              onClick: () => router.push(`/tournamentsDetail?id=${item.id}`),
              children: "Detail"
            })]
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      display: isDetail ? "flex" : {
        base: "none",
        lg: "flex"
      },
      flexDir: "column",
      w: {
        base: "full",
        lg: "25%"
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        px: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(20),
          lg: "20px"
        },
        h: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(20),
          lg: "20px"
        },
        w: "full",
        alignItems: "center",
        boxSizing: "border-box",
        fontFamily: "Orbitron",
        fontWeight: "700",
        textStyle: "14",
        bgColor: "blue.100",
        children: "WINNERS"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        w: "full" // h={{ base: "max-content", lg: "310px" }}
        ,
        overflowY: {
          base: "visible",
          lg: "auto"
        },
        flexDir: "column",
        display: item.rank.length > 0 ? "flex" : "none",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          w: "full",
          alignItems: "center",
          fontFamily: "Nunito",
          fontWeight: "700",
          textStyle: "14",
          color: "white.300",
          h: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(50),
            lg: "50px"
          },
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            w: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(234),
              lg: "190px"
            },
            h: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(50),
              lg: "50px"
            },
            px: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(20),
              lg: "20px"
            },
            alignItems: "center",
            boxSizing: "border-box",
            bgColor: "black.700",
            children: "User Name"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            w: {
              base: `calc(100% - ${(0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(234)})`,
              lg: "calc(100% - 190px)"
            },
            h: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(50),
              lg: "50px"
            },
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
            bgColor: "black.800",
            color: "blue.100",
            children: "Score"
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          w: "full",
          h: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(260),
            lg: "260px"
          },
          bgColor: "black.600",
          flexDir: "column",
          children: item.rank.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            w: "full",
            alignItems: "center",
            fontFamily: "Nunito",
            fontWeight: "700",
            textStyle: "14",
            color: "white.100",
            h: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(50),
              lg: "50px"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
              w: {
                base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(234),
                lg: "190px"
              },
              h: {
                base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(50),
                lg: "50px"
              },
              px: {
                base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(20),
                lg: "20px"
              },
              alignItems: "center",
              boxSizing: "border-box",
              children: [item.rank, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                src: item.avatar || (_assets_imgs_userProfile_png__WEBPACK_IMPORTED_MODULE_8___default()),
                w: {
                  base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(30),
                  lg: "30px"
                },
                h: {
                  base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(30),
                  lg: "30px"
                },
                mx: {
                  base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(10),
                  lg: "10px"
                }
              }), item.name]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
              w: {
                base: `calc(100% - ${(0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(234)})`,
                lg: "calc(100% - 190px)"
              },
              h: {
                base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(50),
                lg: "50px"
              },
              justifyContent: "center",
              alignItems: "center",
              boxSizing: "border-box",
              color: "blue.100",
              bgColor: index % 2 === 0 ? "black.700" : "black.1200",
              children: item.score
            })]
          }, index))
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        display: item.rank.length > 0 ? "none" : "flex",
        justifyContent: "center",
        alignItems: "center",
        bgColor: "black.600",
        fontFamily: "Nunito",
        fontWeight: "700",
        textStyle: "14",
        color: "white.300",
        w: "full",
        h: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(100),
          lg: "100px"
        },
        children: "No information yet"
      })]
    })]
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Index));

/***/ }),

/***/ 3744:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAE1CAYAAADNvjGFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMCSURBVHgBjVVZdhwxCAS1/JND5irJtXKCXCkvaSBVaGn1MmP72WMZUSxVIOv3379+iLtWifgZqlFCBN8iVUUUP1LwKyIPETTg0L/6Aah2CMSBc8IDGIYo/HhCvTzoOERGzoChi8+tjFFzyzW7gF/PnhUqYBknsp8G15lLGupFzRkQkZMWRGYZmQxEwZ3X1SMu8IPMpBI+WXzCM7tei5e1nuai3TlWElqp2lBo9ZHMrsWZMQpzhk8SLvCWvksws+uQOy2MfLY8x2llzMIer1quHudEy8EG6Z1XE/6VGWPfmYKMLiTc5D7akSvzelMnRj16K2PG8d4OEx3tjBE9ZuO0MueWj6Sqreahac36+kH1sfd6WupX/NwnfCTVNiPsIuQdXNYV7l08DtKLl+TNYXlkSg+8DFKKK3Kqeem0MzbY0LVU1UO42i6o1+pzp2WKS2ui2g6ug33RC1Nw0VTXQRoqy/lpam9vLIxxSFBzjUamPLwSR+9vNm7t4rK5j+/GvIrxjqk8rsNR/Jtca5wyip9buQhHdbiwSe8Xx+bV7swh0T7PffUu8/MZCe9QnzxxZ3g3tRcg+j/NT7LX1k17QIy8wBJOL14Zxg1PSqg3Z4VPQ4UzCg68CjLPKxKuAosaJ9xkxElUJGpYMjIcqUqV9p5GTxF0VuMAMI5zFJjCc3cw+nt0uKu2wkZkBEQW1BzuJAEfptAGPswekqg8tMKUcDW4M0U4NwzUAVWS3vAcLZKQDyOuTeXUFyN77jvbARxsOk0V0WyIQkN26p2WspJ5ChjdopNwRCZB3NPDuaDaWlIvsHGgGKcUac4RjXkwhi6cfUWXUkcuI2rbevbdvWxMUdU8R8thQSz0VXB0SLDFztGDRd2ik1BIAqQyEgQULFq84vn0FGXMTzF3g3RWtgKBELGKuZUCd91KAG7VTXbZsLAb4FQT+cw2V896kBw+W8FfOxIYkgbnEGa1D0VcVKO71b8boOzdDWmTnyL2kRwCl1LqDnqZvXBoYC36DRbbveo/tT+YhP8Q5CEqyOh82wAAAABJRU5ErkJggg=="

/***/ }),

/***/ 8818:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAUCAYAAABWMrcvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADfSURBVHgB7ZO9DcIwEIXvjCnYIivQUEFBgwQdAxCyAbABbOJIiJ6GAE1CQVKSDcgIqRAF9pHwJ0SMEoWWrzrb751PTzqAN8z9dmS5jgE54LOwAsdQhMe0JgJRUWSLVtfTmZi2E4KlKuia/vpgBpthoZ80REmnKTurnWh3o6KmO4QxIc0YlIAXESXBeMhQsNppKer9mOeJSdFs/pFi1pTMDSjti+Ji0eyEUGQ8VsW2aPS04pcmcyNlDDmUSu9v+sWEA381RmCjx9mAdA0AYiVpMv+yhJwkhsjIzjzwm1nLFTNiV7ASp/d2AAAAAElFTkSuQmCC"

/***/ })

};
;