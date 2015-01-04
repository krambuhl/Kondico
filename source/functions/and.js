Kondico.and = function() {
  var i = 0;
  while(arguments.length > i) {
    if (!arguments[i++]) { return false; }
  }
  return true;
};