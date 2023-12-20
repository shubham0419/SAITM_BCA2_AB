// console.log(document);

// ------------------------------------------ Selectors
// var obj = {
//     name:'shubham',
//     role:'web trainer'
// }

// console.log(obj.name);

// Tag Selector
var allH2 = document.getElementsByTagName('h2');

// console.log(allH2[0]);
console.log(allH2[0]);

// class selector
var boxes = document.getElementsByClassName('box');

console.log(boxes[1]);

// id selector

console.log(document.getElementById('head'));

// Querry Selector

// var p = document.querySelector('p')
// console.log(p);

// var allp = document.querySelectorAll('p')
// console.log(allp);

var insideDiv = document.querySelectorAll('#single p');  //single k andar waale paragraph
console.log(insideDiv);

// -------------------------------------------TEXT----------

// var para = document.getElementsByTagName('p')[0];

// console.log(para.innerText);
// console.log(para.textContent);
// console.log(para.innerHTML);

// -----------------------------------------------Attribute & class

var inp = document.querySelector('input[type="text"]');

// console.log(inp);

// console.log(inp.getAttribute('type'));
// console.log(inp.getAttribute('id'));

// inp.setAttribute('placeholder', 'User name');

// inp.setAttribute('class', 'first second third')

// console.log(inp);

// ---------------- ClassList

// inp.classList.add('red')

// console.log(inp.classList);

// inp.classList.remove('red');

// inp.classList.toggle('blue');

// --------------------------------------- Create Element

var createdH2 = document.createElement('h2');

// createdH2.innerText = 'this h2 is created by JS';

createdH2.innerHTML = 'this is span tag : <span>inside span</span>';

createdH2.classList.add('red');

console.log(createdH2);

document.getElementById('container').append(createdH2);

document.getElementById('container').append('this is appended text');

document.getElementById('container').prepend(createdH2);

var createdH3 = document.createElement('h3');

createdH3.innerHTML = 'this is creted by JS';

createdH3.classList.add('blue');

inp.after(createdH3);

inp.before(createdH3);
