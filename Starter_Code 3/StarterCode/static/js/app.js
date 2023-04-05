let url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

d3.selectAll("h1").style("color", "green")

d3.json(url).then(function(data) {
  let dropdownData = data.names;
  let dropdown = d3.select("#selDataset");
  let options = dropdown.selectAll("option").data(dropdownData)
    .enter().append("option").text(function(d) { console.log(d); return d; });
  console.log(data.names); 
  let dropdownMenu = d3.select("#selDataset");
  //let dataset = dropdown.property("value");
  let dataset = 1276;
  console.log(dataset);

  // data.names = [940, 941, etc. ] , dataset = 940,  
  //testing to locate desired info. (delete)
  if(dataset == data.samples[0].id) {
    console.log(data.samples[0].otu_ids.slice(0,10))
  }
  //array declaration and loop to cycle through set to locate option
  var sample_values_array = [];
  var otu_ids_array = []
  for(let i = 0; i < data.names.length; i++) {
    if(data.names[i] == dataset) {
      console.log("found it")
    }

  }
  
  // for(var i = 0; i < data.names.length; i++) {
  //   console.log(data.names[i])
  // }
  // console.log(dataset)
  // var sample_values = [];
  // var otu_ids = [];
  // let trace1 =
  //   {
  //     x_values: ['hello', 'hola', 'bonjour'],
  //     y_labels: [30, 40, 50],
  //     type: 'bar'
  //   }
  //   Plotly.newPlot('bar', trace1);
    
  //   Plotly.newPlot('bar', chart_data);
  // let sample_value = d3.select("option").text();

})
function updatePlotly() {
  



}
