import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  standalone: true,
  templateUrl: './aboutus.component.html',
  host: {'collision-id': 'AboutusComponent'}
})
export class AboutusComponent implements OnInit {

  constructor (
    private activatedRoute: ActivatedRoute,
    private router : Router
  ){}
  
  ngOnInit(){
    this.activatedRoute.paramMap.subscribe(p => {
      let id = p.get('id');
      console.log(id);
    });

  }
  
  redirect(){
    this.router.navigate(['home']);
  }
  redirect2(){
    this.router.navigate(['news', {id: 10, username: 'acc2'}]);
  }

  title = 'about us';
}
