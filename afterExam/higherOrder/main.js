
// function outer() {
//     console.log('outer');
// }

// function fun(cb) {
//     console.log('fun');
//     cb();
// }

// fun(outer);

function fun() {
    console.log('fun');
    return function cb() {
        console.log('cb');
    }
}

const f = fun();

// console.log(f);

f();

// map , filter , reduce => array methods or callback/higher order function

var a = [1, 2, 3, 4, 5, 6, 7, 8];

function square(num) {
    return num * num;
}

const squareArr = a.map(square);

console.log(a);
console.log(squareArr);

const cubeArr = a.map(function cube(num) {
    return num ** 3;
})

console.log(cubeArr);
// annonymous function
const sqrt = a.map(function (num) {
    return parseInt(Math.sqrt(num));
})
console.log(sqrt);

// FIlter
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const even = arr.filter(function (num) {
    return !(num % 2);
})

console.log(even);

const odd = arr.filter(function (num) {
    return (num % 2);
})
console.log(odd);