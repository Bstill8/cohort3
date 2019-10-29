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
    let text = document.createElement('p');
    let textN = document.createTextNode('Card ' + cardNumber.toString());
    let addBefore = document.createElement('button');
    let addAfter = document.createElement('button');
    let delet = document.createElement('button');
    addBefore.innerText = "Add Before";
    addAfter.innerText = "Add After";
    delet.innerText = "Delete";
    text.className = "cardText";
    addBefore.className = "addBefore";
    addAfter.className = "addAfter";
    delet.className = "delete";
    newCard.className = 'Lcard';
    newCard.id = 'card ' +cardNumber.toString();
    text.appendChild(textN);
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
    left.appendChild(card[0]);
    right.appendChild(card[1]);
}
export function addBefore(cardId, buttonClass){
    console.log(cardId);
    if(buttonClass == 'addBefore'){    
        let node;
        let cards = [];
        for(let i = 0; i<left.children.length; i++){
            if(left.children[i].id == cardId){
                node = left.children[i];
            }
        }
        cards = addCard();
        left.insertBefore(cards[0], node);
        right.appendChild(cards[1]);
    }
}
export function addAfter(cardId, buttonClass){
    if(buttonClass == 'addAfter'){
        let node;
        let cards = [];
        for(let i = 0; i<left.children.length; i++){
            if(left.children[i].id == cardId){
                node = left.children[i + 1];
            }
        }
        cards = addCard();
        left.insertBefore(cards[0], node);
        right.appendChild(cards[1]);
    }
}
export function delet(cardId, buttonClass){
        if(buttonClass == 'delete'){
            document.getElementById(cardId).remove();
            right.removeChild(right.lastChild);
    }
}