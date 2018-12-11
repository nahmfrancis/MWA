import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-new-app';
  counter = 8;
  componentCounterValue : number;
  updateCount(e){
    console.log(e);
    this.componentCounterValue = e;

  }
}
