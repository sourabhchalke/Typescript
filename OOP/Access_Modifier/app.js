"use strict";
// Access Modifier
// There are three types of Access Modifier = public,private and protected
// public = Accessible from anywhere (inside or outside the class).Default Modifier
class User1 {
    constructor() {
        this.name = "Virat";
    }
}
let obj = new User1();
console.log(obj.name); //Accessing outside the class
obj.name = "Kohli";
