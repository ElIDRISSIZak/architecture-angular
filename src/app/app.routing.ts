import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from '../Admin/admin.component';
import {HomeComponent} from '../Home/home.component';
import {LoginComponent} from '../Login/login.component';

import {HomeModule} from '../Home/home.module';
import {AdminModule} from '../Admin/admin.module';
import {LoginModule} from '../Login/login.module';


const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Admin', component: AdminComponent },
  { path: 'welcome', component: HomeComponent },
  { path: 'Login', component: LoginComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
