import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Category } from '../entities/category.entity';
import { CategoryAPIService } from '../services/category.service';
import { response } from 'express';
import { ProductAPIService } from '../services/productAPI.service';
import { ProductAPI } from '../entities/productAPI.entity';



@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './demo13.component.html',
  host: { 'collision-id': 'demo13' },
  imports: [FormsModule]
})
export class Demo13Component implements OnInit {
  categories: Category[];
  products: ProductAPI[];
  kw: string;
  constructor(private categoryAPIService: CategoryAPIService
    , private productAPIService: ProductAPIService
  ) { }

  ngOnInit() {
    this.kw='';
    this.categoryAPIService.findAll().then(
      res => {

        this.categories = res as Category[];

      },
      err => {
        console.log(err);
      }
    );
    this.productAPIService.findAll().then(
      res => {

        this.products = res as ProductAPI[];

      },
      err => {
        console.log(err);
      }
    )

  }

  search(){
    console.log(this.kw)
    this.categoryAPIService.findByKw(this.kw).then(
      res => {

        this.categories = res as Category[];
      },
      err => {
        console.log(err);
      }
    );
  }
  title = 'home';
}
