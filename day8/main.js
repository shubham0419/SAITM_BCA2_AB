

// console.log(x);

// function fun() {
//     console.log(x);
//     console.log(y);
// }

// var x = 10;

// fun();

// var y = 5;



// function sum(x, y, z = 5) {
//     console.log(x + y + z);
// }

// sum(10, 5, 20);


// function fun(x) {

//     console.log(x);

//     return "this is return";
// }


// let str = fun(10);

// console.log(str);


function fun() {
    console.log("FUN");
    function inside() {
        console.log("inside");
    }
    return inside;
}


var insideFun = fun();

insideFun();





