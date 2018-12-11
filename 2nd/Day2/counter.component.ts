import { Component, OnInit, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-counter',
  inputs: ['counter'],
  outputs: ['counterChange'],
  template: `<button (click)=decrease()>-</button>{{counterValue}}<button (click)=increase()>+</button>`,
  styles: []
})
export class CounterComponent implements OnInit {
counterValue : number;
counterChange = new EventEmitter();
counter : number;
  constructor() { 
    this.counterValue = 0;
  }

  increase(){
    this.counterValue++;
    this.counterChange.emit(this.counterValue);
    return false;
  }
  decrease(){
    this.counterValue--;
    this.counterChange.emit(this.counterValue);
    return false;
  }
  ngOnInit(){
    this.counterValue = this.counter;
    this.counterChange.emit(this.counterValue);
  }

  

}
