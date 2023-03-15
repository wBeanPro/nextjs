(() => {
var exports = {};
exports.id = 117;
exports.ids = [117];
exports.modules = {

/***/ 2118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ deposit),
/* harmony export */   "k": () => (/* binding */ getGMFPrice)
/* harmony export */ });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9394);
 // const baseUrl = "https://gamifly.co:3001";

const baseUrl = "https://app.gamifly.co:3001";
const ajax = new _utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(baseUrl); // 存款

const deposit = {
  fetcher: params => ajax.post("/api/deposit", params),
  key: "/api/deposit"
}; // 获取GMF价格

const getGMFPrice = {
  fetcher: params => ajax.get(`/api/getGMFPrice/${params}`),
  key: "/api/getGMFPrice"
};

/***/ }),

/***/ 8040:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ withdraw)
/* harmony export */ });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9394);
 // const baseUrl = "https://gamifly.co:3001";

const baseUrl = "https://app.gamifly.co:3001";
const ajax = new _utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(baseUrl); // 存款

const withdraw = {
  fetcher: params => ajax.post("/api/withdraw", params),
  key: "/api/withdraw"
};

/***/ }),

/***/ 7302:
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
/* harmony import */ var _utils_px2vw__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6483);
/* harmony import */ var _assets_imgs_copySuccess_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5826);
/* harmony import */ var _assets_imgs_copySuccess_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_copySuccess_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_imgs_logoIcon_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8241);
/* harmony import */ var _assets_imgs_logoIcon_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_logoIcon_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _connect_wallet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8938);
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7384);
/* harmony import */ var _connect_connectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8202);
/* harmony import */ var _stores_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3294);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8054);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_imgs_metamask_webp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2802);
/* harmony import */ var _assets_imgs_metamask_webp__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_metamask_webp__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_global__WEBPACK_IMPORTED_MODULE_4__]);
_stores_global__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];















function Index({
  backClick,
  confirmClick
}) {
  var _userInfo$platform_wa, _userInfo$platform_wa2;

  const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useToast)();
  const {
    activate,
    chainId,
    account
  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React)();
  const {
    userInfo
  } = (0,_stores_global__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(); // const { library, account } = useWeb3React();

  const {
    0: connectedAddress,
    1: setConnectedAddress
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [isConnected, setIsConnected] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useBoolean)(false);

  const connectMetamask = async () => {
    // Connect wallet
    if (chainId !== 137) {
      const res = await (0,_connect_wallet__WEBPACK_IMPORTED_MODULE_5__/* .switchNetwork */ .If)(137);

      if (!res) {
        toast({
          title: `add network fail`,
          status: "error",
          isClosable: true
        });
        return;
      } else if (res === "no metamask") {
        toast({
          title: `Please install the metamask wallet`,
          status: "error",
          isClosable: true
        });
      }
    } // eslint-disable-next-line no-async-promise-executor


    new Promise(async resolve => {
      try {
        await activate(_connect_connectors__WEBPACK_IMPORTED_MODULE_6__/* .injected */ .Lj, undefined, true);
        resolve();
      } catch (error) {
        console.log(error);
      }
    }).then(() => {
      (0,_utils_storage__WEBPACK_IMPORTED_MODULE_7__/* .setStore */ .PQ)(_connect_connectors__WEBPACK_IMPORTED_MODULE_6__/* .connectorLocalStorageKey */ .OM, "true");
    }).catch(error => {
      console.error(error);
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (account) {
      setIsConnected.on();
    } else {
      setIsConnected.off();
    } // eslint-disable-next-line

  }, [account]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (account) {
      setConnectedAddress(account);
    } // eslint-disable-next-line

  }, [account]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    w: {
      base: "full",
      lg: "496px"
    },
    h: {
      base: "fit-content",
      lg: "480px"
    },
    py: {
      base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(25),
      lg: "30px"
    },
    px: {
      base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(25),
      lg: "60px"
    },
    flexDir: "column",
    alignItems: "center",
    border: "1px solid",
    borderColor: "black.1800",
    borderRadius: "40px",
    boxSizing: "border-box",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      fontFamily: "SofiaPro",
      textStyle: "14",
      color: "gray.500",
      mr: "auto",
      children: "Step 1/4"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      fontFamily: "SofiaPro",
      fontWeight: "600",
      color: "white.100",
      mr: "auto",
      fontSize: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(21),
        lg: "21px"
      },
      lineHeight: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(40),
        lg: "40px"
      },
      mb: {
        base: "13px",
        lg: "13px"
      },
      children: isConnected ? "You are connected" : "Connect with Metamask"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      fontFamily: "SofiaPro",
      textStyle: "14",
      color: "gray.500",
      mr: "auto",
      mb: {
        base: "7px",
        lg: "7px"
      },
      children: "Deposit from"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      w: {
        base: "full",
        lg: "full"
      },
      px: {
        base: "15px",
        lg: "15px"
      },
      pb: {
        base: "20px",
        lg: "20px"
      },
      mb: {
        base: "15px",
        lg: "15px"
      },
      mr: "auto",
      bgColor: "black.100",
      borderRadius: "8px",
      flexDir: "column",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        alignItems: "center",
        mb: {
          base: "10px",
          lg: "10px"
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
          src: (_assets_imgs_metamask_webp__WEBPACK_IMPORTED_MODULE_9___default()),
          w: {
            base: "40px",
            lg: "40px"
          },
          h: {
            base: "40px",
            lg: "40px"
          },
          mr: {
            base: "3px",
            lg: "3px"
          }
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          fontFamily: "SofiaPro",
          fontWeight: "600",
          color: "#BABABA",
          fontSize: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(13),
            lg: "13px"
          },
          lineHeight: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(13),
            lg: "13px"
          },
          mr: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(10),
            lg: "10px"
          },
          children: isConnected ? "Connected Metamask" : "Connect Metamask"
        })]
      }), isConnected ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        px: {
          base: "20px",
          lg: "20px"
        },
        textAlign: "center",
        justifyContent: "space-between",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          fontFamily: "SofiaPro",
          fontWeight: "600",
          color: "#d9d9d9",
          fontSize: {
            base: "15px",
            lg: "15px"
          },
          lineHeight: {
            base: "23px",
            lg: "23px"
          },
          mr: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(10),
            lg: "10px"
          },
          flexDir: "column",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            children: "Account Name"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            fontFamily: "SofiaPro",
            color: "#7ba52e",
            textDecor: "underline",
            fontSize: {
              base: "13px",
              lg: "13px"
            },
            lineHeight: {
              base: "13px",
              lg: "13px"
            },
            children: `${connectedAddress === null || connectedAddress === void 0 ? void 0 : connectedAddress.substring(0, 5)}...${connectedAddress === null || connectedAddress === void 0 ? void 0 : connectedAddress.substring(connectedAddress.length - 4, connectedAddress.length)}`
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          fontFamily: "SofiaPro",
          fontWeight: "600",
          color: "#d9d9d9",
          fontSize: {
            base: "15px",
            lg: "15px"
          },
          lineHeight: {
            base: "23px",
            lg: "23px"
          },
          mr: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(10),
            lg: "10px"
          },
          alignItems: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
            src: (_assets_imgs_copySuccess_png__WEBPACK_IMPORTED_MODULE_10___default()),
            w: {
              base: "13px",
              lg: "13px"
            },
            h: {
              base: "13px",
              lg: "13px"
            },
            mr: {
              base: "5px",
              lg: "5px"
            }
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            children: "Connected"
          })]
        })]
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        px: {
          base: "20px",
          lg: "20px"
        },
        mt: {
          base: "25px",
          lg: "30px"
        },
        mb: {
          base: "25px",
          lg: "25px"
        },
        textAlign: "center",
        justifyContent: "center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          fontFamily: "SofiaPro",
          fontWeight: "600",
          color: "#808080",
          fontSize: {
            base: "15px",
            lg: "15px"
          },
          lineHeight: {
            base: "23px",
            lg: "23px"
          },
          mr: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(10),
            lg: "10px"
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            children: "You haven't connected with Metamask yet. To deposit Gamifly Token and earn more, you need to connect with Metamask"
          })
        })
      })]
    }), isConnected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
        fontFamily: "SofiaPro",
        textStyle: "14",
        color: "gray.500",
        mr: "auto",
        mb: {
          base: "7px",
          lg: "7px"
        },
        children: "To"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        w: {
          base: "full",
          lg: "full"
        },
        px: {
          base: "15px",
          lg: "15px"
        },
        pb: {
          base: "20px",
          lg: "20px"
        },
        mb: {
          base: "15px",
          lg: "15px"
        },
        mr: "auto",
        bgColor: "gray.800",
        borderRadius: "8px",
        flexDir: "column",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          alignItems: "center",
          mb: {
            base: "10px",
            lg: "10px"
          },
          mt: {
            base: "10px",
            lg: "10px"
          },
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
            src: (_assets_imgs_logoIcon_png__WEBPACK_IMPORTED_MODULE_11___default()),
            w: {
              base: "17px",
              lg: "17px"
            },
            h: {
              base: "17px",
              lg: "17px"
            },
            mr: {
              base: "10px",
              lg: "10px"
            }
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            fontFamily: "SofiaPro",
            fontWeight: "600",
            color: "#BABABA",
            fontSize: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(13),
              lg: "13px"
            },
            lineHeight: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(13),
              lg: "13px"
            },
            mr: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(10),
              lg: "10px"
            },
            children: "My Gamifly Wallet"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          px: {
            base: "20px",
            lg: "20px"
          },
          textAlign: "center",
          justifyContent: "space-between",
          mt: {
            base: "10px",
            lg: "10px"
          },
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            fontFamily: "SofiaPro",
            fontWeight: "600",
            color: "#d9d9d9",
            fontSize: {
              base: "15px",
              lg: "15px"
            },
            lineHeight: {
              base: "23px",
              lg: "23px"
            },
            mr: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(10),
              lg: "10px"
            },
            flexDir: "column",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
              children: (userInfo === null || userInfo === void 0 ? void 0 : userInfo.name) || "User Name"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            fontFamily: "SofiaPro",
            fontWeight: "600",
            color: "#d9d9d9",
            fontSize: {
              base: "15px",
              lg: "15px"
            },
            lineHeight: {
              base: "23px",
              lg: "23px"
            },
            mr: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(10),
              lg: "10px"
            },
            alignItems: "center",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
              fontFamily: "SofiaPro",
              color: "#7ba52e",
              textDecor: "underline",
              fontSize: {
                base: "13px",
                lg: "13px"
              },
              lineHeight: {
                base: "13px",
                lg: "13px"
              },
              children: `${userInfo === null || userInfo === void 0 ? void 0 : (_userInfo$platform_wa = userInfo.platform_wallet) === null || _userInfo$platform_wa === void 0 ? void 0 : _userInfo$platform_wa.substring(0, 5)}...${userInfo === null || userInfo === void 0 ? void 0 : (_userInfo$platform_wa2 = userInfo.platform_wallet) === null || _userInfo$platform_wa2 === void 0 ? void 0 : _userInfo$platform_wa2.substring((userInfo === null || userInfo === void 0 ? void 0 : userInfo.platform_wallet.length) - 4, userInfo === null || userInfo === void 0 ? void 0 : userInfo.platform_wallet.length)}`
            })
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      w: "full",
      justifyContent: "space-between",
      mt: "auto",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        w: {
          base: "160px",
          lg: "160px"
        },
        h: {
          base: "50px",
          lg: "50px"
        },
        border: "1px solid",
        borderColor: "green.1000",
        borderRadius: "5px",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        onClick: () => backClick(),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          fontSize: {
            base: "17px",
            lg: "17px"
          },
          fontFamily: "Eurostile",
          fontWeight: "bold",
          color: "green.1000",
          children: "BACK"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        border: "1px solid",
        borderRadius: "5px",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        w: {
          base: "160px",
          lg: "160px"
        },
        h: {
          base: "50px",
          lg: "50px"
        },
        bgColor: "green.1000",
        borderColor: "green.1000",
        onClick: () => {
          if (isConnected) {
            confirmClick(connectedAddress);
          } else {
            connectMetamask();
          }
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          fontSize: isConnected ? {
            base: "15px",
            lg: "15px"
          } : {
            base: "13px",
            lg: "13px"
          },
          fontFamily: "Eurostile",
          textAlign: "center",
          lineHeight: "18px",
          fontWeight: "bold",
          color: "black.1600",
          children: isConnected ? "CONTINUE" : "CONNECT METAMASK"
        })
      })]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Index));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3104:
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
/* harmony import */ var _assets_imgs_copySuccess_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5826);
/* harmony import */ var _assets_imgs_copySuccess_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_copySuccess_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_imgs_usdc_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2254);
/* harmony import */ var _assets_imgs_usdc_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_usdc_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_imgs_gamiflyToken_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1969);
/* harmony import */ var _assets_imgs_gamiflyToken_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_gamiflyToken_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apis_deposit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2118);
/* harmony import */ var _abi_ERC20Abi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3822);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5941);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_3__]);
swr__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






 // import { useWeb3React } from "@web3-react/core";
