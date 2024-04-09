(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/app/calculator/calculator-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/calculator/calculator-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CalculatorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorRoutingModule", function() { return CalculatorRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_calculator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/calculator.component */ "./src/app/calculator/pages/calculator.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _pages_calculator_component__WEBPACK_IMPORTED_MODULE_2__["CalculatorComponent"] }
];
var CalculatorRoutingModule = /** @class */ (function () {
    function CalculatorRoutingModule() {
    }
    CalculatorRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CalculatorRoutingModule);
    return CalculatorRoutingModule;
}());



/***/ }),

/***/ "./src/app/calculator/calculator.module.ts":
/*!*************************************************!*\
  !*** ./src/app/calculator/calculator.module.ts ***!
  \*************************************************/
/*! exports provided: CalculatorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorModule", function() { return CalculatorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _calculator_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculator-routing.module */ "./src/app/calculator/calculator-routing.module.ts");
/* harmony import */ var _pages_calculator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/calculator.component */ "./src/app/calculator/pages/calculator.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/logout/logout.component */ "./src/app/calculator/components/logout/logout.component.ts");
/* harmony import */ var _components_display_display_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/display/display.component */ "./src/app/calculator/components/display/display.component.ts");
/* harmony import */ var _components_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/buttons/buttons.component */ "./src/app/calculator/components/buttons/buttons.component.ts");
/* harmony import */ var _components_history_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/history/history.component */ "./src/app/calculator/components/history/history.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CalculatorModule = /** @class */ (function () {
    function CalculatorModule() {
    }
    CalculatorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _calculator_routing_module__WEBPACK_IMPORTED_MODULE_2__["CalculatorRoutingModule"]
            ],
            declarations: [_pages_calculator_component__WEBPACK_IMPORTED_MODULE_3__["CalculatorComponent"], _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_5__["LogoutComponent"], _components_display_display_component__WEBPACK_IMPORTED_MODULE_6__["DisplayComponent"], _components_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_7__["ButtonsComponent"], _components_history_history_component__WEBPACK_IMPORTED_MODULE_8__["HistoryComponent"]]
        })
    ], CalculatorModule);
    return CalculatorModule;
}());



/***/ }),

/***/ "./src/app/calculator/components/buttons/buttons.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/calculator/components/buttons/buttons.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".test2 {\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: (auto)[2];\n        grid-template-columns: repeat(2,auto);\n}\n.test {\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: (1fr)[4];\n        grid-template-columns: repeat(4,1fr);\n}\n.btn {\n    background-color: rgb(44, 44, 44);\n    color: white;\n    margin: 1.5px;\n    padding: 10px 25px;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    outline: 1px solid rgb(0, 0, 0);\n}\n.btn:hover {\n    background-color: #090c31;\n}\n#deleteAll{\n    color: black;\n    background-color: aqua;\n}\n#delete {\n    color: red;\n    background-color: white;\n}\n#equals {\n    background-color: red;\n}"

/***/ }),

