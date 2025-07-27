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