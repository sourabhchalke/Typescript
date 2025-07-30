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
// 2. Required<T>
// Task: Ensure that all fields are required during database insert.
// type DraftUser = {  name?: string;  email?: string;};
// type CompleteUser = Required<DraftUser>;
//  Practice: Try assigning an incomplete object and see the error.
