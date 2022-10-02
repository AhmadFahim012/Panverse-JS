const countries = ["turkey", "usa", "autralia", "maldives", "bali"];
console.log(countries); // original Array

const sort = (arg) =>{
    return(
        console.log(arg.slice().sort()) // Sorted without changing the order
    );
}
sort(countries);
console.log(countries); // Again on its on original order

console.log( countries.reverse()); // now orginal position is reversed


