    // Example dataset
    var dataset = [
        { year: "2020", value: "data1" },
        { year: "2021", value: "data2" },
        { year: "2022", value: "data3" }
    ];

    // Populate the dropdown
    var selectElement = document.getElementById("selDataset1");

    dataset.forEach(function(item) {
        var option = document.createElement("option");
        option.value = item.value; // or use item.year if you want the year as the value
        option.text = item.year;
        selectElement.add(option);
    });