// jQuery allows us to grab an empty div dom and place a graph in it
var url = 'https://cdn.rawgit.com/jmhol9/excel-to-html-starter/master/nba-team-stats.json'

$.ajax(url).then(function(data){
	var seasonsArray = data.map(function(dataObj){
		return dataObj.season;

	});

	var seasonsArray_sort = seasonsArray.reverse()
	console.log(seasonsArray_sort)
	console.log(seasonsArray.reverse())
	var pointsArray = data.map(function(dataObj){
		return dataObj.points;
	});


	$("#chart-01").highcharts({
	      chart: {
	        type: "line",
	      },
	      title: {
	          text: 'NBA Average Points over the last 37 Seasons',
	      },
	      subtitle: {
	          text: 'Late 90s and Early 2000s have the lowest points',
	      },
	      xAxis: {
	          categories: seasonsArray.reverse()
	                },
	      yAxis: {
	          title: {
	              text: 'Satisfaction Level'
	          }
	      },
	      series: [{
	          name: 'Average Points',
	          data: pointsArray.reverse()
	      }]
	  }
);

});


// $(".article__title").text('New Title with jQuery');
