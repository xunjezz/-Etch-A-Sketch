const mainContainer = document.getElementById('main-container');
const sideBar = document.querySelector('.side-bar');
let gridSizeBar = document.getElementById('my-range');
let gridSize = gridSizeBar.value;
let gridRange = document.createElement('h3');
gridRange.innerText = `${gridSize} x ${gridSize}`;
sideBar.appendChild(gridRange);









//afer variables are called//
createGrid();
gridSizeBar.addEventListener('input', createGrid);


function createGrid(e){
    gridSize = gridSizeBar.value;
    gridRange.innerText = `${gridSize} x ${gridSize}`;
    mainContainer.innerHTML ="";
    
    for(let i = 0; i < gridSize; i++){
        const row = document.createElement('div')
        row.classList.add('row');
        row.setAttribute('id',`row-${i}`)
        mainContainer.appendChild(row);

        for(let j = 1; j <=gridSize; j++){
            const cell = document.createElement('div');
            // cell.innerText ="0"
            cell.classList.add('cell');
            cell.setAttribute('id', `cell-${j}`)      
            row.appendChild(cell);
            
        }
    }
  
}    



