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

	// getting multiple images - using the method getElementsByTagName
// 	This
// finds every image in the page and
// returns them all. We store the
// resulting images in the images variable
	var images = document.getElementsByTagName("img");
	console.log(images);
// 	Then we iterate over the images,
// and assign the showAnswer click
// handler to each image in turn. Now
// the onclick property of each image
// is set to the showAnswer handler.
	for (var i=0; i < images.length ; i++){
		images[i].onclick = showAnotherImg;	
		// when you clcik it causes an eventObj to be created , can be any name in the parameter , not necessarily eventObj
	}
	
}

window.onload = onHandle;

function showAnotherImg(eventObj){   // eventObj is passed internally
// 	In the handler, you can use the event object to determine
// things about the event, like what type of event occurred,
// and which element generated the event, and so on.
// So, what is in an event object? Like we said, both general and specific
// information about the event. The specific information depends on the type of
// the event, and we’ll come back to that a bit. The general information includes
// the target property that holds a reference to the object that generated the
// event. So, if you click on a page element, like an image, that’s the target, and
// we can access it like this


	var image = eventObj.target;
	console.log(image);  //<img id="zero" class="change" src="zero.jpg">
	name = image.id;  // get teh id from the image 
	// change the image to teh new image 
	name = name +"blur.jpg";
	image.src = name;

}

// There are. We’ve got network-based events,
// timer events, DOM events related to the page and a few
// others. Some kinds of events, like DOM events, generate
// event objects that contain a lot more detail about the
// event—like a mouse click event will have information
// about where the user clicked, and a keypress event will
// have information about which key was pressed, and so on.

// You already know that the browser maintains a queue of events. And
// that behind the scenes the browser is constantly taking events off that
// queue and processing them by calling the appropriate event handler for
// them, if there is one.


// It’s important to know that the browser processes these events one at a time,
// so, where possible, you need to keep your handlers short and efficient. If
// you don’t, the whole event queue could stack up with waiting events, and
// the browser will get backed up dealing with them all. The downside to you?
// Your interface could really start to become slow and unresponsive.




