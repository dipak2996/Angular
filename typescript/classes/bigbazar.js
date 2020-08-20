"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Bigbazar = void 0;
var bigbazar_decorator_1 = require("../decorater/bigbazar.decorator");
var Bigbazar = /** @class */ (function () {
    function Bigbazar(offer) {
        this.flavor = 'vanilla';
        console.log('invoked bigbazar consturctor');
        this._offer = offer;
    }
    Bigbazar.prototype.displayOffer = function () {
        console.log('The current offer is:' + this._offer);
        console.log(this.flavor);
    };
    __decorate([
        bigbazar_decorator_1.Emoji()
    ], Bigbazar.prototype, "flavor");
    Bigbazar = __decorate([
        bigbazar_decorator_1.decoratorWithoutParam,
        bigbazar_decorator_1.decoratorWithParam(false)
    ], Bigbazar);
    return Bigbazar;
}());
exports.Bigbazar = Bigbazar;
