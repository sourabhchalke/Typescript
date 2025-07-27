// Generic Function
// 1.Identity Function
function Identity<T>(arg:T):T{
    return arg;
}
let fun1=Identity<string>("Welcome to Generic Function");
console.log(fun1);
let fun2=Identity<number>(3455);
console.log(fun2);

// 2.Generic Array Reverse
function reverseArray<T>(arr:T[]):T[]{
    return arr.reverse();

}
let arr1=reverseArray<string>(["Ram","Ravan","Laxman","Vibhishan"]);
console.log(arr1);
let arr3=reverseArray<number>([11,22,33,44,55,66]);
console.log(arr3);

function reverseNewArray<T>(arr:T[]):T[]{
    let newArray:T[]=[];
    for(let i=arr.length-1;i>=0;i--){
         newArray.push(arr[i]);
    }
    return newArray;
}
console.log(reverseNewArray<number>([1,2,3,4,5]));

// 3.Length Logger
function lengthLogger<L extends {length:number}>(value:L):void{
    console.log(value.length);
}
lengthLogger<string>("Measuring Length of String");
lengthLogger([234,4,4,33,33,33]);
// lengthLogger(2334); Error: number doesn't have .length

// 4.Swap Tuple Elements
function swapTuple<T,U>(num1:T,num2:U):[U,T]{
    return [num2,num1];
}
console.log(swapTuple<number,number>(6,2));

// 5.Generic First Element :-Return the first element of a generic array.
function retunFirst<F>(item:F[]):F{
    return item[0];
}
console.log(retunFirst<number>([1,2,3,4]));//outpud:1
console.log(retunFirst<string>(["Ram","Laxman","Ravan","Vibhishan"]));//output:Ram

// 6.Merge Two Objects
function MergeObject<O,S>(obj1:O,obj2:S):O&S{{
    let Merged = {...obj1,...obj2};
    // let Merged=Object.assign({},obj1,obj2); = using Object.assign()

    // return {...obj1,...obj2};=this also merge two objects and return one object
    return Merged;
}}
type employeeInfo={
    id:number,
    name:string,
    address:string,
}
type employeeSalary={
   salary:number,
   pf:number,
   incentive:number
}
const empl1={
    id:1,
    name:"Arun Yadav",
    address:"Bihar"
}
 const salaryDetail={
    salary:25000,
    pf:2500,
    incentive:3000
 }
 console.log(MergeObject(empl1,salaryDetail));