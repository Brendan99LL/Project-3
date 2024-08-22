// List of filters and their corresponding columns in the CSV
var filters = [
    { id: "selDataset1", column: "Year" },
    { id: "selDataset2", column: "Month" },
    { id: "selDataset3", column: "State" }
];

// Function to populate dropdowns
function populateDropdown(data, filter) {
    var selectElement = document.getElementById(filter.id);
    
    // Create and add "Select All" option
    var selectAllOption = document.createElement("option");
    selectAllOption.value = "all";
    selectAllOption.text = "Select All";
    selectElement.add(selectAllOption);
    
    // Extract unique values from the specified column
    var uniqueValues = Array.from(new Set(data.map(item => item[filter.column])));

    // Populate the dropdown with the unique values
    uniqueValues.forEach(function(value) {
        var option = document.createElement("option");
        option.value = value;
        option.text = value;
        selectElement.add(option);
    });
}

// Load and process the CSV file for all filters
d3.csv("Resources/cleaned_covid_data.csv").then(function(data) {
    
    // Ensure data is loaded
    console.log("Data loaded:", data);

    // Loop through all filters and populate each dropdown
    filters.forEach(function(filter) {
        populateDropdown(data, filter);
    });
    
}).catch(function(error) {
    console.error("Error loading or parsing the CSV file:", error);
});


// // Load and process the CSV file for the filter "Year"
// d3.csv("Resources/filtered_covid_data_without_age_group.csv").then(function(data) {
//     // Ensure data is loaded
//     console.log("Data loaded:", data);

//     // Get the dropdown element
//     var selectElement = document.getElementById("selDataset1");
    
//     // Extract unique years from the 'Year' column
//     var years = Array.from(new Set(data.map(item => item.Year)));

//     // Populate the dropdown with the years
//     years.forEach(function(year) {
//         var option = document.createElement("option");
//         option.value = year;
//         option.text = year;
//         selectElement.add(option);
//     });

// }).catch(function(error) {
//     console.error("Error loading or parsing the CSV file:", error);
// });

// // Load and process the CSV file for the filter "Month"

// d3.csv("Resources/filtered_covid_data_without_age_group.csv").then(function(data) {
    
//     // Ensure data is loaded
//     console.log("Data loaded:", data);
    
//     var selectElement = document.getElementById("selDataset2");
    
//     // Extract unique years from the 'Year' column
//     var months = Array.from(new Set(data.map(item => item.Month)));

//     // Populate the dropdown with the years
//     months.forEach(function(month) {
//         var option = document.createElement("option");
//         option.value = month;
//         option.text = month;
//         selectElement.add(option);
//     });
// }).catch(function(error) {
//     console.error("Error loading or parsing the CSV file:", error);
// });

// // Load and process the CSV file for the filter "State"

// d3.csv("Resources/filtered_covid_data_without_age_group.csv").then(function(data) {
    
//     // Ensure data is loaded
//     console.log("Data loaded:", data);
    
//     var selectElement = document.getElementById("selDataset3");
    
//     // Extract unique years from the 'Year' column
//     var states = Array.from(new Set(data.map(item => item.State)));

//     // Populate the dropdown with the years
//     states.forEach(function(state) {
//         var option = document.createElement("option");
//         option.value = state;
//         option.text = state;
//         selectElement.add(option);
//     });
// }).catch(function(error) {
//     console.error("Error loading or parsing the CSV file:", error);
// });

// Load and process the CSV file for the filter "age group"

// d3.csv("Resources/filtered_covid_data_without_age_group.csv").then(function(data) {
    
//     // Ensure data is loaded
//     console.log("Data loaded:", data);
    
//     var selectElement = document.getElementById("selDataset4");
    
//     // Extract unique years from the 'Year' column
//     var ages = Array.from(new Set(data.map(item => item["Age Group"])));

//     // Populate the dropdown with the years
//     ages.forEach(function(age) {
//         var option = document.createElement("option");
//         option.value = age;
//         option.text = age;
//         selectElement.add(option);
//     });
// }).catch(function(error) {
//     console.error("Error loading or parsing the CSV file:", error);
// });

// Load and process the CSV file for the filter "condition group"

// d3.csv("Resources/filtered_covid_data_without_age_group.csv").then(function(data) {
    
//     // Ensure data is loaded
//     console.log("Data loaded:", data);
    
//     var selectElement = document.getElementById("selDataset5");
    
//     // Extract unique years from the 'Year' column
//     var condition_groups = Array.from(new Set(data.map(item => item["Condition Group"])));

//     // Populate the dropdown with the years
//     condition_groups.forEach(function(condition_group) {
//         var option = document.createElement("option");
//         option.value = condition_group;
//         option.text = condition_group;
//         selectElement.add(option);
//     });
// }).catch(function(error) {
//     console.error("Error loading or parsing the CSV file:", error);
// });


// Load and process the CSV file for the filter "condition"

// d3.csv("Resources/filtered_covid_data_without_age_group.csv").then(function(data) {
    
//     // Ensure data is loaded
//     console.log("Data loaded:", data);
    
//     var selectElement = document.getElementById("selDataset6");
    
//     // Extract unique years from the 'Year' column
//     var conditions = Array.from(new Set(data.map(item => item.Condition)));

//     // Populate the dropdown with the years
//     conditions.forEach(function(condition) {
//         var option = document.createElement("option");
//         option.value = condition;
//         option.text = condition;
//         selectElement.add(option);
//     });
// }).catch(function(error) {
//     console.error("Error loading or parsing the CSV file:", error);
// });

// function to add options 

function optionChanged(selectElement) {
    var selectedOptions = Array.from(selectElement.selectedOptions).map(option => option.value);
    console.log(selectedOptions); // Logs the selected years
}

function optionChanged(selectedValue) {
    if (selectedValue === "all") {
        console.log("All states selected");
        // Handle the "Select All" logic here
    } else {
        console.log("Selected state:", selectedValue);
        // Handle the individual state selection logic here
    }
}

