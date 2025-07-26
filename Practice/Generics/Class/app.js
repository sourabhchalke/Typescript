"use strict";
// Generic Class Examples
// Generic Box
class Box {
    constructor(content) {
        this.content = content;
    }
    setContent(value) {
        this.content = value;
    }
    getContent() {
        return this.content;
    }
}
let box1 = new Box("Hello");
box1.setContent("Generic Class");
console.log(box1.getContent());
// Pair Holder
class Pair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    ;
    setKeyValue(key, value) {
        this.key = key;
        this.value = value;
    }
    getKeyValue() {
        return this.key, this.value;
    }
}
let keyv1 = new Pair("Name", "Virat Kohli");
console.log(keyv1.getKeyValue());
keyv1.setKeyValue("Age", "25");
console.log(keyv1.getKeyValue());
// Simple Stack
class Stack {
    constructor(value = []) {
        this.value = value;
    }
    ;
    push(item) {
        this.value = item;
    }
    pop() {
        return this.value = [];
    }
    peek() {
        return this.value;
    }
    isEmpty() {
        if (this.value.length > 0) {
            return false;
        }
        else {
            return true;
        }
    }
}
let stack1 = new Stack();
stack1.push([44, 55]);
console.log(stack1.peek());
console.log(stack1.pop());
console.log(stack1.isEmpty());
stack1.push([99, 88, 77]);
console.log(stack1.peek());
console.log(stack1.isEmpty());
// Generic Repository
class Repository {
    constructor() {
        this.values = [];
    }
    add(item) {
        this.values.push(item);
        console.log("Repo Added :", item);
    }
    getAll() {
        return [...this.values];
    }
    remove(predicate) {
        this.values = this.values.filter(item => !predicate(item));
    }
    find(predicate) {
        return this.values.find(predicate);
    }
}
let repo1 = new Repository();
repo1.add({ "id": 1, "name": "Repo1" });
repo1.add({ "id": 2, "name": "Repo2" });
repo1.add({ "id": 3, "name": "Repo3" });
repo1.add({ "id": 4, "name": "Repo4" });
repo1.add({ "id": 5, "name": "Repo5" });
repo1.add({ "id": 6, "name": "Repo6" });
console.log(repo1.getAll());
repo1.remove(user => user.id === 2);
console.log(repo1.getAll());
const foundUser = repo1.find(user => user.name === "Repo5");
console.log(foundUser);
