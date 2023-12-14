(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const FilterButton = ({ markerTypes , displayTypes , onClick ,  })=>{
    const { 0: selectedType , 1: setSelectedType  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const handleFilter = (type)=>{
        if (selectedType === type) {
            setSelectedType(null);
        } else {
            setSelectedType(type);
        }
        onClick(type);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "filter-menu",
        children: displayTypes.map((type, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "filter-item",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                    className: "filter-label",
                    title: markerTypes[index],
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "checkbox",
                            checked: selectedType === type,
                            onChange: ()=>handleFilter(markerTypes[index])
                        }),
                        type
                    ]
                })
            }, index))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterButton);


/***/ }),

/***/ 454:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(433);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__);
// InfoWindowWithForm.tsx



const InfoWindowWithForm = ({ marker , onCloseClick , onDescriptionChange , disableDescription =false  })=>{
    const { 0: formDescription , 1: setFormDescription  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(marker.description);
    const handleFormSubmit = (event)=>{
        event.preventDefault();
        onDescriptionChange(formDescription);
        onCloseClick();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.InfoWindow, {
        position: marker.position,
        onCloseClick: onCloseClick,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "info-window-form",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    children: marker.address
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                            style: {
                                fontFamily: "Arial",
                                color: "grey"
                            },
                            children: "Type of place:"
                        }),
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                            style: {
                                color: "grey"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                children: marker.type
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    onSubmit: handleFormSubmit,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                                    style: {
                                        fontFamily: "Arial",
                                        fontSize: 18
                                    },
                                    children: [
                                        " ",
                                        "‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ \uD83D\uDCDD✍\uD83C\uDFFB"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                    className: "custom-textarea",
                                    value: formDescription,
                                    onChange: (e)=>!disableDescription && setFormDescription(e.target.value),
                                    readOnly: disableDescription
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "save-button-container",
                            children: !disableDescription && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "save-button",
                                type: "submit",
                                children: "Save"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InfoWindowWithForm);


/***/ }),

/***/ 365:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(363);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(661);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(433);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _places__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(746);
/* harmony import */ var _snowfall__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(852);
/* harmony import */ var _filter_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(862);
/* harmony import */ var _infoWindowWithForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(454);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_9__]);
axios__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// @refresh disable










