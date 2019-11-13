import {City, Community} from './community'
import {cardAdder} from './comunityPresentation'
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
test('test which hemisphere', () => {
    let community1 = new Community();
    community1.createCity('test1', 50, 100, 20000);
    community1.createCity('test2', -40, 80, 100);
    expect(community1.whichSphere('test1')).toEqual('Northern Hemisphere');
    expect(community1.whichSphere('test2')).toEqual('Southern Hemisphere');
})
test('test getMostNorthern', () => {
    let community1 = new Community();
    community1.createCity('test2', 40, 80, 100);
    expect(community1.getMostNorthern()).toEqual('test2');
    community1.createCity('test1', 50, 100, 20000);
    expect(community1.getMostNorthern()).toEqual('test1');
})
test('test getMostSouthern', () => {
    let community1 = new Community();
    community1.createCity('test2', 40, 80, 100, 0);
    expect(community1.getMostSouthern()).toEqual('Most Southern:\ntest2');
    community1.createCity('test1', 50, 100, 20000, 1);
    expect(community1.getMostSouthern()).toEqual('Most Southern:\ntest2');
    community1.createCity('test3', -40, 50, 100, 2);
    expect(community1.getMostSouthern()).toEqual('Most Southern:\ntest3');
    community1.createCity('test4', -80, 50, 100, 3);
    expect(community1.getMostSouthern()).toEqual('Most Southern:\ntest4');
})
test('test getPopulation', () => {
    let community1 = new Community();
    community1.createCity('test2', 40, 80, 100);
    expect(community1.getPopulation()).toEqual(100);
    community1.createCity('test1', 50, 100, 20000);
    expect(community1.getPopulation()).toEqual(20100);
})
test('test createCity', () => {
    let community1 = new Community();
    community1.createCity('test2', -50, 80, 100);
    community1.createCity('test1', 50, 100, 20000);
    expect(community1.Cities).toEqual({"test1": {"latitude": 50, "longitude": 100, "name": "test1", "population": 20000}, "test2": {"latitude": -50, "longitude": 80, "name": "test2", "population": 100}});
    community1.createCity('el', 20, 15, 10);
    expect(community1.Cities).toEqual({"test1": {"latitude": 50, "longitude": 100, "name": "test1", "population": 20000}, "test2": {"latitude": -50, "longitude": 80, "name": "test2", "population": 100}, 'el': {"latitude": 20, "longitude": 15, "name": "el", "population": 10}});
})
test('test deleteCity', () => {
    let community1 = new Community();
    community1.createCity('test2', -50, 80, 100);
    community1.createCity('test1', 50, 100, 20000);
    expect(community1.Cities).toEqual({"test1": {"latitude": 50, "longitude": 100, "name": "test1", "population": 20000}, "test2": {"latitude": -50, "longitude": 80, "name": "test2", "population": 100}});
    community1.deleteCity('test1')
    expect(community1.Cities).toEqual({"test2": {"latitude": -50, "longitude": 80, "name": "test2", "population": 100}});


})
test('test cardAddeer', () => {
    let testDiv = document.createElement('div');
    document.body.appendChild(testDiv);
    expect(testDiv.childNodes.length).toEqual(0);
    testDiv.appendChild(cardAdder('0', 'Northern Hemisphere', '50', '40', 'Sitllco', '500'));
    expect(testDiv.childNodes.length).toEqual(1);
})
