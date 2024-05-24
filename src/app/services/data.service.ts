import { Injectable } from "@angular/core";
import { Account } from "../entities/account.entity";
import { Data } from "../entities/data.entity";
import { Rectangle } from "../entities/rectangle.entity";

@Injectable({
    providedIn: 'root'
})
export class DataService{
    data : Data;
    constructor(){
        this.data = {
            msg:"", 
            rectangle: {
                area: 0, perimeter: 0
            }
        };
    }
    updateMsg(msg : string){
        this.data.msg = msg;
    }

    updateRTG(area : number, perimeter: number){
        this.data.rectangle.area = area;
        this.data.rectangle.perimeter = perimeter;
    }
    
}