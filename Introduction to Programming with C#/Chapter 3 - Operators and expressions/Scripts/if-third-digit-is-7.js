var number = Number(window.prompt("User please enter a number", ""));

var floatingPointNumber = (number % 1000) * 0.01;
var result = parseInt(floatingPointNumber);

if (result === 7) {
    console.log(true);
}
else {
    console.log(false);
}
