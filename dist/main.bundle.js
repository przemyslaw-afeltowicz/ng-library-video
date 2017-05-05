webpackJsonp([0,3],{

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilmsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FilmsService = (function () {
    function FilmsService(http) {
        this.http = http;
        this.films = [
            {
                id: 1,
                thumb: "http://s.redefine.pl/dcs/o2/redefine/vm2images/xu/xuv1rcqi7knjje5rsee3a8j4y3zm2oe5.jpg",
                title: "10-lecie Kabaretu Skeczów Męczących - Część II",
                description: "Dla czcigodnego jubilata wystąpią zespoły Feel i Enej, kabaret Łowcy.B i Andrzej Grabows...",
                source: "http://n-3-8.dcs.redcdn.pl/webcache/rdf2/redefine/p/vm2movies/ir/irgujr89gvxojpsq5pf5s2szd5rcmy2j.mp4",
                category: "Komedia",
                director: "Adam Kowalski",
                actors: []
            },
            {
                id: 2,
                title: "Świat według Kiepskich - Odcinek 511",
                thumb: "http://s.redefine.pl/dcs/o2/redefine/vm2images/a3/a3gr6hu7a8isn543k8ttj41g4ufr7c2n.jpg",
                description: "Halina przypadkowo znajduje w piwnicy stary album rodzinny...",
                source: "http://n-3-20.dcs.redcdn.pl/webcache/rdf1/redefine/p/vm2movies/xf/xfahf2b2uqrbkzm122pmmicppgimnfcp.mp4",
                category: "Dramat",
                director: "Piotr Nowak",
                actors: []
            },
            {
                id: 3,
                title: "Idol - Odcinek 9",
                thumb: "http://s.redefine.pl/dcs/o2/redefine/vm2images/gn/gnywtqzp981f2ky3tkmw3yoy8k5jabx2.jpg",
                description: "Zaczęło się eliminowanie finalistów „Idola”. Pierwszy uczestnik odpadł po występie na żywo. Tym razem to widzowie decydowali o „być albo nie być” kandydatów na gwiazdy...",
                source: "http://n-3-23.dcs.redcdn.pl/webcache/rdf1/redefine/p/vm2movies/g4/g47822ukch3dewyqf4gqftp2ch5uq5v7.mp4",
                category: "Komedia",
                director: "Przemysław Testowy",
                actors: []
            },
            {
                id: 4,
                title: "Zdrady - Odcinek 106",
                thumb: "http://s.redefine.pl/dcs/o2/redefine/vm2images/ge/gehhfaz538msgocvgceywa444vbc1oip.jpg",
                description: "Marek Kuchciński (29 l.) ożenił się z Elizą (27 l.) sześć tygodni temu. Mimo iż od dnia ślubu minęło już trochę czasu, ona wciąż nie zachowuje...",
                source: "http://n-3-5.dcs.redcdn.pl/webcache/rdf2/redefine/p/vm2movies/bj/bjkwyjueh9c372dbe6n1ngekxihj3q2g.mp4",
                category: "Polish rap",
                director: "Paluch",
                actors: []
            }
        ];
    }
    FilmsService.prototype.getFilms = function () {
        return this.films;
    };
    FilmsService.prototype.getArtist = function () {
        return this.http.get('https://api.spotify.com/v1/search?q=eminem&type=artist');
    };
    FilmsService.prototype.getFilm = function (id) {
        return this.films.find(function (item) {
            return item.id === id;
        });
    };
    FilmsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], FilmsService);
    return FilmsService;
    var _a;
}());
//# sourceMappingURL=/home/przemek/projects/ng-library-video/src/films.service.js.map

/***/ }),

/***/ 387:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 387;


