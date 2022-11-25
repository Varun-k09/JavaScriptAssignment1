const prompt = require("prompt-sync")({ signit: true });
let Celsius = prompt("Enter the Celsius value:");
let Fahrenhet = prompt("Enter the Fahrenhet value:");

const celsiusTofahrenhet = function (Celsius) {
  const cTemp = Celsius;
  const ToFahr = cTemp * 1.8 + 32;
  const msg1 = `${cTemp}\xB0C is ${ToFahr} \xB0F .`;
  return msg1;
};

const fahrenhetTocelsius = function (Fahrenhet) {
  const fTemp = Fahrenhet;
  const ToCel = (fTemp - 32) * (5 / 9);
  const msg2 = `${fTemp}\xB0F is ${ToCel} \xB0C .`;
  return msg2;
};

console.log(celsiusTofahrenhet(Celsius));
console.log(fahrenhetTocelsius(Fahrenhet));
