(() => {
var exports = {};
exports.id = 459;
exports.ids = [459];
exports.modules = {

/***/ 3153:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginItem": () => (/* binding */ LoginItem),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(5444);
/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4137);
/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_px2vw__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6483);
/* harmony import */ var _assets_imgs_Registration_webp__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3777);
/* harmony import */ var _assets_imgs_Registration_webp__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_Registration_webp__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_imgs_Registrationmob_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2750);
/* harmony import */ var _assets_imgs_Registrationmob_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_Registrationmob_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_imgs_googleid_webp__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1601);
/* harmony import */ var _assets_imgs_googleid_webp__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_googleid_webp__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _assets_imgs_facebook_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4036);
/* harmony import */ var _assets_imgs_facebook_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_facebook_png__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _assets_imgs_metamask_webp__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2802);
/* harmony import */ var _assets_imgs_metamask_webp__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_metamask_webp__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _components_BaseModal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1803);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8054);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _connect_connectors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8202);
/* harmony import */ var _connect_wallet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8938);
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7384);
/* harmony import */ var _apis_login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6642);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5941);
/* harmony import */ var _components_TermsOfUse__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(3019);
/* harmony import */ var _components_PrivacyPolicy__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1380);
/* harmony import */ var _stores_global__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3294);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_5__, _stores_global__WEBPACK_IMPORTED_MODULE_8__]);
([swr__WEBPACK_IMPORTED_MODULE_5__, _stores_global__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















 // 输入框组件



const LoginItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(({
  img,
  text,
  click
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
  w: {
    base: "full",
    lg: "384px"
  },
  h: {
    base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(68),
    lg: "68px"
  },
  lineHeight: {
    base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(48),
    lg: "48px"
  },
  mx: {
    base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(0),
    lg: "8px"
  },
  my: {
    base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(4),
    lg: "4px"
  },
  p: {
    base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(8),
    lg: "8px"
  },
  border: "2px solid",
  fontFamily: "Nunito",
  fontWeight: "700",
  fontSize: {
    base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(18),
    lg: "18px"
  },
  color: "blue.100",
  opacity: "0.8",
  textDecoration: "none",
  _hover: {
    boxShadow: "0px 2px 50px #3d50ff"
  },
  cursor: "pointer",
  onClick: () => click(),
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
    src: img
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
    children: text
  })]
}));