/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(506);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/przemek/projects/ng-library-video/src/main.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__(669),
            styles: [__webpack_require__(663)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=/home/przemek/projects/ng-library-video/src/about.component.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(670),
            styles: [__webpack_require__(664)],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/przemek/projects/ng-library-video/src/app.component.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__films_films_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__films_service__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_about_component__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__film_film_component__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__player_player_component__ = __webpack_require__(509);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var appRoutes = [
    { path: 'films', component: __WEBPACK_IMPORTED_MODULE_6__films_films_component__["a" /* FilmsComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_8__about_about_component__["a" /* AboutComponent */] },
    { path: 'film/:id', component: __WEBPACK_IMPORTED_MODULE_9__film_film_component__["a" /* FilmComponent */] },
    { path: '',
        redirectTo: '/films',
        pathMatch: 'full'
    },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__films_films_component__["a" /* FilmsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_9__film_film_component__["a" /* FilmComponent */],
                __WEBPACK_IMPORTED_MODULE_10__player_player_component__["a" /* PlayerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__films_service__["a" /* FilmsService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/przemek/projects/ng-library-video/src/app.module.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__films_service__ = __webpack_require__(216);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilmComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FilmComponent = (function () {
    function FilmComponent(_route, _service) {
        this._route = _route;
        this._service = _service;
    }
    FilmComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.id = +params['id'];
        });
        this.film = this._service.getFilm(this.id);
    };
    FilmComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-film',
            template: __webpack_require__(671),
            styles: [__webpack_require__(665)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__films_service__["a" /* FilmsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__films_service__["a" /* FilmsService */]) === 'function' && _b) || Object])
    ], FilmComponent);
    return FilmComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/przemek/projects/ng-library-video/src/film.component.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__films_service__ = __webpack_require__(216);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilmsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilmsComponent = (function () {
    function FilmsComponent(filmsService) {
        this.filmsService = filmsService;
        this.films = [];
        this.artist = {};
    }
    FilmsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.films = this.filmsService.getFilms();
        this.filmsService.getArtist()
            .subscribe(function (res) {
            _this.artist = res.json();
        });
    };
    FilmsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-films',
            template: __webpack_require__(672),
            styles: [__webpack_require__(666)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__films_service__["a" /* FilmsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__films_service__["a" /* FilmsService */]) === 'function' && _a) || Object])
    ], FilmsComponent);
    return FilmsComponent;
    var _a;
}());
//# sourceMappingURL=/home/przemek/projects/ng-library-video/src/films.component.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlayerComponent = (function () {
    function PlayerComponent() {
    }
    PlayerComponent.prototype.ngOnInit = function () {
    };
    PlayerComponent.prototype.progress = function (video, range, progress) {
        // let procent = (video.currentTime / video.duration) * 100;
        // progress.style.width = procent + "%";
        // range.style.left = procent + "%";
    };
    PlayerComponent.prototype.timeupdate = function (video, range, progress) {
        var procent = (video.currentTime / video.duration) * 100;
        progress.style.width = procent + "%";
        range.style.left = procent + "%";
    };
    PlayerComponent.prototype.setFullScreen = function (video) {
        video.webkitEnterFullScreen();
    };
    PlayerComponent.prototype.setPlay = function (video, play) {
        if (video.paused) {
            play.classList.remove("fa-play");
            play.classList.add("fa-pause");
            video.play();
        }
        else {
            play.classList.add("fa-play");
            play.classList.remove("fa-pause");
            video.pause();
        }
    };
    PlayerComponent.prototype.setTime = function (event, video, range, that) {
        var procent = (event.offsetX / that.offsetWidth) * 100;
        console.log(procent);
        range.style.left = procent + "%";
        // that.style.width = procent + "%";
        var sec = (video.duration * procent) / 100;
        video.currentTime = sec;
        if (!video.paused) {
            video.play();
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', String)
    ], PlayerComponent.prototype, "src", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', String)
    ], PlayerComponent.prototype, "poster", void 0);
    PlayerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-player',
            template: __webpack_require__(673),
            styles: [__webpack_require__(667)]
        }), 
        __metadata('design:paramtypes', [])
    ], PlayerComponent);
    return PlayerComponent;
}());
//# sourceMappingURL=/home/przemek/projects/ng-library-video/src/player.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/przemek/projects/ng-library-video/src/environment.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/home/przemek/projects/ng-library-video/src/polyfills.js.map

/***/ }),

/***/ 663:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(69)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 664:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(69)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 665:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(69)();
// imports


