
function foo(){
	console.log("logging foo");


	function bar(){
		console.log("loggin bar");
	}
	return bar;
}


 var something = foo();  // causes logging foo to get printed on screen and something gets bar 


// console.log(something);   //which prints function bar(){
// 		//console.log("loggin bar");
// 	//}

something(); // you run something which runs bar ()  (this is the final closure)


// closure = function + outer context   (variable this function relies on )

// (the function is usually created/returned by another function)

// A real-life closure
// A closure is a function with access to variables in its containing scope (the function “closes over” the variables). The thing that can be tricky to wrap your head round is that the inner function still has access to the outer function’s variables after the outer function has returned

function outer(){

	var counter = 3;
	console.log(counter);

	function inner(){
		counter = counter+1; 
		console.log(counter);
	}

	return inner;
}



var x = outer();  // prints 3

x();  //4
x(); //5
// In this code, outer is called once, and returns inner. x is a reference to inner. Because inner is a closure, it has access to outer‘s local variable, counter. Even though outer has returned, inner still has access to outer‘s variables. Be careful though – if outer were called again, we’d get a new version of inner. To continue the previous example:


// In JavaScript, using simple terms,  if we create a function inside another function, we are creating a closure. 

// In most common languages, after a function returns, all the local variables are no longer accessible because the stack-frame is destroyed.  Keeping this in mind a closure can be considered as a stack-frame which is not deallocated when the function returns. 


var y = outer();  // prints 3

x();  //6
x();   //7

y();  //4