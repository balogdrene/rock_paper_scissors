let playerScore = 0
let computerScore = 0

function playRound(playerPick) {

    let computerPick = Math.floor(Math.random() * 3)
    switch (computerPick) {
        case 0: computerPick = 'rock'
            break;
        case 1: computerPick = 'paper'
            break;
        case 2: computerPick = 'scissors'
            break;
    }
    if (playerPick === computerPick) {
        console.log("TIE")
        console.log("Your pick: " + playerPick + " PC pick: " + computerPick)
        console.log(playerScore + " - " + computerScore)
        return
    } else if
        ((playerPick === "rock" && computerPick === "scissors") ||
        (playerPick === "paper" && computerPick === "rock") ||
        (playerPick === "rock" && computerPick === "scissors")) {
        playerScore++
        console.log("WINNER")
        console.log("Your pick: " + playerPick + " PC pick: " + computerPick)
        console.log(playerScore + " - " + computerScore)
        return
    } else {
        computerScore++
        console.log("LOSER")
        console.log("Your pick: " + playerPick + " PC pick: " + computerPick)
        console.log(playerScore + " - " + computerScore)
        return
    }


}

function game() {

    for (let i = 0; i < 5; i++) {
        let userInput = prompt("Rock, Paper or Scissors?")
        playRound(userInput)
    } if (playerScore > computerScore) {
        alert("WINNER")
    } else if (playerScore < computerScore) {
        alert("LOSER")
    } else {
        alert("TIE")
    }

}

game()
