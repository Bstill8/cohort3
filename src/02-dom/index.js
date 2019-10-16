document.getElementById("main").addEventListener("click", idfunction);
document.getElementById("Show").addEventListener("click", show);
document.getElementById("Add").addEventListener("click", add);
function idfunction(event){
    console.log(event.target.id)
}
function show(event){
    for(var i = 0; i<document.getElementById("list").children.length; i++){
        console.log(document.getElementById("list").children[i].innerHTML)
    }
}
var itemNumber = 4;
function add(event){
    var newItem = document.createElement("li");
    var text = document.createTextNode("Item " + itemNumber.toString());
    newItem.appendChild(text);
    document.getElementById("list").appendChild(newItem);
    itemNumber ++;
}