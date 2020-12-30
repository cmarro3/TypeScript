"use strict";
function add(n1, n2, showResult) {
    /*if (typeof n1 !== "number" || typeof n2 !== "number"){
   throw new Error ('This is aint it cheif');
    }*/
    var result = n1 + n2;
    if (showResult) {
        console.log(resultPhrase + result);
    }
    else {
        return n1 + n2;
    }
    return n1 + n2;
}
var num1 = 5;
// 5.0
// when you put a sting in the value option it's going to add them wrong and treat the result as a string.
var num2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is ';
add(num1, num2, printResult);
