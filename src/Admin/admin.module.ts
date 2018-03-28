import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from './admin.component';
const routes: Routes = [
  { path: 'Admin', component: AdminComponent },
];
@NgModule({
  declarations: [   
    AdminComponent   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) 
  ],
  providers: [],
  
})
export class AdminModule { }
