const friends = ["hamza", "tahir", "jamil"];
const out = friends.shift();
console.log(friends);

friends.map((i) => {
  console.log("\n You are invited please join us on dinner", i);
});
console.log("\n", out, " is not coming, busy in some family activity");

const newMember = friends.unshift("Ali");
console.log("\n added", friends[0]);

friends.map((i) => {
  console.log("\n You are invited please join us on dinner", i);
});
// console.log(friends);
