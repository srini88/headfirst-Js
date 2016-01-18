// javascript array methods 

// Converting Arrays to Strings
// The JavaScript method toString() converts an array to a string of (comma separated) array values.
// var fruits = ["Banana", "Orange", "Apple", "Mango"];

// var str = fruits.toString();
// console.log(str);

//Banana,Orange,Apple,Mango

// The join() method also joins all array elements into a string.

// It behaves just like toString(), but in addition you can specify the separator:

// var fruits = ["Banana", "Orange", "Apple", "Mango"];

// // var str = fruits.join("*"); // same as below 
// var str = fruits.join('*');
// console.log(str);


// When you work with arrays, it is easy to remove elements and add new elements.

// This is what popping and pushing is:

// Popping items out of an array, or pushing items into an array.
// The pop() method removes the last element from an array:
// var fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.push("kiwi");

// console.log(fruits); //["Banana", "Orange", "Apple", "Mango", "kiwi"]
// fruits.pop();
// console.log(fruits);  //["Banana", "Orange", "Apple", "Mango"]

//The push() method returns the new array length:
// var fruits = ["Banana", "Orange", "Apple", "Mango"];

// var x = fruits.push("jackfruit");
// console.log(x);  // prints 5

// Shifting is equivalent to popping, working on the first element instead of the last.

// The shift() method removes the first element of an array, and "shifts" all other elements one place up.

// var fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.shift();
// console.log(fruits);  //["Orange", "Apple", "Mango"]


// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:


// var fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.unshift("kiwi");
// console.log(fruits);  //["kiwi", Orange", "Apple", "Mango"]

// The shift() method returns the string that was "shifted out".

// The unshift() method returns the new array length.


// Since JavaScript arrays are objects, elements can be deleted by using the JavaScript operator delete:
// Using delete on array elements leaves undefined holes in the array. Use pop() or shift() instead.
// var fruits = ["Banana", "Orange", "Apple", "Mango"];

// delete fruits[0];
// console.log(fruits); //[1: "Orange", 2: "Apple", 3: "Mango"]
// console.log(fruits[0]);  //undefined

// need to learn more js functions














