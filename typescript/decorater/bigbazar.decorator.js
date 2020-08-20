"use strict";
exports.__esModule = true;
exports.Emoji = exports.decoratorForFuntion = exports.decoratorWithParam = exports.decoratorWithoutParam = void 0;
function decoratorWithoutParam(tar) {
    console.log('decorator without param is invked');
}
exports.decoratorWithoutParam = decoratorWithoutParam;
function decoratorWithParam(isclosed) {
    return function (target) {
        console.log('decorator with param is invked');
        target.prototype.isclose = isclosed;
    };
}
exports.decoratorWithParam = decoratorWithParam;
function decoratorForFuntion(isclosed) {
    return function (target) {
        console.log('decorator with param is invked');
        target.prototype.isclose = isclosed;
    };
}
exports.decoratorForFuntion = decoratorForFuntion;
// Property Decorator
function Emoji() {
    return function (target, key) {
        var val = target[key];
        var getter = function () {
            return val;
        };
        var setter = function (next) {
            console.log('updating flavor...');
            val = "\uD83C\uDF66 " + next + " \uD83C\uDF66";
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    };
}
exports.Emoji = Emoji;
