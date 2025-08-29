let gameSeq = [];
let userSeq = [];
let btns =['red', 'orange', 'green', 'blue'];

let started = false;

let level = 0

let h3 = document.querySelector("h3");

document.addEventListener("keypress", function(){
  if (started == false){
    console.log("game is started");
    started = true;

    levelUp();
  }

});

function levelUp(){
  userSeq = [];
  level++;
  h3.innerText = `Level ${level}`;

  let randomIdx = Math.floor(Math.random()*4);
  let randomColor = btns[randomIdx];
  let randBtn = document.querySelector(`.${randomColor}`);
 
  gameSeq.push(randomColor);
  
  console.log(gameSeq);
  btnFlash(randBtn);


}
function checkAns(idx){
  if(userSeq[idx] === gameSeq[idx]){
     if(userSeq.length == gameSeq.length){
       setTimeout(levelUp, 1000);
     }
    }else{
      h3.innerHTML = `Game Over! Your Score was <b>${level}</b></br> Press any key to start`;
      document.querySelector("body").style.backgroundColor = "red";
      setTimeout( function(){
        document.querySelector("body").style.backgroundColor = "white";
      }, 150);
      reset();
    }
  
}

function btnFlash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  }, 250);

}
function btnPress (){
 
 let btn = this;
 btnFlash(btn);
 userColor = btn.getAttribute("id");
 console.log(userColor);
 userSeq.push(userColor);
 checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn")
for(btn of allBtns){
  btn.addEventListener("click", btnPress)
}

function reset(){
  started = false;
  gameSeq  = [];
  userSeq = [];
  level = 0;
}