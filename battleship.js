// Your first question might be: are we talking about == or ===? Here’s the good
// news: if you’re comparing two objects, it doesn’t matter! That is, if both operands are
// objects, then you can use either == or === because they work in exactly the
// same way. Here’s what happens when you test two objects for equality


// var car = {
// 	model:"infiniti", 
// 	type: "sedan"
// };

// var bike = {
// 	model : "honda", 
// 	type : "two wheeler"
// };


// var car2 = car;

// if (car == bike){
// 	console.log("car is equal to bike - same objects ");  // wont print
// }


// if (car2 == car){
// 	console.log("car is equal to car2 - reference to the same object ");  // prints
// }

// if (car2 === car){
// 	console.log("car is equal to car2 - reference to the same object ");  // prints this also , 3 equalifty 
// }



// undefined is falsey.
// null is falsey.
// 0 is falsey.
// The empty string is falsey.

// To remember which values
// are truthy and which
// are falsey, just memorize
// the five falsey values—
// undefined, null, 0, "” and
// NaN—and remember that
// everything else is truthy.
// This is an array. It's not undefined, null,
// zero, “” or NaN. It has to be true!
// This time we have an actual element object.
// That's not falsy either, so it's truthy.
// Only the number 0 is falsey, all others are truthy.
// Only the empty string is falsey,
// all other strings are truthy.
// NaN is falsey.

// function lieDetectorTest() {
// var lies = 0;
// var stolenDiamond = {};  // this is truthy 
// if (stolenDiamond) {
// 		console.log("You stole the diamond");
// lies++;
// }
// var car = {
// keysInPocket: null
// };
// if (car.keysInPocket) {
// console.log("Uh oh, guess you stole the car!");  // falsey cause null 
// lies++;
// }
// if (car.emptyGasTank) {
// console.log("You drove the car after you stole it!"); // falsey cause does not exist 
// lies++;
// }
// var foundYouAtTheCrimeScene = [];
// if (foundYouAtTheCrimeScene) {
// console.log("A sure sign of guilt");   // truthy cause null 
// lies++;
// }
// if (foundYouAtTheCrimeScene[0]) {
// console.log("Caught with a stolen item!"); // falsey does not exist 
// lies++;
// }
// var yourName = " ";
// if (yourName) 
// console.log("Guess you lied about your name");// truthy null - cause variable is declared irrespective of if it cntains value or not 
// lies++;
// }
// return lies;
// }
// var numberOfLies = lieDetectorTest();
// console.log("You told " + numberOfLies + " lies!");
// if (numberOfLies >= 3) {
// console.log("Guilty as charged");
// }


var str   = "my name@is srini  ";
// console.log(str.toUpperCase());  //MY NAME IS SRINI

// console.log((str.toUpperCase()).toLowerCase());  //my name is srini 

// And you can always use
// the typeof operator on your variable to see if
// it is of type string or object.
// Q: Can other primitives act


for (var i = 0; i < str.length ; i++){
	if (str.charAt(i) == "@"){
		console.log("found @ at the index " + i);//7
	}
}













