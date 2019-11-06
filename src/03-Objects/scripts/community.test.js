import {City, Community} from './community'

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
    expect(test2.population).toEqual(120);
})
test('test movedOut', () => {
    let test1 = new City('test1', 50, 100, 20000);
    let test2 = new City('test2', 40, 80, 100);
    expect(test1.population).toEqual(20000);
    test1.movedOut(100);
    expect(test1.population).toEqual(19900);
    expect(test2.population).toEqual(100);
    test2.movedOut(40);
    expect(test2.population).toEqual(60);
})
test('test howBig', () => {
    let test1 = new City('test1', 50, 100, 20000);
    let test2 = new City('test2', 40, 80, 100);
    expect(test1.howBig()).toEqual('Large town');
    test1.movedIn(100000)
    expect(test1.howBig()).toEqual('City');
    expect(test2.howBig()).toEqual('Village');
    test2.movedOut(50);
    expect(test2.howBig()).toEqual('Hamlet')
})
test('test addCity', () => {
    let community1 = new Community();
    let test1 = new City('test1', 50, 100, 20000);
    let test2 = new City('test2', 40, 80, 100);
    expect(community1.Cities).toEqual({});
    community1.addCity(test1);
    community1.addCity(test2);
    expect(community1.Cities).toEqual({"test1": {"name": "test1", "latitude": 50, "longitude": 100, "population": 20000}, "test2": {"latitude": -50, "longitude": 80, "name": "test2", "population": 100}})
})
test('test which hemisphere', () => {
    let test1 = new City('test1', 50, 100, 20000);
    let test2 = new City('test2', -50, 80, 100);
    let community1 = new Community();
    community1.addCity(test1);
    community1.addCity(test2);
    expect(community1.whichSphere(test1.latitude)).toEqual('Northern Hemisphere');
    expect(community1.whichSphere(test2.latitude)).toEqual('Southern Hemisphere');

})