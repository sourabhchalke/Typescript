// Utility generics (or utility types) are built-in generic types provided by TypeScript to transform or construct new types. They help you write cleaner and more reusable code.

// 1. Partial<T>: Makes all properties optional.
 type user = {name:string,age:number};
 let partialUser:Partial<user> = {name:"Tiger"};
 console.log(partialUser.name);

