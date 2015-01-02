suite('Kondico.xor()', function() {
  // 2-input 
  test('#xor(true, true)', function() {
    // (xor 1 1) == 0
    var res = Kondico.xor(true, true);
    res.should.equal(false);
  });

  test('#xor(false, true)', function() {
    // (xor 0 1) == 1
    var res = Kondico.xor(false, true);
    res.should.equal(true);
  });

  test('#xor(true, false)', function() {
    // (xor 1 0) == 1
    var res = Kondico.xor(true, false);
    res.should.equal(true);
  });

  test('#xor(false, false)', function() {
    // (xor 0 0) == 0
    var res = Kondico.xor(false, false);
    res.should.equal(false);
  });

  // 3-input / odd generator
  test('#xor(true, true, true)', function() {
    // (xor 1 1 1) == 1
    var res = Kondico.xor(true, true, true);
    res.should.equal(true);
  });

  test('#xor(true, true, false)', function() {
    // (xor 1 1 0) == 0
    var res = Kondico.xor(true, true, false);
    res.should.equal(false);
  });

  test('#xor(true, false, true)', function() {
    // (xor 1 0 1) == 0
    var res = Kondico.xor(true, false, true);
    res.should.equal(false);
  });

  test('#xor(true, false, false)', function() {
    // (xor 1 0 0) == 1
    var res = Kondico.xor(true, false, false);
    res.should.equal(true);
  });

  test('#xor(false, true, true)', function() {
    // (xor 0 1 1) == 0
    var res = Kondico.xor(false, true, true);
    res.should.equal(false);
  });

  test('#xor(false, true, false)', function() {
    // (xor 0 1 0) == 1
    var res = Kondico.xor(false, true, false);
    res.should.equal(true);
  });

  test('#xor(false, false, true)', function() {
    // (xor 0 0 1) == 1
    var res = Kondico.xor(false, false, true);
    res.should.equal(true);
  });

  test('#xor(false, false, false)', function() {
    // (xor 0 0 0) == 0
    var res = Kondico.xor(false, false, false);
    res.should.equal(false);
  });
});