const xCoordinateOfCircle = 0;
const yCoordinateOfCircle = 0;
const radius = 5;
const squareOfRadius = radius * radius;

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
