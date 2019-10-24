import {add, show, addCard} from './functions'
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

    return ;
}
test('test add card function', () => {
    let testDiv = document.createElement('div');
    document.body.appendChild(testDiv);
    testDiv.id = "left";
    expect(cardCounter()).toEqual();
});
test('', () => {});
test('', () => {});
test('', () => {});
test('', () => {});