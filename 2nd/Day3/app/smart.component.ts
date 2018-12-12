import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-smart',
  template: `
    <app-dump [arr]="arr"></app-dump>
  `,
  
  styles: []
})
export class SmartComponent implements OnInit {

  @Input() arr:string[];
  constructor() { }

  ngOnInit() {
  }

}
