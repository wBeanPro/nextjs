(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Web3ReactManager_0)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@web3-react/core"
var core_ = __webpack_require__(8054);
;// CONCATENATED MODULE: external "web3modal"
const external_web3modal_namespaceObject = require("web3modal");
// EXTERNAL MODULE: ./src/connect/connectors.tsx
var connectors = __webpack_require__(8202);
// EXTERNAL MODULE: ./src/utils/storage.ts
var storage = __webpack_require__(7384);
;// CONCATENATED MODULE: ./src/connect/useEagerConnect.ts
/* eslint-disable no-console */





const useEagerConnect = () => {
  const {
    activate,
    active
  } = (0,core_.useWeb3React)();
  const {
    0: tried,
    1: setTried
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    connectors/* injected.isAuthorized */.Lj.isAuthorized().then(isAuthorized => {
      const hasSignedIn = (0,storage/* getStore */.bh)(connectors/* connectorLocalStorageKey */.OM);

      if (isAuthorized && hasSignedIn) {
        activate(connectors/* injected */.Lj, undefined, true).catch(() => {
          setTried(true);
        });
      } else if ((0,external_web3modal_namespaceObject.isMobile)() && window.ethereum && hasSignedIn) {
        activate(connectors/* injected */.Lj, undefined, true).catch(() => {
          setTried(true);
        });
      } else {
        setTried(true);
      }
    });
  }, [activate]); // if the connection worked, wait until we get confirmation of that to flip the flag

  (0,external_react_.useEffect)(() => {
    if (active) {
      setTried(true);
    }
  }, [active]);
  return tried;
};
function useInactiveListener(suppress = false) {
  const {
    active,
    error,
    activate
  } = (0,core_.useWeb3React)();
  (0,external_react_.useEffect)(() => {
    const {
      ethereum
    } = window;

    if (ethereum && ethereum.on && !active && !error && !suppress) {
      const handleChainChanged = () => {
        // eat errors
        activate(connectors/* injected */.Lj, undefined, true).catch(e => {
          console.error("Failed to activate after chain changed", e);
        });
      };

      const handleAccountsChanged = accounts => {
        if (accounts.length > 0) {
          // eat errors
          activate(connectors/* injected */.Lj, undefined, true).catch(e => {
            console.error("Failed to activate after accounts changed", e);
          });
        }
      };

      ethereum.on("chainChanged", handleChainChanged);
      ethereum.on("accountsChanged", handleAccountsChanged);
      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener("chainChanged", handleChainChanged);
          ethereum.removeListener("accountsChanged", handleAccountsChanged);
        }
      };
    }

    return undefined;
  }, [active, error, suppress, activate]);
}
;// CONCATENATED MODULE: ./Web3ReactManager.tsx


const Web3ReactManager = ({
  children
}) => {
  const triedEager = useEagerConnect();
  useInactiveListener(!triedEager);

  if (!triedEager) {
    return null;
  }

  return children;
};

/* harmony default export */ const Web3ReactManager_0 = (Web3ReactManager);

/***/ }),

/***/ 2396:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_px2vw__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6483);
/* harmony import */ var _assets_imgs_friendCode_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3535);
/* harmony import */ var _assets_imgs_friendCode_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_friendCode_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _BaseModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1803);
/* harmony import */ var _BaseButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5742);
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7384);
/* harmony import */ var _stores_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3294);
/* harmony import */ var _apis_userInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1639);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5941);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__, _stores_global__WEBPACK_IMPORTED_MODULE_4__]);
([swr__WEBPACK_IMPORTED_MODULE_2__, _stores_global__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
const _excluded = ["isShow", "code", "setIsShow"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }














function Index(_ref) {
  let {
    isShow,
    code,
    setIsShow
  } = _ref,
      prop = _objectWithoutProperties(_ref, _excluded);

  const {
    userInfo
  } = (0,_stores_global__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
  const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useToast)();
  const {
    0: friendCode,
    1: setFriendCode
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: input1,
    1: setInput1
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((code === null || code === void 0 ? void 0 : code.substring(0, 1)) || "");
  const {
    0: input2,
    1: setInput2
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((code === null || code === void 0 ? void 0 : code.substring(1, 2)) || "");
  const {
    0: input3,
    1: setInput3
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((code === null || code === void 0 ? void 0 : code.substring(2, 3)) || "");
  const {
    0: input4,
    1: setInput4
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((code === null || code === void 0 ? void 0 : code.substring(3, 4)) || "");
  const {
    0: input5,
    1: setInput5
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((code === null || code === void 0 ? void 0 : code.substring(4, 5)) || "");
  const {
    0: input6,
    1: setInput6
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((code === null || code === void 0 ? void 0 : code.substring(5, 6)) || "");
  const inp1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const inp2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const inp3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const inp4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const inp5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const inp6 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (inp1.current) {
      // @ts-ignore
      inp1.current.focus();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [inp1.current]);
  const {
    data: setReferralData
  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])(userInfo && userInfo !== null && userInfo !== void 0 && userInfo.id && friendCode ? [_apis_userInfo__WEBPACK_IMPORTED_MODULE_5__/* .setReferral.key */ .Cz.key, friendCode] : null, _ => _apis_userInfo__WEBPACK_IMPORTED_MODULE_5__/* .setReferral.fetcher */ .Cz.fetcher({
    user_id: userInfo === null || userInfo === void 0 ? void 0 : userInfo.id,
    code: friendCode
  }), {
    revalidateOnFocus: false
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (setReferralData === undefined) return;

    if (setReferralData && (setReferralData === null || setReferralData === void 0 ? void 0 : setReferralData.result) === "success") {
      toast({
        title: "success",
        description: "Inviter binding success",
        status: "success",
        duration: 3000,
        isClosable: true
      });
    } else {
      toast({
        title: "Inviter binding fail",
        description: setReferralData === null || setReferralData === void 0 ? void 0 : setReferralData.reason,
        status: "error",
        duration: 3000,
        isClosable: true
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [setReferralData]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_BaseModal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    isShow: isShow,
    close: () => setIsShow(),
    zIndex: 3,
    w: {
      base: `calc(100% - ${(0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(30)})`,
      lg: "454px"
    },
    h: {
      base: "504px",
      lg: "504px"
    }
  }, prop), {}, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      w: "full",
      flexDir: "column",
      alignItems: "center",
      fontFamily: "Orbitron",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
        mx: "auto",
        src: (_assets_imgs_friendCode_png__WEBPACK_IMPORTED_MODULE_8___default()),
        w: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(177),
          lg: "177px"
        },
        h: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(172),
          lg: "172px"
        },
        mb: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(30),
          lg: "30px"
        }
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
        fontWeight: "600",
        textStyle: "22",
        lineHeight: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(28),
          lg: "28px"
        },
        mb: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(15),
          lg: "15px"
        },
        children: "Enter a Friend\u2019s code"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
        fontFamily: "Nunito",
        fontWeight: "400",
        textStyle: "16",
        color: "white.500",
        lineHeight: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(22),
          lg: "22px"
        },
        mb: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(25),
          lg: "25px"
        },
        children: "Enter a friend\u2019s code and get a reward."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        justifyContent: "center",
        w: "full",
        h: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(45),
          lg: "60px"
        },
        mb: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(30),
          lg: "30px"
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          w: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(45),
            lg: "60px"
          },
          mr: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(5),
            lg: "5px"
          },
          bgColor: "white.700",
          pos: "relative",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
            ref: inp1,
            h: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(45),
              lg: "60px"
            },
            fontSize: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(22),
              lg: "26px"
            },
            lineHeight: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(45),
              lg: "60px"
            },
            maxLength: 1,
            w: "full",
            fontFamily: "Nunito",
            fontWeight: "600",
            border: "none",
            outline: "none",
            borderRadius: "0",
            boxSizing: "border-box",
            p: "0",
            textAlign: "center",
            color: "white.100",
            value: input1,
            onChange: e => {
              setInput1(e.target.value);

              if (e.target.value !== "") {
                //  @ts-ignore
                inp2.current.focus();
              }
            },
            _focus: {
              border: "1px solid",
              borderColor: "blue.100"
            },
            _active: {
              border: "1px solid",
              borderColor: "blue.100"
            },
            _hover: {
              border: "1px solid",
              borderColor: "blue.100"
            }
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          w: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(45),
            lg: "60px"
          },
          mr: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(5),
            lg: "5px"
          },
          bgColor: "white.700",
          pos: "relative",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
            ref: inp2,
            h: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(45),
              lg: "60px"
            },
            fontSize: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(22),
              lg: "26px"
            },
            lineHeight: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(45),
              lg: "60px"
            },
            maxLength: 1,
            w: "full",
            fontFamily: "Nunito",
            fontWeight: "600",
            border: "none",
            outline: "none",
            borderRadius: "0",
            boxSizing: "border-box",
            p: "0",
            textAlign: "center",
            color: "white.100",
            value: input2,
            onChange: e => {
              setInput2(e.target.value);

              if (e.target.value !== "") {
                //  @ts-ignore
                inp3.current.focus();
              }
            },
            _focus: {
              border: "1px solid",
              borderColor: "blue.100"
            },
            _active: {
              border: "1px solid",
              borderColor: "blue.100"
            },
            _hover: {
              border: "1px solid",
              borderColor: "blue.100"
            }
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          w: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(45),
            lg: "60px"
          },
          mr: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(5),
            lg: "5px"
          },
          bgColor: "white.700",
          pos: "relative",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
            ref: inp3,
            h: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(45),
              lg: "60px"
            },
            fontSize: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(22),
              lg: "26px"
            },
            lineHeight: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(45),
              lg: "60px"
            },
            maxLength: 1,
            w: "full",
            fontFamily: "Nunito",
            fontWeight: "600",
            border: "none",
            outline: "none",
            borderRadius: "0",
            boxSizing: "border-box",
            p: "0",
            textAlign: "center",
            color: "white.100",
            value: input3,
            onChange: e => {
              setInput3(e.target.value);

              if (e.target.value !== "") {
                //  @ts-ignore
                inp4.current.focus();
              }
            },
            _focus: {
              border: "1px solid",
              borderColor: "blue.100"
            },
            _active: {
              border: "1px solid",
              borderColor: "blue.100"
            },
            _hover: {
              border: "1px solid",
              borderColor: "blue.100"
            }
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          w: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(45),
            lg: "60px"
          },
          mr: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(5),
            lg: "5px"
          },
          bgColor: "white.700",
          pos: "relative",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
            ref: inp4,
            h: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(45),
              lg: "60px"
            },
            fontSize: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(22),
              lg: "26px"
            },
            lineHeight: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(45),
              lg: "60px"
            },
            maxLength: 1,
            w: "full",
            fontFamily: "Nunito",
            fontWeight: "600",
            border: "none",
            outline: "none",
            borderRadius: "0",
            boxSizing: "border-box",
            p: "0",
            textAlign: "center",
            color: "white.100",
            value: input4,
            onChange: e => {
              setInput4(e.target.value);

              if (e.target.value !== "") {
                //  @ts-ignore
                inp5.current.focus();
              }
            },
            _focus: {
              border: "1px solid",
              borderColor: "blue.100"
            },
            _active: {
              border: "1px solid",
              borderColor: "blue.100"
            },
            _hover: {
              border: "1px solid",
              borderColor: "blue.100"
            }
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          w: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(45),
            lg: "60px"
          },
          mr: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(5),
            lg: "5px"
          },
          bgColor: "white.700",
          pos: "relative",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
            ref: inp5,
            h: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(45),
              lg: "60px"
            },
            fontSize: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(22),
              lg: "26px"
            },
            lineHeight: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(45),
              lg: "60px"
            },
            maxLength: 1,
            w: "full",
            fontFamily: "Nunito",
            fontWeight: "600",
            border: "none",
            outline: "none",
            borderRadius: "0",
            boxSizing: "border-box",
            p: "0",
            textAlign: "center",
            color: "white.100",
            value: input5,
            onChange: e => {
              setInput5(e.target.value);

              if (e.target.value !== "") {
                //  @ts-ignore
                inp6.current.focus();
              }
            },
            _focus: {
              border: "1px solid",
              borderColor: "blue.100"
            },
            _active: {
              border: "1px solid",
              borderColor: "blue.100"
            },
            _hover: {
              border: "1px solid",
              borderColor: "blue.100"
            }
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          w: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(45),
            lg: "60px"
          },
          bgColor: "white.700",
          pos: "relative",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
            ref: inp6,
            h: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(45),
              lg: "60px"
            },
            fontSize: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(22),
              lg: "26px"
            },
            lineHeight: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(45),
              lg: "60px"
            },
            maxLength: 1,
            w: "full",
            fontFamily: "Nunito",
            fontWeight: "600",
            border: "none",
            outline: "none",
            borderRadius: "0",
            boxSizing: "border-box",
            p: "0",
            textAlign: "center",
            color: "white.100",
            value: input6,
            onChange: e => {
              setInput6(e.target.value);

              if (e.target.value !== "") {
                //  @ts-ignore
                inp6.current.blur();
              }
            },
            _focus: {
              border: "1px solid",
              borderColor: "blue.100"
            },
            _active: {
              border: "1px solid",
              borderColor: "blue.100"
            },
            _hover: {
              border: "1px solid",
              borderColor: "blue.100"
            }
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_BaseButton__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        fontFamily: "Nunito",
        fontWeight: "600",
        textStyle: "16",
        onClick: () => {
          if (userInfo && userInfo !== null && userInfo !== void 0 && userInfo.id && !(userInfo !== null && userInfo !== void 0 && userInfo.referral_id) || !(userInfo !== null && userInfo !== void 0 && userInfo.id)) {
            (0,_utils_storage__WEBPACK_IMPORTED_MODULE_10__/* .setStore */ .PQ)("friendCode", code);
            setIsShow();
          }

          if (userInfo && userInfo !== null && userInfo !== void 0 && userInfo.id && !(userInfo !== null && userInfo !== void 0 && userInfo.referral_id)) {
            setFriendCode(code);
          }
        },
        children: "Apply"
      })]
    })
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Index));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_px2vw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6483);
/* harmony import */ var _assets_imgs_invite_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4675);
/* harmony import */ var _assets_imgs_invite_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_invite_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_imgs_copy_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8226);
/* harmony import */ var _assets_imgs_copy_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_copy_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7384);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8887);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BaseModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1803);
/* harmony import */ var _BaseButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5742);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
const _excluded = ["isShow", "setIsShow"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




 // import share from "@/assets/imgs/share.png";









function Index(_ref) {
  let {
    isShow,
    setIsShow
  } = _ref,
      prop = _objectWithoutProperties(_ref, _excluded);

  const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useToast)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_BaseModal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, _objectSpread(_objectSpread({
    isShow: isShow,
    close: () => setIsShow(),
    p: "0",
    zIndex: 3,
    w: {
      base: `calc(100% - ${(0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(30)})`,
      lg: "454px"
    },
    h: {
      base: "513px",
      lg: "561px"
    }
  }, prop), {}, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      flexDir: "column",
      alignItems: "center",
      fontFamily: "Orbitron",
      py: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(35),
        lg: "35px"
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
        src: (_assets_imgs_invite_png__WEBPACK_IMPORTED_MODULE_6___default()),
        w: "full",
        h: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(217),
          lg: "287px"
        },
        pb: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(15),
          lg: "15px"
        }
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
        fontWeight: "600",
        textStyle: "22",
        mb: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(20),
          lg: "20px"
        },
        children: "Your code"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
        fontWeight: "600",
        textStyle: "26",
        color: "green.100",
        letterSpacing: 5,
        mb: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(20),
          lg: "20px"
        },
        children: (0,_utils_storage__WEBPACK_IMPORTED_MODULE_7__/* .getStore */ .bh)("referralCode")
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
        fontWeight: "400",
        textStyle: "16",
        textAlign: "center",
        w: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(300),
          lg: "420px"
        },
        lineHeight: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(22),
          lg: "22px"
        },
        mb: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(20),
          lg: "20px"
        },
        children: "Use your code to invite friends to the app. You will get a reward for each friend you invite."
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        px: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(25),
          lg: "30px"
        },
        w: "full",
        boxSizing: "border-box",
        justifyContent: "center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_BaseButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          w: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(140),
            lg: "190px"
          },
          border: "1px solid",
          borderColor: "blue.100",
          bgColor: "transparent",
          color: "blue.100",
          boxShadow: "none",
          _hover: {
            borderColor: "blue.100",
            bgColor: "transparent",
            color: "blue.100",
            boxShadow: "none"
          },
          _active: {
            borderColor: "blue.100",
            bgColor: "transparent",
            color: "blue.100",
            boxShadow: "none"
          },
          onClick: () => {
            copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default()(`https://www.gamifly.co/games?inviteCode=${(0,_utils_storage__WEBPACK_IMPORTED_MODULE_7__/* .getStore */ .bh)("referralCode")}`);
            toast({
              title: "success",
              status: "success",
              duration: 3000,
              isClosable: true
            });
          },
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
            src: (_assets_imgs_copy_png__WEBPACK_IMPORTED_MODULE_9___default()),
            w: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(19.5),
              lg: "19.5px"
            },
            h: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(18),
              lg: "18px"
            },
            mr: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(5),
              lg: "5px"
            }
          }), "Copy Link"]
        })
      })]
    })
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Index));

