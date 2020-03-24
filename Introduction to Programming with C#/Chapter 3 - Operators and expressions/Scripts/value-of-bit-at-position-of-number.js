var number = Number(window.prompt("Hello user! Please type a number", ""));
var position = Number(window.prompt("Now enter the position", ""));
var numberInBinaryType = number.toString(2);
var bitAtCertainPosition = Number(numberInBinaryType
    .charAt(position));

console.log(bitAtCertainPosition);
