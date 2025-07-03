"use strict";
// In TypeScript, an Abstract Class is a class that cannot be instantiated directly. It is mainly used as a base class for other classes and can include abstract methods (methods without implementation) as well as concrete methods (with implementation).
class Shape {
    describe() {
        console.log("This is a shape.");
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius ** 2;
    }
}
const c = new Circle(5);
c.describe();
console.log(c.area());
