// let a = [1, 3, 5, 7];

// let obj1 = {
//     name: "shubham",
//     age: 22
// }

// let obj2 = Object.create(obj1);

// console.log(obj1);
// console.log(obj2);

// Array.prototype.toPrint = function () {
//     console.log("this will print");
// }


function fun() {
    console.log(this);
}

// fun();

function aaaa() {
    return 1;
}


function outer() {
    // console.log(this);
    this.name = "toname";
    console.log(this);
    function inner() {
        console.log(this.name);
    }
    return inner;
}

// let b = outer();
// b();
// console.log(b);

// constructor function






