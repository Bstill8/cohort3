import functions from './syntax';

test('test functions', () => {
    expect(functions.number(5)).toBe(38);
    expect(functions.string("fool")).toBe("foolish");
    expect(functions.boolean(true)).toBe(false);
    expect(functions.array(1,2,3,4,5,6)).toEqual([1,2,3,4,5,6]);
    expect(functions.objects(5,"fool",[1,2,3])).toEqual({number:5, string:"fool", array:[1,2,3]});
    expect(functions.undefined()).toBe(undefined);
    expect(functions.arraymanip([2,3])).toEqual([1,5,3,4]);
    expect(functions.loops(1,1,1,1,1))
})