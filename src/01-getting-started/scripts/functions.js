
const functions = {
    
    size: (num) => {
        if (num < 10 && num >=0) return "small";
        if (num < 20 && num >=10) return "medium";
        if (num < 0) return "negative"
        return "large";
    },

    add: (num1, num2) => {
        return num1 + num2;
    },

    subtract: (num1, num2) => {
        return num1 - num2;
    }

    
};
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
//Working with arrays functions
var arr= [];
function addNumber(num){
    if(isNaN(num) || num == ''){
        document.getElementById('arrMessage').innerHTML = "Input is not a valid number";
    }else{
        arr.push(num);
        document.getElementById('arrMessage').innerHTML = "number added";
        document.getElementById('arrText').value = "";
    }
}
function Show(){
    var show = '';
    for(i=0; i<arr.length; i++){
        show += arr[i] + ",";
    }
    document.getElementById('arrMessage').innerHTML = show;
}
function Total(){
    var total=0;
    for(i=0; i<arr.length; i++){
        total += parseFloat(arr[i]);
    }
    document.getElementById('arrMessage').innerHTML = total;
}
function Clear(){
    arr = [];
    document.getElementById('arrMessage').innerHTML = "Array Cleared";
    document.getElementById('arrText').value = "";
}
//Working with dictionaries
const provinces = {
    AB: "Alberta",
    BC: "British Columbia",
    SK: "Saskatchewan",
    MB: "Manitoba",
    ON: "Ontario",
    QC: "Quebec",
    PEI: "Prince Edward Island",
    NB: "New Brunswick",
    NS: "Nova Scotia",
    NL: "Newfoundland",
    YT: "Yukon",
    NT: "Northwest Territories",
    NU: "Nunavut"  
}
function Lookup(Abrev){
    var noPunctuation = Abrev.replace(/[.]/g,"");
    var temp = noPunctuation.toUpperCase();
    if(!provinces.hasOwnProperty(temp)){
        document.getElementById('dictMessage').innerHTML = "Enter a valid province/territory abbreviation";
        return 0;
    }
    document.getElementById('dictMessage').innerHTML = provinces[temp];
}
export {functions, calculatorClear, calculatorEnter, calculatorNumber, calculatorOperation, taxOutput, addNumber, Show, Total, Clear, provinces, Lookup};
