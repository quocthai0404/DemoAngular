import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { Demo1Component } from './app/demo1.component';
import { Demo2Component } from './app/demo2.component';
import { Demo3Component } from './app/demo3.component';
import { Demo4Component } from './app/demo4.component';
import { Demo5Component } from './app/demo5.component';
import { LoginComponent } from './app/login.component';
import { Demo6Component } from './app/demo6.component';
import { Demo7Component } from './app/demo7.component';
import { Demo8Component } from './app/demo8.component';
import { Demo9Component } from './app/demo9/demo9.component';
import { Demo10Component } from './app/demo10/demo10.component';
import { Demo11Component } from './app/demo11/demo11.component';
import { CalculateAppComponent } from './app/calculateApp.component';
import { Demo12Component } from './app/demo12/demo12.component';
import { Demo12Component1Component } from './app/demo12/demo12_component1.component';
import { Demo13Component } from './app/demo13/demo13.component';

const bootstrap = () => bootstrapApplication(Demo13Component, config);

export default bootstrap;
