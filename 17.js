const friends = [
  "hamza",
  "tahir",
  "jamil",
  "saqib",
  "adil",
  "mohsin",
];

console.log(friends);

console.log(
  "Guys, The Dinner table won't on time so we can accomodate only two persons"
);

for (let i = 0; i < friends.length; i++) {
  if (friends[i] != 2) {
    friends.pop();
    console.log("sorry we cant accomodate you", friends[i]);
  }
}

console.log(friends);
