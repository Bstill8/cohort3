export function cardAdder(key, hemi, lat, lon, name, pop){
    let longitude = document.createElement('p');
    let population = document.createElement('p');
    let newCard = document.createElement('div');
    let cityName = document.createElement('h2');
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
    hemisphere.innerText = hemi;
    latitude.innerText = 'Latitude: ' + lat;
    longitude.innerText = 'Longitude: ' + lon;
    cityName.innerText = name;
    population.innerText = 'Population: ' + pop;
    cityName.className = "cityName";
    movedIn.className = "movedIn";
    movedOut.className = "movedOut";
    delet.className = "button";
    newCard.className = 'city';
    input.id = 'input'+key;
    input.placeholder = '# to move'
    cityName.id = 'cityName'+key;
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
export function updateCard(community, id, key){
    id.innerText = 'Population: '+ community.Cities[key].population;
}
export function deleteCard(card){
    card.parentNode.removeChild(card);
}