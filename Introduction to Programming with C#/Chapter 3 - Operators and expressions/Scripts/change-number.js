var number = Number(window.prompt("Please enter a number", ""));
var position = Number(window.prompt("Nice! Now if it wouldn't be a " +
  "problem please enter the position", ""));
var bit = Number(window.prompt("Now please enter the value of the " +
  "bit", ""));
var numberInBinaryType = number.toString(2);
var slicedNumber = numberInBinaryType.split("");
var arrayOfBits = slicedNumber.map(Number);
var index = (arrayOfBits.length - position) - 1;

arrayOfBits[index] = bit;
var joinedBits = arrayOfBits.join("");
var newNumber = parseInt(joinedBits, 2);

console.log(newNumber);
