"use strict";
exports.id = 384;
exports.ids = [384];
exports.modules = {

/***/ 7384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Av": () => (/* binding */ deleteStore),
/* harmony export */   "PQ": () => (/* binding */ setStore),
/* harmony export */   "bh": () => (/* binding */ getStore)
/* harmony export */ });
/* unused harmony exports setSessionStorage, getSessionStorage, removeSessionStorage, clearSessionStorage */
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4558);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);

const {
  publicRuntimeConfig
} = next_config__WEBPACK_IMPORTED_MODULE_0___default()();
const prefix = publicRuntimeConfig.localStoragePrefix || "";
const separatorStr = `/@@/`;
function deleteStore(key) {
  if (true) {
    return;
  }

  try {
    window.localStorage.removeItem(`${prefix}${key}`);
  } catch (e) {
    throw e;
  }
}
/**
 * @param key
 * @param value 不传则表示删除
 * @param time  单位：秒
 */

function setStore(key, value, time) {
  if (true) {
    return;
  }

  if (typeof value === "undefined") {
    deleteStore(key);
    return;
  }

  try {
    let str = "";

    if (typeof value === "object") {
      str = JSON.stringify(value);
    } else {
      str = `${value}`;
    }

    const lastTime = time ? `${separatorStr}${Date.now() + time * 1000}` : "";
    window.localStorage.setItem(`${prefix}${key}`, `${str}${lastTime}`);
  } catch (e) {
    throw e;
  }
}
function getStore(key) {
  if (true) {
    return;
  }

  let str = ``;

  try {
    str = window.localStorage.getItem(`${prefix}${key}`);
  } catch (e) {
    throw e;
  }

  if (str) {
    const arr = str.split(separatorStr);
    let value = arr[0];

    try {
      value = JSON.parse(arr === null || arr === void 0 ? void 0 : arr[0]);
    } catch (e) {
      throw e;
    }

    const time = arr[1];

    if (time) {
      if (Date.now() <= +time) {
        return value;
      }

      deleteStore(key);
    }

    return value;
  }
} // Session

function setSessionStorage(key, value) {
  var _window;

  if (true) {
    return;
  }

  (_window = window) === null || _window === void 0 ? void 0 : _window.sessionStorage.setItem(key, value);
}
function getSessionStorage(key) {
  var _window2;

  if (true) {
    return;
  }

  const res = (_window2 = window) === null || _window2 === void 0 ? void 0 : _window2.sessionStorage.getItem(key);
  return res === null ? "" : res;
}
function removeSessionStorage(key) {
  var _window3;

  if (true) {
    return;
  }

  return (_window3 = window) === null || _window3 === void 0 ? void 0 : _window3.sessionStorage.removeItem(key);
}
function clearSessionStorage() {
  var _window4;

  if (true) {
    return;
  }

  return (_window4 = window) === null || _window4 === void 0 ? void 0 : _window4.sessionStorage.clear();
}

/***/ })

};
;