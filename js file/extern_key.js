class employee{

    constructor(name){
        console.log(`${name} -- Employe name is here`);
    }
    
    login(name){
        console.log(`Employee ${name} is login in`);
    }

    logout(){
        console.log(`Employee is log out`);
    }

    leaveApp(leave){
        console.log(`Employe has request ${leave} leaves`);
    }
}

class programmer extends employee{
    requestChai(x){
        console.log(`programer has request ${x} chai`);
    }

    //method overriding
    leaveApp(leave){
        console.log(`Employe has request ${leave +1} leaves (one extra)`);
    }
}

let e=new employee("balaji")
e.leaveApp(3)


let p=new programmer('namne')
p.login("pranav")
p.requestChai(5)
p.leaveApp(4)