const prompt = require("prompt-sync")({ sigint: true });
function checkLeapYear(Year) {
  if ((Year % 4 == 0) || (Year % 400 == 0) && (Year % 100 != 0)) {
    console.log(Year +":"+ "Is  a Leap Year ");
  } else {
    console.log(Year +":"+ "Is not a Leap Year");
  }
}

const Year = prompt("Enter the year :");
checkLeapYear(Year);
