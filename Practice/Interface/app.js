"use strict";
const b1 = {
    title: "Doglapan",
    author: "Ashneer Grover",
    price: 450
};
console.log(b1);
function getEmployeeInfo(info) {
    console.log("Name :", `${info.name}`);
    console.log("Role :", `${info.role}`);
    console.log("Age :", `${info.age}`);
    console.log("Address :", `${info.address}`);
}
const emp1 = {
    name: "Abhijit",
    role: "Data Engineer",
    age: 25,
    address: "Pune"
};
const emp2 = {
    name: "Prashant",
    role: "Frontend Developer",
    address: "Sambhajinagar"
};
// emp2.name="Darshan";  Error: Cannot assign to 'name' because it is a read-only property
getEmployeeInfo(emp1);
getEmployeeInfo(emp2);
const obj = {
    Ajay: 8475874857,
    Rohit: 9876543234,
    Vaibhav: 9878676545,
    Rohan: 7798563498
};
console.log("Ajay :", obj["Ajay"]);
console.log("Rohan :", obj);
const user1 = {
    name: "Nikhil",
    age: 27,
    student: false
};
console.log(user1);
// Type Assertions
// Angle Bracket syntax
let pm = "Narendra";
let pmLength = pm.length;
console.log("Length of pm :", pmLength);
// as Syntax(Recommended for JSX/React)
let cm = "Devendra Fadnavis";
let cmLength = cm.length;
console.log("Length of cm :", cmLength);
// Ex
let data = "42";
let num = data;
console.log(Number(num) + 10); //Convert "42" string into 42 as Number and then add 10 into it.
