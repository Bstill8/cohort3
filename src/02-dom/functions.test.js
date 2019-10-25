import {addBefore, add, show, mainAdd} from './functions'
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
function cardCounter(div){
    let counter = 0;
    let arr = [];
    for(let i = 0; i < div.children.length; i++){
        arr[i] = div.children[i].getAttribute('card');
        counter ++;
    }
    return [counter, arr];
}
let leftDiv = document.createElement('div');
let rightDiv = document.createElement('div');
document.body.appendChild(leftDiv)
document.body.appendChild(rightDiv);
leftDiv.id = "left";
rightDiv.id = "right";

test('test add card function', () => {
    let ACFl = leftDiv;
    expect(cardCounter(ACFl)).toEqual([0,[]]);
});

test('test add card button', () => {
    let ACBl = leftDiv;
    mainAdd();
    expect(cardCounter(ACBl)).toEqual([1,['1']]);
    mainAdd();
    mainAdd();
    mainAdd();
    expect(cardCounter(ACBl)).toEqual([4,['1','2','3','4']]);
});
test('test add before', () => {
    let addBLeft = leftDiv;
    let addBRight = rightDiv;

});
test('', () => {});
test('', () => {});
// test('card counter', () => {
//     expect(cardCounter()).toEqual([3, [1,2,3]]);
// });