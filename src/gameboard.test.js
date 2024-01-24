import Gameboard from "./gameboard";

test('Test gameboard object creation', () => {
    expect(Gameboard()).toMatchObject({});
});

test('Test gameboard board property', () => {
    expect(Gameboard().board[0]).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
});

test('Test ship placement functionality (example 1)', () => {
    const gameboard = Gameboard();
    gameboard.placeShip([1, 3], 3);
    expect(gameboard.board[1]).toEqual([0, 0, 0, 1, 1, 1, 0, 0, 0, 0]);
});

test('Test ship placement functionality (example 2)', () => {
    const gameboard = Gameboard();
    gameboard.placeShip([3, 1], 5);
    expect(gameboard.board[3]).toEqual([0, 1, 1, 1, 1, 1, 0, 0, 0, 0]);
});

test('Test vertical ship placement', () => {
    const gameboard = Gameboard();
    gameboard.placeShip([3, 1], 3, true);
    expect(gameboard.board[3]).toEqual([0, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
    expect(gameboard.board[4]).toEqual([0, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
    expect(gameboard.board[5]).toEqual([0, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
});