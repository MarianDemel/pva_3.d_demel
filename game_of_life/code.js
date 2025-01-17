var rows = 24;
var cols = 24;
var turnCount = 0; // Počítadlo tahů
var intervalId = null;

function initialize() {
    createTable();
    randomizeGrid();
    setupControls();
}

function createTable() {
    var gridContainer = document.getElementById("gridContainer");
    if (!gridContainer) {
        console.error("Problem: no div for the grid table!");
        return;
    }
    var table = document.createElement("table");

    for (var i = 0; i < rows; i++) {
        var tr = document.createElement("tr");
        for (var j = 0; j < cols; j++) {
            var cell = document.createElement("td");
            cell.setAttribute("id", i + "_" + j);
            cell.setAttribute("class", "dead");
            tr.appendChild(cell);
        }
        table.appendChild(tr);
    }
    gridContainer.appendChild(table);
}

// Náhodné oživení buněk na začátku
function randomizeGrid() {
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            var cell = document.getElementById(i + "_" + j);
            if (Math.random() > 0.7) {
                cell.className = "live";
            } else {
                cell.className = "dead";
            }
        }
    }
}

// Aktualizace ukazatele tahů
function updateTurnCounter() {
    document.getElementById("turnCounter").innerText = "Turns: " + turnCount;
}

function computeNextState() {
    var nextState = [];
    for (var i = 0; i < rows; i++) {
        nextState[i] = [];
        for (var j = 0; j < cols; j++) {
            var cell = document.getElementById(i + "_" + j);
            var liveNeighbors = countLiveNeighbors(i, j);

            if (cell.className === "live") {
                nextState[i][j] = liveNeighbors === 2 || liveNeighbors === 3;
            } else {
                nextState[i][j] = liveNeighbors === 3;
            }
        }
    }
    return nextState;
}

function updateGrid(nextState) {
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            var cell = document.getElementById(i + "_" + j);
            cell.className = nextState[i][j] ? "live" : "dead";
        }
    }
}

// Počet živých sousedů pro buňku
function countLiveNeighbors(row, col) {
    var count = 0;
    for (var i = -1; i <= 1; i++) {
        for (var j = -1; j <= 1; j++) {
            if (i === 0 && j === 0) continue;

            var newRow = row + i;
            var newCol = col + j;

            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
                var neighbor = document.getElementById(newRow + "_" + newCol);
                if (neighbor && neighbor.className === "live") {
                    count++;
                }
            }
        }
    }
    return count;
}


function setupControls() {
    document.getElementById("start").addEventListener("click", function () {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
            this.innerText = "start";
        } else {
            intervalId = setInterval(nextTurn, 500); // Každých 500 ms další tah
            this.innerText = "stop";
        }
    });

    document.getElementById("clear").addEventListener("click", function () {
        turnCount = 0;
        updateTurnCounter();
        clearInterval(intervalId);
        intervalId = null;
        document.getElementById("start").innerText = "start";
        clearGrid();
    });
}


function clearGrid() {
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            var cell = document.getElementById(i + "_" + j);
            cell.className = "dead";
        }
    }
}


function nextTurn() {
    turnCount++;
    updateTurnCounter();
    var nextState = computeNextState();
    updateGrid(nextState);
}


window.onload = initialize;
