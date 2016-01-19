

var x;

console.log(x);   // x is declared, but not defined so it returns undefined


// The type of undefined is undefined. Why? Well
// our logic (work with us here) is this: it isn’t an object, or a number or
// a string or a boolean, or really anything that is defined. So why not
// make the type undefined, too? This is one of those weird twilight
// zones of JavaScript you just have to accept.

console.log(typeof x);  // prints undefined 

var y = 5;

console.log(y);  // 5
console.log(typeof y);   // number

var z = {};
console.log(z);  //Object {}
console.log(typeof z);    //object


var a  = [];
console.log(a); // []
console.log(typeof a);  //object

var str = "im a nigga";
console.log(str);  //im a nigga
console.log(typeof str);  // string 

var arr = [2, 3];
console.log(typeof arr);  // object 


var f = function(){
	return "boo";
}
console.log(f);  // prints the function body
console.log(typeof f); // function


var p = document.getElementById("bd");  // bd not in the DOM

console.log(p);  // when I print it returns null instead of undefined


// There are many
// languages that have the concept of a value that means “no object.”
// And, it’s not a bad idea—take the document.getElementById
// method. It’s supposed to return an object right? So, what happens
// if it can’t? Then we want to return something that says “I would
// have been an object if there was one, but we don’t have one.” And
// that’s what null is.
// You can also set a variable to null directly:
// var killerObjectSomeday = null;
// What does it mean to assign the value null to a variable? How about
// “We intend to assign an object to this variable at some point, but we
// haven’t yet.”

var t = null;
console.log(typeof t);   // prints object 

// Remember, null is intended to represent
// an object that isn’t there.



// NaN

var a = 5/0;
console.log(a);  //Infinity


var b= 0/0;
console.log(b); //NaN

var c = "str" * 50;
console.log(c);  //Nan

var c = "str" + 50;
console.log(c);  //str50

var s = Math.sqrt(4);
console.log(s);  //2 

var p = Math.sqrt(-4);
console.log(p);  //NaN