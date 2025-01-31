//question -2
// Write a JS code to change the name of  google Search button to a random name
// of your choice.

//console part ---

let btn = document.querySelectorAll(".gNO89b");
let arr =['nobita','doraemon','shizuka','gian','sunio'];
function changeName(arr){
    let index = parseInt(Math.random()*arr.length);
    btn[1].value = arr[index];
};
changeName(arr);
