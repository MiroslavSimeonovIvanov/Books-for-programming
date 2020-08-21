var listOfWords = window.prompt("User please enter a few words", "");

function sortListOfWordsAlphabetically(listOfWords) {
  var regularExpression = /,\s|,/g;
  var sortedListOfWords = listOfWords.split(regularExpression).sort()
    .join(", ");

  return sortedListOfWords;
}

function printResult() {
  console.log(sortListOfWordsAlphabetically(listOfWords));
}

printResult();
