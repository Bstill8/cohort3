export class City {
    constructor(name, latitude, longitude, population){
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.population = population;
    }
    show(){
        return 'test1, 50, 100, 20000';
    }
}