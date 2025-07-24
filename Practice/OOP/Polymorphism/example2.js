"use strict";
// Compile-time polymorphism allows multiple methods with the same name but different parameter types or count.
// It is resolved at compile time, hence the name.
class Games {
    gameInfo(name, mobileAvailable, mb) {
        if (mb !== undefined) {
            console.log(`Name of Game : ${name}`);
            console.log(`Game available on mobile : ${mobileAvailable}`);
            console.log(`Size of game(in MB) : ${mb}`);
        }
        else {
            console.log(`Name of Game : ${name}`);
            console.log(`Game available on mobile : ${mobileAvailable}`);
        }
    }
    ;
}
let gm1 = new Games();
gm1.gameInfo("Pubg", true);
gm1.gameInfo("Subway Surfew", true, 250);
//  JavaScript Limitation: JavaScript doesn't support method overloading. If you write the same function name twice in a class, the last one overrides the previous.
