import {City, Community} from './community.js'
let comm1 = new Community;
cities.appendChild(cardAdder('calg'));
export function cardAdder(key){
    let longitude = document.createElement('p');
    let population = document.createElement('p');
    let newCard = document.createElement('div');
    let cityName = document.createElement('p');
    let input = document.createElement('input');
    let movedIn = document.createElement('button');
    let movedOut = document.createElement('button');
    let delet = document.createElement('button');
    let latitude = document.createElement('p');
    let hemisphere = document.createElement('p');
    input.setAttribute('type', 'text');
    movedIn.innerText = "move in";
    movedOut.innerText = "move out";
    delet.innerText = "delete city";
    cityName.className = "cityName";
    movedIn.className = "movedIn";
    movedOut.className = "movedOut";
    delet.className = "button";
    newCard.className = 'city';
    input.id = 'input'+key;
    input.placeholder = '# to move'
    movedOut.id = 'moveOut'+key;
    movedIn.id = 'moveIn'+key;
    delet.id = 'delete'+key;
    population.id = 'population'+key;
    newCard.id = 'card'+key;
    newCard.appendChild(cityName);
    newCard.appendChild(input);
    newCard.appendChild(document.createElement('br'));
    newCard.appendChild(movedIn);
    newCard.appendChild(movedOut);
    newCard.appendChild(document.createElement('br'));
    newCard.appendChild(delet);
    newCard.appendChild(latitude);
    newCard.appendChild(longitude);
    newCard.appendChild(population);    
    newCard.appendChild(hemisphere);
    return newCard;
}