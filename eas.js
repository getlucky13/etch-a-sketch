function createDiv(classes) {
  const div = document.createElement('div');
  
  if (classes.length) {
    div.classList.add(...classes);
  }
  
  return div;
}

function createRow(numCells) {
  const row = createDiv(['row']);
  for (i = 0; i < numCells; i++) {
    const cell = createDiv(['cell']);
    row.appendChild(cell);
  }
  
  return row;
}

function createGrid(dimension) {
  const grid = new DocumentFragment();
  for (i = 0; i < dimension; i++) {
    const row = createRow(dimension);
    grid.appendChild(row);
  }
  
  document.querySelector('.container').appendChild(grid);
}

createGrid(5);

/* Properly creates a single row with the correct amount of cells and css applied. Seems as for loop in createGrid is only executing once. Need more testing./*
