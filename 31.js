const users = ["ahmad", "admin", "jawad"];

if (users.length == 0) {
  console.log("array is empty we need some users");
}

while (users.length > 0) {
  users.pop();
  console.log("array is empty");
  break;
}
