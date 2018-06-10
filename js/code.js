window.onload = function(){ 
	document.getElementById("loading").style.visibility = "invisible";
	document.getElementById("loading").style.opacity = "0";
	setTimeout(showBody, 1000);
}

function showBody() {
	for(var i = 0; i < document.getElementsByTagName("section").length; i++) {
		document.getElementsByTagName("section")[i].style.visibility = "visible";
		document.getElementsByTagName("section")[i].style.opacity = "1";
	}
	document.getElementsByTagName("header")[0].style.visibility = "visible";
}