/***/ "./src/app/calculator/components/buttons/buttons.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/calculator/components/buttons/buttons.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"test2\">\n  <button data-button=\"deleteAll\" class=\"btn btn-special\" (click)=\"emitValue('C')\">C</button>\n  <button data-button=\"delete\" class=\"btn btn-special\" (click)=\"emitValue('D')\">⌫</button>\n</div>\n\n<div class=\"test\">\n  <button data-value=\"7\" class=\"btn\" (click)=\"emitValue('7')\">7</button>\n  <button data-value=\"8\" class=\"btn\" (click)=\"emitValue('8')\">8</button>\n  <button data-value=\"9\" class=\"btn\" (click)=\"emitValue('9')\">9</button>\n  <button data-button=\"divide\" class=\"btn\" (click)=\"emitValue('/')\">/</button>\n  <button data-value=\"4\" class=\"btn\" (click)=\"emitValue('4')\">4</button>\n  <button data-value=\"5\" class=\"btn\" (click)=\"emitValue('5')\">5</button>\n  <button data-value=\"6\" class=\"btn\" (click)=\"emitValue('6')\">6</button>\n  <button data-button=\"multiply\" class=\"btn\" (click)=\"emitValue('*')\">X</button>\n  <button data-value=\"1\" class=\"btn\" (click)=\"emitValue('1')\">1</button>\n  <button data-value=\"2\" class=\"btn\" (click)=\"emitValue('2')\">2</button>\n  <button data-value=\"3\" class=\"btn\" (click)=\"emitValue('3')\">3</button>\n  <button data-button=\"subtract\" class=\"btn\" (click)=\"emitValue('-')\">-</button>\n  <button data-button=\"decimal\" class=\"btn\" (click)=\"emitValue('.')\">.</button>\n  <button data-value=\"0\" id=\"cero\" class=\"btn\" (click)=\"emitValue('0')\">0</button>\n  <button data-button=\"add\" id= \"add\" class=\"btn\" (click)=\"emitValue('+')\">+</button>\n  <button data-button=\"equals\" id=\"equals\" class=\"btn\" (click)=\"emitValue('=')\">=</button>\n</div>\n"

/***/ }),

/***/ "./src/app/calculator/components/buttons/buttons.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/calculator/components/buttons/buttons.component.ts ***!
  \********************************************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
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

var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent() {
        this.value = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ButtonsComponent.prototype.emitValue = function (value) {
        this.value.emit(value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ButtonsComponent.prototype, "value", void 0);
    ButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'calculator-buttons',
            template: __webpack_require__(/*! ./buttons.component.html */ "./src/app/calculator/components/buttons/buttons.component.html"),
            styles: [__webpack_require__(/*! ./buttons.component.css */ "./src/app/calculator/components/buttons/buttons.component.css")]
        })
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "./src/app/calculator/components/display/display.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/calculator/components/display/display.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".display {\n    color: black;\n    background-color: rgb(72, 168, 72);\n    padding: 2rem 0.5rem;\n    font-size: 2.5rem;\n    text-align: right;\n    border-radius: 5px;\n    margin-bottom: 1rem;\n    font-family: monospace;\n    font-weight: 600;\n}"

/***/ }),

/***/ "./src/app/calculator/components/display/display.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/calculator/components/display/display.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"display\">\n  {{ value }}\n</div>"

/***/ }),

/***/ "./src/app/calculator/components/display/display.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/calculator/components/display/display.component.ts ***!
  \********************************************************************/
/*! exports provided: DisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayComponent", function() { return DisplayComponent; });
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

var DisplayComponent = /** @class */ (function () {
    function DisplayComponent() {
        this.value = '0';
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DisplayComponent.prototype, "value", void 0);
    DisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'calculator-display',
            template: __webpack_require__(/*! ./display.component.html */ "./src/app/calculator/components/display/display.component.html"),
            styles: [__webpack_require__(/*! ./display.component.css */ "./src/app/calculator/components/display/display.component.css")]
        })
    ], DisplayComponent);
    return DisplayComponent;
}());



/***/ }),

/***/ "./src/app/calculator/components/history/history.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/calculator/components/history/history.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".operations-body{\n    max-height: 400px;\n    padding: 0rem 2rem 0rem 2rem;\n    background-color: rgb(0, 0, 0);\n    color: white;\n    overflow-y: auto;\n    text-align: right;\n}\n.operations-title{\n    padding-bottom: 15px;\n    position: sticky;\n    top: 0;\n    background-color: black;\n    border-bottom: 1px solid white;\n}\n.delete{\n    color: rgb(255, 0, 0);\n    cursor: pointer;\n    font-weight: bolder;\n    background-color: rgb(0, 0, 0);\n    border: none;\n}\n"

/***/ }),

