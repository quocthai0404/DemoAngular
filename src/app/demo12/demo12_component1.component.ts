import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';


@Component({
    selector: 'demo12-component1',
  standalone: true,
  templateUrl: './demo12_component1.component.html',
  host: {'collision-id': 'demo12'}, 
  imports: [FormsModule]
})
export class Demo12Component1Component implements OnInit {
  fullname: string;
  A: string; 
  B: string;
  constructor(private dataService: DataService){}
  ngOnInit(){
    this.fullname = '';
    this.A = "";
    this.B = '';
    
  }
  display(){
   this.dataService.updateMsg("Hello "+this.fullname);
   
  }
  calculate(){
    let a = parseFloat(this.A);
    let b = parseFloat(this.B);
    let area = a*b;
    let perimeter = (a+b)*2;
    this.dataService.updateRTG(area, perimeter);
  }
  title = 'home';
}
