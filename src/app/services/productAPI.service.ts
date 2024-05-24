import { Injectable } from "@angular/core";
import { BaseUrlService } from "./base_url.service";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductAPIService{
    constructor(
        private baseURL: BaseUrlService,
        private httpClient: HttpClient
    ){}

    async findAll(){
        return lastValueFrom(this.httpClient.get(this.baseURL.baseUrl+'product/findall'));
    }
}