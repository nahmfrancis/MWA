import { Component, OnInit,  Input} from '@angular/core';

@Component({
  selector: 'app-dump',
  template: `
  <div appIsVisible>Directive isVisible</div>
  <div appLoggable>Directive isLoggable</div>
  <ul>
  <li *ngFor="let st of arr;">
  {{st}}
  </li>
  </ul>
  `,
  styles: []
})
export class DumpComponent implements OnInit {
  @Input() arr:string[];
  constructor() { }

  ngOnInit() {
  }

}
