suite('Kondico.nand()', function() {
  test('#nand(true)', function() {
    var res = Kondico.nand(true);
    res.should.equal(false);
  });

  test('#nand(false)', function() {
    var res = Kondico.nand(false);
    res.should.equal(true);
  });

  test('#nand(true, true)', function() {
    var res = Kondico.nand(true, true);
    res.should.equal(false);
  });

  test('#nand(false, true)', function() {
    var res = Kondico.nand(false, true);
    res.should.equal(true);
  });

  test('#nand(true, false)', function() {
    var res = Kondico.nand(true, false);
    res.should.equal(true);
  });

  test('#nand(false, false)', function() {
    var res = Kondico.nand(true, false);
    res.should.equal(true);
  });

  test('#nand(true, true, true)', function() {
    var res = Kondico.nand(true, true, true);
    res.should.equal(false);
  });

  test('#nand(true, true, false)', function() {
    var res = Kondico.nand(true, true, false);
    res.should.equal(true);
  });

  test('#nand(true, false, false)', function() {
    var res = Kondico.nand(true, false, false);
    res.should.equal(true);
  });

  test('#nand(false, false, false)', function() {
    var res = Kondico.nand(false, false, false);
    res.should.equal(true);
  });
});