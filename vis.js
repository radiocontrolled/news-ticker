var w = window.innerWidth/1.1;
var h = window.innerHeight/1.5;
var datum;
var svg = d3.select("article")
			.style("margin", 400)
			.append("svg")
			.attr({
				width:w,
				height:h/2
			});
		
//get the latest Guardian articles 
d3.jsonp("http://content.guardianapis.com/search?&callback=vis"); 

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
				"y":function(){
						return h/4;
					}
			});
		
		tickerItems
			.transition()
			.attr("transform", "translate(" + w + ")")
			.ease("linear")
			.duration(7000)
			.remove();		
	};
	
	redraw(datum);

	var counter = 0;

	setInterval(function() {
			counter++;		
			if (counter <= data.response.results.length-1 ){
				random = [data.response.results[counter]];
				redraw(random);
			}
			else if(counter == data.response.results.length){
				counter = 0; 
				random = [data.response.results[counter]];
				redraw(random);
			}
		}, 7070);
}
	

	