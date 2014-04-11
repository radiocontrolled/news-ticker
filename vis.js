var w = window.innerWidth/1.2;
var h = window.innerHeight/1.5;

var svg = d3.select("article")
			.append("svg")
			.attr({
				width:w,
				height:h
			})
		
//get the latest Guardian articles 
d3.jsonp("http://content.guardianapis.com/search?&api-key=qcpra5vyaq7srabthtyvhhxs&callback=vis"); 

function vis(data){
	
	var datum = [data.response.results[0]];
	
	var redraw = function(foo){
		var tickerItems = svg.selectAll("text")
			.data(foo, function(d) { return d; })
			
		
		tickerItems
			.enter()
			.append("text")
			.text(function(d){
				return d.webTitle;
			})
			.attr({
				"x":10,
				"y":function(d,i){
	      			return 100;
	      			}
			})
		
		
		tickerItems
			.transition()
				.attr("transform", "translate(" + w + ")")
				.style("opacity", 0)
				.ease("linear")
				.duration(3000)
				.remove();		
	};
	
	redraw(datum);


	setInterval(function() {
		 	var random = Math.floor(Math.random()*data.response.results.length);
		 	random = [data.response.results[random]];
		 	
		 	redraw(random);
		 		
		 
		}, 2500);
		

};
	

	