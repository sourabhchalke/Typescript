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
const rolePer = {
    admin: {
        read: true,
        write: true,
        delete: true,
    },
    editor: {
        read: true,
        write: true,
        delete: false
    },
    viewer: {
        read: true,
        write: false,
        delete: false
    }
};
console.log(rolePer);
function NonClickFun(event) {
    return event;
}
const hover = "hover";
const drag = "drag";
console.log(NonClickFun(hover));
function details(values) {
    return values;
}
console.log(details("name"));
;
function notNull(value) {
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
const userReturn = {
    name: "Peter",
    age: 29,
};
console.log(userReturn);
// 11. Parameters<T> :- Task: Extract argument types of a function.
function Parameter(a, b) {
    console.log(a);
    console.log(b);
}
Parameter("Hello", 6);
// Tasks:Make a utility function that receives an object and keys, and returns a new object omitting those keys. Use generics and Omit.
function utilityFun(obj, keys) {
    const newObject = Object.assign({}, obj);
    for (const key of keys) {
        delete newObject[key];
    }
    return newObject;
}
const object1 = {
    name: "Anderson",
    city: "Londan",
    age: 32
};
console.log(utilityFun(object1, ["age"]));
