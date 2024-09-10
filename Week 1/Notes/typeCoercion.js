// JS has more dynamic type system

/*
    This means the automatic conversion of one data type to another when performing operations or comparing values with different data types.

    JS is a loosely typed language, which means it doesn't require explicit type declaration for variables.
    The type of a variable is determined by the value it holds at runtime. JS will attempt to convert values as needed.

    THIS IS AN AUTOMATIC BEHAVIOR! It can lead to unexpected behaviors if not understood correctly.

    For example:
*/

// Implicit type conversion (automatic)
let x = 10;
let y = "10";
console.log(x == y);

// Explicit type conversion (manual)
const a = 10;
const num = Number(a);


// Comparison Operator
// == Loose equality operator
// === Strict equality operator

// Loose equality operator (==)
// performs type coercion to compare values for equality

// Example of loose equality operator
console.log(1 == "1");

// Strict equality operator (===)
// Does not perform type coercion
// Compares the operands based on their types and values

// Truthy and Falsy values
/* 
    All values in JS have an implicit truthy and falsy value.
    Some values are considered "truthy" when coerced to a boolean value, while others are considered "falsy".

    Falsy values:
        0
        ""
        null
        undefined
        NaN
        false
    
    Truthy values:
        Everything else
        Any non-zero number
        Any non-empty string
        Any object
        Any function
        Any array
        true
*/

// Example of truthy and falsy values
console.log(Boolean(0));