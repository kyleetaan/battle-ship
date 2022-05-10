import Ship from "../src/ship";

test('check ship length', () => {
    let ship = new Ship(3);

    expect(ship.length).toBe(3)
    
})


test('check if ship part is hit', () => {
    let ship = new Ship(3);

    expect(ship.hit([1,2])).toBe(true)
})

test('check if ship part is already hit then attack is not valid', () => {
    let ship = new Ship(3);
    ship.hit([1,2]);

    expect(ship.hit([1,2])).toBe(false)
})

test('check ship sunk', () => {
    let ship = new Ship(3);
    
    ship.hit([1,2]);
    ship.hit([3,4]);
    ship.hit([5,6]);
    
    expect(ship.isSunk()).toBe(true)
    
})

test('check ship should not sunk', () => {
    let ship = new Ship(3);
    
    ship.hit([1,2]);
    ship.hit([3,4]);
    
    expect(ship.isSunk()).toBe(false)
    
})
