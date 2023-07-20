class password{
    constructor(){
        console.log("genrete random password");
        this.password=""
    }
    genratepassword(length){
        let char="abcdefghijklmnopqrstwxyz"
        let number="1234567890"
        let special="!@#$%^&*()|~"
        if(length<5){
            console.log("plase enter a valid password");
        }
        else{
            let i=0;
            while(i<length){
                this.password += char[Math.floor(Math.random()*(char.length))]
                this.password += number[Math.floor(Math.random()*(number.length))]
                this.password += special[Math.floor(Math.random()*(special.length))]
                i+=3
            }
        }
        return this.password
    }
}

let a=new password()
console.log(a.genratepassword(10))