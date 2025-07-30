"use strict";
// TypeScript utility types :- Partial, Required, Readonly, Pick, Omit, Record, Exclude, Extract, NonNullable, ReturnType, Parameters, etc.
const User1 = {
    // id:1,
    name: "John Cena",
    email: "john05@gmail.com",
};
function returnMissing(obj) {
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
    const requiredField = ["id", "age", "email", "name"];
    requiredField.filter((item) => {
        obj[item] === undefined;
    });
    return requiredField;
}
console.log(returnMissing(User1));
const field1 = {
    name: "Viraj",
    email: "viraj888@gmail.com" //If we remove this property this there come error of required property.
};
function requiredField(field) {
    console.log(field);
}
requiredField(field1);
const config1 = {
    host: "localhost",
    port: 3000,
};
const userInfo = {
    name: "Rock",
    email: "rock09@gmail.com"
};
function UserData(data) {
    console.log("User Info :", data);
}
UserData(userInfo);
function omitField(publicInfo) {
    console.log(publicInfo);
}
const info = {
    // id:10,
    name: "Yuvraj",
    // email:"yuvraj17@gmail.com",
    age: 25
};
omitField(info);