/***/ }),

/***/ 9547:
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
/* harmony import */ var _assets_imgs_logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3569);
/* harmony import */ var _assets_imgs_logo_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_logo_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _BaseModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1803);
/* harmony import */ var _TermsOfUse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3019);
/* harmony import */ var _PrivacyPolicy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1380);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);











function Index() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useToast)();
  const [showTermsOfService, setShowTermsOfService] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useBoolean)(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useBoolean)(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    w: "full",
    px: {
      base: (router === null || router === void 0 ? void 0 : router.pathname) === "/" ? (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(16) : 0,
      lg: 0
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      w: {
        base: "full",
        lg: "1280px"
      },
      pt: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(24),
        lg: "44px"
      },
      pb: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(30),
        lg: "70px"
      },
      pr: {
        base: 0,
        lg: "70px"
      },
      boxSizing: "border-box",
      flexDir: "column",
      borderTop: "1px solid",
      borderColor: "black.1800",
      mx: "auto",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        justifyContent: {
          base: "flex-start",
          lg: "space-between"
        },
        flexDir: {
          base: "column",
          lg: "row"
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          flexDir: "column",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
            src: (_assets_imgs_logo_png__WEBPACK_IMPORTED_MODULE_5___default()),
            w: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(137),
              lg: "168px"
            },
            h: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(31),
              lg: "38px"
            },
            mb: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(32),
              lg: "56px"
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            flexDir: "column",
            fontFamily: "Eurostile",
            fontWeight: "bolder",
            bgGradient: "linear(to-r, #32C5FF,#B620E0, #F7B500)",
            bgClip: "text",
            fontSize: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(35),
              lg: "35px"
            },
            lineHeight: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(35),
              lg: "35px"
            },
            mb: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(27),
              lg: "55px"
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
              children: `WORLD'S #1`
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
              children: `WEB3 GATEWAY`
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          w: {
            base: "auto",
            lg: "300px"
          },
          mt: {
            base: 0,
            lg: "20px"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            flexDir: "column",
            mr: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(56),
              lg: "94px"
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
              fontFamily: "SofiaPro",
              fontWeight: "600",
              color: "white.100",
              fontSize: {
                base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(18),
                lg: "18px"
              },
              mb: {
                base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(23),
                lg: "23px"
              },
              children: "Gamifly"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
              flexDir: "column",
              color: "gray.400",
              fontFamily: "SofiaPro",
              fontSize: {
                base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(15),
                lg: "15px"
              },
              lineHeight: {
                base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(15),
                lg: "15px"
              },
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                w: "fit-content",
                cursor: "pointer",
                borderBottom: "1px solid",
                borderColor: "gray.400",
                mb: {
                  base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(20),
                  lg: "20px"
                },
                _hover: {
                  color: "green.1000",
                  borderColor: "green.1000"
                },
                onClick: () => {
                  toast({
                    title: `coming soon`,
                    status: "info",
                    isClosable: true
                  });
                },
                children: "About US"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                w: "fit-content",
                cursor: "pointer",
                borderBottom: "1px solid",
                borderColor: "gray.400",
                mb: {
                  base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(20),
                  lg: "20px"
                },
                _hover: {
                  color: "green.1000",
                  borderColor: "green.1000"
                },
                onClick: () => router.push("/games"),
                children: "All Games"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                w: "fit-content",
                cursor: "pointer",
                borderBottom: "1px solid",
                borderColor: "gray.400",
                _hover: {
                  color: "green.1000",
                  borderColor: "green.1000"
                },
                onClick: () => {
                  toast({
                    title: `coming soon`,
                    status: "info",
                    isClosable: true
                  });
                },
                children: "Launch with us"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            flexDir: "column",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
              fontFamily: "SofiaPro",
              fontWeight: "600",
              color: "white.100",
              fontSize: {
                base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(18),
                lg: "18px"
              },
              mb: {
                base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(23),
                lg: "23px"
              },
              onClick: () => {
                toast({
                  title: `coming soon`,
                  status: "info",
                  isClosable: true
                });
              },
              children: "Recources"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
              flexDir: "column",
              color: "gray.400",
              fontFamily: "SofiaPro",
              fontSize: {
                base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(15),
                lg: "15px"
              },
              lineHeight: {
                base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(15),
                lg: "15px"
              },
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                w: "fit-content",
                cursor: "pointer",
                borderBottom: "1px solid",
                borderColor: "gray.400",
                mb: {
                  base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(20),
                  lg: "20px"
                },
                _hover: {
                  color: "green.1000",
                  borderColor: "green.1000"
                },
                onClick: () => {
                  toast({
                    title: `coming soon`,
                    status: "info",
                    isClosable: true
                  });
                },
                children: "Support"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                w: "fit-content",
                cursor: "pointer",
                borderBottom: "1px solid",
                borderColor: "gray.400",
                _hover: {
                  color: "green.1000",
                  borderColor: "green.1000"
                },
                onClick: () => {
                  toast({
                    title: `coming soon`,
                    status: "info",
                    isClosable: true
                  });
                },
                children: "Shop"
              })]
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        mt: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(32),
          lg: 0
        },
        flexDir: {
          base: "column",
          lg: "row"
        },
        justifyContent: {
          base: "flex-start",
          lg: "space-between"
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          fontFamily: "SofiaPro",
          fontWeight: "600",
          color: "white.100",
          order: {
            base: 2,
            lg: 0
          },
          mt: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(37),
            lg: 0
          },
          fontSize: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(18),
            lg: "18px"
          },
          lineHeight: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(18),
            lg: "18px"
          },
          children: "@2022 Gamifly, Inc. All Rights Reserved."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          justifyContent: "flex-start",
          fontFamily: "SofiaPro",
          fontWeight: "400",
          color: "blue.300",
          w: {
            base: "auto",
            lg: "300px"
          },
          flexDir: {
            base: "column",
            lg: "row"
          },
          fontSize: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(15),
            lg: "15px"
          },
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            mr: {
              base: 0,
              lg: "18px"
            },
            w: "fit-content",
            borderBottom: "1px solid",
            borderColor: "blue.300",
            cursor: "pointer",
            _hover: {
              color: "white.100",
              borderColor: "white.100"
            },
            onClick: () => {
              toast({
                title: `coming soon`,
                status: "info",
                isClosable: true
              });
            },
            children: "Copyright"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            mr: {
              base: 0,
              lg: "18px"
            },
            mt: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(23),
              lg: 0
            },
            w: "fit-content",
            borderBottom: "1px solid",
            borderColor: "blue.300",
            cursor: "pointer",
            _hover: {
              color: "white.100",
              borderColor: "white.100"
            },
            onClick: () => setShowTermsOfService.on(),
            children: "Term of service"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            mt: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(23),
              lg: 0
            },
            w: "fit-content",
            borderBottom: "1px solid",
            borderColor: "blue.300",
            cursor: "pointer",
            _hover: {
              color: "white.100",
              borderColor: "white.100"
            },
            onClick: () => setShowPrivacyPolicy.on(),
            children: "Privacy policy"
          })]
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_BaseModal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      px: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(50),
        lg: "100px"
      },
      pt: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(50),
        lg: "100px"
      },
      pb: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(50),
        lg: "80px"
      },
      isShow: showTermsOfService,
      close: () => setShowTermsOfService.off(),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        overflow: "auto",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_TermsOfUse__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_BaseModal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      px: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(50),
        lg: "100px"
      },
      pt: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(50),
        lg: "100px"
      },
      pb: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(50),
        lg: "80px"
      },
      isShow: showPrivacyPolicy,
      close: () => setShowPrivacyPolicy.off(),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        overflow: "auto",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_PrivacyPolicy__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Index));

/***/ }),

