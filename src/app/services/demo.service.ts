import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
}) 
export class demoService{
    hello():string{
        return "hello world";
    }
    hi(fullName: string):string{
        return "hi " + fullName;
    }
}