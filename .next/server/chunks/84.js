exports.id = 84;
exports.ids = [84];
exports.modules = {

/***/ 5937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ setReadNotification),
/* harmony export */   "T": () => (/* binding */ getNotifications)
/* harmony export */ });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9394);
 // const baseUrl = "https://gamifly.co:3001";

const baseUrl = "https://app.gamifly.co:3001";
const ajax = new _utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(baseUrl); // 获取通知

const getNotifications = {
  fetcher: id => ajax.get(`/api/getNotifications/${id}`),
  key: "/api/getNotifications"
}; // 修改通知状态

const setReadNotification = {
  fetcher: params => ajax.post("/api/setReadNotification", params),
  key: "/api/setReadNotification"
};

/***/ }),

/***/ 7084:
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
/* harmony import */ var _utils_px2vw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6483);
/* harmony import */ var _assets_imgs_messageIcon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3201);
/* harmony import */ var _assets_imgs_messageIcon_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_messageIcon_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _apis_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5937);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5941);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__]);
swr__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function Index({
  type = 1,
  messageList
}) {
  const {
    0: notificationIds,
    1: setNotificationIds
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    data: _setReadNotificationData
  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])(notificationIds ? [_apis_notifications__WEBPACK_IMPORTED_MODULE_4__/* .setReadNotification.key */ .H.key, notificationIds] : null, _ => _apis_notifications__WEBPACK_IMPORTED_MODULE_4__/* .setReadNotification.fetcher */ .H.fetcher({
    notification_id: notificationIds
  }), {
    revalidateOnFocus: false
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (type === 0 && messageList.length > 0) {
      setNotificationIds(messageList.map(item => item === null || item === void 0 ? void 0 : item.id));
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [messageList]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    w: "full",
    flexDir: "column",
    children: messageList.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      w: "full",
      flexDir: "column",
      boxSizing: "border-box",
      bgColor: "black.700",
      minH: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(123),
        lg: "123px"
      },
      p: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(15),
        lg: "15px"
      },
      mb: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(5),
        lg: "5px"
      },
      filter: "drop-shadow(0px 2px 15px rgba(94, 198, 184, 0.4))",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        mb: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(10),
          lg: "10px"
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
          src: (item === null || item === void 0 ? void 0 : item.icon) || (_assets_imgs_messageIcon_png__WEBPACK_IMPORTED_MODULE_6___default()),
          w: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(20),
            lg: "30px"
          },
          h: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(20),
            lg: "30px"
          },
          mr: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(10),
            lg: "10px"
          }
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          fontFamily: "Orbitron",
          fontWeight: "600",
          fontSize: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(14),
            lg: "14px"
          },
          lineHeight: {
            base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(20),
            lg: "30px"
          },
          children: (item === null || item === void 0 ? void 0 : item.title) || "Reward"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
        fontFamily: "Nunito",
        fontWeight: "400",
        color: "white.100",
        fontSize: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(14),
          lg: "14px"
        },
        lineHeight: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(19),
          lg: "19px"
        },
        mb: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(10),
          lg: "10px"
        },
        children: item.content
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
        fontFamily: "Nunito",
        fontWeight: "400",
        color: "white.500",
        opacity: 0.65,
        fontSize: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(12),
          lg: "12px"
        },
        lineHeight: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(12),
          lg: "12px"
        },
        children: item.datetime
      })]
    }, index))
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Index));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3201:
/***/ ((module) => {

module.exports = "data:image/png;base64,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"

/***/ })

};
;