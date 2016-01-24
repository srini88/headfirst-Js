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
}

window.onload = onHandle;


// Computer science types like
// to say that this kind of code is asynchronous, because we’re writing code to be
// invoked later, if and when an event occurs. This kind of coding also changes your
// perspective from one of encoding an algorithm step-by-step into code, into one of
// gluing together an application that is composed of many handlers handling many
// different kinds of events.