import {City, Community} from './community'
import {cardAdder, updateCard, deleteCard} from './comunityPresentation'

beforeEach(() => {
    document.body.innerHTML = '';
});
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
    community1.createCity('test1', 50, 100, 20000, 0);
    community1.createCity('test2', -40, 80, 100, 1);
    expect(community1.whichSphere(0)).toEqual('Northern Hemisphere');
    expect(community1.whichSphere(1)).toEqual('Southern Hemisphere');
})
test('test getMostNorthern', () => {
    let community1 = new Community();
    community1.createCity('test2', 40, 80, 100);
    expect(community1.getMostNorthern()).toEqual('Most Northern:\ntest2');
    community1.createCity('test1', 50, 100, 20000);
    expect(community1.getMostNorthern()).toEqual('Most Northern:\ntest1');
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
    expect(community1.getPopulation()).toEqual("Total Population:\n100");
    community1.createCity('test1', 50, 100, 20000);
    expect(community1.getPopulation()).toEqual("Total Population:\n20000");
})
test('test createCity', () => {
    let community1 = new Community();
    let test1 = new City('test1', 50, 100, 20000, 0);
    let test2 = new City('test2', -50, 80, 100, 1);
    let el = new City('el', 20, 15, 10, 2);
    community1.createCity('test2', -50, 80, 100, 1);
    community1.createCity('test1', 50, 100, 20000, 0);
    expect(JSON.stringify(community1.Cities)).toMatch(JSON.stringify({"key": {"counter":0, "increment": function(){this.counter++}, "name":null, "latitude":null, "longitude":null, "population":0},"0": test1, "1": test2}));
    community1.createCity('el', 20, 15, 10, 2);
    expect(JSON.stringify(community1.Cities)).toMatch(JSON.stringify({"key": {"counter":0, "increment": function(){this.counter++}, "name":null, "latitude":null, "longitude":null, "population":0},"0": test1, "1": test2, "2": el}));
})
test('test deleteCity', () => {
    let community1 = new Community();
    let test1 = new City('test1', 50, 100, 20000, 1);
    let test2 = new City('test2', -50, 80, 100, 0);
    community1.createCity('test2', -50, 80, 100, 0);
    community1.createCity('test1', 50, 100, 20000, 1);
    expect(JSON.stringify(community1.Cities)).toMatch(JSON.stringify({"key": {"counter":0, "increment": function(){this.counter++}, "name":null, "latitude":null, "longitude":null, "population":0}, "0": test2, "1": test1}));
    community1.deleteCity(0)
    expect(JSON.stringify(community1.Cities)).toMatch(JSON.stringify({"key": {"counter":0, "increment": function(){this.counter++}, "name":null, "latitude":null, "longitude":null, "population":0}, "1": test1}));


})
test('test cardAddeer', () => {
    let testDiv = document.createElement('div');
    document.body.appendChild(testDiv);
    expect(testDiv.childNodes.length).toEqual(0);
    testDiv.appendChild(cardAdder('0', 'Northern Hemisphere', '50', '40', 'Sitllco', '500'));
    expect(testDiv.childNodes.length).toEqual(1);
})
test('test updateCard', () => {
    let comm1 = new Community();
    comm1.createCity('tester', '20', '40', '60', '0');
    let testDiv = document.createElement('div');
    testDiv.appendChild(cardAdder('0', 'Northern Hemisphere', '20', '40', 'tester', '60'));
    document.body.appendChild(testDiv);
    expect(population0.innerText).toEqual('Population: 60');
    comm1.Cities[0].movedIn(40);
    updateCard(comm1, population0, '0');
    expect(population0.innerText).toEqual('Population: 100');
})
test('test deleteCard', () => {
    let comm1 = new Community();
    comm1.createCity('tester', '20', '40', '60', '0');
    let testDiv = document.createElement('div');
    testDiv.appendChild(cardAdder('0', 'Northern Hemisphere', '20', '40', 'tester', '60'));
    document.body.appendChild(testDiv);
    expect(testDiv.childNodes.length).toEqual(1);
    deleteCard(testDiv.childNodes[0]);
    expect(testDiv.childNodes.length).toEqual(0);
})