import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './entities/product.entity';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './demo1.component.html',
  styleUrls: [
      './demo1.component.css',
      './demo11.component.css'
  ]
})
export class Demo1Component implements OnInit {

  id : number;
  username : string;
  status : boolean;
  phone : any;
  price : number;
  quantity : number;
  photo : string ;
  height : number ;
  width : number;
  product : Product;
  score : number;
  names : string[];
  products : Product[];
  ngOnInit(){
    this.id = 1;
    this.username = "abc";
    this.status = false;
    this.phone = "23423412";
    this.price = 2993.4;
    this.quantity = 10;
    this.photo="doremon.png",
    this.height=100;
    this.width=100;
    this.score = 2;
    this.product = {
      id:1, 
      name:'name1',
      photo:'doremon.png',
      price:4.3,
      quantity:900
    };
    this.names = [
      "name 1", "name 2", "name 3"
    ];
    this.products = [
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
    ];
  }
  title = 'DemoAngular';
}
