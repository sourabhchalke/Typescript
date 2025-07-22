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

// 3. Readonly<T> : Makes all properties readonly.
type user3 = {
    name:"Dhoni",
    age:43,
    address:"Ranchi"
}
type readonlyUser3 = Readonly<user3> ;
 // => { readonly name: string; readonly age: number }

//  4. Pick<T,K> : Creates a type by picking specific keys from another type.
type job = {
    role:string,
    qualification:string,
    address:string
}
let jobPick : Pick<job,"address" | "role"> = {
    address:"Mumbai",
    role:"Frontend Developer",
    // qualification:"MSc", => Object literal may only specify known properties, and 'qualification' does not exist in type 'Pick<job, "address" | "role">'
};
console.log(jobPick.address);

// 5. Omit<T, K> :Creates a type by omitting specific keys from another type.
type employee={
    name:string,
    address:string,
    age:number
}
let employeeOmit : Omit<employee,"age">={
    address:"Pune",
    name:"Ajay Yadav",
};

// 6. Exclude<T, U> : Excludes types from a union.
type Cricketer = "Batsman" | "Bowler" | "All-Rounder";
type ExcludePlayer = Exclude<Cricketer,"Batsman">;

// This will only allow "Bowler" | "All-Rounder"
let player: ExcludePlayer = "Bowler"; // Correct

// let player: ExcludePlayer = "Batsman"; //  Error: "Batsman" is not assignable

// 7. Extract<T, U> :Extracts types that are common to both unions.
type user1="name" | "age" | "address";
type u1=Extract<user1,"name"|"age">;
let user:u1="name";
let user2:u1="age";
// let user3:u1="address" : Error - Type '"address"' is not assignable to type 'u1'

// 8. NonNullable<T> : Removes null and undefined from a type.
type password=string | null | number | undefined;
type checkPassword = NonNullable<password>;
let password1:checkPassword="peter";
let password2:checkPassword=12234;
// let password3:checkPassword=null; : Type 'null' is not assignable to type 'checkPassword'.