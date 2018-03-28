import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

//Shared Module
import { SharedModule } from './shared/shared.module';
//routing module
import { AppRoutingModule } from './app.routing';
import {AdminComponent} from '../Admin/admin.component';
import {HomeComponent} from '../Home/home.component';
import {HomeModule} from '../Home/home.module';
import {AdminModule} from '../Admin/admin.module';
import {LoginModule} from '../Login/login.module';
import {DataService} from "./data.service";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {AuthConfig, JwksValidationHandler, OAuthModule, ValidationHandler} from 'angular-oauth2-oidc';
import {BASE_URL} from './app.tokens';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HomeModule,
    AdminModule,
    AppRoutingModule,
    LoginModule,
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  providers: [DataService ,   { provide: BASE_URL, useValue: "http://127.0.0.1:8080" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
