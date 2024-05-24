import { Injectable } from "@angular/core";
import { Account } from "../entities/account.entity";
import { BaseUrlService } from "./base_url.service";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CategoryAPIService{
    constructor(
        private baseURL: BaseUrlService,
        private httpClient: HttpClient
    ){}
    async findAll(){
        return lastValueFrom(this.httpClient.get(this.baseURL.baseUrl+'category/findall'));
    }
    
    async findByKw(keyword : string){
        return lastValueFrom(this.httpClient.get(this.baseURL.baseUrl+'category/findByKw?kw='+keyword));
    }
}