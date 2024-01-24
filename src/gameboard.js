import Ship from './ship.js';

function Gameboard() {
    const board = [];
    
    for (let i = 0; i < 10; i++) {
        board.push(new Array(10).fill(0));
    }

    function placeShip([x, y]) {
        const ship = Ship(3);
        for (let i = y; i < y + ship.length; i++) {
            board[x][i] = 1;
        }
    }


    return {
        board,
        placeShip,
    };
}

export default Gameboard;