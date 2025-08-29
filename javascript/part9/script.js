// 
let input = document.createElement("input");
let btn = document.createElement("button");

btn.innerText = "Click me";

document.querySelector('body').append(input, btn);

input.setAttribute("placeholder", "username");

btn.setAttribute("id", "btn");

let button = document.querySelector("#btn");
button.classList.add("btn");

let h1 = document.createElement("h1");
h1.innerText = "DOM Practice";

document.querySelector('body').append(h1);
h1.setAttribute("id", "header");

let header = document.querySelector("#header");

header.classList.add("h1")

let para = document.createElement("p");
para.innerHTML = "<strong>Apna College Delta Practice</strong>";
document.querySelector('body').append(para);

para.setAttribute("id", "para");
let p = document.querySelector("#para");
p.classList.add("para");
