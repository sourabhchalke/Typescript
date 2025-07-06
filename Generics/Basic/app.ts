// Generics in TypeScript allow you to write flexible, reusable functions, classes, and interfaces that work with any data type while still maintaining type safety.

// You lose type information (arg could be anything).
function add(a:any):any{

    if(typeof a == "number"){
        return a*a;
    }else{
        return "Hello";
    }
}
console.log(add(4));

// With generics:Now the type is preserved.
function addG<T>(a:T):T{
    return a;
}
console.log(addG<number>(4));
console.log(addG<string>("String"));
console.log(addG<boolean>(true));