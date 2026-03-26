let humanScore = 0
let computreScore = 0

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    let choice
    switch (getRandomInt(3)){
        case 0:
            choice = "rock"
            break
        case 1:
            choice = "paper"
            break
        case 2:
            choice = "scissors"
            break
    }
    return choice
}

function getHumanChoice(){
    let choice = prompt("Choose your move: Rock, Paper or Scissors!")
    return choice
}


function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase()
}