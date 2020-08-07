const add = function (num1, num2) {
  return num1 + num2;
};
const subtract = function (num1, num2) {
  return num1 - num2;
};
const multiply = function (num1, num2) {
  return num1 * num2;
};
const divide = function (num1, num2) {
  return num1 / num2;
};

function callback(num1, num2, fn) {
  return fn(num1, num2);
}

console.log(callback(1, 2, add));
