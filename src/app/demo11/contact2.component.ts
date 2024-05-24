import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  standalone: true,
  templateUrl: './contact2.component.html',
  host: {'collision-id': 'Contact2Component'}
})
export class Contact2Component implements OnInit {

  constructor (){

  }
  
  ngOnInit(){
    
  }
  
  title = 'home';
}
