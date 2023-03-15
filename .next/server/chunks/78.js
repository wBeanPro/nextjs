"use strict";
exports.id = 78;
exports.ids = [78];
exports.modules = {

/***/ 6483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ px2vw)
/* harmony export */ });
// 注意max限制， px 大于 unit 时的使用
function px2vw(px, unit = 375, ignoreMax = false) {
  if (!ignoreMax) {
    if (px > unit) {
      return "100vw";
    } else if (px < -1 * unit) {
      return "-100vw";
    }
  } // 100vw = ${unit}px


  return `${px / unit * 100}vw`;
}

/***/ }),

/***/ 9394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Ajax)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // const baseURLMap = new Map() //不同baseUrl的映射

class Ajax {
  constructor(baseUrl = "") {
    _defineProperty(this, "baseUrl", "");

    _defineProperty(this, "setBaseUrl", url => {
      this.baseUrl = url;
    });

    this.baseUrl = baseUrl;
  }

  static setHeader(headerName, value) {
    if (!headerName) {
      console.error("setHeader", "参数不合法");
      return;
    }

    axios__WEBPACK_IMPORTED_MODULE_0___default().interceptors.request.use(config => {
      config.headers[headerName] = value;
      return config;
    }, err => {
      return Promise.reject(err);
    });
  }

  //TODO:添加baseUrl
  request(params) {
    const newParams = _objectSpread({}, params);

    return new Promise(resolve => {
      axios__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread(_objectSpread({}, newParams), {}, {
        url: `${this.baseUrl}${params.url}`
      })).then(res => {
        var _res$data;

        if (res.status === 200) {
          switch (res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.code) {
            case 0:
              resolve(res === null || res === void 0 ? void 0 : res.data);
              break;

            case 401:
              // TODO:鉴权
              break;

            default:
              resolve(res === null || res === void 0 ? void 0 : res.data);
              break;
          }
        }
      }) // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .catch(err => {
        var _err$response;

        resolve(err === null || err === void 0 ? void 0 : (_err$response = err.response) === null || _err$response === void 0 ? void 0 : _err$response.data);
      });
    });
  }

  queryString(url, query) {
    const str = [];

    for (const key in query) {
      str.push(key + "=" + query[key]);
    }

    const paramStr = str.join("&");
    return paramStr ? `${url}?${paramStr}` : url;
  }

  get(url = "", params = {}) {
    return this.request({
      method: "get",
      url: this.queryString(`${url}`, params)
    });
  }

  post(url, params) {
    return this.request({
      method: "post",
      url: `${url}`,
      data: params
    });
  }

} // TODO:错误处理
// export const errorHandle = () => {}

/***/ })

};
;