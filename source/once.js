function once(method, options) {
  return memoize.apply(this, [method, function() {
    return 0;
  }, options]);
}