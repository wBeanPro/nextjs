exports.id = 198;
exports.ids = [198];
exports.modules = {

/***/ 3198:
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
/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4137);
/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_px2vw__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6483);
/* harmony import */ var _assets_imgs_faceBookLogin_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2653);
/* harmony import */ var _assets_imgs_faceBookLogin_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_faceBookLogin_png__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _assets_imgs_googleLogin_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3799);
/* harmony import */ var _assets_imgs_googleLogin_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_googleLogin_png__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _assets_imgs_metaMaskLogin_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(80);
/* harmony import */ var _assets_imgs_metaMaskLogin_png__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_metaMaskLogin_png__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _assets_imgs_walletIcon_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(4892);
/* harmony import */ var _assets_imgs_walletIcon_png__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_walletIcon_png__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _BaseModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1803);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8054);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _connect_wallet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8938);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _connect_connectors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8202);
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7384);
/* harmony import */ var _apis_login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6642);
/* harmony import */ var _apis_userInfo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1639);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5941);
/* harmony import */ var _stores_global__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3294);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_5__, _stores_global__WEBPACK_IMPORTED_MODULE_8__]);
([swr__WEBPACK_IMPORTED_MODULE_5__, _stores_global__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






















function Index({
  loginModal,
  setLoginModal,
  setIsLogin,
  setLoginLoading
}) {
  const message = "This is just for verifying wallet owner";
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useToast)();
  const {
    userInfo,
    globalAccount
  } = (0,_stores_global__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
  const {
    0: friendCode,
    1: setFriendCode
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: accessToken,
    1: setAccessToken
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    activate,
    chainId,
    account,
    deactivate
  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_3__.useWeb3React)();
  const {
    0: signature,
    1: setSignature
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [isMetaMask, setIsMetaMask] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useBoolean)(false);
  const {
    0: random,
    1: setRandom
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    data: walletLoginData
  } = (0,swr__WEBPACK_IMPORTED_MODULE_5__["default"])(isMetaMask && signature && random ? [_apis_login__WEBPACK_IMPORTED_MODULE_9__/* .walletLogin.key */ .ge.key, random] : null, _ => _apis_login__WEBPACK_IMPORTED_MODULE_9__/* .walletLogin.fetcher */ .ge.fetcher({
    wallet_address: account || globalAccount,
    signature: signature,
    signed_message: message
  }), {
    revalidateOnFocus: false
  });
  const {
    data: setReferralData
  } = (0,swr__WEBPACK_IMPORTED_MODULE_5__["default"])(userInfo && userInfo !== null && userInfo !== void 0 && userInfo.id && friendCode ? [_apis_userInfo__WEBPACK_IMPORTED_MODULE_10__/* .setReferral.key */ .Cz.key, friendCode] : null, _ => _apis_userInfo__WEBPACK_IMPORTED_MODULE_10__/* .setReferral.fetcher */ .Cz.fetcher({
    user_id: userInfo === null || userInfo === void 0 ? void 0 : userInfo.id,
    code: friendCode
  }), {
    revalidateOnFocus: false
  });
  const {
    data: loginData
  } = (0,swr__WEBPACK_IMPORTED_MODULE_5__["default"])(accessToken ? [_apis_login__WEBPACK_IMPORTED_MODULE_9__/* .login.key */ .x4.key, accessToken] : null, _ => _apis_login__WEBPACK_IMPORTED_MODULE_9__/* .login.fetcher */ .x4.fetcher({
    accessToken: accessToken
  }), {
    revalidateOnFocus: false
  });

  const metamaskClick = async () => {
    // 是否为正确网络
    if (chainId !== 137) {
      const res = await (0,_connect_wallet__WEBPACK_IMPORTED_MODULE_11__/* .switchNetwork */ .If)(137);

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
        await activate(_connect_connectors__WEBPACK_IMPORTED_MODULE_12__/* .injected */ .Lj, undefined, true);
        resolve();
      } catch (error) {
        console.log(error);
      }
    }).then(() => {
      (0,_utils_storage__WEBPACK_IMPORTED_MODULE_13__/* .setStore */ .PQ)(_connect_connectors__WEBPACK_IMPORTED_MODULE_12__/* .connectorLocalStorageKey */ .OM, "true");
      handleSign();
      setIsMetaMask.on();
      setRandom(Math.random());
    }).catch(error => {
      console.error(error);
    });
  };

  const walletConnectClick = async () => {
    try {
      let chainIds = 0; //  Create WalletConnect Provider

      const provider = new (_walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_2___default())({
        bridge: "https://bridge.walletconnect.org",
        rpc: {
          1: "https://mainnet.infura.io/v3/175a6f6149e04964a38455979e4825fe",
          56: "https://bsc-dataseed1.binance.org",
          66: "https://exchainrpc.okex.org",
          128: "https://http-mainnet-node.huobichain.com",
          137: "https://rpc-mainnet.maticvigil.com",
          42161: "https://arb1.arbitrum.io/rpc"
        },
        infuraId: "b3cd627a61e1439cb43f6dbb6c4400b1"
      });
      window.walletConnectProvider = provider;
      provider.on("accountsChanged", accounts => {
        setTimeout(() => {
          if (chainIds === 137) {
            setLoginLoading === null || setLoginLoading === void 0 ? void 0 : setLoginLoading(true);
            _stores_global__WEBPACK_IMPORTED_MODULE_8__/* ["default"].setState */ .Z.setState({
              globalAccount: accounts[0]
            });
            (0,_utils_storage__WEBPACK_IMPORTED_MODULE_13__/* .setStore */ .PQ)(_connect_connectors__WEBPACK_IMPORTED_MODULE_12__/* .connectorLocalStorageKey */ .OM, "true");
            setIsMetaMask.on();
            setRandom(Math.random());
            handleSign();
          }
        }, 1000);
      });
      provider.on("chainChanged", chainId => {
        chainIds = chainId;

        if (chainId !== 137) {
          logOut();
        }
      });
      provider.on("disconnect", () => {
        setIsLogin === null || setIsLogin === void 0 ? void 0 : setIsLogin(false);
      }); //  Enable session (triggers QR Code modal)

      await provider.enable();
    } catch (err) {
      console.log(err, "err");
    }
  };

  const handleSign = async () => {
    const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner();
    const signature = await signer.signMessage(message);
    setSignature(signature);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (walletLoginData) {
      setAccessToken(walletLoginData.access_token);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [walletLoginData]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (loginData) {
      (0,_utils_storage__WEBPACK_IMPORTED_MODULE_13__/* .setStore */ .PQ)("userInfo", loginData);
      _stores_global__WEBPACK_IMPORTED_MODULE_8__/* ["default"].setState */ .Z.setState({
        userInfo: loginData
      });
      setIsMetaMask.off();
      setAccessToken("");
      console.log("login success!");
      setFriendCode((0,_utils_storage__WEBPACK_IMPORTED_MODULE_13__/* .getStore */ .bh)("friendCode"));
      setIsLogin === null || setIsLogin === void 0 ? void 0 : setIsLogin(true);
      setLoginLoading === null || setLoginLoading === void 0 ? void 0 : setLoginLoading(false);
      router.push(router.pathname);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [loginData]);
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

  const logOut = async () => {
    toast({
      title: `Please switch your wallet to the polygon chain`,
      status: "error",
      isClosable: true
    });
    setIsLogin === null || setIsLogin === void 0 ? void 0 : setIsLogin(false);
    disconnectWallet();
  };

  const disconnectWallet = async () => {
    try {
      var _window$walletConnect;

      await deactivate();
      await ((_window$walletConnect = window.walletConnectProvider) === null || _window$walletConnect === void 0 ? void 0 : _window$walletConnect.disconnect());
      (0,_utils_storage__WEBPACK_IMPORTED_MODULE_13__/* .deleteStore */ .Av)(_connect_connectors__WEBPACK_IMPORTED_MODULE_12__/* .connectorLocalStorageKey */ .OM);
      (0,_utils_storage__WEBPACK_IMPORTED_MODULE_13__/* .deleteStore */ .Av)("referralCode");
      (0,_utils_storage__WEBPACK_IMPORTED_MODULE_13__/* .deleteStore */ .Av)("friendCode");
      setLoginLoading === null || setLoginLoading === void 0 ? void 0 : setLoginLoading(false);
      (0,_utils_storage__WEBPACK_IMPORTED_MODULE_13__/* .setStore */ .PQ)("isLogin", false);
      setIsLogin === null || setIsLogin === void 0 ? void 0 : setIsLogin(false);
      setTimeout(() => {
        _stores_global__WEBPACK_IMPORTED_MODULE_8__/* ["default"].setState */ .Z.setState({
          userInfo: null
        });
        window.walletConnectProvider = null;
        (0,_utils_storage__WEBPACK_IMPORTED_MODULE_13__/* .deleteStore */ .Av)("userInfo");
      }, 1000);
    } catch (err) {
      console.error(err);
    }
  }; // 登陆弹窗


  const LoginItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(({
    icon,
    name,
    withOutMb,
    click
  }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    w: {
      base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(300),
      lg: "340px"
    },
    h: {
      base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(50),
      lg: "50px"
    },
    mb: withOutMb ? "0" : {
      base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(28),
      lg: "10px"
    },
    justifyContent: "center",
    alignItems: "center",
    bgColor: "transparent",
    border: "1px solid",
    borderColor: "green.1000",
    cursor: "pointer",
    onClick: () => {
      click();
      setLoginModal(false);
      name !== "WalletConnect" && (setLoginLoading === null || setLoginLoading === void 0 ? void 0 : setLoginLoading(true));
    },
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
      src: icon,
      my: "auto",
      w: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(22),
        lg: "22px"
      },
      h: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(22),
        lg: "22px"
      },
      mr: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(8),
        lg: "8px"
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      fontFamily: "Nunito",
      fontWeight: "600",
      textAlign: "left",
      color: "white.100",
      fontSize: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(16),
        lg: "16px"
      },
      lineHeight: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(70),
        lg: "70px"
      },
      children: ["Sign in with ", name]
    })]
  }));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_BaseModal__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
    borderRadius: "10px",
    pt: {
      base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(155),
      lg: "140px"
    },
    pl: {
      base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(44),
      lg: "100px"
    },
    boxSizing: "border-box",
    isShow: loginModal,
    close: () => setLoginModal(false),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      fontFamily: "Eurostile",
      fontWeight: "700",
      color: "white.100",
      fontSize: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(35),
        lg: "35px"
      },
      lineHeight: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(35),
        lg: "35px"
      },
      mb: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(28),
        lg: "15px"
      },
      children: "CONNECT WITH"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(LoginItem, {
      icon: (_assets_imgs_googleLogin_png__WEBPACK_IMPORTED_MODULE_16___default()),
      name: "Google ID",
      click: () => window.location.href = "https://app.gamifly.co:3001/auth/google"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(LoginItem, {
      icon: (_assets_imgs_faceBookLogin_png__WEBPACK_IMPORTED_MODULE_17___default()),
      name: "Facebook",
      click: () => window.location.href = "https://app.gamifly.co:3001/auth/facebook"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(LoginItem, {
      icon: (_assets_imgs_metaMaskLogin_png__WEBPACK_IMPORTED_MODULE_18___default()),
      name: "Meta Mask",
      click: () => metamaskClick()
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(LoginItem, {
      withOutMb: true,
      icon: (_assets_imgs_walletIcon_png__WEBPACK_IMPORTED_MODULE_19___default()),
      name: "WalletConnect",
      click: () => walletConnectClick()
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Index));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2653:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFqADAAQAAAABAAAAFgAAAAAcITNaAAACXklEQVQ4EaWVwWsTQRTGv5ndTdNsNhQL1lrwpHjw6NEgnryI5+LRi+hJEBUPCiKCgmf/Aw+C9CYe68FroVBBKYiFUhsUleo2ad3s7vi93U6abEvSbifZzGZm3+99896bWYUbC9504N2Dox8ohQDGoFSjMU1DJOnzVth94c4QarR+CsVPWagooa1SKgBZZEJN310KlVZ1zpQSuteI+lKz6SqH0EMoTek/4Y/00qTTCqg4/MkalZPpHgYakzZZc3Dt/AQunPERVDUcxvZTaxt35lrwLJxC3R03I7s4BU4ELl7OzqBJaK+JXH7tCuy4tjejerG/2TyG5lkf3cRkVxYDUt19KAdSLHGsVRQun2sgTXYlvP8c4ncnwcrPKPexO3XAUJAssZysO1xynjVJ4O036/hKqMS2VhmUPVKxYIRVLJxsnGGojzl71IrwkeBxT9FQwaciW1B2xfUxja2IlUGx/2KDiLG3z6iT95fytdmn+/pOlOLV9VO4xITFNBwvwGWePhF1DW69Xsf8coiql4dkMDB9UHsrin0qk8uqsXMy1qg6WNuIsLjaQaWvPIaCZSm5Ag2XRkWwjPFswLuPITa204FYDw2F7LSLp31MNbxsyz65OkVH+VmVMJuP3/7A360EH7608audZGGxqxmaPJe7Yn65jZhJke376MpxVHd0S5XMLf7B9zBGjXGVBPa3oWB5MFPo5nVaDIXUrlSL7MpiK/gpTpf/z4zs4648L7ckU5vEbGbH01FhPXsml0ytjXnG01reK72p0jfCIEuY+htffCZNHzLL4ZHghApDWML8D0pt0lMyjpcEAAAAAElFTkSuQmCC"

/***/ }),

/***/ 3799:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFqADAAQAAAABAAAAFgAAAAAcITNaAAAELUlEQVQ4EZVVXWxUVRCemfuzu7UpkLZYWq0oJmIVFReoGJAWfFAaoqYW7YMGXvTB+AAoStRkNTG+mKjxJ8FojBq0oZEYEvtQ0lIs1BjdhkBsQvyrP7EVtqjbbffv3hnn3HLXtm4bney55+w93/nOzJzvzEVYwH5saYlWQfoWQasTALcJyCpCcFgkBQhJZDosvt9bO5gcK0eB5V5ObFu7EcTeo2T3WohKBqC/kplF+h4YZISF32DOfbh84JtMCaCDOcTS0mKnKP2MjfZeF7Eqx7p0Nnre2FFyw1BkOI6MD1cPfPlrCLHDgcTjzgROPa+kB8xuWSU1Zjwj7TUNaqgbCZgIfBEoaosggYi/xAGOGkRoJeKLVfC4kjytOQy8pEuEReEfUOAzEEoichYtuYoZ7yKCTRVE7pQv/eTgriW9w7+EpKYP/Bhrbm5yY3zCsrDGU2IMSKXAPrxVLORfqhs6c372InUYU63xTkLaAR7sr/78qzmkAbHyUP79mpdpqH5P+lwMiDQFFrDP/r7a/uFXZxPOHwskNEOJmZzNm8TssVijbflDVs5tyPTVA55eBnnmT0bT3LkumSzOw//nvzZh4XYbrQYvmoOK7aOQX5Gfkr7lr687/m/SlsT5Si/nOnZU41zEYhOprK1nvsmcMjABWQBufOznin0/nZwrRID4QXGs1GQXOfYW1YS/CC8VLq9/xUbhK0GUUS04SU9VgFB2oTBWkmtXir+ww2jk5/MNtkpgLgrFyPb/2azMBDpHdkj1OvpP2AI20LXSA5FyzCrDSfa8jAj/FTZm/lOxXog3UZNgijS8QVKnVWF6NW04lGu6YnPmvtYQGPbJR7Hoe9OdhclCIxe9lWETr7BGMeNoDsiYSQXAWZzug4ao0MmLuHTla+km6OF64KLfEyW6/4ud3dkZ9MLPrS+kd6Fjv6333DGRI2C+4OU3Umwr/HYq39h1YHoDHM2vCCqKavDugvhPQCKxaL5bn5Xr0HL2E9qOqX9kRTRuPuFHvO9MSZD2C1ve+Tpz2Zhr6XVWQHCrgRLx1WffXXOo/Zpy/m74uKPNXzbcjRS5nv1iUAaAPUaR9049VTsZKMwsXN/V/oiWsTdF0DbMigS0dBuPx3W7Pg8lqRUrq4W0Xuc3a8FqtqQu5o53gJu5DciJgF+c6mUvdc9A4upciRgOd1hr2XuSyHpRwyDVYuAomnqpmwTKMWgjTt1YzLQYuTsQnWoD90JbEorVD/Q/h9/rSxVDaN0jMn7jg0N1Nb//QQLrybUqDIkEnw8dmD5shlwNLUs9FfCcc4MMY7sH997x7czMjB/huNTf+lH7TZqWx9TRnSr0pTPkl6aDGPWhx4oMI8z+QT8nH5ze/anRc8kCWOnf7IGm5maPV9sEOwj4TgZaxYL6xfInNPtnVP9H0ZfB5ENHyn5M/wYtxt4PCTA0LwAAAABJRU5ErkJggg=="

/***/ }),

/***/ 80:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAYAAACJfM0wAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFqADAAQAAAABAAAAFAAAAABm4WA6AAAEuUlEQVQ4EZ1UTWxUVRQ+59773puZzk9taWkLbSUEAUEstSJWGo0Q1IXUn+DGhIUGV4aVC5fVBUtM3LjBKLpSE4MLTICoRKuAUKgmlsRNbRkspS218/fmvXfvPZ477RCWxpOZ93Pv+f2+7z48fBjkwezg03v6obZr7NplBCD4H0ZjICbgseHrxQSPnvz9Jzx+eHdHxqcL67K4cXevuNiXx5MkxA/5t39d+i/55z7keJAHZlfgjcmbZu9ihabAh+fwg9cfeYFIfEvcZyEtYLBPQm8rTnLjnwkhz0aB/kuUEh5k1dbnvcZE81XYLBU+jxaPzCzRzomigXLdAiJqq81+BSRea0TxZTm08OOflnb0eAMDG8UAkZkrIC7KNv9e4hiBdAIgJXaCxfVXZzXcuG3IEKBgL95WvPey4j7mm91I3jC8N1lM6G5VwFC/7G5JYbfnIu4zTgL/VC1cnUmouEIgxGrSpgsS3lYE9qJACeSwYHMpJDvOLltaCYmGHpS0bYMLdNkJjAWaukV0dUZjJV71bQQ2L8g9g74shPKmLZFurjfvLvlySDg5E0NYM8T+Dj+o1DT8VoyhFAE6n6a/u6++UBmVmBMmIvdecoFNc827zjZmNe3rrqAPCbp53D8NEfKa6MpoMhabgzZCXWFLUI4iAAEQhhwRuh1OBgmDHCikretiGtlQhta0BkO8sWaGI9tSGp7prcCW9ph89k0YdBfrCguiMJU2ocoWWqarpfhMxlNH17UBbupAeiBIIJNUuTxwS4yZi1ozstZ1BSmPcG93FR7tl3C37tH0HcLFMmeN6Zvl2Y6/GwDMnhgaLWTwq8Ajz828slCGKGRN8TycGVLZgLJt+QZaK4sliGo8K78RV0hlAih05LhbgnqC9VJsR/uOTZxTNDYmksKZES9AL45YI0yBUVmoGA21OtflX3eLY8l1jZBAmubDlIMTMixWX6nGBCw5KGRFqiWGp9jxnID+M50ccsgkriaHCoJcXkImE9gLC779/lZAUjq5cyZ2EPx8tujT+KJvW7Ie5fJclMd0hFuGzFo6RKf2tGP88dARlugpR8r9FkeCBJ/e+bKAVlZ7Jt1QD1ONtMzi7MoxYYkEP9Bccc34STJ4PM4rSht4y2qGYI2fJLY20Q5BS1kpsLfVoNFIvuSGuTYFhP05ojhGqoYJ1kJLnhLk+chgAPAjZ4Y3VViDkmvWse9m1XyaShVDyhN8VC34TOdc6NMfd/iQMBI7+QvRxRKMYwuVsiXXVC7HvBgXjyAYFkRbFszsF9Iddl53jHiBwFQKQaH7anhQ6XzWfjqzjd4/X8f3ztfhk5ntUGrfhyQUOp90SnK3gkOxkYOf+CsFXyomfxzQLnHydlfTlU2nBCbpviTaPurVCw/JvuLP+sV0wZFAPV1dNtrypMKOh8GbOm2CeF4pJ4mGMe6GbkYoJlQnJreXwJ8QQAe0hWkQ9pIE83V184GFJL/1XaHjffuHh1jEq2UZZ2G0LlcKO8bVlvLx9I3Pe9CKlyzhE6y8TUzVlZ62loWG990TgyMWsd03MJ5/Z2JxrXzjdv2708NMyTCT7bkFHjWJk+ji4wdf/YVf70mp/NGuThPJEVbYrcKxa5f+BSJbRKrdvEs0AAAAAElFTkSuQmCC"

/***/ }),