// import { recharge } from "@/connect/wallet";








function Index({
  connectedAddress,
  backClick,
  confirmClick
}) {
  const {
    0: inputValue,
    1: setInputValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""); // const [setLoading] = useBoolean(false);

  const {
    0: gmfPrice,
    1: setGmfPrice
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [getNewPriceLoading, setGetNewPriceLoading] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useBoolean)(false);
  const [isBalance, setIsBalance] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useBoolean)(true);
  const usdcAddress = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174";
  const {
    data: getGMFPriceData
  } = (0,swr__WEBPACK_IMPORTED_MODULE_3__["default"])(Number(inputValue) ? [_apis_deposit__WEBPACK_IMPORTED_MODULE_5__/* .getGMFPrice.key */ .k.key, inputValue] : null, () => _apis_deposit__WEBPACK_IMPORTED_MODULE_5__/* .getGMFPrice.fetcher */ .k.fetcher(inputValue), {
    revalidateOnFocus: false
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (getGMFPriceData) {
      setGmfPrice(getGMFPriceData.value);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [getGMFPriceData]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setGetNewPriceLoading.off(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gmfPrice]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const checkingBalance = async () => {
      const metamaskProvider = window.ethereum;
      await metamaskProvider.request({
        method: "eth_requestAccounts"
      });
      const provider = new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.providers.Web3Provider(metamaskProvider);
      const signer = provider.getSigner();
      const usdcContract = new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.Contract(usdcAddress, _abi_ERC20Abi__WEBPACK_IMPORTED_MODULE_6__/* .ERC20Abi */ .X, signer);
      const usdcBalance = (await usdcContract.balanceOf(connectedAddress)) / 10 ** 6;
      console.log("USDC Balance", usdcBalance); // eslint-disable-next-line react-hooks/exhaustive-deps

      if (usdcBalance >= Number(inputValue)) {
        setIsBalance.on(); // eslint-disable-next-line react-hooks/exhaustive-deps
      } else {
        setIsBalance.off(); // eslint-disable-next-line react-hooks/exhaustive-deps
      }
    };

    checkingBalance(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    w: {
      base: "full",
      lg: "496px"
    },
    h: {
      base: "fit-content",
      lg: "480px"
    },
    py: {
      base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(25),
      lg: "30px"
    },
    px: {
      base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(25),
      lg: "60px"
    },
    flexDir: "column",
    alignItems: "center",
    border: "1px solid",
    borderColor: "black.1800",
    borderRadius: "40px",
    boxSizing: "border-box",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      fontFamily: "SofiaPro",
      textStyle: "14",
      color: "gray.500",
      mr: "auto",
      children: "Step 2/4"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      fontFamily: "SofiaPro",
      fontWeight: "600",
      color: "white.100",
      mr: "auto",
      fontSize: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(21),
        lg: "21px"
      },
      lineHeight: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(40),
        lg: "40px"
      },
      mb: {
        base: "8px",
        lg: "10px"
      },
      children: "Enter the amount of deposit"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      w: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(300),
        lg: "300px"
      },
      h: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(40),
        lg: "40px"
      },
      mb: {
        base: "40px",
        lg: "50px"
      },
      alignItems: "center",
      justifyContent: "center",
      mr: "auto",
      bgColor: "black.100",
      borderRadius: "30px",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
        src: (_assets_imgs_copySuccess_png__WEBPACK_IMPORTED_MODULE_8___default()),
        w: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(13),
          lg: "13px"
        },
        h: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(13),
          lg: "13px"
        },
        mr: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(5),
          lg: "5px"
        }
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
        fontFamily: "SofiaPro",
        fontWeight: "600",
        color: "#BABABA",
        fontSize: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(13),
          lg: "13px"
        },
        lineHeight: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(13),
          lg: "13px"
        },
        mr: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(10),
          lg: "10px"
        },
        children: "Your are connected with"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
        fontFamily: "SofiaPro",
        color: "green.1000",
        textDecor: "underline",
        fontSize: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(13),
          lg: "13px"
        },
        lineHeight: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(13),
          lg: "13px"
        },
        children: `${connectedAddress === null || connectedAddress === void 0 ? void 0 : connectedAddress.substring(0, 5)}...${connectedAddress === null || connectedAddress === void 0 ? void 0 : connectedAddress.substring(connectedAddress.length - 4, connectedAddress.length)}`
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      w: "full",
      flexDir: "column",
      mb: {
        base: "18px",
        lg: "20px"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        w: "full",
        h: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(70),
          lg: "70px"
        },
        px: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(17),
          lg: "17px"
        },
        justifyContent: "space-between",
        alignItems: "center",
        boxSizing: "border-box",
        borderRadius: "20px",
        border: "1px solid",
        borderColor: "green.1000",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input // eslint-disable-next-line jsx-a11y/no-autofocus
        , {
          autoFocus: true,
          border: "none",
          outline: "none",
          bgColor: "transparent",
          p: "0",
          color: "green.1000",
          _focusVisible: {
            border: "none",
            outline: "none"
          },
          _placeholder: {
            fontFamily: "SofiaPro",
            textStyle: 14,
            color: "green.1000",
            opacity: 1
          },
          placeholder: "Enter USDC value here",
          value: inputValue,
          onChange: e => {
            if (e.target.value !== "" && Number(e.target.value) !== 0) {
              setGetNewPriceLoading.on();
            }

            setInputValue === null || setInputValue === void 0 ? void 0 : setInputValue(e.target.value);
          },
          disabled: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          ml: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(10),
            lg: "10px"
          },
          mr: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(20),
            lg: "20px"
          },
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
            src: (_assets_imgs_usdc_png__WEBPACK_IMPORTED_MODULE_9___default()),
            w: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(18),
              lg: "18px"
            },
            h: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(18),
              lg: "18px"
            },
            mr: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(5),
              lg: "5px"
            }
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            fontFamily: "SofiaPro",
            textStyle: "12",
            fontWeight: "600",
            color: "white.100",
            lineHeight: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(18),
              lg: "18px"
            },
            children: "USDC"
          })]
        })]
      }), isBalance ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: inputValue && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          mt: "10px",
          children: getNewPriceLoading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Spinner, {
            size: "xs"
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            alignItems: "center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
              fontFamily: "SofiaPro",
              fontWeight: "bold",
              fontSize: {
                base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(19),
                lg: "19px"
              },
              lineHeight: {
                base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(25),
                lg: "25px"
              },
              children: ["\u2248 ", Number(gmfPrice), " GMF"]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
              src: (_assets_imgs_gamiflyToken_png__WEBPACK_IMPORTED_MODULE_10___default()),
              w: {
                base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(25),
                lg: "25px"
              },
              h: {
                base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(25),
                lg: "25px"
              },
              mx: {
                base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(5),
                lg: "5px"
              }
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
              fontFamily: "SofiaPro",
              fontWeight: "bold",
              textStyle: "12",
              lineHeight: {
                base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(25),
                lg: "25px"
              },
              children: "Gamifly token"
            })]
          })
        })
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
        fontFamily: "SofiaPro",
        color: "red",
        fontWeight: "bold",
        textStyle: "12",
        lineHeight: {
          base: "25px",
          lg: "25px"
        },
        mr: "auto",
        pl: {
          base: "20px",
          lg: "20px"
        },
        children: "You don't have enough balance in your account!"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        mt: {
          base: "15px",
          lg: "15px"
        },
        justifyContent: "space-around",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          border: "1px solid",
          borderRadius: "15px",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          w: {
            base: "90px",
            lg: "100px"
          },
          h: {
            base: "25px",
            lg: "25px"
          },
          bgColor: Number(inputValue) == 2 ? "green.1000" : "#749733",
          borderColor: Number(inputValue) == 2 ? "green.1000" : "#749733",
          onClick: () => {
            setInputValue("2");
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            fontSize: {
              base: "15px",
              lg: "17px"
            },
            fontFamily: "Eurostile",
            fontWeight: "bold",
            color: "black.1600",
            children: "$2"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          border: "1px solid",
          borderRadius: "15px",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          w: {
            base: "90px",
            lg: "100px"
          },
          h: {
            base: "25px",
            lg: "25px"
          },
          bgColor: Number(inputValue) == 5 ? "green.1000" : "#749733",
          borderColor: Number(inputValue) == 5 ? "green.1000" : "#749733",
          onClick: () => {
            setInputValue("5");
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            fontSize: {
              base: "15px",
              lg: "17px"
            },
            fontFamily: "Eurostile",
            fontWeight: "bold",
            color: "black.1600",
            children: "$5"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          border: "1px solid",
          borderRadius: "15px",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          w: {
            base: "90px",
            lg: "100px"
          },
          h: {
            base: "25px",
            lg: "25px"
          },
          bgColor: Number(inputValue) == 10 ? "green.1000" : "#749733",
          borderColor: Number(inputValue) == 10 ? "green.1000" : "#749733",
          onClick: () => {
            setInputValue("10");
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            fontSize: {
              base: "15px",
              lg: "17px"
            },
            fontFamily: "Eurostile",
            fontWeight: "bold",
            color: "black.1600",
            children: "$10"
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      w: "full",
      justifyContent: "space-between",
      mt: "auto",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        w: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(118),
          lg: "160px"
        },
        h: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(40),
          lg: "50px"
        },
        border: "1px solid",
        borderColor: "green.1000",
        borderRadius: "5px",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        onClick: () => backClick(),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          fontSize: {
            base: "17px",
            lg: "17px"
          },
          fontFamily: "Eurostile",
          fontWeight: "bold",
          color: "green.1000",
          children: "BACK"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        border: "1px solid",
        borderRadius: "5px",
        justifyContent: "center",
        alignItems: "center",
        cursor: inputValue === "" ? "no-drop" : "pointer",
        w: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(118),
          lg: "160px"
        },
        h: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(40),
          lg: "50px"
        },
        bgColor: inputValue === "" ? "#749733" : "green.1000",
        borderColor: inputValue === "" ? "#749733" : "green.1000",
        onClick: () => {
          if (isBalance) {
            confirmClick(inputValue, gmfPrice);
          }
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          fontSize: {
            base: "17px",
            lg: "17px"
          },
          fontFamily: "Eurostile",
          fontWeight: "bold",
          color: "black.1600",
          children: "CONFIRM"
        })
      })]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Index));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6234:
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
/* harmony import */ var _utils_px2vw__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6483);
/* harmony import */ var _assets_imgs_usdc_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2254);
/* harmony import */ var _assets_imgs_usdc_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_usdc_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_imgs_gamiflyToken_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1969);
/* harmony import */ var _assets_imgs_gamiflyToken_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_gamiflyToken_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _stores_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3294);
/* harmony import */ var _connect_wallet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8938);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8054);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apis_deposit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2118);
/* harmony import */ var _apis_withdraw__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8040);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5941);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_3__, _stores_global__WEBPACK_IMPORTED_MODULE_5__]);
([swr__WEBPACK_IMPORTED_MODULE_3__, _stores_global__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















function Index({
  inputVal,
  address,
  chooseType,
  gmfVal,
  backClick,
  confirmClick
}) {
  const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useToast)();
  const {
    library,
    account
  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React)();
  const {
    userInfo,
    globalAccount
  } = (0,_stores_global__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
  const [loading, setLoading] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useBoolean)(false);
  const {
    0: depositHash,
    1: setDepositHash
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [isDeposit, setIsDeposit] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useBoolean)(false);
  const [isWithdraw, setWithdraw] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useBoolean)(false);
  const token = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174";
  const {
    data: depositData
  } = (0,swr__WEBPACK_IMPORTED_MODULE_3__["default"])(userInfo && (userInfo === null || userInfo === void 0 ? void 0 : userInfo.platform_wallet) && depositHash && isDeposit && _apis_deposit__WEBPACK_IMPORTED_MODULE_6__/* .deposit.key */ ._.key, () => _apis_deposit__WEBPACK_IMPORTED_MODULE_6__/* .deposit.fetcher */ ._.fetcher({
    hash: depositHash,
    wallet_address: userInfo === null || userInfo === void 0 ? void 0 : userInfo.platform_wallet
  }), {
    revalidateOnFocus: false
  });
  const {
    data: withdrawData
  } = (0,swr__WEBPACK_IMPORTED_MODULE_3__["default"])(userInfo && userInfo !== null && userInfo !== void 0 && userInfo.platform_wallet && isWithdraw ? [_apis_withdraw__WEBPACK_IMPORTED_MODULE_7__/* .withdraw.key */ .X.key, isWithdraw, gmfVal] : null, () => _apis_withdraw__WEBPACK_IMPORTED_MODULE_7__/* .withdraw.fetcher */ .X.fetcher({
    user_id: userInfo === null || userInfo === void 0 ? void 0 : userInfo.id,
    accessToken: userInfo === null || userInfo === void 0 ? void 0 : userInfo.access_token,
    withdrawable_amount: Number(gmfVal),
    withdraw_address: address
  }), {
    revalidateOnFocus: false
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (depositHash) {
      setIsDeposit.on();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [depositHash]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (depositData) {
      setLoading.off();
      confirmClick();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [depositData]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (withdrawData !== null && withdrawData !== void 0 && withdrawData.result) {
      // success(withdrawData?.hash, inputValue);
      setLoading.off();
      setWithdraw.off();
      confirmClick();
    } else if (withdrawData !== null && withdrawData !== void 0 && withdrawData.message) {
      toast({
        title: "Fail",
        description: withdrawData === null || withdrawData === void 0 ? void 0 : withdrawData.message,
        status: "error",
        duration: 3000,
        isClosable: true
      });
      setLoading.off();
      setWithdraw.off();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [withdrawData]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    w: {
      base: "full",
      lg: "496px"
    },
    py: {
      base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(25),
      lg: "30px"
    },
    px: {
      base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(25),
      lg: "60px"
    },
    h: "fit-content",
    flexDir: "column",
    alignItems: "center",
    border: "1px solid",
    borderColor: "black.1800",
    borderRadius: "40px",
    boxSizing: "border-box",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      fontFamily: "SofiaPro",
      textStyle: "14",
      color: "gray.500",
      mr: "auto",
      children: "Step 3/4"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      fontFamily: "SofiaPro",
      fontWeight: "600",
      color: "white.100",
      mr: "auto",
      fontSize: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(21),
        lg: "21px"
      },
      lineHeight: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(40),
        lg: "40px"
      },
      children: "Review Order"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      fontFamily: "SofiaPro",
      fontWeight: "500",
      color: "gray.700",
      mr: "auto",
      fontSize: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(14),
        lg: "14px"
      },
      lineHeight: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(18),
        lg: "18px"
      },
      mb: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(15),
        lg: "15px"
      },
      children: chooseType === "Deposit" ? `Please confirm the amount of Gamifly token you are going to purchase with us :` : `Please confirm the amount of Gamifly token you are going to withdraw :`
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      w: {
        base: "300px",
        lg: "300px"
      },
      h: {
        base: "40px",
        lg: "40px"
      },
      mb: {
        base: "60px",
        lg: "60px"
      },
      mr: "auto",
      alignItems: "center",
      justifyContent: "space-between",
      bgColor: "black.100",
      borderRadius: "30px",
      px: {
        base: "15px",
        lg: "15px"
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          fontFamily: "SofiaPro",
          fontWeight: "600",
          color: "green.1000",
          fontSize: {
            base: "13px",
            lg: "13px"
          },
          lineHeight: {
            base: "13px",
            lg: "13px"
          },
          mr: {
            base: "10px",
            lg: "10px"
          },
          children: chooseType === "Deposit" ? "Deposit from" : "Withdraw to"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          fontFamily: "SofiaPro",
          fontWeight: "600",
          color: "#BABABA",
          fontSize: {
            base: "17px",
            lg: "17px"
          },
          lineHeight: {
            base: "13px",
            lg: "13px"
          },
          mr: {
            base: "10px",
            lg: "10px"
          },
          children: "Account"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          fontFamily: "SofiaPro",
          color: "green.1000",
          textDecor: "underline",
          fontSize: {
            base: "13px",
            lg: "13px"
          },
          lineHeight: {
            base: "13px",
            lg: "13px"
          },
          children: `${address.substring(0, 5)}...${address.substring(address.length - 4, address.length)}`
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      mr: "auto",
      flexDir: "column",
      mb: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(60),
        lg: "60px"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        alignItems: "flex-end",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          fontFamily: "SofiaPro",
          fontWeight: "black",
          color: "green.1000",
          mr: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(5),
            lg: "5px"
          },
          fontSize: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(65),
            lg: "65px"
          },
          lineHeight: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(65),
            lg: "65px"
          },
          children: Number(inputVal)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          mb: "10px",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
            src: (_assets_imgs_usdc_png__WEBPACK_IMPORTED_MODULE_9___default()),
            w: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(18),
              lg: "18px"
            },
            h: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(18),
              lg: "18px"
            },
            mr: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(5),
              lg: "5px"
            }
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            fontFamily: "SofiaPro",
            textStyle: "12",
            fontWeight: "600",
            color: "white.100",
            opacity: "0.6",
            lineHeight: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(18),
              lg: "18px"
            },
            children: "USDC"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        alignItems: "center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          fontFamily: "SofiaPro",
          fontWeight: "bold",
          fontSize: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(19),
            lg: "19px"
          },
          lineHeight: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(25),
            lg: "25px"
          },
          children: ["\u2248 ", Number(gmfVal)]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
          src: (_assets_imgs_gamiflyToken_png__WEBPACK_IMPORTED_MODULE_10___default()),
          w: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(25),
            lg: "25px"
          },
          h: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(25),
            lg: "25px"
          },
          mx: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(5),
            lg: "5px"
          }
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          fontFamily: "SofiaPro",
          fontWeight: "bold",
          textStyle: "12",
          lineHeight: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(25),
            lg: "25px"
          },
          children: "Gamifly token"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      w: "full",
      flexDir: "column",
      justifyContent: "space-between",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        mb: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(15),
          lg: "15px"
        },
        h: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(40),
          lg: "50px"
        },
        w: "full",
        border: "1px solid",
        borderColor: "green.1000",
        bgColor: "green.1000",
        borderRadius: "5px",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        onClick: () => {
          setLoading.on();

          if (chooseType === "Deposit") {
            (0,_connect_wallet__WEBPACK_IMPORTED_MODULE_11__/* .recharge */ .H3)(library, String(account || globalAccount), token, userInfo, inputVal, res => setDepositHash(res));
          } else {
            setWithdraw.on();
          }
        },
        children: loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Spinner, {}) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          fontSize: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(17),
            lg: "17px"
          },
          fontFamily: "Eurostile",
          fontWeight: "bold",
          color: "black.1600",
          children: chooseType === "Deposit" ? `DEPOSIT WITH ${Number(inputVal)} USDC` : `WITHDRAW ${Number(inputVal)} USDC`
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        mb: {
          base: "15px",
          lg: "15px"
        },
        h: {
          base: "50px",
          lg: "50px"
        },
        w: "full",
        border: "1px solid",
        borderColor: "green.1000",
        borderRadius: "5px",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        onClick: () => backClick(chooseType),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          fontSize: {
            base: "17px",
            lg: "17px"
          },
          fontFamily: "Eurostile",
          fontWeight: "bold",
          color: "green.1000",
          children: "EDIT"
        })
      })]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Index));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4634:
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
/* harmony import */ var _assets_imgs_usdc_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2254);
/* harmony import */ var _assets_imgs_usdc_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_usdc_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_imgs_gamiflyToken_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1969);
/* harmony import */ var _assets_imgs_gamiflyToken_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_gamiflyToken_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);










