let n=5;

let right="";
let left=""
let downward="";

//right side
for(let i=0;i<n;i++){
    for(let j=0;j<n-i;j++){
        right+=" ";
    }

    for(let k=0;k<i;k++){
        right+="*"; 
    }
    right+="\n"
}

console.log(right);

for(let i=0;i<n;i++){
    for(let j=0;j<i;j++){
        left+="*"
    }
    left+="\n"
}

console.log(left);

for(let i=0;i<n;i++){
    for(let j=n;j>i;j--){
        downward+="*"
    }
    downward+="\n"
}

console.log(downward);