/***/ 3351:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export pageList */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_imgs_notificationIcon_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8853);
/* harmony import */ var _assets_imgs_notificationIcon_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_notificationIcon_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _assets_imgs_transfer_webp__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3062);
/* harmony import */ var _assets_imgs_transfer_webp__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_transfer_webp__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _assets_imgs_greenClose_webp__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(9254);
/* harmony import */ var _assets_imgs_greenClose_webp__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_greenClose_webp__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _assets_imgs_userProfile_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(25);
/* harmony import */ var _assets_imgs_userProfile_png__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_userProfile_png__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _assets_imgs_buttonBg_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(730);
/* harmony import */ var _assets_imgs_buttonBg_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_buttonBg_png__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _assets_imgs_footer1_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7957);
/* harmony import */ var _assets_imgs_footer1_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_footer1_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_imgs_footer2_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6607);
/* harmony import */ var _assets_imgs_footer2_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_footer2_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_imgs_footer3_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8865);
/* harmony import */ var _assets_imgs_footer3_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_footer3_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_imgs_footer4_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(707);
/* harmony import */ var _assets_imgs_footer4_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_footer4_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_imgs_logo_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3569);
/* harmony import */ var _assets_imgs_logo_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_logo_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_imgs_menuGame_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4848);
/* harmony import */ var _assets_imgs_menuGame_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_menuGame_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_imgs_menuNFT_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2903);
/* harmony import */ var _assets_imgs_menuNFT_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_menuNFT_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_imgs_menuTou_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8210);
/* harmony import */ var _assets_imgs_menuTou_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_menuTou_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _BaseButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5742);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8342);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _LogIn__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(3198);
/* harmony import */ var _MessageList__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(7084);
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(7384);
/* harmony import */ var _stores_global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3294);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_global__WEBPACK_IMPORTED_MODULE_7__, _LogIn__WEBPACK_IMPORTED_MODULE_19__, _MessageList__WEBPACK_IMPORTED_MODULE_22__]);
([_stores_global__WEBPACK_IMPORTED_MODULE_7__, _LogIn__WEBPACK_IMPORTED_MODULE_19__, _MessageList__WEBPACK_IMPORTED_MODULE_22__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














 // import menuAbout from "@/assets/imgs/menuAbout.png";


 // import LoginOut from "../LoginOut";



 // import { useWeb3React } from "@web3-react/core";
// import { connectorLocalStorageKey } from "@/connect/connectors";





// 页面数组
const pageList = [{
  name: "GAMES",
  icon: (_assets_imgs_menuGame_png__WEBPACK_IMPORTED_MODULE_4___default()),
  path: "/games"
}, {
  name: "NFT",
  icon: (_assets_imgs_menuNFT_png__WEBPACK_IMPORTED_MODULE_5___default()),
  path: "/purchase"
}, {
  name: "TOURNAMENTS",
  icon: (_assets_imgs_menuTou_png__WEBPACK_IMPORTED_MODULE_6___default()),
  path: "/tournaments"
} // {
//   name: "ABOUT US",
//   icon: menuAbout,
//   path: "",
// },
// {
//   name: "Leader boards",
//   path: "/leaderBoards",
// },
// {
//   name: "Notifications",
//   path: "/notifications",
// },
// {
//   name: "Gamifly info",
//   path: "/gamiflyInfo",
// },
// {
//   name: "TOP UP & WITHDRAW",
//   icon: menuWithdraw,
//   path: "/transfer",
// },
];

function Index({
  notificationList
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    userInfo
  } = (0,_stores_global__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(); // const { deactivate } = useWeb3React();
  // const [logOut, setLogOut] = useBoolean(false); // 登出弹窗

  const [loginModal, setLoginModal] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useBoolean)(false); // 登陆弹窗

  const [isLogin, setIsLogin] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useBoolean)(userInfo === null || userInfo === void 0 ? void 0 : userInfo.id); // 是否登陆
  // const [notification, setNotification] = useState(1); // 未读消息数量

  const [open, setOpen] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useBoolean)(false);
  const {
    0: newMessageList,
    1: setNewMessageList
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: previousMessageList,
    1: setPreviousMessageList
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [loginLoading, setLoginLoading] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useBoolean)(false); // const disconnectWallet = async () => {
  //   try {
  //     await deactivate();
  //     deleteStore(connectorLocalStorageKey);
  //     setStore("isLogin", false);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (userInfo && userInfo !== null && userInfo !== void 0 && userInfo.id) {
      setIsLogin.on();
    } else {
      setIsLogin.off();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [userInfo]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (notificationList && notificationList.length > 0) {
      const noList = [];
      const list = [];
      notificationList.map(item => {
        (item === null || item === void 0 ? void 0 : item.status) === 0 ? noList.push(item) : list.push(item);
      });
      setNewMessageList(noList);
      setPreviousMessageList(list); // setNotification(noList.length);
    }
  }, [notificationList]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    display: {
      base: "none",
      lg: "flex"
    },
    w: "full",
    h: "150px",
    py: "50px",
    pos: "fixed",
    top: "0",
    left: "0",
    backdropFilter: "blur(15px)",
    zIndex: "9",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      justifyContent: "space-between",
      alignItems: "center",
      w: "1280px",
      mx: "auto",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        alignItems: "center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
          src: (_assets_imgs_logo_png__WEBPACK_IMPORTED_MODULE_8___default()),
          w: "163px",
          h: "37px",
          mr: "50px",
          cursor: "pointer",
          onClick: () => router.push("/")
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
          spacing: "50px",
          alignItems: "center",
          children: pageList.map((item, index) => {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
              fontSize: "15px",
              fontWeight: "bolder",
              lineHeight: "15px",
              fontFamily: "Eurostile",
              cursor: "pointer",
              _hover: {
                color: "green.1000"
              },
              _active: {
                color: "green.1000"
              },
              onClick: () => router.push(item === null || item === void 0 ? void 0 : item.path),
              children: item === null || item === void 0 ? void 0 : item.name
            }, index);
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        alignItems: "center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
          spacing: "13px",
          mr: "13px",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            w: "40px",
            h: "40px",
            alignItems: "center",
            justifyContent: "center",
            bgColor: "black.100",
            borderRadius: "12px",
            cursor: "pointer",
            _hover: {
              boxShadow: "0px 2px 20px RGBA(203, 252, 98, 0.28)"
            },
            _active: {
              boxShadow: "0px 2px 20px RGBA(203, 252, 98, 0.28)"
            },
            onClick: () => window.open(" https://discord.gg/FMGNrjk75k"),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
              src: (_assets_imgs_footer1_png__WEBPACK_IMPORTED_MODULE_9___default())
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            w: "40px",
            h: "40px",
            alignItems: "center",
            justifyContent: "center",
            bgColor: "black.100",
            borderRadius: "12px",
            cursor: "pointer",
            _hover: {
              boxShadow: "0px 2px 20px RGBA(203, 252, 98, 0.28)"
            },
            _active: {
              boxShadow: "0px 2px 20px RGBA(203, 252, 98, 0.28)"
            },
            onClick: () => window.open("https://twitter.com/Gamiflyco"),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
              src: (_assets_imgs_footer4_png__WEBPACK_IMPORTED_MODULE_10___default())
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            w: "40px",
            h: "40px",
            alignItems: "center",
            justifyContent: "center",
            bgColor: "black.100",
            borderRadius: "12px",
            cursor: "pointer",
            _hover: {
              boxShadow: "0px 2px 20px RGBA(203, 252, 98, 0.28)"
            },
            _active: {
              boxShadow: "0px 2px 20px RGBA(203, 252, 98, 0.28)"
            },
            onClick: () => window.open("http://t.me/gamifly"),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
              src: (_assets_imgs_footer3_png__WEBPACK_IMPORTED_MODULE_11___default())
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            w: "40px",
            h: "40px",
            alignItems: "center",
            justifyContent: "center",
            bgColor: "black.100",
            borderRadius: "12px",
            cursor: "pointer",
            _hover: {
              boxShadow: "0px 2px 20px RGBA(203, 252, 98, 0.28)"
            },
            _active: {
              boxShadow: "0px 2px 20px RGBA(203, 252, 98, 0.28)"
            },
            onClick: () => window.open("https://instagram.com/gamifly?igshid=YmMyMTA2M2Y="),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
              src: (_assets_imgs_footer2_png__WEBPACK_IMPORTED_MODULE_12___default())
            })
          })]
        }), isLogin ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_BaseButton__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
          className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_14___default().notificationIcon),
          w: "140px",
          h: "40px",
          bgColor: "black.100",
          borderRadius: "12px",
          boxShadow: "none",
          pos: "relative",
          _hover: {
            boxShadow: "0px 2px 20px RGBA(203, 252, 98, 0.28)"
          },
          _active: {
            boxShadow: "0px 2px 20px RGBA(203, 252, 98, 0.28)"
          },
          onClick: () => setOpen.on(),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
            w: "32px",
            h: "32px",
            src: (_assets_imgs_notificationIcon_png__WEBPACK_IMPORTED_MODULE_15___default())
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            fontFamily: "Eurostile",
            fontSize: "13px",
            lineHeight: "13px",
            mt: "3px",
            color: "white.100",
            children: "NOTIFICATIONS"
          })]
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_BaseButton__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
          isLoading: loginLoading,
          bgImage: (_assets_imgs_buttonBg_png__WEBPACK_IMPORTED_MODULE_16___default()),
          bgSize: "100%",
          loadingText: "Log In",
          w: "180px",
          h: "50px",
          bgColor: "transparent",
          boxShadow: "none",
          fontFamily: "Eurostile",
          fontSize: "17px",
          fontWeight: "800",
          color: "black.1700",
          _hover: {
            bgColor: "transparent"
          },
          _active: {
            bgColor: "transparent"
          },
          onClick: () => setLoginModal.on(),
          children: "Log In"
        }), isLogin && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_BaseButton__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
          px: {
            base: "4px",
            lg: "4px"
          },
          ml: {
            base: "11px",
            lg: "13px"
          },
          h: "40px",
          bgColor: "green.1000",
          borderRadius: "12px",
          boxShadow: "none",
          pos: "relative",
          _hover: {
            boxShadow: "0px 2px 20px RGBA(203, 252, 98, 0.28)"
          },
          _active: {
            boxShadow: "0px 2px 20px RGBA(203, 252, 98, 0.28)"
          },
          onClick: () => router.push("/transfer"),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
            filter: "brightness(100) invert(1)",
            w: "20px",
            h: "20px",
            mr: {
              base: "2px",
              lg: "3px"
            },
            src: (_assets_imgs_transfer_webp__WEBPACK_IMPORTED_MODULE_17___default())
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            fontFamily: "Eurostile",
            fontSize: "15px",
            lineHeight: "13px",
            fontWeight: "1000",
            color: "black.100",
            children: "TOP UP & WITHDRAW"
          })]
        }), isLogin && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
          src: userInfo !== null && userInfo !== void 0 && userInfo.avatar ? `${window.imgUrl.imageUrl}${userInfo === null || userInfo === void 0 ? void 0 : userInfo.avatar}` : (_assets_imgs_userProfile_png__WEBPACK_IMPORTED_MODULE_18___default()),
          w: "45px",
          h: "45px",
          ml: "13px",
          my: "auto",
          borderRadius: "50%",
          cursor: "pointer",
          onClick: () => router.push("/profile")
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_LogIn__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
        loginModal: loginModal,
        setLoginModal: boo => boo ? setLoginModal.on() : setLoginModal.off(),
        setIsLogin: boo => {
          {
            console.log(boo, "收到的boo");

            if (boo) {
              (0,_utils_storage__WEBPACK_IMPORTED_MODULE_20__/* .setStore */ .PQ)("isLogin", true);
              setIsLogin.on();
            } else {
              (0,_utils_storage__WEBPACK_IMPORTED_MODULE_20__/* .setStore */ .PQ)("isLogin", false);
              setIsLogin.off();
            }
          }
        },
        setLoginLoading: boo => {
          boo ? setLoginLoading.on() : setLoginLoading.off();
        }
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Drawer, {
        isOpen: open,
        size: "sm",
        placement: "right",
        onClose: () => setOpen.off(),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.DrawerContent, {
          w: "355px",
          bgColor: "black.700",
          pt: "50px",
          px: "15px",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.DrawerBody, {
            h: "calc(100vh - 50px",
            p: "0",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
              justifyContent: "space-between",
              mb: "15px",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                fontFamily: "Orbitron",
                fontSize: "22px",
                fontWeight: "600",
                lineHeight: "30px",
                color: "white.100",
                children: "Notifications"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                src: (_assets_imgs_greenClose_webp__WEBPACK_IMPORTED_MODULE_21___default()),
                w: "30px",
                h: "30px",
                cursor: "pointer",
                onClick: () => setOpen.off()
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
              fontFamily: "Nunito",
              textStyle: "14",
              fontWeight: "400",
              color: "white.500",
              mb: "10px",
              children: "New"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_MessageList__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
              type: 0,
              messageList: newMessageList
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
              fontFamily: "Nunito",
              textStyle: "14",
              fontWeight: "400",
              color: "white.500",
              my: "10px",
              children: "Previous"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_MessageList__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
              messageList: previousMessageList
            })]
          })
        })
      })]
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Index));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9845:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export pageList */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_px2vw__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6483);
/* harmony import */ var _assets_imgs_menu_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6690);
/* harmony import */ var _assets_imgs_menu_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_menu_png__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _assets_imgs_logo_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3569);
/* harmony import */ var _assets_imgs_logo_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_logo_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _assets_imgs_close_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6197);
/* harmony import */ var _assets_imgs_close_png__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_close_png__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _assets_imgs_userProfile_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(25);
/* harmony import */ var _assets_imgs_userProfile_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_userProfile_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_imgs_menuHome_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(4131);
/* harmony import */ var _assets_imgs_menuHome_png__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_menuHome_png__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _assets_imgs_menuNotifications_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(2563);
/* harmony import */ var _assets_imgs_menuNotifications_png__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_menuNotifications_png__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _assets_imgs_mobileLine_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6850);
/* harmony import */ var _assets_imgs_mobileLine_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_mobileLine_png__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _assets_imgs_footer1_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(7957);
/* harmony import */ var _assets_imgs_footer1_png__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_footer1_png__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _assets_imgs_footer2_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(6607);
/* harmony import */ var _assets_imgs_footer2_png__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_footer2_png__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _assets_imgs_footer3_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(8865);
/* harmony import */ var _assets_imgs_footer3_png__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_footer3_png__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _assets_imgs_footer4_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(707);
/* harmony import */ var _assets_imgs_footer4_png__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_footer4_png__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _LoginOut__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(1116);
/* harmony import */ var _LogIn__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(3198);
/* harmony import */ var _InviteFriend__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(5112);
/* harmony import */ var _FriendCode__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(2396);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8054);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7384);
/* harmony import */ var _connect_connectors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8202);
/* harmony import */ var _stores_global__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3294);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8887);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_imgs_menuGame_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4848);
/* harmony import */ var _assets_imgs_menuGame_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_menuGame_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_imgs_menuNFT_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2903);
/* harmony import */ var _assets_imgs_menuNFT_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_menuNFT_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_imgs_menuTou_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8210);
/* harmony import */ var _assets_imgs_menuTou_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_menuTou_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_imgs_menuWithdraw_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5860);
/* harmony import */ var _assets_imgs_menuWithdraw_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_menuWithdraw_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_global__WEBPACK_IMPORTED_MODULE_10__, _LoginOut__WEBPACK_IMPORTED_MODULE_25__, _LogIn__WEBPACK_IMPORTED_MODULE_26__, _FriendCode__WEBPACK_IMPORTED_MODULE_28__]);
([_stores_global__WEBPACK_IMPORTED_MODULE_10__, _LoginOut__WEBPACK_IMPORTED_MODULE_25__, _LogIn__WEBPACK_IMPORTED_MODULE_26__, _FriendCode__WEBPACK_IMPORTED_MODULE_28__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






























// 页面数组
const pageList = [{
  name: "GAMES",
  icon: (_assets_imgs_menuGame_png__WEBPACK_IMPORTED_MODULE_6___default()),
  path: "/games"
}, {
  name: "NFT",
  icon: (_assets_imgs_menuNFT_png__WEBPACK_IMPORTED_MODULE_7___default()),
  path: "/purchase"
}, {
  name: "TOURNAMENTS",
  icon: (_assets_imgs_menuTou_png__WEBPACK_IMPORTED_MODULE_8___default()),
  path: "/tournaments"
}, // {
//   name: "ABOUT US",
//   icon: menuAbout,
//   path: "",
// },
// {
//   name: "Leader boards",
//   path: "/leaderBoards",
// },
// {
//   name: "Notifications",
//   path: "/notifications",
// },
// {
//   name: "Gamifly info",
//   path: "/gamiflyInfo",
// },
{
  name: "TOP UP & WITHDRAW",
  icon: (_assets_imgs_menuWithdraw_png__WEBPACK_IMPORTED_MODULE_9___default()),
  path: "/transfer"
}];

function Index({
  loginOutClick
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useToast)();
  const {
    userInfo
  } = (0,_stores_global__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)();
  const {
    deactivate
  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_3__.useWeb3React)();
  const {
    0: inviteCode
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(router.query.inviteCode);
  const [open, setOpen] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useBoolean)(false);
  const [logOut, setLogOut] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useBoolean)(false); // 登出弹窗

  const [loginModal, setLoginModal] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useBoolean)(false); // 登陆弹窗

  const [isLogin, setIsLogin] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useBoolean)(userInfo === null || userInfo === void 0 ? void 0 : userInfo.id); // 是否登陆

  const [inviteShow, setInviteShow] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useBoolean)(false);
  const [friendShow, setFriendShow] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useBoolean)(false);

  const disconnectWallet = async () => {
    try {
      await deactivate();
      (0,_utils_storage__WEBPACK_IMPORTED_MODULE_11__/* .deleteStore */ .Av)(_connect_connectors__WEBPACK_IMPORTED_MODULE_12__/* .connectorLocalStorageKey */ .OM);
      (0,_utils_storage__WEBPACK_IMPORTED_MODULE_11__/* .setStore */ .PQ)("isLogin", false);
    } catch (err) {
      console.error(err);
    }
  };

  const userImg = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
    src: userInfo !== null && userInfo !== void 0 && userInfo.avatar ? `${window.imgUrl.imageUrl}${userInfo === null || userInfo === void 0 ? void 0 : userInfo.avatar}` : (_assets_imgs_userProfile_png__WEBPACK_IMPORTED_MODULE_13___default()),
    w: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(37),
    h: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(37),
    mr: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(12),
    borderRadius: "50%",
    my: "auto",
    onClick: () => router.push("/profile")
  }), // eslint-disable-next-line react-hooks/exhaustive-deps
  [userInfo]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (inviteCode) {
      if (userInfo && userInfo !== null && userInfo !== void 0 && userInfo.id && !(userInfo !== null && userInfo !== void 0 && userInfo.referral_id) || !(userInfo !== null && userInfo !== void 0 && userInfo.id)) {
        setFriendShow.on();
      }
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [inviteCode]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (userInfo && userInfo !== null && userInfo !== void 0 && userInfo.id) {
      setIsLogin.on();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [userInfo]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    display: {
      base: "flex",
      lg: "none"
    },
    w: "full",
    pos: "fixed",
    top: "0",
    left: "0",
    bgColor: "RGBA(15, 15, 15, 0.5)",
    justifyContent: "space-between",
    zIndex: 9,
    h: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(90),
    px: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(16),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
      w: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(124),
      h: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(28),
      my: "auto",
      src: (_assets_imgs_logo_png__WEBPACK_IMPORTED_MODULE_15___default()),
      onClick: () => router.push("/")
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
      src: (_assets_imgs_menu_png__WEBPACK_IMPORTED_MODULE_16___default()),
      w: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(20),
      h: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(18),
      my: "auto",
      onClick: () => setOpen.on()
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
      display: open ? "flex" : "none",
      w: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(292),
      flexDir: "column",
      h: "100vh",
      pos: "fixed",
      top: "0",
      right: "0",
      backdropFilter: "blur(50px)",
      zIndex: "9",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
        src: (_assets_imgs_mobileLine_png__WEBPACK_IMPORTED_MODULE_17___default()),
        w: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(8),
        h: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(110),
        m: "auto",
        pos: "absolute",
        left: "0",
        top: "0",
        bottom: "0",
        transform: "rotate(180deg)"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
        h: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(90),
        w: "full",
        justifyContent: "flex-end",
        alignItems: "center",
        borderBottom: "1px solid",
        borderColor: "green.1000",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
          src: (_assets_imgs_close_png__WEBPACK_IMPORTED_MODULE_18___default()),
          w: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(18),
          h: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(18),
          mr: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(27),
          onClick: () => setOpen.off()
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
        px: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(15),
        pt: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(35),
        fontSize: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(19),
        color: "white.100",
        alignItems: "flex-start",
        flexDir: "column",
        boxSizing: "border-box",
        fontFamily: "Eurostile",
        fontWeight: "bolder",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
          w: "full",
          flexDir: "column",
          pl: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(20),
          mb: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(30),
          boxSizing: "border-box",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
            mb: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(30),
            w: "full",
            children: [userImg, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
              lineHeight: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(37),
              mt: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(5),
              children: "PROFILE"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
            w: "full",
            mb: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(25),
            onClick: () => {
              router.push("/");
              setOpen.off();
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
              src: (_assets_imgs_menuHome_png__WEBPACK_IMPORTED_MODULE_19___default()),
              w: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(40),
              h: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(40),
              mr: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(10)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
              lineHeight: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(37),
              mt: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(5),
              children: "HOME"
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
            w: "full",
            flexDir: "column",
            children: pageList.map((item, index) => {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                mb: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(25),
                onClick: () => {
                  if ((item === null || item === void 0 ? void 0 : item.path) === "") {
                    toast({
                      title: `coming soon`,
                      status: "info",
                      isClosable: true
                    });
                  } else {
                    router.push(item === null || item === void 0 ? void 0 : item.path);
                    setOpen.off();
                  }
                },
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
                  src: item === null || item === void 0 ? void 0 : item.icon,
                  w: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(40),
                  h: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(40),
                  mr: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(10)
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                  lineHeight: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(37),
                  mt: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(5),
                  children: item === null || item === void 0 ? void 0 : item.name
                })]
              }, index);
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
            mb: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(30),
            onClick: () => {
              router.push("/notifications");
              setOpen.off();
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
              src: (_assets_imgs_menuNotifications_png__WEBPACK_IMPORTED_MODULE_20___default()),
              w: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(40),
              h: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(40),
              mr: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(10)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
              lineHeight: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(37),
              mt: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(5),
              children: "NOTIFICATIONS"
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {
              spacing: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(13),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                w: "40px",
                h: "40px",
                alignItems: "center",
                justifyContent: "center",
                bgColor: "black.100",
                borderRadius: "12px",
                cursor: "pointer",
                _hover: {
                  boxShadow: "0px 2px 20px RGBA(203, 252, 98, 0.28)"
                },
                _active: {
                  boxShadow: "0px 2px 20px RGBA(203, 252, 98, 0.28)"
                },
                onClick: () => window.open(" https://discord.gg/FMGNrjk75k"),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
                  src: (_assets_imgs_footer1_png__WEBPACK_IMPORTED_MODULE_21___default())
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                w: "40px",
                h: "40px",
                alignItems: "center",
                justifyContent: "center",
                bgColor: "black.100",
                borderRadius: "12px",
                cursor: "pointer",
                _hover: {
                  boxShadow: "0px 2px 20px RGBA(203, 252, 98, 0.28)"
                },
                _active: {
                  boxShadow: "0px 2px 20px RGBA(203, 252, 98, 0.28)"
                },
                onClick: () => window.open("https://twitter.com/Gamiflyco"),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
                  src: (_assets_imgs_footer4_png__WEBPACK_IMPORTED_MODULE_22___default())
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                w: "40px",
                h: "40px",
                alignItems: "center",
                justifyContent: "center",
                bgColor: "black.100",
                borderRadius: "12px",
                cursor: "pointer",
                _hover: {
                  boxShadow: "0px 2px 20px RGBA(203, 252, 98, 0.28)"
                },
                _active: {
                  boxShadow: "0px 2px 20px RGBA(203, 252, 98, 0.28)"
                },
                onClick: () => window.open("http://t.me/gamifly"),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
                  src: (_assets_imgs_footer3_png__WEBPACK_IMPORTED_MODULE_23___default())
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                w: "40px",
                h: "40px",
                alignItems: "center",
                justifyContent: "center",
                bgColor: "black.100",
                borderRadius: "12px",
                cursor: "pointer",
                _hover: {
                  boxShadow: "0px 2px 20px RGBA(203, 252, 98, 0.28)"
                },
                _active: {
                  boxShadow: "0px 2px 20px RGBA(203, 252, 98, 0.28)"
                },
                onClick: () => window.open("https://instagram.com/gamifly?igshid=YmMyMTA2M2Y="),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
                  src: (_assets_imgs_footer2_png__WEBPACK_IMPORTED_MODULE_24___default())
                })
              })]
            })
          })]
        }), isLogin && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
          w: "full",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black.1600",
          border: "1px solid",
          borderColor: "green.1000",
          boxShadow: "0px 2px 30px RGBA(196, 248, 99, 0.4)",
          borderRadius: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(5),
          h: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(50),
          mb: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(12),
          onClick: () => {
            copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4___default()(`https://www.gamifly.co?inviteCode=${(0,_utils_storage__WEBPACK_IMPORTED_MODULE_11__/* .getStore */ .bh)("referralCode")}`);
            toast({
              title: "referral link copy success",
              status: "success",
              duration: 3000,
              isClosable: true
            });
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
            fontFamily: "Eurostile",
            fontWeight: "bolder",
            color: "green.1000",
            fontSize: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(17),
            mt: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(5),
            children: "INVITE FRIENDS"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
          w: "full",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "green.1000",
          border: "1px solid",
          borderColor: "green.1000",
          borderRadius: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(5),
          h: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(50),
          mb: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(12),
          onClick: () => {
            if (isLogin) {
              setOpen.off();
              setLogOut.on();
              disconnectWallet();
            } else {
              setOpen.off();
              setLoginModal.on();
            }
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
            fontFamily: "Eurostile",
            fontWeight: "bolder",
            color: "black.1600",
            fontSize: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(17),
            mt: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(5),
            children: isLogin ? "LOG OUT" : "LOG IN"
          })
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
      display: open ? "flex" : "none",
      w: `calc(100% - ${(0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(292)})`,
      h: "100vh",
      pos: "fixed",
      left: "0",
      top: "0",
      bgColor: "black.500",
      onClick: () => setOpen.off()
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_LoginOut__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
      logOut: logOut,
      setLogOut: boo => boo ? setLogOut.on() : setLogOut.off(),
      confirmLogOut: () => {
        setIsLogin.off();
        loginOutClick();
      }
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_LogIn__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
      loginModal: loginModal,
      setLoginModal: boo => boo ? setLoginModal.on() : setLoginModal.off(),
      setIsLogin: boo => boo ? setIsLogin.on() : setIsLogin.off()
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_InviteFriend__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
      isShow: inviteShow,
      setIsShow: () => setInviteShow.off()
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_FriendCode__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
      code: inviteCode,
      isShow: friendShow,
      setIsShow: () => setFriendShow.off()
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Index));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6130:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_imgs_help_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2958);
/* harmony import */ var _assets_imgs_help_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_help_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_imgs_numberBg_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5434);
/* harmony import */ var _assets_imgs_numberBg_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_numberBg_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_imgs_rewardLine_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6709);
/* harmony import */ var _assets_imgs_rewardLine_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_rewardLine_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8887);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7384);
/* harmony import */ var _apis_userInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1639);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5941);
/* harmony import */ var _stores_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3294);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_3__, _stores_global__WEBPACK_IMPORTED_MODULE_5__]);
([swr__WEBPACK_IMPORTED_MODULE_3__, _stores_global__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function Index({
  helpClick
}) {
  const {
    userInfo
  } = (0,_stores_global__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
  const {
    0: rewards,
    1: setRewards
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0.0);
  const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useToast)();
  const {
    0: showRewards,
    1: setShowRewards
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("00000"); // 获取我的积分

  const {
    data: getRewardAmountData
  } = (0,swr__WEBPACK_IMPORTED_MODULE_3__["default"])(userInfo && userInfo !== null && userInfo !== void 0 && userInfo.id ? [_apis_userInfo__WEBPACK_IMPORTED_MODULE_6__/* .getRewardAmount.key */ .pS.key] : null, _ => _apis_userInfo__WEBPACK_IMPORTED_MODULE_6__/* .getRewardAmount.fetcher */ .pS.fetcher(userInfo === null || userInfo === void 0 ? void 0 : userInfo.id), {
    revalidateOnFocus: false
  });
  const NumberItm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(({
    str
  }) => {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      bgImage: (_assets_imgs_numberBg_png__WEBPACK_IMPORTED_MODULE_7___default()),
      w: "27px",
      h: "40px",
      bgSize: "100%",
      justifyContent: "center",
      alignItems: "center",
      mr: "3px",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
        fontFamily: "Krungthep",
        fontSize: "27px",
        fontWeight: "400",
        color: rewards === 0 ? "RGB(255, 255, 255, 0.29)" : "green.1000",
        children: str
      })
    });
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (rewards === 0) {
      setShowRewards(`000.00`);
    } else if (rewards < 10) {
      setShowRewards(`00${rewards.toFixed(2)}`);
    } else if (rewards < 100) {
      setShowRewards(`0${rewards.toFixed(2)}`);
    } else if (rewards > 999.99) {
      setShowRewards(`999.99`);
    } else {
      setShowRewards(`${rewards.toFixed(2)}`);
    }
  }, [rewards]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (getRewardAmountData) {
      (getRewardAmountData === null || getRewardAmountData === void 0 ? void 0 : getRewardAmountData.value) === 0 ? setRewards(0) : setRewards(getRewardAmountData === null || getRewardAmountData === void 0 ? void 0 : getRewardAmountData.value);
    }
  }, [getRewardAmountData]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    display: {
      base: "none",
      lg: "flex"
    },
    w: "286px",
    h: "148px",
    pos: "fixed",
    bottom: "113px",
    right: "0",
    bgColor: "black.1900",
    border: "1px solid",
    borderColor: "green.1000",
    borderRadius: "15px",
    borderRight: "none",
    borderTopRightRadius: "0",
    borderBottomRightRadius: "0",
    flexDir: "column",
    zIndex: "99",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      flexDir: "column",
      alignItems: "center",
      justifyContent: "center",
      pt: "8px",
      boxSizing: "border-box",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        w: "full",
        justifyContent: "space-between",
        px: "15px",
        boxSizing: "border-box",
        mb: "17px",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
          src: (_assets_imgs_help_png__WEBPACK_IMPORTED_MODULE_8___default()),
          w: "14px",
          h: "14px",
          opacity: "0"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          fontFamily: "SofiaPro",
          fontSize: "18px",
          fontWeight: "600",
          lineHeight: "22px",
          color: "white.100",
          children: "My Rewards Earned"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
          src: (_assets_imgs_help_png__WEBPACK_IMPORTED_MODULE_8___default()),
          w: "14px",
          h: "14px",
          my: "auto",
          cursor: "pointer",
          onClick: () => helpClick === null || helpClick === void 0 ? void 0 : helpClick()
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        mb: "16px",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(NumberItm, {
          str: showRewards[0]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(NumberItm, {
          str: showRewards[1]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(NumberItm, {
          str: showRewards[2]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          flexDir: "column",
          justifyContent: "flex-end",
          fontFamily: "Krungthep",
          fontSize: "27px",
          lineHeight: "27px",
          fontWeight: "400",
          color: "green.1000",
          mx: "5px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            children: "."
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(NumberItm, {
          str: showRewards[4]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(NumberItm, {
          str: showRewards[5]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          fontFamily: "Krungthep",
          fontSize: "13px",
          lineHeight: "40px",
          fontWeight: "400",
          color: "green.1000",
          ml: "9px",
          children: "USDC"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
        src: (_assets_imgs_rewardLine_png__WEBPACK_IMPORTED_MODULE_9___default()),
        w: "252px",
        h: "1px",
        mx: "auto"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        w: "full",
        h: "40px",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "17px",
        fontFamily: "Eurostile",
        fontWeight: "600",
        color: "green.1000",
        cursor: "pointer",
        onClick: () => {
          copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default()(`https://www.gamifly.co?inviteCode=${(0,_utils_storage__WEBPACK_IMPORTED_MODULE_10__/* .getStore */ .bh)("referralCode")}`);
          toast({
            title: "referral link copy success",
            status: "success",
            duration: 3000,
            isClosable: true
          });
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          mt: "5px",
          children: "INVITE FRIENDS"
        })
      })]
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Index));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 475:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_px2vw__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6483);
/* harmony import */ var _apis_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6642);
/* harmony import */ var _apis_userInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1639);
/* harmony import */ var _apis_notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5937);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5941);
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7384);
/* harmony import */ var _stores_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3294);
/* harmony import */ var _assets_imgs_ruleIcon_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3028);
/* harmony import */ var _assets_imgs_ruleIcon_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_ruleIcon_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3351);
/* harmony import */ var _HeaderMobile__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9845);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9547);
/* harmony import */ var _MyRewards__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6130);
/* harmony import */ var _RewardsRule__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8674);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_3__, _stores_global__WEBPACK_IMPORTED_MODULE_5__, _Header__WEBPACK_IMPORTED_MODULE_11__, _HeaderMobile__WEBPACK_IMPORTED_MODULE_12__, _MyRewards__WEBPACK_IMPORTED_MODULE_14__]);
([swr__WEBPACK_IMPORTED_MODULE_3__, _stores_global__WEBPACK_IMPORTED_MODULE_5__, _Header__WEBPACK_IMPORTED_MODULE_11__, _HeaderMobile__WEBPACK_IMPORTED_MODULE_12__, _MyRewards__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











 // import footer1 from "@/assets/imgs/footer1.png";
// import footer2 from "@/assets/imgs/footer2.png";
// import footer3 from "@/assets/imgs/footer3.png";
// import footer4 from "@/assets/imgs/footer4.png";
// import LeftMenu from "./LeftMenu";









function Index({
  children
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useToast)();
  const {
    0: interVals,
    1: setInterVals
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: getRequestReward,
    1: setGetRequestReward
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: notificationsRandom,
    1: setNotificationsRandom
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: notificationList,
    1: setNotificationList
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    userInfo
  } = (0,_stores_global__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
  const {
    0: friendCode,
    1: setFriendCode
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: accessToken,
    1: setAccessToken
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [showRule, setShowRule] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useBoolean)(false);
  const {
    data: loginData
  } = (0,swr__WEBPACK_IMPORTED_MODULE_3__["default"])(accessToken ? [_apis_login__WEBPACK_IMPORTED_MODULE_6__/* .login.key */ .x4.key] : null, _ => _apis_login__WEBPACK_IMPORTED_MODULE_6__/* .login.fetcher */ .x4.fetcher({
    accessToken: accessToken
  }), {
    revalidateOnFocus: false
  });
  const {
    data: getReferralCodeData
  } = (0,swr__WEBPACK_IMPORTED_MODULE_3__["default"])(userInfo && userInfo !== null && userInfo !== void 0 && userInfo.id ? [_apis_userInfo__WEBPACK_IMPORTED_MODULE_7__/* .getReferralCode.key */ .py.key] : null, _ => _apis_userInfo__WEBPACK_IMPORTED_MODULE_7__/* .getReferralCode.fetcher */ .py.fetcher(userInfo === null || userInfo === void 0 ? void 0 : userInfo.id), {
    revalidateOnFocus: false
  });
  const {
    data: setReferralData
  } = (0,swr__WEBPACK_IMPORTED_MODULE_3__["default"])(userInfo && userInfo !== null && userInfo !== void 0 && userInfo.id && friendCode ? [_apis_userInfo__WEBPACK_IMPORTED_MODULE_7__/* .setReferral.key */ .Cz.key, friendCode] : null, _ => _apis_userInfo__WEBPACK_IMPORTED_MODULE_7__/* .setReferral.fetcher */ .Cz.fetcher({
    user_id: userInfo === null || userInfo === void 0 ? void 0 : userInfo.id,
    code: friendCode
  }), {
    revalidateOnFocus: false
  });
  const {
    data: _requestRewardData
  } = (0,swr__WEBPACK_IMPORTED_MODULE_3__["default"])(userInfo && userInfo !== null && userInfo !== void 0 && userInfo.id && getRequestReward ? [_apis_login__WEBPACK_IMPORTED_MODULE_6__/* .requestReward.key */ .SD.key, getRequestReward] : null, _ => _apis_login__WEBPACK_IMPORTED_MODULE_6__/* .requestReward.fetcher */ .SD.fetcher({
    user_id: userInfo === null || userInfo === void 0 ? void 0 : userInfo.id,
    type: 1,
    accessToken: userInfo === null || userInfo === void 0 ? void 0 : userInfo.access_token
  }), {
    revalidateOnFocus: false
  });
  const {
    data: getNotificationsData
  } = (0,swr__WEBPACK_IMPORTED_MODULE_3__["default"])(userInfo && userInfo !== null && userInfo !== void 0 && userInfo.id && notificationsRandom ? [_apis_notifications__WEBPACK_IMPORTED_MODULE_8__/* .getNotifications.key */ .T.key, notificationsRandom] : null, _ => _apis_notifications__WEBPACK_IMPORTED_MODULE_8__/* .getNotifications.fetcher */ .T.fetcher(userInfo === null || userInfo === void 0 ? void 0 : userInfo.id), {
    revalidateOnFocus: false
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (loginData) {
      (0,_utils_storage__WEBPACK_IMPORTED_MODULE_9__/* .setStore */ .PQ)("userInfo", loginData);
      _stores_global__WEBPACK_IMPORTED_MODULE_5__/* ["default"].setState */ .Z.setState({
        userInfo: loginData
      });
      (0,_utils_storage__WEBPACK_IMPORTED_MODULE_9__/* .setStore */ .PQ)("isLogin", true);
      console.log("login success");
      setFriendCode((0,_utils_storage__WEBPACK_IMPORTED_MODULE_9__/* .getStore */ .bh)("inviteCode"));
      setNotificationsRandom(Math.random());
      router.push(router.pathname);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [loginData]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setAccessToken(router.query.accessToken);
  }, [router]); // 当用户刷新页面时，url不具有accessToken，且store中含有userInfo时，增加userInfo数据,检查store中是否含有userInfo，如果有，增加计时器

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_utils_storage__WEBPACK_IMPORTED_MODULE_9__/* .setStore */ .PQ)("time", new Date().getTime());

    if (!router.query.accessToken && (0,_utils_storage__WEBPACK_IMPORTED_MODULE_9__/* .getStore */ .bh)("userInfo")) {
      _stores_global__WEBPACK_IMPORTED_MODULE_5__/* ["default"].setState */ .Z.setState({
        userInfo: (0,_utils_storage__WEBPACK_IMPORTED_MODULE_9__/* .getStore */ .bh)("userInfo")
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []); // 当用户刷新页面时,检查store中是否含有userInfo，如果有，增加计时器。同时，获取通知接口

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if ((0,_utils_storage__WEBPACK_IMPORTED_MODULE_9__/* .getStore */ .bh)("userInfo") || userInfo !== null && userInfo !== void 0 && userInfo.id) {
      const interV = setInterval(() => {
        setGetRequestReward(Math.random);
      }, 600000);
      setInterVals(interV);
      setNotificationsRandom(Math.random());
    } else {
      clearInterval(interVals);
      setGetRequestReward(0);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [router]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (getReferralCodeData) {
      (0,_utils_storage__WEBPACK_IMPORTED_MODULE_9__/* .setStore */ .PQ)("referralCode", getReferralCodeData);
    }
  }, [getReferralCodeData]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (setReferralData === undefined) return;

    if (setReferralData && (setReferralData === null || setReferralData === void 0 ? void 0 : setReferralData.result) === "success") {
      toast({
        title: "success",
        description: "Inviter binding success",
        status: "success",
        duration: 3000,
        isClosable: true
      });
      (0,_utils_storage__WEBPACK_IMPORTED_MODULE_9__/* .deleteStore */ .Av)("inviteCode");
    } else {
      toast({
        title: "Inviter binding fail",
        description: setReferralData === null || setReferralData === void 0 ? void 0 : setReferralData.reason,
        status: "error",
        duration: 3000,
        isClosable: true
      });
      (0,_utils_storage__WEBPACK_IMPORTED_MODULE_9__/* .deleteStore */ .Av)("inviteCode");
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [setReferralData]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (getNotificationsData) {
      setNotificationList(getNotificationsData);
    }
  }, [getNotificationsData]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    justifyContent: "flex-start",
    bg: {
      base: "black.100",
      lg: "black.1600"
    },
    pos: "relative",
    overflowX: {
      base: "hidden",
      lg: "auto"
    } // _before={{
    //   content: "''",
    //   pos: "absolute",
    //   top: 0,
    //   left: 0,
    //   w: "full",
    //   h: "full",
    //   bgColor: "white.400",
    //   filter: "blur(200px)",
    // }}
    ,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
      w: {
        base: "full",
        lg: (router === null || router === void 0 ? void 0 : router.pathname) === "/" ? "full" : "1280px"
      },
      px: {
        base: (router === null || router === void 0 ? void 0 : router.pathname) === "/" ? 0 : (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(16),
        lg: 0
      },
      pt: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(90),
        lg: 0
      },
      mx: "auto",
      boxSizing: "border-box",
      flexDirection: "column",
      justifyContent: "space-start",
      zIndex: 1,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Header__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        notificationList: notificationList,
        loginOutClick: () => {
          clearInterval(interVals);
          setGetRequestReward(0);
        }
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_HeaderMobile__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        loginOutClick: () => {
          clearInterval(interVals);
          setGetRequestReward(0);
        }
      }), children, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Footer__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {}), !showRule ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_MyRewards__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
        helpClick: () => setShowRule.on()
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
        display: {
          base: "none",
          lg: "flex"
        },
        w: "390px",
        h: "200px",
        pos: "fixed",
        bottom: "90px",
        right: "0",
        bgColor: "black.1900",
        border: "1px solid",
        borderColor: "green.1000",
        borderRadius: "15px",
        borderRight: "none",
        borderTopRightRadius: "0",
        borderBottomRightRadius: "0",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
          w: "8px",
          h: "16px",
          my: "auto",
          ml: "12px",
          mr: "33px",
          cursor: "pointer",
          src: (_assets_imgs_ruleIcon_png__WEBPACK_IMPORTED_MODULE_15___default()),
          onClick: () => setShowRule.off()
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_RewardsRule__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
          mt: "16px"
        })]
      })]
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Index));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1336:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4558);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8054);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5444);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2333);
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7439);
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(475);
/* harmony import */ var _Web3ReactManager__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3135);
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7384);
/* harmony import */ var _apis_login__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6642);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5941);
/* harmony import */ var _stores_global__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3294);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_10__, _stores_global__WEBPACK_IMPORTED_MODULE_12__, _components_Layout__WEBPACK_IMPORTED_MODULE_17__]);
([swr__WEBPACK_IMPORTED_MODULE_10__, _stores_global__WEBPACK_IMPORTED_MODULE_12__, _components_Layout__WEBPACK_IMPORTED_MODULE_17__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















const {
  publicRuntimeConfig
} = next_config__WEBPACK_IMPORTED_MODULE_3___default()();

const getLibrary = provider => {
  const library = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.providers.Web3Provider(provider);
  library.pollingInterval = 8000; // frequency provider is polling

  return library;
};

function App({
  Component,
  pageProps
}) {
  const {
    userInfo
  } = (0,_stores_global__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)();
  const {
    0: duration,
    1: setDuration
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    data: setTrackInfoData
  } = (0,swr__WEBPACK_IMPORTED_MODULE_10__["default"])(userInfo && userInfo !== null && userInfo !== void 0 && userInfo.id && duration ? [_apis_login__WEBPACK_IMPORTED_MODULE_13__/* .setTrackInfo.key */ .vD.key, duration] : null, _ => _apis_login__WEBPACK_IMPORTED_MODULE_13__/* .setTrackInfo.fetcher */ .vD.fetcher({
    user_id: userInfo === null || userInfo === void 0 ? void 0 : userInfo.id,
    game_id: 0,
    duration
  }), {
    revalidateOnFocus: false
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.gamiflyConfig = publicRuntimeConfig;
    window.imgUrl = {
      gameUrl: "https://app.gamifly.co/gamifly_server/server/assets/games/",
      imageUrl: "https://app.gamifly.co/gamifly_server/server/assets/avatars/"
    };

    const listener = _e => {
      const res = new Date().getTime() - (0,_utils_storage__WEBPACK_IMPORTED_MODULE_14__/* .getStore */ .bh)("time");
      setDuration(res); // e.preventDefault();
      // e.returnValue = "Are you sure you want to leave the current page?";
    };

    window.addEventListener("beforeunload", listener);
    return () => {
      window.removeEventListener("beforeunload", listener);
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (setTrackInfoData) {
      setDuration(0);
      (0,_utils_storage__WEBPACK_IMPORTED_MODULE_14__/* .setStore */ .PQ)("time", new Date().getTime());
    }
  }, [setTrackInfoData]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("title", {
        children: "Gamifly"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("meta", {
        charSet: "utf-8"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("meta", {
        name: "App-Config",
        content: "fullscreen=yes,useHistoryState=yes,transition=yes"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("meta", {
        content: "yes",
        name: "apple-mobile-web-app-capable"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("meta", {
        content: "yes",
        name: "apple-touch-fullscreen"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("meta", {
        content: "telephone=no,email=no",
        name: "format-detection"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("meta", {
        name: "viewport",
        content: "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover"
      }, "viewport"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("meta", {
        name: "facebook-domain-verification",
        content: "h5t0j29jwjvh861khyncarok6kekgb"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("link", {
        rel: "shortcut icon",
        href: `${publicRuntimeConfig.cdn}/favicon.ico`,
        type: "image/x-icon"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("link", {
        href: `${publicRuntimeConfig.cdn}/images/apple-touch-icon-144-precomposed.png`,
        rel: "apple-touch-icon-precomposed"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("script", {
        src: `https://www.googletagmanager.com/gtag/js?id=G-WE2SG9C70X`
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("script", {
        children: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NRV5GV9');
          `
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("script", {
        children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WE2SG9C70X', {
            page_path: window.location.pathname,
            });
          `
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {
      resetCSS: true,
      theme: _theme__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_web3_react_core__WEBPACK_IMPORTED_MODULE_6__.Web3ReactProvider, {
        getLibrary: getLibrary,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Web3ReactManager__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_components_Layout__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("noscript", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("iframe", {
                title: "googleTag",
                src: "https://www.googletagmanager.com/ns.html?id=GTM-NRV5GV9",
                height: "0",
                width: "0" // style="display:none;visibility:hidden"
                ,
                style: {
                  display: "none",
                  visibility: "hidden"
                }
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Component, _objectSpread({}, pageProps ?? {}))]
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_5__.ToastContainer, {})]
    })]
  });
}

const getStaticProps = async context => {
  return {
    props: _objectSpread({}, await (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_18__/* .getI18nSSRProps */ .q)(context, []))
  };
}; // 这里要注意，切换语言会导致整体 APP 组件卸载再初始化

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.appWithTranslation)(App));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8342:
/***/ ((module) => {

// Exports
module.exports = {
	"leftMenuButton": "style_leftMenuButton__sAHyb",
	"notificationIcon": "style_notificationIcon____Wd9"
};


/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 7439:
/***/ (() => {



/***/ }),

/***/ 8226:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADnSURBVHgB7VTLDYJAFJxFvNOB2IHe1VACVsCWYCfGCqSEtQMSjfFIB2IFcva3zhoPCKwY9OhcHtl5M/tI5q1ADcahlmjAGUh2SmSiTExCPdfADM3IOsDQLZ/egICuOU2mNiV5yRKdAN+tIT2WfKNEYjMYhdpcAoe9ThBqn/985OgRWsC5cAxWj6P30QIOvsTf4AcGlSAxgTlDYrKxtInID7TNgOSCxYilRa+f4tiktWKwViI2JD6EW7i5ZzL+rpmpPXCF9y8GdEivXE1+S2Ef20B3gRVKW/p4D8xC0SRAA9iTbpVIi2d3v28+uO3rcxcAAAAASUVORK5CYII="

/***/ }),

/***/ 6607:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAEFVwZaAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAE6ADAAQAAAABAAAAEwAAAAAgb1CmAAADmklEQVQ4EY1UXYhVVRRea999zlUxaZA0XwpMkQqxciISpXvu6DhzDiEaphGEDzbU9NhLBcFEkGZRDxKEkL0VlKlUc+6dmWbuLekhKzAhiKCax4pRo2Jm7vnZq2/tmWOPuh7O+t1rr/XttQ4RKM2azyqH0LisfCKLtrPIwVq7nNvnnHzCLYm2uJJ3GCrN/eTcaSMi/WT4SUrz6GU91JEjK5SP541j6j2gynwxe65VNA8y8eeshrRoPk2ObBjwR7t5+gpNS/NOdSileeOfVIZv80o7HxjygjpQoVHFkTuvUSqzcfM8njWEDR3GBblzdCgJO4f8Reog5ucN1S4aKRckYOGCVpREB4TcaBJ0VzFSfRsH3Qc1HWQnzKfQeEJiTsThzMmJvLmjYNpiSaiuQehlP9I+ntjpM6r7W4hOkkiPhOsWGTqTsue+QZ46pwEVJWHXl4VsT4XWvOsVhTgt5t7ClbsQaH0wUw+9fRoHnVdVXw4cM+3yq8fQ4VoYmPEEjmu/JsH0lA9K8+ZxEjdouPYSarlKARVlXjPGuE1O3HvWBturYv0t+vlOHl2lXFG4IEmfNqM1XFIjOj2Ck8f+KP89C8coYPKlQCaDCjINQhXvA8gNie08x8w7W1k0onYlwwBkSfz/C8NqMbRYWQAs+xqM4QSTM4/mZoRkMLbd8HoQDPeqMmw7KZg/UDkr7t8S2fpw7RvO8BzmRYSMASwbheg1IzTq60FnT4i4Ebzp2qXTjCeVX4zlV4a488P1oseL5lGcPoHAvuqaG3KmC9aGI3t58ieN5bZE28qCvofcXm837+/nU/mNkujDLJCrL1Lv9qwovsFwX8Y87NQez6KXXcB8aUmWM7XyaMAJvc4s23Tq0dCP2IoXFbA0i06jva3r7C2P/FnOx+LKj4lrgwr9XYj8rarmCxlYnxXuZ6A2WwvCaIgnrqoPG7nGFYuTeJ4zbOv3DHN7Vu3j2R7wkrBdGxVsj6I6lLKiPIqfwBoO6vuqRGqPufV33RpsGK2UIntGbUq1oHTK9cX8pmMnAjUorbS3voNF+N3lvW5b9m5ashJNye47stx9Dd+10PLblV0n38uGCgvnFbzDAyJjhnnMRXz+Lzg34PDdeZEdB6YPQa+h4otBYA9jc/0CVMmMKTdj70B8jXV2MPQfAOIv19nVcT9/hpG9OWrlAw/jz9PBNC/EtqGLjJlAO67ofQjQ+28uzXIUc4mxeDMOZl5Qy3/q9rJM2YqFCQAAAABJRU5ErkJggg=="

/***/ }),

/***/ 8865:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAEFVwZaAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAE6ADAAQAAAABAAAAEwAAAAAgb1CmAAADHUlEQVQ4EY1UTUhUURS+5773xn/QdHDToo2L0CDIBGvhG0fFmUGISLRCCJRsUdGqFkKJENSmoNYRVBj9UAtxRtRpJtoEFrWpoCAI2vgTRWij897c0zl35s6kGXRh3rnnO98999zvnjtC0Ij74SNsRdxzp9hOZ11kW5poTyOeu8wWDAc0ahZwBCAp4747wIFYIA02yIOIGGZfII7LhB+Kaoc+QHtmEEW5AXiFZAAcqxkEPOAAr5A8QS/3LhpIDfK81+qYkbYTqGaHywEQ6wDjSpekQc/9LlDU8twMLi/qpLrYlzPZzjZ9kE0kuMVFkAKuOaSdA3WFMgkpIaboK1CdijmpEZ0V0WLLMv6lBgeorikU4NHhDwsQP2JOuq5YY36lO0BHHiVwDdCaiASSC4zz2ERMZMP7lcQWsMrmopD4mqcUSCySUjhtQGPLHKuhC5Lf5Cx2792OwMQNL7dClwTS87w3ZiVbKn4VhN3e6NRUsR/3Ohf0VbBD0euslYXgBhyxtOStDWtc4L4CCe422k0XprOhL/VO9YcumP+MQp3Mk0jPAnto0fuYtQT0t8LUr0KwhS1tvyxByLMFUCjACb6WFxirM1jAtnZrnaiZnpKQh0zAWCnlsYj97H5RzBT2V2e8lRsCcA9tMksdMWbIRZIB5jFcv+ErIuAQNUGDwUsWXlNjXO21ko+pvfJPpxAsJkv4nUcV4j1qgpJ8pQz/mn2i22vn22OCXhj3Qmml1OT/JKL3854qukQysqpNfMtUSL9ORoku05V3sLN1kOwvqctHKp1gTdQJ2kLC8VqnoZWuaJ42rjR8KuRhHCM7qTLsYZB22wApBnc5wTLuDP5V2MFuhdCc8ZdnE2J1R8xOTR6AR5kcYrERTEKRW+/h/5bbBJwogjShxGtUbRUd6U6F0zEcgnHfxF9hX+Wiv/qTKtMv0eBSWG2SjnCGXtGKAdlyIu075WOZXPomSXGeu58x3cNbEwFc40epCUykt/Zku0bTSQsf0pCofzxgAEWt3BexU3GmFFuDHZ3UC59GUBe37zFmaRme27Z9rgfm3uaR/Pc3VcxPaGGwN54AAAAASUVORK5CYII="

/***/ }),

/***/ 707:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAQCAYAAAFsAR/KAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEqADAAQAAAABAAAAEAAAAADgaeE1AAACNklEQVQ4EY1TPW8TQRCdWd86sTGOaREVFSAZISpAQfZBAvFFQiDkDon0/IAUNG7ChxRRUiAQJVQQgXyORBSbbyioIEpBgaBKQREcpMCd74aZjde6wxZipbuZee/t3MzsHsDfqxlUaYAR1TOYQpqh2xNaQD+YOuZIoECdNCrEpqdX3gmWWiYHIk4S0SthlAK8YoOBVHLYr6Ggflh94+nOCauwpIkV3t4RBe4aAR2yoqSdzXZQCVDTlXKSsD4XdVV808dy77nLKT/yAMqA+CLvFC66+PS7Ff+XxVavenl3pvhoEp9syY7l8PRMRFHL7EaMtOMcVEDO1x9ht8sd3RcihvieEciLKHMGn31WMURH++CctM5rrxVx4b/FV7O6fYuLjS2RtAjYkNiMAIHeJ0nr1/TqjYFIpo0Iby0pdkIXizY2c/ID9yFP/AggbCKoBU+vLlqBWHMsbaoXtuGn8rDVTZJJv9U7dSGO42uMHeBt37jOBdLjjzH8dWlc5x7YSzBPBFLjJwdw7my2/SGZxA/dDk+mksSMz0NBgi+ox6Z2ElFtjHrbS0AwkxKbNmCdKzjMiXaluH6Q16U9Li5tmv41hPsDwGk+qbSWoMTI8SG8r+Izey1JJDRHMo0r63knt4/P6Q5P3fxZ6YwjIoStnFM4bxmTSAIX/Y2cnpjn8d/lZ8MKRlmuxPecail5u5GooVrRy3MQx3VuocytjPxnODlfbLzuOZWbiI2RN2/oozxYXKN6doj4B/AH/ErMkLP/XMEAAAAASUVORK5CYII="

/***/ }),

/***/ 3535:
/***/ ((module) => {

module.exports = "/_next/static/images/friendCode-f496700388b54fc3fb84b7f9f08c5f7b.png";

/***/ }),

/***/ 9254:
/***/ ((module) => {

module.exports = "data:image/webp;base64,UklGRowBAABXRUJQVlA4WAoAAAAQAAAAIwAAIwAAQUxQSHUAAAABYBtJkpN7/BdAqBRpKFPLQC43xNUv2owIhW3bNo6S7t0r6F9aWoayXJb4KOMhFL3nzEe64ikWvOMpIm8Ql3YUi44gOER0cIy+594RoWz56+X6Ewqu43HfBXX4WfrVhefFXABxDNVx5+A/GSy1PeFvK0W/zQgAVlA4IPAAAADQBgCdASokACQAPiUOhUIhhcXMBgCRLEAJc145bJXtgG6gcAB5R3sE/rN6NAF/rNrSv3AJuFsXF9l40xdeogAA/v/+Thc///ZIfl67175NzArJlT6iHxBn/jtFX1FyNiQQUK4H1M4+Q+M3pBWPOzx5eFNV1h9Q4rvuJFyPBh/8DZ+mXKPJsSqcW38yN//LnVF6se/4WBULE/88NmIWljw8kQ58539dxhxOP/uOavW5lTsnyPmJ2gfPNgopxQzPYNxsszvMtQfmmPWuWiAgmb/ju2CRd7bz+BZvqMEXOkdXT+EHj6f/CxtlZqH/FJQAAAA="

/***/ }),

/***/ 2958:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAYAAAGDeKZEAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADaADAAQAAAABAAAADgAAAADuamJ+AAABqklEQVQoFV1SO0sDQRCebzZEURsfWMdKCztBsBBBT3II4l+IWNuJYGEt2ApaiTaWFjZiIGcKi1RWWqiFjZ0gNlEw3O44s3kQXbh5fPPNY2ePSE/m0zNkvvwgQrNU8+m5oajlZQHoEYocqt80lImGTZNF7YtOBHz6Y7qbd6/V5pROtMwL86aZibcy3/CmYUivAPBNIkOGJYUqtGW5SdJpRWiAxGmreZ2nyY6LJWPGA3q1gNnMxalY9lbSaQlUE605wC5ZxPULsjytKHDWTmtLR6jEec11jheIZNB7qZtfMGHH+9AYcIUxT3n046WiBbR+Qv4WbRVMoI/oiBR74yvWvmz/nUBfiauOxIBlZPnapsAf9bJimY5QMsRtrxSu4/Soy/qED60nJY8bBcCnsGwkqN7VpLyIgCsRGY3p2l4XNsMhtOrdhE7dU3jaj88csATBTgfXLdC48VlXO9UD1dCqO4qtssOMzl4KFE7742qXdD04/gdGV4JcBJGt/zEhnHDibnZB2OwP6muLYpem/+DKa/P7UHv0EGhPx1pR9qTqd9WZ/nUHy7h57lJ/AdORtu0tE/SJAAAAAElFTkSuQmCC"

/***/ }),

/***/ 4675:
/***/ ((module) => {

module.exports = "/_next/static/images/invite-efa424b7f3ea9a6e29f0693de7d3a34d.png";

/***/ }),

/***/ 6690:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAAEs186GAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFKADAAQAAAABAAAAEgAAAAA9nQVdAAAA5ElEQVQ4EWP4//9/ARCDAQOQvAtl/2diYGAQAWIwYASJglggUTCAM2AChGm4IUhKvyKxEUxsKhGyyCzsKoGO3QDzBz4a2SS8bJA1ukAVFXhVMTB8ASlkASpyJ0bhF6AibgIKC0EBTUgRyAwHEEFdgD1wMe24B/LxLCDmwZRDEelA4eHjgKy2ByogZOJOYt34CaTwI9BEPnzWkiAHNhDkcWsgJuRMQuaCUsJRQopIlgd5GZRqc4CYGi6cAjLwLtAwJZKdgl3DPezCg0oU6GWiyhKgOmLABlB+PgDE2Es+0rwOMuMAAE4P0sbXVD2jAAAAAElFTkSuQmCC"

/***/ }),

/***/ 4848:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAAH7+Yj7AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKKADAAQAAAABAAAAKAAAAAB65masAAACXklEQVRYCe2XsU4cMRCGOUiF0iChQElzEQ2io4h4hdBBi5KGIm+QB6BAPAVvEKgQSpWQjmcgRYooBVQgkSBdvn/PPo2PIdi+k6IoHunfGY9nfntnd23vzEyxDAaDX+AwScTRSeKcoAHZy0B5NqIJjiXpkXM6Bowbgb5TlrVnG+oN7Wfoe9k9RHpWlyjRSXsR/DTtGPLvaFsa7At35nRcgecx2A2SMwag34Nbtd1g/OfqtOIGBtZ9Ezj/aGDrGFaAYh2ZgslcqqoNiadjROPNfjaxybxUEu1d8AP0wGvQiUeYfKkxQNHRNnoZ+7tpj75i60u+6NiR+SUfxPhizYT12r8AO8XJLaFVYMIK8N51eyw6ylE1JQwXkcXRG0XEEPQdEus6LSXszhcwHFoWbB1ytJfpHHKVTUpwFC1VWrK0dO2KAH0JOqkhVKI2yzmgjTMRjzB3PXywForMW+bc9dAb2fF9cXy+i/s6SO7t4fvoreg+WfRCOA/uArF9wfdjTJWGcAdotT6vImhJrQKtAv9nBVg0NsEJ0L+TIHvzr1WDwWfBO3ANnhLFKHaSjSHvXhlkD9yDWlHuXt5ohVEQv4op2NvgG8gVxW6b/BFX9D2mS8oe/6TvIFsH/bDBr2F/dgb4hG8txOj3bZ1Jdrsn9vQ3uj+U6gN9Kwyq89OCEOwV7GPgimJyxD0ieYkaxfOP+XSUkiS/lkNXevWOV2nEsFXyiG88gkpfNlfJBN9WTsZLe+M5p+LjSW+Br3rkjujoaI+PNkQ5W1OZRC4JA66Cj2YW4xNU32ouX4trFWgVqKjAb/Y0i1qab7xHAAAAAElFTkSuQmCC"

/***/ }),

/***/ 4131:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAAH7+Yj7AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKKADAAQAAAABAAAAKAAAAAB65masAAAByElEQVRYCe1YPUsDQRC9iJ3YSmobf4ZoIdgYSOUvUbDUSvwXYmPjTxBS2vhR+QcUi6AgWJkYfSM3l+fdrO5eEo7gLAw7N/v27cy7vc2SLEtun3mTiQvJs/+e0BKIrKHQFhovtKMDU+6x5Hle2wVTfyekAU5MY5Kg+JykjmU6WATm1cmlKV6L1vGrPFy9KY+ycG8BjwE4YVDF5zfDfgXogbECEGod9gbbHEdreCB4hlntNUT3Y+cwSFj42fJ5Z+m4tXF0rFa/GDOLM4nJPIbTMa5A4wpgM1+JTZwISJbkyyi15VrEINkqEfFjJ4kUM/d5dsA/tEjN40sILHA5xoeGjk39+GqEUMqXK5pYlBRaftFDwgG9iFMdQOyM4gONcx8qeZdAQ/JH5DOGwu66Aq6AK/AvFcB5uwf7oHNXXHk+gJm/gTMXCguvwu5gMe0eoLWZJyULYCFRaxiTlYEZIXYEC/2IVWpIkh/ET2BoV1jSA31cX1ZipqUmWO/CYGRi3a8MmP2fjQVsKha9F+Y9wUt5ZeWGonqTFpaq4G1gwcdA/CEQD/EE4AlhfMld2DXsHSatD9uwKBDfhr3ApAn+Bta1sB5zBVyBmgp8AQvzue/HL1l3AAAAAElFTkSuQmCC"

/***/ }),

/***/ 2903:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAAH7+Yj7AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKKADAAQAAAABAAAAKAAAAAB65masAAAB5UlEQVRYCe1YsU7DMBBtECpLUaduZaJT+wWMHfmAVv0MPiEM8CUshalb/4CBb6AdWNlgYQHeS85WYuzESRMUqT7p6ezz3fP56thWe73K8iOSC4RtkTPU70QM5RyKIoIkbdhiZWxBc06RnZMeDjFgXWyapYSSyWTRKzEHut7HWlZckEhuoacqeQx+oD1QfehvIOesx+A8BRbCmCvVifbybYBlq5iU9o09aj8U6x7YA8NahUDgACiTjY1c7xxj8Br9J+AZuJAxth+BpegHsfsppMevVu245OtlyoxW2o8pDSBRqXgTBsdQga5VALt7COyBu4NyA0EE7ABTVpWJwbAxWSz97BWk57DeQwzWHu7GJ27uc3PYdXypIyqrryT4DZptHm/+orLMaF6cBE+i2MVU/SJ1MYm9cULrfFymh0ytwTajBxldtrbYYAsVCBUIFTiyCuA47AM3wDtgCm0c6/9rWTDhHHgBqgpj5q0lC/J11YwK/Ne+iVrfNLZgTmaz17X5/pPh/WAgIQUJ3UpSM+nzHUVZJg6pT86GsVnigdiMj5iKlXeCxTTtjXY+Qdcz+E9JsAXPYLwERjI4kW05lv4YffWsM20T8RmJzyt+6i+xNaNIDDQlaiGlyXX+Ky5dQXAIFTj2CvwCeeOmLGDESwsAAAAASUVORK5CYII="

/***/ }),

/***/ 2563:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAAH7+Yj7AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKKADAAQAAAABAAAAKAAAAAB65masAAAEJUlEQVRYCe1YTWxMURQ+b346ytS0Yyopo4RmLJiW+NmokhYbiyY29uwsNCSaSGxsmiYSsSASfysLCbEWQUyTWtgQJKJB2iKo0R9vTGfamV7fuXpf3zzvvZlRxWKOHO+8c7/z3fPOnftXIhvRzL5QaKmoDvrmXAKSSCREbW3toOFlJ4vhKN+4PbZThsuuFBc6kUwyJeVkjwYpvw/Q6ZFIpIYjPdZwpmepC4fE9c8twboV2jfGFPTDAGugyqWAUTlnwR2WdyvHQr3ji09Dn7jyM2hbR4PovbtFhEKhuWFQUeqr29raaH93mjbukiWUzY7lAasETExMFGAIbAeY0SyqJ36a67jP3FDUVoxFgf8foLBEJeSHgZohEpq/ykMzeUH5vAzqQLkfsOVKiEJVA8O/bznfotEoZae/06VXcQos9iJa0Km9r+jt00lS4+dICLJjIDoLNSSVShGTVtd4qGFdgFJjefoyPIV2bWh8fHyNAbQz1DC6PHvs4mwzBMkgwKvtAsy+fzRBzSnM2sg4Af0KPWjTXHH96wrwFsKLKlTntdOaj+3v0ApS75jH7bDvezHrPF6NpqcwrTH/MO2MhdAwVFCR5/3qoJe6bzTRpYE4xbYuAVxo5kxdCfG7Owc1hDtraKqi+O6gXBxO3moif0BSHFeJOBKCpRegLgVUT14QhNBI4N/A4zTlc3Lbea3aHWvIaSmQejY3N9O7d8NU31hFwTovfXyTpUl9hvx+/9JkMqkr3C9PcK1iQjuJx+NyN+QdcVbbfyGwOkB0x47M7LPGuL6bA13sHa4k5kYXEnOTMRDmWMdRNoMc7HsO/r/oxve1m7+R7Xl3D46DUF6tE/MmqxBUKvBXKuC4vP6p3nlbw5HqGqaF7dELbUNoO6SOq9Z+FyxB3rxzudxzTozvkIuCHqoJ++S+wUnwxqSP5iiTmsEGhZ0Yifp8vrh1H5l3gkhgPfo7Ct0E3QCdgL6IxWItIyMjKz04EESiVXT4TCNt3M0XLrVYafTioU5XTwxT8v0UDv8yyac4Vm8GyBDTnd3wFTWQFC/yN6EHbMAh+BrT6bRs8vo0WbXY9sWoEpLDdi4FNvt4Jx77pMnbCfxNPxvn/sf3lSdILoyIUWjcLTKbzVJ/f7/sOJMS9OzBN1oWDVDtch/lpwW9fISbTtcQfRiYouwk35s0HubeTCbz0Mxb9hAjQb5p83AWlb6+Purs7OTbMLCCvDj78fmP5ed9jv3ynY09ThOF8SUJOjoCLVt0XRc9PT2itbVVhMPh77OnXj79nlZ/THFKoOQKIqsgSJLQgBNZif5B4NZiOLlqRaWcE815sM03OU5oDfQCG6VIORX8AsJIKaQlYJKoYH0JuIK/1hTDrwLgCpRn8O/KVwRehjJXRWQFMHkuukzri5UyVSpQqcACV+AHB0OtygfAfCMAAAAASUVORK5CYII="

/***/ }),

/***/ 8210:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAAH7+Yj7AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKKADAAQAAAABAAAAKAAAAAB65masAAACJElEQVRYCe1Xu0oDQRRNjMEQC8FXvV1ILVb6CdZWgkW+RK39CW20VrDRT1CQFKnVYGF8gGAwGNBzwoyZncyd3WyyYjEXjnPnvnN29mGhMLZ8K2HirJF9YOhTUdlnKoXcRYq22exXhGj/jFaS1tSBSYX+nR/UtEiPkpY54C9PNDIg5vTweGwEHhl6XEXBSFtMnTab8D7bU+Dr66SwCgyAp+aAreGfphA6MMcutB3IGrZN782bSdu42pfP9GXSvQXVFPtW5T1pOitudItfHA2pi2nRaHRKC8rcAIcM58p9ytQQFhiYCgM4czXAlpqvuPhwQBV+JXwJyWXcfs5Hte9evhCK0Sz6fBN+InFOKNrDhBWXzzfhqStB2U4knzghE3g1XIm+x5dvQtYqAx9GUeq0ZRMM+A4s6GzqtOm9a/3zn+wawmtL4nAd2U/AvAJ12oIEBgIDgQGZATwbS8AOcAY8Aj21ck97Sc7O0YPGdeANSCOMq+c4Trw0mjXSTOWIacQrJe+8bycpHY35DliR/B57By/zVY9/xJX0chpJUIau5Eiw8wMhfwGDm47Ll8a0kf90qgOmqQBXaaZCzCXjswyX6QyyERpWsVRxpp6hL0LfAtaAJeAFuAbO4X+Ffxl6F/rYRyPrGUS/Ag97B835ZdsGdgE+8+7Uyn1b+TvQx7o5ED+ZoLH0Dz5nckk0WccM2ZjiwZrkFvttgKsp9xnKh5TAQGAgDQM/XVYtVqx3mT0AAAAASUVORK5CYII="

/***/ }),

/***/ 5860:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACGFjVEwAAAABAAAAALQt6aAAAAAaZmNUTAAAAAAAAAAoAAAAKAAAAAAAAAAAADwD6AAAvW0l/wAABPdJREFUWEftl0toXFUYxyfzztTUxI0WI0KttBZEEKErxYULEVwVsS50Iyi4USniphTqzr1rXRQEC1kEqyIKWqMUfNEWrQg+SFGsVlNrm2Te4+93e064TszMbWdKNznw4557nv/zne87596JiYmJ3KDU6/UG1l/ryvy1nmDU8TcFblpwVAuM2j+LDxrmkVHnS/cffHyElsMEOohtxikwCovjXvWio7gSI0h6MeYLQXiuXC7n8vl8udVqlbrdbon3CnXFWB8UOIYpCvQ9vTv/mx9k5thBIdIOrK0YQdt4eQIegd0wAw1Ygh/h7UKhMFetVn9vNpv2c4w4brdP8BVbMlpQa2kNUWgeYUV4Fc5DBxrQBlOvD+sPNhqNckqB1nO8tPtsZM3MwhWXY7Jd8D1cDELe5LkXpsH6KdgJ++BoaLPM8yTswBVyXJ8fwEcZRWYWmGfQXfjYYqfTacIJhTDhmi9RlvNuh+ivBdrsgdNB6M88bw95tzvZkSG+OFRgMhmDuq1argmHwUAw4WaJcW/QKnBEKyGyBEmg0HYGFqAOn8MlRaZ8cFCwDBVYMEoZUJ9zW7VcFGfnMlbdjbA36nXnb/0Nr/F+DwLLULMNZbrGYrBe4qfjEqgFtoEB4cA745JqtZoT34eYBvQQ+g2cgR7b/QPc6nbzPJ4WFvNZBA47qB3DlT4O03CEI+Mnt1XfW11dbRaLxQPBhx4mfzflOxDwJMLOwjR04RfKG7AMS3AO5od9iw7d29BA33sfPEb2hrLk0HUCDPcJ1OFOJlW4KVcqlXxWwnvZMhcVMF8Uxhh4WGexoAfqvXARPg0R2kpM2+vZfx70yfl2u/0M2znFFhd5annbTYZF+fQ96Utad/Bntdi6dljuLSM3VWF0aoWCvwRwCJYQ1oImvG5QBKvZrp+KV2KI9mHXXSbdRmJMW9UGWyAeMZ6RW2E/fM21Zsz8BQ95R2P1gpZ3N+lg2+MI/NL8sC3OpG6DRlOUFyuVSk5MTGimjIBnDWqFKI6yahyDspsuB3x3MSx0LBasYJVpmMG3JpnAiDbVKHuRyZ6Pt4eHNlRpcwZWgoXcgeTrh7J9mpc0F8YYWaDn4DGEtBlUvOZ6HMoLTsD7KfiNNgd4VkC/fCq0/YIt1nrxOrT90VC3f1wCc1jII8ZVd6CBwD95Gr1OeBcsuW2U12EZOvRZpuyBECBlLet7sJ7+eeO4BHrHrmg10gUmPkt+e8ovi5QbIC8HYefIH6TdbWG7i0HcJPXfhcW8wDkZhxh5i135ChN6nX3GJG34ivzNfSKnKHuPrX/FLTW8jdIgbgt9PvYYos0x/TjVd2SBOnzdLYNZBj/lVlL2Dzy6Zga+XgwOmAiWM1hc3P20/9awJZ3k/ZYQUFHkyAL1wcNMMheuNiP5Qy3pRwHpNDwX/GuW53bYA0/Du+HDQf9cIJ8c3uGb0QBP/3Jc9Rd1HCQ5yxyTiWoeLfCrvhmEXggBcF53gEvU6btnyb9EXXKbBOvFg7//r3GdyCz/pt4a3sf+U/jn483Q4Ruxx9dMlfyDlD0Gd8BsaOv2nyD/DvUL8IfiPAspL+kywTWSL10Pg0DKNS9nswhMR1v8yHTgTuhvmeLb3CgKcDstc/+9WfzLS8TZhzKvOhfsfe4YUeCVaFm3kP6CjQb7T3nwtY0GW/uvHjrbdWowVotdpzVsTrtpgU0LDLXAvzzH47y7x25xAAAAAElFTkSuQmCCZWT6egAAAAA="

/***/ }),

