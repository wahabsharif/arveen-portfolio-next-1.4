"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/AnimatedText.js":
/*!****************************************!*\
  !*** ./src/components/AnimatedText.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\n\nconst qoute = {\n    initial: {\n        opacity: 0\n    },\n    animate: {\n        opacity: 1,\n        tansition: {\n            delay: 0.5,\n            s\n        }\n    }\n};\nconst singleWord = {\n    initial: {\n        opacity: 0,\n        y: 50\n    },\n    animate: {\n        opacity: 1,\n        y: 0,\n        tansition: {\n            duration: 1\n        }\n    }\n};\nconst AnimatedText = (param)=>{\n    let { text , className =\"\"  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full mx-auto py-2 flex items-center justify-center text-center   overflow:hidden\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.h1, {\n            className: \"inline-block w-full text-dark font-bold capitalize text-8xl \".concat(className),\n            variants: qoute,\n            initial: \"initial\",\n            animate: \"animate\",\n            children: text.split(\" \").map((word, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {\n                    className: \"inline-block \",\n                    variants: singleWord,\n                    initial: \"initial\",\n                    animate: \"animate\",\n                    children: [\n                        word,\n                        \"\\xa0\"\n                    ]\n                }, word + \"-\" + index, true, {\n                    fileName: \"D:\\\\portfolio-arveen\\\\arveen-portfolio-next-1.4\\\\src\\\\components\\\\AnimatedText.js\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"D:\\\\portfolio-arveen\\\\arveen-portfolio-next-1.4\\\\src\\\\components\\\\AnimatedText.js\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\portfolio-arveen\\\\arveen-portfolio-next-1.4\\\\src\\\\components\\\\AnimatedText.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_c = AnimatedText;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnimatedText);\nvar _c;\n$RefreshReg$(_c, \"AnimatedText\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BbmltYXRlZFRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQjtBQUNhO0FBRXZDLE1BQU1FLFFBQVE7SUFDWkMsU0FBUztRQUNQQyxTQUFTO0lBQ1g7SUFDQUMsU0FBUztRQUNQRCxTQUFTO1FBQ1RFLFdBQVc7WUFDVEMsT0FBTztZQUNQQztRQUNGO0lBQ0Y7QUFDRjtBQUNBLE1BQU1DLGFBQWE7SUFDakJOLFNBQVM7UUFDUEMsU0FBUztRQUNUTSxHQUFHO0lBQ0w7SUFDQUwsU0FBUztRQUNQRCxTQUFTO1FBQ1RNLEdBQUc7UUFDSEosV0FBVztZQUNUSyxVQUFVO1FBQ1o7SUFDRjtBQUNGO0FBRUEsTUFBTUMsZUFBZSxTQUE4QjtRQUE3QixFQUFFQyxLQUFJLEVBQUVDLFdBQVksR0FBRSxFQUFFO0lBQzVDLHFCQUNFLDhEQUFDQztRQUNDRCxXQUFVO2tCQUVWLDRFQUFDYixvREFBUztZQUNSYSxXQUFXLCtEQUF5RSxPQUFWQTtZQUMxRUcsVUFBVWY7WUFDVkMsU0FBUTtZQUNSRSxTQUFRO3NCQUNQUSxLQUFLSyxLQUFLLENBQUMsS0FBS0MsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUMxQiw4REFBQ3BCLHNEQUFXO29CQUVWYSxXQUFVO29CQUNWRyxVQUFVUjtvQkFDVk4sU0FBUTtvQkFDUkUsU0FBUTs7d0JBQ1BlO3dCQUFLOzttQkFMREEsT0FBTyxNQUFNQzs7Ozs7Ozs7Ozs7Ozs7O0FBVzlCO0tBdkJNVDtBQXlCTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BbmltYXRlZFRleHQuanM/NGMxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcblxyXG5jb25zdCBxb3V0ZSA9IHtcclxuICBpbml0aWFsOiB7XHJcbiAgICBvcGFjaXR5OiAwLFxyXG4gIH0sXHJcbiAgYW5pbWF0ZToge1xyXG4gICAgb3BhY2l0eTogMSxcclxuICAgIHRhbnNpdGlvbjoge1xyXG4gICAgICBkZWxheTogMC41LFxyXG4gICAgICBzXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbmNvbnN0IHNpbmdsZVdvcmQgPSB7XHJcbiAgaW5pdGlhbDoge1xyXG4gICAgb3BhY2l0eTogMCxcclxuICAgIHk6IDUwLFxyXG4gIH0sXHJcbiAgYW5pbWF0ZToge1xyXG4gICAgb3BhY2l0eTogMSxcclxuICAgIHk6IDAsXHJcbiAgICB0YW5zaXRpb246IHtcclxuICAgICAgZHVyYXRpb246IDEsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBBbmltYXRlZFRleHQgPSAoeyB0ZXh0LCBjbGFzc05hbWUgPSBcIlwiIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgbXgtYXV0byBweS0yIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtY2VudGVyXHJcbiAgICBvdmVyZmxvdzpoaWRkZW5cIj5cclxuICAgICAgPG1vdGlvbi5oMVxyXG4gICAgICAgIGNsYXNzTmFtZT17YGlubGluZS1ibG9jayB3LWZ1bGwgdGV4dC1kYXJrIGZvbnQtYm9sZCBjYXBpdGFsaXplIHRleHQtOHhsICR7Y2xhc3NOYW1lfWB9XHJcbiAgICAgICAgdmFyaWFudHM9e3FvdXRlfVxyXG4gICAgICAgIGluaXRpYWw9XCJpbml0aWFsXCJcclxuICAgICAgICBhbmltYXRlPVwiYW5pbWF0ZVwiPlxyXG4gICAgICAgIHt0ZXh0LnNwbGl0KFwiIFwiKS5tYXAoKHdvcmQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8bW90aW9uLnNwYW5cclxuICAgICAgICAgICAga2V5PXt3b3JkICsgXCItXCIgKyBpbmRleH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIFwiXHJcbiAgICAgICAgICAgIHZhcmlhbnRzPXtzaW5nbGVXb3JkfVxyXG4gICAgICAgICAgICBpbml0aWFsPVwiaW5pdGlhbFwiXHJcbiAgICAgICAgICAgIGFuaW1hdGU9XCJhbmltYXRlXCI+XHJcbiAgICAgICAgICAgIHt3b3JkfSZuYnNwO1xyXG4gICAgICAgICAgPC9tb3Rpb24uc3Bhbj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9tb3Rpb24uaDE+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0ZWRUZXh0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJtb3Rpb24iLCJxb3V0ZSIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRhbnNpdGlvbiIsImRlbGF5IiwicyIsInNpbmdsZVdvcmQiLCJ5IiwiZHVyYXRpb24iLCJBbmltYXRlZFRleHQiLCJ0ZXh0IiwiY2xhc3NOYW1lIiwiZGl2IiwiaDEiLCJ2YXJpYW50cyIsInNwbGl0IiwibWFwIiwid29yZCIsImluZGV4Iiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/AnimatedText.js\n"));

/***/ })

});