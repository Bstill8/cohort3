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
    whichSphere(latitude){
        if(Number(latitude) >= 0){
            return 'Northern Hemisphere';
        }
        return 'Southern Hemisphere'
    }
    getMostNorthern(){
        
    }

}