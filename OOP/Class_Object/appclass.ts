// Class
class Employee{
    name="Rakesh";
    age=23;
    address="Pune";
    role="HR"
}

let obj1 = new Employee();
let obj2 =new Employee();

// Constructor
class User{
    constructor(public name:string,public age:number,public address:string){}
}
let u1 = new User("Rohit",30,"Pune");
let u2 = new User("Vijay",25,"Mumbai");

class User2 {
public name;
public age;
public role;
    constructor(name:string,age:number,role:string){
        this.name=name;
        this.age=age;
        this.role=role;
    }
}
let user1 = new User2("Rakesh",26,"HR");