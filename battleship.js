var car = {
	make:"infiniti",
	model : "Q50",
	year : 2015, 
	started: false,
	drive: function(){
		if (this.started){
			console.log("car is started and ready to go");
		}
		else{
			console.log("car is not started. start it firstt");
		}
	},
	start: function(){
		this.started = true;
	},
	stop: function(){
		this.started = false; // started is a property of car object , to access you got to use this
	}
};

// this is that wahtever a method is called in the bdy of that method you can count on this to be assigned to the object whose method was called 
// console.log(car.drive());
// // starting the car then driving
// console.log(car.start());
// console.log(car.drive());


// iterate over all the properties in the object car 
// using for in iteration 

// for (prop in car){
// 	console.log(prop + ": "  + car[prop] + " ");
// }
// //op 
// make: infiniti 
// battleship.js:33 model: Q50 
// battleship.js:33 year: 2015 
// battleship.js:33 started: false 
// battleship.js:33 drive: function (){
// 		if (this.started){
// 			console.log("car is started and ready to go");
// 		}
// 		else{
// 			console.log("car is not started. start it firstt");
// 		}
// 	} 
// battleship.js:33 start: function (){
// 		this.started = true;
// 	} 
// battleship.js:33 stop: function (){
// 		this.started = false; // started is a property of car object , to access you got to use this
// 	} 

// this method not working, I'm getting undefined 


// for (prop in car){
// 	console.log(prop + ": "  + car.prop + " ");
// }

// objects contain state and behaviour 