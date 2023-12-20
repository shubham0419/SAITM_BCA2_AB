
// var h1 = document.getElementsByTagName('h1')[0];

// console.log(h1);


// h1.ondblclick = function () {
//     // h1.style.color = 'red'
//     h1.style.display = 'none'
// }

// h1.onmouseenter = function () {
//     h1.innerText = 'mouse enter event'
// }

// h1.onmouseleave = function () {
//     h1.innerText = 'Events'
// }

// var inp = document.querySelector('input');
// console.log(inp);

// inp.onkeydown = function () {
//     inp.style.backgroundColor = 'red'
// }

// inp.onkeyup = function () {
//     inp.style.backgroundColor = 'blue'
// }

// h1.onclick = function () {
//     h1.style.color = 'red'
// }

// h1.onclick = function () {
//     h1.style.backgroundColor = 'blue'
// }

// ------------------------- Add Event Listner-------------------------------


var allH1 = document.getElementsByTagName('h1');
console.log(allH1);
for (let i = 0; i < allH1.length; i++) {

    allH1[i].addEventListener('dblclick', (e) => {
        console.log(e.target);
    })
}


