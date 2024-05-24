import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Data } from '../entities/data.entity';


@Component({
    selector: 'demo12-component2',
  standalone: true,
  templateUrl: './demo12_component2.component.html',
  host: {'collision-id': 'demo12'}
})
export class Demo12Component2Component implements OnInit {
  data: Data;
  constructor (private dataService: DataService){

  }
  
  ngOnInit(){
    this.data = this.dataService.data;
  }
  
  title = 'home';
}
