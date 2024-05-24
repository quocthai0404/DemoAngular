import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  standalone: true,
  templateUrl: './contact.component.html',
  host: {'collision-id': 'HomeComponent'}, 
  imports: [RouterLink, RouterOutlet]
})
export class ContactComponent implements OnInit {

  constructor (){

  }
  
  ngOnInit(){
    
  }
  
  title = 'home';
}
