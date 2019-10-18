import {sortFunction, filterFunction, reduceFunction, mapFunction, forEFunction, splice, slice, functions, assertEquals, forloop, forwhile, dowhile, forin, forof} from './daily'
//More array work October 16-17
test('More Array Work', () => {
    const arry = [1,2,3,4,5,6,7,8,9,0];
    expect(slice(arry,1,5)).toEqual([2,3,4,5]);
    expect(slice(arry,0,10)).toEqual([1,2,3,4,5,6,7,8,9,0]);
    expect(splice(arry,1,0,15)).toEqual([1,15,2,3,4,5,6,7,8,9,0]);
    expect(splice(arry,6,2,26,30,45)).toEqual([1,2,3,4,5,6,26,30,45,9,0]);
    expect(forEFunction(arry)).toEqual([2,4,6,8,10,12,14,16,18,0]);
    expect(mapFunction(arry, 2)).toEqual([2,4,6,8,10,12,14,16,18,0]);
    expect(mapFunction(arry, 6)).toEqual([6,12,18,24,30,36,42,48,54,0]);
    expect(reduceFunction(arry)).toEqual(45);
    expect(filterFunction(arry, 5)).toEqual([5,6,7,8,9]);
    expect(filterFunction(arry, 2)).toEqual([2,3,4,5,6,7,8,9]);
    expect(sortFunction(arry)).toEqual([9,8,7,6,5,4,3,2,1,0]);
})
//email object
test('email builder from an object / map', () => {
    const name = { fname: 'first', lname: 'last' };
    expect(functions.makeEmailObj(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: 'First', lname: 'Last' }))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: "Bill", lname: "Smith" }))
        .toEqual("bill.smith@evolveu.ca");
});


test('test', () => {
    expect(assertEquals(1,1)).toBe(true);
});


//October 9 test
test('email builder from an array', () => {
    const name = ["first", "last"];
    expect(functions.makeEmailArr(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["First", "Last"]))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["Bill", "Smith"]))
        .toEqual("bill.smith@evolveu.ca");
});
test('Prepare for Array Work', () => {
    expect(forloop(1,2,3)).toEqual([1,2,3]);
    expect(forwhile(1,2,3)).toEqual([1,2,3]);
    expect(dowhile(1,2,3)).toEqual([1,2,3]);
    expect(forin(1,2,3)).toEqual([1,2,3]);
    expect(forof(1,2,3)).toEqual([1,2,3]);
});