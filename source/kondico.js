'use strict';

//=include("./utilities.js")

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