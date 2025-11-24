module.exports = [
"[project]/ElderEase-main/src/app/profile/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Profile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ElderEase-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ElderEase-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ElderEase-main/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ElderEase-main/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ElderEase-main/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ElderEase-main/node_modules/firebase/auth/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ElderEase-main/node_modules/@firebase/auth/dist/node-esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$src$2f$lib$2f$firebaseConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ElderEase-main/src/lib/firebaseConfig.ts [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/tutoriallibrary/tutorialData'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
'use client';
;
;
;
;
;
;
;
function Profile() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [profile, setProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        id: '',
        name: '',
        email: '',
        phone: ''
    });
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isChangingPassword, setIsChangingPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isChangingEmail, setIsChangingEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [passwordData, setPasswordData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [emailData, setEmailData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        newEmail: '',
        currentPassword: ''
    });
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isSaving, setIsSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isUploadingPhoto, setIsUploadingPhoto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [completed, setCompleted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [favorites, setFavorites] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const totalTutorials = tutorials.length;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadUserProfile();
    }, []);
    const loadUserProfile = async ()=>{
        try {
            const user = __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$src$2f$lib$2f$firebaseConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser;
            const userId = user?.uid || localStorage.getItem('elderease_user_id');
            if (!userId) return router.push('/login');
            const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$src$2f$lib$2f$firebaseConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'users', userId));
            if (snap.exists()) {
                const data = {
                    id: userId,
                    ...snap.data()
                };
                setProfile(data);
                setCompleted(snap.data().completed || []);
                setFavorites(snap.data().favorites || []);
                localStorage.setItem('elderease_user', JSON.stringify(data));
                localStorage.setItem('elderease_user_id', userId);
                setLoaded(true);
            } else setMessage('Profile not found.');
        } catch (err) {
            console.error(err);
            setMessage('Error loading profile');
        }
    };
    const handleProfileChange = (e)=>setProfile({
            ...profile,
            [e.target.name]: e.target.value
        });
    const handleSaveProfile = async (e)=>{
        e.preventDefault();
        setIsSaving(true);
        try {
            const userId = profile.id;
            if (!userId) return setMessage('User not found.');
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$src$2f$lib$2f$firebaseConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'users', userId), {
                name: profile.name,
                phone: profile.phone,
                profilePhoto: profile.profilePhoto || null
            }, {
                merge: true
            });
            localStorage.setItem('elderease_user', JSON.stringify(profile));
            setMessage('Profile updated!');
            setIsEditing(false);
        } catch (err) {
            console.error(err);
            setMessage('Error saving profile');
        } finally{
            setIsSaving(false);
            setTimeout(()=>setMessage(''), 3000);
        }
    };
    const handleProfilePhotoUpload = async (e)=>{
        const file = e.target.files?.[0];
        if (!file) return;
        setIsUploadingPhoto(true);
        try {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', 'unsigned_preset'); // e.g., 'profile_upload'
            // Replace with your Cloud name
            const cloudName = 'dv6kpdk7n';
            const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
                method: 'POST',
                body: formData
            });
            const data = await res.json();
            if (!data.secure_url) throw new Error('Upload failed');
            const updatedProfile = {
                ...profile,
                profilePhoto: data.secure_url
            };
            setProfile(updatedProfile);
            const userId = profile.id;
            if (userId) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$src$2f$lib$2f$firebaseConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'users', userId), {
                profilePhoto: data.secure_url
            }, {
                merge: true
            });
            localStorage.setItem('elderease_user', JSON.stringify(updatedProfile));
            setMessage('Profile photo updated!');
        } catch (err) {
            console.error(err);
            setMessage('Error uploading photo');
        } finally{
            setIsUploadingPhoto(false);
            setTimeout(()=>setMessage(''), 3000);
        }
    };
    const handleEmailChange = async (e)=>{
        e.preventDefault();
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$src$2f$lib$2f$firebaseConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser) return setMessage('No logged-in user.');
        if (!emailData.newEmail || !emailData.currentPassword) return setMessage('Fill in both fields.');
        try {
            const credential = __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmailAuthProvider"].credential(__TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$src$2f$lib$2f$firebaseConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser.email, emailData.currentPassword);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reauthenticateWithCredential"])(__TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$src$2f$lib$2f$firebaseConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser, credential);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verifyBeforeUpdateEmail"])(__TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$src$2f$lib$2f$firebaseConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser, emailData.newEmail);
            const userId = profile.id;
            if (userId) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$src$2f$lib$2f$firebaseConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'users', userId), {
                email: emailData.newEmail
            }, {
                merge: true
            });
            setMessage('Verification email sent. Logging out in 3 seconds...');
            setTimeout(async ()=>{
                localStorage.clear();
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signOut"])(__TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$src$2f$lib$2f$firebaseConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"]);
                router.push('/login');
            }, 3000);
        } catch (err) {
            console.error(err);
            if (err.code === 'auth/wrong-password') setMessage('Wrong password.');
            else if (err.code === 'auth/email-already-in-use') setMessage('Email already in use.');
            else setMessage('Error updating email.');
        } finally{
            setTimeout(()=>setMessage(''), 5000);
        }
    };
    const handleChangePassword = async (e)=>{
        e.preventDefault();
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$src$2f$lib$2f$firebaseConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser) return setMessage('No logged-in user.');
        if (passwordData.newPassword !== passwordData.confirmPassword) return setMessage('Passwords do not match.');
        try {
            const credential = __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmailAuthProvider"].credential(__TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$src$2f$lib$2f$firebaseConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser.email, passwordData.currentPassword);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reauthenticateWithCredential"])(__TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$src$2f$lib$2f$firebaseConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser, credential);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updatePassword"])(__TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$src$2f$lib$2f$firebaseConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser, passwordData.newPassword);
            setMessage('Password updated successfully!');
            setPasswordData({
                currentPassword: '',
                newPassword: '',
                confirmPassword: ''
            });
            setIsChangingPassword(false);
        } catch (err) {
            console.error(err);
            if (err.code === 'auth/wrong-password') setMessage('Current password is incorrect.');
            else setMessage('Error changing password.');
        } finally{
            setTimeout(()=>setMessage(''), 4000);
        }
    };
    const handleLogout = async ()=>{
        localStorage.clear();
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signOut"])(__TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$src$2f$lib$2f$firebaseConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"]);
        router.push('/login');
    };
    if (!loaded) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-center items-center h-screen text-gray-600",
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
        lineNumber: 188,
        columnNumber: 23
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white py-10 px-6 grid grid-cols-1 md:grid-cols-3 gap-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:col-span-2 space-y-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 bg-white rounded-3xl shadow-lg border border-gray-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>router.push('/'),
                                    className: "text-blue-500 font-medium hover:underline",
                                    children: "← Home"
                                }, void 0, false, {
                                    fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                                    lineNumber: 196,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-bold text-gray-800",
                                    children: "Profile"
                                }, void 0, false, {
                                    fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                                    lineNumber: 197,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleLogout,
                                    className: "text-red-500 font-medium hover:underline",
                                    children: "Logout"
                                }, void 0, false, {
                                    fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                                    lineNumber: 198,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                            lineNumber: 195,
                            columnNumber: 11
                        }, this),
                        message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `p-3 mb-4 rounded ${message.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`,
                            children: message
                        }, void 0, false, {
                            fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                            lineNumber: 201,
                            columnNumber: 23
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-28 h-28 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg",
                                    children: profile.profilePhoto ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: profile.profilePhoto,
                                        alt: "Profile",
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                                        lineNumber: 207,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-400 text-4xl flex justify-center items-center h-full",
                                        children: "👤"
                                    }, void 0, false, {
                                        fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                                        lineNumber: 208,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                                    lineNumber: 205,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "file",
                                    id: "profilePhoto",
                                    className: "hidden",
                                    accept: "image/*",
                                    onChange: handleProfilePhotoUpload,
                                    disabled: isUploadingPhoto
                                }, void 0, false, {
                                    fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "profilePhoto",
                                    className: `mt-3 px-4 py-2 rounded-full ${isUploadingPhoto ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 cursor-pointer'} text-white font-medium`,
                                    children: isUploadingPhoto ? 'Uploading...' : 'Change Photo'
                                }, void 0, false, {
                                    fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                                    lineNumber: 211,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                            lineNumber: 204,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 text-black",
                            children: [
                                [
                                    'name',
                                    'phone'
                                ].map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-800 capitalize",
                                                children: field
                                            }, void 0, false, {
                                                fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                                                lineNumber: 220,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                name: field,
                                                value: profile[field] || '',
                                                onChange: handleProfileChange,
                                                disabled: !isEditing,
                                                className: `mt-1 w-full px-3 py-2 rounded-xl border ${isEditing ? 'border-blue-400 focus:ring-2 focus:ring-blue-400' : 'border-gray-300'} focus:outline-none transition bg-white`
                                            }, void 0, false, {
                                                fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                                                lineNumber: 221,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, field, true, {
                                        fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                                        lineNumber: 219,
                                        columnNumber: 15
                                    }, this)),
                                isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleSaveProfile,
                                    className: "flex justify-between mt-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition flex items-center justify-center",
                                        disabled: isSaving,
                                        children: isSaving ? 'Saving...' : 'Save'
                                    }, void 0, false, {
                                        fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                                        lineNumber: 234,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                                    lineNumber: 233,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsEditing(true),
                                    className: "bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition mt-4",
                                    children: "Edit Profile"
                                }, void 0, false, {
                                    fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                                    lineNumber: 243,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                            lineNumber: 217,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 pt-6 border-t space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsChangingEmail(!isChangingEmail),
                                            className: "bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition w-full mb-2",
                                            children: isChangingEmail ? 'Cancel Email Change' : 'Change Email'
                                        }, void 0, false, {
                                            fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                                            lineNumber: 253,
                                            columnNumber: 15
                                        }, this),
                                        isChangingEmail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            onSubmit: handleEmailChange,
                                            className: "space-y-2 text-black",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    value: profile.email,
                                                    readOnly: true,
                                                    className: "mt-1 w-full px-3 py-2 rounded-xl border border-gray-300 bg-gray-100 cursor-not-allowed focus:outline-none transition"
                                                }, void 0, false, {
                                                    fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                                                    lineNumber: 262,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    placeholder: "New Email",
                                                    value: emailData.newEmail,
                                                    onChange: (e)=>setEmailData({
                                                            ...emailData,
                                                            newEmail: e.target.value
                                                        }),
                                                    className: "mt-1 w-full px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "password",
                                                    placeholder: "Current Password",
                                                    value: emailData.currentPassword,
                                                    onChange: (e)=>setEmailData({
                                                            ...emailData,
                                                            currentPassword: e.target.value
                                                        }),
                                                    className: "mt-1 w-full px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                                                    lineNumber: 264,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    className: "bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition w-full",
                                                    children: "Update Email"
                                                }, void 0, false, {
                                                    fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                                            lineNumber: 261,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                                    lineNumber: 252,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsChangingPassword(!isChangingPassword),
                                            className: "bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition w-full mb-2",
                                            children: isChangingPassword ? 'Cancel Password Change' : 'Change Password'
                                        }, void 0, false, {
                                            fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                                            lineNumber: 272,
                                            columnNumber: 15
                                        }, this),
                                        isChangingPassword && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            onSubmit: handleChangePassword,
                                            className: "space-y-2 text-black",
                                            children: [
                                                [
                                                    'currentPassword',
                                                    'newPassword',
                                                    'confirmPassword'
                                                ].map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "password",
                                                            name: field,
                                                            value: passwordData[field],
                                                            onChange: (e)=>setPasswordData({
                                                                    ...passwordData,
                                                                    [field]: e.target.value
                                                                }),
                                                            placeholder: field.replace(/([A-Z])/g, ' $1'),
                                                            className: "mt-1 w-full px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition",
                                                            required: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                                                            lineNumber: 283,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, field, false, {
                                                        fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                                                        lineNumber: 282,
                                                        columnNumber: 21
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    className: "bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition w-full",
                                                    children: "Update Password"
                                                }, void 0, false, {
                                                    fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                                            lineNumber: 280,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                                    lineNumber: 271,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                            lineNumber: 250,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                    lineNumber: 194,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:col-span-1 sticky top-8 space-y-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 bg-gray-50 rounded-2xl shadow-lg border border-gray-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold mb-4",
                            children: "Learning Progress"
                        }, void 0, false, {
                            fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                            lineNumber: 297,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between mb-1 text-sm text-gray-600",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Completed Tutorials"
                                        }, void 0, false, {
                                            fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                                            lineNumber: 302,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                completed.length,
                                                " / ",
                                                totalTutorials
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                                            lineNumber: 303,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                                    lineNumber: 301,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-4 bg-gray-200 rounded-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-4 bg-green-500 rounded-full transition-all",
                                        style: {
                                            width: `${completed.length / totalTutorials * 100}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                                        lineNumber: 306,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                                    lineNumber: 305,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                            lineNumber: 300,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold mb-2",
                                    children: "Achievements"
                                }, void 0, false, {
                                    fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                                    lineNumber: 312,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: [
                                        completed.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs",
                                            children: "First Steps"
                                        }, void 0, false, {
                                            fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                                            lineNumber: 314,
                                            columnNumber: 39
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "px-2 py-1 bg-gray-100 text-gray-500 rounded-full text-xs",
                                            children: "No badges yet"
                                        }, void 0, false, {
                                            fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                                            lineNumber: 314,
                                            columnNumber: 139
                                        }, this),
                                        completed.length >= 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs",
                                            children: "5 Tutorials Completed"
                                        }, void 0, false, {
                                            fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                                            lineNumber: 315,
                                            columnNumber: 41
                                        }, this),
                                        completed.length >= 10 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs",
                                            children: "10 Tutorials Completed"
                                        }, void 0, false, {
                                            fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                                            lineNumber: 316,
                                            columnNumber: 42
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                                    lineNumber: 313,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                            lineNumber: 311,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold mb-2",
                                    children: "Motivation"
                                }, void 0, false, {
                                    fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                                    lineNumber: 322,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-disc list-inside text-gray-700 text-sm",
                                    children: [
                                        completed.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Start your first tutorial today!"
                                        }, void 0, false, {
                                            fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                                            lineNumber: 324,
                                            columnNumber: 42
                                        }, this),
                                        completed.length > 0 && completed.length < totalTutorials && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Keep going! You’re making progress."
                                        }, void 0, false, {
                                            fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                                            lineNumber: 325,
                                            columnNumber: 77
                                        }, this),
                                        completed.length === totalTutorials && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ElderEase$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Awesome! You completed all tutorials! 🎉"
                                        }, void 0, false, {
                                            fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                                            lineNumber: 326,
                                            columnNumber: 55
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                                    lineNumber: 323,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                            lineNumber: 321,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                    lineNumber: 296,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
                lineNumber: 295,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/ElderEase-main/src/app/profile/page.tsx",
        lineNumber: 191,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=ElderEase-main_src_app_profile_page_tsx_4f3ec376._.js.map