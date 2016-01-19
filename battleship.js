
if (myNum = NaN){
	myNum = 0;
}  // wrong code 


// Any sensible person would assume that’s how you test to see if a variable holds a
// NaN value, but it doesn’t work. Why? Well, NaN isn’t equal to anything, not even
// itself, so, any kind of test for equality with NaN is off the table. Instead you need
// to use a special function: isNaN. Like this:

// you got to use isNaN

if (isNaN(myNum)) {
myNum = 0;
}

var a= NaN;

console.log(a); // NaN
console.log(typeof a);  // for some reason it prints NaN



var c = 5/0;

if (c==Infinity){
	console.log(c);  // prints infinity
}


var a = null;

console.log(typeof a);  // object   //  sometimems it prints null 

if (99 == "99"){
	console.log("number equals string");  // prints this number equals string
}
else {
	console.log("number not equals string");
}

if (99 === "99"){
	console.log("number equals string");  
}
else {
	console.log("number not equals string");  // prints this bconz ===
}

// If the two values have different types,
// try to convert them into the same type and then compare them. javascript converts the string to a number 


// remember boolean true converts to 1 and boolean false to zero 



var b = true;

if (b == 1){
	console.log("1 converted to true");  //1 converted to true
}

// CASE#3: Comparing null and undefined.
// Comparing these values evalutates to true. That might seem odd as well, but it’s the rule.
// For some insight, these values both essentially represent “no value” (that is, a variable
// with no value, or an object with no value), so they are considered to be equal.
// undefined == null
// Undefined and null are always equal.

// === strict equality 
// Two values are strictly equal only if they have
// the same t ype and the s ame value.

// JavaScript will try to convert “ninety-nine” to a number,
// and it will fail, resulting in NaN. So the two values won’t be
// equal, and the result will be false.

// There are no <== and >== operators. You can use
// only <= and >=.

// What does it mean to say “banana” <
// “mango”? Well, with strings, you can use alphabetical order
// to know if one string is less than or greater than another.
// Because “banana” begins with a “b” and “mango” with an “m”,
// “banana” is less than “mango” because “b” comes before “m”
// in the alphabet. And “mango” is less than “melon” because,
// while the first letters are the same, when we compare the
// second letters, “a” comes before “e”.
// This alphabetical comparison can trip you up, however; for
// instance, “Mango” < “mango” is true, even though you might
// think that “M” is greater than “m” because its “M” is capitalized.
// The ordering of strings has to do with the ordering of the
// Unicode values that are used to represent each character
// in the computer (Unicode is a standard for representing
// characters digitally), and that ordering might not always be
// what you expect! For all the details, try googling “Unicode”.
// But most of the time, the basic alphabetical ordering is all you
// need to know if one string is less than or greater than another

// When it comes the other arithmetic operators—like multiplication, division and subtraction—
// JavaScript prefers to treat those as arithmetic operations, not string operations.

// var order = 1 + 2 + " pizzas";
// you’ll get “3 pizzas”, not "12 pizzas" because, moving left to right, 1
// is added to 2 first (and both are numbers), which results in 3. Next
// we add 3 and a string, so 3 is converted to a string and concatenated
// with "pizza". To make sure you get the results you want, you can
// always use parentheses to force an operator to be evaluated first:
// var order = (1 + 2) + " pizzas";
// ensures you’ll get 3 pizzas, and
// var order = 1 + (2 + " pizzas");
// ensures you’ll get 12 pizzas.


// There’s a function that does this named Number (yes, it has a
// uppercase N). Use it like this:
// var num = 3 + Number("4");
// This statement results in num being assigned the value 7. The
// Number function takes an argument, and if possible, creates a
// number from it. If the argument can’t be converted to a number,
// Number returns.... wait for it..... NaN.


