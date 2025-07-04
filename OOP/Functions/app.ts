// Function : In TypeScript, functions are a fundamental building block, just like in JavaScript — but with optional type annotations that provide type safety and intellisense support.

// void means the function doesn't return anything.
function simple():void{
    console.log("Void Function");
}

// Returning String
function _name():string{
      return  "Rohit";
}
console.log(_name());

// Optional Parameter : ? marks the parameter as optional.
function op(name?:string):string{
    return name ? `Hello ${name}` : `Hello`;
}
console.log(op("Sachin Sir"));
//Default Parameters
function dp(address:string="India"):string{
    return  `Address is ${address}`
}
console.log(dp("Mumbai"));

// Rest Paramete : ... rest 
function restPara(...arr: number[]): number[] {
  return arr.map((num: number) => num * 3);
}

console.log(restPara(1, 2, 3, 45)); 


