
// function fun() {
//     let x = 0;

//     function innerfun() {
//         x++;
//         console.log(x);
//     }

//     return innerfun;
// }

// let inside = fun();
// // console.log(inside);
// inside();
// inside();
// inside();

// prototypes

let arr = [1, 2, 3];


console.log(arr);

console.log(Array.__proto__);



let obj1 = {
    name: "shubham",
    age: 22
}

console.log(obj1);

let obj2 = Object.create(obj1);
console.log(obj2);
obj2.name = "something";


obj3 = Object.create(obj2);

console.log(obj3);

console.log(x);
let x = 5;