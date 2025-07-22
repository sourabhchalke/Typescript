// Interface
interface Book{
    title:string,
    author:string,
    price:number
}

const b1:Book={
    title:"Doglapan",
    author:"Ashneer Grover",
    price:450
}
console.log(b1);

// Example 2
interface Employee{
    readonly name:string,
    role:string,
    age?:number,
    address:string
}
function getEmployeeInfo(info:Employee){
    console.log("Name :",`${info.name}`);
    console.log("Role :",`${info.role}`);
    console.log("Age :",`${info.age}`);
    console.log("Address :",`${info.address}`);
}
const emp1={
    name:"Abhijit",
    role:"Data Engineer",
    age:25,
    address:"Pune"
}
const emp2={
    name:"Prashant",
    role:"Frontend Developer",
    address:"Sambhajinagar"
}

// emp2.name="Darshan";  Error: Cannot assign to 'name' because it is a read-only property

getEmployeeInfo(emp1);
getEmployeeInfo(emp2);

// Index Signature
interface Customer{
    [name:string]:number;
}
const obj:Customer={
    Ajay:8475874857,
    Rohit:9876543234,
    Vaibhav:9878676545,
    Rohan:7798563498
}
console.log("Ajay :",obj["Ajay"]);
console.log("Rohan :",obj);
// Real-World Use Case Index Signature:Dynamic Form Data
interface formData{
    [field:string]:string | number | boolean;
}
const user1:formData={
    name:"Nikhil",
    age:27,
    student:false
}
console.log(user1);
// Type Assertions
// Angle Bracket syntax
let pm:string="Narendra";
let pmLength=(<string>pm).length;
console.log("Length of pm :",pmLength);
// as Syntax(Recommended for JSX/React)
let cm:string="Devendra Fadnavis";
let cmLength=(cm as string).length;
console.log("Length of cm :",cmLength);
// Ex
let data:any="42";
let num=(data as string);
console.log(Number(num)+10);//Convert "42" string into 42 as Number and then add 10 into it.