// In TypeScript, a static member belongs to the class itself, not to instances of the class. This means you can access it without creating an object of the class.

class MyClass {
  static staticProperty = "I belong to the class";
  
  static staticMethod() {
    console.log("Called static method");
  }
}

console.log(MyClass.staticProperty); // Access without creating an instance
MyClass.staticMethod();

let ob =new MyClass();//No need to create instance for accessing MyClass properties