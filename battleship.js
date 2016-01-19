
function init(){
	var access1 = document.getElementById("code1");  // getting the whole elemnt 

	access1.style.color = "blue";
	var html = access1.innerHTML;

	var abc = document.getElementById("uno");
	// The innerHTML property sets or returns the HTML content (inner HTML) of an element.
	console.log(access1);  //<p id="code1">ealgle1</p>

	console.log(html);   //ealgle1
	console.log(abc);  
	// <ul id="uno">
	// 	<li>ONE</li>
	// 	<li>TWO</li>
	// 	<li>THREE</li>

	// </ul>
	console.log(abc.innerHTML);
}
window.onload = init;   // take window object and assign our function to its onload property 
// the window object will call any function you have assigned to its onload property, but only after the page is fully loaded. 
 console.log(window);
  console.dir(window);

    console.dir(document);

// Window is the main JavaScript object root, aka the global object in a browser, also can be treated as the root of the document object model. You can access it as window in most of the cases (in the browser);

// window.screen is a small information object about physical screen dimensions.

// window.document or just document is the main object of the visible document object model/DOM.


//  Well, the window is the first thing that gets loaded into the browser. This window object has the majority of the properties like length, innerWidth, innerHeight, name, if it has been closed, its parents, and more.

// What about the document object then? The document object is your html, aspx, php, or other document that will be loaded into the browser. The document actually gets loaded inside the window object and has properties available to it like title, URL, cookie, etc. What does this really mean? That means if you want to access a property for the window it is window.property, if it is document it is window.document.property which is also available in short as document.property.

// The window object represents the current browsing context. It holds things like window.location, window.history, window.screen, window.status, or the window.document. Also, it has information about the framing setup (the frames, parent, top, self properties), and holds important interfaces such as applicationCache, XMLHttpRequest, setTimeout, escape, console or localStorage. Last but not least it acts as the global scope for JavaScript, i.e. all global variables are properties of it.

// In contrast, the (window.)document object represents the DOM that is currently loaded in the window - it's just a part of it. A document holds information like the documentElement (usually <html>), the forms collection, the cookie string, its location, or its readyState. It also implements a different interface (there might be multiple Documents, for example an XML document obtained via ajax), with methods like getElementById or addEventListener.