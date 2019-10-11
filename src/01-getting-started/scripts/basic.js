//First exercise functions
//export{size, clickevent, headerchange}
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
//Calculator functions
//export{calculatorNumber, calculatorOperation, calculatorEnter, calculatorClear}
function calculatorNumber(num){
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
//Tax Calculator functions
//export{taxOutput}
function taxOutput(income){
    var taxTotal = 0;
    if(income>210731){
        taxTotal += (income-210731)*.33;
        income = 210731;
    }
    if(income>147667){
        taxTotal += (income - 147667)*.29;
        income = 147667;
    }
    if(income>95259){
        taxTotal += (income - 95259)*.26;
        income = 95259;
    }
    if(income>47630){
        taxTotal += (income - 47630)*.205;
        income = 47630;
    }
    taxTotal += income * .15;
    document.getElementById('taxOut').innerHTML = "$" + Math.round(taxTotal*100)/100;
    
}