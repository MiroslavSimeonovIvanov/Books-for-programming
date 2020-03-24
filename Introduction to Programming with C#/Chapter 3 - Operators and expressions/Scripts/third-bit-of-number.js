var number = Number(window.prompt("Hello user! Please type a number", ""));
var numberInBinaryType = number.toString(2);

console.log(number + " (Dec)");
console.log(numberInBinaryType + " (Bin)");

var thirdBit = numberInBinaryType.charAt(numberInBinaryType.length - 4);
console.log("Search complete. The third bit of the number is " + thirdBit +
  ".");
