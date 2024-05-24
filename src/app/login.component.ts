import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Product } from './entities/product.entity';
import { FormsModule } from '@angular/forms';
import { RectangleService } from './services/rectangle.service';
import { AccountService } from './services/account.service';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [FormsModule]
})
export class LoginComponent implements OnInit {
  loginResult: boolean;
  username: string;
  password: string;
  constructor(
    private accountService: AccountService, 
    private router : Router
  ){}
  ngOnInit(){
    this.username = "";
    this.password = "";
    
  }
  Login(){
    this.loginResult = this.accountService.login(this.username, this.password);
    this.router.navigate(['welcome', {username: this.username}]);
    this.ngOnInit();

  }
  title = 'Login';
}
