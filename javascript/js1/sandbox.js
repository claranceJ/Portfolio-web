// Class one

alert("Hello Jack!");

// Class two

console.log(1);


// Variable using let which can be reassinged

let age = 25;
let year = 2019;
console.log(age);
console.log(age, year);

// const Variable which is constant
const points = 100;
console.log(points);


// var which is the older way
var score = 98;
console.log(score);

// DATA TYPES EXAMPLES
let email = 'jack@gmail.com';
console.log(email);

// string concatenation
let firstName = "Jack";
let lastName = "Clarance";
let fullName = firstName + ' ' + lastName;

console.log(fullName);


// getting Characters
console.log(fullName[0])


// string length using the .length property
console.log(fullName.length);


// string methods/functions
console.log(fullName.toLocaleUpperCase());
let result = fullName.toLocaleLowerCase();
console.log(result);

// getting index
let index = email.indexOf("@");
console.log(index);

// assigning new email var
email = "jepco@jepcocleaning.co.ke";
let workEmail = email.lastIndexOf("n");
console.log(workEmail);


// slice string
let emailSlice = email.slice(0,7);
console.log(emailSlice);


// substring

let output = email.substring(0,10);
console.log(output);


// string replace

let replaced = email.replace("j","f");
console.log(replaced);


// Template string