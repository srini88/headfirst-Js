// // sparce array 
// var arr1 = [2, 4, 5];
// arr1[9] = 10;


// // to check for undefined and priint onoly the items that are present 
// for (var i = 0; i <= arr1.length ; i++){

// 	if (arr1[i] != undefined){
// 		console.log(arr1[i]);
// 	}
// }

// another way to create an array new Array

// var arr2 = new Array(5);
// arr2.push(4);
// console.log(arr2);  // prints [5: 4]  - 5 th key value 4


// var arr3 = [];

// console.log(arr3);

// array literal notation is where you define a new array using just empty brackets. In your example:

// var myArray = [];
// var a = [],            // these are the same
//     b = new Array(),   // a and b are arrays with length 0

//     c = ['foo', 'bar'],           // these are the same
//     d = new Array('foo', 'bar'),  // c and d are arrays with 2 strings

//     // these are different:
//     e = [3],             // e.length == 1, e[0] == 3
//     f = new Array(3);   // f.length == 3, f[0] == undefined


// working with objects 


// var car = {
// 	make:"infiniti",
// 	model : "Q50",
// 	year : 2015
// };


// console.log(car); //Object {make: "infiniti", model: "Q50", year: 2015}
// console.log(car.make);


// // in oo we thingk about a problem in objects 
// // difference between making a toaster and using a toaster object 

// // adding a new property

// car.type = "gasoline"; 
// console.log(car);  //Object {make: "infiniti", model: "Q50", year: 2015, type: "gasoline"}

// car.type = "electric";// Object {make: "infiniti", model: "Q50", year: 2015, type: "electric"}
// console.log(car);


// // to delete a property  use delete keyword

// delete car.type;  // when you are deleting a property, you are not just deleting the value of the property , you are deleting the property itself 
// console.log(car);  //Object {make: "infiniti", model: "Q50", year: 2015}


// // the result of the expression car.type will be undefined if car does nto have a property named type 

// console.log(car.type);  //undefined since we already deleted 

// variables dont hold objects , they hold reference to an obj 

// pass by value is pass sby copy 


// passing objects to and fro
var car = {
	make:"infiniti",
	model : "Q50",
	year : 2015
};

// function passOO(car){

// 	car.type = "electric";
// };

// var car2 = car;
// console.log(car);   // both same
// console.log(car2);  // both same 

// passOO(car);

// // so if you change a property of the object in a function, you are changing the property in the original object 
// console.log(car);     // both got changed , evenn though I changed only car 
// console.log(car2);
car.drive =  function() {
	console.log("car is being driven");
};
// tghe above fn added a ton of stuff to our objec t

// drive: ()
// arguments: null
// caller: null
// length: 0
// name: ""
// prototype: car.drive
// __proto__: ()
// <function scope>
// make: "infiniti"
// model: "Q50"
// year: 2015
// __proto__: Object

//console.log(car);

console.log(car);


car.drive();  //car is being driven