const markerIcons = {
    restaurant: "https://cdn-icons-png.flaticon.com/32/3280/3280300.png",
    shopping: "https://cdn2.iconfinder.com/data/icons/christmas-filled-outline-1/512/christmas_holiday_merry_xmas_tree_5-32.png",
    cinema: "https://cdn-icons-png.flaticon.com/32/2503/2503508.png",
    school: "https://cdn-icons-png.flaticon.com/32/2767/2767828.png",
    park: "https://cdn-icons-png.flaticon.com/32/489/489969.png",
    gym: "https://cdn-icons-png.flaticon.com/32/5764/5764179.png",
    transport: "https://cdn3.iconfinder.com/data/icons/christmas-filled-7/128/christmas_48-32.png",
    bar: "https://cdn-icons-png.flaticon.com/32/8310/8310600.png",
    theater: "https://cdn-icons-png.flaticon.com/32/2830/2830259.png",
    "swimming pool": "https://cdn-icons-png.flaticon.com/32/495/495711.png",
    "ice cream shop": "https://cdn-icons-png.flaticon.com/32/938/938063.png",
    church: "https://cdn-icons-png.flaticon.com/32/619/619191.png",
    "clothing store": "https://cdn-icons-png.flaticon.com/32/1415/1415746.png",
    bakery: "https://cdn-icons-png.flaticon.com/32/992/992710.png",
    hotel: "https://cdn-icons-png.flaticon.com/32/831/831477.png",
    museum: "https://cdn-icons-png.flaticon.com/32/5190/5190904.png",
    "night club": "https://cdn-icons-png.flaticon.com/32/4973/4973066.png",
    "tourist attraction": "https://cdn-icons-png.flaticon.com/32/4781/4781412.png"
};
const Map = ()=>{
    const { isLogged , isAdmin , userId , setisLogged , setuserId , setisAdmin  } = (0,_pages_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth)();
    const { 0: officeMap1 , 1: setOfficeMap1  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: directionsMap1 , 1: setDirectionsMap1  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: showMap1 , 1: setShowMap1  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const mapRefMap1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const { 0: officeMap2 , 1: setOfficeMap2  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: directionsMap2 , 1: setDirectionsMap2  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const mapRefMap2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    console.log("Logged" + isLogged);
    console.log("Admin" + isAdmin);
    console.log(userId);
    const addOffice = (address, description, type, position)=>{
        setOffices((prevOffices)=>[
                ...prevOffices,
                {
                    address,
                    description,
                    type,
                    position
                }, 
            ]);
    //Il faut ici push vers la bdd avec un axios et le bon service pour sauvegarder le points nouvellement creer
    };
    const center = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            lat: 45.566580681555415,
            lng: 5.920610881510474
        }), []);
    const getMapOptions1 = (bounds)=>({
            mapId: "dee71aef6bd0faf4",
            disableDefaultUI: true,
            clickableIcons: false,
            restriction: {
                latLngBounds: bounds,
                strictBounds: true
            }
        });
    const getMapOptions2 = (bounds)=>({
            mapId: "21b1f98b0685a8c2",
            disableDefaultUI: true,
            clickableIcons: false,
            restriction: {
                latLngBounds: bounds,
                strictBounds: true
            }
        });
    if (isLogged) {
        axios__WEBPACK_IMPORTED_MODULE_9__["default"].get("https://l1.dptinfo-usmb.fr/~grp11/Tests/get_private_points.php?user_id=" + userId).then((response)=>{
            response.data.forEach((item)=>{
                let point_a_add = {
                    address: "",
                    description: "",
                    type: "",
                    position: {
                        lat: 45.57124197967436,
                        lng: 5.919697965999837
                    }
                };
                point_a_add.address = item.address; //// JE DOIS REBUILD UN POINT POUR ENFIN LE ADD DANS LE DEFAULT POI
                point_a_add.description = item.description;
                point_a_add.type = item.type;
                point_a_add.position.lat = parseFloat(item.coordX);
                point_a_add.position.lng = parseFloat(item.coordY);
                privatePoi = [
                    ...privatePoi,
                    point_a_add
                ];
            });
        });
    }
    const onLoadMap1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((map)=>mapRefMap1.current = map, []);
    const onLoadMap2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((map)=>mapRefMap2.current = map, []);
    const fetchDirectionsMap1 = (house)=>{
        if (!officeMap1) return;
        const service = new google.maps.DirectionsService();
        service.route({
            origin: house,
            destination: officeMap1,
            travelMode: google.maps.TravelMode.DRIVING
        }, (result, status)=>{
            if (status === "OK" && result) {
                setDirectionsMap1(result);
            }
        });
    };
    const fetchDirectionsMap2 = (house)=>{
        if (!officeMap2) return;
        const service = new google.maps.DirectionsService();
        service.route({
            origin: house,
            destination: officeMap2,
            travelMode: google.maps.TravelMode.DRIVING
        }, (result, status)=>{
            if (status === "OK" && result) {
                setDirectionsMap2(result);
            }
        });
    };
    const switchToMap1 = ()=>{
        setShowMap1(true);
    };
    const switchToMap2 = ()=>{
        if (isLogged) {
            setShowMap1(false);
        }
    };
    const recenterMap = ()=>{
        const currentMap = showMap1 ? mapRefMap1.current : mapRefMap2.current;
        const officePosition = showMap1 ? officeMap1 : officeMap2;
        if (currentMap && officePosition) {
            currentMap.panTo(officePosition);
        }
    };
    let { 0: offices , 1: setOffices  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: markers , 1: setMarkers  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: markersLoaded , 1: setMarkersLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const createMarker = (type = "default")=>{
        if (offices.length > 0) {
            const newMarkers = offices.map((office, index)=>({
                    position: office.position,
                    title: office.address,
                    description: office.description,
                    type: type,
                    key: `office-${index}`
                }));
            setMarkers((prevMarkers)=>[
                    ...prevMarkers,
                    ...newMarkers
                ]);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setMarkersLoaded(true);
    }, []);
    const { 0: selectedMarker , 1: setSelectedMarker  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: selectedOffice , 1: setSelectedOffice  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const markerIcons = {
        restaurant: "https://cdn-icons-png.flaticon.com/32/3280/3280300.png",
        shopping: "https://cdn2.iconfinder.com/data/icons/christmas-filled-outline-1/512/christmas_holiday_merry_xmas_tree_5-32.png",
        cinema: "https://cdn-icons-png.flaticon.com/32/2503/2503508.png",
        school: "https://cdn-icons-png.flaticon.com/32/2767/2767828.png",
        park: "https://cdn-icons-png.flaticon.com/32/489/489969.png",
        gym: "https://cdn-icons-png.flaticon.com/32/5764/5764179.png",
        transport: "https://cdn3.iconfinder.com/data/icons/christmas-filled-7/128/christmas_48-32.png",
        bar: "https://cdn-icons-png.flaticon.com/32/8310/8310600.png",
        theater: "https://cdn-icons-png.flaticon.com/32/2830/2830259.png",
        "swimming pool": "https://cdn-icons-png.flaticon.com/32/495/495711.png",
        "ice cream shop": "https://cdn-icons-png.flaticon.com/32/938/938063.png",
        church: "https://cdn-icons-png.flaticon.com/32/619/619191.png",
        "clothing store": "https://cdn-icons-png.flaticon.com/32/1415/1415746.png",
        bakery: "https://cdn-icons-png.flaticon.com/32/992/992710.png",
        hotel: "https://cdn-icons-png.flaticon.com/32/831/831477.png",
        museum: "https://cdn-icons-png.flaticon.com/32/5190/5190904.png",
        "night club": "https://cdn-icons-png.flaticon.com/32/4973/4973066.png",
        "tourist attraction": "https://cdn-icons-png.flaticon.com/32/4781/4781412.png"
    };
    const handleMarkerFilter = (type)=>{
        const allMarkers = [
            ...offices,
            ...defaultPoi
        ];
        for(let i = 0; i < allMarkers.length; i++){
            const marker = allMarkers[i];
            console.log(marker.type, type);
            if (marker.type !== type && marker.position.lat - 45 < 1) {
                marker.position = {
                    lat: marker.position.lat + 10,
                    lng: marker.position.lng
                };
            }
            if (marker.type === type) {
                if (marker.position.lat > 46) {
                    marker.position = {
                        lat: marker.position.lat - 10,
                        lng: marker.position.lng
                    };
                }
            }
            console.log(marker.position.lat);
            setSelectedMarker(marker);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "container",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "controls",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_places__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    setOffice: (address, description, type, position)=>{
                        showMap1 ? setOfficeMap1(position) : setOfficeMap2(position);
                        showMap1 ? mapRefMap1.current?.panTo(position) : mapRefMap2.current?.panTo(position);
                        addOffice(address, description, type, position);
                    },
                    createMarker: createMarker
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "map",
                children: [
                    showMap1 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_4__.GoogleMap, {
                        zoom: 13,
                        center: center,
                        mapContainerClassName: "map-container",
                        options: getMapOptions1({
                            north: 45.7204559777248,
                            south: 45.46085230095994,
                            west: 5.741038693653954,
                            east: 6.073561468829906
                        }),
                        onLoad: onLoadMap1,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_4__.MarkerClusterer, {
                                children: (clusterer)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: defaultPoi.map((poi, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_4__.Marker, {
                                                        position: poi.position,
                                                        title: poi.description,
                                                        clusterer: clusterer,
                                                        icon: {
                                                            url: markerIcons[poi.type]
                                                        },
                                                        onClick: ()=>{
                                                            fetchDirectionsMap1(poi.position);
                                                            setSelectedMarker(poi);
                                                        }
                                                    }),
                                                    selectedMarker === poi && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_infoWindowWithForm__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                        marker: poi,
                                                        onCloseClick: ()=>setSelectedMarker(null),
                                                        onDescriptionChange: (description)=>{
                                                            poi.description = description;
                                                        //IL faut ici push la nouvelle description dans la base de donné avec un axios et le bon services
                                                        },
                                                        disableDescription: true
                                                    })
                                                ]
                                            }, index))
                                    })
                            }),
                            directionsMap1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_4__.DirectionsRenderer, {
                                directions: directionsMap1,
                                options: {
                                    suppressMarkers: true,
                                    polylineOptions: {
                                        zIndex: 50,
                                        strokeColor: "#FF7676",
                                        strokeWeight: 5
                                    }
                                }
                            }),
                            officeMap1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_4__.Marker, {
                                    position: officeMap1,
                                    icon: "https://cdn1.iconfinder.com/data/icons/joyful-christmas/56/christmas_house-32.png"
                                })
                            }),
                            offices.map((office, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_4__.Marker, {
                                            position: office.position,
                                            title: office.address,
                                            icon: "https://cdn1.iconfinder.com/data/icons/joyful-christmas/56/christmas_house-32.png",
                                            onClick: ()=>{
                                                setSelectedOffice(office);
                                                fetchDirectionsMap1(office.position);
                                            }
                                        }),
                                        selectedOffice && selectedOffice.position === office.position && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_infoWindowWithForm__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                            marker: office,
                                            onCloseClick: ()=>setSelectedOffice(null),
                                            onDescriptionChange: (description)=>{
                                                office.description = description;
                                            }
                                        })
                                    ]
                                }, `office-marker-${index}`))
                        ]
                    }, "dee71aef6bd0faf4") : /* map 2 */ /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_4__.GoogleMap, {
                        zoom: 13,
                        center: center,
                        mapContainerClassName: "map-container",
                        options: getMapOptions2({
                            north: 45.7204559777248,
                            south: 45.46085230095994,
                            west: 5.741038693653954,
                            east: 6.073561468829906
                        }),
                        onLoad: onLoadMap2,
                        children: [
                            directionsMap2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_4__.DirectionsRenderer, {
                                directions: directionsMap2,
                                options: {
                                    polylineOptions: {
                                        zIndex: 50,
                                        strokeColor: "#396d7c",
                                        strokeWeight: 5
                                    }
                                }
                            }),
                            officeMap2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_4__.Marker, {
                                    position: officeMap2,
                                    icon: "https://cdn1.iconfinder.com/data/icons/joyful-christmas/56/christmas_house-32.png"
                                })
                            }),
                            privatePoi.map((office, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_4__.Marker, {
                                            position: office.position,
                                            title: office.address,
                                            icon: "https://cdn1.iconfinder.com/data/icons/joyful-christmas/56/christmas_house-32.png",
                                            onClick: ()=>{
                                                setSelectedOffice(office);
                                                fetchDirectionsMap2(office.position);
                                            }
                                        }),
                                        selectedOffice && selectedOffice.position === office.position && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_infoWindowWithForm__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                            marker: office,
                                            onCloseClick: ()=>setSelectedOffice(null),
                                            onDescriptionChange: (description)=>{
                                                office.description = description;
                                            }
                                        })
                                    ]
                                }, `office-marker-${index}`))
                        ]
                    }, "21b1f98b0685a8c2"),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_snowfall__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "candy-cane"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "header-snow-roof1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "header-snow-roof2"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "header-snow-roof3"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "header-snow-roof4"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "candy-cane"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "menu-button",
                        style: {
                            bottom: "20px",
                            right: "10px"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "wrapper",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "checkbox"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "fab"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "fac",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
                                            to: "/login",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "login-button"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
                                            to: "/admin",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                children: "Admin"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "map-buttons",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "map1-button",
                                onClick: switchToMap1,
                                title: "Public Map"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: `map2-button ${isLogged ? "" : "isNotLogged"}`,
                                onClick: switchToMap2,
                                title: isLogged ? "Private Map" : "Private Map\nFeature Locked! You must be logged in"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "recenter-button",
                        onClick: recenterMap
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_filter_button__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        markerTypes: [
                            "restaurant",
                            "shopping",
                            "cinema",
                            "school",
                            "park",
                            "gym",
                            "transport",
                            "bar",
                            "theater",
                            "swimming pool",
                            "ice cream shop",
                            "church",
                            "clothing store",
                            "bakery",
                            "hotel",
                            "museum",
                            "night club",
                            "tourist attraction", 
                        ],
                        displayTypes: [
                            "\uD83C\uDF57",
                            "\uD83C\uDF81",
                            "\uD83C\uDFA5",
                            "\uD83D\uDC68‍\uD83C\uDFEB",
                            "\uD83C\uDF32",
                            "\uD83D\uDCAA",
                            "\uD83D\uDE8A",
                            "\uD83C\uDF7A",
                            "\uD83C\uDFAD",
                            "\uD83C\uDFCA",
                            "\uD83C\uDF66",
                            "⛪",
                            "\uD83D\uDC5C",
                            "\uD83E\uDD50",
                            "\uD83D\uDECF️",
                            "\uD83C\uDFA8",
                            "\uD83C\uDF78",
                            "\uD83D\uDDFF", 
                        ],
                        onClick: (type)=>handleMarkerFilter(type)
                    })
                ]
            })
        ]
    });
};
const defaultOptions = {
    strokeOpacity: 0.5,
    strokeWeight: 2,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true
};
{
/*
fetch("recup.php")
.then( response => response.json())
.then( data => {
const defaultPoi = data;
console.log(data);
// transformData(data);
})
*/ }// Base de donnees exemple Chambery
axios__WEBPACK_IMPORTED_MODULE_9__["default"].get("https://l1.dptinfo-usmb.fr/~grp11/Tests/get_default_points.php").then((response)=>{
    response.data.forEach((item)=>{
        let point_a_add = {
            address: "",
            description: "",
            type: "",
            position: {
                lat: 45.57124197967436,
                lng: 5.919697965999837
            }
        };
        point_a_add.address = item.address; //// JE DOIS REBUILD UN POINT POUR ENFIN LE ADD DANS LE DEFAULT POI
        point_a_add.description = item.description;
        point_a_add.type = item.type;
        point_a_add.position.lat = parseFloat(item.coordX);
        point_a_add.position.lng = parseFloat(item.coordY);
        defaultPoi = [
            ...defaultPoi,
            point_a_add
        ];
    });
});
let defaultPoi = [
    {
        address: "32 Pl. Monge, 73000 Chamb\xe9ry",
        description: "Restaurant Carr\xe9 des Sens - fine dining",
        type: "restaurant",
        position: {
            lat: 45.56324311633563,
            lng: 5.921157303181863
        }
    },
    {
        address: "1097 Av. des Landiers, 73000 Chamb\xe9ry",
        description: "Shopping mall Chamnord",
        type: "shopping",
        position: {
            lat: 45.59258489131312,
            lng: 5.899454352402417
        }
    },
    {
        address: "Rue du Lac Majeur, 73370 Le Bourget-du-Lac",
        description: "Universite Bourget du Lac",
        type: "school",
        position: {
            lat: 45.641565952237485,
            lng: 5.87271983174593
        }
    },
    {
        address: "8 Rue Bonivard, 73000 Chamb\xe9ry",
        description: "KeepCool gym",
        type: "gym",
        position: {
            lat: 45.566886527715134,
            lng: 5.918076037055356
        }
    },
    {
        address: "Pl. de la Gare, 73010 Chamb\xe9ry",
        description: "Train Station Chambery, Challes-les-eaux",
        type: "transport",
        position: {
            lat: 45.57124197967436,
            lng: 5.919697965999837
        }
    }, 
];
let user_id = null; //RAPPEL TOI
let privatePoi = [];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Map);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Places)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "use-places-autocomplete"
const external_use_places_autocomplete_namespaceObject = require("use-places-autocomplete");
var external_use_places_autocomplete_default = /*#__PURE__*/__webpack_require__.n(external_use_places_autocomplete_namespaceObject);
;// CONCATENATED MODULE: external "@reach/combobox"
const combobox_namespaceObject = require("@reach/combobox");
// EXTERNAL MODULE: ./node_modules/@reach/combobox/styles.css
var styles = __webpack_require__(473);
;// CONCATENATED MODULE: ./components/places.tsx





