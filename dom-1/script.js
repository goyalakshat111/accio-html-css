// selecting single h1
// let heading = document.querySelector("h1");

// selecting multiple h1
// let head = document.querySelectorAll("h1");

// selecting by id
// let para = document.querySelector("#kuch");

// selecting by class
// let x = document.querySelectorAll('.item');


// innerText - to change content inside opening and closing tag to another text
para.innerText = para.innerText + " bolta h";

// innerHTML -  to change content inside opening and closing tag to another text or another tags

// para.innerHTML = "gg";
//or
// para.innerHTML = "<span>Akshat</span> <a href='#'>Google</a>";

// example 2 - innerHTML
let box = document.querySelector("div");

// console.log(box.innerText);
// console.log(box.innerHTML);

// input 
let inp = document.querySelector("input");
// console.log(inp.id);
// console.log(inp.name);
// console.log(inp.className);
// console.log(inp.value);

// inp.type = "password";
// inp.value = inp.value.toUpperCase();

// style
let para2 = document.querySelector("#para");

// way 1 - dom way

// para2.style.color = 'red';
// para2.style.backgroundColor = 'yellow';
// para2.style.fontSize = '40px';

// way2 - like css

// para2.style.cssText = `
// color:red;
// background-color:yellow;
// font-size:40px;
// `

// way-3 - external css

para2.className+= " design-para";
// or

// print all class
// console.log(para.classList);
// add class
// para.classList.add("design-para")
// remove class
// para.classList.remove("design-para")
