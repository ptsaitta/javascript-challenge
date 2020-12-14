// from data.js
const tableData = data;

// looking at index.html, data should be placed in <tbody>

const tbody = d3.select("tbody");

function buildTable(data) {

    //need to remove previous table entries when new table is built according to datetime filter
    d3.selectAll("tbody").remove()
    //iteratively go through to add row to put each result's data in

    data.forEach((tableRow) => {
        const row = tbody.append("tr");

    //go through each row and add each value in cell in that row
        Object.values(tableRow).forEach((value) => {
            const cell = row.append("td");
            
            //update cell with tha actual value
            cell.text(value);

        });
    });
}

//contruct function to execute upon clicking 'filter table' button
// looking at index.html, the user inputs their desired date in:
// <input class="form-control" id="datetime" type="text" placeholder="1/11/2011">
// so use id="datetime" to select user input

function clickHandler() {
    
    //set variable for datetime and select value..
    const datetime = d3.select("#datetime").property("value");
    let searchData = tableData;

    //grab datetime and filter data for that search date
    //arrow function to project datetime-relevant data
    let filterData = searchData.filter(row => row.datetime === datetime);

    //build table with this filtered data

    buildTable(filterData);

}

// construct event listener to listen for even trigger
// filter table button is attached to
// <button id="filter-btn" type="button" class="btn btn-default">Filter Table</button>
// so use id="filter-btn" to target in on
// selectAll make sure all hits with given search term are returned

d3.selectAll("#filter-btn").on("click", clickHandler);

//default table
buildTable(tableData);