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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ IndexPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-draggable */ \"(app-pages-browser)/./node_modules/react-draggable/build/cjs/cjs.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n // The default\n\n\nfunction IndexPage(param) {\n    let {} = param;\n    _s();\n    const [pageState, setPageState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        activeDrags: 0,\n        deltaPosition: {\n            x: 0,\n            y: 0\n        },\n        defaultPosition: {\n            x: 0,\n            y: 0\n        }\n    });\n    const handleDrag = (e, ui)=>{\n        const { x, y } = pageState.deltaPosition;\n        setPageState((prevPageState)=>({\n                ...prevPageState,\n                deltaPosition: {\n                    x: x + ui.deltaX,\n                    y: y + ui.deltaY\n                }\n            }));\n    };\n    const onStart = ()=>{\n        setPageState((prevPageState)=>({\n                ...prevPageState,\n                activeDrags: ++prevPageState.activeDrags\n            }));\n    };\n    const onStop = ()=>{\n        setPageState((prevPageState)=>({\n                ...prevPageState,\n                activeDrags: --prevPageState.activeDrags\n            }));\n    };\n    const onDrop = (e, ui)=>{\n        setPageState((prevPageState)=>({\n                ...prevPageState,\n                activeDrags: --prevPageState.activeDrags\n            }));\n        updateDefaultPosition(e, ui);\n        if (e.target.classList.contains(\"drop-target\")) {\n            alert(\"Dropped!\");\n            e.target.classList.remove(\"hovered\");\n        }\n    };\n    const onDropAreaMouseEnter = (e)=>{\n        if (pageState.activeDrags) {\n            e.target.classList.add(\"hovered\");\n        }\n    };\n    const onDropAreaMouseLeave = (e)=>{\n        e.target.classList.remove(\"hovered\");\n    };\n    // For controlled component\n    const adjustXPos = (e)=>{\n        e.preventDefault();\n        e.stopPropagation();\n        const { x, y } = pageState.controlledPosition;\n        setPageState((prevPageState)=>({\n                ...prevPageState,\n                controlledPosition: {\n                    x: x - 10,\n                    y\n                }\n            }));\n    };\n    const adjustYPos = (e)=>{\n        e.preventDefault();\n        e.stopPropagation();\n        const { controlledPosition } = pageState;\n        const { x, y } = controlledPosition;\n        setPageState((prevPageState)=>({\n                ...prevPageState,\n                controlledPosition: {\n                    x,\n                    y: y - 10\n                }\n            }));\n    };\n    const onControlledDrag = (e, position)=>{\n        const { x, y } = position;\n        setPageState((prevPageState)=>({\n                ...prevPageState,\n                controlledPosition: {\n                    x,\n                    y\n                }\n            }));\n    };\n    const onControlledDragStop = (e, position)=>{\n        onControlledDrag(e, position);\n        onStop();\n    };\n    const dragHandlers = {\n        onStart: onStart,\n        onStop: onStop\n    };\n    const { deltaPosition, controlledPosition, defaultPosition } = pageState;\n    const updateDefaultPosition = (e, ui)=>{\n        setPageState((prevPageState)=>({\n                ...prevPageState,\n                defaultPosition: {\n                    x: ui.x,\n                    y: ui.y\n                }\n            }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_draggable__WEBPACK_IMPORTED_MODULE_1___default()), {\n                defaultPosition: {\n                    x: 0,\n                    y: 0\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative rounded-2xl w-[160px] h-[160px] p-0.5 z-10 left-0 right-0 \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"rounded-[14px] w-full h-full bg-gray-50 border border-gray-300 flex flex-col items-center justify-center space-y-3 px-5\",\n                        children: \"I can be dragged anywhere\"\n                    }, void 0, false, {\n                        fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                        lineNumber: 126,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                    lineNumber: 125,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                lineNumber: 124,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_draggable__WEBPACK_IMPORTED_MODULE_1___default()), {\n                axis: \"x\",\n                defaultPosition: {\n                    x: 0,\n                    y: 0\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative rounded-2xl w-[160px] h-[160px] p-0.5 z-10 left-0 right-0 \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"rounded-[14px] w-full h-full bg-gray-50 border border-gray-300 flex flex-col items-center justify-center space-y-3 px-5\",\n                        children: \"I can only be dragged horizonally (x axis)\"\n                    }, void 0, false, {\n                        fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                        lineNumber: 133,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                    lineNumber: 132,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                lineNumber: 131,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_draggable__WEBPACK_IMPORTED_MODULE_1___default()), {\n                axis: \"y\",\n                defaultPosition: {\n                    x: 0,\n                    y: 0\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative rounded-2xl w-[160px] h-[160px] p-0.5 z-10 left-0 right-0 \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"rounded-[14px] w-full h-full bg-gray-50 border border-gray-300 flex flex-col items-center justify-center space-y-3 px-5\",\n                        children: \"I can only be dragged vertically (y axis)\"\n                    }, void 0, false, {\n                        fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                        lineNumber: 140,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                    lineNumber: 139,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                lineNumber: 138,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_draggable__WEBPACK_IMPORTED_MODULE_1___default()), {\n                onDrag: handleDrag,\n                defaultPosition: {\n                    x: pageState.defaultPosition.x,\n                    y: pageState.defaultPosition.y\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative rounded-2xl w-[160px] h-[160px] p-0.5 z-10 left-0 right-0 \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"rounded-[14px] w-full h-full bg-gray-50 border border-gray-300 flex flex-col items-center justify-center space-y-3 px-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"I track my deltas\"\n                            }, void 0, false, {\n                                fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                                lineNumber: 154,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    \"x: \",\n                                    deltaPosition.x.toFixed(0),\n                                    \", y: \",\n                                    deltaPosition.y.toFixed(0)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                                lineNumber: 155,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    \"defalut x: \",\n                                    Position.x.toFixed(0),\n                                    \", y:\",\n                                    \" \",\n                                    deltaPosition.y.toFixed(0)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                                lineNumber: 158,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                        lineNumber: 153,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                    lineNumber: 152,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                lineNumber: 145,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_draggable__WEBPACK_IMPORTED_MODULE_1___default()), {\n                handle: \"strong\",\n                ...dragHandlers,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative rounded-2xl w-[160px] h-[160px] p-0.5 z-10 left-0 right-0 \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"rounded-[14px] w-full h-full bg-gray-50 border border-gray-300 flex flex-col items-center justify-center space-y-3 px-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                className: \"text-white text-[13px] font-mono bg-black hover:bg-gray-700 transition-all rounded-md w-[100px] h-10 flex items-center justify-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: \"Drag here\"\n                                }, void 0, false, {\n                                    fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                                    lineNumber: 169,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                                lineNumber: 168,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"You must click my handle to drag me\"\n                            }, void 0, false, {\n                                fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                                lineNumber: 171,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                        lineNumber: 167,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                    lineNumber: 166,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                lineNumber: 165,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n        lineNumber: 123,\n        columnNumber: 5\n    }, this);\n}\n_s(IndexPage, \"bHrCn52itxsAp6PYOetqTMXlgmU=\");\n_c = IndexPage;\nconst RemWrapper = (param)=>{\n    let { children, remBaseline = 16, style } = param;\n    const child = react__WEBPACK_IMPORTED_MODULE_2___default().Children.only(children);\n    const translateTransformToRem = function(transform) {\n        let remBaseline = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 16;\n        const convertedValues = transform.replace(\"translate(\", \"\").replace(\")\", \"\").split(\",\").map((px)=>px.replace(\"px\", \"\")).map((px)=>parseInt(px, 10) / remBaseline).map((x)=>\"\".concat(x, \"rem\"));\n        const [x, y] = convertedValues;\n        return \"translate(\".concat(x, \", \").concat(y, \")\");\n    };\n    const editedStyle = {\n        ...child.props.style,\n        ...style,\n        transform: translateTransformToRem(style.transform, remBaseline)\n    };\n    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().cloneElement(child, {\n        ...child.props,\n        style: editedStyle\n    });\n};\n_c1 = RemWrapper;\nvar _c, _c1;\n$RefreshReg$(_c, \"IndexPage\");\n$RefreshReg$(_c1, \"RemWrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocm91dGVzKS91c2VycGFnZS9bdXNlcmlkXS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVtRSxDQUFDLGNBQWM7QUFDakQ7QUFDc0I7QUFFeEMsU0FBU0csVUFBVSxLQUFNO1FBQU4sRUFBTSxHQUFOOztJQUNoQyxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0osK0NBQVFBLENBVXZDO1FBQ0RLLGFBQWE7UUFDYkMsZUFBZTtZQUNiQyxHQUFHO1lBQ0hDLEdBQUc7UUFDTDtRQUNBQyxpQkFBaUI7WUFDZkYsR0FBRztZQUNIQyxHQUFHO1FBQ0w7SUFDRjtJQUVBLE1BQU1FLGFBQWEsQ0FBQ0MsR0FBR0M7UUFDckIsTUFBTSxFQUFFTCxDQUFDLEVBQUVDLENBQUMsRUFBRSxHQUFHTCxVQUFVRyxhQUFhO1FBQ3hDRixhQUFhLENBQUNTLGdCQUFtQjtnQkFDL0IsR0FBR0EsYUFBYTtnQkFDaEJQLGVBQWU7b0JBQ2JDLEdBQUdBLElBQUlLLEdBQUdFLE1BQU07b0JBQ2hCTixHQUFHQSxJQUFJSSxHQUFHRyxNQUFNO2dCQUNsQjtZQUNGO0lBQ0Y7SUFDQSxNQUFNQyxVQUFVO1FBQ2RaLGFBQWEsQ0FBQ1MsZ0JBQW1CO2dCQUMvQixHQUFHQSxhQUFhO2dCQUNoQlIsYUFBYSxFQUFFUSxjQUFjUixXQUFXO1lBQzFDO0lBQ0Y7SUFFQSxNQUFNWSxTQUFTO1FBQ2JiLGFBQWEsQ0FBQ1MsZ0JBQW1CO2dCQUMvQixHQUFHQSxhQUFhO2dCQUNoQlIsYUFBYSxFQUFFUSxjQUFjUixXQUFXO1lBQzFDO0lBQ0Y7SUFDQSxNQUFNYSxTQUFTLENBQUNQLEdBQUdDO1FBQ2pCUixhQUFhLENBQUNTLGdCQUFtQjtnQkFDL0IsR0FBR0EsYUFBYTtnQkFDaEJSLGFBQWEsRUFBRVEsY0FBY1IsV0FBVztZQUMxQztRQUNBYyxzQkFBc0JSLEdBQUdDO1FBRXpCLElBQUlELEVBQUVTLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDQyxRQUFR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QUFNWCxhQUMvQlUsR0FBRyxDQUFDLENBQUNsRCxJQUFNLEdBQUssT0FBRkEsR0FBRTtRQUNuQixNQUFNLENBQUNBLEdBQUdDLEVBQUUsR0FBRzhDO1FBRWYsT0FBTyxhQUFtQjlDLE9BQU5ELEdBQUUsTUFBTSxPQUFGQyxHQUFFO0lBQzlCO0lBRUEsTUFBTW9ELGNBQWM7UUFDbEIsR0FBR1gsTUFBTVksS0FBSyxDQUFDYixLQUFLO1FBQ3BCLEdBQUdBLEtBQUs7UUFDUkssV0FBV0Qsd0JBQXdCSixNQUFNSyxTQUFTLEVBQUVOO0lBQ3REO0lBRUEscUJBQU85Qyx5REFBa0IsQ0FBQ2dELE9BQU87UUFDL0IsR0FBR0EsTUFBTVksS0FBSztRQUNkYixPQUFPWTtJQUNUO0FBQ0Y7TUFoQ01mIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8ocm91dGVzKS91c2VycGFnZS9bdXNlcmlkXS9wYWdlLnRzeD8wYjlhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgRHJhZ2dhYmxlLCB7IERyYWdnYWJsZUV2ZW50SGFuZGxlciB9IGZyb20gXCJyZWFjdC1kcmFnZ2FibGVcIjsgLy8gVGhlIGRlZmF1bHRcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlLCBSZWFjdEVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXhQYWdlKHt9OiB7fSkge1xuICBjb25zdCBbcGFnZVN0YXRlLCBzZXRQYWdlU3RhdGVdID0gdXNlU3RhdGU8e1xuICAgIGFjdGl2ZURyYWdzOiBudW1iZXI7XG4gICAgZGVsdGFQb3NpdGlvbjoge1xuICAgICAgeDogbnVtYmVyO1xuICAgICAgeTogbnVtYmVyO1xuICAgIH07XG4gICAgZGVmYXVsdFBvc2l0aW9uOiB7XG4gICAgICB4OiBudW1iZXI7XG4gICAgICB5OiBudW1iZXI7XG4gICAgfTtcbiAgfT4oe1xuICAgIGFjdGl2ZURyYWdzOiAwLFxuICAgIGRlbHRhUG9zaXRpb246IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgIH0sXG4gICAgZGVmYXVsdFBvc2l0aW9uOiB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMCxcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBoYW5kbGVEcmFnID0gKGUsIHVpKSA9PiB7XG4gICAgY29uc3QgeyB4LCB5IH0gPSBwYWdlU3RhdGUuZGVsdGFQb3NpdGlvbjtcbiAgICBzZXRQYWdlU3RhdGUoKHByZXZQYWdlU3RhdGUpID0+ICh7XG4gICAgICAuLi5wcmV2UGFnZVN0YXRlLFxuICAgICAgZGVsdGFQb3NpdGlvbjoge1xuICAgICAgICB4OiB4ICsgdWkuZGVsdGFYLFxuICAgICAgICB5OiB5ICsgdWkuZGVsdGFZLFxuICAgICAgfSxcbiAgICB9KSk7XG4gIH07XG4gIGNvbnN0IG9uU3RhcnQgPSAoKSA9PiB7XG4gICAgc2V0UGFnZVN0YXRlKChwcmV2UGFnZVN0YXRlKSA9PiAoe1xuICAgICAgLi4ucHJldlBhZ2VTdGF0ZSxcbiAgICAgIGFjdGl2ZURyYWdzOiArK3ByZXZQYWdlU3RhdGUuYWN0aXZlRHJhZ3MsXG4gICAgfSkpO1xuICB9O1xuXG4gIGNvbnN0IG9uU3RvcCA9ICgpID0+IHtcbiAgICBzZXRQYWdlU3RhdGUoKHByZXZQYWdlU3RhdGUpID0+ICh7XG4gICAgICAuLi5wcmV2UGFnZVN0YXRlLFxuICAgICAgYWN0aXZlRHJhZ3M6IC0tcHJldlBhZ2VTdGF0ZS5hY3RpdmVEcmFncyxcbiAgICB9KSk7XG4gIH07XG4gIGNvbnN0IG9uRHJvcCA9IChlLCB1aSkgPT4ge1xuICAgIHNldFBhZ2VTdGF0ZSgocHJldlBhZ2VTdGF0ZSkgPT4gKHtcbiAgICAgIC4uLnByZXZQYWdlU3RhdGUsXG4gICAgICBhY3RpdmVEcmFnczogLS1wcmV2UGFnZVN0YXRlLmFjdGl2ZURyYWdzLFxuICAgIH0pKTtcbiAgICB1cGRhdGVEZWZhdWx0UG9zaXRpb24oZSwgdWkpO1xuXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRyb3AtdGFyZ2V0XCIpKSB7XG4gICAgICBhbGVydChcIkRyb3BwZWQhXCIpO1xuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImhvdmVyZWRcIik7XG4gICAgfVxuICB9O1xuICBjb25zdCBvbkRyb3BBcmVhTW91c2VFbnRlciA9IChlKSA9PiB7XG4gICAgaWYgKHBhZ2VTdGF0ZS5hY3RpdmVEcmFncykge1xuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImhvdmVyZWRcIik7XG4gICAgfVxuICB9O1xuICBjb25zdCBvbkRyb3BBcmVhTW91c2VMZWF2ZSA9IChlKSA9PiB7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImhvdmVyZWRcIik7XG4gIH07XG5cbiAgLy8gRm9yIGNvbnRyb2xsZWQgY29tcG9uZW50XG4gIGNvbnN0IGFkanVzdFhQb3MgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgeyB4LCB5IH0gPSBwYWdlU3RhdGUuY29udHJvbGxlZFBvc2l0aW9uO1xuICAgIHNldFBhZ2VTdGF0ZSgocHJldlBhZ2VTdGF0ZSkgPT4gKHtcbiAgICAgIC4uLnByZXZQYWdlU3RhdGUsXG4gICAgICBjb250cm9sbGVkUG9zaXRpb246IHsgeDogeCAtIDEwLCB5IH0sXG4gICAgfSkpO1xuICB9O1xuXG4gIGNvbnN0IGFkanVzdFlQb3MgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IHsgY29udHJvbGxlZFBvc2l0aW9uIH0gPSBwYWdlU3RhdGU7XG4gICAgY29uc3QgeyB4LCB5IH0gPSBjb250cm9sbGVkUG9zaXRpb247XG4gICAgc2V0UGFnZVN0YXRlKChwcmV2UGFnZVN0YXRlKSA9PiAoe1xuICAgICAgLi4ucHJldlBhZ2VTdGF0ZSxcbiAgICAgIGNvbnRyb2xsZWRQb3NpdGlvbjogeyB4LCB5OiB5IC0gMTAgfSxcbiAgICB9KSk7XG4gIH07XG5cbiAgY29uc3Qgb25Db250cm9sbGVkRHJhZyA9IChlLCBwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gcG9zaXRpb247XG4gICAgc2V0UGFnZVN0YXRlKChwcmV2UGFnZVN0YXRlKSA9PiAoe1xuICAgICAgLi4ucHJldlBhZ2VTdGF0ZSxcbiAgICAgIGNvbnRyb2xsZWRQb3NpdGlvbjogeyB4LCB5IH0sXG4gICAgfSkpO1xuICB9O1xuXG4gIGNvbnN0IG9uQ29udHJvbGxlZERyYWdTdG9wID0gKGUsIHBvc2l0aW9uKSA9PiB7XG4gICAgb25Db250cm9sbGVkRHJhZyhlLCBwb3NpdGlvbik7XG4gICAgb25TdG9wKCk7XG4gIH07XG4gIGNvbnN0IGRyYWdIYW5kbGVycyA9IHsgb25TdGFydDogb25TdGFydCwgb25TdG9wOiBvblN0b3AgfTtcbiAgY29uc3QgeyBkZWx0YVBvc2l0aW9uLCBjb250cm9sbGVkUG9zaXRpb24sIGRlZmF1bHRQb3NpdGlvbiB9ID0gcGFnZVN0YXRlO1xuXG4gIGNvbnN0IHVwZGF0ZURlZmF1bHRQb3NpdGlvbiA9IChlLCB1aSkgPT4ge1xuICAgIHNldFBhZ2VTdGF0ZSgocHJldlBhZ2VTdGF0ZSkgPT4gKHtcbiAgICAgIC4uLnByZXZQYWdlU3RhdGUsXG4gICAgICBkZWZhdWx0UG9zaXRpb246IHtcbiAgICAgICAgeDogdWkueCxcbiAgICAgICAgeTogdWkueSxcbiAgICAgIH0sXG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxEcmFnZ2FibGUgZGVmYXVsdFBvc2l0aW9uPXt7IHg6IDAsIHk6IDAgfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgcm91bmRlZC0yeGwgdy1bMTYwcHhdIGgtWzE2MHB4XSBwLTAuNSB6LTEwIGxlZnQtMCByaWdodC0wIFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1bMTRweF0gdy1mdWxsIGgtZnVsbCBiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc3BhY2UteS0zIHB4LTVcIj5cbiAgICAgICAgICAgIEkgY2FuIGJlIGRyYWdnZWQgYW55d2hlcmVcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0RyYWdnYWJsZT5cbiAgICAgIDxEcmFnZ2FibGUgYXhpcz1cInhcIiBkZWZhdWx0UG9zaXRpb249e3sgeDogMCwgeTogMCB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSByb3VuZGVkLTJ4bCB3LVsxNjBweF0gaC1bMTYwcHhdIHAtMC41IHotMTAgbGVmdC0wIHJpZ2h0LTAgXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLVsxNHB4XSB3LWZ1bGwgaC1mdWxsIGJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzcGFjZS15LTMgcHgtNVwiPlxuICAgICAgICAgICAgSSBjYW4gb25seSBiZSBkcmFnZ2VkIGhvcml6b25hbGx5ICh4IGF4aXMpXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9EcmFnZ2FibGU+XG4gICAgICA8RHJhZ2dhYmxlIGF4aXM9XCJ5XCIgZGVmYXVsdFBvc2l0aW9uPXt7IHg6IDAsIHk6IDAgfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgcm91bmRlZC0yeGwgdy1bMTYwcHhdIGgtWzE2MHB4XSBwLTAuNSB6LTEwIGxlZnQtMCByaWdodC0wIFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1bMTRweF0gdy1mdWxsIGgtZnVsbCBiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc3BhY2UteS0zIHB4LTVcIj5cbiAgICAgICAgICAgIEkgY2FuIG9ubHkgYmUgZHJhZ2dlZCB2ZXJ0aWNhbGx5ICh5IGF4aXMpXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9EcmFnZ2FibGU+XG4gICAgICA8RHJhZ2dhYmxlXG4gICAgICAgIG9uRHJhZz17aGFuZGxlRHJhZ31cbiAgICAgICAgZGVmYXVsdFBvc2l0aW9uPXt7XG4gICAgICAgICAgeDogcGFnZVN0YXRlLmRlZmF1bHRQb3NpdGlvbi54LFxuICAgICAgICAgIHk6IHBhZ2VTdGF0ZS5kZWZhdWx0UG9zaXRpb24ueSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSByb3VuZGVkLTJ4bCB3LVsxNjBweF0gaC1bMTYwcHhdIHAtMC41IHotMTAgbGVmdC0wIHJpZ2h0LTAgXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLVsxNHB4XSB3LWZ1bGwgaC1mdWxsIGJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzcGFjZS15LTMgcHgtNVwiPlxuICAgICAgICAgICAgPGRpdj5JIHRyYWNrIG15IGRlbHRhczwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgeDoge2RlbHRhUG9zaXRpb24ueC50b0ZpeGVkKDApfSwgeToge2RlbHRhUG9zaXRpb24ueS50b0ZpeGVkKDApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICBkZWZhbHV0IHg6IHtQb3NpdGlvbi54LnRvRml4ZWQoMCl9LCB5OntcIiBcIn1cbiAgICAgICAgICAgICAge2RlbHRhUG9zaXRpb24ueS50b0ZpeGVkKDApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9EcmFnZ2FibGU+XG4gICAgICA8RHJhZ2dhYmxlIGhhbmRsZT1cInN0cm9uZ1wiIHsuLi5kcmFnSGFuZGxlcnN9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHJvdW5kZWQtMnhsIHctWzE2MHB4XSBoLVsxNjBweF0gcC0wLjUgei0xMCBsZWZ0LTAgcmlnaHQtMCBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtWzE0cHhdIHctZnVsbCBoLWZ1bGwgYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNwYWNlLXktMyBweC01XCI+XG4gICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1bMTNweF0gZm9udC1tb25vIGJnLWJsYWNrIGhvdmVyOmJnLWdyYXktNzAwIHRyYW5zaXRpb24tYWxsIHJvdW5kZWQtbWQgdy1bMTAwcHhdIGgtMTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdj5EcmFnIGhlcmU8L2Rpdj5cbiAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgPGRpdj5Zb3UgbXVzdCBjbGljayBteSBoYW5kbGUgdG8gZHJhZyBtZTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRHJhZ2dhYmxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5pbnRlcmZhY2UgUmVtV3JhcHBlclByb3BzIHtcbiAgc3R5bGU6IHtcbiAgICB0cmFuc2Zvcm06IHN0cmluZztcbiAgfTtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbiAgcmVtQmFzZWxpbmU/OiBudW1iZXI7XG59XG5cbmNvbnN0IFJlbVdyYXBwZXI6IFJlYWN0LkZDPFJlbVdyYXBwZXJQcm9wcz4gPSAoe1xuICBjaGlsZHJlbixcbiAgcmVtQmFzZWxpbmUgPSAxNixcbiAgc3R5bGUsXG59OiBSZW1XcmFwcGVyUHJvcHMpID0+IHtcbiAgY29uc3QgY2hpbGQgPSBSZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKSBhcyBSZWFjdEVsZW1lbnQ7XG4gIGNvbnN0IHRyYW5zbGF0ZVRyYW5zZm9ybVRvUmVtID0gKFxuICAgIHRyYW5zZm9ybTogc3RyaW5nLFxuICAgIHJlbUJhc2VsaW5lOiBudW1iZXIgPSAxNlxuICApOiBzdHJpbmcgPT4ge1xuICAgIGNvbnN0IGNvbnZlcnRlZFZhbHVlcyA9IHRyYW5zZm9ybVxuICAgICAgLnJlcGxhY2UoXCJ0cmFuc2xhdGUoXCIsIFwiXCIpXG4gICAgICAucmVwbGFjZShcIilcIiwgXCJcIilcbiAgICAgIC5zcGxpdChcIixcIilcbiAgICAgIC5tYXAoKHB4KSA9PiBweC5yZXBsYWNlKFwicHhcIiwgXCJcIikpXG4gICAgICAubWFwKChweCkgPT4gcGFyc2VJbnQocHgsIDEwKSAvIHJlbUJhc2VsaW5lKVxuICAgICAgLm1hcCgoeCkgPT4gYCR7eH1yZW1gKTtcbiAgICBjb25zdCBbeCwgeV0gPSBjb252ZXJ0ZWRWYWx1ZXM7XG5cbiAgICByZXR1cm4gYHRyYW5zbGF0ZSgke3h9LCAke3l9KWA7XG4gIH07XG5cbiAgY29uc3QgZWRpdGVkU3R5bGUgPSB7XG4gICAgLi4uY2hpbGQucHJvcHMuc3R5bGUsXG4gICAgLi4uc3R5bGUsXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVUcmFuc2Zvcm1Ub1JlbShzdHlsZS50cmFuc2Zvcm0sIHJlbUJhc2VsaW5lKSxcbiAgfTtcblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgLi4uY2hpbGQucHJvcHMsXG4gICAgc3R5bGU6IGVkaXRlZFN0eWxlLFxuICB9KTtcbn07XG4iXSwibmFtZXMiOlsiRHJhZ2dhYmxlIiwidXNlU3RhdGUiLCJSZWFjdCIsIkluZGV4UGFnZSIsInBhZ2VTdGF0ZSIsInNldFBhZ2VTdGF0ZSIsImFjdGl2ZURyYWdzIiwiZGVsdGFQb3NpdGlvbiIsIngiLCJ5IiwiZGVmYXVsdFBvc2l0aW9uIiwiaGFuZGxlRHJhZyIsImUiLCJ1aSIsInByZXZQYWdlU3RhdGUiLCJkZWx0YVgiLCJkZWx0YVkiLCJvblN0YXJ0Iiwib25TdG9wIiwib25Ecm9wIiwidXBkYXRlRGVmYXVsdFBvc2l0aW9uIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJhbGVydCIsInJlbW92ZSIsIm9uRHJvcEFyZWFNb3VzZUVudGVyIiwiYWRkIiwib25Ecm9wQXJlYU1vdXNlTGVhdmUiLCJhZGp1c3RYUG9zIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJjb250cm9sbGVkUG9zaXRpb24iLCJhZGp1c3RZUG9zIiwib25Db250cm9sbGVkRHJhZyIsInBvc2l0aW9uIiwib25Db250cm9sbGVkRHJhZ1N0b3AiLCJkcmFnSGFuZGxlcnMiLCJkaXYiLCJjbGFzc05hbWUiLCJheGlzIiwib25EcmFnIiwidG9GaXhlZCIsIlBvc2l0aW9uIiwiaGFuZGxlIiwic3Ryb25nIiwiUmVtV3JhcHBlciIsImNoaWxkcmVuIiwicmVtQmFzZWxpbmUiLCJzdHlsZSIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwidHJhbnNsYXRlVHJhbnNmb3JtVG9SZW0iLCJ0cmFuc2Zvcm0iLCJjb252ZXJ0ZWRWYWx1ZXMiLCJyZXBsYWNlIiwic3BsaXQiLCJtYXAiLCJweCIsInBhcnNlSW50IiwiZWRpdGVkU3R5bGUiLCJwcm9wcyIsImNsb25lRWxlbWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(routes)/userpage/[userid]/page.tsx\n"));

/***/ })

});