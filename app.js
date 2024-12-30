let gameseq =[];
let userseq =[];
let highscr =[];

let btns = ["yellow","red","blue","green"];

let start = false;
let level =0;

let h2 = document.querySelector("h2");

let h3 = document.querySelector("h3");

document.addEventListener("keypress",function(){
    
    if(start == false){
        // console.log("Started");
        start = true;

        levelUp();
    }
})

function gameFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")
    },250)
}

function userFlash(btn){
    btn.classList.add("userFlash")
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },250)
}

function levelUp(){
    userseq=[];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    
    gameseq.push(randColor);
    // console.log(gameseq);
    gameFlash(randBtn);
}

function checkAns(idx){
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelUp,1000);
        }
    } else{
        h2.innerHTML = `Game Over! <b> Your score is : ${level}</b> <br> Press any to ReStart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);

        reset();
    }
}

function btnPress(){
    if(start == true){
        // console.log(this);
        let btn = this;
        userFlash(btn);

        userColor = btn.getAttribute("id");
        userseq.push(userColor);
        // console.log(userseq);

        checkAns(userseq.length-1);
    }
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    start = false;
    gameseq = [];
    userseq = [];
    level = 0;
}
