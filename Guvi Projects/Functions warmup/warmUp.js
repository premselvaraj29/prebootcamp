var addFive = function (num) {
  return num + 5;
};
//console.log(addFive(0));

var numOpposite = function (num) {
  if (typeof num === "number" && Math.trunc(num) === num) {
    return num * -1;
  } else {
    return 0;
  }
};

//console.log(numOpposite(4.4));
var minutesToSeconds = function (minute) {
  return minute * 60;
};

//console.log(minutesToSeconds(3));

var toString = function (str) {
  return parseFloat(str);
};

//console.log(toString("4.4"));

var incrementNum = function (num) {
  if (typeof num == "number") {
    return num + 1;
  }
  return "It is not a number";
};

//console.log(incrementNum(1));

const returnFirstElement = (arr = []) => {
  if (arr.length > 0) {
    return arr[0];
  } else {
    return "Empty arr";
  }
};

//console.log(returnFirstElement([1, 2, 3]));

const hoursToSeconds = (hours) => {
  return hours * 60 * 60;
};

//console.log(hoursToSeconds(2));

const perimeterRect = (l, b) => {
  return 2 * l + 2 * b;
};

//console.log(perimeterRect(2, 3));

const isLessThan100 = (num1, num2) => {
  if (num1 + num2 < 100) {
    return true;
  } else {
    return false;
  }
};

//console.log(isLessThan100(10, 10));

const calcRemainder = (num1, num2) => {
  return num1 % num2;
};

//console.log(calcRemainder(12, 3));

const animalLegs = (T, H, P) => {
  const tLegs = 2;
  const hLegs = 4;
  const pLegs = 4;
  return T * tLegs + H * hLegs + P * pLegs;
};

//console.log(animalLegs(2, 3, 5));

const calcFramesPerSecond = (totalMins, framesPerSecond) => {
  return totalMins * framesPerSecond * 60;
};

//console.log(calcFramesPerSecond(10, 25));

const isDivisibleBy5 = (num) => {
  return num % 5 === 0;
};

//console.log(isDivisibleBy5(11));

const isEven = (num) => {
  return num % 2 === 0;
};

//console.log(isEven(11));

const isBothOdd = (num1, num2) => {
  return num1 % 2 != 0 && num2 % 2 != 0;
};

//console.log(isBothOdd(3, 7));

const getFullName = (firstName, lastName) => {
  return firstName + " " + lastName;
};

//console.log(getFullName("", "Kumar"));

const getLengthOfWord = (word) => {
  if (typeof word === "string") {
    return word.length;
  } else {
    return -1;
  }
};

//console.log(getLengthOfWord(7));

const isSameLength = (w1, w2) => {
  return w1.length === w2.length;
};

//console.log(isSameLength("Prem", "Kumar"));

const distanceBetweenTwoPoints = (x1, y1, x2, y2) => {
  const result = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  return result;
};

//console.log(distanceBetweenTwoPoints(100, 100, 400, 300));

const getNthElement = (arr, index) => {
  if (arr === [] || index > arr.length) {
    return undefined;
  } else {
    return arr[index - 1];
  }
};

//console.log(getNthElement([1, 2, 3], 3));

const getLastElement = (arr) => {
  if (arr === []) {
    return -1;
  } else {
    return arr[arr.length - 1];
  }
};

//console.log(getLastElement([1, 2, 3, 4]));

const getValue = (obj, key) => {
  if (key in obj) {
    return obj[key];
  } else {
    return undefined;
  }
};

//console.log(getValue({ name: "Prem", Age: 26 }, "Age"));

const addProperty = (obj, key) => {
  obj[key] = true;
  return obj;
};

//console.log(addProperty({ name: "prem" }, "age"));

const deleteProperty = (obj, key) => {
  if (key in obj) {
    delete obj[key];
    return obj;
  } else {
    return undefined;
  }
};

//console.log(deleteProperty({ name: "Prem", age: 45 }, "age"));

const returnArr = (arr) => {
  let countPositive = 0;
  let sumNegative = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      countPositive++;
    } else {
      sumNegative += arr[i];
    }
  }
  return [countPositive, sumNegative];
};

//console.log(returnArr([-5, 10, -3, 12, -9, 5, 90, 0, 1]));

const returnPositiveNumbers = (arr) => {
  let newArr = arr.filter((input) => input > 0);
  return newArr;
};

//console.log(returnPositiveNumbers([-5, 10, -3, 12, -9, 5, 90, 0, 1]));

const powerOfTwo = (pow) => {
  let result = [];
  for (let i = 0; i <= pow; i++) {
    result.push(2 ** i);
  }
  return result;
};
//console.log(powerOfTwo(3));

const maxNumArr = (arr) => {
  return Math.max(...arr);
};

//console.log(maxNumArr([-5, 10, -3, 12, -9, 5, 90, 0, 1]));

function reverseStr(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

//console.log(reverseStr("Prem"));

const mergeTwoArrays = (arr1, arr2) => {
  arr1.push(...arr2);
  return arr1;
};
//console.log(mergeTwoArrays([1, 2, 3], [4, 5]));

const sumOfNumbersInArray = (str) => {
  const newStrArr = str.split(" ");
  const newNumArr = newStrArr.map((input) => parseFloat(input));

  let sum = 0;
  for (let i = 0; i < newNumArr.length; i++) {
    sum += newNumArr[i];
  }

  return sum;
};

//console.log(sumOfNumbersInArray("1 2 3 4"));

function isPrime(num) {
  if (num > 1) {
    let loopCondition = Math.trunc(num / 2);
    for (let i = 2; i <= loopCondition; i++) {
      if (num % i == 0) {
        return false;
      }
    }
  }
  if (num === 1 || num === 0) {
    return false;
  }
  return true;
}

function print100PrimeNumbers() {
  let listPrime = [];
  for (let i = 2; i <= 100; i++) {
    if (isPrime(i)) {
      listPrime.push(i);
    }
  }
  return listPrime;
}
//console.log(print100PrimeNumbers());

function printPrimeNumbersStartAt(nPrimes, startAt) {
  let listPrime = [];
  let start = startAt;
  while (listPrime.length <= nPrimes) {
    if (isPrime(start)) {
      listPrime.push(start);
    }
    start = start + 1;
  }
  return listPrime;
}

console.log(printPrimeNumbersStartAt(100, 100));
