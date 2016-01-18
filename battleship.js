var car = {
	make:"infiniti",
	model : "Q50",
	year : 2015, 
	started: false,
	fuel: 0,
	drive: function(){
		if (this.started){
			if (this.fuel > 0){
				console.log("car is started and ready to go");
				this.fuel = this.fuel -1; // we reducing one point for every start 	
			}
			else{
				console.log("We ran out of fuel ");
			}
		}
		else{
			console.log("car is not started. start it firstt");
		}
	},
	start: function(){
		this.started = true;
	},
	stop: function(){
		this.started = false; 
	},
	addFuel : function(points){
		console.log("adding fuel points: " + points);
		this.fuel = points;
	}
};

//car.start();
car.drive();
car.start();

car.addFuel(2);
car.drive();
car.drive();
car.drive();
// car is not started. start it firstt
// battleship.js:28 adding fuel points: 2
// battleship.js:10 car is started and ready to go
// battleship.js:10 car is started and ready to go
// battleship.js:14 We ran out of fuel

// predefined objects in JS 
// date 
// math
// regexp
// json
// document
// window
// console

why not work 
for (prop in car){
	console.log(prop + ": "  + car.prop + " ");
}
// using the dot notation to call the property (didn't work ). Can you tell why it is not working ?

// It's because when you do car.prop the JavaScript compiler is literally looking for a property on your car called "prop", which none exists. Using the bracket notation here is a really good case of when you would actually want to use the brackets. When you use the dot notation, you have to know the exact name of the property you are looking for.