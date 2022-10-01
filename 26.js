const alien_color = "green";
const alien_color2 = "red";

function check(color1, color2) {
  if (color1 == "green") {
    console.log("the player just earned 5 points for shooting the alien");
  }
  if (color2 == "red") {
    console.log("player just earned 10 points");
  } else {
    console.log("no color defined");
  }
}

check(alien_color);
check(alien_color2);
check(); // Else statement will run
