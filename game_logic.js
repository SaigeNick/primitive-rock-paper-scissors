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

const btnRock = document.querySelector(".btnRock");
btnRock.addEventListener("click", () => {
    playRound("rock")
});

const btnPaper = document.querySelector(".btnPaper");
btnPaper.addEventListener("click", () => {
    playRound("paper")
});

const btnScissors = document.querySelector(".btnScissors");
btnScissors.addEventListener("click", () => {
    playRound("scissors")
});

const scoreContainer = document.querySelector(".scoreContainer");
const result = document.createElement("p");
result.classList.add("result")
const score = document.createElement("p");
score.classList.add("score")



function playRound(humanChoice){
    let computerChoice = getComputerChoice()
    if (humanChoice === computerChoice){
        result.textContent = "It's tie! You and computer both chose the same thing."
        console.log("It's tie! You and computer both chose the same thing.")
    } else {
        switch (humanChoice){
            case "rock":
                if (computerChoice === "paper"){
                    result.textContent = "You lose! Paper beats rock."
                    console.log("You lose! Paper beats rock")
                    computerScore++
                } else {
                    result.textContent = "You win! Rock beats scissors."
                    console.log("You win! Rock beats scissors")
                    humanScore++
                }
                break
            case "paper":
                if (computerChoice === "scissors"){
                    result.textContent = "You lose! Scissors beat paper."
                    console.log("You lose! Scissors beat paper")
                    computerScore++
                } else {
                    result.textContent = "You win! Paper beats rock."
                    console.log("You win! Paper beats rock")
                    humanScore++
                }
                break
            case "scissors":
                if (computerChoice === "rock"){
                    result.textContent = "You lose! Rock beats scissors."
                    console.log("You lose! Rock beats scissors")
                    computerScore++
                } else {
                    result.textContent = "You win! Scissors beat paper."
                    console.log("You win! Scissors beat paper")
                    humanScore++
                }
                break
        }
        scoreContainer.appendChild(result)
        let scoreText = 
        score.textContent = "Your score - " + humanScore + " Computer score - " + computerScore
        scoreContainer.appendChild(score)
    }
}


function playGame(){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    if (humanScore === computerScore){
        console.log("It's tie, nobody wins. Your score is " + humanScore + " Computer's score is " + computerScore)
    } else if (humanScore > computerScore){
        console.log("You win! Great job! Your score is " + humanScore + " Computer's score is " + computerScore)
    } else {
        console.log("You lose! Expected! Your score is " + humanScore + " Computer's score is " + computerScore)
    }
}

playGame()