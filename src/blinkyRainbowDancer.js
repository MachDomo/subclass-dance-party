var BlinkyRainbowDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  RainbowDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function





};

BlinkyRainbowDancer.prototype = Object.create(RainbowDancer.prototype);
BlinkyRainbowDancer.prototype.constructor = BlinkyRainbowDancer;
BlinkyRainbowDancer.prototype.rainbowStep = BlinkyRainbowDancer.prototype.step;
BlinkyRainbowDancer.prototype.step = function() {
  this.rainbowStep();

  this.$node.toggle();
  // New stuff
};