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
// Generic Result Wrapper:- Create a generic class Result<T> with:
// Property data?: T, error?: string
// Static methods: 1.success(data: T): Result<T>, 2.failure(error: string): Result<T>
class Result {
    constructor(data, error) {
        this.data = data;
        this.error = error;
    }
    ;
    static success(data) {
        return new Result(data);
    }
    static failure(error) {
        return new Result(undefined, error);
    }
}
let success = Result.success("Data Fetched Successfully");
console.log(success);
let failure = Result.failure("Error:something went wrond");
console.log(failure);
// Generic Queue:- Build a Queue<T> with methods:
// enqueue(item: T), dequeue(): T, front(): T, isEmpty(): boolean
class Queue {
    constructor() {
        this.queueValue = [];
    }
    enqueue(item) {
        this.queueValue.push(item);
    }
    dequeue() {
        this.queueValue.shift();
        return this.queueValue;
    }
    ;
    front() {
        return this.queueValue[0];
    }
    ;
    isEmpty() {
        return this.queueValue.length == 0;
    }
    ;
}
let q1 = new Queue();
q1.enqueue("Apple");
console.log(q1.front());
q1.enqueue("Banana");
console.log(q1.front());
console.log(q1.dequeue());
console.log(q1.isEmpty());
// Paginated Response:- Create a class PaginatedResult<T>:
// Properties: data: T[], currentPage: number, totalPages: number
// Method: getPage(page: number): T[]
class PaginatedResult {
    constructor(data, pageSize) {
        this.pageSize = pageSize;
        this.currentPage = 1;
        this.data = data;
        this.totalPages = Math.ceil(data.length / pageSize);
    }
    getPage(page) {
        if (page < 1 || page > this.totalPages) {
            console.log("Page number is to large");
            throw new Error("Enter valid page number");
        }
        this.currentPage = page;
        const start = (page - 1) * this.pageSize;
        const end = start + this.pageSize;
        return this.data.slice(start, end);
    }
}
let items = ["Hello", "!", "Welcome", "To", "Generic", "Class"];
const pr1 = new PaginatedResult(items, 2);
console.log(pr1.getPage(3));
console.log(pr1.getPage(2));
console.log(pr1.getPage(1));
