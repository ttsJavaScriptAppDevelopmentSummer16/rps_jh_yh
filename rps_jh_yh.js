var playerName = prompt("Enter name");
var playerScore = 0;

var computer;
var computerScore = 0;

var rock = 0;
var paper = 1;
var scissors = 2;

var playerHand = prompt("What do you choose, rock, paper or scissors?");
var computerHand = parseInt(Math.random()*10)%3;

var weapons = ['rock', 'paper', 'scissors'];


while(playerWins < 3) {


}







































// var playerName = prompt("Enter name");
// var playerChoice = prompt("What do you choose, rock, paper or scissors?");
//
//
// var rock = 0;
// var paper = 1;
// var scissors = 2;
//
// var computer;
// var computerScore = 0;
//
// var compare;
//
// switch(playerChoice){
//   case 'rock':
//     console.log("You picked " + playerChoice);
//     break;
//   case 'paper':
//     console.log("You picked " + playerChoice);
//     break;
//   case 'scissors':
//     console.log("You picked " + playerChoice);
//     break;
//   default:
//     console.log("You automatically lose");
// }
//
// computer = parseInt(Math.random()*10)%3;
// console.log (computer);
//
// switch(computer){
//   case 0:
//     console.log("Computer picked rock");
//     break;
//   case 1:
//     console.log("Computer picked paper");
//     break;
//   case 2:
//     console.log("Computer picked scissors");
//     break;
//   }
//
// if (computer == 0) {
//   switch(playerChoice){
//     case 'rock':
//       console.log("It's a tie");
//       break;
//     case 'paper':
//       console.log("You win");
//       playerScore = playerScore + 1;
//       break;
//     case 'scissors':
//       console.log("You lose");
//       break;
//   }
// }
//
// if (computer == 1) {
//   switch(playerChoice){
//     case 'rock':
//       console.log("You lose");
//       break;
//     case 'paper':
//       console.log("It's a tie");
//       break;
//     case 'scissors':
//       console.log("You win");
//       playerScore = playerScore + 1;
//       break;
//   }
// }
//
// if (computer == 2) {
//   switch(playerChoice){
//     case 'rock':
//       console.log("You win");
//       playerScore = playerScore + 1;
//       break;
//     case 'paper':
//       console.log("You lose");
//       break;
//     case 'scissors':
//       console.log("It's a tie");
//       break;
//   }
// }
// console.log (playerName + "\'s score is " + playerScore);
//
// }
