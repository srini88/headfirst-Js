
// prints tick tock continuously on the screen 
var timerObj = setInterval(ticktok, 1000);
var tick = true;
function ticktok(){
	if (tick){
		console.log("tick");
		tick = false;
	}
	else {
		console.log("tock");
		tick = true;
	}
}



// So far we’ve seen three types of events: the load event, which occurs when the browser
// has loaded the page; the click event, which occurs when a user clicks on an element in
// the page and the mousemove event, which occurs when a user moves the mouse over
// an element. You’re likely to run into many other kinds of events too, like events for data
// arriving over the network, events about the geolocation of your browser, and timebased
// events (just to name a few).
// For all the events you’ve seen, to wire up a handler, you’ve always assigned the handler
// to some property, like onload, onmouseover or onclick. But not all events work like
// this—for example, with time-based events, rather than assigning a handler to a property,
// you call a function, setTimeout, instead and pass it your handler.

// Let’s think through
// this: the setTimeout function essentially creates a countdown
// timer and associates a handler with that timer. That handler is
// called when the timer hits zero. Now to tell setTimeout what
// handler to call, we need to pass it a reference to the handler function.
// setTimeout stores the reference away to use later when the timer
// has expired.


// In that case, you probably have experience
// with a language like C or Java, where you don’t just go around passing
// functions to other functions like this… well, in JavaScript, you do, and
// in fact, being able to pass functions around is incredibly powerful,
// especially when we’re writing code that reacts to events.























