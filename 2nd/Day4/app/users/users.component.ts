import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-users',
  template: `
    <p>  users   </p>
    <ul>
    <li *ngFor="let user of userData"><a [routerLink]="['users', user.login.uuid]">{{user.name.first}} {{user.name.last}}</a></li>
    </ul>
  `,
  styles: []
})
export class UsersComponent implements OnInit {
  
  userData: any[];

  constructor(data: DataService) {
   
    let Data: string = data.getSavedData();   
    if(Data != null)
    {
      console.log(Data);
      this.userData = JSON.parse(Data);
    } 
    else{
      console.log('error in users components');
    }

   }

  ngOnInit() {
  }

}
