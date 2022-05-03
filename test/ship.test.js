import Ship from "../src/ship";

test('check ship length', () => {
    let ship = new Ship(3);

    expect(ship.length).toBe(3)
    
})

// test.only('check if body is being filled', () => {
//     let ship = new Ship(3);

//     ship.coords([1,1]);
//     ship.coords([1,2]);
//     ship.coords([1,3]);

//     expect(ship.body).toBe([[1,1],[1,2],[1,3]]);
// })

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
