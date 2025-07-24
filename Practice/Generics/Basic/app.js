"use strict";
// Generic Example
function Password(pass) {
    console.log(`Your Password is: ${pass}`);
    return pass;
}
Password("Admin@1234");
Password(123454);
// Swap two number
function swapNum(num1, num2) {
    return [num2, num1];
}
console.log(swapNum(4, 6));
console.log(swapNum("Hi", 7));
// Generic Array Function
function arNumber(arr) {
    return arr;
}
console.log(arNumber([1, 2, 3, 4]));
function arString(arr) {
    return arr;
}
console.log(arString(["Vijay", "Rohit", "Rohan", "Rakesh"]));
