import Gameboard from "./gameboard";

test('Test gameboard object creation', () => {
    expect(Gameboard()).toMatchObject({});
});

test('Test gameboard board property', () => {
    expect(Gameboard().board[0]).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
});