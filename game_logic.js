let humanScore = 0
let computerScore = 0
let rounds = 0

const scoreContainer = document.querySelector(".scoreContainer");
const result = document.createElement("p");
result.classList.add("result")

const score = document.createElement("p");
score.classList.add("score")

const roundsText = document.createElement("p");
roundsText.classList.add("roundsText");

const gameResults = document.createElement("p")
gameResults.classList.add("gameResults")

const modalOverlay = document.querySelector('.modal-overlay');
const restartBtn = document.querySelector('.restart-button');

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

restartBtn.addEventListener('click', () => {
    modalOverlay.classList.add('hidden');
    humanScore = 0;
    computerScore = 0;
    rounds = 0;

    scoreContainer.replaceChildren();
});

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

function results(humanScore, computerScore){
    let resultText = ""
    if (humanScore === computerScore){
        resultText = "It's tie, nobody wins. Your score is " + humanScore + " Computer's score is " + computerScore
    } else if (humanScore > computerScore){
        resultText = "You win! Great job! Your score is " + humanScore + " Computer's score is " + computerScore
    } else {
        resultText = "You lose! Expected! Your score is " + humanScore + " Computer's score is " + computerScore
    }
    document.querySelector('.modal-text').textContent = resultText
    modalOverlay.classList.remove('hidden');
}

function playRound(humanChoice){
    let computerChoice = getComputerChoice()
    if (humanChoice === computerChoice){
        result.textContent = "It's tie! You and computer both chose the same thing."
        console.log("It's tie! You and computer both chose the same thing.")
        rounds++
    } else {
        switch (humanChoice){
            case "rock":
                if (computerChoice === "paper"){
                    result.textContent = "You lose! Paper beats rock."
                    computerScore++
                    rounds++
                } else {
                    result.textContent = "You win! Rock beats scissors."
                    humanScore++
                    rounds++
                }
                break
            case "paper":
                if (computerChoice === "scissors"){
                    result.textContent = "You lose! Scissors beat paper."
                    computerScore++
                    rounds++
                } else {
                    result.textContent = "You win! Paper beats rock."
                    humanScore++
                    rounds++
                }
                break
            case "scissors":
                if (computerChoice === "rock"){
                    result.textContent = "You lose! Rock beats scissors."
                    computerScore++
                    rounds++
                } else {
                    result.textContent = "You win! Scissors beat paper."
                    humanScore++
                    rounds++
                }
                break
        }
    }
    scoreContainer.appendChild(result)
    score.textContent = "Your score - " + humanScore + " Computer score - " + computerScore
    scoreContainer.appendChild(score)
    roundsText.textContent = "Round: " + rounds + " out of 5."
    scoreContainer.appendChild(roundsText)
    if (rounds == 5){
        results(humanScore, computerScore)
    }
}