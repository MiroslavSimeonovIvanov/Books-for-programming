var rectangleWidth = Number(window.prompt("Please enter the width of the " +
  "rectangle", ""));
var rectangleHeight = Number(window.prompt("Now please enter the height of " +
  "the rectangle", ""));

var perimeterOfRectangle = 2 * (rectangleWidth + rectangleHeight);
var areaOfRectangle = rectangleWidth * rectangleHeight;

console.log("width = " + rectangleWidth);
console.log("height = " + rectangleHeight);
console.log("Perimeter = ?");
console.log("Area = ?");
console.log("----------");
console.log("Perimeter = " + perimeterOfRectangle);
console.log("Area = " + areaOfRectangle);