function Index({
  address,
  chooseType,
  inputVal,
  gmfVal,
  backClick
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    w: {
      base: "full",
      lg: "496px"
    },
    h: {
      base: "fit-content",
      lg: "480px"
    },
    py: {
      base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(25),
      lg: "30px"
    },
    px: {
      base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(25),
      lg: "60px"
    },
    flexDir: "column",
    alignItems: "center",
    border: "1px solid",
    borderColor: "black.1800",
    borderRadius: "40px",
    boxSizing: "border-box",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      fontFamily: "SofiaPro",
      textStyle: "14",
      color: "gray.500",
      mr: "auto",
      children: "Step 4/4"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      fontFamily: "SofiaPro",
      fontWeight: "600",
      color: "white.100",
      mr: "auto",
      fontSize: {
        base: "21px",
        lg: "21px"
      },
      lineHeight: {
        base: "40px",
        lg: "40px"
      },
      mb: {
        base: "15px",
        lg: "15px"
      },
      children: "Order placed"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      fontFamily: "Eurostile",
      fontWeight: "black",
      color: "green.1000",
      mr: "auto",
      fontSize: {
        base: "30px",
        lg: "30px"
      },
      lineHeight: {
        base: "30px",
        lg: "30px"
      },
      mb: {
        base: "15px",
        lg: "15px"
      },
      children: "YOUR TRANSACTION IS ON THE WAY!"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      w: {
        base: "300px",
        lg: "300px"
      },
      h: {
        base: "50px",
        lg: "50px"
      },
      mb: {
        base: "30px",
        lg: "30px"
      },
      mr: "auto",
      alignItems: "center",
      justifyContent: "space-between",
      bgColor: "black.100",
      borderRadius: "30px",
      px: {
        base: "15px",
        lg: "15px"
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          fontFamily: "SofiaPro",
          fontWeight: "600",
          color: "green.1000",
          fontSize: {
            base: "13px",
            lg: "13px"
          },
          lineHeight: {
            base: "13px",
            lg: "13px"
          },
          mr: {
            base: "10px",
            lg: "10px"
          },
          children: chooseType === "Deposit" ? "Deposit from" : "Withdraw to"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          fontFamily: "SofiaPro",
          fontWeight: "600",
          color: "#BABABA",
          fontSize: {
            base: "17px",
            lg: "17px"
          },
          lineHeight: {
            base: "13px",
            lg: "13px"
          },
          mr: {
            base: "10px",
            lg: "10px"
          },
          children: "Account"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          fontFamily: "SofiaPro",
          color: "green.1000",
          textDecor: "underline",
          fontSize: {
            base: "13px",
            lg: "13px"
          },
          lineHeight: {
            base: "13px",
            lg: "13px"
          },
          children: `${address.substring(0, 5)}...${address.substring(address.length - 4, address.length)}`
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      mr: "auto",
      fontFamily: "SofiaPro",
      fontSize: {
        base: "18px",
        lg: "18px"
      },
      lineHeight: {
        base: "20px",
        lg: "20px"
      },
      mb: {
        base: "5px",
        lg: "5px"
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
        color: "white.100",
        mr: "5px",
        children: "You just"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
        color: "green.1000",
        children: "sent"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      mr: "auto",
      alignItems: "flex-end",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
        fontFamily: "SofiaPro",
        fontWeight: "black",
        color: "white.100",
        mr: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(5),
          lg: "5px"
        },
        fontSize: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(40),
          lg: "40px"
        },
        lineHeight: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(40),
          lg: "40px"
        },
        children: Number(gmfVal || inputVal).toFixed(2)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        mb: "2px",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
          src: gmfVal ? (_assets_imgs_gamiflyToken_png__WEBPACK_IMPORTED_MODULE_5___default()) : (_assets_imgs_usdc_png__WEBPACK_IMPORTED_MODULE_6___default()),
          w: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(25),
            lg: "25px"
          },
          h: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(25),
            lg: "25px"
          },
          mx: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(10),
            lg: "10px"
          }
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          fontFamily: "SofiaPro",
          fontWeight: "bold",
          textStyle: "12",
          lineHeight: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(25),
            lg: "25px"
          },
          children: gmfVal ? "Gamifly token" : "USDC"
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      mr: "auto",
      fontFamily: "SofiaPro",
      fontWeight: "500",
      color: "white.100",
      mb: {
        base: "10px",
        lg: "10px"
      },
      fontSize: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(18),
        lg: "18px"
      },
      lineHeight: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(30),
        lg: "30px"
      },
      children: chooseType == "Deposit" ? "to your Gamifly address" : "to your external external address."
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      w: "full",
      justifyContent: "space-between",
      mt: "auto",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        h: {
          base: "40px",
          lg: "40px"
        },
        w: "full",
        border: "1px solid",
        borderColor: "green.1000",
        bgColor: "green.1000",
        borderRadius: "5px",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        mb: {
          base: "10px",
          lg: "10px"
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          fontSize: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(17),
            lg: "17px"
          },
          fontFamily: "Eurostile",
          fontWeight: "bold",
          color: "black.1600",
          onClick: () => backClick(),
          children: "TRANSFER MORE"
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      w: "full",
      justifyContent: "space-between",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        h: {
          base: "40px",
          lg: "40px"
        },
        w: "full",
        border: "1px solid",
        borderColor: "green.1000",
        borderRadius: "5px",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          fontSize: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(17),
            lg: "17px"
          },
          fontFamily: "Eurostile",
          fontWeight: "bold",
          color: "green.1000",
          onClick: () => router.push("/profile"),
          children: "VIEW DETAILS"
        })
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Index));

