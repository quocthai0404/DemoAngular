import { Routes } from '@angular/router';
import { HomeComponent } from './demo11/home.component';
import { AboutusComponent } from './demo11/aboutus.component';
import { NewsComponent } from './demo11/news.component';
import { Demo6Component } from './demo6.component';
import { ProductDetailsComponent } from './demo11/ProductDetails.component';
import { LoginComponent } from './login.component';
import { WelcomeComponent } from './demo11/welcome.component';
import { ProfileComponent } from './demo11/profile.component';
import { ContactComponent } from './demo11/contact.component';
import { Contact1Component } from './demo11/contact1.component';
import { Contact2Component } from './demo11/contact2.component';

export const routes: Routes = [
    {
        path: '', component : HomeComponent
    }, 
    {
        path: 'home', component : HomeComponent
    }, 
    {
        path: 'about-us', component : AboutusComponent
    }, 
    {
        path: 'news', component : NewsComponent
    },
    {
        path: 'product-list', component: Demo6Component
    }, 
    {
        path: 'product-list/product-details', component: ProductDetailsComponent
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'welcome', component: WelcomeComponent
    }, 

    {
        path: 'profile', component: ProfileComponent
    },
    {
        path: 'contact', component: ContactComponent, 
        children: [
            {
                path: '', 
                component: Contact1Component,
                
            },
            {
                path: 'contact1', 
                component: Contact1Component,
                
            },
            {
                path: 'contact2', 
                component: Contact2Component,
                
            }
        ]
    }
];
