// NOT i < n.length
// n is a number, not an array

function countBy(x, n) {
  let z = [];

  for (let i = 1; i <= n; i++) {
    if (x > 0 && n > 0) {
      z.push(x * i);
    } else break;
  }
  return z;
}

console.log(countBy(1, 10));
console.log(countBy(2, 5));
console.log(countBy(-1, 10));
console.log(countBy(1, -10));

// Output

// countBy(1, 10) === [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// countBy(2, 5) === [2, 4, 6, 8, 10];

// Prompt: return array of first n multiples of x
