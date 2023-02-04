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
        return `You won the computer by ${userScore-compScore} rounds!`;
    } else if (userScore < compScore){
        return `Well.. you lost by ${compScore - userScore} rounds`;
    } else {
        return 'TIE'
    }
}

console.log(game())
