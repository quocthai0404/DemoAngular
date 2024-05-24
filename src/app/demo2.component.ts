import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './entities/product.entity';
import { Invoice } from './entities/invoice.entity';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './demo2.component.html'
})
export class Demo2Component implements OnInit {
  invoice: Invoice;
  ngOnInit(){
    this.invoice= {
      id:1, 
      name:'invoice',
      payment:'cash',
      customer:{
        id:1,
        name:'thai2',
        address:'asdasd'
      }, 
      products:[
        {
          id:1, 
          name:'name1',
          photo:'doremon.png',
          price:4.3,
          quantity:900
        }, {
          id:2, 
          name:'name2',
          photo:'doremon.png',
          price:4.2,
          quantity:200
        }, {
          id:3, 
          name:'name3',
          photo:'doremon.png',
          price:33.3,
          quantity:300
        }
      ]
    }
  }
  title = 'DemoAngular';
}
