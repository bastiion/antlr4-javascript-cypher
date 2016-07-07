// Generated from browser-cypher/Cypher.g4 by ANTLR 4.5.3
// jshint ignore: start
module.exports = function (antlr4) {

// This class defines a complete listener for a parse tree produced by CypherParser.
  function CypherListener() {
    antlr4.tree.ParseTreeListener.call(this);
    return this;
  }

  CypherListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
  CypherListener.prototype.constructor = CypherListener;

// Enter a parse tree produced by CypherParser#cypher.
  CypherListener.prototype.enterCypher = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#cypher.
  CypherListener.prototype.exitCypher = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#statement.
  CypherListener.prototype.enterStatement = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#statement.
  CypherListener.prototype.exitStatement = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#query.
  CypherListener.prototype.enterQuery = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#query.
  CypherListener.prototype.exitQuery = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#regularQuery.
  CypherListener.prototype.enterRegularQuery = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#regularQuery.
  CypherListener.prototype.exitRegularQuery = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#singleQuery.
  CypherListener.prototype.enterSingleQuery = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#singleQuery.
  CypherListener.prototype.exitSingleQuery = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#union.
  CypherListener.prototype.enterUnion = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#union.
  CypherListener.prototype.exitUnion = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#clause.
  CypherListener.prototype.enterClause = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#clause.
  CypherListener.prototype.exitClause = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#c_match.
  CypherListener.prototype.enterC_match = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#c_match.
  CypherListener.prototype.exitC_match = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#unwind.
  CypherListener.prototype.enterUnwind = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#unwind.
  CypherListener.prototype.exitUnwind = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#c_merge.
  CypherListener.prototype.enterC_merge = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#c_merge.
  CypherListener.prototype.exitC_merge = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#c_mergeAction.
  CypherListener.prototype.enterC_mergeAction = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#c_mergeAction.
  CypherListener.prototype.exitC_mergeAction = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#create.
  CypherListener.prototype.enterCreate = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#create.
  CypherListener.prototype.exitCreate = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#c_set.
  CypherListener.prototype.enterC_set = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#c_set.
  CypherListener.prototype.exitC_set = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#setItem.
  CypherListener.prototype.enterSetItem = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#setItem.
  CypherListener.prototype.exitSetItem = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#c_delete.
  CypherListener.prototype.enterC_delete = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#c_delete.
  CypherListener.prototype.exitC_delete = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#remove.
  CypherListener.prototype.enterRemove = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#remove.
  CypherListener.prototype.exitRemove = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#removeItem.
  CypherListener.prototype.enterRemoveItem = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#removeItem.
  CypherListener.prototype.exitRemoveItem = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#c_with.
  CypherListener.prototype.enterC_with = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#c_with.
  CypherListener.prototype.exitC_with = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#c_return.
  CypherListener.prototype.enterC_return = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#c_return.
  CypherListener.prototype.exitC_return = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#c_returnBody.
  CypherListener.prototype.enterC_returnBody = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#c_returnBody.
  CypherListener.prototype.exitC_returnBody = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#c_returnItems.
  CypherListener.prototype.enterC_returnItems = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#c_returnItems.
  CypherListener.prototype.exitC_returnItems = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#c_returnItem.
  CypherListener.prototype.enterC_returnItem = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#c_returnItem.
  CypherListener.prototype.exitC_returnItem = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#order.
  CypherListener.prototype.enterOrder = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#order.
  CypherListener.prototype.exitOrder = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#skip.
  CypherListener.prototype.enterSkip = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#skip.
  CypherListener.prototype.exitSkip = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#limit.
  CypherListener.prototype.enterLimit = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#limit.
  CypherListener.prototype.exitLimit = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#sortItem.
  CypherListener.prototype.enterSortItem = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#sortItem.
  CypherListener.prototype.exitSortItem = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#where.
  CypherListener.prototype.enterWhere = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#where.
  CypherListener.prototype.exitWhere = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#pattern.
  CypherListener.prototype.enterPattern = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#pattern.
  CypherListener.prototype.exitPattern = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#patternPart.
  CypherListener.prototype.enterPatternPart = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#patternPart.
  CypherListener.prototype.exitPatternPart = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#anonymousPatternPart.
  CypherListener.prototype.enterAnonymousPatternPart = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#anonymousPatternPart.
  CypherListener.prototype.exitAnonymousPatternPart = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#patternElement.
  CypherListener.prototype.enterPatternElement = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#patternElement.
  CypherListener.prototype.exitPatternElement = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#nodePattern.
  CypherListener.prototype.enterNodePattern = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#nodePattern.
  CypherListener.prototype.exitNodePattern = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#patternElementChain.
  CypherListener.prototype.enterPatternElementChain = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#patternElementChain.
  CypherListener.prototype.exitPatternElementChain = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#relationshipPattern.
  CypherListener.prototype.enterRelationshipPattern = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#relationshipPattern.
  CypherListener.prototype.exitRelationshipPattern = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#relationshipDetail.
  CypherListener.prototype.enterRelationshipDetail = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#relationshipDetail.
  CypherListener.prototype.exitRelationshipDetail = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#properties.
  CypherListener.prototype.enterProperties = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#properties.
  CypherListener.prototype.exitProperties = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#relationshipTypes.
  CypherListener.prototype.enterRelationshipTypes = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#relationshipTypes.
  CypherListener.prototype.exitRelationshipTypes = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#nodeLabels.
  CypherListener.prototype.enterNodeLabels = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#nodeLabels.
  CypherListener.prototype.exitNodeLabels = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#nodeLabel.
  CypherListener.prototype.enterNodeLabel = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#nodeLabel.
  CypherListener.prototype.exitNodeLabel = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#rangeLiteral.
  CypherListener.prototype.enterRangeLiteral = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#rangeLiteral.
  CypherListener.prototype.exitRangeLiteral = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#labelName.
  CypherListener.prototype.enterLabelName = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#labelName.
  CypherListener.prototype.exitLabelName = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#relTypeName.
  CypherListener.prototype.enterRelTypeName = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#relTypeName.
  CypherListener.prototype.exitRelTypeName = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#expression.
  CypherListener.prototype.enterExpression = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#expression.
  CypherListener.prototype.exitExpression = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#expression12.
  CypherListener.prototype.enterExpression12 = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#expression12.
  CypherListener.prototype.exitExpression12 = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#expression11.
  CypherListener.prototype.enterExpression11 = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#expression11.
  CypherListener.prototype.exitExpression11 = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#expression10.
  CypherListener.prototype.enterExpression10 = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#expression10.
  CypherListener.prototype.exitExpression10 = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#expression9.
  CypherListener.prototype.enterExpression9 = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#expression9.
  CypherListener.prototype.exitExpression9 = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#expression8.
  CypherListener.prototype.enterExpression8 = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#expression8.
  CypherListener.prototype.exitExpression8 = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#expression7.
  CypherListener.prototype.enterExpression7 = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#expression7.
  CypherListener.prototype.exitExpression7 = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#expression6.
  CypherListener.prototype.enterExpression6 = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#expression6.
  CypherListener.prototype.exitExpression6 = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#expression5.
  CypherListener.prototype.enterExpression5 = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#expression5.
  CypherListener.prototype.exitExpression5 = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#expression4.
  CypherListener.prototype.enterExpression4 = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#expression4.
  CypherListener.prototype.exitExpression4 = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#expression3.
  CypherListener.prototype.enterExpression3 = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#expression3.
  CypherListener.prototype.exitExpression3 = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#expression2.
  CypherListener.prototype.enterExpression2 = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#expression2.
  CypherListener.prototype.exitExpression2 = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#atom.
  CypherListener.prototype.enterAtom = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#atom.
  CypherListener.prototype.exitAtom = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#partialComparisonExpression.
  CypherListener.prototype.enterPartialComparisonExpression = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#partialComparisonExpression.
  CypherListener.prototype.exitPartialComparisonExpression = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#parenthesizedExpression.
  CypherListener.prototype.enterParenthesizedExpression = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#parenthesizedExpression.
  CypherListener.prototype.exitParenthesizedExpression = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#relationshipsPattern.
  CypherListener.prototype.enterRelationshipsPattern = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#relationshipsPattern.
  CypherListener.prototype.exitRelationshipsPattern = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#filterExpression.
  CypherListener.prototype.enterFilterExpression = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#filterExpression.
  CypherListener.prototype.exitFilterExpression = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#idInColl.
  CypherListener.prototype.enterIdInColl = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#idInColl.
  CypherListener.prototype.exitIdInColl = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#functionInvocation.
  CypherListener.prototype.enterFunctionInvocation = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#functionInvocation.
  CypherListener.prototype.exitFunctionInvocation = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#functionName.
  CypherListener.prototype.enterFunctionName = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#functionName.
  CypherListener.prototype.exitFunctionName = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#listComprehension.
  CypherListener.prototype.enterListComprehension = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#listComprehension.
  CypherListener.prototype.exitListComprehension = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#propertyLookup.
  CypherListener.prototype.enterPropertyLookup = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#propertyLookup.
  CypherListener.prototype.exitPropertyLookup = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#variable.
  CypherListener.prototype.enterVariable = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#variable.
  CypherListener.prototype.exitVariable = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#numberLiteral.
  CypherListener.prototype.enterNumberLiteral = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#numberLiteral.
  CypherListener.prototype.exitNumberLiteral = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#mapLiteral.
  CypherListener.prototype.enterMapLiteral = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#mapLiteral.
  CypherListener.prototype.exitMapLiteral = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#parameter.
  CypherListener.prototype.enterParameter = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#parameter.
  CypherListener.prototype.exitParameter = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#propertyExpression.
  CypherListener.prototype.enterPropertyExpression = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#propertyExpression.
  CypherListener.prototype.exitPropertyExpression = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#propertyKeyName.
  CypherListener.prototype.enterPropertyKeyName = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#propertyKeyName.
  CypherListener.prototype.exitPropertyKeyName = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#signedIntegerLiteral.
  CypherListener.prototype.enterSignedIntegerLiteral = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#signedIntegerLiteral.
  CypherListener.prototype.exitSignedIntegerLiteral = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#unsignedIntegerLiteral.
  CypherListener.prototype.enterUnsignedIntegerLiteral = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#unsignedIntegerLiteral.
  CypherListener.prototype.exitUnsignedIntegerLiteral = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#hexInteger.
  CypherListener.prototype.enterHexInteger = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#hexInteger.
  CypherListener.prototype.exitHexInteger = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#decimalInteger.
  CypherListener.prototype.enterDecimalInteger = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#decimalInteger.
  CypherListener.prototype.exitDecimalInteger = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#octalInteger.
  CypherListener.prototype.enterOctalInteger = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#octalInteger.
  CypherListener.prototype.exitOctalInteger = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#unsignedHexInteger.
  CypherListener.prototype.enterUnsignedHexInteger = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#unsignedHexInteger.
  CypherListener.prototype.exitUnsignedHexInteger = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#unsignedDecimalInteger.
  CypherListener.prototype.enterUnsignedDecimalInteger = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#unsignedDecimalInteger.
  CypherListener.prototype.exitUnsignedDecimalInteger = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#unsignedOctalInteger.
  CypherListener.prototype.enterUnsignedOctalInteger = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#unsignedOctalInteger.
  CypherListener.prototype.exitUnsignedOctalInteger = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#hexString.
  CypherListener.prototype.enterHexString = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#hexString.
  CypherListener.prototype.exitHexString = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#digitString.
  CypherListener.prototype.enterDigitString = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#digitString.
  CypherListener.prototype.exitDigitString = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#octalString.
  CypherListener.prototype.enterOctalString = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#octalString.
  CypherListener.prototype.exitOctalString = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#digit.
  CypherListener.prototype.enterDigit = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#digit.
  CypherListener.prototype.exitDigit = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#octDigit.
  CypherListener.prototype.enterOctDigit = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#octDigit.
  CypherListener.prototype.exitOctDigit = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#doubleLiteral.
  CypherListener.prototype.enterDoubleLiteral = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#doubleLiteral.
  CypherListener.prototype.exitDoubleLiteral = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#exponentDecimalReal.
  CypherListener.prototype.enterExponentDecimalReal = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#exponentDecimalReal.
  CypherListener.prototype.exitExponentDecimalReal = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#regularDecimalReal.
  CypherListener.prototype.enterRegularDecimalReal = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#regularDecimalReal.
  CypherListener.prototype.exitRegularDecimalReal = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#symbolicName.
  CypherListener.prototype.enterSymbolicName = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#symbolicName.
  CypherListener.prototype.exitSymbolicName = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#ws.
  CypherListener.prototype.enterWs = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#ws.
  CypherListener.prototype.exitWs = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#sp.
  CypherListener.prototype.enterSp = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#sp.
  CypherListener.prototype.exitSp = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#leftArrowHead.
  CypherListener.prototype.enterLeftArrowHead = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#leftArrowHead.
  CypherListener.prototype.exitLeftArrowHead = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#rightArrowHead.
  CypherListener.prototype.enterRightArrowHead = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#rightArrowHead.
  CypherListener.prototype.exitRightArrowHead = function (ctx) {
  };


// Enter a parse tree produced by CypherParser#dash.
  CypherListener.prototype.enterDash = function (ctx) {
  };

// Exit a parse tree produced by CypherParser#dash.
  CypherListener.prototype.exitDash = function (ctx) {
  };


  return CypherListener;
}