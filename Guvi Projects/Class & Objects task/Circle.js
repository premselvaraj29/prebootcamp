class Circle {
  constructor(radius = 1.0, color) {
    this._radius = radius;
    this._color = color;
  }

  get radius() {
    return this._radius;
  }

  get color() {
    return this._color;
  }

  set radius(val) {
    if (val > 0) {
      this._radius = val;
    }
  }

  set color(color) {
    this._color = color;
  }

  calculateArea() {
    return Math.PI * this._radius ** 2;
  }
}

const a1 = new Circle();

a1.radius = 5;

console.log(a1.calculateArea());
console.log(a1);
//9976105557
