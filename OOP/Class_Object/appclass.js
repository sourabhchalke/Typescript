"use strict";
// Class
class Employee {
    constructor() {
        this.name = "Rakesh";
        this.age = 23;
        this.address = "Pune";
        this.role = "HR";
    }
}
let obj1 = new Employee();
let obj2 = new Employee();
// Constructor
class User {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
}
let u1 = new User("Rohit", 30, "Pune");
let u2 = new User("Vijay", 25, "Mumbai");
class User2 {
    constructor(name, age, role) {
        this.name = name;
        this.age = age;
        this.role = role;
    }
}
let user1 = new User2("Rakesh", 26, "HR");
