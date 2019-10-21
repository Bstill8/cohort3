main.addEventListener("click", idfunction);
Show.addEventListener("click", show);
Add.addEventListener("click", add);
function idfunction(event){
    console.log(event.target.id)
}
function show(){
    for(var i = 0; i<document.getElementById("list").children.length; i++){
        console.log(document.getElementById("list").children[i].innerHTML)
    }
}
var itemNumber = 4;
function add(){
    var newItem = document.createElement("li");
    var text = document.createTextNode("Item " + itemNumber.toString());
    newItem.appendChild(text);
    document.getElementById("list").appendChild(newItem);
    itemNumber ++;
}