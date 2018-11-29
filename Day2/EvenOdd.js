Array.prototype.even = function(){
    setTimeout(evenNums, 0, this);
}
var evenNums = function(num) {
    console.log(num.filter(val => val%2 === 0).map(item => item));
}
Array.prototype.odd = function(){
    setTimeout(oddNums, 0, this);
}
var oddNums = function(num) {
    console.log(num.filter(val => val%2 !== 0).map(item => item));
}
