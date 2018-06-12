window.onload = function(){ 
	document.getElementById("loading").style.visibility = "invisible";
	document.getElementById("loading").style.opacity = "0";
	setTimeout(showBody, 1000);
}

window.onscroll = function() {
	var img = document.getElementById("scroll");
	console.log(getElemDistance(img));
	var scrolltop = window.pageYOffset - getElemDistance(img);
	img.style.backgroundPosition = scrolltop / 10 - img.offsetWidth/5 + 'px center';
}

function showBody() {
	for(var i = 0; i < document.getElementsByTagName("section").length; i++) {
		document.getElementsByTagName("section")[i].style.visibility = "visible";
		document.getElementsByTagName("section")[i].style.opacity = "1";
	}
	document.getElementsByTagName("header")[0].style.visibility = "visible";
	document.getElementsByTagName("header")[0].style.animation = "header 2s ease-out 1s forwards";
	setTimeout(function() {document.getElementById("loading").style.display = "none";}, 1000);
}

var getElemDistance = function ( elem ) {
    var location = 0;
    if (elem.offsetParent) {
        do {
            location += elem.offsetTop;
            elem = elem.offsetParent;
        } while (elem);
    }
    return location >= 0 ? location : 0;
};

/*
*
*	Fade in animation when scrolled x distance
*	Header change background when scrolled 100vh-header_height
*	
*
*/