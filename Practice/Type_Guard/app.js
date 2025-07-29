"use strict";
// TypeScript may not always know the exact type of a variable, especially when using union types. Type guards help narrow down these types at runtime.
// Guard Type  	             Syntax                	    Use For
// 1.typeof	               typeof x === "..."	      Primitives
// 2.instanceof	           x instanceof Type	      Class instances
// 3.in	                  "prop" in x	              Checking object properties
// 4.Custom Guard          x is SomeType	          Advanced, reusable checks
// Examples
// 1.Type Guard with typeof
// Create a function logValue that accepts a parameter of type string | number and logs whether it's a string or a number using typeof.
function logValue(value) {
    if (typeof value === "string") {
        console.log("Your value is String:", value);
    }
    else if (typeof value === "number") {
        console.log("Your value is Number :", value);
    }
    else {
        console.log("Your value is not either string or number:", value);
    }
}
logValue("Welcome to Type Guard Concept.");
logValue(34);
// 2.Type Guard with instanceof
// Define two classes Car and Bike. Create a function getVehicleType that takes an object and returns its type using instanceof.
class CarT {
    car() {
        console.log("Car...");
    }
}
class BikeT {
    bike() {
        console.log("Bike...");
    }
}
function getVehicleType(obj) {
    if (obj instanceof CarT) {
        obj.car();
    }
    else if (obj instanceof BikeT) {
        obj.bike();
    }
}
getVehicleType(new CarT);
getVehicleType(new BikeT);
// 3.Simple Union Type Guard
// Write a function printId(id: number | string) that behaves differently based on whether id is a number or a string.
function printId(id) {
    if (typeof id === "number") {
        console.log(`Square of number ${id} : ${id * id}`);
    }
    else if (typeof id === "string") {
        console.log(`Converting string to uppercase : ${id.toLocaleUpperCase()}`);
    }
}
printId(5);
printId("skfhjhdf");
