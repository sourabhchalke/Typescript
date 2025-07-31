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

// 6.Record<K, T> :- Task: Create a mapping of roles to permissions.
// type Role = "admin" | "editor" | "viewer";
// type Permissions = {  read: boolean;  write: boolean;  delete: boolean};
// type RolePermissions = Record<Role, Permissions>;
type Roles= "admin" | "editor" | "viewer";
type Permission = {  read: boolean;  write: boolean;  delete: boolean};
type RolePermissions=Record<Roles,Permission>;

const rolePer:RolePermissions={
    admin:{
        read:true,
        write:true,
        delete:true,
    },
    editor:{
        read:true,
        write:true,
        delete:false
    },
    viewer:{
        read:true,
        write:false,
        delete:false
    }
}
console.log(rolePer);

// 7.Exclude<T, U>:- Task: Get all event types except "click".
// type EventType = "click" | "hover" | "drag";
// type NonClickEvent = Exclude<EventType, "click">;
type EventType="click"|"hover"|"drag";
type NonClickEvent=Exclude<EventType,"click">;

function NonClickFun(event:NonClickEvent):NonClickEvent{
    return event;
}
const hover:NonClickEvent="hover";
const drag:NonClickEvent="drag";
console.log(NonClickFun(hover));

// 8.Extract<T, U> :- Task: Get only shared values between two union types.
type Teachers = "name"|"address"|"id"|"salary";
type Stud="rollno"|"name"|"std"|"address";

type Info=Extract<Teachers,Stud>;

function details(values:Info):Info{
    return values
}
console.log(details("name"));
;

// 9.NonNullable<T> :- Task: Remove null and undefined from a type.
type primitive=string|null|number|undefined;
type NonNull=NonNullable<primitive>;

function notNull(value:NonNull):NonNull{
    return value;
}
console.log(notNull("NonNullable value"));
console.log(notNull(345));
// console.log(notNull()); //Error undefined is not acceptable
// console.log(notNull(null));// Error null is not acceptable

// 10. ReturnType<T> : - Task: Infer return type of a function.
function getUser() {
  return {  
      name: "Sourabh",
      age: 25,  
    };
}
type UserReturnType = ReturnType<typeof getUser>;

const userReturn:UserReturnType={
    name:"Peter",
    age:29,
}
console.log(userReturn);

// 11. Parameters<T> :- Task: Extract argument types of a function.
function  Parameter(a:string,b:number){
    console.log(a);
    console.log(b);
}
Parameter("Hello",6);
type paraType=Parameters<typeof Parameter>;//type paraType=[string,number]

// Tasks:Make a utility function that receives an object and keys, and returns a new object omitting those keys. Use generics and Omit.

function utilityFun<O,K extends keyof O>(obj:O,keys:K[]):Omit<O,K>{

    const newObject={...obj};
    for(const key of keys ){
        delete newObject[key];
    }
    return newObject;
}

type Objects={
    name:string,
    city:string,
    age:number,
}
const object1:Objects={
    name:"Anderson",
    city:"Londan",
    age:32
}
console.log(utilityFun(object1,["age"]));
