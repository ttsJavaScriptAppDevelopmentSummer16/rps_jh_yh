var playerName = prompt("Enter name");
var playerScore = 0;

var computerScore = 0;

var weapons = ['rock', 'paper', 'scissors'];

var handCount = 1;


var loopflag = "yes";

while(loopflag == "yes") {

    var rand = parseInt(Math.random()*10)%3;
    var computerHand = weapons[rand];

    console.log("in the WHILE - COMPUTER picked " + computerHand);

    var playerHand = prompt("What do you choose, rock, paper or scissors?");


    if (playerHand == "rock"){
        if (computerHand == "scissors"){
            console.log("Rock Crushes Scissors");
            playerScore = playerScore + 1;
            console.log(playerName + " has " + playerScore + " games and the computer has " + computerScore);
        } else if (computerHand == "paper") {
            console.log("Paper Covers Rock");
            computerScore = computerScore + 1;
            console.log(playerName + " has " + playerScore + " games and the computer has " + computerScore);
        } else if (computerHand == "rock"){
            console.log("Tie score -- try again");
        }
    }

    if (playerHand == "paper"){
        if (computerHand == "rock"){
            console.log("Paper Covers Rock");
            playerScore = playerScore + 1;
            console.log(playerName + " has " + playerScore + " games and the computer has " + computerScore);
        } else if (computerHand == "scissors") {
            console.log("Scissors Cuts Paper");
            computerScore = computerScore + 1;
            console.log(playerName + " has " + playerScore + " games and the computer has " + computerScore);
        } else if (computerHand == "paper"){
            console.log("Tie score -- try again");
        }
    }

    if (playerHand == "scissors"){
        if (computerHand == "paper"){
            console.log("Scissors Cuts Paper");
            playerScore = playerScore + 1;
            console.log(playerName + " has " + playerScore + " games and the computer has " + computerScore);
        } else if (computerHand == "rock") {
            console.log("Rock Crushes Scissors");
            computerScore = computerScore + 1;
            console.log(playerName + " has " + playerScore + " games and the computer has " + computerScore);
        } else if (computerHand == "scissors"){
            console.log("Tie score -- try again");
        }
    }
    console.log("player Score " + playerScore);
    console.log("computer Score " + computerScore);

    if (playerScore == 3 || computerScore == 3) {
        loopflag = "No";
    }  
    handCount++;
}
