var number = Number(window.prompt("Please type a positive integer number", ""));

if (number === 2 || number === 3 || number === 5 || number === 7) {
  console.log("The number you have entered - " + number + " is prime.");
} else {
  if (((number % 2) !== 0) && ((number % 3) !== 0) && ((number % 5) !== 0) &&
      ((number % 7) !== 0)) {
    console.log("The number you have entered - " + number + " is prime.");
  } else {
    console.log("The number you have entered - " + number + " isn't prime.");
  }
}
