let current_users = ['Hendry', 'Ronnie', 'William', 'Charlie', 'Tom'];
let new_users = ['Hendry', 'Phillip', 'Sara', 'David', 'CharliE'];

const lowerCasedArray = current_users.map(element => {
  return element.toLowerCase();
});
// Loop through the new new_users array to check
// If the elements are present in the current_users array or not
for( var i = 0; i < new_users.length; i++) {
    let lowerCase = new_users[i].toLowerCase();
    if(lowerCasedArray.includes(lowerCase) == true) {
        console.log(`username ${new_users[i]} is not available\n`);
    } else {
        console.log(`username ${new_users[i]} is available\n`);
    }         
}