/***/ "./src/app/calculator/components/history/history.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/calculator/components/history/history.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"operations-body\">\n  <h5 class=\"operations-title\">Operations</h5>\n    <div class=\"text-center text-light\">\n      <p *ngFor=\"let op of historial\" > {{ op.operations }} = {{ op.result }}\n        <button (click)=\"deleteOneHistory(op.id)\" class=\"delete\">x</button>\n      </p>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/calculator/components/history/history.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/calculator/components/history/history.component.ts ***!
  \********************************************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_calculator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/calculator.service */ "./src/app/calculator/services/calculator.service.ts");
/* harmony import */ var _pages_calculator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/calculator.component */ "./src/app/calculator/pages/calculator.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HistoryComponent = /** @class */ (function () {
    function HistoryComponent(calculatorService, calculatorComponent) {
        this.calculatorService = calculatorService;
        this.calculatorComponent = calculatorComponent;
    }
    HistoryComponent.prototype.deleteOneHistory = function (id) {
        var _this = this;
        this.calculatorService.deleteOneHistory(id)
            .subscribe(function () {
            _this.calculatorComponent.refreshHistory();
        }, function (error) {
            return console.error('Error: ' + error);
        });
    };
    ;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HistoryComponent.prototype, "historial", void 0);
    HistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'calculator-history',
            template: __webpack_require__(/*! ./history.component.html */ "./src/app/calculator/components/history/history.component.html"),
            styles: [__webpack_require__(/*! ./history.component.css */ "./src/app/calculator/components/history/history.component.css")]
        }),
        __metadata("design:paramtypes", [_services_calculator_service__WEBPACK_IMPORTED_MODULE_1__["CalculatorService"],
            _pages_calculator_component__WEBPACK_IMPORTED_MODULE_2__["CalculatorComponent"]])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "./src/app/calculator/components/logout/logout.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/calculator/components/logout/logout.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.logout {\n    outline: 1px solid rgb(255, 255, 255);\n    padding: 10px 20px;\n    margin: 15px 0 0 0;\n    border-radius: 5px;\n    display: inline-block;\n    text-align: center;\n    background-color: rgb(255, 255, 255);\n    color: rgb(0, 0, 0);\n    font-size: 10px;\n    cursor: pointer;\n    transition: outline-width 0.1s ;\n    border: 1px solid white;\n    font-weight: 500;\n}\n\n.logout:hover{\n    background-color: rgb(0, 0, 0);\n    color: rgb(255, 255, 255);\n    outline: 3px solid white;\n}\n"

/***/ }),

/***/ "./src/app/calculator/components/logout/logout.component.html":
/*!********************************************************************!*\
  !*** ./src/app/calculator/components/logout/logout.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"onLogout()\" class=\"logout\">Log out</button>\n"

/***/ }),

/***/ "./src/app/calculator/components/logout/logout.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/calculator/components/logout/logout.component.ts ***!
  \******************************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    LogoutComponent.prototype.onLogout = function () {
        var _this = this;
        var userData = JSON.parse(localStorage.getItem('userData'));
        this.auth.logout(userData).subscribe(function (success) {
            if (success) {
                _this.router.navigate(['/login']);
            }
            else {
                console.error('Error en el cierre de sesión.');
            }
        }, function (error) {
            console.error('Error en la solicitud de cierre de sesión:', error);
        });
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'calculator-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/calculator/components/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/calculator/components/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/calculator/pages/calculator.component.css":
/*!***********************************************************!*\
  !*** ./src/app/calculator/pages/calculator.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".calculator {\n    max-width: 250px;\n    max-height: 450px;\n    background-color: rgb(32, 32, 32);\n    padding: 2rem 2rem 1rem 2rem;\n    border-radius: 5px;\n    text-align: center;\n    outline: 1px solid rgb(85, 85, 85);\n    margin-right: 2px;\n}\n\n.container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.history {\n    /* Ajustar márgenes si es necesario */\n    margin-right: 20px;\n    align-self: flex-start;\n}\n"

/***/ }),

