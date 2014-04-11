var w = window.innerWidth/1.2;
var h = window.innerHeight/1.5;
var datum;
var svg = d3.select("article")
			.style("margin", 400)
			.append("svg")
			.attr({
				width:w,
				height:h
			});
		
//get the latest Guardian articles 
d3.jsonp("http://content.guardianapis.com/search?&api-key=qcpra5vyaq7srabthtyvhhxs&callback=vis"); 

function vis(data){
	
	datum = [data.response.results[0]];
	
	var redraw = function(foo){
		var tickerItems = svg.selectAll("text")
			.data(foo, function(d) { return d; });
		
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
			});
		
		
		tickerItems
			.transition()
			.attr("transform", "translate(" + w + ")")
			.ease("linear")
			.duration(5000)
			.remove();		
	};
	
	redraw(datum);

	var counter = 0;

	setInterval(function() {
						
			if (counter < data.response.results.length -1 ){
				counter++;
				random = [data.response.results[counter]];
				redraw(random);
			}
			else {
				counter = data.response.results.length;
				redraw(datum);
			}
		}, 5070);
}
	

	