import {add, show, addCard, mainAdd} from './functions'
test('test the add function with show function', () => {
    var addTester = document.createElement('ol');
    document.body.appendChild(addTester);
    addTester.id = 'list';
    add();
    add();
    expect(show(addTester)).toEqual(['4','5']);
    add();
    add();
    expect(show(addTester)).toEqual(['4','5','6','7']);

});
function cardCounter(){
    let testArr = [];
    testArr[0] = 1;
    testArr[6] = 2;
    testArr.a = 3;
    let counter = 0
    for (let x in testArr){
        counter ++;
    }
    return [counter, testArr];
}
test('test add card function', () => {
    let leftDiv = document.createElement('div');
    let rightDiv = document.createElement('div');
    document.body.appendChild(leftDiv)
    document.body.appendChild(rightDiv);
    leftDiv.id = "left";
    rightDiv.id = "right";
    expect(cardCounter()).toEqual();
});
test('test add card button', () => {
    let leftDiv = document.createElement('div');
    let rightDiv = document.createElement('div');
    document.body.appendChild(leftDiv)
    document.body.appendChild(rightDiv);
    leftDiv.id = "left";
    rightDiv.id = "right";
    expect(mainAdd()).toEqual();
});
test('', () => {});
test('', () => {});
test('', () => {});
test('card counter', () => {
    expect(cardCounter()).toEqual([3, [1,2,3]]);
});