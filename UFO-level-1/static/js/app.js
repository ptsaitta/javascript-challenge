// from data.js
var tableData = data;

// YOUR CODE HERE!
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

        }
    }





}