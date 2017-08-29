var RainbowDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  Dancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function





};

RainbowDancer.prototype = Object.create(Dancer.prototype);
RainbowDancer.prototype.constructor = RainbowDancer;
RainbowDancer.prototype.dancerStep = RainbowDancer.prototype.step;
RainbowDancer.prototype.getRandomColor = function() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

RainbowDancer.prototype.step = function() {

  this.dancerStep();

  var color = this.getRandomColor();
  this.$node.css('border-color', color);
  // New stuff
};