//521 creating objects 

// learning about object constructors 
// With constructors we can create objects much more easily,
// and we can create objects that all adhere to the same design blueprint—meaning
// we can use constructors to ensure each object has the same properties and
// includes the same methods. And with constructors we can write object code that is
// much more concise and a lot less error prone when we’re creating lots of objects.
// So, let’s get started and after this chapter you’ll be talking constructors just like you
// grew up in Objectville



// Object literals give you a convenient way to create objects anywhere in your code,
// but when you need to create lots of objects—say a whole fleet of taxis—you
// wouldn’t want to type in a hundred different object literals now would you?

var taxi = {
make: "Webville Motors",
model: "Taxi",
year: 1955,
color: "yellow",
passengers: 4,
convertible: false,
mileage: 281341,
started: false,
start: function() {
	this.started = true;
}
};

console.log(taxi.started);
console.log(taxi.start());
console.log(taxi.started);

// Object constructors, or “constructors” for short, are your path to better
// object creation. Think of a constructor like a little factory that can
// create an endless number of similar objects.

// Using constructors is a two-step process: first we define a constructor, and then
// we use it to create objects. Let’s first focus on creating a constructor.