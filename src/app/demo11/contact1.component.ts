import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  standalone: true,
  templateUrl: './contact1.component.html',
  host: {'collision-id': 'Contact1Component'}
})
export class Contact1Component implements OnInit {

  constructor (){

  }
  
  ngOnInit(){
    
  }
  
  title = 'home';
}
