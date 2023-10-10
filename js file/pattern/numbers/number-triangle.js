let n=6;
let val="";
let count=1;
for(let i=1;i<n;i++){
    for(let j=1;j<i;j++){
        val+=count
        count++;
    }
    val+="\n"
}

console.log(val);

let temp=""
for(let i=0;i<n;i++){
    for(let j=1;j<n-i+1;j++){
        temp+=j
    }
    temp+="\n"
}

console.log(temp);