/***/ }),

/***/ 7889:
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
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_px2vw__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6483);
/* harmony import */ var _apis_withdraw__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8040);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5941);
/* harmony import */ var _stores_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3294);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_3__, _stores_global__WEBPACK_IMPORTED_MODULE_5__]);
([swr__WEBPACK_IMPORTED_MODULE_3__, _stores_global__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



 // import copySuccessIcon from "@/assets/imgs/copySuccess.png";
// import usdc from "@/assets/imgs/usdc.png";
// import gamiflyToken from "@/assets/imgs/gamiflyToken.png";
// import messageIcon from "@/assets/imgs/messageIcon.png";


 // import CryptoWallet from "../CryptoWallet";
// import BaseButton from "../BaseButton";






function Index({
  backClick,
  confirmClick
}) {
  // const toast = useToast();
  const {
    userInfo
  } = (0,_stores_global__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(); // const [loading, setLoading] = useBoolean(false);

  const [isWithdraw] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useBoolean)(false);
  const {
    0: inputValue,
    1: setInputValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [isAddress, setIsAddress] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useBoolean)(true);
  const {
    data: _withdrawData
  } = (0,swr__WEBPACK_IMPORTED_MODULE_3__["default"])(userInfo && userInfo !== null && userInfo !== void 0 && userInfo.platform_wallet && isWithdraw ? [_apis_withdraw__WEBPACK_IMPORTED_MODULE_6__/* .withdraw.key */ .X.key, isWithdraw, inputValue] : null, () => _apis_withdraw__WEBPACK_IMPORTED_MODULE_6__/* .withdraw.fetcher */ .X.fetcher({
    user_id: userInfo === null || userInfo === void 0 ? void 0 : userInfo.id,
    amount: inputValue,
    accessToken: userInfo === null || userInfo === void 0 ? void 0 : userInfo.access_token,
    external_wallet: userInfo === null || userInfo === void 0 ? void 0 : userInfo.external_wallet_address
  }), {
    revalidateOnFocus: false
  }); // useEffect(() => {
  //   if(ethers.utils.isAddress(inputValue)){
  //     setIsAddress.on();
  //   } else {
  //     setIsAddress.off();
  //   }
  // }, [inputValue])

  const checkingAddress = () => {
    if (ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.utils.isAddress(inputValue)) {
      setIsAddress.on();
      confirmClick(inputValue); // eslint-disable-next-line react-hooks/exhaustive-deps
    } else {
      setIsAddress.off(); // eslint-disable-next-line react-hooks/exhaustive-deps
    }
  }; // useEffect(() => {
  //   if (withdrawData?.result) {
  //     success(withdrawData?.hash, inputValue);
  //     setLoading.off();
  //     setWithdraw.off();
  //   } else if (withdrawData?.message) {
  //     toast({
  //       title: "Fail",
  //       description: withdrawData?.message,
  //       status: "error",
  //       duration: 3000,
  //       isClosable: true,
  //     });
  //     setLoading.off();
  //     setWithdraw.off();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [withdrawData]);


  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    w: {
      base: "full",
      lg: "496px"
    },
    h: {
      base: "fit-content",
      lg: "480px"
    },
    py: {
      base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(25),
      lg: "30px"
    },
    px: {
      base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(25),
      lg: "60px"
    },
    flexDir: "column",
    alignItems: "center",
    border: "1px solid",
    borderColor: "black.1800",
    borderRadius: "40px",
    boxSizing: "border-box",
    justifyContent: "center",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      fontFamily: "SofiaPro",
      textStyle: "14",
      color: "gray.500",
      mr: "auto",
      children: "Step 1/4"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      fontFamily: "SofiaPro",
      fontWeight: "600",
      color: "white.100",
      mr: "auto",
      fontSize: {
        base: "21px",
        lg: "21px"
      },
      lineHeight: {
        base: "40px",
        lg: "40px"
      },
      mb: {
        base: "15px",
        lg: "15px"
      },
      children: "Withdraw to Metamask address"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      fontFamily: "SofiaPro",
      fontWeight: "500",
      color: "gray.700",
      mr: "auto",
      fontSize: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(14),
        lg: "14px"
      },
      lineHeight: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(18),
        lg: "18px"
      },
      mb: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(15),
        lg: "15px"
      },
      children: "The address is where your winning rewards goes"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      fontFamily: "SofiaPro",
      fontWeight: "600",
      color: "green.1000",
      mr: "auto",
      fontSize: {
        base: "21px",
        lg: "21px"
      },
      lineHeight: {
        base: "40px",
        lg: "40px"
      },
      mb: {
        base: "15px",
        lg: "15px"
      },
      ml: {
        base: "20px",
        lg: "20px"
      },
      children: "ADD ADDRESS"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      w: "full",
      flexDir: "column",
      mb: {
        base: "10px",
        lg: "10px"
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        w: "full",
        h: {
          base: "40px",
          lg: "40px"
        },
        px: {
          base: "17px",
          lg: "17px"
        },
        justifyContent: "space-between",
        alignItems: "center",
        boxSizing: "border-box",
        borderRadius: "50px",
        border: "1px solid",
        borderColor: "black",
        bgColor: "black",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input // eslint-disable-next-line jsx-a11y/no-autofocus
        , {
          autoFocus: true,
          border: "none",
          outline: "none",
          bgColor: "transparent",
          p: "0",
          color: "green.1000",
          _focusVisible: {
            border: "none",
            outline: "none"
          },
          _placeholder: {
            fontFamily: "SofiaPro",
            textStyle: 14,
            color: "gray.700",
            opacity: 0.6
          },
          placeholder: "Please enter your Metamask wallet address here",
          onChange: e => {
            setInputValue === null || setInputValue === void 0 ? void 0 : setInputValue(e.target.value);
          }
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      w: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(300),
        lg: "300px"
      },
      h: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(40),
        lg: "40px"
      },
      mb: {
        base: "110px",
        lg: "110px"
      },
      alignItems: "left",
      justifyContent: "left",
      children: isAddress ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {}) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
        fontFamily: "SofiaPro",
        fontWeight: "600",
        color: "red",
        fontSize: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(13),
          lg: "13px"
        },
        lineHeight: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(13),
          lg: "13px"
        },
        children: "Please enter a valid address"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      w: "full",
      justifyContent: "space-between",
      mt: "auto",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        w: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(118),
          lg: "160px"
        },
        h: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(40),
          lg: "50px"
        },
        border: "1px solid",
        borderColor: "green.1000",
        borderRadius: "5px",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        onClick: () => backClick(),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          fontSize: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(17),
            lg: "17px"
          },
          fontFamily: "Eurostile",
          fontWeight: "bold",
          color: "green.1000",
          children: "BACK"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        border: "1px solid",
        borderRadius: "5px",
        justifyContent: "center",
        alignItems: "center",
        cursor: inputValue === "" ? "no-drop" : "pointer",
        w: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(118),
          lg: "160px"
        },
        h: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(40),
          lg: "50px"
        },
        bgColor: inputValue === "" ? "#749733" : "green.1000",
        borderColor: inputValue === "" ? "#749733" : "green.1000",
        onClick: () => {
          if (inputValue !== "") {
            checkingAddress();
          }
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          fontSize: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(17),
            lg: "17px"
          },
          fontFamily: "Eurostile",
          fontWeight: "bold",
          color: "black.1600",
          children: "CONFIRM"
        })
      })]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Index));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3155:
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
/* harmony import */ var _utils_px2vw__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6483);
/* harmony import */ var _assets_imgs_gamiflyToken_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1969);
/* harmony import */ var _assets_imgs_gamiflyToken_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_gamiflyToken_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_imgs_usdc_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2254);
/* harmony import */ var _assets_imgs_usdc_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_usdc_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _apis_withdraw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8040);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5941);
/* harmony import */ var _stores_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3294);
/* harmony import */ var _apis_deposit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2118);
/* harmony import */ var _apis_userInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1639);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__, _stores_global__WEBPACK_IMPORTED_MODULE_4__]);
([swr__WEBPACK_IMPORTED_MODULE_2__, _stores_global__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


 // import copySuccessIcon from "@/assets/imgs/copySuccess.png";


 // import gamiflyToken from "@/assets/imgs/gamiflyToken.png";
// import messageIcon from "@/assets/imgs/messageIcon.png";


 // import CryptoWallet from "../CryptoWallet";
// import BaseButton from "../BaseButton";








function Index({
  withdrawAddress,
  backClick,
  confirmClick
}) {
  // const toast = useToast();
  const {
    userInfo
  } = (0,_stores_global__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(); // const [loading, setLoading] = useBoolean(false);

  const [isWithdraw] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useBoolean)(false);
  const {
    0: inputValue,
    1: setInputValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: gmfPrice,
    1: setGmfPrice
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: availablePrice,
    1: setAvailablePrice
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [getNewPriceLoading, setGetNewPriceLoading] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useBoolean)(false);
  const {
    0: withdrawableAmount,
    1: setWithdrawableAmount
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    data: _withdrawData
  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])(userInfo && userInfo !== null && userInfo !== void 0 && userInfo.platform_wallet && isWithdraw ? [_apis_withdraw__WEBPACK_IMPORTED_MODULE_5__/* .withdraw.key */ .X.key, isWithdraw, inputValue] : null, () => _apis_withdraw__WEBPACK_IMPORTED_MODULE_5__/* .withdraw.fetcher */ .X.fetcher({
    user_id: userInfo === null || userInfo === void 0 ? void 0 : userInfo.id,
    amount: inputValue,
    accessToken: userInfo === null || userInfo === void 0 ? void 0 : userInfo.access_token,
    external_wallet: userInfo === null || userInfo === void 0 ? void 0 : userInfo.external_wallet_address
  }), {
    revalidateOnFocus: false
  });
  const {
    data: getGMFPriceData
  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])(Number(inputValue) ? [_apis_deposit__WEBPACK_IMPORTED_MODULE_6__/* .getGMFPrice.key */ .k.key, inputValue] : null, () => _apis_deposit__WEBPACK_IMPORTED_MODULE_6__/* .getGMFPrice.fetcher */ .k.fetcher(inputValue), {
    revalidateOnFocus: false
  });
  const {
    data: getWithdrawableAmountData
  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])(userInfo && userInfo !== null && userInfo !== void 0 && userInfo.id ? [_apis_userInfo__WEBPACK_IMPORTED_MODULE_7__/* .getWithdrawableAmount.key */ .Wg.key] : null, _ => _apis_userInfo__WEBPACK_IMPORTED_MODULE_7__/* .getWithdrawableAmount.fetcher */ .Wg.fetcher(userInfo === null || userInfo === void 0 ? void 0 : userInfo.id), {
    revalidateOnFocus: false
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (getGMFPriceData) {
      setGmfPrice(getGMFPriceData.value);
    }
  }, [getGMFPriceData]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setGetNewPriceLoading.off(); // eslint-disable-next-line
  }, [gmfPrice]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (inputValue > withdrawableAmount) {
      setAvailablePrice(false);
    } else {
      setAvailablePrice(true);
    } // eslint-disable-next-line

  }, [inputValue]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (getWithdrawableAmountData && getWithdrawableAmountData !== null && getWithdrawableAmountData !== void 0 && getWithdrawableAmountData.amount) {
      setWithdrawableAmount(getWithdrawableAmountData === null || getWithdrawableAmountData === void 0 ? void 0 : getWithdrawableAmountData.amount); // eslint-disable-next-line react-hooks/exhaustive-deps
    } else {
      setWithdrawableAmount("0"); // eslint-disable-next-line react-hooks/exhaustive-deps
    }
  }, [getWithdrawableAmountData]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    w: {
      base: "full",
      lg: "496px"
    },
    h: {
      base: "fit-content",
      lg: "480px"
    },
    py: {
      base: "30px",
      lg: "30px"
    },
    px: {
      base: "60px",
      lg: "60px"
    },
    flexDir: "column",
    alignItems: "center",
    border: "1px solid",
    borderColor: "black.1800",
    borderRadius: "40px",
    boxSizing: "border-box",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      fontFamily: "SofiaPro",
      textStyle: "14",
      color: "gray.500",
      mr: "auto",
      children: "Step 2/4"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      fontFamily: "SofiaPro",
      fontWeight: "600",
      color: "white.100",
      mr: "auto",
      fontSize: {
        base: "21px",
        lg: "21px"
      },
      lineHeight: {
        base: "40px",
        lg: "40px"
      },
      mb: {
        base: "15px",
        lg: "15px"
      },
      children: "Enter the amount of withdraw"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      w: {
        base: "300px",
        lg: "300px"
      },
      h: {
        base: "40px",
        lg: "40px"
      },
      mb: {
        base: "60px",
        lg: "60px"
      },
      mr: "auto",
      alignItems: "center",
      justifyContent: "space-between",
      bgColor: "black.100",
      borderRadius: "30px",
      px: {
        base: "15px",
        lg: "15px"
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          fontFamily: "SofiaPro",
          fontWeight: "600",
          color: "green.1000",
          fontSize: {
            base: "13px",
            lg: "13px"
          },
          lineHeight: {
            base: "13px",
            lg: "13px"
          },
          mr: {
            base: "10px",
            lg: "10px"
          },
          children: "Withdraw to"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          fontFamily: "SofiaPro",
          fontWeight: "600",
          color: "#BABABA",
          fontSize: {
            base: "17px",
            lg: "17px"
          },
          lineHeight: {
            base: "13px",
            lg: "13px"
          },
          mr: {
            base: "10px",
            lg: "10px"
          },
          children: "Account"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          fontFamily: "SofiaPro",
          color: "green.1000",
          textDecor: "underline",
          fontSize: {
            base: "13px",
            lg: "13px"
          },
          lineHeight: {
            base: "13px",
            lg: "13px"
          },
          children: `${withdrawAddress.substring(0, 5)}...${withdrawAddress.substring(withdrawAddress.length - 4, withdrawAddress.length)}`
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      w: "full",
      flexDir: "column",
      mb: {
        base: "10px",
        lg: "10px"
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        w: "full",
        h: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(70),
          lg: "70px"
        },
        px: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(17),
          lg: "17px"
        },
        justifyContent: "space-between",
        alignItems: "center",
        boxSizing: "border-box",
        borderRadius: "20px",
        border: "1px solid",
        borderColor: "green.1000",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input // eslint-disable-next-line jsx-a11y/no-autofocus
        , {
          autoFocus: true,
          border: "none",
          outline: "none",
          bgColor: "transparent",
          p: "0",
          color: "green.1000",
          _focusVisible: {
            border: "none",
            outline: "none"
          },
          _placeholder: {
            fontFamily: "SofiaPro",
            textStyle: 14,
            color: "green.1000",
            opacity: 0.6
          },
          placeholder: "Enter USDC value here",
          onChange: e => {
            setInputValue === null || setInputValue === void 0 ? void 0 : setInputValue(e.target.value);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          ml: {
            base: "10px",
            lg: "10px"
          },
          mr: {
            base: "20px",
            lg: "20px"
          },
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
            src: (_assets_imgs_usdc_png__WEBPACK_IMPORTED_MODULE_9___default()),
            w: {
              base: "18px",
              lg: "18px"
            },
            h: {
              base: "18px",
              lg: "18px"
            },
            mr: {
              base: "5px",
              lg: "5px"
            }
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            fontFamily: "SofiaPro",
            textStyle: "12",
            fontWeight: "600",
            color: "white.100",
            lineHeight: {
              base: "18px",
              lg: "18px"
            },
            children: "USDC"
          })]
        })]
      })
    }), inputValue && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      mr: "auto",
      pl: {
        base: "20px",
        lg: "20px"
      },
      children: getNewPriceLoading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Spinner, {
        size: "xs"
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          fontFamily: "SofiaPro",
          fontWeight: "bold",
          fontSize: {
            base: "19px",
            lg: "19px"
          },
          lineHeight: {
            base: "25px",
            lg: "25px"
          },
          children: ["\u2248 ", Number(gmfPrice), " GMF"]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
          src: (_assets_imgs_gamiflyToken_png__WEBPACK_IMPORTED_MODULE_10___default()),
          w: {
            base: "25px",
            lg: "25px"
          },
          h: {
            base: "25px",
            lg: "25px"
          },
          mx: {
            base: "5px",
            lg: "5px"
          }
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          fontFamily: "SofiaPro",
          fontWeight: "bold",
          textStyle: "12",
          lineHeight: {
            base: "25px",
            lg: "25px"
          },
          children: "Gamifly token"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      fontFamily: "SofiaPro",
      fontWeight: "bold",
      textStyle: "12",
      lineHeight: {
        base: "25px",
        lg: "25px"
      },
      mr: "auto",
      pl: {
        base: "20px",
        lg: "20px"
      },
      children: ["Available withdraw value: $", withdrawableAmount]
    }), !availablePrice && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      fontFamily: "SofiaPro",
      color: "red",
      fontWeight: "bold",
      textStyle: "12",
      lineHeight: {
        base: "25px",
        lg: "25px"
      },
      mr: "auto",
      pl: {
        base: "20px",
        lg: "20px"
      },
      children: "Please enter valid amount"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      w: "full",
      justifyContent: "space-between",
      mt: "auto" // mt={{ base: "80px", lg: "80px" }}
      ,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        w: {
          base: "160px",
          lg: "160px"
        },
        h: {
          base: "50px",
          lg: "50px"
        },
        border: "1px solid",
        borderColor: "green.1000",
        borderRadius: "5px",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        onClick: () => backClick(),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          mt: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(5),
            lg: "5px"
          },
          fontSize: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(17),
            lg: "17px"
          },
          fontFamily: "Eurostile",
          fontWeight: "bold",
          color: "green.1000",
          children: "BACK"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        border: "1px solid",
        borderRadius: "5px",
        justifyContent: "center",
        alignItems: "center",
        cursor: inputValue === "" ? "no-drop" : "pointer",
        w: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(118),
          lg: "160px"
        },
        h: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(40),
          lg: "50px"
        },
        bgColor: inputValue === "" ? "#749733" : "green.1000",
        borderColor: inputValue === "" ? "#749733" : "green.1000",
        onClick: () => {
          if (availablePrice) {
            confirmClick(inputValue, gmfPrice);
          }
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          mt: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(5),
            lg: "5px"
          },
          fontSize: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(17),
            lg: "17px"
          },
          fontFamily: "Eurostile",
          fontWeight: "bold",
          color: "black.1600",
          children: "CONFIRM"
        })
      })]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Index));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7586:
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
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(5444);
/* harmony import */ var _utils_px2vw__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6483);
/* harmony import */ var _assets_imgs_featuresIcon_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9441);
/* harmony import */ var _assets_imgs_featuresIcon_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_featuresIcon_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_imgs_deposit_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8296);
/* harmony import */ var _assets_imgs_deposit_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_deposit_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_imgs_withdraw_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1149);
/* harmony import */ var _assets_imgs_withdraw_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_withdraw_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_imgs_withdrawButton_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2830);
/* harmony import */ var _assets_imgs_withdrawButton_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_withdrawButton_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_imgs_depositButton_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6406);
/* harmony import */ var _assets_imgs_depositButton_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_depositButton_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_Transfer_Withdraw__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7889);
/* harmony import */ var _components_Transfer_Withdraw2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3155);
/* harmony import */ var _components_Transfer_Deposit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7302);
/* harmony import */ var _components_Transfer_Deposit2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3104);
/* harmony import */ var _components_BaseButton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(5742);
/* harmony import */ var _assets_imgs_buySuccess_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(3078);
/* harmony import */ var _assets_imgs_buySuccess_png__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_buySuccess_png__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _components_BaseModal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1803);
/* harmony import */ var _components_Transfer_TransferStep3__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6234);
/* harmony import */ var _components_Transfer_TransferStep4__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4634);
/* harmony import */ var _stores_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3294);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_global__WEBPACK_IMPORTED_MODULE_4__, _components_Transfer_Deposit__WEBPACK_IMPORTED_MODULE_5__, _components_Transfer_Withdraw__WEBPACK_IMPORTED_MODULE_6__, _components_Transfer_Withdraw2__WEBPACK_IMPORTED_MODULE_13__, _components_Transfer_Deposit2__WEBPACK_IMPORTED_MODULE_14__, _components_Transfer_TransferStep3__WEBPACK_IMPORTED_MODULE_15__]);
([_stores_global__WEBPACK_IMPORTED_MODULE_4__, _components_Transfer_Deposit__WEBPACK_IMPORTED_MODULE_5__, _components_Transfer_Withdraw__WEBPACK_IMPORTED_MODULE_6__, _components_Transfer_Withdraw2__WEBPACK_IMPORTED_MODULE_13__, _components_Transfer_Deposit2__WEBPACK_IMPORTED_MODULE_14__, _components_Transfer_TransferStep3__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // import arrows from "@/assets/imgs/arrows.png";





 // import Step1 from "@/components/Transfer/Step1";















function App() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useToast)();
  const {
    userInfo
  } = (0,_stores_global__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
  const {
    0: step,
    1: setStep
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0); // 步骤

  const {
    0: chooseType,
    1: setChooseType
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""); // Deposit / Withdraw

  const {
    0: paymentMethod
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(3); // 支付类型

  const {
    0: totalPrice
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0); // 总价格
  // const [priceUnit] = useState("GMF"); // 总价格

  const {
    0: transferVal,
    1: setTransferVal
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("0");
  const {
    0: hash,
    1: setHash
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [showSuccess, setShowSuccess] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useBoolean)(false);
  const {
    0: step1Val,
    1: setStep1Val
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: step2Val,
    1: setStep2Val
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: gmfVal,
    1: setGmfVal
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (userInfo.access_token == "" || userInfo.access_token == null) {
      router.push("/");
      toast({
        position: "top-right",
        title: "Please login first",
        status: "success",
        isClosable: true
      });
    } // eslint-disable-next-line

  }, [userInfo === null || userInfo === void 0 ? void 0 : userInfo.access_token]);
  const contentDeposit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_Transfer_Deposit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z // totalPrice={totalPrice}
    // paymentMethod={paymentMethod}
    // setPaymentMethod={(type: number) => setPaymentMethod(type)}
    // success={(val: string, hash: string) => {
    //   setTransferVal(val);
    //   setHash(hash);
    //   setShowSuccess.on();
    // }}
    , {
      backClick: () => setStep(0),
      confirmClick: connectedAddress => {
        setStep1Val(connectedAddress);
        setStep(2);
      }
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paymentMethod, totalPrice]);
  const contentWithdraw = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_Transfer_Withdraw__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z // totalPrice={totalPrice}
    // priceUnit={priceUnit}
    // success={(hash: string, val: string) => {
    //   setTransferVal(val);
    //   setHash(hash);
    //   setShowSuccess.on();
    // }}
    , {
      backClick: () => setStep(0),
      confirmClick: val => {
        setStep1Val(val);
        setStep(2);
      }
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paymentMethod, totalPrice]);

  const setType = type => {
    setChooseType(type);
    setStep(1);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    w: "full",
    flexDir: "column",
    minH: "100vh",
    pt: {
      base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(110),
      lg: "200px"
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      justifyContent: "center",
      mb: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(30),
        lg: "30px"
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
        fontSize: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(23),
          lg: "35px"
        },
        lineHeight: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(23),
          lg: "35px"
        },
        mt: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(5),
          lg: "5px"
        },
        fontFamily: "Eurostile",
        fontWeight: "700",
        color: "white.100",
        textTransform: "uppercase",
        children: step == 0 ? "TOP UP & WITHDRAW" : chooseType
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
        src: (_assets_imgs_featuresIcon_png__WEBPACK_IMPORTED_MODULE_8___default()),
        w: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(30),
          lg: "30px"
        },
        h: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(23),
          lg: "23px"
        },
        ml: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(5),
          lg: "5px"
        },
        mt: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(5),
          lg: "5px"
        }
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      w: "full",
      alignItems: "center",
      justifyContent: "center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        display: step === 0 ? "flex" : "none",
        w: "full",
        flexDir: {
          base: "column",
          lg: "row"
        },
        alignItems: "center",
        justifyContent: "center",
        mt: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(30),
          lg: "30px"
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          h: {
            base: "319px",
            lg: "319px"
          },
          w: {
            base: "437px",
            lg: "437px"
          },
          mb: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(20),
            lg: 0
          },
          mr: {
            base: 0,
            lg: "25px"
          },
          px: {
            base: "15px",
            lg: "15px"
          },
          py: {
            base: "10px",
            lg: "10px"
          },
          justifyContent: "center",
          flexDir: "column",
          alignItems: "center",
          bgImage: (_assets_imgs_withdraw_png__WEBPACK_IMPORTED_MODULE_9___default()),
          bgSize: "full",
          textAlign: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            fontFamily: "Eurostile",
            fontWeight: "900",
            fontSize: {
              base: "35px",
              lg: "35px"
            },
            lineHeight: {
              base: "25px",
              lg: "25px"
            },
            mb: {
              base: "40px",
              lg: "40px"
            },
            mt: {
              base: "35px",
              lg: "35px"
            },
            pr: {
              base: "5px",
              lg: "5px"
            },
            textAlign: "center",
            bgGradient: "linear(to-l, #7928CA, #FF0080)",
            bgClip: "text",
            fontStyle: "italic",
            children: "NO LIMIT"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            fontFamily: "Eurostile",
            fontWeight: "900",
            fontSize: {
              base: "35px",
              lg: "35px"
            },
            lineHeight: {
              base: "25px",
              lg: "25px"
            },
            mb: {
              base: "50px",
              lg: "50px"
            },
            pr: {
              base: "5px",
              lg: "5px"
            },
            bgGradient: "linear(to-l, #7928CA, #FF0080)",
            bgClip: "text",
            fontStyle: "italic",
            children: "NO HIDDEN FEE"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            fontFamily: "SofiaPro",
            fontWeight: "600",
            color: "white.100",
            h: {
              base: "35px",
              lg: "35px"
            },
            w: {
              base: "150px",
              lg: "150px"
            },
            px: {
              base: "15px",
              lg: "15px"
            },
            pt: {
              base: "7px",
              lg: "7px"
            },
            fontSize: {
              base: "14px",
              lg: "14px"
            },
            lineHeight: {
              base: "30px",
              lg: "30px"
            },
            bgImage: (_assets_imgs_withdrawButton_png__WEBPACK_IMPORTED_MODULE_10___default()),
            bgSize: {
              base: "150px",
              lg: "150px"
            },
            cursor: "pointer",
            onClick: () => setType("Withdraw"),
            children: "WITHDRAW NOW"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          h: {
            base: "319px",
            lg: "319px",
            md: "319px",
            sm: "319px"
          },
          w: {
            base: "437px",
            lg: "437px",
            md: "437px",
            sm: "437px"
          },
          mr: {
            base: 0,
            lg: "25px"
          },
          px: {
            base: "15px",
            lg: "15px"
          },
          py: {
            base: "10px",
            lg: "10px"
          },
          flexDir: "column",
          alignItems: "center",
          boxSizing: "border-box",
          bgImage: (_assets_imgs_deposit_png__WEBPACK_IMPORTED_MODULE_11___default()),
          justifyContent: "space-around",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            mb: {
              base: "-30px",
              lg: "-30px"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
              flexDir: "column",
              px: {
                base: "15px",
                lg: "15px"
              },
              pt: {
                base: "7px",
                lg: "7px"
              },
              justifyContent: "space-between",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                fontFamily: "SofiaPro",
                fontWeight: "600",
                color: "green.1000",
                fontSize: {
                  base: "14px",
                  lg: "14px"
                },
                lineHeight: {
                  base: "30px",
                  lg: "30px"
                },
                py: {
                  base: "7px",
                  lg: "7px"
                },
                children: "FIRST TIME DEPOSIT"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                fontFamily: "SofiaPro",
                fontWeight: "600",
                color: "green.1000",
                fontSize: {
                  base: "14px",
                  lg: "14px"
                },
                lineHeight: {
                  base: "30px",
                  lg: "30px"
                },
                py: {
                  base: "7px",
                  lg: "7px"
                },
                children: "$5 Deposit"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                fontFamily: "SofiaPro",
                fontWeight: "600",
                color: "green.1000",
                fontSize: {
                  base: "14px",
                  lg: "14px"
                },
                lineHeight: {
                  base: "30px",
                  lg: "30px"
                },
                py: {
                  base: "7px",
                  lg: "7px"
                },
                children: "$10 Deposit"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
              flexDir: "column",
              px: {
                base: "15px",
                lg: "15px"
              },
              pt: {
                base: "7px",
                lg: "7px"
              },
              textAlign: "right",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                fontFamily: "SofiaPro",
                fontWeight: "600",
                color: "white.100",
                fontSize: {
                  base: "14px",
                  lg: "14px"
                },
                lineHeight: {
                  base: "30px",
                  lg: "30px"
                },
                py: {
                  base: "7px",
                  lg: "7px"
                },
                children: "FIRST TIME DEPOSIT"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                fontFamily: "SofiaPro",
                fontWeight: "600",
                color: "white.100",
                fontSize: {
                  base: "14px",
                  lg: "14px"
                },
                lineHeight: {
                  base: "30px",
                  lg: "30px"
                },
                py: {
                  base: "7px",
                  lg: "7px"
                },
                children: "$5 Deposit"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                fontFamily: "SofiaPro",
                fontWeight: "600",
                color: "white.100",
                fontSize: {
                  base: "14px",
                  lg: "14px"
                },
                lineHeight: {
                  base: "30px",
                  lg: "30px"
                },
                py: {
                  base: "7px",
                  lg: "7px"
                },
                children: "$10 Deposit"
              })]
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            fontFamily: "SofiaPro",
            fontWeight: "600",
            color: "black.100",
            h: {
              base: "35px",
              lg: "35px"
            },
            w: {
              base: "150px",
              lg: "150px"
            },
            px: {
              base: "15px",
              lg: "15px"
            },
            pt: {
              base: "7px",
              lg: "7px"
            },
            fontSize: {
              base: "14px",
              lg: "14px"
            },
            lineHeight: {
              base: "30px",
              lg: "30px"
            },
            bgImage: (_assets_imgs_depositButton_png__WEBPACK_IMPORTED_MODULE_12___default()),
            bgSize: {
              base: "150px",
              lg: "150px"
            },
            cursor: "pointer",
            onClick: () => setType("Deposit"),
            children: "DEPOSIT NOW"
          })]
        })]
      }), chooseType === "Deposit" && step === 1 && contentDeposit, chooseType === "Withdraw" && step === 1 && contentWithdraw, step === 2 && chooseType === "Withdraw" && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_Transfer_Withdraw2__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        withdrawAddress: step1Val,
        backClick: () => setStep(1),
        confirmClick: (val, gmfVal) => {
          setStep2Val(val);
          setGmfVal(gmfVal);
          setStep(3);
        }
      }), step === 2 && chooseType === "Deposit" && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_Transfer_Deposit2__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
        connectedAddress: step1Val,
        backClick: () => setStep(1),
        confirmClick: (val, gmfVal) => {
          setStep2Val(val);
          setGmfVal(gmfVal);
          setStep(3);
        }
      }), step === 3 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_Transfer_TransferStep3__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        chooseType: chooseType,
        address: step1Val,
        inputVal: step2Val,
        gmfVal: gmfVal,
        backClick: type => {
          setChooseType(type);
          setStep(2);
        },
        confirmClick: () => setStep(4)
      }), step === 4 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_Transfer_TransferStep4__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
        address: step1Val,
        chooseType: chooseType,
        inputVal: step2Val,
        gmfVal: gmfVal,
        backClick: () => setStep(0)
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_BaseModal__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
      justifyContent: "center",
      px: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(44),
        lg: "70px"
      },
      isShow: showSuccess,
      close: () => {
        setShowSuccess.off();
        setStep(1);
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        flexDir: "column",
        alignItems: "center",
        boxSizing: "border-box",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
          src: (_assets_imgs_buySuccess_png__WEBPACK_IMPORTED_MODULE_18___default()),
          w: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(187),
            lg: "210px"
          },
          h: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(139),
            lg: "156px"
          },
          mb: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(25),
            lg: "30px"
          }
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          fontFamily: "Orbitron",
          fontWeight: "600",
          color: "white.100",
          textAlign: "center",
          textStyle: {
            base: "18",
            lg: "22"
          },
          lineHeight: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(23),
            lg: "28px"
          },
          mb: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(15),
            lg: "20px"
          },
          children: "Your transaction is on the way!"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          w: "full",
          flexWrap: "wrap",
          justifyContent: "center",
          fontFamily: "Nunito",
          fontWeight: "400",
          color: "white.500",
          textStyle: "16",
          textAlign: "center",
          lineHeight: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(22),
            lg: "22px"
          },
          mb: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(25),
            lg: "30px"
          },
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            display: "inline-block",
            children: "Your sent"
          }), chooseType === "Deposit" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            color: "green.100",
            display: "inline-block",
            mx: "5px",
            children: [transferVal, " gamilfy token (", transferVal, " GMF)"]
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            color: "green.100",
            display: "inline-block",
            mx: "5px",
            children: [transferVal, " USDC"]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            display: chooseType === "Deposit" ? "inline-block" : "none",
            children: "to the Gamifly Account."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          w: "full",
          justifyContent: "space-between",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_BaseButton__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
            w: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(140),
              lg: "190px"
            },
            border: "1px solid",
            borderColor: "blue.100",
            bgColor: "transparent",
            boxShadow: "none",
            onClick: () => {
              setShowSuccess.off();
              setStep(0);
              setHash("");
              setTransferVal("0");
            },
            children: "Cancel"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_BaseButton__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
            w: {
              base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(140),
              lg: "190px"
            },
            onClick: () => {
              setShowSuccess.off();
              setStep(0);
              setHash("");
              setTransferVal("0");
              window.open(`https://polygonscan.com/tx/${hash}`);
            },
            children: "View details"
          })]
        })]
      })
    })]
  });
}

