var number = Number(window.prompt("Please enter a number", ""));

if (number % 35 === 0) {
    console.log("Hello user! The number you have entered is divisible " +
      "by 5 and 7 at the same time.");
}
else {
    console.log("Arghhh! Sorry the number you have entered isn't divisible " +
      "by 5 and 7 at the same time.");
}
