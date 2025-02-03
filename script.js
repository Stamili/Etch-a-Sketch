const container = document.querySelector("#container");

function makeGrid() {
    for (let i = 0; i < 256; i++) {
            const grid = document.createElement("div");
            container.appendChild(grid);
    }
}

makeGrid();
