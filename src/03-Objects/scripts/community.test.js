import {City} from './community'

test('show method', () => {
    let test1 = new City('test1', 50, 100, 20000);
    let test2 = new City('test2', 40, 80, 100);
    expect(test1.show()).toEqual('test1, 50, 100, 20000');
    expect(test2.show()).toEqual('test2, 40, 80, 100');
})
test('test movedIn', () => {
    let test1 = new City('test1', 50, 100, 20000);
    let test2 = new City('test2', 40, 80, 100);
    expect(test1.population).toEqual(20000);
    test1.movedIn(500);
    expect(test1.population).toEqual(20500);
    expect(test2.population).toEqual(100);
    test2.movedIn(20);
    expect()
})