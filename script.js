let choices = document.querySelectorAll(".choice");
let scoreboard = document.querySelector(".score-board");
let msg = document.querySelector(".msg-container"); 

let arr = [['rock','fa-solid fa-hand-back-fist'],['paper','fa-solid fa-hand'],['scissor','fa-solid fa-hand-scissors']];

for(let i =0; i<choices.length; i++){
    choices[i].addEventListener("click",function(){
        
        setTimeout(gameLogic(i), 1000, i);
    })
}

function gameLogic(i){
    let playerChoice = arr[i][0];
    let ran = Math.floor(Math.random()*3);
    let compChoice = arr[ran][0];
    console.log(playerChoice,compChoice);
    scoreboard.innerHTML = 
    `<div class="score"><p>You</p><i class="${arr[i][1]}"></i></div> 
    <div class="score"><p>Comp</p><i class="${arr[ran][1]}"></i></div>`

    if(playerChoice === compChoice){
        msg.innerText = "Draw🙌";
    }
    else if(playerChoice === "paper" && compChoice === "rock"){
        msg.innerText  = "YOU LOST😒😒";
    }   
    else if(playerChoice === "paper" && compChoice === "scissor"){
        msg.innerText  = "YOU LOST😒😒";
    }
    else if(playerChoice === "scissor" && compChoice === "rock"){
        msg.innerText  = "YOU LOST😒😒";
    }
    else
        msg.innerText = "YOU WON😉😉";
}











