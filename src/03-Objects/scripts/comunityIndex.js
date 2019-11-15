import {City, Community} from './community.js'
import {cardAdder, updateCard, deleteCard} from './comunityPresentation.js'
let comm1 = new Community;
createCity.addEventListener('click', (event) => {
    comm1.createCity(nameText.value, Number(latText.value), Number(lonText.value), popText.value, comm1.Cities.key.counter);
    cities.appendChild(cardAdder(comm1.Cities.key.counter, comm1.whichSphere(comm1.Cities.key.counter), comm1.Cities[comm1.Cities.key.counter].latitude, comm1.Cities[comm1.Cities.key.counter].longitude, nameText.value, comm1.Cities[comm1.Cities.key.counter].population));
    comm1.Cities.key.increment();
    mostNorthern.innerText = comm1.getMostNorthern();
    mostSouthern.innerText = comm1.getMostSouthern();
    population.innerText = comm1.getPopulation();
})
cities.addEventListener('click', (event) => {
    let key = event.target.id.match(/[^a-z]/ig)[0];
    let idRegex = new RegExp('[^'+key+']', 'g');
    let id = event.target.id.match(idRegex);
    id = id.reduce(function (sum, current){return sum + current}, '');
    let popID = event.target.parentNode.childNodes[9];
    let input = event.target.parentNode.childNodes[1].value;
    if(id == 'delete'){
        comm1.deleteCity(key);
        deleteCard(event.target.parentNode);
    }
    if(id == 'moveIn'){
        comm1.Cities[key].movedIn(input)
        updateCard(comm1, popID, key);
    }
    if(id == 'moveOut'){
        comm1.Cities[key].movedOut(input);
        updateCard(comm1, popID, key);
    }
    console.log(key);
})
export function cardValueAssigner(key){

}