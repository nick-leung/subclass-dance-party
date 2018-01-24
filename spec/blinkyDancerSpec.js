describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe('addBall', function() {

  var addBall, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    addBall = makeFlipDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(addBall.$node).to.be.an.instanceof(jQuery);
  });

  it('should add another class: ball', function() {
    sinon.spy(addBall.$node, 'addClass');
    addBall.step();
    expect(addBall.$node.addClass('ball')).to.be.equal(addBall.$node.addClass('ball'));
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(addBall, 'step');
      expect(addBall.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(addBall.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(addBall.step.callCount).to.be.equal(2);
    });
  });
});

describe('addSean', function() {

  var addSean, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    addSean = makeSean(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(addSean.$node).to.be.an.instanceof(jQuery);
  });

  it('should add another class: sean', function() {
    sinon.spy(addSean.$node, 'addClass');
    addSean.step();
    expect(addSean.$node.addClass('sean')).to.be.equal(addSean.$node.addClass('sean'));
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(addSean, 'step');
      expect(addSean.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(addSean.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(addSean.step.callCount).to.be.equal(2);
    });
  });
});
