
//fly();  //im getting vUncaught TypeError: fly is not a functio


var fly = function() {
	console.log("I'm flying");
}




// So what does this all mean? For starters, it means that you can place function
// declarations anywhere in your code—at the top, at the bottom, in the middle—and
// invoke them wherever you like. Function declarations create functions that are defined
// everywhere in your code (this is known as hoisting).


// Here’s the
// short answer: the only difference between a function defined at the top level of your code and
// one that’s defined within another function is just a matter of scope. In other words, placing a
// function in another function affects where the function is visible within your code.


// review of lexical scope 

var justAVar = "global";


function WhereAreYou(){
	var justAVar = "local";
	return justAVar;    // returns local 
}

var result = WhereAreYou();
console.log(result);  // you get local here 

//492