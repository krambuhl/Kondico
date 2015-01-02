suite('Kondico.nor()', function() {
  test('#nor(true)', function() {
    var res = Kondico.nor(true);
    res.should.equal(false);
  });

  test('#nor(false)', function() {
    var res = Kondico.nor(false);
    res.should.equal(true);
  });

  test('#nor(true, true)', function() {
    var res = Kondico.nor(true, true);
    res.should.equal(false);
  });

  test('#nor(false, true)', function() {
    var res = Kondico.nor(false, true);
    res.should.equal(false);
  });

  test('#nor(true, false)', function() {
    var res = Kondico.nor(true, false);
    res.should.equal(false);
  });

  test('#nor(false, false)', function() {
    var res = Kondico.nor(false, false);
    res.should.equal(true);
  });

  test('#nor(true, true, true)', function() {
    var res = Kondico.nor(true, true, true);
    res.should.equal(false);
  });

  test('#nor(true, true, false)', function() {
    var res = Kondico.nor(true, true, false);
    res.should.equal(false);
  });

  test('#nor(true, false, false)', function() {
    var res = Kondico.nor(true, false, false);
    res.should.equal(false);
  });

  test('#nor(false, false, false)', function() {
    var res = Kondico.nor(false, false, false);
    res.should.equal(true);
  });
});