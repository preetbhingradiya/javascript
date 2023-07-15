class Human{
    constructor(name,favfood){
        this.name=name
        this.favfood=favfood
    }
    dance(){
        console.log(this.name +" humane is dancing");
    }
}

class student extends Human{
    singing(){
        console.log(this.name +" student is singig");
    }
}

let a=new student("yash","pav-bhaji")
a.dance()

console.log(a instanceof Human);

//extens :-overtite the student class ane print human class proprties