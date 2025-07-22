// Array
let arr:number[]=[1,23,34,45,34,4];
let arr2:string[]=["C++","Java","PHP","Javascript","Python"];

function arrayString():string[]{
    let arrayString:string[]=["Ajay","Vijay","Sanjay","Jay"];
    return arrayString;
}
console.log(arrayString());

// Tuple
let tuple:[string,number,string,boolean]=["Rohan",25,"Delhi",true];
function getStudentInfo():[string,number,string,boolean]{
    let info:[string,number,string,boolean]=["Ajay Yadav",25,"Gujarat",false];
    return info;
}
console.log(getStudentInfo());