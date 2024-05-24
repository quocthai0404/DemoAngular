import { Injectable } from "@angular/core";
import { Account } from "../entities/account.entity";

@Injectable({
    providedIn: 'root'
})
export class AccountService{
    accounts: Account[];
    constructor(){
        this.accounts = [{
            username: "acc1",
            password:"123",
            fullName: "name1"
        }, {
            username: "acc2",
            password:"123",
            fullName : "name2"
        } ,
        {
            username: "acc3",
            password:"123",
            fullName : "name3"
        }];
    }

    login(username : string, password : string): boolean{
        return this.accounts.filter(a => a.username == username && a.password == password).length > 0;
    }
    findByUsername(username : string): Account{
        return this.accounts.find(a=> a.username== username);
    }
}