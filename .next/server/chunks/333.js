"use strict";
exports.id = 333;
exports.ids = [333];
exports.modules = {

/***/ 2333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ src_theme)
});

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "@chakra-ui/theme-tools"
var theme_tools_ = __webpack_require__(429);
;// CONCATENATED MODULE: ./src/theme/styles.ts
/* harmony default export */ const styles = ({
  global: () => {
    return {
      "html, body": {
        textStyle: "14",
        color: "white.100",
        fontWeight: "400",
        bgColor: "white.200"
      },
      "*::-webkit-scrollbar": {
        width: "6px",
        height: "6px"
      },
      "*::-webkit-scrollbar-button": {
        display: "none"
      },
      "*::-webkit-scrollbar-track": {
        borderRadius: "10px",
        bg: "transparent"
      },
      "*::-webkit-scrollbar-thumb": {
        borderRadius: "10px",
        bg: "green.200",
        boxShadow: "inset 0 0 6px rgba(0, 0, 0, .3)"
      },
      "*::-webkit-scrollbar-corner": {
        bg: "transparent"
      },
      "*": {
        scrollbarColor: "var(--chakra-colors-green-200)",
        scrollbarWidth: "thin"
      }
    };
  }
});
;// CONCATENATED MODULE: ./src/theme/foundations/borders.ts
/* harmony default export */ const borders = ({});
;// CONCATENATED MODULE: ./src/theme/components/button.ts
/* harmony default export */ const components_button = ({
  baseStyle: {
    borderRadius: "0",
    boxShadow: "0px 2px 26px #3d50ff"
  },
  sizes: {
    md: {
      fontSize: "16px"
    }
  }
});
;// CONCATENATED MODULE: ./src/theme/components/tabs.ts
/* harmony default export */ const tabs = ({
  baseStyle: {
    tab: {
      _focus: {
        boxShadow: "none"
      }
    }
  }
});
;// CONCATENATED MODULE: ./src/theme/components/popover.ts

/* harmony default export */ const popover = ({
  parts: react_.theme.components.Popover.parts,
  baseStyle: {
    content: {
      _focus: {
        boxShadow: "none"
      }
    }
  }
});
;// CONCATENATED MODULE: ./src/theme/components/link.ts
/* harmony default export */ const components_link = ({
  baseStyle: {
    _focus: {
      boxShadow: "none"
    }
  }
});
;// CONCATENATED MODULE: ./src/theme/components/slider.ts
/* harmony default export */ const slider = ({
  baseStyle: {
    track: {// bg: 'gray.400',
    },
    thumb: {
      _focus: {
        boxShadow: "none"
      },
      _hover: {// boxShadow: '2px 2px 6px rgba(255, 51, 119, 0.4)',
      }
    }
  }
});
;// CONCATENATED MODULE: ./src/theme/components/input.ts
/* harmony default export */ const input = ({
  baseStyle: {
    field: {
      _focus: {
        boxShadow: "none"
      },
      _hover: {
        boxShadow: "none"
      }
    }
  }
});
;// CONCATENATED MODULE: ./src/theme/components/number-input.ts
/* harmony default export */ const number_input = ({
  baseStyle: {
    field: {
      _focus: {
        boxShadow: "none"
      },
      _hover: {
        boxShadow: "none"
      }
    }
  }
});
;// CONCATENATED MODULE: ./src/theme/components/index.ts







/**
 * https://chakra-ui.com/docs/theming/customize-theme#customizing-single-components
 * 
const ComponentStyle = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {},
  // default values for `size` and `variant`
  defaultProps: {
    size: "",
    variant: "",
  },
}
 */

/* harmony default export */ const components = ({
  Button: components_button,
  Tabs: tabs,
  Popover: popover,
  Link: components_link,
  Slider: slider,
  Input: input,
  NumberInput: number_input
});
// EXTERNAL MODULE: ./src/utils/px2vw.ts
var px2vw = __webpack_require__(6483);
;// CONCATENATED MODULE: ./src/theme/index.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const config = {};
const breakpoints = (0,theme_tools_.createBreakpoints)({
  sm: "640px",
  md: "768px",
  lg: "1280px",
  xl: "1920px"
});

