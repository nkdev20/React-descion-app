var namevar ="Hello";
console.log('namevar', namevar);

let nameLet = 'let';
 nameLet = 'sas';

console.log('nameLet', nameLet);

const nameConst = "frank";
console.log('nameConst', nameConst);

//block scope 

function hello() {
    let pet = "dog";
    return pet
}

let pet = hello();
console.log(pet);

///ex 2 if

const fullName = "Andrew Mead";
let firstName;
if (fullName) {
    // let firstName;
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log('outscope', firstName);
