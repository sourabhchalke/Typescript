// Class
class Person{
    constructor(public name:string,public age:number){}

    greet():void{
        console.log(`Welcome! ${this.name}`);
    }
}

let p1=new Person("Ajit",12);
p1.greet();

// Example 2
class Person2{
     name:string;
    age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }

    greet(){
        console.log(`Hello! ${this.name}`);
    }
}
let per1=new Person2("Yadav",26);
per1.greet();

// Example : Create rectangle and get its area
class Rectangle{
    constructor(public readonly length:number,public readonly width:number){}
    recArea():number{
        let area=this.length*this.width;
        console.log("Area of Rectangle :",area);
        return area;
    }
}
let area1=new Rectangle(5,6);
let returnArea=area1.recArea();
console.log(returnArea);


