
window.onload = init;

function init(){

	var images = document.getElementsByTagName("img");

	for (var i =0; i < images.length ; i++){
		images[i].onmouseover  = changeImg;
	}
}

function changeImg(eventObj){
	// get single image
	var img = eventObj.target;
	//var name = img.src;
	//console.log(name); //http://localhost/rejuvenate/headfirst-Js/one.jpg
	var name = img.id;
	name = name + "blur.jpg";
	img.src = name;
	img.onmouseout = reblur;
	setTimeout(reblur, 3000, img);   // im passing img to figure out what image to be reverted back  =  3rd attribute 
}

function reblur(eventObj){
	var img = eventObj.target;
	var id = img.id;
	var name = id+".jpg";
	img.src = name;
}