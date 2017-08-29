describe('blinkyRainbowDancer', function() {

  var blinkyRainbowDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyRainbowDancer = new BlinkyRainbowDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyRainbowDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that alters the css', function() {
    sinon.spy(blinkyRainbowDancer.$node, 'css');
    blinkyRainbowDancer.step();
    expect(blinkyRainbowDancer.$node.css.called).to.be.true;
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyRainbowDancer.$node, 'toggle');
    blinkyRainbowDancer.step();
    expect(blinkyRainbowDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyRainbowDancer, 'step');
      expect(blinkyRainbowDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyRainbowDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyRainbowDancer.step.callCount).to.be.equal(2);
    });
  });

  describe('dance', function() {
    it('should change the color every second', function() {
      var color1 = blinkyRainbowDancer.$node.css('border-color');
      var color4 = blinkyRainbowDancer.$node.css('border-color');
      expect(color1).to.be.equal(color4);

      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      var color2 = blinkyRainbowDancer.$node.css('border-color');
      expect(color1).to.not.be.equal(color2);

      clock.tick(timeBetweenSteps);

      var color3 = blinkyRainbowDancer.$node.css('border-color');
      expect(color2).to.not.be.equal(color3);
    });
  });

});