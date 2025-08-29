let input = document.querySelector("input");
let taskBtn = document.querySelector("button");
  let ul = document.querySelector("ul");

taskBtn.addEventListener("click", function(){
  let task = input.value;

 let items = document.createElement("li");
 
  items.innerText = task;
  document.querySelector('ul').append(items);

  let dltBtn = document.createElement("button");
  dltBtn.innerText= "delete";
  dltBtn.classList.add("delete");

  items.appendChild(dltBtn);

   input.value = "";
});
ul.addEventListener("click", function(event){
  if(event.target.nodeName == "BUTTON"){
let listItems = event.target.parentElement
listItems.remove();
  };
  


})
// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
// delBtn.addEventListener("click", function(){
//        let par = this.parentElement;
//        par.remove();
//   })
  
// }