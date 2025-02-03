const container = document.querySelector("#container");

let gridWidth = 16;

function makeGrid(gridWidth) {
    for (let i = 0; i < gridWidth * gridWidth; i++) {
        const grid = document.createElement("div");
        grid.style.height = `${480/gridWidth}px`;
        grid.style.width = `${480/gridWidth}px`;   
        container.appendChild(grid);
    }

}
makeGrid(gridWidth);

function deleteGrid() {
    while(container.firstChild) {
    container.removeChild(container.lastChild);
    }   
}



let globalStrength = 10;

function randomColor(strength) {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);

    let color = `rgba(${x}, ${y}, ${z}, ${strength / 100})`;
    return color;
}

container.addEventListener('mouseover', function(e) {
    if (e.target.nodeName === 'DIV' && e.target !== container) {
        let currentStrength = e.target.dataset.strength ? parseInt(e.target.dataset.strength) : 
        globalStrength;
        e.target.style.backgroundColor = randomColor(currentStrength);
        e.target.dataset.strength = currentStrength + globalStrength;
    }
});


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

