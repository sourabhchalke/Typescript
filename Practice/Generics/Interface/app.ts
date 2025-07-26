// Interface with generic
interface ApiResponse<T>{
    status:number,
    data:T,
}

const api1:ApiResponse<string>={
    status:200,
    data:"Welcome to Typescript",
}
console.log(api1);

// Reusable Pair
interface reusePair<T,U>{
    name:T,
    age:U,
}
const firstPair:reusePair<string,number>={
    name:"Rohit Sharma",
    age:38,
}
const secondPair:reusePair<null,number>={
    name:null,
    age:38,
}
console.log(firstPair);
console.log(secondPair);

// Create a generic interface ApiResponse<T> with the following structure:interface ApiResponse<T> {  data: T;  status: number;  success: boolean;  error?: string;}
// Use it to define:
// A success response of ApiResponse<User>
// An error response of ApiResponse<null>
// Where User = { id: number, name: string }
interface API<T>{
    data:T,
    status:number,
    success:boolean,
    error?:string,
}

type User={
    id:number,
    name:string,
}
const userApi1:API<User>={
    data:{
        id:1,
        name:"Rohan",
    },
    status:200,
    success:true
}
console.log(userApi1);
const userApi2:API<null>={
    data:null,
    status:404,
    success:false,
    error:"Network Error",
}
console.log(userApi2);

// . Key-Value Dictionary 
// Task:Create a generic interface Dictionary<T> where the keys are strings and the values are of type T.
// Create a Dictionary<number> that maps student names to marks.
interface Dictionary<T>{
    [keys:string]:T,
}
let dic1:Dictionary<number>={
    "Ajay":89,
    "Vijay":91,
    "Sham":84,
    "Rohan":79,
}
console.log(dic1);

// Create a generic CRUD interface:
// interface CRUD<T> {
//   create(item: T): void;
//   read(id: number): T | undefined;
//   update(id: number, item: T): void;
//   delete(id: number): void;
// }
// Use it with a Product type and implement a class ProductService using it.

interface CRUD<T>{
    create(item:T):void;
    read(id:number):T|undefined;
    update(id:number,item:T):void;
    delete(id:number):void;
}

type Product={
    id:number;
    name:string;
    price:number;
}
class ProductService implements CRUD<Product>{

    private products:Product[]=[];

    create(item:Product):void{
        this.products.push(item);
        console.log("Product Created : ",item);
    }

    read(id: number): Product|undefined {
        return this.products.find(product => product.id === id);
        }

    update(id: number, item: Product): void {

        let index=this.products.findIndex(product=>product.id===id);
        console.log(index);
        if(index !== -1){
            this.products[index]=item;
            console.log("Product Updated:",this.products);
        }else{
            console.log("Product not found");
        }

    }
    delete(id: number): void {
         
        let index=this.products.findIndex(product=>product.id===id);
        console.log(index);
        if(index !== -1){
            this.products.splice(index,1);
            console.log("Product Deleted",this.products);
        }else{
            console.log("Product not found");
        }
    }
    
}
const prd1=new ProductService();
prd1.create({id:1,name:"Product1",price:450});
console.log(prd1.read(1));
prd1.update(1,{id:1,name:"Product-Updated",price:500});
console.log(prd1.read(1));
prd1.delete(1);
console.log(prd1.read(1));

//  Form Input Interface Generic
// Task: Create a generic interface FormInput<T> with:1.value:T,2.update(newValue: T): void
// Create a form input of type FormInput<string> and simulate updating the value.

interface FormInput<T>{
    value:T,
    update(newValue:T):void,
}

class FInput implements FormInput<string>{ 
    constructor(public value:string){};
    update(newValue: string): void {
        this.value=newValue;
        console.log("Updated Value :",this.value)        ;
    }
}
let value1=new FInput("Hello");
console.log(value1);
value1.update("Welcome");
value1.update("Generic Interface");

// // Filterable List:- Task: Create a generic interface FilterableList<T> with:
// items: T[]
// filter(predicate: (item: T) => boolean): T[]
// Use it to filter:
// A list of numbers to find even numbers

interface FilterableList<T>{
    items:T[],
    filter(predicate:(item:T)=>boolean):T[],
}

class EvenNo implements FilterableList<number>{
    public items: number[];
    constructor(item:number[]){
        this.items=item;
    };
    filter(predicate: (item: number) => boolean): number[] {
        return this.items.filter(predicate);
    }
}
const isEven=(n:number)=>n%2==0;
const maxAge=(n:number)=>n>25;
let even1=new EvenNo([64,57,373,37,87,37,98,36,24]);
console.log(even1.filter(isEven));

// Nested Generic Response :- Task: Create a nested generic interface:
// interface PaginatedResponse<T> {items: T[]; total: number; page: number;}
// Use it with Product[] and User[].

interface PaginatedResponse<T>{
    items:T[],
    total:number,
    page:number,
}
let Product:string[]=["Shoes","Shirt","Pants","Trouser"];
const response1:PaginatedResponse<string>={
    items:Product,
    total:5,
    page:2
}
console.log(response1);
let User:string[]=["Ajay","Vijay","Rohit","Rohan","Peter"];
const userResponse:PaginatedResponse<string>={
    items:User,
    total:12,
    page:1
}
console.log(userResponse);

// Example 2:Nested Generic Interface

interface OuterInterface<O>{
    status:number,
    success:boolean,
    data:O[]
}
interface InnerInterface<I>{
    id:I,
    item:string,
    price:I,
    available:boolean
}

const result:OuterInterface<InnerInterface<number>>={
    status:200,
    success:true,
    data:[{
        id:1,
        item:"Formal-Pants",
        price:700,
        available:true
    }],
}
console.log("Nested Generic Interface, Response :",result);

// Generic Function and Interface Combo:- Task: Create a generic interface Processor<T> with a method: process(input: T): T; Then: 1.Implement a StringProcessor that converts input to uppercase. 2.Implement a NumberProcessor that doubles the number.

interface Processor<T>{
    process(input:T):T;
}

// const StringProcessor:Processor<string>={
//     process(input:string):string{
//         return input.toUpperCase();
//     }
// }
// console.log(StringProcessor.process("dshdskjdhjs"));

function StringProcessor():Processor<string>{
    return{
        process(input:string):string{
            return input.toUpperCase();
        }
    }
}
let upperCase1 = StringProcessor().process("lsdhjhdsgsdfh");
console.log(upperCase1);

const NumberProcessor:Processor<number>={
    process(input:number):number{
        return input*2;
    }
}
console.log(NumberProcessor.process(2345));