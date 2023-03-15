(() => {
var exports = {};
exports.id = 451;
exports.ids = [451];
exports.modules = {

/***/ 4691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getGameList),
/* harmony export */   "j": () => (/* binding */ getGameTypes)
/* harmony export */ });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9394);
 // const baseUrl = "https://gamifly.co:3001";

const baseUrl = "https://app.gamifly.co:3001";
const ajax = new _utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(baseUrl); // 获取游戏列表

const getGameList = {
  fetcher: type => ajax.get(`/api/getGameList/${type}`),
  key: "/api/getGameList"
}; // 获取游戏类型

const getGameTypes = {
  fetcher: () => ajax.get("/api/getGameTypes"),
  key: "/api/getGameTypes"
};

/***/ }),

/***/ 5261:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5941);
/* harmony import */ var _utils_px2vw__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6483);
/* harmony import */ var _apis_games__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4691);
/* harmony import */ var _components_TopSeller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3408);
/* harmony import */ var _assets_imgs_playIcon_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4003);
/* harmony import */ var _assets_imgs_playIcon_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_playIcon_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_imgs_featuresIcon_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9441);
/* harmony import */ var _assets_imgs_featuresIcon_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_featuresIcon_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_imgs_randomPlay_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9314);
/* harmony import */ var _assets_imgs_randomPlay_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_randomPlay_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__]);
swr__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














