var text = window.prompt("Hi Sir/Madame! Would you mind entering some text",
  "");
var partOfText = window.prompt("Now enter substring to search for", "");
var lowerCaseText = text.toLowerCase();
var position = lowerCaseText.indexOf(partOfText);

function countSubstringInText(position, text) {
  var count = 0;

  while (position !== -1) {
    count++;
    position = lowerCaseText.indexOf(partOfText, position + 1);
  }

  return count;
}

function printResult() {
  console.log("The result is " + countSubstringInText(position, text) +
    " appearances.");
}

printResult();
