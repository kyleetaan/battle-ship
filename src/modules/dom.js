import Player from "../factories/player";

function fillBoard(boardArr, domTable) {  // initial setup of board
    domTable.textContent = '';
    for(let i = 0; i < boardArr.length; i++){
        for(let j = 0; j < boardArr[i].length; j++){
            const cell = document.createElement('div');
            cell.classList.add('cell'); // add default class
            cell.dataset.coord = `${i} ${j}`
            domTable.appendChild(cell);
            let cellClass = decideClass(boardArr[i][j]);
            cell.classList.add(cellClass);
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

// function color() { 
//     if(this.classList.contains("active_cell")){
//         this.classList.remove("active_cell")
//         this.classList.add('has_ship')
//     } else {
//         this.className = "cell active_cell"
//     }
// }

// function refresh table to show ships
function showShips(table, domTable){
    // table.forEach(element => {
    //     element.forEach(e => {
    //         if(e != 'x'){

    //         }
    //     })
    // });

    for(let i = 0; i < table.length; i++){
        for(let j = 0; j < table[i].length; j++){
            if(table[i][j] != 'x'){
                let ship = document.querySelector(`[data-coord='${i} ${j}']`);
                ship.className = "cell has_ship";
            }
        }
    }
}

export {fillBoard,showShips}

// dom modules