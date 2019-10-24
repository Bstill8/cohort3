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
    var newItem = document.createElement("li");
    var text = document.createTextNode("Item " + itemNumber.toString());
    newItem.appendChild(text);
    newItem.setAttribute('num', itemNumber.toString())
    list.appendChild(newItem);
    itemNumber ++;
}
var cardNumber = 1;
export function addCard(){
    cardNumber ++;
}
