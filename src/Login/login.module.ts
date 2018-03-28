import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import {OAuthService} from "angular-oauth2-oidc";
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
    { path: 'Login', component: LoginComponent },
];

@NgModule({
    declarations: [
      LoginComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
    ],
    providers: [OAuthService ],

})
export class LoginModule { }
