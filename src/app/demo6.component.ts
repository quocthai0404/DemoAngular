import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Product } from './entities/product.entity';
import { FormsModule } from '@angular/forms';
import { demoService } from './services/demo.service';
import { ProductService } from './services/product.service';
import { RectangleService } from './services/rectangle.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './demo6.component.html',
  host: {'collision-id': 'Demo6Component'},
  imports: [FormsModule, RouterLink]
})
export class Demo6Component implements OnInit {

  products:Product[];
  kw : string;
  min: number;
  max: number;
  constructor (
    private productService : ProductService,

  ){}

  ngOnInit(){
    this.products = this.productService.findAll();
    this.kw = "";
  }
  search(){
    this.products = this.productService.searchByKw(this.kw);
  }
  searchByPrice(){
    this.products = this.productService.searchByPrices(this.min, this.max);
    console.log(this.min);
  }

  filterByName(event : any){

    this.products = this.productService.searchByKw(event.target.value);
  }
  title = 'demo 6';
}
