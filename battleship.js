var access1 = document.getElementById("code1");  // getting the whole elemnt 

access1.style.color = "blue";
var html = access1.innerHTML;

var abc = document.getElementById("uno");
// The innerHTML property sets or returns the HTML content (inner HTML) of an element.
console.log(access1);  //<p id="code1">ealgle1</p>

console.log(html);   //ealgle1
console.log(abc);  
// <ul id="uno">
// 	<li>ONE</li>
// 	<li>TWO</li>
// 	<li>THREE</li>

// </ul>
console.log(abc.innerHTML);


// 	<li>ONE</li>
// 	<li>TWO</li>
// 	<li>THREE</li>

// </ul>

// document node at the top 

// getElementById(id);
// getElementsByClassName(names);
// getElementsByTagName(name);