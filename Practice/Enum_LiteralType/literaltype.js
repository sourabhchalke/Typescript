"use strict";
let r1 = "Admin";
let r2 = "User";
console.log("Role 1 :", r1);
console.log("Role 2 :", r2);
function setTheme(theme) {
    if (theme === "Black-White") {
        console.log("Black-White theme");
    }
    else if (theme === "Pink-Black") {
        console.log("Pink-Black theme");
    }
    else {
        console.log("Yellow-White theme");
    }
}
setTheme("Black-White");
setTheme("Yellow-White");
