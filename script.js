const container = document.querySelector("#container");

let gridWidth = 16;

function makeGrid(gridWidth) {
    for (let i = 0; i < gridWidth * gridWidth; i++) {
        const grid = document.createElement("div");
        grid.style.height = `${480/gridWidth - 2}px`;
        grid.style.width = `${480/gridWidth - 2}px`;   
        container.appendChild(grid);
    }

}
makeGrid(gridWidth);

function deleteGrid() {
    while(container.firstChild) {
    container.removeChild(container.lastChild);
    }   
}



container.addEventListener('mouseover', function(e) {
    if (e.target.nodeName = 'div' && e.target != container) {
        e.target.style.backgroundColor= 'lightgreen';
    }
})

const sizeButton = document.querySelector("#sizeButton");

sizeButton.addEventListener('click', function(e) {
    let validGrid = false;
    gridWidth = prompt("Enter grid width (from 1 to 100 squares)", "16");
    while (!validGrid) {
        if (gridWidth === null) {
            return;
        }
        else if (gridWidth >= 1 && gridWidth <= 100) {
            validGrid = true;
            deleteGrid()
            makeGrid(gridWidth);

        } else {
            gridWidth = prompt("Invalid input, try again.");
        }
    }
    
})

