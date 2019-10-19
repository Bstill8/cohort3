import functions, {calculatorEnter, taxOutput, addNumber, Show, Total, provinces, lookup} from './functions.js';

// **********
//
// Add the event listeners
// 
var currentop = '';
var lastentry = 0;
idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));
buttons.addEventListener('click', (() => {
    if(event.target.id == 1 || event.target.id == 2 || event.target.id == 3 || event.target.id == 4 || event.target.id == 5 || event.target.id == 6 || event.target.id == 7 || event.target.id == 8 || event.target.id == 9 || event.target.id == 'zero'){
        document.getElementById('calcField').value = document.getElementById('calcField').value + event.target.value;
    }
    if(event.target.id == 'plus'||event.target.id =='minus'||event.target.id =='divide'||event.target.id =='multiply'){
        currentop = event.target.value;
        lastentry = document.getElementById('calcField').value;
        document.getElementById('calcField').value = 0;
        console.log(currentop);
    }
    if(event.target.id == 'ENTER'){
        console.log('enter')
        document.getElementById('calcField').value = calculatorEnter(document.getElementById('calcField').value, currentop, lastentry);
    }
    if(event.target.id == 'clear'){
        console.log('clear')
        lastentry = 0;
        document.getElementById('calcField').value = 0;
    }
}));
taxButton.addEventListener('click', (() => {
    document.getElementById('taxOut').innerHTML = "$" + Math.round(taxOutput(document.getElementById('taxEntry').value)*100)/100;
    document.getElementById('tax%').innerHTML = "at " + Math.round(taxOutput(document.getElementById('taxEntry').value)*100/parseFloat(document.getElementById('taxEntry').value)) + "%";
}));
var arr= [];
array.addEventListener('click', (() => {
    if(event.target.id == 'Add'){
        document.getElementById('arrMessage').innerHTML = addNumber(document.getElementById('arrText').value)
        if(addNumber(document.getElementById('arrText').value) == 'number added'){
            arr.push(document.getElementById('arrText').value);
            document.getElementById('arrText').value = "";
        }  
    }
    if(event.target.id == 'Show'){
        document.getElementById('arrMessage').innerHTML = Show(arr);
    }
    if(event.target.id == 'Total'){
        document.getElementById('arrMessage').innerHTML = Total(arr);
    }
    if(event.target.id == 'Clear'){
        document.getElementById('arrMessage').innerHTML = "Array Cleared";
        document.getElementById('arrText').value = "";
        arr = [];
    }
}));
Lookup.addEventListener('click', (() => {
    document.getElementById('dictMessage').innerHTML = lookup(document.getElementById('dictText').value, provinces);
}));