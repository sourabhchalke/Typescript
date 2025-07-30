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
type DraftUser={
    name?:string,
    email?:string,//optional field
}
type CompleteUser=Required<DraftUser>;//but this make all field required

const field1:CompleteUser={
    name:"Viraj",
    email:"viraj888@gmail.com"//If we remove this property this there come error of required property.
}

function requiredField(field:CompleteUser){
    console.log(field);
}
requiredField(field1);

// 3.Readonly<T> :
type Config={
    host:string,
    port:number
}
const config1:Readonly<Config>={
    host:"localhost",
    port:3000,
}
// config1.port=5000; - This will show error because config1 is Readonly

// 4.Pick<T, K> :- Task: Pick only name and email from User.
// type UserContactInfo = Pick<User, "name" | "email">;
// Practice: Use it for a contact card in function.
type UserInfo={
    id:number,
    name:string,
    email:string,
    password:string,
}
type UserContactInfo=Pick<UserInfo,"name"|"email">;

const userInfo:UserContactInfo={
    name:"Rock",
    email:"rock09@gmail.com"
}
function UserData(data:UserContactInfo){
    console.log("User Info :",data);
}
UserData(userInfo);

// 5.Omit<T, K> :- Task: Remove sensitive fields before exposing user data publicly.
// type PublicUser = Omit<User, "email" | "age">;
type PublicUser={
    id:number,
    name:string,
    email:string,
    age:number
}
type hideInfo=Omit<PublicUser,"email"|"id">;
function omitField(publicInfo:hideInfo){
    console.log(publicInfo);
}
const info:hideInfo={
     // id:10,
    name:"Yuvraj",
    // email:"yuvraj17@gmail.com",
    age:25
}
omitField(info);