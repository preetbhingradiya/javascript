const a={
    name:"javascript",
    passweord:"234123",
    email:"js@134"
}
console.log(a)


const b={
    run:()=>{
        console.log("code are run")
    }
}

a.__proto__=b

b.__proto__={
    id:"12"
}


a.run();
console.log(a.id);