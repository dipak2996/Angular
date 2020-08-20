"use strict";
exports.__esModule = true;
var bigbazar_1 = require("./bigbazar");
var bigbazar = new bigbazar_1.Bigbazar('50% off');
bigbazar.flavor = 'dipak patil';
bigbazar.displayOffer();
var isclose = bigbazar['isclose'];
console.log(isclose);
