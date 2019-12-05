import React from 'react'
import City from './cities'
import 'C:/code/cohort-3/react-02/src/community.css'

class Community extends React.Component {
    constructor() {
        super()
        this.state = {
            Cities: {},
            counter: 0
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
        const cityArray = Object.values(this.Cities);
        let northern;
        let lat = -100;
        for (let a in cityArray) {
            if (cityArray[a].latitude > lat && cityArray[a].latitude != null) {
                lat = cityArray[a].latitude;
                northern = cityArray[a];
            }
        }
        return 'Most Northern:\n' + northern.name;
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
        return 'Most Southern:\n' + southern.name;
    }
    getPopulation() {
        const cityArray = Object.values(this.state.Cities);
        return 'Total Population:\n' + cityArray.reduce((sum, current) => { return sum += Number(current.population) }, 0)
    }
    createCity = (name, latitude, longitude, population, key) => {
        let newCity = new City(name, latitude, longitude, population, key);
        let cityUpdate = this.state.Cities;
        cityUpdate[key] = newCity;
        this.setState({
            Cities: cityUpdate,
            counter: this.state.counter++
        })
    }
    deleteCity = (key) => {
        let cityUpdate = this.state.Cities
        delete this.cityUpdate[key];
        this.setState({
            Cities: cityUpdate
        })
    }
    populationChange(change) {

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
                    <input type="button" id="createCity" value="create city" onClick={() => {this.createCity(this.name.value, this.latitude.value, this.longitude.value, this.population.value, this.state.counter)}} /><br />
                    <p id="mostSouthern">Most Northern: <br /></p>
                    <p id="mostNorthern">Most Southern: <br /></p>
                    <p id="population">Total Population: <br /></p>
                </div>
                <div id="cities">
                    <h1>Cities</h1>
                    {Object.values(this.state.Cities).map((city) => {

                        return (<City population={city.population} name={city.name} key={city.key}
                            latitude={city.latitude} longitude={city.longitude}
                            update={this.populationChange} delete={this.deleteCity} />
                        )

                    })}
                </div>
            </div>
        )
    }

}
export default Community