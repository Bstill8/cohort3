console.log("Hello World from basic.js")
let currentheader = "Hello World from HTML"
function size(int){
    if(int>=20){
        return "large";
    }
    if(int>=10 && int<20){
        return "med";
    }
    return "small";
}
function clickevent() {
    console.log("I'm in the click button event")
    var x = 1 + parseInt(document.getElementById(12).value);
    console.log(x);
    var int = parseInt(document.getElementById(12).value);
    document.getElementById(11).innerHTML = size(int);
}
function headerchange(name){
    if(name == "Hello World from HTML"){
        document.getElementById('header').innerHTML = "Hello from Canada";
        currentheader = "Hello from Canada";
    }
    if(name == "Hello from Canada"){
        document.getElementById('header').innerHTML = "Hello World from HTML";
        currentheader = "Hello World from HTML";
    }
}
function calculatorNumber(num){
    console.log(document.getElementById('calcField').value);
    document.getElementById('calcField').value = document.getElementById('calcField').value + num;
}
var currentop;
var lastentry;
function calculatorOperation(op){
    currentop = op;
    lastentry = document.getElementById('calcField').value;
    document.getElementById('calcField').value = 0;
}
function calculatorEnter(){
    if(currentop == '+'){
        document.getElementById('calcField').value = parseInt(lastentry) + parseInt(document.getElementById('calcField').value);
    }
    if(currentop == '-'){
        document.getElementById('calcField').value = parseInt(lastentry) - parseInt(document.getElementById('calcField').value);
    }
    if(currentop == '*'){
        document.getElementById('calcField').value = parseInt(lastentry) * parseInt(document.getElementById('calcField').value);
    }
    if(currentop == '/'){
        document.getElementById('calcField').value = parseInt(lastentry) / parseInt(document.getElementById('calcField').value);
    }
    
}
function calculatorClear(){
    lastentry = 0;
    document.getElementById('calcField').value = 0;
}