"use strict";
exports.__esModule = true;
exports.Bag = void 0;
var Bag = /** @class */ (function () {
    function Bag(comanyName, price) {
        this.companyName = comanyName;
        this.price = price;
    }
    Bag.prototype.displayInfo = function () {
        console.log('Bag Compnay name is:' + this.companyName);
        console.log('Bag price name is:' + this.price);
    };
    return Bag;
}());
exports.Bag = Bag;
