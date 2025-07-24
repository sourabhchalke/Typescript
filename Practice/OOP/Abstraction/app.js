"use strict";
// Abstraction is the concept of hiding complex implementation details and exposing only essential features of an object.It allows you to focus on what an object does, not how it does it.
class Shape {
    describe() {
        console.log("Abstract Class");
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    ;
    area() {
        let area = Math.PI * this.radius * this.radius;
        return area;
    }
}
class Rectangles extends Shape {
    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
    }
    area() {
        let area = this.length * this.width;
        return area;
    }
}
let circle1 = new Circle(4);
console.log("Radius of Circle :", circle1.area());
let rectangle1 = new Rectangles(5, 8);
console.log("Area of rectangle :", rectangle1.area());
class Cars {
    constructor(brands, prices) {
        this.brands = brands;
        this.prices = prices;
    }
    ;
    brand() {
        return this.brands;
    }
    price() {
        return this.prices;
    }
}
class Bikes {
    constructor(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    ;
    brand() {
        return this.name;
    }
    price() {
        return this.amount;
    }
}
let cr1 = new Cars("BMW", 10000000);
console.log("Brand : ", cr1.brand());
console.log("Price : ", cr1.price());
let bikes1 = new Bikes("RX-100", 150000);
console.log("Bike Name :", bikes1.brand());
console.log("Bike Price :", bikes1.price());
