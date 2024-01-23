function Gameboard() {
    const board = [];
    
    for (let i = 0; i < 10; i++) {
        board.push(new Array(10).fill(0));
    }


    return {
        board
    };
}

export default Gameboard;