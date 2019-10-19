import {functions, calculatorEnter, taxOutput, addNumber, Show, Total, provinces, lookup} from './functions.js';

test('Check the sizes', () => {
    expect(functions.size(-1)).toBe("negative"); // Consider the edge cases
    expect(functions.size(0)).toBe("small");
    expect(functions.size(10)).toBe("medium");
    expect(functions.size(15)).toBe("medium");
    expect(functions.size(20)).toBe("large");
    expect(functions.size(2000000)).toBe("large");
});

test('Does that add function work?', () => {
    expect(functions.add(1,2)).toBe(3);
    expect(functions.add(101,202)).toBe(303);
});
test('Check the calculator', () => {
    expect(calculatorEnter(12,'+', 2)).toEqual(14);
    expect(calculatorEnter('13', '-', '1')).toEqual(-12);
    expect(calculatorEnter(1000, '/', '-10')).toEqual(-0.01);
    expect(calculatorEnter(30, '*', 2)).toEqual(60);

});
test('Check the tax calculator', () => {
    expect(taxOutput(10)).toEqual(1.5);
    expect(taxOutput(50000)).toEqual(7630.35);
    expect(taxOutput(10000000)).toEqual(3279281.86);
    expect(taxOutput(-50000)).toEqual("Please enter a positive number");
    expect(taxOutput(200)).toEqual(30);
    expect(taxOutput(0)).toEqual(0);
});
test('Check the array manipulator', () => {
    expect(addNumber('n')).toEqual("Input is not a valid number");
    expect(addNumber(6)).toEqual("number added");
    expect(Show([1,2,3])).toEqual("1,2,3");
    expect(Show([8,7,9])).toEqual("8,7,9");
    expect(Total([1,2,3])).toEqual(6);
    expect(Total([8,7,9])).toEqual(24);
});
test('Check the dictionary', () => {
    expect(lookup('ab', provinces)).toEqual("Alberta");
    expect(lookup('BC', provinces)).toEqual("British Columbia");
    expect(lookup('O.N.', provinces)).toEqual("Ontario");
    expect(lookup('N.s', provinces)).toEqual("Nova Scotia");
    expect(lookup('tee', provinces)).toEqual("Enter a valid province/territory abbreviation");
});