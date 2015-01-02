Kondico.not = Formi.map(function(val) {
  return !val;
});

Kondico.or = function() {
  var i = 0;
  while(arguments.length > i) {
    if (arguments[i++]) { return true; }
  }
  return false;
};

Kondico.and = function() {
  var i = 0;
  while(arguments.length > i) {
    if (!arguments[i++]) { return false; }
  }
  return true;
};

Kondico.nor = Formi.compose(Kondico.or, Kondico.not);
Kondico.nand = Formi.compose(Kondico.and, Kondico.not);

Kondico.xor = function() {
  var tape = arguments[0];
  var i = 1;
  while (arguments.length > i) {
    tape = tape !== arguments[i++];
  }
  return tape;
};

Kondico.xnor = function() {
  var tape = arguments[0];
  var i = 1;
  while (arguments.length > i) {
    tape = tape === arguments[i++];
  }
  return tape;
};

