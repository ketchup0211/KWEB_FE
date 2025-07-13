// Function
const isValidNumber = (num) => {
  if (Number(num) % 1 === 0) {
    return 0 < num && num < 10;
  }
  return false;
};

// TestCase
const testCases = [9, "4", "abc", -5, 3.5, 3 / 0];
const answers = [true, true, false, false, false, false];

const solution = testCases.map(isValidNumber);

const allPass = solution.every((result, idx) => result === answers[idx]);

console.log(allPass);
