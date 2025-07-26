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
