var EventEmit = require('events');

class Gym extends EventEmit {
    constructor(){
    super();
      setInterval(() => this.emit('go'),1000);
    }
}
var myGym = new Gym();
myGym.on('go', () => console.log('Athele is working out'));