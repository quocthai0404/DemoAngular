import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './entities/product.entity';
import { FormsModule } from '@angular/forms';
import { demoService } from './services/demo.service';
import { ProductService } from './services/product.service';
import { RectangleService } from './services/rectangle.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './demo7.component.html',
  imports: [FormsModule]
})
export class Demo7Component implements OnInit {

  constructor (){

  }
  f : string;
  ngOnInit(){
    this.f = "";
  }
  display(event : any){
 
  }

  displayEnter(event : any){
    console.log(event.target.value);
  }
  change(event: any){
    this.f = (parseFloat(event.target.value)*1.8+32)+"";
    if(!event.target.value){
      this.f = "";
    }
  }
  title = 'demo 7';
}
