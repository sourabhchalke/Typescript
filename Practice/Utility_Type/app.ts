// TypeScript utility types :- Partial, Required, Readonly, Pick, Omit, Record, Exclude, Extract, NonNullable, ReturnType, Parameters, etc.

// 1.Partial<T>
// Task: Convert a full user profile to a partially filled registration form.
// type User = {  id: number;  name: string;  email: string;  age: number};
// type UserRegistrationForm = Partial<User>;
//Practice:Write a function that accepts a Partial<User> and returns a list of missing fields.
type Consumer = { 
     id: number;  
     name: string;
     email: string;
     age: number
 };
 type UserRegistrationForm=Partial<Consumer>;

 const User1:UserRegistrationForm={
    // id:1,
    name:"John Cena",
    email:"john05@gmail.com",
 }

 function returnMissing(obj:Partial<Consumer>):string[]{
    // if(obj.age==undefined){
    //     list.push("age");
    // } if(obj.id===undefined){
    //     list.push("id");
    // } if(obj.name===undefined){
    //     list.push("name");
    // } if(obj.email===undefined){
    //     list.push("email");
    // }
    // return list;

    // Dynamic
    const requiredField:(keyof Consumer)[]=["id","age","email","name"];
     requiredField.filter((item)=>{
        obj[item]===undefined;
    })
    return requiredField;
 }
 console.log(returnMissing(User1));
 
// 2. Required<T>
// Task: Ensure that all fields are required during database insert.
// type DraftUser = {  name?: string;  email?: string;};
// type CompleteUser = Required<DraftUser>;
//  Practice: Try assigning an incomplete object and see the error.