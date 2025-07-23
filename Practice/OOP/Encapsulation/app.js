"use strict";
// Encapsulation is the concept of binding data (properties) and methods that operate on the data into a single unit (class) and restricting direct access to some of the object's components.
class A {
    constructor(name, address, income) {
        this.name = name;
        this.address = address;
        this.income = income;
    }
}
class B extends A {
    constructor(name, address, income) {
        super(name, address, income);
    }
    getAddress() {
        console.log(`Address : ${this.address}`);
    }
    getName() {
        console.log(`Name : ${this.name}`);
    }
    getIncome() {
        // console.log(`Income : ${this.income}`); Income is private, so we can't access it directly here.
    }
}
let obj1 = new B("Ram", "UP", 45000);
obj1.getAddress();
obj1.getName();
// obj1.name="Ajay"; this is correct when name is not readonly
// obj1.getName();
// Use private and public in a class BankAccount with methods like deposit() and withdraw().
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    getBalance() {
        return this.balance;
    }
    deposit(amount) {
        if (amount < 0) {
            console.log("Please enter valid amount");
        }
        else {
            this.balance = this.balance + amount;
            console.log(`Deposit amount is :${amount}`);
            console.log(`Total Amount after deposit is : ${this.balance}`);
        }
        return this.balance;
    }
    withdraw(amount) {
        if (amount < this.balance) {
            this.balance = this.balance - amount;
            console.log(`Withdraw amount is :${amount}`);
            console.log(`Total Amount after withdraw is : ${this.balance}`);
        }
        else {
            console.log("Please enter valid amount or your balance is 0");
        }
    }
}
let us1 = new BankAccount(0);
console.log("Total Balance is :", us1.getBalance());
us1.deposit(5000);
us1.withdraw(2000);
console.log("Total Balance is :", us1.getBalance());
