// Literal types allow you to specify the exact value a variable can take.
type role="Admin" | "User" | "Guest";
let r1:role="Admin";
let r2:role="User";
console.log("Role 1 :",r1);
console.log("Role 2 :",r2);

// Example 2
type theme="Black-White" | "Pink-Black" | "Yellow-White";

function setTheme(theme:theme):void{
    if(theme==="Black-White"){
        console.log("Black-White theme");
    }else if(theme==="Pink-Black"){
        console.log("Pink-Black theme");
    }else{
        console.log("Yellow-White theme");
    }
}
setTheme("Black-White");
setTheme("Yellow-White");