(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _latency_latency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./latency/latency */ "./src/app/latency/latency.ts");
/* harmony import */ var _download_download__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./download/download */ "./src/app/download/download.ts");
/* harmony import */ var _upload_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./upload/upload */ "./src/app/upload/upload.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/latency', pathMatch: 'full' },
    { path: 'latency', component: _latency_latency__WEBPACK_IMPORTED_MODULE_2__["latency"] },
    { path: 'download', component: _download_download__WEBPACK_IMPORTED_MODULE_3__["download"] },
    { path: 'upload', component: _upload_upload__WEBPACK_IMPORTED_MODULE_4__["upload"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\r\n  display: flex;\r\n  height: 60px;\r\n  line-height: 60px;\r\n  background-color: #2a3f54;\r\n  color: #fff;\r\n}\r\nh1{\r\n  width: 300px;\r\n  font-size: 16px;\r\n  color: #fff;\r\n  text-align: center;\r\n  font-weight: normal;\r\n}\r\nnav{\r\n  flex: 1;\r\n}\r\nnav a{\r\n  display: inline-block;\r\n  width: 100px;;\r\n  color: #fff;\r\n  text-align: center;\r\n  font-size: 14px;\r\n  height: 59px;\r\n  box-sizing: border-box;\r\n}\r\nnav a:hover{\r\n  background-color: rgb(34, 50, 67);\r\n}\r\nnav a.active{\r\n  border-bottom: 2px solid rgb(255, 208, 75);\r\n  color: rgb(255, 208, 75);\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <h1>Network Speed Test</h1>\n  <nav>\n    <a routerLink=\"/latency\" [class.active]=\"now == 1\" (click)=\"now = 1\">延迟测试</a>\n    <a routerLink=\"/download\" [class.active]=\"now == 2\" (click)=\"now = 2\">下载测试</a>\n    <a routerLink=\"/upload\" [class.active]=\"now == 3\" (click)=\"now = 3\">上传测试</a>\n  </nav>\n</header>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.now = 1;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _latency_latency__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./latency/latency */ "./src/app/latency/latency.ts");
/* harmony import */ var _download_download__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./download/download */ "./src/app/download/download.ts");
/* harmony import */ var _upload_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./upload/upload */ "./src/app/upload/upload.ts");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/fesm5/ngx-echarts.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_echarts__WEBPACK_IMPORTED_MODULE_9__["NgxEchartsModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _latency_latency__WEBPACK_IMPORTED_MODULE_6__["latency"],
                _download_download__WEBPACK_IMPORTED_MODULE_7__["download"],
                _upload_upload__WEBPACK_IMPORTED_MODULE_8__["upload"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'text/plain' })
};
var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8200/api'; // URL to web api
    }
    AppService.prototype.getLatency = function () {
        var _this = this;
        return this.http.get(this.baseUrl + "/latency", httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) { return _this.log(res); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getLatency', [])));
    };
    AppService.prototype.download = function () {
        var _this = this;
        return this.http.get(this.baseUrl + "/download", {
            responseType: 'text',
            reportProgress: true
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) { return _this.log({ operation: 'downloading' }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('download', [])));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    AppService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        console.log("handleError operation: " + operation);
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    AppService.prototype.log = function (message) {
        console.log('zfx:', message);
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/download/download.css":
/*!***************************************!*\
  !*** ./src/app/download/download.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section{\r\n  margin: 40px 10%;\r\n  text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/download/download.html":
/*!****************************************!*\
  !*** ./src/app/download/download.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div class=\"card\">\r\n      <div echarts [options]=\"initOption\" [merge]=\"updateOption\"></div>\r\n      <div class=\"table\">\r\n        <div>\r\n          <div>当前值</div>\r\n          <div>平均值</div>\r\n        </div>\r\n        <div>\r\n          <div>{{now}}</div>\r\n          <div>{{average}}</div>\r\n        </div>\r\n      </div>\r\n      <div style=\"margin-top: 30px;\">\r\n          <button (click)=\"change()\" style=\"margin-right: 30px;\">{{button}}</button>\r\n          <button (click)=\"clear()\">清空</button>\r\n      </div>\r\n    </div>\r\n  </section>"

/***/ }),

/***/ "./src/app/download/download.ts":
/*!**************************************!*\
  !*** ./src/app/download/download.ts ***!
  \**************************************/
/*! exports provided: download */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "download", function() { return download; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var download = /** @class */ (function () {
    function download(http) {
        this.http = http;
        this.button = "开始";
        this.running = false;
        this.userCancal = false;
        this.now = 0;
        this.start = 0;
        this.average = 0;
        this.length = 0;
        this.tableData = [
            {
                now: "0kb/s",
                average: "0kb/s"
            }
        ];
    }
    download.prototype.ngOnInit = function () {
        if (!Date.now) {
            Date.now = function now() {
                return new Date().getTime();
            };
        }
        this.initOption = {
            title: {
                text: 'DownLoad Test',
                subtext: '下载测试'
            },
            tooltip: {
                formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
                feature: {
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [
                {
                    name: '实时速率',
                    type: 'gauge',
                    z: 3,
                    min: 0,
                    max: 2000,
                    center: ['25%', '55%'],
                    detail: { formatter: '{value}kb/s' },
                    data: [{ value: 0, name: '实时速率' }]
                },
                {
                    name: '平均速率',
                    type: 'gauge',
                    z: 3,
                    min: 0,
                    max: 2000,
                    center: ['75%', '55%'],
                    detail: { formatter: '{value}kb/s' },
                    data: [{ value: 0, name: '平均速率' }]
                }
            ]
        };
        this.updateOption = JSON.parse(JSON.stringify(this.initOption));
    };
    download.prototype.change = function () {
        if (this.running) {
            this.userCancal = true;
            this.button = "开始";
            this.running = false;
            return;
        }
        this.running = true;
        this.button = "停止";
        this.userCancal = false;
        this.run();
    };
    download.prototype.run = function () {
        var _this = this;
        var start = Date.now();
        this.start = start;
        this.download()
            .subscribe(function (res) {
            console.log('subscribe');
            if (_this.userCancal) {
                throw Error('Operation canceled by the user.');
            }
        });
    };
    download.prototype.clear = function () {
        this.tableData = [
            {
                now: 0,
                average: 0
            }
        ];
        this.now = 0;
        this.average = 0;
        this.button = "开始";
        this.running = false;
        this.length = 0;
        this.updateOption.series[0].data[0].value = 0;
        this.updateOption.series[1].data[0].value = 0;
        this.updateOption = {
            series: this.updateOption.series
        };
    };
    download.prototype.download = function () {
        var _this = this;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('get', 'http://localhost:8200/api/download', {
            responseType: 'text',
            reportProgress: true
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (event) { return _this.getEventMessage(event); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) { return _this.onProgress(res); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('download', [])));
    };
    download.prototype.onProgress = function (res) {
        console.log('downloading');
    };
    download.prototype.getEventMessage = function (event) {
        if (event.type == 0) {
            console.log(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"]);
        }
        console.log(event);
        if (event.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].DownloadProgress) {
            var end = Date.now();
            var ms = end - this.start;
            this.now = Math.floor(event['loaded'] * 1000 / 1024 / ms);
            this.average = Math.floor((this.average * this.length + this.now) / ++this.length);
            var now = this.now + "kb/s";
            var average = this.average + "kb/s";
            this.tableData = [
                {
                    now: now,
                    average: average
                }
            ];
            this.updateOption.series[0].data[0].value = this.now;
            this.updateOption.series[1].data[0].value = this.average;
            this.updateOption = {
                series: this.updateOption.series
            };
        }
        if (event.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response) {
            this.button = "开始";
            this.running = false;
        }
    };
    download.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        console.log("handleError operation: " + operation);
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    download = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-download',
            template: __webpack_require__(/*! ./download.html */ "./src/app/download/download.html"),
            styles: [__webpack_require__(/*! ./download.css */ "./src/app/download/download.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], download);
    return download;
}());



/***/ }),

/***/ "./src/app/latency/latency.css":
/*!*************************************!*\
  !*** ./src/app/latency/latency.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section{\r\n  margin: 40px 10%;\r\n  text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/latency/latency.html":
/*!**************************************!*\
  !*** ./src/app/latency/latency.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <div class=\"card\">\r\n    <div echarts [options]=\"initOption\" [merge]=\"updateOption\"></div>\r\n    <div class=\"table\">\r\n      <div>\r\n        <div>当前值</div>\r\n        <div>平均值</div>\r\n      </div>\r\n      <div>\r\n        <div>{{now}}</div>\r\n        <div>{{average}}</div>\r\n      </div>\r\n    </div>\r\n    <div style=\"margin-top: 30px;\">\r\n        <button (click)=\"change()\" style=\"margin-right: 30px;\">{{button}}</button>\r\n        <button (click)=\"clear()\">清空</button>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/latency/latency.ts":
/*!************************************!*\
  !*** ./src/app/latency/latency.ts ***!
  \************************************/
/*! exports provided: latency */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "latency", function() { return latency; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var latency = /** @class */ (function () {
    function latency(appService) {
        this.appService = appService;
        this.button = "开始";
        this.timer = "";
        this.stop = false;
        this.now = 0;
        this.average = 0;
        this.length = 0;
        this.tableData = [
            {
                now: "0ms",
                average: "0ms"
            }
        ];
    }
    latency.prototype.ngOnInit = function () {
        if (!Date.now) {
            Date.now = function now() {
                return new Date().getTime();
            };
        }
        var data = [];
        var now = [];
        var average = [];
        for (var i = 0; i < 10; i++) {
            data.push(' ');
            now.push(0);
            average.push(0);
        }
        this.initOption = {
            title: {
                text: 'Latency Test',
                subtext: '延迟测试'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['实时值', '平均值']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                show: true,
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    dataView: { readOnly: false },
                    magicType: { type: ['line', 'bar'] },
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                data: data,
                boundaryGap: false
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value}ms'
                }
            },
            series: [
                {
                    data: now,
                    type: 'line',
                    smooth: true,
                    name: '实时值',
                    label: {
                        normal: {
                            show: true,
                            position: 'outside',
                            formatter: '{c}ms'
                        }
                    }
                },
                {
                    data: average,
                    type: 'line',
                    smooth: true,
                    name: '平均值',
                    label: {
                        normal: {
                            show: true,
                            position: 'outside',
                            formatter: '{c}ms'
                        }
                    }
                }
            ],
            animationDuration: 1000,
            animationDurationUpdate: 1000,
            animationEasing: 'cubicIn'
        };
        this.updateOption = JSON.parse(JSON.stringify(this.initOption));
    };
    latency.prototype.change = function () {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = "";
            this.button = "开始";
            this.stop = true;
            return;
        }
        this.stop = false;
        this.button = "停止";
        this.run();
    };
    latency.prototype.run = function () {
        var _this = this;
        if (this.stop)
            return;
        var start = Date.now();
        this.appService.getLatency()
            .subscribe(function (res) {
            if (res.length == 0) {
                alert('发送错误');
                _this.button = "开始";
                _this.stop = true;
                return;
            }
            console.log('in latency: ', res);
            var end = Date.now();
            _this.now = end - start;
            _this.average = Math.floor((_this.average * _this.length + _this.now) / (++_this.length));
            var now = _this.now + "ms";
            var average = _this.average + "ms";
            _this.tableData = [
                {
                    now: now,
                    average: average
                }
            ];
            _this.updateOption.xAxis.data.shift();
            var date = new Date();
            var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            _this.updateOption.xAxis.data.push(time);
            _this.updateOption.series[0].data.shift();
            _this.updateOption.series[1].data.shift();
            _this.updateOption.series[0].data.push(_this.now);
            _this.updateOption.series[1].data.push(_this.average);
            _this.updateOption = {
                xAxis: _this.updateOption.xAxis,
                series: _this.updateOption.series
            };
            if (!_this.stop) {
                _this.timer = setTimeout(function () {
                    _this.run();
                }, 1000);
            }
        });
    };
    latency.prototype.clear = function () {
        this.stop = true;
        this.tableData = [
            {
                now: 0,
                average: 0
            }
        ];
        this.now = 0;
        this.average = 0;
        this.length = 0;
        this.button = "开始";
        this.updateOption = JSON.parse(JSON.stringify(this.initOption));
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = "";
        }
    };
    latency = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-latency',
            template: __webpack_require__(/*! ./latency.html */ "./src/app/latency/latency.html"),
            styles: [__webpack_require__(/*! ./latency.css */ "./src/app/latency/latency.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], latency);
    return latency;
}());



/***/ }),

/***/ "./src/app/upload/upload.css":
/*!***********************************!*\
  !*** ./src/app/upload/upload.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section{\r\n  margin: 40px 10%;\r\n  text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/upload/upload.html":
/*!************************************!*\
  !*** ./src/app/upload/upload.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <div class=\"card\">\r\n    <div echarts [options]=\"initOption\" [merge]=\"updateOption\"></div>\r\n    <div style=\"display: flex\">\r\n      <div style=\"flex: 1;\">\r\n        <div style=\"display: flex;\">\r\n          <div style=\"width: 160px;text-align: right;\">文件大小</div>\r\n          <div style=\"flex: 1;text-align: left;padding-left: 40px;\">\r\n            <select name=\"\" id=\"\">\r\n              <option *ngFor=\"let option of options\" value=\"{{option.value}}\">{{option.label}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div style=\"display: flex;\">\r\n          <div style=\"width: 160px;text-align: right;\">测试次数</div>\r\n          <div style=\"flex: 1;text-align: left;padding-left: 40px;\">\r\n            <input type=\"number\" min=\"1\" max=\"100\" [value]=\"iterations\">\r\n          </div>\r\n        </div>\r\n        <div style=\"display: flex;\">\r\n          <div style=\"width: 160px;text-align: right;\">间隔时间</div>\r\n          <div style=\"flex: 1;text-align: left;padding-left: 40px;\">\r\n            <input type=\"number\" min=\"0\" max=\"1000\" [value]=\"duration\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div style=\"flex: 1;\">\r\n        <div class=\"table\">\r\n          <div>\r\n            <div>当前值</div>\r\n            <div>平均值</div>\r\n          </div>\r\n          <div>\r\n            <div>{{now}}</div>\r\n            <div>{{average}}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div style=\"margin-top: 30px;\">\r\n      <button (click)=\"change()\" style=\"margin-right: 30px;\">{{button}}</button>\r\n      <button (click)=\"clear()\">清空</button>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/upload/upload.ts":
/*!**********************************!*\
  !*** ./src/app/upload/upload.ts ***!
  \**********************************/
/*! exports provided: upload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upload", function() { return upload; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var upload = /** @class */ (function () {
    function upload(http) {
        this.http = http;
        this.iterations = 1;
        this.duration = 1;
        this.value = '1024';
        this.remain = 0;
        this.uploadData = '';
        this.button = "开始";
        this.tableData = [
            {
                now: "0kb/s",
                average: "0kb/s"
            }
        ];
        this.now = 0;
        this.start = 0;
        this.average = 0;
        this.length = 0;
        this.running = false;
        this.userCancel = false;
        this.options = [
            {
                value: '10',
                label: '10kb'
            }, {
                value: '100',
                label: '100kb'
            }, {
                value: '1024',
                label: '1mb'
            }, {
                value: '10240',
                label: '10mb'
            }, {
                value: '102400',
                label: '100mb'
            }
        ];
    }
    upload.prototype.ngOnInit = function () {
        var _this = this;
        if (!Date.now) {
            Date.now = function now() {
                return new Date().getTime();
            };
        }
        var data = [];
        var now = [];
        var average = [];
        for (var i = 0; i < 10; i++) {
            data.push(' ');
            now.push(0);
            average.push(0);
        }
        this.initOption = {
            title: {
                text: 'Upload Test',
                subtext: '上传测试'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['实时值', '平均值']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                show: true,
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    dataView: { readOnly: false },
                    magicType: { type: ['line', 'bar'] },
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                data: data,
                boundaryGap: false
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value}kb/s'
                }
            },
            series: [
                {
                    data: now,
                    type: 'line',
                    smooth: true,
                    name: '实时值',
                    label: {
                        normal: {
                            show: false,
                            position: 'top',
                            formatter: '{c}kb/s'
                        }
                    }
                },
                {
                    data: average,
                    type: 'line',
                    smooth: true,
                    name: '平均值',
                    label: {
                        normal: {
                            show: false,
                            position: 'bottom',
                            formatter: '{c}kb/s'
                        }
                    }
                }
            ],
            // animationDuration: 1000,
            // animationDurationUpdate: 1000,
            animationEasing: 'cubicIn'
        };
        this.updateOption = JSON.parse(JSON.stringify(this.initOption));
        this.http.get("http://localhost:8200/api/upload", { responseType: 'text' })
            .subscribe(function (res) {
            console.log(res);
            _this.uploadData = res;
        });
    };
    upload.prototype.change = function () {
        if (this.running) {
            this.userCancel = true;
            this.button = "开始";
            this.running = false;
            return;
        }
        this.userCancel = false;
        this.running = true;
        this.button = "停止";
        this.remain = this.iterations;
        this.run();
    };
    upload.prototype.run = function () {
        var _this = this;
        if (!this.running)
            return;
        var duration = this.duration;
        var start = Date.now();
        this.start = start;
        var postData = [];
        var n = parseInt(this.value);
        for (var i = 0; i < n; i++) {
            postData.push(this.uploadData);
        }
        var data = new FormData();
        var blob = new Blob(postData, {
            type: 'application/octet-stream'
        }); //var aBlob = new Blob( array, options );
        // let file = new File([this.uploadData], "file.bin", {
        //   type: 'application/octet-stream',
        // });
        /**
         * The filename reported to the server (a USVString), when a Blob or File is passed as the second parameter.
         * The default filename for Blob objects is "blob".
         * The default filename for File objects is the file's filename.
         */
        // data.append('file', blob) 
        data.append('file', blob, 'upload.bin');
        // data.append('file',file) 
        // data.append('file',file,'appendFileName.bin') 
        this.upload(data)
            .subscribe(function (res) {
            console.log('subscribe', res); // res == undefined
            if (_this.userCancel) {
                throw Error('Operation canceled by the user.');
            }
            _this.length = 0;
            _this.remain--;
            if (_this.remain == 0) {
                _this.button = "开始";
                _this.running = false;
                return;
            }
            setTimeout(function () {
                _this.run();
            }, duration * 1000);
        });
    };
    upload.prototype.clear = function () {
        this.tableData = [
            {
                now: 0,
                average: 0
            }
        ];
        this.now = 0;
        this.average = 0;
        this.button = "开始";
        this.length = 0;
        this.running = false;
        var data = [];
        var now = [];
        var average = [];
        for (var i = 0; i < 10; i++) {
            data.push(' ');
            now.push(0);
            average.push(0);
        }
        this.updateOption.xAxis.data = data;
        this.updateOption.series[0].data = now;
        this.updateOption.series[1].data = average;
        this.updateOption = {
            xAxis: this.updateOption.xAxis,
            series: this.updateOption.series
        };
    };
    upload.prototype.upload = function (data) {
        var _this = this;
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('post', 'http://localhost:8200/api/upload', data, {
            reportProgress: true,
            responseType: 'text'
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (event) { return _this.getEventMessage(event); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) { return _this.onProgress(res); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('download', [])));
    };
    upload.prototype.onProgress = function (res) {
        console.log('downloading');
    };
    upload.prototype.getEventMessage = function (event) {
        if (event.type == 0) {
            console.log(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"]);
        }
        console.log(event);
        if (event.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress) {
            var end = Date.now();
            var ms = end - this.start;
            this.now = Math.floor(event['loaded'] * 1000 / 1024 / ms);
            this.average = Math.floor((this.average * this.length + this.now) / ++this.length);
            var now = this.now + "kb/s";
            var average = this.average + "kb/s";
            this.tableData = [
                {
                    now: now,
                    average: average
                }
            ];
            this.updateOption.xAxis.data.shift();
            var date = new Date();
            var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            this.updateOption.xAxis.data.push(time);
            this.updateOption.series[0].data.shift();
            this.updateOption.series[1].data.shift();
            this.updateOption.series[0].data.push(this.now);
            this.updateOption.series[1].data.push(this.average);
            this.updateOption = {
                xAxis: this.updateOption.xAxis,
                series: this.updateOption.series
            };
        }
        if (event.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response) {
            this.button = "开始";
            this.running = false;
        }
    };
    upload.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        console.log("handleError operation: " + operation);
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    upload = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__(/*! ./upload.html */ "./src/app/upload/upload.html"),
            styles: [__webpack_require__(/*! ./upload.css */ "./src/app/upload/upload.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], upload);
    return upload;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\networktest-angular\front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map