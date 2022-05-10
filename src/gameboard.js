class GameBoard {
    constructor (){
        this.board = this.createBoard();
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
}

export default GameBoard