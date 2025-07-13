//Function
const getDivisors = (num) => {
  const range = Math.sqrt(num);
  let divisors = [];
  for (let i = 1; i <= range; i++) {
    if (num % i === 0) {
      divisors.push(i);
      if (i * i !== num) {
        divisors.push(num / i);
      }
    }
  }
  return divisors.sort((a, b) => a - b);
};

// TestCase
const testCases = [5, 24, 196];
const answers = [
  [1, 5],
  [1, 2, 3, 4, 6, 8, 12, 24],
  [1, 2, 4, 7, 14, 28, 49, 98, 196],
];
const solutions = testCases.map(getDivisors);

const arraysEqual = (arr1, arr2) => {
  return (
    arr1.length === arr2.length &&
    arr1.every((element, idx) => element === arr2[idx])
  );
};

let allPass = true;
for (let i = 0; i < answers.length; i++) {
  if (!arraysEqual(answers[i], solutions[i])) allPass = false;
}

console.log(allPass);
