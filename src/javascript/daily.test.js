import {assertEquals, forloop, forwhile, dowhile, forin, forof} from './daily'

test('test', () => {
    expect(assertEquals(1,1)).toBe(true);
});


//October 9 test
// test('email builder from an array', () => {
//     const name = ["first", "last"];
//     expect(functions.makeEmailArr(name))
//         .toEqual("first.last@evolveu.ca");
//     expect(functions.makeEmailArr(["First", "Last"]))
//         .toEqual("first.last@evolveu.ca");
//     expect(functions.makeEmailArr(["Bill", "Smith"]))
//         .toEqual("bill.smith@evolveu.ca");
// });
test('Prepare for Array Work', () => {
    expect(forloop(1,2,3)).toEqual([1,2,3]);
    expect(forwhile(1,2,3)).toEqual([1,2,3]);
    expect(dowhile(1,2,3)).toEqual([1,2,3]);
    expect(forin(1,2,3)).toEqual([1,2,3]);
    expect(forof(1,2,3)).toEqual([1,2,3]);
});