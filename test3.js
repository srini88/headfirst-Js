function quack(num){

	for(var i=0 ; i <num ; i++){
		console.log("Quack");
	}

}
// There are no surprises here, but let’s get our terminology
// down: formally, the first statement above is a function declaration,
// which creates a function that has a name—in this case
// quack—that can be used to reference and invoke the function.


// 2nd way to write function using function expression 

// Now when we use the function keyword this way—that is,
// within a statement, like an assignment statement—we call this
// a function expression. Notice that, unlike the function declaration,
// this function doesn’t have a name. Also, the expression results
// in a value that is then assigned to the variable fly. What is that
// value? Well, we’re assigning it to the variable fly and then later
// invoking it, so it must be a reference to a function.


// A function reference is exactly
// what it sounds like: a reference
// that refers to a function. You can use a
// function reference to invoke a function
// or, as you’ll see, you can assign them to
// variables, store them in objects, and pass
// them to or return them from functions

var fly = function(num){
		for(var i=0 ; i <num ; i++){
		console.log("Quack");
	}
}



quack(30);
fly(50);  // 2nd way 

// browser The first thing I
// always do is scan the code
// for function declarations.

// Function declarations are evaluated
// before the rest of the code is evaluated.
// ❏❏ Function expressions get evaluated
// later, with the rest of the code.
// ❏❏ A function declaration doesn’t return a
// reference to a function; rather it creates
// a variable with the name of the function
// and assigns the new function to it.
// ❏❏ A function expression returns a
// reference to the new function created
// by the expression.
// ❏❏ You can hold function references in
// variables.

// page 436