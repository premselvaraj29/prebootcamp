class Calculator {
  constructor(num1, num2) {
    this._num1 = num1;
    this._num2 = num2;
  }
  add() {
    return this._num1 + this._num2;
  }
  subtract() {
    return this._num1 - this._num2;
  }
  divide() {
    return this._num1 / this._num2;
  }
  multiply() {
    return this._num1 * this._num2;
  }
}

let c = new Calculator(4, 5);
console.log(c.add());
console.log(c.multiply());
console.log(c.divide());
