var w = window.innerWidth/1.2;
var h = window.innerHeight/1.5;

var svg = d3.select("article")
			.append("svg")
			.attr({
				width:w,
				height:h
			})
			.append("text")
			.text("foo")
			.attr({
				"x":100,
      			"y":100
			})
		