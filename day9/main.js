

// function fun() {
//     console.log(" Fun");

//     function inside() {
//         console.log("inside");
//     }

//     return inside;
// }

// fun();

// inside()

// let b = fun();

// b();

// function outside() {
//     console.log("outside")
// }


// function fun(another) {
//     console.log("fun");
//     another();
// }

// fun(outside);

function num1() {
    console.log("1");
}

function num2(fun1) {
    fun1();
    console.log("2");
}

function num3(fun2) {
    console.log("3");
    fun2(num1);
}

function main(fun3) {
    console.log("main");
    fun3(num2);
}
// main(num1, num2);
// main(num1, num3);
main(num3);


