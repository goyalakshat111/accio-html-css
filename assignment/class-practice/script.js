// Question 1:

// How to find?… Page Link ⇒ https://javascript.info/task/find-elements/table.html


// 1. The table with `id="age-table"`.

let tableJS = document.querySelector("#age-table");

// 2. All `label` elements inside that table (there should be 3 of them).

let lables = tableJS.querySelectorAll("#age-table");

//or

// let lables = tableJS.querySelectorAll("#age-table label");

// 3. The first `td` in that table (with the word “Age”).

let firstTd = document.querySelectorAll("#age-table td")[0];

// 4. The `form` with `name="search"`.

let form = document.querySelector("form[name='search']");

// 5. The first `input` in that form.
// 6. The last `input` in that form.

let firstInput = form.querySelectorAll("input");
let l = firstInput.length;
console.log(firstInput[0]);
console.log(firstInput[l-1]);
