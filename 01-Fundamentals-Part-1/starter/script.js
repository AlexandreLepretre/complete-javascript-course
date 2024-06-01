/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Alexandre");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions    
let alexandre_matilda = "AM";
let $function = 27;

let person = "alexandre";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Engineering Manager";

let job1 = "web developer";
let job2 = "engineering manager";

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Alexandre');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1988;
console.log(typeof year);

console.log(typeof null);

let age = 35;
age = 36;

const birthYear = 1988;
// birthYear = 1987;
// const job;

var job = 'developer';
job = 'student';

lastName = 'Leprêtre';
console.log(lastName);
*/

const now = 2037;
const ageAlexandre = now - 1988;
const ageLianne = now - 2018;
console.log(ageAlexandre, ageLianne);

console.log(ageAlexandre * 2, ageAlexandre / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Alexandre';
const lastName = 'Leprêtre';
console.log(firstName + ' ' + lastName);

let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageAlexandre > ageLianne); // >, <, >=, <=
console.log(ageLianne >= 18);

const isFullAge = ageLianne >= 18;

console.log(now - 1988 > now - 2018);