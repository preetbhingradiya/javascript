let n = 5;

let string = "";
let hollow = "";

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (i === 0 || i === n - 1) {
      string += "*";
    } else {
      if (j === 0 || j === n - 1) {
        string += "*";
      } else {
        string += " ";
      }
    }
  }
  string += "\n";
}

console.log(string);

//hollow star
for (let i = 0; i <6; i++) {
  for (let j = 0; j < i; j++) {
    if(i === n) {
        hollow += "*";
      }
      else {
        if (j == 0 || j == i - 1) {
            hollow += "*";
        }
        else {
            hollow += " ";
        }
      }
  }
  hollow += "\n";
}

console.log(hollow);