/***/ 6850:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAABuCAYAAAFtpWJaAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAACKADAAQAAAABAAAAbgAAAACD9vm/AAAB30lEQVRIDe1WvU7DMBB23BSJkZUBFkZ4AkBKiwQL7wC8AzwPj8CA0oIYeQRWFpBgREwMddLDd+WMz45kEgpDIUN8v9+d7+xLlGp4ymp4olGue73+ra5rs6vzXv6gq7paJ0WDk1LlpICZG/m2fhFoaYqXWQhQKy6WxpQcIBGYGnngi0Jfw/5QStiLpC495Byyc5BEs7HzWiBCa3Us9j4yhclYgnVA2m2YFXMRiP58KUqcmOh6IwaeWk4bVzrVQuAzSMdR2mcaFSgGDcNGLi0EWZbthHhqbAZnn2GrvUM1rS9JYKu2WZnJHbpQFGacwAdrkQe7/ZLLHPrSIVMqIV8NqtgVHGzw1kmQKVgTAlDZoxCEFjFoenNiCFp0HYLqDmH9LJF2w5cVHSrWwSWuB8fntQPoz7nYC/jMiVHqyNiv2ZsCtcwKWu2AnToLobHMuCqOANR5ZDAyg21QcMNwwsAqnwBg1UcTWw2VaCgMfE+m/w1mlaALEF5GLhKui1EocaL86cZb1TjlwknHyjnVAQdYOMT8EHk40Hwl0jn+rn4I70Ml8slm5eFUDVGSCGmDb28z3Sw8sP+HNt3udLPC/of8X0TI+0tb9j/51a+FOJOsKO1vZwb1hf2o5SxrXEdmePoOK/a4oheh/RcAAAAASUVORK5CYII="

