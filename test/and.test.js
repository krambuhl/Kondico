suite('Kondico.and()', function() {
  test('#and(true)', function() {
    var res = Kondico.and(true);
    res.should.equal(true);
  });

  test('#and(false)', function() {
    var res = Kondico.and(false);
    res.should.equal(false);
  });

  test('#and(true, true)', function() {
    var res = Kondico.and(true, true);
    res.should.equal(true);
  });

  test('#and(false, true)', function() {
    var res = Kondico.and(false, true);
    res.should.equal(false);
  });

  test('#and(true, false)', function() {
    var res = Kondico.and(true, false);
    res.should.equal(false);
  });

  test('#and(false, false)', function() {
    var res = Kondico.and(true, false);
    res.should.equal(false);
  });

  test('#and(true, true, true)', function() {
    var res = Kondico.and(true, true, true);
    res.should.equal(true);
  });

  test('#and(true, true, false)', function() {
    var res = Kondico.and(true, true, false);
    res.should.equal(false);
  });

  test('#and(true, false, false)', function() {
    var res = Kondico.and(true, false, false);
    res.should.equal(false);
  });

  test('#and(false, false, false)', function() {
    var res = Kondico.and(false, false, false);
    res.should.equal(false);
  });
});