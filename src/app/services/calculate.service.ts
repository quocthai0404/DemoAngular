import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class CalculateService {
    add(a: number, b: number):number{
        return a+b;
    }
    mul(a: number, b: number):number{
        return a*b;
    }
}