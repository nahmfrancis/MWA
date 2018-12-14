import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  template: `<a [routerLink]="['/']">Home</a>
      <a [routerLink]="['users']">Users</a>
     <router-outlet></router-outlet>`
})
export class AppComponent {
 
   // save the data into local storage
  constructor(data : DataService) { 
    data.getOnlineData();
  }  
}
