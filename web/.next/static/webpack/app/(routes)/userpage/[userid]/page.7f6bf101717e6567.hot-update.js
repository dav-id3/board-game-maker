"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(routes)/userpage/[userid]/page",{

/***/ "(app-pages-browser)/./app/(routes)/userpage/[userid]/page.tsx":
/*!*************************************************!*\
  !*** ./app/(routes)/userpage/[userid]/page.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ IndexPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-draggable */ \"(app-pages-browser)/./node_modules/react-draggable/build/cjs/cjs.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n // The default\n\n\nfunction IndexPage(param) {\n    let {} = param;\n    _s();\n    const [pageState, setPageState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        activeDrags: 0,\n        deltaPosition: {\n            x: 0,\n            y: 0\n        },\n        controlledPosition: {\n            x: 0,\n            y: 0\n        },\n        defaultPosition: {\n            x: 0,\n            y: 0\n        }\n    });\n    const handleDrag = (e1, ui1)=>{\n        const { x, y } = pageState.deltaPosition;\n        setPageState((prevPageState)=>({\n                ...prevPageState,\n                deltaPosition: {\n                    x: x + ui1.deltaX,\n                    y: y + ui1.deltaY\n                }\n            }));\n    };\n    const onStart = ()=>{\n        setPageState((prevPageState)=>({\n                ...prevPageState,\n                activeDrags: ++prevPageState.activeDrags\n            }));\n    };\n    const onStop = ()=>{\n        setPageState((prevPageState)=>({\n                ...prevPageState,\n                activeDrags: --prevPageState.activeDrags\n            }));\n        updateDefaultPosition(e, ui);\n    };\n    const onDrop = (e1, ui1)=>{\n        setPageState((prevPageState)=>({\n                ...prevPageState,\n                activeDrags: --prevPageState.activeDrags\n            }));\n        if (e1.target.classList.contains(\"drop-target\")) {\n            alert(\"Dropped!\");\n            e1.target.classList.remove(\"hovered\");\n        }\n    };\n    const onDropAreaMouseEnter = (e1)=>{\n        if (pageState.activeDrags) {\n            e1.target.classList.add(\"hovered\");\n        }\n    };\n    const onDropAreaMouseLeave = (e1)=>{\n        e1.target.classList.remove(\"hovered\");\n    };\n    // For controlled component\n    const adjustXPos = (e1)=>{\n        e1.preventDefault();\n        e1.stopPropagation();\n        const { x, y } = pageState.controlledPosition;\n        setPageState((prevPageState)=>({\n                ...prevPageState,\n                controlledPosition: {\n                    x: x - 10,\n                    y\n                }\n            }));\n    };\n    const adjustYPos = (e1)=>{\n        e1.preventDefault();\n        e1.stopPropagation();\n        const { controlledPosition } = pageState;\n        const { x, y } = controlledPosition;\n        setPageState((prevPageState)=>({\n                ...prevPageState,\n                controlledPosition: {\n                    x,\n                    y: y - 10\n                }\n            }));\n    };\n    const onControlledDrag = (e1, position)=>{\n        const { x, y } = position;\n        setPageState((prevPageState)=>({\n                ...prevPageState,\n                controlledPosition: {\n                    x,\n                    y\n                }\n            }));\n    };\n    const onControlledDragStop = (e1, position)=>{\n        onControlledDrag(e1, position);\n        onStop();\n    };\n    const dragHandlers = {\n        onStart: onStart,\n        onStop: onStop\n    };\n    const { deltaPosition, controlledPosition, defaultPosition } = pageState;\n    const updateDefaultPosition = (e1, ui1)=>{\n        setPageState((prevPageState)=>({\n                ...prevPageState,\n                defaultPosition: {\n                    x: ui1.x,\n                    y: ui1.y\n                }\n            }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_draggable__WEBPACK_IMPORTED_MODULE_1___default()), {\n                defaultPosition: {\n                    x: 0,\n                    y: 0\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative rounded-2xl w-[160px] h-[160px] p-0.5 z-10 left-0 right-0 \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"rounded-[14px] w-full h-full bg-gray-50 border border-gray-300 flex flex-col items-center justify-center space-y-3 px-5\",\n                        children: \"I can be dragged anywhere\"\n                    }, void 0, false, {\n                        fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                        lineNumber: 133,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                    lineNumber: 132,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                lineNumber: 131,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_draggable__WEBPACK_IMPORTED_MODULE_1___default()), {\n                axis: \"x\",\n                defaultPosition: {\n                    x: 0,\n                    y: 0\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative rounded-2xl w-[160px] h-[160px] p-0.5 z-10 left-0 right-0 \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"rounded-[14px] w-full h-full bg-gray-50 border border-gray-300 flex flex-col items-center justify-center space-y-3 px-5\",\n                        children: \"I can only be dragged horizonally (x axis)\"\n                    }, void 0, false, {\n                        fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                        lineNumber: 140,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                    lineNumber: 139,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                lineNumber: 138,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_draggable__WEBPACK_IMPORTED_MODULE_1___default()), {\n                axis: \"y\",\n                defaultPosition: {\n                    x: 0,\n                    y: 0\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative rounded-2xl w-[160px] h-[160px] p-0.5 z-10 left-0 right-0 \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"rounded-[14px] w-full h-full bg-gray-50 border border-gray-300 flex flex-col items-center justify-center space-y-3 px-5\",\n                        children: \"I can only be dragged vertically (y axis)\"\n                    }, void 0, false, {\n                        fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                        lineNumber: 147,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                    lineNumber: 146,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                lineNumber: 145,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_draggable__WEBPACK_IMPORTED_MODULE_1___default()), {\n                onDrag: handleDrag,\n                onStop: onStop,\n                defaultPosition: {\n                    x: pageState.defaultPosition.x,\n                    y: pageState.defaultPosition.y\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative rounded-2xl w-[160px] h-[160px] p-0.5 z-10 left-0 right-0 \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"rounded-[14px] w-full h-full bg-gray-50 border border-gray-300 flex flex-col items-center justify-center space-y-3 px-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"I track my deltas\"\n                            }, void 0, false, {\n                                fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                                lineNumber: 162,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    \"x: \",\n                                    deltaPosition.x.toFixed(0),\n                                    \", y: \",\n                                    deltaPosition.y.toFixed(0)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                                lineNumber: 163,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    \"default x: \",\n                                    defaultPosition.x.toFixed(0),\n                                    \", default y:\",\n                                    \" \",\n                                    defaultPosition.y.toFixed(0)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                                lineNumber: 166,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                        lineNumber: 161,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                    lineNumber: 160,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                lineNumber: 152,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_draggable__WEBPACK_IMPORTED_MODULE_1___default()), {\n                handle: \"strong\",\n                ...dragHandlers,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative rounded-2xl w-[160px] h-[160px] p-0.5 z-10 left-0 right-0 \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"rounded-[14px] w-full h-full bg-gray-50 border border-gray-300 flex flex-col items-center justify-center space-y-3 px-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                className: \"text-white text-[13px] font-mono bg-black hover:bg-gray-700 transition-all rounded-md w-[100px] h-10 flex items-center justify-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: \"Drag here\"\n                                }, void 0, false, {\n                                    fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                                    lineNumber: 177,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                                lineNumber: 176,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"You must click my handle to drag me\"\n                            }, void 0, false, {\n                                fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                                lineNumber: 179,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                        lineNumber: 175,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                    lineNumber: 174,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                lineNumber: 173,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n        lineNumber: 130,\n        columnNumber: 5\n    }, this);\n}\n_s(IndexPage, \"dn6m1wxl25r3UGelm+1bn0mbVKM=\");\n_c = IndexPage;\nconst RemWrapper = (param)=>{\n    let { children, remBaseline = 16, style } = param;\n    const child = react__WEBPACK_IMPORTED_MODULE_2___default().Children.only(children);\n    const translateTransformToRem = function(transform) {\n        let remBaseline = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 16;\n        const convertedValues = transform.replace(\"translate(\", \"\").replace(\")\", \"\").split(\",\").map((px)=>px.replace(\"px\", \"\")).map((px)=>parseInt(px, 10) / remBaseline).map((x)=>\"\".concat(x, \"rem\"));\n        const [x, y] = convertedValues;\n        return \"translate(\".concat(x, \", \").concat(y, \")\");\n    };\n    const editedStyle = {\n        ...child.props.style,\n        ...style,\n        transform: translateTransformToRem(style.transform, remBaseline)\n    };\n    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().cloneElement(child, {\n        ...child.props,\n        style: editedStyle\n    });\n};\n_c1 = RemWrapper;\nvar _c, _c1;\n$RefreshReg$(_c, \"IndexPage\");\n$RefreshReg$(_c1, \"RemWrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocm91dGVzKS91c2VycGFnZS9bdXNlcmlkXS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVtRSxDQUFDLGNBQWM7QUFDakQ7QUFDc0I7QUFFeEMsU0FBU0csVUFBVSxLQUFNO1FBQU4sRUFBTSxHQUFOOztJQUNoQyxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0osK0NBQVFBLENBY3ZDO1FBQ0RLLGFBQWE7UUFDYkMsZUFBZTtZQUNiQyxHQUFHO1lBQ0hDLEdBQUc7UUFDTDtRQUNBQyxvQkFBb0I7WUFDbEJGLEdBQUc7WUFDSEMsR0FBRztRQUNMO1FBQ0FFLGlCQUFpQjtZQUNmSCxHQUFHO1lBQ0hDLEdBQUc7UUFDTDtJQUNGO0lBRUEsTUFBTUcsYUFBYSxDQUFDQyxJQUFHQztRQUNyQixNQUFNLEVBQUVOLENBQUMsRUFBRUMsQ0FBQyxFQUFFLEdBQUdMLFVBQVVHLGFBQWE7UUFDeENGLGFBQWEsQ0FBQ1UsZ0JBQW1CO2dCQUMvQixHQUFHQSxhQUFhO2dCQUNoQlIsZUFBZTtvQkFDYkMsR0FBR0EsSUFBSU0sSUFBR0UsTUFBTTtvQkFDaEJQLEdBQUdBLElBQUlLLElBQUdHLE1BQU07Z0JBQ2xCO1lBQ0Y7SUFDRjtJQUNBLE1BQU1DLFVBQVU7UUFDZGIsYUFBYSxDQUFDVSxnQkFBbUI7Z0JBQy9CLEdBQUdBLGFBQWE7Z0JBQ2hCVCxhQUFhLEVBQUVTLGNBQWNULFdBQVc7WUFDMUM7SUFDRjtJQUVBLE1BQU1hLFNBQVM7UUFDYmQsYUFBYSxDQUFDVSxnQkFBbUI7Z0JBQy9CLEdBQUdBLGFBQWE7Z0JBQ2hCVCxhQUFhLEVBQUVTLGNBQWNULFdBQVc7WUFDMUM7UUFDQWMsc0JBQXNCUCxHQUFHQztJQUMzQjtJQUNBLE1BQU1PLFNBQVMsQ0FBQ1IsSUFBR0M7UUFDakJULGFBQWEsQ0FBQ1UsZ0JBQW1CO2dCQUMvQixHQUFHQSxhQUFhO2dCQUNoQlQsYUFBYSxFQUFFUyxjQUFjVCxXQUFXO1lBQzFDO1FB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TUFBTSxLQUM3QkUsR0FBRyxDQUFDLENBQUNDLEtBQU9DLFNBQVNELElBQUksTUFBTVgsYUFDL0JVLEdBQUcsQ0FBQyxDQUFDakQsSUFBTSxHQUFLLE9BQUZBLEdBQUU7UUFDbkIsTUFBTSxDQUFDQSxHQUFHQyxFQUFFLEdBQUc2QztRQUVmLE9BQU8sYUFBbUI3QyxPQUFORCxHQUFFLE1BQU0sT0FBRkMsR0FBRTtJQUM5QjtJQUVBLE1BQU1tRCxjQUFjO1FBQ2xCLEdBQUdYLE1BQU1ZLEtBQUssQ0FBQ2IsS0FBSztRQUNwQixHQUFHQSxLQUFLO1FBQ1JLLFdBQVdELHdCQUF3QkosTUFBTUssU0FBUyxFQUFFTjtJQUN0RDtJQUVBLHFCQUFPN0MseURBQWtCLENBQUMrQyxPQUFPO1FBQy9CLEdBQUdBLE1BQU1ZLEtBQUs7UUFDZGIsT0FBT1k7SUFDVDtBQUNGO01BaENNZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKHJvdXRlcykvdXNlcnBhZ2UvW3VzZXJpZF0vcGFnZS50c3g/MGI5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IERyYWdnYWJsZSwgeyBEcmFnZ2FibGVFdmVudEhhbmRsZXIgfSBmcm9tIFwicmVhY3QtZHJhZ2dhYmxlXCI7IC8vIFRoZSBkZWZhdWx0XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSwgUmVhY3RFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4UGFnZSh7fToge30pIHtcbiAgY29uc3QgW3BhZ2VTdGF0ZSwgc2V0UGFnZVN0YXRlXSA9IHVzZVN0YXRlPHtcbiAgICBhY3RpdmVEcmFnczogbnVtYmVyO1xuICAgIGRlbHRhUG9zaXRpb246IHtcbiAgICAgIHg6IG51bWJlcjtcbiAgICAgIHk6IG51bWJlcjtcbiAgICB9O1xuICAgIGNvbnRyb2xsZWRQb3NpdGlvbjoge1xuICAgICAgeDogbnVtYmVyO1xuICAgICAgeTogbnVtYmVyO1xuICAgIH07XG4gICAgZGVmYXVsdFBvc2l0aW9uOiB7XG4gICAgICB4OiBudW1iZXI7XG4gICAgICB5OiBudW1iZXI7XG4gICAgfTtcbiAgfT4oe1xuICAgIGFjdGl2ZURyYWdzOiAwLFxuICAgIGRlbHRhUG9zaXRpb246IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgIH0sXG4gICAgY29udHJvbGxlZFBvc2l0aW9uOiB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMCxcbiAgICB9LFxuICAgIGRlZmF1bHRQb3NpdGlvbjoge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlRHJhZyA9IChlLCB1aSkgPT4ge1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gcGFnZVN0YXRlLmRlbHRhUG9zaXRpb247XG4gICAgc2V0UGFnZVN0YXRlKChwcmV2UGFnZVN0YXRlKSA9PiAoe1xuICAgICAgLi4ucHJldlBhZ2VTdGF0ZSxcbiAgICAgIGRlbHRhUG9zaXRpb246IHtcbiAgICAgICAgeDogeCArIHVpLmRlbHRhWCxcbiAgICAgICAgeTogeSArIHVpLmRlbHRhWSxcbiAgICAgIH0sXG4gICAgfSkpO1xuICB9O1xuICBjb25zdCBvblN0YXJ0ID0gKCkgPT4ge1xuICAgIHNldFBhZ2VTdGF0ZSgocHJldlBhZ2VTdGF0ZSkgPT4gKHtcbiAgICAgIC4uLnByZXZQYWdlU3RhdGUsXG4gICAgICBhY3RpdmVEcmFnczogKytwcmV2UGFnZVN0YXRlLmFjdGl2ZURyYWdzLFxuICAgIH0pKTtcbiAgfTtcblxuICBjb25zdCBvblN0b3AgPSAoKSA9PiB7XG4gICAgc2V0UGFnZVN0YXRlKChwcmV2UGFnZVN0YXRlKSA9PiAoe1xuICAgICAgLi4ucHJldlBhZ2VTdGF0ZSxcbiAgICAgIGFjdGl2ZURyYWdzOiAtLXByZXZQYWdlU3RhdGUuYWN0aXZlRHJhZ3MsXG4gICAgfSkpO1xuICAgIHVwZGF0ZURlZmF1bHRQb3NpdGlvbihlLCB1aSk7XG4gIH07XG4gIGNvbnN0IG9uRHJvcCA9IChlLCB1aSkgPT4ge1xuICAgIHNldFBhZ2VTdGF0ZSgocHJldlBhZ2VTdGF0ZSkgPT4gKHtcbiAgICAgIC4uLnByZXZQYWdlU3RhdGUsXG4gICAgICBhY3RpdmVEcmFnczogLS1wcmV2UGFnZVN0YXRlLmFjdGl2ZURyYWdzLFxuICAgIH0pKTtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJvcC10YXJnZXRcIikpIHtcbiAgICAgIGFsZXJ0KFwiRHJvcHBlZCFcIik7XG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJlZFwiKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IG9uRHJvcEFyZWFNb3VzZUVudGVyID0gKGUpID0+IHtcbiAgICBpZiAocGFnZVN0YXRlLmFjdGl2ZURyYWdzKSB7XG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiaG92ZXJlZFwiKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IG9uRHJvcEFyZWFNb3VzZUxlYXZlID0gKGUpID0+IHtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJlZFwiKTtcbiAgfTtcblxuICAvLyBGb3IgY29udHJvbGxlZCBjb21wb25lbnRcbiAgY29uc3QgYWRqdXN0WFBvcyA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCB7IHgsIHkgfSA9IHBhZ2VTdGF0ZS5jb250cm9sbGVkUG9zaXRpb247XG4gICAgc2V0UGFnZVN0YXRlKChwcmV2UGFnZVN0YXRlKSA9PiAoe1xuICAgICAgLi4ucHJldlBhZ2VTdGF0ZSxcbiAgICAgIGNvbnRyb2xsZWRQb3NpdGlvbjogeyB4OiB4IC0gMTAsIHkgfSxcbiAgICB9KSk7XG4gIH07XG5cbiAgY29uc3QgYWRqdXN0WVBvcyA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgeyBjb250cm9sbGVkUG9zaXRpb24gfSA9IHBhZ2VTdGF0ZTtcbiAgICBjb25zdCB7IHgsIHkgfSA9IGNvbnRyb2xsZWRQb3NpdGlvbjtcbiAgICBzZXRQYWdlU3RhdGUoKHByZXZQYWdlU3RhdGUpID0+ICh7XG4gICAgICAuLi5wcmV2UGFnZVN0YXRlLFxuICAgICAgY29udHJvbGxlZFBvc2l0aW9uOiB7IHgsIHk6IHkgLSAxMCB9LFxuICAgIH0pKTtcbiAgfTtcblxuICBjb25zdCBvbkNvbnRyb2xsZWREcmFnID0gKGUsIHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3QgeyB4LCB5IH0gPSBwb3NpdGlvbjtcbiAgICBzZXRQYWdlU3RhdGUoKHByZXZQYWdlU3RhdGUpID0+ICh7XG4gICAgICAuLi5wcmV2UGFnZVN0YXRlLFxuICAgICAgY29udHJvbGxlZFBvc2l0aW9uOiB7IHgsIHkgfSxcbiAgICB9KSk7XG4gIH07XG5cbiAgY29uc3Qgb25Db250cm9sbGVkRHJhZ1N0b3AgPSAoZSwgcG9zaXRpb24pID0+IHtcbiAgICBvbkNvbnRyb2xsZWREcmFnKGUsIHBvc2l0aW9uKTtcbiAgICBvblN0b3AoKTtcbiAgfTtcbiAgY29uc3QgZHJhZ0hhbmRsZXJzID0geyBvblN0YXJ0OiBvblN0YXJ0LCBvblN0b3A6IG9uU3RvcCB9O1xuICBjb25zdCB7IGRlbHRhUG9zaXRpb24sIGNvbnRyb2xsZWRQb3NpdGlvbiwgZGVmYXVsdFBvc2l0aW9uIH0gPSBwYWdlU3RhdGU7XG5cbiAgY29uc3QgdXBkYXRlRGVmYXVsdFBvc2l0aW9uID0gKGUsIHVpKSA9PiB7XG4gICAgc2V0UGFnZVN0YXRlKChwcmV2UGFnZVN0YXRlKSA9PiAoe1xuICAgICAgLi4ucHJldlBhZ2VTdGF0ZSxcbiAgICAgIGRlZmF1bHRQb3NpdGlvbjoge1xuICAgICAgICB4OiB1aS54LFxuICAgICAgICB5OiB1aS55LFxuICAgICAgfSxcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPERyYWdnYWJsZSBkZWZhdWx0UG9zaXRpb249e3sgeDogMCwgeTogMCB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSByb3VuZGVkLTJ4bCB3LVsxNjBweF0gaC1bMTYwcHhdIHAtMC41IHotMTAgbGVmdC0wIHJpZ2h0LTAgXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLVsxNHB4XSB3LWZ1bGwgaC1mdWxsIGJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzcGFjZS15LTMgcHgtNVwiPlxuICAgICAgICAgICAgSSBjYW4gYmUgZHJhZ2dlZCBhbnl3aGVyZVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRHJhZ2dhYmxlPlxuICAgICAgPERyYWdnYWJsZSBheGlzPVwieFwiIGRlZmF1bHRQb3NpdGlvbj17eyB4OiAwLCB5OiAwIH19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHJvdW5kZWQtMnhsIHctWzE2MHB4XSBoLVsxNjBweF0gcC0wLjUgei0xMCBsZWZ0LTAgcmlnaHQtMCBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtWzE0cHhdIHctZnVsbCBoLWZ1bGwgYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNwYWNlLXktMyBweC01XCI+XG4gICAgICAgICAgICBJIGNhbiBvbmx5IGJlIGRyYWdnZWQgaG9yaXpvbmFsbHkgKHggYXhpcylcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0RyYWdnYWJsZT5cbiAgICAgIDxEcmFnZ2FibGUgYXhpcz1cInlcIiBkZWZhdWx0UG9zaXRpb249e3sgeDogMCwgeTogMCB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSByb3VuZGVkLTJ4bCB3LVsxNjBweF0gaC1bMTYwcHhdIHAtMC41IHotMTAgbGVmdC0wIHJpZ2h0LTAgXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLVsxNHB4XSB3LWZ1bGwgaC1mdWxsIGJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzcGFjZS15LTMgcHgtNVwiPlxuICAgICAgICAgICAgSSBjYW4gb25seSBiZSBkcmFnZ2VkIHZlcnRpY2FsbHkgKHkgYXhpcylcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0RyYWdnYWJsZT5cbiAgICAgIDxEcmFnZ2FibGVcbiAgICAgICAgb25EcmFnPXtoYW5kbGVEcmFnfVxuICAgICAgICBvblN0b3A9e29uU3RvcH1cbiAgICAgICAgZGVmYXVsdFBvc2l0aW9uPXt7XG4gICAgICAgICAgeDogcGFnZVN0YXRlLmRlZmF1bHRQb3NpdGlvbi54LFxuICAgICAgICAgIHk6IHBhZ2VTdGF0ZS5kZWZhdWx0UG9zaXRpb24ueSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSByb3VuZGVkLTJ4bCB3LVsxNjBweF0gaC1bMTYwcHhdIHAtMC41IHotMTAgbGVmdC0wIHJpZ2h0LTAgXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLVsxNHB4XSB3LWZ1bGwgaC1mdWxsIGJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzcGFjZS15LTMgcHgtNVwiPlxuICAgICAgICAgICAgPGRpdj5JIHRyYWNrIG15IGRlbHRhczwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgeDoge2RlbHRhUG9zaXRpb24ueC50b0ZpeGVkKDApfSwgeToge2RlbHRhUG9zaXRpb24ueS50b0ZpeGVkKDApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICBkZWZhdWx0IHg6IHtkZWZhdWx0UG9zaXRpb24ueC50b0ZpeGVkKDApfSwgZGVmYXVsdCB5OntcIiBcIn1cbiAgICAgICAgICAgICAge2RlZmF1bHRQb3NpdGlvbi55LnRvRml4ZWQoMCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0RyYWdnYWJsZT5cbiAgICAgIDxEcmFnZ2FibGUgaGFuZGxlPVwic3Ryb25nXCIgey4uLmRyYWdIYW5kbGVyc30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgcm91bmRlZC0yeGwgdy1bMTYwcHhdIGgtWzE2MHB4XSBwLTAuNSB6LTEwIGxlZnQtMCByaWdodC0wIFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1bMTRweF0gdy1mdWxsIGgtZnVsbCBiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc3BhY2UteS0zIHB4LTVcIj5cbiAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LVsxM3B4XSBmb250LW1vbm8gYmctYmxhY2sgaG92ZXI6YmctZ3JheS03MDAgdHJhbnNpdGlvbi1hbGwgcm91bmRlZC1tZCB3LVsxMDBweF0gaC0xMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8ZGl2PkRyYWcgaGVyZTwvZGl2PlxuICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICA8ZGl2PllvdSBtdXN0IGNsaWNrIG15IGhhbmRsZSB0byBkcmFnIG1lPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9EcmFnZ2FibGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmludGVyZmFjZSBSZW1XcmFwcGVyUHJvcHMge1xuICBzdHlsZToge1xuICAgIHRyYW5zZm9ybTogc3RyaW5nO1xuICB9O1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xuICByZW1CYXNlbGluZT86IG51bWJlcjtcbn1cblxuY29uc3QgUmVtV3JhcHBlcjogUmVhY3QuRkM8UmVtV3JhcHBlclByb3BzPiA9ICh7XG4gIGNoaWxkcmVuLFxuICByZW1CYXNlbGluZSA9IDE2LFxuICBzdHlsZSxcbn06IFJlbVdyYXBwZXJQcm9wcykgPT4ge1xuICBjb25zdCBjaGlsZCA9IFJlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pIGFzIFJlYWN0RWxlbWVudDtcbiAgY29uc3QgdHJhbnNsYXRlVHJhbnNmb3JtVG9SZW0gPSAoXG4gICAgdHJhbnNmb3JtOiBzdHJpbmcsXG4gICAgcmVtQmFzZWxpbmU6IG51bWJlciA9IDE2XG4gICk6IHN0cmluZyA9PiB7XG4gICAgY29uc3QgY29udmVydGVkVmFsdWVzID0gdHJhbnNmb3JtXG4gICAgICAucmVwbGFjZShcInRyYW5zbGF0ZShcIiwgXCJcIilcbiAgICAgIC5yZXBsYWNlKFwiKVwiLCBcIlwiKVxuICAgICAgLnNwbGl0KFwiLFwiKVxuICAgICAgLm1hcCgocHgpID0+IHB4LnJlcGxhY2UoXCJweFwiLCBcIlwiKSlcbiAgICAgIC5tYXAoKHB4KSA9PiBwYXJzZUludChweCwgMTApIC8gcmVtQmFzZWxpbmUpXG4gICAgICAubWFwKCh4KSA9PiBgJHt4fXJlbWApO1xuICAgIGNvbnN0IFt4LCB5XSA9IGNvbnZlcnRlZFZhbHVlcztcblxuICAgIHJldHVybiBgdHJhbnNsYXRlKCR7eH0sICR7eX0pYDtcbiAgfTtcblxuICBjb25zdCBlZGl0ZWRTdHlsZSA9IHtcbiAgICAuLi5jaGlsZC5wcm9wcy5zdHlsZSxcbiAgICAuLi5zdHlsZSxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVRyYW5zZm9ybVRvUmVtKHN0eWxlLnRyYW5zZm9ybSwgcmVtQmFzZWxpbmUpLFxuICB9O1xuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAuLi5jaGlsZC5wcm9wcyxcbiAgICBzdHlsZTogZWRpdGVkU3R5bGUsXG4gIH0pO1xufTtcbiJdLCJuYW1lcyI6WyJEcmFnZ2FibGUiLCJ1c2VTdGF0ZSIsIlJlYWN0IiwiSW5kZXhQYWdlIiwicGFnZVN0YXRlIiwic2V0UGFnZVN0YXRlIiwiYWN0aXZlRHJhZ3MiLCJkZWx0YVBvc2l0aW9uIiwieCIsInkiLCJjb250cm9sbGVkUG9zaXRpb24iLCJkZWZhdWx0UG9zaXRpb24iLCJoYW5kbGVEcmFnIiwiZSIsInVpIiwicHJldlBhZ2VTdGF0ZSIsImRlbHRhWCIsImRlbHRhWSIsIm9uU3RhcnQiLCJvblN0b3AiLCJ1cGRhdGVEZWZhdWx0UG9zaXRpb24iLCJvbkRyb3AiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImFsZXJ0IiwicmVtb3ZlIiwib25Ecm9wQXJlYU1vdXNlRW50ZXIiLCJhZGQiLCJvbkRyb3BBcmVhTW91c2VMZWF2ZSIsImFkanVzdFhQb3MiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImFkanVzdFlQb3MiLCJvbkNvbnRyb2xsZWREcmFnIiwicG9zaXRpb24iLCJvbkNvbnRyb2xsZWREcmFnU3RvcCIsImRyYWdIYW5kbGVycyIsImRpdiIsImNsYXNzTmFtZSIsImF4aXMiLCJvbkRyYWciLCJ0b0ZpeGVkIiwiaGFuZGxlIiwic3Ryb25nIiwiUmVtV3JhcHBlciIsImNoaWxkcmVuIiwicmVtQmFzZWxpbmUiLCJzdHlsZSIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwidHJhbnNsYXRlVHJhbnNmb3JtVG9SZW0iLCJ0cmFuc2Zvcm0iLCJjb252ZXJ0ZWRWYWx1ZXMiLCJyZXBsYWNlIiwic3BsaXQiLCJtYXAiLCJweCIsInBhcnNlSW50IiwiZWRpdGVkU3R5bGUiLCJwcm9wcyIsImNsb25lRWxlbWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(routes)/userpage/[userid]/page.tsx\n"));

/***/ })

});