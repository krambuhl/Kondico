suite('Kondico.or()', function() {
  test('#or(true)', function() {
    var res = Kondico.or(true);
    res.should.equal(true);
  });

  test('#or(false)', function() {
    var res = Kondico.or(false);
    res.should.equal(false);
  });

  test('#or(true, true)', function() {
    var res = Kondico.or(true, true);
    res.should.equal(true);
  });

  test('#or(false, true)', function() {
    var res = Kondico.or(false, true);
    res.should.equal(true);
  });

  test('#or(true, false)', function() {
    var res = Kondico.or(true, false);
    res.should.equal(true);
  });

  test('#or(false, false)', function() {
    var res = Kondico.or(false, false);
    res.should.equal(false);
  });

  test('#or(true, true, true)', function() {
    var res = Kondico.or(true, true, true);
    res.should.equal(true);
  });

  test('#or(true, true, false)', function() {
    var res = Kondico.or(true, true, false);
    res.should.equal(true);
  });

  test('#or(true, false, false)', function() {
    var res = Kondico.or(true, false, false);
    res.should.equal(true);
  });

  test('#or(false, false, false)', function() {
    var res = Kondico.or(false, false, false);
    res.should.equal(false);
  });
});