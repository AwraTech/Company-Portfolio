(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/context/ThemeContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    isDark: false,
    toggle: ()=>{}
});
const useTheme = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "e46d4a0377349adfd6881706f14202a72def244fd6c9738f821347b3f8807b3e") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e46d4a0377349adfd6881706f14202a72def244fd6c9738f821347b3f8807b3e";
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
};
_s(useTheme, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
const lightTheme = {
    '--background': '#30504f',
    '--foreground': '#ffffff',
    '--primary': '#00ffab',
    '--primary-hover': '#00e69a',
    '--secondary': '#e0ffff',
    '--card-bg': '#3a5a59',
    '--section-bg': '#3a5a59',
    '--border-color': '#426363'
};
const darkTheme = {
    '--background': '#0a192f',
    '--foreground': '#ffffff',
    '--primary': '#64ffda',
    '--primary-hover': '#52e6c8',
    '--secondary': '#8892b0',
    '--card-bg': '#112240',
    '--section-bg': '#112240',
    '--border-color': '#1e293b'
};
function ThemeProvider(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "e46d4a0377349adfd6881706f14202a72def244fd6c9738f821347b3f8807b3e") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e46d4a0377349adfd6881706f14202a72def244fd6c9738f821347b3f8807b3e";
    }
    const { children } = t0;
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "ThemeProvider[useEffect()]": ()=>{
                const saved = localStorage.getItem("theme");
                setIsDark(saved === "dark");
            }
        })["ThemeProvider[useEffect()]"];
        t2 = [];
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    const applyTheme = _ThemeProviderApplyTheme;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "ThemeProvider[toggle]": ()=>{
                setIsDark({
                    "ThemeProvider[toggle > setIsDark()]": (prev)=>{
                        const newValue = !prev;
                        localStorage.setItem("theme", newValue ? "dark" : "light");
                        applyTheme(newValue);
                        return newValue;
                    }
                }["ThemeProvider[toggle > setIsDark()]"]);
            }
        })["ThemeProvider[toggle]"];
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const toggle = t3;
    let t4;
    if ($[4] !== isDark) {
        t4 = {
            isDark,
            toggle
        };
        $[4] = isDark;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== children || $[7] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
            value: t4,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/context/ThemeContext.tsx",
            lineNumber: 101,
            columnNumber: 10
        }, this);
        $[6] = children;
        $[7] = t4;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    return t5;
}
_s1(ThemeProvider, "q9ovQTvwIdpxeVii6kJLTuTYpwE=");
_c = ThemeProvider;
function _ThemeProviderApplyTheme(dark) {
    const root = document.documentElement;
    const theme = dark ? darkTheme : lightTheme;
    Object.entries(theme).forEach({
        "ThemeProvider[applyTheme > (anonymous)()]": (t0)=>{
            const [key, value] = t0;
            root.style.setProperty(key, value);
        }
    }["ThemeProvider[applyTheme > (anonymous)()]"]);
    if (dark) {
        root.classList.add("dark");
    } else {
        root.classList.remove("dark");
    }
}
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Header() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(45);
    if ($[0] !== "b4c4ea77252295ffe9bc9f07a76047e8155a48c4d24a790e41db336eb103ee1d") {
        for(let $i = 0; $i < 45; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b4c4ea77252295ffe9bc9f07a76047e8155a48c4d24a790e41db336eb103ee1d";
    }
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { isDark, toggle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const t0 = `fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/10 ${isDark ? "bg-[#0f172a]/80" : "bg-[#30504F]/80"}`;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-shrink-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "/",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/assets/logo.png",
                    alt: "Awra Tech",
                    width: 120,
                    height: 120,
                    className: "object-contain cursor-pointer"
                }, void 0, false, {
                    fileName: "[project]/src/components/Header.tsx",
                    lineNumber: 24,
                    columnNumber: 53
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 24,
                columnNumber: 41
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Header.tsx",
            lineNumber: 24,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/#home",
                    className: "text-white hover:text-[#00FFAB] transition",
                    children: "Home"
                }, void 0, false, {
                    fileName: "[project]/src/components/Header.tsx",
                    lineNumber: 31,
                    columnNumber: 110
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/#about",
                    className: "text-white hover:text-[#00FFAB] transition",
                    children: "About"
                }, void 0, false, {
                    fileName: "[project]/src/components/Header.tsx",
                    lineNumber: 31,
                    columnNumber: 190
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/#services",
                    className: "text-white hover:text-[#00FFAB] transition",
                    children: "Services"
                }, void 0, false, {
                    fileName: "[project]/src/components/Header.tsx",
                    lineNumber: 31,
                    columnNumber: 272
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/#team",
                    className: "text-white hover:text-[#00FFAB] transition",
                    children: "Meet Team"
                }, void 0, false, {
                    fileName: "[project]/src/components/Header.tsx",
                    lineNumber: 31,
                    columnNumber: 360
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Header.tsx",
            lineNumber: 31,
            columnNumber: 10
        }, this);
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] !== isDark) {
        t3 = isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdLightMode"], {
            size: 24
        }, void 0, false, {
            fileName: "[project]/src/components/Header.tsx",
            lineNumber: 38,
            columnNumber: 19
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdDarkMode"], {
            size: 24
        }, void 0, false, {
            fileName: "[project]/src/components/Header.tsx",
            lineNumber: 38,
            columnNumber: 47
        }, this);
        $[3] = isDark;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== t3 || $[6] !== toggle) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: toggle,
            className: "text-white hover:text-[#00FFAB] transition-all p-2 hover:scale-110 cursor-pointer",
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/components/Header.tsx",
            lineNumber: 46,
            columnNumber: 10
        }, this);
        $[5] = t3;
        $[6] = toggle;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "/news",
            className: "text-[#00FFAB] font-bold text-lg hover:scale-110 transition-transform duration-300",
            children: "News / Blog"
        }, void 0, false, {
            fileName: "[project]/src/components/Header.tsx",
            lineNumber: 55,
            columnNumber: 10
        }, this);
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== t4) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden md:flex items-center gap-6",
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Header.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        $[9] = t4;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== isDark) {
        t7 = isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdLightMode"], {
            size: 24
        }, void 0, false, {
            fileName: "[project]/src/components/Header.tsx",
            lineNumber: 70,
            columnNumber: 19
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdDarkMode"], {
            size: 24
        }, void 0, false, {
            fileName: "[project]/src/components/Header.tsx",
            lineNumber: 70,
            columnNumber: 47
        }, this);
        $[11] = isDark;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== t7 || $[14] !== toggle) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: toggle,
            className: "text-white hover:text-[#00FFAB] transition-all p-2 cursor-pointer",
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/components/Header.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        $[13] = t7;
        $[14] = toggle;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== isMenuOpen) {
        t9 = ({
            "Header[<button>.onClick]": ()=>setIsMenuOpen(!isMenuOpen)
        })["Header[<button>.onClick]"];
        $[16] = isMenuOpen;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    const t10 = `block h-0.5 bg-[#00FFAB] rounded-full transition-all duration-300 origin-left ${isMenuOpen ? "rotate-45 w-7" : "w-6"}`;
    let t11;
    if ($[18] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t10
        }, void 0, false, {
            fileName: "[project]/src/components/Header.tsx",
            lineNumber: 98,
            columnNumber: 11
        }, this);
        $[18] = t10;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    const t12 = `block h-0.5 bg-[#00FFAB] rounded-full transition-all duration-300 ${isMenuOpen ? "opacity-0 scale-0" : "w-5 opacity-100 scale-100"}`;
    let t13;
    if ($[20] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t12
        }, void 0, false, {
            fileName: "[project]/src/components/Header.tsx",
            lineNumber: 107,
            columnNumber: 11
        }, this);
        $[20] = t12;
        $[21] = t13;
    } else {
        t13 = $[21];
    }
    const t14 = `block h-0.5 bg-[#00FFAB] rounded-full transition-all duration-300 origin-left ${isMenuOpen ? "-rotate-45 w-7" : "w-6"}`;
    let t15;
    if ($[22] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t14
        }, void 0, false, {
            fileName: "[project]/src/components/Header.tsx",
            lineNumber: 116,
            columnNumber: 11
        }, this);
        $[22] = t14;
        $[23] = t15;
    } else {
        t15 = $[23];
    }
    let t16;
    if ($[24] !== t11 || $[25] !== t13 || $[26] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-6 h-5 flex flex-col justify-between",
            children: [
                t11,
                t13,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Header.tsx",
            lineNumber: 124,
            columnNumber: 11
        }, this);
        $[24] = t11;
        $[25] = t13;
        $[26] = t15;
        $[27] = t16;
    } else {
        t16 = $[27];
    }
    let t17;
    if ($[28] !== t16 || $[29] !== t9) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t9,
            className: "relative w-10 h-10 flex items-center justify-center group",
            children: t16
        }, void 0, false, {
            fileName: "[project]/src/components/Header.tsx",
            lineNumber: 134,
            columnNumber: 11
        }, this);
        $[28] = t16;
        $[29] = t9;
        $[30] = t17;
    } else {
        t17 = $[30];
    }
    let t18;
    if ($[31] !== t17 || $[32] !== t8) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:hidden flex items-center gap-4",
            children: [
                t8,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Header.tsx",
            lineNumber: 143,
            columnNumber: 11
        }, this);
        $[31] = t17;
        $[32] = t8;
        $[33] = t18;
    } else {
        t18 = $[33];
    }
    let t19;
    if ($[34] !== t18 || $[35] !== t6) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center h-20",
            children: [
                t1,
                t2,
                t6,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Header.tsx",
            lineNumber: 152,
            columnNumber: 11
        }, this);
        $[34] = t18;
        $[35] = t6;
        $[36] = t19;
    } else {
        t19 = $[36];
    }
    let t20;
    if ($[37] !== isMenuOpen) {
        t20 = isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:hidden pb-4 animate-slideDown border-t border-white/10 mt-2 pt-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/#home",
                    className: "block py-3 px-4 text-white hover:text-[#00FFAB] hover:bg-white/5 rounded-lg transition-all transform hover:translate-x-2",
                    children: "Home"
                }, void 0, false, {
                    fileName: "[project]/src/components/Header.tsx",
                    lineNumber: 161,
                    columnNumber: 110
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/#about",
                    className: "block py-3 px-4 text-white hover:text-[#00FFAB] hover:bg-white/5 rounded-lg transition-all transform hover:translate-x-2",
                    children: "About"
                }, void 0, false, {
                    fileName: "[project]/src/components/Header.tsx",
                    lineNumber: 161,
                    columnNumber: 268
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/#services",
                    className: "block py-3 px-4 text-white hover:text-[#00FFAB] hover:bg-white/5 rounded-lg transition-all transform hover:translate-x-2",
                    children: "Services"
                }, void 0, false, {
                    fileName: "[project]/src/components/Header.tsx",
                    lineNumber: 161,
                    columnNumber: 428
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/#team",
                    className: "block py-3 px-4 text-white hover:text-[#00FFAB] hover:bg-white/5 rounded-lg transition-all transform hover:translate-x-2",
                    children: "Meet Team"
                }, void 0, false, {
                    fileName: "[project]/src/components/Header.tsx",
                    lineNumber: 161,
                    columnNumber: 594
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/news",
                    className: "block py-3 px-4 text-[#00FFAB] font-bold text-lg hover:bg-white/5 rounded-lg transition-all transform hover:translate-x-2 hover:scale-105",
                    children: "News / Blog"
                }, void 0, false, {
                    fileName: "[project]/src/components/Header.tsx",
                    lineNumber: 161,
                    columnNumber: 757
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Header.tsx",
            lineNumber: 161,
            columnNumber: 25
        }, this);
        $[37] = isMenuOpen;
        $[38] = t20;
    } else {
        t20 = $[38];
    }
    let t21;
    if ($[39] !== t19 || $[40] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Header.tsx",
            lineNumber: 169,
            columnNumber: 11
        }, this);
        $[39] = t19;
        $[40] = t20;
        $[41] = t21;
    } else {
        t21 = $[41];
    }
    let t22;
    if ($[42] !== t0 || $[43] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: t0,
            children: t21
        }, void 0, false, {
            fileName: "[project]/src/components/Header.tsx",
            lineNumber: 178,
            columnNumber: 11
        }, this);
        $[42] = t0;
        $[43] = t21;
        $[44] = t22;
    } else {
        t22 = $[44];
    }
    return t22;
}
_s(Header, "Cd4Ujh9Dpsfke+egiNPngEfeBi0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Chatbot.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Chatbot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io5/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Chatbot() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(37);
    if ($[0] !== "2fe05599f72cb96d073a3aaa47f0dd9909ed4c234542c63a3ee1aa653e90d28b") {
        for(let $i = 0; $i < 37; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2fe05599f72cb96d073a3aaa47f0dd9909ed4c234542c63a3ee1aa653e90d28b";
    }
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { isDark } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                text: "Hi! I'm Awra AI, your intelligent assistant. How can I help you today?",
                isBot: true,
                timestamp: new Date()
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "Chatbot[scrollToBottom]": ()=>{
                messagesEndRef.current?.scrollIntoView({
                    behavior: "smooth"
                });
            }
        })["Chatbot[scrollToBottom]"];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const scrollToBottom = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "Chatbot[useEffect()]": ()=>{
                scrollToBottom();
            }
        })["Chatbot[useEffect()]"];
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let handleSend;
    if ($[6] !== input) {
        handleSend = ({
            "Chatbot[handleSend]": ()=>{
                if (!input.trim()) {
                    return;
                }
                const userMessage = {
                    text: input,
                    isBot: false,
                    timestamp: new Date()
                };
                setMessages({
                    "Chatbot[handleSend > setMessages()]": (prev)=>[
                            ...prev,
                            userMessage
                        ]
                }["Chatbot[handleSend > setMessages()]"]);
                setInput("");
                setIsTyping(true);
                setTimeout({
                    "Chatbot[handleSend > setTimeout()]": ()=>{
                        const botResponse = getBotResponse(input);
                        setMessages({
                            "Chatbot[handleSend > setTimeout() > setMessages()]": (prev_0)=>[
                                    ...prev_0,
                                    {
                                        text: botResponse,
                                        isBot: true,
                                        timestamp: new Date()
                                    }
                                ]
                        }["Chatbot[handleSend > setTimeout() > setMessages()]"]);
                        setIsTyping(false);
                    }
                }["Chatbot[handleSend > setTimeout()]"], 1500);
            }
        })["Chatbot[handleSend]"];
        const getBotResponse = _ChatbotGetBotResponse;
        $[6] = input;
        $[7] = handleSend;
    } else {
        handleSend = $[7];
    }
    if (pathname === "/contact" || pathname === "/news") {
        return null;
    }
    let t4;
    if ($[8] !== isOpen) {
        t4 = ({
            "Chatbot[<button>.onClick]": ()=>setIsOpen(!isOpen)
        })["Chatbot[<button>.onClick]"];
        $[8] = isOpen;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    const t5 = `w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl group-hover:shadow-[#00FFAB]/30 transition-all duration-300 group-hover:scale-110 border-2 border-[#00FFAB] ${isDark ? "bg-[#0f172a]" : "bg-[#30504F]"}`;
    let t6;
    if ($[10] !== isDark || $[11] !== isOpen) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full rounded-full flex items-center justify-center relative overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 transition-all duration-300 group-hover:scale-110",
                children: isOpen ? (isDark ? "text-white" : "text-white", /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoClose"], {
                    size: 28,
                    className: "font-bold animate-spin text-white",
                    style: {
                        animationDuration: "0.3s",
                        animationIterationCount: "1"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/Chatbot.tsx",
                    lineNumber: 130,
                    columnNumber: 242
                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative animate-bounce",
                    style: {
                        animationDuration: "2s"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "32",
                            height: "32",
                            viewBox: "0 0 24 24",
                            className: isDark ? "text-white" : "text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fill: "currentColor",
                                    strokeWidth: "2",
                                    stroke: "currentColor",
                                    d: "M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3.04 1.05 4.35L2 22l5.65-1.05C9.96 21.64 11.46 22 13 22h7c1.1 0 2-.9 2-2V12c0-5.52-4.48-10-10-10z"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Chatbot.tsx",
                                    lineNumber: 135,
                                    columnNumber: 109
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "8",
                                    cy: "12",
                                    r: "2",
                                    fill: "#00FFAB",
                                    className: "animate-pulse",
                                    style: {
                                        animationDelay: "0s"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Chatbot.tsx",
                                    lineNumber: 135,
                                    columnNumber: 312
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "12",
                                    cy: "12",
                                    r: "2",
                                    fill: "#00FFAB",
                                    className: "animate-pulse",
                                    style: {
                                        animationDelay: "0.3s"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Chatbot.tsx",
                                    lineNumber: 137,
                                    columnNumber: 18
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "16",
                                    cy: "12",
                                    r: "2",
                                    fill: "#00FFAB",
                                    className: "animate-pulse",
                                    style: {
                                        animationDelay: "0.6s"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Chatbot.tsx",
                                    lineNumber: 139,
                                    columnNumber: 18
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Chatbot.tsx",
                            lineNumber: 135,
                            columnNumber: 12
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `absolute -top-1 -right-1 w-4 h-4 bg-[#00FFAB] rounded-full animate-ping ${isDark ? "border-2 border-[#0f172a]" : "border-2 border-white"}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/Chatbot.tsx",
                            lineNumber: 141,
                            columnNumber: 24
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Chatbot.tsx",
                    lineNumber: 133,
                    columnNumber: 18
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Chatbot.tsx",
                lineNumber: 130,
                columnNumber: 112
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Chatbot.tsx",
            lineNumber: 130,
            columnNumber: 10
        }, this);
        $[10] = isDark;
        $[11] = isOpen;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== t5 || $[14] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/components/Chatbot.tsx",
            lineNumber: 150,
            columnNumber: 10
        }, this);
        $[13] = t5;
        $[14] = t6;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    const t8 = `absolute right-full mr-3 top-1/2 -translate-y-1/2 px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-300 whitespace-nowrap shadow-xl border-2 border-[#00FFAB] transform scale-95 group-hover:scale-100 group-active:scale-100 ${isDark ? "bg-[#0f172a] text-[#00FFAB]" : "bg-[#30504F] text-[#00FFAB]"}`;
    const t9 = `absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent ${isDark ? "border-l-[#0f172a]" : "border-l-[#30504F]"}`;
    let t10;
    if ($[16] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t9
        }, void 0, false, {
            fileName: "[project]/src/components/Chatbot.tsx",
            lineNumber: 161,
            columnNumber: 11
        }, this);
        $[16] = t9;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] !== t10 || $[19] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t8,
            children: [
                "💬 Chat with Awra AI",
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Chatbot.tsx",
            lineNumber: 169,
            columnNumber: 11
        }, this);
        $[18] = t10;
        $[19] = t8;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    let t12;
    if ($[21] !== t11 || $[22] !== t7) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t7,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Chatbot.tsx",
            lineNumber: 178,
            columnNumber: 11
        }, this);
        $[21] = t11;
        $[22] = t7;
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    let t13;
    if ($[24] !== t12 || $[25] !== t4) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t4,
            className: "fixed bottom-8 right-4 sm:bottom-8 sm:right-8 z-50 group transition-all duration-300 drop-shadow-2xl cursor-pointer",
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/components/Chatbot.tsx",
            lineNumber: 187,
            columnNumber: 11
        }, this);
        $[24] = t12;
        $[25] = t4;
        $[26] = t13;
    } else {
        t13 = $[26];
    }
    let t14;
    if ($[27] !== handleSend || $[28] !== input || $[29] !== isDark || $[30] !== isOpen || $[31] !== isTyping || $[32] !== messages) {
        t14 = isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `fixed bottom-20 right-4 sm:bottom-24 sm:right-8 top-24 sm:top-24 z-40 w-[calc(100vw-2rem)] sm:w-[400px] h-auto sm:h-[calc(100vh-12rem)] max-w-[400px] max-h-[calc(100vh-14rem)] sm:max-h-[550px] backdrop-blur-lg rounded-2xl shadow-2xl flex flex-col overflow-hidden border ${isDark ? "bg-[#0A192F]/95 border-white/10" : "bg-white/95 border-[#00FFAB]/20"}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-r from-[#30504F] via-[#30504F] to-[#30504F]/90 p-4 flex items-center justify-between border-b border-[#00FFAB]/20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 rounded-full bg-gradient-to-br from-[#00FFAB] to-[#00FFAB]/80 p-0.5 shadow-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full h-full rounded-full bg-[#30504F] flex items-center justify-center overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    viewBox: "0 0 100 100",
                                                    className: "w-full h-full",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: "50",
                                                            cy: "35",
                                                            r: "20",
                                                            fill: "#00FFAB",
                                                            className: "animate-pulse"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Chatbot.tsx",
                                                            lineNumber: 196,
                                                            columnNumber: 869
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M 35 30 Q 40 25 45 30 Q 50 25 55 30 Q 60 25 65 30",
                                                            stroke: "#30504F",
                                                            strokeWidth: "2",
                                                            fill: "none",
                                                            className: "animate-pulse"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Chatbot.tsx",
                                                            lineNumber: 196,
                                                            columnNumber: 943
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M 35 35 Q 40 30 45 35 Q 50 30 55 35 Q 60 30 65 35",
                                                            stroke: "#30504F",
                                                            strokeWidth: "2",
                                                            fill: "none",
                                                            className: "animate-pulse",
                                                            style: {
                                                                animationDelay: "0.3s"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Chatbot.tsx",
                                                            lineNumber: 196,
                                                            columnNumber: 1076
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M 35 40 Q 40 35 45 40 Q 50 35 55 40 Q 60 35 65 40",
                                                            stroke: "#30504F",
                                                            strokeWidth: "2",
                                                            fill: "none",
                                                            className: "animate-pulse",
                                                            style: {
                                                                animationDelay: "0.6s"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Chatbot.tsx",
                                                            lineNumber: 198,
                                                            columnNumber: 24
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                            x: "42",
                                                            y: "32",
                                                            width: "4",
                                                            height: "6",
                                                            rx: "2",
                                                            fill: "#30504F",
                                                            className: "animate-pulse"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Chatbot.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 24
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                            x: "54",
                                                            y: "32",
                                                            width: "4",
                                                            height: "6",
                                                            rx: "2",
                                                            fill: "#30504F",
                                                            className: "animate-pulse"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Chatbot.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 115
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                            x: "45",
                                                            y: "42",
                                                            width: "10",
                                                            height: "2",
                                                            rx: "1",
                                                            fill: "#30504F",
                                                            className: "animate-pulse"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Chatbot.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 206
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                            x: "35",
                                                            y: "55",
                                                            width: "30",
                                                            height: "35",
                                                            rx: "15",
                                                            fill: "#00FFAB",
                                                            className: "animate-breathe"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Chatbot.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 298
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: "25",
                                                            cy: "25",
                                                            r: "2",
                                                            fill: "#00FFAB",
                                                            className: "animate-ping",
                                                            style: {
                                                                animationDelay: "0s"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Chatbot.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 394
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: "75",
                                                            cy: "30",
                                                            r: "1.5",
                                                            fill: "#00FFAB",
                                                            className: "animate-ping",
                                                            style: {
                                                                animationDelay: "0.5s"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Chatbot.tsx",
                                                            lineNumber: 202,
                                                            columnNumber: 24
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: "20",
                                                            cy: "45",
                                                            r: "1",
                                                            fill: "#00FFAB",
                                                            className: "animate-ping",
                                                            style: {
                                                                animationDelay: "1s"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Chatbot.tsx",
                                                            lineNumber: 204,
                                                            columnNumber: 24
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: "80",
                                                            cy: "50",
                                                            r: "1.5",
                                                            fill: "#00FFAB",
                                                            className: "animate-ping",
                                                            style: {
                                                                animationDelay: "1.5s"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Chatbot.tsx",
                                                            lineNumber: 206,
                                                            columnNumber: 24
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Chatbot.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 816
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Chatbot.tsx",
                                                lineNumber: 196,
                                                columnNumber: 710
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Chatbot.tsx",
                                            lineNumber: 196,
                                            columnNumber: 605
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute bottom-0 right-0 w-3 h-3 bg-[#00FFAB] rounded-full border-2 border-[#30504F] animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Chatbot.tsx",
                                            lineNumber: 208,
                                            columnNumber: 42
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Chatbot.tsx",
                                    lineNumber: 196,
                                    columnNumber: 579
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-[#00FFAB] font-bold text-base",
                                            children: "Awra AI"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Chatbot.tsx",
                                            lineNumber: 208,
                                            columnNumber: 173
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#00FFAB]/70 text-xs flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-2 h-2 bg-[#00FFAB] rounded-full animate-pulse"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Chatbot.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 301
                                                }, this),
                                                "Online Assistant"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Chatbot.tsx",
                                            lineNumber: 208,
                                            columnNumber: 236
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Chatbot.tsx",
                                    lineNumber: 208,
                                    columnNumber: 168
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Chatbot.tsx",
                            lineNumber: 196,
                            columnNumber: 538
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "Chatbot[<button>.onClick]": ()=>setIsOpen(false)
                            }["Chatbot[<button>.onClick]"],
                            className: "text-[#00FFAB] hover:text-white transition-colors duration-200 p-1 rounded-full hover:bg-[#00FFAB]/10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoClose"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/src/components/Chatbot.tsx",
                                lineNumber: 210,
                                columnNumber: 155
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Chatbot.tsx",
                            lineNumber: 208,
                            columnNumber: 401
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Chatbot.tsx",
                    lineNumber: 196,
                    columnNumber: 392
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 ${isDark ? "bg-[#0A192F]" : "bg-gradient-to-b from-white/50 to-white/80"}`,
                    children: [
                        messages.map({
                            "Chatbot[messages.map()]": (msg, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex ${msg.isBot ? "justify-start" : "justify-end"} animate-slideDown`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `max-w-[85%] sm:max-w-[75%] p-2.5 sm:p-3 rounded-2xl shadow-md ${msg.isBot ? isDark ? "bg-white/10 text-white" : "bg-gray-100 text-gray-800" : "bg-[#00FFAB] text-black"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs sm:text-sm",
                                                children: msg.text
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Chatbot.tsx",
                                                lineNumber: 211,
                                                columnNumber: 339
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] sm:text-xs opacity-60 mt-1 block",
                                                children: msg.timestamp.toLocaleTimeString([], {
                                                    hour: "2-digit",
                                                    minute: "2-digit"
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Chatbot.tsx",
                                                lineNumber: 211,
                                                columnNumber: 387
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Chatbot.tsx",
                                        lineNumber: 211,
                                        columnNumber: 151
                                    }, this)
                                }, idx, false, {
                                    fileName: "[project]/src/components/Chatbot.tsx",
                                    lineNumber: 211,
                                    columnNumber: 52
                                }, this)
                        }["Chatbot[messages.map()]"]),
                        isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-start",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-3 rounded-2xl shadow-md ${isDark ? "bg-white/10" : "bg-gray-100"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `w-2 h-2 rounded-full animate-bounce ${isDark ? "bg-white" : "bg-gray-400"}`,
                                            style: {
                                                animationDelay: "0ms"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Chatbot.tsx",
                                            lineNumber: 215,
                                            columnNumber: 203
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `w-2 h-2 rounded-full animate-bounce ${isDark ? "bg-white" : "bg-gray-400"}`,
                                            style: {
                                                animationDelay: "150ms"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Chatbot.tsx",
                                            lineNumber: 217,
                                            columnNumber: 20
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `w-2 h-2 rounded-full animate-bounce ${isDark ? "bg-white" : "bg-gray-400"}`,
                                            style: {
                                                animationDelay: "300ms"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Chatbot.tsx",
                                            lineNumber: 219,
                                            columnNumber: 20
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Chatbot.tsx",
                                    lineNumber: 215,
                                    columnNumber: 175
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Chatbot.tsx",
                                lineNumber: 215,
                                columnNumber: 88
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Chatbot.tsx",
                            lineNumber: 215,
                            columnNumber: 52
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: messagesEndRef
                        }, void 0, false, {
                            fileName: "[project]/src/components/Chatbot.tsx",
                            lineNumber: 221,
                            columnNumber: 39
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Chatbot.tsx",
                    lineNumber: 210,
                    columnNumber: 191
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `p-3 sm:p-4 border-t ${isDark ? "bg-[#0A192F] border-white/10" : "bg-white border-gray-200"}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: input,
                                onChange: {
                                    "Chatbot[<input>.onChange]": (e)=>setInput(e.target.value)
                                }["Chatbot[<input>.onChange]"],
                                onKeyPress: {
                                    "Chatbot[<input>.onKeyPress]": (e_0)=>e_0.key === "Enter" && handleSend()
                                }["Chatbot[<input>.onKeyPress]"],
                                placeholder: "Type your message...",
                                className: `flex-1 px-3 sm:px-4 py-2 border rounded-full focus:outline-none focus:border-[#00FFAB] transition text-sm ${isDark ? "bg-white/10 border-white/20 text-white placeholder-white/50" : "bg-white border-gray-300 text-black placeholder-gray-400"}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/Chatbot.tsx",
                                lineNumber: 221,
                                columnNumber: 212
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSend,
                                className: "bg-[#00FFAB] hover:bg-[#00FFAB]/80 text-black p-2 rounded-full transition-all hover:scale-110 flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoSend"], {
                                    size: 18,
                                    className: "sm:w-5 sm:h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Chatbot.tsx",
                                    lineNumber: 225,
                                    columnNumber: 486
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Chatbot.tsx",
                                lineNumber: 225,
                                columnNumber: 337
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Chatbot.tsx",
                        lineNumber: 221,
                        columnNumber: 184
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Chatbot.tsx",
                    lineNumber: 221,
                    columnNumber: 73
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Chatbot.tsx",
            lineNumber: 196,
            columnNumber: 21
        }, this);
        $[27] = handleSend;
        $[28] = input;
        $[29] = isDark;
        $[30] = isOpen;
        $[31] = isTyping;
        $[32] = messages;
        $[33] = t14;
    } else {
        t14 = $[33];
    }
    let t15;
    if ($[34] !== t13 || $[35] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t13,
                t14
            ]
        }, void 0, true);
        $[34] = t13;
        $[35] = t14;
        $[36] = t15;
    } else {
        t15 = $[36];
    }
    return t15;
}
_s(Chatbot, "dqy5iBWsBpSNv0iOFkANrmxYU18=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Chatbot;
function _ChatbotGetBotResponse(userInput) {
    const input_0 = userInput.toLowerCase();
    if (input_0.includes("hello") || input_0.includes("hi") || input_0.includes("hey")) {
        return "Hello! I'm Awra AI, your intelligent assistant. I'm here to help you with anything you need!";
    }
    if (input_0.includes("service")) {
        return "We offer web development, mobile apps, AI solutions, and cloud services. What interests you?";
    }
    if (input_0.includes("contact")) {
        return "You can reach us at contact@awratech.com or call +1 (555) 123-4567";
    }
    if (input_0.includes("price") || input_0.includes("cost")) {
        return "Our pricing varies by project. Let's discuss your needs! Contact our team for a custom quote.";
    }
    if (input_0.includes("team")) {
        return "We have a talented team of developers, designers, and AI specialists ready to help!";
    }
    if (input_0.includes("who are you") || input_0.includes("what are you")) {
        return "I'm Awra AI, an intelligent virtual assistant created by Awra Tech to help answer your questions!";
    }
    return "That's interesting! I'm Awra AI and I can help you with our services, pricing, team info, or contact details. What would you like to know?";
}
var _c;
__turbopack_context__.k.register(_c, "Chatbot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Footer() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "eb55ccf00f74b65ac4d0cf8fb45f9e5cadd94a49ecf926113e893ed0d3c529bc") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "eb55ccf00f74b65ac4d0cf8fb45f9e5cadd94a49ecf926113e893ed0d3c529bc";
    }
    const { isDark } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showSuccess, setShowSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Footer[handleSubscribe]": (e)=>{
                e.preventDefault();
                setShowSuccess(true);
                setEmail("");
                setTimeout({
                    "Footer[handleSubscribe > setTimeout()]": ()=>setShowSuccess(false)
                }["Footer[handleSubscribe > setTimeout()]"], 3000);
            }
        })["Footer[handleSubscribe]"];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const handleSubscribe = t0;
    const t1 = `text-white py-12 pb-24 sm:pb-12 border-t border-white/10 ${isDark ? "bg-[#0f172a]" : "bg-[#30504F]"}`;
    let t2;
    if ($[2] !== showSuccess) {
        t2 = showSuccess && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed top-24 right-4 z-50 bg-[#00FFAB] text-black px-6 py-4 rounded-lg shadow-2xl animate-slideDown flex items-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-6 h-6",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M5 13l4 4L19 7"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 40,
                        columnNumber: 245
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 40,
                    columnNumber: 166
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold",
                    children: "Subscribed successfully!"
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 40,
                    columnNumber: 339
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 40,
            columnNumber: 25
        }, this);
        $[2] = showSuccess;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:col-span-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/assets/logo.png",
                            alt: "Awra Tech",
                            width: 50,
                            height: 50,
                            className: "object-contain"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 49,
                            columnNumber: 87
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-bold",
                            children: "Awra Tech"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 49,
                            columnNumber: 185
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 49,
                    columnNumber: 41
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-white/70 text-base",
                    children: "A boutique digital agency specializing in high-performance web applications and enterprise cloud infrastructure."
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 49,
                    columnNumber: 240
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-semibold mb-4 text-base",
            children: "SERVICES"
        }, void 0, false, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    let t5;
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-2 text-base text-white/70",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "hover:text-[#00FFAB] transition",
                                children: "Application Development"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 60,
                                columnNumber: 73
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 60,
                            columnNumber: 69
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "hover:text-[#00FFAB] transition",
                                children: "Web Development"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 60,
                                columnNumber: 165
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 60,
                            columnNumber: 161
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "hover:text-[#00FFAB] transition",
                                children: "Software Development"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 60,
                                columnNumber: 249
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 60,
                            columnNumber: 245
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "hover:text-[#00FFAB] transition",
                                children: "Social Media Management"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 60,
                                columnNumber: 338
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 60,
                            columnNumber: 334
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 60,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-semibold mb-4 text-base",
            children: "COMPANY"
        }, void 0, false, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[6] = t5;
        $[7] = t6;
    } else {
        t5 = $[6];
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-4 gap-8 mb-8",
            children: [
                t3,
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t6,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-2 text-base text-white/70",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/#about",
                                        className: "hover:text-[#00FFAB] transition",
                                        children: "About"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 70,
                                        columnNumber: 141
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 70,
                                    columnNumber: 137
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/#services",
                                        className: "hover:text-[#00FFAB] transition",
                                        children: "Services"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 70,
                                        columnNumber: 221
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 70,
                                    columnNumber: 217
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/#projects",
                                        className: "hover:text-[#00FFAB] transition",
                                        children: "Projects"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 70,
                                        columnNumber: 307
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 70,
                                    columnNumber: 303
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/news",
                                        className: "hover:text-[#00FFAB] transition",
                                        children: "News"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 70,
                                        columnNumber: 393
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 70,
                                    columnNumber: 389
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 70,
                            columnNumber: 87
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 70,
                    columnNumber: 78
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-semibold mb-4 text-base",
            children: "Stay Updated"
        }, void 0, false, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "Footer[<input>.onChange]": (e_0)=>setEmail(e_0.target.value)
        })["Footer[<input>.onChange]"];
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] !== email) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "email",
            value: email,
            onChange: t9,
            placeholder: "Email Address",
            required: true,
            className: "flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-white/50 focus:outline-none focus:border-[#00FFAB]"
        }, void 0, false, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 93,
            columnNumber: 11
        }, this);
        $[11] = email;
        $[12] = t10;
    } else {
        t10 = $[12];
    }
    let t11;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: "px-6 py-2 bg-[#00FFAB] text-black font-semibold rounded hover:bg-[#00FFAB]/80 transition cursor-pointer",
            children: "Subscribe"
        }, void 0, false, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 101,
            columnNumber: 11
        }, this);
        $[13] = t11;
    } else {
        t11 = $[13];
    }
    let t12;
    if ($[14] !== t10) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-8 flex flex-col items-center text-center",
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubscribe,
                    className: "flex flex-col sm:flex-row gap-2 w-full max-w-md",
                    children: [
                        t10,
                        t11
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 108,
                    columnNumber: 76
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 108,
            columnNumber: 11
        }, this);
        $[14] = t10;
        $[15] = t12;
    } else {
        t12 = $[15];
    }
    let t13;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pt-8 border-t border-white/10 text-center text-base text-white/70",
            children: "© 2026 Awra Tech. All rights reserved."
        }, void 0, false, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 116,
            columnNumber: 11
        }, this);
        $[16] = t13;
    } else {
        t13 = $[16];
    }
    let t14;
    if ($[17] !== t12) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                t7,
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 123,
            columnNumber: 11
        }, this);
        $[17] = t12;
        $[18] = t14;
    } else {
        t14 = $[18];
    }
    let t15;
    if ($[19] !== t1 || $[20] !== t14 || $[21] !== t2) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: t1,
            children: [
                t2,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 131,
            columnNumber: 11
        }, this);
        $[19] = t1;
        $[20] = t14;
        $[21] = t2;
        $[22] = t15;
    } else {
        t15 = $[22];
    }
    return t15;
}
_s(Footer, "fBRwTQyLrjhmRTzs7d7DydP681s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_b744621a._.js.map