"use strict";
// Class Generics Example
class Bike {
    constructor(name) {
        this.name = name;
    }
    ;
    brand() {
        console.log("Brand Name : ", this.name);
    }
}
let obj = new Bike("Hero");
obj.brand();
let obj2 = new Bike("Pulsar");
obj2.brand();
let obj3 = new Bike(220);
obj3.brand();
