(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TutorialLibrary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ElderEase-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ElderEase-main/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ElderEase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$src$2f$app$2f$tutoriallibrary$2f$tutorialData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ElderEase-main/src/app/tutoriallibrary/tutorialData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$react$2d$firebase$2d$hooks$2f$auth$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ElderEase-main/node_modules/react-firebase-hooks/auth/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$src$2f$lib$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ElderEase-main/src/lib/firebaseConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ElderEase-main/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ElderEase-main/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function TutorialLibrary() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(78);
    if ($[0] !== "c416757859c84423fa41d6217ba61a63d0b3a1995fbf50c25399a27c9160513c") {
        for(let $i = 0; $i < 78; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c416757859c84423fa41d6217ba61a63d0b3a1995fbf50c25399a27c9160513c";
    }
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [favorites, setFavorites] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [completed, setCompleted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [selectedTutorial, setSelectedTutorial] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dropdownOpen, setDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [user, loading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$react$2d$firebase$2d$hooks$2f$auth$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthState"])(__TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$src$2f$lib$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"]);
    let t2;
    let t3;
    if ($[3] !== user) {
        t2 = ({
            "TutorialLibrary[useEffect()]": ()=>{
                if (!user) {
                    return;
                }
                const fetchUserData = {
                    "TutorialLibrary[useEffect() > fetchUserData]": async ()=>{
                        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$src$2f$lib$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "users", user.uid);
                        const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
                        if (docSnap.exists()) {
                            const data = docSnap.data();
                            setFavorites(data.favorites || []);
                            setCompleted(data.completed || []);
                        } else {
                            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(docRef, {
                                favorites: [],
                                completed: []
                            });
                        }
                    }
                }["TutorialLibrary[useEffect() > fetchUserData]"];
                fetchUserData();
            }
        })["TutorialLibrary[useEffect()]"];
        t3 = [
            user
        ];
        $[3] = user;
        $[4] = t2;
        $[5] = t3;
    } else {
        t2 = $[4];
        t3 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[6] !== user) {
        t4 = ({
            "TutorialLibrary[saveUserData]": async (updatedFavorites, updatedCompleted)=>{
                if (!user) {
                    return;
                }
                const docRef_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$src$2f$lib$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "users", user.uid);
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(docRef_0, {
                    favorites: updatedFavorites,
                    completed: updatedCompleted
                }, {
                    merge: true
                });
            }
        })["TutorialLibrary[saveUserData]"];
        $[6] = user;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const saveUserData = t4;
    let t5;
    if ($[8] !== completed || $[9] !== favorites || $[10] !== saveUserData || $[11] !== user) {
        t5 = ({
            "TutorialLibrary[toggleFavorite]": async (id)=>{
                if (!user) {
                    alert("Please log in to save favorites.");
                    return;
                }
                const updated = favorites.includes(id) ? favorites.filter({
                    "TutorialLibrary[toggleFavorite > favorites.filter()]": (f)=>f !== id
                }["TutorialLibrary[toggleFavorite > favorites.filter()]"]) : [
                    ...favorites,
                    id
                ];
                setFavorites(updated);
                await saveUserData(updated, completed);
            }
        })["TutorialLibrary[toggleFavorite]"];
        $[8] = completed;
        $[9] = favorites;
        $[10] = saveUserData;
        $[11] = user;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    const toggleFavorite = t5;
    let t6;
    if ($[13] !== completed || $[14] !== favorites || $[15] !== saveUserData || $[16] !== user) {
        t6 = ({
            "TutorialLibrary[toggleCompleted]": async (id_0)=>{
                if (!user) {
                    alert("Please log in to mark tutorials as completed.");
                    return;
                }
                const updated_0 = completed.includes(id_0) ? completed.filter({
                    "TutorialLibrary[toggleCompleted > completed.filter()]": (c)=>c !== id_0
                }["TutorialLibrary[toggleCompleted > completed.filter()]"]) : [
                    ...completed,
                    id_0
                ];
                setCompleted(updated_0);
                await saveUserData(favorites, updated_0);
            }
        })["TutorialLibrary[toggleCompleted]"];
        $[13] = completed;
        $[14] = favorites;
        $[15] = saveUserData;
        $[16] = user;
        $[17] = t6;
    } else {
        t6 = $[17];
    }
    const toggleCompleted = t6;
    if (loading) {
        let t7;
        if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx",
                lineNumber: 148,
                columnNumber: 12
            }, this);
            $[18] = t7;
        } else {
            t7 = $[18];
        }
        return t7;
    }
    if (!user) {
        let t7;
        if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center mt-20 text-xl",
                children: "Please log in to access tutorials."
            }, void 0, false, {
                fileName: "[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx",
                lineNumber: 158,
                columnNumber: 12
            }, this);
            $[19] = t7;
        } else {
            t7 = $[19];
        }
        return t7;
    }
    let t10;
    let t7;
    let t8;
    let t9;
    if ($[20] !== completed || $[21] !== dropdownOpen || $[22] !== favorites || $[23] !== filter || $[24] !== search || $[25] !== toggleCompleted || $[26] !== toggleFavorite || $[27] !== user) {
        let t11;
        if ($[32] !== filter || $[33] !== search) {
            t11 = ({
                "TutorialLibrary[tutorials.filter()]": (t)=>(filter === "All" || t.category === filter) && t.title.toLowerCase().includes(search.toLowerCase())
            })["TutorialLibrary[tutorials.filter()]"];
            $[32] = filter;
            $[33] = search;
            $[34] = t11;
        } else {
            t11 = $[34];
        }
        const filteredTutorials = __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$src$2f$app$2f$tutoriallibrary$2f$tutorialData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].filter(t11);
        t9 = "bg-white min-h-screen w-full p-8 relative";
        let t12;
        let t13;
        if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-bold text-gray-900 mb-1",
                children: "Tutorial Library"
            }, void 0, false, {
                fileName: "[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx",
                lineNumber: 186,
                columnNumber: 13
            }, this);
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-lg text-gray-600 mb-2",
                children: "Learn social media step-by-step with easy tutorials."
            }, void 0, false, {
                fileName: "[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx",
                lineNumber: 187,
                columnNumber: 13
            }, this);
            $[35] = t12;
            $[36] = t13;
        } else {
            t12 = $[35];
            t13 = $[36];
        }
        let t14;
        if ($[37] !== completed.length || $[38] !== favorites.length) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-700 mb-6",
                children: [
                    "Completed ",
                    completed.length,
                    " / ",
                    __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$src$2f$app$2f$tutoriallibrary$2f$tutorialData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].length,
                    " tutorials  |  Bookmarked ",
                    favorites.length
                ]
            }, void 0, true, {
                fileName: "[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx",
                lineNumber: 196,
                columnNumber: 13
            }, this);
            $[37] = completed.length;
            $[38] = favorites.length;
            $[39] = t14;
        } else {
            t14 = $[39];
        }
        let t15;
        let t16;
        let t17;
        if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
            t15 = ({
                "TutorialLibrary[<input>.onChange]": (e)=>setSearch(e.target.value)
            })["TutorialLibrary[<input>.onChange]"];
            t16 = ({
                "TutorialLibrary[<input>.onFocus]": ()=>setDropdownOpen(true)
            })["TutorialLibrary[<input>.onFocus]"];
            t17 = ({
                "TutorialLibrary[<input>.onBlur]": ()=>setTimeout({
                        "TutorialLibrary[<input>.onBlur > setTimeout()]": ()=>setDropdownOpen(false)
                    }["TutorialLibrary[<input>.onBlur > setTimeout()]"], 200)
            })["TutorialLibrary[<input>.onBlur]"];
            $[40] = t15;
            $[41] = t16;
            $[42] = t17;
        } else {
            t15 = $[40];
            t16 = $[41];
            t17 = $[42];
        }
        let t18;
        if ($[43] !== search) {
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                placeholder: "Search tutorials...",
                className: "px-4 py-2 border rounded-lg flex-1 text-black placeholder-gray-400",
                value: search,
                onChange: t15,
                onFocus: t16,
                onBlur: t17
            }, void 0, false, {
                fileName: "[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx",
                lineNumber: 228,
                columnNumber: 13
            }, this);
            $[43] = search;
            $[44] = t18;
        } else {
            t18 = $[44];
        }
        let t19;
        let t20;
        let t21;
        let t22;
        let t23;
        let t24;
        let t25;
        let t26;
        if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
            t19 = ({
                "TutorialLibrary[<select>.onChange]": (e_0)=>setFilter(e_0.target.value)
            })["TutorialLibrary[<select>.onChange]"];
            t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                children: "All"
            }, void 0, false, {
                fileName: "[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx",
                lineNumber: 246,
                columnNumber: 13
            }, this);
            t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                children: "Facebook"
            }, void 0, false, {
                fileName: "[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx",
                lineNumber: 247,
                columnNumber: 13
            }, this);
            t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                children: "Messenger"
            }, void 0, false, {
                fileName: "[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx",
                lineNumber: 248,
                columnNumber: 13
            }, this);
            t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                children: "WhatsApp"
            }, void 0, false, {
                fileName: "[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx",
                lineNumber: 249,
                columnNumber: 13
            }, this);
            t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                children: "YouTube"
            }, void 0, false, {
                fileName: "[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx",
                lineNumber: 250,
                columnNumber: 13
            }, this);
            t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                children: "TikTok"
            }, void 0, false, {
                fileName: "[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx",
                lineNumber: 251,
                columnNumber: 13
            }, this);
            t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                children: "Instagram"
            }, void 0, false, {
                fileName: "[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx",
                lineNumber: 252,
                columnNumber: 13
            }, this);
            $[45] = t19;
            $[46] = t20;
            $[47] = t21;
            $[48] = t22;
            $[49] = t23;
            $[50] = t24;
            $[51] = t25;
            $[52] = t26;
        } else {
            t19 = $[45];
            t20 = $[46];
            t21 = $[47];
            t22 = $[48];
            t23 = $[49];
            t24 = $[50];
            t25 = $[51];
            t26 = $[52];
        }
        let t27;
        if ($[53] !== filter) {
            t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                className: "px-4 py-2 border rounded-lg",
                value: filter,
                onChange: t19,
                children: [
                    t20,
                    t21,
                    t22,
                    t23,
                    t24,
                    t25,
                    t26
                ]
            }, void 0, true, {
                fileName: "[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx",
                lineNumber: 273,
                columnNumber: 13
            }, this);
            $[53] = filter;
            $[54] = t27;
        } else {
            t27 = $[54];
        }
        const t28 = dropdownOpen && search && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto mt-1",
            children: filteredTutorials.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "p-3 text-gray-500",
                children: "No tutorials found."
            }, void 0, false, {
                fileName: "[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx",
                lineNumber: 279,
                columnNumber: 215
            }, this) : filteredTutorials.map({
                "TutorialLibrary[filteredTutorials.map()]": (tutorial)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer",
                        onClick: {
                            "TutorialLibrary[filteredTutorials.map() > <div>.onClick]": ()=>setSelectedTutorial(tutorial)
                        }["TutorialLibrary[filteredTutorials.map() > <div>.onClick]"],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: tutorial.title
                            }, void 0, false, {
                                fileName: "[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx",
                                lineNumber: 282,
                                columnNumber: 72
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex gap-2",
                                children: [
                                    user && favorites.includes(tutorial.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-yellow-400",
                                        children: "★"
                                    }, void 0, false, {
                                        fileName: "[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx",
                                        lineNumber: 282,
                                        columnNumber: 174
                                    }, this),
                                    user && completed.includes(tutorial.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-green-500",
                                        children: "✔"
                                    }, void 0, false, {
                                        fileName: "[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx",
                                        lineNumber: 282,
                                        columnNumber: 261
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx",
                                lineNumber: 282,
                                columnNumber: 101
                            }, this)
                        ]
                    }, tutorial.id, true, {
                        fileName: "[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx",
                        lineNumber: 280,
                        columnNumber: 65
                    }, this)
            }["TutorialLibrary[filteredTutorials.map()]"])
        }, void 0, false, {
            fileName: "[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx",
            lineNumber: 279,
            columnNumber: 43
        }, this);
        let t29;
        if ($[55] !== t18 || $[56] !== t27 || $[57] !== t28) {
            t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-4 mb-8 text-black relative",
                children: [
                    t18,
                    t27,
                    t28
                ]
            }, void 0, true, {
                fileName: "[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx",
                lineNumber: 286,
                columnNumber: 13
            }, this);
            $[55] = t18;
            $[56] = t27;
            $[57] = t28;
            $[58] = t29;
        } else {
            t29 = $[58];
        }
        if ($[59] !== t14 || $[60] !== t29) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto mb-6",
                children: [
                    t12,
                    t13,
                    t14,
                    t29
                ]
            }, void 0, true, {
                fileName: "[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx",
                lineNumber: 295,
                columnNumber: 13
            }, this);
            $[59] = t14;
            $[60] = t29;
            $[61] = t10;
        } else {
            t10 = $[61];
        }
        t7 = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6";
        let t30;
        if ($[62] !== completed || $[63] !== favorites || $[64] !== toggleCompleted || $[65] !== toggleFavorite || $[66] !== user) {
            t30 = ({
                "TutorialLibrary[filteredTutorials.map()]": (tutorial_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-xl shadow-lg hover:shadow-2xl transition cursor-pointer p-5 border border-gray-100",
                        onClick: {
                            "TutorialLibrary[filteredTutorials.map() > <div>.onClick]": ()=>setSelectedTutorial(tutorial_0)
                        }["TutorialLibrary[filteredTutorials.map() > <div>.onClick]"],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: tutorial_0.image,
                                className: "w-full h-60  rounded-lg mb-4"
                            }, void 0, false, {
                                fileName: "[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx",
                                lineNumber: 308,
                                columnNumber: 72
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-gray-800",
                                children: tutorial_0.title
                            }, void 0, false, {
                                fileName: "[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx",
                                lineNumber: 308,
                                columnNumber: 143
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 text-sm mt-1",
                                children: tutorial_0.description
                            }, void 0, false, {
                                fileName: "[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx",
                                lineNumber: 308,
                                columnNumber: 214
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `flex items-center gap-1 px-3 py-1 rounded-lg text-sm transition ${user && favorites.includes(tutorial_0.id) ? "bg-yellow-400 text-white" : "bg-gray-200 text-gray-700"}`,
                                        onClick: {
                                            "TutorialLibrary[filteredTutorials.map() > <button>.onClick]": (e_1)=>{
                                                e_1.stopPropagation();
                                                toggleFavorite(tutorial_0.id);
                                            }
                                        }["TutorialLibrary[filteredTutorials.map() > <button>.onClick]"],
                                        disabled: !user,
                                        title: !user ? "Log in to bookmark" : "",
                                        children: [
                                            "★ ",
                                            user && favorites.includes(tutorial_0.id) ? "Bookmarked" : "Bookmark"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx",
                                        lineNumber: 308,
                                        columnNumber: 340
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `px-3 py-1 rounded-lg text-sm transition ${user && completed.includes(tutorial_0.id) ? "bg-green-500 text-white" : "bg-gray-800 text-white"}`,
                                        onClick: {
                                            "TutorialLibrary[filteredTutorials.map() > <button>.onClick]": (e_2)=>{
                                                e_2.stopPropagation();
                                                toggleCompleted(tutorial_0.id);
                                            }
                                        }["TutorialLibrary[filteredTutorials.map() > <button>.onClick]"],
                                        disabled: !user,
                                        title: !user ? "Log in to mark as done" : "",
                                        children: user && completed.includes(tutorial_0.id) ? "Completed \u2714" : "Mark as Done"
                                    }, void 0, false, {
                                        fileName: "[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx",
                                        lineNumber: 313,
                                        columnNumber: 220
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx",
                                lineNumber: 308,
                                columnNumber: 284
                            }, this)
                        ]
                    }, tutorial_0.id, true, {
                        fileName: "[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx",
                        lineNumber: 306,
                        columnNumber: 67
                    }, this)
            })["TutorialLibrary[filteredTutorials.map()]"];
            $[62] = completed;
            $[63] = favorites;
            $[64] = toggleCompleted;
            $[65] = toggleFavorite;
            $[66] = user;
            $[67] = t30;
        } else {
            t30 = $[67];
        }
        t8 = filteredTutorials.map(t30);
        $[20] = completed;
        $[21] = dropdownOpen;
        $[22] = favorites;
        $[23] = filter;
        $[24] = search;
        $[25] = toggleCompleted;
        $[26] = toggleFavorite;
        $[27] = user;
        $[28] = t10;
        $[29] = t7;
        $[30] = t8;
        $[31] = t9;
    } else {
        t10 = $[28];
        t7 = $[29];
        t8 = $[30];
        t9 = $[31];
    }
    let t11;
    if ($[68] !== t7 || $[69] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7,
            children: t8
        }, void 0, false, {
            fileName: "[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx",
            lineNumber: 350,
            columnNumber: 11
        }, this);
        $[68] = t7;
        $[69] = t8;
        $[70] = t11;
    } else {
        t11 = $[70];
    }
    let t12;
    if ($[71] !== selectedTutorial) {
        t12 = selectedTutorial && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 flex items-center justify-center z-50 p-4 ",
            onClick: {
                "TutorialLibrary[<div>.onClick]": ()=>setSelectedTutorial(null)
            }["TutorialLibrary[<div>.onClick]"],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl shadow-lg w-full max-w-4xl p-6 relative transform transition-all duration-300 scale-95 opacity-0 animate-modalOpen z-10 border-2 border-black",
                onClick: _TutorialLibraryDivOnClick,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "absolute top-4 right-4 text-black text-xl font-bold",
                        onClick: {
                            "TutorialLibrary[<button>.onClick]": ()=>setSelectedTutorial(null)
                        }["TutorialLibrary[<button>.onClick]"],
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx",
                        lineNumber: 361,
                        columnNumber: 258
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold mb-6 text-black",
                        children: selectedTutorial.title
                    }, void 0, false, {
                        fileName: "[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx",
                        lineNumber: 363,
                        columnNumber: 59
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-6 text-black",
                        children: selectedTutorial.description
                    }, void 0, false, {
                        fileName: "[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx",
                        lineNumber: 363,
                        columnNumber: 139
                    }, this),
                    selectedTutorial.steps && selectedTutorial.steps.map(_TutorialLibrarySelectedTutorialStepsMap),
                    selectedTutorial.video && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-semibold mb-2 text-black",
                                children: "Video Tutorial:"
                            }, void 0, false, {
                                fileName: "[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx",
                                lineNumber: 363,
                                columnNumber: 349
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: selectedTutorial.video,
                                target: "_blank",
                                className: "text-blue-600 underline",
                                children: "Watch on YouTube"
                            }, void 0, false, {
                                fileName: "[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx",
                                lineNumber: 363,
                                columnNumber: 413
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx",
                        lineNumber: 363,
                        columnNumber: 327
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx",
                lineNumber: 361,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx",
            lineNumber: 359,
            columnNumber: 31
        }, this);
        $[71] = selectedTutorial;
        $[72] = t12;
    } else {
        t12 = $[72];
    }
    let t13;
    if ($[73] !== t10 || $[74] !== t11 || $[75] !== t12 || $[76] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t9,
            children: [
                t10,
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx",
            lineNumber: 371,
            columnNumber: 11
        }, this);
        $[73] = t10;
        $[74] = t11;
        $[75] = t12;
        $[76] = t9;
        $[77] = t13;
    } else {
        t13 = $[77];
    }
    return t13;
}
_s(TutorialLibrary, "yxjPzLWL//V7pdDDcvo9Ckje1jg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$react$2d$firebase$2d$hooks$2f$auth$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthState"]
    ];
});
_c = TutorialLibrary;
function _TutorialLibrarySelectedTutorialStepsMap(step, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-semibold mb-4 text-black",
                children: [
                    "Step ",
                    index + 1
                ]
            }, void 0, true, {
                fileName: "[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx",
                lineNumber: 383,
                columnNumber: 44
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-4 text-black",
                children: step.text
            }, void 0, false, {
                fileName: "[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx",
                lineNumber: 383,
                columnNumber: 111
            }, this),
            step.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: step.image,
                className: "w-full rounded-lg mb-2"
            }, void 0, false, {
                fileName: "[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx",
                lineNumber: 383,
                columnNumber: 172
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx",
        lineNumber: 383,
        columnNumber: 10
    }, this);
}
function _TutorialLibraryDivOnClick(e_3) {
    return e_3.stopPropagation();
}
var _c;
__turbopack_context__.k.register(_c, "TutorialLibrary");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=ElderEase-main_src_app_tutoriallibrary_page_tsx_3ddfd62e._.js.map