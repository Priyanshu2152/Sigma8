let btn = document.querySelector("button");

btn.addEventListener("click", function(){

  let rgb = document.querySelector("h1");
  let randomColor = generateRandomColor();
  rgb.innerText = randomColor;

  let div = document.querySelector("div");
  div.style.backgroundColor = randomColor;
  console.log("color updated");
  
});

function generateRandomColor(){
  let red = Math.floor(Math.random()* 255);
  let green = Math.floor(Math.random()* 255);
  let blue = Math.floor(Math.random()* 255);
  
  let color = `rgb(${red}, ${green}, ${blue})`;

  return color;
}

let button = document.createElement("button");
button.innerText = "Click to change";

document.querySelector("body").append(button);
button.addEventListener("click", function(){

  button.style.backgroundColor = "green";
  console.log("button clicked");
})

let input = document.querySelector("input");
let h2 = document.querySelector("h2");

input.addEventListener("input", function(){
   let text = input.value;
   const regex = /[^a-zA-Z\s]/g;
   input.value = text.replace(regex, "");

   h2.innerText = text.replace(regex, "")
})


