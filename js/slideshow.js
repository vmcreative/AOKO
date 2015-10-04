//NOVA SKIN

var p = [];
	p[0] =	"#mahogany";
	p[1] =	"#laurel";
	p[2] =	"#maple";
	p[3] =	"#rosewood";
	p[4] =	"#redCedar";
	p[5] =	"#cherry";

function revealSlide1() {
			$(p[1]+","+p[2]+","+p[3]+","+p[4]+","+p[5]).fadeOut();
			$(p[0]).fadeIn();
			document.getElementById("sSelection").innerHTML="Mahogany";
};
function revealSlide2() {
			$(p[0]+","+p[2]+","+p[3]+","+p[4]+","+p[5]).fadeOut();
			$(p[1]).fadeIn();
			document.getElementById("sSelection").innerHTML="Laurel";
};
function revealSlide3() {
			$(p[0]+","+p[1]+","+p[3]+","+p[4]+","+p[5]).fadeOut();
			$(p[2]).fadeIn();
			document.getElementById("sSelection").innerHTML="Maple";
};
function revealSlide4() {
			$(p[0]+","+p[1]+","+p[2]+","+p[4]+","+p[5]).fadeOut();
			$(p[3]).fadeIn();
			document.getElementById("sSelection").innerHTML="Rosewood";
};
function revealSlide5() {
			$(p[0]+","+p[1]+","+p[2]+","+p[3]+","+p[5]).fadeOut();
			$(p[4]).fadeIn();
			document.getElementById("sSelection").innerHTML="Red Cedar";
};
function revealSlide6() {
			$(p[0]+","+p[1]+","+p[2]+","+p[3]+","+p[4]).fadeOut();
			$(p[5]).fadeIn();
			document.getElementById("sSelection").innerHTML="Cherry";
};
