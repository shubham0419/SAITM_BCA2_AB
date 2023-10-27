
// function fun2() {
//     console.log("world");
// }


// function fun(fun2) {
//     console.log("Hello");
//     fun2();
// }


// fun(fun2);


// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(arr);


// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] * arr[i];
// }

// console.log(arr);

// function square(num1) {
//     return num1 * num1;
// }

// var arr = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(arr);

// let newArr = arr.map(square);

// var newArr = arr.map(function square(num1) {
//     return num1 * num1;
// });

// var newArr = arr.map(function (num1) {
//     return num1 * num1;
// })
// console.log(newArr);
// console.log(arr);


// var newArr = arr.map(function (num1) {
//     return parseInt(Math.sqrt(num1));
// })


// console.log(newArr);
// console.log(arr);


// var arr = [1, 2, 3, 4, 5, 6, 7, 8];

function isOdd(num) {
    return num % 2;
}
function isEven(num) {
    return !(num % 2);
}
// // console.log(isEven(4));
// // console.log(isEven(5));

let odd = arr.filter(isOdd);
let even = arr.filter(isEven)
console.log(odd);
console.log(even)

let num = [20, 1, 2, -30, 40, 10, 15, 70];

num.sort();
console.log(num);
