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

function takeDimension() {
  let input = prompt('Enter a number between 2 and 100.', '');
  let dimension = parseInt(input);
  if (isNaN(dimension)){
    alert("You didn't enter a number as instructed. Please press New Grid and try again.");
    return;
  } else if (dimension < 2 || dimension > 100) {
    alert("You entered a number that is too small or too large. Please press New Grid and try again.");
    return;
  }
  removeCurrentGrid();
  createGrid(dimension);
  toggleStyle();
}

newGridBtn.addEventListener('click', takeDimension);




/*IT WORKS BABY

Everything currently works as intended and satisfies the assignment's requirements. 
Stretch goals - 
Implement ability to erase and tie it to a button for toggling
Implement a button for toggling ability to draw
Implement a button for randomizing color of drawing*/

