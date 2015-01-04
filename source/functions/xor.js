Kondico.xor = function() {
  var tape = arguments[0];
  var i = 1;
  while (arguments.length > i) {
    tape = tape !== arguments[i++];
  }
  return tape;
};