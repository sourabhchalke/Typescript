// Access Modifier
// There are three types of Access Modifier = public,private and protected

// public = Accessible from anywhere (inside or outside the class).Default Modifier
class User1{
    public name:string="Virat";

}
let obj = new User1();
console.log(obj.name);//Accessing outside the class
obj.name="Kohli";

// Private = Accessible only within the class where it is defined.Cannot be accessed from outside the class or by subclasses.
class Employee1{
    private name:string="Rohit Sharma";

    getName(){
        console.log("Private Variable :",this.name);
    }

    private getAddress(){
        console.log("Private Method");
    }
}
class Employee2 extends Employee1{

    getNameP(){
        // console.log(this.name);//name is not accessible here,because it is private
    }

}
let obj4=new Employee1();
// obj4.name="Dhoni"; Cannot access outside class
obj4.getName();
// obj4.getAddress(); Only access within class


