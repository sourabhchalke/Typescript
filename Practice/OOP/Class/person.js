"use strict";
// Class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Welcome! ${this.name}`);
    }
}
let p1 = new Person("Ajit", 12);
p1.greet();
// Example 2
class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello! ${this.name}`);
    }
}
let per1 = new Person2("Yadav", 26);
per1.greet();
// Example : Create rectangle and get its area
class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    recArea() {
        let area = this.length * this.width;
        console.log("Area of Rectangle :", area);
        return area;
    }
}
let area1 = new Rectangle(5, 6);
let returnArea = area1.recArea();
console.log(returnArea);
