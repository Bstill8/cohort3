import {add, show} from './functions'
test('test the add function', () => {
    document.body.innerHTML = 
'<div id="container">'+
    '<div id="main">'
        '<h1 id="header">Basic DOM</h1>'+
        '<p id="list title">This is a list of stuff</p>'+
        '<ol id="list">'+
            '<li id="li1">Item 1</li>'+
            '<li id="li2">Item 2</li>'+
            '<li id="li3">Item 3</li>'+
        '</ol>'+
        '<input type="button" value="Show" id="Show">'+
        '<input type="button" value="Add" id="Add">'+
    '</div>'+
'</div>';

})