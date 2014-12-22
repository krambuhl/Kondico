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

function Kondico(options) {
  // dont double wrap kondico objects
  if (method instanceof Kondico) {
    return method;
  } 

  if (!(this instanceof Kondico)) {
    return new Kondico(method, options);
  }

  // this.option(options);
}


Kondico.prototype.option = function() {
  
};
return Kondico;
}));
