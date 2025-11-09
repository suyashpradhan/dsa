// Pattern 1
// * * * *
// * * * *
// * * * *
// * * * *
for (i = 0; i < 4; i++) {
  let row = "";

  for (j = 0; j < 4; j++) {
    row = row + "*";
  }
  console.log(row);
}

console.log("--------------------");

// Pattern 2
// *
// * *
// * * *
// * * * *
for (i = 0; i < 4; i++) {
  let row = "";

  for (j = 0; j <= i; j++) {
    row = row + "*";
  }
  console.log(row);
}

console.log("--------------------");

// Pattern 3
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
for (i = 0; i < 5; i++) {
  let row = "";
  for (j = 0; j <= i; j++) {
    row = row + (j + 1);
  }
  console.log(row);
}

console.log("--------------------");

// Pattern 4
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

for (i = 0; i < 5; i++) {
  let row = "";
  for (j = 0; j <= i; j++) {
    row = row + (i + 1);
  }
  console.log(row);
}

console.log("--------------------");

// Pattern 5
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

for (i = 4; i >= 0; i--) {
  let row = "";
  for (j = 0; j <= i; j++) {
    row = row + (j + 1);
  }
  console.log(row);
}

console.log("--------------------");

// Pattern 6
// - - - - *
// - - - * *
// - - * * *
// - * * * *
// * * * * *

let n = 5;
for (i = 0; i < n; i++) {
  let row = "";
  for (j = 0; j < n - (i + 1); j++) {
    row = row + " ";
  }
  for (k = 0; k <= i; k++) {
    row = row + "*";
  }
  console.log(row);
}

console.log("--------------------");

// Pattern 7
// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1

let number = 5;
for (i = 0; i < number; i++) {
  let row = "";
  let switchNumber = 1;
  for (j = 0; j <= i; j++) {
    row = row + switchNumber;

    if (switchNumber == 1) {
      switchNumber = 0;
    } else {
      switchNumber = 1;
    }
  }
  console.log(row);
}
