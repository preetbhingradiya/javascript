let a = prompt("enter the age");
a = parseInt(a);

if (a < 0) {
  alert("Enter the correct age");
} else if (a > 0 && a < 18) {
  alert("You can't vote becuase you are kid");
} else if (a == 18) {
  alert("congret your age is 18 and now you can first vote");
} else if (a != a < z) {
  ("ths is alphabat");
} else {
  alert("your age is visibale to the vote");
}

let month = prompt("enter the month");
month = Number.parseInt(month);
switch (month) {
  case 1:
    document.write("this day is monday");
    break;
  case 2:
    document.write("this day is tuesday");
    break;
  case 3:
    document.write("this day is wednesday");
    break;
  case 4:
    document.write("this day is suturday");
    break;
  case 5:
    document.write("this day is friday");
    break;
  case 6:
    document.write("this day is sunday");
    break;
  default:
    document.write("enter coreect case");
    break;
}
