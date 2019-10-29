import {show, add, mainAdd, addBefore, delet, addAfter} from './functions.js'
//main.addEventListener("click", console.log(idFunction(event.target.id)));
Show.addEventListener("click", show);
Add.addEventListener("click", add);
left.addEventListener('click', (event) => {
    if(event.target.id == 'addButton'){
        mainAdd();
    }
});
left.addEventListener('click', (event) => {
    addBefore(event.target.parentNode.id, event.target.className);
    addAfter(event.target.parentNode.id, event.target.className);
    delet(event.target.parentNode.id, event.target.className);
});
