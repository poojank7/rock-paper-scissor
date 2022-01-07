const value = document.querySelectorAll(".btn");
let rock = document.querySelector('#btn1');
let paper = document.querySelector('#btn2');
let scissor = document.querySelector('#btn3');
let resetbtn = document.querySelector('#reset');

const gridContainer = document.querySelector(".gridcontainer");
const playerchoiceContainer = document.querySelector(".playerchoicecontainer");
const playergridContainer = document.querySelector(".playergridcontainer");
const computergridContainer = document.querySelector(".computerchoicecontainer");
const computerOptions = ['rock', 'paper','scissor'];
const container = document.querySelector('.resultcontainer');
const resetButton = document.querySelector('.resetbutton');

let count = 0;
let computerScore = 0;
let playerScore = 0;
let playerchoice= '';

const result = () => {
    return computerOptions[Math.floor(Math.random() * 3)] 
}
    rock.addEventListener("click", () => { playerchoice = rock.innerText;});
    paper.addEventListener("click", () => { playerchoice = paper.innerText;});
    scissor.addEventListener("click", () => { playerchoice = scissor.innerText;});
    value.forEach((item) =>{
        item.addEventListener("click", ()=>{
            let computerSelection =  result();
            if(playerScore == 0) {
                playerscore.textContent = "Your Score is : 0"
            }
            if(computerScore == 0) {
                computerscore.textContent = "Computer Score is : 0"
            }
            if(playerScore >=5 || computerScore >=5){
                btn.textContent = "Please refresh the page to play a new game!"
                resetButton.appendChild(btn)
                return answer.textContent = "Game Over!";
            }
            displaychoice.textContent = "You choose " + playerchoice.toLowerCase();
            playerchoiceContainer.appendChild(displaychoice);
            displaycomputerchoice.textContent = "Computer choose " + computerSelection;
            computergridContainer.appendChild(displaycomputerchoice);
            let strng = playRound(playerchoice.toLowerCase(),computerSelection);
            if (strng.search('You have a greater strength than enemy!') > -1) {
                playerScore++;
                playerscore.textContent = "Your Score is " + playerScore;
            } else if (strng.search('Choose a better Weapon!') > -1) {
                computerScore++;
                computerscore.textContent = "Computer Score is " + computerScore
            }
            if(computerScore == 5){
                computerscore.textContent = "Computer Won!"
            }
            if(playerScore == 5){
                playerscore.textContent = "You Won!"
            }
            gridContainer.appendChild(computerscore);
            playergridContainer.appendChild(playerscore);
        });
    });

let answer = document.createElement('div');
let playerscore = document.createElement('p');
let computerscore = document.createElement('p');
let displaychoice = document.createElement('p');
let displaycomputerchoice = document.createElement('p');
let btn = document.createElement('p');

answer.classList.add('resulttext');
playerscore.classList.add('scoretext');
computerscore.classList.add('scoretext');
displaychoice.classList.add('scoretext');
displaycomputerchoice.classList.add('scoretext');
btn.classList.add('scoretext');

function playRound(playerchoice, computerchoice){
    if(computerchoice === playerchoice){
        answer.textContent = "You both choose the same Weapon!"
    }
    else if(playerchoice === "rock"){
        (computerchoice === "paper") ? answer.textContent = 'Choose a better Weapon!' : answer.textContent = 'You have a greater strength than enemy!'
    }
    else if(playerchoice === "paper"){
        (computerchoice === "scissor") ? answer.textContent = 'Choose a better Weapon!' : answer.textContent = 'You have a greater strength than enemy!'
    }
    else if(playerchoice === "scissor"){
        (computerchoice === "rock") ? answer.textContent = 'Choose a better Weapon!' : answer.textContent = 'You have a greater strength than enemy!'        
    }
    container.appendChild(answer);
    return answer.textContent
}

    

