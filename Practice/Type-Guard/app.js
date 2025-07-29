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
function isAdmins(obj) {
    return obj.role === "admin";
}
function isAdminOrUser(obj) {
    if (isAdmins(obj)) {
        console.log("This is Admin Dashboard and only accessible by Admin", obj);
    }
    else if (obj.role === "worker") {
        console.log("This is Worker Dashboard", obj);
    }
    else {
        console.log("This is Guest User");
    }
}
const admin1 = {
    role: "admin",
    permissions: ["read", "write"]
};
const worker1 = {
    role: "worker",
    email: "worker123@gmail.com"
};
isAdminOrUser(admin1);
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius * shape.radius;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.len * shape.wid;
        default:
            throw new Error("Unknown shape");
    }
}
//  Create objects
const cir1 = { kind: "circle", radius: 5 };
const sq1 = { kind: "square", side: 9 };
const rect1 = { kind: "rectangle", len: 9, wid: 12 };
//  Call and log results
console.log("Circle Area:", getArea(cir1)); //output:Circle Area:78.5398
console.log("Square Area:", getArea(sq1)); //output:Square Area :81
console.log("Rectangle Area:", getArea(rect1)); //output Rectangle Area: 108
