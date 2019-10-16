import {forEFunction, splice, slice, functions, assertEquals, forloop, forwhile, dowhile, forin, forof} from './daily'
//More array work
test('More Array Work', () => {
    const arry = [1,2,3,4,5,6,7,8,9,0];
    expect(slice(arry,1,5)).toEqual([2,3,4,5]);
    expect(slice(arry,0,10)).toEqual([1,2,3,4,5,6,7,8,9,0]);
    expect(splice(arry,1,0,15)).toEqual([1,15,2,3,4,5,6,7,8,9,0]);
    expect(splice(arry,6,2,26,30,45)).toEqual([1,2,3,4,5,6,26,30,45,9,0]);
    expect(arry.forEach(forEFunction)).toEqual([1,2,3,4,5,6,7,8,9,0]);
    expect().toEqual();
    expect().toEqual();
    expect().toEqual();
    expect().toEqual();
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