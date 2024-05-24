import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Account } from '../entities/account.entity';
import { AccountService } from '../services/account.service';


@Component({
  standalone: true,
  templateUrl: './profile.component.html',
  host: {'collision-id': 'ProfileComponent'}
})
export class ProfileComponent implements OnInit {
account : Account;
  constructor (private accountService: AccountService, 
    private activatedRoute : ActivatedRoute
  ){

  }
  
  ngOnInit(){
    this.activatedRoute.paramMap.subscribe(p=> {
        this.account = this.accountService.findByUsername(p.get("username"))
    })
    
  }
  
  title = 'home';
}
