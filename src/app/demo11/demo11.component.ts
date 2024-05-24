import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './demo11.component.html',
  imports : [RouterLink, RouterOutlet]
})
export class Demo11Component implements OnInit {

  constructor (){

  }
  
  ngOnInit(){
    
  }
  
  title = 'demo 7';
}
