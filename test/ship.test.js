import Ship from "../src/ship";

test('check ship length', () => {
    let ship = new Ship(3);

    expect(ship.length).toBe(3)
    
})

test.only('check ship sunk', () => {
    let ship = new Ship(3);
    
    ship.hit([1,2]);
    ship.hit([3,4]);
    ship.hit([5,6]);
    
    ship.isSunk();

    expect(ship.sunk).toBe(true)
    
})

test('check ship should not sunk', () => {
    let ship = new Ship(3);
    
    ship.hit([1,2]);
    ship.hit([3,4]);

    ship.isSunk();
    
    expect(ship.sunk).toBe(false)
    
})
