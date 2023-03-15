"use strict";
exports.id = 779;
exports.ids = [779];
exports.modules = {

/***/ 3822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ ERC20Abi)
/* harmony export */ });
const ERC20Abi = [{
  inputs: [{
    internalType: "string",
    name: "_n",
    type: "string"
  }, {
    internalType: "string",
    name: "_s",
    type: "string"
  }],
  stateMutability: "nonpayable",
  type: "constructor"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "owner",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "spender",
    type: "address"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "value",
    type: "uint256"
  }],
  name: "Approval",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "from",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "to",
    type: "address"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "value",
    type: "uint256"
  }],
  name: "Transfer",
  type: "event"
}, {
  inputs: [{
    internalType: "address",
    name: "owner",
    type: "address"
  }, {
    internalType: "address",
    name: "spender",
    type: "address"
  }],
  name: "allowance",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "spender",
    type: "address"
  }, {
    internalType: "uint256",
    name: "value",
    type: "uint256"
  }],
  name: "approve",
  outputs: [{
    internalType: "bool",
    name: "",
    type: "bool"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "account",
    type: "address"
  }],
  name: "balanceOf",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "decimals",
  outputs: [{
    internalType: "uint8",
    name: "",
    type: "uint8"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "spender",
    type: "address"
  }, {
    internalType: "uint256",
    name: "subtractedValue",
    type: "uint256"
  }],
  name: "decreaseAllowance",
  outputs: [{
    internalType: "bool",
    name: "",
    type: "bool"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "spender",
    type: "address"
  }, {
    internalType: "uint256",
    name: "addedValue",
    type: "uint256"
  }],
  name: "increaseAllowance",
  outputs: [{
    internalType: "bool",
    name: "",
    type: "bool"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [],
  name: "name",
  outputs: [{
    internalType: "string",
    name: "",
    type: "string"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "symbol",
  outputs: [{
    internalType: "string",
    name: "",
    type: "string"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "totalSupply",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "recipient",
    type: "address"
  }, {
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }],
  name: "transfer",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "sender",
    type: "address"
  }, {
    internalType: "address",
    name: "recipient",
    type: "address"
  }, {
    internalType: "uint256",
    name: "amount",
    type: "uint256"
  }],
  name: "transferFrom",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}];

/***/ }),

/***/ 8202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lj": () => (/* binding */ injected),
/* harmony export */   "OM": () => (/* binding */ connectorLocalStorageKey)
/* harmony export */ });
/* unused harmony exports NetworkContextName, walletconnect */
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6590);
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9795);
/* harmony import */ var _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_1__);


const NetworkContextName = "NETWORK";
const connectorLocalStorageKey = "connectorId";
const injected = new _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__.InjectedConnector({
  supportedChainIds: [137]
});
const walletConfig = {
  // walletconnect 用到的bridge
  bridge: "https://bridge.walletconnect.org",
  infuraId: "ad92ef65d7cf424e807d09f01cdb7702",
  rpc: {
    137: "https://polygon-rpc.com/"
  }
};
const walletconnect = new _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_1__.WalletConnectConnector({
  qrcode: true,
  rpc: walletConfig.rpc,
  bridge: walletConfig.bridge
});

/***/ }),

/***/ 8938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "H3": () => (/* binding */ recharge),
  "If": () => (/* binding */ switchNetwork)
});

// UNUSED EXPORTS: WalletEnum, executeAndShowTx

// EXTERNAL MODULE: external "ethers/lib/utils"
var utils_ = __webpack_require__(2522);
;// CONCATENATED MODULE: ./src/connect/netWork.ts

const mainChainId = "0x38";
const networkConfigMap = {
  137: {
    chainId: (0,utils_.hexValue)(137),
    chainName: "polygon",
    rpcUrls: ["https://polygon-rpc.com/"],
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18
    },
    blockExplorerUrls: ["https://polygonscan.com"]
  }
};
const scanAddressMap = {
  137: "https://polygonscan.com"
};
// EXTERNAL MODULE: external "ethers"
var external_ethers_ = __webpack_require__(1982);
// EXTERNAL MODULE: ./src/abi/ERC20Abi.ts
var ERC20Abi = __webpack_require__(3822);
;// CONCATENATED MODULE: ./src/connect/wallet.ts




let WalletEnum;

(function (WalletEnum) {
  WalletEnum["metamask"] = "MetaMask";
  WalletEnum["walletconnect"] = "WalletConnect";
})(WalletEnum || (WalletEnum = {}));

// switch network to ethereum
const switchNetwork = async chainId => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const toast = useToast();
  try {
    var _window;

    if ((_window = window) !== null && _window !== void 0 && _window.ethereum) {
      var _window2, _window2$ethereum, _window2$ethereum$req;

      await ((_window2 = window) === null || _window2 === void 0 ? void 0 : (_window2$ethereum = _window2.ethereum) === null || _window2$ethereum === void 0 ? void 0 : (_window2$ethereum$req = _window2$ethereum.request) === null || _window2$ethereum$req === void 0 ? void 0 : _window2$ethereum$req.call(_window2$ethereum, {
        method: "wallet_switchEthereumChain",
        params: [{
          chainId: (0,utils_.hexValue)(chainId)
        }]
      }));
    } else {
      return "no metamask";
    }
  } catch (error) {
    // console.log(window.ethereum);
    if (error.code === 4902 || error.code === -32603) {
      try {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [networkConfigMap[chainId]]
        });
        return true;
      } catch (addError) {
        return false;
      }
    }

    return false;
  }

  return true;
};
const executeAndShowTx = async (promise, {
  throwError
} = {
  throwError: false
}) => {
  let tx;

  try {
    tx = await promise; // txPending(tx.chainId, tx.hash);

    await tx.wait(); // txSuccess(tx.chainId, tx.hash);

    return tx.hash;
  } catch (err) {
    if (tx) {
      console.log("err:", tx.hash);
    }

    if (throwError) {
      console.log(err);
    } else {
      console.error("transaction fail: ", err);
    }

    return err;
  }
};
const recharge = async (library, account, token, userInfo, val, success, fail) => {
  try {
    const signer = library.getSigner(account);
    const contract = new external_ethers_.ethers.Contract(token, ERC20Abi/* ERC20Abi */.X, signer);
    const decimals = await contract.decimals();
    const tran = contract.transfer(userInfo === null || userInfo === void 0 ? void 0 : userInfo.platform_wallet, external_ethers_.ethers.utils.parseUnits(val, decimals));
    const res = await executeAndShowTx(tran);

    if (res && typeof res === "string") {
      success(res);
    } else {
      fail === null || fail === void 0 ? void 0 : fail();
    }
  } catch (err) {
    fail === null || fail === void 0 ? void 0 : fail();
  }
};

/***/ })

};
;