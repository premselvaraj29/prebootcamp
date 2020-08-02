var request = new XMLHttpRequest();
var url_string =
  "https://api.openweathermap.org/data/2.5/weather?q=London&appid=b2135de37c7ce8fb4a69925e762a4519";
// Open a new connection, using the GET request on the URL endpoint
request.open("GET", url_string, true);
request.onerror = function () {
  console.log("** An error occurred during the transaction");
};
request.send();
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  console.log(data);
};
