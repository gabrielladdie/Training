// Functions - bread and butter of JS

/* 
    Fundamental concepts of JS; groups code together to allow multiple executions
*/

// Basic Function Declaration
function helloWorld() {
    console.log("Hello, World!");
}

function greetUser(name) {
    return `Hello, ${name}!`;
}

console.log(greetUser("John"));

//Function Scope
/*
    Variables defined inside a function are not accessible (visible) from outside the function.
    Variables declared within a { } block can be accessed from anywhere within the block.
*/

function scopeExample() {
    let localVariable = "I am local";
    console.log(localVariable);
}

scopeExample();

// functional hoisting - can call function before it is declared
// The declaration is hoisted to the top of the page and so you can invoke the function wherever

hoistingExample(); // function is called before the declaration
function hoistingExample() {
    console.log("I am hoisted");
}

// Function Closures
/*
    JS functions can form closures, which means they can remember and access variables from their containing (enclosing) scope even
    after the outer function has finished executing.
    This allows for the creation of private variables and functions within a function.
*/

function outerFunction() {
    const message = "Hello, ";

    function innerFunction(name) {
        console.log(message + name);
    }
    return innerFunction;
}

const closureFunction = outerFunction();
closureFunction("John");

// Default Parameters
function defaultParameters(name, age = 30) {
    console.log(`Name: ${name}, Age: ${age}`);
}

defaultParameters("John");
defaultParameters("Jane", 25);