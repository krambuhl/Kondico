(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.Kondico = factory();
  }
}(this, function() {
'use strict';

/**
 * Utilities
 *
 * Defines global utility functions
 *
 */

var Utl = {};


/**
 * Utilities.def
 *
 * Returns first non-undefined argument
 * 
 * @return  {Value} 
 */

Utl.def = function() {
  return _.find(arguments);
};

/**
 * Kondico
 *
 * Creates and sets up a state machines
 * 
 * @param   {Object}    Options
 * @param   {Instance}  Kondico Instance
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