/***/ }),

/***/ 8853:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA3CAYAAAHbKTLtAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAANaADAAQAAAABAAAANwAAAACduVyQAAAOA0lEQVRoBbWaf2hkVxXHz3szmSTd2UwmcTbWpi3WsmIiiqxbdCs1pbvQroqlsgr+YfEfBcU/BGktCmkQigqy6D+iCAXxZxdKK7artMVdtUUoBYvs2i64tjS2ZIdNNsm0SSYz8zyf+955ue/lTZJFe5fM/XXuPfd7zrnnnnvfingpiqKAP2tyBRpOyWfDhjRdfUZmeiKzMdUj0YmSdgzoiHJ7oRItX65tnp+a7oSMSkaUZ+RPq8cm/nBBRqQ0C6XN35ZK1JX1H0cSbTYmm9GcdiQ8HwxPybnypEhpQ5qRtnd0lm66oDmZC5gqTrMQbKU8DHocLkZ9XM6ENDSlEZ2QR3pBEESu4ZPyeqkl+yvaNwQkMDNTyKhVuVC6S377PaCsyMjAktTdIAdlTYajSDrzQNlorkQHGytuQY7nGbm9pFOWB6UR1ES6UzLdQXxuOJhUnu15kfappIMFOZyskgWQk1hHXIp/Z3UWqzOIckZAQN0vB4NL8lo4LGuuj7UekOt7CihKNamDy3Ay+ShRqb3wSlkmSiVd4jIzn5bjtcvySrcrw50zckbOivR0jDgcEJDgUpmoBXfJk24QbZTXZShsSdWtZpZGTelANKF/vaZK51Tz9v3/kAfGFjsvHVHJ7W/IYGda21nuXDwui5HZdDnhBcV5SMsXzy8FS1P16KAOYOLzMh0hqIxUmciXLPV8MonS7iTnExQN9gdA60zDJ8zrDyIkaIkJ0q0BMdim5JztI0cHJmcKWjMDcLqjF+Izbps2QtVhgDpQuHZFKqTelA7WiR1XJ364sEtROHutJF1WUCanTjv9rITkBlHBrFrz1VA3Z+k2+dUJ9sVR+d0PNnTQqCq6eb7BBnaCc4OoXJSlYHhyHW7hkIw/HM84+OXO0lJpdWE5rE61Ukmn1gFRUbqt/uvjMpHtSaUn50XGp4bUAjacg2FapPDM4hee6I4NRmsyRNUlx+mEmkljqtm7Iq1eKFH3Cfnc/b1e1CIvjXW7VVnt3SR19RjTbqAbNKfj0Qf7qSSd7oYa6/PhvbPkXSl1VAhun0FHSn0rYjfFIkmM9iY1WqycCWMu8e4Oza7QNtbMrj0k7+qqtrvk1GnHqTguvv+gwbdB6vlkDFLZ+wS7DfZp+5WNgd+fMitigHwgnk1GmCX5E5gmTLgxfSwCozPGbjKfEQyY3CbGxhlkylDZbiW1JZTzgrbgVegwJcHcdiHtMMww8xnBhH0xrZO/Ki23fyZ1l12WdTeGCcbVMOfnRTgN2bmt89WoyJ1tY+Yz4nCq615ThiHHzqoshxVpBwMyEqzIprqFCXUPC70RGYg2ZTBqy3K0X2o9TtoD6ojX1NDtfPARpn4G7oguEVtQVTTGaJ+6+jXphTPy+BXo/PRG+8z7/l75/uvKKNCjVsOIpv6TXkONNFZFvLsYU+gA9ChwZwzeoiK1YG3prfCoPLWNERNcW5n554Ci1eM6qMhGoDpzC0XH9JtxUS5kdo4eTe2JQVV6Uw7Vv3tD3FL8e4ecfmxExSkL2q86vFGqzmjy1BlmZsY4FxSOo0E0L8o3/v2sfHqEY1el83IU9S7wtyLnP3J68XjtrBz7VHthOVqeqPWqk63eObVSs050Zin1OTRgJL7fGVYjcZaoHntYrRAxQbfcbAe1RsWZelsRYZUYh1kknrJoC7jB/fYZxmL7y7YAzPyEyBA70sAC6StkZPsMgjxD2lCubW7qiaVSzCQmpwE1mNj8DU1fuqmpkHyGcUv2FzFnW+JafmKfxlwVbYWDfeLdFuDT+hP77Vb+vzG7akZXg8JWW5TnGWcQ9WPST0fGoJ+ufGYpozwTmxwrJPmWGLfEv7b555LGPFNj5hgVMfHNvJ+JG8PdTB1mWwFUMgokxsQYmAMlnLPJXZ4clCIXXFVR6z7c2lc+bQZRngmxfF1DIt9L2P2FSXBD5HqjiMxTFHkJaEq+2GbkrF5l43MLFOuKoNpoBXoAhlf00DwglWBZSqH6PG0bDMbkmiCQZT0ecOo9eadMalj/mjwvb8pX5ID607OBhl/w2TpCTPmICySIiQOScFk9e1hTZvPNZkk9fcjfWnM15ISmjzsStIxhgcyRN56MjmI0Ilx9LulAxNSdLDtPzqWrWippuB2nqh6z63rkc0UdbogeM45Z76J2cwJDha4tpYxiA4ibWVlDmXDcq9hUhEMhp+ydY0+8EUhwjQ1+eunY6HhjpPd6cyWEGQvDu/9VUWls4pgZbeZABDLQEUNzXoOX5Kh3TOT3f/GZMMHR+lOXCAMGG1vHPGcaEjGLNZU4RlYx7uSEYVwmBvQAhFEg4Qf8/qRc2QgHw4HFzYADkgOTdoJ3cl9PGUR05tOKTvL+zYcO5tutflft0ZMypghUMSRn/n5QGjdvWV1SL8wmBj70w8IObQylcm+/Pr+9LyINdFzaHBvQ0Lf8UX/QtvKiRlP65kM84Taxeox8clYXO8I5YrZInUlwvVKpMiPdI9GIrEQvy2+uu1nu/nZ+MPW2rDzNYvQOSxQmVf2LL1fNzDGfmjeDSPZkQJkVrurl8Q15dOWi/Pybx+TUA6Vo+B76cJSn5RO3bOpeGpL1HhESi9PQWc1bpJ7EFNCSUtHNxXX3i9+iQFjFBMTgquTek/L5h9S+vrMZvfXLZ+Xuw8NS7RmTtflYbH6sxxx2bGQQcbaoSWr3BXWUcZRDcMnG5cahkwaPN+95jAlcrLew7iJdmBBQ4ly5eSgySNTXbXmHFJFxdhT6ozcP1VHVKdcFjDoZN4vJRqPLH+XlTY1YdSHGBEmY6O1AtPm2Ra+xK0pvHvGFLXGwNsjPWQyPAf4dymI9f/FuB/tHhX8mMaG5kvTwS3Y9lkX/Xm6H0G1jRKMxo2xuxBjS5if/GKc91sv2e69jBIGPKh6wFZ0iTkvG2NcBk1vyxUVbJjgxojwzaycvcry05yemzZIxoZ4isk7ynRj6dP3KPgOjKWRkneR7ZVo0uT/Prox84qthnB/3v9Z3A+LPvyOovUrOn7Co7NvSTvZTNLZf204gC0HtFYy/WGPu7zxr2y2fKyDYK/gicNtA7QQoD8IHYK6jYH2p47Q+819W9/O9uh5/DGUfXAZUP0AGxkDkARQ5X2J5mBFYFiVOAJK9wsS1+NcHbSB9bfbTogFLQRUB6gfGB2GfR1iOC1g1luQxjUS0HJeKf+1RxvUmdzz/uKPdAObB7QTMMd0NkGnGB5OewXrwA8IH4AJlFqRXBxamN7Zs0pCQx1VrtLtkCrIAoA9uLhlYBAxtFYLyNZQHZJddnpy58zB/CkJjNdZvL8SVBX2fy33zSNYjvDrGL5XbX5GhcQATcP7TGn1orR+wHUGxf/KA0A63RNMMYNCGPXUbCF6kYc77LDlpXP8uu1L8455T1bi4NNBCpEzO9xu1iPgSoXXCPOJIM8u9aCzzms2kpiXKJDM5A4R2XtV2ABFF8ylL7wh61xapTLTdQ3N3sRRwbzsi911bl8P3l2TgiPqn90TSa/ak82Kr85+Tz5W/+jdmsef3it54DaDOq6YrgZkod/NDCmw1WQ/AEHi/d5U0Mlf6NPlaotG9SvC+klAYIMyMJ2A0w71+bXHY3e1vG/vpEf2Ke+kdcutLJal8UQG9V4eW9ZZ8rdbvrJXf/Ue+8t7RO/UtruJr0tJxXMfbbj6u8GgfK4CX/8LBEkzQyXK2KaIQlBHbYOeWdQ/hDJzJJfccA4SZcbUfCDaDI52TH94nk6d1jkGbp19eCffdN1N/bJaxfDwxYOxDBOaeDpLBCBTvioD9+VBAPmVA5U0vT2z1rDNrCG8R9LWCTlArH/yJ0e0lL8u+r98iP/uYAYu/k8QaA5hpy3nX3NOD7fk8nwyofKdfN9OzNucUrKL5wNJmcHzk8a+pqd3sNe+pOCI3/GJcDrMtt6esBPse5v7APYPisu0nc8ccjyP6InFD/UvVSjhSZA3+sD7lYPSD8uCPrLPZtJLmeqbZOcZlFy+4W8qAKjrMiibgy6RLetawAFz1vxYfXo2kuxeeyeBstilv/pmXFJ51eIfAxfP6Yh6Qcys7on+t3L8LHTQ4MwJWikvFtZKUEX3u/U8/tenHL90JjUb0nNxz1G14NUV909EzphOMuhGj8uZyvO/21QZ0cVfkin6BrI6W9WsqdREDhFs3QAivOhm/XGMp9sHfTak//iFsbeSFoOa0gzPANiJB5wvqdeqq/hunqtGr2q9gcbkyPjkUtRvr7rmWI3RYBbFS14dOdR6Hx2YnrpNbH9V9Ni2gT1JH1k4+NfqZB4cV0Fvahnb0QU3BqFNPNMQDjwGyAzgfWdh8eQvLPOwYEV7QNgfAzLXjTvkekA+RVGvpK6z/6TJ+NFWNalpJPmlaJEEbphs/ecUhE+bmf3SHph8gX0t5UOl/1WACP6EtS5ghZTTGqxRhC8ywczaxHo7ueYx3uGV9LuPJbLix330UbvHaqB99hxbWe/xR5mMxf9C45zU+COvzWqydln7M1/9FoHPzPwngldeQReysKQ+INne+7BalQ2im6GuNQ9m/bhRF6ozdKaWeTYkAAi1AyA0MZRPsThqCjtQXFJ3+YeybI30GjjIpvYok5hm3bt2trE6eOR6SSJx2HJJ/aTQg9Jl2zIKKNARdGqVTKdIW7aSdwMUU20FaO3k+tPEX7tNRLgJC+25goNl286VxJ2D0k4oAxj1bJmr1q81NG4wzEDZHP81YvwGi7szPOizfCzij9UFam5+b2fptlPOL9vt3A+DT+mCsvRCUdZJfDUB/3NtdLgJjPHcFZYRF+dsNeKeFF63H2v4LXtBBsreotrcAAAAASUVORK5CYII="

