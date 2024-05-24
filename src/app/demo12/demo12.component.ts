import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Demo12Component1Component } from './demo12_component1.component';
import { Demo12Component2Component } from './demo12_component2.component';
import { Demo12Component3Component } from './demo12_component3.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './demo12.component.html',
  host: { 'collision-id': 'demo12' },
  imports: [RouterLink,
    RouterOutlet,
    Demo12Component1Component,
    Demo12Component2Component,
    Demo12Component3Component]
})
export class Demo12Component implements OnInit {

  constructor() {

  }

  ngOnInit() {

  }

  title = 'home';
}
