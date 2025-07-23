// Inheritance
// Single Inheritance : A class inherits from one base class.
class Parent{
    constructor(public name:string,public address:string){};
    parentMethod():string{
        console.log(`Name : ${this.name}`);
        console.log(`Address : ${this.address}`);
        return this.name,this.address;
    }
}
class Child extends Parent{
    constructor(name:string,address:string,public education:string){
        super(name,address);
    };

    childMethod():void{
        console.log(`Name(from parent class) :${this.name}`);
        console.log(`Address(from parent class) :${this.address}`);
        console.log(`Education(from child class) :${this.education}`);
    }
}
let ch1=new Child("Peter","Londan","MBA");
ch1.parentMethod();
ch1.childMethod();

// Multi-level Inheritance :A class inherits from a derived class (i.e., a chain of inheritance).
class Grandfather{
    gfMethod():void{
        console.log("Grandfather Method");
    }
}
class Father extends Grandfather{
    fMethod():void{
        console.log("Father Method");
    }
}
class Son extends Father{
    sonMethod():void{
        console.log("Son Method");
    }
}
let s1=new Son();
s1.gfMethod();
s1.fMethod();
s1.sonMethod();

// Hierarchical Inheritance :Multiple classes inherit from a single base class.
class School{
    schoolMethod():void{
        console.log("School Properties");
    }
}
class Teacher extends School{
    teacherMethod():void{
        console.log("Teacher of School");
    }
}
class Student extends School{
    studentMethod():void{
        console.log("Students");
    }
}
let stud1=new Student();
stud1.schoolMethod();
stud1.studentMethod();

let teacher1=new Teacher();
teacher1.schoolMethod();
teacher1.teacherMethod();

//  Multiple Inheritance (Not Supported via Classes) : TypeScript does not support multiple class inheritance (like class A extends B, C), but you can implement multiple interfaces.

interface A{
    car():void;
}
interface B{
    bike():void;
}
class C implements A,B{
    car():void{
        console.log("Car Properties");
    }
    bike():void{
        console.log("Bike Properties");
    }
}
let c1 = new C();
c1.car();
c1.bike();

// Example:Create a Vehicle class and extend it with Car and Bike subclasses. Override start() method.
class Vehicle{
public start():void{
        // Base method to be overridden
        console.log("Starting Vehicle");
    }
}
class Car extends Vehicle{
    
    // Overriding start method
    start(){
        console.log("Driving Car");
    }
}
class Bike extends Vehicle{
    // Overriding start method
    start(){
        console.log("Driving Bike");
    }
}

// Instantiate and call
let bike1:Vehicle=new Bike();
bike1.start();//output:Driving Bike

let car1=new Car();
car1.start();//output:Driving Car