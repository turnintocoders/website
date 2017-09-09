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

function meetupLinks() {
	return document.querySelectorAll('[data-meetup-event]');
}

function updateMeetupDetails(jsonp) {
	var meetupURL = jsonp.data[0].link;
	var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	var date = new Date(jsonp.data[0].time)
	var meetupDate = date.toLocaleDateString('it-IT', options);
	var meetupPlaceholders = meetupLinks();
	for (var i in meetupPlaceholders ) {
		meetupPlaceholders[i].innerHTML = meetupDate;
		meetupPlaceholders[i].href = meetupURL;
	}
}

function getMeetupData() {
	if (meetupLinks().length == 0) {
		return;
	}
	var script = document.createElement('script');
	script.src = 'http://api.meetup.com/turn-into-coders/events' + '?callback=updateMeetupDetails';
	document.getElementsByTagName('body')[0].appendChild(script);
}
getMeetupData();

