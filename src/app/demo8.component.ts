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
  templateUrl: './demo8.component.html',
  imports: [FormsModule]
})
export class Demo8Component implements OnInit {

  constructor(
    private countryService: CountryService
  ){

  }
  
  countries: Country[];
  country : Country;
  fileInfo: File;
  files: File[];
  result: number;
  temp: string; 
  ngOnInit(){
   this.countries = this.countryService.findAll();
    this.country= this.countries[0];
    this.temp = "";
  }
  selectCountry(event: any){
    this.country = this.countryService.findById(parseInt(event.target.value))
  }
  selectFile(event : any){
    // let files = ;
    this.fileInfo = event.target.files[0];
    console.log(this.fileInfo);
  }
  selectFiles(event: any){
    this.files = event.target.files;
    console.log(this.files);
  }
 
  selectGender(event: any){
    console.log(event.target.value);
  }
  selectTemp($event){
    let nTemp = parseFloat(this.temp);
    $event.target.value == "cToF" ? this.result = (nTemp * 9/5) + 32 : this.result = (nTemp - 32)*5/9;
  }
  title = 'demo 8';
}
