// Write a function to reverse an integer
// 123 -> 321
// -123 -> -321

function reverseInteger(n) {
  let copy = n;
  let reverse = 0;
  n = Math.abs(n);
  while (n > 0) {
    remainder = n % 10;
    reverse = reverse * 10 + remainder;
    n = Math.floor(n / 10);
  }

  let limit = Math.pow(2, 31);

  if (rev < -limit || rev > limit) return 0;
  return copy < 0 ? -reverse : reverse;
}

console.log(reverseInteger(890344232323233));
