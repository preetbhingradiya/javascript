let n = 5;
let store = "";
let reverse = "";
let hollow = "";

for (let i = 0; i < n; i++) {
  for (let j = n; j > i; j--) {
    store += " ";
  }

  for (let k = 0; k < 2 * i - 1; k++) {
    store += "*";
  }
  store += "\n";
}
console.log(store);

// reverse pyramid

for (let i = 0; i < n; i++) {
  for (j = 0; j < i; j++) {
    reverse += " ";
  }

  for (let k = 0; k < 2 * (n - i) - 1; k++) {
    reverse += "*";
  }
  reverse += "\n";
}

console.log(reverse);

//Hollow Pyramid Star
for (let i = 0; i < n; i++) {
  for (let j = n; j > i; j--) {
    hollow += " ";
  }

  for (let k = 0; k < 2 * i - 1; k++) {
    if (i === n) {
      hollow += "&";
    } else {
      if (k === 0 || k === 2 * i - 2) {
        hollow += "&";
      } else {
        hollow += " ";
      }
    }
  }

  hollow += "\n";
}

console.log(hollow);
