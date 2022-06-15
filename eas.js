const gridCells = document.querySelectorAll('div.grid-row div');
gridCells.forEach(div => div.addEventListener('mouseover', () => div.style.background = 'black'));
