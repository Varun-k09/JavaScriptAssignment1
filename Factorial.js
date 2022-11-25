const prompt = require("prompt-sync")({ signit: true });
const number = parseInt(prompt("Enter integer value:"));

if (number < 0) {
  console.log("No Factorial value for negative number");
} else if (number === 0) {
  console.log(`Factorial of ${number} is 1.`);
} else {
  let fact = 1;
  for (i = 1; i <= number; i++) {
    fact *= i;
  }
  console.log(`The Factorial of${number} is ${fact}`);
}
