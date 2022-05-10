import GameBoard from "../src/gameboard";
import Ship from "../src/ship";


test('receive attack', () => {
    let test = new GameBoard();
    let ship = new Ship(3);

    test.placeShip([1,1],ship);
    test.placeShip([1,2],ship);
    test.placeShip([1,3],ship);

    
    expect(test.receiveAttack([1,1])).toBe(true)
})

test('miss attack', () => {
    let test = new GameBoard();
    let ship = new Ship(3);

    test.placeShip([1,1],ship);
    test.placeShip([1,2],ship);
    test.placeShip([1,3],ship);

    
    expect(test.receiveAttack([2,1])).toBe(false)
})

test('Keep track of missed attacks.', () => {
    let test = new GameBoard();
    let ship = new Ship(3);

    test.placeShip([1,1],ship);
    test.placeShip([1,2],ship);
    test.placeShip([1,3],ship);

    test.receiveAttack([2,1]);

    expect(test.missedAttacks()).toBe([2,1]);
})

test('report if all ships sunk', () => {
    let test = new GameBoard();
    let ship = new Ship(3);

    test.placeShip([1,1],ship);
    test.placeShip([1,2],ship);
    test.placeShip([1,3],ship);

    test.receiveAttack([1,1]);
    test.receiveAttack([1,2]);
    test.receiveAttack([1,3]);

    expect(test.allShipSunk()).toBe(true);
})

// test.only('test', () => {
//     let test = new GameBoard();

//     test.test();
// })