let url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// function init(){

// }
// function metadata(){

// }
// function chart() {

// }
// function bubble() {

// }
d3.json(url).then(function(data) {
  let dropdownData = data.names;
  let dropdown = d3.select("#selDataset");
  let options = dropdown.selectAll("option").data(dropdownData)
    .enter().append("option").text(function(d) { console.log(d); return d; });
  console.log(data.names); 
  let dropdownMenu = d3.select("#selDataset");
  let dataset = dropdown.property("value");
  //let dataset = 1276;
  console.log(dataset);

  //data.names = [940, 941, etc. ] , dataset = 940,  
  //testing to locate desired info. (delete)
  if(dataset == data.samples[0].id) {
    console.log(data.samples[0].otu_ids.slice(0,10))
  }
  //array declaration and loop to cycle through set to locate option
  var sample_values_array = [163, 126, 113, 78, 71, 51, 50, 47, 40, 40];
  var otu_ids_array = ['OTU 1167', 'OTU 2859', 'OTU 482', 'OTU 2264',
    'OTU 41', 'OTU 1189', 'OTU 352', 'OTU 189', 'OTU 2318', 'OTU 1977']

  // var sample_values_array = [];
  // var otu_ids_array = []
  // for(let i = 0; i < data.names.length; i++) {
    //  if(data.names[i] == dataset) {
    //   sample_values_array.push(data.samples[i].sample_values.slice(0,10));
    //   otu_ids_array.push(data.samples[i].otu_ids.slice(0,10));

    //  };
   //}
  //Needed for plot!
  console.log(sample_values_array);
  console.log(otu_ids_array);
  // for(var i = 0; i < data.names.length; i++) {
  //   console.log(data.names[i])
  // }
  // console.log(dataset)
  // var sample_values = [];
  // var otu_ids = [];
  var chart = [{
    type: 'bar',
    x: sample_values_array.reverse(),
    y: otu_ids_array,
    orientation: 'h'
  }];
  
  Plotly.newPlot('bar', chart);
    
  //   Plotly.newPlot('bar', chart_data);
  // let sample_value = d3.select("option").text();

})
//function updatePlotly() {
  



//}
