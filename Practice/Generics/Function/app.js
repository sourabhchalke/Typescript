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
// 4.Swap Tuple Elements
function swapTuple(num1, num2) {
    return [num2, num1];
}
console.log(swapTuple(6, 2));
// 5.Generic First Element :-Return the first element of a generic array.
function retunFirst(item) {
    return item[0];
}
console.log(retunFirst([1, 2, 3, 4])); //outpud:1
console.log(retunFirst(["Ram", "Laxman", "Ravan", "Vibhishan"])); //output:Ram
// 6.Merge Two Objects
function MergeObject(obj1, obj2) {
    {
        let Merged = Object.assign(Object.assign({}, obj1), obj2);
        // let Merged=Object.assign({},obj1,obj2); = using Object.assign()
        // return {...obj1,...obj2};=this also merge two objects and return one object
        return Merged;
    }
}
const empl1 = {
    id: 1,
    name: "Arun Yadav",
    address: "Bihar"
};
const salaryDetail = {
    salary: 25000,
    pf: 2500,
    incentive: 3000
};
console.log(MergeObject(empl1, salaryDetail));
