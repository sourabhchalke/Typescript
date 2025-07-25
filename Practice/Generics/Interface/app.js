"use strict";
const api1 = {
    status: 200,
    data: "Welcome to Typescript",
};
console.log(api1);
const firstPair = {
    name: "Rohit Sharma",
    age: 38,
};
const secondPair = {
    name: null,
    age: 38,
};
console.log(firstPair);
console.log(secondPair);
const userApi1 = {
    data: {
        id: 1,
        name: "Rohan",
    },
    status: 200,
    success: true
};
console.log(userApi1);
const userApi2 = {
    data: null,
    status: 404,
    success: false,
    error: "Network Error",
};
console.log(userApi2);
let dic1 = {
    "Ajay": 89,
    "Vijay": 91,
    "Sham": 84,
    "Rohan": 79,
};
console.log(dic1);
class ProductService {
    constructor() {
        this.products = [];
    }
    create(item) {
        this.products.push(item);
        console.log("Product Created : ", item);
    }
    read(id) {
        return this.products.find(product => product.id === id);
    }
    update(id, item) {
        let index = this.products.findIndex(product => product.id === id);
        console.log(index);
        if (index !== -1) {
            this.products[index] = item;
            console.log("Product Updated:", this.products);
        }
        else {
            console.log("Product not found");
        }
    }
    delete(id) {
        let index = this.products.findIndex(product => product.id === id);
        console.log(index);
        if (index !== -1) {
            this.products.splice(index, 1);
            console.log("Product Deleted", this.products);
        }
        else {
            console.log("Product not found");
        }
    }
}
const prd1 = new ProductService();
prd1.create({ id: 1, name: "Product1", price: 450 });
console.log(prd1.read(1));
prd1.update(1, { id: 1, name: "Product-Updated", price: 500 });
console.log(prd1.read(1));
prd1.delete(1);
console.log(prd1.read(1));
class FInput {
    constructor(value) {
        this.value = value;
    }
    ;
    update(newValue) {
        this.value = newValue;
        console.log("Updated Value :", this.value);
    }
}
let value1 = new FInput("Hello");
console.log(value1);
value1.update("Welcome");
value1.update("Generic Interface");
class EvenNo {
    constructor(item) {
        this.items = item;
    }
    ;
    filter(predicate) {
        return this.items.filter(predicate);
    }
}
const isEven = (n) => n % 2 == 0;
const maxAge = (n) => n > 25;
let even1 = new EvenNo([64, 57, 373, 37, 87, 37, 98, 36, 24]);
console.log(even1.filter(isEven));
let Product = ["Shoes", "Shirt", "Pants", "Trouser"];
const response1 = {
    items: Product,
    total: 5,
    page: 2
};
console.log(response1);
let User = ["Ajay", "Vijay", "Rohit", "Rohan", "Peter"];
const userResponse = {
    items: User,
    total: 12,
    page: 1
};
console.log(userResponse);
// Example 2:Nested Generic Interface
