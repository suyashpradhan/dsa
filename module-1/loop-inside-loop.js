// Variant 1
for (i = 0; i < 3; i++) {
  console.log(i);
  for (j = 0; j < 3; j++) {
    console.log("i", i, "j", j);
  }
}

console.log("--------------------");

// Variant 2
for (i = 0; i < 3; i++) {
  for (j = 0; j < i; j++) {
    console.log("i", i, "j", j);
  }
}

console.log("--------------------");
console.log("--------------------");

// Variant 3
for (i = 0; i < 3; i++) {
  for (j = i; j > 0; j--) {
    console.log("i", i, "j", j);
  }
}

console.log("--------------------");
console.log("--------------------");
console.log("--------------------");

// Variant 4
for (i = 0; i < 3; i++) {
  for (j = i; j < 1; j++) {
    console.log("i", i, "j", j);
  }
}

console.log("--------------------");
console.log("--------------------");
console.log("--------------------");
console.log("--------------------");

// Variant 5
for (i = 5; i > 0; i--) {
  for (j = 0; j < i; j++) {
    console.log("i", i, "j", j);
  }
}
