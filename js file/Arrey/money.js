let arr=[3,4,5,6,8,9]
console.log(arr);
let salary=40
sum=0;
for(let i=0;i<arr.length;i++){
    sum +=arr[i]
}
console.log(sum);

if(sum>salary){
    console.log("Debt");
}
else if(sum<salary){
    console.log("Save");
}
else if(sum==salary){
    console.log("Neutral");
}
else{
    console.log("salary and sum are not mach");
}