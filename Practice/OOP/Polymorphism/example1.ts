// Polymorphism means "many forms" 
// In TypeScript OOP, it allows different classes to provide different implementations of the same interface or method.
// You write code that works on the base type, but it behaves differently depending on the actual derived type (class).
//  Types of Polymorphism in TypeScript: 
// 1.Compile-time : Method overloading (limited in TS).
// 2.Runtime : Method overriding via inheritance or interface.

// Example 1
class Animal{
    speak():void{
        console.log("Animal makes a sound");
    }
}
class Dog extends Animal{
    speak(): void {
        console.log("Dog Barking");
    }
}
class Cat extends Animal{
    speak(): void {
        console.log("Cat Meows");
    }
}
const sound = [new Cat(),new Dog(),new Animal()];
for(const sounds of sound){
    sounds.speak();
}
// This is runtime polymorphism — same method speak(), different behavior depending on the actual object.