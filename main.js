// Template has been taken from 
// https://github.com/umdjs/umd/blob/master/templates/returnExports.js

// Uses Node, AMD or browser globals to create a module.

// If you want something that will work in other stricter CommonJS environments,
// or if you need to create a circular dependency, see commonJsStrict.js

// Defines a module "returnExports" that depends another module called "b".
// Note that the name of the module is implied by the file name. It is best
// if the file name and the exported global have matching names.

// If the 'b' module also uses this type of boilerplate, then
// in the browser, it will create a global .b that is used below.

// If you do not want to support the browser global path, then you
// can remove the `root` use and the passing `this` as the first arg to
// the top function.


// if the module has no dependencies, the above pattern can be simplified to
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.returnExports = factory();
  }
}(this, function () {
  var CypherLexer = require('./lib/CypherLexer.js');
  var CypherParser = require('./lib/CypherParser.js');
  var CypherListener = require('./lib/CypherListener');
  var antlr4 = require('antlr4');
  
  var listener = CypherListener(antlr4);

  // Just return a value to define the module export.
  // This example returns an object, but the module
  // can return a function as the exported value.
  return {
    CypherLexer: CypherLexer(antlr4),
    CypherParser: CypherParser(antlr4, listener),
    CypherListener: listener,
    antlr4: antlr4
    
  };
}));