'use strict';

//=include("./utilities.js")

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