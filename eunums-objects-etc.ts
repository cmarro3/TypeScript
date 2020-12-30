/*const person: {
    name: string;
    age: number;
}*/ 

/*const ADMIN = 0;
const readonly = 1;
const author = 2; */
// enums are global variables which makes it easier to write muiltple
// global variables

enum Role {ADMIN = 'ADMIN', readonly = 100 , author = 200};

const person = {
    name: 'Christopher',
    age: 22,
    hobbies: ['Sports', 'videogames'],
    role: Role.ADMIN
};
/*person.role.push('admin');
person.role[1]= 10;
person.role = [0, 'admin', 'user'];*/

let favact: string[]; // any means do whatever you want strings, num idc
favact = ['Cooking','jumping'] 
// dont fall back to any 

console.log(person.name);
// {} is the same as writing object. 

for(const hobbies of person.hobbies) {
    console.log(hobbies.toUpperCase());
   // console.log(hobbies.map()); ERRRR!!!
}

if(person.role === Role.author ){
    console.log('is admin');
}
