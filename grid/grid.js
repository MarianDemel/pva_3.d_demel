let rows = 24;
let cols = 24;





document.addEventListener("DOMContentLoaded", function() {
    createTable();
})
// initialize


// lay out the board
function createTable() {
    let gridContainer = document.querySelector("#gridContainer");
    if (!gridContainer) {
        // throw error
        console.error("Problem: no div for the grid table!");
    }
    let table = document.createElement("table"); 

    for (let i = 0; i < rows; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < cols; j++) {
            let cell = document.createElement("td");
            cell.setAttribute("id", i + "_" + j);
            cell.setAttribute("class", "dead");
            tr.appendChild(cell);
        }
        table.appendChild(tr);
    }
    gridContainer.appendChild(table);
}