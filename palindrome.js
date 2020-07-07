var readline = require("readline");

var input = [];

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.prompt();

rl.on("line", function (cmd) {
  input.push(cmd);
});

rl.on("close", function (cmd) {
  palindromic(parseInt(input[0]));
  process.exit(0);
});

const palindromic = function (n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    let palindromicList = [];
    let str = String(i);

    for (let j = str.length - 1; j >= 0; j--) {
      palindromicList.push(str[j]);
    }

    let newStr = palindromicList.join("");
    console.log(str, newStr);
    if (str === newStr) {
      count += 1;
    }
  }
  console.log("Number of palindromes ");
  console.log(count);
};
