import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './entities/product.entity';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './demo3.component.html',
  imports: [FormsModule]
})
export class Demo3Component implements OnInit {
  fullName:string;
  status:boolean;
  gender: string;
  roleId:string;
  width: string;
  height:string;
  ngOnInit(){
    this.fullName="";
    this.status=false;
    this.roleId='2';
    this.width='120';
    this.height='120';
  }
  

  title = 'demo 3';
}
