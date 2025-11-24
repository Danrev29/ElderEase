module.exports = [
"[project]/ElderEase-main/src/app/favicon.ico.mjs { IMAGE => \"[project]/ElderEase-main/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/ElderEase-main/src/app/favicon.ico.mjs { IMAGE => \"[project]/ElderEase-main/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/ElderEase-main/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/ElderEase-main/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// sw-tutorials.js
const CACHE_NAME = 'elder-ease-tutorials-v1';
const STATIC_ASSETS = [
    '/',
    '/favicon.ico'
];
self.addEventListener('install', (ev)=>{
    ev.waitUntil(caches.open(CACHE_NAME).then((cache)=>cache.addAll(STATIC_ASSETS)));
    self.skipWaiting();
});
self.addEventListener('fetch', (ev)=>{
    const url = new URL(ev.request.url);
    // Always try network first for API/Firestore (can't cache writes)
    if (ev.request.method !== 'GET') return;
    ev.respondWith(caches.match(ev.request).then((cacheResp)=>{
        const fetchPromise = fetch(ev.request).then((networkResp)=>{
            // cache new GET responses for offline
            caches.open(CACHE_NAME).then((cache)=>{
                if (networkResp && networkResp.status === 200) cache.put(ev.request, networkResp.clone());
            });
            return networkResp.clone();
        }).catch(()=>cacheResp);
        return cacheResp || fetchPromise;
    }));
});
}),
"[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/ElderEase-main/src/app/tutoriallibrary/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__25d73a44._.js.map