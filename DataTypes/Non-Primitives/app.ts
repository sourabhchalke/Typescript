// Non-Primitive(Reference) Data Types:These are mutable and can hold collections of values or complex structures.

// Object
let obj:object={
    names:"Virat",
    age:12,
}

// Array:List of elements
let arr2:number[]=[1,2,3];
arr2=[2,34,66];

// Tuples:Fixed-length array with types
let arr4:[string,number]=["Hello",99];

// Enum: Named constants
enum UserRoles{
    ADMIN="admin",
    GUEST="guest",
    SUPER_ADMIN="super_admin"
}

UserRoles.GUEST;

// Any:Allows any type
let anything;
anything=67;
// Unknown:Like any but safer
let un:unknown=6;
// Never: Function never returns
function throwError(): never { 
    throw new Error();
 }

// Function:Block of code
function abcd():void{
    console.log("Simple Function");
}

// Class
class Car{
    // Methods,Functions and etc
}
let obj3=new Car();

// Interface: Structure/type shape definition
interface UserInter{
    names:string;
    email:string;
    age:number
}

function fun(obj:UserInter){
    console.log("Interface");
    obj.age;
}

// Extending Interface
interface User1{
    name:string;
    email:string;
    age:number
}
interface User2 extends User1{
    admin:string
}

function extenFun1(obj:User1){
    // Only User1 interface properties are available
}
function extenFun(obj:User2){
    // All interfaces properties available
}
