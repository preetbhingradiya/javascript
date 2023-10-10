let n = 6;
let store = "";
let temp = "";

for (let i = 1; i <= n; i++) {
  for (let j = 1; j < i; j++) {
    store += j;
  }
  store += "\n";
}

console.log(store);

//seconde 
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      temp += i;
    }
    temp += "\n";
  }
  
console.log(temp);

//third

