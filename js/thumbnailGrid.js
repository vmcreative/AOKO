$(function(){

var thumbClass = "thumbnail col col-2-6 col-3-4 col-4-3 hvr-grow-rotate";
var thumb = [
	"images/products/qwer.png",
	"images/products/asdf.png",
	"images/products/zxcv.png"
];
var p = [];
			//NAME				ID			THUMBNAIL	LINK
	p[0] = 	["project_title",	"#p-1",		thumb[0]	];
	p[1] = 	["project_title",	"#p-2",		thumb[1]	];
	p[2] = 	["project_title",	"#p-3",		thumb[2]	];
	p[3] = 	["project_title",	"#p-4",		thumb[0]	];
	p[4] = 	["project_title",	"#p-5",		thumb[1]	];
	p[5] = 	["project_title",	"#p-6",		thumb[2]	];
	p[6] = 	["project_title",	"#p-7", 	thumb[0]	];
	p[7] = 	["project_title",	"#p-8", 	thumb[1]	];
	p[8] = 	["project_title",	"#p-9",		thumb[2]	];
	p[9] = 	["project_title",	"#p-10",	thumb[0]	];
	p[10] = ["project_title",	"#p-11",	thumb[1]	];
	p[11] = ["project_title",	"#p-12",	thumb[2]	];

for (var i = 0; i < p.length; i++) {
	$(p[i][1]).attr("href", p[i][3])
	$(p[i][1]).attr("class", thumbClass)
	$(p[i][1] += " img").attr("src", p[i][2]);
};

});