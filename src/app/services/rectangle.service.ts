import { Injectable } from "@angular/core";
import { CalculateService } from "./calculate.service";

@Injectable ({
    providedIn: 'root'
})
export class RectangleService{
    constructor (
        private calculateService : CalculateService
    ){}

    area(a: number, b: number):number{
        return this.calculateService.mul(a, b);
    }

    per(a: number, b: number):number{
        return this.calculateService.add(a, b)*2;
    }

}