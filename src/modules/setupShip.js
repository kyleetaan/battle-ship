import GameBoard from "../factories/gameboard";
import { fillBoard } from "./dom";

function setup() {
    const setupTable = document.getElementById('setup');
    const table = new GameBoard();

    fillBoard(table.board, setupTable);
}

function shipJumble() {

}

function ifShipPositionValid() {

}

function fillTableWithShip() {

}

export default setup