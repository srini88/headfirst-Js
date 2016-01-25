// fly = function(x){
// 	console.log("Im flying "+x+ " times");
// }

// fly(3);

// unlike the function declaration,
// this function doesn’t have a name. Also, the expression results
// in a value that is then assigned to the variable fly. What is that
// value? Well, we’re assigning it to the variable fly and then later
// invoking it, so it must be a reference to a function

// A function reference is exactly
// what it sounds like: a reference
// that refers to a function. You can use a
// function reference to invoke a function
// or, as you’ll see, you can assign them to
// variables, store them in objects, and pass
// them to or return them from functions
// (just like object references).

// Well for one thing you can use it to
// invoke the function:
// myFunctionReference();
// But you can also pass a reference to a
// function or return a reference from a function.
// But, we’re getting a little ahead of ourselves.
// We’ll come back to this in a few pages.

// First of all, you’re right—
// whether you use a function declaration or a function
// expression, you end up with a function. But there are
// some important differences between the two. For one,
// with a declaration, a function is created and setup before
// the rest of the code gets evaluated. With a function expression,
// a function is created as the code executes, at runtime.


// And even though quack was created by a
// function declaration, the value in quack is a
// function reference too, so we can assign it to
// the variable superQuack and invoke it.


// In other words, references are references, no
// matter how you create them (that is, with a
// declaration or an expression)!

// You can assign functions to variables.
// ❏❏ You can pass functions to functions.
// ❏❏ You can return functions from functions.

// They're actually really similar. How you call them is exactly the same, but the difference lies in how the browser loads them into the execution context.

// function declarations loads before any code is executed.

// While function expressions loads only when the interpreter reaches that line of code.

// So if you try to call a function expression before it's loaded, you'll get an error

// But if you call a function declaration, it'll always work. Because no code can be called until all declarations are loaded.

// ex. Function Expression

// There are two ways to define
// a function: with a function
// declaration and with a function
// expression.
//  A function reference is a value that
// refers to a function.
//  Function declarations are handled
// before your code is evaluated.
//  Function expressions are evaluated
// at runtime with the rest of your
// code.
//  When the browser evaluates a
// function declaration, it creates a
// function as well as a variable with
// the same name as the function, and
// stores the function reference in the
// variable.



// alert(foo()); // ERROR! foo wasn't loaded yet
// var foo = function() { return 5; } 
// ex. Function Declaration

// alert(foo()); // Alerts 5. Declarations are loaded before any code can run.
// function foo() { return 5; } 
// As for the second part of your questions.

// var passengers = [ { name: "Jane Doloop", paid: true },
// { name: "Dr. Evel", paid: true },
// { name: "Sue Property", paid: false },
// { name: "John Funcall", paid: true } ];

// for (var i=0; i <passengers.length ; i++){
// 	console.log(passengers[i].name);
// }


// Jane Doloop
// test2.js:59 Dr. Evel
// test2.js:59 Sue Property
// test2.js:59 John Funcall
///// working on sorting functions

// var numArray = [10, 31, 7, 5];

// numArray.sort(ascending);

// // you have to write your own customm function and send it to sort -- sort is JS default 
// function ascending(num1, num2){
// 	if (num1 > num2)
// 		return 1;
// 	if (num1 == num2)
// 		return 0;
// 	else
// 		return -1;
// }
// console.log(numArray); //[5, 7, 10, 31]

var products = [ { name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
{ name: "Orange", calories: 160, color: "orange", sold: 12101 },
{ name: "Cola", calories: 210, color: "caramel", sold: 25412 },
{ name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
{ name: "Lemon", calories: 200, color: "clear", sold: 14983 },
{ name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
{ name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
{ name: "Water", calories: 0, color: "clear", sold: 62123 }
];

console.log("before sorting: ");
printProducts(products);
function printProducts(products) {
	for (var i = 0; i < products.length; i++) {
		console.log("Name: " + products[i].name +
		", Calories: " + products[i].calories +
		", Color: " + products[i].color +
		", Sold: " + products[i].sold);
	}
}

products.sort(byName);

function byName(item1, item2){
	if (item1.name > item2.name)
		return 1;
	if (item1.name == item2.name)
		return 0;
	else
		return -1;
}

console.log("after sorting: ");
printProducts(products);















