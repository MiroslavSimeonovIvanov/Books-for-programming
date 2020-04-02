var circleRadius = Number(window.prompt("Please enter the radius of the " +
  "circle", ""));
var perimeterOfCircle = 2 * Math.PI * circleRadius;
var areaOfCircle = Math.PI * Math.pow(circleRadius, 2);

console.log("C = " + perimeterOfCircle);
console.log("A = " + areaOfCircle);
