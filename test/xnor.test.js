suite('Kondico.xnor()', function() {
  // 2-input 
  test('#xnor(true, true)', function() {
    var res = Kondico.xnor(true, true);
    res.should.equal(true);
  });

  test('#xnor(false, true)', function() {
    var res = Kondico.xnor(false, true);
    res.should.equal(false);
  });

  test('#xnor(true, false)', function() {
    var res = Kondico.xnor(true, false);
    res.should.equal(false);
  });

  test('#xnor(false, false)', function() {
    var res = Kondico.xnor(false, false);
    res.should.equal(true);
  });

  // 3-input / even generator
  test('#xnor(true, true, true)', function() {
    var res = Kondico.xnor(true, true, true);
    res.should.equal(true);
  });

  test('#xnor(true, true, false)', function() {
    var res = Kondico.xnor(true, true, false);
    res.should.equal(false);
  });

  test('#xnor(true, false, true)', function() {
    var res = Kondico.xnor(true, false, true);
    res.should.equal(false);
  });

  test('#xnor(true, false, false)', function() {
    var res = Kondico.xnor(true, false, false);
    res.should.equal(true);
  });

  test('#xnor(false, true, true)', function() {
    var res = Kondico.xnor(false, true, true);
    res.should.equal(false);
  });

  test('#xnor(false, true, false)', function() {
    var res = Kondico.xnor(false, true, false);
    res.should.equal(true);
  });

  test('#xnor(false, false, true)', function() {
    var res = Kondico.xnor(false, false, true);
    res.should.equal(true);
  });

  test('#xnor(false, false, false)', function() {
    var res = Kondico.xnor(false, false, false);
    res.should.equal(false);
  });
});