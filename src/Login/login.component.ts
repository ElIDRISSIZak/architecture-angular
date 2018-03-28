import { Component } from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import { authConfig } from '../app/auth.config';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  providers: [OAuthService]
})
export class LoginComponent {
  title = 'Login Page  ';
  loginFailed: boolean = false;
  userProfile: object;

  constructor(private oauthService: OAuthService) {

    /*this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocument();*/

    // Login-Url
    this.oauthService.loginUrl = "http://127.0.0.1:8080"; //Id-Provider?
    this.oauthService.requireHttps = false;
    //this.oauthService.issuer = "http://127.0.0.1:8080"; //Id-Provider?
    // URL of the SPA to redirect the user to after login
    //this.oauthService.redirectUri ="http://127.0.0.1:4200";

    // The SPA's id. Register SPA with this id at the auth-server
    this.oauthService.clientId = "client-rrf-frontend";
    this.oauthService.silentRefreshRedirectUri = window.location.origin + "/silent-refresh.html";

    // set the scope for the permissions the client should request
    this.oauthService.scope = "openid profile email";
    this.oauthService.responseType = 'id_token token';
    // Use setStorage to use sessionStorage or another implementation of the TS-type Storage
    // instead of localStorage
    this.oauthService.setStorage(sessionStorage);

    // To also enable single-sign-out set the url for your auth-server's logout-endpoint here
    this.oauthService.logoutUrl = "http://127.0.0.1:8080";

    // This method just tries to parse the token(s) within the url when
    // the auth-server redirects the user back to the web-app
    // It dosn't send the user the the login page
    this.oauthService.tryLogin();

  }

  login() {
    this.oauthService.initImplicitFlow();
    // the parameter here is optional. It's passed around and can be used after logging in
  }

  logout() {
    this.oauthService.logOut();
  }

  loadUserProfile(): void {
    this
      .oauthService
      .loadUserProfile()
      .then(up => this.userProfile = up);

  }

  get givenName() {
    var claims = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    return claims['given_name'];
  }

  get familyName() {
    var claims = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    return claims['family_name'];
  }

  testSilentRefresh() {
    /*
     * Tweak config for implicit flow.
     * This is needed b/c this sample uses both flows
    */
    //this.oauthService.clientId = "spa-demo";
    this.oauthService.oidc = true;

    this
      .oauthService
      .silentRefresh()
      .then(info => console.debug('refresh ok', info))
      .catch(err => console.error('refresh error', err));
  }

  set requestAccessToken(value: boolean) {
    this.oauthService.requestAccessToken = value;
    localStorage.setItem('requestAccessToken', '' + value);
  }

  get requestAccessToken() {
    return this.oauthService.requestAccessToken;
  }

  get id_token() {
    return this.oauthService.getIdToken();
  }

  get access_token() {
    return this.oauthService.getAccessToken();
  }

  get id_token_expiration() {
    return this.oauthService.getIdTokenExpiration();
  }

  get access_token_expiration() {
    return this.oauthService.getAccessTokenExpiration();
  }
}
