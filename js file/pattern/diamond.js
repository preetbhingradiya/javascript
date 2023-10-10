let n=5;
let store="";
let temp="";

for(let i=0;i<n;i++){
    for(j=n;j>i;j--){
        store+=" "
    }

    for(k=0;k<2*i-1;k++){
        store+="*"
    }

    store+="\n"
}

//reverse
for(let i=0;i<n;i++){
    for(j=0;j<i;j++){
        store+=" "
    }

    for(k=0;k<2*(n-i)-1;k++){
        store+="*"
    }

    store+="\n"
}
console.log(store);