// var isTrue = true;
// var status = (isTrue==false);  //true ==false results in false and gets assigned to status 

// console.log(status); //prints false

// function doIt(param){
// 	param=2;
// 	console.log(param);   // param gets assigned 2 , before it was five when we passed
// }

// var test=5;
// doIt(test); 
// //console.log(test);


// function makeTea (cups, people){
// 	console.log("making tea with cups: " + cups + " for people: "+ people);
// }

// makeTea(2,3); //making tea with cups: 2 for people: 3

// makeTea(2); //making tea with cups: 2 for people: undefined


// makeTea (2, "nigga", 5);  //making tea with cups: 2 for people: nigga, ignores the extra arguments 
// calculating area of circle

// function areaCircle (r){
// 	var area = Math.PI * r * r;   // used Math.PI
// 	return area;
// }

// var calc = areaCircle(2);
// console.log(calc);

// // dont need to have var keyword infront of it explicitly, the function  does the work 

// // global variables life ends as the page goes away, even if you reload the same page, all your global variables are destryoed and then recreated intehh newly loadaded page 

// points = 0 ;  by default makes it global  -- since no var in front

// var pvs = 5;
// function changePvs (){   // you are shadowing your golbal , any references to pvs within the function refer to the local variable and not the global 
// 	// global variable is in the shadow of the local variable , we cannt see global because local version is in our way 
// 	var pvs = 3;
// 	console.log(pvs);
// }
// changePvs();
// console.log(pvs);
// // prints 3 and 5 

// Math.random()  function attached to an object

// primitive type - strings numbers and booleans 

// var arr = ["vanilla", "butter", "pecans", "chocolate"];

// console.log(arr.length);


// var arr = ["vanilla", "butter", "pecans", "chocolate"];

// console.log(arr);'

// var arr1 = ["a", "b", "c"];
// var arr2  = [1, 2, 3];

// function rando(){

// 	var ran1 = Math.floor(Math.random()* arr1.length);
// 	var ran2 = Math.floor(Math.random()* arr2.length);
// 	var phase = arr1[ran1] + arr2[ran2];
// 	//alert(phase);	
// 	return phase;
// }

// console.log(rando());  // prints a1, b3, etc...

//all the values in the array need not be same tyope

// console.log(arr1[5]);    - you get undefined

// printing array using forloop
// var arr2  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function printArr(){

// 	for (var i=0; i <arr2.length-1 ; i++){
// 		console.log(arr2[i]);

// 	}

// }

// printArr();


// printing array using while loop 
// var arr2  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function printArr(){

// 	var i = 0;

// 	while(i < arr2.length){
// 		console.log(arr2[i]);
// 		i++;
// 	}


// }

// printArr();
// var arr2  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var i=0;
// while (arr2[i] == 3) {    // wont even go into this bcoz the first condition itself is false 
// 	console.log(arr2[i]); 
// 	i=i+1;	
// 	if (i == 6) break;
// }


var arr2  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var i=0;
while (arr2[i] != 3) {    // wont even go into this bcoz the first condition itself is false 
	console.log(arr2[i]); 
	i=i+1;	
	//if (i == 6) break;
}

//prints 1 and 2; 











