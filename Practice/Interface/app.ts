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