/***/ }),

/***/ 6709:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAAABCAYAAAGXnBO4AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAA8KADAAQAAAABAAAAAQAAAACgvFMmAAACMElEQVQoFT1TS3IUMQx9ku3+JTA13RVWrHKFXIAFV+AKnIMdd+EUWbCisuYSoaozSVEzTdsSz92BhUvWe0/Sa3lG3F2+/vg4osWEZEcUTGo+QjA5cNyi+ygiozBCZAL8yLKxcZ87k1ONLWMynxuXU8vYMta84i1sjiWcri3PkHQ6XLWzfHm4G/r0ZsxaRhSdVJRDbHTICPcJKsctMheAOEYAU6TjpoBDsQ3Zh+OpMZ7CYVJN6VNr5SlwaO95ThJPw7rML+Vwks8Pd+kWx6G0L53GvtdsvXkYXNEFt6GY96Law9GLODn0Chlc0NHQwNNDtHdQ5xi4oY7GiIM4j6MTwUDDWw/lugJwCYZLdEbe1bAkwVlrzlPxjfuXU8Pel7Rr/9cF+N6n4jxNxsUYYw5LDPnckBfzy8GuL7/XX5fv59tFvvmn8PP+Md28Q3wuV8n75xheLLlJ1LZh9JjhSd0SYop85sSP4KJzBLQJWu+IRo1AN67e4Ra5KHrc9brpNFWO5mLl+ZoNlxO5mFhrubTEDyOOxOXy28GHBGdXTNir4qg4+3utq/rE5dPLzldv1ESjXxVibMoHWjkz03shtrKm3jP7lkCOHgvvedfUSL1bFsgrXmtq7c6JsV6M9ZUnR5wPl1GoYQzKnrbzgfPogb3IsU43rupsDQiZD1I2Pev41yqh9qtekfnjD0UCvbz2VXrO5Lqoa1mWHCWVmr9tmJ9L+WOe+6u4Lo9LeX/TrvhwX/4CsjFzrBZCs5AAAAAASUVORK5CYII="

