"use strict";
// Function Returning Result
function mult(a, b) {
    return a * b;
}
console.log("Multiplication of two number :", mult(3, 4));
// Default parameter (:type="")
function employee(name = "Hello") {
    return name;
}
console.log(employee());
// Optional parameter (?:)
function opPara(name) {
    console.log("Optional Parameter Ex :", name);
}
opPara();
// Rest Parameter
function restPara(...arr) {
    console.log(...arr);
}
restPara(1, 2, 3, 4, 5);
function sum(a, b, c) {
    if (!a === undefined && !b === undefined && !c === undefined) {
        return a + b + c;
    }
    else {
        return a + b;
    }
}
console.log("Addition of two no. :", sum(2, 3));
console.log("Addition of three no. :", sum(3, 4, 5));
