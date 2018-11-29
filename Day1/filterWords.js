String.prototype.filterWords = function(arr){
myStr = this.split(' ');
arr.map(val => myStr = myStr.map(item => item.replace(val,"***")));
return myStr.join(" ");
}
