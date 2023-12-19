
function fun() {
    console.log('fun');
}

// function delay(fun) {
//     let x = new Date().getTime();

//     while (new Date().getTime() <= x + 5000) { }

//     fun();
// }

console.log('Start');
// console.log(new Date().toLocaleString());
// console.log(new Date().toLocaleDateString());
// console.log(new Date().toLocaleTimeString());

// delay(fun);

// setTimeout(() => {
//     fun();
// }, 5000);

const id = setInterval(() => {
    console.log('hello');
}, 1000);


setTimeout(() => {
    clearInterval(id);
}, 3000);

console.log('End');

