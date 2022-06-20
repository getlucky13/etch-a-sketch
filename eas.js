const newGridBtn = document.querySelector('.promptButton');

function createDiv(classes) {
  const div = document.createElement('div');
  
  if (classes.length) {
    div.classList.add(...classes);
  }
  
  return div;
}

function createRow(numCells) {
  const row = createDiv(['row']);
  for (let i = 0; i < numCells; i++) {
    const cell = createDiv(['cell']);
    row.appendChild(cell);
  }
  
  return row;
}

function createGrid(dimension) {
  const grid = new DocumentFragment();
  let x = parseInt(dimension);
  for (let i = 0; i < x; i++) {
    const row = createRow(dimension);
    grid.appendChild(row);
  }
  
  document.querySelector('.container').appendChild(grid);
}

function toggleStyle() {
  const gridCells = document.querySelectorAll('div.row div');
  if(gridCells) {gridCells.forEach(div => div.addEventListener('mouseover', () => div.style.background = 'black'))} ;
}

function removeCurrentGrid() {
  const gridRows = document.querySelectorAll('.row');
  gridRows.forEach((c) => c.parentNode.removeChild(c));
}

createGrid(32);
toggleStyle();

newGridBtn.addEventListener('click', removeCurrentGrid);





/* WE GOT IT BABYYYY

STILL NEED
event listener for button
function to process user input and run createGrid. must also clear old grid
add back code to toggle class*/
