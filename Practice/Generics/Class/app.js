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
