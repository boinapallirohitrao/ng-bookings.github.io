webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./bookings/bookings.module": [
		"./src/app/bookings/bookings.module.ts",
		"bookings.module",
		"common"
	],
	"./insurance/insurance.module": [
		"./src/app/insurance/insurance.module.ts",
		"common",
		"insurance.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    {
        path: '',
        loadChildren: './bookings/bookings.module#BookingsModule'
    },
    {
        path: 'insurance',
        loadChildren: './insurance/insurance.module#InsuranceModule'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes, { enableTracing: false } // <-- debugging purposes only
                )
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__["a" /* FooterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"goway-footer\">\n    <div class=\"container pb-2 pt-2\">\n\n        &copy; 2018 Goway Travel, All Rights Reserved. <span class=\"pl-2 pr-2\">&nbsp;</span>\n\n        <div class=\"float-right\">\n            <a href=\"https://www.goway.com/\">Home</a> <span class=\"pl-2 pr-2\">&bull;</span>\n            <a href=\"https://www.goway.com/goway-travel/contact-us/office-locations/\" target=\"_blank\">Locations </a> <span class=\"pl-2 pr-2\">&bull;</span>\n            <a href=\"https://www.goway.com/goway-travel/contact-us/careers/why-work-goway/\" target=\"_blank\">Careers</a> <span class=\"pl-2 pr-2\">&bull;</span>\n            <a href=\"https://www.goway.com/goway-travel/our-policies/privacy-policy/\" target=\"_blank\">Privacy Policy</a> <span class=\"pl-2 pr-2\">&bull;</span>\n            <a href=\"https://www.goway.com/goway-travel/our-policies/commitment-to-accessibility/\" target=\"_blank\">Accessibility</a> <span class=\"pl-2 pr-2\">&bull;</span>\n            <a href=\"https://www.goway.com/goway-travel/our-policies/travel-insurance/\" target=\"_blank\">Travel Insurance</a>\n\n        </div>\n    </div>\n\n</div> -->\n\n\n<footer class=\"page-footer center-on-small-only white mt-0\">\n\n\n    <div class=\"row\">\n        <div class=\"col-md-8 footer-links\">\n            <div class=\"container offset-md-1 \">\n                <div class=\"row blue-grey-text justify-content-center\">\n\n                    <div class=\"col-md-4 col-xs-6\">\n\n\n                        <span class=\"mb-4 mt-3 font-bold small footer-heading\">Company</span>\n                        <ul>\n                            <li><a href=\"https://www.skybooker.com/static/about-us.php\" class=\"grey-text small\">About</a></li>\n                            <li><a href=\"https://www.skybooker.com/static/terms-and-conditions.php\" class=\"grey-text small\">Terms &amp; Conditions</a></li>\n                            <li><a href=\"https://www.skybooker.com/static/privacy-policy.php\" class=\"grey-text small\">Privacy &amp; Cookies</a></li>\n                            <li><a href=\"https://www.skybooker.com/static/advertise-with-us.php\" class=\"grey-text small\">Affiliate Program</a></li>\n                            <li><a href=\"https://www.skybooker.com/static/advertise-with-us.php\" class=\"grey-text small\">Partners</a></li>\n                            <li><a href=\"https://www.skybooker.com/static/contact.php\" class=\"grey-text small\">Contact</a></li>\n                        </ul>\n                    </div>\n\n\n                    <div class=\"col-md-4 col-xs-6\">\n                        <span class=\"mb-4 mt-3 font-bold small footer-heading\">Travellers</span>\n                        <ul>\n                            <li><a href=\"#\" class=\"grey-text small sidenav-button\" data-activates=\"slide-out\">Sign in</a></li>\n                            <li><a href=\"https://www.skybooker.com/faq.html\" class=\"grey-text small\">Frequently Asked Questions (FAQ)</a></li>\n                            <li><a href=\"https://www.skybooker.com/static/contact.php\" class=\"grey-text small\">Support</a></li>\n                            <li><a href=\"https://www.skybooker.com/book-flights/status/\" class=\"grey-text small\">Booking Status</a></li>\n\n                            <li><a href=\"https://www.skybooker.com/static/contact.php\" class=\"grey-text small\">Feedback</a></li>\n                        </ul>\n                    </div>\n                    <div class=\"col-md-4 col-xs-12\">\n\n                        <ul>\n                            <li class=\"blue-grey-text small font-bold\"><span class=\"footer-heading\">Book by Phone </span><br> <br> Within US &amp; Canada\n                                <br> <span class=\"font-bold   h5-responsive\"> <a   href=\"tel:18885915929\">1-888-591-5929</a></span> <br>\n                                <br>\n                                <span class=\"pt-4\">From Abroad</span>\n                                <br>\n                                <span class=\"font-bold  h5-responsive\"> <a   href=\"tel:+17183600660\"> +1-718-360-0660</a></span>\n                            </li>\n\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-4 rewards-section\">\n\n\n            <div class=\"row\">\n                <Div class=\"col pl-4 pt-4\">\n                    <img src=\"https://www.skybooker.com/flights/assets/rewards_footer.png\" class=\"img-fluid\" />\n\n\n                    <ul class=\"pt-3\">\n                        <li> Exclusive fares with additional discounts</li>\n                        <li>Priority service, with personalised recommendations</li>\n                        <li>Additional discounts when you bundle your flight with a hotel or tour package</li>\n                        <li>Specialized corporate and student discounts</li>\n                    </ul>\n\n                    <button class=\"btn btn-light  \" (click)=\"openSignInModal()\" *ngIf=\"!userLoggedIn\">Sign up for free!</button>\n\n\n                </Div>\n            </div>\n\n\n        </div>\n    </div>\n    <!--Footer Links-->\n\n    <!--/.Footer Links-->\n    <!--Social buttons-->\n    <div style=\"background-color:#495a63;padding-top:10px;color:rgba(255,255,255,0.1)\">\n        <div class=\"container\">\n            <div class=\"row pt-2\">\n\n                <div class=\"col-md black-text   text-center align-items-center\">\n                    <div class=\"skybooker-footer\"> &copy; 2019 Skybooker Inc, All rights reserved. </div>\n                    <div class=\"social-section text-center\">\n                        <ul>\n                            <li> <a title=\"Skybooker Facebook\" href=\"https://www.facebook.com/skybookers\" target=\"_blank\" class=\"btn-floating btn-sm btn-fb\"><i class=\"fab fa-facebook-f\"></i></a></li>\n                            <li> <a title=\"Skybooker on Twitter\" href=\"https://twitter.com/_SkyBooker\" target=\"_blank\" class=\"btn-floating btn-sm btn-tw\"><i class=\"fab fa-twitter\"></i></a></li>\n                            <li> <a title=\"Skybooker G+\" href=\"https://plus.google.com/+Skybooker-skybooker\" target=\"_blank\" class=\"btn-floating btn-sm btn-gplus\"><i class=\"fab fa-google-plus-g\"></i></a></li>\n                            <li><a title=\"Skybooker Subscribe us\" href=\"https://www.youtube.com/channel/UCXvXlLURI91D2KZK_J-NDqg\" target=\"_blank\" class=\"btn-floating btn-sm btn-yt\"><i class=\"fab fa-youtube\"></i></a></li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <!--/.Social buttons-->\n        </div>\n\n    </div>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/***/ (function(module, exports) {

module.exports = ".page-footer {\n  overflow: hidden; }\n  .page-footer .footer-links {\n    background-color: #283137;\n    padding-top: 40px;\n    padding-bottom: 20px; }\n  .page-footer .rewards-section {\n    background-color: #39424a;\n    padding-top: 20px;\n    padding-bottom: 40px; }\n  .page-footer .rewards-section img {\n      max-width: 200px; }\n  .page-footer .rewards-section ul li {\n      color: rgba(255, 255, 255, 0.7);\n      padding: 3px; }\n  .page-footer .rewards-section .btn {\n      border-radius: 0px; }\n  .page-footer ul {\n    list-style-type: none;\n    padding: 0; }\n  .page-footer .social-section .fa {\n    top: 0 !important;\n    position: relative;\n    left: 0; }\n  .page-footer .social-section ul li {\n    display: inline-block; }\n  .page-footer .social-section ul li a {\n      margin-left: 0;\n      padding-left: 0; }\n  .blue-grey-text {\n  color: #ded7d7 !important;\n  font-size: 0.95em; }\n  .grey-text {\n  color: #cfd8dc !important;\n  font-size: 0.95em; }\n  .btn-floating.btn-small i,\n.btn-floating.btn-sm i,\n.btn-floating.wishlist i {\n  font-size: .96154rem;\n  line-height: 36.15385px; }\n  .btn-fb .fa,\n.btn-gplus .fa,\n.btn-ins .fa,\n.btn-tw .fa {\n  top: -8px;\n  position: relative;\n  left: -20px; }\n  .btn-floating i {\n  width: inherit;\n  font-size: 1.25rem;\n  line-height: 47px;\n  text-align: center; }\n  .btn-floating,\n.btn-floating i {\n  display: inline-block;\n  color: #fff; }\n  .btn-floating {\n  position: relative;\n  z-index: 1;\n  vertical-align: middle;\n  overflow: hidden;\n  width: 35px;\n  height: 35px;\n  padding: 0;\n  line-height: 35px;\n  border-radius: 50%;\n  margin: 10px;\n  background-color: #a6c;\n  cursor: pointer;\n  -webkit-transition: .3s;\n  transition: .3s; }\n  .btn-fb {\n  background-color: #3b5998;\n  -webkit-box-shadow: 5px 5px 15px 0px #2e2e2e;\n  box-shadow: 5px 5px 15px 0px #2e2e2e; }\n  .btn-fb:focus,\n.btn-fb:hover {\n  background-color: #4264aa; }\n  .fb-ic {\n  color: #3b5998 !important;\n  -webkit-box-shadow: 5px 5px 15px 0px #2e2e2e;\n  box-shadow: 5px 5px 15px 0px #2e2e2e; }\n  .fb-ic:focus,\n.fb-ic:hover {\n  color: #3b5998; }\n  .btn-tw {\n  background-color: #55acee;\n  -webkit-box-shadow: 5px 5px 15px 0px #2e2e2e;\n  box-shadow: 5px 5px 15px 0px #2e2e2e; }\n  .btn-tw:focus,\n.btn-tw:hover {\n  background-color: #6cb7f0; }\n  .tw-ic {\n  color: #55acee !important; }\n  .tw-ic:focus,\n.tw-ic:hover {\n  color: #55acee; }\n  .btn-gplus {\n  background-color: #dd4b39;\n  -webkit-box-shadow: 5px 5px 15px 0px #2e2e2e;\n  box-shadow: 5px 5px 15px 0px #2e2e2e; }\n  .btn-gplus:focus,\n.btn-gplus:hover {\n  background-color: #e15f4f; }\n  .gplus-ic {\n  color: #dd4b39 !important; }\n  .gplus-ic:focus,\n.gplus-ic:hover {\n  color: #dd4b39; }\n  .btn-yt {\n  background-color: #ed302f;\n  -webkit-box-shadow: 5px 5px 15px 0px #2e2e2e;\n  box-shadow: 5px 5px 15px 0px #2e2e2e; }\n  .btn-yt:focus,\n.btn-yt:hover {\n  background-color: #ef4746; }\n  .yt-ic {\n  color: #ed302f !important; }\n  .yt-ic:focus,\n.yt-ic:hover {\n  color: #ed302f; }\n  #oneWay,\n#twoWay {\n  width: 50%; }\n  .footer-heading {\n  font-size: 18px;\n  color: #fff; }\n  .skybooker-footer {\n  font: size 0.8em;\n  color: rgba(255, 255, 255, 0.2); }\n  a.black-text {\n  color: #ded7d7 !important;\n  font-size: 12px; }\n  a:hover {\n  color: #fff !important; }\n  .h5-responsive {\n  font-size: 1.4em; }\n  .h5-responsive a {\n    color: rgba(255, 255, 255, 0.9); }\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    service: 'http://s2-stage.flightomart.com/',
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map