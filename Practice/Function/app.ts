// Function Returning Result
function mult(a:number,b:number):number{
    return a*b;
}
console.log("Multiplication of two number :",mult(3,4));

// Default parameter (:type="")
function employee(name:string="Hello"):string{
    return name;
}
console.log(employee());

// Optional parameter (?:)
function opPara(name?:string):void{
    console.log("Optional Parameter Ex :",name);
}
opPara();

// Rest Parameter
function restPara(...arr:number[]){
    console.log(...arr);
}
restPara(1,2,3,4,5);

// Function Overloadig
function sum(a:number,b:number):number;
function sum(a:number,b:number,c:number):number;
function sum(a:any,b:any,c?:any):any{
    if(!a === undefined && !b===undefined && !c===undefined){
        return a+b+c;
    }else{
        return a+b;
    }
}
console.log("Addition of two no. :",sum(2,3));
console.log("Addition of three no. :",sum(3,4,5));