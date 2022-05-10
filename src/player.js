class Player {
    constructor(name) {
        this.attackedCells = [];
    }

    attack(coords, board) {
        board.receiveAttack(coords);
        this.attackedCells.push(coords)
    }

    randomAttack(board) {
        let x = Math.floor((Math.random() * 10));
        let y = Math.floor((Math.random() * 10));
        
        if(ifAttackIsValid([x,y], board)) {
            attack([x,y], board)
        }
    }

    ifAttackIsValid(coords, board) {
        let includes = board.missedAttacks.some(a => coords.every((v, i) => v === a[i]));
        if(includes){ // check in attacked cells
            return false;
        }
        return true;
    }
}

export default Player