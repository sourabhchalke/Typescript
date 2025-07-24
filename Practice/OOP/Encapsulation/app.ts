// Encapsulation is the concept of binding data (properties) and methods that operate on the data into a single unit (class) and restricting direct access to some of the object's components.

class A{
    public readonly name:string;//access everywhere
    protected address:string;//access within class and its subclass
    private income:number;//access within class only where it is defined

    constructor(name:string,address:string,income:number){
        this.name=name;
        this.address=address;
        this.income=income;
    }


}
class B extends A{
    constructor(name:string,address:string,income:number){
        super(name,address,income);
    }

    getAddress():void{
        console.log(`Address : ${this.address}`);
    }
    getName():void{
        console.log(`Name : ${this.name}`);
    }
    getIncome():void{
        // console.log(`Income : ${this.income}`); Income is private, so we can't access it directly here.
    }

}
let obj1=new B("Ram","UP",45000);
obj1.getAddress();
obj1.getName();
// obj1.name="Ajay"; this is correct when name is not readonly
// obj1.getName();

// Use private and public in a class BankAccount with methods like deposit() and withdraw().
class BankAccount{
    private balance:number;
    constructor(balance:number){
        this.balance=balance;
    }

    public getBalance():number{
        return this.balance;
    }

    deposit(amount:number):number{
        if(amount<0){
            console.log("Please enter valid amount");
        }else{
            this.balance=this.balance+amount;
            console.log(`Deposit amount is :${amount}`);
            console.log(`Total Amount after deposit is : ${this.balance}`);
        }
        return this.balance;
    }

    withdraw(amount:number){
        if(amount<this.balance){
            this.balance=this.balance-amount;
            console.log(`Withdraw amount is :${amount}`);
            console.log(`Total Amount after withdraw is : ${this.balance}`);
        }else{
            console.log("Please enter valid amount or your balance is 0");
        }
    }

}

let us1=new BankAccount(0);
console.log("Total Balance is :",us1.getBalance());
us1.deposit(5000);
us1.withdraw(2000);
console.log("Total Balance is :",us1.getBalance());

// Getter and Setter in TypeScript, which are used to control access to class properties — an essential part of encapsulation.
// Term	Purpose:
// getter:-Allows you to access a private property in a controlled way
// setter:-Allows you to modify a private property with validation or logic
// They help you encapsulate logic while still using property-like syntax.
class Login{
    private _password:string;

    constructor(password:string){
        this._password=password;
    };

    get Password():string{
        return this._password;
    }

    set Password(password:string){
        if(password.length>0){
            console.log(`Password set: ${password}`);
             this._password=password;
        }else{
            console.log("Enter valid password");
        }
    }
}
let l1=new Login("admin@123");
console.log("Current Password is: ",l1.Password);
l1.Password="newpass123";
l1.Password="updatedpass456";
console.log("Current Password is: ",l1.Password);
l1.Password="";
console.log("Current Password is: ",l1.Password);


