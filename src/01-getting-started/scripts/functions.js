
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

export default functions;
//Calculator functions
// export{calculatorNumber, calculatorOperation, calculatorEnter, calculatorClear}
// function calculatorNumber(num){
//     console.log(document.getElementById('calcField').value);
//     document.getElementById('calcField').value = document.getElementById('calcField').value + num;
// }
// var currentop;
// var lastentry;
// function calculatorOperation(op){
//     currentop = op;
//     lastentry = document.getElementById('calcField').value;
//     document.getElementById('calcField').value = 0;
// }
// function calculatorEnter(){
//     if(currentop == '+'){
//         document.getElementById('calcField').value = parseInt(lastentry) + parseInt(document.getElementById('calcField').value);
//     }
//     if(currentop == '-'){
//         document.getElementById('calcField').value = parseInt(lastentry) - parseInt(document.getElementById('calcField').value);
//     }
//     if(currentop == '*'){
//         document.getElementById('calcField').value = parseInt(lastentry) * parseInt(document.getElementById('calcField').value);
//     }
//     if(currentop == '/'){
//         document.getElementById('calcField').value = parseInt(lastentry) / parseInt(document.getElementById('calcField').value);
//     }

// }

// function calculatorClear(){
//     lastentry = 0;
//     document.getElementById('calcField').value = 0;
// }
// //Tax Calculator functions
// export{taxOutput}
// function taxOutput(income){
//     var taxTotal = 0;
//     if(income>210731){
//         taxTotal += (income-210731)*.33;
//         income = 210731;
//     }
//     if(income>147667){
//         taxTotal += (income - 147667)*.29;
//         income = 147667;
//     }
//     if(income>95259){
//         taxTotal += (income - 95259)*.26;
//         income = 95259;
//     }
//     if(income>47630){
//         taxTotal += (income - 47630)*.205;
//         income = 47630;
//     }
//     taxTotal += income * .15;
//     document.getElementById('taxOut').innerHTML = "$" + Math.round(taxTotal*100)/100;
    
// }