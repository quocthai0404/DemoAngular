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
  templateUrl: './demo4.component.html',
  imports: [FormsModule]
})
export class Demo4Component implements OnInit {
  
  result1: string;
  result2: string;
  product: Product;
  products:Product[];
  result4:boolean;
  area : number;
  per: number;
  constructor (
    private demoService :demoService,
    private productService : ProductService,
    private rectangleService : RectangleService
  ){}

  ngOnInit(){
    this.result1 = this.demoService.hello();
    this.result2 = this.demoService.hi("thai");
    this.product = this.productService.searchById(2);
    this.products = this.productService.limit2(0, 2);
    this.result4 = this.productService.exist(3);
    this.area = this.rectangleService.area(4,3);
    this.per = this.rectangleService.per(4,3);
  }
  

  title = 'demo 4';
}
