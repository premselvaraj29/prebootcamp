var obj = { name: "RajiniKanth", age: 33, hasPets: false };

function printAllValues(obj) {
  empty_list = [];
  for (let key in obj) {
    empty_list.push(obj[key]);
  }
  console.log(empty_list);
}

function printAllKeys(obj) {
  empty_list = [];
  for (let key in obj) {
    empty_list.push(key);
  }
  console.log(empty_list);
}

function convertObjToList(obj) {
  empty_list = [];
  for (let key in obj) {
    empty_list.push([key, obj[key]]);
  }
  console.log(empty_list);
}

convertObjToList(obj);

function parseList(list) {
  let firstVal = list[0];
  let lastVal = list[list.length - 1];
  let obj = { [firstVal]: lastVal };
  console.log(obj);
}
parseList(["GUVI", "I", "am", "Geek"]);

function parseListToObj(list) {
  let length = list.length;
  let obj = {};
  for (let i = 0; i < length; i++) {
    obj[list[i][0]] = list[i][1];
  }
  console.log(obj);
}
/*parseListToObj([
  ["make", "Ford"],
  ["model", "Mustang"],
  ["year", 1964],
]);*/

function parseListOfListsToObj(list = []) {
  let listObj = [];
  let length = list.length;
  for (let i = 0; i < length; i++) {
    let obj = {};
    let miniLength = list[i].length;
    for (let j = 0; j < miniLength; j++) {
      obj[list[i][j][0]] = list[i][j][1];
    }
    listObj.push(obj);
  }
  console.log(listObj);
}

parseListOfListsToObj([
  [
    ["firstName", "Vasanth"],
    ["lastName", "Raja"],
    ["age", 24],
    ["role", "JSWizard"],
  ],
  [
    ["firstName", "Sri"],
    ["lastName", "Devi"],
    ["age", 28],
    ["role", "Coder"],
  ],
]);

function assertObjectsEqual(actual, expected, testName) {
  let newExpected = JSON.stringify(expected);
  let newActual = JSON.stringify(actual);
  if (newExpected === newActual) {
    console.log("Passed");
  } else {
    console.log(
      `FAILED ${testName} Expected ${newExpected} but got ${newActual}`
    );
  }
}

assertObjectsEqual({ foo: 6, bar: 5 }, { foo: 5, bar: 6 }, "firstTest");

var securityQuestions = [
  {
    question: "What was your first pet’s name?",
    expectedAnswer: "FlufferNutter",
  },
  {
    question: "What was the model year of your first car?",
    expectedAnswer: "1985",
  },
  {
    question: "What city were you born in?",
    expectedAnswer: "NYC",
  },
];

function checkSecurityQuestion(securityQuestions = [], ques, ans) {
  let listLength = securityQuestions.length;
  for (let i = 0; i < listLength; i++) {
    if (securityQuestions[i]["question"] === ques) {
      return securityQuestions[i]["expectedAnswer"] === ans;
    }
  }
}
const ques = "What was your first pet’s name?";
const ans = "FlufferNutter";
const status = checkSecurityQuestion(securityQuestions, ques, ans);
console.log(status);

var students = [
  {
    name: "Siddharth Abhimanyu",
    age: 21,
  },
  { name: "Malar", age: 25 },
  { name: "Maari", age: 18 },
  { name: "Bhallala Deva", age: 17 },
  { name: "Baahubali", age: 16 },
  { name: "AAK chandran", age: 23 },
  { name: "Gabbar Singh", age: 33 },
  { name: "Mogambo", age: 53 },
  { name: "Munnabhai", age: 40 },
  { name: "Sher Khan", age: 20 },
  { name: "Chulbul Pandey", age: 19 },
  { name: "Anthony", age: 28 },
  { name: "Devdas", age: 56 },
];

function filterStudents(students = []) {
  let listLength = students.length;
  let emptyList;
  for (let i = 0; i < listLength; i++) {
    emptyList = students.filter((input) => input["age"] < 20);
  }
  console.log(emptyList);
}
filterStudents(students);
