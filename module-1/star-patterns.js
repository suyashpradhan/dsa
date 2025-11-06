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
