(() => {
var exports = {};
exports.id = 197;
exports.ids = [197];
exports.modules = {

/***/ 3914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5444);
/* harmony import */ var _assets_imgs_comingSoon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2294);
/* harmony import */ var _assets_imgs_comingSoon_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_comingSoon_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // import px2vw from "@/utils/px2vw";
// import Step1 from "@/components/Purchase/Step1";
// import Step2, { screeningItem } from "@/components/Purchase/Step2";
// import CreditStep2 from "@/components/PurchaseCredit/Step2";
// import { NFTItemProp } from "@/components/NFTItem";
// import arrows from "@/assets/imgs/arrows.png";
// import Step3 from "@/components/Purchase/Step3";
// import buySuccess from "@/assets/imgs/buySuccess.png";

 // import BaseModal from "@/components/BaseModal";
// import BaseButton from "@/components/BaseButton";
// import { useRouter } from "next/router";
// import useSWR from "swr";
// import { getNFTList } from "@/apis/NFTs";
// import { getGameList } from "@/apis/games";



function App() {
  // const router = useRouter();
  // const [showSuccess, setShowSuccess] = useBoolean(false);
  // const [step, setStep] = useState(1); // 步骤
  // const [chooseType, setChooseType] = useState("Credit"); // Credit / NFT
  // const [paymentMethod, setPaymentMethod] = useState(1); // 支付类型
  // const [totalPrice, setTotalPrice] = useState(0); // 总价格
  // // NFT筛选列表
  // const [screening, setScreening] = useState<screeningItem | null>({
  //   id: "all",
  //   title: "All",
  // });
  // // NFT列表
  // const [nftList, setNftList] = useState<NFTItemProp[]>([]);
  // // game列表
  // const [gameList, setGameList] = useState<gameItem[]>([]);
  // const [activeGame, setActiveGame] = useState<gameItem>(gameList[0]);
  // const { data: getNFTListData } = useSWR(
  //   [getNFTList.key, screening],
  //   () => getNFTList.fetcher(screening?.id as string),
  //   {
  //     revalidateOnFocus: false,
  //   }
  // );
  // const { data: getGameListData } = useSWR(
  //   getGameList.key,
  //   () => getGameList.fetcher(1),
  //   {
  //     revalidateOnFocus: false,
  //   }
  // );
  // useEffect(() => {
  //   if (getGameListData) {
  //     setGameList(getGameListData);
  //     setActiveGame(getGameListData[0]);
  //   }
  // }, [getGameListData]);
  // useEffect(() => {
  //   const list = nftList.filter((item: NFTItemProp) => item?.isActive);
  //   if (list.length > 0) {
  //     let price = 0;
  //     list.map((item) => {
  //       price += Number(item.price);
  //     });
  //     setTotalPrice(price);
  //   }
  // }, [nftList]);
  // useEffect(() => {
  //   if (getNFTListData) {
  //     setNftList(getNFTListData);
  //   }
  // }, [getNFTListData]);
  // const contentNFT = useMemo(() => {
  //   if (step === 1) {
  //     return (
  //       <Step1
  //         chooseType={chooseType}
  //         setChooseType={(type: string) => setChooseType(type)}
  //         continueClick={() => setStep(2)}
  //       />
  //     );
  //   } else if (step === 2) {
  //     return (
  //       <Step2
  //         nftList={nftList}
  //         setNftList={(list) => setNftList(list)}
  //         totalPrice={totalPrice}
  //         screening={screening}
  //         chooseScreening={(item: screeningItem) => setScreening(item)}
  //         continueClick={() => setStep(3)}
  //       />
  //     );
  //   } else {
  //     return (
  //       <Step3
  //         nftList={nftList}
  //         totalPrice={totalPrice}
  //         setNftList={(list) => setNftList(list)}
  //         paymentMethod={paymentMethod}
  //         setPaymentMethod={(type: number) => setPaymentMethod(type)}
  //         success={() => {
  //           setShowSuccess.on();
  //         }}
  //       />
  //     );
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [step, chooseType, screening, nftList, paymentMethod, totalPrice]);
  // const contentCredit = useMemo(() => {
  //   if (step === 1) {
  //     return (
  //       <Step1
  //         chooseType={chooseType}
  //         setChooseType={(type: string) => setChooseType(type)}
  //         continueClick={() => setStep(2)}
  //       />
  //     );
  //   } else if (step === 2) {
  //     return (
  //       <CreditStep2
  //         gameList={gameList}
  //         activeGame={activeGame}
  //         setActiveGame={(obj: gameItem) => setActiveGame(obj)}
  //         totalPrice={totalPrice}
  //         paymentMethod={paymentMethod}
  //         setPaymentMethod={(type: number) => setPaymentMethod(type)}
  //         success={() => {
  //           setShowSuccess.on();
  //         }}
  //       />
  //     );
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [step, chooseType, activeGame, paymentMethod, totalPrice]);
  return (
    /*#__PURE__*/
    // <Flex w="full" flexDir="column">
    //   {/* Title */}
    //   <Text
    //     display={{ base: "none", lg: "block" }}
    //     mb={{ base: px2vw(35), lg: "35px" }}
    //     fontFamily="Orbitron"
    //     fontWeight="700"
    //     fontSize="36px"
    //     color="white.100"
    //   >
    //     Make a Purchase
    //   </Text>
    //   <Flex flexDir="column">
    //     {/* Purchase type */}
    //     <Flex flexDir="column" mb={{ base: px2vw(30), lg: "30px" }}>
    //       {/* Text */}
    //       <Flex
    //         fontFamily="Orbitron"
    //         fontWeight="600"
    //         textStyle="16"
    //         color="white.100"
    //         mb={{ base: px2vw(15), lg: "15px" }}
    //         lineHeight={{ base: px2vw(20), lg: "20px" }}
    //       >
    //         {step > 1 && (
    //           <Image
    //             src={arrows}
    //             w={{ base: px2vw(11.87), lg: "11.87px" }}
    //             h={{ base: px2vw(15.83), lg: "15.83px" }}
    //             mr={{ base: px2vw(10), lg: "10px" }}
    //             my="auto"
    //             cursor="pointer"
    //             onClick={() => {
    //               setStep(step - 1);
    //             }}
    //           />
    //         )}
    //         <Text color="green.100">{step}</Text>
    //         <Text mx="5px">/</Text>
    //         <Text>
    //           {chooseType === "NFT" ? 3 : 2}.{" "}
    //           {chooseType === "NFT"
    //             ? step === 2
    //               ? "Choose NFT"
    //               : "Payment"
    //             : "Payment"}
    //         </Text>
    //       </Flex>
    //       {/* Progress */}
    //       <Box
    //         w="full"
    //         bgColor="green.600"
    //         pos="relative"
    //         h={{ base: px2vw(4), lg: "4px" }}
    //         _after={{
    //           content: "''",
    //           w:
    //             chooseType === "NFT"
    //               ? step === 1
    //                 ? "33.33%"
    //                 : step === 2
    //                 ? "66.66%"
    //                 : "100%"
    //               : step === 1
    //               ? "50%"
    //               : "100%",
    //           h: { base: px2vw(4), lg: "4px" },
    //           bgColor: "green.100",
    //           pos: "absolute",
    //           top: 0,
    //           left: 0,
    //         }}
    //       />
    //     </Flex>
    //     {chooseType === "NFT" ? contentNFT : contentCredit}
    //   </Flex>
    //   {/* success */}
    //   <BaseModal
    //     isShow={showSuccess}
    //     close={() => {
    //       setShowSuccess.off();
    //       setStep(1);
    //     }}
    //     w={{ base: `calc(100% - ${px2vw(30)})`, lg: "454px" }}
    //     h={{ base: "400px", lg: "430px" }}
    //   >
    //     <Flex flexDir="column" alignItems="center" boxSizing="border-box">
    //       <Image
    //         src={buySuccess}
    //         w={{ base: px2vw(187), lg: "210px" }}
    //         h={{ base: px2vw(139), lg: "156px" }}
    //         mb={{ base: px2vw(25), lg: "30px" }}
    //       />
    //       <Text
    //         fontFamily="Orbitron"
    //         fontWeight="600"
    //         color="white.100"
    //         textAlign="center"
    //         textStyle={{ base: "18", lg: "22" }}
    //         lineHeight={{ base: px2vw(23), lg: "28px" }}
    //         mb={{ base: px2vw(15), lg: "20px" }}
    //       >
    //         Buy NFTs success!
    //       </Text>
    //       <Flex
    //         w="full"
    //         flexWrap="wrap"
    //         justifyContent="center"
    //         fontFamily="Nunito"
    //         fontWeight="400"
    //         color="white.500"
    //         textStyle="16"
    //         textAlign="center"
    //         lineHeight={{ base: px2vw(22), lg: "22px" }}
    //         mb={{ base: px2vw(25), lg: "30px" }}
    //       >
    //         <Box color="green.100" display="inline-block" mx="5px">
    //           Congratulations!
    //         </Box>
    //       </Flex>
    //       <Flex w="full" justifyContent="space-between">
    //         <BaseButton
    //           w={{ base: px2vw(140), lg: "190px" }}
    //           border="1px solid"
    //           borderColor="blue.100"
    //           bgColor="transparent"
    //           boxShadow="none"
    //           onClick={() => {
    //             setShowSuccess.off();
    //             setStep(1);
    //           }}
    //         >
    //           Cancel
    //         </BaseButton>
    //         <BaseButton
    //           w={{ base: px2vw(140), lg: "190px" }}
    //           onClick={() => {
    //             setShowSuccess.off();
    //             router.push("/profile");
    //           }}
    //         >
    //           View details
    //         </BaseButton>
    //       </Flex>
    //     </Flex>
    //   </BaseModal>
    // </Flex>
    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      justifyContent: "center",
      alignItems: "center",
      pt: {
        base: 0,
        lg: "150px"
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
        src: (_assets_imgs_comingSoon_png__WEBPACK_IMPORTED_MODULE_3___default())
      })
    })
  );
}

const getServerSideProps = async ctx => {
  return {
    props: _objectSpread({}, await (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_4__/* .getI18nSSRProps */ .q)(ctx, ["home"]))
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ 2294:
/***/ ((module) => {

module.exports = "/_next/static/images/comingSoon-03bde9af20ac8e3bee5aca4a5e45c74c.png";

/***/ }),

/***/ 8930:
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 5460:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next/serverSideTranslations");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [444], () => (__webpack_exec__(3914)));
module.exports = __webpack_exports__;

})();