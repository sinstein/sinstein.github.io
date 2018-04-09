var links = document.getElementsByClassName("nav-action");
var sections = document.getElementsByClassName("section-content");
var timelinePoints = document.getElementsByClassName("timeline-point");
var timelineLine = document.getElementById("timeline-line");

for(var i = 0; i < links.length; i++) {
	links[i].addEventListener("click", show_section, false);
}


for(var i = 0; i < timelinePoints.length; i++) {
	timelinePoints[i].style.left =  parseInt(timelineLine.offsetWidth) * parseInt(timelinePoints[i].dataset.location) / 100 + "px"
	timelinePoints[i].addEventListener("mouseover", show_timeline_text, false)
}

function show_section(e) {
	e.stopPropagation();
	e.preventDefault();

	section_to_show = this.getAttribute("href");
	for(var i = 0; i < sections.length; i++) {
		sections[i].classList.add("hide");
	}
	document.getElementById(section_to_show).classList.remove("hide");

	for(var i = 0; i < links.length; i++) {
		links[i].classList.remove("selected");
	}
	this.classList.add("selected");
}

function show_timeline_text(e) {
	text_to_show = this.dataset.text;
	var text_element = document.getElementById("visibile-text");
	text_element.classList.remove("hide");
	text_element.innerHTML =  text_to_show;
	text_element.style.left = this.style.left;
}