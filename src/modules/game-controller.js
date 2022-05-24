import {fillBoard} from "./dom";
import GameBoard from "../factories/gameboard";
import Ship from "../factories/ship";
import Player from "../factories/player";
import setup from "./setupShip";

function gameController() {  // main loop and game logics here
    const shipCoords = setup();
    const player = new Player();
    const comp = new Player();
    const tableHuman = document.getElementById('table-human');
    const tableComp = document.getElementById('table-comp');
    const humanBoard = new GameBoard();
    const compBoard = new GameBoard();
    const shipz = new Ship(3);

    humanBoard.placeShip([1,3], shipz)

    fillBoard(humanBoard.board, tableHuman)
    fillBoard(compBoard.board, tableComp)
}

export default gameController

// main loop and game logics here