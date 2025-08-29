

let userSeq = [];
let gameSeq = [];
let level = 0;
let started = false;

let btns = ["red", "blue", "green", "yellow"];
h2 = document.querySelector("h2");
allBtn = document.querySelectorAll(".btn");
document.addEventListener("keypress", function(){
 if(started == false){
  console.log("game started");
  started = true;
  levelUp();
 }
});

function levelUp(){
  userSeq= [];
  level++;
 h2.innerText = `Level ${level}`;

 let randIdx = Math.floor(Math.random()*4);
 let randColor = btns[randIdx];
 let randBtn = document.querySelector(`.${randColor}`);
console.log(randBtn);

gameSeq.push(randColor);
 flashBtn(randBtn);

}

function pressBtn(){
  let btn = this;
  
 
flashBtn(btn);
let userColor = btn.getAttribute("id");
userSeq.push(userColor);
checkAns(userSeq.length-1)

}
 for(btn of allBtn){
btn.addEventListener("click",pressBtn);
 }

 function checkAns(idx){
  
  if(userSeq[idx] === gameSeq[idx]){
    if(userSeq.length == gameSeq.length){
      levelUp();
    }
    
  }else{
    h2.innerHTML = `Game Over! Your Score was <b>${level}</b></br> Press any key to start `;
    document.querySelector('body').style.backgroundColor = "red";
    setTimeout(function (){
      document.querySelector('body').style.backgroundColor = "white";
    }, 150)

    reset();
  }
  
 }

 function flashBtn(btn){
  btn.classList.add("flash");
  setTimeout(function (){
    btn.classList.remove("flash");
  }, 250)
 }


 function reset(){
  started = false;
  userSeq = [];
  gameSeq = [];
  level = 0;
 }