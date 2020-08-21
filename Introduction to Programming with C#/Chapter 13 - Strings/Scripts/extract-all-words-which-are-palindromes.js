var text = window.prompt("Hello user! Please type some text", "");

function isNotEmptyString(element) {
  if (element !== "") {
    return element;
  }
}

function extractWordsWhichArePalindromes(text) {
  var regularExpression = /[.,:-?!\s]+/g;
  var words = text.split(regularExpression);
  var palindromes = [];
  var result;

  words = words.filter(isNotEmptyString);
  words.forEach((word) => {
    var reversedWord = word.split("").reverse().join("");

    if (word === reversedWord) {
      palindromes.push(word);
    }
  });

  result = palindromes.join(", ");
  return result;
}

function printResult() {
  console.log(extractWordsWhichArePalindromes(text));
}

printResult();
