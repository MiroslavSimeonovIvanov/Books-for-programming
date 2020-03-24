var number = window.prompt("User please enter a four digit number", "");
var slicedNumber = number.split("");
var arrayOfDigits = slicedNumber.map(Number);
var sumOfDigits = 0;
var reversedNumberAsString = slicedNumber.reverse().join("");
var reversedNumber = Number(reversedNumberAsString);
var lastDigit = arrayOfDigits.pop();
var lastDigitInFront = arrayOfDigits.unshift(lastDigit);

for (let index = 0; index < arrayOfDigits.length; index++) {
  sumOfDigits = sumOfDigits + arrayOfDigits[index];
}

console.log(sumOfDigits);
console.log(reversedNumber);
console.log(Number(arrayOfDigits.join("")));

[arrayOfDigits[0], arrayOfDigits[1]] = [arrayOfDigits[1], arrayOfDigits[0]];

console.log(Number(arrayOfDigits.join("")));
