(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[next]/internal/font/google/inter_5972bc34.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "inter_5972bc34-module__OU16Qa__className",
});
}),
"[next]/internal/font/google/inter_5972bc34.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_5972bc34$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_5972bc34.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_5972bc34$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Inter', 'Inter Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_5972bc34$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_5972bc34$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/ElderEase-main/components/FloatingChatbot.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FloatingChatbot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ElderEase-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ElderEase-main/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ElderEase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function FloatingChatbot() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    if ($[0] !== "c1296875920448b9841d7d263260527153737698faf66b8edaf6c0b3b175c893") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c1296875920448b9841d7d263260527153737698faf66b8edaf6c0b3b175c893";
    }
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                id: "1",
                text: "Hello! I'm your ElderEase assistant. How can I help you with social media today?",
                sender: "assistant",
                timestamp: new Date()
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [inputText, setInputText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isListening, setIsListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "FloatingChatbot[scrollToBottom]": ()=>{
                messagesEndRef.current?.scrollIntoView({
                    behavior: "smooth"
                });
            }
        })["FloatingChatbot[scrollToBottom]"];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const scrollToBottom = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "FloatingChatbot[useEffect()]": ()=>{
                scrollToBottom();
            }
        })["FloatingChatbot[useEffect()]"];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== messages) {
        t3 = [
            messages
        ];
        $[4] = messages;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[6] !== inputText) {
        t4 = ({
            "FloatingChatbot[handleSend]": async ()=>{
                if (!inputText.trim()) {
                    return;
                }
                const userMessage = {
                    id: Date.now().toString(),
                    text: inputText,
                    sender: "user",
                    timestamp: new Date()
                };
                setMessages({
                    "FloatingChatbot[handleSend > setMessages()]": (prev)=>[
                            ...prev,
                            userMessage
                        ]
                }["FloatingChatbot[handleSend > setMessages()]"]);
                setInputText("");
                setIsLoading(true);
                setTimeout({
                    "FloatingChatbot[handleSend > setTimeout()]": ()=>{
                        const responses = [
                            "I can help with that! Let me guide you step by step.",
                            "That's a great question! Here's how you can do it:",
                            "Many seniors find this helpful. Here's the process:",
                            "I understand this can be confusing. Let me break it down for you:",
                            "Perfect! I'll walk you through this in simple steps."
                        ];
                        const socialMediaTips = {
                            "facebook": "On Facebook, you can: 1) Click 'What's on your mind?' to post, 2) Use the camera icon to share photos, 3) Click the heart icon to like posts",
                            "whatsapp": "In WhatsApp: 1) Tap the chat to message, 2) Use the paperclip to send photos, 3) Tap the phone icon for calls",
                            "instagram": "For Instagram: 1) Tap + to share photos, 2) Heart icons show likes, 3) Use the search magnifying glass to find people",
                            "video call": "For video calls: 1) In Facebook Messenger, tap the video camera, 2) In WhatsApp, tap the video camera in a chat, 3) Make sure you allow camera access",
                            "photo": "To share photos: 1) Tap the photo/gallery icon, 2) Select your photos, 3) Tap send/share button"
                        };
                        const userText = inputText.toLowerCase();
                        let response = responses[Math.floor(Math.random() * responses.length)];
                        for (const [keyword, tip] of Object.entries(socialMediaTips)){
                            if (userText.includes(keyword)) {
                                response = response + `\n\n${tip}`;
                                break;
                            }
                        }
                        const assistantMessage = {
                            id: (Date.now() + 1).toString(),
                            text: response,
                            sender: "assistant",
                            timestamp: new Date()
                        };
                        setMessages({
                            "FloatingChatbot[handleSend > setTimeout() > setMessages()]": (prev_0)=>[
                                    ...prev_0,
                                    assistantMessage
                                ]
                        }["FloatingChatbot[handleSend > setTimeout() > setMessages()]"]);
                        setIsLoading(false);
                    }
                }["FloatingChatbot[handleSend > setTimeout()]"], 1500);
            }
        })["FloatingChatbot[handleSend]"];
        $[6] = inputText;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const handleSend = t4;
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "FloatingChatbot[handleVoiceInput]": ()=>{
                if (!("webkitSpeechRecognition" in window)) {
                    alert("Voice recognition is not supported in your browser. Please use Chrome or Edge.");
                    return;
                }
                const recognition = new window.webkitSpeechRecognition();
                recognition.continuous = false;
                recognition.interimResults = false;
                recognition.onstart = ()=>{
                    setIsListening(true);
                };
                recognition.onresult = (event)=>{
                    const transcript = event.results[0][0].transcript;
                    setInputText(transcript);
                    setIsListening(false);
                };
                recognition.onerror = ()=>{
                    setIsListening(false);
                };
                recognition.onend = ()=>{
                    setIsListening(false);
                };
                recognition.start();
            }
        })["FloatingChatbot[handleVoiceInput]"];
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    const handleVoiceInput = t5;
    let t6;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = [
            "How to post on Facebook?",
            "Send photos on WhatsApp",
            "Video call my family",
            "What is Instagram?",
            "Make my account safe"
        ];
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    const quickQuestions = t6;
    let t7;
    if ($[10] !== isOpen) {
        t7 = !isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: {
                "FloatingChatbot[<button>.onClick]": ()=>setIsOpen(true)
            }["FloatingChatbot[<button>.onClick]"],
            className: "fixed bottom-6 right-6 w-16 h-16 bg-blue-600 hover:bg-blue-700 rounded-full shadow-2xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-50",
            "aria-label": "Open AI Assistant",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-2xl",
                        children: "🤖"
                    }, void 0, false, {
                        fileName: "[project]/ElderEase-main/components/FloatingChatbot.tsx",
                        lineNumber: 172,
                        columnNumber: 294
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"
                    }, void 0, false, {
                        fileName: "[project]/ElderEase-main/components/FloatingChatbot.tsx",
                        lineNumber: 172,
                        columnNumber: 330
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/ElderEase-main/components/FloatingChatbot.tsx",
                        lineNumber: 172,
                        columnNumber: 421
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ElderEase-main/components/FloatingChatbot.tsx",
                lineNumber: 172,
                columnNumber: 268
            }, this)
        }, void 0, false, {
            fileName: "[project]/ElderEase-main/components/FloatingChatbot.tsx",
            lineNumber: 170,
            columnNumber: 21
        }, this);
        $[10] = isOpen;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== handleSend || $[13] !== inputText || $[14] !== isListening || $[15] !== isLoading || $[16] !== isOpen || $[17] !== messages) {
        t8 = isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-gray-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-blue-600 text-white p-4 rounded-t-2xl flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 bg-white rounded-full flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-blue-600 text-lg",
                                        children: "AI"
                                    }, void 0, false, {
                                        fileName: "[project]/ElderEase-main/components/FloatingChatbot.tsx",
                                        lineNumber: 180,
                                        columnNumber: 368
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/ElderEase-main/components/FloatingChatbot.tsx",
                                    lineNumber: 180,
                                    columnNumber: 286
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-lg",
                                            children: "ElderEase Assistant"
                                        }, void 0, false, {
                                            fileName: "[project]/ElderEase-main/components/FloatingChatbot.tsx",
                                            lineNumber: 180,
                                            columnNumber: 428
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-blue-100 text-sm",
                                            children: "Online - Ready to help"
                                        }, void 0, false, {
                                            fileName: "[project]/ElderEase-main/components/FloatingChatbot.tsx",
                                            lineNumber: 180,
                                            columnNumber: 490
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/ElderEase-main/components/FloatingChatbot.tsx",
                                    lineNumber: 180,
                                    columnNumber: 423
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/ElderEase-main/components/FloatingChatbot.tsx",
                            lineNumber: 180,
                            columnNumber: 241
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "FloatingChatbot[<button>.onClick]": ()=>setIsOpen(false)
                            }["FloatingChatbot[<button>.onClick]"],
                            className: "text-white hover:text-gray-200 text-2xl",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/ElderEase-main/components/FloatingChatbot.tsx",
                            lineNumber: 180,
                            columnNumber: 565
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/ElderEase-main/components/FloatingChatbot.tsx",
                    lineNumber: 180,
                    columnNumber: 149
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto p-4 space-y-4",
                    children: [
                        messages.map(_FloatingChatbotMessagesMap),
                        isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-start",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-100 text-gray-800 rounded-2xl rounded-bl-none p-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex space-x-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                        }, void 0, false, {
                                            fileName: "[project]/ElderEase-main/components/FloatingChatbot.tsx",
                                            lineNumber: 182,
                                            columnNumber: 371
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce",
                                            style: {
                                                animationDelay: "0.2s"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/ElderEase-main/components/FloatingChatbot.tsx",
                                            lineNumber: 182,
                                            columnNumber: 438
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce",
                                            style: {
                                                animationDelay: "0.4s"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/ElderEase-main/components/FloatingChatbot.tsx",
                                            lineNumber: 184,
                                            columnNumber: 20
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/ElderEase-main/components/FloatingChatbot.tsx",
                                    lineNumber: 182,
                                    columnNumber: 339
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/ElderEase-main/components/FloatingChatbot.tsx",
                                lineNumber: 182,
                                columnNumber: 264
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/ElderEase-main/components/FloatingChatbot.tsx",
                            lineNumber: 182,
                            columnNumber: 228
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: messagesEndRef
                        }, void 0, false, {
                            fileName: "[project]/ElderEase-main/components/FloatingChatbot.tsx",
                            lineNumber: 186,
                            columnNumber: 39
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/ElderEase-main/components/FloatingChatbot.tsx",
                    lineNumber: 182,
                    columnNumber: 117
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-gray-200 p-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-600 mb-2",
                            children: "Quick questions:"
                        }, void 0, false, {
                            fileName: "[project]/ElderEase-main/components/FloatingChatbot.tsx",
                            lineNumber: 186,
                            columnNumber: 119
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-1 text-",
                            children: quickQuestions.map({
                                "FloatingChatbot[quickQuestions.map()]": (question, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "FloatingChatbot[quickQuestions.map() > <button>.onClick]": ()=>{
                                                setInputText(question);
                                                setTimeout(handleSend, 100);
                                            }
                                        }["FloatingChatbot[quickQuestions.map() > <button>.onClick]"],
                                        className: "bg-blue-600 text-black px-2 py-1 rounded-full text-xs hover:bg-blue-700 transition",
                                        children: question
                                    }, index, false, {
                                        fileName: "[project]/ElderEase-main/components/FloatingChatbot.tsx",
                                        lineNumber: 187,
                                        columnNumber: 75
                                    }, this)
                            }["FloatingChatbot[quickQuestions.map()]"])
                        }, void 0, false, {
                            fileName: "[project]/ElderEase-main/components/FloatingChatbot.tsx",
                            lineNumber: 186,
                            columnNumber: 181
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/ElderEase-main/components/FloatingChatbot.tsx",
                    lineNumber: 186,
                    columnNumber: 73
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-gray-200 p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex space-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: inputText,
                                            onChange: {
                                                "FloatingChatbot[<input>.onChange]": (e)=>setInputText(e.target.value)
                                            }["FloatingChatbot[<input>.onChange]"],
                                            onKeyPress: {
                                                "FloatingChatbot[<input>.onKeyPress]": (e_0)=>e_0.key === "Enter" && handleSend()
                                            }["FloatingChatbot[<input>.onKeyPress]"],
                                            placeholder: "Ask about social media...",
                                            className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500 text-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/ElderEase-main/components/FloatingChatbot.tsx",
                                            lineNumber: 193,
                                            columnNumber: 178
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleVoiceInput,
                                            disabled: isListening,
                                            className: `absolute right-2 top-1/2 transform -translate-y-1/2 ${isListening ? "text-red-500" : "text-gray-400 hover:text-blue-600"}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg",
                                                children: isListening ? "\uD83D\uDD34" : "\uD83C\uDFA4"
                                            }, void 0, false, {
                                                fileName: "[project]/ElderEase-main/components/FloatingChatbot.tsx",
                                                lineNumber: 197,
                                                columnNumber: 436
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/ElderEase-main/components/FloatingChatbot.tsx",
                                            lineNumber: 197,
                                            columnNumber: 242
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/ElderEase-main/components/FloatingChatbot.tsx",
                                    lineNumber: 193,
                                    columnNumber: 145
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSend,
                                    disabled: !inputText.trim() || isLoading,
                                    className: "bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:opacity-50 transition font-semibold text-sm",
                                    children: "Send"
                                }, void 0, false, {
                                    fileName: "[project]/ElderEase-main/components/FloatingChatbot.tsx",
                                    lineNumber: 197,
                                    columnNumber: 531
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/ElderEase-main/components/FloatingChatbot.tsx",
                            lineNumber: 193,
                            columnNumber: 113
                        }, this),
                        isListening && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mt-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-red-500 font-semibold text-sm",
                                children: "Listening... Speak now"
                            }, void 0, false, {
                                fileName: "[project]/ElderEase-main/components/FloatingChatbot.tsx",
                                lineNumber: 197,
                                columnNumber: 850
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/ElderEase-main/components/FloatingChatbot.tsx",
                            lineNumber: 197,
                            columnNumber: 816
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/ElderEase-main/components/FloatingChatbot.tsx",
                    lineNumber: 193,
                    columnNumber: 67
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/ElderEase-main/components/FloatingChatbot.tsx",
            lineNumber: 180,
            columnNumber: 20
        }, this);
        $[12] = handleSend;
        $[13] = inputText;
        $[14] = isListening;
        $[15] = isLoading;
        $[16] = isOpen;
        $[17] = messages;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] !== t7 || $[20] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t7,
                t8
            ]
        }, void 0, true);
        $[19] = t7;
        $[20] = t8;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    return t9;
}
_s(FloatingChatbot, "Kf2OlewebK8R37KQ9cnjv7euVf4=");
_c = FloatingChatbot;
function _FloatingChatbotMessagesMap(message) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex ${message.sender === "user" ? "justify-end" : "justify-start"}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `max-w-[80%] rounded-2xl p-3 ${message.sender === "user" ? "bg-blue-600 text-white rounded-br-none" : "bg-gray-100 text-gray-800 rounded-bl-none"}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "whitespace-pre-wrap text-sm",
                    children: message.text
                }, void 0, false, {
                    fileName: "[project]/ElderEase-main/components/FloatingChatbot.tsx",
                    lineNumber: 220,
                    columnNumber: 279
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `text-xs mt-1 ${message.sender === "user" ? "text-blue-200" : "text-gray-500"}`,
                    children: message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit"
                    })
                }, void 0, false, {
                    fileName: "[project]/ElderEase-main/components/FloatingChatbot.tsx",
                    lineNumber: 220,
                    columnNumber: 344
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/ElderEase-main/components/FloatingChatbot.tsx",
            lineNumber: 220,
            columnNumber: 114
        }, this)
    }, message.id, false, {
        fileName: "[project]/ElderEase-main/components/FloatingChatbot.tsx",
        lineNumber: 220,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "FloatingChatbot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ElderEase-main/src/context/AccessibilityContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AccessibilityProvider",
    ()=>AccessibilityProvider,
    "useAccessibility",
    ()=>useAccessibility
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ElderEase-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ElderEase-main/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ElderEase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const defaultSettings = {
    fontSize: 'medium',
    contrast: 'normal',
    voiceEnabled: false
};
const AccessibilityContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    ...defaultSettings,
    setSettings: ()=>{}
});
const AccessibilityProvider = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "0b01cc892059c15d25bb707344da1eb4a69ffd6f9d35bfb710ff2747109f89d9") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0b01cc892059c15d25bb707344da1eb4a69ffd6f9d35bfb710ff2747109f89d9";
    }
    const { children } = t0;
    const [settings, setSettingsState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultSettings);
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ()=>{
            const saved = localStorage.getItem("elderease_preferences");
            if (saved) {
                setSettingsState(JSON.parse(saved));
            }
        };
        t2 = [];
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    let t4;
    if ($[3] !== settings) {
        t3 = ()=>{
            const html = document.documentElement;
            html.classList.remove("font-small", "font-medium", "font-large", "font-xlarge");
            html.classList.remove("contrast-normal", "contrast-high", "contrast-blue");
            html.classList.add(`font-${settings.fontSize}`);
            html.classList.add(`contrast-${settings.contrast}`);
            localStorage.setItem("elderease_preferences", JSON.stringify(settings));
        };
        t4 = [
            settings
        ];
        $[3] = settings;
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = (updates)=>{
            setSettingsState((prev)=>({
                    ...prev,
                    ...updates
                }));
        };
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const setSettings = t5;
    let t6;
    if ($[7] !== settings) {
        t6 = {
            ...settings,
            setSettings
        };
        $[7] = settings;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== children || $[10] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccessibilityContext.Provider, {
            value: t6,
            children: children
        }, void 0, false, {
            fileName: "[project]/ElderEase-main/src/context/AccessibilityContext.tsx",
            lineNumber: 99,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = children;
        $[10] = t6;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    return t7;
};
_s(AccessibilityProvider, "K++2DoZqTZDWg1SNyDcJvjj6wmI=");
_c = AccessibilityProvider;
const useAccessibility = ()=>{
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "0b01cc892059c15d25bb707344da1eb4a69ffd6f9d35bfb710ff2747109f89d9") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0b01cc892059c15d25bb707344da1eb4a69ffd6f9d35bfb710ff2747109f89d9";
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AccessibilityContext);
};
_s1(useAccessibility, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "AccessibilityProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ElderEase-main/src/lib/firebaseConfig.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auth",
    ()=>auth,
    "db",
    ()=>db,
    "default",
    ()=>__TURBOPACK__default__export__,
    "getAnalyticsSafe",
    ()=>getAnalyticsSafe,
    "storage",
    ()=>storage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ElderEase-main/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ElderEase-main/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ElderEase-main/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ElderEase-main/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ElderEase-main/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ElderEase-main/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$firebase$2f$storage$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ElderEase-main/node_modules/firebase/storage/dist/esm/index.esm.js [app-client] (ecmascript) <locals>"); // ✅ import storage
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ElderEase-main/node_modules/@firebase/storage/dist/index.esm.js [app-client] (ecmascript)");
;
;
;
;
// Only initialize once (Next.js reload-safe)
const app = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApps"])().length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeApp"])({
    apiKey: "AIzaSyChc-fNM_AYvxINVNYEKWZhzsLuwseDLd0",
    authDomain: "elderease-ef8ca.firebaseapp.com",
    projectId: "elderease-ef8ca",
    storageBucket: "elderease-ef8ca.appspot.com",
    messagingSenderId: "594018006274",
    appId: "1:594018006274:web:7cc3b24c3c8f0031f4fe1b",
    measurementId: "G-B4EYPLNTQD"
}) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApp"])();
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuth"])(app);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
const storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStorage"])(app); // ✅ export storage
const getAnalyticsSafe = async ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        const { getAnalytics, isSupported } = await __turbopack_context__.A("[project]/ElderEase-main/node_modules/firebase/analytics/dist/esm/index.esm.js [app-client] (ecmascript, async loader)");
        return await isSupported() ? getAnalytics(app) : null;
    }
    //TURBOPACK unreachable
    ;
};
const __TURBOPACK__default__export__ = app;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ElderEase-main/src/app/layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ElderEase-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ElderEase-main/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ElderEase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ElderEase-main/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_5972bc34$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_5972bc34.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$components$2f$FloatingChatbot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ElderEase-main/components/FloatingChatbot.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$src$2f$context$2f$AccessibilityContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ElderEase-main/src/context/AccessibilityContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$src$2f$lib$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ElderEase-main/src/lib/firebaseConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$react$2d$firebase$2d$hooks$2f$auth$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ElderEase-main/node_modules/react-firebase-hooks/auth/dist/index.esm.js [app-client] (ecmascript)");
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
;
;
function RootLayout(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "df38859a45d8c9fbded1fdf0149bbddac3f177677b37bb6e1aae06ed6886587c") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "df38859a45d8c9fbded1fdf0149bbddac3f177677b37bb6e1aae06ed6886587c";
    }
    const { children } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("head", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                    children: "ElderEase - Social Media Made Simple for Seniors"
                }, void 0, false, {
                    fileName: "[project]/ElderEase-main/src/app/layout.tsx",
                    lineNumber: 29,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                    name: "description",
                    content: "Helping seniors connect confidently through simple social media tutorials and AI assistance"
                }, void 0, false, {
                    fileName: "[project]/ElderEase-main/src/app/layout.tsx",
                    lineNumber: 29,
                    columnNumber: 79
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/ElderEase-main/src/app/layout.tsx",
            lineNumber: 29,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== children) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
            lang: "en",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_5972bc34$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$src$2f$context$2f$AccessibilityContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccessibilityProvider"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DynamicLayout, {
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/ElderEase-main/src/app/layout.tsx",
                            lineNumber: 36,
                            columnNumber: 92
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/ElderEase-main/src/app/layout.tsx",
                        lineNumber: 36,
                        columnNumber: 69
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/ElderEase-main/src/app/layout.tsx",
                    lineNumber: 36,
                    columnNumber: 30
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/ElderEase-main/src/app/layout.tsx",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[2] = children;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_c = RootLayout;
const DynamicLayout = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(24);
    if ($[0] !== "df38859a45d8c9fbded1fdf0149bbddac3f177677b37bb6e1aae06ed6886587c") {
        for(let $i = 0; $i < 24; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "df38859a45d8c9fbded1fdf0149bbddac3f177677b37bb6e1aae06ed6886587c";
    }
    const { children } = t0;
    const { fontSize, contrast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$src$2f$context$2f$AccessibilityContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccessibility"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [user, loading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$react$2d$firebase$2d$hooks$2f$auth$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthState"])(__TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$src$2f$lib$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"]);
    const [dropdownOpen, setDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] !== router) {
        t1 = async ()=>{
            await __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$src$2f$lib$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].signOut();
            router.push("/login");
        };
        $[1] = router;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const handleLogout = t1;
    let t2;
    if ($[3] !== router) {
        t2 = ()=>router.push("/profile");
        $[3] = router;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const handleProfileClick = t2;
    let t3;
    if ($[5] !== dropdownOpen) {
        t3 = ()=>setDropdownOpen(!dropdownOpen);
        $[5] = dropdownOpen;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const toggleDropdown = t3;
    const t4 = `${fontSize} contrast-${contrast} min-h-screen flex flex-col`;
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center space-x-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-10 h-10 bg-white rounded-full flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-blue-700 font-bold text-lg",
                        children: "EE"
                    }, void 0, false, {
                        fileName: "[project]/ElderEase-main/src/app/layout.tsx",
                        lineNumber: 95,
                        columnNumber: 137
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/ElderEase-main/src/app/layout.tsx",
                    lineNumber: 95,
                    columnNumber: 55
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold",
                    children: "ElderEase"
                }, void 0, false, {
                    fileName: "[project]/ElderEase-main/src/app/layout.tsx",
                    lineNumber: 95,
                    columnNumber: 202
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/ElderEase-main/src/app/layout.tsx",
            lineNumber: 95,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row sm:space-x-4 gap-2 text-center sm:text-left",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/",
                    className: "hover:underline text-lg",
                    children: "Home"
                }, void 0, false, {
                    fileName: "[project]/ElderEase-main/src/app/layout.tsx",
                    lineNumber: 102,
                    columnNumber: 97
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/tutoriallibrary",
                    className: "hover:underline text-lg",
                    children: "Tutorial Library"
                }, void 0, false, {
                    fileName: "[project]/ElderEase-main/src/app/layout.tsx",
                    lineNumber: 102,
                    columnNumber: 153
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/accessibility",
                    className: "hover:underline text-lg",
                    children: "Settings"
                }, void 0, false, {
                    fileName: "[project]/ElderEase-main/src/app/layout.tsx",
                    lineNumber: 102,
                    columnNumber: 236
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/ElderEase-main/src/app/layout.tsx",
            lineNumber: 102,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== dropdownOpen || $[10] !== handleLogout || $[11] !== handleProfileClick || $[12] !== loading || $[13] !== toggleDropdown || $[14] !== user) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "bg-blue-700 text-white p-4 shadow-lg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0",
                children: [
                    t5,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row sm:items-center sm:space-x-6 w-full sm:w-auto gap-2",
                        children: [
                            t6,
                            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 bg-blue-600 rounded-full animate-pulse mx-auto sm:mx-0"
                            }, void 0, false, {
                                fileName: "[project]/ElderEase-main/src/app/layout.tsx",
                                lineNumber: 109,
                                columnNumber: 283
                            }, ("TURBOPACK compile-time value", void 0)) : user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full sm:w-auto mt-2 sm:mt-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: toggleDropdown,
                                        className: "flex items-center justify-between sm:justify-start w-full sm:w-auto space-x-2 hover:bg-blue-600 p-2 rounded-lg transition",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden",
                                                children: user.photoURL ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: user.photoURL,
                                                    alt: "Profile",
                                                    className: "w-full h-full object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/ElderEase-main/src/app/layout.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 711
                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-blue-700 font-bold text-sm",
                                                    children: user.displayName?.charAt(0).toUpperCase() || "U"
                                                }, void 0, false, {
                                                    fileName: "[project]/ElderEase-main/src/app/layout.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 794
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/ElderEase-main/src/app/layout.tsx",
                                                lineNumber: 109,
                                                columnNumber: 598
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "hidden md:inline",
                                                children: [
                                                    "Hi, ",
                                                    user.displayName?.split(" ")[0] || "User"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/ElderEase-main/src/app/layout.tsx",
                                                lineNumber: 109,
                                                columnNumber: 908
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: `w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`,
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M19 9l-7 7-7-7"
                                                }, void 0, false, {
                                                    fileName: "[project]/ElderEase-main/src/app/layout.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 1135
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/ElderEase-main/src/app/layout.tsx",
                                                lineNumber: 109,
                                                columnNumber: 997
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/ElderEase-main/src/app/layout.tsx",
                                        lineNumber: 109,
                                        columnNumber: 431
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    dropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-0 mt-2 w-full sm:w-48 bg-green-600 rounded-lg shadow-lg py-2 z-50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-4 py-2 border-b border-gray-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-800 font-semibold truncate",
                                                        children: user.displayName
                                                    }, void 0, false, {
                                                        fileName: "[project]/ElderEase-main/src/app/layout.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 1405
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-600 truncate",
                                                        children: user.email
                                                    }, void 0, false, {
                                                        fileName: "[project]/ElderEase-main/src/app/layout.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 1487
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/ElderEase-main/src/app/layout.tsx",
                                                lineNumber: 109,
                                                columnNumber: 1353
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleProfileClick,
                                                className: "bg-green-600 w-full text-left px-4 py-2 text-sm text-gray-700 transition flex items-center space-x-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "👤"
                                                    }, void 0, false, {
                                                        fileName: "[project]/ElderEase-main/src/app/layout.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 1705
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "My Profile"
                                                    }, void 0, false, {
                                                        fileName: "[project]/ElderEase-main/src/app/layout.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 1720
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/ElderEase-main/src/app/layout.tsx",
                                                lineNumber: 109,
                                                columnNumber: 1555
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleLogout,
                                                className: "bg-green-600 w-full text-left px-4 py-2 text-sm text-gray-700 transition flex items-center space-x-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "🚪"
                                                    }, void 0, false, {
                                                        fileName: "[project]/ElderEase-main/src/app/layout.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 1896
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Logout"
                                                    }, void 0, false, {
                                                        fileName: "[project]/ElderEase-main/src/app/layout.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 1911
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/ElderEase-main/src/app/layout.tsx",
                                                lineNumber: 109,
                                                columnNumber: 1752
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/ElderEase-main/src/app/layout.tsx",
                                        lineNumber: 109,
                                        columnNumber: 1255
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ElderEase-main/src/app/layout.tsx",
                                lineNumber: 109,
                                columnNumber: 375
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row gap-2 w-full sm:w-auto mt-2 sm:mt-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/register",
                                        className: "bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-semibold text-center",
                                        children: "Register"
                                    }, void 0, false, {
                                        fileName: "[project]/ElderEase-main/src/app/layout.tsx",
                                        lineNumber: 109,
                                        columnNumber: 2034
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/login",
                                        className: "bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition font-semibold text-center",
                                        children: "Login"
                                    }, void 0, false, {
                                        fileName: "[project]/ElderEase-main/src/app/layout.tsx",
                                        lineNumber: 109,
                                        columnNumber: 2177
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ElderEase-main/src/app/layout.tsx",
                                lineNumber: 109,
                                columnNumber: 1955
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ElderEase-main/src/app/layout.tsx",
                        lineNumber: 109,
                        columnNumber: 173
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/ElderEase-main/src/app/layout.tsx",
                lineNumber: 109,
                columnNumber: 64
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/ElderEase-main/src/app/layout.tsx",
            lineNumber: 109,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = dropdownOpen;
        $[10] = handleLogout;
        $[11] = handleProfileClick;
        $[12] = loading;
        $[13] = toggleDropdown;
        $[14] = user;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== children) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex-1 min-h-screen px-4 sm:px-8",
            children: children
        }, void 0, false, {
            fileName: "[project]/ElderEase-main/src/app/layout.tsx",
            lineNumber: 122,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = children;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$components$2f$FloatingChatbot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/ElderEase-main/src/app/layout.tsx",
            lineNumber: 130,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    let t10;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "bg-gray-800 text-white p-6 mt-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg",
                        children: "ElderEase - Bridging the Digital Divide for Seniors"
                    }, void 0, false, {
                        fileName: "[project]/ElderEase-main/src/app/layout.tsx",
                        lineNumber: 137,
                        columnNumber: 111
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 mt-2",
                        children: "Simple, Safe, and Empowering Social Media Learning"
                    }, void 0, false, {
                        fileName: "[project]/ElderEase-main/src/app/layout.tsx",
                        lineNumber: 137,
                        columnNumber: 189
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/ElderEase-main/src/app/layout.tsx",
                lineNumber: 137,
                columnNumber: 64
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/ElderEase-main/src/app/layout.tsx",
            lineNumber: 137,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] !== t4 || $[21] !== t7 || $[22] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: [
                t7,
                t8,
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/ElderEase-main/src/app/layout.tsx",
            lineNumber: 144,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t4;
        $[21] = t7;
        $[22] = t8;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    return t11;
};
_s(DynamicLayout, "Tq/HWObMQsx63ndYqsg0Sv3N6v8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$src$2f$context$2f$AccessibilityContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccessibility"],
        __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$react$2d$firebase$2d$hooks$2f$auth$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthState"]
    ];
});
_c1 = DynamicLayout;
var _c, _c1;
__turbopack_context__.k.register(_c, "RootLayout");
__turbopack_context__.k.register(_c1, "DynamicLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__022f30fa._.js.map