
// page 475: 

// serious functions

// anonymous function and a closure 



// function handler (){
// 	console.log("page loaded ! ");  // you see this printed 
// }


// window.onload = handler; // when the page loads, the handler function is invoked 

// An anonymous function is just a
// function expression without a name that’s used where we’d normally use a function reference

// since handler will only be called once, it is unnecessary to have a function defined. 

// so directly do this 

window.onload = function(){console.log("page load done ! ");};


function annoy (){
	console.log("I'm annoying");
}


//setTimeout(annoy, 1000);   // setTimeOut will be called just once 

setTimeout(function (){ console.log("nigga");}, 1000);  // I have chnaged the function to be anonymous function 

// Hey, wait a sec, I think I get it. Because a
// function expression evaluates to a function
// reference, you can substitute a function
// expression anywhere you’d expect a
// reference?