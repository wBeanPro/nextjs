exports.id = 643;
exports.ids = [643];
exports.modules = {

/***/ 9714:
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
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8887);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_imgs_scan_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7242);
/* harmony import */ var _assets_imgs_scan_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_scan_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_imgs_transactionsCopy_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1887);
/* harmony import */ var _assets_imgs_transactionsCopy_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_transactionsCopy_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);









function Index({
  item,
  isSimple
}) {
  const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useToast)(); // 处理日期格式

  const returnTime = time => {
    const date = new Date(time);
    const year = date.getFullYear();
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const min = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    return `${day}-${month}-${year} ${hour}:${min}`;
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    w: {
      base: "max-content",
      lg: "100%"
    },
    h: {
      base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(50),
      lg: "50px"
    },
    lineHeight: {
      base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(50),
      lg: "50px"
    },
    px: {
      base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(20),
      lg: "20px"
    },
    justifyContent: isSimple ? "flex-start" : "space-between",
    boxSizing: "border-box",
    fontFamily: "Nunito",
    color: "white.100",
    textStyle: "14",
    fontWeight: "400" // bgColor={index % 2 === 0 ? "black.300" : "black.400"}
    ,
    bgColor: "black.1600",
    borderBottom: "1px solid",
    borderColor: "black.1800",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      w: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(163),
        lg: "200px"
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
        children: returnTime(item.datetime)
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      w: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(110),
        lg: !isSimple ? "180px" : "250px"
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
        children: item.type
      })
    }), !isSimple && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      w: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(107),
        lg: "107px"
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
        children: item.asset
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      w: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(109),
        lg: !isSimple ? "150px" : "200px"
      },
      color: "green.1000",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
        children: item.amount
      })
    }), !isSimple && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      w: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(217),
        lg: "217px"
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
        children: item.destination.substring(0, 5) + "..." + item.destination.substring(item.destination.length - 2, item.destination.length)
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
        src: (_assets_imgs_transactionsCopy_png__WEBPACK_IMPORTED_MODULE_5___default()),
        w: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(14),
          lg: "14px"
        },
        h: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(14),
          lg: "14px"
        },
        my: "auto",
        ml: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(10),
          lg: "10px"
        },
        cursor: "pointer",
        onClick: () => {
          copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default()(item.destination);
          toast({
            title: "success",
            status: "success",
            duration: 3000,
            isClosable: true
          });
        }
      })]
    }), !isSimple && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      w: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(109),
        lg: "109px"
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
        children: item.transaction_id.substring(0, 5) + "..." + item.transaction_id.substring(item.transaction_id.length - 6, item.transaction_id.length)
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
        src: (_assets_imgs_scan_png__WEBPACK_IMPORTED_MODULE_6___default()),
        w: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(14),
          lg: "14px"
        },
        h: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(14),
          lg: "14px"
        },
        ml: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(10),
          lg: "10px"
        },
        mr: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(5),
          lg: "5px"
        },
        my: "auto",
        cursor: "pointer",
        onClick: () => window.open(`https://polygonscan.com/tx/${item.transaction_id}`)
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
        src: (_assets_imgs_transactionsCopy_png__WEBPACK_IMPORTED_MODULE_5___default()),
        w: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(14),
          lg: "14px"
        },
        h: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(14),
          lg: "14px"
        },
        my: "auto",
        cursor: "pointer",
        onClick: () => {
          copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default()(item.transaction_id);
          toast({
            title: "success",
            status: "success",
            duration: 3000,
            isClosable: true
          });
        }
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      justifyContent: "flex-end",
      w: {
        base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(140),
        lg: "140px"
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        flexDir: "column",
        justifyContent: "center",
        bgColor: item.status === 0 ? "green.100" : item.status === 1 ? "yellow.200" : "red",
        my: "auto",
        w: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(85),
          lg: "85px"
        },
        h: {
          base: (0,_utils_px2vw__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(22),
          lg: "22px"
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
          textAlign: "center",
          children: item.status === 0 ? "Success" : item.status === 1 ? "In progress" : "Fail"
        })
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Index));

/***/ }),

/***/ 4222:
/***/ ((module) => {

// Exports
module.exports = {
	"table": "style_table__HfyCd",
	"step2": "style_step2__KoR1w"
};


/***/ }),

/***/ 7242:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC3SURBVHgBfZGBEcIgDEWJ5wCMwAbWDewEuoFuYDdoR3AD20nUCRyhjNAN6M81cJRCuXtH+PxACKR2hnPugcmAkYgG1g4FowZ/hBWwoMb6o/bMoEv0HlyPmRwDBpTw4mQWEE+YvuCcnmyiteEyvCY33NMymoK5lTeF00LNGXMj+zq0DrxzZtGqYBahk3770rTETzZvWgLx5m+ItHZVRjRIDPwpFvzABZxALe3cJvi3qOUPLIy9KowZVa6+ilxiO7cAAAAASUVORK5CYII="

/***/ }),

/***/ 1887:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACBSURBVHgBrZExDoAgDEVbwgHcdXLRwbN4bo8gi5NXcMZPAgYJNEj8yQ+E8tIPJWoUpwfW2gXLKDCGmQ1lwLVEoPbUFTWqGdQ+woRlgI9aMHR04AaftaAOG/zU5bt/A2MJMEugi1scCcXPKc3Oz63P1VRy6WWog+ccGKLuQjxDf+oGfHc4M80w9ekAAAAASUVORK5CYII="

/***/ })

};
;