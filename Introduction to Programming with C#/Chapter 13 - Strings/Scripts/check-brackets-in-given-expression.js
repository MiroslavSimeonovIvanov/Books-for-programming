const openingBracket = "(";
const closingBracket = ")";

var arithmeticExpression = window.prompt("User please type an expression", "");

function areBracketsPutCorrectly(openingBracket, closingBracket,
    arithmeticExpression) {
  var counterOfOpeningBrackets = 0;
  var counterOfClosingBrackets = 0;

  for (let index = 0; index < arithmeticExpression.length; index++) {
    if (arithmeticExpression[index] === openingBracket) {
      counterOfOpeningBrackets++;
    } else if (arithmeticExpression[index] === closingBracket) {
      counterOfClosingBrackets++;
    }
  }

  if (counterOfOpeningBrackets === counterOfClosingBrackets) {
    return true;
  }
}

function printResult() {
  if (areBracketsPutCorrectly(openingBracket, closingBracket,
      arithmeticExpression) === true) {
    console.log("The brackets are put correctly.");
  } else {
    console.log("The brackets aren't put correctly.");
  }
}

printResult();
