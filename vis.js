var w = window.innerWidth/1.2;
var h = window.innerHeight/1.5;

var svg = d3.select("article")
			.append("svg")
			.attr({
				width:w,
				height:h
			})
		
//get the latest Guardian articles 
d3.jsonp("http://content.guardianapis.com/search?&api-key=qcpra5vyaq7srabthtyvhhxs&callback=doVis"); 

function doVis(data){
				
	var unorderedList = svg.selectAll("text")
		.data(data.response.results)
		.enter()
		.append("text")
		.attr({
			"href": function(d){
				return d.webUrl;
			},
			"x":100,
      		"y":100
		})
		.text(function(d){
			return d.webTitle;
		})	
	

};



	