const getServerSideProps = async ctx => {
  return {
    props: _objectSpread({}, await (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_20__/* .getI18nSSRProps */ .q)(ctx, ["home"]))
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3078:
/***/ ((module) => {

module.exports = "/_next/static/images/buySuccess-a7537b8907b9ab9aa5698bc3533e835d.png";

/***/ }),

/***/ 8296:
/***/ ((module) => {

module.exports = "/_next/static/images/deposit-686d3ab1cfc2f7a7e4b4fae9ee000634.png";

/***/ }),

/***/ 6406:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIsAAAAoCAYAAADOkQm/AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAi6ADAAQAAAABAAAAKAAAAAC9U8Q6AAAGHUlEQVR4Ae1be1BUVRz+7u5dZAVqFwfEfACymobamNU4NfioFJ/T5CO1TEkz0BqnJCVtVNTAxjTBEWvGfKT5RC1RQwRbGR9TOWmW1aTrsivBCAuyuAosu+zt3Luzj+suLP7Zvef+wT2P32Xm++abc87vO79l8AhPsWP0JhfHLXmET2jo/5wBe5MLe1dW4eIhWxzbGSwcl60odpR/RYSyoDPxNEYaDNy3OrFhphHG35rAuTBcEQqWnstmix3n9nGgQgnFlZTmrbUOrHvVANMfTfhgVyKsVuvxDlcWPZcW3uw8V8gBk6REBMXSMQOW23bkTDXgnqUNWQeTkJwSJXzQrlj03PTIZqf5OMfhpY7/NZ2VEgNVN1qwfpoB9mYXPvlOh6ShXb3wgorlPDdRa3NafiBCGe6NpA3JM1BxrQnrpxvAhimw+kR/9BoQLsIcIJYSbmyszdFUSraeIaJI2pE0A39fuo+NbxoR1U2J5Ud06J7QJQCvSCxEKL3bHI4ycpjtHxBJByTLwNUzjcibZ0L3xDCsIELRdFeJsJ7dU4/k5OQwr1hOc6k6p6O1DODiRZG0I2kGLh1twLb3zEgcosbHh3WI0Ci9eF0uYPuHt1G+vx4Mw8wSUmeyogxqc9rPU6F4eZJFo2x3HQoWmjDwhUjhMOsvFKeDw5b5FYJQpi7rwafO3yiKW19+rs3pKAeHOFkwREEKDBTl12Dn0koMG/e4kB6HR/hWFN613TDrFn45acWc3F6YutQtDdbFtJ0lQnEn0pRIWTBwYE01TmytQcrr0Ujf0gcKJePFzbu2n88y4taVB1i4NR4pM6K9cywVipcLWTQMV5pwsqAGY+fHIO2zXiLMjRankDpX32wRXNtnJ2hE894DrmiUdiTLgO6Zrlhb8qTIbOPBWipbkUtc28ZaJ5YdSMKgEb7Nhl9t+IeKRaBBXn/8XVkeub9ru+KYDrygPM+fF2zISzNBq9VODnmR6PmIvqXJgJG4tmsn3wSfJq8q6icSyq+nG4Vb5+gnVGBZ9jIVizQ10ClUvGub85oB6iglVp/sh94D1d7vLhTexea0CsQnh2NlkQ4Wi+UO3Ya89MircbX0HvLerkBsgtu11cb5XNvSnXXYlVUpnFuW7EmEJ62mYpGXRgS0l44R13aRGQmD3a5tpNbnsXy/uQaHc6vBZ0KLtyeQS0VfWk3FIjOx8KlzQYYJT70YhSV7E6GO9All3+oqnNpWixEzo/FufjwUDx1SqFhkJhY+05m3sQ9GzNBC1cWtBv5wuyPzNvTf1mPcghjBtQ1GCxVLMFYkPvbynG5ehPwdUEGGGT8XNWDKR3GYltXDO8c3as125M83QaPRDKViEVEjrw5fDbd5rhG/621469OeGJ8eKyKg6p8W5JKqOYfdBaVSyT60K4liaUfCDDxoJNY+cWyvl9uE+6GHhcJXza2ZfENgYFVRf9TX11+mK4uEBdEetHt17jsgfuVYvCMRz08S3wH9ddGGTbMrhKq5FUd1iI13V81RsbTHqETH6/513wE13HFg6YG+GDzyMRHSKyWNwhklrm8XLC9MElXNUbGIqJJ+R8kyxLFVYNE2cgc0LEIE+OKRBnz5vhl9n1Yj65C4ao4PpGIR0SX9Du/U5pQNCABauou4tssqhd8IZRL/xePa+gdSsfizIdP28bwaHMoJ7toKlDCw8W8qFpkKxAN7f3a1UAzFV8Slbwl0bUmh9l2GU4yjYvEwJsM3+QEhvs6shH5vHVLficHc9eKqOYESBneUrGpMKnPmOhWLDEXCQ25zctiabiKurTWoa+umhTEr2bBXUpkSg7tPtyEPD7J5+7u2s9f1xIQMsWvLE8GAuaFUqXihVPoTQ88s/mzIoF1jtJPK/Wak5/fByDd8d0Q+6Mw1IpSxZOup9Y25W8yp1lFk96KPnBjgC7AjNYHrBMPgpyg2YkIKc6ohGB/0bigYKxIfCy4U5kc1GzOmPaHwlFCxSFwYnYFHVpQTajZ+4mim8H5H8VQsHbEjgzlSNHlQzY6aMprZ3RIKbuDGFeoLOi8ZBkjWs328amQGw2STWrnQDxVLaI4kGaFgmC/Gq/SZgL7T+P4DJgoAfeXlSeMAAAAASUVORK5CYII="

/***/ }),