/***/ 4892:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFKADAAQAAAABAAAAFgAAAADIHaOdAAAEHElEQVQ4EYVVTWhdRRT+ztz78gLRCC3YqpUqBAPxD5tiRCo0miqBFgVNcaEgLlypRdSWNi6ysA0NVlMX1h+ELnThH7Wk0oI0VeymolWpVlPrqqVqsD/E5PW9e2fm+J15PJpq1Unmzr0z53zznd8n+J9x7cjc1VHbR2MEykZ94x9jHaf+S0X+7fDGEb2sdOVjXvN1CunyBAxRjyPq9lMVtxMjMnsp3X8A9r6hlcbpYo0iWx816wsG5D28ckUOA/ZBD2mIY6fPZRN4U8r5wBcB3j56/m51+SYP1x/UueBLsiJAFBIzhvbuEMShCBr5fSCEsGX2pcpkCzQB3jU2tyxm+bNQ92CUvFomIEVQSYwCAQMBfTBQQUlgOyudQ1lqo/T6URHDNoy3HZaB7cXbMepDmrV1egOipiknUw3EAAhkDO09+dIuCpyqKDRDSVqh0BmojOSZ4HHHRwgNegjcM/I0kasxMgAb1G2C2TfPXHOBaIRQDs51imJVnrnQ4O3VJEGUzCkiBSoiuKPL4b4eh64rJQFO/Qbs+o6OO66JFUVBsTSdmRDF5xVelZxtzDjNR53tgqdXZhi8KcPMecXU72TI4/5u4P5bM3z4dcSmTxRna3KBKekxXqDJFHVkQAXziQFWc8XShYJ9PwSMfxZx4mzT3MWXOzw34LBkgaCS2eUESQz5IAC3IEOv1+qlSrXwwKJOwWBPTrM8fp0R1Gn6bAN4eJlL/tv5JV1hFlH5qisEj/Y6vHVIcXS6aYGoTJALBx9WWtdQaGh5ht6lDsMTJX6kz564M8NT/XY30FGNeOVARPciwY61Dt2LBZ//ojhCl9DINOSBHbV6jFK1aBacK7tyPDOQ48yc4psTijW3OBz8mQdUWMEgfXA4ou86wcIOwfO7It79thkDY50YWoKmADU3sO+ox58NxfBghWCC/T9FvLAnpsC9uBoYovkWqCffi/j4exYoqVnW2I2BMw/84v1JwYBNYJKMakWJvuszvPZFwLk6zym3YXfESQZo8phi7xT9yfwtqcP/lFZihtz7Kukw+KzJ5OxWJTQYJHOB2M2UsNQqWB11tgKmspmXsqJkmE2O9Q8N2Oti0HHvw3TMqqScMThNF1jC5oxo63a2MP4ZK7OiuU+c1Cg0Ceq0j3F3is2KbTM3QNvXRXGPRGSsaZ9yLLUsalluJubz3r2yMdA9bAwz7DzvlLHcjpfbjyVAXpTGbVuL5TlkI/NytUrW5ssL7atldmA5+Gb7Ktgs9nB/tDYmX7UwLgJsbfZsLu9hVW9gJayK9E1JxhawIGyw9C33P62JbJ3bIvtbOqoqHM3e0tqcv/InoK3hsDZEv56d+mYD9D4eierGptvwPn8CivnyrfdLMmwd2rpkRBeE4Ictt7JKvvnkiJyZf/73978AiB1ZbwjwUj8AAAAASUVORK5CYII="

/***/ })

};
;