lets you add behaviour to webpages

http://developer.telerik.com/featured/a-guide-to-javascript-engines-for-idiots/

JavaScript is loosely typed (you don’t have to define the datatype of variables) while Java is not. JavaScript is mainly executed in a browser, where as Java can be used to create stand alone applications. Java has a much wider area of application as compared to JavaScript which largely lives inside the browser.

JavaScript is Object Oriented but unlike other programming language that implement inheritance via classes, JavaScript does so via prototypes. 

A JavaScript engine is a virtual machine[citation needed] which interprets and executes JavaScript. Although there are several uses for a JavaScript engine, it is most commonly used in web browsers

A ‘JavaScript engine’ is often termed a type of virtual machine. A ‘virtual machine’ refers to the software-driven emulation of a given computer system. There are many types of virtual machines, and they are classified by how precisely they are able to emulate or substitute for actual physical machines.

The basic job of a JavaScript engine, when all is said and done, is to take the JavaScript code that a developer writes and convert it to fast, optimized code that can be interpreted by a browser or even embedded into an application. JavaScriptCore, in fact, calls itself an “optimizing virtual machine”.

More precisely, each JavaScript engine implements a version of ECMAScript, of which JavaScript is a dialect. As ECMAScript evolves, so do JavaScript engines. The reason there are so many different engines is each one is designed to work with a different web browser, headless browser, or runtime like Node.js.

Google’s V8 engine, written in C++, also compiles and executes JavaScript source code, handles memory allocation, and garbage collects leftovers. Its design consists of two compilers that compile source code directly into machine code:


with modern browsers,   with javascript you now have the conveniences of a scripting language while enjoing the perfomrance of a compiled language 


ecma script serves as the standard language definition for all javascipt mplementations 

ECMAScript is a trademarked[1] scripting language specification standardized by Ecma International in ECMA-262 and ISO/IEC 16262. Well-known implementations of the language, such as JavaScript, JScript and ActionScript are widely used for client-side scripting on the Web.


JavaScript is prototype-based with first-class functions, making it a multi-paradigm language, supporting object-oriented,[8] imperative, and functional programming styles.

It has an API for working with text, arrays, dates and regular expressions, but does not include any I/O, such as networking, storage or graphics facilities, relying for these upon the host environment in which it is embedded.

JavaScript uses prototypes where many other object-oriented languages use classes for inheritance.[41] It is possible to simulate many class-based features with prototypes in JavaScript


with javascript you write statements , each statement specifies a small part of a computation and together all the sttaements create the behaviour of th epage

loops in js: while, for, for in , forEach 


document.write is used on an HTML page to display text on the screen.

A more accurate and safer syntax is window.document.write( )

document.write is not recommended in modern programming because it has some issues, one of them being that it rewrites the page. It is a bit outdated. However it is still used a lot. innerHTML might be an alternative if done carefully.

DW executed after the page has finished loading will overwrite the page, or write a new page, or not work
DW executes where encountered: it cannot inject at a given node point

DW is effectively writing serialised text which is not the way the DOM works conceptually, and is an easy way to create bugs (.innerHTML has the same problem)

http://stackoverflow.com/questions/802854/why-is-document-write-considered-a-bad-practice

console.log is not really part of the JavaScript standard. It is an addition to JavaScript when JavaScript is used on a browser, specifically on a JavaScript console. (not viewd on the webpage, you have to see it in the developer tools)

http://stackoverflow.com/questions/436411/where-is-the-best-place-to-put-script-tags-in-html-markup


arguments when called a function, 
parameters in a function definition