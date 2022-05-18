import Player from "../factories/player";

function fillBoard(boardArr, domTable, comp) {  // initial setup of board
    domTable.textContent = '';
    for(let i = 0; i < boardArr.length; i++){
        for(let j = 0; j < boardArr[i].length; j++){
            const cell = document.createElement('div');
            cell.classList.add('cell'); // add default class
            cell.dataset.coord = `${i} ${j}`
            domTable.appendChild(cell);
            let cellClass = decideClass(boardArr[i][j]);
            cell.classList.add(cellClass);
            if(!comp) {  // when not computer then its a table to add event listeners
                // event listener here
                // cell.addEventListener('click',)
            }
        }                   
    }
}

function decideClass(elemInArr){
    if(elemInArr === 'x'){
        return 'active_cell';
    } else {
        return 'has_ship';
    }
}

export {fillBoard}

// dom modules