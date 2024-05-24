import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  standalone: true,
  templateUrl: './welcome.component.html',
  host: {'collision-id': 'WelcomeComponent'},
  imports : [RouterLink, RouterOutlet]
})
export class WelcomeComponent implements OnInit {
  username : string;
  constructor (
    private activatedRoute: ActivatedRoute, 
    private router : Router
  ){

  }
  
  ngOnInit(){
    this.activatedRoute.paramMap.subscribe(p=> {
     
      this.username = p.get("username");
  })
  }
  
  logout(){
    this.router.navigate(['login']);
  }
  title = 'welcome';
}
