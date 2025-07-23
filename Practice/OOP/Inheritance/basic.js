"use strict";
// Inheritance
// Single Inheritance : A class inherits from one base class.
class Parent {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    ;
    parentMethod() {
        console.log(`Name : ${this.name}`);
        console.log(`Address : ${this.address}`);
        return this.name, this.address;
    }
}
class Child extends Parent {
    constructor(name, address, education) {
        super(name, address);
        this.education = education;
    }
    ;
    childMethod() {
        console.log(`Name(from parent class) :${this.name}`);
        console.log(`Address(from parent class) :${this.address}`);
        console.log(`Education(from child class) :${this.education}`);
    }
}
let ch1 = new Child("Peter", "Londan", "MBA");
ch1.parentMethod();
ch1.childMethod();
// Multi-level Inheritance :A class inherits from a derived class (i.e., a chain of inheritance).
class Grandfather {
    gfMethod() {
        console.log("Grandfather Method");
    }
}
class Father extends Grandfather {
    fMethod() {
        console.log("Father Method");
    }
}
class Son extends Father {
    sonMethod() {
        console.log("Son Method");
    }
}
let s1 = new Son();
s1.gfMethod();
s1.fMethod();
s1.sonMethod();
// Hierarchical Inheritance :Multiple classes inherit from a single base class.
class School {
    schoolMethod() {
        console.log("School Properties");
    }
}
class Teacher extends School {
    teacherMethod() {
        console.log("Teacher of School");
    }
}
class Student extends School {
    studentMethod() {
        console.log("Students");
    }
}
let stud1 = new Student();
stud1.schoolMethod();
stud1.studentMethod();
let teacher1 = new Teacher();
teacher1.schoolMethod();
teacher1.teacherMethod();
class C {
    car() {
        console.log("Car Properties");
    }
    bike() {
        console.log("Bike Properties");
    }
}
let c1 = new C();
c1.car();
c1.bike();
// Example:Create a Vehicle class and extend it with Car and Bike subclasses. Override start() method.
class Vehicle {
    start() {
        // Base method to be overridden
        console.log("Starting Vehicle");
    }
}
class Car extends Vehicle {
    // Overriding start method
    start() {
        console.log("Driving Car");
    }
}
class Bike extends Vehicle {
    // Overriding start method
    start() {
        console.log("Driving Bike");
    }
}
// Instantiate and call
let bike1 = new Bike();
bike1.start(); //output:Driving Bike
let car1 = new Car();
car1.start(); //output:Driving Car
