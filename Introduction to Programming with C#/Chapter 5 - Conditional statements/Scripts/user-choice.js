var userChoice = Number(window.prompt("Please enter 0, 1 or 2", ""));

switch (userChoice) {
  case 0:
  case 1:
    var number = Number(window.prompt("Enter a number", ""));
    number++;
    console.log(number);
    break;
  case 2:
    var text = window.prompt("Enter a string", "");
    var textWithAsterisk = text + "*";
    console.log(textWithAsterisk);
    break;
  default:
    console.log("Your choice is wrong! Please be careful.");
}
