"use strict";
var userInput;
var userName;
userInput = 5;
userInput = 'cat';
if (typeof userInput === 'string') {
    userName = userInput;
}
/*
basiclly unknow is a type you dont want to use often, it's like
the any type. the unknow type doesnt check for errors and you can
it to equal whatever type you want just like the ex above
*/
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('Something went wrong, cheif!', 500);
/*
The example throws an error which has the type of never which doesn't
return anything like void. It's a newer type than void
*/ 
