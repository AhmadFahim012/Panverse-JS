const person = "my name is ahmad";
console.log("Default case: ", person);
const lowerCase = person.toLocaleLowerCase();
const upper = person.toLocaleUpperCase();
// const title = person.to();
console.log("LowerCase:", lowerCase);
console.log("UpperCase:", upper);

function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}
console.log("TitleCase:", titleCase("my name is ahmad"));
