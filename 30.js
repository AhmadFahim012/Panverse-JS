const arr = ["admin", "ahmad", "saqib"];
const getUsername = prompt("Enter you username");

for (let i = 0; i < arr.length; i++) {
  if (getUsername == "admin") {
    console.log("Hello admin, would you like to see a status report?");
    break;
  } else if (getUsername == arr[i]) {
    console.log("Hello ahmad, thank you for logging in again.");
    break;
  }
}