/***/ 8241:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAYAAACJfM0wAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFqADAAQAAAABAAAAFAAAAABm4WA6AAACO0lEQVQ4Ea2UP0jVURTHv/fXS82eZAkNQQ5BDbUYFAUWQajoouSW+oy2aAia3tAQNFQOOTRERRSmmIilNLREWKCTDUnDg6YSqyW0Gvpndv2cJ9d+5NPer7xwf+fcc873e8+59/6OtEbjlteWu14HAl0UlP+V09LHeWky8LigJJU9Xi3rpHcdThO9XvUQbUIfIuutP6V0Kimhxd/z2vZDGvklkai2Iz+xCUIi689V0teiMh71KpuS6giuBTvZ6TRAZt3or9CvGyHravzHM05dtl6VmHKN7BRxjV7aaADGHNnVlki571Ib9gwXdYN0X6Nf3iAdoZqGgsR9Xvsp6SokB/NUhT9Wev7yIXm5mdg0x0Fl11jbmf8e3ivqlbJYLrB70vOfAWcbVTLvLBEPeqW/ScMQ1uGwYSW3UfIYJe/Azp2petH11+9ixo+8Sj9ICB2NQV6ccNob1pz3bfSTYb2SJNNcRtqTLxfS/j9IDVfDTfchnzN3MTPEFDOyzsk7wK0A7rPTJVCH0A8Xg14h5iFVtpgvgug08gvpn0M+MOO/DBKbpfwzAZvCsA/ycl7DFYytwZFQcu9qbnd6E3ApSHmyEvJsMCaUcyTXzh84FsdFGMfjhiQ6WOsRTZAuO8KIF32RABpSsgHm6XpeDh3tSSEkfom218n/eRO1tFBQ3AYgx/o8lz1kzyrui+t5YjPQH3ZDniXyGMuKeBD6WwIfM3s6pGerEQbcEnEwWL/gr9iJg76ieTaaphW+D/5i5QI0cJgRd5UgjwAAAABJRU5ErkJggg=="

/***/ }),

/***/ 1149:
/***/ ((module) => {

module.exports = "/_next/static/images/withdraw-049177f0fc5dcd4e2d1003addf3def8a.png";

/***/ }),

/***/ 2830:
/***/ ((module) => {

module.exports = "/_next/static/images/withdrawButton-68c4c8c68de175376e038185be69dec8.png";

/***/ }),

/***/ 8930:
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

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
var __webpack_exports__ = __webpack_require__.X(0, [78,444,202,742,639,384,779,441,802,618], () => (__webpack_exec__(7586)));
module.exports = __webpack_exports__;

})();