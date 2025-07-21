// Utility generics (or utility types) are built-in generic types provided by TypeScript to transform or construct new types. They help you write cleaner and more reusable code.

// 1. Partial<T>: Makes all properties optional.
 type user = {name:string,age:number};
 let partialUser:Partial<user> = {name:"Tiger"};
 console.log(partialUser.name);

// 2. Required<T>: Makes all properties required.
type user2 = {
    name?:string,
    age?:number,
    address:string
}
let requiredUser2 : Required<user2> = {
    name:"Sachin",
    age:53,
    address:"Mumbai"
}
console.log(requiredUser2);