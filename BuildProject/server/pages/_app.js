"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 443:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(661);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);



const AdminPage = ()=>{
    const { 0: menuVisible , 1: setMenuVisible  } = useState(false);
    const { 0: loginVisible , 1: setLoginVisible  } = useState(false);
    const toggleMenu = ()=>{
        setMenuVisible(!menuVisible);
    };
    const toggleLoginPage = ()=>{
        setLoginVisible(!loginVisible);
    };
    return /*#__PURE__*/ _jsxs("div", {
        className: "Logincontainer",
        children: [
            /*#__PURE__*/ _jsx("h3", {
                children: "ADMIN"
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "menu-button",
                style: {
                    bottom: "20px",
                    right: "10px"
                },
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "wrapper",
                    children: [
                        /*#__PURE__*/ _jsx("input", {
                            type: "checkbox"
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "fab"
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: "fac",
                            children: [
                                /*#__PURE__*/ _jsx(Link, {
                                    to: "/login",
                                    children: /*#__PURE__*/ _jsx("button", {
                                        onClick: toggleLoginPage,
                                        className: "login-button"
                                    })
                                }),
                                /*#__PURE__*/ _jsx(Link, {
                                    to: "/",
                                    children: /*#__PURE__*/ _jsx("button", {
                                        children: "Map"
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (AdminPage)));


/***/ }),

/***/ 360:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(648);
/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(270);
/* harmony import */ var _pages_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(363);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(661);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__, sonner__WEBPACK_IMPORTED_MODULE_3__]);
([axios__WEBPACK_IMPORTED_MODULE_2__, sonner__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// @refresh disable







const LoginSignup = ()=>{
    const navigate = useNavigate();
    const { isLogged , isAdmin , userId , setisLogged , setuserId , setisAdmin  } = useAuth();
    const { 0: menuVisible , 1: setMenuVisible  } = useState(false);
    const { 0: loginVisible , 1: setLoginVisible  } = useState(true);
    const toggleMenu = ()=>{
        setMenuVisible(!menuVisible);
    };
    const toggleLoginPage = ()=>{
        setLoginVisible(!loginVisible);
    };
    const checkUser = ()=>{
        const nameElement = document.querySelector("#name");
        const passwordElement = document.querySelector("#password");
        let name = "";
        let password = "";
        if (nameElement && passwordElement) {
            name = nameElement.value;
            password = passwordElement.value;
        }
        console.log(name);
        console.log(password);
        axios.get("https://l1.dptinfo-usmb.fr/~grp11/Tests/connexion2.php?+name=" + name + "&password=" + password).then((response)=>{
            if (response.data.loginSuccessful) {
                setisLogged(true);
                setuserId(response.data.user_id);
                if (response.data.isadmin) {
                    setisAdmin(true);
                }
                navigate("/");
            } else {
                toast.error("Identifiant ou mot de passe incorrect ", {
                    description: "Veuillez saisir \xe0 nouveaux vos logs"
                });
            }
        });
    };
    const checkUserRegister = ()=>{
        const nameElement = document.querySelector("#name1");
        const passwordElement = document.querySelector("#password1");
        let name = "";
        let password = "";
        if (nameElement && passwordElement) {
            name = nameElement.value;
            password = passwordElement.value;
        }
        if (name != "" && password != "") {
            console.log(name);
            console.log(password);
            axios.get("https://l1.dptinfo-usmb.fr/~grp11/Tests/inscription.php?+name=" + name + "&password=" + password).then((response)=>{
                console.log(response.data);
                if (!response.data) {
                    toggleLoginPage();
                } else {
                    toast.error("Utilisateur d\xe9j\xe0 existant ", {
                        description: "Veuillez changer de name"
                    });
                }
            });
        }
    };
    return /*#__PURE__*/ _jsx("div", {
        children: /*#__PURE__*/ _jsxs("div", {
            className: "Logincontainer",
            children: [
                /*#__PURE__*/ _jsx(Toaster, {
                    richColors: true,
                    position: "top-center"
                }),
                loginVisible && /*#__PURE__*/ _jsxs("div", {
                    className: "Loginheader",
                    children: [
                        /*#__PURE__*/ _jsx("h3", {
                            children: "Login"
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: "Logininputs",
                            children: [
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "Loginusername",
                                    children: [
                                        /*#__PURE__*/ _jsx(Image, {
                                            className: "person",
                                            src: "/person.png",
                                            width: 20,
                                            height: 21,
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ _jsx("input", {
                                            id: "name",
                                            name: "name",
                                            type: "text"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "Loginpassword",
                                    children: [
                                        /*#__PURE__*/ _jsx(Image, {
                                            className: "password",
                                            src: "/password.png",
                                            width: 19,
                                            height: 22,
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ _jsx("input", {
                                            type: "password",
                                            id: "password",
                                            name: "password"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: "Loginbuttons",
                            children: [
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "Loginremember",
                                    children: [
                                        /*#__PURE__*/ _jsx("input", {
                                            type: "checkbox",
                                            className: "Logincheckbox"
                                        }),
                                        /*#__PURE__*/ _jsx("p", {
                                            children: "Remember me"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    children: "Forgot Password"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "Loginbtn-box",
                            children: /*#__PURE__*/ _jsx("a", {
                                onClick: checkUser,
                                children: "Login"
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "Loginregister",
                            children: /*#__PURE__*/ _jsxs("p", {
                                children: [
                                    "Don t have an account?",
                                    /*#__PURE__*/ _jsx("span", {
                                        onClick: toggleLoginPage,
                                        children: "   Register"
                                    })
                                ]
                            })
                        })
                    ]
                }),
                !loginVisible && /*#__PURE__*/ _jsxs("div", {
                    className: "Loginheader",
                    children: [
                        /*#__PURE__*/ _jsx("h3", {
                            children: "Register"
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: "Logininputs",
                            children: [
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "Loginusername",
                                    children: [
                                        /*#__PURE__*/ _jsx(Image, {
                                            className: "person",
                                            src: "person.png",
                                            layout: "fill",
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ _jsx("input", {
                                            id: "name1",
                                            name: "name1",
                                            type: "text"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "Loginpassword",
                                    children: [
                                        /*#__PURE__*/ _jsx(Image, {
                                            className: "password",
                                            src: "password.png",
                                            layout: "fill",
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ _jsx("input", {
                                            type: "password",
                                            id: "password1",
                                            name: "password1"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: "Loginbuttons",
                            children: [
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "Loginremember",
                                    children: [
                                        /*#__PURE__*/ _jsx("input", {
                                            type: "checkbox",
                                            className: "Logincheckbox"
                                        }),
                                        /*#__PURE__*/ _jsx("p", {
                                            children: "Remember me"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    children: "Forgot Password"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "Loginbtn-box",
                            children: /*#__PURE__*/ _jsx("a", {
                                onClick: checkUserRegister,
                                children: "Register"
                            })
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "Loginregister",
                            children: /*#__PURE__*/ _jsxs("p", {
                                children: [
                                    "Have Already an account?",
                                    /*#__PURE__*/ _jsx("span", {
                                        onClick: toggleLoginPage,
                                        children: "   Loggin"
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "menu-button",
                    style: {
                        bottom: "20px",
                        right: "10px"
                    },
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: "wrapper",
                        children: [
                            /*#__PURE__*/ _jsx("input", {
                                type: "checkbox"
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "fab"
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "fac",
                                children: [
                                    /*#__PURE__*/ _jsx(Link, {
                                        to: "/",
                                        children: /*#__PURE__*/ _jsx("button", {
                                            children: "Map"
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx(Link, {
                                        to: "/admin",
                                        children: /*#__PURE__*/ _jsx("button", {
                                            children: "Admin"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (LoginSignup)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 956:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "gsap"
const external_gsap_namespaceObject = require("gsap");
var external_gsap_default = /*#__PURE__*/__webpack_require__.n(external_gsap_namespaceObject);
;// CONCATENATED MODULE: ./animations/index.js

// Declare a general timeline to use in all the animation functions.
const tl = external_gsap_default().timeline();
// Preloader Animation
const animations_preLoaderAnim = ()=>{
    tl.to("body", {
        duration: 0.1,
        css: {
            overflowY: "hidden"
        },
        ease: "power3.inOut"
    }).from(".cette_erreur_est_normal", {
        duration: 5,
        opacity: 0,
        y: 80,
        ease: "expo.easeOut"
    }).to(".preloader", {
        duration: 1.5,
        height: "0vh",
        ease: "Power3.easeOut",
        onComplete: mobileLanding()
    }, "-=2").to(".preloader", {
        duration: 0,
        css: {
            display: "none"
        }
    });
};
const openMenu = ()=>{
    const tl = gsap.timeline();
    tl.to("body", {
        duration: 0.1,
        css: {
            overflowY: "hidden"
        },
        ease: "power3.out"
    }).to(".hamburger-menu", {
        duration: 0.1,
        css: {
            display: "block"
        }
    }).to(".header-item", {
        duration: 0.1,
        css: {
            background: "none"
        }
    }).to(".cls-1", {
        duration: 0.1,
        delay: 0.3,
        css: {
            fill: "#ffffff"
        }
    }).to([
        ".nav-secondary",
        ".nav-primary"
    ], {
        duration: 0.8,
        height: "100%",
        transformOrigin: "right top",
        stagger: {
            amount: 0.1
        },
        ease: "power3.inOut"
    }, "-=.5").from(".nav-link", {
        duration: 0.5,
        x: -80,
        opacity: 0,
        stagger: {
            amount: 0.5
        },
        ease: "Power3.in"
    }, "-=.3");
// change cursor color when nav is open
// tl.to(".cursor", {
//   delay: -1,
//   css: { className: "+=cursor-active" },
// }).to(".cursor2", { delay: -1, css: { className: "+=cursor2-active" } });
};
const closeMenu = ()=>{
    const tl = gsap.timeline();
    tl.to("body", {
        duration: 0.05,
        css: {
            overflowY: "scroll"
        },
        ease: "power3.inOut"
    }).to([
        ".nav-primary",
        ".nav-secondary"
    ], {
        duration: 0.8,
        height: "0",
        transformOrigin: "right top",
        stagger: {
            amount: 0.1
        },
        ease: "power3.inOut"
    }).to(".cls-1", {
        duration: 0.1,
        delay: -0.3,
        css: {
            fill: "#08e7f3"
        }
    }).to(".header-item", {
        duration: 0.5,
        css: {
            background: "rgba(11,11,15,.8)"
        }
    }).to(".hamburger-menu", {
        duration: 0.05,
        css: {
            display: "none"
        }
    });
// tl.to(".cursor-active", {
//   css: { className: "+=cursor" },
// }).to(".cursor2-active", { css: { className: "+=cursor2" } });
};
// recurrent animations
const fadeUp = (el, delay = 0)=>{
    tl.from(el, {
        y: 150,
        duration: 1,
        delay,
        opacity: 0,
        ease: "power3.Out"
    });
};
const mobileLanding = ()=>{
    window.innerWidth < 763 && tl.from(".landing__main2", {
        duration: 1,
        delay: 0,
        opacity: 0,
        y: 80,
        ease: "expo.easeOut"
    });
};
const animateShapes = ()=>{
    const infiniteTl = gsap.timeline({
        repeat: -1
    });
    infiniteTl;
};
const animateMainShape = ()=>{
    const infiniteTl = gsap.timeline({
        repeat: -1
    });
    infiniteTl;
};
const boxHover = (e)=>{
    const tl = gsap.timeline();
    window.innerWidth >= 986 && tl.to(e.target.querySelector(".link"), {
        duration: 0,
        opacity: 1
    }).from(e.target.querySelectorAll(".box-anim"), {
        duration: 0.3,
        opacity: 0,
        y: 30,
        stagger: 0.1,
        ease: "Power3.easeOut"
    });
};
const boxExit = (e)=>{
    window.innerWidth >= 986 && gsap.to(e.target.querySelector(".link"), {
        duration: 0,
        opacity: 0
    });
};
const fadeIn = (el)=>{
    gsap.to(el, {
        duration: 2,
        opacity: 1,
        y: -60,
        ease: "power4.out"
    });
};
const fadeOut = (el)=>{
    gsap.to(el, {
        duration: 1,
        opacity: 0,
        y: -20,
        ease: "power4.out"
    });
};

;// CONCATENATED MODULE: ./components/preloader4.tsx



const PreLoader = ()=>{
    useEffect(()=>{
        preLoaderAnim();
    }, []);
    return /*#__PURE__*/ _jsx("div", {
        className: "preloader",
        children: /*#__PURE__*/ _jsx("div", {
            className: "banner",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "clouds",
                children: [
                    /*#__PURE__*/ _jsx("img", {
                        className: "img1",
                        src: "cloud1.png"
                    }),
                    /*#__PURE__*/ _jsx("img", {
                        className: "img2",
                        src: "cloud2.png"
                    }),
                    /*#__PURE__*/ _jsx("img", {
                        className: "img3",
                        src: "cloud3.png"
                    }),
                    /*#__PURE__*/ _jsx("img", {
                        className: "img4",
                        src: "cloud4.png"
                    }),
                    /*#__PURE__*/ _jsx("img", {
                        className: "img5",
                        src: "cloud5.png"
                    }),
                    /*#__PURE__*/ _jsx("img", {
                        className: "img6",
                        src: "cloud7.png"
                    }),
                    /*#__PURE__*/ _jsx("img", {
                        className: "img7",
                        src: "cloud7.png"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const preloader4 = ((/* unused pure expression or super */ null && (PreLoader)));


/***/ }),

/***/ 656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(661);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_preloader4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(956);
/* harmony import */ var _components_loginsignup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(360);
/* harmony import */ var _components_adminpage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(443);
/* harmony import */ var _pages_AuthContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(363);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_loginsignup__WEBPACK_IMPORTED_MODULE_5__]);
_components_loginsignup__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// @refresh disable









function MyApp({ Component , pageProps  }) {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Le code ici sera exécuté que côté client OMG 5 HEURES DE DEBUGG ET FORUM POUR RESOUDRE MON SOUCIS DE ROUTES
        const { createBrowserHistory  } = __webpack_require__(644);
        const { BrowserRouter  } = __webpack_require__(661);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pages_AuthContext__WEBPACK_IMPORTED_MODULE_7__.AuthProvider, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "\uD83D\uDCABFuck Synchro\uD83D\uDCAB"
                    })
                }),
                 false && /*#__PURE__*/ 0
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 644:
/***/ ((module) => {

module.exports = require("@remix-run/router");

/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 661:
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 270:
/***/ ((module) => {

module.exports = import("sonner");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,363], () => (__webpack_exec__(656)));
module.exports = __webpack_exports__;

})();