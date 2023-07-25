let str = "javascript with node js";
let sum = 0;
console.log(str);

for (let i = 0; i < str.length; i++) {
  if (str[i] == "a" ||str[i] == "e" ||str[i] == "i" ||str[i] == "o" ||str[i] == "u"
  ) {
    sum += 1;
    console.log(str[i]);
  }
}