var numberOfLoops = Number(window.prompt("N = ", ""));
var numberOfIterations = Number(window.prompt("K = ", ""));
var loops = new Array(numberOfLoops);

function nestedLoops(currentLoop) {
  if (currentLoop === numberOfLoops) {
    printLoops();
    return;
  }

  for (let counter = 1; counter <= numberOfIterations; counter++) {
    loops[currentLoop] = counter;
    nestedLoops(currentLoop + 1);
  }
}

function printLoops() {
  for (let index = 0; index < numberOfLoops; index++) {
    var result = loops.join(" ");
    console.log(result);
  }
}

nestedLoops(0);
