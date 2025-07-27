"use strict";
// Generic Function
// 1.Identity Function
function Identity(arg) {
    return arg;
}
let fun1 = Identity("Welcome to Generic Function");
console.log(fun1);
let fun2 = Identity(3455);
console.log(fun2);
// 2.Generic Array Reverse
function reverseArray(arr) {
    return arr.reverse();
}
let arr1 = reverseArray(["Ram", "Ravan", "Laxman", "Vibhishan"]);
console.log(arr1);
let arr3 = reverseArray([11, 22, 33, 44, 55, 66]);
console.log(arr3);
function reverseNewArray(arr) {
    let newArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArray.push(arr[i]);
    }
    return newArray;
}
console.log(reverseNewArray([1, 2, 3, 4, 5]));
// 3.Length Logger
function lengthLogger(value) {
    console.log(value.length);
}
lengthLogger("Measuring Length of String");
lengthLogger([234, 4, 4, 33, 33, 33]);
// lengthLogger(2334); Error: number doesn't have .length
