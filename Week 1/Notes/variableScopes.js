// Variable Scopes - JS has lexical scope, which means that functions are available to access variables from their containing scopes, even after the outer function has finished executing. This behavior is known as a closure.

/*
1. Global Scope - accessible from anywhere; BE CAUTIOUS: they can lead to naming conflicts and make it harder to maintain code
2. Local (function) Scope - accessible only within the function

3. Block Scope - introduced with ES6 (ES2015), allows you to use let and const to declare variables that are limited to a particular code block {} (e.g. if, for, etc.)
    Variables declared with let and const are only available within the block they are defined in. This helps avoid unintended variable collisions and makes the code more readable and maintainable.
*/

// Global Scope
let globalVariable = "I am global!";
console.log(globalVariable);

// Local Scope
function localScopeExample() {
    let localVariable = "I am local!";
    console.log(localVariable);
}

localScopeExample();