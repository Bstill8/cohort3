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
        
    }
}