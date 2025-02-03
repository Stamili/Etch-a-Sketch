const container = document.querySelector("#container");

function makeGrid() {
    for (let i = 0; i < 256; i++) {
            const grid = document.createElement("div");
            container.appendChild(grid);
    }
}

makeGrid();

container.addEventListener('mouseover', function (e) {
    if (e.target.nodeName = 'div' && e.target != container) {
        e.target.style = 'background-color: green;';
    }
})