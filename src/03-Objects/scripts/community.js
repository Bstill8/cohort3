export class City {
    constructor(name, latitude, longitude, population){
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.population = population;
    }
    show(){
        return this.name +', '+ this.latitude.toString() +', '+ this.longitude.toString() +', '+ this.population.toString();
    }
    movedIn(num){
        this.population += num;
    }
    movedOut(num){
        this.population -= num;
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
export class Community{
    constructor(){
        this.Cities = {key: {counter: 0,
                        increment: function (){this.counter++},
                        name: null,
                        latitude: null,
                        longitude: null,
                        population: 0
                    }};
    }
    addCity(City){
        this.Cities[City.name] = City;
    }
    whichSphere(key){
        if(Number(this.Cities[key].latitude) >= 0){
            return 'Northern Hemisphere';
        }
        return 'Southern Hemisphere'
    }
    getMostNorthern(){
        let northern;
        let lat = -100;
        const cityArray = Object.values(this.Cities);
        for(let a in cityArray){
                if(cityArray[a].latitude > lat && cityArray[a].latitude != null){
                lat = cityArray[a].latitude;
                northern = cityArray[a];
            }
        }
        return 'Most Northern:\n' + northern.name;
    }
    getMostSouthern(){
        let southern;
        let lat = 100;
        const cityArray = Object.values(this.Cities);
        for(let a in cityArray){
                if(cityArray[a].latitude < lat && cityArray[a].latitude != null){
                lat = cityArray[a].latitude;
                southern = cityArray[a];
            }
        }
        return 'Most Southern:\n' + southern.name;
    }
    getPopulation(){
        const cityArray = Object.values(this.Cities);
        return 'Total Population:\n' + cityArray.reduce((sum, current) => {return sum += Number(current.population)}, 0) 
    }
    createCity(name, latitude, longitude, population, key){
        let newCity = new City(name, latitude, longitude, population);
        this.Cities[key] = newCity;
    }
    deleteCity(name){
        delete this.Cities[name];
    }
}