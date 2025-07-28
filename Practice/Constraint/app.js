"use strict";
// Constraint
// 1.Basic example
function logLength(arg) {
    return arg.length;
}
console.log(logLength("Welcome to Constraint"));
console.log(logLength([1, 2, 3, 4]));
// console.log(logLength(14646464)); Error (number doesn't have length)
// 2.Constraint on Object keys
function getProperty(obj, key) {
    console.log(obj, key);
}
const users = {
    name: "John",
    password: 12334,
};
getProperty(users, "name");
getProperty(users, "password");
// getProperty(users,"email"); Error 'email' is not a key of U
// 3.Constraint on Class Type
class Animals {
    move() {
        console.log("Animal Moving");
    }
}
class Dogs extends Animals {
    barking() {
        console.log("Dog Barking");
    }
}
function makeAnimal(obj) {
    obj.move();
    // obj.barking(); Error T extends Animal(parent class)
}
const animal1 = new Animals();
makeAnimal(animal1);
// makeAnimal({});  Error: {} does not extend Animal;
// const dog1=new Dogs(); // This is for when T extends Dogs class
// makeAnimal(dog1); 
// 4.Write a generic function identity<T>(arg: T): T but constrain T so it must be an object
function identity(obj) {
    console.log(obj);
}
const identity1 = {
    name: "Virat",
    email: "virat18@gmail.com",
    password: 189818
};
identity(identity1);
// identity("String");Error-It contain only objects
// 5.Create a generic function merge<T, U>(obj1: T, obj2: U) and return a combined object. Constrain T and U to be objects only.
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const empInfo1 = {
    id: 1,
    name: "Gaurav Pawar",
    address: "Akurdi"
};
const empSalary1 = {
    salary: 25000,
    pf: 2500,
    incentive: 3000
};
console.log(merge(empInfo1, empSalary1));
// console.log(merge("dhdhdhd"));Error : It contain only object
