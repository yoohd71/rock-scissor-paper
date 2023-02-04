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

let Computer = getComputerChoice();
console.log(getComputerChoice())

let User = prompt("What is your choice?").toLowerCase()

function playRound(userSelection, comptuerSleection){
    if (userSelection == computerSelection) {
        return 'Tie'
    } else if ((userSelection == 'rock' && computerSelection == 'paper') || (userSelection == 'scissor' && computerSelection == 'rock') || (userSelection == 'paper' && computerSelection == 'scissor')){
        return "Computer"
    } else if ((userSelection == 'rock' && computerSelection == 'scissor') || (userSelection == 'scissor' && computerSelection == 'paper') || (userSelection == 'paper' && computerSelection == 'rock')){
        return "User";
    }
} 

console.log()
