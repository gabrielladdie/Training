// Datatypes

// Numbers
let age = 30;
let price = 19.99;

// Strings
let firstName = "John";
let lastName = 'Doe';

// Booleans 
let isAdmin = true;

// Undefined
let car;

// Null
let person = null;

// Symbol
let symbol = Symbol('hello');
let symbol2 = Symbol('hello, World');

// BigInt
let bigInt = 123n; // remember to add n to the end of the number to note it as a bigint

// Reference Types

// Objects
const person2 = {
    firstName: 'John',
    lastName: 'Doe'
};

const pricedProduct = 19.99; // const is a constant variable, it cannot be reassigned

// Arrays
const numbers = [1, 2, 3, 4, 5];
const mixedArray = [1, 'Hello', true, null]; // Javascript is dynamically typed, so you can have mixed datatypes in an array; they have the possibility of holes, places where you removed a value but the gap is not closed

// Functions
function greet() {
    console.log('Hello');
}

function greet2(name) {
    console.log('Hello ' + name); // console.log(`Hello ${name}`); is a template literal
}

// Template Literals
// Surrounded by backticks ``

let templateLiteral = `Hello ${firstName} ${lastName}`;
