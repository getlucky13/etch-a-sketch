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

createGrid(10);

/* WE GOT IT BABYYYY

STILL NEED
event listener for button
function to process user input and run createGrid. must also clear old grid
add back code to toggle class*/
