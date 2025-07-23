// An enum (short for enumeration) is a way to define named constants. It helps make your code more readable and type-safe.
enum Role{
    Admin,
    User,
    Guest
}
let role:Role=Role.Admin;
console.log(role);//Output:0
let role2:Role=Role.Guest;
console.log(role2);//Output:2

// Example 2 : Custom Values,String Enums
enum Users{
    Vijay="Admin",
    Rohan="User",
    Ajit="Guest",
    Tejas="User"
}
let u1:Users=Users.Ajit;
console.log("Ajit is",u1);
let u2:Users=Users.Tejas;
console.log("Tejas is",u2);

// Example 3 : Enum with Function
enum statusCode{
    NotFound=404,
    Success=200,
    Error=500,
    NetworkError=504
}
function getStatusCode(value:statusCode){
    if(value===404){
        console.log("Not Found");
    }
    else if(value===200){
        console.log("Succes");
    }else if(value===504){
        console.log("Network Error");
    }else{
        console.log("Something went wrong");
    }
}
getStatusCode(500);