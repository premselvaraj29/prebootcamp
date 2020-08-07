var oddNumbers = function (arr) {
  return arr.filter((input) => input % 2 != 0);
};

//console.log(oddNumbers([1, 2, 3, 4]));

var strToCaps = function (arr) {
  return arr.map((input = "") => input.toUpperCase());
};

//console.log(strToCaps(["Prem", "Kumar"]));

const sumOfAllNumbers = function (arr = []) {
  const reducer = arr.reduce(
    (accumulator, currValue = 0) => accumulator + currValue
  );
  return reducer;
};

//console.log(sumOfAllNumbers([1, 2, 3, 4]));

const returnPalindromes = function (arr) {
  return arr.filter((input) => isPalindrome(input) === true);
};
function isPalindrome(str1 = "") {
  let newStr = "";
  for (let i = str1.length - 1; i >= 0; i--) {
    newStr += str1[i];
  }

  return str1 === newStr;
}

//console.log(returnPalindromes(["malayalam", "madam", "silent"]));

const removeDuplicates = function (arr) {
  let arrSet = new Set(arr);
  let newList = [...arrSet];
  return newList;
};
//console.log(removeDuplicates([1, 1, 23, 45]));

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

const checkPrimeNums = function (arr) {
  return arr.filter((input) => isPrime(input));
};

//console.log(checkPrimeNums([1, 2, 3, 4, 5, 6, 7, 23]));

const rotateArray = function (arr, times) {
  let newArr = [];
  for (let i = 0; i < times; i++) {
    newArr.push(arr.shift());
  }
  arr.push(...newArr);
  return arr;
};

console.log(rotateArray([1, 2, 3, 4, 5], 2));
