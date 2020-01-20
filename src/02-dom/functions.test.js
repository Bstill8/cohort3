import {delet, addAfter, addBefore, add, show, mainAdd, reset, addCard} from './functions'
beforeEach(() => {
    leftDiv.innerHTML = '';
    rightDiv.innerHTML = '';
    reset();
    leftDiv.removeEventListener('click', deleteHandler);
    leftDiv.removeEventListener('click', addAfterHandler);
    leftDiv.removeEventListener('click', addBeforeHandler);
  });

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
function deleteHandler(e){
    delet(e.target.id, 'delete')
}
function addBeforeHandler(event){
    addBefore(event.target.id, 'addBefore')
}
function addAfterHandler(e){
    addAfter(e.target.id, 'addAfter');
}
function cardCounter(div){
    let counter = 0;
    let arr = [];
    for(let i = 0; i < div.children.length; i++){
        arr[i] = div.children[i].id;
        counter ++;
    }
    return [counter, arr];
}
let leftDiv = document.createElement('div');
let rightDiv = document.createElement('div');
document.body.appendChild(leftDiv);
document.body.appendChild(rightDiv);
leftDiv.id = "left";
rightDiv.id = "right";

test('test add card function', () => {
    let ACFl = leftDiv;
    expect(cardCounter(ACFl)).toEqual([0,[]]);
    ACFl.appendChild(addCard()[0]);
    expect(cardCounter(ACFl)).toEqual([1,['card 1']])
});

test('test add card button', () => {
    let ACBl = leftDiv;
    mainAdd();
    expect(cardCounter(ACBl)).toEqual([1,['card 1']]);
    mainAdd();
    mainAdd();
    mainAdd();
    expect(cardCounter(ACBl)).toEqual([4,['card 1','card 2','card 3','card 4']]);
});
test('test add before', () => {
    let addBLeft = leftDiv;
    mainAdd();
    mainAdd();
    addBLeft.addEventListener('click', addBeforeHandler);
    document.getElementById('card 2').click();
    expect(cardCounter(addBLeft)).toEqual([3,['card 1', 'card 3', 'card 2']]);
    mainAdd();
    mainAdd();
    mainAdd();
    document.getElementById('card 4').click();
    document.getElementById('card 1').click();
    expect(cardCounter(addBLeft)).toEqual([8,['card 8', 'card 1', 'card 3', 'card 2','card 7', 'card 4', 'card 5', 'card 6']]);

});
test('test add after', () => {
    let addAleft = leftDiv;
    addAleft.addEventListener('click', addAfterHandler)
    mainAdd();
    mainAdd();
    mainAdd();
    mainAdd();
    document.getElementById('card 1').click();
    document.getElementById('card 4').click();
    document.getElementById('card 6').click();
    document.getElementById('card 4').click();
    expect(cardCounter(addAleft)).toEqual([8,['card 1', 'card 5', 'card 2', 'card 3', 'card 4', 'card 8', 'card 6', 'card 7']]);
});
test('test delete', () => {
    let deleteL = leftDiv;
    deleteL.addEventListener('click', deleteHandler);
    mainAdd();
    mainAdd();
    mainAdd();
    mainAdd();
    document.getElementById('card 2').click();
    expect(cardCounter(deleteL)).toEqual([3,['card 1', 'card 3', 'card 4']]);
    mainAdd();
    mainAdd();
    document.getElementById('card 5').click();
    expect(cardCounter(deleteL)).toEqual([4,['card 1', 'card 3', 'card 4', 'card 6']]);
});