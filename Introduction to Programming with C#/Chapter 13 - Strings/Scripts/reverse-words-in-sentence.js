var sentence = window.prompt("Hello user! Please enter a sentence", "");

function isNotUndefined(element) {
  if (element !== undefined) {
    return element;
  }
}

function reverseWordsInSentence(sentence) {
  var regularExpression = /\s|(,\s)/g;
  var reversedSentence = sentence.split(regularExpression).reverse();
  var result;

  reversedSentence = reversedSentence.filter(isNotUndefined);

  result = reversedSentence.join(" ");
  return result;
}

function printResult() {
  console.log(reverseWordsInSentence(sentence));
}

printResult();
