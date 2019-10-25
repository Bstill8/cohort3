//first exercise
export function show(){
    let sarr = [];
    for(var i = 0; i<list.children.length; i++){
        sarr[i] = list.children[i].getAttribute('num');
        console.log(list.children[i].innerHTML)
    }
    return sarr;
}
var itemNumber = 4;
export function add(){
    let newItem = document.createElement("li");
    let text = document.createTextNode("Item " + itemNumber.toString());
    newItem.appendChild(text);
    newItem.setAttribute('num', itemNumber.toString())
    list.appendChild(newItem);
    itemNumber ++;
}
var cardNumber = 0;
export function addCard(){
    cardNumber ++;
    //create left card
    let newCard = document.createElement('div');
    let text = document.createTextNode('Card ' + cardNumber.toString());
    let addBefore = document.createElement('button');
    let addAfter = document.createElement('button');
    let delet = document.createElement('button');
    addBefore.value = "Add Before";
    addAfter.value = "Add After";
    delet.value = "Delete";
    addBefore.className = "add before";
    addAfter.className = "add after";
    delet.className = "delete";
    newCard.className = 'Lcard';
    newCard.setAttribute("card", cardNumber.toString());
    newCard.appendChild(text);
    newCard.appendChild(addBefore);
    newCard.appendChild(addAfter);
    newCard.appendChild(delet);
    //create right card
    let rightCard = document.createElement('div');
    let rText = document.createTextNode("Right Side");
    rightCard.className = "Rcard";
    rightCard.appendChild(rText);
    return [newCard, rightCard];
}
export function mainAdd(){
    let card = addCard();
    document.getElementById('left').appendChild(card[0]);
    document.getElementById('right').appendChild(card[1]);
}
export function addBefore(){
    
}