function memoize(method, hasher, options) {
  var cache = {};
  
  if (typeof hasher !== 'function') {
    hasher = function() { return arguments[0]; };
  }

  return function() {
    var hash = hasher.apply(this, arguments);
    if (cache[hash] === undefined) {
      cache[hash] = method.apply(this, arguments);
    } 
    return cache[hash];
  };
}