import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './entities/product.entity';
import { FormsModule } from '@angular/forms';
import { RectangleService } from './services/rectangle.service';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './demo5.component.html',
  imports: [FormsModule]
})
export class Demo5Component implements OnInit {

  img : string;
  width: string;
  height: string;
  a: string;
  b: string;
  result: number;
  constructor(
    private rectangleService : RectangleService
  ){}
  ngOnInit(){
    this.img = "assets/images/doremon.png";
    this.width = "200";
    this.height = "200";

  }
  clickMe(){
    alert("hello");
  }
  changeBackground(event: any){
    let color = event.target.value;
    document.bgColor = color;
  }

  changePhoto(event : any){
    this.img = event.target.src;
  }

  resize(event: any){
    let size = event.target.value.split("x");
    this.width = size[0];
    this.height = size[1];
  }

  cal(event : any) { 
    event.target.value == "area" ? this.result = this.rectangleService.area(parseFloat(this.a), parseFloat(this.b)) : this.result = this.rectangleService.per(parseFloat(this.a), parseFloat(this.b));
    console.log(this.a);
    console.log(this.rectangleService.area(parseFloat(this.a), parseFloat(this.b)));
  }
  title = 'demo 5';
}
