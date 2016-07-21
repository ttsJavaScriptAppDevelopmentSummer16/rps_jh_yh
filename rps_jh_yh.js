// var playerName = prompt("Enter name");
var playerScore = 0;

var computerScore = 0;

var weapons = ['rock', 'paper', 'scissors'];
var computerHand = weapons[computer];


// console.log("YOU picked " + playerHand);
// console.log("COMPUTER picked " + computerHand);

var handCount = 1;


while(playerScore < 4 || computerScore < 4) {
    console.log("in the WHILE -- Hand Count " + handCount);

    var computer = parseInt(Math.random()*10)%3;
    console.log("in the WHILE - COMPUTER picked " + computerHand);

    var playerHand = prompt("What do you choose, rock, paper or scissors?");
    console.log("in the WHILE - YOU picked " + playerHand);


    if (playerHand == "rock"){
        if (computerHand == "scissors"){
            console.log("I WIN");
            // console.log("Rock Crushes Scissors");
            // playerScore = playerScore +1;
            // console.log(playerName + " has " + playerScore + " games and the computer has " + computerScore);
        } else if (computerHand == "paper") {
            console.log("I LOSE");
            // console.log("Paper Covers Rock");
            // computerScore = computerScore + 1;
            // console.log(playerName + " has " + playerScore + " games and the computer has " + computerScore);
        } else if (computerHand == "rock"){
            console.log("Tie score -- try again");
        }
    console.log("in the ROCK IF ");
    }

    if (playerHand == "paper"){
    //     if (computerHand == "rock"){
    //         console.log("Paper Covers Rock");
    //         playerScore = playerScore +1;
    //         console.log(playerName + " has " + playerScore + " games and the computer has " + computerScore);
    //     } else if (computerHand == "scissors") {
    //         console.log("Scissors Cuts Paper");
    //         computerScore = computerScore + 1;
    //         console.log(playerName + " has " + playerScore + " games and the computer has " + computerScore);
    //     } else if (computerHand == "paper"){
    //         console.log("Tie score -- try again");
    //     }
    console.log("in the PAPER IF");
    }

    if (playerHand == "scissors"){
    //     if (computerHand == "paper"){
    //         console.log("Scissors Cuts Paper");
    //         playerScore = playerScore +1;
    //         console.log(playerName + " has " + playerScore + " games and the computer has " + computerScore);
    //     } else if (computerHand == "rock") {
    //         console.log("Rock Crushes Scissors");
    //         computerScore = computerScore + 1;
    //         console.log(playerName + " has " + playerScore + " games and the computer has " + computerScore);
    //     } else if (computerHand == "scissors"){
    //         console.log("Tie score -- try again");
    //     }
    console.log("in the SCISSORS IF");
    }
    console.log("player Score " + playerScore);
    console.log("computer Score " + computerScore);
    playerScore++;
    computerScore++;
    handCount++;
}















//
// switch(computerHand){
//   case 0:
//     console.log("COMPUTER picked rock");
//     break;
//   case 1:
//     console.log("COMPUTER picked paper");
//     break;
//   case 2:
//     console.log("COMPUTER picked scissors");
//     break;
//   }
