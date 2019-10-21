export function addCard(node, counter){
    console.log('I am in the add card');
    //node.textContent = 'Updated text content';
    let newCard = document.createElement('div');
    let cardText = document.createTextNode('Card ' + counter.toString());
    newCard.appendChild(cardText);
    node.appendChild(newCard);
    newCard.classList.add('card');
    newCard.setAttribute('counter', counter.toString());
    counter++;
    return counter;
}
export function whatCards(node){
    let arr = [];
    for(let i = 0; i<node.children.length; i++){
        arr[i] = node.children[i].getAttribute('counter');
    }
    return arr;
}