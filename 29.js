const favorite_fruits = ["banana", "strawberry", "orange"];
const getFruit = prompt("Enter the fruit name");

for (let i = 0; i < favorite_fruits.length; i++) {
  if (favorite_fruits.indexOf(getFruit) == 0) {
    console.log("I love bananas");
    break;
  } else if (favorite_fruits.indexOf(getFruit) == 1) {
    console.log("I love Strawberry");
    break;
  } else if (favorite_fruits.indexOf(getFruit) == 2) {
    console.log("I love orange");
    break;
  }
}
