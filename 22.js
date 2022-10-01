const array = ["abc", "def", "ghi"];

const index = (...arg) => {
  // console.log(array.indexOf('abc')); // Returns  0;
  console.log(arg.indexOf("sc")); // Returns  -1 because this doesn't exits in an array
};
index(array);
