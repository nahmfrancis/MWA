function checkSystem() {
console.log("Checking the system...")
const osCheck = require('os');
const { from } = require('rxjs');
const { map, filter } = require('rxjs/operators');
const specs = [{
    cpus : osCheck.cpus().length,
    memory : Math.floor(osCheck.totalmem()*1e-9)
}];

from(specs)
.pipe(
filter((spec) => spec.memory < 4)
)
.subscribe(
    (x) => console.log("This app needs at least 4 GB of RAM")
);

from(specs)
.pipe(
filter((spec) => spec.cpus < 2)
)
.subscribe(
(x) => console.log("Processor is not supported")
);

from(specs)
.pipe(
filter((spec) => spec.memory > 4 && spec.cpus > 2)
)
.subscribe(
(x) => console.log("System is checked successfully.")
);
}

checkSystem();