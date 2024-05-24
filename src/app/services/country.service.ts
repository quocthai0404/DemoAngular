import { Injectable } from "@angular/core";
import { Country } from "../entities/country.entity";


@Injectable({
    providedIn: 'root'
})
export class CountryService{
    countries: Country[];
    constructor(){
        this.countries = [{
            id: 1,
            name:"Japan",
            flag: "japan.PNG",
            area: 134123,
            cities: [{id:1, name:"japan city"}, {id:2, name:"japan city 2"}, {id:3, name:"japan city 3"}]
        }, {
            id: 2,
            name:"vietnam",
            flag: "vietnamFlag.png",
            area: 134123,
            cities: [{id:4, name:"vietnam city"}, {id:5, name:"vietnam city 2"}, {id:6, name:"vietnam city 3"}]
        } ,
        {
            id: 3,
            name:"USA",
            flag: "USAflag.jpg",
            area: 134123, 
            cities: [{id:7, name:"usa city"}, {id:8, name:"usa city 2"}, {id:9, name:"usa city 3"}]
        }];
    }
    findAll(): Country[]{
        return this.countries;
    }
    findById(id: number): Country{
        return this.countries.find(c=> c.id==id);
    }
}