var w = window.innerWidth/1.2;
var h = window.innerHeight/1.5;
var headlines;

var svg = d3.select("article")
			.append("svg")
			.attr({
				width:w,
				height:h
			})
		
//get the latest Guardian articles 
d3.jsonp("http://content.guardianapis.com/search?&api-key=qcpra5vyaq7srabthtyvhhxs&callback=doVis"); 

function doVis(data){
				
	headlines = data.response.results;
	
	var i = data.response.results.length; 
	function timer(){
		setTimeout(function() {
			alert("data.response.results[i]");
			i++;
			 
			
		}, 3000);	
	};
	if (i < 10){
				timer();
			}
}




	