/***/ "./src/app/calculator/pages/calculator.component.html":
/*!************************************************************!*\
  !*** ./src/app/calculator/pages/calculator.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n\n  <div class=\"calculator\">\n    <calculator-display [value]=\"displayValue\"></calculator-display>\n    <calculator-buttons (value)=\"onEmitValue($event)\"></calculator-buttons>\n    <calculator-logout class=\"logout\"></calculator-logout>\n  </div>\n  <calculator-history\n    [historial]=\"historial\"\n    class=\"history\"\n  ></calculator-history>\n</div>\n"

/***/ }),

/***/ "./src/app/calculator/pages/calculator.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/calculator/pages/calculator.component.ts ***!
  \**********************************************************/
/*! exports provided: CalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorComponent", function() { return CalculatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_calculator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/calculator.service */ "./src/app/calculator/services/calculator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalculatorComponent = /** @class */ (function () {
    function CalculatorComponent(calculatorService) {
        this.calculatorService = calculatorService;
        this.historial = [];
        this.displayValue = '0';
    }
    CalculatorComponent.prototype.ngOnInit = function () {
        this.refreshHistory();
    };
    CalculatorComponent.prototype.onEmitValue = function (value) {
        switch (value) {
            case 'C':
                this.displayValue = '0';
                break;
            case 'D':
                if (this.displayValue.length > 1) {
                    this.displayValue = this.displayValue.slice(0, -1);
                    break;
                }
                this.displayValue = '0';
                break;
            case '=':
                this.calculate();
                break;
            case '.':
                if (this.displayValue[this.displayValue.length - 1] === '.')
                    break;
                this.displayValue += value;
                break;
            default:
                if (this.displayValue.length === 1
                    && this.displayValue[0] === '0') {
                    this.displayValue = value;
                    break;
                }
                this.displayValue += value;
        }
    };
    CalculatorComponent.prototype.calculate = function () {
        var _this = this;
        this.calculatorService.calculate(this.displayValue)
            .subscribe(function (response) {
            _this.displayValue = response.resultado;
            _this.refreshHistory();
        });
    };
    CalculatorComponent.prototype.refreshHistory = function () {
        var _this = this;
        this.calculatorService.getUserHistory()
            .subscribe(function (response) { return _this.historial = response; });
    };
    CalculatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calculator',
            template: __webpack_require__(/*! ./calculator.component.html */ "./src/app/calculator/pages/calculator.component.html"),
            styles: [__webpack_require__(/*! ./calculator.component.css */ "./src/app/calculator/pages/calculator.component.css")]
        }),
        __metadata("design:paramtypes", [_services_calculator_service__WEBPACK_IMPORTED_MODULE_1__["CalculatorService"]])
    ], CalculatorComponent);
    return CalculatorComponent;
}());



/***/ }),

/***/ "./src/app/calculator/services/calculator.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/calculator/services/calculator.service.ts ***!
  \***********************************************************/
/*! exports provided: CalculatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorService", function() { return CalculatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalculatorService = /** @class */ (function () {
    function CalculatorService(http) {
        this.http = http;
    }
    CalculatorService.prototype.calculate = function (expression) {
        var body = { expresion: expression };
        var headerRequest = JSON.parse(localStorage.getItem('userData'));
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .append('userID', headerRequest.userID.toString())
            .append('sessionID', headerRequest.sessionID);
        return this.http.post('/operations', body, { headers: httpHeaders })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () { throw Error('Unknown expression.'); }));
    };
    CalculatorService.prototype.getUserHistory = function () {
        var headerRequest = JSON.parse(localStorage.getItem('userData'));
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .append('userID', headerRequest.userID.toString())
            .append('sessionID', headerRequest.sessionID);
        return this.http.get('/operations', { headers: httpHeaders });
    };
    CalculatorService.prototype.deleteOneHistory = function (id) {
        var HeaderRequest = JSON.parse(localStorage.getItem('userData'));
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .append('userID', HeaderRequest.userID.toString())
            .append('sessionID', HeaderRequest.sessionID);
        var url = "/operations/" + id;
        return this.http.delete(url, { headers: httpHeaders });
    };
    CalculatorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CalculatorService);
    return CalculatorService;
}());



/***/ })

}]);
//# sourceMappingURL=2.js.map