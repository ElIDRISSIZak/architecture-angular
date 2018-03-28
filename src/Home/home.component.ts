import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  title = 'Home Page';
  profiles : Array<Object> = [ {name : "kamal Badni" , poste : "lead tech"} ,
            {name : "Mohammed Bougerra" , poste : "Devops "},
    {name : "Jacqueline Shaw" , poste : "Project Manage"},{name : "Abdelghani Baghdadi" , poste : "Developpeur"},
    {name : "Emmanuel" , poste : "Fonctionnel"},{name : "Sidi" , poste : "Database Manager"}
    ,{name : "Zoubir" , poste : "Developpeur"}];
  selectedProfile : any;
  getProfile( profile : any){
    this.title = 'Home Page';
    this.selectedProfile = profile;
  }
}
