// Generic Class Examples
// Generic Box
class Box<T>{
    public content:T;
    constructor(content:T){
        this.content=content;
    }

    setContent(value:T):void{
        this.content=value;
    }
    getContent():T{
        return this.content;
    }
}
let box1=new Box<string>("Hello");
box1.setContent("Generic Class");
console.log(box1.getContent());

// Pair Holder
class Pair<K,V>{

    constructor(public key:K,public value:V){};

    setKeyValue(key:K,value:V){
        this.key=key;
        this.value=value;
    }
    getKeyValue(){
        return this.key,this.value;
    }

}
let keyv1=new Pair<string,string>("Name","Virat Kohli");
console.log(keyv1.getKeyValue());
keyv1.setKeyValue("Age","25");
console.log(keyv1.getKeyValue());

// Simple Stack
class Stack<S>{
    constructor(public value:S[]=[]){};
    push(item:S[]){
        this.value=item;
    }
    pop():S[]{
        return this.value=[];
    }
    peek():S[]{
        return this.value;
    }
    isEmpty():boolean{
        if(this.value.length>0){
            return false;
        }else{
            return true;
        }
    }
}
let stack1=new Stack<number>();
stack1.push([44,55]);
console.log(stack1.peek());
console.log(stack1.pop());
console.log(stack1.isEmpty());
stack1.push([99,88,77]);
console.log(stack1.peek());
console.log(stack1.isEmpty());

// Generic Repository
class Repository<R>{

    private values:R[]=[];

    add(item:R):void{
        this.values.push(item);
        console.log("Repo Added :",item);
    }
    getAll():R[]{
        return [...this.values];
    }
    remove(predicate: (item: R) => boolean): void {
        this.values = this.values.filter(item => !predicate(item));
    }
    find(predicate: (item: R) => boolean): R | undefined {
        return this.values.find(predicate);
    }

}

interface Repo<U>{
    id:U,
    name:string
}

let repo1=new Repository<Repo<number>>();
repo1.add({"id":1,"name":"Repo1"});
repo1.add({"id":2,"name":"Repo2"});
repo1.add({"id":3,"name":"Repo3"});
repo1.add({"id":4,"name":"Repo4"});
repo1.add({"id":5,"name":"Repo5"});
repo1.add({"id":6,"name":"Repo6"});
console.log(repo1.getAll());

repo1.remove(user => user.id === 2);
console.log(repo1.getAll());

const foundUser = repo1.find(user => user.name === "Repo5");
console.log(foundUser);

// Generic Result Wrapper:- Create a generic class Result<T> with:
// Property data?: T, error?: string
// Static methods: 1.success(data: T): Result<T>, 2.failure(error: string): Result<T>
 class Result<T>{
    constructor(public data?:T,public error?:string){};

    static success<T>(data:T):Result<T>{
        return new Result<T>(data);
    }

    static failure<T>(error:string):Result<T>{
        return new Result<T>(undefined,error);
    }
}
let success=Result.success<string>("Data Fetched Successfully");
console.log(success);

let failure=Result.failure<string>("Error:something went wrond");
console.log(failure);

// Generic Queue:- Build a Queue<T> with methods:
// enqueue(item: T), dequeue(): T, front(): T, isEmpty(): boolean

class Queue<T>{

    public queueValue:T[]=[];

    enqueue(item:T):void{
        this.queueValue.push(item);
    }
    dequeue():T[]{
      this.queueValue.shift();
      return this.queueValue;
    };
    front():T{
        return this.queueValue[0];
    };
    isEmpty():boolean{
        return this.queueValue.length==0;
    };
}
let q1 = new Queue<String>();
q1.enqueue("Apple");
console.log(q1.front());
q1.enqueue("Banana");
console.log(q1.front());
console.log(q1.dequeue());
console.log(q1.isEmpty());

