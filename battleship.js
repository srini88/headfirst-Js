
// now we use setAttribute 


var modify = document.getElementById("drinks");
modify.setAttribute("class", "redText");

// i;m setting class attribute on the div elemnt drinks  to redText, which is defined in the CSS 

// And we use its setAttribute method
// to either add a new attribute or
// change an existing attribute
// The method takes two arguments,
// the name of the attribute you
// want to set or change...


// getAttribute method that you can call to get
// the value of an HTML element’s attribute
console.log(modify.getAttribute("class")); // prints redText

// always check for null before you get the attribute 