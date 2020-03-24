var trapezoidSideA = Number(window.prompt("Please enter the first side of " +
  "the trapezoid", ""));
var trapezoidSideB = Number(window.prompt("Now please enter the second side " +
  "of the trapezoid", ""));
var trapezoidHeight = Number(window.prompt("Nice! Now if it wouldn't be a " +
  "problem please enter the height of the trapezoid", ""));

var areaOfTrapezoid = ((trapezoidSideA + trapezoidSideB) / 2) * trapezoidHeight;

console.log("a = " + trapezoidSideA);
console.log("b = " + trapezoidSideB);
console.log("h = " + trapezoidHeight);
console.log("Area = ?");
console.log("----------");
console.log("Area = " + areaOfTrapezoid);
