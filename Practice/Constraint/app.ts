// Constraint
// 1.Basic example
function logLength<T extends {length:number}>(arg:T):number{
    return arg.length;
}
console.log(logLength<string>("Welcome to Constraint"));
console.log(logLength([1,2,3,4]));
// console.log(logLength(14646464)); Error (number doesn't have length)

// 2.Constraint on Object keys
function getProperty<T,K extends keyof T>(obj:T,key:K):void{
    console.log(obj,key);
}
type U={
    name:string,
    password:number,
}
const users:U={
    name:"John",
    password:12334,
}
getProperty(users,"name");
getProperty(users,"password");
// getProperty(users,"email"); Error 'email' is not a key of U

// 3.Constraint on Class Type
class Animals{
    move(){
        console.log("Animal Moving");
    }
}
class Dogs extends Animals{
    barking(){
        console.log("Dog Barking");
    }
}

function makeAnimal<T extends Animals>(obj:T):void{
    obj.move();
    // obj.barking(); Error T extends Animal(parent class)
    
}
const animal1=new Animals();
makeAnimal(animal1);
// makeAnimal({});  Error: {} does not extend Animal

// This is for when T extends Dogs class
// const dog1=new Dogs();
// makeAnimal(dog1); 