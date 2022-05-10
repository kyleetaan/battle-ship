import Ship from "./ship";

class GameBoard {
    constructor (){
        this.board = this.createBoard();
        this.missedAttacks = [];
        this.shipsInBoard = [];
    }

    createBoard() {
        let board = [];
        for(let i = 0; i < 10; i++){
            let inner = [];
            for(let h = 0; h < 10; h++){
                inner.push('x')
            }
            board.push(inner)
        }

        return board
    }

    placeShip(coords, ship) {
        this.board[coords[0]][coords[1]] = ship;

        
        if(!this.containsObject(ship, this.shipsInBoard)) {
            this.shipsInBoard.push(ship)
        }
    }

    receiveAttack(coords) {
        let ship = this.board[coords[0]][coords[1]];

        if(ship === 'x'){ 
            this.missedAttacks.push(coords);
            return false;
        }
        ship.hit(coords);
        return true;
    }

    allShipSunk() {
        return this.shipsInBoard.every(ship => ship.sunk === true)
    }

    containsObject(obj, list) {
        var i;
        for (i = 0; i < list.length; i++) {
            if (list[i] === obj) {
                return true;
            }
        }
    
        return false;
    }
}

export default GameBoard