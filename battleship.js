// battle ship puzzle 
// first place ship in 3 locations 
// we have 1D grid from 0 to 6

var loc1 = 1;
var loc2 = 2;
var loc3 = 3;
var isSunk = false;
var guess;
var hits = 0;
var guessCount = 0;

while (isSunk==false){
// now start the application
// ask the user for input

guess = prompt("give your guess of the battleship between 0 to 6");

if (guess <0 || guess >6){
	alert("use between 0 to 6, enter again");
}else{
	guessCount = guessCount+1;
	if (guess ==loc1 || guess ==loc2 || guess ==loc3) 
	{
		hits = hits+1;
		alert("hit");
		if (hits == 3){
			isSunk = true;
			alert("you sunk my battleship");
		}
	}
	else
		alert("miss");
}


}
alert("your guess count probability" + (3/guessCount));
// var location1 = 3;
// var location2 = 4;
// var location3 = 5;
// var guess;
// var hits = 0;
// var guesses = 0;
// var isSunk = false;

// while (isSunk == false) {
// 	guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
// 	if (guess < 0 || guess > 6) {
// 		alert("Please enter a valid cell number!");
// 	} else {
// 		guesses = guesses + 1;
// 		if (guess == location1 || guess == location2 || guess == location3) {
// 			alert("HIT!");
// 			hits = hits + 1;
// 			if (hits == 3) {
// 				isSunk = true;
// 				alert("You sank my battleship!");
// 			}
// 		} else {
// 			alert("MISS");
// 		}
// 	}
// }
// var stats = "You took " + guesses + " guesses to sink the battleship, " +
//             "which means your shooting accuracy was " + (3/guesses);
// alert(stats);
