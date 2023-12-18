
var str = "this is  string";

console.log(str.includes("is")); // return true if present else false

console.log(str.includes('arr'));

console.log(str.includes('str')); // checks in a words too

let arr = [1, 3, 7, 9, 12, 15, 20];

console.log(arr.includes(2));

console.log(arr.includes(12));

let url = "https://facebook.com/user/profile/profile.png"

let a = url.split('/'); // to break string around an instance(key word)
console.log(url);
console.log(a);

arr.splice(1, 2);  //to delete an element in an array at nth index (deleting 2 elements from 1st index)
console.log(arr);

arr.splice(1, 0, 3, 5, 6, 7, 8)
// to add element/elements at nth index in an array (adding '3, 5, 6, 7, 8' at 1st index)
console.log(arr);

// String template Literals
console.log(`this is array : ${arr}`);

