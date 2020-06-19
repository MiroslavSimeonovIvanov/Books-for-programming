var number = window.prompt("Hello, user! Please type a number", "");

function reverseDigitsOfNumber(number) {
  var reversedNumber = number.split("").reverse().join("");
  return reversedNumber;
}

console.log(reverseDigitsOfNumber(number));
