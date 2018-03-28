import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {DataService} from "./data.service";
import { enable } from 'splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app Renault';
  currentUser: any;

  constructor( private router: Router, private _location: Location) {
    enable('tailing');
  /*  if (localStorage.getItem('currentUser') == null) {

      this.router.navigate(['Login']);

    } else {
      this.currentUser = JSON.parse(localStorage.getItem("currentUser"));

    }*/
  }
}
