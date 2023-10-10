let n = 6;
let store = "";

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
      store += i;
    }
    store += "\n";
  }
  
  console.log(store);