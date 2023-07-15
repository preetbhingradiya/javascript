try{
    throw new ReferenceError("this line is not proper")
}
catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

setInterval(()=>{
    let a=new Date().toTimeString()
    document.querySelector("body").innerHTML=a
},1000)