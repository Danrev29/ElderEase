(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/ElderEase-main/src/app/onboarding/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Onboarding
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ElderEase-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ElderEase-main/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ElderEase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ElderEase-main/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Onboarding() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(40);
    if ($[0] !== "41205237b65411e65105c1b1af9ddc38200f08cb7973a7bc0eca3bf682d1a7b3") {
        for(let $i = 0; $i < 40; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "41205237b65411e65105c1b1af9ddc38200f08cb7973a7bc0eca3bf682d1a7b3";
    }
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            fontSize: "medium",
            contrast: "normal",
            voiceEnabled: false,
            tutorialSpeed: "normal"
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [userPreferences, setUserPreferences] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            {
                title: "Welcome to ElderEase!",
                description: "Let's set up your learning experience to make it comfortable and easy for you.",
                icon: "\uD83D\uDC4B"
            },
            {
                title: "Text Size Preference",
                description: "Choose the text size that's most comfortable for your reading.",
                icon: "\uD83D\uDD20"
            },
            {
                title: "Screen Contrast",
                description: "Select the contrast level that works best for your eyes.",
                icon: "\uD83C\uDFA8"
            },
            {
                title: "Voice Assistance",
                description: "Would you like to use voice commands to navigate?",
                icon: "\uD83C\uDFA4"
            },
            {
                title: "Learning Speed",
                description: "How fast would you like the tutorials to proceed?",
                icon: "\u26A1"
            },
            {
                title: "All Set!",
                description: "Your ElderEase experience is now customized just for you!",
                icon: "\uD83C\uDF89"
            }
        ];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const steps = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "Onboarding[handlePreferenceChange]": (key, value)=>{
                setUserPreferences({
                    "Onboarding[handlePreferenceChange > setUserPreferences()]": (prev)=>({
                            ...prev,
                            [key]: value
                        })
                }["Onboarding[handlePreferenceChange > setUserPreferences()]"]);
            }
        })["Onboarding[handlePreferenceChange]"];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const handlePreferenceChange = t2;
    let t3;
    if ($[4] !== currentStep || $[5] !== router || $[6] !== userPreferences) {
        t3 = ({
            "Onboarding[handleNext]": ()=>{
                if (currentStep < steps.length - 1) {
                    setCurrentStep(currentStep + 1);
                } else {
                    localStorage.setItem("elderease_preferences", JSON.stringify(userPreferences));
                    localStorage.setItem("elderease_onboarding_complete", "true");
                    router.push("/");
                }
            }
        })["Onboarding[handleNext]"];
        $[4] = currentStep;
        $[5] = router;
        $[6] = userPreferences;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const handleNext = t3;
    let t4;
    if ($[8] !== currentStep) {
        t4 = ({
            "Onboarding[handleBack]": ()=>{
                if (currentStep > 0) {
                    setCurrentStep(currentStep - 1);
                }
            }
        })["Onboarding[handleBack]"];
        $[8] = currentStep;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    const handleBack = t4;
    let t5;
    if ($[10] !== currentStep || $[11] !== userPreferences) {
        t5 = ({
            "Onboarding[renderStepContent]": ()=>{
                switch(currentStep){
                    case 1:
                        {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 gap-4",
                                    children: [
                                        {
                                            value: "small",
                                            label: "Small",
                                            size: "text-lg"
                                        },
                                        {
                                            value: "medium",
                                            label: "Medium",
                                            size: "text-xl"
                                        },
                                        {
                                            value: "large",
                                            label: "Large",
                                            size: "text-2xl"
                                        },
                                        {
                                            value: "xlarge",
                                            label: "Extra Large",
                                            size: "text-3xl"
                                        }
                                    ].map({
                                        "Onboarding[renderStepContent > (anonymous)()]": (option_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: {
                                                    "Onboarding[renderStepContent > (anonymous)() > <button>.onClick]": ()=>handlePreferenceChange("fontSize", option_1.value)
                                                }["Onboarding[renderStepContent > (anonymous)() > <button>.onClick]"],
                                                className: `p-4 border-2 rounded-lg text-center transition-all ${userPreferences.fontSize === option_1.value ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-blue-300"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `${option_1.size} font-semibold`,
                                                        children: "A"
                                                    }, void 0, false, {
                                                        fileName: "[project]/ElderEase-main/src/app/onboarding/page.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 277
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 font-medium",
                                                        children: option_1.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/ElderEase-main/src/app/onboarding/page.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 336
                                                    }, this)
                                                ]
                                            }, option_1.value, true, {
                                                fileName: "[project]/ElderEase-main/src/app/onboarding/page.tsx",
                                                lineNumber: 138,
                                                columnNumber: 82
                                            }, this)
                                    }["Onboarding[renderStepContent > (anonymous)()]"])
                                }, void 0, false, {
                                    fileName: "[project]/ElderEase-main/src/app/onboarding/page.tsx",
                                    lineNumber: 121,
                                    columnNumber: 49
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/ElderEase-main/src/app/onboarding/page.tsx",
                                lineNumber: 121,
                                columnNumber: 22
                            }, this);
                        }
                    case 2:
                        {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 gap-4",
                                    children: [
                                        {
                                            value: "normal",
                                            label: "Normal",
                                            bg: "bg-white",
                                            text: "text-gray-900"
                                        },
                                        {
                                            value: "high",
                                            label: "High Contrast",
                                            bg: "bg-black",
                                            text: "text-yellow-300"
                                        },
                                        {
                                            value: "blue",
                                            label: "Blue Light",
                                            bg: "bg-blue-50",
                                            text: "text-blue-900"
                                        }
                                    ].map({
                                        "Onboarding[renderStepContent > (anonymous)()]": (option_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: {
                                                    "Onboarding[renderStepContent > (anonymous)() > <button>.onClick]": ()=>handlePreferenceChange("contrast", option_0.value)
                                                }["Onboarding[renderStepContent > (anonymous)() > <button>.onClick]"],
                                                className: `p-6 border-2 rounded-lg transition-all ${userPreferences.contrast === option_0.value ? "border-blue-500 ring-2 ring-blue-300" : "border-gray-300 hover:border-blue-300"} ${option_0.bg} ${option_0.text}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-semibold text-lg",
                                                        children: option_0.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/ElderEase-main/src/app/onboarding/page.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 307
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm mt-2",
                                                        children: "Sample text preview"
                                                    }, void 0, false, {
                                                        fileName: "[project]/ElderEase-main/src/app/onboarding/page.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 368
                                                    }, this)
                                                ]
                                            }, option_0.value, true, {
                                                fileName: "[project]/ElderEase-main/src/app/onboarding/page.tsx",
                                                lineNumber: 161,
                                                columnNumber: 82
                                            }, this)
                                    }["Onboarding[renderStepContent > (anonymous)()]"])
                                }, void 0, false, {
                                    fileName: "[project]/ElderEase-main/src/app/onboarding/page.tsx",
                                    lineNumber: 145,
                                    columnNumber: 49
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/ElderEase-main/src/app/onboarding/page.tsx",
                                lineNumber: 145,
                                columnNumber: 22
                            }, this);
                        }
                    case 3:
                        {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: {
                                                "Onboarding[renderStepContent > <button>.onClick]": ()=>handlePreferenceChange("voiceEnabled", true)
                                            }["Onboarding[renderStepContent > <button>.onClick]"],
                                            className: `p-6 border-2 rounded-lg text-center transition-all ${userPreferences.voiceEnabled ? "border-green-500 bg-green-50" : "border-gray-300 hover:border-green-300"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-3xl mb-2",
                                                    children: "🎤"
                                                }, void 0, false, {
                                                    fileName: "[project]/ElderEase-main/src/app/onboarding/page.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 247
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-semibold",
                                                    children: "Yes, Enable Voice"
                                                }, void 0, false, {
                                                    fileName: "[project]/ElderEase-main/src/app/onboarding/page.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 286
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-gray-600 mt-2",
                                                    children: "Use voice commands"
                                                }, void 0, false, {
                                                    fileName: "[project]/ElderEase-main/src/app/onboarding/page.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 340
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/ElderEase-main/src/app/onboarding/page.tsx",
                                            lineNumber: 168,
                                            columnNumber: 89
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: {
                                                "Onboarding[renderStepContent > <button>.onClick]": ()=>handlePreferenceChange("voiceEnabled", false)
                                            }["Onboarding[renderStepContent > <button>.onClick]"],
                                            className: `p-6 border-2 rounded-lg text-center transition-all ${!userPreferences.voiceEnabled ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-blue-300"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-3xl mb-2",
                                                    children: "🔇"
                                                }, void 0, false, {
                                                    fileName: "[project]/ElderEase-main/src/app/onboarding/page.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 245
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-semibold",
                                                    children: "No, Text Only"
                                                }, void 0, false, {
                                                    fileName: "[project]/ElderEase-main/src/app/onboarding/page.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 284
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-gray-600 mt-2",
                                                    children: "Use buttons and text"
                                                }, void 0, false, {
                                                    fileName: "[project]/ElderEase-main/src/app/onboarding/page.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 334
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/ElderEase-main/src/app/onboarding/page.tsx",
                                            lineNumber: 170,
                                            columnNumber: 417
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/ElderEase-main/src/app/onboarding/page.tsx",
                                    lineNumber: 168,
                                    columnNumber: 49
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/ElderEase-main/src/app/onboarding/page.tsx",
                                lineNumber: 168,
                                columnNumber: 22
                            }, this);
                        }
                    case 4:
                        {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 gap-4",
                                    children: [
                                        {
                                            value: "slow",
                                            label: "Slow & Detailed",
                                            description: "More explanations, step by step"
                                        },
                                        {
                                            value: "normal",
                                            label: "Normal Pace",
                                            description: "Balanced speed and detail"
                                        },
                                        {
                                            value: "fast",
                                            label: "Quick Overview",
                                            description: "For experienced users"
                                        }
                                    ].map({
                                        "Onboarding[renderStepContent > (anonymous)()]": (option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: {
                                                    "Onboarding[renderStepContent > (anonymous)() > <button>.onClick]": ()=>handlePreferenceChange("tutorialSpeed", option.value)
                                                }["Onboarding[renderStepContent > (anonymous)() > <button>.onClick]"],
                                                className: `p-4 border-2 rounded-lg text-left transition-all ${userPreferences.tutorialSpeed === option.value ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-blue-300"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-semibold text-lg",
                                                        children: option.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/ElderEase-main/src/app/onboarding/page.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 278
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm text-gray-600 mt-1",
                                                        children: option.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/ElderEase-main/src/app/onboarding/page.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 337
                                                    }, this)
                                                ]
                                            }, option.value, true, {
                                                fileName: "[project]/ElderEase-main/src/app/onboarding/page.tsx",
                                                lineNumber: 189,
                                                columnNumber: 80
                                            }, this)
                                    }["Onboarding[renderStepContent > (anonymous)()]"])
                                }, void 0, false, {
                                    fileName: "[project]/ElderEase-main/src/app/onboarding/page.tsx",
                                    lineNumber: 176,
                                    columnNumber: 49
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/ElderEase-main/src/app/onboarding/page.tsx",
                                lineNumber: 176,
                                columnNumber: 22
                            }, this);
                        }
                    default:
                        {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-6xl mb-4",
                                        children: steps[currentStep].icon
                                    }, void 0, false, {
                                        fileName: "[project]/ElderEase-main/src/app/onboarding/page.tsx",
                                        lineNumber: 196,
                                        columnNumber: 51
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xl text-gray-700 leading-relaxed",
                                        children: steps[currentStep].description
                                    }, void 0, false, {
                                        fileName: "[project]/ElderEase-main/src/app/onboarding/page.tsx",
                                        lineNumber: 196,
                                        columnNumber: 113
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ElderEase-main/src/app/onboarding/page.tsx",
                                lineNumber: 196,
                                columnNumber: 22
                            }, this);
                        }
                }
            }
        })["Onboarding[renderStepContent]"];
        $[10] = currentStep;
        $[11] = userPreferences;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    const renderStepContent = t5;
    const t6 = `${(currentStep + 1) / steps.length * 100}%`;
    let t7;
    if ($[13] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-200 h-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-blue-600 h-2 transition-all duration-300",
                style: {
                    width: t6
                }
            }, void 0, false, {
                fileName: "[project]/ElderEase-main/src/app/onboarding/page.tsx",
                lineNumber: 211,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/ElderEase-main/src/app/onboarding/page.tsx",
            lineNumber: 211,
            columnNumber: 10
        }, this);
        $[13] = t6;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    const t8 = steps[currentStep];
    let t9;
    if ($[15] !== t8.title) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-3xl font-bold text-gray-800 mb-2",
            children: t8.title
        }, void 0, false, {
            fileName: "[project]/ElderEase-main/src/app/onboarding/page.tsx",
            lineNumber: 222,
            columnNumber: 10
        }, this);
        $[15] = t8.title;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    const t10 = currentStep + 1;
    let t11;
    if ($[17] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm text-gray-500",
            children: [
                "Step ",
                t10,
                " of ",
                steps.length
            ]
        }, void 0, true, {
            fileName: "[project]/ElderEase-main/src/app/onboarding/page.tsx",
            lineNumber: 231,
            columnNumber: 11
        }, this);
        $[17] = t10;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] !== t11 || $[20] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-8",
            children: [
                t9,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/ElderEase-main/src/app/onboarding/page.tsx",
            lineNumber: 239,
            columnNumber: 11
        }, this);
        $[19] = t11;
        $[20] = t9;
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    let t13;
    if ($[22] !== renderStepContent) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-8 min-h-[200px] flex items-center justify-center",
            children: renderStepContent()
        }, void 0, false, {
            fileName: "[project]/ElderEase-main/src/app/onboarding/page.tsx",
            lineNumber: 248,
            columnNumber: 11
        }, this);
        $[22] = renderStepContent;
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    const t14 = currentStep === 0;
    let t15;
    if ($[24] !== handleBack || $[25] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleBack,
            disabled: t14,
            className: "px-6 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition font-semibold",
            children: "Back"
        }, void 0, false, {
            fileName: "[project]/ElderEase-main/src/app/onboarding/page.tsx",
            lineNumber: 257,
            columnNumber: 11
        }, this);
        $[24] = handleBack;
        $[25] = t14;
        $[26] = t15;
    } else {
        t15 = $[26];
    }
    const t16 = currentStep === steps.length - 1 ? "Get Started!" : "Next";
    let t17;
    if ($[27] !== handleNext || $[28] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleNext,
            className: "px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold",
            children: t16
        }, void 0, false, {
            fileName: "[project]/ElderEase-main/src/app/onboarding/page.tsx",
            lineNumber: 267,
            columnNumber: 11
        }, this);
        $[27] = handleNext;
        $[28] = t16;
        $[29] = t17;
    } else {
        t17 = $[29];
    }
    let t18;
    if ($[30] !== t15 || $[31] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between",
            children: [
                t15,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/ElderEase-main/src/app/onboarding/page.tsx",
            lineNumber: 276,
            columnNumber: 11
        }, this);
        $[30] = t15;
        $[31] = t17;
        $[32] = t18;
    } else {
        t18 = $[32];
    }
    let t19;
    if ($[33] !== t12 || $[34] !== t13 || $[35] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-8",
            children: [
                t12,
                t13,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/ElderEase-main/src/app/onboarding/page.tsx",
            lineNumber: 285,
            columnNumber: 11
        }, this);
        $[33] = t12;
        $[34] = t13;
        $[35] = t18;
        $[36] = t19;
    } else {
        t19 = $[36];
    }
    let t20;
    if ($[37] !== t19 || $[38] !== t7) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-2xl w-full bg-white rounded-2xl shadow-xl overflow-hidden",
                children: [
                    t7,
                    t19
                ]
            }, void 0, true, {
                fileName: "[project]/ElderEase-main/src/app/onboarding/page.tsx",
                lineNumber: 295,
                columnNumber: 121
            }, this)
        }, void 0, false, {
            fileName: "[project]/ElderEase-main/src/app/onboarding/page.tsx",
            lineNumber: 295,
            columnNumber: 11
        }, this);
        $[37] = t19;
        $[38] = t7;
        $[39] = t20;
    } else {
        t20 = $[39];
    }
    return t20;
}
_s(Onboarding, "qCVJevmEHqpr/9/wGKwV2LgqxUY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Onboarding;
var _c;
__turbopack_context__.k.register(_c, "Onboarding");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=ElderEase-main_src_app_onboarding_page_tsx_0c4a1208._.js.map