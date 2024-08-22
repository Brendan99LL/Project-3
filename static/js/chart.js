// Function to build charts based on selected filters
function buildCharts() {
    d3.csv("Resources/cleaned_covid_data.csv").then((data) => {

        // Get selected filter values
        let selectedYear = d3.select("#selDataset1").property("value") || "all";
        let selectedMonth = d3.select("#selDataset2").property("value") || "all";
        let selectedState = d3.select("#selDataset3").property("value") || "all";

        // Filter the data based on the selected filters
        let filteredData = data.filter(d => 
            (selectedYear === "all" || d.Year === selectedYear) &&
            (selectedMonth === "all" || d.Month === selectedMonth) &&
            (selectedState === "all" || d.State === selectedState)
        );

        // Aggregate data for the bar chart (e.g., sum the number of COVID-19 deaths by state)
        let aggregatedData = Array.from(
            d3.rollup(filteredData, v => d3.sum(v, d => +d["COVID-19 Deaths"]), d => d.State),
            ([key, value]) => ({ State: key, Deaths: value })
        );

        // Sort the data to get top 5 and bottom 5 states
        aggregatedData.sort((a, b) => b.Deaths - a.Deaths);

        // Get top 5 states for bar1
        let top5Data = aggregatedData.slice(0, 5);

        // Get bottom 5 states for bar2
        let bottom5Data = aggregatedData.slice(-5);

        // Prepare data for bar1
        let statesTop5 = top5Data.map(d => d.State);
        let deathsTop5 = top5Data.map(d => d.Deaths);
        statesTop5.reverse();
        deathsTop5.reverse();

         // Prepare data for bar2
        let statesBottom5 = bottom5Data.map(d => d.State);
        let deathsBottom5 = bottom5Data.map(d => d.Deaths);

        // Build Bar Chart for top 5 states (sorted in descending order)
        var barDataTop5 = [
            {
                y: statesTop5,
                x: deathsTop5,
                type: "bar",
                orientation: "h",
            }
        ];

        var barLayoutTop5 = {
            title: "Top 5 States by COVID-19 Deaths",
            margin: { t: 30, l: 150 }
        };

        // Render the Bar Chart in the 'bar1' div
        Plotly.newPlot("bar1", barDataTop5, barLayoutTop5);

        // Build Bar Chart for bottom 5 states
        var barDataBottom5 = [
            {
                y: statesBottom5,
                x: deathsBottom5,
                type: "bar",
                orientation: "h",
            }
        ];

        var barLayoutBottom5 = {
            title: "Bottom 5 States by COVID-19 Deaths",
            margin: { t: 30, l: 150 }
        };

        // Render the Bar Chart in the 'bar2' div
        Plotly.newPlot("bar2", barDataBottom5, barLayoutBottom5);

        // Helper function to convert month names to numbers
        const monthToNumber = (month) => {
            const months = {
                "January": 1, "February": 2, "March": 3, "April": 4, 
                "May": 5, "June": 6, "July": 7, "August": 8, 
                "September": 9, "October": 10, "November": 11, "December": 12
            };
            return months[month] || 0;
        };

        // Aggregate data for the time series chart (by year and month)
        let timeSeriesData = Array.from(
            d3.rollup(filteredData, v => d3.sum(v, d => +d["COVID-19 Deaths"]), d => d.Year, d => d.Month),
            ([year, months]) => ({
                Year: year,
                Months: Array.from(months, ([month, deaths]) => ({ Month: month, Deaths: deaths }))
            })
        );

        // Prepare data for time series chart
        let years = timeSeriesData.map(d => d.Year);
        let lines = years.map(year => {
            let monthData = timeSeriesData.find(d => d.Year === year).Months;
            // Sort months by numeric value
            monthData.sort((a, b) => monthToNumber(a.Month) - monthToNumber(b.Month));
            return {
                x: monthData.map(d => d.Month),
                y: monthData.map(d => d.Deaths),
                type: "line",
                mode: "lines+markers",
                name: year
            };
        });

        // Build Time Series Chart
        var timeseriesLayout = {
            title: "COVID-19 Deaths over Time",
            xaxis: { title: "Month" },
            yaxis: { title: "Deaths" },
            margin: { t: 30, l: 150 }
        };

        // Render the Time Series Chart in the 'line1' div
        Plotly.newPlot("line1", lines, timeseriesLayout);
    });
}

// Function to set default filter values
function setDefaultFilters() {
    d3.select("#selDataset1").property("value", "all");
    d3.select("#selDataset2").property("value", "all");
    d3.select("#selDataset3").property("value", "all");
}

// Function for event listener
function optionChanged() {
    buildCharts();
}

// Function to initialize the dashboard
function init() {
    setDefaultFilters();
    buildCharts();
}

// Initialize the dashboard
init();
