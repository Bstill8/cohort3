import React from 'react'
import City from './cities'
import 'C:/code/cohort-3/react-02/src/community.css'
import {pull, postData} from '../fetch'

let url = 'http://127.0.0.1:5000/'

class Community extends React.Component {
    constructor() {
        super()
        this.state = {
            Cities: {},
        }
        this.latitude = React.createRef();
        this.longitude = React.createRef();
        this.name = React.createRef();
        this.population = React.createRef();
    }
    whichSphere(key) {
        if (Number(this.state.Cities[key].latitude) >= 0) {
            return 'Northern Hemisphere';
        }
        return 'Southern Hemisphere'
    }
    getMostNorthern() {
        const cityArray = Object.values(this.state.Cities);
        let northern;
        let lat = -100;
        for (let a in cityArray) {
            if (cityArray[a].latitude > lat && cityArray[a].latitude != null) {
                lat = cityArray[a].latitude;
                northern = cityArray[a];
            }
        }
        if(cityArray.length > 0){
            return  northern.name;
        }
        return ''
        
    }
    getMostSouthern() {
        let southern;
        let lat = 100;
        const cityArray = Object.values(this.state.Cities);
        for (let a in cityArray) {
            if (cityArray[a].latitude < lat && cityArray[a].latitude != null) {
                lat = cityArray[a].latitude;
                southern = cityArray[a];
            }
        }
        if(cityArray.length > 0){
            return southern.name;
        }
        return ''
    }
    getPopulation(){
        const cityArray = Object.values(this.state.Cities);
        return '\n' + cityArray.reduce((sum, current) => { return sum += Number(current.population) }, 0)
    }
    createCity = async(name, latitude, longitude, population) => {
        let stateArray = Object.values(this.state.Cities);
        for(let i = 0; i < stateArray.length; i++){
            if(Math.abs(stateArray[i].latitude - latitude) < 1 && Math.abs(stateArray[i].longitude - longitude) < 1){
                alert('There is already a city in this location you must place it somewhere else')
                return;
            }
        }
        let key
        if (stateArray.length !== 0){
            key = Object.keys(this.state.Cities).reduce((a,b) => {return Number(a) + Number(b) + 1}, 1)
        }else{
            key = 1
        }
        let newCity = new city(name, latitude, longitude, population, key);
        await postData(url + 'add', newCity)
        let cityArray = await pull(url);
        let cityUpdate = {};
        cityArray.forEach(element => {
            cityUpdate[element.key] = element;
        });
        this.setState({
            Cities: cityUpdate,
        })
    }
    deleteCity = async(key) => {
        await postData(url + 'delete', {key})
        let cityArray = await pull(url)
        let cityUpdate = {};
        cityArray.forEach(element => {
            cityUpdate[element.key] = element;
        });
        this.setState({
            Cities: cityUpdate
        })
    }
    populationChange = async(change, key) =>{
        console.log(this.state.Cities)
        let changed = this.state.Cities[key];
        changed.population = Number(change) + Number(changed.population);
        await postData(url + 'update', changed)
        let cityArray = await pull(url);
        let cityUpdate = {};
        cityArray.forEach(element => {
            cityUpdate[element.key] = element;
        });
        this.setState({
            Cities: cityUpdate
        })
    }
    load = async() => {
        let cityArray = await pull(url);
        let cityUpdate = {};
        cityArray.forEach(element => {
            cityUpdate[element.key] = element;
        });
        this.setState({
            Cities: cityUpdate
        })
    }
    render() {
        return (
            <div id="container">
                <div id="controller">
                    <h1>Community</h1>
                    <input type="text" id="nameText" placeholder="Name" ref={ref => this.name = ref}/><br />
                    <input type="text" id="latText" placeholder="Latitude" ref={ref => this.latitude = ref} /><br />
                    <input type="text" id="lonText" placeholder="Longitude" ref={ref => this.longitude = ref} /><br />
                    <input type="text" id="popText" placeholder="Population" ref={ref => this.population = ref}/><br />
                    <input type="button" id="createCity" value="Create City" onClick={() => {this.createCity(this.name.value, this.latitude.value, this.longitude.value, this.population.value)}} /><br />
                    <input type="button" id="load" value="Load" onClick={this.load}/><br/>
                    <p id="mostSouthern">Most Northern: <br />{this.getMostNorthern()}</p><br />
                    <p id="mostNorthern">Most Southern: <br />{this.getMostSouthern()}</p><br />
                    <p id="population">Total Population: <br />{this.getPopulation()}</p><br />
                </div>
                <div id="cities">
                    <h1>Cities</h1>
                    {Object.values(this.state.Cities).map((city) => {
                        return (<City population={city.population} name={city.name} id={city.key} key={city.key}
                            latitude={city.latitude} longitude={city.longitude}
                            update={this.populationChange} delete={this.deleteCity} />
                        )
                    })}
                </div>
            </div>
        )
    }
}
class city {
    constructor(name, latitude, longitude, population, key){
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.population = population;
        this.key = key;
    }
    show(){
        return this.name +', '+ this.latitude.toString() +', '+ this.longitude.toString() +', '+ this.population.toString();
    }
    movedIn(num){
        this.population = Number(num) + Number(this.population);
    }
    movedOut(num){
        this.population = Number(this.population) - Number(num);
    }
    howBig(){
        if(this.population > 100000){
            return 'City';
        }else if(this.population >= 20000){
            return 'Large town';
        }else if(this.population >= 1000){
            return 'Town';
        }else if(this.population >= 100){
            return 'Village';
        }
        return 'Hamlet';
    }
}
export default Community