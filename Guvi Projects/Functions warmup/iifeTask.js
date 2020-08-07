//Print odd Numbers
console.log(
  (function (arr) {
    return arr.filter((input) => input % 2 != 0);
  })([1, 2, 3, 4])
);

//Arr to upperCase
console.log(
  (function (arr) {
    return arr.map((input = "") => input.toUpperCase());
  })(["Prem", "Kumar"])
);

//Sum of all numbers
console.log(
  (function (arr = []) {
    const reducer = arr.reduce(
      (accumulator, currValue = 0) => accumulator + currValue
    );
    return reducer;
  })([1, 2, 3, 4])
);

//Return palindromes in array
console.log(
  (function (arr) {
    return arr.filter((input) => isPalindrome(input) === true);
  })(["malayalam", "madam", "silent"])
);

function isPalindrome(str1 = "") {
  let newStr = "";
  for (let i = str1.length - 1; i >= 0; i--) {
    newStr += str1[i];
  }

  return str1 === newStr;
}

//Remove Duplicates
console.log(
  (function (arr) {
    let arrSet = new Set(arr);
    let newList = [...arrSet];
    return newList;
  })([1, 1, 23, 45])
);

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

//filter prime numbers from array
console.log(
  (function (arr) {
    return arr.filter((input) => isPrime(input));
  })([1, 2, 3, 4, 5, 6, 7, 23])
);

//rotate array by K times
console.log(
  (function (arr, times) {
    let newArr = [];
    for (let i = 0; i < times; i++) {
      newArr.push(arr.shift());
    }
    arr.push(...newArr);
    return arr;
  })([1, 2, 3, 4, 5], 2)
);
