
// splice delete



// arr.splice(2, 2);

// console.log("after delete: ", arr);


// splice add element

let arr = [5, 9, 10, "apple", "mango"];

console.log(arr);

// arr.splice(2, 0, "grapes", 1);

console.log(arr);

// splice delete and add

arr.splice(1, 2, "grapes", 99, 100)

// console.log(arr);

// Objects in JS


let Person = {
    name: "shubham",
    age: 22,
    gender: "male",
    married: false
}

// console.log(Person);

// console.log(Person.married);

// console.log(Person["name"]);

// for loop

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// console.log("While loop");

// let i = 0;

// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }

// console.log("For of loop");

// for (let it of arr) {
//     console.log(it);
// }

// for (let it of Person) {
//     console.log(Person[it]);
// }


// for (let it in Person) {
//     console.log(it, Person[it]);

// }

for (let it in Person) {
    console.log(`${it} : ${Person[it]}`);

}