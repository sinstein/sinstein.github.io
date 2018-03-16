var links = document.getElementsByTagName("a");
var sections = document.getElementsByClassName("section-content");

for(var i = 0; i < links.length; i++) {
	links[i].addEventListener("click", show_section, false);
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
