const xCoordinateOfCircle = 0;
const yCoordinateOfCircle = 0;
const radius = 5;
const squareOfRadius = radius * radius;

const x1CoordinateOfRectangle = -1;
const y1CoordinateOfRectangle = 1;
const x2CoordinateOfRectangle = 5;
const y2CoordinateOfRectangle = 5;

var xCoordinateOfPoint = Number(window.prompt("Please enter the first " +
  "coordinate", ""));
var yCoordinateOfPoint = Number(window.prompt("Now please enter the second " +
  "coordinate", ""));
var squareOfDiameter = ((xCoordinateOfPoint - xCoordinateOfCircle) *
  (xCoordinateOfPoint - xCoordinateOfCircle)) +
  ((yCoordinateOfPoint - yCoordinateOfCircle) *
  (yCoordinateOfPoint - yCoordinateOfCircle));

if (squareOfDiameter < squareOfRadius) {
    console.log("The point is within the circle.");
}
else {
    console.log("The point is out of the circle.");
}

if (xCoordinateOfPoint > x1CoordinateOfRectangle &&
    xCoordinateOfPoint < x2CoordinateOfRectangle &&
    yCoordinateOfPoint > y1CoordinateOfRectangle &&
    yCoordinateOfPoint < y2CoordinateOfRectangle) {
    console.log("The point is within the rectangle.");
}
else {
    console.log("The point is out of the rectangle.");
}
