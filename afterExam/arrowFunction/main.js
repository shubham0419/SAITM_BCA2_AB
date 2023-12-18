
function fun(num) {
    console.log(num);
}

fun('normal');

const arrow = (num) => {
    console.log(num);
}

arrow('Arrow function');

let a = [1, 2, 3, 4, 5, 6, 7, 8]

let odd = a.filter((num) => {
    return num % 2;
})

// let odd = a.filter((num) => num % 2)

console.log(odd);