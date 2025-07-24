// Abstraction is the concept of hiding complex implementation details and exposing only essential features of an object.It allows you to focus on what an object does, not how it does it.

abstract class Shape{
    abstract area():number;

    describe():void{
        console.log("Abstract Class");
    }
}
class Circle extends Shape{
    constructor(public radius:number){
        super();
    };

    area(): number {
        let area=Math.PI * this.radius * this.radius;
        return area;
    }

}
class Rectangles extends Shape{
    constructor(public length:number,public width:number){
        super();
    }

    area(): number {
        let area = this.length*this.width;
        return area;
    }

}

let circle1=new Circle(4);
console.log("Radius of Circle :",circle1.area());

let rectangle1=new Rectangles(5,8);
console.log("Area of rectangle :",rectangle1.area());

// Abstraction with Interface
interface Vehicles{
    brand():string;
    price():number;
}
class Cars implements Vehicles{
    constructor(public brands:string,public prices:number){};

    brand(): string {
        return this.brands;
    }
    price(): number {
        return this.prices;
    }
}

class Bikes implements Vehicles{
    constructor(public name:string,public amount:number){};

    brand(): string {
        return this.name;
    }
    price(): number {
        return this.amount;
    }
}

let cr1 = new Cars("BMW",10000000);
console.log("Brand : ",cr1.brand());
console.log("Price : ",cr1.price());

let bikes1 = new Bikes("RX-100",150000);
console.log("Bike Name :",bikes1.brand());
console.log("Bike Price :",bikes1.price());

// Create a class MathUtils with static method add() and a static property PI.
class MathUtil{
    // Static property:This property belongs to class itself, and not object instance.
     static PI:number=3.1415;

    // Static method:This method can called on the class, without creating instance.
    static add(num1:number):number{
        let sum=MathUtil.PI*num1;
        console.log(`Output : ${sum}`);
        return sum;
    }

    // Non-static method:For accessing this method,we need to create instance.
    display():void{
        console.log("Non-Static Method");
    }
}

// let math1 = new MathUtil();
// math1.add(6); Property 'add' does not exist on type 'MathUtil'
MathUtil.add(8);

// For accessing non-static method
let mt1=new MathUtil();
mt1.display();

