// destructusing
let arr=[56,23,43,12,45]
// let[a,b]=arr

// let [a,b,c,...rest]=arr   //resat can store the ignore value
let [a, , ,...rest]=arr       //come can note be show a value
console.log(a, rest);


//spread operater
let arr1=[30,3,9]
let obj={...arr1}   //spread operater convert arr in to object
console.log(obj);

function multi(p1,p2,p3){
    return p1*p2*p3;
}
console.log(multi(...arr1 ));

let object={
    name:"preet",
    compnay:"XYZ",
}

console.log({...object,name:"darshn"});
