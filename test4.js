// A closure results when we combine a
// function that has free variables with
// an environment that provides variable
// bindings for all those free variables.



// writing a counter without closures, by using globals


var count = 0;

function counter(){
	count = count+1;
	return count;
}

console.log(counter());   //1
console.log(counter());		//2
console.log(counter());		//3

// sO NOW, What if we were to tell you there is a way to implement a counter with a totally local
// and protected count variable?
// That way, you’ll have a counter that no other code
// can ever clash with, and the only way to increment the counter value is through the
// function (otherwise known as a closure).

// 

function makeCounter(){
	var count = 0 ;      // put count in makeCounter fun, so count is a local variable 

	function counter(){
		count = count+1;
		return count;
	}

	return counter;   // return the counter function 
}



var doCount = makeCounter();

console.log(doCount());  //1   // this second way we got it to work 
console.log(doCount());   //2
console.log(doCount());  //3

// We call makeCounter, which creates a
// counter function and returns it along with an
// environment containing the free variable, count.
// In other words, it creates a closure.

// When we call makeCounter, we get back a closure: a function with an
// environment.

// We call makeCounter, which creates a
// counter function and returns it along with an
// environment containing the free variable, count.
// In other words, it creates a closure. The function
// returned from makeCounter is stored in doCount.
// 2 ) We call the function doCount. This executes the
// body of the counter function.
// 3 ) When we encounter the variable count, we look it
// up in the environment, and retrieve its value. We
// increment count, save the new value back into
// the environment, and return that new value to
// where doCount was called.