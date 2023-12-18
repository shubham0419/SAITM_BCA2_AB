
// normal function

function fun() {
    console.log('normal');
}

// Construction function -> starts with Capital letter.
// function Construction() {
//     console.log(this);
//     this.name = 'shubham'
// }

// Construction();


// function Person() {
//     console.log(this);
//     this.name = 'shubham'
//     this.role = 'trainer'
// }

// const p1 = new Person();
// console.log(p1);
// const p2 = new Person();

function Person(name, role) {
    console.log(this);
    this.Name = name;
    this.Role = role;
}

const p1 = new Person('Shubham', "web Trainer");

// console.log(p1);
const p2 = new Person('shubham', 'C++ Trainer');
// console.log(p2);

