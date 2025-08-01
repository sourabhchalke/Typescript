"use strict";
// Utility generics (or utility types) are built-in generic types provided by TypeScript to transform or construct new types. They help you write cleaner and more reusable code.
let partialUser = { name: "Tiger" };
console.log(partialUser.name);
let requiredUser2 = {
    name: "Sachin",
    age: 53,
    address: "Mumbai"
};
console.log(requiredUser2);
let jobPick = {
    address: "Mumbai",
    role: "Frontend Developer",
    // qualification:"MSc", => Object literal may only specify known properties, and 'qualification' does not exist in type 'Pick<job, "address" | "role">'
};
console.log(jobPick.address);
let employeeOmit = {
    address: "Pune",
    name: "Ajay Yadav",
};
// This will only allow "Bowler" | "All-Rounder"
let player = "Bowler"; // Correct
let user = "name";
let user2 = "age";
let password1 = "peter";
let password2 = 12234;
// let password3:checkPassword=null; : Type 'null' is not assignable to type 'checkPassword'.
