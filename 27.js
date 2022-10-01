const alien_color = "green";
const alien_color2 = "yellow";
const alien_color3 = "red";

function check(color1, color2, color3) {
  if (color1 == "green") {
    console.log("the player just earned 5 points");
  }
  if (color2 == "yellow") {
    console.log("player just earned 10 points");
  }
  if (color3 == "red") {
    console.log("player just earned 15 points");
  } else {
    console.log("no color defined");
  }
}

check(alien_color);
check(alien_color2);
check(); // Else statement will run
