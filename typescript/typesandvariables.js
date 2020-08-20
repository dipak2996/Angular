"use strict";
exports.__esModule = true;
exports.age = void 0;
console.log("started learnning angular");
exports.age = 67;
var username = "dipak patil";
var hobby = ['dance', 'singing', 'tour', 'readding'];
var hm = 'example of constant';
if (hobby[0] === 'dance') {
    console.log(hobby[0]);
    console.log(typeof username);
}
hobby.forEach(function (element) {
    console.log(element);
});
console.log("added the new element");
hobby.push("outing");
hobby.forEach(function (ele) { console.log(ele); });
console.log("popping the element");
hobby.pop();
hobby.forEach(function (ele) { console.log(ele); });
console.log("removing the pertuicular element");
hobby.splice(0, 0);
hobby.forEach(function (ele) { console.log(ele); });
