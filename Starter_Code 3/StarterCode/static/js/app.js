let url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

d3.selectAll("h1").style("color", "red")

d3.json(url).then(function(data) {
  let dropdownData = data.names;
  let dropdown = d3.select("#selDataset");
  let options = dropdown.selectAll("option").data(dropdownData)
    .enter().append("option").text(function(d) { return d; });

})

//link 
//populate dropdown with array
//render unique values











//---------------------------------------------->


//d3.selectAll()