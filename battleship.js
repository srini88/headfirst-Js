// Your first question might be: are we talking about == or ===? Here’s the good
// news: if you’re comparing two objects, it doesn’t matter! That is, if both operands are
// objects, then you can use either == or === because they work in exactly the
// same way. Here’s what happens when you test two objects for equality


var car = {
	model:"infiniti", 
	type: "sedan"
};

var bike = {
	model : "honda", 
	type : "two wheeler"
};


var car2 = car;

if (car == bike){
	console.log("car is equal to bike - same objects ");  // wont print
}


if (car2 == car){
	console.log("car is equal to car2 - reference to the same object ");  // prints
}

if (car2 === car){
	console.log("car is equal to car2 - reference to the same object ");  // prints this also , 3 equalifty 
}