"use strict";
// In TypeScript, getters and setters are special methods that allow you to control access to the properties of a class. They provide a way to encapsulate internal data and add logic when a property is read or written.
class Person {
    constructor(name) {
        this._name = name;
    }
    // Getter :It allows you to access _name like a public property (person.name) without directly exposing _name.
    get name() {
        return this._name;
    }
    // Setter :It lets you change the value of _name using person.name = "value".
    set name(newName) {
        if (newName.length > 0) {
            this._name = newName;
        }
        else {
            throw new Error("Name cannot be empty");
        }
    }
}
const person = new Person("Sourabh");
console.log(person.name); // Uses the getter → "Sourabh"
person.name = "Chalke"; // Uses the setter
console.log(person.name); // → "Chalke"
// person.name = "";         // ❌ Error: Name cannot be empty
