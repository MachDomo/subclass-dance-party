describe('rainbowDancer', function() {

  var rainbowDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    rainbowDancer = new RainbowDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(rainbowDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that alters the css', function() {
    sinon.spy(rainbowDancer.$node, 'css');
    rainbowDancer.step();
    expect(rainbowDancer.$node.css.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(rainbowDancer, 'step');
      expect(rainbowDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(rainbowDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(rainbowDancer.step.callCount).to.be.equal(2);
    });
  });

  describe('dance', function() {
    it('should change the color every second', function() {
      var color1 = rainbowDancer.$node.css('border-color');
      var color4 = rainbowDancer.$node.css('border-color');
      expect(color1).to.be.equal(color4);

      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      var color2 = rainbowDancer.$node.css('border-color');
      expect(color1).to.not.be.equal(color2);

      clock.tick(timeBetweenSteps);

      var color3 = rainbowDancer.$node.css('border-color');
      expect(color2).to.not.be.equal(color3);
    });
  });

});
