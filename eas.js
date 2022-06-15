const gridCells = document.querySelectorAll('div.grid-row div');
gridCells.forEach(div => div.addEventListener('mouseover', () => div.style.background = 'black'));


/*
This code currently achieves goal of applying black backround to each cell on mouseoever. However, would like to update in future
to apply styling via class toggling instead of inline css.
Next step - need to come up with method of generating grid via JS now that html and css testing is complete. 
*/
