class Ship {
    constructor(length){
        this.length = length;
        this.alreadyHit = [];
        this.sunk = false;
    }

    hit(coord) {
        this.alreadyHit.push(coord);
        this.isSunk();
    }
    
    isSunk(){
        if(this.alreadyHit.length >= this.length){
            this.sunk = true;
        }
    }
}

export default Ship