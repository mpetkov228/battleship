import Ship from "./ship.js";

test('Test Ship object creation', () => {
    expect(Ship(3)).toEqual({ length: 3, timesHit: 0, isSunk: false });
});