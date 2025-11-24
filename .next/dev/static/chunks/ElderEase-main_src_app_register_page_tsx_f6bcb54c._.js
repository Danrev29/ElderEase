(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/ElderEase-main/src/app/register/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Register
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ElderEase-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ElderEase-main/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ElderEase-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Register() {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        birthYear: ''
    });
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isSuccess, setIsSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const currentYear = new Date().getFullYear();
    const birthYears = Array.from({
        length: 80
    }, (_, i)=>currentYear - i - 10);
    const validateForm = ()=>{
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Please enter your full name';
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email address';
        if (!formData.password) newErrors.password = 'Please create a password';
        else if (formData.password.length < 6) newErrors.password = 'Password should be at least 6 characters long';
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
        if (!formData.birthYear) newErrors.birthYear = 'Please select your birth year';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (validateForm()) {
            setIsLoading(true);
            try {
                const response = await fetch('/api/auth/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
                const data = await response.json();
                if (response.ok) {
                    // Save user info locally
                    localStorage.setItem('elderease_user', JSON.stringify(data.user));
                    localStorage.setItem('elderease_user_id', data.user.email); // Using email as ID
                    localStorage.setItem('elderease_is_logged_in', 'true');
                    setIsSuccess(true);
                } else {
                    setErrors({
                        email: data.error || 'Registration failed'
                    });
                }
            } catch  {
                setErrors({
                    email: 'Network error. Please try again.'
                });
            } finally{
                setIsLoading(false);
            }
        }
    };
    const handleChange = (e_0)=>{
        let value = e_0.target.value;
        // Prevent numbers in name
        if (e_0.target.name === "name") {
            value = value.replace(/[0-9]/g, "");
        }
        // Limit phone to 11 digits
        if (e_0.target.name === "phone") {
            value = value.replace(/\D/g, "").slice(0, 11);
        }
        setFormData({
            ...formData,
            [e_0.target.name]: value
        });
        if (errors[e_0.target.name]) {
            setErrors({
                ...errors,
                [e_0.target.name]: ""
            });
        }
    };
    if (isSuccess) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-3xl",
                            children: "✅"
                        }, void 0, false, {
                            fileName: "[project]/ElderEase-main/src/app/register/page.tsx",
                            lineNumber: 95,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/ElderEase-main/src/app/register/page.tsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold text-green-800 mb-4",
                        children: "Welcome to ElderEase!"
                    }, void 0, false, {
                        fileName: "[project]/ElderEase-main/src/app/register/page.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-gray-700 mb-6",
                        children: "Your account has been created successfully. Let's customize your experience!"
                    }, void 0, false, {
                        fileName: "[project]/ElderEase-main/src/app/register/page.tsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/accessibility",
                                className: "block w-full bg-green-600 text-white text-lg py-3 rounded-lg hover:bg-green-700 transition font-semibold",
                                children: "Customize Settings"
                            }, void 0, false, {
                                fileName: "[project]/ElderEase-main/src/app/register/page.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/",
                                className: "block w-full bg-blue-600 text-white text-lg py-3 rounded-lg hover:bg-blue-700 transition font-semibold",
                                children: "Skip to Homepage"
                            }, void 0, false, {
                                fileName: "[project]/ElderEase-main/src/app/register/page.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ElderEase-main/src/app/register/page.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ElderEase-main/src/app/register/page.tsx",
                lineNumber: 93,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/ElderEase-main/src/app/register/page.tsx",
            lineNumber: 92,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12 px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-blue-700 text-white p-6 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold",
                            children: "Join ElderEase"
                        }, void 0, false, {
                            fileName: "[project]/ElderEase-main/src/app/register/page.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-blue-100 mt-2",
                            children: "Create your free account to get started"
                        }, void 0, false, {
                            fileName: "[project]/ElderEase-main/src/app/register/page.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/ElderEase-main/src/app/register/page.tsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "p-6 space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                            label: "Full Name *",
                            name: "name",
                            type: "text",
                            placeholder: "Enter your full name",
                            value: formData.name,
                            onChange: handleChange,
                            error: errors.name
                        }, void 0, false, {
                            fileName: "[project]/ElderEase-main/src/app/register/page.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                            label: "Email Address *",
                            name: "email",
                            type: "email",
                            placeholder: "your.email@example.com",
                            value: formData.email,
                            onChange: handleChange,
                            error: errors.email
                        }, void 0, false, {
                            fileName: "[project]/ElderEase-main/src/app/register/page.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "birthYear",
                                    className: "block text-lg font-medium text-gray-700 mb-2",
                                    children: "Year of Birth *"
                                }, void 0, false, {
                                    fileName: "[project]/ElderEase-main/src/app/register/page.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    id: "birthYear",
                                    name: "birthYear",
                                    value: formData.birthYear,
                                    onChange: handleChange,
                                    className: `w-full px-4 py-3 text-lg border-2 rounded-lg focus:outline-none focus:ring-2 placeholder-gray-800 ${errors.birthYear ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-300 focus:border-blue-500'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "Select your birth year"
                                        }, void 0, false, {
                                            fileName: "[project]/ElderEase-main/src/app/register/page.tsx",
                                            lineNumber: 132,
                                            columnNumber: 15
                                        }, this),
                                        birthYears.map((year)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: year,
                                                children: year
                                            }, year, false, {
                                                fileName: "[project]/ElderEase-main/src/app/register/page.tsx",
                                                lineNumber: 133,
                                                columnNumber: 39
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/ElderEase-main/src/app/register/page.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this),
                                errors.birthYear && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-red-600 text-sm ",
                                    children: errors.birthYear
                                }, void 0, false, {
                                    fileName: "[project]/ElderEase-main/src/app/register/page.tsx",
                                    lineNumber: 135,
                                    columnNumber: 34
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/ElderEase-main/src/app/register/page.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                            label: "Phone Number (Optional)",
                            name: "phone",
                            type: "tel",
                            placeholder: "+1 (555) 123-4567",
                            value: formData.phone,
                            onChange: handleChange
                        }, void 0, false, {
                            fileName: "[project]/ElderEase-main/src/app/register/page.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                            label: "Create Password *",
                            name: "password",
                            type: "password",
                            placeholder: "At least 6 characters",
                            value: formData.password,
                            onChange: handleChange,
                            error: errors.password
                        }, void 0, false, {
                            fileName: "[project]/ElderEase-main/src/app/register/page.tsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                            label: "Confirm Password *",
                            name: "confirmPassword",
                            type: "password",
                            placeholder: "Enter your password again",
                            value: formData.confirmPassword,
                            onChange: handleChange,
                            error: errors.confirmPassword
                        }, void 0, false, {
                            fileName: "[project]/ElderEase-main/src/app/register/page.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: isLoading,
                            className: "w-full bg-blue-600 text-white text-lg py-4 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50 transition font-semibold shadow-lg",
                            children: isLoading ? 'Creating Account...' : 'Create My Account'
                        }, void 0, false, {
                            fileName: "[project]/ElderEase-main/src/app/register/page.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/ElderEase-main/src/app/register/page.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 pb-6 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: [
                            "Already have an account?",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/login",
                                className: "text-blue-600 hover:bg-green-700 bg-green-600 px-2 py-1 rounded font-semibold text-lg",
                                children: "Sign in here"
                            }, void 0, false, {
                                fileName: "[project]/ElderEase-main/src/app/register/page.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ElderEase-main/src/app/register/page.tsx",
                        lineNumber: 153,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/ElderEase-main/src/app/register/page.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/ElderEase-main/src/app/register/page.tsx",
            lineNumber: 113,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/ElderEase-main/src/app/register/page.tsx",
        lineNumber: 112,
        columnNumber: 10
    }, this);
}
_s(Register, "QVkIb/zOgBqm+KNT0KVHU5mGV2M=");
_c = Register;
/** Reusable Input Field Component */ function InputField(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "040be8b06dddc46783f68e9a3bd2d2d68f8a52df6e313f443b971e223f0acaaf") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "040be8b06dddc46783f68e9a3bd2d2d68f8a52df6e313f443b971e223f0acaaf";
    }
    const { label, name, type, placeholder, value, onChange, error } = t0;
    let t1;
    if ($[1] !== label || $[2] !== name) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: name,
            className: "block text-lg font-medium text-gray-700 mb-2",
            children: label
        }, void 0, false, {
            fileName: "[project]/ElderEase-main/src/app/register/page.tsx",
            lineNumber: 184,
            columnNumber: 10
        }, this);
        $[1] = label;
        $[2] = name;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const t2 = `w-full px-4 py-3 text-lg border-2 rounded-lg focus:outline-none focus:ring-2 placeholder-gray-600 ${error ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-blue-300 focus:border-blue-500"}`;
    let t3;
    if ($[4] !== name || $[5] !== onChange || $[6] !== placeholder || $[7] !== t2 || $[8] !== type || $[9] !== value) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: type,
            id: name,
            name: name,
            value: value,
            onChange: onChange,
            placeholder: placeholder,
            className: t2
        }, void 0, false, {
            fileName: "[project]/ElderEase-main/src/app/register/page.tsx",
            lineNumber: 194,
            columnNumber: 10
        }, this);
        $[4] = name;
        $[5] = onChange;
        $[6] = placeholder;
        $[7] = t2;
        $[8] = type;
        $[9] = value;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    let t4;
    if ($[11] !== error) {
        t4 = error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-red-600 text-sm",
            children: error
        }, void 0, false, {
            fileName: "[project]/ElderEase-main/src/app/register/page.tsx",
            lineNumber: 207,
            columnNumber: 19
        }, this);
        $[11] = error;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    let t5;
    if ($[13] !== t1 || $[14] !== t3 || $[15] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t1,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/ElderEase-main/src/app/register/page.tsx",
            lineNumber: 215,
            columnNumber: 10
        }, this);
        $[13] = t1;
        $[14] = t3;
        $[15] = t4;
        $[16] = t5;
    } else {
        t5 = $[16];
    }
    return t5;
}
_c1 = InputField;
var _c, _c1;
__turbopack_context__.k.register(_c, "Register");
__turbopack_context__.k.register(_c1, "InputField");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=ElderEase-main_src_app_register_page_tsx_f6bcb54c._.js.map