/***/ }),

/***/ 3028:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAQCAYAAAFcjQ7rAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAACKADAAQAAAABAAAAEAAAAADFFKcRAAABXklEQVQoFW2Rz0tCQRDHZ/Y9M6LfPw5BEXXrFCHdBLEOT/FSB2/9aUF/Qxlk+cRSiCKJTkGFadkP6FBSomb7o9l97Du1sLM7s5/57uwsFHnKh3+Gzz3FdBwRG1BW3qxxzlR2UkJv2GRoBorCq5qjskrP9IV8Rycyt4EHL2gYMiW1OS5E99PI6aAU3SNAaILPUyXKv7dkKGYDlIIRX3h3NmBWX6SuaNa0E95CWpeIcO1alDmwrSScGKKqsmMt8dUacYamsaIyEz+CfzgOLiYx33ADh80n8fDZiJJYBUDF6fG3UTawHsf9V6trAG0u1NZUW3aKSsEKgTWXRZMJ3GuGgN7ooe/rS14gMEYF16PMjYV1B0hgT1Vm+VfwG2r6W9gtC5yr9CgXfFf7CCofPjTob++4LeQa1fEYYZGlBObqri7wW3YL1PxVknwYZAMLccw9WUW3LTo7JMbtl9kDu/4BZWOYvzeCyCQAAAAASUVORK5CYII="

