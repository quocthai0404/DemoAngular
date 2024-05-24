import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './entities/product.entity';
import { FormsModule } from '@angular/forms';
import { RectangleService } from './services/rectangle.service';
import { Country } from './entities/country.entity';
import { CountryService } from './services/country.service';
import { MeasureMemoryMode } from 'vm';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './calculateApp.component.html',
  imports: [FormsModule]
})
export class CalculateAppComponent implements OnInit {

    num1: number; 
    num2: number;
    subtractionResult: number;
    result: string;
    countCorrect: number;
    countIncorrect: number; 
    correctPercent: number;
    total : number;
    
  ngOnInit(){
    this.countCorrect=0;
    this.countIncorrect=0;
    this.correctPercent=0;
    this.total =0;
  }
  random(){
    do{
        this.num1 = Math.floor(Math.random()*11);
        this.num2 = Math.floor(Math.random()*11);

    }while(this.num1<this.num2)
    this.subtractionResult = this.num1-this.num2;
  }
  start(){
    this.random();
    this.total++;
  }
  submit(event : any){
    console.log(parseInt(event.target.value));
    console.log("result"+this.subtractionResult);
    
    if(parseInt(event.target.value)==this.subtractionResult){
        this.result = "Correct";
        this.countCorrect ++;
        
    }else{
        this.result = "Incorrect";
        this.countIncorrect ++;
    }
    
    this.correctPercent= this.countCorrect/this.total*100;
    this.start();
    
  }
  title = 'demo 8';
}
