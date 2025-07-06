// Class Generics Example

class Bike<T>{
    constructor(public name:T){};

    brand(){
        console.log("Brand Name : ",this.name);
    }

}
let obj = new Bike<string>("Hero");
obj.brand();
let obj2 = new Bike<string>("Pulsar");
obj2.brand();
let obj3 = new Bike<number>(220);
obj3.brand();