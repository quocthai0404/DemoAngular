import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  standalone: true,
  templateUrl: './news.component.html',
  host: {'collision-id': 'NewsComponent'}
})
export class NewsComponent implements OnInit {

  constructor (private activatedRoute: ActivatedRoute){

  }
  
  ngOnInit(){
    this.activatedRoute.paramMap.subscribe(p=> {
      let id = p.get("id");
      let username = p.get("username");
      console.log(id, username);
    });
  }
  
  title = 'news';
}
