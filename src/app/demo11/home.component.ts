import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  standalone: true,
  templateUrl: './home.component.html',
  host: {'collision-id': 'HomeComponent'}
})
export class HomeComponent implements OnInit {

  constructor (){

  }
  
  ngOnInit(){
    
  }
  
  title = 'home';
}
