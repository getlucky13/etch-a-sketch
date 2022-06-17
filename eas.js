function makeGrid() {
    for(let i = 1; i > 16; i++) {
        const gridContainer = document.querySelector('.container');
        const gridRow = document.createElement('div');
        gridRow.classList.toggle('row');
        gridContainer.appendChild(gridRow);
    }
}

makeGrid();

/*const gridCells = document.querySelectorAll('div.row div');
gridCells.forEach(div => div.addEventListener('mouseover', () => div.classList.add('cell-hover')));
*/