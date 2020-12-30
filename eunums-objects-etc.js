"use strict";
/*const person: {
    name: string;
    age: number;
}*/
/*const ADMIN = 0;
const readonly = 1;
const author = 2; */
// enums are global variables which makes it easier to write muiltple
// global variables
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["readonly"] = 100] = "readonly";
    Role[Role["author"] = 200] = "author";
})(Role || (Role = {}));
;
var person = {
    name: 'Christopher',
    age: 22,
    hobbies: ['Sports', 'videogames'],
    role: Role.ADMIN
};
/*person.role.push('admin');
person.role[1]= 10;
person.role = [0, 'admin', 'user'];*/
var favact; // any means do whatever you want strings, num idc
favact = ['Cooking', 'jumping'];
// dont fall back to any 
console.log(person.name);
// {} is the same as writing object. 
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobbies = _a[_i];
    console.log(hobbies.toUpperCase());
    // console.log(hobbies.map()); ERRRR!!!
}
if (person.role === Role.author) {
    console.log('is admin');
}
