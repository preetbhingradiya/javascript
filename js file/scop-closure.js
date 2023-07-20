//hosting
console.log(a);
greet()
function greet() {
  console.log("Good Morning");
}
// let a;   //let and const are not declare in top 
var a=9;    //var can be declare but value is undefine
console.log(a);


namste()   // can't access let const and var in function express
var namste=()=>{
    console.log("Good Afternon");
}



//closure
function init(){
    var name="javascript"
    function display(){
        console.log(name);
    }
    name="node-js"
    return display;
}

let c=init()
c()