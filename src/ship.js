class Ship {
    constructor(length){
        this.length = length;
        this.body = [];
    }

    hit(coord) {
        this.body.push(coord);
    }
    
    isSunk(){
        if(this.body.length >= this.length){
            return true
        }
        return false
    }
}

export default Ship