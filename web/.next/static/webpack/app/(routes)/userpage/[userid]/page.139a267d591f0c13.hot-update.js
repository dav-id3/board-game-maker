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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ IndexPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-draggable */ \"(app-pages-browser)/./node_modules/react-draggable/build/cjs/cjs.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n // The default\n\n\nfunction IndexPage(param) {\n    let {} = param;\n    _s();\n    const [pageState, setPageState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        activeDrags: 0,\n        deltaPosition: {\n            x: 0,\n            y: 0\n        },\n        controlledPosition: {\n            x: -400,\n            y: 200\n        }\n    });\n    const handleDrag = (e, ui)=>{\n        const { x, y } = pageState.deltaPosition;\n        setPageState((prevPageState)=>({\n                ...prevPageState,\n                deltaPosition: {\n                    x: x + ui.deltaX,\n                    y: y + ui.deltaY\n                }\n            }));\n    };\n    const onStart = ()=>{\n        setPageState((prevPageState)=>({\n                ...prevPageState,\n                activeDrags: ++prevPageState.activeDrags\n            }));\n    };\n    const onStop = ()=>{\n        setPageState((prevPageState)=>({\n                ...prevPageState,\n                activeDrags: --prevPageState.activeDrags\n            }));\n    };\n    const onDrop = (e)=>{\n        setPageState((prevPageState)=>({\n                ...prevPageState,\n                activeDrags: --prevPageState.activeDrags\n            }));\n        if (e.target.classList.contains(\"drop-target\")) {\n            alert(\"Dropped!\");\n            e.target.classList.remove(\"hovered\");\n        }\n    };\n    const onDropAreaMouseEnter = (e)=>{\n        if (pageState.activeDrags) {\n            e.target.classList.add(\"hovered\");\n        }\n    };\n    const onDropAreaMouseLeave = (e)=>{\n        e.target.classList.remove(\"hovered\");\n    };\n    // For controlled component\n    const adjustXPos = (e)=>{\n        e.preventDefault();\n        e.stopPropagation();\n        const { x, y } = pageState.controlledPosition;\n        setPageState((prevPageState)=>({\n                ...prevPageState,\n                controlledPosition: {\n                    x: x - 10,\n                    y\n                }\n            }));\n    };\n    const adjustYPos = (e)=>{\n        e.preventDefault();\n        e.stopPropagation();\n        const { controlledPosition } = pageState;\n        const { x, y } = controlledPosition;\n        setPageState((prevPageState)=>({\n                ...prevPageState,\n                controlledPosition: {\n                    x,\n                    y: y - 10\n                }\n            }));\n    };\n    const onControlledDrag = (e, position)=>{\n        const { x, y } = position;\n        setPageState((prevPageState)=>({\n                ...prevPageState,\n                controlledPosition: {\n                    x,\n                    y\n                }\n            }));\n    };\n    const onControlledDragStop = (e, position)=>{\n        onControlledDrag(e, position);\n        onStop();\n    };\n    const dragHandlers = {\n        onStart: onStart,\n        onStop: onStop\n    };\n    const { deltaPosition, controlledPosition } = pageState;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_draggable__WEBPACK_IMPORTED_MODULE_1___default()), {\n                ...dragHandlers,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-indigo-700 font-semibold text-white py-2 px-4 rounded\",\n                    children: \"I can be dragged anywhere\"\n                }, void 0, false, {\n                    fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                    lineNumber: 113,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_draggable__WEBPACK_IMPORTED_MODULE_1___default()), {\n                axis: \"x\",\n                ...dragHandlers,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"box cursor-x\",\n                    children: \"I can only be dragged horizonally (x axis)\"\n                }, void 0, false, {\n                    fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                    lineNumber: 118,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                lineNumber: 117,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_draggable__WEBPACK_IMPORTED_MODULE_1___default()), {\n                axis: \"y\",\n                ...dragHandlers,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"box cursor-y\",\n                    children: \"I can only be dragged vertically (y axis)\"\n                }, void 0, false, {\n                    fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                    lineNumber: 123,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_draggable__WEBPACK_IMPORTED_MODULE_1___default()), {\n                onStart: ()=>false,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"box\",\n                    children: \"I don't want to be dragged\"\n                }, void 0, false, {\n                    fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                    lineNumber: 128,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                lineNumber: 127,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_draggable__WEBPACK_IMPORTED_MODULE_1___default()), {\n                onDrag: handleDrag,\n                ...dragHandlers,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"box\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: \"I track my deltas\"\n                        }, void 0, false, {\n                            fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                            lineNumber: 132,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"x: \",\n                                deltaPosition.x.toFixed(0),\n                                \", y: \",\n                                deltaPosition.y.toFixed(0)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                            lineNumber: 133,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                    lineNumber: 131,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                lineNumber: 130,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_draggable__WEBPACK_IMPORTED_MODULE_1___default()), {\n                handle: \"strong\",\n                ...dragHandlers,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"box no-cursor\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            className: \"cursor\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"Drag here\"\n                            }, void 0, false, {\n                                fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                                lineNumber: 141,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                            lineNumber: 140,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: \"You must click my handle to drag me\"\n                        }, void 0, false, {\n                            fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                            lineNumber: 143,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                    lineNumber: 139,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n                lineNumber: 138,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/usr/src/web/app/(routes)/userpage/[userid]/page.tsx\",\n        lineNumber: 111,\n        columnNumber: 5\n    }, this);\n}\n_s(IndexPage, \"vvpiLsdU9a8s+BJGc3/szXl7beA=\");\n_c = IndexPage;\nconst RemWrapper = (param)=>{\n    let { children, remBaseline = 16, style } = param;\n    const child = react__WEBPACK_IMPORTED_MODULE_2___default().Children.only(children);\n    const translateTransformToRem = function(transform) {\n        let remBaseline = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 16;\n        const convertedValues = transform.replace(\"translate(\", \"\").replace(\")\", \"\").split(\",\").map((px)=>px.replace(\"px\", \"\")).map((px)=>parseInt(px, 10) / remBaseline).map((x)=>\"\".concat(x, \"rem\"));\n        const [x, y] = convertedValues;\n        return \"translate(\".concat(x, \", \").concat(y, \")\");\n    };\n    const editedStyle = {\n        ...child.props.style,\n        ...style,\n        transform: translateTransformToRem(style.transform, remBaseline)\n    };\n    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().cloneElement(child, {\n        ...child.props,\n        style: editedStyle\n    });\n};\n_c1 = RemWrapper;\nvar _c, _c1;\n$RefreshReg$(_c, \"IndexPage\");\n$RefreshReg$(_c1, \"RemWrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocm91dGVzKS91c2VycGFnZS9bdXNlcmlkXS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVtRSxDQUFDLGNBQWM7QUFDakQ7QUFDc0I7QUFFeEMsU0FBU0csVUFBVSxLQUFNO1FBQU4sRUFBTSxHQUFOOztJQUNoQyxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0osK0NBQVFBLENBVXZDO1FBQ0RLLGFBQWE7UUFDYkMsZUFBZTtZQUNiQyxHQUFHO1lBQ0hDLEdBQUc7UUFDTDtRQUNBQyxvQkFBb0I7WUFDbEJGLEdBQUcsQ0FBQztZQUNKQyxHQUFHO1FBQ0w7SUFDRjtJQUVBLE1BQU1FLGFBQWEsQ0FBQ0MsR0FBR0M7UUFDckIsTUFBTSxFQUFFTCxDQUFDLEVBQUVDLENBQUMsRUFBRSxHQUFHTCxVQUFVRyxhQUFhO1FBQ3hDRixhQUFhLENBQUNTLGdCQUFtQjtnQkFDL0IsR0FBR0EsYUFBYTtnQkFDaEJQLGVBQWU7b0JBQ2JDLEdBQUdBLElBQUlLLEdBQUdFLE1BQU07b0JBQ2hCTixHQUFHQSxJQUFJSSxHQUFHRyxNQUFNO2dCQUNsQjtZQUNGO0lBQ0Y7SUFDQSxNQUFNQyxVQUFVO1FBQ2RaLGFBQWEsQ0FBQ1MsZ0JBQW1CO2dCQUMvQixHQUFHQSxhQUFhO2dCQUNoQlIsYUFBYSxFQUFFUSxjQUFjUixXQUFXO1lBQzFDO0lBQ0Y7SUFFQSxNQUFNWSxTQUFTO1FBQ2JiLGFBQWEsQ0FBQ1MsZ0JBQW1CO2dCQUMvQixHQUFHQSxhQUFhO2dCQUNoQlIsYUFBYSxFQUFFUSxjQUFjUixXQUFXO1lBQzFDO0lBQ0Y7SUFDQSxNQUFNYSxTQUFTLENBQUNQO1FBQ2RQLGFBQWEsQ0FBQ1MsZ0JBQW1CO2dCQUMvQixHQUFHQSxhQUFhO2dCQUNoQlIsYUFBYSxFQUFFUSxjQUFjUixXQUFXO1lBQzFDO1FBQ0EsSUFBSU0sRUFBRVEsTUFBTSxDQUFDQyxTQUFTLENBQUNDLFFBQVEsQ0FBQyxnQkFBZ0I7WUFDOUNDLE1B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Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtmO0dBN0l3QmpDO0tBQUFBO0FBdUp4QixNQUFNd0MsYUFBd0M7UUFBQyxFQUM3Q0MsUUFBUSxFQUNSQyxjQUFjLEVBQUUsRUFDaEJDLEtBQUssRUFDVztJQUNoQixNQUFNQyxRQUFRN0MscURBQWMsQ0FBQytDLElBQUksQ0FBQ0w7SUFDbEMsTUFBTU0sMEJBQTBCLFNBQzlCQztZQUNBTiwrRUFBc0I7UUFFdEIsTUFBTU8sa0JBQWtCRCxVQUNyQkUsT0FBTyxDQUFDLGNBQWMsSUFDdEJBLE9BQU8sQ0FBQyxLQUFLLElBQ2JDLEtBQUssQ0FBQyxLQUNOQyxHQUFHLENBQUMsQ0FBQ0MsS0FBT0EsR0FBR0gsT0FBTyxDQUFDLE1BQU0sS0FDN0JFLEdBQUcsQ0FBQyxDQUFDQyxLQUFPQyxTQUFTRCxJQUFJLE1BQU1YLGFBQy9CVSxHQUFHLENBQUMsQ0FBQy9DLElBQU0sR0FBSyxPQUFGQSxHQUFFO1FBQ25CLE1BQU0sQ0FBQ0EsR0FBR0MsRUFBRSxHQUFHMkM7UUFFZixPQUFPLGFBQW1CM0MsT0FBTkQsR0FBRSxNQUFNLE9BQUZDLEdBQUU7SUFDOUI7SUFFQSxNQUFNaUQsY0FBYztRQUNsQixHQUFHWCxNQUFNWSxLQUFLLENBQUNiLEtBQUs7UUFDcEIsR0FBR0EsS0FBSztRQUNSSyxXQUFXRCx3QkFBd0JKLE1BQU1LLFNBQVMsRUFBRU47SUFDdEQ7SUFFQSxxQkFBTzNDLHlEQUFrQixDQUFDNkMsT0FBTztRQUMvQixHQUFHQSxNQUFNWSxLQUFLO1FBQ2RiLE9BQU9ZO0lBQ1Q7QUFDRjtNQWhDTWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwLyhyb3V0ZXMpL3VzZXJwYWdlL1t1c2VyaWRdL3BhZ2UudHN4PzBiOWEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBEcmFnZ2FibGUsIHsgRHJhZ2dhYmxlRXZlbnRIYW5kbGVyIH0gZnJvbSBcInJlYWN0LWRyYWdnYWJsZVwiOyAvLyBUaGUgZGVmYXVsdFxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUsIFJlYWN0RWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleFBhZ2Uoe306IHt9KSB7XG4gIGNvbnN0IFtwYWdlU3RhdGUsIHNldFBhZ2VTdGF0ZV0gPSB1c2VTdGF0ZTx7XG4gICAgYWN0aXZlRHJhZ3M6IG51bWJlcjtcbiAgICBkZWx0YVBvc2l0aW9uOiB7XG4gICAgICB4OiBudW1iZXI7XG4gICAgICB5OiBudW1iZXI7XG4gICAgfTtcbiAgICBjb250cm9sbGVkUG9zaXRpb246IHtcbiAgICAgIHg6IG51bWJlcjtcbiAgICAgIHk6IG51bWJlcjtcbiAgICB9O1xuICB9Pih7XG4gICAgYWN0aXZlRHJhZ3M6IDAsXG4gICAgZGVsdGFQb3NpdGlvbjoge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgfSxcbiAgICBjb250cm9sbGVkUG9zaXRpb246IHtcbiAgICAgIHg6IC00MDAsXG4gICAgICB5OiAyMDAsXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlRHJhZyA9IChlLCB1aSkgPT4ge1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gcGFnZVN0YXRlLmRlbHRhUG9zaXRpb247XG4gICAgc2V0UGFnZVN0YXRlKChwcmV2UGFnZVN0YXRlKSA9PiAoe1xuICAgICAgLi4ucHJldlBhZ2VTdGF0ZSxcbiAgICAgIGRlbHRhUG9zaXRpb246IHtcbiAgICAgICAgeDogeCArIHVpLmRlbHRhWCxcbiAgICAgICAgeTogeSArIHVpLmRlbHRhWSxcbiAgICAgIH0sXG4gICAgfSkpO1xuICB9O1xuICBjb25zdCBvblN0YXJ0ID0gKCkgPT4ge1xuICAgIHNldFBhZ2VTdGF0ZSgocHJldlBhZ2VTdGF0ZSkgPT4gKHtcbiAgICAgIC4uLnByZXZQYWdlU3RhdGUsXG4gICAgICBhY3RpdmVEcmFnczogKytwcmV2UGFnZVN0YXRlLmFjdGl2ZURyYWdzLFxuICAgIH0pKTtcbiAgfTtcblxuICBjb25zdCBvblN0b3AgPSAoKSA9PiB7XG4gICAgc2V0UGFnZVN0YXRlKChwcmV2UGFnZVN0YXRlKSA9PiAoe1xuICAgICAgLi4ucHJldlBhZ2VTdGF0ZSxcbiAgICAgIGFjdGl2ZURyYWdzOiAtLXByZXZQYWdlU3RhdGUuYWN0aXZlRHJhZ3MsXG4gICAgfSkpO1xuICB9O1xuICBjb25zdCBvbkRyb3AgPSAoZSkgPT4ge1xuICAgIHNldFBhZ2VTdGF0ZSgocHJldlBhZ2VTdGF0ZSkgPT4gKHtcbiAgICAgIC4uLnByZXZQYWdlU3RhdGUsXG4gICAgICBhY3RpdmVEcmFnczogLS1wcmV2UGFnZVN0YXRlLmFjdGl2ZURyYWdzLFxuICAgIH0pKTtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJvcC10YXJnZXRcIikpIHtcbiAgICAgIGFsZXJ0KFwiRHJvcHBlZCFcIik7XG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJlZFwiKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IG9uRHJvcEFyZWFNb3VzZUVudGVyID0gKGUpID0+IHtcbiAgICBpZiAocGFnZVN0YXRlLmFjdGl2ZURyYWdzKSB7XG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiaG92ZXJlZFwiKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IG9uRHJvcEFyZWFNb3VzZUxlYXZlID0gKGUpID0+IHtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJlZFwiKTtcbiAgfTtcblxuICAvLyBGb3IgY29udHJvbGxlZCBjb21wb25lbnRcbiAgY29uc3QgYWRqdXN0WFBvcyA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCB7IHgsIHkgfSA9IHBhZ2VTdGF0ZS5jb250cm9sbGVkUG9zaXRpb247XG4gICAgc2V0UGFnZVN0YXRlKChwcmV2UGFnZVN0YXRlKSA9PiAoe1xuICAgICAgLi4ucHJldlBhZ2VTdGF0ZSxcbiAgICAgIGNvbnRyb2xsZWRQb3NpdGlvbjogeyB4OiB4IC0gMTAsIHkgfSxcbiAgICB9KSk7XG4gIH07XG5cbiAgY29uc3QgYWRqdXN0WVBvcyA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgeyBjb250cm9sbGVkUG9zaXRpb24gfSA9IHBhZ2VTdGF0ZTtcbiAgICBjb25zdCB7IHgsIHkgfSA9IGNvbnRyb2xsZWRQb3NpdGlvbjtcbiAgICBzZXRQYWdlU3RhdGUoKHByZXZQYWdlU3RhdGUpID0+ICh7XG4gICAgICAuLi5wcmV2UGFnZVN0YXRlLFxuICAgICAgY29udHJvbGxlZFBvc2l0aW9uOiB7IHgsIHk6IHkgLSAxMCB9LFxuICAgIH0pKTtcbiAgfTtcblxuICBjb25zdCBvbkNvbnRyb2xsZWREcmFnID0gKGUsIHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3QgeyB4LCB5IH0gPSBwb3NpdGlvbjtcbiAgICBzZXRQYWdlU3RhdGUoKHByZXZQYWdlU3RhdGUpID0+ICh7XG4gICAgICAuLi5wcmV2UGFnZVN0YXRlLFxuICAgICAgY29udHJvbGxlZFBvc2l0aW9uOiB7IHgsIHkgfSxcbiAgICB9KSk7XG4gIH07XG5cbiAgY29uc3Qgb25Db250cm9sbGVkRHJhZ1N0b3AgPSAoZSwgcG9zaXRpb24pID0+IHtcbiAgICBvbkNvbnRyb2xsZWREcmFnKGUsIHBvc2l0aW9uKTtcbiAgICBvblN0b3AoKTtcbiAgfTtcbiAgY29uc3QgZHJhZ0hhbmRsZXJzID0geyBvblN0YXJ0OiBvblN0YXJ0LCBvblN0b3A6IG9uU3RvcCB9O1xuICBjb25zdCB7IGRlbHRhUG9zaXRpb24sIGNvbnRyb2xsZWRQb3NpdGlvbiB9ID0gcGFnZVN0YXRlO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxEcmFnZ2FibGUgey4uLmRyYWdIYW5kbGVyc30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctaW5kaWdvLTcwMCBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgcHktMiBweC00IHJvdW5kZWRcIj5cbiAgICAgICAgICBJIGNhbiBiZSBkcmFnZ2VkIGFueXdoZXJlXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9EcmFnZ2FibGU+XG4gICAgICA8RHJhZ2dhYmxlIGF4aXM9XCJ4XCIgey4uLmRyYWdIYW5kbGVyc30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94IGN1cnNvci14XCI+XG4gICAgICAgICAgSSBjYW4gb25seSBiZSBkcmFnZ2VkIGhvcml6b25hbGx5ICh4IGF4aXMpXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9EcmFnZ2FibGU+XG4gICAgICA8RHJhZ2dhYmxlIGF4aXM9XCJ5XCIgey4uLmRyYWdIYW5kbGVyc30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94IGN1cnNvci15XCI+XG4gICAgICAgICAgSSBjYW4gb25seSBiZSBkcmFnZ2VkIHZlcnRpY2FsbHkgKHkgYXhpcylcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0RyYWdnYWJsZT5cbiAgICAgIDxEcmFnZ2FibGUgb25TdGFydD17KCkgPT4gZmFsc2V9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPkkgZG9uJ3Qgd2FudCB0byBiZSBkcmFnZ2VkPC9kaXY+XG4gICAgICA8L0RyYWdnYWJsZT5cbiAgICAgIDxEcmFnZ2FibGUgb25EcmFnPXtoYW5kbGVEcmFnfSB7Li4uZHJhZ0hhbmRsZXJzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cbiAgICAgICAgICA8ZGl2PkkgdHJhY2sgbXkgZGVsdGFzPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHg6IHtkZWx0YVBvc2l0aW9uLngudG9GaXhlZCgwKX0sIHk6IHtkZWx0YVBvc2l0aW9uLnkudG9GaXhlZCgwKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0RyYWdnYWJsZT5cbiAgICAgIDxEcmFnZ2FibGUgaGFuZGxlPVwic3Ryb25nXCIgey4uLmRyYWdIYW5kbGVyc30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94IG5vLWN1cnNvclwiPlxuICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwiY3Vyc29yXCI+XG4gICAgICAgICAgICA8ZGl2PkRyYWcgaGVyZTwvZGl2PlxuICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgIDxkaXY+WW91IG11c3QgY2xpY2sgbXkgaGFuZGxlIHRvIGRyYWcgbWU8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0RyYWdnYWJsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuaW50ZXJmYWNlIFJlbVdyYXBwZXJQcm9wcyB7XG4gIHN0eWxlOiB7XG4gICAgdHJhbnNmb3JtOiBzdHJpbmc7XG4gIH07XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG4gIHJlbUJhc2VsaW5lPzogbnVtYmVyO1xufVxuXG5jb25zdCBSZW1XcmFwcGVyOiBSZWFjdC5GQzxSZW1XcmFwcGVyUHJvcHM+ID0gKHtcbiAgY2hpbGRyZW4sXG4gIHJlbUJhc2VsaW5lID0gMTYsXG4gIHN0eWxlLFxufTogUmVtV3JhcHBlclByb3BzKSA9PiB7XG4gIGNvbnN0IGNoaWxkID0gUmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbikgYXMgUmVhY3RFbGVtZW50O1xuICBjb25zdCB0cmFuc2xhdGVUcmFuc2Zvcm1Ub1JlbSA9IChcbiAgICB0cmFuc2Zvcm06IHN0cmluZyxcbiAgICByZW1CYXNlbGluZTogbnVtYmVyID0gMTZcbiAgKTogc3RyaW5nID0+IHtcbiAgICBjb25zdCBjb252ZXJ0ZWRWYWx1ZXMgPSB0cmFuc2Zvcm1cbiAgICAgIC5yZXBsYWNlKFwidHJhbnNsYXRlKFwiLCBcIlwiKVxuICAgICAgLnJlcGxhY2UoXCIpXCIsIFwiXCIpXG4gICAgICAuc3BsaXQoXCIsXCIpXG4gICAgICAubWFwKChweCkgPT4gcHgucmVwbGFjZShcInB4XCIsIFwiXCIpKVxuICAgICAgLm1hcCgocHgpID0+IHBhcnNlSW50KHB4LCAxMCkgLyByZW1CYXNlbGluZSlcbiAgICAgIC5tYXAoKHgpID0+IGAke3h9cmVtYCk7XG4gICAgY29uc3QgW3gsIHldID0gY29udmVydGVkVmFsdWVzO1xuXG4gICAgcmV0dXJuIGB0cmFuc2xhdGUoJHt4fSwgJHt5fSlgO1xuICB9O1xuXG4gIGNvbnN0IGVkaXRlZFN0eWxlID0ge1xuICAgIC4uLmNoaWxkLnByb3BzLnN0eWxlLFxuICAgIC4uLnN0eWxlLFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlVHJhbnNmb3JtVG9SZW0oc3R5bGUudHJhbnNmb3JtLCByZW1CYXNlbGluZSksXG4gIH07XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgIC4uLmNoaWxkLnByb3BzLFxuICAgIHN0eWxlOiBlZGl0ZWRTdHlsZSxcbiAgfSk7XG59O1xuIl0sIm5hbWVzIjpbIkRyYWdnYWJsZSIsInVzZVN0YXRlIiwiUmVhY3QiLCJJbmRleFBhZ2UiLCJwYWdlU3RhdGUiLCJzZXRQYWdlU3RhdGUiLCJhY3RpdmVEcmFncyIsImRlbHRhUG9zaXRpb24iLCJ4IiwieSIsImNvbnRyb2xsZWRQb3NpdGlvbiIsImhhbmRsZURyYWciLCJlIiwidWkiLCJwcmV2UGFnZVN0YXRlIiwiZGVsdGFYIiwiZGVsdGFZIiwib25TdGFydCIsIm9uU3RvcCIsIm9uRHJvcCIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWxlcnQiLCJyZW1vdmUiLCJvbkRyb3BBcmVhTW91c2VFbnRlciIsImFkZCIsIm9uRHJvcEFyZWFNb3VzZUxlYXZlIiwiYWRqdXN0WFBvcyIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiYWRqdXN0WVBvcyIsIm9uQ29udHJvbGxlZERyYWciLCJwb3NpdGlvbiIsIm9uQ29udHJvbGxlZERyYWdTdG9wIiwiZHJhZ0hhbmRsZXJzIiwiZGl2IiwiY2xhc3NOYW1lIiwiYXhpcyIsIm9uRHJhZyIsInRvRml4ZWQiLCJoYW5kbGUiLCJzdHJvbmciLCJSZW1XcmFwcGVyIiwiY2hpbGRyZW4iLCJyZW1CYXNlbGluZSIsInN0eWxlIiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJ0cmFuc2xhdGVUcmFuc2Zvcm1Ub1JlbSIsInRyYW5zZm9ybSIsImNvbnZlcnRlZFZhbHVlcyIsInJlcGxhY2UiLCJzcGxpdCIsIm1hcCIsInB4IiwicGFyc2VJbnQiLCJlZGl0ZWRTdHlsZSIsInByb3BzIiwiY2xvbmVFbGVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(routes)/userpage/[userid]/page.tsx\n"));

/***/ })

});