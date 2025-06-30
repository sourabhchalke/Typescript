"use strict";
// Non-Primitive(Reference) Data Types:These are mutable and can hold collections of values or complex structures.
// Object
let obj = {
    names: "Virat",
    age: 12,
};
// Array:List of elements
let arr2 = [1, 2, 3];
arr2 = [2, 34, 66];
// Tuples:Fixed-length array with types
let arr4 = ["Hello", 99];
// Enum: Named constants
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super_admin";
})(UserRoles || (UserRoles = {}));
UserRoles.GUEST;
// Any:Allows any type
let anything;
anything = 67;
// Unknown:Like any but safer
let un = 6;
// Never: Function never returns
function throwError() {
    throw new Error();
}
// Function:Block of code
function abcd() {
    console.log("Simple Function");
}
// Class
class Car {
}
let obj3 = new Car();
