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
// makeAnimal({});  Error: {} does not extend Animal
// This is for when T extends Dogs class
// const dog1=new Dogs();
// makeAnimal(dog1); 
