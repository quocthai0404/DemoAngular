import { Injectable } from "@angular/core";
import { Product } from "../entities/product.entity";

@Injectable({
    providedIn:'root'
})
export class ProductService{
    find():Product{
        return {
            id:1,
            name:'name 1',
            photo:'doremon.png',
            price:43,
            quantity:90
        }
    }

    findAll(): Product[]{
        return [
            {
                id:1, 
                name:'tivi',
                photo:'doremon.png',
                price:4.3,
                quantity:900
              }, {
                id:2, 
                name:'may tinh',
                photo:'doremon.png',
                price:6,
                quantity:200
              }, {
                id:3, 
                name:'dien thoai',
                photo:'doremon.png',
                price:33.3,
                quantity:300
              }
        ]
    }

    searchByPrices(min:number, max:number):Product[]{
        return this.findAll().filter(p => p.price >=min && p.price<=max);
    }

    searchByKw(kw : string):Product[]{
        return this.findAll().filter(p => p.name.toLowerCase().includes(kw.toLowerCase()));
    }

    searchById(id : number):Product{
        return this.findAll().find(p => p.id==id);
    }

    sortASC(){
        return this.findAll().sort((p1, p2) => p1.price - p2.price); 
    }

    sortDESC(){
        return this.findAll().sort((p1, p2) => p2.price - p1.price); 
    }

    sortWithPrices(min:number, max:number):Product[]{
        return this.findAll().filter(p => p.price >=min && p.price<=max).sort((p1, p2) => p1.price - p2.price);
    }

    limit(n: number){
        return this.findAll().sort((p1, p2) => p2.price - p1.price).slice(0, n); 
    }
    limit2(start: number, n:number){
        return this.findAll().sort((p1, p2) => p2.price - p1.price).slice(start, n+1); 
    }
    exist(id:number):boolean{
        return this.findAll().some(p=>p.id==id);
    }
}