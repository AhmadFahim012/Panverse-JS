const friends = ["hamza", "tahir", "jamil", "saqib"];

console.log("Hey Guys!! We got some space now we can add three more persons");

friends.unshift("newMember");
friends.push("Haider");

console.log(friends);

friends.splice(3, 0, "middperson");
console.log(friends);
