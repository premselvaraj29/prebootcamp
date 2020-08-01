console.log(typeof 1);
console.log(typeof 1.1);
console.log(typeof "1.1");
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof []);
console.log(typeof {});

const addOnFunction = function (value) {
  console.log("Printing the value");
  console.log(typeof value);
  value();
};

const main = function () {
  console.log("Hello world");
};

console.log(typeof main);
addOnFunction(main);

console.log(oddOrEven);
function oddOrEven() {
  console.log("ODD");
}
