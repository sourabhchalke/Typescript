// Union and Type Aliases

type u = string|number|boolean;
function user(a:u):void{
    return console.log(a);
}
user("Hello");
user(45);
user(true);

// Ex.2
type ID=string|number;
function printID(id:ID):void{

}
printID("admin123");
printID(12434);