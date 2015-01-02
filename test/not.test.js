suite('Kondico.not()', function() {
  test('#not(true)', function() {
    var res = Kondico.not(true);
    res.should.equal(false);
  });

  test('#not(false)', function() {
    var res = Kondico.not(false);
    res.should.equal(true);
  });

  test('#not(false, true)', function() {
    var res = Kondico.not(false, true);
    res[0].should.equal(true);
    res[1].should.equal(false);
  });
});