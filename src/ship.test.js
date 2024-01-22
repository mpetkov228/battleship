import Ship from "./ship.js";

test('Test Ship object creation (example 1)', () => {
    expect(Ship(3)).toMatchObject({ length: 3, timesHit: 0 });
});

test('Test Ship object creation (example 2)', () => {
    expect(Ship(5)).toMatchObject({ length: 5, timesHit: 0 });
});

test('Test Ship hit function (example 1)', () => {
    const ship = Ship(3);
    ship.hit();
    expect(ship.timesHit).toBe(1);
});

test('Test Ship hit function (example 2)', () => {
    const ship = Ship(3);
    ship.hit();
    ship.hit();
    expect(ship.timesHit).toBe(2);
});

test('Test Ship isSunk function (example 1)', () => {
    const ship = Ship(3);
    expect(ship.isSunk()).toBeFalsy();
});

test('Test Ship isSunk function (example 2)', () => {
    const ship = Ship(2);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBeTruthy();
});