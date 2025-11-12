// Write a function to calculate palindrome number
// 2552 -> 2552 -> true
// 123 -> 321 -> false

let remainder = 0;

function palindromeCheck(n) {
  if (n < 0) return false;

  let numberCopy = n;
  let reverse = 0;
  while (n > 0) {
    remainder = n % 10;
    reverse = reverse * 10 + remainder;
    n = Math.floor(n / 10);
  }

  return reverse === numberCopy;
}

palindromeCheck(2552);
