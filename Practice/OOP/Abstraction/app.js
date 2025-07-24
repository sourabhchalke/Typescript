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
// Create a class MathUtils with static method add() and a static property PI.
class MathUtil {
    // Static method:This method can called on the class, without creating instance.
    static add(num1) {
        let sum = MathUtil.PI * num1;
        console.log(`Output : ${sum}`);
        return sum;
    }
    // Non-static method:For accessing this method,we need to create instance.
    display() {
        console.log("Non-Static Method");
    }
}
// Static property:This property belongs to class itself, and not object instance.
MathUtil.PI = 3.1415;
// let math1 = new MathUtil();
// math1.add(6); Property 'add' does not exist on type 'MathUtil'
MathUtil.add(8);
// For accessing non-static method
let mt1 = new MathUtil();
mt1.display();
