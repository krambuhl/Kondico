'use strict';

//=include("./utilities.js")

/**
 * __Kondico(func)__
 *
 * Constructor that creates a new 
 * state machines instance
 * 
 * @param   {Func}      
 * @return  {Kondico}     Kondico function
 */

function Kondico(method, options) {
  var opts = {},
    func = method;

  if (options !== undefined) {
    opts = options;
  }

  if (method === undefined) {
    func = function() { return undefined; };
  } else if (typeof method !== 'function') {
    func = function() { return method; };
  }

  if (opts.once) {
    return once(func, opts);
  }

  if (opts.memoize) {
    return memoize(func, opts.memoize, opts);
  }

  return func;
}

//=include("./memoize.js")
//=include("./once.js")

//=include("./functions/not.js")
//=include("./functions/or.js")
//=include("./functions/and.js")
//=include("./functions/nor.js")
//=include("./functions/nand.js")
//=include("./functions/xor.js")
//=include("./functions/xnor.js")
