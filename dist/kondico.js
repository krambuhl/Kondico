(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['formi'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('formi'));
  } else {
    root.Kondico = factory(root.formi);
  }
}(this, function(formi) {
'use strict';

/**
 * __slice(args, offset)__
 *
 * Converts arguments to array
 *
 * @param   {Array}  Arguments
 * @param   {Integer}  Begin 
 * @param   {Integer}  End 
 * @return  {Array} Array
 */

function slice(args, begin, end) {
  return Array.prototype.slice.call(args, begin, end);
}

/**
 * __construct__
 *
 * Constructs new instance with a variable number of arguments
 *
 * @param  {Function}  Constructor
 * @param  {Array} Arguments
 * @return {Instance} Instance
 */

function construct(ctor, args) {
  function F() {
    return ctor.apply(this, args);
  }
  F.prototype = ctor.prototype;
  return new F();
}

/**
 * __Kondico(func)__
 *
 * Constructor that creates a new 
 * state machines instance
 * 
 * @param   {String}    Composer method
 * @param   {Func}      
 * @return  {Kondico}     Kondico state machine
 */

function Kondico(method, options) {

  // this.option(options);
}


Kondico.prototype.option = function() {
  
};

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



return Kondico;
}));
