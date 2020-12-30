"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
// this function has a void return type 
// void just means it doesnt return anything 
// but the add function makes a result
printResult(add(5, 12));
//this console wont print anything because of the void in 
// printResult
console.log(printResult(add(5, 12)));
var combineValues;
combineValues = add;
//combineValues = printResult;
//combineValues = 5;
console.log(combineValues(8, 8));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
