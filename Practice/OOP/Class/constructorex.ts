// Constructor
// Constructor Overloading
class Employee{
    constructor(name:string,age:number);
    constructor(name:string,age:number,addree:string);

    constructor(name:string,age:number,address?:string){
        if(address!==undefined){
            console.log(`Name : ${name}`);
            console.log(`Age : ${age}`);
            console.log(`Address : ${address}`);
        }else{
            console.log(`Name : ${name}`);
            console.log(`Age : ${age}`);
        }
    }
}
let emp=new Employee("Rajiv",23);
let emp4=new Employee("Rohan",26,"Pune");