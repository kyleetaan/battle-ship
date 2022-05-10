import Ship from "./ship";

class GameBoard {
    constructor (){
        this.board = this.createBoard();
        this.missedAttacks = [];
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
    }

    receiveAttack(coords) {
        //receive coords
        // get coords in board
        // if x it means di pa hit so call ship hit function 
        // if na hit na yung coord before return false tapos lalagay sa missed attacks
        // else true 
        // else return false

        if(this.board[coords[0]][coords[1]] === 'x'){
            ship.hit(coords);
        }

    }

    allShipSunk() {

    }
}

export default GameBoard