var number = Number(window.prompt("Please type a number", ""));
var position = Number(window.prompt("Now please enter the position", ""));
var numberInBinaryType = number.toString(2);
var bitAtCertainPosition = Number(numberInBinaryType
    .charAt(position));

if (bitAtCertainPosition === 1) {
  console.log(true);
} else {
  console.log(false);
}
