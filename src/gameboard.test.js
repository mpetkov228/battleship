import Gameboard from "./gameboard";

test('Test gameboard object creation', () => {
    expect(Gameboard()).toMatchObject({});
});

test('Test gameboard board property', () => {
    expect(Gameboard().board[0]).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
});

test('Test ship placement function', () => {
    const gameboard = Gameboard();
    gameboard.placeShip([1, 3]);
    expect(gameboard.board[1]).toEqual([0, 0, 0, 1, 1, 1, 0, 0, 0, 0]);
});