// module
exports.push([module.i, ".films{\n  margin-top: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 666:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(69)();
// imports


// module
exports.push([module.i, ".films{\n  margin-top: 30px;\n}\n\n.film-item{\n  margin-bottom: 10px;\n}\n\n.card-text{\n  margin-top: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 667:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(69)();
// imports


// module
exports.push([module.i, ".player-progress {\n  position: relative;\n  margin-top: 35px;\n  cursor: pointer;\n  width: 100%;\n  height: 1px;\n  -webkit-transition: ease 0.3s;\n  transition: ease 0.3s;\n  background: rgba(255, 255, 255, 0.25)\n}\n\n.player-progress:hover {\n  height: 2px\n}\n\n.player-progress .time-info {\n  position: absolute;\n  display: none;\n  top: -40px;\n  left: 20%;\n  text-align: center;\n  font-size: 12px;\n  border: solid 1px rgba(255, 255, 255, 0.51);\n  width: 60px;\n  background: rgba(0, 0, 0, 0.51);\n  color: #fff;\n  padding: 3px;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%)\n}\n\n.player-progress .range {\n  position: absolute;\n  left: 0;\n  top: 50%;\n  width: 10px;\n  height: 10px;\n  background: white;\n  border-radius: 50%;\n  z-index: 99999;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%)\n}\n\n.player-progress .progress {\n  position: absolute;\n  z-index: 10;\n  height: 100%;\n  width: 0;\n  background: #1c85ff\n}\n\n.player-progress .buffer {\n  position: absolute;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.41)\n}\n\n.fa {\n  cursor: pointer;\n  margin-top: 30px;\n  padding-left: 30px;\n  color: white;\n  opacity: 0.7;\n  -webkit-transition: ease 1s;\n  transition: ease 1s\n}\n\n.fa:hover {\n  opacity: 1\n}\n\n.player-html5 {\n  /*position: absolute;*/\n  /*width: 900px;*/\n  /*top: 50%;*/\n  /*left: 50%;*/\n  /*transform: translate(-50%, -50%);*/\n}\n\n.player-html5 .player-control-bg {\n  height: 70px;\n  position: absolute;\n  width: 100%;\n  bottom: 0\n}\n\n.player-html5 video {\n  width: 100%;\n  display: block\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 669:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <p>Koncept aplikacji VOD</p>\n</div>\n"

/***/ }),

/***/ 670:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-xl navbar-inverse bg-inverse\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" routerLink=\"/\">Baza filmowa</a>\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a routerLink=\"/films\" class=\"nav-link\" routerLinkActive=\"active\">Filmy</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/about\" routerLinkActive=\"active\">O projekcie</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 671:
/***/ (function(module, exports) {

module.exports = "<div class=\"container films\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <app-player [src]=\"film.source\" [poster]=\"film.thumb\"></app-player>\n    </div>\n    <div class=\"col-md-4\">\n      <h1>Tytuł: {{film.title}}</h1>\n      <p>Opis: {{film.description}}</p>\n      <p>Kategoria: {{film.category}}</p>\n      <p>Reżyser: {{film.director}}</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 672:
/***/ (function(module, exports) {

module.exports = "<div class=\"container films\">\n  <div class=\"row\">\n    <div class=\"col-md-4 film-item\" *ngFor=\"let film of films\">\n      <a routerLink=\"/film/{{film.id}}\">\n        <img src=\"{{film.thumb}}\" alt=\"{{film.thumb}}\"  style=\" width: 100%; display: block;\">\n        <h2 class=\"card-text\">{{film.title}}</h2>\n        <p class=\"card-text\">{{film.description}}</p>\n      </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 673:
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"html5-player\">-->\n  <!--<div class=\"player-video\">-->\n    <!--<video src=\"{{src}}\" (click)=\"setPlay(video, button)\" (timeupdate)=\"progress(video, range)\"></video>-->\n  <!--</div>-->\n  <!--<div class=\"player-control-bg\">-->\n    <!--<input type=\"range\" value=\"0\" min=\"0\" max=\"100\" (change)=\"setTime(video, range)\">-->\n    <!--<div class=\"player-controls\">-->\n      <!--<button #button (click)=\"setPlay(video, button)\">Play</button>-->\n      <!--<button #fullscreen (click)=\"setFullScreen(video)\">fullscreen</button>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</div>-->\n\n<div class=\"player-html5\">\n  <div class=\"player-video\">\n    <video #video class=\"video\" poster=\"{{poster}}\" (click)=\"setPlay(video, play)\" (timeupdate)=\"timeupdate(video, range, progress)\" src=\"{{src}}\"></video>\n  </div>\n  <div class=\"player-control-bg\">\n    <div class=\"row\">\n      <div class=\"col-md-1\">\n        <i #play class=\"fa fa-play\" (click)=\"setPlay(video, play)\" aria-hidden=\"true\"></i>\n      </div>\n      <div class=\"col-md-9\">\n        <div #playerprogress class=\"player-progress\" (click)=\"setTime($event, video, range, playerprogress)\">\n          <div class=\"time-info\">0:15</div>\n          <div class=\"range\" #range></div>\n          <div class=\"progress\" #progress></div>\n          <div class=\"buffer\" #buffer></div>\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <i class=\"fa fa-volume-up\" aria-hidden=\"true\"></i>\n        <i class=\"fa fa-arrows-alt\" aria-hidden=\"true\"></i>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 691:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(388);


/***/ })

},[691]);
//# sourceMappingURL=main.bundle.js.map