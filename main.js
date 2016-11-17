// changeText(".article__title", "Great New Title");
//
// function changeText(selector, newText) {
//   var el = $(selector);
//   console.log(el.text());
//   el.text(newText);
// }

// $("#chart-01").highcharts({
//         chart: {
//           type: "column",
//         },
//         title: {
//             text: 'Customer Satisfaction',
//         },
//         subtitle: {
//             text: 'Source: Scientific Survey',
//         },
//         xAxis: {
//             categories: ['Pisticci', 'Jin Ramen', 'Bettolona', 'Island Burger', 'Paddys']
//         },
//         yAxis: {
//             title: {
//                 text: 'Satisfaction Level'
//             }
//         },
//         series: [{
//             name: 'Restaurant',
//             data: [7.0, 6.9, 9.5, 9.1, 18.2]
//         }]
//     });

$.ajax("https://rawgit.com/jmhol9/excel-to-html-starter/master/nba-team-stats.json")
  .then(logResponse);

function logResponse(response) {
  console.log(response);
}
// var dataSet = $.ajax("./nba-team-stats.json");
// console.log(dataSet);
