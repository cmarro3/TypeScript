type Combinable = number | string;
type ConversionDescription = 'as-number' | 'as-text'
/* 
This is a Aliases where you can take literal types can make them into
types that make it eaier for you to read and eaier to code and takes
a lot less of space. This can also you for any type of setups.
*/

function combine (
    input1: Combinable, 
    input2: Combinable, 
    resultConvert: ConversionDescription
    ){
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConvert === 'as-number'){
        result = +input1 + +input2;
    } else{
        result = input1.toString() + input2.toString();
    }
    if(resultConvert === 'as-number'){
        return +result;
    } else{
        return result.toString();
    }
}


const combinedAges = combine(30,26, 'as-number');
console.log(combinedAges);

const combineStringAges = combine('30', '26', 'as-number');
console.log(combineStringAges);

const combineNames = combine ('Christopher', 'Jackson', 'as-text');
console.log(combineNames);