import Player from "../src/player";
import GameBoard from "../src/gameboard"
import Ship from "../src/ship"



describe('Player', () =>{
    let player = new Player('kyle');
    let comp = new Player('comp');
    let playerGameBoard = new GameBoard();
    let compGameBoard = new GameBoard();
    let ship = new Ship(3);
    let compShip = new Ship(3);


    test('return player object', () => {
        expect(player).toEqual({
            'attackedCells': []
        })
    })

    test('attack', () => {
        player.attack([1,1], compGameBoard); //shouldnt be tested anymore since gameboard receiveattack is working
    })

    test('random attack by comp', () => {
        expect(comp.randomAttack(playerGameBoard)).toBe(true)
    })
})