import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Product } from '../entities/product.entity';
import { ProductService } from '../services/product.service';


@Component({
  standalone: true,
  templateUrl: './ProductDetails.component.html',
  host: {'collision-id': 'HomeComponent'}
})
export class ProductDetailsComponent implements OnInit {

    product: Product;
  constructor (
    private productService : ProductService, 
    private activatedRoute: ActivatedRoute
  ){}
  
  ngOnInit(){
    this.activatedRoute.paramMap.subscribe(p=> {
        let id = parseInt(p.get("id"));
        this.product = this.productService.searchById(id);
    })
  }
  
  title = 'details';
}
