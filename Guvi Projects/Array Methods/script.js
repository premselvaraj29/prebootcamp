var request = new XMLHttpRequest();
var url_string = "https://restcountries.eu/rest/v2/all";

// Open a new connection, using the GET request on the URL endpoint
request.open("GET", url_string, true);
request.onerror = function () {
  console.log("** An error occurred during the transaction");
};
request.send();
request.onload = function () {
  // Begin accessing JSON data here
  // console.log(this.responseText);
  var data = JSON.parse(this.response);
  console.log(convertNamesToUppercase(data));
  console.log(populationLessThan2L(data));
  console.log(printDetails(data));
  console.log(totalPopulation(data));
  console.log(totalAsianPopulation(data));
  //var data = JSON.parse(this.response);
  //console.log(data);
};
function filterAsia(data) {
  const countriesAsia = data.filter((input) => input["region"] === "Asia");
  return countriesAsia;
}

function populationLessThan2L(data) {
  const filteredData = data.filter((input) => input["population"] < 200000);
  return filteredData;
}

function increasePopulation(data) {
  const newData = data.map((input) => {
    input["population"] = input["population"] + 100000;
    return input;
  });
  return newData;
}

function convertNamesToUppercase(data) {
  const newData = data.map((input) => {
    input["name"] = input["name"].toUpperCase();
    return input;
  });
  return newData;
}

function printDetails(data) {
  const newData = [];
  data.forEach((element) => {
    const newObj = {};
    newObj["name"] = element["name"];
    newObj["capital"] = element["capital"];
    newObj["flag"] = element["flag"];
    newData.push(newObj);
  });
  return newData;
}

function totalPopulation(data) {
  const populationArr = data.map((input) => input["population"]);
  const reducer = populationArr.reduce(
    (accumulator, currVal) => accumulator + currVal,
    0
  );
  return reducer;
}

function totalAsianPopulation(data) {
  const asianCountries = filterAsia(data);
  return totalPopulation(asianCountries);
}
