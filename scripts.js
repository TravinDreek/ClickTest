var active = false;
var clicks;
var button = document.getElementById("click");
var info = document.getElementById("info");
var testTime = 10;

function Click() {
	if (active == false){
		active = true;
		button.innerText = "START"
		clicks = 0;
		button.className = "button button-primary button-glow button-rounded button-giant";
		info.innerHTML = 'Time: <u onclick="Custom()">' + testTime + 's</u>'
	}
	else{
		if(clicks == 0){
			clearTimeout(t);
			var t = setTimeout("Timeout()", testTime * 1000);
			button.innerText = "CLICK"
		}
		clicks ++;
		info.innerText = "Clicks: " + clicks
	}
}
function Custom() {
	var input = prompt("Input a integer:","10");
	if (!(/(^[1-9]\d*$)/.test(input))) { 
		alert("Invaild integer!");
　　}else { 
		testTime = input;
		info.innerHTML = 'Time: <u onclick="Custom()">' + testTime + 's</u>'
　　}
}
function Timeout() {
	button.className = "button button-glow button-rounded button-highlight";
	button.innerText = "RESTART";
	info.innerText = "Avg: " + clicks / testTime + " CPS"
	active = false;
	alert("Average: " + clicks / testTime + " CPS");
}
