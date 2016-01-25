// Now, we’re awfully sorry to break this to you this late in
// the book, but that’s not how you typically write JavaScript code. Rather, most
// JavaScript is written to react to events

// What kind of events? Well, how about a
// user clicking on your page, data arriving from the network, timers expiring in the
// browser, changes happening in the DOM and that’s just a few examples. In fact,
// all kinds of events are happening all the time, behind the scenes, in your browser.

// Whenever there’s an event, there is an opportunity for your code to handle it; that is, to
// supply some code that will be invoked when the event occurs

// like, say, when the button click event happens, you might
// want to add a new song to a playlist; when new data arrives you might want to process it
// and display it on your page; when a timer fires you might want to tell a user the hold on a
// front row concert ticket is going to expire, and so on.

// To have your handler called when an event occurs, you first need
// to register it. As you’ll see, there are a few different ways to do that
// depending on what kind of event it is.

// You might also hear developers
// use the name callback or
// listener instead of handler.

// Now that we have a handler written and ready to go, we need to wire
// things up so the browser knows there’s a function it should invoke when
// the load event occurs. To do that we use the onload property of the
// window object, like this:



// That’s true. But I’m not sure I know how to
// use the same event handler for multiple images.


// Assign the showAnswer click handler function
// to every image on the page.
// Rework showAnswer to handle unblurring any
// image, not just zero.jpg.


// Here’s our first hurdle: in the current code we use the getElementById method to grab
// a reference to image “zero”, and assign the showAnswer function to its onclick property.
// Rather than hardcoding a call to getElementById for each image, we’re going to show
// you an easier way: we’ll grab all the images at once, iterate through them, and set up the
// click handler for each one

// When the click handler is called, it’s passed an event object—and in fact, for most
// of the events associated with the document object model (DOM) you’ll be passed
// an event object. The event object contains general information about the event,
// such as what element generated the event and what time the event happened. In
// addition, you’ll get information specific to the event, so if there was a mouse click,
// for instance, you’ll get the coordinates of the click.

// The event object’s target property
// is a reference to the image element
// that was clicked.

function onHandle(){
	console.log("page is fully loaded");
	var image = document.getElementById("zero");
	image.onmousemove = showCoords;
		
}

window.onload = onHandle;

function showCoords(eventObj){   // eventObj is passed internally

	var map = document.getElementById("coords");
	// get these 
	console.log(eventObj);
	var x = eventObj.clientX;
	var y = eventObj.clientY;
	map.innerHTML = "Map coordinates are : " + x + ", " + y;
}


// type  - I’m a string, like “click” or “load”, that tells you
// what just happened.

// timeStamp  - Want to know when your event happened? I’m
// the property for you.

// keyCode - I’ll tell you what key the user just pressed

// clientX   - Want to know how far from the left side of the
// browser window the user clicked? Use me.

// clientY   - Want to know how far from the top of the
// browser window the user clicked? Use me.

// touches   - Using a touch device? Then use me to find out
// how many fingers are touching the screen.

