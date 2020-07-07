/* let counter = 0;

function recurse() {
  if (counter === 3) return "done";
  counter++;
  console.log(counter);
  return recurse();
}
console.log(recurse());
 */

/* let str = "";
function strBuilder(char, num) {
  if (str.length === num) return str;
  str += char;
  return strBuilder(char, num);
}
console.log(strBuilder("g", 8)); */

/* function factorial(num, product = 1) {
  //base case
  if (num === 1) return product;
  const newProduct = product * num;
  const newNum = num - 1;

  return factorial(newNum, newProduct);
}

console.log(factorial(4)); */

/* function fibonaci(fList, num) {
  //base case

  if (fList.length === num) return fList;

  if (fList.length === 1) {
    const newSum = fList[fList.length - 1] + 1;
    const newList = [...fList, newSum];
    return fibonaci(newList, num);
  } else {
    const newSum = fList[fList.length - 1] + fList[fList.length - 2];
    const newList = [...fList, newSum];
    return fibonaci(newList, num);
  }
}

console.log(fibonaci([0], (num = 10))); */
//

function factorial(num, product = 1) {
  //basecase
  if (num === 1) return product;

  const newProduct = product * num;
  const newNum = num - 1;

  return factorial(newNum, newProduct);
}

console.log(factorial(4));
