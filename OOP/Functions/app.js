"use strict";
// Function : In TypeScript, functions are a fundamental building block, just like in JavaScript — but with optional type annotations that provide type safety and intellisense support.
// void means the function doesn't return anything.
function simple() {
    console.log("Void Function");
}
// Returning String
function _name() {
    return "Rohit";
}
console.log(_name());
// Optional Parameter : ? marks the parameter as optional.
function op(name) {
    return name ? `Hello ${name}` : `Hello`;
}
console.log(op("Sachin Sir"));
//Default Parameters
function dp(address = "India") {
    return `Address is ${address}`;
}
console.log(dp("Mumbai"));
// Rest Paramete : ... rest 
function restPara(...arr) {
    return arr.map((num) => num * 3);
}
console.log(restPara(1, 2, 3, 45));
function add(a, b) {
    return b == undefined ? a + 2 : a + b;
}
console.log(add(2));
console.log(add(2, 5));
