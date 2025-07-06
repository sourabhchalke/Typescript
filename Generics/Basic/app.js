"use strict";
// Generics in TypeScript allow you to write flexible, reusable functions, classes, and interfaces that work with any data type while still maintaining type safety.
// You lose type information (arg could be anything).
function add(a) {
    if (typeof a == "number") {
        return a * a;
    }
    else {
        return "Hello";
    }
}
console.log(add(4));
// With generics:Now the type is preserved.
function addG(a) {
    return a;
}
console.log(addG(4));
console.log(addG("String"));
console.log(addG(true));
