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
        this.Cities = {};
    }
    addCity(City){
        this.Cities[City.name] = City;
    }
    whichSphere(name){
        if(Number(this.Cities[name].latitude) >= 0){
            return 'Northern Hemisphere';
        }
        return 'Southern Hemisphere'
    }
    getMostNorthern(){
        var northern;
        var lat = -90;
        const cityArray = Object.values(this.Cities);
        for(let a in cityArray){
            if(cityArray[a].latitude > lat){
                lat = cityArray[a].latitude;
                northern = cityArray[a];
            }
        }
        return northern.name;
    }
    getMostSouthern(){
        var southern;
        var lat = 90;
        const cityArray = Object.values(this.Cities);
        for(let a in cityArray){
            if(cityArray[a].latitude < lat){
                lat = cityArray[a].latitude;
                southern = cityArray[a];
            }
        }
        return southern.name;
    }
    getPopulation(){
        const cityArray = Object.values(this.Cities);
        return cityArray.reduce((sum, current) => {return sum += current.population}, 0) 
    }
    createCity(name, latitude, longitude, population){
        let newCity = new City(name, latitude, longitude, population);
        this.Cities[name] = newCity;
    }
    deleteCity(name){
        delete this.Cities[name];
    }
}