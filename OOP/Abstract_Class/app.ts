// In TypeScript, an Abstract Class is a class that cannot be instantiated directly. It is mainly used as a base class for other classes and can include abstract methods (methods without implementation) as well as concrete methods (with implementation).

// You cannot create an instance of Shape directly because it is abstract class.
abstract class Shape {
  abstract area(): number;//abstract method (method without implementation)

// It has an implementation and can be used directly by subclasses.
  describe(): void {
    console.log("This is a shape.");
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();//This is required when extending a class to call the parent’s constructor.
  }

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

const c = new Circle(5);
c.describe();              
console.log(c.area());     
