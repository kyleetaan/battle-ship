import GameBoard from "../src/factories/gameboard";
import Ship from "../src/factories/ship";


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

test('check if it hits the right ship', () => {
    let test = new GameBoard();
    let ship = new Ship(3);

    test.placeShip([1,1],ship);
    test.placeShip([1,2],ship);
    test.placeShip([1,3],ship);

    test.receiveAttack([1,1]);

    expect(test.shipsInBoard[0].alreadyHit[0]).toStrictEqual([1,1])
})

test('Keep track of missed attacks.', () => {
    let test = new GameBoard();
    let ship = new Ship(3);

    test.placeShip([1,1],ship);
    test.placeShip([1,2],ship);
    test.placeShip([1,3],ship);

    test.receiveAttack([2,1]);
    

    let includes = test.missedAttacks.some(a => [2,1].every((v, i) => v === a[i]));

    expect(includes).toBe(true);
})

test.only('report if all ships sunk', () => {
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