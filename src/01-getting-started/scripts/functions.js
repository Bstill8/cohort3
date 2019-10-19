
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
//Calculator functions
function calculatorEnter(num, current, last){
    if(current == '+'){
        return parseInt(last) + parseInt(num);
    }
    if(current == '-'){
        return parseInt(last) - parseInt(num);
    }
    if(current == '*'){
        return parseInt(last) * parseInt(num);
    }
    if(current == '/'){
        return parseInt(last) / parseInt(num);
    }

}

//Tax Calculator functions
function taxOutput(income){
    var taxTotal = 0;
    if(income < 0){
        return "Please enter a positive number"
    }
    if(income>210731){
        taxTotal += (income - 210731)*.33;
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
    return Math.round(taxTotal*100)/100;
}
//Working with arrays functions

function addNumber(num){
    if(isNaN(num) || num == ''){
        return "Input is not a valid number";
    }else{
        return "number added";
    }
}
function Show(arry){
    var show = '';
    for(var i=0; i<arry.length; i++){
        show += arry[i]
        if(i<arry.length - 1){
            show += ",";
        }
    }
    return show;
}
function Total(arry){
    var total=0;
    for(var i=0; i<arry.length; i++){
        total += parseFloat(arry[i]);
    }
    return total;
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
function lookup(Abrev, text){
    var noPunctuation = Abrev.replace(/[.]/g,"");
    var temp = noPunctuation.toUpperCase();
    if(!text.hasOwnProperty(temp)){
        return "Enter a valid province/territory abbreviation";
    }
    return text[temp];
}
export default functions;
export {functions, calculatorEnter, taxOutput, addNumber, Show, Total, provinces, lookup}