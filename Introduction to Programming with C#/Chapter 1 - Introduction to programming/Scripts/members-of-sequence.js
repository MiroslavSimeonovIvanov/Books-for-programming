var sequenceOfNumbers = [];

for (let evenNumbers = 2, oddNumbers = -3; evenNumbers <= 100;
    evenNumbers = evenNumbers + 2, oddNumbers = oddNumbers - 2) {
  sequenceOfNumbers.push(evenNumbers, oddNumbers);
}

var result = sequenceOfNumbers.join(", ");
console.log(result);
