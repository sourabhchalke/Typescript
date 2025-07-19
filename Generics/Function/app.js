"use strict";
// Generic Function Example
function multiple(a) {
    return a[3];
}
console.log(multiple([1, 2, 34, 4, 5]));
// Multiple Type Parameter
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const result = merge({ name: "Sourabh" }, { age: 25 });
console.log(result.name); // Sourabh
console.log(result.age); // 25
