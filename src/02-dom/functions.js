
export function show(){
    for(var i = 0; i<document.getElementById("list").children.length; i++){
        console.log(document.getElementById("list").children[i].innerHTML)
    }
}

export function add(){
    var newItem = document.createElement("li");
    var text = document.createTextNode("Item " + itemNumber.toString());
    newItem.appendChild(text);
    document.getElementById("list").appendChild(newItem);
    itemNumber ++;
}
export function addCard(){
    
}