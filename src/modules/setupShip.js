import GameBoard from "../factories/gameboard";
import Ship from "../factories/ship";
import { fillBoard,showShips } from "./dom";

const defaultCoords = { // for coords
    "four": [[1,1], [1,2], [1,3], [1,4]],
    "three1": [[1,7], [2,7], [3,7]],
    "three2": [[6,4], [6,5], [6,6]],
    "two1": [[3,4], [3,5]],
    "two2": [[5,0], [6,0]],
    "two3": [[9,4], [9,5]],
    "one1": [[3,0]],
    "one2": [[4,9]],
    "one3": [[7,8]],
    "one4": [[9,1]]
}

function setup() {
    const setupTable = document.getElementById('setup');
    const jumbleButton = document.getElementById('randomize');
    jumbleButton.addEventListener('click', shipJumble);

    const humanTable = new GameBoard();

    fillBoard(humanTable.board, setupTable);
    fillTableWithShip(humanTable.board, setupTable);
    // const shipCoordsHumanTable = 
}

function shipJumble() {
    console.log("jumble!")
}

function ifShipPositionValid() {

}

function fillTableWithShip(table, domTable) { // default places
    //four - 1
    //three - 2
    //two - 3
    //one - 4

    

    let four = new Ship(4);
    let three1 = new Ship(3);
    let three2 = new Ship(3);
    let two1 = new Ship(2);
    let two2 = new Ship(2);
    let two3 = new Ship(2);
    let one1 = new Ship(1);
    let one2 = new Ship(1);
    let one3 = new Ship(1);
    let one4 = new Ship(1);

    //assign ships to coords

    for(let key in defaultCoords){
        if(defaultCoords.hasOwnProperty(key)){
            for(let x of defaultCoords[key]){
                if(key === "four"){
                    //coord
                    // let fourShip = document.querySelector(`[data-coord='${x[0]} ${x[1]}']`); 
                    table[x[0]][x[1]] = four;
                } else if(key ==="three1") {
                    table[x[0]][x[1]] = three1;
                } else if(key ==="three2") {
                    table[x[0]][x[1]] = three2;
                } else if(key ==="two1") {
                    table[x[0]][x[1]] = two1;
                } else if(key ==="two2") {
                    table[x[0]][x[1]] = two2;
                } else if(key ==="two3") {
                    table[x[0]][x[1]] = two3;
                } else if(key ==="one1") {
                    table[x[0]][x[1]] = one1;
                } else if(key ==="one2") {
                    table[x[0]][x[1]] = one2;
                } else if(key ==="one3") {
                    table[x[0]][x[1]] = one3;
                } else if(key ==="one4") {
                    table[x[0]][x[1]] = one4;
                }
            }
        }
    }
    // import dom func where it refreshes table to show ships
    showShips(table, domTable);
}

function startingShips() {

}

export default setup