Kondico.or = function() {
  var i = 0;
  while(arguments.length > i) {
    if (arguments[i++]) { return true; }
  }
  return false;
};