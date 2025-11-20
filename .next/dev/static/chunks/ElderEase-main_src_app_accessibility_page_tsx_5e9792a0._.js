(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/ElderEase-main/src/app/accessibility/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Accessibility
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ElderEase-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ElderEase-main/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$src$2f$context$2f$AccessibilityContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ElderEase-main/src/context/AccessibilityContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Accessibility() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(35);
    if ($[0] !== "6c4fe98e8138f9aaf7fd82d013ef984b4f01c07f7c25851ad59a9a353a802c96") {
        for(let $i = 0; $i < 35; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6c4fe98e8138f9aaf7fd82d013ef984b4f01c07f7c25851ad59a9a353a802c96";
    }
    const { fontSize, contrast, voiceEnabled, setSettings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$src$2f$context$2f$AccessibilityContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccessibility"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-blue-700 text-white p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold",
                    children: "Accessibility Settings"
                }, void 0, false, {
                    fileName: "[project]/ElderEase-main/src/app/accessibility/page.tsx",
                    lineNumber: 21,
                    columnNumber: 54
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-blue-100 mt-2",
                    children: "Customize your experience"
                }, void 0, false, {
                    fileName: "[project]/ElderEase-main/src/app/accessibility/page.tsx",
                    lineNumber: 21,
                    columnNumber: 116
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/ElderEase-main/src/app/accessibility/page.tsx",
            lineNumber: 21,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-lg font-medium text-gray-800 mb-2 block",
            children: "Text Size"
        }, void 0, false, {
            fileName: "[project]/ElderEase-main/src/app/accessibility/page.tsx",
            lineNumber: 28,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== setSettings) {
        t2 = ({
            "Accessibility[<select>.onChange]": (e)=>setSettings({
                    fontSize: e.target.value
                })
        })["Accessibility[<select>.onChange]"];
        $[3] = setSettings;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    let t4;
    let t5;
    let t6;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "small",
            children: "Small"
        }, void 0, false, {
            fileName: "[project]/ElderEase-main/src/app/accessibility/page.tsx",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "medium",
            children: "Medium"
        }, void 0, false, {
            fileName: "[project]/ElderEase-main/src/app/accessibility/page.tsx",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "large",
            children: "Large"
        }, void 0, false, {
            fileName: "[project]/ElderEase-main/src/app/accessibility/page.tsx",
            lineNumber: 52,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "xlarge",
            children: "Extra Large"
        }, void 0, false, {
            fileName: "[project]/ElderEase-main/src/app/accessibility/page.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[5] = t3;
        $[6] = t4;
        $[7] = t5;
        $[8] = t6;
    } else {
        t3 = $[5];
        t4 = $[6];
        t5 = $[7];
        t6 = $[8];
    }
    let t7;
    if ($[9] !== fontSize || $[10] !== t2) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border border-gray-200 rounded-lg p-4",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    value: fontSize,
                    onChange: t2,
                    className: "border border-gray-300 rounded-lg px-3 py-2 w-full",
                    children: [
                        t3,
                        t4,
                        t5,
                        t6
                    ]
                }, void 0, true, {
                    fileName: "[project]/ElderEase-main/src/app/accessibility/page.tsx",
                    lineNumber: 66,
                    columnNumber: 69
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/ElderEase-main/src/app/accessibility/page.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[9] = fontSize;
        $[10] = t2;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-lg font-medium text-gray-800 mb-2 block",
            children: "Color Contrast"
        }, void 0, false, {
            fileName: "[project]/ElderEase-main/src/app/accessibility/page.tsx",
            lineNumber: 75,
            columnNumber: 10
        }, this);
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== setSettings) {
        t9 = ({
            "Accessibility[<select>.onChange]": (e_0)=>setSettings({
                    contrast: e_0.target.value
                })
        })["Accessibility[<select>.onChange]"];
        $[13] = setSettings;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    let t11;
    let t12;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "normal",
            children: "Normal"
        }, void 0, false, {
            fileName: "[project]/ElderEase-main/src/app/accessibility/page.tsx",
            lineNumber: 96,
            columnNumber: 11
        }, this);
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "high",
            children: "High Contrast"
        }, void 0, false, {
            fileName: "[project]/ElderEase-main/src/app/accessibility/page.tsx",
            lineNumber: 97,
            columnNumber: 11
        }, this);
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "blue",
            children: "Blue Light Filter"
        }, void 0, false, {
            fileName: "[project]/ElderEase-main/src/app/accessibility/page.tsx",
            lineNumber: 98,
            columnNumber: 11
        }, this);
        $[15] = t10;
        $[16] = t11;
        $[17] = t12;
    } else {
        t10 = $[15];
        t11 = $[16];
        t12 = $[17];
    }
    let t13;
    if ($[18] !== contrast || $[19] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border border-gray-200 rounded-lg p-4",
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    value: contrast,
                    onChange: t9,
                    className: "border border-gray-300 rounded-lg px-3 py-2 w-full",
                    children: [
                        t10,
                        t11,
                        t12
                    ]
                }, void 0, true, {
                    fileName: "[project]/ElderEase-main/src/app/accessibility/page.tsx",
                    lineNumber: 109,
                    columnNumber: 70
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/ElderEase-main/src/app/accessibility/page.tsx",
            lineNumber: 109,
            columnNumber: 11
        }, this);
        $[18] = contrast;
        $[19] = t9;
        $[20] = t13;
    } else {
        t13 = $[20];
    }
    let t14;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "text-lg font-medium text-gray-800 block",
                    children: "Voice Commands"
                }, void 0, false, {
                    fileName: "[project]/ElderEase-main/src/app/accessibility/page.tsx",
                    lineNumber: 118,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 text-sm",
                    children: "Enable voice input and navigation"
                }, void 0, false, {
                    fileName: "[project]/ElderEase-main/src/app/accessibility/page.tsx",
                    lineNumber: 118,
                    columnNumber: 97
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/ElderEase-main/src/app/accessibility/page.tsx",
            lineNumber: 118,
            columnNumber: 11
        }, this);
        $[21] = t14;
    } else {
        t14 = $[21];
    }
    let t15;
    if ($[22] !== setSettings || $[23] !== voiceEnabled) {
        t15 = ({
            "Accessibility[<button>.onClick]": ()=>setSettings({
                    voiceEnabled: !voiceEnabled
                })
        })["Accessibility[<button>.onClick]"];
        $[22] = setSettings;
        $[23] = voiceEnabled;
        $[24] = t15;
    } else {
        t15 = $[24];
    }
    const t16 = `w-12 h-6 rounded-full transition-colors ${voiceEnabled ? "bg-blue-600" : "bg-gray-300"}`;
    const t17 = `block w-4 h-4 bg-white rounded-full transform transition-transform ${voiceEnabled ? "translate-x-7" : "translate-x-1"}`;
    let t18;
    if ($[25] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t17
        }, void 0, false, {
            fileName: "[project]/ElderEase-main/src/app/accessibility/page.tsx",
            lineNumber: 140,
            columnNumber: 11
        }, this);
        $[25] = t17;
        $[26] = t18;
    } else {
        t18 = $[26];
    }
    let t19;
    if ($[27] !== t15 || $[28] !== t16 || $[29] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border border-gray-200 rounded-lg p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center",
                children: [
                    t14,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: t15,
                        className: t16,
                        children: t18
                    }, void 0, false, {
                        fileName: "[project]/ElderEase-main/src/app/accessibility/page.tsx",
                        lineNumber: 148,
                        columnNumber: 122
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ElderEase-main/src/app/accessibility/page.tsx",
                lineNumber: 148,
                columnNumber: 66
            }, this)
        }, void 0, false, {
            fileName: "[project]/ElderEase-main/src/app/accessibility/page.tsx",
            lineNumber: 148,
            columnNumber: 11
        }, this);
        $[27] = t15;
        $[28] = t16;
        $[29] = t18;
        $[30] = t19;
    } else {
        t19 = $[30];
    }
    let t20;
    if ($[31] !== t13 || $[32] !== t19 || $[33] !== t7) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 py-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto max-w-4xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-xl overflow-hidden",
                    children: [
                        t0,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 space-y-6",
                            children: [
                                t7,
                                t13,
                                t19
                            ]
                        }, void 0, true, {
                            fileName: "[project]/ElderEase-main/src/app/accessibility/page.tsx",
                            lineNumber: 158,
                            columnNumber: 170
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/ElderEase-main/src/app/accessibility/page.tsx",
                    lineNumber: 158,
                    columnNumber: 102
                }, this)
            }, void 0, false, {
                fileName: "[project]/ElderEase-main/src/app/accessibility/page.tsx",
                lineNumber: 158,
                columnNumber: 57
            }, this)
        }, void 0, false, {
            fileName: "[project]/ElderEase-main/src/app/accessibility/page.tsx",
            lineNumber: 158,
            columnNumber: 11
        }, this);
        $[31] = t13;
        $[32] = t19;
        $[33] = t7;
        $[34] = t20;
    } else {
        t20 = $[34];
    }
    return t20;
}
_s(Accessibility, "IFcq1XHSJizvPXtRwYxidO+V348=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$src$2f$context$2f$AccessibilityContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccessibility"]
    ];
});
_c = Accessibility;
var _c;
__turbopack_context__.k.register(_c, "Accessibility");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=ElderEase-main_src_app_accessibility_page_tsx_5e9792a0._.js.map