/***/ }),

/***/ 3062:
/***/ ((module) => {

module.exports = "data:image/webp;base64,UklGRjICAABXRUJQVlA4WAoAAAAQAAAAFwAAFwAAQUxQSA4BAAABkGtr27FHd3QGtm307pLONrpUadPZtt3Ztm3rdxU73/qezMz3jQ8gIiYA/13nnDWxcC7f+lc0e4gOByfOiTpUoGLOZydlCnUBwKaWlVk1iXm0JXeuAHyCAXg9CZbueToYFwAB15IoOShEsMRjT0UAEpmObjYJi0R0w5XPGgBYbQc87RGQkZERxLVwAgAdAlf86nDKDwabtBMu/3O8ct6zVPlDyvAvAEhmlQGcLnAFZWRkBOC4CIgmdcCILeC6IaJFpNFa12svgBJy5LonNkIBcoFCQYIS4MZ0gmdJ8OQNINgHgNu9WItH3GQlY2ttAEC/hJHagtdcBSodRBcTQydEXRr4RevcWYF4NccZ/11WUDgg/gAAAJAHAJ0BKhgAGAA+KRKHQqGhCgIADAFCWwNvqQ5Vh5A/QPxV3IFUA8Cu6cv4B1gHoAeVV+xnwKftL+uns9gUUU9W8CNkAAD+8yI09RgW1yUb/O4aB81XX2qqmpY9rcvFYuAKAh6XpY961/+fxPRNLeVpwEj6v+BQH9cb6jjfXrtbb/nNm5fz8uT6EpVDZe2aBs4WcD5wrvn8YuqYmOvd5hSYn8easlPOpTZqx76zPv/ebqojU8D0BhbK0OKlPkvhfZRLGtlDAKmxG6lR7yyFvcJjnw1OWMeNCBTZIv6CN94a/9bySwnePGzlOBGk2Qsms8vv8i74WSNcaqjRIOAA"

/***/ }),

/***/ 8930:
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 429:
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/theme-tools");

/***/ }),

/***/ 4137:
/***/ ((module) => {

"use strict";
module.exports = require("@walletconnect/web3-provider");

/***/ }),

/***/ 8054:
/***/ ((module) => {

"use strict";
module.exports = require("@web3-react/core");

/***/ }),

/***/ 6590:
/***/ ((module) => {

"use strict";
module.exports = require("@web3-react/injected-connector");

/***/ }),

/***/ 9795:
/***/ ((module) => {

"use strict";
module.exports = require("@web3-react/walletconnect-connector");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 8887:
/***/ ((module) => {

"use strict";
module.exports = require("copy-to-clipboard");

/***/ }),

/***/ 1982:
/***/ ((module) => {

"use strict";
module.exports = require("ethers");

/***/ }),

/***/ 2522:
/***/ ((module) => {

"use strict";
module.exports = require("ethers/lib/utils");

/***/ }),

/***/ 1377:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 4558:
/***/ ((module) => {

"use strict";
module.exports = require("next/config");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 1187:
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

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

/***/ }),

/***/ 6912:
/***/ ((module) => {

"use strict";
module.exports = import("zustand");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [78,444,202,742,639,25,384,779,642,198,116,488,95,333,84], () => (__webpack_exec__(1336)));
module.exports = __webpack_exports__;

})();