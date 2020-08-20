"use strict";
exports.__esModule = true;
exports.getTheColourBasedOnday = exports.sumAllNumberFromTheArray = exports.calucateTheTotal = exports.calucateTheAge = void 0;
function calucateTheAge(birthYear) {
    return 'Your age is:' + (2020 - birthYear);
}
exports.calucateTheAge = calucateTheAge;
function calucateTheTotal(quentity, price) {
    if (quentity === void 0) { quentity = 5; }
    return 'The total price based on quentity is' + (price * quentity);
}
exports.calucateTheTotal = calucateTheTotal;
function sumAllNumberFromTheArray(num) {
    var sum = 0;
    num.forEach(function (element) {
        sum = sum + element;
    });
    return 'The sum of the given array is:' + sum;
}
exports.sumAllNumberFromTheArray = sumAllNumberFromTheArray;
function getTheColourBasedOnday(day) {
    switch (day) {
        case 'Mon':
            return 'white';
        case 'Tue':
            return 'blue';
        case 'Wed':
            return 'yello';
        case 'Thur':
            return 'green';
        default:
            return 'black';
            break;
    }
}
exports.getTheColourBasedOnday = getTheColourBasedOnday;
