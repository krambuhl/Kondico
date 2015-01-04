suite('Kondico()', function() {
  test('#Kondico()', function() {
    var res = Kondico();
    res.should.be.an.instanceOf(Function);
    (res() === undefined).should.be.equal(true);
  });

  test('#Kondico(boolean)', function() {
    var res = Kondico(true === false);
    res.should.be.an.instanceOf(Function);
    res().should.be.equal(false);
  });

  test('#Kondico(function)', function() {
    var isMoreThan100 = Kondico(function(num) {
      return num > 100;
    });

    isMoreThan100.should.be.an.instanceOf(Function);
    isMoreThan100(90).should.be.equal(false);
    isMoreThan100(110).should.be.equal(true);
  });

  test('#Kondico(function, { once: true })', function() {
    var isFirstMoreThan100 = Kondico(function(num) {
      return num > 100;
    }, { once: true });

    isFirstMoreThan100.should.be.an.instanceOf(Function);
    isFirstMoreThan100(90).should.be.equal(false);
    isFirstMoreThan100(110).should.be.equal(false); // rreturns same as first result
  });

  test('#Kondico(function, { memoize: true })', function() {
    var memRangeRandom = Kondico(function(num) {
      return _.random(0, num);
    }, { memoize: true });

    memRangeRandom.should.be.an.instanceOf(Function);
    var result = memRangeRandom(90);
    memRangeRandom(90).should.be.equal(result);
    var result2 = memRangeRandom(120);
    memRangeRandom(120).should.be.equal(result2); // rreturns same as first result
  });

  test('#Kondico(function, { memoize: func })', function() {
    var hasher = function() {
      return _.first(arguments, 2).join('-');
    };

    var memRangeRandom = Kondico(function(num1, num2) {
      return _.random(num1, num2);
    }, { memoize: hasher });

    memRangeRandom.should.be.an.instanceOf(Function);
    var result = memRangeRandom(10, 90);
    memRangeRandom(10, 90).should.be.equal(result);
    var result2 = memRangeRandom(15, 120);
    memRangeRandom(15, 120).should.be.equal(result2); // rreturns same as first result
  });
});