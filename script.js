const mainContainer = document.getElementById('main-container'); //declare the grid
const sideBarGrid = document.getElementById('side-bar-grid');
let gridSizeBar = document.getElementById('my-range');
let gridSize = gridSizeBar.value;
let gridRange = document.createElement('h3');
gridRange.innerText = `${gridSize} x ${gridSize}`;
sideBarGrid.appendChild(gridRange);
let cursor = false;







createGrid();
gridSizeBar.addEventListener('input', createGrid); //listen for grid size


function createGrid(e){ //make the grid box
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
    
    const cell = document.querySelectorAll('.cell'); //make cell array clickable to 
    console.log(cell);                               //to be drawn on   
    cell.forEach(cells => {
        cells.addEventListener('mousedown',drawStart);
        cells.addEventListener('mouseover',drawThru);
        cells.addEventListener('mouseup',drawEnd);
    });
    
}    

function drawStart(e){
    
    this.setAttribute('style', `background-color: ${createColor(e)}`);
    cursor = true;
    return cursor;
}

function drawThru(e){
    if(cursor == true){
    this.setAttribute('style', `background-color: ${createColor(e)}`);
    }
}

function drawEnd(e){
    cursor = false;
}

let redRange = document.getElementById('red-range'); //decalre the color bars
let greenRange = document.getElementById('green-range');
let blueRange = document.getElementById('blue-range');
let colorShow = document.getElementById('color-show');
redRange.addEventListener('input', createColor );// make listeners for color bars
greenRange.addEventListener('input', createColor );
blueRange.addEventListener('input', createColor );


function createColor(e){ //set background to the color bar values
    
    let color = `rgb(${redRange.value},${greenRange.value},${blueRange.value})`;
    colorShow.setAttribute('style', `background-color: ${color}`);
    return color;
}


const button = document.getElementById('button');
button.addEventListener('click', () => window.location.reload());















let pen = false;


    

