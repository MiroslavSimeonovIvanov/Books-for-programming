var userChoice = Number(window.prompt("------ Menu ------\n" +
  " 1 - Area of triangle by given three sides\n 2 - Area of triangle by " +
  "given side and height to it\n 3 - Area of triangle by given two sides " +
  "and angle between them\n\nPlease enter 1, 2 or 3", ""));

switch (userChoice) {
  case 1:
    var sideA = Number(window.prompt("a = ", ""));
    var sideB = Number(window.prompt("b = ", ""));
    var sideC = Number(window.prompt("c = ", ""));

    function calculateAreaOfTriangle(sideA, sideB, ...theArgs) {
      var semiperimeter = (sideA + sideB + sideC) / 2;
      var area = Math.sqrt(semiperimeter * (semiperimeter - sideA) *
        (semiperimeter - sideB) * (semiperimeter - sideC));
      return area;
    }

    console.log(`S = ${calculateAreaOfTriangle(sideA, sideB, sideC)}`);
    break;
  case 2:
    var sideB = Number(window.prompt("b = ", ""));
    var height = Number(window.prompt("h = ", ""));

    function calculateAreaOfTriangle(sideB, height) {
      var area = (sideB * height) / 2;
      return area;
    }

    console.log(`S = ${calculateAreaOfTriangle(sideB, height)}`);
    break;
  /* The third case has a bug. I don't know why the calculated area isn't
     correct. */
/* case 3:
    var sideA = Number(window.prompt("a = ", ""));
    var sideB = Number(window.prompt("b = ", ""));
    var angleBetweenTwoSides = Number(window.prompt("angle = ", ""));

    function calculateAreaOfTriangle(sideA, sideB, ...theArgs) {
      var area = (sideA * sideB * Math.sin(angleBetweenTwoSides)) / 2;
      return area;
    }

    console.log("S = " +
      calculateAreaOfTriangle(sideA, sideB, angleBetweenTwoSides));
    break; */
  default:
    console.log("Please enter a valid number!");
}
