window.onload = function(){ 
	document.getElementById("loading").style.visibility = "invisible";
	document.getElementById("loading").style.opacity = "0";
	setTimeout(showBody, 1000);
}

window.onscroll = function() {
	// var img = document.getElementById("scroll");
	// var scrolltop = window.pageYOffset - getElemDistance(img);
	// img.style.backgroundPosition = scrolltop / 10 - img.offsetWidth/5 + 'px center';
	changeHeader();
	fadeInAndOutSection();
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

function changeHeader() {
	if(window.pageYOffset + document.getElementsByTagName("header")[0].offsetHeight >= window.innerHeight) {
		document.getElementsByTagName("header")[0].style.background = "rgba(0, 0, 0, 0.7)";
	}else {
		document.getElementsByTagName("header")[0].style.background = "rgba(0, 0, 0, 0.04)";
	}

}

function fadeInAndOutSection() {
	for (var i = document.getElementsByClassName("section").length - 1; i >= 0; i--) {
		if(document.getElementsByClassName("section")[i].getBoundingClientRect().top <= window.innerHeight * 1 && document.getElementsByClassName("section")[i].getBoundingClientRect().bottom >= window.innerHeight * 0.07) {
			document.getElementsByClassName("section")[i].style.opacity = "1";
		}else {
			document.getElementsByClassName("section")[i].style.opacity = "0";
		}
	}
}

/*
*
*	Fade in animation when scrolled x distance
*	Header change background when scrolled 100vh-header_height
*	
*
*/