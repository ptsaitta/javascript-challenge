// from data.js
var tableData = data;

// looking at index.html, data should be placed in <tbody>

const tbody = d3.select("tbody");

funct buildTable(data) {

    //iteratively go through to add row to put each result's data in

    data.forEach(tableRow) function() {
        const row = tbody.append("tr")

    //go through each row and add each value in cell in that row
        Object.values(tableRow).forEach(value) function() {
            const cell = row.append("td");
            
            //update cell with tha actual value
            cell.append(value)

        });
    });
}

//contruct function to execute upon clicking 'filter table' button
// looking at index.html, the user inputs their desired date in:
// <input class="form-control" id="datetime" type="text" placeholder="1/11/2011">
// so use id="datetime" to select user input

funct clickHandler() {
    
    //set variable for datetime
    const datetime = d3.select("#datetime");
    let searchData = tableData;

    //grab datetime and filter data for that search date
    //arrow function to project datetime-relevant data
    let filterData = searchData.filter(row => row.datetime == datetime);

    //build table with this filtered data

    buildTable(filteredData);

}