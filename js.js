// Display an alert box after 3 seconds (3000 milliseconds):

// setTimeout(function(){ alert("Hello"); }, 3000);

// Executes a function, after waiting a specified number of milliseconds.


// all of this is part of the windows object
setTimeout(callMe, 3000);

function callMe(){
	alert("sup my nigga");
}
// var id = setTimeout(fn, delay); – Initiates a single timer which will call the specified function after the delay. The function returns a unique ID with which the timer can be canceled at a later time.

var id = setInterval(fn, delay); – Similar to setTimeout but continually calls the function (with a delay every time) until it is canceled.
clearInterval(id);, clearTimeout(id); – Accepts a timer ID (returned by either of the aforementioned functions) and stops the timer callback from occurring.


// The window.setTimeout() method can be written without the window prefix.

// The first parameter is a function to be executed.

// The second parameter indicates the number of milliseconds before execution.

// Same as setTimeout(), but repeats the execution of the function continuously.

// setInterval(callMe, 3000);

// function callMe(){
// 	alert("set interval being called every 3 secs");
// }


The clearTimeout() method clears a timer set with the setTimeout() method.

The ID value returned by setTimeout() is used as the parameter for the clearTimeout() method.

Note: To be able to use the clearTimeout() method, you must use a global variable when creating the timeout method:

myVar = setTimeout("javascript function",milliseconds);
Then, if the function has not already been executed, you will be able to stop the execution by calling the clearTimeout() method.

// Using clearTimeout() to prevent the function to run:

// var myVar;

// function myFunction() {
//     myVar = setTimeout(function(){ alert("Hello") }, 3000);
// }

// function myStopFunction() {
//     clearTimeout(myVar);
// }