function Places({ setOffice , createMarker  }) {
    const { ready , value , setValue , suggestions: { status , data  } , clearSuggestions ,  } = external_use_places_autocomplete_default()();
    const { 0: markerType , 1: setMarkerType  } = (0,external_react_.useState)("default");
    const { 0: isOptionSelected , 1: setIsOptionSelected  } = (0,external_react_.useState)(false);
    const { 0: showMarkerInput , 1: setShowMarkerInput  } = (0,external_react_.useState)(false);
    const { 0: typeValue , 1: setTypeValue  } = (0,external_react_.useState)("default");
    const handleMarkerTypeSelect = (selected)=>{
        setMarkerType(selected);
        setTypeValue(selected); // Store the selected type
        createMarker(selected);
        setIsOptionSelected(true);
    };
    const handleSelect = async (val)=>{
        setValue(val, false);
        clearSuggestions();
        const results = await (0,external_use_places_autocomplete_namespaceObject.getGeocode)({
            address: val
        });
        const { lat , lng  } = await (0,external_use_places_autocomplete_namespaceObject.getLatLng)(results[0]);
        const address = val;
        const type = typeValue; // Access the stored type
        const description = val;
        setOffice(address, description, type, {
            lat,
            lng
        });
        setShowMarkerInput(true);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(combobox_namespaceObject.Combobox, {
                onSelect: handleMarkerTypeSelect,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(combobox_namespaceObject.ComboboxInput, {
                        value: typeValue,
                        onChange: (e)=>{
                            setTypeValue(e.target.value);
                            setIsOptionSelected(false);
                            setShowMarkerInput(false);
                        },
                        disabled: !ready,
                        className: "combobox-input input-field",
                        placeholder: "What type of place is this?"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(combobox_namespaceObject.ComboboxPopover, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(combobox_namespaceObject.ComboboxList, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(combobox_namespaceObject.ComboboxOption, {
                                    value: "restaurant"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(combobox_namespaceObject.ComboboxOption, {
                                    value: "shopping"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(combobox_namespaceObject.ComboboxOption, {
                                    value: "entertainment"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(combobox_namespaceObject.ComboboxOption, {
                                    value: "school"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(combobox_namespaceObject.ComboboxOption, {
                                    value: "park"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(combobox_namespaceObject.ComboboxOption, {
                                    value: "gym"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(combobox_namespaceObject.ComboboxOption, {
                                    value: "transport"
                                })
                            ]
                        })
                    })
                ]
            }),
            isOptionSelected && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(combobox_namespaceObject.Combobox, {
                onSelect: handleSelect,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(combobox_namespaceObject.ComboboxInput, {
                        value: value,
                        onChange: (e)=>{
                            setValue(e.target.value);
                            setShowMarkerInput(false);
                        },
                        disabled: !ready,
                        className: "combobox-input input-field",
                        placeholder: "What's the place's address?"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(combobox_namespaceObject.ComboboxPopover, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(combobox_namespaceObject.ComboboxList, {
                            children: status === "OK" && data.map(({ place_id , description  })=>/*#__PURE__*/ jsx_runtime_.jsx(combobox_namespaceObject.ComboboxOption, {
                                    value: description
                                }, place_id))
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Snowfall = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "snowfall",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "snowflake",
                children: "❅"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "snowflake",
                children: "❆"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "snowflake",
                children: "❅"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "snowflake",
                children: "❆"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "snowflake",
                children: "❆"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "snowflake",
                children: "❆"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "snowflake",
                children: "❆"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "snowflake",
                children: "❆"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "snowflake",
                children: "❆"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "snowflake",
                children: "❆"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "snowflake",
                children: "❆"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "snowflake",
                children: "❆"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "snowflake",
                children: "❆"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "snowflake",
                children: "❆"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Snowfall);


/***/ }),

/***/ 75:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(433);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(365);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_map__WEBPACK_IMPORTED_MODULE_2__]);
_components_map__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// @refresh disable



// Définissez les bibliothèques en dehors de la fonction du composant
const libraries2 = [
    "places"
];
function Home() {
    const { isLoaded  } = (0,_react_google_maps_api__WEBPACK_IMPORTED_MODULE_1__.useLoadScript)({
        googleMapsApiKey: "AIzaSyDED1BRmo3JR9x4RUwvxlsZXtzN8ki39RQ",
        libraries: libraries2
    });
    if (!isLoaded) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "Loading..."
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_map__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {});
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 473:
/***/ (() => {



/***/ }),

/***/ 433:
/***/ ((module) => {

"use strict";
module.exports = require("@react-google-maps/api");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 661:
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [363], () => (__webpack_exec__(75)));
module.exports = __webpack_exports__;

})();