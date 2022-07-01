const mainContainer = document.getElementById('main-container');
const sideBarGrid = document.getElementById('side-bar-grid');
let gridSizeBar = document.getElementById('my-range');
let gridSize = gridSizeBar.value;
let gridRange = document.createElement('h3');
gridRange.innerText = `${gridSize} x ${gridSize}`;
sideBarGrid.appendChild(gridRange);




let redRange = document.getElementById('red-range');
let greenRange = document.getElementById('green-range');
let blueRange = document.getElementById('blue-range');
let colorShow = document.getElementById('color-show');
redRange.addEventListener('input', createColor );
greenRange.addEventListener('input', createColor );
blueRange.addEventListener('input', createColor );
function createColor(e){
    
    let color = `rgb(${redRange.value},${greenRange.value},${blueRange.value})`;
    colorShow.setAttribute('style', `background-color: ${color}`);
}


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



