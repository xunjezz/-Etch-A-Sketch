const mainContainer = document.getElementById('main-container');
let gridSize = 64;
createGrid();

function createGrid(){
    let gridSize = prompt("Grid size?");
    for(let i = 0; i < gridSize; i++){
        const row = document.createElement('div')
        // row.innerText = "hello";
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



