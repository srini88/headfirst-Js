

var changeBody = document.getElementById("bdy");
changeBody.innerHTML = "<strong>Im a niggaa </strong>"; 

// think font will be applied. I'm chaning whole body itself 



// If you try to get an element from the DOM by id,
// and that id doesn’t exist in an element, then the call to
// getElementById returns a null value. Testing for null is
// a good idea when you use getElementById to ensure

// When the browser loads and
// parses your HTML file, it creates an element object for
// every element in your page,and adds all those element
// objects to the DOM. So the DOM is really just a big
// tree of element objects. And, keep in mind that, just like
// other objects, element objects can have properties, like
// innerHTML, and methods, too. We’ll explore a few more
// of the properties and methods of element

// innerHTML gives you a convenient way to
// replace the content of an element. And, yes, you could
// use it to replace the content of the <body> element,
// which would result in your entire page being replaced
// with something new.


// window.onload = init;

// Let’s think about how onload works just a bit more, because it uses a common
// coding pattern you’ll see over and over again in JavaScript.
// Let’s say there’s a big important event that’s going to occur, and you definitely want
// to know about it. Say that event is the “page is loaded” event. Well, a common way
// to deal with that situation is through a callback, also known as an event handler.
// A callback works like this: give a function to the object that knows about the event.
// When the event occurs, that object will call you back, or notify you, by calling that
// function. You’re going to see this pattern in JavaScript for a variety of events.

// You’ve seen an example of “the page is loaded” event,
// which we handle by setting the onload property of the
// window object. You can also write event handlers that
// handle things like “call this function every five seconds,”
// or “some data arrived from a web service that we need
// to deal with,” or “the user clicked a button and we need
// to get some data from a form,” and there are many more.
// All these types of events are heavily used when you’re
// creating pages that act more like applications than static
// documents (and who doesn’t want that). Right now, we’ve
// had just a brief glimpse of event handlers,