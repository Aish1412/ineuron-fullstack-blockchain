// 1. Leap Year Check
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log("Is 2024 a leap year? ", isLeapYear(2024));

// 2. Temperature Conversion
function celsiusToFahrenheit(c) {
  return (c * 9/5) + 32;
}
function fahrenheitToCelsius(f) {
  return (f - 32) * 5/9;
}
console.log("60°C is", celsiusToFahrenheit(60), "°F");
console.log("45°F is", fahrenheitToCelsius(45), "°C");

// 3. Factorial Program
function factorial(n) {
  if (n < 0) return "Undefined";
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}
console.log("Factorial of 5 is", factorial(5));

