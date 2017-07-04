document.querySelector(".menu-hamburger").addEventListener(
	"click", function() { toggleVisibility(".menu-nav"); });

function toggleVisibility(selector) {
	var element = document.querySelector(selector);
	if(element.style.display == "block") {
		element.style.display = "none";
	} else {
		element.style.display = "block";
	}
}