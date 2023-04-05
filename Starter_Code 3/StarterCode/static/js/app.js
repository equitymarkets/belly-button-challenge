let url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

d3.selectAll("h1").style("color", "red")

d3.json(url).then(function(data) {
  let dropdownData = data.names;
  let dropdown = d3.select("#selDataset");
  let options = dropdown.selectAll("option").data(dropdownData)
    .enter().append("option").text(function(d) { console.log(d); return d; });
  var sample_values = [];
  var otu_ids = [];
  let trace1 =
    {
      x_values: ['hello', 'hola', 'bonjour'],
      y_labels: [30, 40, 50],
      type: 'bar'
    }
    Plotly.newPlot('bar', trace1);
    
  //   Plotly.newPlot('bar', chart_data);
  let sample_value = d3.select("option").text();

})
function updatePlotly() {
  



}
