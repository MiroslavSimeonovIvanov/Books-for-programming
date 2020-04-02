var coefficientA = Number(window.prompt("a = "));
var coefficientB = Number(window.prompt("b = "));
var coefficientC = Number(window.prompt("c = "));

var discriminantD = (coefficientB * coefficientB) -
  (4 * coefficientA * coefficientC);
var rootX = (-coefficientB) / (2 * coefficientA);
var rootX1 = (-coefficientB + Math.sqrt(discriminantD)) / (2 * coefficientA);
var rootX2 = (-coefficientB - Math.sqrt(discriminantD)) / (2 * coefficientA);

if (coefficientA === 0) {
    console.log("If a = 0, then the equation is linear, not quadratic.");
}

if (discriminantD > 0) {
    console.log("D = " + discriminantD);
    console.log("x1 = " + rootX1);
    console.log("x2 = " + rootX2);
}

if (discriminantD === 0) {
    console.log("x = " + rootX);
}

if (discriminantD < 0) {
    console.log("The discriminant is negative, then there are no real roots.");
}