const colors = _objectSpread(_objectSpread({}, react_.theme.colors), {}, {
  white: {
    "100": "#FFFFFF",
    "200": "rgba(255, 255, 255, 0.13)",
    "300": "rgba(255, 255, 255, 0.45)",
    "400": "rgba(255, 255, 255, 0.07)",
    "500": "rgba(255, 255, 255, 0.8)",
    "600": "rgba(255, 255, 255, 0.85)",
    "700": "rgba(255, 255, 255, 0.1)",
    "800": "rgba(186, 186, 186,0.6)"
  },
  black: {
    "100": "#000000",
    "200": "rgba(0, 0, 0, 0.1)",
    "300": "rgba(0, 0, 0, 0.4)",
    "400": "rgba(0, 0, 0, 0.45)",
    "500": "rgba(0, 0, 0, 0.54)",
    "600": "rgba(0, 0, 0, 0.55)",
    "700": "rgba(0, 0, 0, 0.75)",
    "800": "rgba(0, 0, 0, 0.9)",
    "900": "#181D42",
    "1000": "#202449",
    "1100": "rgba(14, 17, 40, 0.95)",
    "1200": "rgba(0, 0, 0, 0.85)",
    "1300": "rgba(0, 0, 0, 0.25)",
    "1400": "rgba(0, 0, 0, 0.35)",
    "1500": "rgba(0, 0, 0, 0.5)",
    "1600": "#0F0F0F",
    "1700": "#0B0B0B",
    "1800": "#979797",
    "1900": "RGBA(15, 15, 15, 0.7)",
    "2000": "RGBA(15, 15, 15, 1)"
  },
  blue: {
    "100": "#3D50FF",
    "200": "#3DC2FF",
    "300": "#4D56F6",
    "400": "#3B51F6"
  },
  green: {
    "100": "#5EC6B8",
    "200": "rgba(94, 198, 184, 0.6)",
    "300": "rgba(94, 198, 184, 0.15)",
    "400": "rgba(94, 198, 184, 0.05)",
    "500": "rgba(94, 198, 184, 0.11)",
    "600": "rgba(94, 198, 184, 0.21)",
    "700": "rgba(94, 198, 184, 0.35)",
    "800": "#6CCCB0",
    "900": "#C4F863",
    "1000": "#BCFC47"
  },
  gray: {
    "100": "rgba(104, 104, 104, 0.3)",
    "200": "#5E5E5E",
    "300": "#D8D8D8",
    "400": "#99999A",
    "500": "#515151",
    "600": "#DCDCDC",
    "700": "#515151",
    "800": "#2C2C2C"
  },
  yellow: {
    "100": "#EFC049",
    "200": "#EDAB06",
    "300": "#F8D250"
  },
  purple: {
    "100": "#9537F6"
  }
});

const textStyles = {
  "12": {
    fontSize: {
      base: (0,px2vw/* default */.Z)(12),
      lg: "12px"
    },
    lineHeight: {
      base: (0,px2vw/* default */.Z)(12),
      lg: "12px"
    }
  },
  "14": {
    fontSize: {
      base: (0,px2vw/* default */.Z)(14),
      lg: "14px"
    },
    lineHeight: {
      base: (0,px2vw/* default */.Z)(14),
      lg: "14px"
    }
  },
  "16": {
    fontSize: {
      base: (0,px2vw/* default */.Z)(16),
      lg: "16px"
    },
    lineHeight: {
      base: (0,px2vw/* default */.Z)(16),
      lg: "16px"
    }
  },
  "18": {
    fontSize: {
      base: (0,px2vw/* default */.Z)(18),
      lg: "18px"
    },
    lineHeight: {
      base: (0,px2vw/* default */.Z)(18),
      lg: "18px"
    }
  },
  "20": {
    fontSize: {
      base: (0,px2vw/* default */.Z)(20),
      lg: "20px"
    },
    lineHeight: {
      base: (0,px2vw/* default */.Z)(20),
      lg: "20px"
    }
  },
  "22": {
    fontSize: {
      base: (0,px2vw/* default */.Z)(22),
      lg: "22px"
    },
    lineHeight: {
      base: (0,px2vw/* default */.Z)(22),
      lg: "22px"
    }
  },
  "24": {
    fontSize: {
      base: (0,px2vw/* default */.Z)(24),
      lg: "24px"
    },
    lineHeight: {
      base: (0,px2vw/* default */.Z)(24),
      lg: "24px"
    }
  },
  "26": {
    fontSize: {
      base: (0,px2vw/* default */.Z)(26),
      lg: "26px"
    },
    lineHeight: {
      base: (0,px2vw/* default */.Z)(26),
      lg: "26px"
    }
  },
  "30": {
    fontSize: {
      base: (0,px2vw/* default */.Z)(30),
      lg: "30px"
    },
    lineHeight: {
      base: (0,px2vw/* default */.Z)(30),
      lg: "30px"
    }
  },
  "32": {
    fontSize: {
      base: (0,px2vw/* default */.Z)(32),
      lg: "32px"
    },
    lineHeight: {
      base: (0,px2vw/* default */.Z)(32),
      lg: "32px"
    }
  },
  "36": {
    fontSize: {
      base: (0,px2vw/* default */.Z)(36),
      lg: "36px"
    },
    lineHeight: {
      base: (0,px2vw/* default */.Z)(36),
      lg: "36px"
    }
  }
};
const layerStyles = {}; // https://chakra-ui.com/docs/theming/theme

const theme = (0,react_.extendTheme)({
  config,
  colors,
  fonts: {
    body: "'Orbitron','Nunito','Eurostile','SofiaPro','sans-serif'"
  },
  sizes: {
    xl: "1080px"
  },
  fontSizes: {
    "12": "12px",
    "14": "14px",
    "16": "16px",
    "18": "18px",
    "24": "24px"
  },
  styles: styles,
  borders: borders,
  components: components,
  breakpoints,
  layerStyles,
  textStyles
});
/* harmony default export */ const src_theme = (theme);

/***/ })

};
;