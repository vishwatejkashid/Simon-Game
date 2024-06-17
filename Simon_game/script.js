let user_seq =[];
let game_seq =[];
let btns = ['red','green','blue','yellow'];
let started =false ;
let level =0;
let highScore = 0;

let h3 = document.querySelector("h3");
let body = document.querySelector("body");
let main = document.querySelector(".main")
let high_score = document.createElement('h3')


document.addEventListener("keypress" , function(event){
    if(event.key == 'Enter'){
        if(started == false){
            console.log("Game Started")
            started = true;
            levelUp();
        }
        
    }
    
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    user_seq =[];
    level++;
    h3.innerText = `Level ${level}`;
    let randidx = Math.floor(Math.random() *4);
    let randColor = btns[randidx];
    let randbtn = document.querySelector(`.${randColor}`)
    // console.log(randidx)
    game_seq.push(randColor);
    console.log(game_seq)
    gameflash(randbtn);
    
}

function checkAns(idx){
    if(user_seq[idx] == game_seq[idx]){
        if(user_seq.length == game_seq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        main.appendChild(high_score);
        if(level > highScore){
            highScore = level;
            high_score.innerText = `The highest Score of the Game is ${highScore}`
        }
        main.classList.add('red')
        setTimeout(() => {
            main.classList.remove('red')
        }, 400);
        h3.innerHTML = `Game over! Your Score was <b>${level}</b> <br/> Press Enter key to restart your game`;
        reset();
    }
}

function btnPress(){
    let btn = this;
    userflash(btn);
    let userColor = btn.getAttribute("id");
    user_seq.push(userColor);

    checkAns(user_seq.length-1)
    
}

function reset(){
    user_seq =[];
    game_seq =[];
    started =false ;
    level =0;  
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener('click',btnPress);
}


