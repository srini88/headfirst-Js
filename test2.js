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


function onHandle(){
	console.log("page is fully loaded");

	// now get the image 
	var img = document.getElementById("blur");
	img.onclick = showAnotherImg;
}

window.onload = onHandle;


// want to change the image on click 
// Lucky for us, every time an HTML element in the page is clicked
// (or touched on a mobile device), an event is generated. Your job is to
// create a handler for that event, and in it write the code to display the
// unblurred version of the image. Here’s how you’re going to do that

// Access the image object in the DOM and
// assign a handler to its onclick property.
// In your handler, write the code to change the
// image src attribute from the blurred image to
// the unblurred one.

// Oh, but we also need this code to run only after the DOM for the
// page has been created, so let’s use the window’s onload property
// to ensure that. We’ll place our code into a function, init, that we’ll
// assign to the onload property.

// Remember in JavaScript the order
// in which you define your functions
// doesn’t matter. So we can define
// init after we assign it to the
// onload property.


function showAnotherImg(){
	var img = document.getElementById("blur");
	img.src = "zeroblur.jpg";
}

// Ah, yes. It can get tricky to follow the
// flow of execution in code with a lot of
// event handlers. Remember, the init function is
// called when the page is loaded. But the showAnswer
// function isn’t called until later, when you click the
// image. So these two event handlers get called at two
// different times.
// In addition, remember your scope rules. In the
// init function we’re putting the object returned by
// getElementById into a local variable image, which
// means when that function completes, the variable
// falls out of scope and is destroyed. So later, when the
// showAnswer function is called, we have to get the
// image object again from the DOM. Sure, we could
// have put this in a global variable, but over use of
// globals can lead to confusing and buggy code, which
// we’d like to avoid.



// Computer science types like
// to say that this kind of code is asynchronous, because we’re writing code to be
// invoked later, if and when an event occurs. This kind of coding also changes your
// perspective from one of encoding an algorithm step-by-step into code, into one of
// gluing together an application that is composed of many handlers handling many
// different kinds of events.