"use strict";
/*
This is a Aliases where you can take literal types can make them into
types that make it eaier for you to read and eaier to code and takes
a lot less of space. This can also you for any type of setups.
*/
function combine(input1, input2, resultConvert) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConvert === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultConvert === 'as-number') {
        return +result;
    }
    else {
        return result.toString();
    }
}
var combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
var combineStringAges = combine('30', '26', 'as-number');
console.log(combineStringAges);
var combineNames = combine('Christopher', 'Jackson', 'as-text');
console.log(combineNames);
