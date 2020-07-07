function qn1() {
  var number = 2;
  console.log(`Square of ${number} is ${number ** 2}`);
}

function qn2() {
  var firstNum = 2;
  var secondNum = 3;
  console.log(`Before swapping ${firstNum} ${secondNum}`);
  var temp = firstNum;
  firstNum = secondNum;
  secondNum = temp;
  console.log(`After swapping ${firstNum} ${secondNum}`);
}

function qn3(firstNum, secondNum, thirdNum) {
  console.log(`${firstNum + secondNum + thirdNum}`);
}

qn3(1, 2, 3);

function qn4(celcius) {
  console.log(`${celcius} celcius to Farenheit is ${(celcius * 9) / 5 + 32}`);
}

qn4(28);

function qn5(meter) {
  console.log(`${meter} meter to miles is ${meter / 1609}`);
}

qn5(1609);

function qn6(pound) {
  console.log(`${pound} pound to kg is ${pound / 2.205}`);
}

qn6(2.205);

function qn7(numbers = []) {
  let sum = 0;
  for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(`Sum is ${sum}`);
}

qn7([1, 2, 3]);

function qn8() {}

function qn9(x, y) {
  console.log(`The power of ${x} to ${y} is ${x ** y}`);
}

qn9(2, 3);

function qn10(p, n, r) {
  console.log(
    `The simple interest for (p=${p},n=${n},r=${r}) is ${(p * n * r) / 100} `
  );
}

qn10(100, 10, 10);

function qn11(side) {
  console.log(
    `Area of equilateral triangle for side ${side} is ${
      (Math.sqrt(3) * side ** 2) / 4
    }`
  );
}

qn11(5);

function qn12(base, height) {
  console.log(
    `Area of isosceles triangle for (base=${base}, height=${height}) is ${
      (base * height) / 2
    }`
  );
}

qn12(4, 4);

function qn13(r) {
  console.log(`Volume of sphere for radius=${r} is ${(4 / 3) * 3.14 * r ** 3}`);
}

qn13(5);

function qn14(l, b, h) {
  console.log(`Volume of Prism for (l=${l},b=${b},h=${h}) is ${l * b * h})`);
}

qn14(2, 5, 2);

function qn15(base, height) {
  console.log(
    `Area of triangle for (base=${base}, height=${height}) is ${
      (base * height) / 2
    }`
  );
}

qn15(4, 4);

function qn16(actualCost, soldCost) {
  console.log(
    `For actual cost ${actualCost} and sold Cost ${soldCost} the discount is ${
      ((soldCost - actualCost) / actualCost) * 100
    } percentage`
  );
}

qn16(100, 90);

function qn17(r) {
  console.log(
    `For radius ${r} , the area is ${3.14 * r ** 2} the circumference is ${
      2 * 3.14 * r
    } the diameter is ${2 * r}`
  );
}

qn17(2);

function qn18(a, b) {
  console.log(`a is ${a} and b is ${b}`);
  console.log(`a+b is ${a + b}`);
  console.log(`a-b is ${a - b}`);
  console.log(`a*b is ${a * b}`);
  console.log(`a/b is ${a / b}`);
  console.log(`a%b is ${a % b}`);
}

qn18(10, 5);

function qn19() {
  var a = "*";
  for (i = 0; i < 5; i++) {
    console.log(a.repeat(5));
  }
}

qn19();

function qn20() {
  console.log(`For 100 units per day the monthly bill is ${100 * 30 * 10}`);
}

qn20();

function qn21(gpa = []) {
  let sum = 0;
  for (i = 0; i < gpa.length; i++) {
    sum += gpa[i];
  }
  let average = sum / gpa.length;
  console.log(`CGPA for ${gpa} is ${average}`);
}

qn21([2, 2, 2]);
