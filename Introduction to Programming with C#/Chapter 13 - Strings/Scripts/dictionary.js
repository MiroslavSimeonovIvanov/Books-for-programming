var word = window.prompt("Hello, user! Please type a word", "");
var dictionary = {
  ".NET": "platform for applications from Microsoft",
  "CLR": "managed execution environment for .NET",
  "namespace": "hierarchical organization of classes"
};

function printResult() {
  for (var key in dictionary) {
    var value = dictionary[key];

    if (word === key) {
      console.log(`${key} - ${value}`);
    }
  }

  if (dictionary.hasOwnProperty(word) === false) {
    console.log("The word isn't in the dictionary.");
  }
}

printResult();
