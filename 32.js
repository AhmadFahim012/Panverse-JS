const current_users = ["John", "Admin", "Jack", "Ana", "Natalie"];
const new_users = ["Admin", "John", "Calvin", "Natalie", "Emma"];

const get = prompt("Enter name to check");
const result = current_users.includes(get);

for (let i = 0; i < new_users.length; i++) {
  if (result == new_users[i]) {
    alert(true);
    break;
  } else {
    alert(false);
    break;
  }
}

