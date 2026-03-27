let humanScore = 0
let computerScore = 0

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
    let choice = prompt("Choose your move: Rock, Paper or Scissors!").toLowerCase()
    while  (
        choice !== "rock" &&
        choice !== "paper" &&
        choice !== "scissors"
    ){
        choice = prompt("You typed something else. Try again!").toLowerCase()

    }
    return choice
}


function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log("It's tie! You and computer both chose the same thing.")
    } else {
        switch (humanChoice){
            case "rock":
                if (computerChoice === "paper"){
                    console.log("You lose! Paper beats rock")
                    computerScore++
                } else {
                    console.log("You win! Rock beats scissors")
                    humanScore++
                }
                break
            case "paper":
                if (computerChoice === "scissors"){
                    console.log("You lose! Scissors beat paper")
                    computerScore++
                } else {
                    console.log("You win! Paper beats rock")
                    humanScore++
                }
                break
            case "scissors":
                if (computerChoice === "rock"){
                    console.log("You lose! Rock beats scissors")
                    computerScore++
                } else {
                    console.log("You win! Scissors beat paper")
                    humanScore++
                }
                break
        }
    }
}


function playGame(){
    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore === computerScore){
        console.log("It's tie, nobody wins. Your score is " + humanScore + " Computer's score is " + computerScore)
    } else if (humanScore > computerScore){
        console.log("You win! Great job! Your score is " + humanScore + " Computer's score is " + computerScore)
    } else {
        console.log("You lose! Expected! Your score is " + humanScore + " Computer's score is " + computerScore)
    }
}

playGame()