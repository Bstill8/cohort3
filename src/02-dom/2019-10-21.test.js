import {whatCards, addCard} from './2019-10-21'
const mydiv = document.createElement('div');
test('test addCard', () => {
    addCard(mydiv, 4);
});

test('test whatCards', () => {
    const myDiv2 = document.createElement('div');
    addCard(myDiv2, 3);
    addCard(myDiv2, 4);
    expect(whatCards(myDiv2)).toEqual(['3', '4']);
    addCard(myDiv2, 5);
    expect(whatCards(myDiv2)).toEqual(['3', '4', '5'])
})