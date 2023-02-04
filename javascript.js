let getComputerChoice = () => {
    let comChoice = Math.floor(Math.random() * 3);
    if (comChoice == 0) {
        return 'rock'
    } else if (comChoice == 1){
        return 'scissor'
    } else if (comChoice == 2){
        return 'paper'
    }
}
// Commit 1: changed getcOmputerchoice() function with arrow function for better readbility

let Computer = getComputerChoice();
console.log(Computer)

let User = prompt("What is your choice?").toLowerCase()

function playRound(userSelection, computerSelection){
    if (userSelection == computerSelection) {
        return 'Tie'
    } else if ((userSelection == 'rock' && computerSelection == 'paper') || (userSelection == 'scissor' && computerSelection == 'rock') || (userSelection == 'paper' && computerSelection == 'scissor')){
        return "Computer"
    } else if ((userSelection == 'rock' && computerSelection == 'scissor') || (userSelection == 'scissor' && computerSelection == 'paper') || (userSelection == 'paper' && computerSelection == 'rock')){
        return "User";
    }
} 


function game() {
    let userScore = 0;
    let compScore = 0;
    for (let i = 0; i < 5; i++){
        let userSelection = User;
        let computerSelection = Computer;
        let result = playRound(userSelection, computerSelection);
        if (result == "Computer"){
            compScore++;
        } else if (result =="User"){
            userScore++;
        }
    }
    if (userScore > compScore){
        console.log(`You won the computer by ${userScore-compScore} rounds!`);
    } else if (userScore < compScore){
        console.log(`Well.. you lost by ${compScore - userScore} rounds`)
    } else {
        console.log('TIE')
    }
}

console.log(game())
