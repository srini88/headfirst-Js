
// Return a random number between 0 (inclusive) and 1 (exclusive):

// Math.random();
// The result could be:

// 0.700667236931622
console.log(Math.random());
// random number between 1 and 10 
console.log(Math.floor(Math.random() * 10 )+1);
// Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:
console.log(Math.min(4, 5, 9));
console.log(Math.max(4, 5, 9));

console.log(Math.ceil(4.5));
console.log(Math.floor(4.5));




// The parseInt() function parses a string and returns an integer.

// The radix parameter is used to specify which numeral system to be used, for example, a radix of 16 (hexadecimal) indicates that the number in the string should be parsed from a hexadecimal number to a decimal number.


// The radix is another name for base, i.e. 2 for binary, 10 for decimal, 16 for hexadecimal

// If the radix parameter is omitted, JavaScript assumes the following:

// If the string begins with "0x", the radix is 16 (hexadecimal)
// If the string begins with "0", the radix is 8 (octal). This feature is deprecated
// If the string begins with any other value, the radix is 10 (decimal)
// Note: Only the first number in the string is returned!

// Note: Leading and trailing spaces are allowed.

// Note: If the first character cannot be converted to a number, parseInt() returns NaN.

// Note: Older browsers will result parseInt("010") as 8, because older versions of ECMAScript, (older than ECMAScript 5, uses the octal radix (8) as default when the string begins with "0". As of ECMAScript 5, the default is the decimal radix (10).

//var a = parseInt(prompt("enter number between 5 and 7"),10);   // it takes as a string not number, so use parseInt


// pronmt always returns a string, not a number - so converting it 

//var a = Number(prompt("enter number between 5 and 7"),10); 


// var b ;

// console.log(b);  // prints undefined, if you dont provide an initial value in JS it takes undefined 

switch(a)
{
	case 5:  
	console.log('you entered 5');
	break;

	case 6: 
	console.log('you entered 6');
	break;

	case 7: 
	console.log('you entered 7');
	break;

	default:
	console.log('you didnt enter between 5 and 7');  // in the prompt when you click cancel, it is printing the default 
}
// parseInt("123hui")
// returns 123

// Number("123hui")
// returns NaN

// In other words parseInt() parses up to the first non-digit and returns whatever it had parsed. Number() wants to convert the entire string into a number, which can also be a float BTW.

// Well, they are semantically different, the Number constructor called as a function performs type conversion and parseInt performs parsing,

