const myName = "Ahmad";

const check = myName == "ahmad" ? true : false; // the first letter is in lower case that's why false
console.log(check);

const nameCheck = myName.toLowerCase() === myName ? true : false;
console.log(nameCheck); // false

var num = 9;
if (num < 10) {
  console.log(true); //Less than 10 ans is true
} else {
  console.log(false);
}

if (num > 10) {
  console.log(true); //Less than 10 ans is false
} else {
  console.log(false);
}

if (num >= 10) {
  console.log(true); //Less than 10 ans is false
} else {
  console.log(false);
}

if (num <= 10) {
  console.log(true); //Less than 10 ans is false
} else {
  console.log(false);
}

//And/Or operator

if ((num <= 10 && num < 10) || num > 10) {
  console.log(true);
} else {
  console.log(false);
}

var arr = [1, 4, 5, 10, 17];
var search = 40;
if (arr.indexOf(search) !== -1) {
  console.log(true);
} else {
  console.log(false);
}
