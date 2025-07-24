// Generic Example
function Password<T>(pass:T):T{
    console.log(`Your Password is: ${pass}`);
    return pass;

}
Password("Admin@1234");
Password(123454);

// Swap two number
function swapNum<T,U>(num1:T,num2:U):[U,T]{

    return [num2,num1];
}
console.log(swapNum(4,6));
console.log(swapNum("Hi",7));

// Generic Array Function
function arNumber<T>(arr:T):T{
    return arr;
}
console.log(arNumber([1,2,3,4]));

function arString<T>(arr:T):T{
    return arr;
}
console.log(arString(["Vijay","Rohit","Rohan","Rakesh"]));
