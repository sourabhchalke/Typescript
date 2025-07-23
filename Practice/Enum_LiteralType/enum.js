"use strict";
// An enum (short for enumeration) is a way to define named constants. It helps make your code more readable and type-safe.
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
let role = Role.Admin;
console.log(role); //Output:0
let role2 = Role.Guest;
console.log(role2); //Output:2
// Example 2 : Custom Values,String Enums
var Users;
(function (Users) {
    Users["Vijay"] = "Admin";
    Users["Rohan"] = "User";
    Users["Ajit"] = "Guest";
    Users["Tejas"] = "User";
})(Users || (Users = {}));
let u1 = Users.Ajit;
console.log("Ajit is", u1);
let u2 = Users.Tejas;
console.log("Tejas is", u2);
// Example 3 : Enum with Function
var statusCode;
(function (statusCode) {
    statusCode[statusCode["NotFound"] = 404] = "NotFound";
    statusCode[statusCode["Success"] = 200] = "Success";
    statusCode[statusCode["Error"] = 500] = "Error";
    statusCode[statusCode["NetworkError"] = 504] = "NetworkError";
})(statusCode || (statusCode = {}));
function getStatusCode(value) {
    if (value === 404) {
        console.log("Not Found");
    }
    else if (value === 200) {
        console.log("Succes");
    }
    else if (value === 504) {
        console.log("Network Error");
    }
    else {
        console.log("Something went wrong");
    }
}
getStatusCode(500);
