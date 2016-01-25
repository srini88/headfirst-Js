

var timerObj = setInterval(timeFunc, 1000);

function timeFunc(){
	var date = new Date();   
	coords.innerHTML = date;  //Sun Jan 24 2016 19:09:57 GMT-0600 (Central Standard Time)
	//coords.innerHTML = date.toLocaleString();  //1/24/2016, 7:09:05 PM
}

var t = document.getElementById("stopTime");
t.onclick = clearTime;

function clearTime(){
	clearInterval(timerObj);
}