$(function(){

var l = [];
//	ARRAY	NAME			ID				LINK
	l[0] =	["HOME",		"menuLink1",	"index.html"];
	l[1] =	["PRODUCTS",	"menuLink2",	"products.html"];
	l[2] =	["SERVICES",	"menuLink3",	"services.html"];
	l[3] =	["MATERIALS",	"menuLink4",	"materials.html"];
	l[4] =	["ABOUT",		"menuLink5",	"about.html"];
	l[5] =	["GET QUOTE",	"menuLink6",	"get_quote.html"];

for (var i = 0; i < l.length; i++) {
	$("a#"+l[i][1]).attr("href", l[i][2]);
	document.getElementById(l[i][1]).innerHTML = l[i][0];
};

var s = [];
//	ARRAY	NAME			A ID		IMG ID			LINK
	s[0] =	["facebook",	"socImg1",	"socLink1",		"https://www.facebook.com/aoko.co?fref=ts.html"];
	s[1] =	["instagram",	"socImg2",	"socLink2",		"https://instagram.com/aokochicago/"];
	s[2] =	["vimeo",		"socImg3",	"socLink3",		"#"];
	s[3] =	["email",		"socImg4",	"socLink4",		"#"];

for (var i = 0; i < s.length; i++) {
	$("a#"+s[i][2]).attr("href", s[i][3]);
	$("img#"+s[i][1]).attr("src", "images/footer/links/"+s[i][0]+".png");
	$("img#"+s[i][1]).attr("alt", s[i][0])
};

var pgurl = window.location.href.substr(window.location.href
.lastIndexOf("/")+1);
     $("#menuList li a").each(function(){
          if($(this).attr("href") == pgurl)
          $(this).addClass("selected");
     })
});