function App() {
  const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useToast)();
  const {
    globalAccount
  } = (0,_stores_global__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
  const {
    activate,
    chainId,
    account
  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_4__.useWeb3React)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const [showTermsOfService, setShowTermsOfService] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useBoolean)(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useBoolean)(false);
  const [isLogin, setIsLogin] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useBoolean)(false);
  const {
    data: walletLoginData
  } = (0,swr__WEBPACK_IMPORTED_MODULE_5__["default"])(isLogin ? [_apis_login__WEBPACK_IMPORTED_MODULE_9__/* .walletLogin.key */ .ge.key] : null, _ => _apis_login__WEBPACK_IMPORTED_MODULE_9__/* .walletLogin.fetcher */ .ge.fetcher({
    wallet_address: account || globalAccount
  }), {
    revalidateOnFocus: false
  });

  const metamaskClick = async () => {
    // 是否为正确网络
    if (chainId !== 137) {
      const res = await (0,_connect_wallet__WEBPACK_IMPORTED_MODULE_10__/* .switchNetwork */ .If)(137);

      if (!res) {
        toast({
          title: `add network fail`,
          status: "error",
          isClosable: true
        });
        return;
      } else if (res === "no metamask") {
        toast({
          title: `Please install the metamask plugin`,
          status: "error",
          isClosable: true
        });
      }
    } // eslint-disable-next-line no-async-promise-executor


    new Promise(async resolve => {
      try {
        await activate(_connect_connectors__WEBPACK_IMPORTED_MODULE_11__/* .injected */ .Lj, undefined, true);
        resolve();
      } catch (error) {
        console.log(error);
      }
    }).then(() => {
      (0,_utils_storage__WEBPACK_IMPORTED_MODULE_12__/* .setStore */ .PQ)(_connect_connectors__WEBPACK_IMPORTED_MODULE_11__/* .connectorLocalStorageKey */ .OM, "true");
      (0,_utils_storage__WEBPACK_IMPORTED_MODULE_12__/* .setStore */ .PQ)("isLogin", true);
      setIsLogin.on();
    }).catch(error => {
      console.error(error);
    });
  };

  const walletConnectClick = async () => {
    //  Create WalletConnect Provider
    const provider = new (_walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_2___default())({
      bridge: "https://bridge.walletconnect.org",
      rpc: {
        137: "https://rpc-mainnet.maticvigil.com"
      },
      infuraId: "b993e781ff0e4ef39d3bed71a59fe142"
    });
    window.walletConnectProvider = provider;
    provider.on("accountsChanged", accounts => {
      _stores_global__WEBPACK_IMPORTED_MODULE_8__/* ["default"].setState */ .Z.setState({
        globalAccount: accounts[0]
      });
      (0,_utils_storage__WEBPACK_IMPORTED_MODULE_12__/* .setStore */ .PQ)(_connect_connectors__WEBPACK_IMPORTED_MODULE_11__/* .connectorLocalStorageKey */ .OM, "true");
      (0,_utils_storage__WEBPACK_IMPORTED_MODULE_12__/* .setStore */ .PQ)("isLogin", true);
      setIsLogin.on();
    });
    provider.on("chainChanged", chainId => {
      if (chainId !== 137) {
        toast({
          title: `Please switch your wallet to the polygon chain`,
          status: "error",
          isClosable: true
        });
      }
    }); //  Enable session (triggers QR Code modal)

    await provider.enable();
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (walletLoginData) {
      router.push(`/games?accessToken=${walletLoginData.access_token}`);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [walletLoginData]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
    w: "full",
    h: {
      base: "inherit",
      lg: "100vh"
    },
    bgColor: "black.1000",
    bgImage: {
      base: (_assets_imgs_Registrationmob_png__WEBPACK_IMPORTED_MODULE_13___default()),
      lg: (_assets_imgs_Registration_webp__WEBPACK_IMPORTED_MODULE_14___default())
    },
    bgSize: {
      base: `${(0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(217)} ${(0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(300)}`,
      lg: "100% 100%"
    },
    bgRepeat: "no-repeat",
    bgPos: "center top",
    pl: {
      base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(15),
      lg: "80px"
    },
    pr: {
      base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(12),
      lg: "0"
    },
    pt: {
      base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(300),
      lg: "0"
    },
    pb: {
      base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(35),
      lg: "0"
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      flexDirection: "column",
      w: {
        base: "full",
        lg: "384px"
      },
      m: {
        base: 0,
        lg: "12px"
      },
      mt: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(0),
        lg: "386px"
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
        fontSize: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(56),
          lg: "60px"
        },
        mb: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(4),
          lg: "4px"
        },
        lineHeight: "1",
        fontWeight: "700",
        color: "white.100",
        children: "Continue"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        w: {
          base: "full",
          lg: "fit-content"
        },
        flexDirection: "column",
        mb: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(24),
          lg: "24px"
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(LoginItem, {
          img: (_assets_imgs_googleid_webp__WEBPACK_IMPORTED_MODULE_15___default()),
          text: "Google ID",
          click: () => window.location.href = "https://app.gamifly.co:3001/auth/google"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(LoginItem, {
          img: (_assets_imgs_facebook_png__WEBPACK_IMPORTED_MODULE_16___default()),
          text: "Facebook",
          click: () => window.location.href = "https://app.gamifly.co:3001/auth/facebook"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(LoginItem, {
          img: (_assets_imgs_metamask_webp__WEBPACK_IMPORTED_MODULE_17___default()),
          text: "Metamask",
          click: () => {
            metamaskClick();
          }
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(LoginItem, {
          img: (_assets_imgs_metamask_webp__WEBPACK_IMPORTED_MODULE_17___default()),
          text: "WalletConnect",
          click: () => {
            walletConnectClick();
          }
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        flexDir: "column",
        mb: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(56),
          lg: "56px"
        },
        onClick: () => router.push("/games"),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          textAlign: "center",
          textStyle: "14",
          fontFamily: "Nunito",
          color: "white.100",
          opacity: 0.65,
          lineHeight: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(20),
            lg: "20px"
          },
          mb: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(7),
            lg: "7px"
          },
          children: "Or"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          textAlign: "center",
          textStyle: "18",
          fontFamily: "Nunito",
          cursor: "pointer",
          opacity: 0.8,
          lineHeight: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(20),
            lg: "20px"
          },
          children: "Play as Guest"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        mx: "auto",
        flexWrap: "wrap",
        color: "blue.100",
        fontFamily: "Nunito",
        textStyle: "14",
        fontWeight: "400",
        alignItems: "center",
        textAlign: "center",
        lineHeight: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(20),
          lg: "20px"
        },
        children: ["By continuing you agree to the", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          display: "inline-flex",
          fontWeight: "700",
          textDecor: "underline",
          cursor: "pointer",
          mx: "5px",
          onClick: () => setShowTermsOfService.on(),
          children: "Terms"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        mx: "auto",
        flexWrap: "wrap",
        color: "blue.100",
        fontFamily: "Nunito",
        textStyle: "14",
        fontWeight: "400",
        alignItems: "center",
        textAlign: "center",
        lineHeight: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(20),
          lg: "20px"
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          display: "inline-flex",
          fontWeight: "700",
          textDecor: "underline",
          cursor: "pointer",
          mx: "5px",
          onClick: () => setShowTermsOfService.on(),
          children: "of Service"
        }), "and", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          display: "inline-flex",
          fontWeight: "700",
          textDecor: "underline",
          cursor: "pointer",
          textAlign: "center",
          ml: "5px",
          onClick: () => setShowPrivacyPolicy.on(),
          children: "Privacy Policy"
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_BaseModal__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
      isShow: showTermsOfService,
      close: () => setShowTermsOfService.off(),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_TermsOfUse__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {})
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_BaseModal__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
      isShow: showPrivacyPolicy,
      close: () => setShowPrivacyPolicy.off(),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_PrivacyPolicy__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {})
    })]
  });
}

const getServerSideProps = async ctx => {
  return {
    props: _objectSpread({}, await (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_21__/* .getI18nSSRProps */ .q)(ctx, ["home"]))
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3777:
/***/ ((module) => {

module.exports = "/_next/static/images/Registration-94d04577e7bb5f2104b3742112393f52.webp";

/***/ }),

/***/ 2750:
/***/ ((module) => {

module.exports = "/_next/static/images/Registrationmob-61eee00a13e961439bdf85ce3860d6cd.png";

/***/ }),

/***/ 4036:
/***/ ((module) => {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 1601:
/***/ ((module) => {

module.exports = "data:image/webp;base64,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"

/***/ }),

/***/ 8930:
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

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
var __webpack_exports__ = __webpack_require__.X(0, [78,444,202,384,779,642,488,802], () => (__webpack_exec__(3153)));
module.exports = __webpack_exports__;

})();