//Gauge Chart
function gauge(input) {
    d3.json(url).then(function(data) {
        let sampleGauge = data.metadata;
        let filteredGuage = sampleGauge.filter(function(d) {
            return d.id == input;
        });
        let firstGauge = filteredGuage[0];
        console.log(firstGauge.wfreq)
        const dictGauge = [
            {
            type: "indicator",
            mode: "gauge+number+delta",
            value: firstGauge.wfreq,
            title: { text: "Wash Frequency", font: {size: 22}},
            delta: { reference: 2, increasing: {color: "#3f37c9"}},
            gauge: {
                axis: {range: [null, 9], tickwidth: 1, tickcolor: "#480ca8"},
                bar: {color: "darkblue"},
                bgcolor: "#4cc9f0",
                bordercolor: "gray",
                steps: [
                    { range: [0, 1], color: "#586BA4" },
                    { range: [1, 2], color: "#F5DD90" },
                    { range: [2, 3], color: "586BA4" },
                    { range: [3, 4], color: "#F5DD90" },
                    { range: [4, 5], color: "586BA4" },
                    { range: [5, 6], color: "#F5DD90" },
                    { range: [6, 7], color: "586BA4" },
                    { range: [7, 8], color: "#F5DD90" },
                    { range: [8, 9], color: "586BA4" }
      
                ],

                // threshold: {
                //     line: {color: "red", width: 4},
                //     thickness: 0.80,
                //     value: 4
                // }
                
            }
            }
        
        ];
        var layoutGauge = {
            width: 400,
            height: 280,
            margin: { t: 25, r: 25, l: 25, b: 25 },
            paper_bgcolor: "lavender",
            font: { color: "darkblue", family: "Arial" }
          };
        Plotly.newPlot("gauge", dictGauge,layoutGauge)
    })
}





