// selecting single h1
let heading = document.querySelector("h1");

// selecting multiple h1
let head = document.querySelectorAll("h1");

// selecting by id
let para = document.querySelector("#kuch");

// selecting by class
let x = document.querySelectorAll('.item');


// innerText - to change content inside opening and closing tag to another text
para.innerText = para.innerText + " bolta h";

// innerHTML -  to change content inside opening and closing tag to another text or another tags

// para.innerHTML = "gg";
//or
// para.innerHTML = "<a href='#'>Google</a>";

// example 2 - innerHTML
let box = document.querySelector("div");


// try in REPL
// console.log(box.innerText);
// console.log(box.innerHTML);

// input 
let inp = document.querySelector("input");

// try in REPL
// console.log(inp.id);
// console.log(inp.name);
// console.log(inp.className);
// console.log(inp.type);
// console.log(inp.value);

// inp.type = "password";
// inp.value = inp.value.toUpperCase();

// style
let para2 = document.querySelector("#para");

// way 1 - using dom properties

// para2.style.color = 'red';
// para2.style.backgroundColor = 'yellow';
// para2.style.fontSize = '40px';

// way2 - same as css syntax using cssText

// para2.style.cssText = `
// color:red;
// background-color:yellow;
// font-size:40px;
// `

// way-3 - using external css file


// class attribute in dom

// adding class
para2.className+= " design-para";

// print all class
console.log(para2.classList);

// another way to add and remove class

// add class
// para2.classList.add("design-para")
// remove class
// para2.classList.remove("design-para")
