antlr4-javascript-cypher
========================

An UMD module wrapping ANTLR generated parser, lexer, listener and antlr itself for the
cypher query language.
based on the antlr4-javascript-sparql module by Szymon Danielczyk.

### Info 

Parser classes where generated from G4 grammar files using the ANTLR runtime, version 4.5.1.

The Cypher grammar file can be generated from the repository [opencypher/openCypher](https://github.com/opencypher/openCypher)
or downloaded from [here](https://s3.amazonaws.com/artifacts.opencypher.org/Cypher.g4).

For the generation of the javaScript lexer and parser there is a modification necessary to
 avoid the use of native symbols. This is done by the  `replace_target_symbols.sh`

Classes have been generated with the following commands:

```
java -Xmx500M -cp "antlr-4.5.1-complete.jar:$CLASSPATH" org.antlr.v4.Tool -Dlanguage=JavaScript grammars/cypher/Cypher.g4 -o lib
```

Or if antlr4 is in yout `$PATH` you can invoke

```
npm run build-cypher
```

Then the following modifications have been made to generated classes:

  * each class has been wrapped in a function for dependency injection
  * in `CypherLexer`, `atn` and `decisionToFDA` have been moved inside the constructor
  * in `CypherParser` `atn`, `decisionToFDA`, `sharedContextCache` have been moved inside the constructor; `atn` has been bound to `this` and the `Object.defineProperty` has been commented out

### Usage


To build UMD module type:    
 
```    
#as normal user in the project directory
npm install
npm run browserify
```

To minify:    
 
```    
#as normal user in the project directory
npm install
npm run browserify
```

To use with webpack define following shim antlr4-cypher.js 

```
var antlr4 = require('antlr4-base');
var CypherLexer = require('node_modules/antlr4-javascript-cypher/lib/CypherLexer.js');
var CypherParser = require('node_modules/antlr4-javascript-cypher/lib/CypherParser.js');
var CypherListener = require('node_modules/antlr4-javascript-cypher/lib/CypherListener');
var listener = CypherListener(antlr4);

module.exports = {
  CypherLexer: CypherLexer(antlr4),
  CypherParser: CypherParser(antlr4, listener, visitor),
  CypherListener: listener,
};
``` 

### Test 

```
npm install 
npm test
```


