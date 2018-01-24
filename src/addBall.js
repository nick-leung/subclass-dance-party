var makeFlipDancer = function(top, left, timeBetweenSteps) {
   return new addBall(top, left, timeBetweenSteps);
};

// pseudoclassical 
var addBall = function (top, left, timeBetweenSteps) {  
  Dancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="ball"></span>');
};
 addBall.prototype = Object.create(Dancer.prototype);  
 addBall.prototype.constructor = addBall;  
 addBall.prototype.step = function () {
  Dancer.prototype.step.call(this);
  this.$node.addClass('ball');
  this.$node.removeClass('dancer'); 
}; 