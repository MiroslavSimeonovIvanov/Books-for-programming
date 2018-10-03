var a = [99];

function printResult() {
  "use strict";

  console.log(a);
}

for (i = 0; i < 99; i++) {
  a[i] = 98 - i;
}

printResult();

for (i = 0; i < 99; i++) {
  a[i] = a[a[i]];
}

printResult();
