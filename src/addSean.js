var makeSean = function(top, left, timeBetweenSteps) {
    return new addSean(top, left, timeBetweenSteps);
 };
 
 // pseudoclassical 
 var addSean = function (top, left, timeBetweenSteps) {
   Dancer.call(this, top, left, timeBetweenSteps);
   // this.$node = $('<span class="ball"></span>');
 };
  addSean.prototype = Object.create(Dancer.prototype);  
  addSean.prototype.constructor = addSean;  
  addSean.prototype.step = function () {
   Dancer.prototype.step.call(this);
   this.$node.addClass('sean');
   this.$node.removeClass('dancer'); 
 }; 