function App() {
  const {
    0: gamesTypes,
    1: setGamesTypes
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: activeGameType,
    1: setActiveGameType
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    index: 0,
    id: 0
  });
  const {
    0: gameList,
    1: setGameList
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: newList,
    1: setNewList
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    data: getGameListData
  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])((activeGameType === null || activeGameType === void 0 ? void 0 : activeGameType.id) > 0 ? [_apis_games__WEBPACK_IMPORTED_MODULE_4__/* .getGameList.key */ .Z.key, activeGameType] : null, () => _apis_games__WEBPACK_IMPORTED_MODULE_4__/* .getGameList.fetcher */ .Z.fetcher(activeGameType === null || activeGameType === void 0 ? void 0 : activeGameType.id), {
    revalidateOnFocus: false
  });
  const {
    data: getGameTypesData
  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])(_apis_games__WEBPACK_IMPORTED_MODULE_4__/* .getGameTypes.key */ .j.key, () => _apis_games__WEBPACK_IMPORTED_MODULE_4__/* .getGameTypes.fetcher */ .j.fetcher(), {
    revalidateOnFocus: false
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (getGameTypesData) {
      var _getGameTypesData$;

      setGamesTypes(getGameTypesData);
      setActiveGameType({
        index: 0,
        id: (_getGameTypesData$ = getGameTypesData[0]) === null || _getGameTypesData$ === void 0 ? void 0 : _getGameTypesData$.id
      });
    }
  }, [getGameTypesData]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (getGameListData && gamesTypes && gamesTypes.length) {
      activeGameType.index + 1 < gamesTypes.length && setActiveGameType({
        index: activeGameType.index + 1,
        id: gamesTypes[activeGameType.index + 1].id
      });
      const obj = {
        id: gamesTypes[activeGameType.index].id,
        title: gamesTypes[activeGameType.index].name,
        list: getGameListData
      };
      setGameList([...gameList, ...[obj]]);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [getGameListData]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const list = newList;
    gameList.map(item => {
      item.list.map(ite => {
        if (!list.includes(ite)) {
          list.push(ite);
        }
      });
    });
    setNewList(list); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameList]);

  const randomClick = () => {
    var _newList$random_numbe;

    const random_number = Math.floor(Math.random() * Math.floor(newList.length));
    window.open((_newList$random_numbe = newList[random_number]) === null || _newList$random_numbe === void 0 ? void 0 : _newList$random_numbe.link);
  };

  const returnTypeName = type => {
    let val = "";
    gamesTypes.map(item => {
      if (type === String(item === null || item === void 0 ? void 0 : item.id)) {
        val = item === null || item === void 0 ? void 0 : item.name;
      }
    });
    return val;
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    w: "full",
    minH: "100vh",
    flexDir: "column",
    pt: {
      base: 0,
      lg: "150px"
    },
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_TopSeller__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      w: "full",
      h: {
        base: "420px",
        lg: "423px"
      },
      mt: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(20),
        lg: 0
      },
      mb: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(60),
        lg: "60px"
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        px: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(16),
          lg: 0
        },
        flexDir: "column",
        justifyContent: "center",
        color: "black.1600",
        fontFamily: "Eurostile",
        fontWeight: "400",
        boxSizing: "border-box",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          fontWeight: "bolder",
          fontSize: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(25),
            lg: "35px"
          },
          lineHeight: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(25),
            lg: "35px"
          },
          mb: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(10),
            lg: "10px"
          },
          children: "CRICKET GAME"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          fontSize: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(13),
            lg: "13px"
          },
          lineHeight: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(13),
            lg: "13px"
          },
          mb: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(10),
            lg: "10px"
          },
          opacity: "0.8",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            mr: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(20),
              lg: "20px"
            },
            children: "Date\uFF1A2022-07-24"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            children: "ESPORTS GAME"
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          fontWeight: "600",
          fontSize: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(14),
            lg: "14px"
          },
          lineHeight: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(22),
            lg: "22px"
          },
          mb: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(10),
            lg: "20px"
          },
          children: "Bat-and-Ball Game, Play to earn. Welcome to the first Cricket Metaverse!"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          w: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(173),
            lg: "173px"
          },
          h: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(52),
            lg: "52px"
          },
          fontSize: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(17),
            lg: "17px"
          },
          borderRadius: "5px",
          bgColor: "transparent",
          border: "1px solid",
          borderColor: "black.1600",
          color: "black.1600",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Eurostile",
          fontWeight: "bolder",
          cursor: "pointer",
          onClick: () => window.open( // "https://app.gamifly.co/games/cricket/index.html"
          "https://play.google.com/store/apps/details?id=com.alabs.cricket.scifi.league"),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
            src: (_assets_imgs_playIcon_png__WEBPACK_IMPORTED_MODULE_7___default()),
            mr: "10px"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            mt: "8px",
            fontWeight: "bolder",
            children: "PLAY NOW"
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      flexDir: "column",
      borderTop: "1px solid",
      borderColor: {
        base: "black.1800",
        lg: "transparent"
      },
      pt: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(30),
        lg: 0
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        justifyContent: "space-between",
        alignItems: "center",
        mb: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(25),
          lg: "60px"
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
          src: (_assets_imgs_randomPlay_png__WEBPACK_IMPORTED_MODULE_8___default()),
          display: {
            base: "none",
            lg: "flex"
          },
          opacity: "0"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          justifyContent: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            fontFamily: "Eurostile",
            fontWeight: "bolder",
            color: "white.100",
            mt: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(5),
              lg: "5px"
            },
            fontSize: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(23),
              lg: "35px"
            },
            lineHeight: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(23),
              lg: "35px"
            },
            children: "GAME LOBBY"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
            src: (_assets_imgs_featuresIcon_png__WEBPACK_IMPORTED_MODULE_9___default()),
            w: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(30),
              lg: "30px"
            },
            h: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(23),
              lg: "23px"
            },
            ml: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(5),
              lg: "5px"
            }
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
          src: (_assets_imgs_randomPlay_png__WEBPACK_IMPORTED_MODULE_8___default()),
          w: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(119),
            lg: "119px"
          },
          h: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(31),
            lg: "31px"
          },
          cursor: "pointer",
          onClick: () => randomClick()
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        flexWrap: "wrap",
        justifyContent: "space-between",
        children: newList.map((item, index) => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            mb: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(10),
              lg: "20px"
            },
            flexDir: "column",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
              w: {
                base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(160),
                lg: "258px"
              },
              h: {
                base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(90),
                lg: "194px"
              },
              p: {
                base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(15),
                lg: "15px"
              },
              bgImage: `${window.imgUrl.gameUrl}${item === null || item === void 0 ? void 0 : item.image}`,
              borderRadius: "15px",
              flexDir: "column",
              justifyContent: "flex-end",
              bgSize: "100% 100%",
              bgRepeat: "no-repeat",
              boxSizing: "border-box",
              cursor: "pointer",
              onClick: () => window.open(item === null || item === void 0 ? void 0 : item.link),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                display: {
                  base: "none",
                  lg: "flex"
                },
                fontFamily: "SofiaPro",
                fontWeight: "600",
                fontSize: "18px",
                lineHeight: "18px",
                color: "white.100",
                mb: "10px",
                children: item === null || item === void 0 ? void 0 : item.title
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                display: {
                  base: "none",
                  lg: "flex"
                },
                justifyContent: "space-between",
                fontFamily: "Eurostile",
                fontWeight: "400",
                fontSize: "13px",
                lineHeight: "13px",
                color: "white.100",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                  children: returnTypeName(item === null || item === void 0 ? void 0 : item.game_type)
                }), (item === null || item === void 0 ? void 0 : item.views) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                  children: "1487 views"
                })]
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
              display: {
                base: "flex",
                lg: "none"
              },
              fontSize: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(13),
              lineHeight: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(13),
              mt: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(5),
              justifyContent: "center",
              fontFamily: "SofiaPro",
              fontWeight: "600",
              color: "white.100",
              children: item === null || item === void 0 ? void 0 : item.title
            })]
          }, index);
        })
      })]
    })]
  });
}

const getServerSideProps = async ctx => {
  return {
    props: _objectSpread({}, await (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_10__/* .getI18nSSRProps */ .q)(ctx, ["home"]))
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4003:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAQCAYAAAFVZq6RAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADKADAAQAAAABAAAAEAAAAAC2HIDeAAAAy0lEQVQoFYVPKw7CQBRcCAKNQjbBoEngJFyAAxAOgEFyDByCcAE8Go2HBFWFICBgZttpXvZDX/I6b+fzduuccyO066C/HJryJ3780G341EBLSSFaQ2VNhaVt8+pYfaNILa6ISgg/4PoU3ugnOnrXlGqquOKRE7R/YQ0ihf6+3HPvTMop3GqdiBeInkgihaUlNN9qcQcciPyHusLiEYFhLmSNqfmEYKFw7relh3ggkdqa4q7wztoCFxgmNNkKt50hjq0hnDcg9ugC3Vo/XKFUdlq4+YgAAAAASUVORK5CYII="

/***/ }),

/***/ 9314:
/***/ ((module) => {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 8930:
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

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

/***/ }),

/***/ 5941:
/***/ ((module) => {

"use strict";
module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [78,444,441,408], () => (__webpack_exec__(5261)));
module.exports = __webpack_exports__;

})();