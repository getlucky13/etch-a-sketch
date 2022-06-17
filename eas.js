const gridContainer = document.querySelector('.container');


function makeGridRow() {
    const gridRow = document.createElement('div');
    gridRow.classList.toggle('row');
    gridContainer.appendChild(gridRow);
}

function makeGridRows(x) {
    for (let i = 1; i > x; i++){
    console.log(`For loop executed. I = ${i}`);
    makeGridRow();
    }
}

makeGridRow();

/*Notes:
I think I need to create a nodeList of gridRows to appened to gridContainer. More testing necessary.*/

/*const gridCells = document.querySelectorAll('div.row div');
gridCells.forEach(div => div.addEventListener('mouseover', () => div.classList.add('cell-hover')));
*/