// Generic Function Example
function multiple<T>(a:T[]):T{
    return a[3];
}
console.log(multiple([1,2,34,4,5]));

// Multiple Type Parameter
function merge<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
  }
  
  const result = merge({ name: "Sourabh" }, { age: 25 });
  console.log(result.name); // Sourabh
  console.log(result.age);  // 25
