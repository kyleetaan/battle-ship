class Ship {
    constructor(length){
        this.length = length;
        this.alreadyHit = [];
    }

    hit(coord) {
        let includes = this.alreadyHit.some(a => coord.every((v, i) => v === a[i])); // check if array is inside array
        if(includes){
            return false;
        }
        this.alreadyHit.push(coord);
        return true;
    }
    
    isSunk(){
        if(this.alreadyHit.length >= this.length){
            return true
        }
        return false
    }
}

export default Ship