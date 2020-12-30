function add (n1: number, n2: number){
    return n1 + n2;
}

function printResult(num: number) {
    console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb){
    const result = n1 + n2;
    cb(result);


}

// this function has a void return type 
// void just means it doesnt return anything 
// but the add function makes a result
printResult(add(5,12));

//this console wont print anything because of the void in 
// printResult
console.log(printResult(add(5,12)));


let combineValues: (a: number, b: number) => number;

combineValues = add;
//combineValues = printResult;
//combineValues = 5;

console.log(combineValues(8,8));
addAndHandle(10,20, (result) => {
    console.log(result);
}); 



